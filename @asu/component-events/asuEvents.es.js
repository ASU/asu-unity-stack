import _t, { forwardRef as bn, createContext as GS, useState as tu, useRef as Pm, useId as t1, useCallback as k0, useEffect as au, Children as n1, isValidElement as l1, createElement as a1, useContext as r1 } from "react";
import i1 from "react-dom";
function VS(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var Cy = { exports: {} }, fm = {};
var ob;
function QS() {
  if (ob) return fm;
  ob = 1;
  var i = Symbol.for("react.transitional.element"), o = Symbol.for("react.fragment");
  function c(d, s, y) {
    var T = null;
    if (y !== void 0 && (T = "" + y), s.key !== void 0 && (T = "" + s.key), "key" in s) {
      y = {};
      for (var _ in s)
        _ !== "key" && (y[_] = s[_]);
    } else y = s;
    return s = y.ref, {
      $$typeof: i,
      type: d,
      key: T,
      ref: s !== void 0 ? s : null,
      props: y
    };
  }
  return fm.Fragment = o, fm.jsx = c, fm.jsxs = c, fm;
}
var ub;
function FS() {
  return ub || (ub = 1, Cy.exports = QS()), Cy.exports;
}
var Jl = FS();
function cb(i, o) {
  (o == null || o > i.length) && (o = i.length);
  for (var c = 0, d = Array(o); c < o; c++) d[c] = i[c];
  return d;
}
function XS(i) {
  if (Array.isArray(i)) return i;
}
function $S(i, o) {
  var c = i == null ? null : typeof Symbol < "u" && i[Symbol.iterator] || i["@@iterator"];
  if (c != null) {
    var d, s, y, T, _ = [], x = !0, N = !1;
    try {
      if (y = (c = c.call(i)).next, o !== 0) for (; !(x = (d = y.call(c)).done) && (_.push(d.value), _.length !== o); x = !0) ;
    } catch (U) {
      N = !0, s = U;
    } finally {
      try {
        if (!x && c.return != null && (T = c.return(), Object(T) !== T)) return;
      } finally {
        if (N) throw s;
      }
    }
    return _;
  }
}
function PS() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ZS(i, o) {
  return XS(i) || $S(i, o) || KS(i, o) || PS();
}
function KS(i, o) {
  if (i) {
    if (typeof i == "string") return cb(i, o);
    var c = {}.toString.call(i).slice(8, -1);
    return c === "Object" && i.constructor && (c = i.constructor.name), c === "Map" || c === "Set" ? Array.from(i) : c === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c) ? cb(i, o) : void 0;
  }
}
const o1 = Object.entries, sb = Object.setPrototypeOf, IS = Object.isFrozen, u1 = Object.getPrototypeOf, c1 = Object.getOwnPropertyDescriptor;
let gl = Object.freeze, ea = Object.seal, As = Object.create, s1 = typeof Reflect < "u" && Reflect, E0 = s1.apply, A0 = s1.construct;
gl || (gl = function(o) {
  return o;
});
ea || (ea = function(o) {
  return o;
});
E0 || (E0 = function(o, c) {
  for (var d = arguments.length, s = new Array(d > 2 ? d - 2 : 0), y = 2; y < d; y++) s[y - 2] = arguments[y];
  return o.apply(c, s);
});
A0 || (A0 = function(o) {
  for (var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), s = 1; s < c; s++) d[s - 1] = arguments[s];
  return new o(...d);
});
const Vo = Sn(Array.prototype.forEach), WS = Sn(Array.prototype.lastIndexOf), fb = Sn(Array.prototype.pop), dm = Sn(Array.prototype.push), JS = Sn(Array.prototype.slice), ew = Sn(Array.prototype.splice), Os = Array.isArray, Ny = f1(Set), zy = Sn(Set.prototype.add), pm = Sn(Set.prototype.has), is = Sn(String.prototype.toLowerCase), Dy = Sn(String.prototype.toString), db = Sn(String.prototype.match), mm = Sn(String.prototype.replace), pb = Sn(String.prototype.indexOf), tw = Sn(String.prototype.trim), nw = Sn(Number.prototype.toString), lw = Sn(Boolean.prototype.toString), mb = typeof BigInt > "u" ? null : Sn(BigInt.prototype.toString), hb = typeof Symbol > "u" ? null : Sn(Symbol.prototype.toString), ka = Sn(Object.prototype.hasOwnProperty), hm = Sn(Object.prototype.toString), Il = Sn(RegExp.prototype.test), Qo = f1(TypeError);
function Sn(i) {
  return function(o) {
    o instanceof RegExp && (o.lastIndex = 0);
    for (var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), s = 1; s < c; s++) d[s - 1] = arguments[s];
    return E0(i, o, d);
  };
}
function f1(i) {
  return function() {
    for (var o = arguments.length, c = new Array(o), d = 0; d < o; d++) c[d] = arguments[d];
    return A0(i, c);
  };
}
function bt(i, o) {
  let c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : is;
  if (sb && sb(i, null), !Os(o)) return i;
  let d = o.length;
  for (; d--; ) {
    let s = o[d];
    if (typeof s == "string") {
      const y = c(s);
      y !== s && (IS(o) || (o[d] = y), s = y);
    }
    i[s] = !0;
  }
  return i;
}
function aw(i) {
  for (let o = 0; o < i.length; o++) ka(i, o) || (i[o] = null);
  return i;
}
function yr(i) {
  const o = As(null);
  for (const d of o1(i)) {
    var c = ZS(d, 2);
    const s = c[0], y = c[1];
    ka(i, s) && (Os(y) ? o[s] = aw(y) : y && typeof y == "object" && y.constructor === Object ? o[s] = yr(y) : o[s] = y);
  }
  return o;
}
function rw(i) {
  switch (typeof i) {
    case "string":
      return i;
    case "number":
      return nw(i);
    case "boolean":
      return lw(i);
    case "bigint":
      return mb ? mb(i) : "0";
    case "symbol":
      return hb ? hb(i) : "Symbol()";
    case "undefined":
      return hm(i);
    case "function":
    case "object": {
      if (i === null) return hm(i);
      const o = i, c = vr(o, "toString");
      if (typeof c == "function") {
        const d = c(o);
        return typeof d == "string" ? d : hm(d);
      }
      return hm(i);
    }
    default:
      return hm(i);
  }
}
function vr(i, o) {
  for (; i !== null; ) {
    const d = c1(i, o);
    if (d) {
      if (d.get) return Sn(d.get);
      if (typeof d.value == "function") return Sn(d.value);
    }
    i = u1(i);
  }
  function c() {
    return null;
  }
  return c;
}
function iw(i, o) {
  for (; i !== null; ) {
    const c = c1(i, o);
    if (c) return c.get ? Sn(c.get) : null;
    i = u1(i);
  }
  return null;
}
function ow(i) {
  try {
    return Il(i, ""), !0;
  } catch {
    return !1;
  }
}
const gb = gl([
  "a",
  "abbr",
  "acronym",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "bdi",
  "bdo",
  "big",
  "blink",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "center",
  "cite",
  "code",
  "col",
  "colgroup",
  "content",
  "data",
  "datalist",
  "dd",
  "decorator",
  "del",
  "details",
  "dfn",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "element",
  "em",
  "fieldset",
  "figcaption",
  "figure",
  "font",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meter",
  "nav",
  "nobr",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "search",
  "section",
  "select",
  "shadow",
  "slot",
  "small",
  "source",
  "spacer",
  "span",
  "strike",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "tr",
  "track",
  "tt",
  "u",
  "ul",
  "var",
  "video",
  "wbr"
]), Ry = gl([
  "svg",
  "a",
  "altglyph",
  "altglyphdef",
  "altglyphitem",
  "animatecolor",
  "animatemotion",
  "animatetransform",
  "circle",
  "clippath",
  "defs",
  "desc",
  "ellipse",
  "enterkeyhint",
  "exportparts",
  "filter",
  "font",
  "g",
  "glyph",
  "glyphref",
  "hkern",
  "image",
  "inputmode",
  "line",
  "lineargradient",
  "marker",
  "mask",
  "metadata",
  "mpath",
  "part",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialgradient",
  "rect",
  "stop",
  "style",
  "switch",
  "symbol",
  "text",
  "textpath",
  "title",
  "tref",
  "tspan",
  "view",
  "vkern"
]), My = gl([
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feDropShadow",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence"
]), uw = gl([
  "animate",
  "color-profile",
  "cursor",
  "discard",
  "font-face",
  "font-face-format",
  "font-face-name",
  "font-face-src",
  "font-face-uri",
  "foreignobject",
  "hatch",
  "hatchpath",
  "mesh",
  "meshgradient",
  "meshpatch",
  "meshrow",
  "missing-glyph",
  "script",
  "set",
  "solidcolor",
  "unknown",
  "use"
]), Ly = gl([
  "math",
  "menclose",
  "merror",
  "mfenced",
  "mfrac",
  "mglyph",
  "mi",
  "mlabeledtr",
  "mmultiscripts",
  "mn",
  "mo",
  "mover",
  "mpadded",
  "mphantom",
  "mroot",
  "mrow",
  "ms",
  "mspace",
  "msqrt",
  "mstyle",
  "msub",
  "msup",
  "msubsup",
  "mtable",
  "mtd",
  "mtext",
  "mtr",
  "munder",
  "munderover",
  "mprescripts"
]), cw = gl([
  "maction",
  "maligngroup",
  "malignmark",
  "mlongdiv",
  "mscarries",
  "mscarry",
  "msgroup",
  "mstack",
  "msline",
  "msrow",
  "semantics",
  "annotation",
  "annotation-xml",
  "mprescripts",
  "none"
]), yb = gl(["#text"]), bb = gl([
  "accept",
  "action",
  "align",
  "alt",
  "autocapitalize",
  "autocomplete",
  "autopictureinpicture",
  "autoplay",
  "background",
  "bgcolor",
  "border",
  "capture",
  "cellpadding",
  "cellspacing",
  "checked",
  "cite",
  "class",
  "clear",
  "color",
  "cols",
  "colspan",
  "command",
  "commandfor",
  "controls",
  "controlslist",
  "coords",
  "crossorigin",
  "datetime",
  "decoding",
  "default",
  "dir",
  "disabled",
  "disablepictureinpicture",
  "disableremoteplayback",
  "download",
  "draggable",
  "enctype",
  "enterkeyhint",
  "exportparts",
  "face",
  "for",
  "headers",
  "height",
  "hidden",
  "high",
  "href",
  "hreflang",
  "id",
  "inert",
  "inputmode",
  "integrity",
  "ismap",
  "kind",
  "label",
  "lang",
  "list",
  "loading",
  "loop",
  "low",
  "max",
  "maxlength",
  "media",
  "method",
  "min",
  "minlength",
  "multiple",
  "muted",
  "name",
  "nonce",
  "noshade",
  "novalidate",
  "nowrap",
  "open",
  "optimum",
  "part",
  "pattern",
  "placeholder",
  "playsinline",
  "popover",
  "popovertarget",
  "popovertargetaction",
  "poster",
  "preload",
  "pubdate",
  "radiogroup",
  "readonly",
  "rel",
  "required",
  "rev",
  "reversed",
  "role",
  "rows",
  "rowspan",
  "spellcheck",
  "scope",
  "selected",
  "shape",
  "size",
  "sizes",
  "slot",
  "span",
  "srclang",
  "start",
  "src",
  "srcset",
  "step",
  "style",
  "summary",
  "tabindex",
  "title",
  "translate",
  "type",
  "usemap",
  "valign",
  "value",
  "width",
  "wrap",
  "xmlns"
]), Uy = gl([
  "accent-height",
  "accumulate",
  "additive",
  "alignment-baseline",
  "amplitude",
  "ascent",
  "attributename",
  "attributetype",
  "azimuth",
  "basefrequency",
  "baseline-shift",
  "begin",
  "bias",
  "by",
  "class",
  "clip",
  "clippathunits",
  "clip-path",
  "clip-rule",
  "color",
  "color-interpolation",
  "color-interpolation-filters",
  "color-profile",
  "color-rendering",
  "cx",
  "cy",
  "d",
  "dx",
  "dy",
  "diffuseconstant",
  "direction",
  "display",
  "divisor",
  "dominant-baseline",
  "dur",
  "edgemode",
  "elevation",
  "end",
  "exponent",
  "fill",
  "fill-opacity",
  "fill-rule",
  "filter",
  "filterunits",
  "flood-color",
  "flood-opacity",
  "font-family",
  "font-size",
  "font-size-adjust",
  "font-stretch",
  "font-style",
  "font-variant",
  "font-weight",
  "fx",
  "fy",
  "g1",
  "g2",
  "glyph-name",
  "glyphref",
  "gradientunits",
  "gradienttransform",
  "height",
  "href",
  "id",
  "image-rendering",
  "in",
  "in2",
  "intercept",
  "k",
  "k1",
  "k2",
  "k3",
  "k4",
  "kerning",
  "keypoints",
  "keysplines",
  "keytimes",
  "lang",
  "lengthadjust",
  "letter-spacing",
  "kernelmatrix",
  "kernelunitlength",
  "lighting-color",
  "local",
  "marker-end",
  "marker-mid",
  "marker-start",
  "markerheight",
  "markerunits",
  "markerwidth",
  "maskcontentunits",
  "maskunits",
  "max",
  "mask",
  "mask-type",
  "media",
  "method",
  "mode",
  "min",
  "name",
  "numoctaves",
  "offset",
  "operator",
  "opacity",
  "order",
  "orient",
  "orientation",
  "origin",
  "overflow",
  "paint-order",
  "path",
  "pathlength",
  "patterncontentunits",
  "patterntransform",
  "patternunits",
  "pointer-events",
  "points",
  "preservealpha",
  "preserveaspectratio",
  "primitiveunits",
  "r",
  "rx",
  "ry",
  "radius",
  "refx",
  "refy",
  "repeatcount",
  "repeatdur",
  "restart",
  "result",
  "rotate",
  "scale",
  "seed",
  "shape-rendering",
  "slope",
  "specularconstant",
  "specularexponent",
  "spreadmethod",
  "startoffset",
  "stddeviation",
  "stitchtiles",
  "stop-color",
  "stop-opacity",
  "stroke-dasharray",
  "stroke-dashoffset",
  "stroke-linecap",
  "stroke-linejoin",
  "stroke-miterlimit",
  "stroke-opacity",
  "stroke",
  "stroke-width",
  "style",
  "surfacescale",
  "systemlanguage",
  "tabindex",
  "tablevalues",
  "targetx",
  "targety",
  "transform",
  "transform-origin",
  "text-anchor",
  "text-decoration",
  "text-orientation",
  "text-rendering",
  "textlength",
  "type",
  "u1",
  "u2",
  "unicode",
  "values",
  "vector-effect",
  "viewbox",
  "visibility",
  "version",
  "vert-adv-y",
  "vert-origin-x",
  "vert-origin-y",
  "width",
  "word-spacing",
  "wrap",
  "writing-mode",
  "xchannelselector",
  "ychannelselector",
  "x",
  "x1",
  "x2",
  "xmlns",
  "y",
  "y1",
  "y2",
  "z",
  "zoomandpan"
]), vb = gl([
  "accent",
  "accentunder",
  "align",
  "bevelled",
  "close",
  "columnalign",
  "columnlines",
  "columnspacing",
  "columnspan",
  "denomalign",
  "depth",
  "dir",
  "display",
  "displaystyle",
  "encoding",
  "fence",
  "frame",
  "height",
  "href",
  "id",
  "largeop",
  "length",
  "linethickness",
  "lquote",
  "lspace",
  "mathbackground",
  "mathcolor",
  "mathsize",
  "mathvariant",
  "maxsize",
  "minsize",
  "movablelimits",
  "notation",
  "numalign",
  "open",
  "rowalign",
  "rowlines",
  "rowspacing",
  "rowspan",
  "rspace",
  "rquote",
  "scriptlevel",
  "scriptminsize",
  "scriptsizemultiplier",
  "selection",
  "separator",
  "separators",
  "stretchy",
  "subscriptshift",
  "supscriptshift",
  "symmetric",
  "voffset",
  "width",
  "xmlns"
]), qm = gl([
  "xlink:href",
  "xml:id",
  "xlink:title",
  "xml:space",
  "xmlns:xlink"
]), sw = ea(/{{[\w\W]*|^[\w\W]*}}/g), fw = ea(/<%[\w\W]*|^[\w\W]*%>/g), dw = ea(/\${[\w\W]*/g), pw = ea(/^data-[\-\w.\u00B7-\uFFFF]+$/), mw = ea(/^aria-[\-\w]+$/), Sb = ea(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), hw = ea(/^(?:\w+script|data):/i), gw = ea(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), yw = ea(/^html$/i), bw = ea(/^[a-z][.\w]*(-[.\w]+)+$/i), jy = ea(/<[/\w!]/g), wb = ea(/<[/\w]/g), vw = ea(/<\/no(script|embed|frames)/i), Tb = ea(/\/>/i), qn = {
  element: 1,
  attribute: 2,
  text: 3,
  cdataSection: 4,
  entityReference: 5,
  entityNode: 6,
  processingInstruction: 7,
  comment: 8,
  document: 9,
  documentType: 10,
  documentFragment: 11,
  notation: 12
}, Sw = gl(bt({}, [
  "style",
  "script",
  "xmp",
  "iframe",
  "noembed",
  "noframes",
  "plaintext",
  "noscript"
])), ww = function() {
  return typeof window > "u" ? null : window;
}, Tw = function(o, c) {
  if (typeof o != "object" || typeof o.createPolicy != "function") return null;
  let d = null;
  const s = "data-tt-policy-suffix";
  c && c.hasAttribute(s) && (d = c.getAttribute(s));
  const y = "dompurify" + (d ? "#" + d : "");
  try {
    return o.createPolicy(y, {
      createHTML(T) {
        return T;
      },
      createScriptURL(T) {
        return T;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + y + " could not be created."), null;
  }
}, kb = function() {
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
}, Ko = function(o, c, d, s) {
  return ka(o, c) && Os(o[c]) ? bt(s.base ? yr(s.base) : {}, o[c], s.transform) : d;
}, Hy = function(o, c, d) {
  const s = ka(o, c) ? o[c] : void 0;
  return s && typeof s == "object" ? yr(s) : d();
};
function d1() {
  let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ww();
  const o = (m) => d1(m);
  if (o.version = "3.4.17", o.removed = [], !i || !i.document || i.document.nodeType !== qn.document || !i.Element)
    return o.isSupported = !1, o;
  let c = i.document;
  const d = c, s = d.currentScript;
  i.DocumentFragment;
  const y = i.HTMLTemplateElement, T = i.Node, _ = i.Element, x = i.NodeFilter;
  i.NamedNodeMap === void 0 && (i.NamedNodeMap || i.MozNamedAttrMap), i.HTMLFormElement;
  const N = i.DOMParser, U = i.trustedTypes, L = _.prototype, R = vr(L, "cloneNode"), ne = vr(L, "remove"), G = vr(L, "removeAttributeNode"), F = vr(L, "nextSibling"), W = vr(L, "childNodes"), ee = vr(L, "parentNode"), Y = vr(L, "shadowRoot"), ve = vr(L, "attributes"), le = T && T.prototype ? vr(T.prototype, "nodeType") : null, ae = T && T.prototype ? vr(T.prototype, "nodeName") : null, $ = T && T.prototype ? vr(T.prototype, "ownerDocument") : null, B = function(p) {
    return le ? le(p) : p.nodeType;
  }, K = function(p) {
    return ae ? ae(p) : p.nodeName;
  }, Ae = iw(L, "namespaceURI"), Fe = function(p) {
    return Ae ? Ae(p) : p.namespaceURI;
  };
  if (typeof y == "function") {
    const m = c.createElement("template");
    m.content && m.content.ownerDocument && (c = m.content.ownerDocument);
  }
  let ye, je = "", Ee, yt = !1, Qe = 0;
  const H = function() {
    if (Qe > 0) throw Qo('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, M = function(p) {
    H(), Qe++;
    try {
      return ye.createHTML(p);
    } finally {
      Qe--;
    }
  }, q = function(p) {
    H(), Qe++;
    try {
      return ye.createScriptURL(p);
    } finally {
      Qe--;
    }
  }, ue = function() {
    return yt || (Ee = Tw(U, s), yt = !0), Ee;
  }, ie = c, Ye = ie.implementation, Se = ie.createNodeIterator, ce = ie.createDocumentFragment, P = ie.getElementsByTagName, be = d.importNode;
  let se = kb();
  o.isSupported = typeof o1 == "function" && typeof ee == "function" && Ye && Ye.createHTMLDocument !== void 0;
  const at = sw, Cn = fw, kn = dw, ct = pw, kr = mw, Aa = hw, xa = gw, wi = bw;
  let Nn = Sb, Oe = null;
  const na = bt({}, [
    ...gb,
    ...Ry,
    ...My,
    ...Ly,
    ...yb
  ]);
  let Re = null;
  const _a = bt({}, [
    ...bb,
    ...Uy,
    ...vb,
    ...qm
  ]);
  let Ot = Object.seal(As(null, {
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
  })), Vn = null, Oa = null;
  const zn = Object.seal(As(null, {
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
  let Ti = !0, st = !0, ki = !1, Ca = !0, tn = !1, nn = !0, Qn = !1, Na = !1, za = null, Da = null, Fn = !1, Pe = !1, Yt = !1, rt = !1, Ei = !0, Ai = !1;
  const xi = "user-content-";
  let bl = !0, vl = !1, ln = null, Ct = {}, an = null;
  const Sl = bt({}, [
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
    "selectedcontent",
    "style",
    "svg",
    "template",
    "thead",
    "title",
    "video",
    "xmp"
  ]);
  let _i = null;
  const Er = bt({}, [
    "audio",
    "video",
    "img",
    "source",
    "image",
    "track"
  ]);
  let Ra = null;
  const wl = bt({}, [
    "alt",
    "class",
    "for",
    "id",
    "label",
    "name",
    "pattern",
    "placeholder",
    "role",
    "summary",
    "title",
    "value",
    "style",
    "xmlns"
  ]), Ma = "http://www.w3.org/1998/Math/MathML", la = "http://www.w3.org/2000/svg", Gt = "http://www.w3.org/1999/xhtml";
  let Xn = Gt, aa = !1, ra = null;
  const Oi = bt({}, [
    Ma,
    la,
    Gt
  ], Dy), Ar = gl([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext"
  ]);
  let rn = bt({}, Ar);
  const Ze = gl(["annotation-xml"]);
  let it = bt({}, Ze);
  const Tl = bt({}, [
    "title",
    "style",
    "font",
    "a",
    "script"
  ]);
  let $n = null;
  const ru = ["application/xhtml+xml", "text/html"], iu = "text/html";
  let He = null, on = null;
  const xr = c.createElement("form"), Pn = function(p) {
    return p instanceof RegExp || p instanceof Function;
  }, Dn = function() {
    let p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (on && on === p) return;
    (!p || typeof p != "object") && (p = {}), p = yr(p), $n = ru.indexOf(p.PARSER_MEDIA_TYPE) === -1 ? iu : p.PARSER_MEDIA_TYPE, He = $n === "application/xhtml+xml" ? Dy : is, Oe = Ko(p, "ALLOWED_TAGS", na, { transform: He }), Re = Ko(p, "ALLOWED_ATTR", _a, { transform: He }), ra = Ko(p, "ALLOWED_NAMESPACES", Oi, { transform: Dy }), Ra = Ko(p, "ADD_URI_SAFE_ATTR", wl, {
      transform: He,
      base: wl
    }), _i = Ko(p, "ADD_DATA_URI_TAGS", Er, {
      transform: He,
      base: Er
    }), an = Ko(p, "FORBID_CONTENTS", Sl, { transform: He }), Vn = Ko(p, "FORBID_TAGS", yr({}), { transform: He }), Oa = Ko(p, "FORBID_ATTR", yr({}), { transform: He }), Ct = ka(p, "USE_PROFILES") ? p.USE_PROFILES && typeof p.USE_PROFILES == "object" ? yr(p.USE_PROFILES) : p.USE_PROFILES : !1, Ti = p.ALLOW_ARIA_ATTR !== !1, st = p.ALLOW_DATA_ATTR !== !1, ki = p.ALLOW_UNKNOWN_PROTOCOLS || !1, Ca = p.ALLOW_SELF_CLOSE_IN_ATTR !== !1, tn = p.SAFE_FOR_TEMPLATES || !1, nn = p.SAFE_FOR_XML !== !1, Qn = p.WHOLE_DOCUMENT || !1, Pe = p.RETURN_DOM || !1, Yt = p.RETURN_DOM_FRAGMENT || !1, rt = p.RETURN_TRUSTED_TYPE || !1, Fn = p.FORCE_BODY || !1, Ei = p.SANITIZE_DOM !== !1, Ai = p.SANITIZE_NAMED_PROPS || !1, bl = p.KEEP_CONTENT !== !1, vl = p.IN_PLACE || !1, Nn = ow(p.ALLOWED_URI_REGEXP) ? p.ALLOWED_URI_REGEXP : Sb, Xn = typeof p.NAMESPACE == "string" ? p.NAMESPACE : Gt, rn = Hy(p, "MATHML_TEXT_INTEGRATION_POINTS", () => bt({}, Ar)), it = Hy(p, "HTML_INTEGRATION_POINTS", () => bt({}, Ze));
    const S = Hy(p, "CUSTOM_ELEMENT_HANDLING", () => As(null));
    if (Ot = As(null), ka(S, "tagNameCheck") && Pn(S.tagNameCheck) && (Ot.tagNameCheck = S.tagNameCheck), ka(S, "attributeNameCheck") && Pn(S.attributeNameCheck) && (Ot.attributeNameCheck = S.attributeNameCheck), ka(S, "allowCustomizedBuiltInElements") && typeof S.allowCustomizedBuiltInElements == "boolean" && (Ot.allowCustomizedBuiltInElements = S.allowCustomizedBuiltInElements), ea(Ot), tn && (st = !1), Yt && (Pe = !0), Ct && (Oe = bt({}, yb), Re = As(null), Ct.html === !0 && (bt(Oe, gb), bt(Re, bb)), Ct.svg === !0 && (bt(Oe, Ry), bt(Re, Uy), bt(Re, qm)), Ct.svgFilters === !0 && (bt(Oe, My), bt(Re, Uy), bt(Re, qm)), Ct.mathMl === !0 && (bt(Oe, Ly), bt(Re, vb), bt(Re, qm))), zn.tagCheck = null, zn.attributeCheck = null, ka(p, "ADD_TAGS") && (typeof p.ADD_TAGS == "function" ? zn.tagCheck = p.ADD_TAGS : Os(p.ADD_TAGS) && (Oe === na && (Oe = yr(Oe)), bt(Oe, p.ADD_TAGS, He))), ka(p, "ADD_ATTR") && (typeof p.ADD_ATTR == "function" ? zn.attributeCheck = p.ADD_ATTR : Os(p.ADD_ATTR) && (Re === _a && (Re = yr(Re)), bt(Re, p.ADD_ATTR, He))), ka(p, "ADD_FORBID_CONTENTS") && Os(p.ADD_FORBID_CONTENTS) && (an === Sl && (an = yr(an)), bt(an, p.ADD_FORBID_CONTENTS, He)), bl && (Oe["#text"] = !0), Qn && bt(Oe, [
      "html",
      "head",
      "body"
    ]), Oe.table && (bt(Oe, ["tbody"]), delete Vn.tbody), p.TRUSTED_TYPES_POLICY) {
      if (typeof p.TRUSTED_TYPES_POLICY.createHTML != "function") throw Qo('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof p.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw Qo('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const z = ye;
      ye = p.TRUSTED_TYPES_POLICY;
      try {
        je = M("");
      } catch (j) {
        throw ye = z, j;
      }
    } else p.TRUSTED_TYPES_POLICY === null ? (ye = void 0, je = "") : (ye === void 0 && (ye = ue()), ye && typeof je == "string" && (je = M("")));
    gl && gl(p), on = p;
  }, kl = bt({}, [
    ...Ry,
    ...My,
    ...uw
  ]), Zn = bt({}, [...Ly, ...cw]), Ke = function(p, S, z) {
    return S.namespaceURI === Gt ? p === "svg" : S.namespaceURI === Ma ? p === "svg" && (z === "annotation-xml" || rn[z]) : !!kl[p];
  }, Ci = function(p, S, z) {
    return S.namespaceURI === Gt ? p === "math" : S.namespaceURI === la ? p === "math" && it[z] : !!Zn[p];
  }, Ni = function(p, S, z) {
    return S.namespaceURI === la && !it[z] || S.namespaceURI === Ma && !rn[z] ? !1 : !Zn[p] && (Tl[p] || !kl[p]);
  }, Kn = function(p) {
    const S = Fe(p), z = is(K(p)), j = ee(p);
    let I, te;
    return j && B(j) === qn.element ? (I = { namespaceURI: Fe(j) }, te = is(K(j))) : (I = { namespaceURI: Xn }, te = "template"), ra[S] ? S === la ? Ke(z, I, te) : S === Ma ? Ci(z, I, te) : S === Gt ? Ni(z, I, te) : !!($n === "application/xhtml+xml" && ra[S]) : !1;
  }, At = function(p) {
    dm(o.removed, { element: p });
    try {
      ee(p).removeChild(p);
    } catch {
      if (ne(p), !ee(p)) throw Qo("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, zi = function(p, S, z) {
    try {
      G(p, S);
    } catch {
      try {
        p.removeAttribute(z);
      } catch {
      }
    }
  }, La = function(p) {
    Al(p);
    const S = W(p);
    S && Vo(JS(S), (j) => {
      try {
        ne(j);
      } catch {
      }
    });
    const z = B(p) === qn.element ? ve(p) : null;
    if (z) for (let j = z.length - 1; j >= 0; --j) {
      const I = z[j], te = I && I.name;
      typeof te == "string" && zi(p, I, te);
    }
  }, In = function(p, S, z) {
    if (!z) try {
      z = S.getAttributeNode(p);
    } catch {
      z = null;
    }
    dm(o.removed, {
      attribute: z || null,
      from: S
    });
    try {
      z ? G(S, z) : S.removeAttribute(p);
    } catch {
      try {
        S.removeAttribute(p);
      } catch {
      }
    }
    if (p === "is")
      if (Pe || Yt) try {
        At(S);
      } catch {
      }
      else try {
        S.setAttribute(p, "");
      } catch {
      }
  }, Di = function(p) {
    const S = ve(p);
    if (S)
      for (let z = S.length - 1; z >= 0; --z) {
        const j = S[z], I = j && j.name;
        typeof I != "string" || Re[He(I)] || zi(p, j, I);
      }
  }, El = function(p, S) {
    let z = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
    const j = [p];
    for (; j.length > 0; ) {
      const I = j.pop();
      if (S(I) === !1) continue;
      if (z && B(I) === qn.element) {
        const he = Y(I);
        wt(he) && j.push(he);
      }
      const te = W(I);
      if (te) for (let he = te.length - 1; he >= 0; --he) j.push(te[he]);
    }
  }, Al = function(p) {
    El(p, (S) => {
      B(S) === qn.element && Di(S);
    });
  }, Vt = function(p) {
    const S = [];
    return El(p, (z) => {
      S.push(z);
    }, !0), S;
  }, Nt = function(p, S) {
    const z = Ny();
    Vo(Vt(p), (j) => {
      B(j) === qn.element && zy(z, j);
    }), Vo(S, (j) => {
      B(j) === qn.element && !pm(z, j) && Di(j);
    });
  }, _r = function(p, S) {
    let z = !1;
    return Vo(o.removed, (j) => {
      j.element && (z = z || j.element === p, Al(j.element));
    }), Nt(p, S), z;
  }, ou = 8, Or = function(p, S) {
    const z = ln;
    let j = null;
    const I = () => (j || (j = Ny(), Vo(S, (te) => {
      zy(j, te);
    })), j);
    for (let te = 0; ; te++) {
      const he = Vt(p), gt = [p];
      let Me = !1;
      if (Vo(he, (Be) => {
        B(Be) === qn.documentFragment ? dm(gt, Be) : !Me && !pm(z, Be) && (Me = pm(I(), Be));
      }), !Me) return;
      if (te >= ou) throw Qo("the tree kept changing during in-place sanitization; refusing to return it");
      Vo(gt, (Be, ft) => {
        Ri(Be, ft > 0, p, I());
      });
    }
  }, Ri = function(p, S, z, j) {
    const I = Ha(p);
    let te;
    for (; te = I.nextNode(); )
      !pm(j, te) || pm(ln, te) || (S && zt(se.uponSanitizeShadowNode, te, null), Qt(te, z), Ya(te, z), wt(te.content) && An(te.content));
  }, Ua = function(p) {
    ln && zy(ln, p);
  }, Mi = function(p, S) {
    return nn ? p === "patchsrc" ? !0 : p === "for" && S !== "label" && S !== "output" : !1;
  }, jt = function(p) {
    nn && El(p, (S) => {
      const z = B(S);
      if (z === qn.processingInstruction || z === qn.comment && Il(wb, S.data)) {
        try {
          ne(S);
        } catch {
        }
        return !1;
      }
      if (z === qn.element) {
        const j = S, I = He(K(S));
        try {
          j.hasAttribute && j.hasAttribute("patchsrc") && j.removeAttribute("patchsrc"), j.hasAttribute && j.hasAttribute("for") && Mi("for", I) && j.removeAttribute("for");
        } catch {
        }
      }
      return !0;
    });
  }, ja = function(p) {
    let S = null, z = null;
    if (Fn) p = "<remove></remove>" + p;
    else {
      const te = db(p, /^[\r\n\t ]+/);
      z = te && te[0];
    }
    $n === "application/xhtml+xml" && Xn === Gt && (p = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + p + "</body></html>");
    const j = ye ? M(p) : p;
    if (Xn === Gt) try {
      S = new N().parseFromString(j, $n);
    } catch {
    }
    if (!S || !S.documentElement) {
      S = Ye.createDocument(Xn, "template", null);
      try {
        S.documentElement.innerHTML = aa ? je : j;
      } catch {
      }
    }
    const I = S.body || S.documentElement;
    return p && z && I.insertBefore(c.createTextNode(z), I.childNodes[0] || null), Xn === Gt ? P.call(S, Qn ? "html" : "body")[0] : Qn ? S.documentElement : I;
  }, Ha = function(p) {
    const S = $ ? $(p) : p.ownerDocument;
    return Se.call(S || p, p, x.SHOW_ELEMENT | x.SHOW_COMMENT | x.SHOW_TEXT | x.SHOW_PROCESSING_INSTRUCTION | x.SHOW_CDATA_SECTION, null);
  }, xl = function(p) {
    return p = mm(p, at, " "), p = mm(p, Cn, " "), p = mm(p, kn, " "), p;
  }, Rn = function(p) {
    var S;
    Cr(p);
    const z = (S = p.querySelectorAll) === null || S === void 0 ? void 0 : S.call(p, "template");
    z && Vo(z, (j) => {
      wt(j.content) && Rn(j.content);
    });
  }, Cr = function(p) {
    p.normalize();
    const S = $ ? $(p) : p.ownerDocument, z = Se.call(S || p, p, x.SHOW_TEXT | x.SHOW_COMMENT | x.SHOW_CDATA_SECTION | x.SHOW_PROCESSING_INSTRUCTION, null);
    let j = z.nextNode();
    for (; j; )
      j.data = xl(j.data), j = z.nextNode();
  }, ia = function(p) {
    const S = ae ? ae(p) : null;
    return typeof S != "string" || He(S) !== "form" ? !1 : typeof p.nodeName != "string" || typeof p.textContent != "string" || typeof p.removeChild != "function" || p.attributes !== ve(p) || typeof p.removeAttribute != "function" || typeof p.removeAttributeNode != "function" || typeof p.getAttributeNode != "function" || typeof p.setAttribute != "function" || typeof p.namespaceURI != "string" || typeof p.insertBefore != "function" || typeof p.hasChildNodes != "function" || p.nodeType !== le(p) || p.childNodes !== W(p);
  }, wt = function(p) {
    if (!le || typeof p != "object" || p === null) return !1;
    try {
      return le(p) === qn.documentFragment;
    } catch {
      return !1;
    }
  }, oa = function(p) {
    if (!le || typeof p != "object" || p === null) return !1;
    try {
      return typeof le(p) == "number";
    } catch {
      return !1;
    }
  };
  function zt(m, p, S) {
    m.length !== 0 && Vo(m, (z) => {
      z.call(o, p, S, on);
    });
  }
  const Li = function(p, S) {
    return !!(nn && p.hasChildNodes() && !oa(p.firstElementChild) && Il(jy, p.textContent) && Il(jy, p.innerHTML) || nn && Sw[S] && B(p) === qn.element && Fe(p) === Gt && (oa(p.firstElementChild) || typeof p.textContent == "string" && Il(jy, p.textContent)) || p.nodeType === qn.processingInstruction || nn && p.nodeType === qn.comment && Il(wb, p.data));
  }, _l = function(p, S) {
    if (p instanceof RegExp) return Il(p, S);
    if (p instanceof Function) {
      for (var z = arguments.length, j = new Array(z > 2 ? z - 2 : 0), I = 2; I < z; I++) j[I - 2] = arguments[I];
      return !!p(S, ...j);
    }
    return !1;
  }, uu = function(p, S, z) {
    if (!Vn[S] && Wn(S) && _l(Ot.tagNameCheck, S)) return !1;
    if (bl && !an[S] && !an[is(S)]) {
      const j = ee(p), I = W(p);
      if (I && j) {
        const te = I.length;
        for (let he = te - 1; he >= 0; --he) {
          const gt = p === z ? R(I[he], !0) : I[he];
          j.insertBefore(gt, F(p));
        }
      }
    }
    return At(p), !0;
  }, Ui = function(p, S, z, j) {
    return p.length === 0 ? S : S === z || S === j ? yr(S) : S;
  }, En = function(p, S) {
    return p === S || ee(p) !== null ? !1 : (vl && Al(p), !0);
  }, Qt = function(p, S) {
    if (Ua(p), zt(se.beforeSanitizeElements, p, null), En(p, S)) return !0;
    if (ia(p))
      return At(p), !0;
    const z = He(K(p));
    if (Oe = Ui(se.uponSanitizeElement, Oe, na, za), zt(se.uponSanitizeElement, p, {
      tagName: z,
      allowedTags: Oe
    }), En(p, S)) return !0;
    if (Li(p, z))
      return At(p), !0;
    if (Vn[z] || !(zn.tagCheck instanceof Function && zn.tagCheck(z)) && !Oe[z]) {
      const j = uu(p, z, S);
      return j === !1 && (zt(se.afterSanitizeElements, p, null), En(p, S)) ? !0 : j;
    }
    if (B(p) === qn.element && !Kn(p) || (z === "noscript" || z === "noembed" || z === "noframes") && Il(vw, p.innerHTML))
      return At(p), !0;
    if (tn && p.nodeType === qn.text) {
      const j = xl(p.textContent);
      p.textContent !== j && (dm(o.removed, { element: p.cloneNode() }), p.textContent = j);
    }
    return zt(se.afterSanitizeElements, p, null), En(p, S);
  }, qa = function(p, S, z) {
    if (Oa[S] || Mi(S, p) || Ei && (S === "id" || S === "name") && (z in c || z in xr)) return !1;
    const j = Re[S] || zn.attributeCheck instanceof Function && zn.attributeCheck(S, p);
    return st && Il(ct, S) || Ti && Il(kr, S) ? !0 : j ? Ra[S] || Il(Nn, mm(z, xa, "")) || (S === "src" || S === "xlink:href" || S === "href") && p !== "script" && pb(z, "data:") === 0 && _i[p] || ki && !Il(Aa, mm(z, xa, "")) ? !0 : !z : Wn(p) && _l(Ot.tagNameCheck, p) && _l(Ot.attributeNameCheck, S, p) || S === "is" && Ot.allowCustomizedBuiltInElements && _l(Ot.tagNameCheck, z);
  }, Nr = bt({}, [
    "annotation-xml",
    "color-profile",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-src",
    "font-face-uri",
    "missing-glyph"
  ]), Wn = function(p) {
    return !Nr[is(p)] && Il(wi, p);
  }, Ol = function(p, S, z, j) {
    if (ye && typeof U == "object" && typeof U.getAttributeType == "function" && !z) switch (U.getAttributeType(p, S)) {
      case "TrustedHTML":
        return M(j);
      case "TrustedScriptURL":
        return q(j);
    }
    return j;
  }, ji = function(p, S, z, j) {
    try {
      return z ? p.setAttributeNS(z, S, j) : p.setAttribute(S, j), ia(p) ? (At(p), !1) : !0;
    } catch {
      return In(S, p), !1;
    }
  }, Ba = function(p, S) {
    return nn && Il(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, S) ? !0 : is(p) === "attributename" && db(S, "href") !== null;
  }, Ya = function(p, S) {
    if (zt(se.beforeSanitizeAttributes, p, null), En(p, S)) return;
    const z = p.attributes;
    if (!z || ia(p)) return;
    Re = Ui(se.uponSanitizeAttribute, Re, _a, Da);
    const j = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: Re,
      forceKeepAttr: void 0
    };
    let I = z.length;
    const te = He(p.nodeName);
    for (; I--; ) {
      const he = z[I], gt = he.name, Me = he.namespaceURI, Be = he.value, ft = He(gt), ut = Be;
      let Mn = gt === "value" ? ut : tw(ut), vi = !1;
      if (j.attrName = ft, j.attrValue = Mn, j.keepAttr = !0, j.forceKeepAttr = void 0, zt(se.uponSanitizeAttribute, p, j), Mn = j.attrValue, Ai && (ft === "id" || ft === "name") && pb(Mn, xi) !== 0 && (In(gt, p, he), Mn = xi + Mn, vi = !0), Ba(gt, Mn)) {
        In(gt, p, he);
        continue;
      }
      if (!j.forceKeepAttr) {
        if (!j.keepAttr) {
          In(gt, p, he);
          continue;
        }
        if (!Ca && Il(Tb, Mn)) {
          In(gt, p, he);
          continue;
        }
        if (tn && (Mn = xl(Mn)), !qa(te, ft, Mn)) {
          In(gt, p, he);
          continue;
        }
        Mn = Ol(te, ft, Me, Mn), Mn !== ut && ji(p, gt, Me, Mn) && vi && fb(o.removed);
      }
    }
    zt(se.afterSanitizeAttributes, p, null), En(p, S);
  }, An = function(p) {
    let S = null;
    const z = Ha(p);
    for (zt(se.beforeSanitizeShadowDOM, p, null); S = z.nextNode(); )
      if (zt(se.uponSanitizeShadowNode, S, null), Qt(S, p), Ya(S, p), wt(S.content) && An(S.content), B(S) === qn.element) {
        const j = Y(S);
        wt(j) && (Ft(j), An(j));
      }
    tn && Cr(p), zt(se.afterSanitizeShadowDOM, p, null);
  }, Ft = function(p) {
    const S = [{
      node: p,
      shadow: null
    }];
    for (; S.length > 0; ) {
      const z = S.pop();
      if (z.shadow) {
        An(z.shadow);
        continue;
      }
      const j = z.node, I = B(j) === qn.element, te = W(j);
      if (te) for (let he = te.length - 1; he >= 0; --he) S.push({
        node: te[he],
        shadow: null
      });
      if (I) {
        const he = ae ? ae(j) : null;
        if (typeof he == "string" && He(he) === "template") {
          const gt = j.content;
          wt(gt) && S.push({
            node: gt,
            shadow: null
          });
        }
      }
      if (I) {
        const he = Y(j);
        wt(he) && S.push({
          node: null,
          shadow: he
        }, {
          node: he,
          shadow: null
        });
      }
    }
  };
  return o.sanitize = function(m) {
    let p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, S = null, z = null, j = null, I = null;
    if (aa = !m, aa && (m = "<!-->"), typeof m != "string" && !oa(m) && (m = rw(m), typeof m != "string"))
      throw Qo("dirty is not a string, aborting");
    if (!o.isSupported) return m;
    Na ? (Oe = za, Re = Da) : Dn(p), (se.uponSanitizeElement.length > 0 || se.uponSanitizeAttribute.length > 0) && (Oe = yr(Oe)), se.uponSanitizeAttribute.length > 0 && (Re = yr(Re)), o.removed = [];
    const te = vl && typeof m != "string" && oa(m);
    let he = [];
    const gt = ln;
    if (te) {
      jt(m);
      const ft = K(m);
      if (typeof ft == "string") {
        const ut = He(ft);
        if (!Oe[ut] || Vn[ut])
          throw La(m), Qo("root node is forbidden and cannot be sanitized in-place");
      }
      if (ia(m))
        throw La(m), Qo("root node is clobbered and cannot be sanitized in-place");
      he = Vt(m), ln = Ny();
    } else if (oa(m))
      S = ja("<!---->"), z = S.ownerDocument.importNode(m, !0), z.nodeType === qn.element && z.nodeName === "BODY" || z.nodeName === "HTML" ? S = z : S.appendChild(z), Ft(S);
    else {
      if (!Pe && !tn && !Qn && m.indexOf("<") === -1) return ye && rt ? M(m) : m;
      if (S = ja(m), !S) return Pe ? null : rt ? je : "";
    }
    S && Fn && At(S.firstChild);
    const Me = te ? m : S;
    try {
      te && Ft(m);
      const ft = Ha(Me);
      for (; j = ft.nextNode(); )
        Qt(j, Me), Ya(j, Me), wt(j.content) && An(j.content);
      te && Or(m, he);
    } catch (ft) {
      throw te && (La(m), _r(m, he)), ft;
    } finally {
      ln = gt;
    }
    if (te) {
      if (_r(m, he)) throw Qo("a node selected for removal could not be safely returned; refusing to sanitize in place");
      return tn && Rn(m), m;
    }
    if (Pe) {
      if (tn && Rn(S), Yt)
        for (I = ce.call(S.ownerDocument); S.firstChild; ) I.appendChild(S.firstChild);
      else I = S;
      return (Re.shadowroot || Re.shadowrootmode) && (I = be.call(d, I, !0)), I;
    }
    let Be = Qn ? S.outerHTML : S.innerHTML;
    return Qn && Oe["!doctype"] && S.ownerDocument && S.ownerDocument.doctype && S.ownerDocument.doctype.name && Il(yw, S.ownerDocument.doctype.name) && (Be = "<!DOCTYPE " + S.ownerDocument.doctype.name + `>
` + Be), tn && (Be = xl(Be)), ye && rt ? M(Be) : Be;
  }, o.setConfig = function() {
    let m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Dn(m), Na = !0, za = Oe, Da = Re;
  }, o.clearConfig = function() {
    on = null, Na = !1, za = null, Da = null, ye = Ee, je = "";
  }, o.isValidAttribute = function(m, p, S) {
    on || Dn({});
    const z = He(m), j = He(p);
    return typeof S == "string" && (Ba(p, S) || !Ca && Il(Tb, S)) ? !1 : qa(z, j, S);
  }, o.addHook = function(m, p) {
    typeof p == "function" && ka(se, m) && dm(se[m], p);
  }, o.removeHook = function(m, p) {
    if (ka(se, m)) {
      if (p !== void 0) {
        const S = WS(se[m], p);
        return S === -1 ? void 0 : ew(se[m], S, 1)[0];
      }
      return fb(se[m]);
    }
  }, o.removeHooks = function(m) {
    ka(se, m) && (se[m] = []);
  }, o.removeAllHooks = function() {
    se = kb();
  }, o;
}
d1();
var qy = { exports: {} }, By, Eb;
function kw() {
  if (Eb) return By;
  Eb = 1;
  var i = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return By = i, By;
}
var Yy, Ab;
function Ew() {
  if (Ab) return Yy;
  Ab = 1;
  var i = /* @__PURE__ */ kw();
  function o() {
  }
  function c() {
  }
  return c.resetWarningCache = o, Yy = function() {
    function d(T, _, x, N, U, L) {
      if (L !== i) {
        var R = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw R.name = "Invariant Violation", R;
      }
    }
    d.isRequired = d;
    function s() {
      return d;
    }
    var y = {
      array: d,
      bigint: d,
      bool: d,
      func: d,
      number: d,
      object: d,
      string: d,
      symbol: d,
      any: d,
      arrayOf: s,
      element: d,
      elementType: d,
      instanceOf: s,
      node: d,
      objectOf: s,
      oneOf: s,
      oneOfType: s,
      shape: s,
      exact: s,
      checkPropTypes: c,
      resetWarningCache: o
    };
    return y.PropTypes = y, y;
  }, Yy;
}
var xb;
function Aw() {
  return xb || (xb = 1, qy.exports = /* @__PURE__ */ Ew()()), qy.exports;
}
var xw = /* @__PURE__ */ Aw();
const xt = /* @__PURE__ */ VS(xw);
xt.shape({
  event: xt.string,
  action: xt.string,
  name: xt.string,
  region: xt.string,
  section: xt.string,
  component: xt.string,
  type: xt.string,
  text: xt.string
});
const Lm = ({ children: i }) => /* @__PURE__ */ Jl.jsx(Jl.Fragment, { children: i });
Lm.propTypes = {
  children: xt.oneOfType([
    xt.arrayOf(xt.node),
    xt.node,
    xt.string
  ])
};
var Gy = { exports: {} };
var _b;
function _w() {
  return _b || (_b = 1, (function(i) {
    (function() {
      var o = {}.hasOwnProperty;
      function c() {
        for (var y = "", T = 0; T < arguments.length; T++) {
          var _ = arguments[T];
          _ && (y = s(y, d(_)));
        }
        return y;
      }
      function d(y) {
        if (typeof y == "string" || typeof y == "number")
          return y;
        if (typeof y != "object")
          return "";
        if (Array.isArray(y))
          return c.apply(null, y);
        if (y.toString !== Object.prototype.toString && !y.toString.toString().includes("[native code]"))
          return y.toString();
        var T = "";
        for (var _ in y)
          o.call(y, _) && y[_] && (T = s(T, _));
        return T;
      }
      function s(y, T) {
        return T ? y ? y + " " + T : y + T : y;
      }
      i.exports ? (c.default = c, i.exports = c) : window.classNames = c;
    })();
  })(Gy)), Gy.exports;
}
_w();
({
  ...Lm.propTypes
});
const p1 = ({ children: i, className: o = "container", ...c }) => /* @__PURE__ */ Jl.jsx("div", { className: o, ...c, children: /* @__PURE__ */ Jl.jsx("div", { className: "row", children: i }) });
p1.propTypes = {
  children: Lm.propTypes.children
};
({
  ...p1.propTypes
});
Lm.propTypes.children, xt.oneOf(["0", "3", "4", "6", "8", "9", "12"]);
Lm.propTypes.children;
function m1({
  packageName: i = "",
  component: o = "",
  type: c = "",
  configuration: d = {}
}) {
  if (!i || !o) {
    console.error("trackReactComponent: Missing required arguments.");
    return;
  }
  window.uds = window.uds || {}, window.uds.package = window.uds.package || {}, window.uds.package[i] = {
    component: o,
    type: c,
    configuration: d
  };
}
function V0(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var Ob = { exports: {} }, gm = {}, Cb;
function Ow() {
  if (Cb) return gm;
  Cb = 1;
  var i = Symbol.for("react.transitional.element"), o = Symbol.for("react.fragment");
  function c(d, s, y) {
    var T = null;
    if (y !== void 0 && (T = "" + y), s.key !== void 0 && (T = "" + s.key), "key" in s) {
      y = {};
      for (var _ in s)
        _ !== "key" && (y[_] = s[_]);
    } else y = s;
    return s = y.ref, {
      $$typeof: i,
      type: d,
      key: T,
      ref: s !== void 0 ? s : null,
      props: y
    };
  }
  return gm.Fragment = o, gm.jsx = c, gm.jsxs = c, gm;
}
var Nb;
function Cw() {
  return Nb || (Nb = 1, Ob.exports = Ow()), Ob.exports;
}
var V = Cw(), zb = { exports: {} }, Vy, Db;
function Nw() {
  if (Db) return Vy;
  Db = 1;
  var i = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Vy = i, Vy;
}
var Qy, Rb;
function zw() {
  if (Rb) return Qy;
  Rb = 1;
  var i = /* @__PURE__ */ Nw();
  function o() {
  }
  function c() {
  }
  return c.resetWarningCache = o, Qy = function() {
    function d(T, _, x, N, U, L) {
      if (L !== i) {
        var R = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw R.name = "Invariant Violation", R;
      }
    }
    d.isRequired = d;
    function s() {
      return d;
    }
    var y = {
      array: d,
      bigint: d,
      bool: d,
      func: d,
      number: d,
      object: d,
      string: d,
      symbol: d,
      any: d,
      arrayOf: s,
      element: d,
      elementType: d,
      instanceOf: s,
      node: d,
      objectOf: s,
      oneOf: s,
      oneOfType: s,
      shape: s,
      exact: s,
      checkPropTypes: c,
      resetWarningCache: o
    };
    return y.PropTypes = y, y;
  }, Qy;
}
var Mb;
function Dw() {
  return Mb || (Mb = 1, zb.exports = /* @__PURE__ */ zw()()), zb.exports;
}
var Rw = /* @__PURE__ */ Dw();
const g = /* @__PURE__ */ V0(Rw), Mw = () => {
  const [i, o] = tu(null), [c, d] = tu(!1), [s, y] = tu(null), [T, _] = tu("");
  return au(() => {
    T && (() => {
      y(null), d(!0);
      try {
        fetch(T).then((x) => x.json()).then((x) => {
          o(x), d(!1);
        }).catch((x) => {
          y(x), d(!1);
        });
      } catch (x) {
        y(x);
      }
    })();
  }, [T]), [{ data: i, loading: c, error: s }, _];
}, Lw = (i) => (i || []).join(" ");
function Lb(i, o) {
  (o == null || o > i.length) && (o = i.length);
  for (var c = 0, d = Array(o); c < o; c++) d[c] = i[c];
  return d;
}
function Uw(i) {
  if (Array.isArray(i)) return i;
}
function jw(i, o) {
  var c = i == null ? null : typeof Symbol < "u" && i[Symbol.iterator] || i["@@iterator"];
  if (c != null) {
    var d, s, y, T, _ = [], x = !0, N = !1;
    try {
      if (y = (c = c.call(i)).next, o !== 0) for (; !(x = (d = y.call(c)).done) && (_.push(d.value), _.length !== o); x = !0) ;
    } catch (U) {
      N = !0, s = U;
    } finally {
      try {
        if (!x && c.return != null && (T = c.return(), Object(T) !== T)) return;
      } finally {
        if (N) throw s;
      }
    }
    return _;
  }
}
function Hw() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function qw(i, o) {
  return Uw(i) || jw(i, o) || Bw(i, o) || Hw();
}
function Bw(i, o) {
  if (i) {
    if (typeof i == "string") return Lb(i, o);
    var c = {}.toString.call(i).slice(8, -1);
    return c === "Object" && i.constructor && (c = i.constructor.name), c === "Map" || c === "Set" ? Array.from(i) : c === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c) ? Lb(i, o) : void 0;
  }
}
const h1 = Object.entries, Ub = Object.setPrototypeOf, Yw = Object.isFrozen, g1 = Object.getPrototypeOf, y1 = Object.getOwnPropertyDescriptor;
let yl = Object.freeze, ta = Object.seal, xs = Object.create, b1 = typeof Reflect < "u" && Reflect, x0 = b1.apply, _0 = b1.construct;
yl || (yl = function(i) {
  return i;
});
ta || (ta = function(i) {
  return i;
});
x0 || (x0 = function(i, o) {
  for (var c = arguments.length, d = new Array(c > 2 ? c - 2 : 0), s = 2; s < c; s++) d[s - 2] = arguments[s];
  return i.apply(o, d);
});
_0 || (_0 = function(i) {
  for (var o = arguments.length, c = new Array(o > 1 ? o - 1 : 0), d = 1; d < o; d++) c[d - 1] = arguments[d];
  return new i(...c);
});
const Fo = wn(Array.prototype.forEach), Gw = wn(Array.prototype.lastIndexOf), jb = wn(Array.prototype.pop), ym = wn(Array.prototype.push), Vw = wn(Array.prototype.slice), Qw = wn(Array.prototype.splice), Cs = Array.isArray, Fy = v1(Set), Xy = wn(Set.prototype.add), bm = wn(Set.prototype.has), os = wn(String.prototype.toLowerCase), $y = wn(String.prototype.toString), Hb = wn(String.prototype.match), vm = wn(String.prototype.replace), qb = wn(String.prototype.indexOf), Fw = wn(String.prototype.trim), Xw = wn(Number.prototype.toString), $w = wn(Boolean.prototype.toString), Bb = typeof BigInt > "u" ? null : wn(BigInt.prototype.toString), Yb = typeof Symbol > "u" ? null : wn(Symbol.prototype.toString), Ea = wn(Object.prototype.hasOwnProperty), Sm = wn(Object.prototype.toString), Wl = wn(RegExp.prototype.test), Xo = v1(TypeError);
function wn(i) {
  return function(o) {
    o instanceof RegExp && (o.lastIndex = 0);
    for (var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), s = 1; s < c; s++) d[s - 1] = arguments[s];
    return x0(i, o, d);
  };
}
function v1(i) {
  return function() {
    for (var o = arguments.length, c = new Array(o), d = 0; d < o; d++) c[d] = arguments[d];
    return _0(i, c);
  };
}
function vt(i, o) {
  let c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : os;
  if (Ub && Ub(i, null), !Cs(o)) return i;
  let d = o.length;
  for (; d--; ) {
    let s = o[d];
    if (typeof s == "string") {
      const y = c(s);
      y !== s && (Yw(o) || (o[d] = y), s = y);
    }
    i[s] = !0;
  }
  return i;
}
function Pw(i) {
  for (let o = 0; o < i.length; o++) Ea(i, o) || (i[o] = null);
  return i;
}
function br(i) {
  const o = xs(null);
  for (const d of h1(i)) {
    var c = qw(d, 2);
    const s = c[0], y = c[1];
    Ea(i, s) && (Cs(y) ? o[s] = Pw(y) : y && typeof y == "object" && y.constructor === Object ? o[s] = br(y) : o[s] = y);
  }
  return o;
}
function Zw(i) {
  switch (typeof i) {
    case "string":
      return i;
    case "number":
      return Xw(i);
    case "boolean":
      return $w(i);
    case "bigint":
      return Bb ? Bb(i) : "0";
    case "symbol":
      return Yb ? Yb(i) : "Symbol()";
    case "undefined":
      return Sm(i);
    case "function":
    case "object": {
      if (i === null) return Sm(i);
      const o = i, c = Sr(o, "toString");
      if (typeof c == "function") {
        const d = c(o);
        return typeof d == "string" ? d : Sm(d);
      }
      return Sm(i);
    }
    default:
      return Sm(i);
  }
}
function Sr(i, o) {
  for (; i !== null; ) {
    const d = y1(i, o);
    if (d) {
      if (d.get) return wn(d.get);
      if (typeof d.value == "function") return wn(d.value);
    }
    i = g1(i);
  }
  function c() {
    return null;
  }
  return c;
}
function Kw(i, o) {
  for (; i !== null; ) {
    const c = y1(i, o);
    if (c) return c.get ? wn(c.get) : null;
    i = g1(i);
  }
  return null;
}
function Iw(i) {
  try {
    return Wl(i, ""), !0;
  } catch {
    return !1;
  }
}
const Gb = yl([
  "a",
  "abbr",
  "acronym",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "bdi",
  "bdo",
  "big",
  "blink",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "center",
  "cite",
  "code",
  "col",
  "colgroup",
  "content",
  "data",
  "datalist",
  "dd",
  "decorator",
  "del",
  "details",
  "dfn",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "element",
  "em",
  "fieldset",
  "figcaption",
  "figure",
  "font",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meter",
  "nav",
  "nobr",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "search",
  "section",
  "select",
  "shadow",
  "slot",
  "small",
  "source",
  "spacer",
  "span",
  "strike",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "tr",
  "track",
  "tt",
  "u",
  "ul",
  "var",
  "video",
  "wbr"
]), Py = yl([
  "svg",
  "a",
  "altglyph",
  "altglyphdef",
  "altglyphitem",
  "animatecolor",
  "animatemotion",
  "animatetransform",
  "circle",
  "clippath",
  "defs",
  "desc",
  "ellipse",
  "enterkeyhint",
  "exportparts",
  "filter",
  "font",
  "g",
  "glyph",
  "glyphref",
  "hkern",
  "image",
  "inputmode",
  "line",
  "lineargradient",
  "marker",
  "mask",
  "metadata",
  "mpath",
  "part",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialgradient",
  "rect",
  "stop",
  "style",
  "switch",
  "symbol",
  "text",
  "textpath",
  "title",
  "tref",
  "tspan",
  "view",
  "vkern"
]), Zy = yl([
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feDropShadow",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence"
]), Ww = yl([
  "animate",
  "color-profile",
  "cursor",
  "discard",
  "font-face",
  "font-face-format",
  "font-face-name",
  "font-face-src",
  "font-face-uri",
  "foreignobject",
  "hatch",
  "hatchpath",
  "mesh",
  "meshgradient",
  "meshpatch",
  "meshrow",
  "missing-glyph",
  "script",
  "set",
  "solidcolor",
  "unknown",
  "use"
]), Ky = yl([
  "math",
  "menclose",
  "merror",
  "mfenced",
  "mfrac",
  "mglyph",
  "mi",
  "mlabeledtr",
  "mmultiscripts",
  "mn",
  "mo",
  "mover",
  "mpadded",
  "mphantom",
  "mroot",
  "mrow",
  "ms",
  "mspace",
  "msqrt",
  "mstyle",
  "msub",
  "msup",
  "msubsup",
  "mtable",
  "mtd",
  "mtext",
  "mtr",
  "munder",
  "munderover",
  "mprescripts"
]), Jw = yl([
  "maction",
  "maligngroup",
  "malignmark",
  "mlongdiv",
  "mscarries",
  "mscarry",
  "msgroup",
  "mstack",
  "msline",
  "msrow",
  "semantics",
  "annotation",
  "annotation-xml",
  "mprescripts",
  "none"
]), Vb = yl(["#text"]), Qb = yl([
  "accept",
  "action",
  "align",
  "alt",
  "autocapitalize",
  "autocomplete",
  "autopictureinpicture",
  "autoplay",
  "background",
  "bgcolor",
  "border",
  "capture",
  "cellpadding",
  "cellspacing",
  "checked",
  "cite",
  "class",
  "clear",
  "color",
  "cols",
  "colspan",
  "command",
  "commandfor",
  "controls",
  "controlslist",
  "coords",
  "crossorigin",
  "datetime",
  "decoding",
  "default",
  "dir",
  "disabled",
  "disablepictureinpicture",
  "disableremoteplayback",
  "download",
  "draggable",
  "enctype",
  "enterkeyhint",
  "exportparts",
  "face",
  "for",
  "headers",
  "height",
  "hidden",
  "high",
  "href",
  "hreflang",
  "id",
  "inert",
  "inputmode",
  "integrity",
  "ismap",
  "kind",
  "label",
  "lang",
  "list",
  "loading",
  "loop",
  "low",
  "max",
  "maxlength",
  "media",
  "method",
  "min",
  "minlength",
  "multiple",
  "muted",
  "name",
  "nonce",
  "noshade",
  "novalidate",
  "nowrap",
  "open",
  "optimum",
  "part",
  "pattern",
  "placeholder",
  "playsinline",
  "popover",
  "popovertarget",
  "popovertargetaction",
  "poster",
  "preload",
  "pubdate",
  "radiogroup",
  "readonly",
  "rel",
  "required",
  "rev",
  "reversed",
  "role",
  "rows",
  "rowspan",
  "spellcheck",
  "scope",
  "selected",
  "shape",
  "size",
  "sizes",
  "slot",
  "span",
  "srclang",
  "start",
  "src",
  "srcset",
  "step",
  "style",
  "summary",
  "tabindex",
  "title",
  "translate",
  "type",
  "usemap",
  "valign",
  "value",
  "width",
  "wrap",
  "xmlns"
]), Iy = yl([
  "accent-height",
  "accumulate",
  "additive",
  "alignment-baseline",
  "amplitude",
  "ascent",
  "attributename",
  "attributetype",
  "azimuth",
  "basefrequency",
  "baseline-shift",
  "begin",
  "bias",
  "by",
  "class",
  "clip",
  "clippathunits",
  "clip-path",
  "clip-rule",
  "color",
  "color-interpolation",
  "color-interpolation-filters",
  "color-profile",
  "color-rendering",
  "cx",
  "cy",
  "d",
  "dx",
  "dy",
  "diffuseconstant",
  "direction",
  "display",
  "divisor",
  "dominant-baseline",
  "dur",
  "edgemode",
  "elevation",
  "end",
  "exponent",
  "fill",
  "fill-opacity",
  "fill-rule",
  "filter",
  "filterunits",
  "flood-color",
  "flood-opacity",
  "font-family",
  "font-size",
  "font-size-adjust",
  "font-stretch",
  "font-style",
  "font-variant",
  "font-weight",
  "fx",
  "fy",
  "g1",
  "g2",
  "glyph-name",
  "glyphref",
  "gradientunits",
  "gradienttransform",
  "height",
  "href",
  "id",
  "image-rendering",
  "in",
  "in2",
  "intercept",
  "k",
  "k1",
  "k2",
  "k3",
  "k4",
  "kerning",
  "keypoints",
  "keysplines",
  "keytimes",
  "lang",
  "lengthadjust",
  "letter-spacing",
  "kernelmatrix",
  "kernelunitlength",
  "lighting-color",
  "local",
  "marker-end",
  "marker-mid",
  "marker-start",
  "markerheight",
  "markerunits",
  "markerwidth",
  "maskcontentunits",
  "maskunits",
  "max",
  "mask",
  "mask-type",
  "media",
  "method",
  "mode",
  "min",
  "name",
  "numoctaves",
  "offset",
  "operator",
  "opacity",
  "order",
  "orient",
  "orientation",
  "origin",
  "overflow",
  "paint-order",
  "path",
  "pathlength",
  "patterncontentunits",
  "patterntransform",
  "patternunits",
  "pointer-events",
  "points",
  "preservealpha",
  "preserveaspectratio",
  "primitiveunits",
  "r",
  "rx",
  "ry",
  "radius",
  "refx",
  "refy",
  "repeatcount",
  "repeatdur",
  "restart",
  "result",
  "rotate",
  "scale",
  "seed",
  "shape-rendering",
  "slope",
  "specularconstant",
  "specularexponent",
  "spreadmethod",
  "startoffset",
  "stddeviation",
  "stitchtiles",
  "stop-color",
  "stop-opacity",
  "stroke-dasharray",
  "stroke-dashoffset",
  "stroke-linecap",
  "stroke-linejoin",
  "stroke-miterlimit",
  "stroke-opacity",
  "stroke",
  "stroke-width",
  "style",
  "surfacescale",
  "systemlanguage",
  "tabindex",
  "tablevalues",
  "targetx",
  "targety",
  "transform",
  "transform-origin",
  "text-anchor",
  "text-decoration",
  "text-orientation",
  "text-rendering",
  "textlength",
  "type",
  "u1",
  "u2",
  "unicode",
  "values",
  "vector-effect",
  "viewbox",
  "visibility",
  "version",
  "vert-adv-y",
  "vert-origin-x",
  "vert-origin-y",
  "width",
  "word-spacing",
  "wrap",
  "writing-mode",
  "xchannelselector",
  "ychannelselector",
  "x",
  "x1",
  "x2",
  "xmlns",
  "y",
  "y1",
  "y2",
  "z",
  "zoomandpan"
]), Fb = yl([
  "accent",
  "accentunder",
  "align",
  "bevelled",
  "close",
  "columnalign",
  "columnlines",
  "columnspacing",
  "columnspan",
  "denomalign",
  "depth",
  "dir",
  "display",
  "displaystyle",
  "encoding",
  "fence",
  "frame",
  "height",
  "href",
  "id",
  "largeop",
  "length",
  "linethickness",
  "lquote",
  "lspace",
  "mathbackground",
  "mathcolor",
  "mathsize",
  "mathvariant",
  "maxsize",
  "minsize",
  "movablelimits",
  "notation",
  "numalign",
  "open",
  "rowalign",
  "rowlines",
  "rowspacing",
  "rowspan",
  "rspace",
  "rquote",
  "scriptlevel",
  "scriptminsize",
  "scriptsizemultiplier",
  "selection",
  "separator",
  "separators",
  "stretchy",
  "subscriptshift",
  "supscriptshift",
  "symmetric",
  "voffset",
  "width",
  "xmlns"
]), Bm = yl([
  "xlink:href",
  "xml:id",
  "xlink:title",
  "xml:space",
  "xmlns:xlink"
]), eT = ta(/{{[\w\W]*|^[\w\W]*}}/g), tT = ta(/<%[\w\W]*|^[\w\W]*%>/g), nT = ta(/\${[\w\W]*/g), lT = ta(/^data-[\-\w.\u00B7-\uFFFF]+$/), aT = ta(/^aria-[\-\w]+$/), Xb = ta(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), rT = ta(/^(?:\w+script|data):/i), iT = ta(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), oT = ta(/^html$/i), uT = ta(/^[a-z][.\w]*(-[.\w]+)+$/i), Wy = ta(/<[/\w!]/g), $b = ta(/<[/\w]/g), cT = ta(/<\/no(script|embed|frames)/i), Pb = ta(/\/>/i), Bn = {
  element: 1,
  attribute: 2,
  text: 3,
  cdataSection: 4,
  entityReference: 5,
  entityNode: 6,
  processingInstruction: 7,
  comment: 8,
  document: 9,
  documentType: 10,
  documentFragment: 11,
  notation: 12
}, sT = yl(vt({}, [
  "style",
  "script",
  "xmp",
  "iframe",
  "noembed",
  "noframes",
  "plaintext",
  "noscript"
])), fT = function() {
  return typeof window > "u" ? null : window;
}, dT = function(i, o) {
  if (typeof i != "object" || typeof i.createPolicy != "function") return null;
  let c = null;
  const d = "data-tt-policy-suffix";
  o && o.hasAttribute(d) && (c = o.getAttribute(d));
  const s = "dompurify" + (c ? "#" + c : "");
  try {
    return i.createPolicy(s, {
      createHTML(y) {
        return y;
      },
      createScriptURL(y) {
        return y;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + s + " could not be created."), null;
  }
}, Zb = function() {
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
}, Io = function(i, o, c, d) {
  return Ea(i, o) && Cs(i[o]) ? vt(d.base ? br(d.base) : {}, i[o], d.transform) : c;
}, Jy = function(i, o, c) {
  const d = Ea(i, o) ? i[o] : void 0;
  return d && typeof d == "object" ? br(d) : c();
};
function S1() {
  let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : fT();
  const o = (m) => S1(m);
  if (o.version = "3.4.17", o.removed = [], !i || !i.document || i.document.nodeType !== Bn.document || !i.Element)
    return o.isSupported = !1, o;
  let c = i.document;
  const d = c, s = d.currentScript;
  i.DocumentFragment;
  const y = i.HTMLTemplateElement, T = i.Node, _ = i.Element, x = i.NodeFilter;
  i.NamedNodeMap === void 0 && (i.NamedNodeMap || i.MozNamedAttrMap), i.HTMLFormElement;
  const N = i.DOMParser, U = i.trustedTypes, L = _.prototype, R = Sr(L, "cloneNode"), ne = Sr(L, "remove"), G = Sr(L, "removeAttributeNode"), F = Sr(L, "nextSibling"), W = Sr(L, "childNodes"), ee = Sr(L, "parentNode"), Y = Sr(L, "shadowRoot"), ve = Sr(L, "attributes"), le = T && T.prototype ? Sr(T.prototype, "nodeType") : null, ae = T && T.prototype ? Sr(T.prototype, "nodeName") : null, $ = T && T.prototype ? Sr(T.prototype, "ownerDocument") : null, B = function(m) {
    return le ? le(m) : m.nodeType;
  }, K = function(m) {
    return ae ? ae(m) : m.nodeName;
  }, Ae = Kw(L, "namespaceURI"), Fe = function(m) {
    return Ae ? Ae(m) : m.namespaceURI;
  };
  if (typeof y == "function") {
    const m = c.createElement("template");
    m.content && m.content.ownerDocument && (c = m.content.ownerDocument);
  }
  let ye, je = "", Ee, yt = !1, Qe = 0;
  const H = function() {
    if (Qe > 0) throw Xo('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, M = function(m) {
    H(), Qe++;
    try {
      return ye.createHTML(m);
    } finally {
      Qe--;
    }
  }, q = function(m) {
    H(), Qe++;
    try {
      return ye.createScriptURL(m);
    } finally {
      Qe--;
    }
  }, ue = function() {
    return yt || (Ee = dT(U, s), yt = !0), Ee;
  }, ie = c, Ye = ie.implementation, Se = ie.createNodeIterator, ce = ie.createDocumentFragment, P = ie.getElementsByTagName, be = d.importNode;
  let se = Zb();
  o.isSupported = typeof h1 == "function" && typeof ee == "function" && Ye && Ye.createHTMLDocument !== void 0;
  const at = eT, Cn = tT, kn = nT, ct = lT, kr = aT, Aa = rT, xa = iT, wi = uT;
  let Nn = Xb, Oe = null;
  const na = vt({}, [
    ...Gb,
    ...Py,
    ...Zy,
    ...Ky,
    ...Vb
  ]);
  let Re = null;
  const _a = vt({}, [
    ...Qb,
    ...Iy,
    ...Fb,
    ...Bm
  ]);
  let Ot = Object.seal(xs(null, {
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
  })), Vn = null, Oa = null;
  const zn = Object.seal(xs(null, {
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
  let Ti = !0, st = !0, ki = !1, Ca = !0, tn = !1, nn = !0, Qn = !1, Na = !1, za = null, Da = null, Fn = !1, Pe = !1, Yt = !1, rt = !1, Ei = !0, Ai = !1;
  const xi = "user-content-";
  let bl = !0, vl = !1, ln = null, Ct = {}, an = null;
  const Sl = vt({}, [
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
    "selectedcontent",
    "style",
    "svg",
    "template",
    "thead",
    "title",
    "video",
    "xmp"
  ]);
  let _i = null;
  const Er = vt({}, [
    "audio",
    "video",
    "img",
    "source",
    "image",
    "track"
  ]);
  let Ra = null;
  const wl = vt({}, [
    "alt",
    "class",
    "for",
    "id",
    "label",
    "name",
    "pattern",
    "placeholder",
    "role",
    "summary",
    "title",
    "value",
    "style",
    "xmlns"
  ]), Ma = "http://www.w3.org/1998/Math/MathML", la = "http://www.w3.org/2000/svg", Gt = "http://www.w3.org/1999/xhtml";
  let Xn = Gt, aa = !1, ra = null;
  const Oi = vt({}, [
    Ma,
    la,
    Gt
  ], $y), Ar = yl([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext"
  ]);
  let rn = vt({}, Ar);
  const Ze = yl(["annotation-xml"]);
  let it = vt({}, Ze);
  const Tl = vt({}, [
    "title",
    "style",
    "font",
    "a",
    "script"
  ]);
  let $n = null;
  const ru = ["application/xhtml+xml", "text/html"], iu = "text/html";
  let He = null, on = null;
  const xr = c.createElement("form"), Pn = function(m) {
    return m instanceof RegExp || m instanceof Function;
  }, Dn = function() {
    let m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (on && on === m) return;
    (!m || typeof m != "object") && (m = {}), m = br(m), $n = ru.indexOf(m.PARSER_MEDIA_TYPE) === -1 ? iu : m.PARSER_MEDIA_TYPE, He = $n === "application/xhtml+xml" ? $y : os, Oe = Io(m, "ALLOWED_TAGS", na, { transform: He }), Re = Io(m, "ALLOWED_ATTR", _a, { transform: He }), ra = Io(m, "ALLOWED_NAMESPACES", Oi, { transform: $y }), Ra = Io(m, "ADD_URI_SAFE_ATTR", wl, {
      transform: He,
      base: wl
    }), _i = Io(m, "ADD_DATA_URI_TAGS", Er, {
      transform: He,
      base: Er
    }), an = Io(m, "FORBID_CONTENTS", Sl, { transform: He }), Vn = Io(m, "FORBID_TAGS", br({}), { transform: He }), Oa = Io(m, "FORBID_ATTR", br({}), { transform: He }), Ct = Ea(m, "USE_PROFILES") ? m.USE_PROFILES && typeof m.USE_PROFILES == "object" ? br(m.USE_PROFILES) : m.USE_PROFILES : !1, Ti = m.ALLOW_ARIA_ATTR !== !1, st = m.ALLOW_DATA_ATTR !== !1, ki = m.ALLOW_UNKNOWN_PROTOCOLS || !1, Ca = m.ALLOW_SELF_CLOSE_IN_ATTR !== !1, tn = m.SAFE_FOR_TEMPLATES || !1, nn = m.SAFE_FOR_XML !== !1, Qn = m.WHOLE_DOCUMENT || !1, Pe = m.RETURN_DOM || !1, Yt = m.RETURN_DOM_FRAGMENT || !1, rt = m.RETURN_TRUSTED_TYPE || !1, Fn = m.FORCE_BODY || !1, Ei = m.SANITIZE_DOM !== !1, Ai = m.SANITIZE_NAMED_PROPS || !1, bl = m.KEEP_CONTENT !== !1, vl = m.IN_PLACE || !1, Nn = Iw(m.ALLOWED_URI_REGEXP) ? m.ALLOWED_URI_REGEXP : Xb, Xn = typeof m.NAMESPACE == "string" ? m.NAMESPACE : Gt, rn = Jy(m, "MATHML_TEXT_INTEGRATION_POINTS", () => vt({}, Ar)), it = Jy(m, "HTML_INTEGRATION_POINTS", () => vt({}, Ze));
    const p = Jy(m, "CUSTOM_ELEMENT_HANDLING", () => xs(null));
    if (Ot = xs(null), Ea(p, "tagNameCheck") && Pn(p.tagNameCheck) && (Ot.tagNameCheck = p.tagNameCheck), Ea(p, "attributeNameCheck") && Pn(p.attributeNameCheck) && (Ot.attributeNameCheck = p.attributeNameCheck), Ea(p, "allowCustomizedBuiltInElements") && typeof p.allowCustomizedBuiltInElements == "boolean" && (Ot.allowCustomizedBuiltInElements = p.allowCustomizedBuiltInElements), ta(Ot), tn && (st = !1), Yt && (Pe = !0), Ct && (Oe = vt({}, Vb), Re = xs(null), Ct.html === !0 && (vt(Oe, Gb), vt(Re, Qb)), Ct.svg === !0 && (vt(Oe, Py), vt(Re, Iy), vt(Re, Bm)), Ct.svgFilters === !0 && (vt(Oe, Zy), vt(Re, Iy), vt(Re, Bm)), Ct.mathMl === !0 && (vt(Oe, Ky), vt(Re, Fb), vt(Re, Bm))), zn.tagCheck = null, zn.attributeCheck = null, Ea(m, "ADD_TAGS") && (typeof m.ADD_TAGS == "function" ? zn.tagCheck = m.ADD_TAGS : Cs(m.ADD_TAGS) && (Oe === na && (Oe = br(Oe)), vt(Oe, m.ADD_TAGS, He))), Ea(m, "ADD_ATTR") && (typeof m.ADD_ATTR == "function" ? zn.attributeCheck = m.ADD_ATTR : Cs(m.ADD_ATTR) && (Re === _a && (Re = br(Re)), vt(Re, m.ADD_ATTR, He))), Ea(m, "ADD_FORBID_CONTENTS") && Cs(m.ADD_FORBID_CONTENTS) && (an === Sl && (an = br(an)), vt(an, m.ADD_FORBID_CONTENTS, He)), bl && (Oe["#text"] = !0), Qn && vt(Oe, [
      "html",
      "head",
      "body"
    ]), Oe.table && (vt(Oe, ["tbody"]), delete Vn.tbody), m.TRUSTED_TYPES_POLICY) {
      if (typeof m.TRUSTED_TYPES_POLICY.createHTML != "function") throw Xo('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof m.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw Xo('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const S = ye;
      ye = m.TRUSTED_TYPES_POLICY;
      try {
        je = M("");
      } catch (z) {
        throw ye = S, z;
      }
    } else m.TRUSTED_TYPES_POLICY === null ? (ye = void 0, je = "") : (ye === void 0 && (ye = ue()), ye && typeof je == "string" && (je = M("")));
    yl && yl(m), on = m;
  }, kl = vt({}, [
    ...Py,
    ...Zy,
    ...Ww
  ]), Zn = vt({}, [...Ky, ...Jw]), Ke = function(m, p, S) {
    return p.namespaceURI === Gt ? m === "svg" : p.namespaceURI === Ma ? m === "svg" && (S === "annotation-xml" || rn[S]) : !!kl[m];
  }, Ci = function(m, p, S) {
    return p.namespaceURI === Gt ? m === "math" : p.namespaceURI === la ? m === "math" && it[S] : !!Zn[m];
  }, Ni = function(m, p, S) {
    return p.namespaceURI === la && !it[S] || p.namespaceURI === Ma && !rn[S] ? !1 : !Zn[m] && (Tl[m] || !kl[m]);
  }, Kn = function(m) {
    const p = Fe(m), S = os(K(m)), z = ee(m);
    let j, I;
    return z && B(z) === Bn.element ? (j = { namespaceURI: Fe(z) }, I = os(K(z))) : (j = { namespaceURI: Xn }, I = "template"), ra[p] ? p === la ? Ke(S, j, I) : p === Ma ? Ci(S, j, I) : p === Gt ? Ni(S, j, I) : !!($n === "application/xhtml+xml" && ra[p]) : !1;
  }, At = function(m) {
    ym(o.removed, { element: m });
    try {
      ee(m).removeChild(m);
    } catch {
      if (ne(m), !ee(m)) throw Xo("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, zi = function(m, p, S) {
    try {
      G(m, p);
    } catch {
      try {
        m.removeAttribute(S);
      } catch {
      }
    }
  }, La = function(m) {
    Al(m);
    const p = W(m);
    p && Fo(Vw(p), (z) => {
      try {
        ne(z);
      } catch {
      }
    });
    const S = B(m) === Bn.element ? ve(m) : null;
    if (S) for (let z = S.length - 1; z >= 0; --z) {
      const j = S[z], I = j && j.name;
      typeof I == "string" && zi(m, j, I);
    }
  }, In = function(m, p, S) {
    if (!S) try {
      S = p.getAttributeNode(m);
    } catch {
      S = null;
    }
    ym(o.removed, {
      attribute: S || null,
      from: p
    });
    try {
      S ? G(p, S) : p.removeAttribute(m);
    } catch {
      try {
        p.removeAttribute(m);
      } catch {
      }
    }
    if (m === "is")
      if (Pe || Yt) try {
        At(p);
      } catch {
      }
      else try {
        p.setAttribute(m, "");
      } catch {
      }
  }, Di = function(m) {
    const p = ve(m);
    if (p)
      for (let S = p.length - 1; S >= 0; --S) {
        const z = p[S], j = z && z.name;
        typeof j != "string" || Re[He(j)] || zi(m, z, j);
      }
  }, El = function(m, p) {
    let S = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
    const z = [m];
    for (; z.length > 0; ) {
      const j = z.pop();
      if (p(j) === !1) continue;
      if (S && B(j) === Bn.element) {
        const te = Y(j);
        wt(te) && z.push(te);
      }
      const I = W(j);
      if (I) for (let te = I.length - 1; te >= 0; --te) z.push(I[te]);
    }
  }, Al = function(m) {
    El(m, (p) => {
      B(p) === Bn.element && Di(p);
    });
  }, Vt = function(m) {
    const p = [];
    return El(m, (S) => {
      p.push(S);
    }, !0), p;
  }, Nt = function(m, p) {
    const S = Fy();
    Fo(Vt(m), (z) => {
      B(z) === Bn.element && Xy(S, z);
    }), Fo(p, (z) => {
      B(z) === Bn.element && !bm(S, z) && Di(z);
    });
  }, _r = function(m, p) {
    let S = !1;
    return Fo(o.removed, (z) => {
      z.element && (S = S || z.element === m, Al(z.element));
    }), Nt(m, p), S;
  }, ou = 8, Or = function(m, p) {
    const S = ln;
    let z = null;
    const j = () => (z || (z = Fy(), Fo(p, (I) => {
      Xy(z, I);
    })), z);
    for (let I = 0; ; I++) {
      const te = Vt(m), he = [m];
      let gt = !1;
      if (Fo(te, (Me) => {
        B(Me) === Bn.documentFragment ? ym(he, Me) : !gt && !bm(S, Me) && (gt = bm(j(), Me));
      }), !gt) return;
      if (I >= ou) throw Xo("the tree kept changing during in-place sanitization; refusing to return it");
      Fo(he, (Me, Be) => {
        Ri(Me, Be > 0, m, j());
      });
    }
  }, Ri = function(m, p, S, z) {
    const j = Ha(m);
    let I;
    for (; I = j.nextNode(); )
      !bm(z, I) || bm(ln, I) || (p && zt(se.uponSanitizeShadowNode, I, null), Qt(I, S), Ya(I, S), wt(I.content) && An(I.content));
  }, Ua = function(m) {
    ln && Xy(ln, m);
  }, Mi = function(m, p) {
    return nn ? m === "patchsrc" ? !0 : m === "for" && p !== "label" && p !== "output" : !1;
  }, jt = function(m) {
    nn && El(m, (p) => {
      const S = B(p);
      if (S === Bn.processingInstruction || S === Bn.comment && Wl($b, p.data)) {
        try {
          ne(p);
        } catch {
        }
        return !1;
      }
      if (S === Bn.element) {
        const z = p, j = He(K(p));
        try {
          z.hasAttribute && z.hasAttribute("patchsrc") && z.removeAttribute("patchsrc"), z.hasAttribute && z.hasAttribute("for") && Mi("for", j) && z.removeAttribute("for");
        } catch {
        }
      }
      return !0;
    });
  }, ja = function(m) {
    let p = null, S = null;
    if (Fn) m = "<remove></remove>" + m;
    else {
      const I = Hb(m, /^[\r\n\t ]+/);
      S = I && I[0];
    }
    $n === "application/xhtml+xml" && Xn === Gt && (m = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + m + "</body></html>");
    const z = ye ? M(m) : m;
    if (Xn === Gt) try {
      p = new N().parseFromString(z, $n);
    } catch {
    }
    if (!p || !p.documentElement) {
      p = Ye.createDocument(Xn, "template", null);
      try {
        p.documentElement.innerHTML = aa ? je : z;
      } catch {
      }
    }
    const j = p.body || p.documentElement;
    return m && S && j.insertBefore(c.createTextNode(S), j.childNodes[0] || null), Xn === Gt ? P.call(p, Qn ? "html" : "body")[0] : Qn ? p.documentElement : j;
  }, Ha = function(m) {
    const p = $ ? $(m) : m.ownerDocument;
    return Se.call(p || m, m, x.SHOW_ELEMENT | x.SHOW_COMMENT | x.SHOW_TEXT | x.SHOW_PROCESSING_INSTRUCTION | x.SHOW_CDATA_SECTION, null);
  }, xl = function(m) {
    return m = vm(m, at, " "), m = vm(m, Cn, " "), m = vm(m, kn, " "), m;
  }, Rn = function(m) {
    var p;
    Cr(m);
    const S = (p = m.querySelectorAll) === null || p === void 0 ? void 0 : p.call(m, "template");
    S && Fo(S, (z) => {
      wt(z.content) && Rn(z.content);
    });
  }, Cr = function(m) {
    m.normalize();
    const p = $ ? $(m) : m.ownerDocument, S = Se.call(p || m, m, x.SHOW_TEXT | x.SHOW_COMMENT | x.SHOW_CDATA_SECTION | x.SHOW_PROCESSING_INSTRUCTION, null);
    let z = S.nextNode();
    for (; z; )
      z.data = xl(z.data), z = S.nextNode();
  }, ia = function(m) {
    const p = ae ? ae(m) : null;
    return typeof p != "string" || He(p) !== "form" ? !1 : typeof m.nodeName != "string" || typeof m.textContent != "string" || typeof m.removeChild != "function" || m.attributes !== ve(m) || typeof m.removeAttribute != "function" || typeof m.removeAttributeNode != "function" || typeof m.getAttributeNode != "function" || typeof m.setAttribute != "function" || typeof m.namespaceURI != "string" || typeof m.insertBefore != "function" || typeof m.hasChildNodes != "function" || m.nodeType !== le(m) || m.childNodes !== W(m);
  }, wt = function(m) {
    if (!le || typeof m != "object" || m === null) return !1;
    try {
      return le(m) === Bn.documentFragment;
    } catch {
      return !1;
    }
  }, oa = function(m) {
    if (!le || typeof m != "object" || m === null) return !1;
    try {
      return typeof le(m) == "number";
    } catch {
      return !1;
    }
  };
  function zt(m, p, S) {
    m.length !== 0 && Fo(m, (z) => {
      z.call(o, p, S, on);
    });
  }
  const Li = function(m, p) {
    return !!(nn && m.hasChildNodes() && !oa(m.firstElementChild) && Wl(Wy, m.textContent) && Wl(Wy, m.innerHTML) || nn && sT[p] && B(m) === Bn.element && Fe(m) === Gt && (oa(m.firstElementChild) || typeof m.textContent == "string" && Wl(Wy, m.textContent)) || m.nodeType === Bn.processingInstruction || nn && m.nodeType === Bn.comment && Wl($b, m.data));
  }, _l = function(m, p) {
    if (m instanceof RegExp) return Wl(m, p);
    if (m instanceof Function) {
      for (var S = arguments.length, z = new Array(S > 2 ? S - 2 : 0), j = 2; j < S; j++) z[j - 2] = arguments[j];
      return !!m(p, ...z);
    }
    return !1;
  }, uu = function(m, p, S) {
    if (!Vn[p] && Wn(p) && _l(Ot.tagNameCheck, p)) return !1;
    if (bl && !an[p] && !an[os(p)]) {
      const z = ee(m), j = W(m);
      if (j && z) {
        const I = j.length;
        for (let te = I - 1; te >= 0; --te) {
          const he = m === S ? R(j[te], !0) : j[te];
          z.insertBefore(he, F(m));
        }
      }
    }
    return At(m), !0;
  }, Ui = function(m, p, S, z) {
    return m.length === 0 ? p : p === S || p === z ? br(p) : p;
  }, En = function(m, p) {
    return m === p || ee(m) !== null ? !1 : (vl && Al(m), !0);
  }, Qt = function(m, p) {
    if (Ua(m), zt(se.beforeSanitizeElements, m, null), En(m, p)) return !0;
    if (ia(m))
      return At(m), !0;
    const S = He(K(m));
    if (Oe = Ui(se.uponSanitizeElement, Oe, na, za), zt(se.uponSanitizeElement, m, {
      tagName: S,
      allowedTags: Oe
    }), En(m, p)) return !0;
    if (Li(m, S))
      return At(m), !0;
    if (Vn[S] || !(zn.tagCheck instanceof Function && zn.tagCheck(S)) && !Oe[S]) {
      const z = uu(m, S, p);
      return z === !1 && (zt(se.afterSanitizeElements, m, null), En(m, p)) ? !0 : z;
    }
    if (B(m) === Bn.element && !Kn(m) || (S === "noscript" || S === "noembed" || S === "noframes") && Wl(cT, m.innerHTML))
      return At(m), !0;
    if (tn && m.nodeType === Bn.text) {
      const z = xl(m.textContent);
      m.textContent !== z && (ym(o.removed, { element: m.cloneNode() }), m.textContent = z);
    }
    return zt(se.afterSanitizeElements, m, null), En(m, p);
  }, qa = function(m, p, S) {
    if (Oa[p] || Mi(p, m) || Ei && (p === "id" || p === "name") && (S in c || S in xr)) return !1;
    const z = Re[p] || zn.attributeCheck instanceof Function && zn.attributeCheck(p, m);
    return st && Wl(ct, p) || Ti && Wl(kr, p) ? !0 : z ? Ra[p] || Wl(Nn, vm(S, xa, "")) || (p === "src" || p === "xlink:href" || p === "href") && m !== "script" && qb(S, "data:") === 0 && _i[m] || ki && !Wl(Aa, vm(S, xa, "")) ? !0 : !S : Wn(m) && _l(Ot.tagNameCheck, m) && _l(Ot.attributeNameCheck, p, m) || p === "is" && Ot.allowCustomizedBuiltInElements && _l(Ot.tagNameCheck, S);
  }, Nr = vt({}, [
    "annotation-xml",
    "color-profile",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-src",
    "font-face-uri",
    "missing-glyph"
  ]), Wn = function(m) {
    return !Nr[os(m)] && Wl(wi, m);
  }, Ol = function(m, p, S, z) {
    if (ye && typeof U == "object" && typeof U.getAttributeType == "function" && !S) switch (U.getAttributeType(m, p)) {
      case "TrustedHTML":
        return M(z);
      case "TrustedScriptURL":
        return q(z);
    }
    return z;
  }, ji = function(m, p, S, z) {
    try {
      return S ? m.setAttributeNS(S, p, z) : m.setAttribute(p, z), ia(m) ? (At(m), !1) : !0;
    } catch {
      return In(p, m), !1;
    }
  }, Ba = function(m, p) {
    return nn && Wl(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, p) ? !0 : os(m) === "attributename" && Hb(p, "href") !== null;
  }, Ya = function(m, p) {
    if (zt(se.beforeSanitizeAttributes, m, null), En(m, p)) return;
    const S = m.attributes;
    if (!S || ia(m)) return;
    Re = Ui(se.uponSanitizeAttribute, Re, _a, Da);
    const z = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: Re,
      forceKeepAttr: void 0
    };
    let j = S.length;
    const I = He(m.nodeName);
    for (; j--; ) {
      const te = S[j], he = te.name, gt = te.namespaceURI, Me = te.value, Be = He(he), ft = Me;
      let ut = he === "value" ? ft : Fw(ft), Mn = !1;
      if (z.attrName = Be, z.attrValue = ut, z.keepAttr = !0, z.forceKeepAttr = void 0, zt(se.uponSanitizeAttribute, m, z), ut = z.attrValue, Ai && (Be === "id" || Be === "name") && qb(ut, xi) !== 0 && (In(he, m, te), ut = xi + ut, Mn = !0), Ba(he, ut)) {
        In(he, m, te);
        continue;
      }
      if (!z.forceKeepAttr) {
        if (!z.keepAttr) {
          In(he, m, te);
          continue;
        }
        if (!Ca && Wl(Pb, ut)) {
          In(he, m, te);
          continue;
        }
        if (tn && (ut = xl(ut)), !qa(I, Be, ut)) {
          In(he, m, te);
          continue;
        }
        ut = Ol(I, Be, gt, ut), ut !== ft && ji(m, he, gt, ut) && Mn && jb(o.removed);
      }
    }
    zt(se.afterSanitizeAttributes, m, null), En(m, p);
  }, An = function(m) {
    let p = null;
    const S = Ha(m);
    for (zt(se.beforeSanitizeShadowDOM, m, null); p = S.nextNode(); )
      if (zt(se.uponSanitizeShadowNode, p, null), Qt(p, m), Ya(p, m), wt(p.content) && An(p.content), B(p) === Bn.element) {
        const z = Y(p);
        wt(z) && (Ft(z), An(z));
      }
    tn && Cr(m), zt(se.afterSanitizeShadowDOM, m, null);
  }, Ft = function(m) {
    const p = [{
      node: m,
      shadow: null
    }];
    for (; p.length > 0; ) {
      const S = p.pop();
      if (S.shadow) {
        An(S.shadow);
        continue;
      }
      const z = S.node, j = B(z) === Bn.element, I = W(z);
      if (I) for (let te = I.length - 1; te >= 0; --te) p.push({
        node: I[te],
        shadow: null
      });
      if (j) {
        const te = ae ? ae(z) : null;
        if (typeof te == "string" && He(te) === "template") {
          const he = z.content;
          wt(he) && p.push({
            node: he,
            shadow: null
          });
        }
      }
      if (j) {
        const te = Y(z);
        wt(te) && p.push({
          node: null,
          shadow: te
        }, {
          node: te,
          shadow: null
        });
      }
    }
  };
  return o.sanitize = function(m) {
    let p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, S = null, z = null, j = null, I = null;
    if (aa = !m, aa && (m = "<!-->"), typeof m != "string" && !oa(m) && (m = Zw(m), typeof m != "string"))
      throw Xo("dirty is not a string, aborting");
    if (!o.isSupported) return m;
    Na ? (Oe = za, Re = Da) : Dn(p), (se.uponSanitizeElement.length > 0 || se.uponSanitizeAttribute.length > 0) && (Oe = br(Oe)), se.uponSanitizeAttribute.length > 0 && (Re = br(Re)), o.removed = [];
    const te = vl && typeof m != "string" && oa(m);
    let he = [];
    const gt = ln;
    if (te) {
      jt(m);
      const ft = K(m);
      if (typeof ft == "string") {
        const ut = He(ft);
        if (!Oe[ut] || Vn[ut])
          throw La(m), Xo("root node is forbidden and cannot be sanitized in-place");
      }
      if (ia(m))
        throw La(m), Xo("root node is clobbered and cannot be sanitized in-place");
      he = Vt(m), ln = Fy();
    } else if (oa(m))
      S = ja("<!---->"), z = S.ownerDocument.importNode(m, !0), z.nodeType === Bn.element && z.nodeName === "BODY" || z.nodeName === "HTML" ? S = z : S.appendChild(z), Ft(S);
    else {
      if (!Pe && !tn && !Qn && m.indexOf("<") === -1) return ye && rt ? M(m) : m;
      if (S = ja(m), !S) return Pe ? null : rt ? je : "";
    }
    S && Fn && At(S.firstChild);
    const Me = te ? m : S;
    try {
      te && Ft(m);
      const ft = Ha(Me);
      for (; j = ft.nextNode(); )
        Qt(j, Me), Ya(j, Me), wt(j.content) && An(j.content);
      te && Or(m, he);
    } catch (ft) {
      throw te && (La(m), _r(m, he)), ft;
    } finally {
      ln = gt;
    }
    if (te) {
      if (_r(m, he)) throw Xo("a node selected for removal could not be safely returned; refusing to sanitize in place");
      return tn && Rn(m), m;
    }
    if (Pe) {
      if (tn && Rn(S), Yt)
        for (I = ce.call(S.ownerDocument); S.firstChild; ) I.appendChild(S.firstChild);
      else I = S;
      return (Re.shadowroot || Re.shadowrootmode) && (I = be.call(d, I, !0)), I;
    }
    let Be = Qn ? S.outerHTML : S.innerHTML;
    return Qn && Oe["!doctype"] && S.ownerDocument && S.ownerDocument.doctype && S.ownerDocument.doctype.name && Wl(oT, S.ownerDocument.doctype.name) && (Be = "<!DOCTYPE " + S.ownerDocument.doctype.name + `>
` + Be), tn && (Be = xl(Be)), ye && rt ? M(Be) : Be;
  }, o.setConfig = function() {
    let m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Dn(m), Na = !0, za = Oe, Da = Re;
  }, o.clearConfig = function() {
    on = null, Na = !1, za = null, Da = null, ye = Ee, je = "";
  }, o.isValidAttribute = function(m, p, S) {
    on || Dn({});
    const z = He(m), j = He(p);
    return typeof S == "string" && (Ba(p, S) || !Ca && Wl(Pb, S)) ? !1 : qa(z, j, S);
  }, o.addHook = function(m, p) {
    typeof p == "function" && Ea(se, m) && ym(se[m], p);
  }, o.removeHook = function(m, p) {
    if (Ea(se, m)) {
      if (p !== void 0) {
        const S = Gw(se[m], p);
        return S === -1 ? void 0 : Qw(se[m], S, 1)[0];
      }
      return jb(se[m]);
    }
  }, o.removeHooks = function(m) {
    Ea(se, m) && (se[m] = []);
  }, o.removeAllHooks = function() {
    se = Zb();
  }, o;
}
var Kb = S1();
let Ym = null;
function pT() {
  return Ym || (typeof window < "u" ? Ym = Kb(window) : Ym = Kb), Ym;
}
const _s = (i) => ({ __html: pT().sanitize(i) });
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
const mT = ({
  event: i = "",
  action: o = "",
  name: c = "",
  type: d = "",
  section: s = "",
  text: y = "",
  region: T = "",
  component: _ = "",
  eventCallback: x,
  eventTimeout: N
}) => {
  const { dataLayer: U } = window, L = {
    event: i.toLowerCase(),
    action: o.toLowerCase(),
    name: c.toLowerCase(),
    type: d.toLowerCase(),
    region: T.toLowerCase(),
    section: s.toLowerCase(),
    text: y.toLowerCase(),
    component: _.toLowerCase()
  };
  x && (L.eventCallback = x), N && (L.eventTimeout = N), U ? U.push(L) : x && x();
}, Um = ({ children: i }) => /* @__PURE__ */ V.jsx(V.Fragment, { children: i });
Um.propTypes = {
  children: g.oneOfType([
    g.arrayOf(g.node),
    g.node,
    g.string
  ])
};
var Ib = { exports: {} }, Wb;
function hT() {
  return Wb || (Wb = 1, (function(i) {
    (function() {
      var o = {}.hasOwnProperty;
      function c() {
        for (var y = "", T = 0; T < arguments.length; T++) {
          var _ = arguments[T];
          _ && (y = s(y, d(_)));
        }
        return y;
      }
      function d(y) {
        if (typeof y == "string" || typeof y == "number")
          return y;
        if (typeof y != "object")
          return "";
        if (Array.isArray(y))
          return c.apply(null, y);
        if (y.toString !== Object.prototype.toString && !y.toString.toString().includes("[native code]"))
          return y.toString();
        var T = "";
        for (var _ in y)
          o.call(y, _) && y[_] && (T = s(T, _));
        return T;
      }
      function s(y, T) {
        return T ? y ? y + " " + T : y + T : y;
      }
      i.exports ? (c.default = c, i.exports = c) : window.classNames = c;
    })();
  })(Ib)), Ib.exports;
}
var gT = hT();
const Zo = /* @__PURE__ */ V0(gT);
({
  ...Um.propTypes
});
const w1 = ({ children: i, className: o = "container", ...c }) => /* @__PURE__ */ V.jsx("div", { className: o, ...c, children: /* @__PURE__ */ V.jsx("div", { className: "row", children: i }) });
w1.propTypes = {
  children: Um.propTypes.children
};
({
  ...w1.propTypes
});
Um.propTypes.children, g.oneOf(["0", "3", "4", "6", "8", "9", "12"]);
Um.propTypes.children;
const yT = g.shape({
  url: g.string,
  altText: g.string,
  cssClass: g.arrayOf(g.string),
  size: g.oneOf(["small", "medium", "large"])
}), e0 = g.shape({
  text: g.string,
  maxWidth: g.string,
  cssClass: g.arrayOf(g.string),
  highlightColor: g.oneOf(["gold", "black"])
}), T1 = g.shape({
  color: g.oneOf(["gold", "maroon", "gray", "dark"]),
  content: g.shape({
    icon: g.arrayOf(g.string),
    header: g.string,
    body: g.string
  })
}), Q0 = g.shape({
  text: g.string,
  name: g.string,
  event: g.string,
  action: g.string,
  type: g.string,
  region: g.string,
  section: g.string,
  component: g.string
}), bT = "staticMarkup";
function vT() {
  const i = t1().indexOf(bT) > -1 ? !0 : void 0;
  return {
    isBootstrap: i,
    isReact: i ? void 0 : !0
  };
}
const ms = ({ gaData: i, prefix: o = "", children: c }) => {
  const { isReact: d } = vT(), { onClick: s, ...y } = c.props;
  if (d)
    return _t.cloneElement(c, {
      ...y,
      onClick: (x) => (i && i.event && i.action && mT(i), s ? s(x) : !0)
    });
  let T = "";
  ["input", "header", "header-input"].includes(o) && (T = `-${o}`);
  const _ = {
    [`data-ga${T}`]: i.text,
    [`data-ga${T}-name`]: i.name,
    [`data-ga${T}-event`]: i.event,
    [`data-ga${T}-action`]: i.action,
    [`data-ga${T}-type`]: i.type,
    [`data-ga${T}-region`]: i.region,
    [`data-ga${T}-section`]: i.section,
    [`data-ga${T}-component`]: i.component
  };
  return _t.cloneElement(c, {
    ...y,
    onClick: s,
    ..._
  });
};
g.number, g.string, g.number, g.func, g.object;
g.arrayOf(T1).isRequired, g.number;
const Jb = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, F0 = ({
  label: i = "",
  cardTitle: o = "",
  gaData: c,
  ariaLabel: d,
  block: s,
  color: y = "gray",
  disabled: T,
  element: _ = "button",
  href: x,
  icon: N,
  innerRef: U,
  onClick: L,
  size: R = "default",
  variant: ne,
  classes: G,
  target: F = "_self",
  ...W
}) => {
  if (ne) {
    const ve = {
      borderless: "borderless",
      outline: "outline",
      filled: "filled"
    }, le = Zo("btn", ve[ne], {
      [`btn-${ve[ne]}-${y}`]: !0,
      "btn-medium": R === "medium",
      "btn-small": R === "small",
      "btn-large": R === "large" || R === "default",
      disabled: T
    });
    let ae = _;
    return x && _ === "button" && (ae = "a"), /* @__PURE__ */ V.jsx(
      ms,
      {
        gaData: {
          ...Jb,
          section: o,
          ...c,
          text: i
        },
        children: /* @__PURE__ */ V.jsxs(
          ae,
          {
            type: ae === "button" && L ? "button" : void 0,
            ...W,
            className: Zo(G) || le,
            href: x,
            ref: U,
            onClick: L,
            "aria-label": d,
            target: ae === "a" ? F : null,
            disabled: T,
            children: [
              N && /* @__PURE__ */ V.jsx("i", { className: `${N == null ? void 0 : N[0]} fa-${N == null ? void 0 : N[1]} me-1` }),
              i
            ]
          }
        )
      }
    );
  }
  const ee = Zo("btn", {
    [`btn-${y}`]: !0,
    "btn-md": R === "small",
    "btn-sm": R === "xsmall",
    "btn-block": s,
    disabled: T
  });
  let Y = _;
  return x && _ === "button" && (Y = "a"), /* @__PURE__ */ V.jsx(
    ms,
    {
      gaData: {
        ...Jb,
        section: o,
        // @deprecated - remove at some point
        ...c,
        text: i
      },
      children: /* @__PURE__ */ V.jsxs(
        Y,
        {
          type: Y === "button" && L ? "button" : void 0,
          ...W,
          className: Zo(G) || ee,
          href: x,
          ref: U,
          onClick: L,
          "aria-label": d,
          target: Y === "a" ? F : null,
          children: [
            N && /* @__PURE__ */ V.jsx("i", { className: `${N == null ? void 0 : N[0]} fa-${N == null ? void 0 : N[1]} me-1` }),
            i
          ]
        }
      )
    }
  );
};
F0.propTypes = {
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
  gaData: Q0,
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
function ST(i) {
  var o = /* @__PURE__ */ Object.create(null);
  return function(c) {
    return o[c] === void 0 && (o[c] = i(c)), o[c];
  };
}
var wT = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, TT = /* @__PURE__ */ ST(
  function(i) {
    return wT.test(i) || i.charCodeAt(0) === 111 && i.charCodeAt(1) === 110 && i.charCodeAt(2) < 91;
  }
  /* Z+1 */
), hn = "-ms-", Cm = "-moz-", kt = "-webkit-", k1 = "comm", mh = "rule", X0 = "decl", kT = "@import", ET = "@namespace", E1 = "@keyframes", AT = "@layer", A1 = Math.abs, $0 = String.fromCharCode, O0 = Object.assign;
function xT(i, o) {
  return ml(i, 0) ^ 45 ? (((o << 2 ^ ml(i, 0)) << 2 ^ ml(i, 1)) << 2 ^ ml(i, 2)) << 2 ^ ml(i, 3) : 0;
}
function x1(i) {
  return i.trim();
}
function $o(i, o) {
  return (i = o.exec(i)) ? i[0] : i;
}
function tt(i, o, c) {
  return i.replace(o, c);
}
function Zm(i, o, c) {
  return i.indexOf(o, c);
}
function ml(i, o) {
  return i.charCodeAt(o) | 0;
}
function hs(i, o, c) {
  return i.slice(o, c);
}
function hi(i) {
  return i.length;
}
function _1(i) {
  return i.length;
}
function Am(i, o) {
  return o.push(i), i;
}
function _T(i, o) {
  return i.map(o).join("");
}
function ev(i, o) {
  return i.filter(function(c) {
    return !$o(c, o);
  });
}
var hh = 1, Ns = 1, O1 = 0, wr = 0, Yn = 0, Ms = "";
function gh(i, o, c, d, s, y, T, _) {
  return { value: i, root: o, parent: c, type: d, props: s, children: y, line: hh, column: Ns, length: T, return: "", siblings: _ };
}
function Wo(i, o) {
  return O0(gh("", null, null, "", null, null, 0, i.siblings), i, { length: -i.length }, o);
}
function ks(i) {
  for (; i.root; )
    i = Wo(i.root, { children: [i] });
  Am(i, i.siblings);
}
function OT() {
  return Yn;
}
function CT() {
  return Yn = wr > 0 ? ml(Ms, --wr) : 0, Ns--, Yn === 10 && (Ns = 1, hh--), Yn;
}
function yi() {
  return Yn = wr < O1 ? ml(Ms, wr++) : 0, Ns++, Yn === 10 && (Ns = 1, hh++), Yn;
}
function nu() {
  return ml(Ms, wr);
}
function Km() {
  return wr;
}
function yh(i, o) {
  return hs(Ms, i, o);
}
function Rm(i) {
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
function NT(i) {
  return hh = Ns = 1, O1 = hi(Ms = i), wr = 0, [];
}
function zT(i) {
  return Ms = "", i;
}
function t0(i) {
  return x1(yh(wr - 1, C0(i === 91 ? i + 2 : i === 40 ? i + 1 : i)));
}
function DT(i) {
  for (; (Yn = nu()) && Yn < 33; )
    yi();
  return Rm(i) > 2 || Rm(Yn) > 3 ? "" : " ";
}
function RT(i, o) {
  for (; --o && yi() && !(Yn < 48 || Yn > 102 || Yn > 57 && Yn < 65 || Yn > 70 && Yn < 97); )
    ;
  return yh(i, Km() + (o < 6 && nu() == 32 && yi() == 32));
}
function C0(i) {
  for (; yi(); )
    switch (Yn) {
      // ] ) " '
      case i:
        return wr;
      // " '
      case 34:
      case 39:
        i !== 34 && i !== 39 && C0(Yn);
        break;
      // (
      case 40:
        i === 41 && C0(i);
        break;
      // \
      case 92:
        yi();
        break;
    }
  return wr;
}
function MT(i, o) {
  for (; yi() && i + Yn !== 57 && !(i + Yn === 84 && nu() === 47); )
    ;
  return "/*" + yh(o, wr - 1) + "*" + $0(i === 47 ? i : yi());
}
function LT(i) {
  for (; !Rm(nu()); )
    yi();
  return yh(i, wr);
}
function UT(i) {
  return zT(Im("", null, null, null, [""], i = NT(i), 0, [0], i));
}
function Im(i, o, c, d, s, y, T, _, x) {
  for (var N = 0, U = 0, L = T, R = 0, ne = 0, G = 0, F = 1, W = 1, ee = 1, Y = 0, ve = "", le = s, ae = y, $ = d, B = ve; W; )
    switch (G = Y, Y = yi()) {
      // (
      case 40:
        if (G != 108 && ml(B, L - 1) == 58) {
          Zm(B += tt(t0(Y), "&", "&\f"), "&\f", A1(N ? _[N - 1] : 0)) != -1 && (ee = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        B += t0(Y);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        B += DT(G);
        break;
      // \
      case 92:
        B += RT(Km() - 1, 7);
        continue;
      // /
      case 47:
        switch (nu()) {
          case 42:
          case 47:
            Am(jT(MT(yi(), Km()), o, c, x), x), (Rm(G || 1) == 5 || Rm(nu() || 1) == 5) && hi(B) && hs(B, -1, void 0) !== " " && (B += " ");
            break;
          default:
            B += "/";
        }
        break;
      // {
      case 123 * F:
        _[N++] = hi(B) * ee;
      // } ; \0
      case 125 * F:
      case 59:
      case 0:
        switch (Y) {
          // \0 }
          case 0:
          case 125:
            W = 0;
          // ;
          case 59 + U:
            ee == -1 && (B = tt(B, /\f/g, "")), ne > 0 && (hi(B) - L || F === 0 && G === 47) && Am(ne > 32 ? nv(B + ";", d, c, L - 1, x) : nv(tt(B, " ", "") + ";", d, c, L - 2, x), x);
            break;
          // @ ;
          case 59:
            B += ";";
          // { rule/at-rule
          default:
            if (Am($ = tv(B, o, c, N, U, s, _, ve, le = [], ae = [], L, y), y), Y === 123)
              if (U === 0)
                Im(B, o, $, $, le, y, L, _, ae);
              else {
                switch (R) {
                  // c(ontainer)
                  case 99:
                    if (ml(B, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if (ml(B, 2) === 97) break;
                  default:
                    U = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                U ? Im(i, $, $, d && Am(tv(i, $, $, 0, 0, s, _, ve, s, le = [], L, ae), ae), s, ae, L, _, d ? le : ae) : Im(B, $, $, $, [""], ae, 0, _, ae);
              }
        }
        N = U = ne = 0, F = ee = 1, ve = B = "", L = T;
        break;
      // :
      case 58:
        L = 1 + hi(B), ne = G;
      default:
        if (F < 1) {
          if (Y == 123)
            --F;
          else if (Y == 125 && F++ == 0 && CT() == 125)
            continue;
        }
        switch (B += $0(Y), Y * F) {
          // &
          case 38:
            ee = U > 0 ? 1 : (B += "\f", -1);
            break;
          // ,
          case 44:
            _[N++] = (hi(B) - 1) * ee, ee = 1;
            break;
          // @
          case 64:
            nu() === 45 && (B += t0(yi())), R = nu(), U = L = hi(ve = B += LT(Km())), Y++;
            break;
          // -
          case 45:
            G === 45 && hi(B) == 2 && (F = 0);
        }
    }
  return y;
}
function tv(i, o, c, d, s, y, T, _, x, N, U, L) {
  for (var R = s - 1, ne = s === 0 ? y : [""], G = _1(ne), F = 0, W = 0, ee = 0; F < d; ++F)
    for (var Y = 0, ve = hs(i, R + 1, R = A1(W = T[F])), le = i; Y < G; ++Y)
      (le = x1(W > 0 ? ne[Y] + " " + ve : tt(ve, /&\f/g, ne[Y]))) && (x[ee++] = le);
  return gh(i, o, c, s === 0 ? mh : _, x, N, U, L);
}
function jT(i, o, c, d) {
  return gh(i, o, c, k1, $0(OT()), hs(i, 2, -2), 0, d);
}
function nv(i, o, c, d, s) {
  return gh(i, o, c, X0, hs(i, 0, d), hs(i, d + 1, -1), d, s);
}
function C1(i, o, c) {
  switch (xT(i, o)) {
    // color-adjust
    case 5103:
      return kt + "print-" + i + i;
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
      return kt + i + i;
    // mask-composite
    case 4855:
      return kt + i.replace("add", "source-over").replace("substract", "source-out").replace("intersect", "source-in").replace("exclude", "xor") + i;
    // tab-size
    case 4789:
      return Cm + i + i;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return kt + i + Cm + i + hn + i + i;
    // writing-mode
    case 5936:
      switch (ml(i, o + 11)) {
        // vertical-l(r)
        case 114:
          return kt + i + hn + tt(i, /[svh]\w+-[tblr]{2}/, "tb") + i;
        // vertical-r(l)
        case 108:
          return kt + i + hn + tt(i, /[svh]\w+-[tblr]{2}/, "tb-rl") + i;
        // horizontal(-)tb
        case 45:
          return kt + i + hn + tt(i, /[svh]\w+-[tblr]{2}/, "lr") + i;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return kt + i + hn + i + i;
    // order
    case 6165:
      return kt + i + hn + "flex-" + i + i;
    // align-items
    case 5187:
      return kt + i + tt(i, /(\w+).+(:[^]+)/, kt + "box-$1$2" + hn + "flex-$1$2") + i;
    // align-self
    case 5443:
      return kt + i + hn + "flex-item-" + tt(i, /flex-|-self/g, "") + ($o(i, /flex-|baseline/) ? "" : hn + "grid-row-" + tt(i, /flex-|-self/g, "")) + i;
    // align-content
    case 4675:
      return kt + i + hn + "flex-line-pack" + tt(i, /align-content|flex-|-self/g, "") + i;
    // flex-shrink
    case 5548:
      return kt + i + hn + tt(i, "shrink", "negative") + i;
    // flex-basis
    case 5292:
      return kt + i + hn + tt(i, "basis", "preferred-size") + i;
    // flex-grow
    case 6060:
      return kt + "box-" + tt(i, "-grow", "") + kt + i + hn + tt(i, "grow", "positive") + i;
    // transition
    case 4554:
      return kt + tt(i, /([^-])(transform)/g, "$1" + kt + "$2") + i;
    // cursor
    case 6187:
      return tt(tt(tt(i, /(zoom-|grab)/, kt + "$1"), /(image-set)/, kt + "$1"), i, "") + i;
    // background, background-image
    case 5495:
    case 3959:
      return tt(i, /(image-set\([^]*)/, kt + "$1$`$1");
    // justify-content
    case 4968:
      return tt(tt(i, /(.+:)(flex-)?(.*)/, kt + "box-pack:$3" + hn + "flex-pack:$3"), /space-between/, "justify") + kt + i + i;
    // justify-self
    case 4200:
      if (!$o(i, /flex-|baseline/)) return hn + "grid-column-align" + hs(i, o) + i;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return hn + tt(i, "template-", "") + i;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return c && c.some(function(d, s) {
        return o = s, $o(d.props, /grid-\w+-end/);
      }) ? ~Zm(i + (c = c[o].value), "span", 0) ? i : hn + tt(i, "-start", "") + i + hn + "grid-row-span:" + (~Zm(c, "span", 0) ? $o(c, /\d+/) : +$o(c, /\d+/) - +$o(i, /\d+/)) + ";" : hn + tt(i, "-start", "") + i;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return c && c.some(function(d) {
        return $o(d.props, /grid-\w+-start/);
      }) ? i : hn + tt(tt(i, "-end", "-span"), "span ", "") + i;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return tt(i, /(.+)-inline(.+)/, kt + "$1$2") + i;
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
      if (hi(i) - 1 - o > 6)
        switch (ml(i, o + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (ml(i, o + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return tt(i, /(.+:)(.+)-([^]+)/, "$1" + kt + "$2-$3$1" + Cm + (ml(i, o + 3) == 108 ? "$3" : "$2-$3")) + i;
          // (s)tretch
          case 115:
            return ~Zm(i, "stretch", 0) ? C1(tt(i, "stretch", "fill-available"), o, c) + i : i;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return tt(i, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(d, s, y, T, _, x, N) {
        return hn + s + ":" + y + N + (T ? hn + s + "-span:" + (_ ? x : +x - +y) + N : "") + i;
      });
    // position: sticky
    case 4949:
      if (ml(i, o + 6) === 121)
        return tt(i, ":", ":" + kt) + i;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (ml(i, ml(i, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return tt(i, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + kt + (ml(i, 14) === 45 ? "inline-" : "") + "box$3$1" + kt + "$2$3$1" + hn + "$2box$3") + i;
        // (inline-)?gri(d)
        case 100:
          return tt(i, ":", ":" + hn) + i;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return tt(i, "scroll-", "scroll-snap-") + i;
  }
  return i;
}
function oh(i, o) {
  for (var c = "", d = 0; d < i.length; d++)
    c += o(i[d], d, i, o) || "";
  return c;
}
function HT(i, o, c, d) {
  switch (i.type) {
    case AT:
      if (i.children.length) break;
    case kT:
    case ET:
    case X0:
      return i.return = i.return || i.value;
    case k1:
      return "";
    case E1:
      return i.return = i.value + "{" + oh(i.children, d) + "}";
    case mh:
      if (!hi(i.value = i.props.join(","))) return "";
  }
  return hi(c = oh(i.children, d)) ? i.return = i.value + "{" + c + "}" : "";
}
function qT(i) {
  var o = _1(i);
  return function(c, d, s, y) {
    for (var T = "", _ = 0; _ < o; _++)
      T += i[_](c, d, s, y) || "";
    return T;
  };
}
function BT(i) {
  return function(o) {
    o.root || (o = o.return) && i(o);
  };
}
function YT(i, o, c, d) {
  if (i.length > -1 && !i.return)
    switch (i.type) {
      case X0:
        i.return = C1(i.value, i.length, c);
        return;
      case E1:
        return oh([Wo(i, { value: tt(i.value, "@", "@" + kt) })], d);
      case mh:
        if (i.length)
          return _T(c = i.props, function(s) {
            switch ($o(s, d = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                ks(Wo(i, { props: [tt(s, /:(read-\w+)/, ":" + Cm + "$1")] })), ks(Wo(i, { props: [s] })), O0(i, { props: ev(c, d) });
                break;
              // :placeholder
              case "::placeholder":
                ks(Wo(i, { props: [tt(s, /:(plac\w+)/, ":" + kt + "input-$1")] })), ks(Wo(i, { props: [tt(s, /:(plac\w+)/, ":" + Cm + "$1")] })), ks(Wo(i, { props: [tt(s, /:(plac\w+)/, hn + "input-$1")] })), ks(Wo(i, { props: [s] })), O0(i, { props: ev(c, d) });
                break;
            }
            return "";
          });
    }
}
var Ht = { env: { NODE_ENV: "production" } }, n0, l0;
const gs = typeof Ht < "u" && Ht.env !== void 0 && (Ht.env.REACT_APP_SC_ATTR || Ht.env.SC_ATTR) || "data-styled", N1 = "active", z1 = "data-styled-version", bh = "6.4.2", P0 = `/*!sc*/
`, Nm = typeof window < "u" && typeof document < "u";
function lv(i) {
  if (typeof Ht < "u" && Ht.env !== void 0) {
    const o = Ht.env[i];
    if (o !== void 0 && o !== "") return o !== "false";
  }
}
const GT = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : (l0 = (n0 = lv("REACT_APP_SC_DISABLE_SPEEDY")) !== null && n0 !== void 0 ? n0 : lv("SC_DISABLE_SPEEDY")) !== null && l0 !== void 0 ? l0 : typeof Ht < "u" && Ht.env !== void 0 && Ht.env.NODE_ENV !== "production"), VT = "sc-keyframes-", QT = Ht.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function jm(i, ...o) {
  return Ht.env.NODE_ENV === "production" ? new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${i} for more information.${o.length > 0 ? ` Args: ${o.join(", ")}` : ""}`) : new Error((function(...c) {
    let d = c[0];
    const s = [];
    for (let y = 1, T = c.length; y < T; y += 1) s.push(c[y]);
    return s.forEach((y) => {
      d = d.replace(/%[a-z]/, y);
    }), d;
  })(QT[i], ...o).trim());
}
const FT = 1 << 30;
let Wm = /* @__PURE__ */ new Map(), uh = /* @__PURE__ */ new Map(), Jm = 1;
const Gm = (i) => {
  if (Wm.has(i)) return Wm.get(i);
  for (; uh.has(Jm); ) Jm++;
  const o = Jm++;
  if (Ht.env.NODE_ENV !== "production" && ((0 | o) < 0 || o > FT)) throw jm(16, `${o}`);
  return Wm.set(i, o), uh.set(o, i), o;
}, XT = (i) => uh.get(i), $T = (i, o) => {
  Jm = o + 1, Wm.set(i, o), uh.set(o, i);
}, av = /invalid hook call/i, Vm = /* @__PURE__ */ new Set(), PT = (i, o) => {
  if (Ht.env.NODE_ENV !== "production") {
    const c = `The component ${i}${o ? ` with the id of "${o}"` : ""} has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, d = console.error;
    try {
      let s = !0;
      console.error = (y, ...T) => {
        av.test(y) ? (s = !1, Vm.delete(c)) : d(y, ...T);
      }, typeof _t.useState == "function" && _t.useState(null), s && !Vm.has(c) && (console.warn(c), Vm.add(c));
    } catch (s) {
      av.test(s.message) && Vm.delete(c);
    } finally {
      console.error = d;
    }
  }
}, Z0 = Object.freeze([]), zs = Object.freeze({});
function ZT(i, o, c = zs) {
  return i.theme !== c.theme && i.theme || o || c.theme;
}
const KT = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, IT = /(^-|-$)/g;
function D1(i) {
  return i.replace(KT, "-").replace(IT, "");
}
const WT = /(a)(d)/gi, rv = (i) => String.fromCharCode(i + (i > 25 ? 39 : 97));
function R1(i) {
  let o, c = "";
  for (o = Math.abs(i); o > 52; o = o / 52 | 0) c = rv(o % 52) + c;
  return (rv(o % 52) + c).replace(WT, "$1-$2");
}
const N0 = 5381, ss = (i, o) => {
  let c = o.length;
  for (; c; ) i = 33 * i ^ o.charCodeAt(--c);
  return i;
}, M1 = (i) => ss(N0, i);
function JT(i) {
  return R1(M1(i) >>> 0);
}
function K0(i) {
  return Ht.env.NODE_ENV !== "production" && typeof i == "string" && i || i.displayName || i.name || "Component";
}
function eh(i) {
  return typeof i == "string" && (Ht.env.NODE_ENV === "production" || i.charAt(0) === i.charAt(0).toLowerCase());
}
function ek(i) {
  return eh(i) ? `styled.${i}` : `Styled(${K0(i)})`;
}
const L1 = Symbol.for("react.memo"), tk = Symbol.for("react.forward_ref"), nk = { contextType: !0, defaultProps: !0, displayName: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, propTypes: !0, type: !0 }, lk = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, U1 = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, ak = { [tk]: { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, [L1]: U1 };
function iv(i) {
  return ("type" in (o = i) && o.type.$$typeof) === L1 ? U1 : "$$typeof" in i ? ak[i.$$typeof] : nk;
  var o;
}
const rk = Object.defineProperty, ik = Object.getOwnPropertyNames, ok = Object.getOwnPropertySymbols, uk = Object.getOwnPropertyDescriptor, ck = Object.getPrototypeOf, sk = Object.prototype;
function j1(i, o, c) {
  if (typeof o != "string") {
    const d = ck(o);
    d && d !== sk && j1(i, d, c);
    const s = ik(o).concat(ok(o)), y = iv(i), T = iv(o);
    for (let _ = 0; _ < s.length; ++_) {
      const x = s[_];
      if (!(x in lk || c && c[x] || T && x in T || y && x in y)) {
        const N = uk(o, x);
        try {
          rk(i, x, N);
        } catch {
        }
      }
    }
  }
  return i;
}
function vh(i) {
  return typeof i == "function";
}
const fk = Symbol.for("react.forward_ref");
function H1(i) {
  return i != null && (typeof i == "object" || typeof i == "function") && i.$$typeof === fk && "styledComponentId" in i;
}
function xm(i, o) {
  return i && o ? i + " " + o : i || o || "";
}
function ov(i, o) {
  return i.join("");
}
function ys(i) {
  return i !== null && typeof i == "object" && i.constructor.name === Object.name && !("props" in i && i.$$typeof);
}
function z0(i, o, c = !1) {
  if (!c && !ys(i) && !Array.isArray(i)) return o;
  if (Array.isArray(o)) for (let d = 0; d < o.length; d++) i[d] = z0(i[d], o[d]);
  else if (ys(o)) for (const d in o) i[d] = z0(i[d], o[d]);
  return i;
}
function q1(i, o) {
  Object.defineProperty(i, "toString", { value: o });
}
const dk = class {
  constructor(i) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = i, this._cGroup = 0, this._cIndex = 0;
  }
  indexOfGroup(i) {
    if (i === this._cGroup) return this._cIndex;
    let o = this._cIndex;
    if (i > this._cGroup) for (let c = this._cGroup; c < i; c++) o += this.groupSizes[c];
    else for (let c = this._cGroup - 1; c >= i; c--) o -= this.groupSizes[c];
    return this._cGroup = i, this._cIndex = o, o;
  }
  insertRules(i, o) {
    if (i >= this.groupSizes.length) {
      const s = this.groupSizes, y = s.length;
      let T = y;
      for (; i >= T; ) if (T <<= 1, T < 0) throw jm(16, `${i}`);
      this.groupSizes = new Uint32Array(T), this.groupSizes.set(s), this.length = T;
      for (let _ = y; _ < T; _++) this.groupSizes[_] = 0;
    }
    let c = this.indexOfGroup(i + 1), d = 0;
    for (let s = 0, y = o.length; s < y; s++) this.tag.insertRule(c, o[s]) && (this.groupSizes[i]++, c++, d++);
    d > 0 && this._cGroup > i && (this._cIndex += d);
  }
  clearGroup(i) {
    if (i < this.length) {
      const o = this.groupSizes[i], c = this.indexOfGroup(i), d = c + o;
      this.groupSizes[i] = 0;
      for (let s = c; s < d; s++) this.tag.deleteRule(c);
      o > 0 && this._cGroup > i && (this._cIndex -= o);
    }
  }
  getGroup(i) {
    let o = "";
    if (i >= this.length || this.groupSizes[i] === 0) return o;
    const c = this.groupSizes[i], d = this.indexOfGroup(i), s = d + c;
    for (let y = d; y < s; y++) o += this.tag.getRule(y) + P0;
    return o;
  }
}, pk = `style[${gs}][${z1}="${bh}"]`, mk = new RegExp(`^${gs}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`), uv = (i) => typeof ShadowRoot < "u" && i instanceof ShadowRoot || "host" in i && i.nodeType === 11, D0 = (i) => {
  if (!i) return document;
  if (uv(i)) return i;
  if ("getRootNode" in i) {
    const o = i.getRootNode();
    if (uv(o)) return o;
  }
  return document;
}, hk = (i, o, c) => {
  const d = c.split(",");
  let s;
  for (let y = 0, T = d.length; y < T; y++) (s = d[y]) && i.registerName(o, s);
}, gk = (i, o) => {
  var c;
  const d = ((c = o.textContent) !== null && c !== void 0 ? c : "").split(P0), s = [];
  for (let y = 0, T = d.length; y < T; y++) {
    const _ = d[y].trim();
    if (!_) continue;
    const x = _.match(mk);
    if (x) {
      const N = 0 | parseInt(x[1], 10), U = x[2];
      N !== 0 && ($T(U, N), hk(i, U, x[3]), i.getTag().insertRules(N, s)), s.length = 0;
    } else s.push(_);
  }
}, a0 = (i) => {
  const o = D0(i.options.target).querySelectorAll(pk);
  for (let c = 0, d = o.length; c < d; c++) {
    const s = o[c];
    s && s.getAttribute(gs) !== N1 && (gk(i, s), s.parentNode && s.parentNode.removeChild(s));
  }
};
let wm = !1;
function yk() {
  if (wm !== !1) return wm;
  if (typeof document < "u") {
    const i = document.head.querySelector('meta[property="csp-nonce"]');
    if (i) return wm = i.nonce || i.getAttribute("content") || void 0;
    const o = document.head.querySelector('meta[name="sc-nonce"]');
    if (o) return wm = o.getAttribute("content") || void 0;
  }
  return wm = typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
}
const B1 = (i, o) => {
  const c = document.head, d = i || c, s = document.createElement("style"), y = ((x) => {
    const N = Array.from(x.querySelectorAll(`style[${gs}]`));
    return N[N.length - 1];
  })(d), T = y !== void 0 ? y.nextSibling : null;
  s.setAttribute(gs, N1), s.setAttribute(z1, bh);
  const _ = o || yk();
  return _ && s.setAttribute("nonce", _), d.insertBefore(s, T), s;
}, bk = class {
  constructor(i, o) {
    this.element = B1(i, o), this.element.appendChild(document.createTextNode("")), this.sheet = ((c) => {
      var d;
      if (c.sheet) return c.sheet;
      const s = (d = c.getRootNode().styleSheets) !== null && d !== void 0 ? d : document.styleSheets;
      for (let y = 0, T = s.length; y < T; y++) {
        const _ = s[y];
        if (_.ownerNode === c) return _;
      }
      throw jm(17);
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
}, vk = class {
  constructor(i, o) {
    this.element = B1(i, o), this.nodes = this.element.childNodes, this.length = 0;
  }
  insertRule(i, o) {
    if (i <= this.length && i >= 0) {
      const c = document.createTextNode(o);
      return this.element.insertBefore(c, this.nodes[i] || null), this.length++, !0;
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
let cv = Nm;
const Sk = { isServer: !Nm, useCSSOMInjection: !GT };
class Sh {
  static registerId(o) {
    return Gm(o);
  }
  constructor(o = zs, c = {}, d) {
    this.options = Object.assign(Object.assign({}, Sk), o), this.gs = c, this.keyframeIds = /* @__PURE__ */ new Set(), this.names = new Map(d), this.server = !!o.isServer, !this.server && Nm && cv && (cv = !1, a0(this)), q1(this, () => ((s) => {
      const y = s.getTag(), { length: T } = y;
      let _ = "";
      for (let x = 0; x < T; x++) {
        const N = XT(x);
        if (N === void 0) continue;
        const U = s.names.get(N);
        if (U === void 0 || !U.size) continue;
        const L = y.getGroup(x);
        if (L.length === 0) continue;
        const R = gs + ".g" + x + '[id="' + N + '"]';
        let ne = "";
        for (const G of U) G.length > 0 && (ne += G + ",");
        _ += L + R + '{content:"' + ne + '"}' + P0;
      }
      return _;
    })(this));
  }
  rehydrate() {
    !this.server && Nm && a0(this);
  }
  reconstructWithOptions(o, c = !0) {
    const d = new Sh(Object.assign(Object.assign({}, this.options), o), this.gs, c && this.names || void 0);
    return d.keyframeIds = new Set(this.keyframeIds), !this.server && Nm && o.target !== this.options.target && D0(this.options.target) !== D0(o.target) && a0(d), d;
  }
  allocateGSInstance(o) {
    return this.gs[o] = (this.gs[o] || 0) + 1;
  }
  getTag() {
    return this.tag || (this.tag = (o = (({ useCSSOMInjection: c, target: d, nonce: s }) => c ? new bk(d, s) : new vk(d, s))(this.options), new dk(o)));
    var o;
  }
  hasNameForId(o, c) {
    var d, s;
    return (s = (d = this.names.get(o)) === null || d === void 0 ? void 0 : d.has(c)) !== null && s !== void 0 && s;
  }
  registerName(o, c) {
    Gm(o), o.startsWith(VT) && this.keyframeIds.add(o);
    const d = this.names.get(o);
    d ? d.add(c) : this.names.set(o, /* @__PURE__ */ new Set([c]));
  }
  insertRules(o, c, d) {
    this.registerName(o, c), this.getTag().insertRules(Gm(o), d);
  }
  clearNames(o) {
    this.names.has(o) && this.names.get(o).clear();
  }
  clearRules(o) {
    this.getTag().clearGroup(Gm(o)), this.clearNames(o);
  }
  clearTag() {
    this.tag = void 0;
  }
}
const Y1 = /* @__PURE__ */ new WeakSet(), wk = { animationIterationCount: 1, aspectRatio: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexShrink: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, scale: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 };
function Tk(i, o) {
  return o == null || typeof o == "boolean" || o === "" ? "" : typeof o != "number" || o === 0 || i in wk || i.startsWith("--") ? String(o).trim() : o + "px";
}
const us = 47;
function sv(i) {
  if (i.charCodeAt(0) === 45 && i.charCodeAt(1) === 45) return i;
  let o = "";
  for (let c = 0; c < i.length; c++) {
    const d = i.charCodeAt(c);
    o += d >= 65 && d <= 90 ? "-" + String.fromCharCode(d + 32) : i[c];
  }
  return o.startsWith("ms-") ? "-" + o : o;
}
const kk = Symbol.for("sc-keyframes");
function R0(i) {
  return typeof i == "object" && i !== null && kk in i;
}
function G1(i) {
  return vh(i) && !(i.prototype && i.prototype.isReactComponent);
}
const V1 = (i) => i == null || i === !1 || i === "", Ek = Symbol.for("react.client.reference");
function fv(i) {
  return i.$$typeof === Ek;
}
function dv(i) {
  const o = i.$$id, c = (o && o.includes("#") ? o.split("#").pop() : o) || i.name || "unknown";
  console.warn(`Interpolating a client component (${c}) as a selector is not supported in server components. The component selector pattern requires access to the component's internal class name, which is not available across the server/client boundary. Use a plain CSS class selector instead.`);
}
function Q1(i, o) {
  for (const c in i) {
    const d = i[c];
    i.hasOwnProperty(c) && !V1(d) && (Array.isArray(d) && Y1.has(d) || vh(d) ? o.push(sv(c) + ":", d, ";") : ys(d) ? (o.push(c + " {"), Q1(d, o), o.push("}")) : o.push(sv(c) + ": " + Tk(c, d) + ";"));
  }
}
function fs(i, o, c, d, s = []) {
  if (V1(i)) return s;
  const y = typeof i;
  if (y === "string") return s.push(i), s;
  if (y === "function") {
    if (fv(i)) return Ht.env.NODE_ENV !== "production" && dv(i), s;
    if (G1(i) && o) {
      const T = i(o);
      return Ht.env.NODE_ENV === "production" || typeof T != "object" || Array.isArray(T) || R0(T) || ys(T) || T === null || console.error(`${K0(i)} is not a styled component and cannot be referred to via component selector. See https://styled-components.com/docs/advanced#referring-to-other-components for more details.`), fs(T, o, c, d, s);
    }
    return s.push(i), s;
  }
  if (Array.isArray(i)) {
    for (let T = 0; T < i.length; T++) fs(i[T], o, c, d, s);
    return s;
  }
  return H1(i) ? (s.push(`.${i.styledComponentId}`), s) : R0(i) ? (c ? (i.inject(c, d), s.push(i.getName(d))) : s.push(i), s) : fv(i) ? (Ht.env.NODE_ENV !== "production" && dv(i), s) : ys(i) ? i.toString !== Object.prototype.toString ? (s.push(i.toString()), s) : (Q1(i, s), s) : (s.push(i.toString()), s);
}
const Ak = M1(bh);
class xk {
  constructor(o, c, d) {
    this.rules = o, this.componentId = c, this.baseHash = ss(Ak, c), this.baseStyle = d, Sh.registerId(c);
  }
  generateAndInjectStyles(o, c, d) {
    let s = this.baseStyle ? this.baseStyle.generateAndInjectStyles(o, c, d) : "";
    {
      let y = "";
      for (let T = 0; T < this.rules.length; T++) {
        const _ = this.rules[T];
        if (typeof _ == "string") y += _;
        else if (_) if (G1(_)) {
          const x = _(o);
          typeof x == "string" ? y += x : x != null && x !== !1 && (Ht.env.NODE_ENV === "production" || typeof x != "object" || Array.isArray(x) || R0(x) || ys(x) || console.error(`${K0(_)} is not a styled component and cannot be referred to via component selector. See https://styled-components.com/docs/advanced#referring-to-other-components for more details.`), y += ov(fs(x, o, c, d)));
        } else y += ov(fs(_, o, c, d));
      }
      if (y) {
        this.dynamicNameCache || (this.dynamicNameCache = /* @__PURE__ */ new Map());
        const T = d.hash ? d.hash + y : y;
        let _ = this.dynamicNameCache.get(T);
        if (!_) {
          if (_ = R1(ss(ss(this.baseHash, d.hash), y) >>> 0), this.dynamicNameCache.size >= 200) {
            const x = this.dynamicNameCache.keys().next().value;
            x !== void 0 && this.dynamicNameCache.delete(x);
          }
          this.dynamicNameCache.set(T, _);
        }
        if (!c.hasNameForId(this.componentId, _)) {
          const x = d(y, "." + _, void 0, this.componentId);
          c.insertRules(this.componentId, _, x);
        }
        s = xm(s, _);
      }
    }
    return s;
  }
}
const _k = /&/g;
function F1(i, o) {
  let c = 0;
  for (; --o >= 0 && i.charCodeAt(o) === 92; ) c++;
  return !(1 & ~c);
}
function r0(i) {
  const o = i.length;
  let c = "", d = 0, s = 0, y = 0, T = !1, _ = !1;
  for (let x = 0; x < o; x++) {
    const N = i.charCodeAt(x);
    if (y !== 0 || T || N !== us || i.charCodeAt(x + 1) !== 42) if (T) N === 42 && i.charCodeAt(x + 1) === us && (T = !1, x++);
    else if (N !== 34 && N !== 39 || F1(i, x)) {
      if (y === 0) if (N === 123) s++;
      else if (N === 125) {
        if (s--, s < 0) {
          _ = !0;
          let U = x + 1;
          for (; U < o; ) {
            const L = i.charCodeAt(U);
            if (L === 59 || L === 10) break;
            U++;
          }
          U < o && i.charCodeAt(U) === 59 && U++, s = 0, x = U - 1, d = U;
          continue;
        }
        s === 0 && (c += i.substring(d, x + 1), d = x + 1);
      } else N === 59 && s === 0 && (c += i.substring(d, x + 1), d = x + 1);
    } else y === 0 ? y = N : y === N && (y = 0);
    else T = !0, x++;
  }
  return _ || s !== 0 || y !== 0 ? (d < o && s === 0 && y === 0 && (c += i.substring(d)), c) : i;
}
function X1(i, o) {
  const c = o + " ", d = "," + c;
  for (let s = 0; s < i.length; s++) {
    const y = i[s];
    if (y.type === "rule") {
      y.value = (c + y.value).replaceAll(",", d);
      const T = y.props, _ = [];
      for (let x = 0; x < T.length; x++) _[x] = c + T[x];
      y.props = _;
    }
    Array.isArray(y.children) && y.type !== "@keyframes" && X1(y.children, o);
  }
  return i;
}
function Ok({ options: i = zs, plugins: o = Z0 } = zs) {
  let c, d, s;
  const y = (R, ne, G) => G.startsWith(d) && G.endsWith(d) && G.replaceAll(d, "").length > 0 ? `.${c}` : R, T = o.slice();
  T.push((R) => {
    R.type === mh && R.value.includes("&") && (s || (s = new RegExp(`\\${d}\\b`, "g")), R.props[0] = R.props[0].replace(_k, d).replace(s, y));
  }), i.prefix && T.push(YT), T.push(HT);
  let _ = [];
  const x = qT(T.concat(BT((R) => _.push(R)))), N = (R, ne = "", G = "", F = "&") => {
    c = F, d = ne, s = void 0;
    const W = (function(Y) {
      const ve = Y.indexOf("//") !== -1, le = Y.indexOf("}") !== -1;
      if (!ve && !le) return Y;
      if (!ve) return r0(Y);
      const ae = Y.length;
      let $ = "", B = 0, K = 0, Ae = 0, Fe = 0, ye = 0, je = !1;
      for (; K < ae; ) {
        const Ee = Y.charCodeAt(K);
        if (Ee !== 34 && Ee !== 39 || F1(Y, K)) if (Ae === 0) if (Ee === us && K + 1 < ae && Y.charCodeAt(K + 1) === 42) {
          for (K += 2; K + 1 < ae && (Y.charCodeAt(K) !== 42 || Y.charCodeAt(K + 1) !== us); ) K++;
          K += 2;
        } else if (Ee !== 40) if (Ee !== 41) if (Fe > 0) K++;
        else if (Ee === 42 && K + 1 < ae && Y.charCodeAt(K + 1) === us) $ += Y.substring(B, K), K += 2, B = K, je = !0;
        else if (Ee === us && K + 1 < ae && Y.charCodeAt(K + 1) === us) {
          for ($ += Y.substring(B, K); K < ae && Y.charCodeAt(K) !== 10; ) K++;
          B = K, je = !0;
        } else Ee === 123 ? ye++ : Ee === 125 && ye--, K++;
        else Fe > 0 && Fe--, K++;
        else Fe++, K++;
        else K++;
        else Ae === 0 ? Ae = Ee : Ae === Ee && (Ae = 0), K++;
      }
      return je ? (B < ae && ($ += Y.substring(B)), ye === 0 ? $ : r0($)) : ye === 0 ? Y : r0(Y);
    })(R);
    let ee = UT(G || ne ? G + " " + ne + " { " + W + " }" : W);
    return i.namespace && (ee = X1(ee, i.namespace)), _ = [], oh(ee, x), _;
  }, U = i;
  let L = N0;
  for (let R = 0; R < o.length; R++) o[R].name || jm(15), L = ss(L, o[R].name);
  return U != null && U.namespace && (L = ss(L, U.namespace)), U != null && U.prefix && (L = ss(L, "p")), N.hash = L !== N0 ? L.toString() : "", N;
}
const Ck = new Sh(), Nk = Ok(), $1 = _t.createContext({ shouldForwardProp: void 0, styleSheet: Ck, stylis: Nk, stylisPlugins: void 0 });
$1.Consumer;
function zk() {
  return _t.useContext($1);
}
const P1 = _t.createContext(void 0);
P1.Consumer;
const pv = Object.prototype.hasOwnProperty, i0 = {};
function Dk(i, o) {
  const c = typeof i != "string" ? "sc" : D1(i);
  i0[c] = (i0[c] || 0) + 1;
  const d = c + "-" + JT(bh + c + i0[c]);
  return o ? o + "-" + d : d;
}
let o0;
function Rk(i, o, c) {
  const d = H1(i), s = i, y = !eh(i), { attrs: T = Z0, componentId: _ = Dk(o.displayName, o.parentComponentId), displayName: x = ek(i) } = o, N = o.displayName && o.componentId ? D1(o.displayName) + "-" + o.componentId : o.componentId || _, U = d && s.attrs ? s.attrs.concat(T).filter(Boolean) : T;
  let { shouldForwardProp: L } = o;
  if (d && s.shouldForwardProp) {
    const F = s.shouldForwardProp;
    if (o.shouldForwardProp) {
      const W = o.shouldForwardProp;
      L = (ee, Y) => F(ee, Y) && W(ee, Y);
    } else L = F;
  }
  const R = new xk(c, N, d ? s.componentStyle : void 0);
  function ne(F, W) {
    return (function(ee, Y, ve) {
      const { attrs: le, componentStyle: ae, defaultProps: $, foldedComponentIds: B, styledComponentId: K, target: Ae } = ee, Fe = _t.useContext(P1), ye = zk(), je = ee.shouldForwardProp || ye.shouldForwardProp;
      Ht.env.NODE_ENV !== "production" && _t.useDebugValue && _t.useDebugValue(K);
      const Ee = ZT(Y, Fe, $) || zs;
      let yt, Qe;
      {
        const ue = _t.useRef(null), ie = ue.current;
        if (ie !== null && ie[1] === Ee && ie[2] === ye.styleSheet && ie[3] === ye.stylis && ie[7] === ae && (function(Ye, Se, ce) {
          const P = Ye, be = Se;
          let se = 0;
          for (const at in be) if (pv.call(be, at) && (se++, P[at] !== be[at])) return !1;
          return se === ce;
        })(ie[0], Y, ie[4])) yt = ie[5], Qe = ie[6];
        else {
          yt = (function(Se, ce, P) {
            const be = Object.assign(Object.assign({}, ce), { className: void 0, theme: P }), se = Se.length > 1;
            for (let at = 0; at < Se.length; at++) {
              const Cn = Se[at], kn = vh(Cn) ? Cn(se ? Object.assign({}, be) : be) : Cn;
              for (const ct in kn) ct === "className" ? be.className = xm(be.className, kn[ct]) : ct === "style" ? be.style = Object.assign(Object.assign({}, be.style), kn[ct]) : ct in ce && ce[ct] === void 0 || (be[ct] = kn[ct]);
            }
            return "className" in ce && typeof ce.className == "string" && (be.className = xm(be.className, ce.className)), be;
          })(le, Y, Ee), Qe = (function(Se, ce, P, be) {
            const se = Se.generateAndInjectStyles(ce, P, be);
            return Ht.env.NODE_ENV !== "production" && _t.useDebugValue && _t.useDebugValue(se), se;
          })(ae, yt, ye.styleSheet, ye.stylis);
          let Ye = 0;
          for (const Se in Y) pv.call(Y, Se) && Ye++;
          ue.current = [Y, Ee, ye.styleSheet, ye.stylis, Ye, yt, Qe, ae];
        }
      }
      Ht.env.NODE_ENV !== "production" && ee.warnTooManyClasses && ee.warnTooManyClasses(Qe);
      const H = yt.as || Ae, M = (function(ue, ie, Ye, Se) {
        const ce = {};
        for (const P in ue) ue[P] === void 0 || P[0] === "$" || P === "as" || P === "theme" && ue.theme === Ye || (P === "forwardedAs" ? ce.as = ue.forwardedAs : Se && !Se(P, ie) || (ce[P] = ue[P], Se || Ht.env.NODE_ENV !== "development" || TT(P) || (o0 || (o0 = /* @__PURE__ */ new Set())).has(P) || !eh(ie) || ie.includes("-") || (o0.add(P), console.warn(`styled-components: it looks like an unknown prop "${P}" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via \`<StyleSheetManager shouldForwardProp={...}>\` (connect an API like \`@emotion/is-prop-valid\`) or consider using transient props (\`$\` prefix for automatic filtering.)`))));
        return ce;
      })(yt, H, Ee, je);
      let q = xm(B, K);
      return Qe && (q += " " + Qe), yt.className && (q += " " + yt.className), M[eh(H) && H.includes("-") ? "class" : "className"] = q, ve && (M.ref = ve), a1(H, M);
    })(G, F, W);
  }
  ne.displayName = x;
  let G = _t.forwardRef(ne);
  return G.attrs = U, G.componentStyle = R, G.displayName = x, G.shouldForwardProp = L, G.foldedComponentIds = d ? xm(s.foldedComponentIds, s.styledComponentId) : "", G.styledComponentId = N, G.target = d ? s.target : i, Object.defineProperty(G, "defaultProps", { get() {
    return this._foldedDefaultProps;
  }, set(F) {
    this._foldedDefaultProps = d ? (function(W, ...ee) {
      for (const Y of ee) z0(W, Y, !0);
      return W;
    })({}, s.defaultProps, F) : F;
  } }), Ht.env.NODE_ENV !== "production" && (PT(x, N), G.warnTooManyClasses = /* @__PURE__ */ ((F, W) => {
    let ee = {}, Y = !1;
    return (ve) => {
      !Y && (ee[ve] = !0, Object.keys(ee).length >= 200) && (console.warn(`Over 200 classes were generated for component ${F}${W ? ` with the id of "${W}"` : ""}.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), Y = !0, ee = {});
    };
  })(x, N)), q1(G, () => `.${G.styledComponentId}`), y && j1(G, i, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), G;
}
var Mk = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "blockquote", "body", "button", "br", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "menu", "meter", "nav", "object", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "slot", "small", "span", "strong", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "switch", "symbol", "text", "textPath", "tspan", "use"]);
function mv(i, o) {
  const c = [i[0]];
  for (let d = 0, s = o.length; d < s; d += 1) c.push(o[d], i[d + 1]);
  return c;
}
const hv = (i) => (Y1.add(i), i);
function Lk(i, ...o) {
  if (vh(i) || ys(i)) return hv(fs(mv(Z0, [i, ...o])));
  const c = i;
  return o.length === 0 && c.length === 1 && typeof c[0] == "string" ? fs(c) : hv(fs(mv(c, o)));
}
function M0(i, o, c = zs) {
  if (!o) throw jm(1, o);
  const d = (s, ...y) => i(o, c, Lk(s, ...y));
  return d.attrs = (s) => M0(i, o, Object.assign(Object.assign({}, c), { attrs: Array.prototype.concat(c.attrs, s).filter(Boolean) })), d.withConfig = (s) => M0(i, o, Object.assign(Object.assign({}, c), s)), d;
}
const Z1 = (i) => M0(Rk, i), Si = Z1;
Mk.forEach((i) => {
  Si[i] = Z1(i);
});
Ht.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://styled-components.com/docs/basics#react-native`);
const Qm = `__sc-${gs}__`;
Ht.env.NODE_ENV !== "production" && Ht.env.NODE_ENV !== "test" && typeof window < "u" && (window[Qm] || (window[Qm] = 0), window[Qm] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://styled-components.com/docs/faqs#why-am-i-getting-a-warning-about-several-instances-of-module-on-the-page for more info.`), window[Qm] += 1);
Si.div`
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
var u0 = { exports: {} }, c0 = { exports: {} }, s0, gv;
function Uk() {
  if (gv) return s0;
  gv = 1;
  var i = 1e3, o = i * 60, c = o * 60, d = c * 24, s = d * 365.25;
  s0 = function(N, U) {
    U = U || {};
    var L = typeof N;
    if (L === "string" && N.length > 0)
      return y(N);
    if (L === "number" && isNaN(N) === !1)
      return U.long ? _(N) : T(N);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(N)
    );
  };
  function y(N) {
    if (N = String(N), !(N.length > 100)) {
      var U = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
        N
      );
      if (U) {
        var L = parseFloat(U[1]), R = (U[2] || "ms").toLowerCase();
        switch (R) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return L * s;
          case "days":
          case "day":
          case "d":
            return L * d;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return L * c;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return L * o;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return L * i;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return L;
          default:
            return;
        }
      }
    }
  }
  function T(N) {
    return N >= d ? Math.round(N / d) + "d" : N >= c ? Math.round(N / c) + "h" : N >= o ? Math.round(N / o) + "m" : N >= i ? Math.round(N / i) + "s" : N + "ms";
  }
  function _(N) {
    return x(N, d, "day") || x(N, c, "hour") || x(N, o, "minute") || x(N, i, "second") || N + " ms";
  }
  function x(N, U, L) {
    if (!(N < U))
      return N < U * 1.5 ? Math.floor(N / U) + " " + L : Math.ceil(N / U) + " " + L + "s";
  }
  return s0;
}
var yv;
function jk() {
  return yv || (yv = 1, (function(i, o) {
    o = i.exports = s.debug = s.default = s, o.coerce = x, o.disable = T, o.enable = y, o.enabled = _, o.humanize = Uk(), o.names = [], o.skips = [], o.formatters = {};
    var c;
    function d(N) {
      var U = 0, L;
      for (L in N)
        U = (U << 5) - U + N.charCodeAt(L), U |= 0;
      return o.colors[Math.abs(U) % o.colors.length];
    }
    function s(N) {
      function U() {
        if (U.enabled) {
          var L = U, R = +/* @__PURE__ */ new Date(), ne = R - (c || R);
          L.diff = ne, L.prev = c, L.curr = R, c = R;
          for (var G = new Array(arguments.length), F = 0; F < G.length; F++)
            G[F] = arguments[F];
          G[0] = o.coerce(G[0]), typeof G[0] != "string" && G.unshift("%O");
          var W = 0;
          G[0] = G[0].replace(/%([a-zA-Z%])/g, function(Y, ve) {
            if (Y === "%%") return Y;
            W++;
            var le = o.formatters[ve];
            if (typeof le == "function") {
              var ae = G[W];
              Y = le.call(L, ae), G.splice(W, 1), W--;
            }
            return Y;
          }), o.formatArgs.call(L, G);
          var ee = U.log || o.log || console.log.bind(console);
          ee.apply(L, G);
        }
      }
      return U.namespace = N, U.enabled = o.enabled(N), U.useColors = o.useColors(), U.color = d(N), typeof o.init == "function" && o.init(U), U;
    }
    function y(N) {
      o.save(N), o.names = [], o.skips = [];
      for (var U = (typeof N == "string" ? N : "").split(/[\s,]+/), L = U.length, R = 0; R < L; R++)
        U[R] && (N = U[R].replace(/\*/g, ".*?"), N[0] === "-" ? o.skips.push(new RegExp("^" + N.substr(1) + "$")) : o.names.push(new RegExp("^" + N + "$")));
    }
    function T() {
      o.enable("");
    }
    function _(N) {
      var U, L;
      for (U = 0, L = o.skips.length; U < L; U++)
        if (o.skips[U].test(N))
          return !1;
      for (U = 0, L = o.names.length; U < L; U++)
        if (o.names[U].test(N))
          return !0;
      return !1;
    }
    function x(N) {
      return N instanceof Error ? N.stack || N.message : N;
    }
  })(c0, c0.exports)), c0.exports;
}
var bv;
function Hk() {
  return bv || (bv = 1, (function(i, o) {
    var c = { env: { NODE_ENV: "production" } };
    o = i.exports = jk(), o.log = y, o.formatArgs = s, o.save = T, o.load = _, o.useColors = d, o.storage = typeof chrome < "u" && typeof chrome.storage < "u" ? chrome.storage.local : x(), o.colors = [
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
    o.formatters.j = function(N) {
      try {
        return JSON.stringify(N);
      } catch (U) {
        return "[UnexpectedJSONParseError]: " + U.message;
      }
    };
    function s(N) {
      var U = this.useColors;
      if (N[0] = (U ? "%c" : "") + this.namespace + (U ? " %c" : " ") + N[0] + (U ? "%c " : " ") + "+" + o.humanize(this.diff), !!U) {
        var L = "color: " + this.color;
        N.splice(1, 0, L, "color: inherit");
        var R = 0, ne = 0;
        N[0].replace(/%[a-zA-Z%]/g, function(G) {
          G !== "%%" && (R++, G === "%c" && (ne = R));
        }), N.splice(ne, 0, L);
      }
    }
    function y() {
      return typeof console == "object" && console.log && Function.prototype.apply.call(console.log, console, arguments);
    }
    function T(N) {
      try {
        N == null ? o.storage.removeItem("debug") : o.storage.debug = N;
      } catch {
      }
    }
    function _() {
      var N;
      try {
        N = o.storage.debug;
      } catch {
      }
      return !N && typeof c < "u" && "env" in c && (N = c.env.DEBUG), N;
    }
    o.enable(_());
    function x() {
      try {
        return window.localStorage;
      } catch {
      }
    }
  })(u0, u0.exports)), u0.exports;
}
var f0, vv;
function qk() {
  if (vv) return f0;
  vv = 1;
  var i = Hk()("jsonp");
  f0 = d;
  var o = 0;
  function c() {
  }
  function d(s, y, T) {
    typeof y == "function" && (T = y, y = {}), y || (y = {});
    var _ = y.prefix || "__jp", x = y.name || _ + o++, N = y.param || "callback", U = y.timeout != null ? y.timeout : 6e4, L = encodeURIComponent, R = document.getElementsByTagName("script")[0] || document.head, ne, G;
    U && (G = setTimeout(function() {
      F(), T && T(new Error("Timeout"));
    }, U));
    function F() {
      ne.parentNode && ne.parentNode.removeChild(ne), window[x] = c, G && clearTimeout(G);
    }
    function W() {
      window[x] && F();
    }
    return window[x] = function(ee) {
      i("jsonp got", ee), F(), T && T(null, ee);
    }, s += (~s.indexOf("?") ? "&" : "?") + N + "=" + L(x), s = s.replace("?&", "?"), i('jsonp req "%s"', s), ne = document.createElement("script"), ne.src = s, R.parentNode.insertBefore(ne, R), W;
  }
  return f0;
}
var Bk = qk();
const ws = /* @__PURE__ */ V0(Bk);
var Yk = Object.defineProperty, Gk = Object.defineProperties, Vk = Object.getOwnPropertyDescriptors, ch = Object.getOwnPropertySymbols, K1 = Object.prototype.hasOwnProperty, I1 = Object.prototype.propertyIsEnumerable, Sv = (i, o, c) => o in i ? Yk(i, o, { enumerable: !0, configurable: !0, writable: !0, value: c }) : i[o] = c, St = (i, o) => {
  for (var c in o || (o = {}))
    K1.call(o, c) && Sv(i, c, o[c]);
  if (ch)
    for (var c of ch(o))
      I1.call(o, c) && Sv(i, c, o[c]);
  return i;
}, Jt = (i, o) => Gk(i, Vk(o)), en = (i, o) => {
  var c = {};
  for (var d in i)
    K1.call(i, d) && o.indexOf(d) < 0 && (c[d] = i[d]);
  if (i != null && ch)
    for (var d of ch(i))
      o.indexOf(d) < 0 && I1.call(i, d) && (c[d] = i[d]);
  return c;
};
class Qk extends Error {
  constructor(o) {
    super(o), this.name = "AssertionError";
  }
}
function yn(i, o) {
  if (!i)
    throw new Qk(o);
}
function Bt(i) {
  const o = Object.entries(i).filter(([, c]) => c != null).map(([c, d]) => `${encodeURIComponent(c)}=${encodeURIComponent(String(d))}`);
  return o.length > 0 ? `?${o.join("&")}` : "";
}
const Fk = {
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
}, Xk = (i) => !!i && (typeof i == "object" || typeof i == "function") && "then" in i && typeof i.then == "function", $k = (i, o) => ({
  left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - i / 2,
  top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - o / 2
}), Pk = (i, o) => ({
  top: (window.screen.height - o) / 2,
  left: (window.screen.width - i) / 2
});
function Zk(i) {
  var o;
  const c = n1.toArray(i);
  if (c.length !== 1)
    return;
  const [d] = c;
  if (l1(d))
    return d.props.round ? "50%" : (o = d.props.borderRadius) != null ? o : 0;
}
function W1(i) {
  return n1.toArray(i).some((o) => typeof o == "string" ? o.trim().length > 0 : typeof o == "number" ? !0 : l1(o) ? W1(o.props.children) : !1);
}
function Kk(i, o, c) {
  var d = o, { height: s, width: y } = d, T = en(d, ["height", "width"]);
  const _ = St({
    height: s,
    width: y,
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
    Object.keys(_).map((N) => `${N}=${_[N]}`).join(", ")
  );
  if (c) {
    const N = window.setInterval(() => {
      try {
        (x === null || x.closed) && (window.clearInterval(N), c(x));
      } catch (U) {
        console.error(U);
      }
    }, 1e3);
  }
  return x;
}
function Tn(i) {
  var o = i, {
    "aria-label": c,
    "aria-labelledby": d,
    beforeOnClick: s,
    children: y,
    className: T,
    disabled: _,
    disabledStyle: x = { opacity: 0.6 },
    forwardedRef: N,
    htmlTitle: U,
    networkLink: L,
    networkName: R,
    onClick: ne,
    onShareWindowClose: G,
    openShareDialogOnClick: F = !0,
    opts: W,
    resetButtonStyle: ee = !0,
    style: Y,
    title: ve,
    type: le = "button",
    url: ae,
    windowHeight: $ = 400,
    windowPosition: B = "windowCenter",
    windowWidth: K = 550
  } = o, Ae = en(o, [
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
  const Fe = Zk(y), ye = !c && !d && !W1(y) ? Fk[R] : void 0, je = async (Qe) => {
    if (_)
      return;
    const H = L(ae, W);
    if (Qe.preventDefault(), s) {
      const M = s();
      Xk(M) && await M;
    }
    if (F) {
      const M = St({
        height: $,
        width: K
      }, B === "windowCenter" ? $k(K, $) : Pk(K, $));
      Kk(H, M, G);
    }
    ne && ne(Qe, H);
  }, Ee = Zo(
    "react-share__ShareButton",
    {
      "react-share__ShareButton--disabled": !!_,
      disabled: !!_
    },
    T
  ), yt = St(St(ee ? {
    backgroundColor: "transparent",
    border: "none",
    padding: 0,
    display: "inline-flex",
    borderRadius: Fe,
    outlineOffset: 2,
    font: "inherit",
    color: "inherit",
    cursor: "pointer"
  } : {}, Y), _ && x);
  return /* @__PURE__ */ V.jsx(
    "button",
    Jt(St({}, Ae), {
      "aria-label": c || ye,
      "aria-labelledby": d,
      className: Ee,
      disabled: _,
      onClick: je,
      ref: N,
      style: yt,
      title: U,
      type: le,
      children: y
    })
  );
}
function Ik(i, { title: o, separator: c }) {
  return yn(i, "bluesky.url"), "https://bsky.app/intent/compose" + Bt({
    text: o ? o + c + i : i
  });
}
const Wk = bn(
  (i, o) => {
    var c = i, { separator: d, title: s } = c, y = en(c, ["separator", "title"]);
    return /* @__PURE__ */ V.jsx(
      Tn,
      Jt(St({}, y), {
        forwardedRef: o,
        networkName: "bluesky",
        networkLink: Ik,
        opts: {
          title: s,
          separator: d || " "
        },
        windowHeight: 460,
        windowPosition: "windowCenter",
        windowWidth: 660
      })
    );
  }
);
Wk.displayName = "BlueskyShareButton";
function Jk(i, { subject: o, body: c, separator: d }) {
  return "mailto:" + Bt({ subject: o, body: c ? c + d + i : i });
}
const e3 = bn(
  (i, o) => {
    var c = i, { body: d, separator: s, subject: y } = c, T = en(c, ["body", "separator", "subject"]);
    return /* @__PURE__ */ V.jsx(
      Tn,
      Jt(St({}, T), {
        forwardedRef: o,
        networkName: "email",
        networkLink: Jk,
        onClick: (_, x) => {
          window.location.href = x;
        },
        openShareDialogOnClick: !1,
        opts: {
          subject: y,
          body: d,
          separator: s || " "
        }
      })
    );
  }
);
e3.displayName = "EmailShareButton";
function t3(i, { appId: o, redirectUri: c, to: d }) {
  return "https://www.facebook.com/dialog/send" + Bt({
    link: i,
    redirect_uri: c || i,
    app_id: o,
    to: d
  });
}
const n3 = bn((i, o) => {
  var c = i, { appId: d, redirectUri: s, to: y } = c, T = en(c, ["appId", "redirectUri", "to"]);
  return /* @__PURE__ */ V.jsx(
    Tn,
    Jt(St({}, T), {
      forwardedRef: o,
      networkName: "facebookmessenger",
      networkLink: t3,
      opts: {
        appId: d,
        redirectUri: s,
        to: y
      },
      windowHeight: 820,
      windowWidth: 1e3
    })
  );
});
n3.displayName = "FacebookMessengerShareButton";
function l3(i, { hashtag: o }) {
  return yn(i, "facebook.url"), "https://www.facebook.com/sharer/sharer.php" + Bt({ u: i, hashtag: o });
}
const a3 = bn(
  (i, o) => {
    var c = i, { hashtag: d } = c, s = en(c, ["hashtag"]);
    return /* @__PURE__ */ V.jsx(
      Tn,
      Jt(St({}, s), {
        forwardedRef: o,
        networkName: "facebook",
        networkLink: l3,
        opts: { hashtag: d },
        windowHeight: 400,
        windowWidth: 550
      })
    );
  }
);
a3.displayName = "FacebookShareButton";
function r3() {
  const i = Pm(!1);
  return au(() => (i.current = !0, () => {
    i.current = !1;
  }), []), k0(() => i.current, []);
}
function i3(i) {
  var o = i, {
    children: c = (R) => R,
    className: d,
    getCount: s,
    url: y
  } = o, T = en(o, [
    "children",
    "className",
    "getCount",
    "url"
  ]);
  const _ = r3(), [x, N] = tu(void 0), [U, L] = tu(!1);
  return au(() => {
    L(!0), s(y, (R) => {
      _() && (N(R), L(!1));
    });
  }, [y]), /* @__PURE__ */ V.jsx("span", Jt(St({ className: Zo("react-share__ShareCount", d) }, T), { children: !U && x !== void 0 && c(x) }));
}
function Ts(i) {
  const o = (c) => /* @__PURE__ */ V.jsx(i3, St({ getCount: i }, c));
  return o.displayName = `ShareCount(${i.name})`, o;
}
function o3(i, o) {
  const c = `https://graph.facebook.com/?id=${i}&fields=og_object{engagement}`;
  ws(c, (d, s) => {
    o(
      !d && s && s.og_object && s.og_object.engagement ? s.og_object.engagement.count : void 0
    );
  });
}
Ts(o3);
function u3(i, { title: o }) {
  return yn(i, "hatena.url"), `http://b.hatena.ne.jp/add?mode=confirm&url=${i}&title=${o}`;
}
const c3 = bn(
  (i, o) => {
    var c = i, { title: d } = c, s = en(c, ["title"]);
    return /* @__PURE__ */ V.jsx(
      Tn,
      Jt(St({}, s), {
        forwardedRef: o,
        networkName: "hatena",
        networkLink: u3,
        opts: { title: d },
        windowHeight: 460,
        windowPosition: "windowCenter",
        windowWidth: 660
      })
    );
  }
);
c3.displayName = "HatenaShareButton";
function s3(i, o) {
  ws(
    "https://bookmark.hatenaapis.com/count/entry" + Bt({
      url: i
    }),
    (c, d) => {
      o(d ?? void 0);
    }
  );
}
Ts(s3);
function f3(i, { title: o, description: c }) {
  return yn(i, "instapaper.url"), "http://www.instapaper.com/hello2" + Bt({
    url: i,
    title: o,
    description: c
  });
}
const d3 = bn(
  (i, o) => {
    var c = i, { description: d, title: s } = c, y = en(c, ["description", "title"]);
    return /* @__PURE__ */ V.jsx(
      Tn,
      Jt(St({}, y), {
        forwardedRef: o,
        networkName: "instapaper",
        networkLink: f3,
        opts: {
          title: s,
          description: d
        },
        windowHeight: 500,
        windowPosition: "windowCenter",
        windowWidth: 500
      })
    );
  }
);
d3.displayName = "InstapaperShareButton";
function p3(i, { title: o }) {
  return yn(i, "line.url"), "https://social-plugins.line.me/lineit/share" + Bt({
    url: i,
    text: o
  });
}
const m3 = bn(
  (i, o) => {
    var c = i, { title: d } = c, s = en(c, ["title"]);
    return /* @__PURE__ */ V.jsx(
      Tn,
      Jt(St({}, s), {
        forwardedRef: o,
        networkName: "line",
        networkLink: p3,
        opts: { title: d },
        windowHeight: 500,
        windowWidth: 500
      })
    );
  }
);
m3.displayName = "LineShareButton";
function h3(i, { title: o, summary: c, source: d }) {
  return yn(i, "linkedin.url"), "https://linkedin.com/shareArticle" + Bt({ url: i, mini: "true", title: o, summary: c, source: d });
}
const g3 = bn(
  (i, o) => {
    var c = i, { source: d, summary: s, title: y } = c, T = en(c, ["source", "summary", "title"]);
    return /* @__PURE__ */ V.jsx(
      Tn,
      Jt(St({}, T), {
        forwardedRef: o,
        networkName: "linkedin",
        networkLink: h3,
        opts: { title: y, summary: s, source: d },
        windowHeight: 600,
        windowWidth: 750
      })
    );
  }
);
g3.displayName = "LinkedinShareButton";
function y3(i, { title: o, description: c }) {
  return yn(i, "livejournal.url"), "https://www.livejournal.com/update.bml" + Bt({
    subject: o,
    event: c
  });
}
const b3 = bn(
  (i, o) => {
    var c = i, { description: d, title: s } = c, y = en(c, ["description", "title"]);
    return /* @__PURE__ */ V.jsx(
      Tn,
      Jt(St({}, y), {
        forwardedRef: o,
        networkName: "livejournal",
        networkLink: y3,
        opts: {
          title: s,
          description: d
        },
        windowHeight: 460,
        windowWidth: 660
      })
    );
  }
);
b3.displayName = "LivejournalShareButton";
function v3(i, { title: o, description: c, imageUrl: d }) {
  return yn(i, "mailru.url"), "https://connect.mail.ru/share" + Bt({
    url: i,
    title: o,
    description: c,
    image_url: d
  });
}
const S3 = bn(
  (i, o) => {
    var c = i, { description: d, imageUrl: s, title: y } = c, T = en(c, ["description", "imageUrl", "title"]);
    return /* @__PURE__ */ V.jsx(
      Tn,
      Jt(St({}, T), {
        forwardedRef: o,
        networkName: "mailru",
        networkLink: v3,
        opts: {
          title: y,
          description: d,
          imageUrl: s
        },
        windowHeight: 460,
        windowWidth: 660
      })
    );
  }
);
S3.displayName = "MailruShareButton";
function w3(i, { title: o, description: c, image: d }) {
  return yn(i, "ok.url"), "https://connect.ok.ru/offer" + Bt({
    url: i,
    title: o,
    description: c,
    imageUrl: d
  });
}
const T3 = bn(
  (i, o) => {
    var c = i, { description: d, image: s, title: y } = c, T = en(c, ["description", "image", "title"]);
    return /* @__PURE__ */ V.jsx(
      Tn,
      Jt(St({}, T), {
        forwardedRef: o,
        networkName: "ok",
        networkLink: w3,
        opts: {
          title: y,
          description: d,
          image: s
        },
        windowHeight: 480,
        windowPosition: "screenCenter",
        windowWidth: 588
      })
    );
  }
);
T3.displayName = "OKShareButton";
function k3(i, o) {
  window.OK || (window.OK = {
    Share: {
      count: function(s, y) {
        var T, _;
        (_ = (T = window.OK.callbacks)[s]) == null || _.call(T, y);
      }
    },
    callbacks: []
  });
  const c = "https://connect.ok.ru/dk", d = window.OK.callbacks.length;
  return window.ODKL = {
    updateCount(s, y) {
      var T, _;
      const x = s === "" ? 0 : parseInt(s.replace("react-share-", ""), 10);
      (_ = (T = window.OK.callbacks)[x]) == null || _.call(T, y === "" ? void 0 : parseInt(y, 10));
    }
  }, window.OK.callbacks.push(o), ws(
    c + Bt({
      "st.cmd": "extLike",
      uid: `react-share-${d}`,
      ref: i
    })
  );
}
Ts(k3);
function E3(i, { media: o, description: c, pinId: d }) {
  return d ? `https://pinterest.com/pin/${d}/repin/x/` : (yn(i, "pinterest.url"), yn(o, "pinterest.media"), "https://pinterest.com/pin/create/button/" + Bt({
    url: i,
    media: o,
    description: c
  }));
}
const A3 = bn(
  (i, o) => {
    var c = i, { description: d, media: s, pinId: y } = c, T = en(c, ["description", "media", "pinId"]);
    return /* @__PURE__ */ V.jsx(
      Tn,
      Jt(St({}, T), {
        forwardedRef: o,
        networkName: "pinterest",
        networkLink: E3,
        opts: {
          media: s,
          description: d,
          pinId: y
        },
        windowHeight: 730,
        windowWidth: 1e3
      })
    );
  }
);
A3.displayName = "PinterestShareButton";
function x3(i, o) {
  ws(
    "https://api.pinterest.com/v1/urls/count.json" + Bt({
      url: i
    }),
    (c, d) => {
      o(d ? d.count : void 0);
    }
  );
}
Ts(x3);
function _3(i, { title: o }) {
  return yn(i, "pocket.url"), "https://getpocket.com/save" + Bt({
    url: i,
    title: o
  });
}
const O3 = bn(
  (i, o) => {
    var c = i, { title: d } = c, s = en(c, ["title"]);
    return /* @__PURE__ */ V.jsx(
      Tn,
      Jt(St({}, s), {
        forwardedRef: o,
        networkName: "pocket",
        networkLink: _3,
        opts: { title: d },
        windowHeight: 500,
        windowWidth: 500
      })
    );
  }
);
O3.displayName = "PocketShareButton";
function C3(i, { title: o }) {
  return yn(i, "reddit.url"), "https://www.reddit.com/submit" + Bt({
    url: i,
    title: o
  });
}
const N3 = bn(
  (i, o) => {
    var c = i, { title: d } = c, s = en(c, ["title"]);
    return /* @__PURE__ */ V.jsx(
      Tn,
      Jt(St({}, s), {
        forwardedRef: o,
        networkName: "reddit",
        networkLink: C3,
        opts: { title: d },
        windowHeight: 460,
        windowPosition: "windowCenter",
        windowWidth: 660
      })
    );
  }
);
N3.displayName = "RedditShareButton";
function z3(i, { title: o }) {
  return yn(i, "gab.url"), "https://gab.com/compose" + Bt({
    url: i,
    text: o
  });
}
const D3 = bn(
  (i, o) => {
    var c = i, { title: d } = c, s = en(c, ["title"]);
    return /* @__PURE__ */ V.jsx(
      Tn,
      Jt(St({}, s), {
        forwardedRef: o,
        networkName: "gab",
        networkLink: z3,
        opts: { title: d },
        windowHeight: 640,
        windowPosition: "windowCenter",
        windowWidth: 660
      })
    );
  }
);
D3.displayName = "GabShareButton";
function R3(i, o) {
  const c = `https://www.reddit.com/api/info.json?limit=1&url=${i}`;
  ws(c, { param: "jsonp" }, (d, s) => {
    o(
      !d && s && s.data && s.data.children.length > 0 && s.data.children[0].data.score ? s.data.children[0].data.score : void 0
    );
  });
}
Ts(R3);
function M3(i, { title: o }) {
  return yn(i, "telegram.url"), "https://telegram.me/share/url" + Bt({
    url: i,
    text: o
  });
}
const L3 = bn(
  (i, o) => {
    var c = i, { title: d } = c, s = en(c, ["title"]);
    return /* @__PURE__ */ V.jsx(
      Tn,
      Jt(St({}, s), {
        forwardedRef: o,
        networkName: "telegram",
        networkLink: M3,
        opts: { title: d },
        windowHeight: 400,
        windowWidth: 550
      })
    );
  }
);
L3.displayName = "TelegramShareButton";
function U3(i, { title: o }) {
  return yn(i, "threads.url"), "https://threads.net/intent/post" + Bt({
    url: i,
    text: o
  });
}
const j3 = bn(
  (i, o) => {
    var c = i, { hashtags: d, related: s, title: y, via: T } = c, _ = en(c, ["hashtags", "related", "title", "via"]);
    return /* @__PURE__ */ V.jsx(
      Tn,
      Jt(St({}, _), {
        forwardedRef: o,
        networkName: "threads",
        networkLink: U3,
        opts: { title: y },
        windowHeight: 600,
        windowWidth: 550
      })
    );
  }
);
j3.displayName = "ThreadsShareButton";
function H3(i, {
  title: o,
  caption: c,
  tags: d,
  posttype: s
}) {
  return yn(i, "tumblr.url"), "https://www.tumblr.com/widgets/share/tool" + Bt({
    canonicalUrl: i,
    title: o,
    caption: c,
    tags: d,
    posttype: s
  });
}
const q3 = bn(
  (i, o) => {
    var c = i, { caption: d, posttype: s, tags: y, title: T } = c, _ = en(c, ["caption", "posttype", "tags", "title"]);
    return /* @__PURE__ */ V.jsx(
      Tn,
      Jt(St({}, _), {
        forwardedRef: o,
        networkName: "tumblr",
        networkLink: H3,
        opts: {
          title: T,
          tags: (y || []).join(","),
          caption: d,
          posttype: s || "link"
        },
        windowHeight: 460,
        windowWidth: 660
      })
    );
  }
);
q3.displayName = "TumblrShareButton";
function B3(i, o) {
  return ws(
    "https://api.tumblr.com/v2/share/stats" + Bt({
      url: i
    }),
    (c, d) => {
      o(!c && d && d.response ? d.response.note_count : void 0);
    }
  );
}
Ts(B3);
function Y3(i, {
  title: o,
  via: c,
  hashtags: d = [],
  related: s = []
}) {
  return yn(i, "x.url"), yn(Array.isArray(d), "x.hashtags is not an array"), yn(Array.isArray(s), "x.related is not an array"), "https://twitter.com/intent/tweet" + Bt({
    url: i,
    text: o,
    via: c,
    hashtags: d.length > 0 ? d.join(",") : void 0,
    related: s.length > 0 ? s.join(",") : void 0
  });
}
const J1 = bn(
  (i, o) => {
    var c = i, { hashtags: d, related: s, title: y, via: T } = c, _ = en(c, ["hashtags", "related", "title", "via"]);
    return /* @__PURE__ */ V.jsx(
      Tn,
      Jt(St({}, _), {
        forwardedRef: o,
        networkName: "twitter",
        networkLink: Y3,
        opts: {
          hashtags: d,
          title: y,
          via: T,
          related: s
        },
        windowHeight: 400,
        windowWidth: 550
      })
    );
  }
);
J1.displayName = "XShareButton";
const G3 = bn((i, o) => /* @__PURE__ */ V.jsx(J1, Jt(St({}, i), { ref: o })));
G3.displayName = "TwitterShareButton";
function V3(i, { title: o, separator: c }) {
  return yn(i, "viber.url"), "viber://forward" + Bt({
    text: o ? o + c + i : i
  });
}
const Q3 = bn(
  (i, o) => {
    var c = i, { separator: d, title: s } = c, y = en(c, ["separator", "title"]);
    return /* @__PURE__ */ V.jsx(
      Tn,
      Jt(St({}, y), {
        forwardedRef: o,
        networkName: "viber",
        networkLink: V3,
        opts: {
          title: s,
          separator: d || " "
        },
        windowHeight: 460,
        windowWidth: 660
      })
    );
  }
);
Q3.displayName = "ViberShareButton";
function F3(i, { title: o, image: c, noParse: d, noVkLinks: s }) {
  return yn(i, "vk.url"), "https://vk.com/share.php" + Bt({
    url: i,
    title: o,
    image: c,
    noparse: d ? 1 : 0,
    no_vk_links: s ? 1 : 0
  });
}
const X3 = bn(
  (i, o) => {
    var c = i, { image: d, noParse: s, noVkLinks: y, title: T } = c, _ = en(c, ["image", "noParse", "noVkLinks", "title"]);
    return /* @__PURE__ */ V.jsx(
      Tn,
      Jt(St({}, _), {
        forwardedRef: o,
        networkName: "vk",
        networkLink: F3,
        opts: {
          title: T,
          image: d,
          noParse: s,
          noVkLinks: y
        },
        windowHeight: 460,
        windowWidth: 660
      })
    );
  }
);
X3.displayName = "VKShareButton";
function $3(i, o) {
  window.VK || (window.VK = {}), window.VK.Share = {
    count: (s, y) => {
      var T, _;
      return (_ = (T = window.VK.callbacks) == null ? void 0 : T[s]) == null ? void 0 : _.call(T, y);
    }
  }, window.VK.callbacks = [];
  const c = "https://vk.com/share.php", d = window.VK.callbacks.length;
  return window.VK.callbacks.push(o), ws(
    c + Bt({
      act: "count",
      index: d,
      url: i
    })
  );
}
Ts($3);
function P3(i, { title: o, image: c }) {
  return yn(i, "weibo.url"), "http://service.weibo.com/share/share.php" + Bt({
    url: i,
    title: o,
    pic: c
  });
}
const Z3 = bn(
  (i, o) => {
    var c = i, { image: d, title: s } = c, y = en(c, ["image", "title"]);
    return /* @__PURE__ */ V.jsx(
      Tn,
      Jt(St({}, y), {
        forwardedRef: o,
        networkName: "weibo",
        networkLink: P3,
        opts: {
          title: s,
          image: d
        },
        windowHeight: 550,
        windowPosition: "screenCenter",
        windowWidth: 660
      })
    );
  }
);
Z3.displayName = "WeiboShareButton";
function K3(i, { title: o, separator: c }) {
  return yn(i, "whatsapp.url"), "https://api.whatsapp.com/send" + Bt({
    text: o ? o + c + i : i
  });
}
const I3 = bn(
  (i, o) => {
    var c = i, { separator: d, title: s } = c, y = en(c, ["separator", "title"]);
    return /* @__PURE__ */ V.jsx(
      Tn,
      Jt(St({}, y), {
        forwardedRef: o,
        networkName: "whatsapp",
        networkLink: K3,
        opts: {
          title: s,
          separator: d || " "
        },
        windowHeight: 400,
        windowWidth: 550
      })
    );
  }
);
I3.displayName = "WhatsappShareButton";
function W3(i, { quote: o, hashtag: c }) {
  return yn(i, "workplace.url"), "https://work.facebook.com/sharer.php" + Bt({
    u: i,
    quote: o,
    hashtag: c
  });
}
const J3 = bn(
  (i, o) => {
    var c = i, { hashtag: d, quote: s } = c, y = en(c, ["hashtag", "quote"]);
    return /* @__PURE__ */ V.jsx(
      Tn,
      Jt(St({}, y), {
        forwardedRef: o,
        networkName: "workplace",
        networkLink: W3,
        opts: {
          quote: s,
          hashtag: d
        },
        windowHeight: 400,
        windowWidth: 550
      })
    );
  }
);
J3.displayName = "WorkplaceShareButton";
Si.div`
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
Si.div`
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
const eE = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, eS = ({
  label: i = "",
  cardTitle: o = "",
  gaData: c,
  ariaLabel: d,
  color: s = "gray",
  disabled: y,
  element: T = "button",
  innerRef: _,
  href: x,
  onClick: N,
  ...U
}) => {
  const L = Zo("btn", "btn-tag", {
    "btn-tag-alt-white": s === "white",
    "btn-tag-alt-gray": s === "gray",
    "btn-tag-alt-dark": s === "dark",
    disabled: y
  });
  let R = T;
  return x && T === "button" && (R = "a"), /* @__PURE__ */ V.jsx(
    ms,
    {
      gaData: {
        ...eE,
        section: o,
        // @deprecated - remove at some point
        ...c,
        text: i
      },
      children: /* @__PURE__ */ V.jsx(
        R,
        {
          type: R === "button" && N ? "button" : void 0,
          ...U,
          className: L,
          href: x,
          ref: _,
          onClick: N,
          "aria-label": d,
          children: i
        }
      )
    }
  );
};
eS.propTypes = {
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
  gaData: Q0,
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
const tS = ({
  src: i,
  alt: o,
  cssClasses: c,
  loading: d = "lazy",
  decoding: s = "async",
  dataTestId: y,
  fetchPriority: T = "auto",
  width: _,
  height: x,
  cardLink: N,
  title: U,
  caption: L,
  captionTitle: R,
  buttons: ne,
  border: G,
  dropShadow: F
}) => {
  const W = {
    src: i,
    alt: o,
    loading: d,
    decoding: s,
    fetchpriority: T,
    // React attribute bug workaround
    ...(c == null ? void 0 : c.length) > 0 && { className: Lw(c) },
    ...y && { "data-testid": y },
    ..._ && { width: _ },
    ...x && { height: x }
  }, ee = Zo("uds-img", {
    borderless: !G,
    "uds-img-drop-shadow": F
  }), Y = (le) => {
    const ae = le ? `${W.className} ${le}` : W.className;
    return N ? /* @__PURE__ */ V.jsxs("a", { href: N, children: [
      /* @__PURE__ */ V.jsx("img", { ...W, className: ae }),
      /* @__PURE__ */ V.jsx("span", { className: "visually-hidden", children: U })
    ] }) : /* @__PURE__ */ V.jsx("img", { ...W, className: ae });
  }, ve = () => /* @__PURE__ */ V.jsx(V.Fragment, { children: ne && /* @__PURE__ */ V.jsx("div", { className: "card-buttons", style: { marginTop: L ? 20 : 0 }, children: ne.map((le) => /* @__PURE__ */ V.jsx(
    "div",
    {
      className: "card-button",
      "data-testid": "card-button",
      children: /* @__PURE__ */ V.jsx(
        F0,
        {
          ariaLabel: le.ariaLabel,
          color: le.color,
          icon: le.icon,
          href: le.href,
          label: le.label,
          onClick: le.onClick,
          size: le.size,
          target: le.target,
          cardTitle: U
        }
      )
    },
    `${le.label}-${le.href}`
  )) }) });
  return ne || L ? /* @__PURE__ */ V.jsx("div", { className: ee, children: /* @__PURE__ */ V.jsxs("figure", { className: "figure uds-figure", children: [
    Y(),
    /* @__PURE__ */ V.jsxs("figcaption", { className: "figure-caption uds-figure-caption", children: [
      R && /* @__PURE__ */ V.jsx("h3", { children: R }),
      L && /* @__PURE__ */ V.jsx(
        "span",
        {
          className: "uds-caption-text",
          dangerouslySetInnerHTML: _s(L)
        }
      ),
      ve()
    ] })
  ] }) }) : Y(ee);
};
tS.propTypes = {
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
const tE = Si.div`
  &.cards-components a + &.cards-components a {
    margin-left: 5px;
  }
  .card-button {
    column-gap: 1rem;
  }
  .card-button .btn {
    margin: 0;
  }
`, nE = (i) => /^[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(i), lE = (i) => !i.startsWith("https://") && !i.startsWith("http://") && nE(i) ? `mailto:${i}` : i, wv = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, nS = (i) => i === "event" || i === "news", eu = ({
  type: i = "default",
  width: o = "100%",
  horizontal: c = !1,
  image: d,
  imageAltText: s,
  title: y,
  icon: T,
  body: _,
  eventFormat: x = "stack",
  eventLocation: N,
  eventTime: U,
  buttons: L,
  linkLabel: R,
  linkUrl: ne,
  tags: G,
  showBorders: F = !0,
  cardLink: W
}) => /* @__PURE__ */ V.jsx(
  lS,
  {
    type: i,
    width: o,
    horizontal: c,
    image: d,
    imageAltText: s,
    title: y,
    icon: T,
    body: _,
    eventFormat: x,
    eventLocation: N,
    eventTime: U,
    buttons: L,
    linkLabel: R,
    linkUrl: ne,
    tags: G,
    showBorders: F,
    cardLink: W
  }
);
eu.propTypes = {
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
const lS = ({
  type: i = "default",
  width: o = "100%",
  horizontal: c = !1,
  image: d = "",
  imageAltText: s = "",
  title: y,
  icon: T = void 0,
  body: _ = "",
  eventFormat: x = "stack",
  eventLocation: N = "",
  eventTime: U = "",
  buttons: L = void 0,
  linkLabel: R = void 0,
  linkUrl: ne = void 0,
  tags: G = void 0,
  showBorders: F = !0,
  cardLink: W
}) => {
  const ee = Zo("card", "cards-components", {
    "card-degree": i === "degree",
    "card-event": i === "event",
    "card-story": i === "story",
    "card-news": i === "news",
    [`w-${o.replace("%", "")}`]: o !== "100%",
    "card-horizontal": c,
    borderless: !F
  }), Y = typeof d == "string" && d.length > 0, ve = !nS(i);
  return /* @__PURE__ */ V.jsxs(tE, { className: ee, "data-testid": "card-container", children: [
    Y && /* @__PURE__ */ V.jsx(
      tS,
      {
        src: d,
        alt: s,
        dataTestId: "card-image",
        cssClasses: ["card-img-top"],
        title: y,
        cardLink: ve ? W : void 0
      }
    ),
    !d && T && /* @__PURE__ */ V.jsx(
      "i",
      {
        className: `${T == null ? void 0 : T[0]} fa-${T == null ? void 0 : T[1]} fa-2x card-icon-top`,
        "data-testid": "card-icon"
      }
    ),
    /* @__PURE__ */ V.jsx("div", { className: c ? "card-content-wrapper" : void 0, children: /* @__PURE__ */ V.jsx(
      aS,
      {
        type: i,
        body: _,
        eventFormat: x,
        eventLocation: N,
        eventTime: U,
        title: y,
        buttons: L,
        linkLabel: R,
        linkUrl: ne,
        tags: G,
        cardLink: W
      }
    ) })
  ] });
};
lS.propTypes = {
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
const aS = ({
  type: i = "default",
  body: o = "",
  eventFormat: c = "stack",
  eventLocation: d = "",
  eventTime: s = "",
  title: y,
  buttons: T = void 0,
  linkLabel: _ = void 0,
  linkUrl: x = void 0,
  tags: N = void 0,
  cardLink: U
}) => {
  const L = nS(i), R = U && !L, ne = L && U, G = i === "event" && (s || d);
  return /* @__PURE__ */ V.jsxs(V.Fragment, { children: [
    y && /* @__PURE__ */ V.jsx("div", { className: "card-header", "data-testid": "card-title", children: /* @__PURE__ */ V.jsx("h3", { className: "card-title", children: R ? /* @__PURE__ */ V.jsx("a", { href: U, children: y }) : y }) }),
    o && /* @__PURE__ */ V.jsx("div", { className: "card-body", "data-testid": "card-body", children: /* @__PURE__ */ V.jsx("div", { dangerouslySetInnerHTML: _s(o) }) }),
    G && /* @__PURE__ */ V.jsx(
      rS,
      {
        eventFormat: c,
        eventTime: s,
        eventLocation: d
      }
    ),
    ne ? /* @__PURE__ */ V.jsx("div", { className: "card-link", "data-testid": "card-link", children: /* @__PURE__ */ V.jsx(
      ms,
      {
        gaData: {
          ...wv,
          text: y
        },
        children: /* @__PURE__ */ V.jsx("a", { href: U, className: "card-arrow-link", "aria-label": y, children: /* @__PURE__ */ V.jsx("i", { className: "fas fa-arrow-right", "aria-hidden": "true" }) })
      }
    ) }) : /* @__PURE__ */ V.jsxs(V.Fragment, { children: [
      !y && !o && !G && /* @__PURE__ */ V.jsx("br", {}),
      T && /* @__PURE__ */ V.jsx("div", { className: "card-buttons", children: T.map((F) => /* @__PURE__ */ V.jsx(
        "div",
        {
          className: "card-button",
          "data-testid": "card-button",
          children: /* @__PURE__ */ V.jsx(
            F0,
            {
              ariaLabel: F.ariaLabel,
              color: F.color,
              icon: F.icon,
              href: F.href,
              label: F.label,
              onClick: F.onClick,
              size: F.size,
              target: F.target,
              cardTitle: y
            }
          )
        },
        `${F.label}-${F.href}`
      )) }),
      x && _ && /* @__PURE__ */ V.jsx("div", { className: "card-link", "data-testid": "card-link", children: /* @__PURE__ */ V.jsx(
        ms,
        {
          gaData: {
            ...wv,
            section: y,
            text: _
          },
          children: /* @__PURE__ */ V.jsx("a", { href: lE(x), children: _ })
        }
      ) })
    ] }),
    N && /* @__PURE__ */ V.jsx("div", { className: "card-tags", "data-testid": "card-tags", children: N.map((F) => (
      // @ts-ignore
      /* @__PURE__ */ V.jsx(
        eS,
        {
          ariaLabel: F.ariaLabel,
          color: F.color,
          href: F.href,
          label: F.label,
          onClick: F.onClick,
          cardTitle: y
        },
        `${F.label}-${F.href}`
      )
    )) })
  ] });
};
aS.propTypes = {
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
const rS = ({
  eventFormat: i = "stack",
  eventLocation: o = "",
  eventTime: c = ""
}) => i === "inline" ? /* @__PURE__ */ V.jsxs("div", { className: "card-event-details", children: [
  c && /* @__PURE__ */ V.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ V.jsx("div", { children: /* @__PURE__ */ V.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ V.jsx("div", { dangerouslySetInnerHTML: _s(c) })
  ] }),
  o && /* @__PURE__ */ V.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ V.jsx("div", { children: /* @__PURE__ */ V.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ V.jsx(
      "div",
      {
        dangerouslySetInnerHTML: _s(o)
      }
    )
  ] })
] }) : /* @__PURE__ */ V.jsxs(V.Fragment, { children: [
  c && /* @__PURE__ */ V.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ V.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ V.jsx("div", { children: /* @__PURE__ */ V.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ V.jsx("div", { dangerouslySetInnerHTML: _s(c) })
  ] }) }),
  o && /* @__PURE__ */ V.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ V.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ V.jsx("div", { children: /* @__PURE__ */ V.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ V.jsx("span", { children: /* @__PURE__ */ V.jsx(
      "div",
      {
        dangerouslySetInnerHTML: _s(o)
      }
    ) })
  ] }) })
] });
rS.propTypes = {
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
const aE = Si.div`
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
`, rE = () => /* @__PURE__ */ V.jsxs(aE, { children: [
  /* @__PURE__ */ V.jsx("div", {}),
  /* @__PURE__ */ V.jsx("div", {}),
  /* @__PURE__ */ V.jsx("div", {}),
  /* @__PURE__ */ V.jsx("div", {})
] }), iE = Si.section``, I0 = GS(null), iS = ({
  defaultProps: i,
  dataSource: o,
  noFeedText: c,
  renderHeader: d,
  renderBody: s,
  dataTransformer: y,
  dataFilter: T,
  maxItems: _
}) => {
  const [{ data: x, loading: N, error: U }, L] = Mw(), [R, ne] = tu([]), G = { ...i.dataSource, ...o };
  return au(() => {
    L(G == null ? void 0 : G.url);
  }, [G == null ? void 0 : G.url]), au(() => {
    const F = x == null ? void 0 : x.nodes.map(y), W = F == null ? void 0 : F.filter(
      (ee) => T(ee, o == null ? void 0 : o.filters)
    );
    ne(_ ? W == null ? void 0 : W.slice(0, _) : W);
  }, [x]), // Init the context to be used on its childrens
  /* @__PURE__ */ V.jsx(I0.Provider, { value: { feeds: R }, children: /* @__PURE__ */ V.jsxs(iE, { children: [
    d,
    U ? /* @__PURE__ */ V.jsx("span", { children: "Error, try again!" }) : /* @__PURE__ */ V.jsxs(V.Fragment, { children: [
      N && !(R != null && R.length) && /* @__PURE__ */ V.jsx("div", { className: "text-center mt-4", children: /* @__PURE__ */ V.jsx(rE, {}) }),
      R != null && R.length ? s : !N && /* @__PURE__ */ V.jsx("p", { className: "text-center", children: c })
    ] })
  ] }) });
};
iS.propTypes = {
  renderHeader: g.element,
  renderBody: g.element,
  maxItems: g.number,
  dataTransformer: g.func,
  dataFilter: g.func,
  noFeedText: g.string
};
const W0 = g.shape({
  color: g.oneOf(["white", "dark"]),
  text: g.string
}), J0 = g.shape({
  color: g.oneOf(["gold", "maroon", "gray", "dark"]),
  text: g.string
});
g.shape({
  color: g.oneOf(["gold", "maroon", "gray", "dark"]),
  text: g.string,
  size: g.string
});
const oS = g.shape({
  url: g.string,
  filters: g.string
}), oE = g.shape({
  header: W0,
  ctaButton: J0,
  dataSource: oS,
  maxItems: g.number
}), uE = Si.div`
  @media screen and (min-width: 768px) {
    & {
      display: inline-flex;
      justify-content: flex-end;
    }
  }
`, uS = ({
  defaultProps: i,
  header: o,
  ctaButton: c
}) => {
  const d = { ...i.header, ...o }, s = { ...i.ctaButton, ...c }, y = d.tag || "h2", T = y !== "h2", _ = `text-${d.color} ${T ? "h2" : ""}`.trim();
  return /* @__PURE__ */ V.jsxs(
    "div",
    {
      className: "row justify-content-between align-items-center pb-6",
      "data-testid": "feed-header",
      children: [
        /* @__PURE__ */ V.jsx("div", { className: "col-sm-12 col-md-9", children: /* @__PURE__ */ V.jsx(y, { className: _, children: d.text }) }),
        /* @__PURE__ */ V.jsx(uE, { className: "col-sm-12 col-md-3", children: /* @__PURE__ */ V.jsx(
          ms,
          {
            gaData: {
              event: "link",
              action: "click",
              name: "onclick",
              type: "internal link",
              region: "main content",
              section: d.text,
              text: s.text
            },
            children: /* @__PURE__ */ V.jsx("a", { className: `btn btn-${s.color}`, href: s.url, children: s.text })
          }
        ) })
      ]
    }
  );
};
uS.propTypes = {
  defaultProps: oE,
  header: W0,
  ctaButton: J0
};
const cS = ({ children: i }) => /* @__PURE__ */ V.jsx("div", { className: "row", "data-testid": "feed-body", children: /* @__PURE__ */ V.jsx("div", { className: "col", children: i }) });
cS.propTypes = {
  children: g.element
};
Si.img`
  width: 100%;
`;
g.oneOf(["heading-hero", "story-hero"]), g.arrayOf(e0), g.string;
g.bool, g.bool, g.bool, g.bool, g.string, g.func, g.node, g.bool, g.string, g.bool;
g.oneOf(["default", "bordered"]).isRequired, g.oneOf(["white", "gray1", "gray2", "gray7"]).isRequired, g.number, g.number, g.func.isRequired;
Si.div`
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
const cE = _t.forwardRef(({
  overflowTabs: i,
  idToChild: o,
  activeTabID: c,
  selectTab: d,
  gaData: s,
  openRight: y = !1
}, T) => {
  const [_, x] = tu(!1), N = Pm(null), U = Pm(null), L = Pm([]), R = Array.isArray(i) ? i : [], ne = t1(), G = R.includes(c ?? ""), F = R.map(($) => {
    const B = o == null ? void 0 : o[$];
    return B ? {
      id: $,
      title: B.props.title,
      icon: B.props.icon ?? null
    } : { id: $, title: $, icon: null };
  }), W = k0(($ = !0) => {
    var B;
    x(!1), $ && ((B = U.current) == null || B.focus());
  }, []), ee = ($) => {
    $.preventDefault(), x((B) => !B);
  };
  au(() => {
    function $(B) {
      var K;
      (K = N.current) != null && K.contains(B.target) || x(!1);
    }
    return document.addEventListener("mousedown", $), () => document.removeEventListener("mousedown", $);
  }, []);
  const Y = k0(
    ($, B) => {
      var K, Ae;
      switch ($.key) {
        case "ArrowDown": {
          $.preventDefault();
          const Fe = L.current[B + 1] ?? L.current[0];
          Fe == null || Fe.focus();
          break;
        }
        case "ArrowUp": {
          $.preventDefault();
          const Fe = L.current[B - 1] ?? L.current[F.length - 1];
          Fe == null || Fe.focus();
          break;
        }
        case "Home":
          $.preventDefault(), (K = L.current[0]) == null || K.focus();
          break;
        case "End":
          $.preventDefault(), (Ae = L.current[F.length - 1]) == null || Ae.focus();
          break;
        case "Escape":
          $.preventDefault(), W();
          break;
        case "Tab":
          x(!1);
          break;
      }
    },
    [F.length, W]
  ), ve = ($, B, K) => {
    $.preventDefault(), W(!1), d == null || d($, B, K);
  }, le = F.length === 0, ae = ($) => {
    N.current = $, typeof T == "function" ? T($) : T && (T.current = $);
  };
  return /* @__PURE__ */ V.jsxs(
    "div",
    {
      ref: ae,
      className: `uds-more-dropdown${y ? " dropdown-open-right" : ""}${le ? " uds-more-dropdown-hidden" : ""}`,
      "aria-hidden": le || void 0,
      children: [
        /* @__PURE__ */ V.jsx(ms, { gaData: s ?? {}, children: /* @__PURE__ */ V.jsxs(
          "button",
          {
            ref: U,
            type: "button",
            onClick: ee,
            onKeyDown: ($) => {
              var B, K;
              $.key === "Enter" || $.key === " " ? ($.preventDefault(), _ ? W() : (x(!0), requestAnimationFrame(() => {
                var Ae;
                return (Ae = L.current[0]) == null ? void 0 : Ae.focus();
              }))) : _ && $.key === "ArrowDown" ? ($.preventDefault(), (B = L.current[0]) == null || B.focus()) : _ && $.key === "ArrowUp" ? ($.preventDefault(), (K = L.current[F.length - 1]) == null || K.focus()) : _ && $.key === "Escape" && ($.preventDefault(), W());
            },
            "aria-haspopup": "true",
            "aria-expanded": _,
            "aria-controls": ne,
            "aria-label": `More, ${F.length} additional tab${F.length !== 1 ? "s" : ""}`,
            className: `uds-tab more-dropdown-button${G ? " active" : ""}`,
            children: [
              /* @__PURE__ */ V.jsxs("span", { className: "more-dropdown-button-inner", children: [
                /* @__PURE__ */ V.jsx("span", { "aria-hidden": "true", children: "More" }),
                /* @__PURE__ */ V.jsx(
                  "i",
                  {
                    "aria-hidden": "true",
                    className: "fas fa-chevron-down more-dropdown-icon"
                  }
                )
              ] }),
              /* @__PURE__ */ V.jsx("span", { className: "more-dropdown-button-indicator", "aria-hidden": "true" })
            ]
          }
        ) }),
        /* @__PURE__ */ V.jsx(
          "ul",
          {
            id: ne,
            role: "menu",
            "aria-label": "More tabs",
            "aria-hidden": !_,
            className: `more-dropdown-menu uds-more-dropdown-list${_ ? " open" : ""}`,
            children: F.map(($, B) => {
              const K = $.id === c;
              return /* @__PURE__ */ V.jsx("li", { role: "none", children: /* @__PURE__ */ V.jsxs(
                "button",
                {
                  ref: (Ae) => {
                    Ae && (L.current[B] = Ae);
                  },
                  type: "button",
                  role: "menuitem",
                  tabIndex: -1,
                  onClick: (Ae) => ve(Ae, $.id, $.title),
                  onKeyDown: (Ae) => Y(Ae, B),
                  className: "more-dropdown-item",
                  "aria-current": K || void 0,
                  children: [
                    $.icon && /* @__PURE__ */ V.jsx(
                      "i",
                      {
                        "aria-hidden": "true",
                        className: `${$.icon[0]} fa-${$.icon[1]} me-1`
                      }
                    ),
                    $.title
                  ]
                }
              ) }, $.id);
            })
          }
        )
      ]
    }
  );
});
cE.displayName = "MoreDropdown";
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
g.oneOfType([
  g.element,
  g.arrayOf(g.element)
]).isRequired;
g.number.isRequired;
g.arrayOf(g.string).isRequired, g.func;
g.func;
g.func;
g.arrayOf(g.element);
g.element, g.func;
g.arrayOf(g.object);
var sE = !1;
try {
  var Tv = Object.defineProperty({}, "passive", {
    get: function() {
      sE = !0;
    }
  });
  window.addEventListener("testPassive", null, Tv), window.removeEventListener("testPassive", null, Tv);
} catch {
}
g.number, g.string, g.string, g.arrayOf(g.object).isRequired, g.string, g.func, g.string, g.string, g.func, g.bool, g.bool, g.bool, g.bool, g.bool, g.string, g.bool, g.bool, g.bool;
g.string.isRequired, g.arrayOf(
  g.shape({
    title: g.string.isRequired,
    content: g.string,
    eventLocation: g.string,
    eventTime: g.string,
    image: g.string,
    imageAltText: g.string,
    buttons: eu.propTypes.buttons,
    linkLabel: g.string,
    linkUrl: g.string,
    tags: eu.propTypes.tags
  })
).isRequired, eu.propTypes.type, eu.propTypes.eventFormat, eu.propTypes.horizontal, g.string, g.string, g.bool, g.string;
g.number.isRequired, g.arrayOf(g.object).isRequired, g.string, g.string, g.bool, g.string;
const sh = {
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
g.string, sh.imageItems, sh.hasContent;
sh.imageItems.isRequired, sh.hasContent, g.string, g.string, g.bool;
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
var d0 = { exports: {} }, Tm = {}, kv = { exports: {} }, Ev = {}, Av;
function fE() {
  return Av || (Av = 1, (function(i) {
    function o(H, M) {
      var q = H.length;
      H.push(M);
      e: for (; 0 < q; ) {
        var ue = q - 1 >>> 1, ie = H[ue];
        if (0 < s(ie, M))
          H[ue] = M, H[q] = ie, q = ue;
        else break e;
      }
    }
    function c(H) {
      return H.length === 0 ? null : H[0];
    }
    function d(H) {
      if (H.length === 0) return null;
      var M = H[0], q = H.pop();
      if (q !== M) {
        H[0] = q;
        e: for (var ue = 0, ie = H.length, Ye = ie >>> 1; ue < Ye; ) {
          var Se = 2 * (ue + 1) - 1, ce = H[Se], P = Se + 1, be = H[P];
          if (0 > s(ce, q))
            P < ie && 0 > s(be, ce) ? (H[ue] = be, H[P] = q, ue = P) : (H[ue] = ce, H[Se] = q, ue = Se);
          else if (P < ie && 0 > s(be, q))
            H[ue] = be, H[P] = q, ue = P;
          else break e;
        }
      }
      return M;
    }
    function s(H, M) {
      var q = H.sortIndex - M.sortIndex;
      return q !== 0 ? q : H.id - M.id;
    }
    if (i.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var y = performance;
      i.unstable_now = function() {
        return y.now();
      };
    } else {
      var T = Date, _ = T.now();
      i.unstable_now = function() {
        return T.now() - _;
      };
    }
    var x = [], N = [], U = 1, L = null, R = 3, ne = !1, G = !1, F = !1, W = !1, ee = typeof setTimeout == "function" ? setTimeout : null, Y = typeof clearTimeout == "function" ? clearTimeout : null, ve = typeof setImmediate < "u" ? setImmediate : null;
    function le(H) {
      for (var M = c(N); M !== null; ) {
        if (M.callback === null) d(N);
        else if (M.startTime <= H)
          d(N), M.sortIndex = M.expirationTime, o(x, M);
        else break;
        M = c(N);
      }
    }
    function ae(H) {
      if (F = !1, le(H), !G)
        if (c(x) !== null)
          G = !0, $ || ($ = !0, je());
        else {
          var M = c(N);
          M !== null && Qe(ae, M.startTime - H);
        }
    }
    var $ = !1, B = -1, K = 5, Ae = -1;
    function Fe() {
      return W ? !0 : !(i.unstable_now() - Ae < K);
    }
    function ye() {
      if (W = !1, $) {
        var H = i.unstable_now();
        Ae = H;
        var M = !0;
        try {
          e: {
            G = !1, F && (F = !1, Y(B), B = -1), ne = !0;
            var q = R;
            try {
              t: {
                for (le(H), L = c(x); L !== null && !(L.expirationTime > H && Fe()); ) {
                  var ue = L.callback;
                  if (typeof ue == "function") {
                    L.callback = null, R = L.priorityLevel;
                    var ie = ue(
                      L.expirationTime <= H
                    );
                    if (H = i.unstable_now(), typeof ie == "function") {
                      L.callback = ie, le(H), M = !0;
                      break t;
                    }
                    L === c(x) && d(x), le(H);
                  } else d(x);
                  L = c(x);
                }
                if (L !== null) M = !0;
                else {
                  var Ye = c(N);
                  Ye !== null && Qe(
                    ae,
                    Ye.startTime - H
                  ), M = !1;
                }
              }
              break e;
            } finally {
              L = null, R = q, ne = !1;
            }
            M = void 0;
          }
        } finally {
          M ? je() : $ = !1;
        }
      }
    }
    var je;
    if (typeof ve == "function")
      je = function() {
        ve(ye);
      };
    else if (typeof MessageChannel < "u") {
      var Ee = new MessageChannel(), yt = Ee.port2;
      Ee.port1.onmessage = ye, je = function() {
        yt.postMessage(null);
      };
    } else
      je = function() {
        ee(ye, 0);
      };
    function Qe(H, M) {
      B = ee(function() {
        H(i.unstable_now());
      }, M);
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(H) {
      H.callback = null;
    }, i.unstable_forceFrameRate = function(H) {
      0 > H || 125 < H ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : K = 0 < H ? Math.floor(1e3 / H) : 5;
    }, i.unstable_getCurrentPriorityLevel = function() {
      return R;
    }, i.unstable_next = function(H) {
      switch (R) {
        case 1:
        case 2:
        case 3:
          var M = 3;
          break;
        default:
          M = R;
      }
      var q = R;
      R = M;
      try {
        return H();
      } finally {
        R = q;
      }
    }, i.unstable_requestPaint = function() {
      W = !0;
    }, i.unstable_runWithPriority = function(H, M) {
      switch (H) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          H = 3;
      }
      var q = R;
      R = H;
      try {
        return M();
      } finally {
        R = q;
      }
    }, i.unstable_scheduleCallback = function(H, M, q) {
      var ue = i.unstable_now();
      switch (typeof q == "object" && q !== null ? (q = q.delay, q = typeof q == "number" && 0 < q ? ue + q : ue) : q = ue, H) {
        case 1:
          var ie = -1;
          break;
        case 2:
          ie = 250;
          break;
        case 5:
          ie = 1073741823;
          break;
        case 4:
          ie = 1e4;
          break;
        default:
          ie = 5e3;
      }
      return ie = q + ie, H = {
        id: U++,
        callback: M,
        priorityLevel: H,
        startTime: q,
        expirationTime: ie,
        sortIndex: -1
      }, q > ue ? (H.sortIndex = q, o(N, H), c(x) === null && H === c(N) && (F ? (Y(B), B = -1) : F = !0, Qe(ae, q - ue))) : (H.sortIndex = ie, o(x, H), G || ne || (G = !0, $ || ($ = !0, je()))), H;
    }, i.unstable_shouldYield = Fe, i.unstable_wrapCallback = function(H) {
      var M = R;
      return function() {
        var q = R;
        R = M;
        try {
          return H.apply(this, arguments);
        } finally {
          R = q;
        }
      };
    };
  })(Ev)), Ev;
}
var xv;
function dE() {
  return xv || (xv = 1, kv.exports = fE()), kv.exports;
}
var _v;
function pE() {
  if (_v) return Tm;
  _v = 1;
  var i = { env: { NODE_ENV: "production" } }, o = dE(), c = _t, d = i1;
  function s(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function y(e) {
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
  function _(e) {
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
  function N(e) {
    if (T(e) !== e)
      throw Error(s(188));
  }
  function U(e) {
    var t = e.alternate;
    if (!t) {
      if (t = T(e), t === null) throw Error(s(188));
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
          if (r === n) return N(a), e;
          if (r === l) return N(a), t;
          r = r.sibling;
        }
        throw Error(s(188));
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
          if (!u) throw Error(s(189));
        }
      }
      if (n.alternate !== l) throw Error(s(190));
    }
    if (n.tag !== 3) throw Error(s(188));
    return n.stateNode.current === n ? e : t;
  }
  function L(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = L(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var R = Object.assign, ne = Symbol.for("react.element"), G = Symbol.for("react.transitional.element"), F = Symbol.for("react.portal"), W = Symbol.for("react.fragment"), ee = Symbol.for("react.strict_mode"), Y = Symbol.for("react.profiler"), ve = Symbol.for("react.consumer"), le = Symbol.for("react.context"), ae = Symbol.for("react.forward_ref"), $ = Symbol.for("react.suspense"), B = Symbol.for("react.suspense_list"), K = Symbol.for("react.memo"), Ae = Symbol.for("react.lazy"), Fe = Symbol.for("react.activity"), ye = Symbol.for("react.memo_cache_sentinel"), je = Symbol.iterator;
  function Ee(e) {
    return e === null || typeof e != "object" ? null : (e = je && e[je] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var yt = Symbol.for("react.client.reference");
  function Qe(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === yt ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case W:
        return "Fragment";
      case Y:
        return "Profiler";
      case ee:
        return "StrictMode";
      case $:
        return "Suspense";
      case B:
        return "SuspenseList";
      case Fe:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case F:
          return "Portal";
        case le:
          return e.displayName || "Context";
        case ve:
          return (e._context.displayName || "Context") + ".Consumer";
        case ae:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case K:
          return t = e.displayName || null, t !== null ? t : Qe(e.type) || "Memo";
        case Ae:
          t = e._payload, e = e._init;
          try {
            return Qe(e(t));
          } catch {
          }
      }
    return null;
  }
  var H = Array.isArray, M = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, q = d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ue = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ie = [], Ye = -1;
  function Se(e) {
    return { current: e };
  }
  function ce(e) {
    0 > Ye || (e.current = ie[Ye], ie[Ye] = null, Ye--);
  }
  function P(e, t) {
    Ye++, ie[Ye] = e.current, e.current = t;
  }
  var be = Se(null), se = Se(null), at = Se(null), Cn = Se(null);
  function kn(e, t) {
    switch (P(at, t), P(se, e), P(be, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Mp(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = Mp(t), e = Lp(t, e);
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
    ce(be), P(be, e);
  }
  function ct() {
    ce(be), ce(se), ce(at);
  }
  function kr(e) {
    e.memoizedState !== null && P(Cn, e);
    var t = be.current, n = Lp(t, e.type);
    t !== n && (P(se, e), P(be, n));
  }
  function Aa(e) {
    se.current === e && (ce(be), ce(se)), Cn.current === e && (ce(Cn), fi._currentValue = ue);
  }
  var xa, wi;
  function Nn(e) {
    if (xa === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        xa = t && t[1] || "", wi = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + xa + e + wi;
  }
  var Oe = !1;
  function na(e, t) {
    if (!e || Oe) return "";
    Oe = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var D = function() {
                throw Error();
              };
              if (Object.defineProperty(D.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(D, []);
                } catch (A) {
                  var E = A;
                }
                Reflect.construct(e, [], D);
              } else {
                try {
                  D.call();
                } catch (A) {
                  E = A;
                }
                e.call(D.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (A) {
                E = A;
              }
              (D = e()) && typeof D.catch == "function" && D.catch(function() {
              });
            }
          } catch (A) {
            if (A && E && typeof A.stack == "string")
              return [A.stack, E.stack];
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
        var h = u.split(`
`), k = f.split(`
`);
        for (a = l = 0; l < h.length && !h[l].includes("DetermineComponentFrameRoot"); )
          l++;
        for (; a < k.length && !k[a].includes(
          "DetermineComponentFrameRoot"
        ); )
          a++;
        if (l === h.length || a === k.length)
          for (l = h.length - 1, a = k.length - 1; 1 <= l && 0 <= a && h[l] !== k[a]; )
            a--;
        for (; 1 <= l && 0 <= a; l--, a--)
          if (h[l] !== k[a]) {
            if (l !== 1 || a !== 1)
              do
                if (l--, a--, 0 > a || h[l] !== k[a]) {
                  var O = `
` + h[l].replace(" at new ", " at ");
                  return e.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", e.displayName)), O;
                }
              while (1 <= l && 0 <= a);
            break;
          }
      }
    } finally {
      Oe = !1, Error.prepareStackTrace = n;
    }
    return (n = e ? e.displayName || e.name : "") ? Nn(n) : "";
  }
  function Re(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Nn(e.type);
      case 16:
        return Nn("Lazy");
      case 13:
        return e.child !== t && t !== null ? Nn("Suspense Fallback") : Nn("Suspense");
      case 19:
        return Nn("SuspenseList");
      case 0:
      case 15:
        return na(e.type, !1);
      case 11:
        return na(e.type.render, !1);
      case 1:
        return na(e.type, !0);
      case 31:
        return Nn("Activity");
      default:
        return "";
    }
  }
  function _a(e) {
    try {
      var t = "", n = null;
      do
        t += Re(e, n), n = e, e = e.return;
      while (e);
      return t;
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack;
    }
  }
  var Ot = Object.prototype.hasOwnProperty, Vn = o.unstable_scheduleCallback, Oa = o.unstable_cancelCallback, zn = o.unstable_shouldYield, Ti = o.unstable_requestPaint, st = o.unstable_now, ki = o.unstable_getCurrentPriorityLevel, Ca = o.unstable_ImmediatePriority, tn = o.unstable_UserBlockingPriority, nn = o.unstable_NormalPriority, Qn = o.unstable_LowPriority, Na = o.unstable_IdlePriority, za = o.log, Da = o.unstable_setDisableYieldValue, Fn = null, Pe = null;
  function Yt(e) {
    if (typeof za == "function" && Da(e), Pe && typeof Pe.setStrictMode == "function")
      try {
        Pe.setStrictMode(Fn, e);
      } catch {
      }
  }
  var rt = Math.clz32 ? Math.clz32 : xi, Ei = Math.log, Ai = Math.LN2;
  function xi(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Ei(e) / Ai | 0) | 0;
  }
  var bl = 256, vl = 262144, ln = 4194304;
  function Ct(e) {
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
  function an(e, t, n) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var a = 0, r = e.suspendedLanes, u = e.pingedLanes;
    e = e.warmLanes;
    var f = l & 134217727;
    return f !== 0 ? (l = f & ~r, l !== 0 ? a = Ct(l) : (u &= f, u !== 0 ? a = Ct(u) : n || (n = f & ~e, n !== 0 && (a = Ct(n))))) : (f = l & ~r, f !== 0 ? a = Ct(f) : u !== 0 ? a = Ct(u) : n || (n = l & ~e, n !== 0 && (a = Ct(n)))), a === 0 ? 0 : t !== 0 && t !== a && (t & r) === 0 && (r = a & -a, n = t & -t, r >= n || r === 32 && (n & 4194048) !== 0) ? t : a;
  }
  function Sl(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function _i(e, t) {
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
  function Er() {
    var e = ln;
    return ln <<= 1, (ln & 62914560) === 0 && (ln = 4194304), e;
  }
  function Ra(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function wl(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function Ma(e, t, n, l, a, r) {
    var u = e.pendingLanes;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
    var f = e.entanglements, h = e.expirationTimes, k = e.hiddenUpdates;
    for (n = u & ~n; 0 < n; ) {
      var O = 31 - rt(n), D = 1 << O;
      f[O] = 0, h[O] = -1;
      var E = k[O];
      if (E !== null)
        for (k[O] = null, O = 0; O < E.length; O++) {
          var A = E[O];
          A !== null && (A.lane &= -536870913);
        }
      n &= ~D;
    }
    l !== 0 && la(e, l, 0), r !== 0 && a === 0 && e.tag !== 0 && (e.suspendedLanes |= r & ~(u & ~t));
  }
  function la(e, t, n) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var l = 31 - rt(t);
    e.entangledLanes |= t, e.entanglements[l] = e.entanglements[l] | 1073741824 | n & 261930;
  }
  function Gt(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var l = 31 - rt(n), a = 1 << l;
      a & t | e[l] & t && (e[l] |= t), n &= ~a;
    }
  }
  function Xn(e, t) {
    var n = t & -t;
    return n = (n & 42) !== 0 ? 1 : aa(n), (n & (e.suspendedLanes | t)) !== 0 ? 0 : n;
  }
  function aa(e) {
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
  function ra(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Oi() {
    var e = q.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : am(e.type));
  }
  function Ar(e, t) {
    var n = q.p;
    try {
      return q.p = e, t();
    } finally {
      q.p = n;
    }
  }
  var rn = Math.random().toString(36).slice(2), Ze = "__reactFiber$" + rn, it = "__reactProps$" + rn, Tl = "__reactContainer$" + rn, $n = "__reactEvents$" + rn, ru = "__reactListeners$" + rn, iu = "__reactHandles$" + rn, He = "__reactResources$" + rn, on = "__reactMarker$" + rn;
  function xr(e) {
    delete e[Ze], delete e[it], delete e[$n], delete e[ru], delete e[iu];
  }
  function Pn(e) {
    var t = e[Ze];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Tl] || n[Ze]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
          for (e = Gp(e); e !== null; ) {
            if (n = e[Ze]) return n;
            e = Gp(e);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Dn(e) {
    if (e = e[Ze] || e[Tl]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function kl(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(s(33));
  }
  function Zn(e) {
    var t = e[He];
    return t || (t = e[He] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Ke(e) {
    e[on] = !0;
  }
  var Ci = /* @__PURE__ */ new Set(), Ni = {};
  function Kn(e, t) {
    At(e, t), At(e + "Capture", t);
  }
  function At(e, t) {
    for (Ni[e] = t, e = 0; e < t.length; e++)
      Ci.add(t[e]);
  }
  var zi = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), La = {}, In = {};
  function Di(e) {
    return Ot.call(In, e) ? !0 : Ot.call(La, e) ? !1 : zi.test(e) ? In[e] = !0 : (La[e] = !0, !1);
  }
  function El(e, t, n) {
    if (Di(t))
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
  function Al(e, t, n) {
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
  function Vt(e, t, n, l) {
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
  function Nt(e) {
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
  function _r(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function ou(e, t, n) {
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
  function Or(e) {
    if (!e._valueTracker) {
      var t = _r(e) ? "checked" : "value";
      e._valueTracker = ou(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function Ri(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), l = "";
    return e && (l = _r(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== n ? (t.setValue(e), !0) : !1;
  }
  function Ua(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Mi = /[\n"\\]/g;
  function jt(e) {
    return e.replace(
      Mi,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function ja(e, t, n, l, a, r, u, f) {
    e.name = "", u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" ? e.type = u : e.removeAttribute("type"), t != null ? u === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Nt(t)) : e.value !== "" + Nt(t) && (e.value = "" + Nt(t)) : u !== "submit" && u !== "reset" || e.removeAttribute("value"), t != null ? xl(e, u, Nt(t)) : n != null ? xl(e, u, Nt(n)) : l != null && e.removeAttribute("value"), a == null && r != null && (e.defaultChecked = !!r), a != null && (e.checked = a && typeof a != "function" && typeof a != "symbol"), f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? e.name = "" + Nt(f) : e.removeAttribute("name");
  }
  function Ha(e, t, n, l, a, r, u, f) {
    if (r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (e.type = r), t != null || n != null) {
      if (!(r !== "submit" && r !== "reset" || t != null)) {
        Or(e);
        return;
      }
      n = n != null ? "" + Nt(n) : "", t = t != null ? "" + Nt(t) : n, f || t === e.value || (e.value = t), e.defaultValue = t;
    }
    l = l ?? a, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = f ? e.checked : !!l, e.defaultChecked = !!l, u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.name = u), Or(e);
  }
  function xl(e, t, n) {
    t === "number" && Ua(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
  }
  function Rn(e, t, n, l) {
    if (e = e.options, t) {
      t = {};
      for (var a = 0; a < n.length; a++)
        t["$" + n[a]] = !0;
      for (n = 0; n < e.length; n++)
        a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && l && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + Nt(n), t = null, a = 0; a < e.length; a++) {
        if (e[a].value === n) {
          e[a].selected = !0, l && (e[a].defaultSelected = !0);
          return;
        }
        t !== null || e[a].disabled || (t = e[a]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Cr(e, t, n) {
    if (t != null && (t = "" + Nt(t), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + Nt(n) : "";
  }
  function ia(e, t, n, l) {
    if (t == null) {
      if (l != null) {
        if (n != null) throw Error(s(92));
        if (H(l)) {
          if (1 < l.length) throw Error(s(93));
          l = l[0];
        }
        n = l;
      }
      n == null && (n = ""), t = n;
    }
    n = Nt(t), e.defaultValue = n, l = e.textContent, l === n && l !== "" && l !== null && (e.value = l), Or(e);
  }
  function wt(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var oa = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function zt(e, t, n) {
    var l = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? l ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : l ? e.setProperty(t, n) : typeof n != "number" || n === 0 || oa.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
  }
  function Li(e, t, n) {
    if (t != null && typeof t != "object")
      throw Error(s(62));
    if (e = e.style, n != null) {
      for (var l in n)
        !n.hasOwnProperty(l) || t != null && t.hasOwnProperty(l) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "");
      for (var a in t)
        l = t[a], t.hasOwnProperty(a) && n[a] !== l && zt(e, a, l);
    } else
      for (var r in t)
        t.hasOwnProperty(r) && zt(e, r, t[r]);
  }
  function _l(e) {
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
  var uu = /* @__PURE__ */ new Map([
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
  ]), Ui = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function En(e) {
    return Ui.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function Qt() {
  }
  var qa = null;
  function Nr(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Wn = null, Ol = null;
  function ji(e) {
    var t = Dn(e);
    if (t && (e = t.stateNode)) {
      var n = e[it] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (ja(
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
              'input[name="' + jt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < n.length; t++) {
              var l = n[t];
              if (l !== e && l.form === e.form) {
                var a = l[it] || null;
                if (!a) throw Error(s(90));
                ja(
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
              l = n[t], l.form === e.form && Ri(l);
          }
          break e;
        case "textarea":
          Cr(e, n.value, n.defaultValue);
          break e;
        case "select":
          t = n.value, t != null && Rn(e, !!n.multiple, t, !1);
      }
    }
  }
  var Ba = !1;
  function Ya(e, t, n) {
    if (Ba) return e(t, n);
    Ba = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (Ba = !1, (Wn !== null || Ol !== null) && (wo(), Wn && (t = Wn, e = Ol, Ol = Wn = null, ji(t), e)))
        for (t = 0; t < e.length; t++) ji(e[t]);
    }
  }
  function An(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var l = n[it] || null;
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
        s(231, t, typeof n)
      );
    return n;
  }
  var Ft = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), m = !1;
  if (Ft)
    try {
      var p = {};
      Object.defineProperty(p, "passive", {
        get: function() {
          m = !0;
        }
      }), window.addEventListener("test", p, p), window.removeEventListener("test", p, p);
    } catch {
      m = !1;
    }
  var S = null, z = null, j = null;
  function I() {
    if (j) return j;
    var e, t = z, n = t.length, l, a = "value" in S ? S.value : S.textContent, r = a.length;
    for (e = 0; e < n && t[e] === a[e]; e++) ;
    var u = n - e;
    for (l = 1; l <= u && t[n - l] === a[r - l]; l++) ;
    return j = a.slice(e, 1 < l ? 1 - l : void 0);
  }
  function te(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function he() {
    return !0;
  }
  function gt() {
    return !1;
  }
  function Me(e) {
    function t(n, l, a, r, u) {
      this._reactName = n, this._targetInst = a, this.type = l, this.nativeEvent = r, this.target = u, this.currentTarget = null;
      for (var f in e)
        e.hasOwnProperty(f) && (n = e[f], this[f] = n ? n(r) : r[f]);
      return this.isDefaultPrevented = (r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1) ? he : gt, this.isPropagationStopped = gt, this;
    }
    return R(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = he);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = he);
      },
      persist: function() {
      },
      isPersistent: he
    }), t;
  }
  var Be = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, ft = Me(Be), ut = R({}, Be, { view: 0, detail: 0 }), Mn = Me(ut), vi, cu, zr, Hi = R({}, ut, {
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
    getModifierState: fu,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== zr && (zr && e.type === "mousemove" ? (vi = e.screenX - zr.screenX, cu = e.screenY - zr.screenY) : cu = vi = 0, zr = e), vi);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : cu;
    }
  }), Us = Me(Hi), Oh = R({}, Hi, { dataTransfer: 0 }), Ch = Me(Oh), Nh = R({}, ut, { relatedTarget: 0 }), su = Me(Nh), zh = R({}, Be, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Dh = Me(zh), Rh = R({}, Be, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Mh = Me(Rh), Lh = R({}, Be, { data: 0 }), js = Me(Lh), Uh = {
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
  }, jh = {
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
  }, Hh = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function qh(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Hh[e]) ? !!t[e] : !1;
  }
  function fu() {
    return qh;
  }
  var Bh = R({}, ut, {
    key: function(e) {
      if (e.key) {
        var t = Uh[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = te(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? jh[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: fu,
    charCode: function(e) {
      return e.type === "keypress" ? te(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? te(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), Yh = Me(Bh), Gh = R({}, Hi, {
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
  }), Hs = Me(Gh), Vh = R({}, ut, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: fu
  }), Qh = Me(Vh), Fh = R({}, Be, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Xh = Me(Fh), $h = R({}, Hi, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Ph = Me($h), Zh = R({}, Be, {
    newState: 0,
    oldState: 0
  }), Kh = Me(Zh), Ih = [9, 13, 27, 32], du = Ft && "CompositionEvent" in window, Dr = null;
  Ft && "documentMode" in document && (Dr = document.documentMode);
  var Wh = Ft && "TextEvent" in window && !Dr, qs = Ft && (!du || Dr && 8 < Dr && 11 >= Dr), Bs = " ", Ys = !1;
  function Gs(e, t) {
    switch (e) {
      case "keyup":
        return Ih.indexOf(t.keyCode) !== -1;
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
  function Vs(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Ga = !1;
  function Jh(e, t) {
    switch (e) {
      case "compositionend":
        return Vs(t);
      case "keypress":
        return t.which !== 32 ? null : (Ys = !0, Bs);
      case "textInput":
        return e = t.data, e === Bs && Ys ? null : e;
      default:
        return null;
    }
  }
  function eg(e, t) {
    if (Ga)
      return e === "compositionend" || !du && Gs(e, t) ? (e = I(), j = z = S = null, Ga = !1, e) : null;
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
        return qs && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var tg = {
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
  function Qs(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!tg[e.type] : t === "textarea";
  }
  function Fs(e, t, n, l) {
    Wn ? Ol ? Ol.push(l) : Ol = [l] : Wn = l, t = Oo(t, "onChange"), 0 < t.length && (n = new ft(
      "onChange",
      "change",
      null,
      n,
      l
    ), e.push({ event: n, listeners: t }));
  }
  var Rr = null, Mr = null;
  function ng(e) {
    Op(e, 0);
  }
  function qi(e) {
    var t = kl(e);
    if (Ri(t)) return e;
  }
  function Xs(e, t) {
    if (e === "change") return t;
  }
  var $s = !1;
  if (Ft) {
    var pu;
    if (Ft) {
      var mu = "oninput" in document;
      if (!mu) {
        var Ps = document.createElement("div");
        Ps.setAttribute("oninput", "return;"), mu = typeof Ps.oninput == "function";
      }
      pu = mu;
    } else pu = !1;
    $s = pu && (!document.documentMode || 9 < document.documentMode);
  }
  function Zs() {
    Rr && (Rr.detachEvent("onpropertychange", Ks), Mr = Rr = null);
  }
  function Ks(e) {
    if (e.propertyName === "value" && qi(Mr)) {
      var t = [];
      Fs(
        t,
        Mr,
        e,
        Nr(e)
      ), Ya(ng, t);
    }
  }
  function lg(e, t, n) {
    e === "focusin" ? (Zs(), Rr = t, Mr = n, Rr.attachEvent("onpropertychange", Ks)) : e === "focusout" && Zs();
  }
  function ag(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return qi(Mr);
  }
  function rg(e, t) {
    if (e === "click") return qi(t);
  }
  function ig(e, t) {
    if (e === "input" || e === "change")
      return qi(t);
  }
  function og(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Xt = typeof Object.is == "function" ? Object.is : og;
  function Lr(e, t) {
    if (Xt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), l = Object.keys(t);
    if (n.length !== l.length) return !1;
    for (l = 0; l < n.length; l++) {
      var a = n[l];
      if (!Ot.call(t, a) || !Xt(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  function Is(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Ws(e, t) {
    var n = Is(e);
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
      n = Is(n);
    }
  }
  function Js(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Js(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function ef(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = Ua(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Ua(e.document);
    }
    return t;
  }
  function hu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var ug = Ft && "documentMode" in document && 11 >= document.documentMode, Va = null, gu = null, Ur = null, yu = !1;
  function tf(e, t, n) {
    var l = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    yu || Va == null || Va !== Ua(l) || (l = Va, "selectionStart" in l && hu(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), Ur && Lr(Ur, l) || (Ur = l, l = Oo(gu, "onSelect"), 0 < l.length && (t = new ft(
      "onSelect",
      "select",
      null,
      t,
      n
    ), e.push({ event: t, listeners: l }), t.target = Va)));
  }
  function ua(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Qa = {
    animationend: ua("Animation", "AnimationEnd"),
    animationiteration: ua("Animation", "AnimationIteration"),
    animationstart: ua("Animation", "AnimationStart"),
    transitionrun: ua("Transition", "TransitionRun"),
    transitionstart: ua("Transition", "TransitionStart"),
    transitioncancel: ua("Transition", "TransitionCancel"),
    transitionend: ua("Transition", "TransitionEnd")
  }, bu = {}, nf = {};
  Ft && (nf = document.createElement("div").style, "AnimationEvent" in window || (delete Qa.animationend.animation, delete Qa.animationiteration.animation, delete Qa.animationstart.animation), "TransitionEvent" in window || delete Qa.transitionend.transition);
  function ca(e) {
    if (bu[e]) return bu[e];
    if (!Qa[e]) return e;
    var t = Qa[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in nf)
        return bu[e] = t[n];
    return e;
  }
  var lf = ca("animationend"), af = ca("animationiteration"), rf = ca("animationstart"), cg = ca("transitionrun"), sg = ca("transitionstart"), fg = ca("transitioncancel"), of = ca("transitionend"), uf = /* @__PURE__ */ new Map(), vu = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  vu.push("scrollEnd");
  function xn(e, t) {
    uf.set(e, t), Kn(t, [e]);
  }
  var Bi = typeof reportError == "function" ? reportError : function(e) {
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
  }, un = [], Fa = 0, Su = 0;
  function Yi() {
    for (var e = Fa, t = Su = Fa = 0; t < e; ) {
      var n = un[t];
      un[t++] = null;
      var l = un[t];
      un[t++] = null;
      var a = un[t];
      un[t++] = null;
      var r = un[t];
      if (un[t++] = null, l !== null && a !== null) {
        var u = l.pending;
        u === null ? a.next = a : (a.next = u.next, u.next = a), l.pending = a;
      }
      r !== 0 && cf(n, a, r);
    }
  }
  function Gi(e, t, n, l) {
    un[Fa++] = e, un[Fa++] = t, un[Fa++] = n, un[Fa++] = l, Su |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l);
  }
  function wu(e, t, n, l) {
    return Gi(e, t, n, l), Vi(e);
  }
  function sa(e, t) {
    return Gi(e, null, null, t), Vi(e);
  }
  function cf(e, t, n) {
    e.lanes |= n;
    var l = e.alternate;
    l !== null && (l.lanes |= n);
    for (var a = !1, r = e.return; r !== null; )
      r.childLanes |= n, l = r.alternate, l !== null && (l.childLanes |= n), r.tag === 22 && (e = r.stateNode, e === null || e._visibility & 1 || (a = !0)), e = r, r = r.return;
    return e.tag === 3 ? (r = e.stateNode, a && t !== null && (a = 31 - rt(n), e = r.hiddenUpdates, l = e[a], l === null ? e[a] = [t] : l.push(t), t.lane = n | 536870912), r) : null;
  }
  function Vi(e) {
    if (50 < ai)
      throw ai = 0, Nc = null, Error(s(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Xa = {};
  function dg(e, t, n, l) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function $t(e, t, n, l) {
    return new dg(e, t, n, l);
  }
  function Tu(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Jn(e, t) {
    var n = e.alternate;
    return n === null ? (n = $t(
      e.tag,
      t,
      e.key,
      e.mode
    ), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 65011712, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
  }
  function sf(e, t) {
    e.flags &= 65011714;
    var n = e.alternate;
    return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function Qi(e, t, n, l, a, r) {
    var u = 0;
    if (l = e, typeof e == "function") Tu(e) && (u = 1);
    else if (typeof e == "string")
      u = yy(
        e,
        n,
        be.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case Fe:
          return e = $t(31, n, t, a), e.elementType = Fe, e.lanes = r, e;
        case W:
          return fa(n.children, a, r, t);
        case ee:
          u = 8, a |= 24;
          break;
        case Y:
          return e = $t(12, n, t, a | 2), e.elementType = Y, e.lanes = r, e;
        case $:
          return e = $t(13, n, t, a), e.elementType = $, e.lanes = r, e;
        case B:
          return e = $t(19, n, t, a), e.elementType = B, e.lanes = r, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case le:
                u = 10;
                break e;
              case ve:
                u = 9;
                break e;
              case ae:
                u = 11;
                break e;
              case K:
                u = 14;
                break e;
              case Ae:
                u = 16, l = null;
                break e;
            }
          u = 29, n = Error(
            s(130, e === null ? "null" : typeof e, "")
          ), l = null;
      }
    return t = $t(u, n, t, a), t.elementType = e, t.type = l, t.lanes = r, t;
  }
  function fa(e, t, n, l) {
    return e = $t(7, e, l, t), e.lanes = n, e;
  }
  function ku(e, t, n) {
    return e = $t(6, e, null, t), e.lanes = n, e;
  }
  function ff(e) {
    var t = $t(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function Eu(e, t, n) {
    return t = $t(
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
  var df = /* @__PURE__ */ new WeakMap();
  function cn(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = df.get(e);
      return n !== void 0 ? n : (t = {
        value: e,
        source: t,
        stack: _a(t)
      }, df.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: _a(t)
    };
  }
  var $a = [], Pa = 0, Fi = null, jr = 0, sn = [], fn = 0, Cl = null, Ln = 1, Un = "";
  function el(e, t) {
    $a[Pa++] = jr, $a[Pa++] = Fi, Fi = e, jr = t;
  }
  function pf(e, t, n) {
    sn[fn++] = Ln, sn[fn++] = Un, sn[fn++] = Cl, Cl = e;
    var l = Ln;
    e = Un;
    var a = 32 - rt(l) - 1;
    l &= ~(1 << a), n += 1;
    var r = 32 - rt(t) + a;
    if (30 < r) {
      var u = a - a % 5;
      r = (l & (1 << u) - 1).toString(32), l >>= u, a -= u, Ln = 1 << 32 - rt(t) + a | n << a | l, Un = r + e;
    } else
      Ln = 1 << r | n << a | l, Un = e;
  }
  function Au(e) {
    e.return !== null && (el(e, 1), pf(e, 1, 0));
  }
  function xu(e) {
    for (; e === Fi; )
      Fi = $a[--Pa], $a[Pa] = null, jr = $a[--Pa], $a[Pa] = null;
    for (; e === Cl; )
      Cl = sn[--fn], sn[fn] = null, Un = sn[--fn], sn[fn] = null, Ln = sn[--fn], sn[fn] = null;
  }
  function mf(e, t) {
    sn[fn++] = Ln, sn[fn++] = Un, sn[fn++] = Cl, Ln = t.id, Un = t.overflow, Cl = e;
  }
  var dt = null, Le = null, ge = !1, Nl = null, dn = !1, _u = Error(s(519));
  function zl(e) {
    var t = Error(
      s(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Hr(cn(t, e)), _u;
  }
  function hf(e) {
    var t = e.stateNode, n = e.type, l = e.memoizedProps;
    switch (t[Ze] = e, t[it] = l, n) {
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
        for (n = 0; n < ii.length; n++)
          de(ii[n], t);
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
        de("invalid", t), Ha(
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
        de("invalid", t);
        break;
      case "textarea":
        de("invalid", t), ia(t, l.value, l.defaultValue, l.children);
    }
    n = l.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || l.suppressHydrationWarning === !0 || Dp(t.textContent, n) ? (l.popover != null && (de("beforetoggle", t), de("toggle", t)), l.onScroll != null && de("scroll", t), l.onScrollEnd != null && de("scrollend", t), l.onClick != null && (t.onclick = Qt), t = !0) : t = !1, t || zl(e, !0);
  }
  function gf(e) {
    for (dt = e.return; dt; )
      switch (dt.tag) {
        case 5:
        case 31:
        case 13:
          dn = !1;
          return;
        case 27:
        case 3:
          dn = !0;
          return;
        default:
          dt = dt.return;
      }
  }
  function Za(e) {
    if (e !== dt) return !1;
    if (!ge) return gf(e), ge = !0, !1;
    var t = e.tag, n;
    if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || Fc(e.type, e.memoizedProps)), n = !n), n && Le && zl(e), gf(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      Le = Yp(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      Le = Yp(e);
    } else
      t === 27 ? (t = Le, Fl(e.type) ? (e = Kc, Kc = null, Le = e) : Le = t) : Le = dt ? pn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function da() {
    Le = dt = null, ge = !1;
  }
  function Ou() {
    var e = Nl;
    return e !== null && (Lt === null ? Lt = e : Lt.push.apply(
      Lt,
      e
    ), Nl = null), e;
  }
  function Hr(e) {
    Nl === null ? Nl = [e] : Nl.push(e);
  }
  var Cu = Se(null), pa = null, tl = null;
  function Dl(e, t, n) {
    P(Cu, t._currentValue), t._currentValue = n;
  }
  function nl(e) {
    e._currentValue = Cu.current, ce(Cu);
  }
  function Nu(e, t, n) {
    for (; e !== null; ) {
      var l = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, l !== null && (l.childLanes |= t)) : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function zu(e, t, n, l) {
    var a = e.child;
    for (a !== null && (a.return = e); a !== null; ) {
      var r = a.dependencies;
      if (r !== null) {
        var u = a.child;
        r = r.firstContext;
        e: for (; r !== null; ) {
          var f = r;
          r = a;
          for (var h = 0; h < t.length; h++)
            if (f.context === t[h]) {
              r.lanes |= n, f = r.alternate, f !== null && (f.lanes |= n), Nu(
                r.return,
                n,
                e
              ), l || (u = null);
              break e;
            }
          r = f.next;
        }
      } else if (a.tag === 18) {
        if (u = a.return, u === null) throw Error(s(341));
        u.lanes |= n, r = u.alternate, r !== null && (r.lanes |= n), Nu(u, n, e), u = null;
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
  function Ka(e, t, n, l) {
    e = null;
    for (var a = t, r = !1; a !== null; ) {
      if (!r) {
        if ((a.flags & 524288) !== 0) r = !0;
        else if ((a.flags & 262144) !== 0) break;
      }
      if (a.tag === 10) {
        var u = a.alternate;
        if (u === null) throw Error(s(387));
        if (u = u.memoizedProps, u !== null) {
          var f = a.type;
          Xt(a.pendingProps.value, u.value) || (e !== null ? e.push(f) : e = [f]);
        }
      } else if (a === Cn.current) {
        if (u = a.alternate, u === null) throw Error(s(387));
        u.memoizedState.memoizedState !== a.memoizedState.memoizedState && (e !== null ? e.push(fi) : e = [fi]);
      }
      a = a.return;
    }
    e !== null && zu(
      t,
      e,
      n,
      l
    ), t.flags |= 262144;
  }
  function Xi(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Xt(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function ma(e) {
    pa = e, tl = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function pt(e) {
    return yf(pa, e);
  }
  function $i(e, t) {
    return pa === null && ma(e), yf(e, t);
  }
  function yf(e, t) {
    var n = t._currentValue;
    if (t = { context: t, memoizedValue: n, next: null }, tl === null) {
      if (e === null) throw Error(s(308));
      tl = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else tl = tl.next = t;
    return n;
  }
  var pg = typeof AbortController < "u" ? AbortController : function() {
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
  }, mg = o.unstable_scheduleCallback, hg = o.unstable_NormalPriority, Ie = {
    $$typeof: le,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Du() {
    return {
      controller: new pg(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function qr(e) {
    e.refCount--, e.refCount === 0 && mg(hg, function() {
      e.controller.abort();
    });
  }
  var Br = null, Ru = 0, Ia = 0, Wa = null;
  function gg(e, t) {
    if (Br === null) {
      var n = Br = [];
      Ru = 0, Ia = Uc(), Wa = {
        status: "pending",
        value: void 0,
        then: function(l) {
          n.push(l);
        }
      };
    }
    return Ru++, t.then(bf, bf), t;
  }
  function bf() {
    if (--Ru === 0 && Br !== null) {
      Wa !== null && (Wa.status = "fulfilled");
      var e = Br;
      Br = null, Ia = 0, Wa = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function yg(e, t) {
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
  var vf = M.S;
  M.S = function(e, t) {
    np = st(), typeof t == "object" && t !== null && typeof t.then == "function" && gg(e, t), vf !== null && vf(e, t);
  };
  var ha = Se(null);
  function Mu() {
    var e = ha.current;
    return e !== null ? e : De.pooledCache;
  }
  function Pi(e, t) {
    t === null ? P(ha, ha.current) : P(ha, t.pool);
  }
  function Sf() {
    var e = Mu();
    return e === null ? null : { parent: Ie._currentValue, pool: e };
  }
  var Ja = Error(s(460)), Lu = Error(s(474)), Zi = Error(s(542)), Ki = { then: function() {
  } };
  function wf(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Tf(e, t, n) {
    switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(Qt, Qt), t = n), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, Ef(e), e;
      default:
        if (typeof t.status == "string") t.then(Qt, Qt);
        else {
          if (e = De, e !== null && 100 < e.shellSuspendCounter)
            throw Error(s(482));
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
            throw e = t.reason, Ef(e), e;
        }
        throw ya = t, Ja;
    }
  }
  function ga(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (ya = n, Ja) : n;
    }
  }
  var ya = null;
  function kf() {
    if (ya === null) throw Error(s(459));
    var e = ya;
    return ya = null, e;
  }
  function Ef(e) {
    if (e === Ja || e === Zi)
      throw Error(s(483));
  }
  var er = null, Yr = 0;
  function Ii(e) {
    var t = Yr;
    return Yr += 1, er === null && (er = []), Tf(er, e, t);
  }
  function Gr(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Wi(e, t) {
    throw t.$$typeof === ne ? Error(s(525)) : (e = Object.prototype.toString.call(t), Error(
      s(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function Af(e) {
    function t(v, b) {
      if (e) {
        var w = v.deletions;
        w === null ? (v.deletions = [b], v.flags |= 16) : w.push(b);
      }
    }
    function n(v, b) {
      if (!e) return null;
      for (; b !== null; )
        t(v, b), b = b.sibling;
      return null;
    }
    function l(v) {
      for (var b = /* @__PURE__ */ new Map(); v !== null; )
        v.key !== null ? b.set(v.key, v) : b.set(v.index, v), v = v.sibling;
      return b;
    }
    function a(v, b) {
      return v = Jn(v, b), v.index = 0, v.sibling = null, v;
    }
    function r(v, b, w) {
      return v.index = w, e ? (w = v.alternate, w !== null ? (w = w.index, w < b ? (v.flags |= 67108866, b) : w) : (v.flags |= 67108866, b)) : (v.flags |= 1048576, b);
    }
    function u(v) {
      return e && v.alternate === null && (v.flags |= 67108866), v;
    }
    function f(v, b, w, C) {
      return b === null || b.tag !== 6 ? (b = ku(w, v.mode, C), b.return = v, b) : (b = a(b, w), b.return = v, b);
    }
    function h(v, b, w, C) {
      var Z = w.type;
      return Z === W ? O(
        v,
        b,
        w.props.children,
        C,
        w.key
      ) : b !== null && (b.elementType === Z || typeof Z == "object" && Z !== null && Z.$$typeof === Ae && ga(Z) === b.type) ? (b = a(b, w.props), Gr(b, w), b.return = v, b) : (b = Qi(
        w.type,
        w.key,
        w.props,
        null,
        v.mode,
        C
      ), Gr(b, w), b.return = v, b);
    }
    function k(v, b, w, C) {
      return b === null || b.tag !== 4 || b.stateNode.containerInfo !== w.containerInfo || b.stateNode.implementation !== w.implementation ? (b = Eu(w, v.mode, C), b.return = v, b) : (b = a(b, w.children || []), b.return = v, b);
    }
    function O(v, b, w, C, Z) {
      return b === null || b.tag !== 7 ? (b = fa(
        w,
        v.mode,
        C,
        Z
      ), b.return = v, b) : (b = a(b, w), b.return = v, b);
    }
    function D(v, b, w) {
      if (typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint")
        return b = ku(
          "" + b,
          v.mode,
          w
        ), b.return = v, b;
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case G:
            return w = Qi(
              b.type,
              b.key,
              b.props,
              null,
              v.mode,
              w
            ), Gr(w, b), w.return = v, w;
          case F:
            return b = Eu(
              b,
              v.mode,
              w
            ), b.return = v, b;
          case Ae:
            return b = ga(b), D(v, b, w);
        }
        if (H(b) || Ee(b))
          return b = fa(
            b,
            v.mode,
            w,
            null
          ), b.return = v, b;
        if (typeof b.then == "function")
          return D(v, Ii(b), w);
        if (b.$$typeof === le)
          return D(
            v,
            $i(v, b),
            w
          );
        Wi(v, b);
      }
      return null;
    }
    function E(v, b, w, C) {
      var Z = b !== null ? b.key : null;
      if (typeof w == "string" && w !== "" || typeof w == "number" || typeof w == "bigint")
        return Z !== null ? null : f(v, b, "" + w, C);
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case G:
            return w.key === Z ? h(v, b, w, C) : null;
          case F:
            return w.key === Z ? k(v, b, w, C) : null;
          case Ae:
            return w = ga(w), E(v, b, w, C);
        }
        if (H(w) || Ee(w))
          return Z !== null ? null : O(v, b, w, C, null);
        if (typeof w.then == "function")
          return E(
            v,
            b,
            Ii(w),
            C
          );
        if (w.$$typeof === le)
          return E(
            v,
            b,
            $i(v, w),
            C
          );
        Wi(v, w);
      }
      return null;
    }
    function A(v, b, w, C, Z) {
      if (typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint")
        return v = v.get(w) || null, f(b, v, "" + C, Z);
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case G:
            return v = v.get(
              C.key === null ? w : C.key
            ) || null, h(b, v, C, Z);
          case F:
            return v = v.get(
              C.key === null ? w : C.key
            ) || null, k(b, v, C, Z);
          case Ae:
            return C = ga(C), A(
              v,
              b,
              w,
              C,
              Z
            );
        }
        if (H(C) || Ee(C))
          return v = v.get(w) || null, O(b, v, C, Z, null);
        if (typeof C.then == "function")
          return A(
            v,
            b,
            w,
            Ii(C),
            Z
          );
        if (C.$$typeof === le)
          return A(
            v,
            b,
            w,
            $i(b, C),
            Z
          );
        Wi(b, C);
      }
      return null;
    }
    function Q(v, b, w, C) {
      for (var Z = null, we = null, X = b, oe = b = 0, me = null; X !== null && oe < w.length; oe++) {
        X.index > oe ? (me = X, X = null) : me = X.sibling;
        var Te = E(
          v,
          X,
          w[oe],
          C
        );
        if (Te === null) {
          X === null && (X = me);
          break;
        }
        e && X && Te.alternate === null && t(v, X), b = r(Te, b, oe), we === null ? Z = Te : we.sibling = Te, we = Te, X = me;
      }
      if (oe === w.length)
        return n(v, X), ge && el(v, oe), Z;
      if (X === null) {
        for (; oe < w.length; oe++)
          X = D(v, w[oe], C), X !== null && (b = r(
            X,
            b,
            oe
          ), we === null ? Z = X : we.sibling = X, we = X);
        return ge && el(v, oe), Z;
      }
      for (X = l(X); oe < w.length; oe++)
        me = A(
          X,
          v,
          oe,
          w[oe],
          C
        ), me !== null && (e && me.alternate !== null && X.delete(
          me.key === null ? oe : me.key
        ), b = r(
          me,
          b,
          oe
        ), we === null ? Z = me : we.sibling = me, we = me);
      return e && X.forEach(function(Kl) {
        return t(v, Kl);
      }), ge && el(v, oe), Z;
    }
    function J(v, b, w, C) {
      if (w == null) throw Error(s(151));
      for (var Z = null, we = null, X = b, oe = b = 0, me = null, Te = w.next(); X !== null && !Te.done; oe++, Te = w.next()) {
        X.index > oe ? (me = X, X = null) : me = X.sibling;
        var Kl = E(v, X, Te.value, C);
        if (Kl === null) {
          X === null && (X = me);
          break;
        }
        e && X && Kl.alternate === null && t(v, X), b = r(Kl, b, oe), we === null ? Z = Kl : we.sibling = Kl, we = Kl, X = me;
      }
      if (Te.done)
        return n(v, X), ge && el(v, oe), Z;
      if (X === null) {
        for (; !Te.done; oe++, Te = w.next())
          Te = D(v, Te.value, C), Te !== null && (b = r(Te, b, oe), we === null ? Z = Te : we.sibling = Te, we = Te);
        return ge && el(v, oe), Z;
      }
      for (X = l(X); !Te.done; oe++, Te = w.next())
        Te = A(X, v, oe, Te.value, C), Te !== null && (e && Te.alternate !== null && X.delete(Te.key === null ? oe : Te.key), b = r(Te, b, oe), we === null ? Z = Te : we.sibling = Te, we = Te);
      return e && X.forEach(function(Oy) {
        return t(v, Oy);
      }), ge && el(v, oe), Z;
    }
    function ze(v, b, w, C) {
      if (typeof w == "object" && w !== null && w.type === W && w.key === null && (w = w.props.children), typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case G:
            e: {
              for (var Z = w.key; b !== null; ) {
                if (b.key === Z) {
                  if (Z = w.type, Z === W) {
                    if (b.tag === 7) {
                      n(
                        v,
                        b.sibling
                      ), C = a(
                        b,
                        w.props.children
                      ), C.return = v, v = C;
                      break e;
                    }
                  } else if (b.elementType === Z || typeof Z == "object" && Z !== null && Z.$$typeof === Ae && ga(Z) === b.type) {
                    n(
                      v,
                      b.sibling
                    ), C = a(b, w.props), Gr(C, w), C.return = v, v = C;
                    break e;
                  }
                  n(v, b);
                  break;
                } else t(v, b);
                b = b.sibling;
              }
              w.type === W ? (C = fa(
                w.props.children,
                v.mode,
                C,
                w.key
              ), C.return = v, v = C) : (C = Qi(
                w.type,
                w.key,
                w.props,
                null,
                v.mode,
                C
              ), Gr(C, w), C.return = v, v = C);
            }
            return u(v);
          case F:
            e: {
              for (Z = w.key; b !== null; ) {
                if (b.key === Z)
                  if (b.tag === 4 && b.stateNode.containerInfo === w.containerInfo && b.stateNode.implementation === w.implementation) {
                    n(
                      v,
                      b.sibling
                    ), C = a(b, w.children || []), C.return = v, v = C;
                    break e;
                  } else {
                    n(v, b);
                    break;
                  }
                else t(v, b);
                b = b.sibling;
              }
              C = Eu(w, v.mode, C), C.return = v, v = C;
            }
            return u(v);
          case Ae:
            return w = ga(w), ze(
              v,
              b,
              w,
              C
            );
        }
        if (H(w))
          return Q(
            v,
            b,
            w,
            C
          );
        if (Ee(w)) {
          if (Z = Ee(w), typeof Z != "function") throw Error(s(150));
          return w = Z.call(w), J(
            v,
            b,
            w,
            C
          );
        }
        if (typeof w.then == "function")
          return ze(
            v,
            b,
            Ii(w),
            C
          );
        if (w.$$typeof === le)
          return ze(
            v,
            b,
            $i(v, w),
            C
          );
        Wi(v, w);
      }
      return typeof w == "string" && w !== "" || typeof w == "number" || typeof w == "bigint" ? (w = "" + w, b !== null && b.tag === 6 ? (n(v, b.sibling), C = a(b, w), C.return = v, v = C) : (n(v, b), C = ku(w, v.mode, C), C.return = v, v = C), u(v)) : n(v, b);
    }
    return function(v, b, w, C) {
      try {
        Yr = 0;
        var Z = ze(
          v,
          b,
          w,
          C
        );
        return er = null, Z;
      } catch (X) {
        if (X === Ja || X === Zi) throw X;
        var we = $t(29, X, null, v.mode);
        return we.lanes = C, we.return = v, we;
      } finally {
      }
    };
  }
  var ba = Af(!0), xf = Af(!1), Rl = !1;
  function Uu(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function ju(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function Ml(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Ll(e, t, n) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (ke & 2) !== 0) {
      var a = l.pending;
      return a === null ? t.next = t : (t.next = a.next, a.next = t), l.pending = t, t = Vi(e), cf(e, null, n), t;
    }
    return Gi(e, l, t, n), Vi(e);
  }
  function Vr(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
      var l = t.lanes;
      l &= e.pendingLanes, n |= l, t.lanes = n, Gt(e, n);
    }
  }
  function Hu(e, t) {
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
  var qu = !1;
  function Qr() {
    if (qu) {
      var e = Wa;
      if (e !== null) throw e;
    }
  }
  function Fr(e, t, n, l) {
    qu = !1;
    var a = e.updateQueue;
    Rl = !1;
    var r = a.firstBaseUpdate, u = a.lastBaseUpdate, f = a.shared.pending;
    if (f !== null) {
      a.shared.pending = null;
      var h = f, k = h.next;
      h.next = null, u === null ? r = k : u.next = k, u = h;
      var O = e.alternate;
      O !== null && (O = O.updateQueue, f = O.lastBaseUpdate, f !== u && (f === null ? O.firstBaseUpdate = k : f.next = k, O.lastBaseUpdate = h));
    }
    if (r !== null) {
      var D = a.baseState;
      u = 0, O = k = h = null, f = r;
      do {
        var E = f.lane & -536870913, A = E !== f.lane;
        if (A ? (pe & E) === E : (l & E) === E) {
          E !== 0 && E === Ia && (qu = !0), O !== null && (O = O.next = {
            lane: 0,
            tag: f.tag,
            payload: f.payload,
            callback: null,
            next: null
          });
          e: {
            var Q = e, J = f;
            E = t;
            var ze = n;
            switch (J.tag) {
              case 1:
                if (Q = J.payload, typeof Q == "function") {
                  D = Q.call(ze, D, E);
                  break e;
                }
                D = Q;
                break e;
              case 3:
                Q.flags = Q.flags & -65537 | 128;
              case 0:
                if (Q = J.payload, E = typeof Q == "function" ? Q.call(ze, D, E) : Q, E == null) break e;
                D = R({}, D, E);
                break e;
              case 2:
                Rl = !0;
            }
          }
          E = f.callback, E !== null && (e.flags |= 64, A && (e.flags |= 8192), A = a.callbacks, A === null ? a.callbacks = [E] : A.push(E));
        } else
          A = {
            lane: E,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null
          }, O === null ? (k = O = A, h = D) : O = O.next = A, u |= E;
        if (f = f.next, f === null) {
          if (f = a.shared.pending, f === null)
            break;
          A = f, f = A.next, A.next = null, a.lastBaseUpdate = A, a.shared.pending = null;
        }
      } while (!0);
      O === null && (h = D), a.baseState = h, a.firstBaseUpdate = k, a.lastBaseUpdate = O, r === null && (a.shared.lanes = 0), Bl |= u, e.lanes = u, e.memoizedState = D;
    }
  }
  function _f(e, t) {
    if (typeof e != "function")
      throw Error(s(191, e));
    e.call(t);
  }
  function Of(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++)
        _f(n[e], t);
  }
  var tr = Se(null), Ji = Se(0);
  function Cf(e, t) {
    e = fl, P(Ji, e), P(tr, t), fl = e | t.baseLanes;
  }
  function Bu() {
    P(Ji, fl), P(tr, tr.current);
  }
  function Yu() {
    fl = Ji.current, ce(tr), ce(Ji);
  }
  var Pt = Se(null), vn = null;
  function Ul(e) {
    var t = e.alternate;
    P(Xe, Xe.current & 1), P(Pt, e), vn === null && (t === null || tr.current !== null || t.memoizedState !== null) && (vn = e);
  }
  function Gu(e) {
    P(Xe, Xe.current), P(Pt, e), vn === null && (vn = e);
  }
  function Nf(e) {
    e.tag === 22 ? (P(Xe, Xe.current), P(Pt, e), vn === null && (vn = e)) : jl();
  }
  function jl() {
    P(Xe, Xe.current), P(Pt, Pt.current);
  }
  function Zt(e) {
    ce(Pt), vn === e && (vn = null), ce(Xe);
  }
  var Xe = Se(0);
  function eo(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || Pc(n) || Zc(n)))
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
  var ll = 0, re = null, Ce = null, We = null, to = !1, nr = !1, va = !1, no = 0, Xr = 0, lr = null, bg = 0;
  function Ge() {
    throw Error(s(321));
  }
  function Vu(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Xt(e[n], t[n])) return !1;
    return !0;
  }
  function Qu(e, t, n, l, a, r) {
    return ll = r, re = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, M.H = e === null || e.memoizedState === null ? pd : rc, va = !1, r = n(l, a), va = !1, nr && (r = Df(
      t,
      n,
      l,
      a
    )), zf(e), r;
  }
  function zf(e) {
    M.H = Zr;
    var t = Ce !== null && Ce.next !== null;
    if (ll = 0, We = Ce = re = null, to = !1, Xr = 0, lr = null, t) throw Error(s(300));
    e === null || Je || (e = e.dependencies, e !== null && Xi(e) && (Je = !0));
  }
  function Df(e, t, n, l) {
    re = e;
    var a = 0;
    do {
      if (nr && (lr = null), Xr = 0, nr = !1, 25 <= a) throw Error(s(301));
      if (a += 1, We = Ce = null, e.updateQueue != null) {
        var r = e.updateQueue;
        r.lastEffect = null, r.events = null, r.stores = null, r.memoCache != null && (r.memoCache.index = 0);
      }
      M.H = md, r = t(n, l);
    } while (nr);
    return r;
  }
  function vg() {
    var e = M.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? $r(t) : t, e = e.useState()[0], (Ce !== null ? Ce.memoizedState : null) !== e && (re.flags |= 1024), t;
  }
  function Fu() {
    var e = no !== 0;
    return no = 0, e;
  }
  function Xu(e, t, n) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
  }
  function $u(e) {
    if (to) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      to = !1;
    }
    ll = 0, We = Ce = re = null, nr = !1, Xr = no = 0, lr = null;
  }
  function Tt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return We === null ? re.memoizedState = We = e : We = We.next = e, We;
  }
  function $e() {
    if (Ce === null) {
      var e = re.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ce.next;
    var t = We === null ? re.memoizedState : We.next;
    if (t !== null)
      We = t, Ce = e;
    else {
      if (e === null)
        throw re.alternate === null ? Error(s(467)) : Error(s(310));
      Ce = e, e = {
        memoizedState: Ce.memoizedState,
        baseState: Ce.baseState,
        baseQueue: Ce.baseQueue,
        queue: Ce.queue,
        next: null
      }, We === null ? re.memoizedState = We = e : We = We.next = e;
    }
    return We;
  }
  function lo() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function $r(e) {
    var t = Xr;
    return Xr += 1, lr === null && (lr = []), e = Tf(lr, e, t), t = re, (We === null ? t.memoizedState : We.next) === null && (t = t.alternate, M.H = t === null || t.memoizedState === null ? pd : rc), e;
  }
  function ao(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return $r(e);
      if (e.$$typeof === le) return pt(e);
    }
    throw Error(s(438, String(e)));
  }
  function Pu(e) {
    var t = null, n = re.updateQueue;
    if (n !== null && (t = n.memoCache), t == null) {
      var l = re.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (t = {
        data: l.data.map(function(a) {
          return a.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), n === null && (n = lo(), re.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
      for (n = t.data[t.index] = Array(e), l = 0; l < e; l++)
        n[l] = ye;
    return t.index++, n;
  }
  function al(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function ro(e) {
    var t = $e();
    return Zu(t, Ce, e);
  }
  function Zu(e, t, n) {
    var l = e.queue;
    if (l === null) throw Error(s(311));
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
      var f = u = null, h = null, k = t, O = !1;
      do {
        var D = k.lane & -536870913;
        if (D !== k.lane ? (pe & D) === D : (ll & D) === D) {
          var E = k.revertLane;
          if (E === 0)
            h !== null && (h = h.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: k.action,
              hasEagerState: k.hasEagerState,
              eagerState: k.eagerState,
              next: null
            }), D === Ia && (O = !0);
          else if ((ll & E) === E) {
            k = k.next, E === Ia && (O = !0);
            continue;
          } else
            D = {
              lane: 0,
              revertLane: k.revertLane,
              gesture: null,
              action: k.action,
              hasEagerState: k.hasEagerState,
              eagerState: k.eagerState,
              next: null
            }, h === null ? (f = h = D, u = r) : h = h.next = D, re.lanes |= E, Bl |= E;
          D = k.action, va && n(r, D), r = k.hasEagerState ? k.eagerState : n(r, D);
        } else
          E = {
            lane: D,
            revertLane: k.revertLane,
            gesture: k.gesture,
            action: k.action,
            hasEagerState: k.hasEagerState,
            eagerState: k.eagerState,
            next: null
          }, h === null ? (f = h = E, u = r) : h = h.next = E, re.lanes |= D, Bl |= D;
        k = k.next;
      } while (k !== null && k !== t);
      if (h === null ? u = r : h.next = f, !Xt(r, e.memoizedState) && (Je = !0, O && (n = Wa, n !== null)))
        throw n;
      e.memoizedState = r, e.baseState = u, e.baseQueue = h, l.lastRenderedState = r;
    }
    return a === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function Ku(e) {
    var t = $e(), n = t.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = e;
    var l = n.dispatch, a = n.pending, r = t.memoizedState;
    if (a !== null) {
      n.pending = null;
      var u = a = a.next;
      do
        r = e(r, u.action), u = u.next;
      while (u !== a);
      Xt(r, t.memoizedState) || (Je = !0), t.memoizedState = r, t.baseQueue === null && (t.baseState = r), n.lastRenderedState = r;
    }
    return [r, l];
  }
  function Rf(e, t, n) {
    var l = re, a = $e(), r = ge;
    if (r) {
      if (n === void 0) throw Error(s(407));
      n = n();
    } else n = t();
    var u = !Xt(
      (Ce || a).memoizedState,
      n
    );
    if (u && (a.memoizedState = n, Je = !0), a = a.queue, Ju(Uf.bind(null, l, a, e), [
      e
    ]), a.getSnapshot !== t || u || We !== null && We.memoizedState.tag & 1) {
      if (l.flags |= 2048, ar(
        9,
        { destroy: void 0 },
        Lf.bind(
          null,
          l,
          a,
          n,
          t
        ),
        null
      ), De === null) throw Error(s(349));
      r || (ll & 127) !== 0 || Mf(l, t, n);
    }
    return n;
  }
  function Mf(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = re.updateQueue, t === null ? (t = lo(), re.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Lf(e, t, n, l) {
    t.value = n, t.getSnapshot = l, jf(t) && Hf(e);
  }
  function Uf(e, t, n) {
    return n(function() {
      jf(t) && Hf(e);
    });
  }
  function jf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Xt(e, n);
    } catch {
      return !0;
    }
  }
  function Hf(e) {
    var t = sa(e, 2);
    t !== null && Ut(t, e, 2);
  }
  function Iu(e) {
    var t = Tt();
    if (typeof e == "function") {
      var n = e;
      if (e = n(), va) {
        Yt(!0);
        try {
          n();
        } finally {
          Yt(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: al,
      lastRenderedState: e
    }, t;
  }
  function qf(e, t, n, l) {
    return e.baseState = n, Zu(
      e,
      Ce,
      typeof l == "function" ? l : al
    );
  }
  function Sg(e, t, n, l, a) {
    if (uo(e)) throw Error(s(485));
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
      M.T !== null ? n(!0) : r.isTransition = !1, l(r), n = t.pending, n === null ? (r.next = t.pending = r, Bf(t, r)) : (r.next = n.next, t.pending = n.next = r);
    }
  }
  function Bf(e, t) {
    var n = t.action, l = t.payload, a = e.state;
    if (t.isTransition) {
      var r = M.T, u = {};
      M.T = u;
      try {
        var f = n(a, l), h = M.S;
        h !== null && h(u, f), Yf(e, t, f);
      } catch (k) {
        Wu(e, t, k);
      } finally {
        r !== null && u.types !== null && (r.types = u.types), M.T = r;
      }
    } else
      try {
        r = n(a, l), Yf(e, t, r);
      } catch (k) {
        Wu(e, t, k);
      }
  }
  function Yf(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(l) {
        Gf(e, t, l);
      },
      function(l) {
        return Wu(e, t, l);
      }
    ) : Gf(e, t, n);
  }
  function Gf(e, t, n) {
    t.status = "fulfilled", t.value = n, Vf(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, Bf(e, n)));
  }
  function Wu(e, t, n) {
    var l = e.pending;
    if (e.pending = null, l !== null) {
      l = l.next;
      do
        t.status = "rejected", t.reason = n, Vf(t), t = t.next;
      while (t !== l);
    }
    e.action = null;
  }
  function Vf(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Qf(e, t) {
    return t;
  }
  function Ff(e, t) {
    if (ge) {
      var n = De.formState;
      if (n !== null) {
        e: {
          var l = re;
          if (ge) {
            if (Le) {
              t: {
                for (var a = Le, r = dn; a.nodeType !== 8; ) {
                  if (!r) {
                    a = null;
                    break t;
                  }
                  if (a = pn(
                    a.nextSibling
                  ), a === null) {
                    a = null;
                    break t;
                  }
                }
                r = a.data, a = r === "F!" || r === "F" ? a : null;
              }
              if (a) {
                Le = pn(
                  a.nextSibling
                ), l = a.data === "F!";
                break e;
              }
            }
            zl(l);
          }
          l = !1;
        }
        l && (t = n[0]);
      }
    }
    return n = Tt(), n.memoizedState = n.baseState = t, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Qf,
      lastRenderedState: t
    }, n.queue = l, n = sd.bind(
      null,
      re,
      l
    ), l.dispatch = n, l = Iu(!1), r = ac.bind(
      null,
      re,
      !1,
      l.queue
    ), l = Tt(), a = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, l.queue = a, n = Sg.bind(
      null,
      re,
      a,
      r,
      n
    ), a.dispatch = n, l.memoizedState = e, [t, n, !1];
  }
  function Xf(e) {
    var t = $e();
    return $f(t, Ce, e);
  }
  function $f(e, t, n) {
    if (t = Zu(
      e,
      t,
      Qf
    )[0], e = ro(al)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var l = $r(t);
      } catch (u) {
        throw u === Ja ? Zi : u;
      }
    else l = t;
    t = $e();
    var a = t.queue, r = a.dispatch;
    return n !== t.memoizedState && (re.flags |= 2048, ar(
      9,
      { destroy: void 0 },
      wg.bind(null, a, n),
      null
    )), [l, r, e];
  }
  function wg(e, t) {
    e.action = t;
  }
  function Pf(e) {
    var t = $e(), n = Ce;
    if (n !== null)
      return $f(t, n, e);
    $e(), t = t.memoizedState, n = $e();
    var l = n.queue.dispatch;
    return n.memoizedState = e, [t, l, !1];
  }
  function ar(e, t, n, l) {
    return e = { tag: e, create: n, deps: l, inst: t, next: null }, t = re.updateQueue, t === null && (t = lo(), re.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (l = n.next, n.next = e, e.next = l, t.lastEffect = e), e;
  }
  function Zf() {
    return $e().memoizedState;
  }
  function io(e, t, n, l) {
    var a = Tt();
    re.flags |= e, a.memoizedState = ar(
      1 | t,
      { destroy: void 0 },
      n,
      l === void 0 ? null : l
    );
  }
  function oo(e, t, n, l) {
    var a = $e();
    l = l === void 0 ? null : l;
    var r = a.memoizedState.inst;
    Ce !== null && l !== null && Vu(l, Ce.memoizedState.deps) ? a.memoizedState = ar(t, r, n, l) : (re.flags |= e, a.memoizedState = ar(
      1 | t,
      r,
      n,
      l
    ));
  }
  function Kf(e, t) {
    io(8390656, 8, e, t);
  }
  function Ju(e, t) {
    oo(2048, 8, e, t);
  }
  function Tg(e) {
    re.flags |= 4;
    var t = re.updateQueue;
    if (t === null)
      t = lo(), re.updateQueue = t, t.events = [e];
    else {
      var n = t.events;
      n === null ? t.events = [e] : n.push(e);
    }
  }
  function If(e) {
    var t = $e().memoizedState;
    return Tg({ ref: t, nextImpl: e }), function() {
      if ((ke & 2) !== 0) throw Error(s(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function Wf(e, t) {
    return oo(4, 2, e, t);
  }
  function Jf(e, t) {
    return oo(4, 4, e, t);
  }
  function ed(e, t) {
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
  function td(e, t, n) {
    n = n != null ? n.concat([e]) : null, oo(4, 4, ed.bind(null, t, e), n);
  }
  function ec() {
  }
  function nd(e, t) {
    var n = $e();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    return t !== null && Vu(t, l[1]) ? l[0] : (n.memoizedState = [e, t], e);
  }
  function ld(e, t) {
    var n = $e();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    if (t !== null && Vu(t, l[1]))
      return l[0];
    if (l = e(), va) {
      Yt(!0);
      try {
        e();
      } finally {
        Yt(!1);
      }
    }
    return n.memoizedState = [l, t], l;
  }
  function tc(e, t, n) {
    return n === void 0 || (ll & 1073741824) !== 0 && (pe & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n, e = ap(), re.lanes |= e, Bl |= e, n);
  }
  function ad(e, t, n, l) {
    return Xt(n, t) ? n : tr.current !== null ? (e = tc(e, n, l), Xt(e, t) || (Je = !0), e) : (ll & 42) === 0 || (ll & 1073741824) !== 0 && (pe & 261930) === 0 ? (Je = !0, e.memoizedState = n) : (e = ap(), re.lanes |= e, Bl |= e, t);
  }
  function rd(e, t, n, l, a) {
    var r = q.p;
    q.p = r !== 0 && 8 > r ? r : 8;
    var u = M.T, f = {};
    M.T = f, ac(e, !1, t, n);
    try {
      var h = a(), k = M.S;
      if (k !== null && k(f, h), h !== null && typeof h == "object" && typeof h.then == "function") {
        var O = yg(
          h,
          l
        );
        Pr(
          e,
          t,
          O,
          Wt(e)
        );
      } else
        Pr(
          e,
          t,
          l,
          Wt(e)
        );
    } catch (D) {
      Pr(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: D },
        Wt()
      );
    } finally {
      q.p = r, u !== null && f.types !== null && (u.types = f.types), M.T = u;
    }
  }
  function kg() {
  }
  function nc(e, t, n, l) {
    if (e.tag !== 5) throw Error(s(476));
    var a = id(e).queue;
    rd(
      e,
      a,
      t,
      ue,
      n === null ? kg : function() {
        return od(e), n(l);
      }
    );
  }
  function id(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: ue,
      baseState: ue,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: al,
        lastRenderedState: ue
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
        lastRenderedReducer: al,
        lastRenderedState: n
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function od(e) {
    var t = id(e);
    t.next === null && (t = e.alternate.memoizedState), Pr(
      e,
      t.next.queue,
      {},
      Wt()
    );
  }
  function lc() {
    return pt(fi);
  }
  function ud() {
    return $e().memoizedState;
  }
  function cd() {
    return $e().memoizedState;
  }
  function Eg(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = Wt();
          e = Ml(n);
          var l = Ll(t, e, n);
          l !== null && (Ut(l, t, n), Vr(l, t, n)), t = { cache: Du() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Ag(e, t, n) {
    var l = Wt();
    n = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, uo(e) ? fd(t, n) : (n = wu(e, t, n, l), n !== null && (Ut(n, e, l), dd(n, t, l)));
  }
  function sd(e, t, n) {
    var l = Wt();
    Pr(e, t, n, l);
  }
  function Pr(e, t, n, l) {
    var a = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (uo(e)) fd(t, a);
    else {
      var r = e.alternate;
      if (e.lanes === 0 && (r === null || r.lanes === 0) && (r = t.lastRenderedReducer, r !== null))
        try {
          var u = t.lastRenderedState, f = r(u, n);
          if (a.hasEagerState = !0, a.eagerState = f, Xt(f, u))
            return Gi(e, t, a, 0), De === null && Yi(), !1;
        } catch {
        } finally {
        }
      if (n = wu(e, t, a, l), n !== null)
        return Ut(n, e, l), dd(n, t, l), !0;
    }
    return !1;
  }
  function ac(e, t, n, l) {
    if (l = {
      lane: 2,
      revertLane: Uc(),
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, uo(e)) {
      if (t) throw Error(s(479));
    } else
      t = wu(
        e,
        n,
        l,
        2
      ), t !== null && Ut(t, e, 2);
  }
  function uo(e) {
    var t = e.alternate;
    return e === re || t !== null && t === re;
  }
  function fd(e, t) {
    nr = to = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function dd(e, t, n) {
    if ((n & 4194048) !== 0) {
      var l = t.lanes;
      l &= e.pendingLanes, n |= l, t.lanes = n, Gt(e, n);
    }
  }
  var Zr = {
    readContext: pt,
    use: ao,
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
  Zr.useEffectEvent = Ge;
  var pd = {
    readContext: pt,
    use: ao,
    useCallback: function(e, t) {
      return Tt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: pt,
    useEffect: Kf,
    useImperativeHandle: function(e, t, n) {
      n = n != null ? n.concat([e]) : null, io(
        4194308,
        4,
        ed.bind(null, t, e),
        n
      );
    },
    useLayoutEffect: function(e, t) {
      return io(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      io(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var n = Tt();
      t = t === void 0 ? null : t;
      var l = e();
      if (va) {
        Yt(!0);
        try {
          e();
        } finally {
          Yt(!1);
        }
      }
      return n.memoizedState = [l, t], l;
    },
    useReducer: function(e, t, n) {
      var l = Tt();
      if (n !== void 0) {
        var a = n(t);
        if (va) {
          Yt(!0);
          try {
            n(t);
          } finally {
            Yt(!1);
          }
        }
      } else a = t;
      return l.memoizedState = l.baseState = a, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: a
      }, l.queue = e, e = e.dispatch = Ag.bind(
        null,
        re,
        e
      ), [l.memoizedState, e];
    },
    useRef: function(e) {
      var t = Tt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Iu(e);
      var t = e.queue, n = sd.bind(null, re, t);
      return t.dispatch = n, [e.memoizedState, n];
    },
    useDebugValue: ec,
    useDeferredValue: function(e, t) {
      var n = Tt();
      return tc(n, e, t);
    },
    useTransition: function() {
      var e = Iu(!1);
      return e = rd.bind(
        null,
        re,
        e.queue,
        !0,
        !1
      ), Tt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, n) {
      var l = re, a = Tt();
      if (ge) {
        if (n === void 0)
          throw Error(s(407));
        n = n();
      } else {
        if (n = t(), De === null)
          throw Error(s(349));
        (pe & 127) !== 0 || Mf(l, t, n);
      }
      a.memoizedState = n;
      var r = { value: n, getSnapshot: t };
      return a.queue = r, Kf(Uf.bind(null, l, r, e), [
        e
      ]), l.flags |= 2048, ar(
        9,
        { destroy: void 0 },
        Lf.bind(
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
      var e = Tt(), t = De.identifierPrefix;
      if (ge) {
        var n = Un, l = Ln;
        n = (l & ~(1 << 32 - rt(l) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = no++, 0 < n && (t += "H" + n.toString(32)), t += "_";
      } else
        n = bg++, t = "_" + t + "r_" + n.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: lc,
    useFormState: Ff,
    useActionState: Ff,
    useOptimistic: function(e) {
      var t = Tt();
      t.memoizedState = t.baseState = e;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = n, t = ac.bind(
        null,
        re,
        !0,
        n
      ), n.dispatch = t, [e, t];
    },
    useMemoCache: Pu,
    useCacheRefresh: function() {
      return Tt().memoizedState = Eg.bind(
        null,
        re
      );
    },
    useEffectEvent: function(e) {
      var t = Tt(), n = { impl: e };
      return t.memoizedState = n, function() {
        if ((ke & 2) !== 0)
          throw Error(s(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, rc = {
    readContext: pt,
    use: ao,
    useCallback: nd,
    useContext: pt,
    useEffect: Ju,
    useImperativeHandle: td,
    useInsertionEffect: Wf,
    useLayoutEffect: Jf,
    useMemo: ld,
    useReducer: ro,
    useRef: Zf,
    useState: function() {
      return ro(al);
    },
    useDebugValue: ec,
    useDeferredValue: function(e, t) {
      var n = $e();
      return ad(
        n,
        Ce.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = ro(al)[0], t = $e().memoizedState;
      return [
        typeof e == "boolean" ? e : $r(e),
        t
      ];
    },
    useSyncExternalStore: Rf,
    useId: ud,
    useHostTransitionStatus: lc,
    useFormState: Xf,
    useActionState: Xf,
    useOptimistic: function(e, t) {
      var n = $e();
      return qf(n, Ce, e, t);
    },
    useMemoCache: Pu,
    useCacheRefresh: cd
  };
  rc.useEffectEvent = If;
  var md = {
    readContext: pt,
    use: ao,
    useCallback: nd,
    useContext: pt,
    useEffect: Ju,
    useImperativeHandle: td,
    useInsertionEffect: Wf,
    useLayoutEffect: Jf,
    useMemo: ld,
    useReducer: Ku,
    useRef: Zf,
    useState: function() {
      return Ku(al);
    },
    useDebugValue: ec,
    useDeferredValue: function(e, t) {
      var n = $e();
      return Ce === null ? tc(n, e, t) : ad(
        n,
        Ce.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Ku(al)[0], t = $e().memoizedState;
      return [
        typeof e == "boolean" ? e : $r(e),
        t
      ];
    },
    useSyncExternalStore: Rf,
    useId: ud,
    useHostTransitionStatus: lc,
    useFormState: Pf,
    useActionState: Pf,
    useOptimistic: function(e, t) {
      var n = $e();
      return Ce !== null ? qf(n, Ce, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
    },
    useMemoCache: Pu,
    useCacheRefresh: cd
  };
  md.useEffectEvent = If;
  function ic(e, t, n, l) {
    t = e.memoizedState, n = n(l, t), n = n == null ? t : R({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var oc = {
    enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var l = Wt(), a = Ml(l);
      a.payload = t, n != null && (a.callback = n), t = Ll(e, a, l), t !== null && (Ut(t, e, l), Vr(t, e, l));
    },
    enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var l = Wt(), a = Ml(l);
      a.tag = 1, a.payload = t, n != null && (a.callback = n), t = Ll(e, a, l), t !== null && (Ut(t, e, l), Vr(t, e, l));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = Wt(), l = Ml(n);
      l.tag = 2, t != null && (l.callback = t), t = Ll(e, l, n), t !== null && (Ut(t, e, n), Vr(t, e, n));
    }
  };
  function hd(e, t, n, l, a, r, u) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, r, u) : t.prototype && t.prototype.isPureReactComponent ? !Lr(n, l) || !Lr(a, r) : !0;
  }
  function gd(e, t, n, l) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, l), t.state !== e && oc.enqueueReplaceState(t, t.state, null);
  }
  function Sa(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var l in t)
        l !== "ref" && (n[l] = t[l]);
    }
    if (e = e.defaultProps) {
      n === t && (n = R({}, n));
      for (var a in e)
        n[a] === void 0 && (n[a] = e[a]);
    }
    return n;
  }
  function yd(e) {
    Bi(e);
  }
  function bd(e) {
    console.error(e);
  }
  function vd(e) {
    Bi(e);
  }
  function co(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function Sd(e, t, n) {
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
  function uc(e, t, n) {
    return n = Ml(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      co(e, t);
    }, n;
  }
  function wd(e) {
    return e = Ml(e), e.tag = 3, e;
  }
  function Td(e, t, n, l) {
    var a = n.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var r = l.value;
      e.payload = function() {
        return a(r);
      }, e.callback = function() {
        Sd(t, n, l);
      };
    }
    var u = n.stateNode;
    u !== null && typeof u.componentDidCatch == "function" && (e.callback = function() {
      Sd(t, n, l), typeof a != "function" && (Yl === null ? Yl = /* @__PURE__ */ new Set([this]) : Yl.add(this));
      var f = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: f !== null ? f : ""
      });
    });
  }
  function xg(e, t, n, l, a) {
    if (n.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (t = n.alternate, t !== null && Ka(
        t,
        n,
        a,
        !0
      ), n = Pt.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
            return vn === null ? To() : n.alternate === null && Ve === 0 && (Ve = 3), n.flags &= -257, n.flags |= 65536, n.lanes = a, l === Ki ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([l]) : t.add(l), Rc(e, l, a)), !1;
          case 22:
            return n.flags |= 65536, l === Ki ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([l]) : n.add(l)), Rc(e, l, a)), !1;
        }
        throw Error(s(435, n.tag));
      }
      return Rc(e, l, a), To(), !1;
    }
    if (ge)
      return t = Pt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = a, l !== _u && (e = Error(s(422), { cause: l }), Hr(cn(e, n)))) : (l !== _u && (t = Error(s(423), {
        cause: l
      }), Hr(
        cn(t, n)
      )), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, l = cn(l, n), a = uc(
        e.stateNode,
        l,
        a
      ), Hu(e, a), Ve !== 4 && (Ve = 2)), !1;
    var r = Error(s(520), { cause: l });
    if (r = cn(r, n), li === null ? li = [r] : li.push(r), Ve !== 4 && (Ve = 2), t === null) return !0;
    l = cn(l, n), n = t;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, e = a & -a, n.lanes |= e, e = uc(n.stateNode, l, e), Hu(n, e), !1;
        case 1:
          if (t = n.type, r = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || r !== null && typeof r.componentDidCatch == "function" && (Yl === null || !Yl.has(r))))
            return n.flags |= 65536, a &= -a, n.lanes |= a, a = wd(a), Td(
              a,
              e,
              n,
              l
            ), Hu(n, a), !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var cc = Error(s(461)), Je = !1;
  function mt(e, t, n, l) {
    t.child = e === null ? xf(t, null, n, l) : ba(
      t,
      e.child,
      n,
      l
    );
  }
  function kd(e, t, n, l, a) {
    n = n.render;
    var r = t.ref;
    if ("ref" in l) {
      var u = {};
      for (var f in l)
        f !== "ref" && (u[f] = l[f]);
    } else u = l;
    return ma(t), l = Qu(
      e,
      t,
      n,
      u,
      r,
      a
    ), f = Fu(), e !== null && !Je ? (Xu(e, t, a), rl(e, t, a)) : (ge && f && Au(t), t.flags |= 1, mt(e, t, l, a), t.child);
  }
  function Ed(e, t, n, l, a) {
    if (e === null) {
      var r = n.type;
      return typeof r == "function" && !Tu(r) && r.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = r, Ad(
        e,
        t,
        r,
        l,
        a
      )) : (e = Qi(
        n.type,
        null,
        l,
        t,
        t.mode,
        a
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (r = e.child, !yc(e, a)) {
      var u = r.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Lr, n(u, l) && e.ref === t.ref)
        return rl(e, t, a);
    }
    return t.flags |= 1, e = Jn(r, l), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Ad(e, t, n, l, a) {
    if (e !== null) {
      var r = e.memoizedProps;
      if (Lr(r, l) && e.ref === t.ref)
        if (Je = !1, t.pendingProps = l = r, yc(e, a))
          (e.flags & 131072) !== 0 && (Je = !0);
        else
          return t.lanes = e.lanes, rl(e, t, a);
    }
    return sc(
      e,
      t,
      n,
      l,
      a
    );
  }
  function xd(e, t, n, l) {
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
        return _d(
          e,
          t,
          r,
          n,
          l
        );
      }
      if ((n & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Pi(
          t,
          r !== null ? r.cachePool : null
        ), r !== null ? Cf(t, r) : Bu(), Nf(t);
      else
        return l = t.lanes = 536870912, _d(
          e,
          t,
          r !== null ? r.baseLanes | n : n,
          n,
          l
        );
    } else
      r !== null ? (Pi(t, r.cachePool), Cf(t, r), jl(), t.memoizedState = null) : (e !== null && Pi(t, null), Bu(), jl());
    return mt(e, t, a, n), t.child;
  }
  function Kr(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function _d(e, t, n, l, a) {
    var r = Mu();
    return r = r === null ? null : { parent: Ie._currentValue, pool: r }, t.memoizedState = {
      baseLanes: n,
      cachePool: r
    }, e !== null && Pi(t, null), Bu(), Nf(t), e !== null && Ka(e, t, l, !0), t.childLanes = a, null;
  }
  function so(e, t) {
    return t = po(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Od(e, t, n) {
    return ba(t, e.child, null, n), e = so(t, t.pendingProps), e.flags |= 2, Zt(t), t.memoizedState = null, e;
  }
  function _g(e, t, n) {
    var l = t.pendingProps, a = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (ge) {
        if (l.mode === "hidden")
          return e = so(t, l), t.lanes = 536870912, Kr(null, e);
        if (Gu(t), (e = Le) ? (e = Bp(
          e,
          dn
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Cl !== null ? { id: Ln, overflow: Un } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = ff(e), n.return = t, t.child = n, dt = t, Le = null)) : e = null, e === null) throw zl(t);
        return t.lanes = 536870912, null;
      }
      return so(t, l);
    }
    var r = e.memoizedState;
    if (r !== null) {
      var u = r.dehydrated;
      if (Gu(t), a)
        if (t.flags & 256)
          t.flags &= -257, t = Od(
            e,
            t,
            n
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(s(558));
      else if (Je || Ka(e, t, n, !1), a = (n & e.childLanes) !== 0, Je || a) {
        if (l = De, l !== null && (u = Xn(l, n), u !== 0 && u !== r.retryLane))
          throw r.retryLane = u, sa(e, u), Ut(l, e, u), cc;
        To(), t = Od(
          e,
          t,
          n
        );
      } else
        e = r.treeContext, Le = pn(u.nextSibling), dt = t, ge = !0, Nl = null, dn = !1, e !== null && mf(t, e), t = so(t, l), t.flags |= 4096;
      return t;
    }
    return e = Jn(e.child, {
      mode: l.mode,
      children: l.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function fo(e, t) {
    var n = t.ref;
    if (n === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object")
        throw Error(s(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function sc(e, t, n, l, a) {
    return ma(t), n = Qu(
      e,
      t,
      n,
      l,
      void 0,
      a
    ), l = Fu(), e !== null && !Je ? (Xu(e, t, a), rl(e, t, a)) : (ge && l && Au(t), t.flags |= 1, mt(e, t, n, a), t.child);
  }
  function Cd(e, t, n, l, a, r) {
    return ma(t), t.updateQueue = null, n = Df(
      t,
      l,
      n,
      a
    ), zf(e), l = Fu(), e !== null && !Je ? (Xu(e, t, r), rl(e, t, r)) : (ge && l && Au(t), t.flags |= 1, mt(e, t, n, r), t.child);
  }
  function Nd(e, t, n, l, a) {
    if (ma(t), t.stateNode === null) {
      var r = Xa, u = n.contextType;
      typeof u == "object" && u !== null && (r = pt(u)), r = new n(l, r), t.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = oc, t.stateNode = r, r._reactInternals = t, r = t.stateNode, r.props = l, r.state = t.memoizedState, r.refs = {}, Uu(t), u = n.contextType, r.context = typeof u == "object" && u !== null ? pt(u) : Xa, r.state = t.memoizedState, u = n.getDerivedStateFromProps, typeof u == "function" && (ic(
        t,
        n,
        u,
        l
      ), r.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (u = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), u !== r.state && oc.enqueueReplaceState(r, r.state, null), Fr(t, l, r, a), Qr(), r.state = t.memoizedState), typeof r.componentDidMount == "function" && (t.flags |= 4194308), l = !0;
    } else if (e === null) {
      r = t.stateNode;
      var f = t.memoizedProps, h = Sa(n, f);
      r.props = h;
      var k = r.context, O = n.contextType;
      u = Xa, typeof O == "object" && O !== null && (u = pt(O));
      var D = n.getDerivedStateFromProps;
      O = typeof D == "function" || typeof r.getSnapshotBeforeUpdate == "function", f = t.pendingProps !== f, O || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (f || k !== u) && gd(
        t,
        r,
        l,
        u
      ), Rl = !1;
      var E = t.memoizedState;
      r.state = E, Fr(t, l, r, a), Qr(), k = t.memoizedState, f || E !== k || Rl ? (typeof D == "function" && (ic(
        t,
        n,
        D,
        l
      ), k = t.memoizedState), (h = Rl || hd(
        t,
        n,
        h,
        l,
        E,
        k,
        u
      )) ? (O || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount()), typeof r.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof r.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = l, t.memoizedState = k), r.props = l, r.state = k, r.context = u, l = h) : (typeof r.componentDidMount == "function" && (t.flags |= 4194308), l = !1);
    } else {
      r = t.stateNode, ju(e, t), u = t.memoizedProps, O = Sa(n, u), r.props = O, D = t.pendingProps, E = r.context, k = n.contextType, h = Xa, typeof k == "object" && k !== null && (h = pt(k)), f = n.getDerivedStateFromProps, (k = typeof f == "function" || typeof r.getSnapshotBeforeUpdate == "function") || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (u !== D || E !== h) && gd(
        t,
        r,
        l,
        h
      ), Rl = !1, E = t.memoizedState, r.state = E, Fr(t, l, r, a), Qr();
      var A = t.memoizedState;
      u !== D || E !== A || Rl || e !== null && e.dependencies !== null && Xi(e.dependencies) ? (typeof f == "function" && (ic(
        t,
        n,
        f,
        l
      ), A = t.memoizedState), (O = Rl || hd(
        t,
        n,
        O,
        l,
        E,
        A,
        h
      ) || e !== null && e.dependencies !== null && Xi(e.dependencies)) ? (k || typeof r.UNSAFE_componentWillUpdate != "function" && typeof r.componentWillUpdate != "function" || (typeof r.componentWillUpdate == "function" && r.componentWillUpdate(l, A, h), typeof r.UNSAFE_componentWillUpdate == "function" && r.UNSAFE_componentWillUpdate(
        l,
        A,
        h
      )), typeof r.componentDidUpdate == "function" && (t.flags |= 4), typeof r.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof r.componentDidUpdate != "function" || u === e.memoizedProps && E === e.memoizedState || (t.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && E === e.memoizedState || (t.flags |= 1024), t.memoizedProps = l, t.memoizedState = A), r.props = l, r.state = A, r.context = h, l = O) : (typeof r.componentDidUpdate != "function" || u === e.memoizedProps && E === e.memoizedState || (t.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && E === e.memoizedState || (t.flags |= 1024), l = !1);
    }
    return r = l, fo(e, t), l = (t.flags & 128) !== 0, r || l ? (r = t.stateNode, n = l && typeof n.getDerivedStateFromError != "function" ? null : r.render(), t.flags |= 1, e !== null && l ? (t.child = ba(
      t,
      e.child,
      null,
      a
    ), t.child = ba(
      t,
      null,
      n,
      a
    )) : mt(e, t, n, a), t.memoizedState = r.state, e = t.child) : e = rl(
      e,
      t,
      a
    ), e;
  }
  function zd(e, t, n, l) {
    return da(), t.flags |= 256, mt(e, t, n, l), t.child;
  }
  var fc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function dc(e) {
    return { baseLanes: e, cachePool: Sf() };
  }
  function pc(e, t, n) {
    return e = e !== null ? e.childLanes & ~n : 0, t && (e |= It), e;
  }
  function Dd(e, t, n) {
    var l = t.pendingProps, a = !1, r = (t.flags & 128) !== 0, u;
    if ((u = r) || (u = e !== null && e.memoizedState === null ? !1 : (Xe.current & 2) !== 0), u && (a = !0, t.flags &= -129), u = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (ge) {
        if (a ? Ul(t) : jl(), (e = Le) ? (e = Bp(
          e,
          dn
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Cl !== null ? { id: Ln, overflow: Un } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = ff(e), n.return = t, t.child = n, dt = t, Le = null)) : e = null, e === null) throw zl(t);
        return Zc(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var f = l.children;
      return l = l.fallback, a ? (jl(), a = t.mode, f = po(
        { mode: "hidden", children: f },
        a
      ), l = fa(
        l,
        a,
        n,
        null
      ), f.return = t, l.return = t, f.sibling = l, t.child = f, l = t.child, l.memoizedState = dc(n), l.childLanes = pc(
        e,
        u,
        n
      ), t.memoizedState = fc, Kr(null, l)) : (Ul(t), mc(t, f));
    }
    var h = e.memoizedState;
    if (h !== null && (f = h.dehydrated, f !== null)) {
      if (r)
        t.flags & 256 ? (Ul(t), t.flags &= -257, t = hc(
          e,
          t,
          n
        )) : t.memoizedState !== null ? (jl(), t.child = e.child, t.flags |= 128, t = null) : (jl(), f = l.fallback, a = t.mode, l = po(
          { mode: "visible", children: l.children },
          a
        ), f = fa(
          f,
          a,
          n,
          null
        ), f.flags |= 2, l.return = t, f.return = t, l.sibling = f, t.child = l, ba(
          t,
          e.child,
          null,
          n
        ), l = t.child, l.memoizedState = dc(n), l.childLanes = pc(
          e,
          u,
          n
        ), t.memoizedState = fc, t = Kr(null, l));
      else if (Ul(t), Zc(f)) {
        if (u = f.nextSibling && f.nextSibling.dataset, u) var k = u.dgst;
        u = k, l = Error(s(419)), l.stack = "", l.digest = u, Hr({ value: l, source: null, stack: null }), t = hc(
          e,
          t,
          n
        );
      } else if (Je || Ka(e, t, n, !1), u = (n & e.childLanes) !== 0, Je || u) {
        if (u = De, u !== null && (l = Xn(u, n), l !== 0 && l !== h.retryLane))
          throw h.retryLane = l, sa(e, l), Ut(u, e, l), cc;
        Pc(f) || To(), t = hc(
          e,
          t,
          n
        );
      } else
        Pc(f) ? (t.flags |= 192, t.child = e.child, t = null) : (e = h.treeContext, Le = pn(
          f.nextSibling
        ), dt = t, ge = !0, Nl = null, dn = !1, e !== null && mf(t, e), t = mc(
          t,
          l.children
        ), t.flags |= 4096);
      return t;
    }
    return a ? (jl(), f = l.fallback, a = t.mode, h = e.child, k = h.sibling, l = Jn(h, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = h.subtreeFlags & 65011712, k !== null ? f = Jn(
      k,
      f
    ) : (f = fa(
      f,
      a,
      n,
      null
    ), f.flags |= 2), f.return = t, l.return = t, l.sibling = f, t.child = l, Kr(null, l), l = t.child, f = e.child.memoizedState, f === null ? f = dc(n) : (a = f.cachePool, a !== null ? (h = Ie._currentValue, a = a.parent !== h ? { parent: h, pool: h } : a) : a = Sf(), f = {
      baseLanes: f.baseLanes | n,
      cachePool: a
    }), l.memoizedState = f, l.childLanes = pc(
      e,
      u,
      n
    ), t.memoizedState = fc, Kr(e.child, l)) : (Ul(t), n = e.child, e = n.sibling, n = Jn(n, {
      mode: "visible",
      children: l.children
    }), n.return = t, n.sibling = null, e !== null && (u = t.deletions, u === null ? (t.deletions = [e], t.flags |= 16) : u.push(e)), t.child = n, t.memoizedState = null, n);
  }
  function mc(e, t) {
    return t = po(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function po(e, t) {
    return e = $t(22, e, null, t), e.lanes = 0, e;
  }
  function hc(e, t, n) {
    return ba(t, e.child, null, n), e = mc(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Rd(e, t, n) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), Nu(e.return, t, n);
  }
  function gc(e, t, n, l, a, r) {
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
  function Md(e, t, n) {
    var l = t.pendingProps, a = l.revealOrder, r = l.tail;
    l = l.children;
    var u = Xe.current, f = (u & 2) !== 0;
    if (f ? (u = u & 1 | 2, t.flags |= 128) : u &= 1, P(Xe, u), mt(e, t, l, n), l = ge ? jr : 0, !f && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && Rd(e, n, t);
        else if (e.tag === 19)
          Rd(e, n, t);
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
          e = n.alternate, e !== null && eo(e) === null && (a = n), n = n.sibling;
        n = a, n === null ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), gc(
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
          if (e = a.alternate, e !== null && eo(e) === null) {
            t.child = a;
            break;
          }
          e = a.sibling, a.sibling = n, n = a, a = e;
        }
        gc(
          t,
          !0,
          n,
          null,
          r,
          l
        );
        break;
      case "together":
        gc(
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
  function rl(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Bl |= t.lanes, (n & t.childLanes) === 0)
      if (e !== null) {
        if (Ka(
          e,
          t,
          n,
          !1
        ), (n & t.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && t.child !== e.child)
      throw Error(s(153));
    if (t.child !== null) {
      for (e = t.child, n = Jn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        e = e.sibling, n = n.sibling = Jn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function yc(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Xi(e)));
  }
  function Og(e, t, n) {
    switch (t.tag) {
      case 3:
        kn(t, t.stateNode.containerInfo), Dl(t, Ie, e.memoizedState.cache), da();
        break;
      case 27:
      case 5:
        kr(t);
        break;
      case 4:
        kn(t, t.stateNode.containerInfo);
        break;
      case 10:
        Dl(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, Gu(t), null;
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null ? (Ul(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Dd(e, t, n) : (Ul(t), e = rl(
            e,
            t,
            n
          ), e !== null ? e.sibling : null);
        Ul(t);
        break;
      case 19:
        var a = (e.flags & 128) !== 0;
        if (l = (n & t.childLanes) !== 0, l || (Ka(
          e,
          t,
          n,
          !1
        ), l = (n & t.childLanes) !== 0), a) {
          if (l)
            return Md(
              e,
              t,
              n
            );
          t.flags |= 128;
        }
        if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), P(Xe, Xe.current), l) break;
        return null;
      case 22:
        return t.lanes = 0, xd(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        Dl(t, Ie, e.memoizedState.cache);
    }
    return rl(e, t, n);
  }
  function Ld(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        Je = !0;
      else {
        if (!yc(e, n) && (t.flags & 128) === 0)
          return Je = !1, Og(
            e,
            t,
            n
          );
        Je = (e.flags & 131072) !== 0;
      }
    else
      Je = !1, ge && (t.flags & 1048576) !== 0 && pf(t, jr, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var l = t.pendingProps;
          if (e = ga(t.elementType), t.type = e, typeof e == "function")
            Tu(e) ? (l = Sa(e, l), t.tag = 1, t = Nd(
              null,
              t,
              e,
              l,
              n
            )) : (t.tag = 0, t = sc(
              null,
              t,
              e,
              l,
              n
            ));
          else {
            if (e != null) {
              var a = e.$$typeof;
              if (a === ae) {
                t.tag = 11, t = kd(
                  null,
                  t,
                  e,
                  l,
                  n
                );
                break e;
              } else if (a === K) {
                t.tag = 14, t = Ed(
                  null,
                  t,
                  e,
                  l,
                  n
                );
                break e;
              }
            }
            throw t = Qe(e) || e, Error(s(306, t, ""));
          }
        }
        return t;
      case 0:
        return sc(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 1:
        return l = t.type, a = Sa(
          l,
          t.pendingProps
        ), Nd(
          e,
          t,
          l,
          a,
          n
        );
      case 3:
        e: {
          if (kn(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(s(387));
          l = t.pendingProps;
          var r = t.memoizedState;
          a = r.element, ju(e, t), Fr(t, l, null, n);
          var u = t.memoizedState;
          if (l = u.cache, Dl(t, Ie, l), l !== r.cache && zu(
            t,
            [Ie],
            n,
            !0
          ), Qr(), l = u.element, r.isDehydrated)
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
              a = cn(
                Error(s(424)),
                t
              ), Hr(a), t = zd(
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
              for (Le = pn(e.firstChild), dt = t, ge = !0, Nl = null, dn = !0, n = xf(
                t,
                null,
                l,
                n
              ), t.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
            }
          else {
            if (da(), l === a) {
              t = rl(
                e,
                t,
                n
              );
              break e;
            }
            mt(e, t, l, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return fo(e, t), e === null ? (n = Xp(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = n : ge || (n = t.type, e = t.pendingProps, l = Co(
          at.current
        ).createElement(n), l[Ze] = t, l[it] = e, ht(l, n, e), Ke(l), t.stateNode = l) : t.memoizedState = Xp(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return kr(t), e === null && ge && (l = t.stateNode = Vp(
          t.type,
          t.pendingProps,
          at.current
        ), dt = t, dn = !0, a = Le, Fl(t.type) ? (Kc = a, Le = pn(l.firstChild)) : Le = a), mt(
          e,
          t,
          t.pendingProps.children,
          n
        ), fo(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && ge && ((a = l = Le) && (l = ay(
          l,
          t.type,
          t.pendingProps,
          dn
        ), l !== null ? (t.stateNode = l, dt = t, Le = pn(l.firstChild), dn = !1, a = !0) : a = !1), a || zl(t)), kr(t), a = t.type, r = t.pendingProps, u = e !== null ? e.memoizedProps : null, l = r.children, Fc(a, r) ? l = null : u !== null && Fc(a, u) && (t.flags |= 32), t.memoizedState !== null && (a = Qu(
          e,
          t,
          vg,
          null,
          null,
          n
        ), fi._currentValue = a), fo(e, t), mt(e, t, l, n), t.child;
      case 6:
        return e === null && ge && ((e = n = Le) && (n = ry(
          n,
          t.pendingProps,
          dn
        ), n !== null ? (t.stateNode = n, dt = t, Le = null, e = !0) : e = !1), e || zl(t)), null;
      case 13:
        return Dd(e, t, n);
      case 4:
        return kn(
          t,
          t.stateNode.containerInfo
        ), l = t.pendingProps, e === null ? t.child = ba(
          t,
          null,
          l,
          n
        ) : mt(e, t, l, n), t.child;
      case 11:
        return kd(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 7:
        return mt(
          e,
          t,
          t.pendingProps,
          n
        ), t.child;
      case 8:
        return mt(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 12:
        return mt(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 10:
        return l = t.pendingProps, Dl(t, t.type, l.value), mt(e, t, l.children, n), t.child;
      case 9:
        return a = t.type._context, l = t.pendingProps.children, ma(t), a = pt(a), l = l(a), t.flags |= 1, mt(e, t, l, n), t.child;
      case 14:
        return Ed(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 15:
        return Ad(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 19:
        return Md(e, t, n);
      case 31:
        return _g(e, t, n);
      case 22:
        return xd(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        return ma(t), l = pt(Ie), e === null ? (a = Mu(), a === null && (a = De, r = Du(), a.pooledCache = r, r.refCount++, r !== null && (a.pooledCacheLanes |= n), a = r), t.memoizedState = { parent: l, cache: a }, Uu(t), Dl(t, Ie, a)) : ((e.lanes & n) !== 0 && (ju(e, t), Fr(t, null, null, n), Qr()), a = e.memoizedState, r = t.memoizedState, a.parent !== l ? (a = { parent: l, cache: l }, t.memoizedState = a, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a), Dl(t, Ie, l)) : (l = r.cache, Dl(t, Ie, l), l !== a.cache && zu(
          t,
          [Ie],
          n,
          !0
        ))), mt(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(s(156, t.tag));
  }
  function il(e) {
    e.flags |= 4;
  }
  function bc(e, t, n, l, a) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (a & 335544128) === a)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (up()) e.flags |= 8192;
        else
          throw ya = Ki, Lu;
    } else e.flags &= -16777217;
  }
  function Ud(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Ip(t))
      if (up()) e.flags |= 8192;
      else
        throw ya = Ki, Lu;
  }
  function mo(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Er() : 536870912, e.lanes |= t, ur |= t);
  }
  function Ir(e, t) {
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
  function Cg(e, t, n) {
    var l = t.pendingProps;
    switch (xu(t), t.tag) {
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
        return n = t.stateNode, l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), nl(Ie), ct(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (Za(t) ? il(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Ou())), Ue(t), null;
      case 26:
        var a = t.type, r = t.memoizedState;
        return e === null ? (il(t), r !== null ? (Ue(t), Ud(t, r)) : (Ue(t), bc(
          t,
          a,
          null,
          l,
          n
        ))) : r ? r !== e.memoizedState ? (il(t), Ue(t), Ud(t, r)) : (Ue(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== l && il(t), Ue(t), bc(
          t,
          a,
          e,
          l,
          n
        )), null;
      case 27:
        if (Aa(t), n = at.current, a = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && il(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(s(166));
            return Ue(t), null;
          }
          e = be.current, Za(t) ? hf(t) : (e = Vp(a, l, n), t.stateNode = e, il(t));
        }
        return Ue(t), null;
      case 5:
        if (Aa(t), a = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && il(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(s(166));
            return Ue(t), null;
          }
          if (r = be.current, Za(t))
            hf(t);
          else {
            var u = Co(
              at.current
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
            r[Ze] = t, r[it] = l;
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
            e: switch (ht(r, a, l), a) {
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
            l && il(t);
          }
        }
        return Ue(t), bc(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          n
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== l && il(t);
        else {
          if (typeof l != "string" && t.stateNode === null)
            throw Error(s(166));
          if (e = at.current, Za(t)) {
            if (e = t.stateNode, n = t.memoizedProps, l = null, a = dt, a !== null)
              switch (a.tag) {
                case 27:
                case 5:
                  l = a.memoizedProps;
              }
            e[Ze] = t, e = !!(e.nodeValue === n || l !== null && l.suppressHydrationWarning === !0 || Dp(e.nodeValue, n)), e || zl(t, !0);
          } else
            e = Co(e).createTextNode(
              l
            ), e[Ze] = t, t.stateNode = e;
        }
        return Ue(t), null;
      case 31:
        if (n = t.memoizedState, e === null || e.memoizedState !== null) {
          if (l = Za(t), n !== null) {
            if (e === null) {
              if (!l) throw Error(s(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(557));
              e[Ze] = t;
            } else
              da(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ue(t), e = !1;
          } else
            n = Ou(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
          if (!e)
            return t.flags & 256 ? (Zt(t), t) : (Zt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(s(558));
        }
        return Ue(t), null;
      case 13:
        if (l = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (a = Za(t), l !== null && l.dehydrated !== null) {
            if (e === null) {
              if (!a) throw Error(s(318));
              if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(s(317));
              a[Ze] = t;
            } else
              da(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ue(t), a = !1;
          } else
            a = Ou(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), a = !0;
          if (!a)
            return t.flags & 256 ? (Zt(t), t) : (Zt(t), null);
        }
        return Zt(t), (t.flags & 128) !== 0 ? (t.lanes = n, t) : (n = l !== null, e = e !== null && e.memoizedState !== null, n && (l = t.child, a = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (a = l.alternate.memoizedState.cachePool.pool), r = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (r = l.memoizedState.cachePool.pool), r !== a && (l.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), mo(t, t.updateQueue), Ue(t), null);
      case 4:
        return ct(), e === null && Bc(t.stateNode.containerInfo), Ue(t), null;
      case 10:
        return nl(t.type), Ue(t), null;
      case 19:
        if (ce(Xe), l = t.memoizedState, l === null) return Ue(t), null;
        if (a = (t.flags & 128) !== 0, r = l.rendering, r === null)
          if (a) Ir(l, !1);
          else {
            if (Ve !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (r = eo(e), r !== null) {
                  for (t.flags |= 128, Ir(l, !1), e = r.updateQueue, t.updateQueue = e, mo(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; )
                    sf(n, e), n = n.sibling;
                  return P(
                    Xe,
                    Xe.current & 1 | 2
                  ), ge && el(t, l.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            l.tail !== null && st() > vo && (t.flags |= 128, a = !0, Ir(l, !1), t.lanes = 4194304);
          }
        else {
          if (!a)
            if (e = eo(r), e !== null) {
              if (t.flags |= 128, a = !0, e = e.updateQueue, t.updateQueue = e, mo(t, e), Ir(l, !0), l.tail === null && l.tailMode === "hidden" && !r.alternate && !ge)
                return Ue(t), null;
            } else
              2 * st() - l.renderingStartTime > vo && n !== 536870912 && (t.flags |= 128, a = !0, Ir(l, !1), t.lanes = 4194304);
          l.isBackwards ? (r.sibling = t.child, t.child = r) : (e = l.last, e !== null ? e.sibling = r : t.child = r, l.last = r);
        }
        return l.tail !== null ? (e = l.tail, l.rendering = e, l.tail = e.sibling, l.renderingStartTime = st(), e.sibling = null, n = Xe.current, P(
          Xe,
          a ? n & 1 | 2 : n & 1
        ), ge && el(t, l.treeForkCount), e) : (Ue(t), null);
      case 22:
      case 23:
        return Zt(t), Yu(), l = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (t.flags |= 8192) : l && (t.flags |= 8192), l ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (Ue(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ue(t), n = t.updateQueue, n !== null && mo(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== n && (t.flags |= 2048), e !== null && ce(ha), null;
      case 24:
        return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), nl(Ie), Ue(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function Ng(e, t) {
    switch (xu(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return nl(Ie), ct(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Aa(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Zt(t), t.alternate === null)
            throw Error(s(340));
          da();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (Zt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(s(340));
          da();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return ce(Xe), null;
      case 4:
        return ct(), null;
      case 10:
        return nl(t.type), null;
      case 22:
      case 23:
        return Zt(t), Yu(), e !== null && ce(ha), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return nl(Ie), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function jd(e, t) {
    switch (xu(t), t.tag) {
      case 3:
        nl(Ie), ct();
        break;
      case 26:
      case 27:
      case 5:
        Aa(t);
        break;
      case 4:
        ct();
        break;
      case 31:
        t.memoizedState !== null && Zt(t);
        break;
      case 13:
        Zt(t);
        break;
      case 19:
        ce(Xe);
        break;
      case 10:
        nl(t.type);
        break;
      case 22:
      case 23:
        Zt(t), Yu(), e !== null && ce(ha);
        break;
      case 24:
        nl(Ie);
    }
  }
  function Wr(e, t) {
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
      _e(t, t.return, f);
    }
  }
  function Hl(e, t, n) {
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
              var h = n, k = f;
              try {
                k();
              } catch (O) {
                _e(
                  a,
                  h,
                  O
                );
              }
            }
          }
          l = l.next;
        } while (l !== r);
      }
    } catch (O) {
      _e(t, t.return, O);
    }
  }
  function Hd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        Of(t, n);
      } catch (l) {
        _e(e, e.return, l);
      }
    }
  }
  function qd(e, t, n) {
    n.props = Sa(
      e.type,
      e.memoizedProps
    ), n.state = e.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (l) {
      _e(e, t, l);
    }
  }
  function Jr(e, t) {
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
      _e(e, t, a);
    }
  }
  function jn(e, t) {
    var n = e.ref, l = e.refCleanup;
    if (n !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (a) {
          _e(e, t, a);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (a) {
          _e(e, t, a);
        }
      else n.current = null;
  }
  function Bd(e) {
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
      _e(e, e.return, a);
    }
  }
  function vc(e, t, n) {
    try {
      var l = e.stateNode;
      Wg(l, e.type, n, t), l[it] = t;
    } catch (a) {
      _e(e, e.return, a);
    }
  }
  function Yd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Fl(e.type) || e.tag === 4;
  }
  function Sc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Yd(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Fl(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function wc(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Qt));
    else if (l !== 4 && (l === 27 && Fl(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null))
      for (wc(e, t, n), e = e.sibling; e !== null; )
        wc(e, t, n), e = e.sibling;
  }
  function ho(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (l !== 4 && (l === 27 && Fl(e.type) && (n = e.stateNode), e = e.child, e !== null))
      for (ho(e, t, n), e = e.sibling; e !== null; )
        ho(e, t, n), e = e.sibling;
  }
  function Gd(e) {
    var t = e.stateNode, n = e.memoizedProps;
    try {
      for (var l = e.type, a = t.attributes; a.length; )
        t.removeAttributeNode(a[0]);
      ht(t, l, n), t[Ze] = e, t[it] = n;
    } catch (r) {
      _e(e, e.return, r);
    }
  }
  var ol = !1, et = !1, Tc = !1, Vd = typeof WeakSet == "function" ? WeakSet : Set, ot = null;
  function zg(e, t) {
    if (e = e.containerInfo, Vc = Uo, e = ef(e), hu(e)) {
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
            var u = 0, f = -1, h = -1, k = 0, O = 0, D = e, E = null;
            t: for (; ; ) {
              for (var A; D !== n || a !== 0 && D.nodeType !== 3 || (f = u + a), D !== r || l !== 0 && D.nodeType !== 3 || (h = u + l), D.nodeType === 3 && (u += D.nodeValue.length), (A = D.firstChild) !== null; )
                E = D, D = A;
              for (; ; ) {
                if (D === e) break t;
                if (E === n && ++k === a && (f = u), E === r && ++O === l && (h = u), (A = D.nextSibling) !== null) break;
                D = E, E = D.parentNode;
              }
              D = A;
            }
            n = f === -1 || h === -1 ? null : { start: f, end: h };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Qc = { focusedElem: e, selectionRange: n }, Uo = !1, ot = t; ot !== null; )
      if (t = ot, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, ot = e;
      else
        for (; ot !== null; ) {
          switch (t = ot, r = t.alternate, e = t.flags, t.tag) {
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
                  var Q = Sa(
                    n.type,
                    a
                  );
                  e = l.getSnapshotBeforeUpdate(
                    Q,
                    r
                  ), l.__reactInternalSnapshotBeforeUpdate = e;
                } catch (J) {
                  _e(
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
                  $c(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      $c(e);
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
              if ((e & 1024) !== 0) throw Error(s(163));
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, ot = e;
            break;
          }
          ot = t.return;
        }
  }
  function Qd(e, t, n) {
    var l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        cl(e, n), l & 4 && Wr(5, n);
        break;
      case 1:
        if (cl(e, n), l & 4)
          if (e = n.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (u) {
              _e(n, n.return, u);
            }
          else {
            var a = Sa(
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
              _e(
                n,
                n.return,
                u
              );
            }
          }
        l & 64 && Hd(n), l & 512 && Jr(n, n.return);
        break;
      case 3:
        if (cl(e, n), l & 64 && (e = n.updateQueue, e !== null)) {
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
            Of(e, t);
          } catch (u) {
            _e(n, n.return, u);
          }
        }
        break;
      case 27:
        t === null && l & 4 && Gd(n);
      case 26:
      case 5:
        cl(e, n), t === null && l & 4 && Bd(n), l & 512 && Jr(n, n.return);
        break;
      case 12:
        cl(e, n);
        break;
      case 31:
        cl(e, n), l & 4 && $d(e, n);
        break;
      case 13:
        cl(e, n), l & 4 && Pd(e, n), l & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = Bg.bind(
          null,
          n
        ), iy(e, n))));
        break;
      case 22:
        if (l = n.memoizedState !== null || ol, !l) {
          t = t !== null && t.memoizedState !== null || et, a = ol;
          var r = et;
          ol = l, (et = t) && !r ? sl(
            e,
            n,
            (n.subtreeFlags & 8772) !== 0
          ) : cl(e, n), ol = a, et = r;
        }
        break;
      case 30:
        break;
      default:
        cl(e, n);
    }
  }
  function Fd(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Fd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && xr(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var qe = null, Dt = !1;
  function ul(e, t, n) {
    for (n = n.child; n !== null; )
      Xd(e, t, n), n = n.sibling;
  }
  function Xd(e, t, n) {
    if (Pe && typeof Pe.onCommitFiberUnmount == "function")
      try {
        Pe.onCommitFiberUnmount(Fn, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        et || jn(n, t), ul(
          e,
          t,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        et || jn(n, t);
        var l = qe, a = Dt;
        Fl(n.type) && (qe = n.stateNode, Dt = !1), ul(
          e,
          t,
          n
        ), ui(n.stateNode), qe = l, Dt = a;
        break;
      case 5:
        et || jn(n, t);
      case 6:
        if (l = qe, a = Dt, qe = null, ul(
          e,
          t,
          n
        ), qe = l, Dt = a, qe !== null)
          if (Dt)
            try {
              (qe.nodeType === 9 ? qe.body : qe.nodeName === "HTML" ? qe.ownerDocument.body : qe).removeChild(n.stateNode);
            } catch (r) {
              _e(
                n,
                t,
                r
              );
            }
          else
            try {
              qe.removeChild(n.stateNode);
            } catch (r) {
              _e(
                n,
                t,
                r
              );
            }
        break;
      case 18:
        qe !== null && (Dt ? (e = qe, Hp(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          n.stateNode
        ), gr(e)) : Hp(qe, n.stateNode));
        break;
      case 4:
        l = qe, a = Dt, qe = n.stateNode.containerInfo, Dt = !0, ul(
          e,
          t,
          n
        ), qe = l, Dt = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Hl(2, n, t), et || Hl(4, n, t), ul(
          e,
          t,
          n
        );
        break;
      case 1:
        et || (jn(n, t), l = n.stateNode, typeof l.componentWillUnmount == "function" && qd(
          n,
          t,
          l
        )), ul(
          e,
          t,
          n
        );
        break;
      case 21:
        ul(
          e,
          t,
          n
        );
        break;
      case 22:
        et = (l = et) || n.memoizedState !== null, ul(
          e,
          t,
          n
        ), et = l;
        break;
      default:
        ul(
          e,
          t,
          n
        );
    }
  }
  function $d(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        gr(e);
      } catch (n) {
        _e(t, t.return, n);
      }
    }
  }
  function Pd(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        gr(e);
      } catch (n) {
        _e(t, t.return, n);
      }
  }
  function Dg(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Vd()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Vd()), t;
      default:
        throw Error(s(435, e.tag));
    }
  }
  function go(e, t) {
    var n = Dg(e);
    t.forEach(function(l) {
      if (!n.has(l)) {
        n.add(l);
        var a = Yg.bind(null, e, l);
        l.then(a, a);
      }
    });
  }
  function Rt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var a = n[l], r = e, u = t, f = u;
        e: for (; f !== null; ) {
          switch (f.tag) {
            case 27:
              if (Fl(f.type)) {
                qe = f.stateNode, Dt = !1;
                break e;
              }
              break;
            case 5:
              qe = f.stateNode, Dt = !1;
              break e;
            case 3:
            case 4:
              qe = f.stateNode.containerInfo, Dt = !0;
              break e;
          }
          f = f.return;
        }
        if (qe === null) throw Error(s(160));
        Xd(r, u, a), qe = null, Dt = !1, r = a.alternate, r !== null && (r.return = null), a.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        Zd(t, e), t = t.sibling;
  }
  var _n = null;
  function Zd(e, t) {
    var n = e.alternate, l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Rt(t, e), Mt(e), l & 4 && (Hl(3, e, e.return), Wr(3, e), Hl(5, e, e.return));
        break;
      case 1:
        Rt(t, e), Mt(e), l & 512 && (et || n === null || jn(n, n.return)), l & 64 && ol && (e = e.updateQueue, e !== null && (l = e.callbacks, l !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? l : n.concat(l))));
        break;
      case 26:
        var a = _n;
        if (Rt(t, e), Mt(e), l & 512 && (et || n === null || jn(n, n.return)), l & 4) {
          var r = n !== null ? n.memoizedState : null;
          if (l = e.memoizedState, n === null)
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  l = e.type, n = e.memoizedProps, a = a.ownerDocument || a;
                  t: switch (l) {
                    case "title":
                      r = a.getElementsByTagName("title")[0], (!r || r[on] || r[Ze] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = a.createElement(l), a.head.insertBefore(
                        r,
                        a.querySelector("head > title")
                      )), ht(r, l, n), r[Ze] = e, Ke(r), l = r;
                      break e;
                    case "link":
                      var u = Zp(
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
                      r = a.createElement(l), ht(r, l, n), a.head.appendChild(r);
                      break;
                    case "meta":
                      if (u = Zp(
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
                      r = a.createElement(l), ht(r, l, n), a.head.appendChild(r);
                      break;
                    default:
                      throw Error(s(468, l));
                  }
                  r[Ze] = e, Ke(r), l = r;
                }
                e.stateNode = l;
              } else
                Kp(
                  a,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Pp(
                a,
                l,
                e.memoizedProps
              );
          else
            r !== l ? (r === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : r.count--, l === null ? Kp(
              a,
              e.type,
              e.stateNode
            ) : Pp(
              a,
              l,
              e.memoizedProps
            )) : l === null && e.stateNode !== null && vc(
              e,
              e.memoizedProps,
              n.memoizedProps
            );
        }
        break;
      case 27:
        Rt(t, e), Mt(e), l & 512 && (et || n === null || jn(n, n.return)), n !== null && l & 4 && vc(
          e,
          e.memoizedProps,
          n.memoizedProps
        );
        break;
      case 5:
        if (Rt(t, e), Mt(e), l & 512 && (et || n === null || jn(n, n.return)), e.flags & 32) {
          a = e.stateNode;
          try {
            wt(a, "");
          } catch (Q) {
            _e(e, e.return, Q);
          }
        }
        l & 4 && e.stateNode != null && (a = e.memoizedProps, vc(
          e,
          a,
          n !== null ? n.memoizedProps : a
        )), l & 1024 && (Tc = !0);
        break;
      case 6:
        if (Rt(t, e), Mt(e), l & 4) {
          if (e.stateNode === null)
            throw Error(s(162));
          l = e.memoizedProps, n = e.stateNode;
          try {
            n.nodeValue = l;
          } catch (Q) {
            _e(e, e.return, Q);
          }
        }
        break;
      case 3:
        if (Do = null, a = _n, _n = No(t.containerInfo), Rt(t, e), _n = a, Mt(e), l & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            gr(t.containerInfo);
          } catch (Q) {
            _e(e, e.return, Q);
          }
        Tc && (Tc = !1, Kd(e));
        break;
      case 4:
        l = _n, _n = No(
          e.stateNode.containerInfo
        ), Rt(t, e), Mt(e), _n = l;
        break;
      case 12:
        Rt(t, e), Mt(e);
        break;
      case 31:
        Rt(t, e), Mt(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, go(e, l)));
        break;
      case 13:
        Rt(t, e), Mt(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (bo = st()), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, go(e, l)));
        break;
      case 22:
        a = e.memoizedState !== null;
        var h = n !== null && n.memoizedState !== null, k = ol, O = et;
        if (ol = k || a, et = O || h, Rt(t, e), et = O, ol = k, Mt(e), l & 8192)
          e: for (t = e.stateNode, t._visibility = a ? t._visibility & -2 : t._visibility | 1, a && (n === null || h || ol || et || wa(e)), n = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                h = n = t;
                try {
                  if (r = h.stateNode, a)
                    u = r.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none";
                  else {
                    f = h.stateNode;
                    var D = h.memoizedProps.style, E = D != null && D.hasOwnProperty("display") ? D.display : null;
                    f.style.display = E == null || typeof E == "boolean" ? "" : ("" + E).trim();
                  }
                } catch (Q) {
                  _e(h, h.return, Q);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                h = t;
                try {
                  h.stateNode.nodeValue = a ? "" : h.memoizedProps;
                } catch (Q) {
                  _e(h, h.return, Q);
                }
              }
            } else if (t.tag === 18) {
              if (n === null) {
                h = t;
                try {
                  var A = h.stateNode;
                  a ? qp(A, !0) : qp(h.stateNode, !1);
                } catch (Q) {
                  _e(h, h.return, Q);
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
        l & 4 && (l = e.updateQueue, l !== null && (n = l.retryQueue, n !== null && (l.retryQueue = null, go(e, n))));
        break;
      case 19:
        Rt(t, e), Mt(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, go(e, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Rt(t, e), Mt(e);
    }
  }
  function Mt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, l = e.return; l !== null; ) {
          if (Yd(l)) {
            n = l;
            break;
          }
          l = l.return;
        }
        if (n == null) throw Error(s(160));
        switch (n.tag) {
          case 27:
            var a = n.stateNode, r = Sc(e);
            ho(e, r, a);
            break;
          case 5:
            var u = n.stateNode;
            n.flags & 32 && (wt(u, ""), n.flags &= -33);
            var f = Sc(e);
            ho(e, f, u);
            break;
          case 3:
          case 4:
            var h = n.stateNode.containerInfo, k = Sc(e);
            wc(
              e,
              k,
              h
            );
            break;
          default:
            throw Error(s(161));
        }
      } catch (O) {
        _e(e, e.return, O);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Kd(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Kd(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function cl(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Qd(e, t.alternate, t), t = t.sibling;
  }
  function wa(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Hl(4, t, t.return), wa(t);
          break;
        case 1:
          jn(t, t.return);
          var n = t.stateNode;
          typeof n.componentWillUnmount == "function" && qd(
            t,
            t.return,
            n
          ), wa(t);
          break;
        case 27:
          ui(t.stateNode);
        case 26:
        case 5:
          jn(t, t.return), wa(t);
          break;
        case 22:
          t.memoizedState === null && wa(t);
          break;
        case 30:
          wa(t);
          break;
        default:
          wa(t);
      }
      e = e.sibling;
    }
  }
  function sl(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate, a = e, r = t, u = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          sl(
            a,
            r,
            n
          ), Wr(4, r);
          break;
        case 1:
          if (sl(
            a,
            r,
            n
          ), l = r, a = l.stateNode, typeof a.componentDidMount == "function")
            try {
              a.componentDidMount();
            } catch (k) {
              _e(l, l.return, k);
            }
          if (l = r, a = l.updateQueue, a !== null) {
            var f = l.stateNode;
            try {
              var h = a.shared.hiddenCallbacks;
              if (h !== null)
                for (a.shared.hiddenCallbacks = null, a = 0; a < h.length; a++)
                  _f(h[a], f);
            } catch (k) {
              _e(l, l.return, k);
            }
          }
          n && u & 64 && Hd(r), Jr(r, r.return);
          break;
        case 27:
          Gd(r);
        case 26:
        case 5:
          sl(
            a,
            r,
            n
          ), n && l === null && u & 4 && Bd(r), Jr(r, r.return);
          break;
        case 12:
          sl(
            a,
            r,
            n
          );
          break;
        case 31:
          sl(
            a,
            r,
            n
          ), n && u & 4 && $d(a, r);
          break;
        case 13:
          sl(
            a,
            r,
            n
          ), n && u & 4 && Pd(a, r);
          break;
        case 22:
          r.memoizedState === null && sl(
            a,
            r,
            n
          ), Jr(r, r.return);
          break;
        case 30:
          break;
        default:
          sl(
            a,
            r,
            n
          );
      }
      t = t.sibling;
    }
  }
  function kc(e, t) {
    var n = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && qr(n));
  }
  function Ec(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && qr(e));
  }
  function On(e, t, n, l) {
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
        On(
          e,
          t,
          n,
          l
        ), a & 2048 && Wr(9, t);
        break;
      case 1:
        On(
          e,
          t,
          n,
          l
        );
        break;
      case 3:
        On(
          e,
          t,
          n,
          l
        ), a & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && qr(e)));
        break;
      case 12:
        if (a & 2048) {
          On(
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
          } catch (h) {
            _e(t, t.return, h);
          }
        } else
          On(
            e,
            t,
            n,
            l
          );
        break;
      case 31:
        On(
          e,
          t,
          n,
          l
        );
        break;
      case 13:
        On(
          e,
          t,
          n,
          l
        );
        break;
      case 23:
        break;
      case 22:
        r = t.stateNode, u = t.alternate, t.memoizedState !== null ? r._visibility & 2 ? On(
          e,
          t,
          n,
          l
        ) : ei(e, t) : r._visibility & 2 ? On(
          e,
          t,
          n,
          l
        ) : (r._visibility |= 2, rr(
          e,
          t,
          n,
          l,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), a & 2048 && kc(u, t);
        break;
      case 24:
        On(
          e,
          t,
          n,
          l
        ), a & 2048 && Ec(t.alternate, t);
        break;
      default:
        On(
          e,
          t,
          n,
          l
        );
    }
  }
  function rr(e, t, n, l, a) {
    for (a = a && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var r = e, u = t, f = n, h = l, k = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          rr(
            r,
            u,
            f,
            h,
            a
          ), Wr(8, u);
          break;
        case 23:
          break;
        case 22:
          var O = u.stateNode;
          u.memoizedState !== null ? O._visibility & 2 ? rr(
            r,
            u,
            f,
            h,
            a
          ) : ei(
            r,
            u
          ) : (O._visibility |= 2, rr(
            r,
            u,
            f,
            h,
            a
          )), a && k & 2048 && kc(
            u.alternate,
            u
          );
          break;
        case 24:
          rr(
            r,
            u,
            f,
            h,
            a
          ), a && k & 2048 && Ec(u.alternate, u);
          break;
        default:
          rr(
            r,
            u,
            f,
            h,
            a
          );
      }
      t = t.sibling;
    }
  }
  function ei(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e, l = t, a = l.flags;
        switch (l.tag) {
          case 22:
            ei(n, l), a & 2048 && kc(
              l.alternate,
              l
            );
            break;
          case 24:
            ei(n, l), a & 2048 && Ec(l.alternate, l);
            break;
          default:
            ei(n, l);
        }
        t = t.sibling;
      }
  }
  var ti = 8192;
  function ir(e, t, n) {
    if (e.subtreeFlags & ti)
      for (e = e.child; e !== null; )
        Wd(
          e,
          t,
          n
        ), e = e.sibling;
  }
  function Wd(e, t, n) {
    switch (e.tag) {
      case 26:
        ir(
          e,
          t,
          n
        ), e.flags & ti && e.memoizedState !== null && by(
          n,
          _n,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        ir(
          e,
          t,
          n
        );
        break;
      case 3:
      case 4:
        var l = _n;
        _n = No(e.stateNode.containerInfo), ir(
          e,
          t,
          n
        ), _n = l;
        break;
      case 22:
        e.memoizedState === null && (l = e.alternate, l !== null && l.memoizedState !== null ? (l = ti, ti = 16777216, ir(
          e,
          t,
          n
        ), ti = l) : ir(
          e,
          t,
          n
        ));
        break;
      default:
        ir(
          e,
          t,
          n
        );
    }
  }
  function Jd(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function ni(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          ot = l, tp(
            l,
            e
          );
        }
      Jd(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        ep(e), e = e.sibling;
  }
  function ep(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ni(e), e.flags & 2048 && Hl(9, e, e.return);
        break;
      case 3:
        ni(e);
        break;
      case 12:
        ni(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, yo(e)) : ni(e);
        break;
      default:
        ni(e);
    }
  }
  function yo(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          ot = l, tp(
            l,
            e
          );
        }
      Jd(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          Hl(8, t, t.return), yo(t);
          break;
        case 22:
          n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, yo(t));
          break;
        default:
          yo(t);
      }
      e = e.sibling;
    }
  }
  function tp(e, t) {
    for (; ot !== null; ) {
      var n = ot;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Hl(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var l = n.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          qr(n.memoizedState.cache);
      }
      if (l = n.child, l !== null) l.return = n, ot = l;
      else
        e: for (n = e; ot !== null; ) {
          l = ot;
          var a = l.sibling, r = l.return;
          if (Fd(l), l === n) {
            ot = null;
            break e;
          }
          if (a !== null) {
            a.return = r, ot = a;
            break e;
          }
          ot = r;
        }
    }
  }
  var Rg = {
    getCacheForType: function(e) {
      var t = pt(Ie), n = t.data.get(e);
      return n === void 0 && (n = e(), t.data.set(e, n)), n;
    },
    cacheSignal: function() {
      return pt(Ie).controller.signal;
    }
  }, Mg = typeof WeakMap == "function" ? WeakMap : Map, ke = 0, De = null, fe = null, pe = 0, xe = 0, Kt = null, ql = !1, or = !1, Ac = !1, fl = 0, Ve = 0, Bl = 0, Ta = 0, xc = 0, It = 0, ur = 0, li = null, Lt = null, _c = !1, bo = 0, np = 0, vo = 1 / 0, So = null, Yl = null, lt = 0, Gl = null, cr = null, dl = 0, Oc = 0, Cc = null, lp = null, ai = 0, Nc = null;
  function Wt() {
    return (ke & 2) !== 0 && pe !== 0 ? pe & -pe : M.T !== null ? Uc() : Oi();
  }
  function ap() {
    if (It === 0)
      if ((pe & 536870912) === 0 || ge) {
        var e = vl;
        vl <<= 1, (vl & 3932160) === 0 && (vl = 262144), It = e;
      } else It = 536870912;
    return e = Pt.current, e !== null && (e.flags |= 32), It;
  }
  function Ut(e, t, n) {
    (e === De && (xe === 2 || xe === 9) || e.cancelPendingCommit !== null) && (sr(e, 0), Vl(
      e,
      pe,
      It,
      !1
    )), wl(e, n), ((ke & 2) === 0 || e !== De) && (e === De && ((ke & 2) === 0 && (Ta |= n), Ve === 4 && Vl(
      e,
      pe,
      It,
      !1
    )), Hn(e));
  }
  function rp(e, t, n) {
    if ((ke & 6) !== 0) throw Error(s(327));
    var l = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Sl(e, t), a = l ? jg(e, t) : Dc(e, t, !0), r = l;
    do {
      if (a === 0) {
        or && !l && Vl(e, t, 0, !1);
        break;
      } else {
        if (n = e.current.alternate, r && !Lg(n)) {
          a = Dc(e, t, !1), r = !1;
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
              a = li;
              var h = f.current.memoizedState.isDehydrated;
              if (h && (sr(f, u).flags |= 256), u = Dc(
                f,
                u,
                !1
              ), u !== 2) {
                if (Ac && !h) {
                  f.errorRecoveryDisabledLanes |= r, Ta |= r, a = 4;
                  break e;
                }
                r = Lt, Lt = a, r !== null && (Lt === null ? Lt = r : Lt.push.apply(
                  Lt,
                  r
                ));
              }
              a = u;
            }
            if (r = !1, a !== 2) continue;
          }
        }
        if (a === 1) {
          sr(e, 0), Vl(e, t, 0, !0);
          break;
        }
        e: {
          switch (l = e, r = a, r) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Vl(
                l,
                t,
                It,
                !ql
              );
              break e;
            case 2:
              Lt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if ((t & 62914560) === t && (a = bo + 300 - st(), 10 < a)) {
            if (Vl(
              l,
              t,
              It,
              !ql
            ), an(l, 0, !0) !== 0) break e;
            dl = t, l.timeoutHandle = Up(
              ip.bind(
                null,
                l,
                n,
                Lt,
                So,
                _c,
                t,
                It,
                Ta,
                ur,
                ql,
                r,
                "Throttled",
                -0,
                0
              ),
              a
            );
            break e;
          }
          ip(
            l,
            n,
            Lt,
            So,
            _c,
            t,
            It,
            Ta,
            ur,
            ql,
            r,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Hn(e);
  }
  function ip(e, t, n, l, a, r, u, f, h, k, O, D, E, A) {
    if (e.timeoutHandle = -1, D = t.subtreeFlags, D & 8192 || (D & 16785408) === 16785408) {
      D = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Qt
      }, Wd(
        t,
        r,
        D
      );
      var Q = (r & 62914560) === r ? bo - st() : (r & 4194048) === r ? np - st() : 0;
      if (Q = vy(
        D,
        Q
      ), Q !== null) {
        dl = r, e.cancelPendingCommit = Q(
          mp.bind(
            null,
            e,
            t,
            r,
            n,
            l,
            a,
            u,
            f,
            h,
            O,
            D,
            null,
            E,
            A
          )
        ), Vl(e, r, u, !k);
        return;
      }
    }
    mp(
      e,
      t,
      r,
      n,
      l,
      a,
      u,
      f,
      h
    );
  }
  function Lg(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var l = 0; l < n.length; l++) {
          var a = n[l], r = a.getSnapshot;
          a = a.value;
          try {
            if (!Xt(r(), a)) return !1;
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
  function Vl(e, t, n, l) {
    t &= ~xc, t &= ~Ta, e.suspendedLanes |= t, e.pingedLanes &= ~t, l && (e.warmLanes |= t), l = e.expirationTimes;
    for (var a = t; 0 < a; ) {
      var r = 31 - rt(a), u = 1 << r;
      l[r] = -1, a &= ~u;
    }
    n !== 0 && la(e, n, t);
  }
  function wo() {
    return (ke & 6) === 0 ? (ri(0), !1) : !0;
  }
  function zc() {
    if (fe !== null) {
      if (xe === 0)
        var e = fe.return;
      else
        e = fe, tl = pa = null, $u(e), er = null, Yr = 0, e = fe;
      for (; e !== null; )
        jd(e.alternate, e), e = e.return;
      fe = null;
    }
  }
  function sr(e, t) {
    var n = e.timeoutHandle;
    n !== -1 && (e.timeoutHandle = -1, ty(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), dl = 0, zc(), De = e, fe = n = Jn(e.current, null), pe = t, xe = 0, Kt = null, ql = !1, or = Sl(e, t), Ac = !1, ur = It = xc = Ta = Bl = Ve = 0, Lt = li = null, _c = !1, (t & 8) !== 0 && (t |= t & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var a = 31 - rt(l), r = 1 << a;
        t |= e[a], l &= ~r;
      }
    return fl = t, Yi(), n;
  }
  function op(e, t) {
    re = null, M.H = Zr, t === Ja || t === Zi ? (t = kf(), xe = 3) : t === Lu ? (t = kf(), xe = 4) : xe = t === cc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Kt = t, fe === null && (Ve = 1, co(
      e,
      cn(t, e.current)
    ));
  }
  function up() {
    var e = Pt.current;
    return e === null ? !0 : (pe & 4194048) === pe ? vn === null : (pe & 62914560) === pe || (pe & 536870912) !== 0 ? e === vn : !1;
  }
  function cp() {
    var e = M.H;
    return M.H = Zr, e === null ? Zr : e;
  }
  function sp() {
    var e = M.A;
    return M.A = Rg, e;
  }
  function To() {
    Ve = 4, ql || (pe & 4194048) !== pe && Pt.current !== null || (or = !0), (Bl & 134217727) === 0 && (Ta & 134217727) === 0 || De === null || Vl(
      De,
      pe,
      It,
      !1
    );
  }
  function Dc(e, t, n) {
    var l = ke;
    ke |= 2;
    var a = cp(), r = sp();
    (De !== e || pe !== t) && (So = null, sr(e, t)), t = !1;
    var u = Ve;
    e: do
      try {
        if (xe !== 0 && fe !== null) {
          var f = fe, h = Kt;
          switch (xe) {
            case 8:
              zc(), u = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Pt.current === null && (t = !0);
              var k = xe;
              if (xe = 0, Kt = null, fr(e, f, h, k), n && or) {
                u = 0;
                break e;
              }
              break;
            default:
              k = xe, xe = 0, Kt = null, fr(e, f, h, k);
          }
        }
        Ug(), u = Ve;
        break;
      } catch (O) {
        op(e, O);
      }
    while (!0);
    return t && e.shellSuspendCounter++, tl = pa = null, ke = l, M.H = a, M.A = r, fe === null && (De = null, pe = 0, Yi()), u;
  }
  function Ug() {
    for (; fe !== null; ) fp(fe);
  }
  function jg(e, t) {
    var n = ke;
    ke |= 2;
    var l = cp(), a = sp();
    De !== e || pe !== t ? (So = null, vo = st() + 500, sr(e, t)) : or = Sl(
      e,
      t
    );
    e: do
      try {
        if (xe !== 0 && fe !== null) {
          t = fe;
          var r = Kt;
          t: switch (xe) {
            case 1:
              xe = 0, Kt = null, fr(e, t, r, 1);
              break;
            case 2:
            case 9:
              if (wf(r)) {
                xe = 0, Kt = null, dp(t);
                break;
              }
              t = function() {
                xe !== 2 && xe !== 9 || De !== e || (xe = 7), Hn(e);
              }, r.then(t, t);
              break e;
            case 3:
              xe = 7;
              break e;
            case 4:
              xe = 5;
              break e;
            case 7:
              wf(r) ? (xe = 0, Kt = null, dp(t)) : (xe = 0, Kt = null, fr(e, t, r, 7));
              break;
            case 5:
              var u = null;
              switch (fe.tag) {
                case 26:
                  u = fe.memoizedState;
                case 5:
                case 27:
                  var f = fe;
                  if (u ? Ip(u) : f.stateNode.complete) {
                    xe = 0, Kt = null;
                    var h = f.sibling;
                    if (h !== null) fe = h;
                    else {
                      var k = f.return;
                      k !== null ? (fe = k, ko(k)) : fe = null;
                    }
                    break t;
                  }
              }
              xe = 0, Kt = null, fr(e, t, r, 5);
              break;
            case 6:
              xe = 0, Kt = null, fr(e, t, r, 6);
              break;
            case 8:
              zc(), Ve = 6;
              break e;
            default:
              throw Error(s(462));
          }
        }
        Hg();
        break;
      } catch (O) {
        op(e, O);
      }
    while (!0);
    return tl = pa = null, M.H = l, M.A = a, ke = n, fe !== null ? 0 : (De = null, pe = 0, Yi(), Ve);
  }
  function Hg() {
    for (; fe !== null && !zn(); )
      fp(fe);
  }
  function fp(e) {
    var t = Ld(e.alternate, e, fl);
    e.memoizedProps = e.pendingProps, t === null ? ko(e) : fe = t;
  }
  function dp(e) {
    var t = e, n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Cd(
          n,
          t,
          t.pendingProps,
          t.type,
          void 0,
          pe
        );
        break;
      case 11:
        t = Cd(
          n,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          pe
        );
        break;
      case 5:
        $u(t);
      default:
        jd(n, t), t = fe = sf(t, fl), t = Ld(n, t, fl);
    }
    e.memoizedProps = e.pendingProps, t === null ? ko(e) : fe = t;
  }
  function fr(e, t, n, l) {
    tl = pa = null, $u(t), er = null, Yr = 0;
    var a = t.return;
    try {
      if (xg(
        e,
        a,
        t,
        n,
        pe
      )) {
        Ve = 1, co(
          e,
          cn(n, e.current)
        ), fe = null;
        return;
      }
    } catch (r) {
      if (a !== null) throw fe = a, r;
      Ve = 1, co(
        e,
        cn(n, e.current)
      ), fe = null;
      return;
    }
    t.flags & 32768 ? (ge || l === 1 ? e = !0 : or || (pe & 536870912) !== 0 ? e = !1 : (ql = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = Pt.current, l !== null && l.tag === 13 && (l.flags |= 16384))), pp(t, e)) : ko(t);
  }
  function ko(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        pp(
          t,
          ql
        );
        return;
      }
      e = t.return;
      var n = Cg(
        t.alternate,
        t,
        fl
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
    Ve === 0 && (Ve = 5);
  }
  function pp(e, t) {
    do {
      var n = Ng(e.alternate, e);
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
    Ve = 6, fe = null;
  }
  function mp(e, t, n, l, a, r, u, f, h) {
    e.cancelPendingCommit = null;
    do
      Eo();
    while (lt !== 0);
    if ((ke & 6) !== 0) throw Error(s(327));
    if (t !== null) {
      if (t === e.current) throw Error(s(177));
      if (r = t.lanes | t.childLanes, r |= Su, Ma(
        e,
        n,
        r,
        u,
        f,
        h
      ), e === De && (fe = De = null, pe = 0), cr = t, Gl = e, dl = n, Oc = r, Cc = a, lp = l, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Gg(nn, function() {
        return vp(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), l = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || l) {
        l = M.T, M.T = null, a = q.p, q.p = 2, u = ke, ke |= 4;
        try {
          zg(e, t, n);
        } finally {
          ke = u, q.p = a, M.T = l;
        }
      }
      lt = 1, hp(), gp(), yp();
    }
  }
  function hp() {
    if (lt === 1) {
      lt = 0;
      var e = Gl, t = cr, n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        n = M.T, M.T = null;
        var l = q.p;
        q.p = 2;
        var a = ke;
        ke |= 4;
        try {
          Zd(t, e);
          var r = Qc, u = ef(e.containerInfo), f = r.focusedElem, h = r.selectionRange;
          if (u !== f && f && f.ownerDocument && Js(
            f.ownerDocument.documentElement,
            f
          )) {
            if (h !== null && hu(f)) {
              var k = h.start, O = h.end;
              if (O === void 0 && (O = k), "selectionStart" in f)
                f.selectionStart = k, f.selectionEnd = Math.min(
                  O,
                  f.value.length
                );
              else {
                var D = f.ownerDocument || document, E = D && D.defaultView || window;
                if (E.getSelection) {
                  var A = E.getSelection(), Q = f.textContent.length, J = Math.min(h.start, Q), ze = h.end === void 0 ? J : Math.min(h.end, Q);
                  !A.extend && J > ze && (u = ze, ze = J, J = u);
                  var v = Ws(
                    f,
                    J
                  ), b = Ws(
                    f,
                    ze
                  );
                  if (v && b && (A.rangeCount !== 1 || A.anchorNode !== v.node || A.anchorOffset !== v.offset || A.focusNode !== b.node || A.focusOffset !== b.offset)) {
                    var w = D.createRange();
                    w.setStart(v.node, v.offset), A.removeAllRanges(), J > ze ? (A.addRange(w), A.extend(b.node, b.offset)) : (w.setEnd(b.node, b.offset), A.addRange(w));
                  }
                }
              }
            }
            for (D = [], A = f; A = A.parentNode; )
              A.nodeType === 1 && D.push({
                element: A,
                left: A.scrollLeft,
                top: A.scrollTop
              });
            for (typeof f.focus == "function" && f.focus(), f = 0; f < D.length; f++) {
              var C = D[f];
              C.element.scrollLeft = C.left, C.element.scrollTop = C.top;
            }
          }
          Uo = !!Vc, Qc = Vc = null;
        } finally {
          ke = a, q.p = l, M.T = n;
        }
      }
      e.current = t, lt = 2;
    }
  }
  function gp() {
    if (lt === 2) {
      lt = 0;
      var e = Gl, t = cr, n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        n = M.T, M.T = null;
        var l = q.p;
        q.p = 2;
        var a = ke;
        ke |= 4;
        try {
          Qd(e, t.alternate, t);
        } finally {
          ke = a, q.p = l, M.T = n;
        }
      }
      lt = 3;
    }
  }
  function yp() {
    if (lt === 4 || lt === 3) {
      lt = 0, Ti();
      var e = Gl, t = cr, n = dl, l = lp;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? lt = 5 : (lt = 0, cr = Gl = null, bp(e, e.pendingLanes));
      var a = e.pendingLanes;
      if (a === 0 && (Yl = null), ra(n), t = t.stateNode, Pe && typeof Pe.onCommitFiberRoot == "function")
        try {
          Pe.onCommitFiberRoot(
            Fn,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (l !== null) {
        t = M.T, a = q.p, q.p = 2, M.T = null;
        try {
          for (var r = e.onRecoverableError, u = 0; u < l.length; u++) {
            var f = l[u];
            r(f.value, {
              componentStack: f.stack
            });
          }
        } finally {
          M.T = t, q.p = a;
        }
      }
      (dl & 3) !== 0 && Eo(), Hn(e), a = e.pendingLanes, (n & 261930) !== 0 && (a & 42) !== 0 ? e === Nc ? ai++ : (ai = 0, Nc = e) : ai = 0, ri(0);
    }
  }
  function bp(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, qr(t)));
  }
  function Eo() {
    return hp(), gp(), yp(), vp();
  }
  function vp() {
    if (lt !== 5) return !1;
    var e = Gl, t = Oc;
    Oc = 0;
    var n = ra(dl), l = M.T, a = q.p;
    try {
      q.p = 32 > n ? 32 : n, M.T = null, n = Cc, Cc = null;
      var r = Gl, u = dl;
      if (lt = 0, cr = Gl = null, dl = 0, (ke & 6) !== 0) throw Error(s(331));
      var f = ke;
      if (ke |= 4, ep(r.current), Id(
        r,
        r.current,
        u,
        n
      ), ke = f, ri(0, !1), Pe && typeof Pe.onPostCommitFiberRoot == "function")
        try {
          Pe.onPostCommitFiberRoot(Fn, r);
        } catch {
        }
      return !0;
    } finally {
      q.p = a, M.T = l, bp(e, t);
    }
  }
  function Sp(e, t, n) {
    t = cn(n, t), t = uc(e.stateNode, t, 2), e = Ll(e, t, 2), e !== null && (wl(e, 2), Hn(e));
  }
  function _e(e, t, n) {
    if (e.tag === 3)
      Sp(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Sp(
            t,
            e,
            n
          );
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Yl === null || !Yl.has(l))) {
            e = cn(n, e), n = wd(2), l = Ll(t, n, 2), l !== null && (Td(
              n,
              l,
              t,
              e
            ), wl(l, 2), Hn(l));
            break;
          }
        }
        t = t.return;
      }
  }
  function Rc(e, t, n) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new Mg();
      var a = /* @__PURE__ */ new Set();
      l.set(t, a);
    } else
      a = l.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), l.set(t, a));
    a.has(n) || (Ac = !0, a.add(n), e = qg.bind(null, e, t, n), t.then(e, e));
  }
  function qg(e, t, n) {
    var l = e.pingCache;
    l !== null && l.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, De === e && (pe & n) === n && (Ve === 4 || Ve === 3 && (pe & 62914560) === pe && 300 > st() - bo ? (ke & 2) === 0 && sr(e, 0) : xc |= n, ur === pe && (ur = 0)), Hn(e);
  }
  function wp(e, t) {
    t === 0 && (t = Er()), e = sa(e, t), e !== null && (wl(e, t), Hn(e));
  }
  function Bg(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), wp(e, n);
  }
  function Yg(e, t) {
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
        throw Error(s(314));
    }
    l !== null && l.delete(t), wp(e, n);
  }
  function Gg(e, t) {
    return Vn(e, t);
  }
  var Ao = null, dr = null, Mc = !1, xo = !1, Lc = !1, Ql = 0;
  function Hn(e) {
    e !== dr && e.next === null && (dr === null ? Ao = dr = e : dr = dr.next = e), xo = !0, Mc || (Mc = !0, Qg());
  }
  function ri(e, t) {
    if (!Lc && xo) {
      Lc = !0;
      do
        for (var n = !1, l = Ao; l !== null; ) {
          if (e !== 0) {
            var a = l.pendingLanes;
            if (a === 0) var r = 0;
            else {
              var u = l.suspendedLanes, f = l.pingedLanes;
              r = (1 << 31 - rt(42 | e) + 1) - 1, r &= a & ~(u & ~f), r = r & 201326741 ? r & 201326741 | 1 : r ? r | 2 : 0;
            }
            r !== 0 && (n = !0, Ap(l, r));
          } else
            r = pe, r = an(
              l,
              l === De ? r : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (r & 3) === 0 || Sl(l, r) || (n = !0, Ap(l, r));
          l = l.next;
        }
      while (n);
      Lc = !1;
    }
  }
  function Vg() {
    Tp();
  }
  function Tp() {
    xo = Mc = !1;
    var e = 0;
    Ql !== 0 && ey() && (e = Ql);
    for (var t = st(), n = null, l = Ao; l !== null; ) {
      var a = l.next, r = kp(l, t);
      r === 0 ? (l.next = null, n === null ? Ao = a : n.next = a, a === null && (dr = n)) : (n = l, (e !== 0 || (r & 3) !== 0) && (xo = !0)), l = a;
    }
    lt !== 0 && lt !== 5 || ri(e), Ql !== 0 && (Ql = 0);
  }
  function kp(e, t) {
    for (var n = e.suspendedLanes, l = e.pingedLanes, a = e.expirationTimes, r = e.pendingLanes & -62914561; 0 < r; ) {
      var u = 31 - rt(r), f = 1 << u, h = a[u];
      h === -1 ? ((f & n) === 0 || (f & l) !== 0) && (a[u] = _i(f, t)) : h <= t && (e.expiredLanes |= f), r &= ~f;
    }
    if (t = De, n = pe, n = an(
      e,
      e === t ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l = e.callbackNode, n === 0 || e === t && (xe === 2 || xe === 9) || e.cancelPendingCommit !== null)
      return l !== null && l !== null && Oa(l), e.callbackNode = null, e.callbackPriority = 0;
    if ((n & 3) === 0 || Sl(e, n)) {
      if (t = n & -n, t === e.callbackPriority) return t;
      switch (l !== null && Oa(l), ra(n)) {
        case 2:
        case 8:
          n = tn;
          break;
        case 32:
          n = nn;
          break;
        case 268435456:
          n = Na;
          break;
        default:
          n = nn;
      }
      return l = Ep.bind(null, e), n = Vn(n, l), e.callbackPriority = t, e.callbackNode = n, t;
    }
    return l !== null && l !== null && Oa(l), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Ep(e, t) {
    if (lt !== 0 && lt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var n = e.callbackNode;
    if (Eo() && e.callbackNode !== n)
      return null;
    var l = pe;
    return l = an(
      e,
      e === De ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l === 0 ? null : (rp(e, l, t), kp(e, st()), e.callbackNode != null && e.callbackNode === n ? Ep.bind(null, e) : null);
  }
  function Ap(e, t) {
    if (Eo()) return null;
    rp(e, t, !0);
  }
  function Qg() {
    ny(function() {
      (ke & 6) !== 0 ? Vn(
        Ca,
        Vg
      ) : Tp();
    });
  }
  function Uc() {
    if (Ql === 0) {
      var e = Ia;
      e === 0 && (e = bl, bl <<= 1, (bl & 261888) === 0 && (bl = 256)), Ql = e;
    }
    return Ql;
  }
  function xp(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : En("" + e);
  }
  function _p(e, t) {
    var n = t.ownerDocument.createElement("input");
    return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
  }
  function Fg(e, t, n, l, a) {
    if (t === "submit" && n && n.stateNode === a) {
      var r = xp(
        (a[it] || null).action
      ), u = l.submitter;
      u && (t = (t = u[it] || null) ? xp(t.formAction) : u.getAttribute("formAction"), t !== null && (r = t, u = null));
      var f = new ft(
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
                if (Ql !== 0) {
                  var h = u ? _p(a, u) : new FormData(a);
                  nc(
                    n,
                    {
                      pending: !0,
                      data: h,
                      method: a.method,
                      action: r
                    },
                    null,
                    h
                  );
                }
              } else
                typeof r == "function" && (f.preventDefault(), h = u ? _p(a, u) : new FormData(a), nc(
                  n,
                  {
                    pending: !0,
                    data: h,
                    method: a.method,
                    action: r
                  },
                  r,
                  h
                ));
            },
            currentTarget: a
          }
        ]
      });
    }
  }
  for (var jc = 0; jc < vu.length; jc++) {
    var Hc = vu[jc], Xg = Hc.toLowerCase(), $g = Hc[0].toUpperCase() + Hc.slice(1);
    xn(
      Xg,
      "on" + $g
    );
  }
  xn(lf, "onAnimationEnd"), xn(af, "onAnimationIteration"), xn(rf, "onAnimationStart"), xn("dblclick", "onDoubleClick"), xn("focusin", "onFocus"), xn("focusout", "onBlur"), xn(cg, "onTransitionRun"), xn(sg, "onTransitionStart"), xn(fg, "onTransitionCancel"), xn(of, "onTransitionEnd"), At("onMouseEnter", ["mouseout", "mouseover"]), At("onMouseLeave", ["mouseout", "mouseover"]), At("onPointerEnter", ["pointerout", "pointerover"]), At("onPointerLeave", ["pointerout", "pointerover"]), Kn(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Kn(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Kn("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Kn(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Kn(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Kn(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var ii = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Pg = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ii)
  );
  function Op(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var l = e[n], a = l.event;
      l = l.listeners;
      e: {
        var r = void 0;
        if (t)
          for (var u = l.length - 1; 0 <= u; u--) {
            var f = l[u], h = f.instance, k = f.currentTarget;
            if (f = f.listener, h !== r && a.isPropagationStopped())
              break e;
            r = f, a.currentTarget = k;
            try {
              r(a);
            } catch (O) {
              Bi(O);
            }
            a.currentTarget = null, r = h;
          }
        else
          for (u = 0; u < l.length; u++) {
            if (f = l[u], h = f.instance, k = f.currentTarget, f = f.listener, h !== r && a.isPropagationStopped())
              break e;
            r = f, a.currentTarget = k;
            try {
              r(a);
            } catch (O) {
              Bi(O);
            }
            a.currentTarget = null, r = h;
          }
      }
    }
  }
  function de(e, t) {
    var n = t[$n];
    n === void 0 && (n = t[$n] = /* @__PURE__ */ new Set());
    var l = e + "__bubble";
    n.has(l) || (Cp(t, e, 2, !1), n.add(l));
  }
  function qc(e, t, n) {
    var l = 0;
    t && (l |= 4), Cp(
      n,
      e,
      l,
      t
    );
  }
  var _o = "_reactListening" + Math.random().toString(36).slice(2);
  function Bc(e) {
    if (!e[_o]) {
      e[_o] = !0, Ci.forEach(function(n) {
        n !== "selectionchange" && (Pg.has(n) || qc(n, !1, e), qc(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[_o] || (t[_o] = !0, qc("selectionchange", !1, t));
    }
  }
  function Cp(e, t, n, l) {
    switch (am(t)) {
      case 2:
        var a = Ty;
        break;
      case 8:
        a = ky;
        break;
      default:
        a = ts;
    }
    n = a.bind(
      null,
      t,
      n,
      e
    ), a = void 0, !m || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), l ? a !== void 0 ? e.addEventListener(t, n, {
      capture: !0,
      passive: a
    }) : e.addEventListener(t, n, !0) : a !== void 0 ? e.addEventListener(t, n, {
      passive: a
    }) : e.addEventListener(t, n, !1);
  }
  function Yc(e, t, n, l, a) {
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
              var h = u.tag;
              if ((h === 3 || h === 4) && u.stateNode.containerInfo === a)
                return;
              u = u.return;
            }
          for (; f !== null; ) {
            if (u = Pn(f), u === null) return;
            if (h = u.tag, h === 5 || h === 6 || h === 26 || h === 27) {
              l = r = u;
              continue e;
            }
            f = f.parentNode;
          }
        }
        l = l.return;
      }
    Ya(function() {
      var k = r, O = Nr(n), D = [];
      e: {
        var E = uf.get(e);
        if (E !== void 0) {
          var A = ft, Q = e;
          switch (e) {
            case "keypress":
              if (te(n) === 0) break e;
            case "keydown":
            case "keyup":
              A = Yh;
              break;
            case "focusin":
              Q = "focus", A = su;
              break;
            case "focusout":
              Q = "blur", A = su;
              break;
            case "beforeblur":
            case "afterblur":
              A = su;
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
              A = Us;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              A = Ch;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              A = Qh;
              break;
            case lf:
            case af:
            case rf:
              A = Dh;
              break;
            case of:
              A = Xh;
              break;
            case "scroll":
            case "scrollend":
              A = Mn;
              break;
            case "wheel":
              A = Ph;
              break;
            case "copy":
            case "cut":
            case "paste":
              A = Mh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              A = Hs;
              break;
            case "toggle":
            case "beforetoggle":
              A = Kh;
          }
          var J = (t & 4) !== 0, ze = !J && (e === "scroll" || e === "scrollend"), v = J ? E !== null ? E + "Capture" : null : E;
          J = [];
          for (var b = k, w; b !== null; ) {
            var C = b;
            if (w = C.stateNode, C = C.tag, C !== 5 && C !== 26 && C !== 27 || w === null || v === null || (C = An(b, v), C != null && J.push(
              oi(b, C, w)
            )), ze) break;
            b = b.return;
          }
          0 < J.length && (E = new A(
            E,
            Q,
            null,
            n,
            O
          ), D.push({ event: E, listeners: J }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (E = e === "mouseover" || e === "pointerover", A = e === "mouseout" || e === "pointerout", E && n !== qa && (Q = n.relatedTarget || n.fromElement) && (Pn(Q) || Q[Tl]))
            break e;
          if ((A || E) && (E = O.window === O ? O : (E = O.ownerDocument) ? E.defaultView || E.parentWindow : window, A ? (Q = n.relatedTarget || n.toElement, A = k, Q = Q ? Pn(Q) : null, Q !== null && (ze = T(Q), J = Q.tag, Q !== ze || J !== 5 && J !== 27 && J !== 6) && (Q = null)) : (A = null, Q = k), A !== Q)) {
            if (J = Us, C = "onMouseLeave", v = "onMouseEnter", b = "mouse", (e === "pointerout" || e === "pointerover") && (J = Hs, C = "onPointerLeave", v = "onPointerEnter", b = "pointer"), ze = A == null ? E : kl(A), w = Q == null ? E : kl(Q), E = new J(
              C,
              b + "leave",
              A,
              n,
              O
            ), E.target = ze, E.relatedTarget = w, C = null, Pn(O) === k && (J = new J(
              v,
              b + "enter",
              Q,
              n,
              O
            ), J.target = w, J.relatedTarget = ze, C = J), ze = C, A && Q)
              t: {
                for (J = Zg, v = A, b = Q, w = 0, C = v; C; C = J(C))
                  w++;
                C = 0;
                for (var Z = b; Z; Z = J(Z))
                  C++;
                for (; 0 < w - C; )
                  v = J(v), w--;
                for (; 0 < C - w; )
                  b = J(b), C--;
                for (; w--; ) {
                  if (v === b || b !== null && v === b.alternate) {
                    J = v;
                    break t;
                  }
                  v = J(v), b = J(b);
                }
                J = null;
              }
            else J = null;
            A !== null && Np(
              D,
              E,
              A,
              J,
              !1
            ), Q !== null && ze !== null && Np(
              D,
              ze,
              Q,
              J,
              !0
            );
          }
        }
        e: {
          if (E = k ? kl(k) : window, A = E.nodeName && E.nodeName.toLowerCase(), A === "select" || A === "input" && E.type === "file")
            var we = Xs;
          else if (Qs(E))
            if ($s)
              we = ig;
            else {
              we = ag;
              var X = lg;
            }
          else
            A = E.nodeName, !A || A.toLowerCase() !== "input" || E.type !== "checkbox" && E.type !== "radio" ? k && _l(k.elementType) && (we = Xs) : we = rg;
          if (we && (we = we(e, k))) {
            Fs(
              D,
              we,
              n,
              O
            );
            break e;
          }
          X && X(e, E, k), e === "focusout" && k && E.type === "number" && k.memoizedProps.value != null && xl(E, "number", E.value);
        }
        switch (X = k ? kl(k) : window, e) {
          case "focusin":
            (Qs(X) || X.contentEditable === "true") && (Va = X, gu = k, Ur = null);
            break;
          case "focusout":
            Ur = gu = Va = null;
            break;
          case "mousedown":
            yu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            yu = !1, tf(D, n, O);
            break;
          case "selectionchange":
            if (ug) break;
          case "keydown":
          case "keyup":
            tf(D, n, O);
        }
        var oe;
        if (du)
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
          Ga ? Gs(e, n) && (me = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (me = "onCompositionStart");
        me && (qs && n.locale !== "ko" && (Ga || me !== "onCompositionStart" ? me === "onCompositionEnd" && Ga && (oe = I()) : (S = O, z = "value" in S ? S.value : S.textContent, Ga = !0)), X = Oo(k, me), 0 < X.length && (me = new js(
          me,
          e,
          null,
          n,
          O
        ), D.push({ event: me, listeners: X }), oe ? me.data = oe : (oe = Vs(n), oe !== null && (me.data = oe)))), (oe = Wh ? Jh(e, n) : eg(e, n)) && (me = Oo(k, "onBeforeInput"), 0 < me.length && (X = new js(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          O
        ), D.push({
          event: X,
          listeners: me
        }), X.data = oe)), Fg(
          D,
          e,
          k,
          n,
          O
        );
      }
      Op(D, t);
    });
  }
  function oi(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function Oo(e, t) {
    for (var n = t + "Capture", l = []; e !== null; ) {
      var a = e, r = a.stateNode;
      if (a = a.tag, a !== 5 && a !== 26 && a !== 27 || r === null || (a = An(e, n), a != null && l.unshift(
        oi(e, a, r)
      ), a = An(e, t), a != null && l.push(
        oi(e, a, r)
      )), e.tag === 3) return l;
      e = e.return;
    }
    return [];
  }
  function Zg(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Np(e, t, n, l, a) {
    for (var r = t._reactName, u = []; n !== null && n !== l; ) {
      var f = n, h = f.alternate, k = f.stateNode;
      if (f = f.tag, h !== null && h === l) break;
      f !== 5 && f !== 26 && f !== 27 || k === null || (h = k, a ? (k = An(n, r), k != null && u.unshift(
        oi(n, k, h)
      )) : a || (k = An(n, r), k != null && u.push(
        oi(n, k, h)
      ))), n = n.return;
    }
    u.length !== 0 && e.push({ event: t, listeners: u });
  }
  var Kg = /\r\n?/g, Ig = /\u0000|\uFFFD/g;
  function zp(e) {
    return (typeof e == "string" ? e : "" + e).replace(Kg, `
`).replace(Ig, "");
  }
  function Dp(e, t) {
    return t = zp(t), zp(e) === t;
  }
  function Ne(e, t, n, l, a, r) {
    switch (n) {
      case "children":
        typeof l == "string" ? t === "body" || t === "textarea" && l === "" || wt(e, l) : (typeof l == "number" || typeof l == "bigint") && t !== "body" && wt(e, "" + l);
        break;
      case "className":
        Al(e, "class", l);
        break;
      case "tabIndex":
        Al(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Al(e, n, l);
        break;
      case "style":
        Li(e, l, r);
        break;
      case "data":
        if (t !== "object") {
          Al(e, "data", l);
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
        l = En("" + l), e.setAttribute(n, l);
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
        l = En("" + l), e.setAttribute(n, l);
        break;
      case "onClick":
        l != null && (e.onclick = Qt);
        break;
      case "onScroll":
        l != null && de("scroll", e);
        break;
      case "onScrollEnd":
        l != null && de("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(s(61));
          if (n = l.__html, n != null) {
            if (a.children != null) throw Error(s(60));
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
        n = En("" + l), e.setAttributeNS(
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
        de("beforetoggle", e), de("toggle", e), El(e, "popover", l);
        break;
      case "xlinkActuate":
        Vt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          l
        );
        break;
      case "xlinkArcrole":
        Vt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          l
        );
        break;
      case "xlinkRole":
        Vt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          l
        );
        break;
      case "xlinkShow":
        Vt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          l
        );
        break;
      case "xlinkTitle":
        Vt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          l
        );
        break;
      case "xlinkType":
        Vt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          l
        );
        break;
      case "xmlBase":
        Vt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          l
        );
        break;
      case "xmlLang":
        Vt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          l
        );
        break;
      case "xmlSpace":
        Vt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          l
        );
        break;
      case "is":
        El(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = uu.get(n) || n, El(e, n, l));
    }
  }
  function Gc(e, t, n, l, a, r) {
    switch (n) {
      case "style":
        Li(e, l, r);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(s(61));
          if (n = l.__html, n != null) {
            if (a.children != null) throw Error(s(60));
            e.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof l == "string" ? wt(e, l) : (typeof l == "number" || typeof l == "bigint") && wt(e, "" + l);
        break;
      case "onScroll":
        l != null && de("scroll", e);
        break;
      case "onScrollEnd":
        l != null && de("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = Qt);
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
        if (!Ni.hasOwnProperty(n))
          e: {
            if (n[0] === "o" && n[1] === "n" && (a = n.endsWith("Capture"), t = n.slice(2, a ? n.length - 7 : void 0), r = e[it] || null, r = r != null ? r[n] : null, typeof r == "function" && e.removeEventListener(t, r, a), typeof l == "function")) {
              typeof r != "function" && r !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, l, a);
              break e;
            }
            n in e ? e[n] = l : l === !0 ? e.setAttribute(n, "") : El(e, n, l);
          }
    }
  }
  function ht(e, t, n) {
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
                  throw Error(s(137, t));
                default:
                  Ne(e, t, r, u, n, null);
              }
          }
        a && Ne(e, t, "srcSet", n.srcSet, n, null), l && Ne(e, t, "src", n.src, n, null);
        return;
      case "input":
        de("invalid", e);
        var f = r = u = a = null, h = null, k = null;
        for (l in n)
          if (n.hasOwnProperty(l)) {
            var O = n[l];
            if (O != null)
              switch (l) {
                case "name":
                  a = O;
                  break;
                case "type":
                  u = O;
                  break;
                case "checked":
                  h = O;
                  break;
                case "defaultChecked":
                  k = O;
                  break;
                case "value":
                  r = O;
                  break;
                case "defaultValue":
                  f = O;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (O != null)
                    throw Error(s(137, t));
                  break;
                default:
                  Ne(e, t, l, O, n, null);
              }
          }
        Ha(
          e,
          r,
          f,
          h,
          k,
          u,
          a,
          !1
        );
        return;
      case "select":
        de("invalid", e), l = u = r = null;
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
        t = r, n = u, e.multiple = !!l, t != null ? Rn(e, !!l, t, !1) : n != null && Rn(e, !!l, n, !0);
        return;
      case "textarea":
        de("invalid", e), r = a = l = null;
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
                if (f != null) throw Error(s(91));
                break;
              default:
                Ne(e, t, u, f, n, null);
            }
        ia(e, l, a, r);
        return;
      case "option":
        for (h in n)
          if (n.hasOwnProperty(h) && (l = n[h], l != null))
            switch (h) {
              case "selected":
                e.selected = l && typeof l != "function" && typeof l != "symbol";
                break;
              default:
                Ne(e, t, h, l, n, null);
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
        for (l = 0; l < ii.length; l++)
          de(ii[l], e);
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
        for (k in n)
          if (n.hasOwnProperty(k) && (l = n[k], l != null))
            switch (k) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, t));
              default:
                Ne(e, t, k, l, n, null);
            }
        return;
      default:
        if (_l(t)) {
          for (O in n)
            n.hasOwnProperty(O) && (l = n[O], l !== void 0 && Gc(
              e,
              t,
              O,
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
  function Wg(e, t, n, l) {
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
        var a = null, r = null, u = null, f = null, h = null, k = null, O = null;
        for (A in n) {
          var D = n[A];
          if (n.hasOwnProperty(A) && D != null)
            switch (A) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                h = D;
              default:
                l.hasOwnProperty(A) || Ne(e, t, A, null, l, D);
            }
        }
        for (var E in l) {
          var A = l[E];
          if (D = n[E], l.hasOwnProperty(E) && (A != null || D != null))
            switch (E) {
              case "type":
                r = A;
                break;
              case "name":
                a = A;
                break;
              case "checked":
                k = A;
                break;
              case "defaultChecked":
                O = A;
                break;
              case "value":
                u = A;
                break;
              case "defaultValue":
                f = A;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (A != null)
                  throw Error(s(137, t));
                break;
              default:
                A !== D && Ne(
                  e,
                  t,
                  E,
                  A,
                  l,
                  D
                );
            }
        }
        ja(
          e,
          u,
          f,
          h,
          k,
          O,
          r,
          a
        );
        return;
      case "select":
        A = u = f = E = null;
        for (r in n)
          if (h = n[r], n.hasOwnProperty(r) && h != null)
            switch (r) {
              case "value":
                break;
              case "multiple":
                A = h;
              default:
                l.hasOwnProperty(r) || Ne(
                  e,
                  t,
                  r,
                  null,
                  l,
                  h
                );
            }
        for (a in l)
          if (r = l[a], h = n[a], l.hasOwnProperty(a) && (r != null || h != null))
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
                r !== h && Ne(
                  e,
                  t,
                  a,
                  r,
                  l,
                  h
                );
            }
        t = f, n = u, l = A, E != null ? Rn(e, !!n, E, !1) : !!l != !!n && (t != null ? Rn(e, !!n, t, !0) : Rn(e, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        A = E = null;
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
                E = a;
                break;
              case "defaultValue":
                A = a;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (a != null) throw Error(s(91));
                break;
              default:
                a !== r && Ne(e, t, u, a, l, r);
            }
        Cr(e, E, A);
        return;
      case "option":
        for (var Q in n)
          if (E = n[Q], n.hasOwnProperty(Q) && E != null && !l.hasOwnProperty(Q))
            switch (Q) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Ne(
                  e,
                  t,
                  Q,
                  null,
                  l,
                  E
                );
            }
        for (h in l)
          if (E = l[h], A = n[h], l.hasOwnProperty(h) && E !== A && (E != null || A != null))
            switch (h) {
              case "selected":
                e.selected = E && typeof E != "function" && typeof E != "symbol";
                break;
              default:
                Ne(
                  e,
                  t,
                  h,
                  E,
                  l,
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
        for (var J in n)
          E = n[J], n.hasOwnProperty(J) && E != null && !l.hasOwnProperty(J) && Ne(e, t, J, null, l, E);
        for (k in l)
          if (E = l[k], A = n[k], l.hasOwnProperty(k) && E !== A && (E != null || A != null))
            switch (k) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (E != null)
                  throw Error(s(137, t));
                break;
              default:
                Ne(
                  e,
                  t,
                  k,
                  E,
                  l,
                  A
                );
            }
        return;
      default:
        if (_l(t)) {
          for (var ze in n)
            E = n[ze], n.hasOwnProperty(ze) && E !== void 0 && !l.hasOwnProperty(ze) && Gc(
              e,
              t,
              ze,
              void 0,
              l,
              E
            );
          for (O in l)
            E = l[O], A = n[O], !l.hasOwnProperty(O) || E === A || E === void 0 && A === void 0 || Gc(
              e,
              t,
              O,
              E,
              l,
              A
            );
          return;
        }
    }
    for (var v in n)
      E = n[v], n.hasOwnProperty(v) && E != null && !l.hasOwnProperty(v) && Ne(e, t, v, null, l, E);
    for (D in l)
      E = l[D], A = n[D], !l.hasOwnProperty(D) || E === A || E == null && A == null || Ne(e, t, D, E, l, A);
  }
  function Rp(e) {
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
  function Jg() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), l = 0; l < n.length; l++) {
        var a = n[l], r = a.transferSize, u = a.initiatorType, f = a.duration;
        if (r && f && Rp(u)) {
          for (u = 0, f = a.responseEnd, l += 1; l < n.length; l++) {
            var h = n[l], k = h.startTime;
            if (k > f) break;
            var O = h.transferSize, D = h.initiatorType;
            O && Rp(D) && (h = h.responseEnd, u += O * (h < f ? 1 : (f - k) / (h - k)));
          }
          if (--l, t += 8 * (r + u) / (a.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var Vc = null, Qc = null;
  function Co(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Mp(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Lp(e, t) {
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
  function Fc(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Xc = null;
  function ey() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Xc ? !1 : (Xc = e, !0) : (Xc = null, !1);
  }
  var Up = typeof setTimeout == "function" ? setTimeout : void 0, ty = typeof clearTimeout == "function" ? clearTimeout : void 0, jp = typeof Promise == "function" ? Promise : void 0, ny = typeof queueMicrotask == "function" ? queueMicrotask : typeof jp < "u" ? function(e) {
    return jp.resolve(null).then(e).catch(ly);
  } : Up;
  function ly(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Fl(e) {
    return e === "head";
  }
  function Hp(e, t) {
    var n = t, l = 0;
    do {
      var a = n.nextSibling;
      if (e.removeChild(n), a && a.nodeType === 8)
        if (n = a.data, n === "/$" || n === "/&") {
          if (l === 0) {
            e.removeChild(a), gr(t);
            return;
          }
          l--;
        } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
          l++;
        else if (n === "html")
          ui(e.ownerDocument.documentElement);
        else if (n === "head") {
          n = e.ownerDocument.head, ui(n);
          for (var r = n.firstChild; r; ) {
            var u = r.nextSibling, f = r.nodeName;
            r[on] || f === "SCRIPT" || f === "STYLE" || f === "LINK" && r.rel.toLowerCase() === "stylesheet" || n.removeChild(r), r = u;
          }
        } else
          n === "body" && ui(e.ownerDocument.body);
      n = a;
    } while (n);
    gr(t);
  }
  function qp(e, t) {
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
  function $c(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (t = t.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          $c(n), xr(n);
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
  function ay(e, t, n, l) {
    for (; e.nodeType === 1; ) {
      var a = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (l) {
        if (!e[on])
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
      if (e = pn(e.nextSibling), e === null) break;
    }
    return null;
  }
  function ry(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = pn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Bp(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = pn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Pc(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Zc(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function iy(e, t) {
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
  function pn(e) {
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
  var Kc = null;
  function Yp(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "/$" || n === "/&") {
          if (t === 0)
            return pn(e.nextSibling);
          t--;
        } else
          n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Gp(e) {
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
  function Vp(e, t, n) {
    switch (t = Co(n), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(s(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(s(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(s(454));
        return e;
      default:
        throw Error(s(451));
    }
  }
  function ui(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    xr(e);
  }
  var mn = /* @__PURE__ */ new Map(), Qp = /* @__PURE__ */ new Set();
  function No(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var pl = q.d;
  q.d = {
    f: oy,
    r: uy,
    D: cy,
    C: sy,
    L: fy,
    m: dy,
    X: my,
    S: py,
    M: hy
  };
  function oy() {
    var e = pl.f(), t = wo();
    return e || t;
  }
  function uy(e) {
    var t = Dn(e);
    t !== null && t.tag === 5 && t.type === "form" ? od(t) : pl.r(e);
  }
  var pr = typeof document > "u" ? null : document;
  function Fp(e, t, n) {
    var l = pr;
    if (l && typeof t == "string" && t) {
      var a = jt(t);
      a = 'link[rel="' + e + '"][href="' + a + '"]', typeof n == "string" && (a += '[crossorigin="' + n + '"]'), Qp.has(a) || (Qp.add(a), e = { rel: e, crossOrigin: n, href: t }, l.querySelector(a) === null && (t = l.createElement("link"), ht(t, "link", e), Ke(t), l.head.appendChild(t)));
    }
  }
  function cy(e) {
    pl.D(e), Fp("dns-prefetch", e, null);
  }
  function sy(e, t) {
    pl.C(e, t), Fp("preconnect", e, t);
  }
  function fy(e, t, n) {
    pl.L(e, t, n);
    var l = pr;
    if (l && e && t) {
      var a = 'link[rel="preload"][as="' + jt(t) + '"]';
      t === "image" && n && n.imageSrcSet ? (a += '[imagesrcset="' + jt(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (a += '[imagesizes="' + jt(
        n.imageSizes
      ) + '"]')) : a += '[href="' + jt(e) + '"]';
      var r = a;
      switch (t) {
        case "style":
          r = mr(e);
          break;
        case "script":
          r = hr(e);
      }
      mn.has(r) || (e = R(
        {
          rel: "preload",
          href: t === "image" && n && n.imageSrcSet ? void 0 : e,
          as: t
        },
        n
      ), mn.set(r, e), l.querySelector(a) !== null || t === "style" && l.querySelector(ci(r)) || t === "script" && l.querySelector(si(r)) || (t = l.createElement("link"), ht(t, "link", e), Ke(t), l.head.appendChild(t)));
    }
  }
  function dy(e, t) {
    pl.m(e, t);
    var n = pr;
    if (n && e) {
      var l = t && typeof t.as == "string" ? t.as : "script", a = 'link[rel="modulepreload"][as="' + jt(l) + '"][href="' + jt(e) + '"]', r = a;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          r = hr(e);
      }
      if (!mn.has(r) && (e = R({ rel: "modulepreload", href: e }, t), mn.set(r, e), n.querySelector(a) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(si(r)))
              return;
        }
        l = n.createElement("link"), ht(l, "link", e), Ke(l), n.head.appendChild(l);
      }
    }
  }
  function py(e, t, n) {
    pl.S(e, t, n);
    var l = pr;
    if (l && e) {
      var a = Zn(l).hoistableStyles, r = mr(e);
      t = t || "default";
      var u = a.get(r);
      if (!u) {
        var f = { loading: 0, preload: null };
        if (u = l.querySelector(
          ci(r)
        ))
          f.loading = 5;
        else {
          e = R(
            { rel: "stylesheet", href: e, "data-precedence": t },
            n
          ), (n = mn.get(r)) && Ic(e, n);
          var h = u = l.createElement("link");
          Ke(h), ht(h, "link", e), h._p = new Promise(function(k, O) {
            h.onload = k, h.onerror = O;
          }), h.addEventListener("load", function() {
            f.loading |= 1;
          }), h.addEventListener("error", function() {
            f.loading |= 2;
          }), f.loading |= 4, zo(u, t, l);
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
  function my(e, t) {
    pl.X(e, t);
    var n = pr;
    if (n && e) {
      var l = Zn(n).hoistableScripts, a = hr(e), r = l.get(a);
      r || (r = n.querySelector(si(a)), r || (e = R({ src: e, async: !0 }, t), (t = mn.get(a)) && Wc(e, t), r = n.createElement("script"), Ke(r), ht(r, "link", e), n.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, l.set(a, r));
    }
  }
  function hy(e, t) {
    pl.M(e, t);
    var n = pr;
    if (n && e) {
      var l = Zn(n).hoistableScripts, a = hr(e), r = l.get(a);
      r || (r = n.querySelector(si(a)), r || (e = R({ src: e, async: !0, type: "module" }, t), (t = mn.get(a)) && Wc(e, t), r = n.createElement("script"), Ke(r), ht(r, "link", e), n.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, l.set(a, r));
    }
  }
  function Xp(e, t, n, l) {
    var a = (a = at.current) ? No(a) : null;
    if (!a) throw Error(s(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (t = mr(n.href), n = Zn(
          a
        ).hoistableStyles, l = n.get(t), l || (l = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, l)), l) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          e = mr(n.href);
          var r = Zn(
            a
          ).hoistableStyles, u = r.get(e);
          if (u || (a = a.ownerDocument || a, u = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, r.set(e, u), (r = a.querySelector(
            ci(e)
          )) && !r._p && (u.instance = r, u.state.loading = 5), mn.has(e) || (n = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, mn.set(e, n), r || gy(
            a,
            e,
            n,
            u.state
          ))), t && l === null)
            throw Error(s(528, ""));
          return u;
        }
        if (t && l !== null)
          throw Error(s(529, ""));
        return null;
      case "script":
        return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = hr(n), n = Zn(
          a
        ).hoistableScripts, l = n.get(t), l || (l = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, l)), l) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(s(444, e));
    }
  }
  function mr(e) {
    return 'href="' + jt(e) + '"';
  }
  function ci(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function $p(e) {
    return R({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function gy(e, t, n, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? l.loading = 1 : (t = e.createElement("link"), l.preload = t, t.addEventListener("load", function() {
      return l.loading |= 1;
    }), t.addEventListener("error", function() {
      return l.loading |= 2;
    }), ht(t, "link", n), Ke(t), e.head.appendChild(t));
  }
  function hr(e) {
    return '[src="' + jt(e) + '"]';
  }
  function si(e) {
    return "script[async]" + e;
  }
  function Pp(e, t, n) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var l = e.querySelector(
            'style[data-href~="' + jt(n.href) + '"]'
          );
          if (l)
            return t.instance = l, Ke(l), l;
          var a = R({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return l = (e.ownerDocument || e).createElement(
            "style"
          ), Ke(l), ht(l, "style", a), zo(l, n.precedence, e), t.instance = l;
        case "stylesheet":
          a = mr(n.href);
          var r = e.querySelector(
            ci(a)
          );
          if (r)
            return t.state.loading |= 4, t.instance = r, Ke(r), r;
          l = $p(n), (a = mn.get(a)) && Ic(l, a), r = (e.ownerDocument || e).createElement("link"), Ke(r);
          var u = r;
          return u._p = new Promise(function(f, h) {
            u.onload = f, u.onerror = h;
          }), ht(r, "link", l), t.state.loading |= 4, zo(r, n.precedence, e), t.instance = r;
        case "script":
          return r = hr(n.src), (a = e.querySelector(
            si(r)
          )) ? (t.instance = a, Ke(a), a) : (l = n, (a = mn.get(r)) && (l = R({}, n), Wc(l, a)), e = e.ownerDocument || e, a = e.createElement("script"), Ke(a), ht(a, "link", l), e.head.appendChild(a), t.instance = a);
        case "void":
          return null;
        default:
          throw Error(s(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (l = t.instance, t.state.loading |= 4, zo(l, n.precedence, e));
    return t.instance;
  }
  function zo(e, t, n) {
    for (var l = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), a = l.length ? l[l.length - 1] : null, r = a, u = 0; u < l.length; u++) {
      var f = l[u];
      if (f.dataset.precedence === t) r = f;
      else if (r !== a) break;
    }
    r ? r.parentNode.insertBefore(e, r.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
  }
  function Ic(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Wc(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var Do = null;
  function Zp(e, t, n) {
    if (Do === null) {
      var l = /* @__PURE__ */ new Map(), a = Do = /* @__PURE__ */ new Map();
      a.set(n, l);
    } else
      a = Do, l = a.get(n), l || (l = /* @__PURE__ */ new Map(), a.set(n, l));
    if (l.has(e)) return l;
    for (l.set(e, null), n = n.getElementsByTagName(e), a = 0; a < n.length; a++) {
      var r = n[a];
      if (!(r[on] || r[Ze] || e === "link" && r.getAttribute("rel") === "stylesheet") && r.namespaceURI !== "http://www.w3.org/2000/svg") {
        var u = r.getAttribute(t) || "";
        u = e + u;
        var f = l.get(u);
        f ? f.push(r) : l.set(u, [r]);
      }
    }
    return l;
  }
  function Kp(e, t, n) {
    e = e.ownerDocument || e, e.head.insertBefore(
      n,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function yy(e, t, n) {
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
  function by(e, t, n, l) {
    if (n.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var a = mr(l.href), r = t.querySelector(
          ci(a)
        );
        if (r) {
          t = r._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Ro.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = r, Ke(r);
          return;
        }
        r = t.ownerDocument || t, l = $p(l), (a = mn.get(a)) && Ic(l, a), r = r.createElement("link"), Ke(r);
        var u = r;
        u._p = new Promise(function(f, h) {
          u.onload = f, u.onerror = h;
        }), ht(r, "link", l), n.instance = r;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (e.count++, n = Ro.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
    }
  }
  var Jc = 0;
  function vy(e, t) {
    return e.stylesheets && e.count === 0 && Lo(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
      var l = setTimeout(function() {
        if (e.stylesheets && Lo(e, e.stylesheets), e.unsuspend) {
          var r = e.unsuspend;
          e.unsuspend = null, r();
        }
      }, 6e4 + t);
      0 < e.imgBytes && Jc === 0 && (Jc = 62500 * Jg());
      var a = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Lo(e, e.stylesheets), e.unsuspend)) {
            var r = e.unsuspend;
            e.unsuspend = null, r();
          }
        },
        (e.imgBytes > Jc ? 50 : 800) + t
      );
      return e.unsuspend = n, function() {
        e.unsuspend = null, clearTimeout(l), clearTimeout(a);
      };
    } : null;
  }
  function Ro() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Lo(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var Mo = null;
  function Lo(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Mo = /* @__PURE__ */ new Map(), t.forEach(Sy, e), Mo = null, Ro.call(e));
  }
  function Sy(e, t) {
    if (!(t.state.loading & 4)) {
      var n = Mo.get(e);
      if (n) var l = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), Mo.set(e, n);
        for (var a = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), r = 0; r < a.length; r++) {
          var u = a[r];
          (u.nodeName === "LINK" || u.getAttribute("media") !== "not all") && (n.set(u.dataset.precedence, u), l = u);
        }
        l && n.set(null, l);
      }
      a = t.instance, u = a.getAttribute("data-precedence"), r = n.get(u) || l, r === l && n.set(null, a), n.set(u, a), this.count++, l = Ro.bind(this), a.addEventListener("load", l), a.addEventListener("error", l), r ? r.parentNode.insertBefore(a, r.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(a, e.firstChild)), t.state.loading |= 4;
    }
  }
  var fi = {
    $$typeof: le,
    Provider: null,
    Consumer: null,
    _currentValue: ue,
    _currentValue2: ue,
    _threadCount: 0
  };
  function wy(e, t, n, l, a, r, u, f, h) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ra(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ra(0), this.hiddenUpdates = Ra(null), this.identifierPrefix = l, this.onUncaughtError = a, this.onCaughtError = r, this.onRecoverableError = u, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = h, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Wp(e, t, n, l, a, r, u, f, h, k, O, D) {
    return e = new wy(
      e,
      t,
      n,
      u,
      h,
      k,
      O,
      D,
      f
    ), t = 1, r === !0 && (t |= 24), r = $t(3, null, null, t), e.current = r, r.stateNode = e, t = Du(), t.refCount++, e.pooledCache = t, t.refCount++, r.memoizedState = {
      element: l,
      isDehydrated: n,
      cache: t
    }, Uu(r), e;
  }
  function Jp(e) {
    return e ? (e = Xa, e) : Xa;
  }
  function em(e, t, n, l, a, r) {
    a = Jp(a), l.context === null ? l.context = a : l.pendingContext = a, l = Ml(t), l.payload = { element: n }, r = r === void 0 ? null : r, r !== null && (l.callback = r), n = Ll(e, l, t), n !== null && (Ut(n, e, t), Vr(n, e, t));
  }
  function tm(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function es(e, t) {
    tm(e, t), (e = e.alternate) && tm(e, t);
  }
  function nm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = sa(e, 67108864);
      t !== null && Ut(t, e, 67108864), es(e, 67108864);
    }
  }
  function lm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Wt();
      t = aa(t);
      var n = sa(e, t);
      n !== null && Ut(n, e, t), es(e, t);
    }
  }
  var Uo = !0;
  function Ty(e, t, n, l) {
    var a = M.T;
    M.T = null;
    var r = q.p;
    try {
      q.p = 2, ts(e, t, n, l);
    } finally {
      q.p = r, M.T = a;
    }
  }
  function ky(e, t, n, l) {
    var a = M.T;
    M.T = null;
    var r = q.p;
    try {
      q.p = 8, ts(e, t, n, l);
    } finally {
      q.p = r, M.T = a;
    }
  }
  function ts(e, t, n, l) {
    if (Uo) {
      var a = ns(l);
      if (a === null)
        Yc(
          e,
          t,
          l,
          jo,
          n
        ), rm(e, l);
      else if (Ay(
        a,
        e,
        t,
        n,
        l
      ))
        l.stopPropagation();
      else if (rm(e, l), t & 4 && -1 < Ey.indexOf(e)) {
        for (; a !== null; ) {
          var r = Dn(a);
          if (r !== null)
            switch (r.tag) {
              case 3:
                if (r = r.stateNode, r.current.memoizedState.isDehydrated) {
                  var u = Ct(r.pendingLanes);
                  if (u !== 0) {
                    var f = r;
                    for (f.pendingLanes |= 2, f.entangledLanes |= 2; u; ) {
                      var h = 1 << 31 - rt(u);
                      f.entanglements[1] |= h, u &= ~h;
                    }
                    Hn(r), (ke & 6) === 0 && (vo = st() + 500, ri(0));
                  }
                }
                break;
              case 31:
              case 13:
                f = sa(r, 2), f !== null && Ut(f, r, 2), wo(), es(r, 2);
            }
          if (r = ns(l), r === null && Yc(
            e,
            t,
            l,
            jo,
            n
          ), r === a) break;
          a = r;
        }
        a !== null && l.stopPropagation();
      } else
        Yc(
          e,
          t,
          l,
          null,
          n
        );
    }
  }
  function ns(e) {
    return e = Nr(e), ls(e);
  }
  var jo = null;
  function ls(e) {
    if (jo = null, e = Pn(e), e !== null) {
      var t = T(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (e = _(t), e !== null) return e;
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
    return jo = e, null;
  }
  function am(e) {
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
        switch (ki()) {
          case Ca:
            return 2;
          case tn:
            return 8;
          case nn:
          case Qn:
            return 32;
          case Na:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var as = !1, Xl = null, $l = null, Pl = null, di = /* @__PURE__ */ new Map(), pi = /* @__PURE__ */ new Map(), Zl = [], Ey = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function rm(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Xl = null;
        break;
      case "dragenter":
      case "dragleave":
        $l = null;
        break;
      case "mouseover":
      case "mouseout":
        Pl = null;
        break;
      case "pointerover":
      case "pointerout":
        di.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        pi.delete(t.pointerId);
    }
  }
  function mi(e, t, n, l, a, r) {
    return e === null || e.nativeEvent !== r ? (e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: l,
      nativeEvent: r,
      targetContainers: [a]
    }, t !== null && (t = Dn(t), t !== null && nm(t)), e) : (e.eventSystemFlags |= l, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
  }
  function Ay(e, t, n, l, a) {
    switch (t) {
      case "focusin":
        return Xl = mi(
          Xl,
          e,
          t,
          n,
          l,
          a
        ), !0;
      case "dragenter":
        return $l = mi(
          $l,
          e,
          t,
          n,
          l,
          a
        ), !0;
      case "mouseover":
        return Pl = mi(
          Pl,
          e,
          t,
          n,
          l,
          a
        ), !0;
      case "pointerover":
        var r = a.pointerId;
        return di.set(
          r,
          mi(
            di.get(r) || null,
            e,
            t,
            n,
            l,
            a
          )
        ), !0;
      case "gotpointercapture":
        return r = a.pointerId, pi.set(
          r,
          mi(
            pi.get(r) || null,
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
  function im(e) {
    var t = Pn(e.target);
    if (t !== null) {
      var n = T(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = _(n), t !== null) {
            e.blockedOn = t, Ar(e.priority, function() {
              lm(n);
            });
            return;
          }
        } else if (t === 31) {
          if (t = x(n), t !== null) {
            e.blockedOn = t, Ar(e.priority, function() {
              lm(n);
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
  function Ho(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = ns(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var l = new n.constructor(
          n.type,
          n
        );
        qa = l, n.target.dispatchEvent(l), qa = null;
      } else
        return t = Dn(n), t !== null && nm(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function om(e, t, n) {
    Ho(e) && n.delete(t);
  }
  function xy() {
    as = !1, Xl !== null && Ho(Xl) && (Xl = null), $l !== null && Ho($l) && ($l = null), Pl !== null && Ho(Pl) && (Pl = null), di.forEach(om), pi.forEach(om);
  }
  function qo(e, t) {
    e.blockedOn === t && (e.blockedOn = null, as || (as = !0, o.unstable_scheduleCallback(
      o.unstable_NormalPriority,
      xy
    )));
  }
  var Bo = null;
  function um(e) {
    Bo !== e && (Bo = e, o.unstable_scheduleCallback(
      o.unstable_NormalPriority,
      function() {
        Bo === e && (Bo = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t], l = e[t + 1], a = e[t + 2];
          if (typeof l != "function") {
            if (ls(l || n) === null)
              continue;
            break;
          }
          var r = Dn(n);
          r !== null && (e.splice(t, 3), t -= 3, nc(
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
  function gr(e) {
    function t(h) {
      return qo(h, e);
    }
    Xl !== null && qo(Xl, e), $l !== null && qo($l, e), Pl !== null && qo(Pl, e), di.forEach(t), pi.forEach(t);
    for (var n = 0; n < Zl.length; n++) {
      var l = Zl[n];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < Zl.length && (n = Zl[0], n.blockedOn === null); )
      im(n), n.blockedOn === null && Zl.shift();
    if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
      for (l = 0; l < n.length; l += 3) {
        var a = n[l], r = n[l + 1], u = a[it] || null;
        if (typeof r == "function")
          u || um(n);
        else if (u) {
          var f = null;
          if (r && r.hasAttribute("formAction")) {
            if (a = r, u = r[it] || null)
              f = u.formAction;
            else if (ls(a) !== null) continue;
          } else f = u.action;
          typeof f == "function" ? n[l + 1] = f : (n.splice(l, 3), l -= 3), um(n);
        }
      }
  }
  function cm() {
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
  function rs(e) {
    this._internalRoot = e;
  }
  Yo.prototype.render = rs.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(s(409));
    var n = t.current, l = Wt();
    em(n, l, e, t, null, null);
  }, Yo.prototype.unmount = rs.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      em(e.current, 2, null, e, null, null), wo(), t[Tl] = null;
    }
  };
  function Yo(e) {
    this._internalRoot = e;
  }
  Yo.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Oi();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Zl.length && t !== 0 && t < Zl[n].priority; n++) ;
      Zl.splice(n, 0, e), n === 0 && im(e);
    }
  };
  var sm = c.version;
  if (sm !== "19.2.6")
    throw Error(
      s(
        527,
        sm,
        "19.2.6"
      )
    );
  q.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
    return e = U(t), e = e !== null ? L(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var _y = {
    bundleType: 0,
    version: "19.2.6",
    rendererPackageName: "react-dom",
    currentDispatcherRef: M,
    reconcilerVersion: "19.2.6"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Go = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Go.isDisabled && Go.supportsFiber)
      try {
        Fn = Go.inject(
          _y
        ), Pe = Go;
      } catch {
      }
  }
  return Tm.createRoot = function(e, t) {
    if (!y(e)) throw Error(s(299));
    var n = !1, l = "", a = yd, r = bd, u = vd;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onUncaughtError !== void 0 && (a = t.onUncaughtError), t.onCaughtError !== void 0 && (r = t.onCaughtError), t.onRecoverableError !== void 0 && (u = t.onRecoverableError)), t = Wp(
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
      cm
    ), e[Tl] = t.current, Bc(e), new rs(t);
  }, Tm.hydrateRoot = function(e, t, n) {
    if (!y(e)) throw Error(s(299));
    var l = !1, a = "", r = yd, u = bd, f = vd, h = null;
    return n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onUncaughtError !== void 0 && (r = n.onUncaughtError), n.onCaughtError !== void 0 && (u = n.onCaughtError), n.onRecoverableError !== void 0 && (f = n.onRecoverableError), n.formState !== void 0 && (h = n.formState)), t = Wp(
      e,
      1,
      !0,
      t,
      n ?? null,
      l,
      a,
      h,
      r,
      u,
      f,
      cm
    ), t.context = Jp(null), n = t.current, l = Wt(), l = aa(l), a = Ml(l), a.callback = null, Ll(n, a, l), n = l, t.current.lanes = n, wl(t, n), Hn(t), e[Tl] = t.current, Bc(e), new Yo(t);
  }, Tm.version = "19.2.6", Tm;
}
var Ov;
function mE() {
  if (Ov) return d0.exports;
  Ov = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (o) {
        console.error(o);
      }
  }
  return i(), d0.exports = pE(), d0.exports;
}
mE();
(function() {
  var i = `@charset "UTF-8";.glide{position:relative;width:100%;box-sizing:border-box}.glide *{box-sizing:inherit}.glide__track{overflow:hidden}.glide__slides{position:relative;width:100%;list-style:none;backface-visibility:hidden;transform-style:preserve-3d;touch-action:pan-Y;overflow:hidden;margin:0;padding:0;white-space:nowrap;display:flex;flex-wrap:nowrap;will-change:transform}.glide__slides--dragging{-webkit-user-select:none;user-select:none}.glide__slide{width:100%;height:100%;flex-shrink:0;white-space:normal;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent}.glide__slide a{-webkit-user-select:none;user-select:none;-webkit-user-drag:none;-moz-user-select:none;-ms-user-select:none}.glide__arrows,.glide__bullets{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}.glide--rtl{direction:rtl}@media only screen and (min-width:1260px){.container .aligned-carousel{margin-left:-124px!important}}.glide{display:flex;flex-direction:column;gap:32px;position:relative}[data-image-auto-size=true] .glide__slides .glide__slide{height:auto;position:relative;display:inline-flex;justify-content:center}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img{display:flex;width:100%;max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img{flex-grow:1;object-fit:cover}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img.uds-img{max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img figure.uds-figure{display:flex;justify-content:space-between;flex-direction:column}.glide .glide__track{position:relative}.glide .glide__track .glide__slides{margin-bottom:0;touch-action:auto}.glide .glide__track .glide__slides .glide__slide .card{width:100%}@media only screen and (min-width:576px){.glide[data-has-shadow=true] .glide__track.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}}.glide__arrows{z-index:2;align-self:center}.glide__arrows .glide__arrow{color:#191919;width:4rem;height:4rem;margin:0 .5rem;background-color:#e8e8e8;border:1px solid #d0d0d0;border-radius:50%;font-size:1.3rem;text-shadow:0 .25em .5em rgba(0,0,0,.1);opacity:1;cursor:pointer;transition:opacity .15s ease,border .3s ease-in-out;line-height:1}.glide__arrows .glide__arrow.glide__arrow--disabled{color:#e8e8e8;background-color:#fafafa;border:1px solid #e8e8e8;opacity:1}.glide__arrows .glide__arrow:focus{outline:none}.glide__arrows .glide__arrow:hover{border-color:#fff}.glide__arrows .glide__arrow--left{left:2em}.glide__arrows .glide__arrow--right{right:2em}.glide__arrows .glide__arrow--disabled{opacity:.33}.glide__bullets{z-index:2;list-style:none;max-width:100%;display:flex;justify-content:center}.glide__bullet{transition:all .3s ease-in-out;background-color:#d0d0d0;width:1rem;height:1rem;padding:0;border-radius:50%;border:2px solid transparent;cursor:pointer;line-height:0;margin:.375rem}.glide__bullet:focus{outline:none}.glide__bullet:hover{border:1px solid #d0d0d0;background-color:#191919}.glide__bullet--active{background-color:#191919}.glide.gray-dark-bg .glide__bullet:focus{background-color:#ffc627}.glide.gray-dark-bg .glide__bullet:hover{border:1px solid #ffc627;background-color:#333}.glide.gray-dark-bg .glide__bullet--active{background-color:#ffc627}.glide.aligned-carousel{width:1448px;margin:auto}.glide.image-gallery{gap:0;overflow:hidden}.glide.image-gallery .glide__track{border:1px solid #d0d0d0}.glide.image-gallery .glide__track:after{content:none}.glide.image-gallery .glide__track .glide__slides li.glide__slide{display:list-item}.glide.image-gallery .glide__track .glide__slides{margin-bottom:0;height:100%}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img{height:100%}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img img{object-fit:cover;border:none}.glide.image-gallery .image-gallery-action-area{border:1px solid #d0d0d0;border-top:0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .image-navigator{border-bottom:1px solid #d0d0d0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text{padding:1rem 0;display:inline-block}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text>div{height:auto!important}.glide.image-gallery figcaption{padding:0 .75rem;font-size:.75rem}.glide.image-gallery figcaption h2{font-size:1.5rem;line-height:1.75rem;letter-spacing:-.0525rem}.glide.image-gallery .image-navigator{position:relative}.glide.image-gallery .image-navigator .image-navigator-images{min-height:64px;padding-top:1rem;padding-bottom:1rem;width:100%;margin:auto;overflow:hidden}.glide.image-gallery .image-navigator .image-navigator-images.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider{position:relative;left:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets{position:relative}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container{position:relative;margin:0 .5rem;height:48px;border:0;padding:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:first-child{margin-left:16rem}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container .bullet-image{flex-basis:auto;width:88px;height:100%;border-radius:0;border:0;z-index:2;object-fit:cover;margin:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:focus{box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .glide__bullet--active{background-color:transparent;border:5px solid #ffc627}.glide.image-gallery .image-navigator .glide__arrows{width:100%;display:flex;justify-content:space-between;align-items:center}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow{width:2.5rem;height:2.5rem;display:flex;align-items:center;justify-content:center;z-index:3;position:absolute;background-color:#fff}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow:hover{border-color:#d0d0d0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow .arrow-icon{font-size:1rem}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--prev{left:0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--next{right:0}@media only screen and (max-width:576px){.glide{gap:21px}.glide:not(.glide.image-gallery) .glide__bullets{display:none}.glide.image-gallery{width:100%;margin:auto!important}.glide.image-gallery .image-navigator .image-navigator-images .glide__arrows .glide__arrow{display:none}}@media only screen and (max-width:1260px){.glide.aligned-carousel{width:100%}}.glide--swipeable{cursor:grab;cursor:-moz-grab;cursor:-webkit-grab}.glide--dragging{cursor:grabbing;cursor:-moz-grabbing;cursor:-webkit-grabbing}.glide[data-remove-side-background=true]:after,.glide[data-remove-side-background=true]:before{content:none}.glide button:focus,.glide a:focus,.glide input:focus,.glide textarea:focus,.glide select:focus{outline:none!important;box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.gray-dark-bg button:focus,.glide.gray-dark-bg a:focus,.glide.gray-dark-bg input:focus,.glide.gray-dark-bg textarea:focus,.glide.gray-dark-bg select:focus{box-shadow:0 0 0 3px #333,0 0 0 5px #ffc627!important}.glide.image-gallery,.glide.image-carousel{margin:auto}.glide.image-gallery[role=figure],.glide.image-gallery figure.uds-figure,.glide.image-carousel[role=figure],.glide.image-carousel figure.uds-figure{margin:0}.glide.image-gallery[role=figure] figcaption *,.glide.image-gallery[role=figure] .uds-caption-text,.glide.image-gallery figure.uds-figure figcaption *,.glide.image-gallery figure.uds-figure .uds-caption-text,.glide.image-carousel[role=figure] figcaption *,.glide.image-carousel[role=figure] .uds-caption-text,.glide.image-carousel figure.uds-figure figcaption *,.glide.image-carousel figure.uds-figure .uds-caption-text{color:#191919;max-width:100%}
`, o = document.createElement("style");
  o.type = "text/css", o.styleSheet ? o.styleSheet.cssText = i : o.appendChild(document.createTextNode(i)), document.head.appendChild(o);
})();
const Cv = {
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
}, Nv = [
  "eventTopics",
  "eventUnits",
  "interests",
  "audiences",
  "eventTypes",
  "collegeUnit"
], zv = (i) => i.toLowerCase().split(" ").join("_"), hE = (i, o) => {
  if (!o) return !0;
  const c = o.split(",");
  for (let d = 0; d < c.length; d += 1) {
    const s = zv(c[d]);
    for (let y = 0; y < Nv.length; y += 1) {
      const T = Nv[y];
      if (zv(i[T] || "").includes(s)) return !0;
    }
  }
  return !1;
}, gE = (i) => ({
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
}), Dv = "No events to show.", eb = ({
  children: i,
  header: o,
  ctaButton: c,
  dataSource: d,
  maxItems: s,
  noFeedText: y = Dv
}) => (
  // Calling the unity-react-core component to fetch the data, transform it and filter it
  // We provide in the renderBody the view specified before in the parent component, recieved as "children" in this component.
  // We provide in the renderHeader the unity-react-core header, if it is desired to be shown
  // We provide the maxItems prop to limit the items rendered
  // We provide the dataSource to read the url to fetch the data
  // We provide the defaultProps to use some needed default values in case they are not provided
  /* @__PURE__ */ Jl.jsx(
    iS,
    {
      renderHeader: o && c ? /* @__PURE__ */ Jl.jsx(
        uS,
        {
          header: o,
          ctaButton: c,
          defaultProps: Cv
        }
      ) : null,
      renderBody: /* @__PURE__ */ Jl.jsx(cS, { children: i }),
      dataTransformer: gE,
      dataFilter: hE,
      dataSource: d,
      defaultProps: Cv,
      noFeedText: y.trim() ? y : Dv,
      maxItems: s
    }
  )
);
eb.propTypes = {
  header: W0,
  ctaButton: J0,
  dataSource: oS,
  maxItems: xt.number,
  noFeedText: xt.string,
  children: xt.element
};
const yE = xt.shape({
  color: xt.oneOf(["white", "dark"]),
  text: xt.string
}), bE = xt.shape({
  color: xt.oneOf(["gold", "maroon", "gray", "dark"]),
  text: xt.string,
  url: xt.string
}), vE = xt.shape({
  url: xt.string.isRequired,
  filters: xt.string
}).isRequired, sS = {
  header: yE,
  ctaButton: bE,
  dataSource: vE,
  maxItems: xt.number,
  noFeedText: xt.string
}, SE = (i) => i.toLocaleDateString("en-US", {
  timeZone: "UTC",
  weekday: "long",
  month: "long",
  day: "numeric"
}), Rv = (i) => i.toLocaleString("en-US", {
  timeZone: "UTC"
}), L0 = (i) => {
  let o = i.split("T");
  return o = o.length > 1 ? o.join("T") : `${o[0].split(":")[0]}T00:00:00Z`, o;
}, Mv = (i) => {
  let o = i.getHours(), c = i.getMinutes();
  const d = o >= 12 ? "p.m." : "a.m.";
  return o %= 12, o = o || 12, c = c < 10 ? `0${c}` : c, `${o}:${c} ${d}`;
}, fS = (i, o) => {
  const c = L0(i);
  let d = Rv(new Date(c));
  if (d = Mv(new Date(d)), !o || i === o)
    return d;
  const s = L0(o);
  let y = Rv(new Date(s));
  return y = Mv(new Date(y)), `${d} to ${y}`;
}, fh = (i, o) => {
  const c = L0(i);
  return {
    ISO: c.split("T")[0],
    COMPLETE: SE(new Date(c))
  }[o];
};
function wE(i) {
  var o = /* @__PURE__ */ Object.create(null);
  return function(c) {
    return o[c] === void 0 && (o[c] = i(c)), o[c];
  };
}
var TE = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, kE = /* @__PURE__ */ wE(
  function(i) {
    return TE.test(i) || i.charCodeAt(0) === 111 && i.charCodeAt(1) === 110 && i.charCodeAt(2) < 91;
  }
  /* Z+1 */
), gn = "-ms-", zm = "-moz-", Et = "-webkit-", dS = "comm", wh = "rule", tb = "decl", EE = "@import", AE = "@namespace", pS = "@keyframes", xE = "@layer", mS = Math.abs, nb = String.fromCharCode, U0 = Object.assign;
function _E(i, o) {
  return hl(i, 0) ^ 45 ? (((o << 2 ^ hl(i, 0)) << 2 ^ hl(i, 1)) << 2 ^ hl(i, 2)) << 2 ^ hl(i, 3) : 0;
}
function hS(i) {
  return i.trim();
}
function Po(i, o) {
  return (i = o.exec(i)) ? i[0] : i;
}
function nt(i, o, c) {
  return i.replace(o, c);
}
function th(i, o, c) {
  return i.indexOf(o, c);
}
function hl(i, o) {
  return i.charCodeAt(o) | 0;
}
function bs(i, o, c) {
  return i.slice(o, c);
}
function gi(i) {
  return i.length;
}
function gS(i) {
  return i.length;
}
function _m(i, o) {
  return o.push(i), i;
}
function OE(i, o) {
  return i.map(o).join("");
}
function Lv(i, o) {
  return i.filter(function(c) {
    return !Po(c, o);
  });
}
var Th = 1, Ds = 1, yS = 0, Tr = 0, Gn = 0, Ls = "";
function kh(i, o, c, d, s, y, T, _) {
  return { value: i, root: o, parent: c, type: d, props: s, children: y, line: Th, column: Ds, length: T, return: "", siblings: _ };
}
function Jo(i, o) {
  return U0(kh("", null, null, "", null, null, 0, i.siblings), i, { length: -i.length }, o);
}
function Es(i) {
  for (; i.root; )
    i = Jo(i.root, { children: [i] });
  _m(i, i.siblings);
}
function CE() {
  return Gn;
}
function NE() {
  return Gn = Tr > 0 ? hl(Ls, --Tr) : 0, Ds--, Gn === 10 && (Ds = 1, Th--), Gn;
}
function bi() {
  return Gn = Tr < yS ? hl(Ls, Tr++) : 0, Ds++, Gn === 10 && (Ds = 1, Th++), Gn;
}
function lu() {
  return hl(Ls, Tr);
}
function nh() {
  return Tr;
}
function Eh(i, o) {
  return bs(Ls, i, o);
}
function Mm(i) {
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
function zE(i) {
  return Th = Ds = 1, yS = gi(Ls = i), Tr = 0, [];
}
function DE(i) {
  return Ls = "", i;
}
function p0(i) {
  return hS(Eh(Tr - 1, j0(i === 91 ? i + 2 : i === 40 ? i + 1 : i)));
}
function RE(i) {
  for (; (Gn = lu()) && Gn < 33; )
    bi();
  return Mm(i) > 2 || Mm(Gn) > 3 ? "" : " ";
}
function ME(i, o) {
  for (; --o && bi() && !(Gn < 48 || Gn > 102 || Gn > 57 && Gn < 65 || Gn > 70 && Gn < 97); )
    ;
  return Eh(i, nh() + (o < 6 && lu() == 32 && bi() == 32));
}
function j0(i) {
  for (; bi(); )
    switch (Gn) {
      // ] ) " '
      case i:
        return Tr;
      // " '
      case 34:
      case 39:
        i !== 34 && i !== 39 && j0(Gn);
        break;
      // (
      case 40:
        i === 41 && j0(i);
        break;
      // \
      case 92:
        bi();
        break;
    }
  return Tr;
}
function LE(i, o) {
  for (; bi() && i + Gn !== 57; )
    if (i + Gn === 84 && lu() === 47)
      break;
  return "/*" + Eh(o, Tr - 1) + "*" + nb(i === 47 ? i : bi());
}
function UE(i) {
  for (; !Mm(lu()); )
    bi();
  return Eh(i, Tr);
}
function jE(i) {
  return DE(lh("", null, null, null, [""], i = zE(i), 0, [0], i));
}
function lh(i, o, c, d, s, y, T, _, x) {
  for (var N = 0, U = 0, L = T, R = 0, ne = 0, G = 0, F = 1, W = 1, ee = 1, Y = 0, ve = "", le = s, ae = y, $ = d, B = ve; W; )
    switch (G = Y, Y = bi()) {
      // (
      case 40:
        if (G != 108 && hl(B, L - 1) == 58) {
          th(B += nt(p0(Y), "&", "&\f"), "&\f", mS(N ? _[N - 1] : 0)) != -1 && (ee = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        B += p0(Y);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        B += RE(G);
        break;
      // \
      case 92:
        B += ME(nh() - 1, 7);
        continue;
      // /
      case 47:
        switch (lu()) {
          case 42:
          case 47:
            _m(HE(LE(bi(), nh()), o, c, x), x), (Mm(G || 1) == 5 || Mm(lu() || 1) == 5) && gi(B) && bs(B, -1, void 0) !== " " && (B += " ");
            break;
          default:
            B += "/";
        }
        break;
      // {
      case 123 * F:
        _[N++] = gi(B) * ee;
      // } ; \0
      case 125 * F:
      case 59:
      case 0:
        switch (Y) {
          // \0 }
          case 0:
          case 125:
            W = 0;
          // ;
          case 59 + U:
            ee == -1 && (B = nt(B, /\f/g, "")), ne > 0 && (gi(B) - L || F === 0 && G === 47) && _m(ne > 32 ? jv(B + ";", d, c, L - 1, x) : jv(nt(B, " ", "") + ";", d, c, L - 2, x), x);
            break;
          // @ ;
          case 59:
            B += ";";
          // { rule/at-rule
          default:
            if (_m($ = Uv(B, o, c, N, U, s, _, ve, le = [], ae = [], L, y), y), Y === 123)
              if (U === 0)
                lh(B, o, $, $, le, y, L, _, ae);
              else {
                switch (R) {
                  // c(ontainer)
                  case 99:
                    if (hl(B, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if (hl(B, 2) === 97) break;
                  default:
                    U = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                U ? lh(i, $, $, d && _m(Uv(i, $, $, 0, 0, s, _, ve, s, le = [], L, ae), ae), s, ae, L, _, d ? le : ae) : lh(B, $, $, $, [""], ae, 0, _, ae);
              }
        }
        N = U = ne = 0, F = ee = 1, ve = B = "", L = T;
        break;
      // :
      case 58:
        L = 1 + gi(B), ne = G;
      default:
        if (F < 1) {
          if (Y == 123)
            --F;
          else if (Y == 125 && F++ == 0 && NE() == 125)
            continue;
        }
        switch (B += nb(Y), Y * F) {
          // &
          case 38:
            ee = U > 0 ? 1 : (B += "\f", -1);
            break;
          // ,
          case 44:
            _[N++] = (gi(B) - 1) * ee, ee = 1;
            break;
          // @
          case 64:
            lu() === 45 && (B += p0(bi())), R = lu(), U = L = gi(ve = B += UE(nh())), Y++;
            break;
          // -
          case 45:
            G === 45 && gi(B) == 2 && (F = 0);
        }
    }
  return y;
}
function Uv(i, o, c, d, s, y, T, _, x, N, U, L) {
  for (var R = s - 1, ne = s === 0 ? y : [""], G = gS(ne), F = 0, W = 0, ee = 0; F < d; ++F)
    for (var Y = 0, ve = bs(i, R + 1, R = mS(W = T[F])), le = i; Y < G; ++Y)
      (le = hS(W > 0 ? ne[Y] + " " + ve : nt(ve, /&\f/g, ne[Y]))) && (x[ee++] = le);
  return kh(i, o, c, s === 0 ? wh : _, x, N, U, L);
}
function HE(i, o, c, d) {
  return kh(i, o, c, dS, nb(CE()), bs(i, 2, -2), 0, d);
}
function jv(i, o, c, d, s) {
  return kh(i, o, c, tb, bs(i, 0, d), bs(i, d + 1, -1), d, s);
}
function bS(i, o, c) {
  switch (_E(i, o)) {
    // color-adjust
    case 5103:
      return Et + "print-" + i + i;
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
      return Et + i + i;
    // mask-composite
    case 4855:
      return Et + i.replace("add", "source-over").replace("substract", "source-out").replace("intersect", "source-in").replace("exclude", "xor") + i;
    // tab-size
    case 4789:
      return zm + i + i;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Et + i + zm + i + gn + i + i;
    // writing-mode
    case 5936:
      switch (hl(i, o + 11)) {
        // vertical-l(r)
        case 114:
          return Et + i + gn + nt(i, /[svh]\w+-[tblr]{2}/, "tb") + i;
        // vertical-r(l)
        case 108:
          return Et + i + gn + nt(i, /[svh]\w+-[tblr]{2}/, "tb-rl") + i;
        // horizontal(-)tb
        case 45:
          return Et + i + gn + nt(i, /[svh]\w+-[tblr]{2}/, "lr") + i;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return Et + i + gn + i + i;
    // order
    case 6165:
      return Et + i + gn + "flex-" + i + i;
    // align-items
    case 5187:
      return Et + i + nt(i, /(\w+).+(:[^]+)/, Et + "box-$1$2" + gn + "flex-$1$2") + i;
    // align-self
    case 5443:
      return Et + i + gn + "flex-item-" + nt(i, /flex-|-self/g, "") + (Po(i, /flex-|baseline/) ? "" : gn + "grid-row-" + nt(i, /flex-|-self/g, "")) + i;
    // align-content
    case 4675:
      return Et + i + gn + "flex-line-pack" + nt(i, /align-content|flex-|-self/g, "") + i;
    // flex-shrink
    case 5548:
      return Et + i + gn + nt(i, "shrink", "negative") + i;
    // flex-basis
    case 5292:
      return Et + i + gn + nt(i, "basis", "preferred-size") + i;
    // flex-grow
    case 6060:
      return Et + "box-" + nt(i, "-grow", "") + Et + i + gn + nt(i, "grow", "positive") + i;
    // transition
    case 4554:
      return Et + nt(i, /([^-])(transform)/g, "$1" + Et + "$2") + i;
    // cursor
    case 6187:
      return nt(nt(nt(i, /(zoom-|grab)/, Et + "$1"), /(image-set)/, Et + "$1"), i, "") + i;
    // background, background-image
    case 5495:
    case 3959:
      return nt(i, /(image-set\([^]*)/, Et + "$1$`$1");
    // justify-content
    case 4968:
      return nt(nt(i, /(.+:)(flex-)?(.*)/, Et + "box-pack:$3" + gn + "flex-pack:$3"), /space-between/, "justify") + Et + i + i;
    // justify-self
    case 4200:
      if (!Po(i, /flex-|baseline/)) return gn + "grid-column-align" + bs(i, o) + i;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return gn + nt(i, "template-", "") + i;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return c && c.some(function(d, s) {
        return o = s, Po(d.props, /grid-\w+-end/);
      }) ? ~th(i + (c = c[o].value), "span", 0) ? i : gn + nt(i, "-start", "") + i + gn + "grid-row-span:" + (~th(c, "span", 0) ? Po(c, /\d+/) : +Po(c, /\d+/) - +Po(i, /\d+/)) + ";" : gn + nt(i, "-start", "") + i;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return c && c.some(function(d) {
        return Po(d.props, /grid-\w+-start/);
      }) ? i : gn + nt(nt(i, "-end", "-span"), "span ", "") + i;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return nt(i, /(.+)-inline(.+)/, Et + "$1$2") + i;
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
      if (gi(i) - 1 - o > 6)
        switch (hl(i, o + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (hl(i, o + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return nt(i, /(.+:)(.+)-([^]+)/, "$1" + Et + "$2-$3$1" + zm + (hl(i, o + 3) == 108 ? "$3" : "$2-$3")) + i;
          // (s)tretch
          case 115:
            return ~th(i, "stretch", 0) ? bS(nt(i, "stretch", "fill-available"), o, c) + i : i;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return nt(i, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(d, s, y, T, _, x, N) {
        return gn + s + ":" + y + N + (T ? gn + s + "-span:" + (_ ? x : +x - +y) + N : "") + i;
      });
    // position: sticky
    case 4949:
      if (hl(i, o + 6) === 121)
        return nt(i, ":", ":" + Et) + i;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (hl(i, hl(i, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return nt(i, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + Et + (hl(i, 14) === 45 ? "inline-" : "") + "box$3$1" + Et + "$2$3$1" + gn + "$2box$3") + i;
        // (inline-)?gri(d)
        case 100:
          return nt(i, ":", ":" + gn) + i;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return nt(i, "scroll-", "scroll-snap-") + i;
  }
  return i;
}
function dh(i, o) {
  for (var c = "", d = 0; d < i.length; d++)
    c += o(i[d], d, i, o) || "";
  return c;
}
function qE(i, o, c, d) {
  switch (i.type) {
    case xE:
      if (i.children.length) break;
    case EE:
    case AE:
    case tb:
      return i.return = i.return || i.value;
    case dS:
      return "";
    case pS:
      return i.return = i.value + "{" + dh(i.children, d) + "}";
    case wh:
      if (!gi(i.value = i.props.join(","))) return "";
  }
  return gi(c = dh(i.children, d)) ? i.return = i.value + "{" + c + "}" : "";
}
function BE(i) {
  var o = gS(i);
  return function(c, d, s, y) {
    for (var T = "", _ = 0; _ < o; _++)
      T += i[_](c, d, s, y) || "";
    return T;
  };
}
function YE(i) {
  return function(o) {
    o.root || (o = o.return) && i(o);
  };
}
function GE(i, o, c, d) {
  if (i.length > -1 && !i.return)
    switch (i.type) {
      case tb:
        i.return = bS(i.value, i.length, c);
        return;
      case pS:
        return dh([Jo(i, { value: nt(i.value, "@", "@" + Et) })], d);
      case wh:
        if (i.length)
          return OE(c = i.props, function(s) {
            switch (Po(s, d = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                Es(Jo(i, { props: [nt(s, /:(read-\w+)/, ":" + zm + "$1")] })), Es(Jo(i, { props: [s] })), U0(i, { props: Lv(c, d) });
                break;
              // :placeholder
              case "::placeholder":
                Es(Jo(i, { props: [nt(s, /:(plac\w+)/, ":" + Et + "input-$1")] })), Es(Jo(i, { props: [nt(s, /:(plac\w+)/, ":" + zm + "$1")] })), Es(Jo(i, { props: [nt(s, /:(plac\w+)/, gn + "input-$1")] })), Es(Jo(i, { props: [s] })), U0(i, { props: Lv(c, d) });
                break;
            }
            return "";
          });
    }
}
var qt = { env: { NODE_ENV: "production" } }, m0, h0;
const vs = typeof qt < "u" && qt.env !== void 0 && (qt.env.REACT_APP_SC_ATTR || qt.env.SC_ATTR) || "data-styled", vS = "active", SS = "data-styled-version", Ah = "6.4.2", lb = `/*!sc*/
`, Dm = typeof window < "u" && typeof document < "u";
function Hv(i) {
  if (typeof qt < "u" && qt.env !== void 0) {
    const o = qt.env[i];
    if (o !== void 0 && o !== "") return o !== "false";
  }
}
const VE = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : (h0 = (m0 = Hv("REACT_APP_SC_DISABLE_SPEEDY")) !== null && m0 !== void 0 ? m0 : Hv("SC_DISABLE_SPEEDY")) !== null && h0 !== void 0 ? h0 : typeof qt < "u" && qt.env !== void 0 && qt.env.NODE_ENV !== "production"), QE = "sc-keyframes-", FE = qt.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function Hm(i, ...o) {
  return qt.env.NODE_ENV === "production" ? new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${i} for more information.${o.length > 0 ? ` Args: ${o.join(", ")}` : ""}`) : new Error((function(...c) {
    let d = c[0];
    const s = [];
    for (let y = 1, T = c.length; y < T; y += 1) s.push(c[y]);
    return s.forEach((y) => {
      d = d.replace(/%[a-z]/, y);
    }), d;
  })(FE[i], ...o).trim());
}
const XE = 1 << 30;
let ah = /* @__PURE__ */ new Map(), ph = /* @__PURE__ */ new Map(), rh = 1;
const Fm = (i) => {
  if (ah.has(i)) return ah.get(i);
  for (; ph.has(rh); ) rh++;
  const o = rh++;
  if (qt.env.NODE_ENV !== "production" && ((0 | o) < 0 || o > XE)) throw Hm(16, `${o}`);
  return ah.set(i, o), ph.set(o, i), o;
}, $E = (i) => ph.get(i), PE = (i, o) => {
  rh = o + 1, ah.set(i, o), ph.set(o, i);
}, qv = /invalid hook call/i, Xm = /* @__PURE__ */ new Set(), ZE = (i, o) => {
  if (qt.env.NODE_ENV !== "production") {
    const c = `The component ${i}${o ? ` with the id of "${o}"` : ""} has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, d = console.error;
    try {
      let s = !0;
      console.error = (y, ...T) => {
        qv.test(y) ? (s = !1, Xm.delete(c)) : d(y, ...T);
      }, typeof _t.useState == "function" && _t.useState(null), s && !Xm.has(c) && (console.warn(c), Xm.add(c));
    } catch (s) {
      qv.test(s.message) && Xm.delete(c);
    } finally {
      console.error = d;
    }
  }
}, ab = Object.freeze([]), Rs = Object.freeze({});
function KE(i, o, c = Rs) {
  return i.theme !== c.theme && i.theme || o || c.theme;
}
const IE = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, WE = /(^-|-$)/g;
function wS(i) {
  return i.replace(IE, "-").replace(WE, "");
}
const JE = /(a)(d)/gi, Bv = (i) => String.fromCharCode(i + (i > 25 ? 39 : 97));
function TS(i) {
  let o, c = "";
  for (o = Math.abs(i); o > 52; o = o / 52 | 0) c = Bv(o % 52) + c;
  return (Bv(o % 52) + c).replace(JE, "$1-$2");
}
const H0 = 5381, ds = (i, o) => {
  let c = o.length;
  for (; c; ) i = 33 * i ^ o.charCodeAt(--c);
  return i;
}, kS = (i) => ds(H0, i);
function eA(i) {
  return TS(kS(i) >>> 0);
}
function rb(i) {
  return qt.env.NODE_ENV !== "production" && typeof i == "string" && i || i.displayName || i.name || "Component";
}
function ih(i) {
  return typeof i == "string" && (qt.env.NODE_ENV === "production" || i.charAt(0) === i.charAt(0).toLowerCase());
}
function tA(i) {
  return ih(i) ? `styled.${i}` : `Styled(${rb(i)})`;
}
const ES = Symbol.for("react.memo"), nA = Symbol.for("react.forward_ref"), lA = { contextType: !0, defaultProps: !0, displayName: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, propTypes: !0, type: !0 }, aA = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, AS = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, rA = { [nA]: { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, [ES]: AS };
function Yv(i) {
  return ("type" in (o = i) && o.type.$$typeof) === ES ? AS : "$$typeof" in i ? rA[i.$$typeof] : lA;
  var o;
}
const iA = Object.defineProperty, oA = Object.getOwnPropertyNames, uA = Object.getOwnPropertySymbols, cA = Object.getOwnPropertyDescriptor, sA = Object.getPrototypeOf, fA = Object.prototype;
function xS(i, o, c) {
  if (typeof o != "string") {
    const d = sA(o);
    d && d !== fA && xS(i, d, c);
    const s = oA(o).concat(uA(o)), y = Yv(i), T = Yv(o);
    for (let _ = 0; _ < s.length; ++_) {
      const x = s[_];
      if (!(x in aA || c && c[x] || T && x in T || y && x in y)) {
        const N = cA(o, x);
        try {
          iA(i, x, N);
        } catch {
        }
      }
    }
  }
  return i;
}
function xh(i) {
  return typeof i == "function";
}
const dA = Symbol.for("react.forward_ref");
function _S(i) {
  return i != null && (typeof i == "object" || typeof i == "function") && i.$$typeof === dA && "styledComponentId" in i;
}
function Om(i, o) {
  return i && o ? i + " " + o : i || o || "";
}
function Gv(i, o) {
  return i.join("");
}
function Ss(i) {
  return i !== null && typeof i == "object" && i.constructor.name === Object.name && !("props" in i && i.$$typeof);
}
function q0(i, o, c = !1) {
  if (!c && !Ss(i) && !Array.isArray(i)) return o;
  if (Array.isArray(o)) for (let d = 0; d < o.length; d++) i[d] = q0(i[d], o[d]);
  else if (Ss(o)) for (const d in o) i[d] = q0(i[d], o[d]);
  return i;
}
function OS(i, o) {
  Object.defineProperty(i, "toString", { value: o });
}
const pA = class {
  constructor(i) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = i, this._cGroup = 0, this._cIndex = 0;
  }
  indexOfGroup(i) {
    if (i === this._cGroup) return this._cIndex;
    let o = this._cIndex;
    if (i > this._cGroup) for (let c = this._cGroup; c < i; c++) o += this.groupSizes[c];
    else for (let c = this._cGroup - 1; c >= i; c--) o -= this.groupSizes[c];
    return this._cGroup = i, this._cIndex = o, o;
  }
  insertRules(i, o) {
    if (i >= this.groupSizes.length) {
      const s = this.groupSizes, y = s.length;
      let T = y;
      for (; i >= T; ) if (T <<= 1, T < 0) throw Hm(16, `${i}`);
      this.groupSizes = new Uint32Array(T), this.groupSizes.set(s), this.length = T;
      for (let _ = y; _ < T; _++) this.groupSizes[_] = 0;
    }
    let c = this.indexOfGroup(i + 1), d = 0;
    for (let s = 0, y = o.length; s < y; s++) this.tag.insertRule(c, o[s]) && (this.groupSizes[i]++, c++, d++);
    d > 0 && this._cGroup > i && (this._cIndex += d);
  }
  clearGroup(i) {
    if (i < this.length) {
      const o = this.groupSizes[i], c = this.indexOfGroup(i), d = c + o;
      this.groupSizes[i] = 0;
      for (let s = c; s < d; s++) this.tag.deleteRule(c);
      o > 0 && this._cGroup > i && (this._cIndex -= o);
    }
  }
  getGroup(i) {
    let o = "";
    if (i >= this.length || this.groupSizes[i] === 0) return o;
    const c = this.groupSizes[i], d = this.indexOfGroup(i), s = d + c;
    for (let y = d; y < s; y++) o += this.tag.getRule(y) + lb;
    return o;
  }
}, mA = `style[${vs}][${SS}="${Ah}"]`, hA = new RegExp(`^${vs}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`), Vv = (i) => typeof ShadowRoot < "u" && i instanceof ShadowRoot || "host" in i && i.nodeType === 11, B0 = (i) => {
  if (!i) return document;
  if (Vv(i)) return i;
  if ("getRootNode" in i) {
    const o = i.getRootNode();
    if (Vv(o)) return o;
  }
  return document;
}, gA = (i, o, c) => {
  const d = c.split(",");
  let s;
  for (let y = 0, T = d.length; y < T; y++) (s = d[y]) && i.registerName(o, s);
}, yA = (i, o) => {
  var c;
  const d = ((c = o.textContent) !== null && c !== void 0 ? c : "").split(lb), s = [];
  for (let y = 0, T = d.length; y < T; y++) {
    const _ = d[y].trim();
    if (!_) continue;
    const x = _.match(hA);
    if (x) {
      const N = 0 | parseInt(x[1], 10), U = x[2];
      N !== 0 && (PE(U, N), gA(i, U, x[3]), i.getTag().insertRules(N, s)), s.length = 0;
    } else s.push(_);
  }
}, g0 = (i) => {
  const o = B0(i.options.target).querySelectorAll(mA);
  for (let c = 0, d = o.length; c < d; c++) {
    const s = o[c];
    s && s.getAttribute(vs) !== vS && (yA(i, s), s.parentNode && s.parentNode.removeChild(s));
  }
};
let km = !1;
function bA() {
  if (km !== !1) return km;
  if (typeof document < "u") {
    const i = document.head.querySelector('meta[property="csp-nonce"]');
    if (i) return km = i.nonce || i.getAttribute("content") || void 0;
    const o = document.head.querySelector('meta[name="sc-nonce"]');
    if (o) return km = o.getAttribute("content") || void 0;
  }
  return km = typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
}
const CS = (i, o) => {
  const c = document.head, d = i || c, s = document.createElement("style"), y = ((x) => {
    const N = Array.from(x.querySelectorAll(`style[${vs}]`));
    return N[N.length - 1];
  })(d), T = y !== void 0 ? y.nextSibling : null;
  s.setAttribute(vs, vS), s.setAttribute(SS, Ah);
  const _ = o || bA();
  return _ && s.setAttribute("nonce", _), d.insertBefore(s, T), s;
}, vA = class {
  constructor(i, o) {
    this.element = CS(i, o), this.element.appendChild(document.createTextNode("")), this.sheet = ((c) => {
      var d;
      if (c.sheet) return c.sheet;
      const s = (d = c.getRootNode().styleSheets) !== null && d !== void 0 ? d : document.styleSheets;
      for (let y = 0, T = s.length; y < T; y++) {
        const _ = s[y];
        if (_.ownerNode === c) return _;
      }
      throw Hm(17);
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
}, SA = class {
  constructor(i, o) {
    this.element = CS(i, o), this.nodes = this.element.childNodes, this.length = 0;
  }
  insertRule(i, o) {
    if (i <= this.length && i >= 0) {
      const c = document.createTextNode(o);
      return this.element.insertBefore(c, this.nodes[i] || null), this.length++, !0;
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
let Qv = Dm;
const wA = { isServer: !Dm, useCSSOMInjection: !VE };
class _h {
  static registerId(o) {
    return Fm(o);
  }
  constructor(o = Rs, c = {}, d) {
    this.options = Object.assign(Object.assign({}, wA), o), this.gs = c, this.keyframeIds = /* @__PURE__ */ new Set(), this.names = new Map(d), this.server = !!o.isServer, !this.server && Dm && Qv && (Qv = !1, g0(this)), OS(this, () => ((s) => {
      const y = s.getTag(), { length: T } = y;
      let _ = "";
      for (let x = 0; x < T; x++) {
        const N = $E(x);
        if (N === void 0) continue;
        const U = s.names.get(N);
        if (U === void 0 || !U.size) continue;
        const L = y.getGroup(x);
        if (L.length === 0) continue;
        const R = vs + ".g" + x + '[id="' + N + '"]';
        let ne = "";
        for (const G of U) G.length > 0 && (ne += G + ",");
        _ += L + R + '{content:"' + ne + '"}' + lb;
      }
      return _;
    })(this));
  }
  rehydrate() {
    !this.server && Dm && g0(this);
  }
  reconstructWithOptions(o, c = !0) {
    const d = new _h(Object.assign(Object.assign({}, this.options), o), this.gs, c && this.names || void 0);
    return d.keyframeIds = new Set(this.keyframeIds), !this.server && Dm && o.target !== this.options.target && B0(this.options.target) !== B0(o.target) && g0(d), d;
  }
  allocateGSInstance(o) {
    return this.gs[o] = (this.gs[o] || 0) + 1;
  }
  getTag() {
    return this.tag || (this.tag = (o = (({ useCSSOMInjection: c, target: d, nonce: s }) => c ? new vA(d, s) : new SA(d, s))(this.options), new pA(o)));
    var o;
  }
  hasNameForId(o, c) {
    var d, s;
    return (s = (d = this.names.get(o)) === null || d === void 0 ? void 0 : d.has(c)) !== null && s !== void 0 && s;
  }
  registerName(o, c) {
    Fm(o), o.startsWith(QE) && this.keyframeIds.add(o);
    const d = this.names.get(o);
    d ? d.add(c) : this.names.set(o, /* @__PURE__ */ new Set([c]));
  }
  insertRules(o, c, d) {
    this.registerName(o, c), this.getTag().insertRules(Fm(o), d);
  }
  clearNames(o) {
    this.names.has(o) && this.names.get(o).clear();
  }
  clearRules(o) {
    this.getTag().clearGroup(Fm(o)), this.clearNames(o);
  }
  clearTag() {
    this.tag = void 0;
  }
}
const NS = /* @__PURE__ */ new WeakSet(), TA = { animationIterationCount: 1, aspectRatio: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexShrink: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, scale: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 };
function kA(i, o) {
  return o == null || typeof o == "boolean" || o === "" ? "" : typeof o != "number" || o === 0 || i in TA || i.startsWith("--") ? String(o).trim() : o + "px";
}
const cs = 47;
function Fv(i) {
  if (i.charCodeAt(0) === 45 && i.charCodeAt(1) === 45) return i;
  let o = "";
  for (let c = 0; c < i.length; c++) {
    const d = i.charCodeAt(c);
    o += d >= 65 && d <= 90 ? "-" + String.fromCharCode(d + 32) : i[c];
  }
  return o.startsWith("ms-") ? "-" + o : o;
}
const EA = Symbol.for("sc-keyframes");
function Y0(i) {
  return typeof i == "object" && i !== null && EA in i;
}
function zS(i) {
  return xh(i) && !(i.prototype && i.prototype.isReactComponent);
}
const DS = (i) => i == null || i === !1 || i === "", AA = Symbol.for("react.client.reference");
function Xv(i) {
  return i.$$typeof === AA;
}
function $v(i) {
  const o = i.$$id, c = (o && o.includes("#") ? o.split("#").pop() : o) || i.name || "unknown";
  console.warn(`Interpolating a client component (${c}) as a selector is not supported in server components. The component selector pattern requires access to the component's internal class name, which is not available across the server/client boundary. Use a plain CSS class selector instead.`);
}
function RS(i, o) {
  for (const c in i) {
    const d = i[c];
    i.hasOwnProperty(c) && !DS(d) && (Array.isArray(d) && NS.has(d) || xh(d) ? o.push(Fv(c) + ":", d, ";") : Ss(d) ? (o.push(c + " {"), RS(d, o), o.push("}")) : o.push(Fv(c) + ": " + kA(c, d) + ";"));
  }
}
function ps(i, o, c, d, s = []) {
  if (DS(i)) return s;
  const y = typeof i;
  if (y === "string") return s.push(i), s;
  if (y === "function") {
    if (Xv(i)) return qt.env.NODE_ENV !== "production" && $v(i), s;
    if (zS(i) && o) {
      const T = i(o);
      return qt.env.NODE_ENV === "production" || typeof T != "object" || Array.isArray(T) || Y0(T) || Ss(T) || T === null || console.error(`${rb(i)} is not a styled component and cannot be referred to via component selector. See https://styled-components.com/docs/advanced#referring-to-other-components for more details.`), ps(T, o, c, d, s);
    }
    return s.push(i), s;
  }
  if (Array.isArray(i)) {
    for (let T = 0; T < i.length; T++) ps(i[T], o, c, d, s);
    return s;
  }
  return _S(i) ? (s.push(`.${i.styledComponentId}`), s) : Y0(i) ? (c ? (i.inject(c, d), s.push(i.getName(d))) : s.push(i), s) : Xv(i) ? (qt.env.NODE_ENV !== "production" && $v(i), s) : Ss(i) ? i.toString !== Object.prototype.toString ? (s.push(i.toString()), s) : (RS(i, s), s) : (s.push(i.toString()), s);
}
const xA = kS(Ah);
class _A {
  constructor(o, c, d) {
    this.rules = o, this.componentId = c, this.baseHash = ds(xA, c), this.baseStyle = d, _h.registerId(c);
  }
  generateAndInjectStyles(o, c, d) {
    let s = this.baseStyle ? this.baseStyle.generateAndInjectStyles(o, c, d) : "";
    {
      let y = "";
      for (let T = 0; T < this.rules.length; T++) {
        const _ = this.rules[T];
        if (typeof _ == "string") y += _;
        else if (_) if (zS(_)) {
          const x = _(o);
          typeof x == "string" ? y += x : x != null && x !== !1 && (qt.env.NODE_ENV === "production" || typeof x != "object" || Array.isArray(x) || Y0(x) || Ss(x) || console.error(`${rb(_)} is not a styled component and cannot be referred to via component selector. See https://styled-components.com/docs/advanced#referring-to-other-components for more details.`), y += Gv(ps(x, o, c, d)));
        } else y += Gv(ps(_, o, c, d));
      }
      if (y) {
        this.dynamicNameCache || (this.dynamicNameCache = /* @__PURE__ */ new Map());
        const T = d.hash ? d.hash + y : y;
        let _ = this.dynamicNameCache.get(T);
        if (!_) {
          if (_ = TS(ds(ds(this.baseHash, d.hash), y) >>> 0), this.dynamicNameCache.size >= 200) {
            const x = this.dynamicNameCache.keys().next().value;
            x !== void 0 && this.dynamicNameCache.delete(x);
          }
          this.dynamicNameCache.set(T, _);
        }
        if (!c.hasNameForId(this.componentId, _)) {
          const x = d(y, "." + _, void 0, this.componentId);
          c.insertRules(this.componentId, _, x);
        }
        s = Om(s, _);
      }
    }
    return s;
  }
}
const OA = /&/g;
function MS(i, o) {
  let c = 0;
  for (; --o >= 0 && i.charCodeAt(o) === 92; ) c++;
  return !(1 & ~c);
}
function y0(i) {
  const o = i.length;
  let c = "", d = 0, s = 0, y = 0, T = !1, _ = !1;
  for (let x = 0; x < o; x++) {
    const N = i.charCodeAt(x);
    if (y !== 0 || T || N !== cs || i.charCodeAt(x + 1) !== 42) if (T) N === 42 && i.charCodeAt(x + 1) === cs && (T = !1, x++);
    else if (N !== 34 && N !== 39 || MS(i, x)) {
      if (y === 0) if (N === 123) s++;
      else if (N === 125) {
        if (s--, s < 0) {
          _ = !0;
          let U = x + 1;
          for (; U < o; ) {
            const L = i.charCodeAt(U);
            if (L === 59 || L === 10) break;
            U++;
          }
          U < o && i.charCodeAt(U) === 59 && U++, s = 0, x = U - 1, d = U;
          continue;
        }
        s === 0 && (c += i.substring(d, x + 1), d = x + 1);
      } else N === 59 && s === 0 && (c += i.substring(d, x + 1), d = x + 1);
    } else y === 0 ? y = N : y === N && (y = 0);
    else T = !0, x++;
  }
  return _ || s !== 0 || y !== 0 ? (d < o && s === 0 && y === 0 && (c += i.substring(d)), c) : i;
}
function LS(i, o) {
  const c = o + " ", d = "," + c;
  for (let s = 0; s < i.length; s++) {
    const y = i[s];
    if (y.type === "rule") {
      y.value = (c + y.value).replaceAll(",", d);
      const T = y.props, _ = [];
      for (let x = 0; x < T.length; x++) _[x] = c + T[x];
      y.props = _;
    }
    Array.isArray(y.children) && y.type !== "@keyframes" && LS(y.children, o);
  }
  return i;
}
function CA({ options: i = Rs, plugins: o = ab } = Rs) {
  let c, d, s;
  const y = (R, ne, G) => G.startsWith(d) && G.endsWith(d) && G.replaceAll(d, "").length > 0 ? `.${c}` : R, T = o.slice();
  T.push((R) => {
    R.type === wh && R.value.includes("&") && (s || (s = new RegExp(`\\${d}\\b`, "g")), R.props[0] = R.props[0].replace(OA, d).replace(s, y));
  }), i.prefix && T.push(GE), T.push(qE);
  let _ = [];
  const x = BE(T.concat(YE((R) => _.push(R)))), N = (R, ne = "", G = "", F = "&") => {
    c = F, d = ne, s = void 0;
    const W = (function(Y) {
      const ve = Y.indexOf("//") !== -1, le = Y.indexOf("}") !== -1;
      if (!ve && !le) return Y;
      if (!ve) return y0(Y);
      const ae = Y.length;
      let $ = "", B = 0, K = 0, Ae = 0, Fe = 0, ye = 0, je = !1;
      for (; K < ae; ) {
        const Ee = Y.charCodeAt(K);
        if (Ee !== 34 && Ee !== 39 || MS(Y, K)) if (Ae === 0) if (Ee === cs && K + 1 < ae && Y.charCodeAt(K + 1) === 42) {
          for (K += 2; K + 1 < ae && (Y.charCodeAt(K) !== 42 || Y.charCodeAt(K + 1) !== cs); ) K++;
          K += 2;
        } else if (Ee !== 40) if (Ee !== 41) if (Fe > 0) K++;
        else if (Ee === 42 && K + 1 < ae && Y.charCodeAt(K + 1) === cs) $ += Y.substring(B, K), K += 2, B = K, je = !0;
        else if (Ee === cs && K + 1 < ae && Y.charCodeAt(K + 1) === cs) {
          for ($ += Y.substring(B, K); K < ae && Y.charCodeAt(K) !== 10; ) K++;
          B = K, je = !0;
        } else Ee === 123 ? ye++ : Ee === 125 && ye--, K++;
        else Fe > 0 && Fe--, K++;
        else Fe++, K++;
        else K++;
        else Ae === 0 ? Ae = Ee : Ae === Ee && (Ae = 0), K++;
      }
      return je ? (B < ae && ($ += Y.substring(B)), ye === 0 ? $ : y0($)) : ye === 0 ? Y : y0(Y);
    })(R);
    let ee = jE(G || ne ? G + " " + ne + " { " + W + " }" : W);
    return i.namespace && (ee = LS(ee, i.namespace)), _ = [], dh(ee, x), _;
  }, U = i;
  let L = H0;
  for (let R = 0; R < o.length; R++) o[R].name || Hm(15), L = ds(L, o[R].name);
  return U != null && U.namespace && (L = ds(L, U.namespace)), U != null && U.prefix && (L = ds(L, "p")), N.hash = L !== H0 ? L.toString() : "", N;
}
const NA = new _h(), zA = CA(), US = _t.createContext({ shouldForwardProp: void 0, styleSheet: NA, stylis: zA, stylisPlugins: void 0 });
US.Consumer;
function DA() {
  return _t.useContext(US);
}
const jS = _t.createContext(void 0);
jS.Consumer;
const Pv = Object.prototype.hasOwnProperty, b0 = {};
function RA(i, o) {
  const c = typeof i != "string" ? "sc" : wS(i);
  b0[c] = (b0[c] || 0) + 1;
  const d = c + "-" + eA(Ah + c + b0[c]);
  return o ? o + "-" + d : d;
}
let v0;
function MA(i, o, c) {
  const d = _S(i), s = i, y = !ih(i), { attrs: T = ab, componentId: _ = RA(o.displayName, o.parentComponentId), displayName: x = tA(i) } = o, N = o.displayName && o.componentId ? wS(o.displayName) + "-" + o.componentId : o.componentId || _, U = d && s.attrs ? s.attrs.concat(T).filter(Boolean) : T;
  let { shouldForwardProp: L } = o;
  if (d && s.shouldForwardProp) {
    const F = s.shouldForwardProp;
    if (o.shouldForwardProp) {
      const W = o.shouldForwardProp;
      L = (ee, Y) => F(ee, Y) && W(ee, Y);
    } else L = F;
  }
  const R = new _A(c, N, d ? s.componentStyle : void 0);
  function ne(F, W) {
    return (function(ee, Y, ve) {
      const { attrs: le, componentStyle: ae, defaultProps: $, foldedComponentIds: B, styledComponentId: K, target: Ae } = ee, Fe = _t.useContext(jS), ye = DA(), je = ee.shouldForwardProp || ye.shouldForwardProp;
      qt.env.NODE_ENV !== "production" && _t.useDebugValue && _t.useDebugValue(K);
      const Ee = KE(Y, Fe, $) || Rs;
      let yt, Qe;
      {
        const ue = _t.useRef(null), ie = ue.current;
        if (ie !== null && ie[1] === Ee && ie[2] === ye.styleSheet && ie[3] === ye.stylis && ie[7] === ae && (function(Ye, Se, ce) {
          const P = Ye, be = Se;
          let se = 0;
          for (const at in be) if (Pv.call(be, at) && (se++, P[at] !== be[at])) return !1;
          return se === ce;
        })(ie[0], Y, ie[4])) yt = ie[5], Qe = ie[6];
        else {
          yt = (function(Se, ce, P) {
            const be = Object.assign(Object.assign({}, ce), { className: void 0, theme: P }), se = Se.length > 1;
            for (let at = 0; at < Se.length; at++) {
              const Cn = Se[at], kn = xh(Cn) ? Cn(se ? Object.assign({}, be) : be) : Cn;
              for (const ct in kn) ct === "className" ? be.className = Om(be.className, kn[ct]) : ct === "style" ? be.style = Object.assign(Object.assign({}, be.style), kn[ct]) : ct in ce && ce[ct] === void 0 || (be[ct] = kn[ct]);
            }
            return "className" in ce && typeof ce.className == "string" && (be.className = Om(be.className, ce.className)), be;
          })(le, Y, Ee), Qe = (function(Se, ce, P, be) {
            const se = Se.generateAndInjectStyles(ce, P, be);
            return qt.env.NODE_ENV !== "production" && _t.useDebugValue && _t.useDebugValue(se), se;
          })(ae, yt, ye.styleSheet, ye.stylis);
          let Ye = 0;
          for (const Se in Y) Pv.call(Y, Se) && Ye++;
          ue.current = [Y, Ee, ye.styleSheet, ye.stylis, Ye, yt, Qe, ae];
        }
      }
      qt.env.NODE_ENV !== "production" && ee.warnTooManyClasses && ee.warnTooManyClasses(Qe);
      const H = yt.as || Ae, M = (function(ue, ie, Ye, Se) {
        const ce = {};
        for (const P in ue) ue[P] === void 0 || P[0] === "$" || P === "as" || P === "theme" && ue.theme === Ye || (P === "forwardedAs" ? ce.as = ue.forwardedAs : Se && !Se(P, ie) || (ce[P] = ue[P], Se || qt.env.NODE_ENV !== "development" || kE(P) || (v0 || (v0 = /* @__PURE__ */ new Set())).has(P) || !ih(ie) || ie.includes("-") || (v0.add(P), console.warn(`styled-components: it looks like an unknown prop "${P}" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via \`<StyleSheetManager shouldForwardProp={...}>\` (connect an API like \`@emotion/is-prop-valid\`) or consider using transient props (\`$\` prefix for automatic filtering.)`))));
        return ce;
      })(yt, H, Ee, je);
      let q = Om(B, K);
      return Qe && (q += " " + Qe), yt.className && (q += " " + yt.className), M[ih(H) && H.includes("-") ? "class" : "className"] = q, ve && (M.ref = ve), a1(H, M);
    })(G, F, W);
  }
  ne.displayName = x;
  let G = _t.forwardRef(ne);
  return G.attrs = U, G.componentStyle = R, G.displayName = x, G.shouldForwardProp = L, G.foldedComponentIds = d ? Om(s.foldedComponentIds, s.styledComponentId) : "", G.styledComponentId = N, G.target = d ? s.target : i, Object.defineProperty(G, "defaultProps", { get() {
    return this._foldedDefaultProps;
  }, set(F) {
    this._foldedDefaultProps = d ? (function(W, ...ee) {
      for (const Y of ee) q0(W, Y, !0);
      return W;
    })({}, s.defaultProps, F) : F;
  } }), qt.env.NODE_ENV !== "production" && (ZE(x, N), G.warnTooManyClasses = /* @__PURE__ */ ((F, W) => {
    let ee = {}, Y = !1;
    return (ve) => {
      !Y && (ee[ve] = !0, Object.keys(ee).length >= 200) && (console.warn(`Over 200 classes were generated for component ${F}${W ? ` with the id of "${W}"` : ""}.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), Y = !0, ee = {});
    };
  })(x, N)), OS(G, () => `.${G.styledComponentId}`), y && xS(G, i, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), G;
}
var LA = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "blockquote", "body", "button", "br", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "menu", "meter", "nav", "object", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "slot", "small", "span", "strong", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "switch", "symbol", "text", "textPath", "tspan", "use"]);
function Zv(i, o) {
  const c = [i[0]];
  for (let d = 0, s = o.length; d < s; d += 1) c.push(o[d], i[d + 1]);
  return c;
}
const Kv = (i) => (NS.add(i), i);
function UA(i, ...o) {
  if (xh(i) || Ss(i)) return Kv(ps(Zv(ab, [i, ...o])));
  const c = i;
  return o.length === 0 && c.length === 1 && typeof c[0] == "string" ? ps(c) : Kv(ps(Zv(c, o)));
}
function G0(i, o, c = Rs) {
  if (!o) throw Hm(1, o);
  const d = (s, ...y) => i(o, c, UA(s, ...y));
  return d.attrs = (s) => G0(i, o, Object.assign(Object.assign({}, c), { attrs: Array.prototype.concat(c.attrs, s).filter(Boolean) })), d.withConfig = (s) => G0(i, o, Object.assign(Object.assign({}, c), s)), d;
}
const HS = (i) => G0(MA, i), ib = HS;
LA.forEach((i) => {
  ib[i] = HS(i);
});
qt.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://styled-components.com/docs/basics#react-native`);
const $m = `__sc-${vs}__`;
qt.env.NODE_ENV !== "production" && qt.env.NODE_ENV !== "test" && typeof window < "u" && (window[$m] || (window[$m] = 0), window[$m] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://styled-components.com/docs/faqs#why-am-i-getting-a-warning-about-several-instances-of-module-on-the-page for more info.`), window[$m] += 1);
const jA = ib.ul`
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
`, HA = () => {
  const { feeds: i } = r1(I0);
  return /* @__PURE__ */ Jl.jsx(jA, { "data-testid": "grid-view-container", children: i == null ? void 0 : i.map((o) => /* @__PURE__ */ Jl.jsx("li", { children: /* @__PURE__ */ Jl.jsx(
    eu,
    {
      type: "event",
      eventFormat: "inline",
      eventTime: `<span>
                ${fh(o.startDate, "COMPLETE")} <br /> ${fS(
        o.startDate,
        o.endDate
      )}
              </span>`,
      eventLocation: o.location,
      clickable: !!o.alias,
      cardLink: `${o.alias}/?eventDate=${fh(
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
}, qS = ({
  header: i,
  ctaButton: o,
  dataSource: c,
  maxItems: d,
  noFeedText: s = "No events to show."
}) => (au(() => {
  typeof window < "u" && m1({
    packageName: "component-events",
    component: "CardsGridEvents",
    type: "NA",
    configuration: {
      header: i,
      ctaButton: o,
      dataSource: c,
      maxItems: d
    }
  });
}, []), // Calling the high order component that fetch the data
/* @__PURE__ */ Jl.jsx(eb, { header: i, ctaButton: o, dataSource: c, maxItems: d, noFeedText: s, children: /* @__PURE__ */ Jl.jsx(HA, {}) }));
qS.propTypes = sS;
const qA = ib.ul`
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
`, BA = () => {
  const { feeds: i } = r1(I0);
  return /* @__PURE__ */ Jl.jsx(qA, { "data-testid": "list-view-container", children: i == null ? void 0 : i.map((o) => /* @__PURE__ */ Jl.jsx("li", { children: /* @__PURE__ */ Jl.jsx(
    eu,
    {
      type: "event",
      eventFormat: "inline",
      horizontal: !0,
      eventTime: `<span>
                ${fh(o.startDate, "COMPLETE")} <br /> ${fS(
        o.startDate,
        o.endDate
      )}
              </span>`,
      eventLocation: o.location,
      clickable: !!o.alias,
      cardLink: `${o.alias}/?eventDate=${fh(
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
}, BS = ({
  header: i,
  ctaButton: o,
  dataSource: c,
  maxItems: d,
  noFeedText: s = "No events to show."
}) => (au(() => {
  typeof window < "u" && m1({
    packageName: "component-events",
    component: "CardsListEvents",
    type: "NA",
    configuration: {
      header: i,
      ctaButton: o,
      dataSource: c,
      maxItems: d
    }
  });
}, []), // Calling the high order component that fetch the data
/* @__PURE__ */ Jl.jsx(eb, { header: i, ctaButton: o, dataSource: c, maxItems: d, noFeedText: s, children: /* @__PURE__ */ Jl.jsx(BA, {}) }));
BS.propTypes = sS;
var S0 = { exports: {} }, Em = {}, w0 = { exports: {} }, T0 = {};
var Iv;
function YA() {
  return Iv || (Iv = 1, (function(i) {
    function o(H, M) {
      var q = H.length;
      H.push(M);
      e: for (; 0 < q; ) {
        var ue = q - 1 >>> 1, ie = H[ue];
        if (0 < s(ie, M))
          H[ue] = M, H[q] = ie, q = ue;
        else break e;
      }
    }
    function c(H) {
      return H.length === 0 ? null : H[0];
    }
    function d(H) {
      if (H.length === 0) return null;
      var M = H[0], q = H.pop();
      if (q !== M) {
        H[0] = q;
        e: for (var ue = 0, ie = H.length, Ye = ie >>> 1; ue < Ye; ) {
          var Se = 2 * (ue + 1) - 1, ce = H[Se], P = Se + 1, be = H[P];
          if (0 > s(ce, q))
            P < ie && 0 > s(be, ce) ? (H[ue] = be, H[P] = q, ue = P) : (H[ue] = ce, H[Se] = q, ue = Se);
          else if (P < ie && 0 > s(be, q))
            H[ue] = be, H[P] = q, ue = P;
          else break e;
        }
      }
      return M;
    }
    function s(H, M) {
      var q = H.sortIndex - M.sortIndex;
      return q !== 0 ? q : H.id - M.id;
    }
    if (i.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var y = performance;
      i.unstable_now = function() {
        return y.now();
      };
    } else {
      var T = Date, _ = T.now();
      i.unstable_now = function() {
        return T.now() - _;
      };
    }
    var x = [], N = [], U = 1, L = null, R = 3, ne = !1, G = !1, F = !1, W = !1, ee = typeof setTimeout == "function" ? setTimeout : null, Y = typeof clearTimeout == "function" ? clearTimeout : null, ve = typeof setImmediate < "u" ? setImmediate : null;
    function le(H) {
      for (var M = c(N); M !== null; ) {
        if (M.callback === null) d(N);
        else if (M.startTime <= H)
          d(N), M.sortIndex = M.expirationTime, o(x, M);
        else break;
        M = c(N);
      }
    }
    function ae(H) {
      if (F = !1, le(H), !G)
        if (c(x) !== null)
          G = !0, $ || ($ = !0, je());
        else {
          var M = c(N);
          M !== null && Qe(ae, M.startTime - H);
        }
    }
    var $ = !1, B = -1, K = 5, Ae = -1;
    function Fe() {
      return W ? !0 : !(i.unstable_now() - Ae < K);
    }
    function ye() {
      if (W = !1, $) {
        var H = i.unstable_now();
        Ae = H;
        var M = !0;
        try {
          e: {
            G = !1, F && (F = !1, Y(B), B = -1), ne = !0;
            var q = R;
            try {
              t: {
                for (le(H), L = c(x); L !== null && !(L.expirationTime > H && Fe()); ) {
                  var ue = L.callback;
                  if (typeof ue == "function") {
                    L.callback = null, R = L.priorityLevel;
                    var ie = ue(
                      L.expirationTime <= H
                    );
                    if (H = i.unstable_now(), typeof ie == "function") {
                      L.callback = ie, le(H), M = !0;
                      break t;
                    }
                    L === c(x) && d(x), le(H);
                  } else d(x);
                  L = c(x);
                }
                if (L !== null) M = !0;
                else {
                  var Ye = c(N);
                  Ye !== null && Qe(
                    ae,
                    Ye.startTime - H
                  ), M = !1;
                }
              }
              break e;
            } finally {
              L = null, R = q, ne = !1;
            }
            M = void 0;
          }
        } finally {
          M ? je() : $ = !1;
        }
      }
    }
    var je;
    if (typeof ve == "function")
      je = function() {
        ve(ye);
      };
    else if (typeof MessageChannel < "u") {
      var Ee = new MessageChannel(), yt = Ee.port2;
      Ee.port1.onmessage = ye, je = function() {
        yt.postMessage(null);
      };
    } else
      je = function() {
        ee(ye, 0);
      };
    function Qe(H, M) {
      B = ee(function() {
        H(i.unstable_now());
      }, M);
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(H) {
      H.callback = null;
    }, i.unstable_forceFrameRate = function(H) {
      0 > H || 125 < H ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : K = 0 < H ? Math.floor(1e3 / H) : 5;
    }, i.unstable_getCurrentPriorityLevel = function() {
      return R;
    }, i.unstable_next = function(H) {
      switch (R) {
        case 1:
        case 2:
        case 3:
          var M = 3;
          break;
        default:
          M = R;
      }
      var q = R;
      R = M;
      try {
        return H();
      } finally {
        R = q;
      }
    }, i.unstable_requestPaint = function() {
      W = !0;
    }, i.unstable_runWithPriority = function(H, M) {
      switch (H) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          H = 3;
      }
      var q = R;
      R = H;
      try {
        return M();
      } finally {
        R = q;
      }
    }, i.unstable_scheduleCallback = function(H, M, q) {
      var ue = i.unstable_now();
      switch (typeof q == "object" && q !== null ? (q = q.delay, q = typeof q == "number" && 0 < q ? ue + q : ue) : q = ue, H) {
        case 1:
          var ie = -1;
          break;
        case 2:
          ie = 250;
          break;
        case 5:
          ie = 1073741823;
          break;
        case 4:
          ie = 1e4;
          break;
        default:
          ie = 5e3;
      }
      return ie = q + ie, H = {
        id: U++,
        callback: M,
        priorityLevel: H,
        startTime: q,
        expirationTime: ie,
        sortIndex: -1
      }, q > ue ? (H.sortIndex = q, o(N, H), c(x) === null && H === c(N) && (F ? (Y(B), B = -1) : F = !0, Qe(ae, q - ue))) : (H.sortIndex = ie, o(x, H), G || ne || (G = !0, $ || ($ = !0, je()))), H;
    }, i.unstable_shouldYield = Fe, i.unstable_wrapCallback = function(H) {
      var M = R;
      return function() {
        var q = R;
        R = M;
        try {
          return H.apply(this, arguments);
        } finally {
          R = q;
        }
      };
    };
  })(T0)), T0;
}
var Wv;
function GA() {
  return Wv || (Wv = 1, w0.exports = YA()), w0.exports;
}
var Jv;
function VA() {
  if (Jv) return Em;
  Jv = 1;
  var i = { env: { NODE_ENV: "production" } };
  var o = GA(), c = _t, d = i1;
  function s(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function y(e) {
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
  function _(e) {
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
  function N(e) {
    if (T(e) !== e)
      throw Error(s(188));
  }
  function U(e) {
    var t = e.alternate;
    if (!t) {
      if (t = T(e), t === null) throw Error(s(188));
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
          if (r === n) return N(a), e;
          if (r === l) return N(a), t;
          r = r.sibling;
        }
        throw Error(s(188));
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
          if (!u) throw Error(s(189));
        }
      }
      if (n.alternate !== l) throw Error(s(190));
    }
    if (n.tag !== 3) throw Error(s(188));
    return n.stateNode.current === n ? e : t;
  }
  function L(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = L(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var R = Object.assign, ne = Symbol.for("react.element"), G = Symbol.for("react.transitional.element"), F = Symbol.for("react.portal"), W = Symbol.for("react.fragment"), ee = Symbol.for("react.strict_mode"), Y = Symbol.for("react.profiler"), ve = Symbol.for("react.consumer"), le = Symbol.for("react.context"), ae = Symbol.for("react.forward_ref"), $ = Symbol.for("react.suspense"), B = Symbol.for("react.suspense_list"), K = Symbol.for("react.memo"), Ae = Symbol.for("react.lazy"), Fe = Symbol.for("react.activity"), ye = Symbol.for("react.memo_cache_sentinel"), je = Symbol.iterator;
  function Ee(e) {
    return e === null || typeof e != "object" ? null : (e = je && e[je] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var yt = Symbol.for("react.client.reference");
  function Qe(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === yt ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case W:
        return "Fragment";
      case Y:
        return "Profiler";
      case ee:
        return "StrictMode";
      case $:
        return "Suspense";
      case B:
        return "SuspenseList";
      case Fe:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case F:
          return "Portal";
        case le:
          return e.displayName || "Context";
        case ve:
          return (e._context.displayName || "Context") + ".Consumer";
        case ae:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case K:
          return t = e.displayName || null, t !== null ? t : Qe(e.type) || "Memo";
        case Ae:
          t = e._payload, e = e._init;
          try {
            return Qe(e(t));
          } catch {
          }
      }
    return null;
  }
  var H = Array.isArray, M = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, q = d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ue = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ie = [], Ye = -1;
  function Se(e) {
    return { current: e };
  }
  function ce(e) {
    0 > Ye || (e.current = ie[Ye], ie[Ye] = null, Ye--);
  }
  function P(e, t) {
    Ye++, ie[Ye] = e.current, e.current = t;
  }
  var be = Se(null), se = Se(null), at = Se(null), Cn = Se(null);
  function kn(e, t) {
    switch (P(at, t), P(se, e), P(be, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Mp(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = Mp(t), e = Lp(t, e);
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
    ce(be), P(be, e);
  }
  function ct() {
    ce(be), ce(se), ce(at);
  }
  function kr(e) {
    e.memoizedState !== null && P(Cn, e);
    var t = be.current, n = Lp(t, e.type);
    t !== n && (P(se, e), P(be, n));
  }
  function Aa(e) {
    se.current === e && (ce(be), ce(se)), Cn.current === e && (ce(Cn), fi._currentValue = ue);
  }
  var xa, wi;
  function Nn(e) {
    if (xa === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        xa = t && t[1] || "", wi = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + xa + e + wi;
  }
  var Oe = !1;
  function na(e, t) {
    if (!e || Oe) return "";
    Oe = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var D = function() {
                throw Error();
              };
              if (Object.defineProperty(D.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(D, []);
                } catch (A) {
                  var E = A;
                }
                Reflect.construct(e, [], D);
              } else {
                try {
                  D.call();
                } catch (A) {
                  E = A;
                }
                e.call(D.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (A) {
                E = A;
              }
              (D = e()) && typeof D.catch == "function" && D.catch(function() {
              });
            }
          } catch (A) {
            if (A && E && typeof A.stack == "string")
              return [A.stack, E.stack];
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
        var h = u.split(`
`), k = f.split(`
`);
        for (a = l = 0; l < h.length && !h[l].includes("DetermineComponentFrameRoot"); )
          l++;
        for (; a < k.length && !k[a].includes(
          "DetermineComponentFrameRoot"
        ); )
          a++;
        if (l === h.length || a === k.length)
          for (l = h.length - 1, a = k.length - 1; 1 <= l && 0 <= a && h[l] !== k[a]; )
            a--;
        for (; 1 <= l && 0 <= a; l--, a--)
          if (h[l] !== k[a]) {
            if (l !== 1 || a !== 1)
              do
                if (l--, a--, 0 > a || h[l] !== k[a]) {
                  var O = `
` + h[l].replace(" at new ", " at ");
                  return e.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", e.displayName)), O;
                }
              while (1 <= l && 0 <= a);
            break;
          }
      }
    } finally {
      Oe = !1, Error.prepareStackTrace = n;
    }
    return (n = e ? e.displayName || e.name : "") ? Nn(n) : "";
  }
  function Re(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Nn(e.type);
      case 16:
        return Nn("Lazy");
      case 13:
        return e.child !== t && t !== null ? Nn("Suspense Fallback") : Nn("Suspense");
      case 19:
        return Nn("SuspenseList");
      case 0:
      case 15:
        return na(e.type, !1);
      case 11:
        return na(e.type.render, !1);
      case 1:
        return na(e.type, !0);
      case 31:
        return Nn("Activity");
      default:
        return "";
    }
  }
  function _a(e) {
    try {
      var t = "", n = null;
      do
        t += Re(e, n), n = e, e = e.return;
      while (e);
      return t;
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack;
    }
  }
  var Ot = Object.prototype.hasOwnProperty, Vn = o.unstable_scheduleCallback, Oa = o.unstable_cancelCallback, zn = o.unstable_shouldYield, Ti = o.unstable_requestPaint, st = o.unstable_now, ki = o.unstable_getCurrentPriorityLevel, Ca = o.unstable_ImmediatePriority, tn = o.unstable_UserBlockingPriority, nn = o.unstable_NormalPriority, Qn = o.unstable_LowPriority, Na = o.unstable_IdlePriority, za = o.log, Da = o.unstable_setDisableYieldValue, Fn = null, Pe = null;
  function Yt(e) {
    if (typeof za == "function" && Da(e), Pe && typeof Pe.setStrictMode == "function")
      try {
        Pe.setStrictMode(Fn, e);
      } catch {
      }
  }
  var rt = Math.clz32 ? Math.clz32 : xi, Ei = Math.log, Ai = Math.LN2;
  function xi(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Ei(e) / Ai | 0) | 0;
  }
  var bl = 256, vl = 262144, ln = 4194304;
  function Ct(e) {
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
  function an(e, t, n) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var a = 0, r = e.suspendedLanes, u = e.pingedLanes;
    e = e.warmLanes;
    var f = l & 134217727;
    return f !== 0 ? (l = f & ~r, l !== 0 ? a = Ct(l) : (u &= f, u !== 0 ? a = Ct(u) : n || (n = f & ~e, n !== 0 && (a = Ct(n))))) : (f = l & ~r, f !== 0 ? a = Ct(f) : u !== 0 ? a = Ct(u) : n || (n = l & ~e, n !== 0 && (a = Ct(n)))), a === 0 ? 0 : t !== 0 && t !== a && (t & r) === 0 && (r = a & -a, n = t & -t, r >= n || r === 32 && (n & 4194048) !== 0) ? t : a;
  }
  function Sl(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function _i(e, t) {
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
  function Er() {
    var e = ln;
    return ln <<= 1, (ln & 62914560) === 0 && (ln = 4194304), e;
  }
  function Ra(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function wl(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function Ma(e, t, n, l, a, r) {
    var u = e.pendingLanes;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
    var f = e.entanglements, h = e.expirationTimes, k = e.hiddenUpdates;
    for (n = u & ~n; 0 < n; ) {
      var O = 31 - rt(n), D = 1 << O;
      f[O] = 0, h[O] = -1;
      var E = k[O];
      if (E !== null)
        for (k[O] = null, O = 0; O < E.length; O++) {
          var A = E[O];
          A !== null && (A.lane &= -536870913);
        }
      n &= ~D;
    }
    l !== 0 && la(e, l, 0), r !== 0 && a === 0 && e.tag !== 0 && (e.suspendedLanes |= r & ~(u & ~t));
  }
  function la(e, t, n) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var l = 31 - rt(t);
    e.entangledLanes |= t, e.entanglements[l] = e.entanglements[l] | 1073741824 | n & 261930;
  }
  function Gt(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var l = 31 - rt(n), a = 1 << l;
      a & t | e[l] & t && (e[l] |= t), n &= ~a;
    }
  }
  function Xn(e, t) {
    var n = t & -t;
    return n = (n & 42) !== 0 ? 1 : aa(n), (n & (e.suspendedLanes | t)) !== 0 ? 0 : n;
  }
  function aa(e) {
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
  function ra(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Oi() {
    var e = q.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : am(e.type));
  }
  function Ar(e, t) {
    var n = q.p;
    try {
      return q.p = e, t();
    } finally {
      q.p = n;
    }
  }
  var rn = Math.random().toString(36).slice(2), Ze = "__reactFiber$" + rn, it = "__reactProps$" + rn, Tl = "__reactContainer$" + rn, $n = "__reactEvents$" + rn, ru = "__reactListeners$" + rn, iu = "__reactHandles$" + rn, He = "__reactResources$" + rn, on = "__reactMarker$" + rn;
  function xr(e) {
    delete e[Ze], delete e[it], delete e[$n], delete e[ru], delete e[iu];
  }
  function Pn(e) {
    var t = e[Ze];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Tl] || n[Ze]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
          for (e = Gp(e); e !== null; ) {
            if (n = e[Ze]) return n;
            e = Gp(e);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Dn(e) {
    if (e = e[Ze] || e[Tl]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function kl(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(s(33));
  }
  function Zn(e) {
    var t = e[He];
    return t || (t = e[He] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Ke(e) {
    e[on] = !0;
  }
  var Ci = /* @__PURE__ */ new Set(), Ni = {};
  function Kn(e, t) {
    At(e, t), At(e + "Capture", t);
  }
  function At(e, t) {
    for (Ni[e] = t, e = 0; e < t.length; e++)
      Ci.add(t[e]);
  }
  var zi = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), La = {}, In = {};
  function Di(e) {
    return Ot.call(In, e) ? !0 : Ot.call(La, e) ? !1 : zi.test(e) ? In[e] = !0 : (La[e] = !0, !1);
  }
  function El(e, t, n) {
    if (Di(t))
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
  function Al(e, t, n) {
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
  function Vt(e, t, n, l) {
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
  function Nt(e) {
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
  function _r(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function ou(e, t, n) {
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
  function Or(e) {
    if (!e._valueTracker) {
      var t = _r(e) ? "checked" : "value";
      e._valueTracker = ou(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function Ri(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), l = "";
    return e && (l = _r(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== n ? (t.setValue(e), !0) : !1;
  }
  function Ua(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Mi = /[\n"\\]/g;
  function jt(e) {
    return e.replace(
      Mi,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function ja(e, t, n, l, a, r, u, f) {
    e.name = "", u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" ? e.type = u : e.removeAttribute("type"), t != null ? u === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Nt(t)) : e.value !== "" + Nt(t) && (e.value = "" + Nt(t)) : u !== "submit" && u !== "reset" || e.removeAttribute("value"), t != null ? xl(e, u, Nt(t)) : n != null ? xl(e, u, Nt(n)) : l != null && e.removeAttribute("value"), a == null && r != null && (e.defaultChecked = !!r), a != null && (e.checked = a && typeof a != "function" && typeof a != "symbol"), f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? e.name = "" + Nt(f) : e.removeAttribute("name");
  }
  function Ha(e, t, n, l, a, r, u, f) {
    if (r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (e.type = r), t != null || n != null) {
      if (!(r !== "submit" && r !== "reset" || t != null)) {
        Or(e);
        return;
      }
      n = n != null ? "" + Nt(n) : "", t = t != null ? "" + Nt(t) : n, f || t === e.value || (e.value = t), e.defaultValue = t;
    }
    l = l ?? a, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = f ? e.checked : !!l, e.defaultChecked = !!l, u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.name = u), Or(e);
  }
  function xl(e, t, n) {
    t === "number" && Ua(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
  }
  function Rn(e, t, n, l) {
    if (e = e.options, t) {
      t = {};
      for (var a = 0; a < n.length; a++)
        t["$" + n[a]] = !0;
      for (n = 0; n < e.length; n++)
        a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && l && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + Nt(n), t = null, a = 0; a < e.length; a++) {
        if (e[a].value === n) {
          e[a].selected = !0, l && (e[a].defaultSelected = !0);
          return;
        }
        t !== null || e[a].disabled || (t = e[a]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Cr(e, t, n) {
    if (t != null && (t = "" + Nt(t), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + Nt(n) : "";
  }
  function ia(e, t, n, l) {
    if (t == null) {
      if (l != null) {
        if (n != null) throw Error(s(92));
        if (H(l)) {
          if (1 < l.length) throw Error(s(93));
          l = l[0];
        }
        n = l;
      }
      n == null && (n = ""), t = n;
    }
    n = Nt(t), e.defaultValue = n, l = e.textContent, l === n && l !== "" && l !== null && (e.value = l), Or(e);
  }
  function wt(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var oa = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function zt(e, t, n) {
    var l = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? l ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : l ? e.setProperty(t, n) : typeof n != "number" || n === 0 || oa.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
  }
  function Li(e, t, n) {
    if (t != null && typeof t != "object")
      throw Error(s(62));
    if (e = e.style, n != null) {
      for (var l in n)
        !n.hasOwnProperty(l) || t != null && t.hasOwnProperty(l) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "");
      for (var a in t)
        l = t[a], t.hasOwnProperty(a) && n[a] !== l && zt(e, a, l);
    } else
      for (var r in t)
        t.hasOwnProperty(r) && zt(e, r, t[r]);
  }
  function _l(e) {
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
  var uu = /* @__PURE__ */ new Map([
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
  ]), Ui = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function En(e) {
    return Ui.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function Qt() {
  }
  var qa = null;
  function Nr(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Wn = null, Ol = null;
  function ji(e) {
    var t = Dn(e);
    if (t && (e = t.stateNode)) {
      var n = e[it] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (ja(
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
              'input[name="' + jt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < n.length; t++) {
              var l = n[t];
              if (l !== e && l.form === e.form) {
                var a = l[it] || null;
                if (!a) throw Error(s(90));
                ja(
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
              l = n[t], l.form === e.form && Ri(l);
          }
          break e;
        case "textarea":
          Cr(e, n.value, n.defaultValue);
          break e;
        case "select":
          t = n.value, t != null && Rn(e, !!n.multiple, t, !1);
      }
    }
  }
  var Ba = !1;
  function Ya(e, t, n) {
    if (Ba) return e(t, n);
    Ba = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (Ba = !1, (Wn !== null || Ol !== null) && (wo(), Wn && (t = Wn, e = Ol, Ol = Wn = null, ji(t), e)))
        for (t = 0; t < e.length; t++) ji(e[t]);
    }
  }
  function An(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var l = n[it] || null;
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
        s(231, t, typeof n)
      );
    return n;
  }
  var Ft = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), m = !1;
  if (Ft)
    try {
      var p = {};
      Object.defineProperty(p, "passive", {
        get: function() {
          m = !0;
        }
      }), window.addEventListener("test", p, p), window.removeEventListener("test", p, p);
    } catch {
      m = !1;
    }
  var S = null, z = null, j = null;
  function I() {
    if (j) return j;
    var e, t = z, n = t.length, l, a = "value" in S ? S.value : S.textContent, r = a.length;
    for (e = 0; e < n && t[e] === a[e]; e++) ;
    var u = n - e;
    for (l = 1; l <= u && t[n - l] === a[r - l]; l++) ;
    return j = a.slice(e, 1 < l ? 1 - l : void 0);
  }
  function te(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function he() {
    return !0;
  }
  function gt() {
    return !1;
  }
  function Me(e) {
    function t(n, l, a, r, u) {
      this._reactName = n, this._targetInst = a, this.type = l, this.nativeEvent = r, this.target = u, this.currentTarget = null;
      for (var f in e)
        e.hasOwnProperty(f) && (n = e[f], this[f] = n ? n(r) : r[f]);
      return this.isDefaultPrevented = (r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1) ? he : gt, this.isPropagationStopped = gt, this;
    }
    return R(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = he);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = he);
      },
      persist: function() {
      },
      isPersistent: he
    }), t;
  }
  var Be = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, ft = Me(Be), ut = R({}, Be, { view: 0, detail: 0 }), Mn = Me(ut), vi, cu, zr, Hi = R({}, ut, {
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
    getModifierState: fu,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== zr && (zr && e.type === "mousemove" ? (vi = e.screenX - zr.screenX, cu = e.screenY - zr.screenY) : cu = vi = 0, zr = e), vi);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : cu;
    }
  }), Us = Me(Hi), Oh = R({}, Hi, { dataTransfer: 0 }), Ch = Me(Oh), Nh = R({}, ut, { relatedTarget: 0 }), su = Me(Nh), zh = R({}, Be, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Dh = Me(zh), Rh = R({}, Be, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Mh = Me(Rh), Lh = R({}, Be, { data: 0 }), js = Me(Lh), Uh = {
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
  }, jh = {
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
  }, Hh = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function qh(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Hh[e]) ? !!t[e] : !1;
  }
  function fu() {
    return qh;
  }
  var Bh = R({}, ut, {
    key: function(e) {
      if (e.key) {
        var t = Uh[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = te(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? jh[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: fu,
    charCode: function(e) {
      return e.type === "keypress" ? te(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? te(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), Yh = Me(Bh), Gh = R({}, Hi, {
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
  }), Hs = Me(Gh), Vh = R({}, ut, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: fu
  }), Qh = Me(Vh), Fh = R({}, Be, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Xh = Me(Fh), $h = R({}, Hi, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Ph = Me($h), Zh = R({}, Be, {
    newState: 0,
    oldState: 0
  }), Kh = Me(Zh), Ih = [9, 13, 27, 32], du = Ft && "CompositionEvent" in window, Dr = null;
  Ft && "documentMode" in document && (Dr = document.documentMode);
  var Wh = Ft && "TextEvent" in window && !Dr, qs = Ft && (!du || Dr && 8 < Dr && 11 >= Dr), Bs = " ", Ys = !1;
  function Gs(e, t) {
    switch (e) {
      case "keyup":
        return Ih.indexOf(t.keyCode) !== -1;
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
  function Vs(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Ga = !1;
  function Jh(e, t) {
    switch (e) {
      case "compositionend":
        return Vs(t);
      case "keypress":
        return t.which !== 32 ? null : (Ys = !0, Bs);
      case "textInput":
        return e = t.data, e === Bs && Ys ? null : e;
      default:
        return null;
    }
  }
  function eg(e, t) {
    if (Ga)
      return e === "compositionend" || !du && Gs(e, t) ? (e = I(), j = z = S = null, Ga = !1, e) : null;
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
        return qs && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var tg = {
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
  function Qs(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!tg[e.type] : t === "textarea";
  }
  function Fs(e, t, n, l) {
    Wn ? Ol ? Ol.push(l) : Ol = [l] : Wn = l, t = Oo(t, "onChange"), 0 < t.length && (n = new ft(
      "onChange",
      "change",
      null,
      n,
      l
    ), e.push({ event: n, listeners: t }));
  }
  var Rr = null, Mr = null;
  function ng(e) {
    Op(e, 0);
  }
  function qi(e) {
    var t = kl(e);
    if (Ri(t)) return e;
  }
  function Xs(e, t) {
    if (e === "change") return t;
  }
  var $s = !1;
  if (Ft) {
    var pu;
    if (Ft) {
      var mu = "oninput" in document;
      if (!mu) {
        var Ps = document.createElement("div");
        Ps.setAttribute("oninput", "return;"), mu = typeof Ps.oninput == "function";
      }
      pu = mu;
    } else pu = !1;
    $s = pu && (!document.documentMode || 9 < document.documentMode);
  }
  function Zs() {
    Rr && (Rr.detachEvent("onpropertychange", Ks), Mr = Rr = null);
  }
  function Ks(e) {
    if (e.propertyName === "value" && qi(Mr)) {
      var t = [];
      Fs(
        t,
        Mr,
        e,
        Nr(e)
      ), Ya(ng, t);
    }
  }
  function lg(e, t, n) {
    e === "focusin" ? (Zs(), Rr = t, Mr = n, Rr.attachEvent("onpropertychange", Ks)) : e === "focusout" && Zs();
  }
  function ag(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return qi(Mr);
  }
  function rg(e, t) {
    if (e === "click") return qi(t);
  }
  function ig(e, t) {
    if (e === "input" || e === "change")
      return qi(t);
  }
  function og(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Xt = typeof Object.is == "function" ? Object.is : og;
  function Lr(e, t) {
    if (Xt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), l = Object.keys(t);
    if (n.length !== l.length) return !1;
    for (l = 0; l < n.length; l++) {
      var a = n[l];
      if (!Ot.call(t, a) || !Xt(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  function Is(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Ws(e, t) {
    var n = Is(e);
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
      n = Is(n);
    }
  }
  function Js(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Js(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function ef(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = Ua(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Ua(e.document);
    }
    return t;
  }
  function hu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var ug = Ft && "documentMode" in document && 11 >= document.documentMode, Va = null, gu = null, Ur = null, yu = !1;
  function tf(e, t, n) {
    var l = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    yu || Va == null || Va !== Ua(l) || (l = Va, "selectionStart" in l && hu(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), Ur && Lr(Ur, l) || (Ur = l, l = Oo(gu, "onSelect"), 0 < l.length && (t = new ft(
      "onSelect",
      "select",
      null,
      t,
      n
    ), e.push({ event: t, listeners: l }), t.target = Va)));
  }
  function ua(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Qa = {
    animationend: ua("Animation", "AnimationEnd"),
    animationiteration: ua("Animation", "AnimationIteration"),
    animationstart: ua("Animation", "AnimationStart"),
    transitionrun: ua("Transition", "TransitionRun"),
    transitionstart: ua("Transition", "TransitionStart"),
    transitioncancel: ua("Transition", "TransitionCancel"),
    transitionend: ua("Transition", "TransitionEnd")
  }, bu = {}, nf = {};
  Ft && (nf = document.createElement("div").style, "AnimationEvent" in window || (delete Qa.animationend.animation, delete Qa.animationiteration.animation, delete Qa.animationstart.animation), "TransitionEvent" in window || delete Qa.transitionend.transition);
  function ca(e) {
    if (bu[e]) return bu[e];
    if (!Qa[e]) return e;
    var t = Qa[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in nf)
        return bu[e] = t[n];
    return e;
  }
  var lf = ca("animationend"), af = ca("animationiteration"), rf = ca("animationstart"), cg = ca("transitionrun"), sg = ca("transitionstart"), fg = ca("transitioncancel"), of = ca("transitionend"), uf = /* @__PURE__ */ new Map(), vu = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  vu.push("scrollEnd");
  function xn(e, t) {
    uf.set(e, t), Kn(t, [e]);
  }
  var Bi = typeof reportError == "function" ? reportError : function(e) {
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
  }, un = [], Fa = 0, Su = 0;
  function Yi() {
    for (var e = Fa, t = Su = Fa = 0; t < e; ) {
      var n = un[t];
      un[t++] = null;
      var l = un[t];
      un[t++] = null;
      var a = un[t];
      un[t++] = null;
      var r = un[t];
      if (un[t++] = null, l !== null && a !== null) {
        var u = l.pending;
        u === null ? a.next = a : (a.next = u.next, u.next = a), l.pending = a;
      }
      r !== 0 && cf(n, a, r);
    }
  }
  function Gi(e, t, n, l) {
    un[Fa++] = e, un[Fa++] = t, un[Fa++] = n, un[Fa++] = l, Su |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l);
  }
  function wu(e, t, n, l) {
    return Gi(e, t, n, l), Vi(e);
  }
  function sa(e, t) {
    return Gi(e, null, null, t), Vi(e);
  }
  function cf(e, t, n) {
    e.lanes |= n;
    var l = e.alternate;
    l !== null && (l.lanes |= n);
    for (var a = !1, r = e.return; r !== null; )
      r.childLanes |= n, l = r.alternate, l !== null && (l.childLanes |= n), r.tag === 22 && (e = r.stateNode, e === null || e._visibility & 1 || (a = !0)), e = r, r = r.return;
    return e.tag === 3 ? (r = e.stateNode, a && t !== null && (a = 31 - rt(n), e = r.hiddenUpdates, l = e[a], l === null ? e[a] = [t] : l.push(t), t.lane = n | 536870912), r) : null;
  }
  function Vi(e) {
    if (50 < ai)
      throw ai = 0, Nc = null, Error(s(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Xa = {};
  function dg(e, t, n, l) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function $t(e, t, n, l) {
    return new dg(e, t, n, l);
  }
  function Tu(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Jn(e, t) {
    var n = e.alternate;
    return n === null ? (n = $t(
      e.tag,
      t,
      e.key,
      e.mode
    ), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 65011712, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
  }
  function sf(e, t) {
    e.flags &= 65011714;
    var n = e.alternate;
    return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function Qi(e, t, n, l, a, r) {
    var u = 0;
    if (l = e, typeof e == "function") Tu(e) && (u = 1);
    else if (typeof e == "string")
      u = yy(
        e,
        n,
        be.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case Fe:
          return e = $t(31, n, t, a), e.elementType = Fe, e.lanes = r, e;
        case W:
          return fa(n.children, a, r, t);
        case ee:
          u = 8, a |= 24;
          break;
        case Y:
          return e = $t(12, n, t, a | 2), e.elementType = Y, e.lanes = r, e;
        case $:
          return e = $t(13, n, t, a), e.elementType = $, e.lanes = r, e;
        case B:
          return e = $t(19, n, t, a), e.elementType = B, e.lanes = r, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case le:
                u = 10;
                break e;
              case ve:
                u = 9;
                break e;
              case ae:
                u = 11;
                break e;
              case K:
                u = 14;
                break e;
              case Ae:
                u = 16, l = null;
                break e;
            }
          u = 29, n = Error(
            s(130, e === null ? "null" : typeof e, "")
          ), l = null;
      }
    return t = $t(u, n, t, a), t.elementType = e, t.type = l, t.lanes = r, t;
  }
  function fa(e, t, n, l) {
    return e = $t(7, e, l, t), e.lanes = n, e;
  }
  function ku(e, t, n) {
    return e = $t(6, e, null, t), e.lanes = n, e;
  }
  function ff(e) {
    var t = $t(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function Eu(e, t, n) {
    return t = $t(
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
  var df = /* @__PURE__ */ new WeakMap();
  function cn(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = df.get(e);
      return n !== void 0 ? n : (t = {
        value: e,
        source: t,
        stack: _a(t)
      }, df.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: _a(t)
    };
  }
  var $a = [], Pa = 0, Fi = null, jr = 0, sn = [], fn = 0, Cl = null, Ln = 1, Un = "";
  function el(e, t) {
    $a[Pa++] = jr, $a[Pa++] = Fi, Fi = e, jr = t;
  }
  function pf(e, t, n) {
    sn[fn++] = Ln, sn[fn++] = Un, sn[fn++] = Cl, Cl = e;
    var l = Ln;
    e = Un;
    var a = 32 - rt(l) - 1;
    l &= ~(1 << a), n += 1;
    var r = 32 - rt(t) + a;
    if (30 < r) {
      var u = a - a % 5;
      r = (l & (1 << u) - 1).toString(32), l >>= u, a -= u, Ln = 1 << 32 - rt(t) + a | n << a | l, Un = r + e;
    } else
      Ln = 1 << r | n << a | l, Un = e;
  }
  function Au(e) {
    e.return !== null && (el(e, 1), pf(e, 1, 0));
  }
  function xu(e) {
    for (; e === Fi; )
      Fi = $a[--Pa], $a[Pa] = null, jr = $a[--Pa], $a[Pa] = null;
    for (; e === Cl; )
      Cl = sn[--fn], sn[fn] = null, Un = sn[--fn], sn[fn] = null, Ln = sn[--fn], sn[fn] = null;
  }
  function mf(e, t) {
    sn[fn++] = Ln, sn[fn++] = Un, sn[fn++] = Cl, Ln = t.id, Un = t.overflow, Cl = e;
  }
  var dt = null, Le = null, ge = !1, Nl = null, dn = !1, _u = Error(s(519));
  function zl(e) {
    var t = Error(
      s(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Hr(cn(t, e)), _u;
  }
  function hf(e) {
    var t = e.stateNode, n = e.type, l = e.memoizedProps;
    switch (t[Ze] = e, t[it] = l, n) {
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
        for (n = 0; n < ii.length; n++)
          de(ii[n], t);
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
        de("invalid", t), Ha(
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
        de("invalid", t);
        break;
      case "textarea":
        de("invalid", t), ia(t, l.value, l.defaultValue, l.children);
    }
    n = l.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || l.suppressHydrationWarning === !0 || Dp(t.textContent, n) ? (l.popover != null && (de("beforetoggle", t), de("toggle", t)), l.onScroll != null && de("scroll", t), l.onScrollEnd != null && de("scrollend", t), l.onClick != null && (t.onclick = Qt), t = !0) : t = !1, t || zl(e, !0);
  }
  function gf(e) {
    for (dt = e.return; dt; )
      switch (dt.tag) {
        case 5:
        case 31:
        case 13:
          dn = !1;
          return;
        case 27:
        case 3:
          dn = !0;
          return;
        default:
          dt = dt.return;
      }
  }
  function Za(e) {
    if (e !== dt) return !1;
    if (!ge) return gf(e), ge = !0, !1;
    var t = e.tag, n;
    if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || Fc(e.type, e.memoizedProps)), n = !n), n && Le && zl(e), gf(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      Le = Yp(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      Le = Yp(e);
    } else
      t === 27 ? (t = Le, Fl(e.type) ? (e = Kc, Kc = null, Le = e) : Le = t) : Le = dt ? pn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function da() {
    Le = dt = null, ge = !1;
  }
  function Ou() {
    var e = Nl;
    return e !== null && (Lt === null ? Lt = e : Lt.push.apply(
      Lt,
      e
    ), Nl = null), e;
  }
  function Hr(e) {
    Nl === null ? Nl = [e] : Nl.push(e);
  }
  var Cu = Se(null), pa = null, tl = null;
  function Dl(e, t, n) {
    P(Cu, t._currentValue), t._currentValue = n;
  }
  function nl(e) {
    e._currentValue = Cu.current, ce(Cu);
  }
  function Nu(e, t, n) {
    for (; e !== null; ) {
      var l = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, l !== null && (l.childLanes |= t)) : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function zu(e, t, n, l) {
    var a = e.child;
    for (a !== null && (a.return = e); a !== null; ) {
      var r = a.dependencies;
      if (r !== null) {
        var u = a.child;
        r = r.firstContext;
        e: for (; r !== null; ) {
          var f = r;
          r = a;
          for (var h = 0; h < t.length; h++)
            if (f.context === t[h]) {
              r.lanes |= n, f = r.alternate, f !== null && (f.lanes |= n), Nu(
                r.return,
                n,
                e
              ), l || (u = null);
              break e;
            }
          r = f.next;
        }
      } else if (a.tag === 18) {
        if (u = a.return, u === null) throw Error(s(341));
        u.lanes |= n, r = u.alternate, r !== null && (r.lanes |= n), Nu(u, n, e), u = null;
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
  function Ka(e, t, n, l) {
    e = null;
    for (var a = t, r = !1; a !== null; ) {
      if (!r) {
        if ((a.flags & 524288) !== 0) r = !0;
        else if ((a.flags & 262144) !== 0) break;
      }
      if (a.tag === 10) {
        var u = a.alternate;
        if (u === null) throw Error(s(387));
        if (u = u.memoizedProps, u !== null) {
          var f = a.type;
          Xt(a.pendingProps.value, u.value) || (e !== null ? e.push(f) : e = [f]);
        }
      } else if (a === Cn.current) {
        if (u = a.alternate, u === null) throw Error(s(387));
        u.memoizedState.memoizedState !== a.memoizedState.memoizedState && (e !== null ? e.push(fi) : e = [fi]);
      }
      a = a.return;
    }
    e !== null && zu(
      t,
      e,
      n,
      l
    ), t.flags |= 262144;
  }
  function Xi(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Xt(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function ma(e) {
    pa = e, tl = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function pt(e) {
    return yf(pa, e);
  }
  function $i(e, t) {
    return pa === null && ma(e), yf(e, t);
  }
  function yf(e, t) {
    var n = t._currentValue;
    if (t = { context: t, memoizedValue: n, next: null }, tl === null) {
      if (e === null) throw Error(s(308));
      tl = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else tl = tl.next = t;
    return n;
  }
  var pg = typeof AbortController < "u" ? AbortController : function() {
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
  }, mg = o.unstable_scheduleCallback, hg = o.unstable_NormalPriority, Ie = {
    $$typeof: le,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Du() {
    return {
      controller: new pg(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function qr(e) {
    e.refCount--, e.refCount === 0 && mg(hg, function() {
      e.controller.abort();
    });
  }
  var Br = null, Ru = 0, Ia = 0, Wa = null;
  function gg(e, t) {
    if (Br === null) {
      var n = Br = [];
      Ru = 0, Ia = Uc(), Wa = {
        status: "pending",
        value: void 0,
        then: function(l) {
          n.push(l);
        }
      };
    }
    return Ru++, t.then(bf, bf), t;
  }
  function bf() {
    if (--Ru === 0 && Br !== null) {
      Wa !== null && (Wa.status = "fulfilled");
      var e = Br;
      Br = null, Ia = 0, Wa = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function yg(e, t) {
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
  var vf = M.S;
  M.S = function(e, t) {
    np = st(), typeof t == "object" && t !== null && typeof t.then == "function" && gg(e, t), vf !== null && vf(e, t);
  };
  var ha = Se(null);
  function Mu() {
    var e = ha.current;
    return e !== null ? e : De.pooledCache;
  }
  function Pi(e, t) {
    t === null ? P(ha, ha.current) : P(ha, t.pool);
  }
  function Sf() {
    var e = Mu();
    return e === null ? null : { parent: Ie._currentValue, pool: e };
  }
  var Ja = Error(s(460)), Lu = Error(s(474)), Zi = Error(s(542)), Ki = { then: function() {
  } };
  function wf(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Tf(e, t, n) {
    switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(Qt, Qt), t = n), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, Ef(e), e;
      default:
        if (typeof t.status == "string") t.then(Qt, Qt);
        else {
          if (e = De, e !== null && 100 < e.shellSuspendCounter)
            throw Error(s(482));
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
            throw e = t.reason, Ef(e), e;
        }
        throw ya = t, Ja;
    }
  }
  function ga(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (ya = n, Ja) : n;
    }
  }
  var ya = null;
  function kf() {
    if (ya === null) throw Error(s(459));
    var e = ya;
    return ya = null, e;
  }
  function Ef(e) {
    if (e === Ja || e === Zi)
      throw Error(s(483));
  }
  var er = null, Yr = 0;
  function Ii(e) {
    var t = Yr;
    return Yr += 1, er === null && (er = []), Tf(er, e, t);
  }
  function Gr(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Wi(e, t) {
    throw t.$$typeof === ne ? Error(s(525)) : (e = Object.prototype.toString.call(t), Error(
      s(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function Af(e) {
    function t(v, b) {
      if (e) {
        var w = v.deletions;
        w === null ? (v.deletions = [b], v.flags |= 16) : w.push(b);
      }
    }
    function n(v, b) {
      if (!e) return null;
      for (; b !== null; )
        t(v, b), b = b.sibling;
      return null;
    }
    function l(v) {
      for (var b = /* @__PURE__ */ new Map(); v !== null; )
        v.key !== null ? b.set(v.key, v) : b.set(v.index, v), v = v.sibling;
      return b;
    }
    function a(v, b) {
      return v = Jn(v, b), v.index = 0, v.sibling = null, v;
    }
    function r(v, b, w) {
      return v.index = w, e ? (w = v.alternate, w !== null ? (w = w.index, w < b ? (v.flags |= 67108866, b) : w) : (v.flags |= 67108866, b)) : (v.flags |= 1048576, b);
    }
    function u(v) {
      return e && v.alternate === null && (v.flags |= 67108866), v;
    }
    function f(v, b, w, C) {
      return b === null || b.tag !== 6 ? (b = ku(w, v.mode, C), b.return = v, b) : (b = a(b, w), b.return = v, b);
    }
    function h(v, b, w, C) {
      var Z = w.type;
      return Z === W ? O(
        v,
        b,
        w.props.children,
        C,
        w.key
      ) : b !== null && (b.elementType === Z || typeof Z == "object" && Z !== null && Z.$$typeof === Ae && ga(Z) === b.type) ? (b = a(b, w.props), Gr(b, w), b.return = v, b) : (b = Qi(
        w.type,
        w.key,
        w.props,
        null,
        v.mode,
        C
      ), Gr(b, w), b.return = v, b);
    }
    function k(v, b, w, C) {
      return b === null || b.tag !== 4 || b.stateNode.containerInfo !== w.containerInfo || b.stateNode.implementation !== w.implementation ? (b = Eu(w, v.mode, C), b.return = v, b) : (b = a(b, w.children || []), b.return = v, b);
    }
    function O(v, b, w, C, Z) {
      return b === null || b.tag !== 7 ? (b = fa(
        w,
        v.mode,
        C,
        Z
      ), b.return = v, b) : (b = a(b, w), b.return = v, b);
    }
    function D(v, b, w) {
      if (typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint")
        return b = ku(
          "" + b,
          v.mode,
          w
        ), b.return = v, b;
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case G:
            return w = Qi(
              b.type,
              b.key,
              b.props,
              null,
              v.mode,
              w
            ), Gr(w, b), w.return = v, w;
          case F:
            return b = Eu(
              b,
              v.mode,
              w
            ), b.return = v, b;
          case Ae:
            return b = ga(b), D(v, b, w);
        }
        if (H(b) || Ee(b))
          return b = fa(
            b,
            v.mode,
            w,
            null
          ), b.return = v, b;
        if (typeof b.then == "function")
          return D(v, Ii(b), w);
        if (b.$$typeof === le)
          return D(
            v,
            $i(v, b),
            w
          );
        Wi(v, b);
      }
      return null;
    }
    function E(v, b, w, C) {
      var Z = b !== null ? b.key : null;
      if (typeof w == "string" && w !== "" || typeof w == "number" || typeof w == "bigint")
        return Z !== null ? null : f(v, b, "" + w, C);
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case G:
            return w.key === Z ? h(v, b, w, C) : null;
          case F:
            return w.key === Z ? k(v, b, w, C) : null;
          case Ae:
            return w = ga(w), E(v, b, w, C);
        }
        if (H(w) || Ee(w))
          return Z !== null ? null : O(v, b, w, C, null);
        if (typeof w.then == "function")
          return E(
            v,
            b,
            Ii(w),
            C
          );
        if (w.$$typeof === le)
          return E(
            v,
            b,
            $i(v, w),
            C
          );
        Wi(v, w);
      }
      return null;
    }
    function A(v, b, w, C, Z) {
      if (typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint")
        return v = v.get(w) || null, f(b, v, "" + C, Z);
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case G:
            return v = v.get(
              C.key === null ? w : C.key
            ) || null, h(b, v, C, Z);
          case F:
            return v = v.get(
              C.key === null ? w : C.key
            ) || null, k(b, v, C, Z);
          case Ae:
            return C = ga(C), A(
              v,
              b,
              w,
              C,
              Z
            );
        }
        if (H(C) || Ee(C))
          return v = v.get(w) || null, O(b, v, C, Z, null);
        if (typeof C.then == "function")
          return A(
            v,
            b,
            w,
            Ii(C),
            Z
          );
        if (C.$$typeof === le)
          return A(
            v,
            b,
            w,
            $i(b, C),
            Z
          );
        Wi(b, C);
      }
      return null;
    }
    function Q(v, b, w, C) {
      for (var Z = null, we = null, X = b, oe = b = 0, me = null; X !== null && oe < w.length; oe++) {
        X.index > oe ? (me = X, X = null) : me = X.sibling;
        var Te = E(
          v,
          X,
          w[oe],
          C
        );
        if (Te === null) {
          X === null && (X = me);
          break;
        }
        e && X && Te.alternate === null && t(v, X), b = r(Te, b, oe), we === null ? Z = Te : we.sibling = Te, we = Te, X = me;
      }
      if (oe === w.length)
        return n(v, X), ge && el(v, oe), Z;
      if (X === null) {
        for (; oe < w.length; oe++)
          X = D(v, w[oe], C), X !== null && (b = r(
            X,
            b,
            oe
          ), we === null ? Z = X : we.sibling = X, we = X);
        return ge && el(v, oe), Z;
      }
      for (X = l(X); oe < w.length; oe++)
        me = A(
          X,
          v,
          oe,
          w[oe],
          C
        ), me !== null && (e && me.alternate !== null && X.delete(
          me.key === null ? oe : me.key
        ), b = r(
          me,
          b,
          oe
        ), we === null ? Z = me : we.sibling = me, we = me);
      return e && X.forEach(function(Kl) {
        return t(v, Kl);
      }), ge && el(v, oe), Z;
    }
    function J(v, b, w, C) {
      if (w == null) throw Error(s(151));
      for (var Z = null, we = null, X = b, oe = b = 0, me = null, Te = w.next(); X !== null && !Te.done; oe++, Te = w.next()) {
        X.index > oe ? (me = X, X = null) : me = X.sibling;
        var Kl = E(v, X, Te.value, C);
        if (Kl === null) {
          X === null && (X = me);
          break;
        }
        e && X && Kl.alternate === null && t(v, X), b = r(Kl, b, oe), we === null ? Z = Kl : we.sibling = Kl, we = Kl, X = me;
      }
      if (Te.done)
        return n(v, X), ge && el(v, oe), Z;
      if (X === null) {
        for (; !Te.done; oe++, Te = w.next())
          Te = D(v, Te.value, C), Te !== null && (b = r(Te, b, oe), we === null ? Z = Te : we.sibling = Te, we = Te);
        return ge && el(v, oe), Z;
      }
      for (X = l(X); !Te.done; oe++, Te = w.next())
        Te = A(X, v, oe, Te.value, C), Te !== null && (e && Te.alternate !== null && X.delete(Te.key === null ? oe : Te.key), b = r(Te, b, oe), we === null ? Z = Te : we.sibling = Te, we = Te);
      return e && X.forEach(function(Oy) {
        return t(v, Oy);
      }), ge && el(v, oe), Z;
    }
    function ze(v, b, w, C) {
      if (typeof w == "object" && w !== null && w.type === W && w.key === null && (w = w.props.children), typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case G:
            e: {
              for (var Z = w.key; b !== null; ) {
                if (b.key === Z) {
                  if (Z = w.type, Z === W) {
                    if (b.tag === 7) {
                      n(
                        v,
                        b.sibling
                      ), C = a(
                        b,
                        w.props.children
                      ), C.return = v, v = C;
                      break e;
                    }
                  } else if (b.elementType === Z || typeof Z == "object" && Z !== null && Z.$$typeof === Ae && ga(Z) === b.type) {
                    n(
                      v,
                      b.sibling
                    ), C = a(b, w.props), Gr(C, w), C.return = v, v = C;
                    break e;
                  }
                  n(v, b);
                  break;
                } else t(v, b);
                b = b.sibling;
              }
              w.type === W ? (C = fa(
                w.props.children,
                v.mode,
                C,
                w.key
              ), C.return = v, v = C) : (C = Qi(
                w.type,
                w.key,
                w.props,
                null,
                v.mode,
                C
              ), Gr(C, w), C.return = v, v = C);
            }
            return u(v);
          case F:
            e: {
              for (Z = w.key; b !== null; ) {
                if (b.key === Z)
                  if (b.tag === 4 && b.stateNode.containerInfo === w.containerInfo && b.stateNode.implementation === w.implementation) {
                    n(
                      v,
                      b.sibling
                    ), C = a(b, w.children || []), C.return = v, v = C;
                    break e;
                  } else {
                    n(v, b);
                    break;
                  }
                else t(v, b);
                b = b.sibling;
              }
              C = Eu(w, v.mode, C), C.return = v, v = C;
            }
            return u(v);
          case Ae:
            return w = ga(w), ze(
              v,
              b,
              w,
              C
            );
        }
        if (H(w))
          return Q(
            v,
            b,
            w,
            C
          );
        if (Ee(w)) {
          if (Z = Ee(w), typeof Z != "function") throw Error(s(150));
          return w = Z.call(w), J(
            v,
            b,
            w,
            C
          );
        }
        if (typeof w.then == "function")
          return ze(
            v,
            b,
            Ii(w),
            C
          );
        if (w.$$typeof === le)
          return ze(
            v,
            b,
            $i(v, w),
            C
          );
        Wi(v, w);
      }
      return typeof w == "string" && w !== "" || typeof w == "number" || typeof w == "bigint" ? (w = "" + w, b !== null && b.tag === 6 ? (n(v, b.sibling), C = a(b, w), C.return = v, v = C) : (n(v, b), C = ku(w, v.mode, C), C.return = v, v = C), u(v)) : n(v, b);
    }
    return function(v, b, w, C) {
      try {
        Yr = 0;
        var Z = ze(
          v,
          b,
          w,
          C
        );
        return er = null, Z;
      } catch (X) {
        if (X === Ja || X === Zi) throw X;
        var we = $t(29, X, null, v.mode);
        return we.lanes = C, we.return = v, we;
      } finally {
      }
    };
  }
  var ba = Af(!0), xf = Af(!1), Rl = !1;
  function Uu(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function ju(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function Ml(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Ll(e, t, n) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (ke & 2) !== 0) {
      var a = l.pending;
      return a === null ? t.next = t : (t.next = a.next, a.next = t), l.pending = t, t = Vi(e), cf(e, null, n), t;
    }
    return Gi(e, l, t, n), Vi(e);
  }
  function Vr(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
      var l = t.lanes;
      l &= e.pendingLanes, n |= l, t.lanes = n, Gt(e, n);
    }
  }
  function Hu(e, t) {
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
  var qu = !1;
  function Qr() {
    if (qu) {
      var e = Wa;
      if (e !== null) throw e;
    }
  }
  function Fr(e, t, n, l) {
    qu = !1;
    var a = e.updateQueue;
    Rl = !1;
    var r = a.firstBaseUpdate, u = a.lastBaseUpdate, f = a.shared.pending;
    if (f !== null) {
      a.shared.pending = null;
      var h = f, k = h.next;
      h.next = null, u === null ? r = k : u.next = k, u = h;
      var O = e.alternate;
      O !== null && (O = O.updateQueue, f = O.lastBaseUpdate, f !== u && (f === null ? O.firstBaseUpdate = k : f.next = k, O.lastBaseUpdate = h));
    }
    if (r !== null) {
      var D = a.baseState;
      u = 0, O = k = h = null, f = r;
      do {
        var E = f.lane & -536870913, A = E !== f.lane;
        if (A ? (pe & E) === E : (l & E) === E) {
          E !== 0 && E === Ia && (qu = !0), O !== null && (O = O.next = {
            lane: 0,
            tag: f.tag,
            payload: f.payload,
            callback: null,
            next: null
          });
          e: {
            var Q = e, J = f;
            E = t;
            var ze = n;
            switch (J.tag) {
              case 1:
                if (Q = J.payload, typeof Q == "function") {
                  D = Q.call(ze, D, E);
                  break e;
                }
                D = Q;
                break e;
              case 3:
                Q.flags = Q.flags & -65537 | 128;
              case 0:
                if (Q = J.payload, E = typeof Q == "function" ? Q.call(ze, D, E) : Q, E == null) break e;
                D = R({}, D, E);
                break e;
              case 2:
                Rl = !0;
            }
          }
          E = f.callback, E !== null && (e.flags |= 64, A && (e.flags |= 8192), A = a.callbacks, A === null ? a.callbacks = [E] : A.push(E));
        } else
          A = {
            lane: E,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null
          }, O === null ? (k = O = A, h = D) : O = O.next = A, u |= E;
        if (f = f.next, f === null) {
          if (f = a.shared.pending, f === null)
            break;
          A = f, f = A.next, A.next = null, a.lastBaseUpdate = A, a.shared.pending = null;
        }
      } while (!0);
      O === null && (h = D), a.baseState = h, a.firstBaseUpdate = k, a.lastBaseUpdate = O, r === null && (a.shared.lanes = 0), Bl |= u, e.lanes = u, e.memoizedState = D;
    }
  }
  function _f(e, t) {
    if (typeof e != "function")
      throw Error(s(191, e));
    e.call(t);
  }
  function Of(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++)
        _f(n[e], t);
  }
  var tr = Se(null), Ji = Se(0);
  function Cf(e, t) {
    e = fl, P(Ji, e), P(tr, t), fl = e | t.baseLanes;
  }
  function Bu() {
    P(Ji, fl), P(tr, tr.current);
  }
  function Yu() {
    fl = Ji.current, ce(tr), ce(Ji);
  }
  var Pt = Se(null), vn = null;
  function Ul(e) {
    var t = e.alternate;
    P(Xe, Xe.current & 1), P(Pt, e), vn === null && (t === null || tr.current !== null || t.memoizedState !== null) && (vn = e);
  }
  function Gu(e) {
    P(Xe, Xe.current), P(Pt, e), vn === null && (vn = e);
  }
  function Nf(e) {
    e.tag === 22 ? (P(Xe, Xe.current), P(Pt, e), vn === null && (vn = e)) : jl();
  }
  function jl() {
    P(Xe, Xe.current), P(Pt, Pt.current);
  }
  function Zt(e) {
    ce(Pt), vn === e && (vn = null), ce(Xe);
  }
  var Xe = Se(0);
  function eo(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || Pc(n) || Zc(n)))
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
  var ll = 0, re = null, Ce = null, We = null, to = !1, nr = !1, va = !1, no = 0, Xr = 0, lr = null, bg = 0;
  function Ge() {
    throw Error(s(321));
  }
  function Vu(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Xt(e[n], t[n])) return !1;
    return !0;
  }
  function Qu(e, t, n, l, a, r) {
    return ll = r, re = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, M.H = e === null || e.memoizedState === null ? pd : rc, va = !1, r = n(l, a), va = !1, nr && (r = Df(
      t,
      n,
      l,
      a
    )), zf(e), r;
  }
  function zf(e) {
    M.H = Zr;
    var t = Ce !== null && Ce.next !== null;
    if (ll = 0, We = Ce = re = null, to = !1, Xr = 0, lr = null, t) throw Error(s(300));
    e === null || Je || (e = e.dependencies, e !== null && Xi(e) && (Je = !0));
  }
  function Df(e, t, n, l) {
    re = e;
    var a = 0;
    do {
      if (nr && (lr = null), Xr = 0, nr = !1, 25 <= a) throw Error(s(301));
      if (a += 1, We = Ce = null, e.updateQueue != null) {
        var r = e.updateQueue;
        r.lastEffect = null, r.events = null, r.stores = null, r.memoCache != null && (r.memoCache.index = 0);
      }
      M.H = md, r = t(n, l);
    } while (nr);
    return r;
  }
  function vg() {
    var e = M.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? $r(t) : t, e = e.useState()[0], (Ce !== null ? Ce.memoizedState : null) !== e && (re.flags |= 1024), t;
  }
  function Fu() {
    var e = no !== 0;
    return no = 0, e;
  }
  function Xu(e, t, n) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
  }
  function $u(e) {
    if (to) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      to = !1;
    }
    ll = 0, We = Ce = re = null, nr = !1, Xr = no = 0, lr = null;
  }
  function Tt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return We === null ? re.memoizedState = We = e : We = We.next = e, We;
  }
  function $e() {
    if (Ce === null) {
      var e = re.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ce.next;
    var t = We === null ? re.memoizedState : We.next;
    if (t !== null)
      We = t, Ce = e;
    else {
      if (e === null)
        throw re.alternate === null ? Error(s(467)) : Error(s(310));
      Ce = e, e = {
        memoizedState: Ce.memoizedState,
        baseState: Ce.baseState,
        baseQueue: Ce.baseQueue,
        queue: Ce.queue,
        next: null
      }, We === null ? re.memoizedState = We = e : We = We.next = e;
    }
    return We;
  }
  function lo() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function $r(e) {
    var t = Xr;
    return Xr += 1, lr === null && (lr = []), e = Tf(lr, e, t), t = re, (We === null ? t.memoizedState : We.next) === null && (t = t.alternate, M.H = t === null || t.memoizedState === null ? pd : rc), e;
  }
  function ao(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return $r(e);
      if (e.$$typeof === le) return pt(e);
    }
    throw Error(s(438, String(e)));
  }
  function Pu(e) {
    var t = null, n = re.updateQueue;
    if (n !== null && (t = n.memoCache), t == null) {
      var l = re.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (t = {
        data: l.data.map(function(a) {
          return a.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), n === null && (n = lo(), re.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
      for (n = t.data[t.index] = Array(e), l = 0; l < e; l++)
        n[l] = ye;
    return t.index++, n;
  }
  function al(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function ro(e) {
    var t = $e();
    return Zu(t, Ce, e);
  }
  function Zu(e, t, n) {
    var l = e.queue;
    if (l === null) throw Error(s(311));
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
      var f = u = null, h = null, k = t, O = !1;
      do {
        var D = k.lane & -536870913;
        if (D !== k.lane ? (pe & D) === D : (ll & D) === D) {
          var E = k.revertLane;
          if (E === 0)
            h !== null && (h = h.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: k.action,
              hasEagerState: k.hasEagerState,
              eagerState: k.eagerState,
              next: null
            }), D === Ia && (O = !0);
          else if ((ll & E) === E) {
            k = k.next, E === Ia && (O = !0);
            continue;
          } else
            D = {
              lane: 0,
              revertLane: k.revertLane,
              gesture: null,
              action: k.action,
              hasEagerState: k.hasEagerState,
              eagerState: k.eagerState,
              next: null
            }, h === null ? (f = h = D, u = r) : h = h.next = D, re.lanes |= E, Bl |= E;
          D = k.action, va && n(r, D), r = k.hasEagerState ? k.eagerState : n(r, D);
        } else
          E = {
            lane: D,
            revertLane: k.revertLane,
            gesture: k.gesture,
            action: k.action,
            hasEagerState: k.hasEagerState,
            eagerState: k.eagerState,
            next: null
          }, h === null ? (f = h = E, u = r) : h = h.next = E, re.lanes |= D, Bl |= D;
        k = k.next;
      } while (k !== null && k !== t);
      if (h === null ? u = r : h.next = f, !Xt(r, e.memoizedState) && (Je = !0, O && (n = Wa, n !== null)))
        throw n;
      e.memoizedState = r, e.baseState = u, e.baseQueue = h, l.lastRenderedState = r;
    }
    return a === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function Ku(e) {
    var t = $e(), n = t.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = e;
    var l = n.dispatch, a = n.pending, r = t.memoizedState;
    if (a !== null) {
      n.pending = null;
      var u = a = a.next;
      do
        r = e(r, u.action), u = u.next;
      while (u !== a);
      Xt(r, t.memoizedState) || (Je = !0), t.memoizedState = r, t.baseQueue === null && (t.baseState = r), n.lastRenderedState = r;
    }
    return [r, l];
  }
  function Rf(e, t, n) {
    var l = re, a = $e(), r = ge;
    if (r) {
      if (n === void 0) throw Error(s(407));
      n = n();
    } else n = t();
    var u = !Xt(
      (Ce || a).memoizedState,
      n
    );
    if (u && (a.memoizedState = n, Je = !0), a = a.queue, Ju(Uf.bind(null, l, a, e), [
      e
    ]), a.getSnapshot !== t || u || We !== null && We.memoizedState.tag & 1) {
      if (l.flags |= 2048, ar(
        9,
        { destroy: void 0 },
        Lf.bind(
          null,
          l,
          a,
          n,
          t
        ),
        null
      ), De === null) throw Error(s(349));
      r || (ll & 127) !== 0 || Mf(l, t, n);
    }
    return n;
  }
  function Mf(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = re.updateQueue, t === null ? (t = lo(), re.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Lf(e, t, n, l) {
    t.value = n, t.getSnapshot = l, jf(t) && Hf(e);
  }
  function Uf(e, t, n) {
    return n(function() {
      jf(t) && Hf(e);
    });
  }
  function jf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Xt(e, n);
    } catch {
      return !0;
    }
  }
  function Hf(e) {
    var t = sa(e, 2);
    t !== null && Ut(t, e, 2);
  }
  function Iu(e) {
    var t = Tt();
    if (typeof e == "function") {
      var n = e;
      if (e = n(), va) {
        Yt(!0);
        try {
          n();
        } finally {
          Yt(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: al,
      lastRenderedState: e
    }, t;
  }
  function qf(e, t, n, l) {
    return e.baseState = n, Zu(
      e,
      Ce,
      typeof l == "function" ? l : al
    );
  }
  function Sg(e, t, n, l, a) {
    if (uo(e)) throw Error(s(485));
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
      M.T !== null ? n(!0) : r.isTransition = !1, l(r), n = t.pending, n === null ? (r.next = t.pending = r, Bf(t, r)) : (r.next = n.next, t.pending = n.next = r);
    }
  }
  function Bf(e, t) {
    var n = t.action, l = t.payload, a = e.state;
    if (t.isTransition) {
      var r = M.T, u = {};
      M.T = u;
      try {
        var f = n(a, l), h = M.S;
        h !== null && h(u, f), Yf(e, t, f);
      } catch (k) {
        Wu(e, t, k);
      } finally {
        r !== null && u.types !== null && (r.types = u.types), M.T = r;
      }
    } else
      try {
        r = n(a, l), Yf(e, t, r);
      } catch (k) {
        Wu(e, t, k);
      }
  }
  function Yf(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(l) {
        Gf(e, t, l);
      },
      function(l) {
        return Wu(e, t, l);
      }
    ) : Gf(e, t, n);
  }
  function Gf(e, t, n) {
    t.status = "fulfilled", t.value = n, Vf(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, Bf(e, n)));
  }
  function Wu(e, t, n) {
    var l = e.pending;
    if (e.pending = null, l !== null) {
      l = l.next;
      do
        t.status = "rejected", t.reason = n, Vf(t), t = t.next;
      while (t !== l);
    }
    e.action = null;
  }
  function Vf(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Qf(e, t) {
    return t;
  }
  function Ff(e, t) {
    if (ge) {
      var n = De.formState;
      if (n !== null) {
        e: {
          var l = re;
          if (ge) {
            if (Le) {
              t: {
                for (var a = Le, r = dn; a.nodeType !== 8; ) {
                  if (!r) {
                    a = null;
                    break t;
                  }
                  if (a = pn(
                    a.nextSibling
                  ), a === null) {
                    a = null;
                    break t;
                  }
                }
                r = a.data, a = r === "F!" || r === "F" ? a : null;
              }
              if (a) {
                Le = pn(
                  a.nextSibling
                ), l = a.data === "F!";
                break e;
              }
            }
            zl(l);
          }
          l = !1;
        }
        l && (t = n[0]);
      }
    }
    return n = Tt(), n.memoizedState = n.baseState = t, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Qf,
      lastRenderedState: t
    }, n.queue = l, n = sd.bind(
      null,
      re,
      l
    ), l.dispatch = n, l = Iu(!1), r = ac.bind(
      null,
      re,
      !1,
      l.queue
    ), l = Tt(), a = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, l.queue = a, n = Sg.bind(
      null,
      re,
      a,
      r,
      n
    ), a.dispatch = n, l.memoizedState = e, [t, n, !1];
  }
  function Xf(e) {
    var t = $e();
    return $f(t, Ce, e);
  }
  function $f(e, t, n) {
    if (t = Zu(
      e,
      t,
      Qf
    )[0], e = ro(al)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var l = $r(t);
      } catch (u) {
        throw u === Ja ? Zi : u;
      }
    else l = t;
    t = $e();
    var a = t.queue, r = a.dispatch;
    return n !== t.memoizedState && (re.flags |= 2048, ar(
      9,
      { destroy: void 0 },
      wg.bind(null, a, n),
      null
    )), [l, r, e];
  }
  function wg(e, t) {
    e.action = t;
  }
  function Pf(e) {
    var t = $e(), n = Ce;
    if (n !== null)
      return $f(t, n, e);
    $e(), t = t.memoizedState, n = $e();
    var l = n.queue.dispatch;
    return n.memoizedState = e, [t, l, !1];
  }
  function ar(e, t, n, l) {
    return e = { tag: e, create: n, deps: l, inst: t, next: null }, t = re.updateQueue, t === null && (t = lo(), re.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (l = n.next, n.next = e, e.next = l, t.lastEffect = e), e;
  }
  function Zf() {
    return $e().memoizedState;
  }
  function io(e, t, n, l) {
    var a = Tt();
    re.flags |= e, a.memoizedState = ar(
      1 | t,
      { destroy: void 0 },
      n,
      l === void 0 ? null : l
    );
  }
  function oo(e, t, n, l) {
    var a = $e();
    l = l === void 0 ? null : l;
    var r = a.memoizedState.inst;
    Ce !== null && l !== null && Vu(l, Ce.memoizedState.deps) ? a.memoizedState = ar(t, r, n, l) : (re.flags |= e, a.memoizedState = ar(
      1 | t,
      r,
      n,
      l
    ));
  }
  function Kf(e, t) {
    io(8390656, 8, e, t);
  }
  function Ju(e, t) {
    oo(2048, 8, e, t);
  }
  function Tg(e) {
    re.flags |= 4;
    var t = re.updateQueue;
    if (t === null)
      t = lo(), re.updateQueue = t, t.events = [e];
    else {
      var n = t.events;
      n === null ? t.events = [e] : n.push(e);
    }
  }
  function If(e) {
    var t = $e().memoizedState;
    return Tg({ ref: t, nextImpl: e }), function() {
      if ((ke & 2) !== 0) throw Error(s(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function Wf(e, t) {
    return oo(4, 2, e, t);
  }
  function Jf(e, t) {
    return oo(4, 4, e, t);
  }
  function ed(e, t) {
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
  function td(e, t, n) {
    n = n != null ? n.concat([e]) : null, oo(4, 4, ed.bind(null, t, e), n);
  }
  function ec() {
  }
  function nd(e, t) {
    var n = $e();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    return t !== null && Vu(t, l[1]) ? l[0] : (n.memoizedState = [e, t], e);
  }
  function ld(e, t) {
    var n = $e();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    if (t !== null && Vu(t, l[1]))
      return l[0];
    if (l = e(), va) {
      Yt(!0);
      try {
        e();
      } finally {
        Yt(!1);
      }
    }
    return n.memoizedState = [l, t], l;
  }
  function tc(e, t, n) {
    return n === void 0 || (ll & 1073741824) !== 0 && (pe & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n, e = ap(), re.lanes |= e, Bl |= e, n);
  }
  function ad(e, t, n, l) {
    return Xt(n, t) ? n : tr.current !== null ? (e = tc(e, n, l), Xt(e, t) || (Je = !0), e) : (ll & 42) === 0 || (ll & 1073741824) !== 0 && (pe & 261930) === 0 ? (Je = !0, e.memoizedState = n) : (e = ap(), re.lanes |= e, Bl |= e, t);
  }
  function rd(e, t, n, l, a) {
    var r = q.p;
    q.p = r !== 0 && 8 > r ? r : 8;
    var u = M.T, f = {};
    M.T = f, ac(e, !1, t, n);
    try {
      var h = a(), k = M.S;
      if (k !== null && k(f, h), h !== null && typeof h == "object" && typeof h.then == "function") {
        var O = yg(
          h,
          l
        );
        Pr(
          e,
          t,
          O,
          Wt(e)
        );
      } else
        Pr(
          e,
          t,
          l,
          Wt(e)
        );
    } catch (D) {
      Pr(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: D },
        Wt()
      );
    } finally {
      q.p = r, u !== null && f.types !== null && (u.types = f.types), M.T = u;
    }
  }
  function kg() {
  }
  function nc(e, t, n, l) {
    if (e.tag !== 5) throw Error(s(476));
    var a = id(e).queue;
    rd(
      e,
      a,
      t,
      ue,
      n === null ? kg : function() {
        return od(e), n(l);
      }
    );
  }
  function id(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: ue,
      baseState: ue,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: al,
        lastRenderedState: ue
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
        lastRenderedReducer: al,
        lastRenderedState: n
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function od(e) {
    var t = id(e);
    t.next === null && (t = e.alternate.memoizedState), Pr(
      e,
      t.next.queue,
      {},
      Wt()
    );
  }
  function lc() {
    return pt(fi);
  }
  function ud() {
    return $e().memoizedState;
  }
  function cd() {
    return $e().memoizedState;
  }
  function Eg(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = Wt();
          e = Ml(n);
          var l = Ll(t, e, n);
          l !== null && (Ut(l, t, n), Vr(l, t, n)), t = { cache: Du() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Ag(e, t, n) {
    var l = Wt();
    n = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, uo(e) ? fd(t, n) : (n = wu(e, t, n, l), n !== null && (Ut(n, e, l), dd(n, t, l)));
  }
  function sd(e, t, n) {
    var l = Wt();
    Pr(e, t, n, l);
  }
  function Pr(e, t, n, l) {
    var a = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (uo(e)) fd(t, a);
    else {
      var r = e.alternate;
      if (e.lanes === 0 && (r === null || r.lanes === 0) && (r = t.lastRenderedReducer, r !== null))
        try {
          var u = t.lastRenderedState, f = r(u, n);
          if (a.hasEagerState = !0, a.eagerState = f, Xt(f, u))
            return Gi(e, t, a, 0), De === null && Yi(), !1;
        } catch {
        } finally {
        }
      if (n = wu(e, t, a, l), n !== null)
        return Ut(n, e, l), dd(n, t, l), !0;
    }
    return !1;
  }
  function ac(e, t, n, l) {
    if (l = {
      lane: 2,
      revertLane: Uc(),
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, uo(e)) {
      if (t) throw Error(s(479));
    } else
      t = wu(
        e,
        n,
        l,
        2
      ), t !== null && Ut(t, e, 2);
  }
  function uo(e) {
    var t = e.alternate;
    return e === re || t !== null && t === re;
  }
  function fd(e, t) {
    nr = to = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function dd(e, t, n) {
    if ((n & 4194048) !== 0) {
      var l = t.lanes;
      l &= e.pendingLanes, n |= l, t.lanes = n, Gt(e, n);
    }
  }
  var Zr = {
    readContext: pt,
    use: ao,
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
  Zr.useEffectEvent = Ge;
  var pd = {
    readContext: pt,
    use: ao,
    useCallback: function(e, t) {
      return Tt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: pt,
    useEffect: Kf,
    useImperativeHandle: function(e, t, n) {
      n = n != null ? n.concat([e]) : null, io(
        4194308,
        4,
        ed.bind(null, t, e),
        n
      );
    },
    useLayoutEffect: function(e, t) {
      return io(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      io(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var n = Tt();
      t = t === void 0 ? null : t;
      var l = e();
      if (va) {
        Yt(!0);
        try {
          e();
        } finally {
          Yt(!1);
        }
      }
      return n.memoizedState = [l, t], l;
    },
    useReducer: function(e, t, n) {
      var l = Tt();
      if (n !== void 0) {
        var a = n(t);
        if (va) {
          Yt(!0);
          try {
            n(t);
          } finally {
            Yt(!1);
          }
        }
      } else a = t;
      return l.memoizedState = l.baseState = a, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: a
      }, l.queue = e, e = e.dispatch = Ag.bind(
        null,
        re,
        e
      ), [l.memoizedState, e];
    },
    useRef: function(e) {
      var t = Tt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Iu(e);
      var t = e.queue, n = sd.bind(null, re, t);
      return t.dispatch = n, [e.memoizedState, n];
    },
    useDebugValue: ec,
    useDeferredValue: function(e, t) {
      var n = Tt();
      return tc(n, e, t);
    },
    useTransition: function() {
      var e = Iu(!1);
      return e = rd.bind(
        null,
        re,
        e.queue,
        !0,
        !1
      ), Tt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, n) {
      var l = re, a = Tt();
      if (ge) {
        if (n === void 0)
          throw Error(s(407));
        n = n();
      } else {
        if (n = t(), De === null)
          throw Error(s(349));
        (pe & 127) !== 0 || Mf(l, t, n);
      }
      a.memoizedState = n;
      var r = { value: n, getSnapshot: t };
      return a.queue = r, Kf(Uf.bind(null, l, r, e), [
        e
      ]), l.flags |= 2048, ar(
        9,
        { destroy: void 0 },
        Lf.bind(
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
      var e = Tt(), t = De.identifierPrefix;
      if (ge) {
        var n = Un, l = Ln;
        n = (l & ~(1 << 32 - rt(l) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = no++, 0 < n && (t += "H" + n.toString(32)), t += "_";
      } else
        n = bg++, t = "_" + t + "r_" + n.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: lc,
    useFormState: Ff,
    useActionState: Ff,
    useOptimistic: function(e) {
      var t = Tt();
      t.memoizedState = t.baseState = e;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = n, t = ac.bind(
        null,
        re,
        !0,
        n
      ), n.dispatch = t, [e, t];
    },
    useMemoCache: Pu,
    useCacheRefresh: function() {
      return Tt().memoizedState = Eg.bind(
        null,
        re
      );
    },
    useEffectEvent: function(e) {
      var t = Tt(), n = { impl: e };
      return t.memoizedState = n, function() {
        if ((ke & 2) !== 0)
          throw Error(s(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, rc = {
    readContext: pt,
    use: ao,
    useCallback: nd,
    useContext: pt,
    useEffect: Ju,
    useImperativeHandle: td,
    useInsertionEffect: Wf,
    useLayoutEffect: Jf,
    useMemo: ld,
    useReducer: ro,
    useRef: Zf,
    useState: function() {
      return ro(al);
    },
    useDebugValue: ec,
    useDeferredValue: function(e, t) {
      var n = $e();
      return ad(
        n,
        Ce.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = ro(al)[0], t = $e().memoizedState;
      return [
        typeof e == "boolean" ? e : $r(e),
        t
      ];
    },
    useSyncExternalStore: Rf,
    useId: ud,
    useHostTransitionStatus: lc,
    useFormState: Xf,
    useActionState: Xf,
    useOptimistic: function(e, t) {
      var n = $e();
      return qf(n, Ce, e, t);
    },
    useMemoCache: Pu,
    useCacheRefresh: cd
  };
  rc.useEffectEvent = If;
  var md = {
    readContext: pt,
    use: ao,
    useCallback: nd,
    useContext: pt,
    useEffect: Ju,
    useImperativeHandle: td,
    useInsertionEffect: Wf,
    useLayoutEffect: Jf,
    useMemo: ld,
    useReducer: Ku,
    useRef: Zf,
    useState: function() {
      return Ku(al);
    },
    useDebugValue: ec,
    useDeferredValue: function(e, t) {
      var n = $e();
      return Ce === null ? tc(n, e, t) : ad(
        n,
        Ce.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Ku(al)[0], t = $e().memoizedState;
      return [
        typeof e == "boolean" ? e : $r(e),
        t
      ];
    },
    useSyncExternalStore: Rf,
    useId: ud,
    useHostTransitionStatus: lc,
    useFormState: Pf,
    useActionState: Pf,
    useOptimistic: function(e, t) {
      var n = $e();
      return Ce !== null ? qf(n, Ce, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
    },
    useMemoCache: Pu,
    useCacheRefresh: cd
  };
  md.useEffectEvent = If;
  function ic(e, t, n, l) {
    t = e.memoizedState, n = n(l, t), n = n == null ? t : R({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var oc = {
    enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var l = Wt(), a = Ml(l);
      a.payload = t, n != null && (a.callback = n), t = Ll(e, a, l), t !== null && (Ut(t, e, l), Vr(t, e, l));
    },
    enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var l = Wt(), a = Ml(l);
      a.tag = 1, a.payload = t, n != null && (a.callback = n), t = Ll(e, a, l), t !== null && (Ut(t, e, l), Vr(t, e, l));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = Wt(), l = Ml(n);
      l.tag = 2, t != null && (l.callback = t), t = Ll(e, l, n), t !== null && (Ut(t, e, n), Vr(t, e, n));
    }
  };
  function hd(e, t, n, l, a, r, u) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, r, u) : t.prototype && t.prototype.isPureReactComponent ? !Lr(n, l) || !Lr(a, r) : !0;
  }
  function gd(e, t, n, l) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, l), t.state !== e && oc.enqueueReplaceState(t, t.state, null);
  }
  function Sa(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var l in t)
        l !== "ref" && (n[l] = t[l]);
    }
    if (e = e.defaultProps) {
      n === t && (n = R({}, n));
      for (var a in e)
        n[a] === void 0 && (n[a] = e[a]);
    }
    return n;
  }
  function yd(e) {
    Bi(e);
  }
  function bd(e) {
    console.error(e);
  }
  function vd(e) {
    Bi(e);
  }
  function co(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function Sd(e, t, n) {
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
  function uc(e, t, n) {
    return n = Ml(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      co(e, t);
    }, n;
  }
  function wd(e) {
    return e = Ml(e), e.tag = 3, e;
  }
  function Td(e, t, n, l) {
    var a = n.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var r = l.value;
      e.payload = function() {
        return a(r);
      }, e.callback = function() {
        Sd(t, n, l);
      };
    }
    var u = n.stateNode;
    u !== null && typeof u.componentDidCatch == "function" && (e.callback = function() {
      Sd(t, n, l), typeof a != "function" && (Yl === null ? Yl = /* @__PURE__ */ new Set([this]) : Yl.add(this));
      var f = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: f !== null ? f : ""
      });
    });
  }
  function xg(e, t, n, l, a) {
    if (n.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (t = n.alternate, t !== null && Ka(
        t,
        n,
        a,
        !0
      ), n = Pt.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
            return vn === null ? To() : n.alternate === null && Ve === 0 && (Ve = 3), n.flags &= -257, n.flags |= 65536, n.lanes = a, l === Ki ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([l]) : t.add(l), Rc(e, l, a)), !1;
          case 22:
            return n.flags |= 65536, l === Ki ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([l]) : n.add(l)), Rc(e, l, a)), !1;
        }
        throw Error(s(435, n.tag));
      }
      return Rc(e, l, a), To(), !1;
    }
    if (ge)
      return t = Pt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = a, l !== _u && (e = Error(s(422), { cause: l }), Hr(cn(e, n)))) : (l !== _u && (t = Error(s(423), {
        cause: l
      }), Hr(
        cn(t, n)
      )), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, l = cn(l, n), a = uc(
        e.stateNode,
        l,
        a
      ), Hu(e, a), Ve !== 4 && (Ve = 2)), !1;
    var r = Error(s(520), { cause: l });
    if (r = cn(r, n), li === null ? li = [r] : li.push(r), Ve !== 4 && (Ve = 2), t === null) return !0;
    l = cn(l, n), n = t;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, e = a & -a, n.lanes |= e, e = uc(n.stateNode, l, e), Hu(n, e), !1;
        case 1:
          if (t = n.type, r = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || r !== null && typeof r.componentDidCatch == "function" && (Yl === null || !Yl.has(r))))
            return n.flags |= 65536, a &= -a, n.lanes |= a, a = wd(a), Td(
              a,
              e,
              n,
              l
            ), Hu(n, a), !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var cc = Error(s(461)), Je = !1;
  function mt(e, t, n, l) {
    t.child = e === null ? xf(t, null, n, l) : ba(
      t,
      e.child,
      n,
      l
    );
  }
  function kd(e, t, n, l, a) {
    n = n.render;
    var r = t.ref;
    if ("ref" in l) {
      var u = {};
      for (var f in l)
        f !== "ref" && (u[f] = l[f]);
    } else u = l;
    return ma(t), l = Qu(
      e,
      t,
      n,
      u,
      r,
      a
    ), f = Fu(), e !== null && !Je ? (Xu(e, t, a), rl(e, t, a)) : (ge && f && Au(t), t.flags |= 1, mt(e, t, l, a), t.child);
  }
  function Ed(e, t, n, l, a) {
    if (e === null) {
      var r = n.type;
      return typeof r == "function" && !Tu(r) && r.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = r, Ad(
        e,
        t,
        r,
        l,
        a
      )) : (e = Qi(
        n.type,
        null,
        l,
        t,
        t.mode,
        a
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (r = e.child, !yc(e, a)) {
      var u = r.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Lr, n(u, l) && e.ref === t.ref)
        return rl(e, t, a);
    }
    return t.flags |= 1, e = Jn(r, l), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Ad(e, t, n, l, a) {
    if (e !== null) {
      var r = e.memoizedProps;
      if (Lr(r, l) && e.ref === t.ref)
        if (Je = !1, t.pendingProps = l = r, yc(e, a))
          (e.flags & 131072) !== 0 && (Je = !0);
        else
          return t.lanes = e.lanes, rl(e, t, a);
    }
    return sc(
      e,
      t,
      n,
      l,
      a
    );
  }
  function xd(e, t, n, l) {
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
        return _d(
          e,
          t,
          r,
          n,
          l
        );
      }
      if ((n & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Pi(
          t,
          r !== null ? r.cachePool : null
        ), r !== null ? Cf(t, r) : Bu(), Nf(t);
      else
        return l = t.lanes = 536870912, _d(
          e,
          t,
          r !== null ? r.baseLanes | n : n,
          n,
          l
        );
    } else
      r !== null ? (Pi(t, r.cachePool), Cf(t, r), jl(), t.memoizedState = null) : (e !== null && Pi(t, null), Bu(), jl());
    return mt(e, t, a, n), t.child;
  }
  function Kr(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function _d(e, t, n, l, a) {
    var r = Mu();
    return r = r === null ? null : { parent: Ie._currentValue, pool: r }, t.memoizedState = {
      baseLanes: n,
      cachePool: r
    }, e !== null && Pi(t, null), Bu(), Nf(t), e !== null && Ka(e, t, l, !0), t.childLanes = a, null;
  }
  function so(e, t) {
    return t = po(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Od(e, t, n) {
    return ba(t, e.child, null, n), e = so(t, t.pendingProps), e.flags |= 2, Zt(t), t.memoizedState = null, e;
  }
  function _g(e, t, n) {
    var l = t.pendingProps, a = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (ge) {
        if (l.mode === "hidden")
          return e = so(t, l), t.lanes = 536870912, Kr(null, e);
        if (Gu(t), (e = Le) ? (e = Bp(
          e,
          dn
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Cl !== null ? { id: Ln, overflow: Un } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = ff(e), n.return = t, t.child = n, dt = t, Le = null)) : e = null, e === null) throw zl(t);
        return t.lanes = 536870912, null;
      }
      return so(t, l);
    }
    var r = e.memoizedState;
    if (r !== null) {
      var u = r.dehydrated;
      if (Gu(t), a)
        if (t.flags & 256)
          t.flags &= -257, t = Od(
            e,
            t,
            n
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(s(558));
      else if (Je || Ka(e, t, n, !1), a = (n & e.childLanes) !== 0, Je || a) {
        if (l = De, l !== null && (u = Xn(l, n), u !== 0 && u !== r.retryLane))
          throw r.retryLane = u, sa(e, u), Ut(l, e, u), cc;
        To(), t = Od(
          e,
          t,
          n
        );
      } else
        e = r.treeContext, Le = pn(u.nextSibling), dt = t, ge = !0, Nl = null, dn = !1, e !== null && mf(t, e), t = so(t, l), t.flags |= 4096;
      return t;
    }
    return e = Jn(e.child, {
      mode: l.mode,
      children: l.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function fo(e, t) {
    var n = t.ref;
    if (n === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object")
        throw Error(s(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function sc(e, t, n, l, a) {
    return ma(t), n = Qu(
      e,
      t,
      n,
      l,
      void 0,
      a
    ), l = Fu(), e !== null && !Je ? (Xu(e, t, a), rl(e, t, a)) : (ge && l && Au(t), t.flags |= 1, mt(e, t, n, a), t.child);
  }
  function Cd(e, t, n, l, a, r) {
    return ma(t), t.updateQueue = null, n = Df(
      t,
      l,
      n,
      a
    ), zf(e), l = Fu(), e !== null && !Je ? (Xu(e, t, r), rl(e, t, r)) : (ge && l && Au(t), t.flags |= 1, mt(e, t, n, r), t.child);
  }
  function Nd(e, t, n, l, a) {
    if (ma(t), t.stateNode === null) {
      var r = Xa, u = n.contextType;
      typeof u == "object" && u !== null && (r = pt(u)), r = new n(l, r), t.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = oc, t.stateNode = r, r._reactInternals = t, r = t.stateNode, r.props = l, r.state = t.memoizedState, r.refs = {}, Uu(t), u = n.contextType, r.context = typeof u == "object" && u !== null ? pt(u) : Xa, r.state = t.memoizedState, u = n.getDerivedStateFromProps, typeof u == "function" && (ic(
        t,
        n,
        u,
        l
      ), r.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (u = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), u !== r.state && oc.enqueueReplaceState(r, r.state, null), Fr(t, l, r, a), Qr(), r.state = t.memoizedState), typeof r.componentDidMount == "function" && (t.flags |= 4194308), l = !0;
    } else if (e === null) {
      r = t.stateNode;
      var f = t.memoizedProps, h = Sa(n, f);
      r.props = h;
      var k = r.context, O = n.contextType;
      u = Xa, typeof O == "object" && O !== null && (u = pt(O));
      var D = n.getDerivedStateFromProps;
      O = typeof D == "function" || typeof r.getSnapshotBeforeUpdate == "function", f = t.pendingProps !== f, O || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (f || k !== u) && gd(
        t,
        r,
        l,
        u
      ), Rl = !1;
      var E = t.memoizedState;
      r.state = E, Fr(t, l, r, a), Qr(), k = t.memoizedState, f || E !== k || Rl ? (typeof D == "function" && (ic(
        t,
        n,
        D,
        l
      ), k = t.memoizedState), (h = Rl || hd(
        t,
        n,
        h,
        l,
        E,
        k,
        u
      )) ? (O || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount()), typeof r.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof r.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = l, t.memoizedState = k), r.props = l, r.state = k, r.context = u, l = h) : (typeof r.componentDidMount == "function" && (t.flags |= 4194308), l = !1);
    } else {
      r = t.stateNode, ju(e, t), u = t.memoizedProps, O = Sa(n, u), r.props = O, D = t.pendingProps, E = r.context, k = n.contextType, h = Xa, typeof k == "object" && k !== null && (h = pt(k)), f = n.getDerivedStateFromProps, (k = typeof f == "function" || typeof r.getSnapshotBeforeUpdate == "function") || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (u !== D || E !== h) && gd(
        t,
        r,
        l,
        h
      ), Rl = !1, E = t.memoizedState, r.state = E, Fr(t, l, r, a), Qr();
      var A = t.memoizedState;
      u !== D || E !== A || Rl || e !== null && e.dependencies !== null && Xi(e.dependencies) ? (typeof f == "function" && (ic(
        t,
        n,
        f,
        l
      ), A = t.memoizedState), (O = Rl || hd(
        t,
        n,
        O,
        l,
        E,
        A,
        h
      ) || e !== null && e.dependencies !== null && Xi(e.dependencies)) ? (k || typeof r.UNSAFE_componentWillUpdate != "function" && typeof r.componentWillUpdate != "function" || (typeof r.componentWillUpdate == "function" && r.componentWillUpdate(l, A, h), typeof r.UNSAFE_componentWillUpdate == "function" && r.UNSAFE_componentWillUpdate(
        l,
        A,
        h
      )), typeof r.componentDidUpdate == "function" && (t.flags |= 4), typeof r.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof r.componentDidUpdate != "function" || u === e.memoizedProps && E === e.memoizedState || (t.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && E === e.memoizedState || (t.flags |= 1024), t.memoizedProps = l, t.memoizedState = A), r.props = l, r.state = A, r.context = h, l = O) : (typeof r.componentDidUpdate != "function" || u === e.memoizedProps && E === e.memoizedState || (t.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && E === e.memoizedState || (t.flags |= 1024), l = !1);
    }
    return r = l, fo(e, t), l = (t.flags & 128) !== 0, r || l ? (r = t.stateNode, n = l && typeof n.getDerivedStateFromError != "function" ? null : r.render(), t.flags |= 1, e !== null && l ? (t.child = ba(
      t,
      e.child,
      null,
      a
    ), t.child = ba(
      t,
      null,
      n,
      a
    )) : mt(e, t, n, a), t.memoizedState = r.state, e = t.child) : e = rl(
      e,
      t,
      a
    ), e;
  }
  function zd(e, t, n, l) {
    return da(), t.flags |= 256, mt(e, t, n, l), t.child;
  }
  var fc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function dc(e) {
    return { baseLanes: e, cachePool: Sf() };
  }
  function pc(e, t, n) {
    return e = e !== null ? e.childLanes & ~n : 0, t && (e |= It), e;
  }
  function Dd(e, t, n) {
    var l = t.pendingProps, a = !1, r = (t.flags & 128) !== 0, u;
    if ((u = r) || (u = e !== null && e.memoizedState === null ? !1 : (Xe.current & 2) !== 0), u && (a = !0, t.flags &= -129), u = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (ge) {
        if (a ? Ul(t) : jl(), (e = Le) ? (e = Bp(
          e,
          dn
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Cl !== null ? { id: Ln, overflow: Un } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = ff(e), n.return = t, t.child = n, dt = t, Le = null)) : e = null, e === null) throw zl(t);
        return Zc(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var f = l.children;
      return l = l.fallback, a ? (jl(), a = t.mode, f = po(
        { mode: "hidden", children: f },
        a
      ), l = fa(
        l,
        a,
        n,
        null
      ), f.return = t, l.return = t, f.sibling = l, t.child = f, l = t.child, l.memoizedState = dc(n), l.childLanes = pc(
        e,
        u,
        n
      ), t.memoizedState = fc, Kr(null, l)) : (Ul(t), mc(t, f));
    }
    var h = e.memoizedState;
    if (h !== null && (f = h.dehydrated, f !== null)) {
      if (r)
        t.flags & 256 ? (Ul(t), t.flags &= -257, t = hc(
          e,
          t,
          n
        )) : t.memoizedState !== null ? (jl(), t.child = e.child, t.flags |= 128, t = null) : (jl(), f = l.fallback, a = t.mode, l = po(
          { mode: "visible", children: l.children },
          a
        ), f = fa(
          f,
          a,
          n,
          null
        ), f.flags |= 2, l.return = t, f.return = t, l.sibling = f, t.child = l, ba(
          t,
          e.child,
          null,
          n
        ), l = t.child, l.memoizedState = dc(n), l.childLanes = pc(
          e,
          u,
          n
        ), t.memoizedState = fc, t = Kr(null, l));
      else if (Ul(t), Zc(f)) {
        if (u = f.nextSibling && f.nextSibling.dataset, u) var k = u.dgst;
        u = k, l = Error(s(419)), l.stack = "", l.digest = u, Hr({ value: l, source: null, stack: null }), t = hc(
          e,
          t,
          n
        );
      } else if (Je || Ka(e, t, n, !1), u = (n & e.childLanes) !== 0, Je || u) {
        if (u = De, u !== null && (l = Xn(u, n), l !== 0 && l !== h.retryLane))
          throw h.retryLane = l, sa(e, l), Ut(u, e, l), cc;
        Pc(f) || To(), t = hc(
          e,
          t,
          n
        );
      } else
        Pc(f) ? (t.flags |= 192, t.child = e.child, t = null) : (e = h.treeContext, Le = pn(
          f.nextSibling
        ), dt = t, ge = !0, Nl = null, dn = !1, e !== null && mf(t, e), t = mc(
          t,
          l.children
        ), t.flags |= 4096);
      return t;
    }
    return a ? (jl(), f = l.fallback, a = t.mode, h = e.child, k = h.sibling, l = Jn(h, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = h.subtreeFlags & 65011712, k !== null ? f = Jn(
      k,
      f
    ) : (f = fa(
      f,
      a,
      n,
      null
    ), f.flags |= 2), f.return = t, l.return = t, l.sibling = f, t.child = l, Kr(null, l), l = t.child, f = e.child.memoizedState, f === null ? f = dc(n) : (a = f.cachePool, a !== null ? (h = Ie._currentValue, a = a.parent !== h ? { parent: h, pool: h } : a) : a = Sf(), f = {
      baseLanes: f.baseLanes | n,
      cachePool: a
    }), l.memoizedState = f, l.childLanes = pc(
      e,
      u,
      n
    ), t.memoizedState = fc, Kr(e.child, l)) : (Ul(t), n = e.child, e = n.sibling, n = Jn(n, {
      mode: "visible",
      children: l.children
    }), n.return = t, n.sibling = null, e !== null && (u = t.deletions, u === null ? (t.deletions = [e], t.flags |= 16) : u.push(e)), t.child = n, t.memoizedState = null, n);
  }
  function mc(e, t) {
    return t = po(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function po(e, t) {
    return e = $t(22, e, null, t), e.lanes = 0, e;
  }
  function hc(e, t, n) {
    return ba(t, e.child, null, n), e = mc(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Rd(e, t, n) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), Nu(e.return, t, n);
  }
  function gc(e, t, n, l, a, r) {
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
  function Md(e, t, n) {
    var l = t.pendingProps, a = l.revealOrder, r = l.tail;
    l = l.children;
    var u = Xe.current, f = (u & 2) !== 0;
    if (f ? (u = u & 1 | 2, t.flags |= 128) : u &= 1, P(Xe, u), mt(e, t, l, n), l = ge ? jr : 0, !f && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && Rd(e, n, t);
        else if (e.tag === 19)
          Rd(e, n, t);
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
          e = n.alternate, e !== null && eo(e) === null && (a = n), n = n.sibling;
        n = a, n === null ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), gc(
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
          if (e = a.alternate, e !== null && eo(e) === null) {
            t.child = a;
            break;
          }
          e = a.sibling, a.sibling = n, n = a, a = e;
        }
        gc(
          t,
          !0,
          n,
          null,
          r,
          l
        );
        break;
      case "together":
        gc(
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
  function rl(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Bl |= t.lanes, (n & t.childLanes) === 0)
      if (e !== null) {
        if (Ka(
          e,
          t,
          n,
          !1
        ), (n & t.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && t.child !== e.child)
      throw Error(s(153));
    if (t.child !== null) {
      for (e = t.child, n = Jn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        e = e.sibling, n = n.sibling = Jn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function yc(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Xi(e)));
  }
  function Og(e, t, n) {
    switch (t.tag) {
      case 3:
        kn(t, t.stateNode.containerInfo), Dl(t, Ie, e.memoizedState.cache), da();
        break;
      case 27:
      case 5:
        kr(t);
        break;
      case 4:
        kn(t, t.stateNode.containerInfo);
        break;
      case 10:
        Dl(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, Gu(t), null;
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null ? (Ul(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Dd(e, t, n) : (Ul(t), e = rl(
            e,
            t,
            n
          ), e !== null ? e.sibling : null);
        Ul(t);
        break;
      case 19:
        var a = (e.flags & 128) !== 0;
        if (l = (n & t.childLanes) !== 0, l || (Ka(
          e,
          t,
          n,
          !1
        ), l = (n & t.childLanes) !== 0), a) {
          if (l)
            return Md(
              e,
              t,
              n
            );
          t.flags |= 128;
        }
        if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), P(Xe, Xe.current), l) break;
        return null;
      case 22:
        return t.lanes = 0, xd(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        Dl(t, Ie, e.memoizedState.cache);
    }
    return rl(e, t, n);
  }
  function Ld(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        Je = !0;
      else {
        if (!yc(e, n) && (t.flags & 128) === 0)
          return Je = !1, Og(
            e,
            t,
            n
          );
        Je = (e.flags & 131072) !== 0;
      }
    else
      Je = !1, ge && (t.flags & 1048576) !== 0 && pf(t, jr, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var l = t.pendingProps;
          if (e = ga(t.elementType), t.type = e, typeof e == "function")
            Tu(e) ? (l = Sa(e, l), t.tag = 1, t = Nd(
              null,
              t,
              e,
              l,
              n
            )) : (t.tag = 0, t = sc(
              null,
              t,
              e,
              l,
              n
            ));
          else {
            if (e != null) {
              var a = e.$$typeof;
              if (a === ae) {
                t.tag = 11, t = kd(
                  null,
                  t,
                  e,
                  l,
                  n
                );
                break e;
              } else if (a === K) {
                t.tag = 14, t = Ed(
                  null,
                  t,
                  e,
                  l,
                  n
                );
                break e;
              }
            }
            throw t = Qe(e) || e, Error(s(306, t, ""));
          }
        }
        return t;
      case 0:
        return sc(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 1:
        return l = t.type, a = Sa(
          l,
          t.pendingProps
        ), Nd(
          e,
          t,
          l,
          a,
          n
        );
      case 3:
        e: {
          if (kn(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(s(387));
          l = t.pendingProps;
          var r = t.memoizedState;
          a = r.element, ju(e, t), Fr(t, l, null, n);
          var u = t.memoizedState;
          if (l = u.cache, Dl(t, Ie, l), l !== r.cache && zu(
            t,
            [Ie],
            n,
            !0
          ), Qr(), l = u.element, r.isDehydrated)
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
              a = cn(
                Error(s(424)),
                t
              ), Hr(a), t = zd(
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
              for (Le = pn(e.firstChild), dt = t, ge = !0, Nl = null, dn = !0, n = xf(
                t,
                null,
                l,
                n
              ), t.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
            }
          else {
            if (da(), l === a) {
              t = rl(
                e,
                t,
                n
              );
              break e;
            }
            mt(e, t, l, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return fo(e, t), e === null ? (n = Xp(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = n : ge || (n = t.type, e = t.pendingProps, l = Co(
          at.current
        ).createElement(n), l[Ze] = t, l[it] = e, ht(l, n, e), Ke(l), t.stateNode = l) : t.memoizedState = Xp(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return kr(t), e === null && ge && (l = t.stateNode = Vp(
          t.type,
          t.pendingProps,
          at.current
        ), dt = t, dn = !0, a = Le, Fl(t.type) ? (Kc = a, Le = pn(l.firstChild)) : Le = a), mt(
          e,
          t,
          t.pendingProps.children,
          n
        ), fo(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && ge && ((a = l = Le) && (l = ay(
          l,
          t.type,
          t.pendingProps,
          dn
        ), l !== null ? (t.stateNode = l, dt = t, Le = pn(l.firstChild), dn = !1, a = !0) : a = !1), a || zl(t)), kr(t), a = t.type, r = t.pendingProps, u = e !== null ? e.memoizedProps : null, l = r.children, Fc(a, r) ? l = null : u !== null && Fc(a, u) && (t.flags |= 32), t.memoizedState !== null && (a = Qu(
          e,
          t,
          vg,
          null,
          null,
          n
        ), fi._currentValue = a), fo(e, t), mt(e, t, l, n), t.child;
      case 6:
        return e === null && ge && ((e = n = Le) && (n = ry(
          n,
          t.pendingProps,
          dn
        ), n !== null ? (t.stateNode = n, dt = t, Le = null, e = !0) : e = !1), e || zl(t)), null;
      case 13:
        return Dd(e, t, n);
      case 4:
        return kn(
          t,
          t.stateNode.containerInfo
        ), l = t.pendingProps, e === null ? t.child = ba(
          t,
          null,
          l,
          n
        ) : mt(e, t, l, n), t.child;
      case 11:
        return kd(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 7:
        return mt(
          e,
          t,
          t.pendingProps,
          n
        ), t.child;
      case 8:
        return mt(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 12:
        return mt(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 10:
        return l = t.pendingProps, Dl(t, t.type, l.value), mt(e, t, l.children, n), t.child;
      case 9:
        return a = t.type._context, l = t.pendingProps.children, ma(t), a = pt(a), l = l(a), t.flags |= 1, mt(e, t, l, n), t.child;
      case 14:
        return Ed(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 15:
        return Ad(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 19:
        return Md(e, t, n);
      case 31:
        return _g(e, t, n);
      case 22:
        return xd(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        return ma(t), l = pt(Ie), e === null ? (a = Mu(), a === null && (a = De, r = Du(), a.pooledCache = r, r.refCount++, r !== null && (a.pooledCacheLanes |= n), a = r), t.memoizedState = { parent: l, cache: a }, Uu(t), Dl(t, Ie, a)) : ((e.lanes & n) !== 0 && (ju(e, t), Fr(t, null, null, n), Qr()), a = e.memoizedState, r = t.memoizedState, a.parent !== l ? (a = { parent: l, cache: l }, t.memoizedState = a, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a), Dl(t, Ie, l)) : (l = r.cache, Dl(t, Ie, l), l !== a.cache && zu(
          t,
          [Ie],
          n,
          !0
        ))), mt(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(s(156, t.tag));
  }
  function il(e) {
    e.flags |= 4;
  }
  function bc(e, t, n, l, a) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (a & 335544128) === a)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (up()) e.flags |= 8192;
        else
          throw ya = Ki, Lu;
    } else e.flags &= -16777217;
  }
  function Ud(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Ip(t))
      if (up()) e.flags |= 8192;
      else
        throw ya = Ki, Lu;
  }
  function mo(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Er() : 536870912, e.lanes |= t, ur |= t);
  }
  function Ir(e, t) {
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
  function Cg(e, t, n) {
    var l = t.pendingProps;
    switch (xu(t), t.tag) {
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
        return n = t.stateNode, l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), nl(Ie), ct(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (Za(t) ? il(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Ou())), Ue(t), null;
      case 26:
        var a = t.type, r = t.memoizedState;
        return e === null ? (il(t), r !== null ? (Ue(t), Ud(t, r)) : (Ue(t), bc(
          t,
          a,
          null,
          l,
          n
        ))) : r ? r !== e.memoizedState ? (il(t), Ue(t), Ud(t, r)) : (Ue(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== l && il(t), Ue(t), bc(
          t,
          a,
          e,
          l,
          n
        )), null;
      case 27:
        if (Aa(t), n = at.current, a = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && il(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(s(166));
            return Ue(t), null;
          }
          e = be.current, Za(t) ? hf(t) : (e = Vp(a, l, n), t.stateNode = e, il(t));
        }
        return Ue(t), null;
      case 5:
        if (Aa(t), a = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && il(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(s(166));
            return Ue(t), null;
          }
          if (r = be.current, Za(t))
            hf(t);
          else {
            var u = Co(
              at.current
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
            r[Ze] = t, r[it] = l;
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
            e: switch (ht(r, a, l), a) {
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
            l && il(t);
          }
        }
        return Ue(t), bc(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          n
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== l && il(t);
        else {
          if (typeof l != "string" && t.stateNode === null)
            throw Error(s(166));
          if (e = at.current, Za(t)) {
            if (e = t.stateNode, n = t.memoizedProps, l = null, a = dt, a !== null)
              switch (a.tag) {
                case 27:
                case 5:
                  l = a.memoizedProps;
              }
            e[Ze] = t, e = !!(e.nodeValue === n || l !== null && l.suppressHydrationWarning === !0 || Dp(e.nodeValue, n)), e || zl(t, !0);
          } else
            e = Co(e).createTextNode(
              l
            ), e[Ze] = t, t.stateNode = e;
        }
        return Ue(t), null;
      case 31:
        if (n = t.memoizedState, e === null || e.memoizedState !== null) {
          if (l = Za(t), n !== null) {
            if (e === null) {
              if (!l) throw Error(s(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(557));
              e[Ze] = t;
            } else
              da(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ue(t), e = !1;
          } else
            n = Ou(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
          if (!e)
            return t.flags & 256 ? (Zt(t), t) : (Zt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(s(558));
        }
        return Ue(t), null;
      case 13:
        if (l = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (a = Za(t), l !== null && l.dehydrated !== null) {
            if (e === null) {
              if (!a) throw Error(s(318));
              if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(s(317));
              a[Ze] = t;
            } else
              da(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ue(t), a = !1;
          } else
            a = Ou(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), a = !0;
          if (!a)
            return t.flags & 256 ? (Zt(t), t) : (Zt(t), null);
        }
        return Zt(t), (t.flags & 128) !== 0 ? (t.lanes = n, t) : (n = l !== null, e = e !== null && e.memoizedState !== null, n && (l = t.child, a = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (a = l.alternate.memoizedState.cachePool.pool), r = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (r = l.memoizedState.cachePool.pool), r !== a && (l.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), mo(t, t.updateQueue), Ue(t), null);
      case 4:
        return ct(), e === null && Bc(t.stateNode.containerInfo), Ue(t), null;
      case 10:
        return nl(t.type), Ue(t), null;
      case 19:
        if (ce(Xe), l = t.memoizedState, l === null) return Ue(t), null;
        if (a = (t.flags & 128) !== 0, r = l.rendering, r === null)
          if (a) Ir(l, !1);
          else {
            if (Ve !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (r = eo(e), r !== null) {
                  for (t.flags |= 128, Ir(l, !1), e = r.updateQueue, t.updateQueue = e, mo(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; )
                    sf(n, e), n = n.sibling;
                  return P(
                    Xe,
                    Xe.current & 1 | 2
                  ), ge && el(t, l.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            l.tail !== null && st() > vo && (t.flags |= 128, a = !0, Ir(l, !1), t.lanes = 4194304);
          }
        else {
          if (!a)
            if (e = eo(r), e !== null) {
              if (t.flags |= 128, a = !0, e = e.updateQueue, t.updateQueue = e, mo(t, e), Ir(l, !0), l.tail === null && l.tailMode === "hidden" && !r.alternate && !ge)
                return Ue(t), null;
            } else
              2 * st() - l.renderingStartTime > vo && n !== 536870912 && (t.flags |= 128, a = !0, Ir(l, !1), t.lanes = 4194304);
          l.isBackwards ? (r.sibling = t.child, t.child = r) : (e = l.last, e !== null ? e.sibling = r : t.child = r, l.last = r);
        }
        return l.tail !== null ? (e = l.tail, l.rendering = e, l.tail = e.sibling, l.renderingStartTime = st(), e.sibling = null, n = Xe.current, P(
          Xe,
          a ? n & 1 | 2 : n & 1
        ), ge && el(t, l.treeForkCount), e) : (Ue(t), null);
      case 22:
      case 23:
        return Zt(t), Yu(), l = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (t.flags |= 8192) : l && (t.flags |= 8192), l ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (Ue(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ue(t), n = t.updateQueue, n !== null && mo(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== n && (t.flags |= 2048), e !== null && ce(ha), null;
      case 24:
        return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), nl(Ie), Ue(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function Ng(e, t) {
    switch (xu(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return nl(Ie), ct(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Aa(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Zt(t), t.alternate === null)
            throw Error(s(340));
          da();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (Zt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(s(340));
          da();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return ce(Xe), null;
      case 4:
        return ct(), null;
      case 10:
        return nl(t.type), null;
      case 22:
      case 23:
        return Zt(t), Yu(), e !== null && ce(ha), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return nl(Ie), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function jd(e, t) {
    switch (xu(t), t.tag) {
      case 3:
        nl(Ie), ct();
        break;
      case 26:
      case 27:
      case 5:
        Aa(t);
        break;
      case 4:
        ct();
        break;
      case 31:
        t.memoizedState !== null && Zt(t);
        break;
      case 13:
        Zt(t);
        break;
      case 19:
        ce(Xe);
        break;
      case 10:
        nl(t.type);
        break;
      case 22:
      case 23:
        Zt(t), Yu(), e !== null && ce(ha);
        break;
      case 24:
        nl(Ie);
    }
  }
  function Wr(e, t) {
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
      _e(t, t.return, f);
    }
  }
  function Hl(e, t, n) {
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
              var h = n, k = f;
              try {
                k();
              } catch (O) {
                _e(
                  a,
                  h,
                  O
                );
              }
            }
          }
          l = l.next;
        } while (l !== r);
      }
    } catch (O) {
      _e(t, t.return, O);
    }
  }
  function Hd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        Of(t, n);
      } catch (l) {
        _e(e, e.return, l);
      }
    }
  }
  function qd(e, t, n) {
    n.props = Sa(
      e.type,
      e.memoizedProps
    ), n.state = e.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (l) {
      _e(e, t, l);
    }
  }
  function Jr(e, t) {
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
      _e(e, t, a);
    }
  }
  function jn(e, t) {
    var n = e.ref, l = e.refCleanup;
    if (n !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (a) {
          _e(e, t, a);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (a) {
          _e(e, t, a);
        }
      else n.current = null;
  }
  function Bd(e) {
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
      _e(e, e.return, a);
    }
  }
  function vc(e, t, n) {
    try {
      var l = e.stateNode;
      Wg(l, e.type, n, t), l[it] = t;
    } catch (a) {
      _e(e, e.return, a);
    }
  }
  function Yd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Fl(e.type) || e.tag === 4;
  }
  function Sc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Yd(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Fl(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function wc(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Qt));
    else if (l !== 4 && (l === 27 && Fl(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null))
      for (wc(e, t, n), e = e.sibling; e !== null; )
        wc(e, t, n), e = e.sibling;
  }
  function ho(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (l !== 4 && (l === 27 && Fl(e.type) && (n = e.stateNode), e = e.child, e !== null))
      for (ho(e, t, n), e = e.sibling; e !== null; )
        ho(e, t, n), e = e.sibling;
  }
  function Gd(e) {
    var t = e.stateNode, n = e.memoizedProps;
    try {
      for (var l = e.type, a = t.attributes; a.length; )
        t.removeAttributeNode(a[0]);
      ht(t, l, n), t[Ze] = e, t[it] = n;
    } catch (r) {
      _e(e, e.return, r);
    }
  }
  var ol = !1, et = !1, Tc = !1, Vd = typeof WeakSet == "function" ? WeakSet : Set, ot = null;
  function zg(e, t) {
    if (e = e.containerInfo, Vc = Uo, e = ef(e), hu(e)) {
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
            var u = 0, f = -1, h = -1, k = 0, O = 0, D = e, E = null;
            t: for (; ; ) {
              for (var A; D !== n || a !== 0 && D.nodeType !== 3 || (f = u + a), D !== r || l !== 0 && D.nodeType !== 3 || (h = u + l), D.nodeType === 3 && (u += D.nodeValue.length), (A = D.firstChild) !== null; )
                E = D, D = A;
              for (; ; ) {
                if (D === e) break t;
                if (E === n && ++k === a && (f = u), E === r && ++O === l && (h = u), (A = D.nextSibling) !== null) break;
                D = E, E = D.parentNode;
              }
              D = A;
            }
            n = f === -1 || h === -1 ? null : { start: f, end: h };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Qc = { focusedElem: e, selectionRange: n }, Uo = !1, ot = t; ot !== null; )
      if (t = ot, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, ot = e;
      else
        for (; ot !== null; ) {
          switch (t = ot, r = t.alternate, e = t.flags, t.tag) {
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
                  var Q = Sa(
                    n.type,
                    a
                  );
                  e = l.getSnapshotBeforeUpdate(
                    Q,
                    r
                  ), l.__reactInternalSnapshotBeforeUpdate = e;
                } catch (J) {
                  _e(
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
                  $c(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      $c(e);
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
              if ((e & 1024) !== 0) throw Error(s(163));
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, ot = e;
            break;
          }
          ot = t.return;
        }
  }
  function Qd(e, t, n) {
    var l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        cl(e, n), l & 4 && Wr(5, n);
        break;
      case 1:
        if (cl(e, n), l & 4)
          if (e = n.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (u) {
              _e(n, n.return, u);
            }
          else {
            var a = Sa(
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
              _e(
                n,
                n.return,
                u
              );
            }
          }
        l & 64 && Hd(n), l & 512 && Jr(n, n.return);
        break;
      case 3:
        if (cl(e, n), l & 64 && (e = n.updateQueue, e !== null)) {
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
            Of(e, t);
          } catch (u) {
            _e(n, n.return, u);
          }
        }
        break;
      case 27:
        t === null && l & 4 && Gd(n);
      case 26:
      case 5:
        cl(e, n), t === null && l & 4 && Bd(n), l & 512 && Jr(n, n.return);
        break;
      case 12:
        cl(e, n);
        break;
      case 31:
        cl(e, n), l & 4 && $d(e, n);
        break;
      case 13:
        cl(e, n), l & 4 && Pd(e, n), l & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = Bg.bind(
          null,
          n
        ), iy(e, n))));
        break;
      case 22:
        if (l = n.memoizedState !== null || ol, !l) {
          t = t !== null && t.memoizedState !== null || et, a = ol;
          var r = et;
          ol = l, (et = t) && !r ? sl(
            e,
            n,
            (n.subtreeFlags & 8772) !== 0
          ) : cl(e, n), ol = a, et = r;
        }
        break;
      case 30:
        break;
      default:
        cl(e, n);
    }
  }
  function Fd(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Fd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && xr(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var qe = null, Dt = !1;
  function ul(e, t, n) {
    for (n = n.child; n !== null; )
      Xd(e, t, n), n = n.sibling;
  }
  function Xd(e, t, n) {
    if (Pe && typeof Pe.onCommitFiberUnmount == "function")
      try {
        Pe.onCommitFiberUnmount(Fn, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        et || jn(n, t), ul(
          e,
          t,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        et || jn(n, t);
        var l = qe, a = Dt;
        Fl(n.type) && (qe = n.stateNode, Dt = !1), ul(
          e,
          t,
          n
        ), ui(n.stateNode), qe = l, Dt = a;
        break;
      case 5:
        et || jn(n, t);
      case 6:
        if (l = qe, a = Dt, qe = null, ul(
          e,
          t,
          n
        ), qe = l, Dt = a, qe !== null)
          if (Dt)
            try {
              (qe.nodeType === 9 ? qe.body : qe.nodeName === "HTML" ? qe.ownerDocument.body : qe).removeChild(n.stateNode);
            } catch (r) {
              _e(
                n,
                t,
                r
              );
            }
          else
            try {
              qe.removeChild(n.stateNode);
            } catch (r) {
              _e(
                n,
                t,
                r
              );
            }
        break;
      case 18:
        qe !== null && (Dt ? (e = qe, Hp(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          n.stateNode
        ), gr(e)) : Hp(qe, n.stateNode));
        break;
      case 4:
        l = qe, a = Dt, qe = n.stateNode.containerInfo, Dt = !0, ul(
          e,
          t,
          n
        ), qe = l, Dt = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Hl(2, n, t), et || Hl(4, n, t), ul(
          e,
          t,
          n
        );
        break;
      case 1:
        et || (jn(n, t), l = n.stateNode, typeof l.componentWillUnmount == "function" && qd(
          n,
          t,
          l
        )), ul(
          e,
          t,
          n
        );
        break;
      case 21:
        ul(
          e,
          t,
          n
        );
        break;
      case 22:
        et = (l = et) || n.memoizedState !== null, ul(
          e,
          t,
          n
        ), et = l;
        break;
      default:
        ul(
          e,
          t,
          n
        );
    }
  }
  function $d(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        gr(e);
      } catch (n) {
        _e(t, t.return, n);
      }
    }
  }
  function Pd(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        gr(e);
      } catch (n) {
        _e(t, t.return, n);
      }
  }
  function Dg(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Vd()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Vd()), t;
      default:
        throw Error(s(435, e.tag));
    }
  }
  function go(e, t) {
    var n = Dg(e);
    t.forEach(function(l) {
      if (!n.has(l)) {
        n.add(l);
        var a = Yg.bind(null, e, l);
        l.then(a, a);
      }
    });
  }
  function Rt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var a = n[l], r = e, u = t, f = u;
        e: for (; f !== null; ) {
          switch (f.tag) {
            case 27:
              if (Fl(f.type)) {
                qe = f.stateNode, Dt = !1;
                break e;
              }
              break;
            case 5:
              qe = f.stateNode, Dt = !1;
              break e;
            case 3:
            case 4:
              qe = f.stateNode.containerInfo, Dt = !0;
              break e;
          }
          f = f.return;
        }
        if (qe === null) throw Error(s(160));
        Xd(r, u, a), qe = null, Dt = !1, r = a.alternate, r !== null && (r.return = null), a.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        Zd(t, e), t = t.sibling;
  }
  var _n = null;
  function Zd(e, t) {
    var n = e.alternate, l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Rt(t, e), Mt(e), l & 4 && (Hl(3, e, e.return), Wr(3, e), Hl(5, e, e.return));
        break;
      case 1:
        Rt(t, e), Mt(e), l & 512 && (et || n === null || jn(n, n.return)), l & 64 && ol && (e = e.updateQueue, e !== null && (l = e.callbacks, l !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? l : n.concat(l))));
        break;
      case 26:
        var a = _n;
        if (Rt(t, e), Mt(e), l & 512 && (et || n === null || jn(n, n.return)), l & 4) {
          var r = n !== null ? n.memoizedState : null;
          if (l = e.memoizedState, n === null)
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  l = e.type, n = e.memoizedProps, a = a.ownerDocument || a;
                  t: switch (l) {
                    case "title":
                      r = a.getElementsByTagName("title")[0], (!r || r[on] || r[Ze] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = a.createElement(l), a.head.insertBefore(
                        r,
                        a.querySelector("head > title")
                      )), ht(r, l, n), r[Ze] = e, Ke(r), l = r;
                      break e;
                    case "link":
                      var u = Zp(
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
                      r = a.createElement(l), ht(r, l, n), a.head.appendChild(r);
                      break;
                    case "meta":
                      if (u = Zp(
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
                      r = a.createElement(l), ht(r, l, n), a.head.appendChild(r);
                      break;
                    default:
                      throw Error(s(468, l));
                  }
                  r[Ze] = e, Ke(r), l = r;
                }
                e.stateNode = l;
              } else
                Kp(
                  a,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Pp(
                a,
                l,
                e.memoizedProps
              );
          else
            r !== l ? (r === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : r.count--, l === null ? Kp(
              a,
              e.type,
              e.stateNode
            ) : Pp(
              a,
              l,
              e.memoizedProps
            )) : l === null && e.stateNode !== null && vc(
              e,
              e.memoizedProps,
              n.memoizedProps
            );
        }
        break;
      case 27:
        Rt(t, e), Mt(e), l & 512 && (et || n === null || jn(n, n.return)), n !== null && l & 4 && vc(
          e,
          e.memoizedProps,
          n.memoizedProps
        );
        break;
      case 5:
        if (Rt(t, e), Mt(e), l & 512 && (et || n === null || jn(n, n.return)), e.flags & 32) {
          a = e.stateNode;
          try {
            wt(a, "");
          } catch (Q) {
            _e(e, e.return, Q);
          }
        }
        l & 4 && e.stateNode != null && (a = e.memoizedProps, vc(
          e,
          a,
          n !== null ? n.memoizedProps : a
        )), l & 1024 && (Tc = !0);
        break;
      case 6:
        if (Rt(t, e), Mt(e), l & 4) {
          if (e.stateNode === null)
            throw Error(s(162));
          l = e.memoizedProps, n = e.stateNode;
          try {
            n.nodeValue = l;
          } catch (Q) {
            _e(e, e.return, Q);
          }
        }
        break;
      case 3:
        if (Do = null, a = _n, _n = No(t.containerInfo), Rt(t, e), _n = a, Mt(e), l & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            gr(t.containerInfo);
          } catch (Q) {
            _e(e, e.return, Q);
          }
        Tc && (Tc = !1, Kd(e));
        break;
      case 4:
        l = _n, _n = No(
          e.stateNode.containerInfo
        ), Rt(t, e), Mt(e), _n = l;
        break;
      case 12:
        Rt(t, e), Mt(e);
        break;
      case 31:
        Rt(t, e), Mt(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, go(e, l)));
        break;
      case 13:
        Rt(t, e), Mt(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (bo = st()), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, go(e, l)));
        break;
      case 22:
        a = e.memoizedState !== null;
        var h = n !== null && n.memoizedState !== null, k = ol, O = et;
        if (ol = k || a, et = O || h, Rt(t, e), et = O, ol = k, Mt(e), l & 8192)
          e: for (t = e.stateNode, t._visibility = a ? t._visibility & -2 : t._visibility | 1, a && (n === null || h || ol || et || wa(e)), n = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                h = n = t;
                try {
                  if (r = h.stateNode, a)
                    u = r.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none";
                  else {
                    f = h.stateNode;
                    var D = h.memoizedProps.style, E = D != null && D.hasOwnProperty("display") ? D.display : null;
                    f.style.display = E == null || typeof E == "boolean" ? "" : ("" + E).trim();
                  }
                } catch (Q) {
                  _e(h, h.return, Q);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                h = t;
                try {
                  h.stateNode.nodeValue = a ? "" : h.memoizedProps;
                } catch (Q) {
                  _e(h, h.return, Q);
                }
              }
            } else if (t.tag === 18) {
              if (n === null) {
                h = t;
                try {
                  var A = h.stateNode;
                  a ? qp(A, !0) : qp(h.stateNode, !1);
                } catch (Q) {
                  _e(h, h.return, Q);
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
        l & 4 && (l = e.updateQueue, l !== null && (n = l.retryQueue, n !== null && (l.retryQueue = null, go(e, n))));
        break;
      case 19:
        Rt(t, e), Mt(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, go(e, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Rt(t, e), Mt(e);
    }
  }
  function Mt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, l = e.return; l !== null; ) {
          if (Yd(l)) {
            n = l;
            break;
          }
          l = l.return;
        }
        if (n == null) throw Error(s(160));
        switch (n.tag) {
          case 27:
            var a = n.stateNode, r = Sc(e);
            ho(e, r, a);
            break;
          case 5:
            var u = n.stateNode;
            n.flags & 32 && (wt(u, ""), n.flags &= -33);
            var f = Sc(e);
            ho(e, f, u);
            break;
          case 3:
          case 4:
            var h = n.stateNode.containerInfo, k = Sc(e);
            wc(
              e,
              k,
              h
            );
            break;
          default:
            throw Error(s(161));
        }
      } catch (O) {
        _e(e, e.return, O);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Kd(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Kd(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function cl(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Qd(e, t.alternate, t), t = t.sibling;
  }
  function wa(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Hl(4, t, t.return), wa(t);
          break;
        case 1:
          jn(t, t.return);
          var n = t.stateNode;
          typeof n.componentWillUnmount == "function" && qd(
            t,
            t.return,
            n
          ), wa(t);
          break;
        case 27:
          ui(t.stateNode);
        case 26:
        case 5:
          jn(t, t.return), wa(t);
          break;
        case 22:
          t.memoizedState === null && wa(t);
          break;
        case 30:
          wa(t);
          break;
        default:
          wa(t);
      }
      e = e.sibling;
    }
  }
  function sl(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate, a = e, r = t, u = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          sl(
            a,
            r,
            n
          ), Wr(4, r);
          break;
        case 1:
          if (sl(
            a,
            r,
            n
          ), l = r, a = l.stateNode, typeof a.componentDidMount == "function")
            try {
              a.componentDidMount();
            } catch (k) {
              _e(l, l.return, k);
            }
          if (l = r, a = l.updateQueue, a !== null) {
            var f = l.stateNode;
            try {
              var h = a.shared.hiddenCallbacks;
              if (h !== null)
                for (a.shared.hiddenCallbacks = null, a = 0; a < h.length; a++)
                  _f(h[a], f);
            } catch (k) {
              _e(l, l.return, k);
            }
          }
          n && u & 64 && Hd(r), Jr(r, r.return);
          break;
        case 27:
          Gd(r);
        case 26:
        case 5:
          sl(
            a,
            r,
            n
          ), n && l === null && u & 4 && Bd(r), Jr(r, r.return);
          break;
        case 12:
          sl(
            a,
            r,
            n
          );
          break;
        case 31:
          sl(
            a,
            r,
            n
          ), n && u & 4 && $d(a, r);
          break;
        case 13:
          sl(
            a,
            r,
            n
          ), n && u & 4 && Pd(a, r);
          break;
        case 22:
          r.memoizedState === null && sl(
            a,
            r,
            n
          ), Jr(r, r.return);
          break;
        case 30:
          break;
        default:
          sl(
            a,
            r,
            n
          );
      }
      t = t.sibling;
    }
  }
  function kc(e, t) {
    var n = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && qr(n));
  }
  function Ec(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && qr(e));
  }
  function On(e, t, n, l) {
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
        On(
          e,
          t,
          n,
          l
        ), a & 2048 && Wr(9, t);
        break;
      case 1:
        On(
          e,
          t,
          n,
          l
        );
        break;
      case 3:
        On(
          e,
          t,
          n,
          l
        ), a & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && qr(e)));
        break;
      case 12:
        if (a & 2048) {
          On(
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
          } catch (h) {
            _e(t, t.return, h);
          }
        } else
          On(
            e,
            t,
            n,
            l
          );
        break;
      case 31:
        On(
          e,
          t,
          n,
          l
        );
        break;
      case 13:
        On(
          e,
          t,
          n,
          l
        );
        break;
      case 23:
        break;
      case 22:
        r = t.stateNode, u = t.alternate, t.memoizedState !== null ? r._visibility & 2 ? On(
          e,
          t,
          n,
          l
        ) : ei(e, t) : r._visibility & 2 ? On(
          e,
          t,
          n,
          l
        ) : (r._visibility |= 2, rr(
          e,
          t,
          n,
          l,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), a & 2048 && kc(u, t);
        break;
      case 24:
        On(
          e,
          t,
          n,
          l
        ), a & 2048 && Ec(t.alternate, t);
        break;
      default:
        On(
          e,
          t,
          n,
          l
        );
    }
  }
  function rr(e, t, n, l, a) {
    for (a = a && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var r = e, u = t, f = n, h = l, k = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          rr(
            r,
            u,
            f,
            h,
            a
          ), Wr(8, u);
          break;
        case 23:
          break;
        case 22:
          var O = u.stateNode;
          u.memoizedState !== null ? O._visibility & 2 ? rr(
            r,
            u,
            f,
            h,
            a
          ) : ei(
            r,
            u
          ) : (O._visibility |= 2, rr(
            r,
            u,
            f,
            h,
            a
          )), a && k & 2048 && kc(
            u.alternate,
            u
          );
          break;
        case 24:
          rr(
            r,
            u,
            f,
            h,
            a
          ), a && k & 2048 && Ec(u.alternate, u);
          break;
        default:
          rr(
            r,
            u,
            f,
            h,
            a
          );
      }
      t = t.sibling;
    }
  }
  function ei(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e, l = t, a = l.flags;
        switch (l.tag) {
          case 22:
            ei(n, l), a & 2048 && kc(
              l.alternate,
              l
            );
            break;
          case 24:
            ei(n, l), a & 2048 && Ec(l.alternate, l);
            break;
          default:
            ei(n, l);
        }
        t = t.sibling;
      }
  }
  var ti = 8192;
  function ir(e, t, n) {
    if (e.subtreeFlags & ti)
      for (e = e.child; e !== null; )
        Wd(
          e,
          t,
          n
        ), e = e.sibling;
  }
  function Wd(e, t, n) {
    switch (e.tag) {
      case 26:
        ir(
          e,
          t,
          n
        ), e.flags & ti && e.memoizedState !== null && by(
          n,
          _n,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        ir(
          e,
          t,
          n
        );
        break;
      case 3:
      case 4:
        var l = _n;
        _n = No(e.stateNode.containerInfo), ir(
          e,
          t,
          n
        ), _n = l;
        break;
      case 22:
        e.memoizedState === null && (l = e.alternate, l !== null && l.memoizedState !== null ? (l = ti, ti = 16777216, ir(
          e,
          t,
          n
        ), ti = l) : ir(
          e,
          t,
          n
        ));
        break;
      default:
        ir(
          e,
          t,
          n
        );
    }
  }
  function Jd(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function ni(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          ot = l, tp(
            l,
            e
          );
        }
      Jd(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        ep(e), e = e.sibling;
  }
  function ep(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ni(e), e.flags & 2048 && Hl(9, e, e.return);
        break;
      case 3:
        ni(e);
        break;
      case 12:
        ni(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, yo(e)) : ni(e);
        break;
      default:
        ni(e);
    }
  }
  function yo(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          ot = l, tp(
            l,
            e
          );
        }
      Jd(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          Hl(8, t, t.return), yo(t);
          break;
        case 22:
          n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, yo(t));
          break;
        default:
          yo(t);
      }
      e = e.sibling;
    }
  }
  function tp(e, t) {
    for (; ot !== null; ) {
      var n = ot;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Hl(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var l = n.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          qr(n.memoizedState.cache);
      }
      if (l = n.child, l !== null) l.return = n, ot = l;
      else
        e: for (n = e; ot !== null; ) {
          l = ot;
          var a = l.sibling, r = l.return;
          if (Fd(l), l === n) {
            ot = null;
            break e;
          }
          if (a !== null) {
            a.return = r, ot = a;
            break e;
          }
          ot = r;
        }
    }
  }
  var Rg = {
    getCacheForType: function(e) {
      var t = pt(Ie), n = t.data.get(e);
      return n === void 0 && (n = e(), t.data.set(e, n)), n;
    },
    cacheSignal: function() {
      return pt(Ie).controller.signal;
    }
  }, Mg = typeof WeakMap == "function" ? WeakMap : Map, ke = 0, De = null, fe = null, pe = 0, xe = 0, Kt = null, ql = !1, or = !1, Ac = !1, fl = 0, Ve = 0, Bl = 0, Ta = 0, xc = 0, It = 0, ur = 0, li = null, Lt = null, _c = !1, bo = 0, np = 0, vo = 1 / 0, So = null, Yl = null, lt = 0, Gl = null, cr = null, dl = 0, Oc = 0, Cc = null, lp = null, ai = 0, Nc = null;
  function Wt() {
    return (ke & 2) !== 0 && pe !== 0 ? pe & -pe : M.T !== null ? Uc() : Oi();
  }
  function ap() {
    if (It === 0)
      if ((pe & 536870912) === 0 || ge) {
        var e = vl;
        vl <<= 1, (vl & 3932160) === 0 && (vl = 262144), It = e;
      } else It = 536870912;
    return e = Pt.current, e !== null && (e.flags |= 32), It;
  }
  function Ut(e, t, n) {
    (e === De && (xe === 2 || xe === 9) || e.cancelPendingCommit !== null) && (sr(e, 0), Vl(
      e,
      pe,
      It,
      !1
    )), wl(e, n), ((ke & 2) === 0 || e !== De) && (e === De && ((ke & 2) === 0 && (Ta |= n), Ve === 4 && Vl(
      e,
      pe,
      It,
      !1
    )), Hn(e));
  }
  function rp(e, t, n) {
    if ((ke & 6) !== 0) throw Error(s(327));
    var l = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Sl(e, t), a = l ? jg(e, t) : Dc(e, t, !0), r = l;
    do {
      if (a === 0) {
        or && !l && Vl(e, t, 0, !1);
        break;
      } else {
        if (n = e.current.alternate, r && !Lg(n)) {
          a = Dc(e, t, !1), r = !1;
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
              a = li;
              var h = f.current.memoizedState.isDehydrated;
              if (h && (sr(f, u).flags |= 256), u = Dc(
                f,
                u,
                !1
              ), u !== 2) {
                if (Ac && !h) {
                  f.errorRecoveryDisabledLanes |= r, Ta |= r, a = 4;
                  break e;
                }
                r = Lt, Lt = a, r !== null && (Lt === null ? Lt = r : Lt.push.apply(
                  Lt,
                  r
                ));
              }
              a = u;
            }
            if (r = !1, a !== 2) continue;
          }
        }
        if (a === 1) {
          sr(e, 0), Vl(e, t, 0, !0);
          break;
        }
        e: {
          switch (l = e, r = a, r) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Vl(
                l,
                t,
                It,
                !ql
              );
              break e;
            case 2:
              Lt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if ((t & 62914560) === t && (a = bo + 300 - st(), 10 < a)) {
            if (Vl(
              l,
              t,
              It,
              !ql
            ), an(l, 0, !0) !== 0) break e;
            dl = t, l.timeoutHandle = Up(
              ip.bind(
                null,
                l,
                n,
                Lt,
                So,
                _c,
                t,
                It,
                Ta,
                ur,
                ql,
                r,
                "Throttled",
                -0,
                0
              ),
              a
            );
            break e;
          }
          ip(
            l,
            n,
            Lt,
            So,
            _c,
            t,
            It,
            Ta,
            ur,
            ql,
            r,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Hn(e);
  }
  function ip(e, t, n, l, a, r, u, f, h, k, O, D, E, A) {
    if (e.timeoutHandle = -1, D = t.subtreeFlags, D & 8192 || (D & 16785408) === 16785408) {
      D = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Qt
      }, Wd(
        t,
        r,
        D
      );
      var Q = (r & 62914560) === r ? bo - st() : (r & 4194048) === r ? np - st() : 0;
      if (Q = vy(
        D,
        Q
      ), Q !== null) {
        dl = r, e.cancelPendingCommit = Q(
          mp.bind(
            null,
            e,
            t,
            r,
            n,
            l,
            a,
            u,
            f,
            h,
            O,
            D,
            null,
            E,
            A
          )
        ), Vl(e, r, u, !k);
        return;
      }
    }
    mp(
      e,
      t,
      r,
      n,
      l,
      a,
      u,
      f,
      h
    );
  }
  function Lg(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var l = 0; l < n.length; l++) {
          var a = n[l], r = a.getSnapshot;
          a = a.value;
          try {
            if (!Xt(r(), a)) return !1;
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
  function Vl(e, t, n, l) {
    t &= ~xc, t &= ~Ta, e.suspendedLanes |= t, e.pingedLanes &= ~t, l && (e.warmLanes |= t), l = e.expirationTimes;
    for (var a = t; 0 < a; ) {
      var r = 31 - rt(a), u = 1 << r;
      l[r] = -1, a &= ~u;
    }
    n !== 0 && la(e, n, t);
  }
  function wo() {
    return (ke & 6) === 0 ? (ri(0), !1) : !0;
  }
  function zc() {
    if (fe !== null) {
      if (xe === 0)
        var e = fe.return;
      else
        e = fe, tl = pa = null, $u(e), er = null, Yr = 0, e = fe;
      for (; e !== null; )
        jd(e.alternate, e), e = e.return;
      fe = null;
    }
  }
  function sr(e, t) {
    var n = e.timeoutHandle;
    n !== -1 && (e.timeoutHandle = -1, ty(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), dl = 0, zc(), De = e, fe = n = Jn(e.current, null), pe = t, xe = 0, Kt = null, ql = !1, or = Sl(e, t), Ac = !1, ur = It = xc = Ta = Bl = Ve = 0, Lt = li = null, _c = !1, (t & 8) !== 0 && (t |= t & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var a = 31 - rt(l), r = 1 << a;
        t |= e[a], l &= ~r;
      }
    return fl = t, Yi(), n;
  }
  function op(e, t) {
    re = null, M.H = Zr, t === Ja || t === Zi ? (t = kf(), xe = 3) : t === Lu ? (t = kf(), xe = 4) : xe = t === cc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Kt = t, fe === null && (Ve = 1, co(
      e,
      cn(t, e.current)
    ));
  }
  function up() {
    var e = Pt.current;
    return e === null ? !0 : (pe & 4194048) === pe ? vn === null : (pe & 62914560) === pe || (pe & 536870912) !== 0 ? e === vn : !1;
  }
  function cp() {
    var e = M.H;
    return M.H = Zr, e === null ? Zr : e;
  }
  function sp() {
    var e = M.A;
    return M.A = Rg, e;
  }
  function To() {
    Ve = 4, ql || (pe & 4194048) !== pe && Pt.current !== null || (or = !0), (Bl & 134217727) === 0 && (Ta & 134217727) === 0 || De === null || Vl(
      De,
      pe,
      It,
      !1
    );
  }
  function Dc(e, t, n) {
    var l = ke;
    ke |= 2;
    var a = cp(), r = sp();
    (De !== e || pe !== t) && (So = null, sr(e, t)), t = !1;
    var u = Ve;
    e: do
      try {
        if (xe !== 0 && fe !== null) {
          var f = fe, h = Kt;
          switch (xe) {
            case 8:
              zc(), u = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Pt.current === null && (t = !0);
              var k = xe;
              if (xe = 0, Kt = null, fr(e, f, h, k), n && or) {
                u = 0;
                break e;
              }
              break;
            default:
              k = xe, xe = 0, Kt = null, fr(e, f, h, k);
          }
        }
        Ug(), u = Ve;
        break;
      } catch (O) {
        op(e, O);
      }
    while (!0);
    return t && e.shellSuspendCounter++, tl = pa = null, ke = l, M.H = a, M.A = r, fe === null && (De = null, pe = 0, Yi()), u;
  }
  function Ug() {
    for (; fe !== null; ) fp(fe);
  }
  function jg(e, t) {
    var n = ke;
    ke |= 2;
    var l = cp(), a = sp();
    De !== e || pe !== t ? (So = null, vo = st() + 500, sr(e, t)) : or = Sl(
      e,
      t
    );
    e: do
      try {
        if (xe !== 0 && fe !== null) {
          t = fe;
          var r = Kt;
          t: switch (xe) {
            case 1:
              xe = 0, Kt = null, fr(e, t, r, 1);
              break;
            case 2:
            case 9:
              if (wf(r)) {
                xe = 0, Kt = null, dp(t);
                break;
              }
              t = function() {
                xe !== 2 && xe !== 9 || De !== e || (xe = 7), Hn(e);
              }, r.then(t, t);
              break e;
            case 3:
              xe = 7;
              break e;
            case 4:
              xe = 5;
              break e;
            case 7:
              wf(r) ? (xe = 0, Kt = null, dp(t)) : (xe = 0, Kt = null, fr(e, t, r, 7));
              break;
            case 5:
              var u = null;
              switch (fe.tag) {
                case 26:
                  u = fe.memoizedState;
                case 5:
                case 27:
                  var f = fe;
                  if (u ? Ip(u) : f.stateNode.complete) {
                    xe = 0, Kt = null;
                    var h = f.sibling;
                    if (h !== null) fe = h;
                    else {
                      var k = f.return;
                      k !== null ? (fe = k, ko(k)) : fe = null;
                    }
                    break t;
                  }
              }
              xe = 0, Kt = null, fr(e, t, r, 5);
              break;
            case 6:
              xe = 0, Kt = null, fr(e, t, r, 6);
              break;
            case 8:
              zc(), Ve = 6;
              break e;
            default:
              throw Error(s(462));
          }
        }
        Hg();
        break;
      } catch (O) {
        op(e, O);
      }
    while (!0);
    return tl = pa = null, M.H = l, M.A = a, ke = n, fe !== null ? 0 : (De = null, pe = 0, Yi(), Ve);
  }
  function Hg() {
    for (; fe !== null && !zn(); )
      fp(fe);
  }
  function fp(e) {
    var t = Ld(e.alternate, e, fl);
    e.memoizedProps = e.pendingProps, t === null ? ko(e) : fe = t;
  }
  function dp(e) {
    var t = e, n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Cd(
          n,
          t,
          t.pendingProps,
          t.type,
          void 0,
          pe
        );
        break;
      case 11:
        t = Cd(
          n,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          pe
        );
        break;
      case 5:
        $u(t);
      default:
        jd(n, t), t = fe = sf(t, fl), t = Ld(n, t, fl);
    }
    e.memoizedProps = e.pendingProps, t === null ? ko(e) : fe = t;
  }
  function fr(e, t, n, l) {
    tl = pa = null, $u(t), er = null, Yr = 0;
    var a = t.return;
    try {
      if (xg(
        e,
        a,
        t,
        n,
        pe
      )) {
        Ve = 1, co(
          e,
          cn(n, e.current)
        ), fe = null;
        return;
      }
    } catch (r) {
      if (a !== null) throw fe = a, r;
      Ve = 1, co(
        e,
        cn(n, e.current)
      ), fe = null;
      return;
    }
    t.flags & 32768 ? (ge || l === 1 ? e = !0 : or || (pe & 536870912) !== 0 ? e = !1 : (ql = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = Pt.current, l !== null && l.tag === 13 && (l.flags |= 16384))), pp(t, e)) : ko(t);
  }
  function ko(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        pp(
          t,
          ql
        );
        return;
      }
      e = t.return;
      var n = Cg(
        t.alternate,
        t,
        fl
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
    Ve === 0 && (Ve = 5);
  }
  function pp(e, t) {
    do {
      var n = Ng(e.alternate, e);
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
    Ve = 6, fe = null;
  }
  function mp(e, t, n, l, a, r, u, f, h) {
    e.cancelPendingCommit = null;
    do
      Eo();
    while (lt !== 0);
    if ((ke & 6) !== 0) throw Error(s(327));
    if (t !== null) {
      if (t === e.current) throw Error(s(177));
      if (r = t.lanes | t.childLanes, r |= Su, Ma(
        e,
        n,
        r,
        u,
        f,
        h
      ), e === De && (fe = De = null, pe = 0), cr = t, Gl = e, dl = n, Oc = r, Cc = a, lp = l, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Gg(nn, function() {
        return vp(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), l = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || l) {
        l = M.T, M.T = null, a = q.p, q.p = 2, u = ke, ke |= 4;
        try {
          zg(e, t, n);
        } finally {
          ke = u, q.p = a, M.T = l;
        }
      }
      lt = 1, hp(), gp(), yp();
    }
  }
  function hp() {
    if (lt === 1) {
      lt = 0;
      var e = Gl, t = cr, n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        n = M.T, M.T = null;
        var l = q.p;
        q.p = 2;
        var a = ke;
        ke |= 4;
        try {
          Zd(t, e);
          var r = Qc, u = ef(e.containerInfo), f = r.focusedElem, h = r.selectionRange;
          if (u !== f && f && f.ownerDocument && Js(
            f.ownerDocument.documentElement,
            f
          )) {
            if (h !== null && hu(f)) {
              var k = h.start, O = h.end;
              if (O === void 0 && (O = k), "selectionStart" in f)
                f.selectionStart = k, f.selectionEnd = Math.min(
                  O,
                  f.value.length
                );
              else {
                var D = f.ownerDocument || document, E = D && D.defaultView || window;
                if (E.getSelection) {
                  var A = E.getSelection(), Q = f.textContent.length, J = Math.min(h.start, Q), ze = h.end === void 0 ? J : Math.min(h.end, Q);
                  !A.extend && J > ze && (u = ze, ze = J, J = u);
                  var v = Ws(
                    f,
                    J
                  ), b = Ws(
                    f,
                    ze
                  );
                  if (v && b && (A.rangeCount !== 1 || A.anchorNode !== v.node || A.anchorOffset !== v.offset || A.focusNode !== b.node || A.focusOffset !== b.offset)) {
                    var w = D.createRange();
                    w.setStart(v.node, v.offset), A.removeAllRanges(), J > ze ? (A.addRange(w), A.extend(b.node, b.offset)) : (w.setEnd(b.node, b.offset), A.addRange(w));
                  }
                }
              }
            }
            for (D = [], A = f; A = A.parentNode; )
              A.nodeType === 1 && D.push({
                element: A,
                left: A.scrollLeft,
                top: A.scrollTop
              });
            for (typeof f.focus == "function" && f.focus(), f = 0; f < D.length; f++) {
              var C = D[f];
              C.element.scrollLeft = C.left, C.element.scrollTop = C.top;
            }
          }
          Uo = !!Vc, Qc = Vc = null;
        } finally {
          ke = a, q.p = l, M.T = n;
        }
      }
      e.current = t, lt = 2;
    }
  }
  function gp() {
    if (lt === 2) {
      lt = 0;
      var e = Gl, t = cr, n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        n = M.T, M.T = null;
        var l = q.p;
        q.p = 2;
        var a = ke;
        ke |= 4;
        try {
          Qd(e, t.alternate, t);
        } finally {
          ke = a, q.p = l, M.T = n;
        }
      }
      lt = 3;
    }
  }
  function yp() {
    if (lt === 4 || lt === 3) {
      lt = 0, Ti();
      var e = Gl, t = cr, n = dl, l = lp;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? lt = 5 : (lt = 0, cr = Gl = null, bp(e, e.pendingLanes));
      var a = e.pendingLanes;
      if (a === 0 && (Yl = null), ra(n), t = t.stateNode, Pe && typeof Pe.onCommitFiberRoot == "function")
        try {
          Pe.onCommitFiberRoot(
            Fn,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (l !== null) {
        t = M.T, a = q.p, q.p = 2, M.T = null;
        try {
          for (var r = e.onRecoverableError, u = 0; u < l.length; u++) {
            var f = l[u];
            r(f.value, {
              componentStack: f.stack
            });
          }
        } finally {
          M.T = t, q.p = a;
        }
      }
      (dl & 3) !== 0 && Eo(), Hn(e), a = e.pendingLanes, (n & 261930) !== 0 && (a & 42) !== 0 ? e === Nc ? ai++ : (ai = 0, Nc = e) : ai = 0, ri(0);
    }
  }
  function bp(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, qr(t)));
  }
  function Eo() {
    return hp(), gp(), yp(), vp();
  }
  function vp() {
    if (lt !== 5) return !1;
    var e = Gl, t = Oc;
    Oc = 0;
    var n = ra(dl), l = M.T, a = q.p;
    try {
      q.p = 32 > n ? 32 : n, M.T = null, n = Cc, Cc = null;
      var r = Gl, u = dl;
      if (lt = 0, cr = Gl = null, dl = 0, (ke & 6) !== 0) throw Error(s(331));
      var f = ke;
      if (ke |= 4, ep(r.current), Id(
        r,
        r.current,
        u,
        n
      ), ke = f, ri(0, !1), Pe && typeof Pe.onPostCommitFiberRoot == "function")
        try {
          Pe.onPostCommitFiberRoot(Fn, r);
        } catch {
        }
      return !0;
    } finally {
      q.p = a, M.T = l, bp(e, t);
    }
  }
  function Sp(e, t, n) {
    t = cn(n, t), t = uc(e.stateNode, t, 2), e = Ll(e, t, 2), e !== null && (wl(e, 2), Hn(e));
  }
  function _e(e, t, n) {
    if (e.tag === 3)
      Sp(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Sp(
            t,
            e,
            n
          );
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Yl === null || !Yl.has(l))) {
            e = cn(n, e), n = wd(2), l = Ll(t, n, 2), l !== null && (Td(
              n,
              l,
              t,
              e
            ), wl(l, 2), Hn(l));
            break;
          }
        }
        t = t.return;
      }
  }
  function Rc(e, t, n) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new Mg();
      var a = /* @__PURE__ */ new Set();
      l.set(t, a);
    } else
      a = l.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), l.set(t, a));
    a.has(n) || (Ac = !0, a.add(n), e = qg.bind(null, e, t, n), t.then(e, e));
  }
  function qg(e, t, n) {
    var l = e.pingCache;
    l !== null && l.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, De === e && (pe & n) === n && (Ve === 4 || Ve === 3 && (pe & 62914560) === pe && 300 > st() - bo ? (ke & 2) === 0 && sr(e, 0) : xc |= n, ur === pe && (ur = 0)), Hn(e);
  }
  function wp(e, t) {
    t === 0 && (t = Er()), e = sa(e, t), e !== null && (wl(e, t), Hn(e));
  }
  function Bg(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), wp(e, n);
  }
  function Yg(e, t) {
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
        throw Error(s(314));
    }
    l !== null && l.delete(t), wp(e, n);
  }
  function Gg(e, t) {
    return Vn(e, t);
  }
  var Ao = null, dr = null, Mc = !1, xo = !1, Lc = !1, Ql = 0;
  function Hn(e) {
    e !== dr && e.next === null && (dr === null ? Ao = dr = e : dr = dr.next = e), xo = !0, Mc || (Mc = !0, Qg());
  }
  function ri(e, t) {
    if (!Lc && xo) {
      Lc = !0;
      do
        for (var n = !1, l = Ao; l !== null; ) {
          if (e !== 0) {
            var a = l.pendingLanes;
            if (a === 0) var r = 0;
            else {
              var u = l.suspendedLanes, f = l.pingedLanes;
              r = (1 << 31 - rt(42 | e) + 1) - 1, r &= a & ~(u & ~f), r = r & 201326741 ? r & 201326741 | 1 : r ? r | 2 : 0;
            }
            r !== 0 && (n = !0, Ap(l, r));
          } else
            r = pe, r = an(
              l,
              l === De ? r : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (r & 3) === 0 || Sl(l, r) || (n = !0, Ap(l, r));
          l = l.next;
        }
      while (n);
      Lc = !1;
    }
  }
  function Vg() {
    Tp();
  }
  function Tp() {
    xo = Mc = !1;
    var e = 0;
    Ql !== 0 && ey() && (e = Ql);
    for (var t = st(), n = null, l = Ao; l !== null; ) {
      var a = l.next, r = kp(l, t);
      r === 0 ? (l.next = null, n === null ? Ao = a : n.next = a, a === null && (dr = n)) : (n = l, (e !== 0 || (r & 3) !== 0) && (xo = !0)), l = a;
    }
    lt !== 0 && lt !== 5 || ri(e), Ql !== 0 && (Ql = 0);
  }
  function kp(e, t) {
    for (var n = e.suspendedLanes, l = e.pingedLanes, a = e.expirationTimes, r = e.pendingLanes & -62914561; 0 < r; ) {
      var u = 31 - rt(r), f = 1 << u, h = a[u];
      h === -1 ? ((f & n) === 0 || (f & l) !== 0) && (a[u] = _i(f, t)) : h <= t && (e.expiredLanes |= f), r &= ~f;
    }
    if (t = De, n = pe, n = an(
      e,
      e === t ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l = e.callbackNode, n === 0 || e === t && (xe === 2 || xe === 9) || e.cancelPendingCommit !== null)
      return l !== null && l !== null && Oa(l), e.callbackNode = null, e.callbackPriority = 0;
    if ((n & 3) === 0 || Sl(e, n)) {
      if (t = n & -n, t === e.callbackPriority) return t;
      switch (l !== null && Oa(l), ra(n)) {
        case 2:
        case 8:
          n = tn;
          break;
        case 32:
          n = nn;
          break;
        case 268435456:
          n = Na;
          break;
        default:
          n = nn;
      }
      return l = Ep.bind(null, e), n = Vn(n, l), e.callbackPriority = t, e.callbackNode = n, t;
    }
    return l !== null && l !== null && Oa(l), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Ep(e, t) {
    if (lt !== 0 && lt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var n = e.callbackNode;
    if (Eo() && e.callbackNode !== n)
      return null;
    var l = pe;
    return l = an(
      e,
      e === De ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l === 0 ? null : (rp(e, l, t), kp(e, st()), e.callbackNode != null && e.callbackNode === n ? Ep.bind(null, e) : null);
  }
  function Ap(e, t) {
    if (Eo()) return null;
    rp(e, t, !0);
  }
  function Qg() {
    ny(function() {
      (ke & 6) !== 0 ? Vn(
        Ca,
        Vg
      ) : Tp();
    });
  }
  function Uc() {
    if (Ql === 0) {
      var e = Ia;
      e === 0 && (e = bl, bl <<= 1, (bl & 261888) === 0 && (bl = 256)), Ql = e;
    }
    return Ql;
  }
  function xp(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : En("" + e);
  }
  function _p(e, t) {
    var n = t.ownerDocument.createElement("input");
    return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
  }
  function Fg(e, t, n, l, a) {
    if (t === "submit" && n && n.stateNode === a) {
      var r = xp(
        (a[it] || null).action
      ), u = l.submitter;
      u && (t = (t = u[it] || null) ? xp(t.formAction) : u.getAttribute("formAction"), t !== null && (r = t, u = null));
      var f = new ft(
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
                if (Ql !== 0) {
                  var h = u ? _p(a, u) : new FormData(a);
                  nc(
                    n,
                    {
                      pending: !0,
                      data: h,
                      method: a.method,
                      action: r
                    },
                    null,
                    h
                  );
                }
              } else
                typeof r == "function" && (f.preventDefault(), h = u ? _p(a, u) : new FormData(a), nc(
                  n,
                  {
                    pending: !0,
                    data: h,
                    method: a.method,
                    action: r
                  },
                  r,
                  h
                ));
            },
            currentTarget: a
          }
        ]
      });
    }
  }
  for (var jc = 0; jc < vu.length; jc++) {
    var Hc = vu[jc], Xg = Hc.toLowerCase(), $g = Hc[0].toUpperCase() + Hc.slice(1);
    xn(
      Xg,
      "on" + $g
    );
  }
  xn(lf, "onAnimationEnd"), xn(af, "onAnimationIteration"), xn(rf, "onAnimationStart"), xn("dblclick", "onDoubleClick"), xn("focusin", "onFocus"), xn("focusout", "onBlur"), xn(cg, "onTransitionRun"), xn(sg, "onTransitionStart"), xn(fg, "onTransitionCancel"), xn(of, "onTransitionEnd"), At("onMouseEnter", ["mouseout", "mouseover"]), At("onMouseLeave", ["mouseout", "mouseover"]), At("onPointerEnter", ["pointerout", "pointerover"]), At("onPointerLeave", ["pointerout", "pointerover"]), Kn(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Kn(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Kn("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Kn(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Kn(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Kn(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var ii = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Pg = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ii)
  );
  function Op(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var l = e[n], a = l.event;
      l = l.listeners;
      e: {
        var r = void 0;
        if (t)
          for (var u = l.length - 1; 0 <= u; u--) {
            var f = l[u], h = f.instance, k = f.currentTarget;
            if (f = f.listener, h !== r && a.isPropagationStopped())
              break e;
            r = f, a.currentTarget = k;
            try {
              r(a);
            } catch (O) {
              Bi(O);
            }
            a.currentTarget = null, r = h;
          }
        else
          for (u = 0; u < l.length; u++) {
            if (f = l[u], h = f.instance, k = f.currentTarget, f = f.listener, h !== r && a.isPropagationStopped())
              break e;
            r = f, a.currentTarget = k;
            try {
              r(a);
            } catch (O) {
              Bi(O);
            }
            a.currentTarget = null, r = h;
          }
      }
    }
  }
  function de(e, t) {
    var n = t[$n];
    n === void 0 && (n = t[$n] = /* @__PURE__ */ new Set());
    var l = e + "__bubble";
    n.has(l) || (Cp(t, e, 2, !1), n.add(l));
  }
  function qc(e, t, n) {
    var l = 0;
    t && (l |= 4), Cp(
      n,
      e,
      l,
      t
    );
  }
  var _o = "_reactListening" + Math.random().toString(36).slice(2);
  function Bc(e) {
    if (!e[_o]) {
      e[_o] = !0, Ci.forEach(function(n) {
        n !== "selectionchange" && (Pg.has(n) || qc(n, !1, e), qc(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[_o] || (t[_o] = !0, qc("selectionchange", !1, t));
    }
  }
  function Cp(e, t, n, l) {
    switch (am(t)) {
      case 2:
        var a = Ty;
        break;
      case 8:
        a = ky;
        break;
      default:
        a = ts;
    }
    n = a.bind(
      null,
      t,
      n,
      e
    ), a = void 0, !m || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), l ? a !== void 0 ? e.addEventListener(t, n, {
      capture: !0,
      passive: a
    }) : e.addEventListener(t, n, !0) : a !== void 0 ? e.addEventListener(t, n, {
      passive: a
    }) : e.addEventListener(t, n, !1);
  }
  function Yc(e, t, n, l, a) {
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
              var h = u.tag;
              if ((h === 3 || h === 4) && u.stateNode.containerInfo === a)
                return;
              u = u.return;
            }
          for (; f !== null; ) {
            if (u = Pn(f), u === null) return;
            if (h = u.tag, h === 5 || h === 6 || h === 26 || h === 27) {
              l = r = u;
              continue e;
            }
            f = f.parentNode;
          }
        }
        l = l.return;
      }
    Ya(function() {
      var k = r, O = Nr(n), D = [];
      e: {
        var E = uf.get(e);
        if (E !== void 0) {
          var A = ft, Q = e;
          switch (e) {
            case "keypress":
              if (te(n) === 0) break e;
            case "keydown":
            case "keyup":
              A = Yh;
              break;
            case "focusin":
              Q = "focus", A = su;
              break;
            case "focusout":
              Q = "blur", A = su;
              break;
            case "beforeblur":
            case "afterblur":
              A = su;
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
              A = Us;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              A = Ch;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              A = Qh;
              break;
            case lf:
            case af:
            case rf:
              A = Dh;
              break;
            case of:
              A = Xh;
              break;
            case "scroll":
            case "scrollend":
              A = Mn;
              break;
            case "wheel":
              A = Ph;
              break;
            case "copy":
            case "cut":
            case "paste":
              A = Mh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              A = Hs;
              break;
            case "toggle":
            case "beforetoggle":
              A = Kh;
          }
          var J = (t & 4) !== 0, ze = !J && (e === "scroll" || e === "scrollend"), v = J ? E !== null ? E + "Capture" : null : E;
          J = [];
          for (var b = k, w; b !== null; ) {
            var C = b;
            if (w = C.stateNode, C = C.tag, C !== 5 && C !== 26 && C !== 27 || w === null || v === null || (C = An(b, v), C != null && J.push(
              oi(b, C, w)
            )), ze) break;
            b = b.return;
          }
          0 < J.length && (E = new A(
            E,
            Q,
            null,
            n,
            O
          ), D.push({ event: E, listeners: J }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (E = e === "mouseover" || e === "pointerover", A = e === "mouseout" || e === "pointerout", E && n !== qa && (Q = n.relatedTarget || n.fromElement) && (Pn(Q) || Q[Tl]))
            break e;
          if ((A || E) && (E = O.window === O ? O : (E = O.ownerDocument) ? E.defaultView || E.parentWindow : window, A ? (Q = n.relatedTarget || n.toElement, A = k, Q = Q ? Pn(Q) : null, Q !== null && (ze = T(Q), J = Q.tag, Q !== ze || J !== 5 && J !== 27 && J !== 6) && (Q = null)) : (A = null, Q = k), A !== Q)) {
            if (J = Us, C = "onMouseLeave", v = "onMouseEnter", b = "mouse", (e === "pointerout" || e === "pointerover") && (J = Hs, C = "onPointerLeave", v = "onPointerEnter", b = "pointer"), ze = A == null ? E : kl(A), w = Q == null ? E : kl(Q), E = new J(
              C,
              b + "leave",
              A,
              n,
              O
            ), E.target = ze, E.relatedTarget = w, C = null, Pn(O) === k && (J = new J(
              v,
              b + "enter",
              Q,
              n,
              O
            ), J.target = w, J.relatedTarget = ze, C = J), ze = C, A && Q)
              t: {
                for (J = Zg, v = A, b = Q, w = 0, C = v; C; C = J(C))
                  w++;
                C = 0;
                for (var Z = b; Z; Z = J(Z))
                  C++;
                for (; 0 < w - C; )
                  v = J(v), w--;
                for (; 0 < C - w; )
                  b = J(b), C--;
                for (; w--; ) {
                  if (v === b || b !== null && v === b.alternate) {
                    J = v;
                    break t;
                  }
                  v = J(v), b = J(b);
                }
                J = null;
              }
            else J = null;
            A !== null && Np(
              D,
              E,
              A,
              J,
              !1
            ), Q !== null && ze !== null && Np(
              D,
              ze,
              Q,
              J,
              !0
            );
          }
        }
        e: {
          if (E = k ? kl(k) : window, A = E.nodeName && E.nodeName.toLowerCase(), A === "select" || A === "input" && E.type === "file")
            var we = Xs;
          else if (Qs(E))
            if ($s)
              we = ig;
            else {
              we = ag;
              var X = lg;
            }
          else
            A = E.nodeName, !A || A.toLowerCase() !== "input" || E.type !== "checkbox" && E.type !== "radio" ? k && _l(k.elementType) && (we = Xs) : we = rg;
          if (we && (we = we(e, k))) {
            Fs(
              D,
              we,
              n,
              O
            );
            break e;
          }
          X && X(e, E, k), e === "focusout" && k && E.type === "number" && k.memoizedProps.value != null && xl(E, "number", E.value);
        }
        switch (X = k ? kl(k) : window, e) {
          case "focusin":
            (Qs(X) || X.contentEditable === "true") && (Va = X, gu = k, Ur = null);
            break;
          case "focusout":
            Ur = gu = Va = null;
            break;
          case "mousedown":
            yu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            yu = !1, tf(D, n, O);
            break;
          case "selectionchange":
            if (ug) break;
          case "keydown":
          case "keyup":
            tf(D, n, O);
        }
        var oe;
        if (du)
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
          Ga ? Gs(e, n) && (me = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (me = "onCompositionStart");
        me && (qs && n.locale !== "ko" && (Ga || me !== "onCompositionStart" ? me === "onCompositionEnd" && Ga && (oe = I()) : (S = O, z = "value" in S ? S.value : S.textContent, Ga = !0)), X = Oo(k, me), 0 < X.length && (me = new js(
          me,
          e,
          null,
          n,
          O
        ), D.push({ event: me, listeners: X }), oe ? me.data = oe : (oe = Vs(n), oe !== null && (me.data = oe)))), (oe = Wh ? Jh(e, n) : eg(e, n)) && (me = Oo(k, "onBeforeInput"), 0 < me.length && (X = new js(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          O
        ), D.push({
          event: X,
          listeners: me
        }), X.data = oe)), Fg(
          D,
          e,
          k,
          n,
          O
        );
      }
      Op(D, t);
    });
  }
  function oi(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function Oo(e, t) {
    for (var n = t + "Capture", l = []; e !== null; ) {
      var a = e, r = a.stateNode;
      if (a = a.tag, a !== 5 && a !== 26 && a !== 27 || r === null || (a = An(e, n), a != null && l.unshift(
        oi(e, a, r)
      ), a = An(e, t), a != null && l.push(
        oi(e, a, r)
      )), e.tag === 3) return l;
      e = e.return;
    }
    return [];
  }
  function Zg(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Np(e, t, n, l, a) {
    for (var r = t._reactName, u = []; n !== null && n !== l; ) {
      var f = n, h = f.alternate, k = f.stateNode;
      if (f = f.tag, h !== null && h === l) break;
      f !== 5 && f !== 26 && f !== 27 || k === null || (h = k, a ? (k = An(n, r), k != null && u.unshift(
        oi(n, k, h)
      )) : a || (k = An(n, r), k != null && u.push(
        oi(n, k, h)
      ))), n = n.return;
    }
    u.length !== 0 && e.push({ event: t, listeners: u });
  }
  var Kg = /\r\n?/g, Ig = /\u0000|\uFFFD/g;
  function zp(e) {
    return (typeof e == "string" ? e : "" + e).replace(Kg, `
`).replace(Ig, "");
  }
  function Dp(e, t) {
    return t = zp(t), zp(e) === t;
  }
  function Ne(e, t, n, l, a, r) {
    switch (n) {
      case "children":
        typeof l == "string" ? t === "body" || t === "textarea" && l === "" || wt(e, l) : (typeof l == "number" || typeof l == "bigint") && t !== "body" && wt(e, "" + l);
        break;
      case "className":
        Al(e, "class", l);
        break;
      case "tabIndex":
        Al(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Al(e, n, l);
        break;
      case "style":
        Li(e, l, r);
        break;
      case "data":
        if (t !== "object") {
          Al(e, "data", l);
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
        l = En("" + l), e.setAttribute(n, l);
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
        l = En("" + l), e.setAttribute(n, l);
        break;
      case "onClick":
        l != null && (e.onclick = Qt);
        break;
      case "onScroll":
        l != null && de("scroll", e);
        break;
      case "onScrollEnd":
        l != null && de("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(s(61));
          if (n = l.__html, n != null) {
            if (a.children != null) throw Error(s(60));
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
        n = En("" + l), e.setAttributeNS(
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
        de("beforetoggle", e), de("toggle", e), El(e, "popover", l);
        break;
      case "xlinkActuate":
        Vt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          l
        );
        break;
      case "xlinkArcrole":
        Vt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          l
        );
        break;
      case "xlinkRole":
        Vt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          l
        );
        break;
      case "xlinkShow":
        Vt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          l
        );
        break;
      case "xlinkTitle":
        Vt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          l
        );
        break;
      case "xlinkType":
        Vt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          l
        );
        break;
      case "xmlBase":
        Vt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          l
        );
        break;
      case "xmlLang":
        Vt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          l
        );
        break;
      case "xmlSpace":
        Vt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          l
        );
        break;
      case "is":
        El(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = uu.get(n) || n, El(e, n, l));
    }
  }
  function Gc(e, t, n, l, a, r) {
    switch (n) {
      case "style":
        Li(e, l, r);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(s(61));
          if (n = l.__html, n != null) {
            if (a.children != null) throw Error(s(60));
            e.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof l == "string" ? wt(e, l) : (typeof l == "number" || typeof l == "bigint") && wt(e, "" + l);
        break;
      case "onScroll":
        l != null && de("scroll", e);
        break;
      case "onScrollEnd":
        l != null && de("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = Qt);
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
        if (!Ni.hasOwnProperty(n))
          e: {
            if (n[0] === "o" && n[1] === "n" && (a = n.endsWith("Capture"), t = n.slice(2, a ? n.length - 7 : void 0), r = e[it] || null, r = r != null ? r[n] : null, typeof r == "function" && e.removeEventListener(t, r, a), typeof l == "function")) {
              typeof r != "function" && r !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, l, a);
              break e;
            }
            n in e ? e[n] = l : l === !0 ? e.setAttribute(n, "") : El(e, n, l);
          }
    }
  }
  function ht(e, t, n) {
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
                  throw Error(s(137, t));
                default:
                  Ne(e, t, r, u, n, null);
              }
          }
        a && Ne(e, t, "srcSet", n.srcSet, n, null), l && Ne(e, t, "src", n.src, n, null);
        return;
      case "input":
        de("invalid", e);
        var f = r = u = a = null, h = null, k = null;
        for (l in n)
          if (n.hasOwnProperty(l)) {
            var O = n[l];
            if (O != null)
              switch (l) {
                case "name":
                  a = O;
                  break;
                case "type":
                  u = O;
                  break;
                case "checked":
                  h = O;
                  break;
                case "defaultChecked":
                  k = O;
                  break;
                case "value":
                  r = O;
                  break;
                case "defaultValue":
                  f = O;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (O != null)
                    throw Error(s(137, t));
                  break;
                default:
                  Ne(e, t, l, O, n, null);
              }
          }
        Ha(
          e,
          r,
          f,
          h,
          k,
          u,
          a,
          !1
        );
        return;
      case "select":
        de("invalid", e), l = u = r = null;
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
        t = r, n = u, e.multiple = !!l, t != null ? Rn(e, !!l, t, !1) : n != null && Rn(e, !!l, n, !0);
        return;
      case "textarea":
        de("invalid", e), r = a = l = null;
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
                if (f != null) throw Error(s(91));
                break;
              default:
                Ne(e, t, u, f, n, null);
            }
        ia(e, l, a, r);
        return;
      case "option":
        for (h in n)
          if (n.hasOwnProperty(h) && (l = n[h], l != null))
            switch (h) {
              case "selected":
                e.selected = l && typeof l != "function" && typeof l != "symbol";
                break;
              default:
                Ne(e, t, h, l, n, null);
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
        for (l = 0; l < ii.length; l++)
          de(ii[l], e);
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
        for (k in n)
          if (n.hasOwnProperty(k) && (l = n[k], l != null))
            switch (k) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, t));
              default:
                Ne(e, t, k, l, n, null);
            }
        return;
      default:
        if (_l(t)) {
          for (O in n)
            n.hasOwnProperty(O) && (l = n[O], l !== void 0 && Gc(
              e,
              t,
              O,
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
  function Wg(e, t, n, l) {
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
        var a = null, r = null, u = null, f = null, h = null, k = null, O = null;
        for (A in n) {
          var D = n[A];
          if (n.hasOwnProperty(A) && D != null)
            switch (A) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                h = D;
              default:
                l.hasOwnProperty(A) || Ne(e, t, A, null, l, D);
            }
        }
        for (var E in l) {
          var A = l[E];
          if (D = n[E], l.hasOwnProperty(E) && (A != null || D != null))
            switch (E) {
              case "type":
                r = A;
                break;
              case "name":
                a = A;
                break;
              case "checked":
                k = A;
                break;
              case "defaultChecked":
                O = A;
                break;
              case "value":
                u = A;
                break;
              case "defaultValue":
                f = A;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (A != null)
                  throw Error(s(137, t));
                break;
              default:
                A !== D && Ne(
                  e,
                  t,
                  E,
                  A,
                  l,
                  D
                );
            }
        }
        ja(
          e,
          u,
          f,
          h,
          k,
          O,
          r,
          a
        );
        return;
      case "select":
        A = u = f = E = null;
        for (r in n)
          if (h = n[r], n.hasOwnProperty(r) && h != null)
            switch (r) {
              case "value":
                break;
              case "multiple":
                A = h;
              default:
                l.hasOwnProperty(r) || Ne(
                  e,
                  t,
                  r,
                  null,
                  l,
                  h
                );
            }
        for (a in l)
          if (r = l[a], h = n[a], l.hasOwnProperty(a) && (r != null || h != null))
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
                r !== h && Ne(
                  e,
                  t,
                  a,
                  r,
                  l,
                  h
                );
            }
        t = f, n = u, l = A, E != null ? Rn(e, !!n, E, !1) : !!l != !!n && (t != null ? Rn(e, !!n, t, !0) : Rn(e, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        A = E = null;
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
                E = a;
                break;
              case "defaultValue":
                A = a;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (a != null) throw Error(s(91));
                break;
              default:
                a !== r && Ne(e, t, u, a, l, r);
            }
        Cr(e, E, A);
        return;
      case "option":
        for (var Q in n)
          if (E = n[Q], n.hasOwnProperty(Q) && E != null && !l.hasOwnProperty(Q))
            switch (Q) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Ne(
                  e,
                  t,
                  Q,
                  null,
                  l,
                  E
                );
            }
        for (h in l)
          if (E = l[h], A = n[h], l.hasOwnProperty(h) && E !== A && (E != null || A != null))
            switch (h) {
              case "selected":
                e.selected = E && typeof E != "function" && typeof E != "symbol";
                break;
              default:
                Ne(
                  e,
                  t,
                  h,
                  E,
                  l,
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
        for (var J in n)
          E = n[J], n.hasOwnProperty(J) && E != null && !l.hasOwnProperty(J) && Ne(e, t, J, null, l, E);
        for (k in l)
          if (E = l[k], A = n[k], l.hasOwnProperty(k) && E !== A && (E != null || A != null))
            switch (k) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (E != null)
                  throw Error(s(137, t));
                break;
              default:
                Ne(
                  e,
                  t,
                  k,
                  E,
                  l,
                  A
                );
            }
        return;
      default:
        if (_l(t)) {
          for (var ze in n)
            E = n[ze], n.hasOwnProperty(ze) && E !== void 0 && !l.hasOwnProperty(ze) && Gc(
              e,
              t,
              ze,
              void 0,
              l,
              E
            );
          for (O in l)
            E = l[O], A = n[O], !l.hasOwnProperty(O) || E === A || E === void 0 && A === void 0 || Gc(
              e,
              t,
              O,
              E,
              l,
              A
            );
          return;
        }
    }
    for (var v in n)
      E = n[v], n.hasOwnProperty(v) && E != null && !l.hasOwnProperty(v) && Ne(e, t, v, null, l, E);
    for (D in l)
      E = l[D], A = n[D], !l.hasOwnProperty(D) || E === A || E == null && A == null || Ne(e, t, D, E, l, A);
  }
  function Rp(e) {
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
  function Jg() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), l = 0; l < n.length; l++) {
        var a = n[l], r = a.transferSize, u = a.initiatorType, f = a.duration;
        if (r && f && Rp(u)) {
          for (u = 0, f = a.responseEnd, l += 1; l < n.length; l++) {
            var h = n[l], k = h.startTime;
            if (k > f) break;
            var O = h.transferSize, D = h.initiatorType;
            O && Rp(D) && (h = h.responseEnd, u += O * (h < f ? 1 : (f - k) / (h - k)));
          }
          if (--l, t += 8 * (r + u) / (a.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var Vc = null, Qc = null;
  function Co(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Mp(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Lp(e, t) {
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
  function Fc(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Xc = null;
  function ey() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Xc ? !1 : (Xc = e, !0) : (Xc = null, !1);
  }
  var Up = typeof setTimeout == "function" ? setTimeout : void 0, ty = typeof clearTimeout == "function" ? clearTimeout : void 0, jp = typeof Promise == "function" ? Promise : void 0, ny = typeof queueMicrotask == "function" ? queueMicrotask : typeof jp < "u" ? function(e) {
    return jp.resolve(null).then(e).catch(ly);
  } : Up;
  function ly(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Fl(e) {
    return e === "head";
  }
  function Hp(e, t) {
    var n = t, l = 0;
    do {
      var a = n.nextSibling;
      if (e.removeChild(n), a && a.nodeType === 8)
        if (n = a.data, n === "/$" || n === "/&") {
          if (l === 0) {
            e.removeChild(a), gr(t);
            return;
          }
          l--;
        } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
          l++;
        else if (n === "html")
          ui(e.ownerDocument.documentElement);
        else if (n === "head") {
          n = e.ownerDocument.head, ui(n);
          for (var r = n.firstChild; r; ) {
            var u = r.nextSibling, f = r.nodeName;
            r[on] || f === "SCRIPT" || f === "STYLE" || f === "LINK" && r.rel.toLowerCase() === "stylesheet" || n.removeChild(r), r = u;
          }
        } else
          n === "body" && ui(e.ownerDocument.body);
      n = a;
    } while (n);
    gr(t);
  }
  function qp(e, t) {
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
  function $c(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (t = t.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          $c(n), xr(n);
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
  function ay(e, t, n, l) {
    for (; e.nodeType === 1; ) {
      var a = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (l) {
        if (!e[on])
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
      if (e = pn(e.nextSibling), e === null) break;
    }
    return null;
  }
  function ry(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = pn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Bp(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = pn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Pc(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Zc(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function iy(e, t) {
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
  function pn(e) {
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
  var Kc = null;
  function Yp(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "/$" || n === "/&") {
          if (t === 0)
            return pn(e.nextSibling);
          t--;
        } else
          n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Gp(e) {
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
  function Vp(e, t, n) {
    switch (t = Co(n), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(s(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(s(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(s(454));
        return e;
      default:
        throw Error(s(451));
    }
  }
  function ui(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    xr(e);
  }
  var mn = /* @__PURE__ */ new Map(), Qp = /* @__PURE__ */ new Set();
  function No(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var pl = q.d;
  q.d = {
    f: oy,
    r: uy,
    D: cy,
    C: sy,
    L: fy,
    m: dy,
    X: my,
    S: py,
    M: hy
  };
  function oy() {
    var e = pl.f(), t = wo();
    return e || t;
  }
  function uy(e) {
    var t = Dn(e);
    t !== null && t.tag === 5 && t.type === "form" ? od(t) : pl.r(e);
  }
  var pr = typeof document > "u" ? null : document;
  function Fp(e, t, n) {
    var l = pr;
    if (l && typeof t == "string" && t) {
      var a = jt(t);
      a = 'link[rel="' + e + '"][href="' + a + '"]', typeof n == "string" && (a += '[crossorigin="' + n + '"]'), Qp.has(a) || (Qp.add(a), e = { rel: e, crossOrigin: n, href: t }, l.querySelector(a) === null && (t = l.createElement("link"), ht(t, "link", e), Ke(t), l.head.appendChild(t)));
    }
  }
  function cy(e) {
    pl.D(e), Fp("dns-prefetch", e, null);
  }
  function sy(e, t) {
    pl.C(e, t), Fp("preconnect", e, t);
  }
  function fy(e, t, n) {
    pl.L(e, t, n);
    var l = pr;
    if (l && e && t) {
      var a = 'link[rel="preload"][as="' + jt(t) + '"]';
      t === "image" && n && n.imageSrcSet ? (a += '[imagesrcset="' + jt(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (a += '[imagesizes="' + jt(
        n.imageSizes
      ) + '"]')) : a += '[href="' + jt(e) + '"]';
      var r = a;
      switch (t) {
        case "style":
          r = mr(e);
          break;
        case "script":
          r = hr(e);
      }
      mn.has(r) || (e = R(
        {
          rel: "preload",
          href: t === "image" && n && n.imageSrcSet ? void 0 : e,
          as: t
        },
        n
      ), mn.set(r, e), l.querySelector(a) !== null || t === "style" && l.querySelector(ci(r)) || t === "script" && l.querySelector(si(r)) || (t = l.createElement("link"), ht(t, "link", e), Ke(t), l.head.appendChild(t)));
    }
  }
  function dy(e, t) {
    pl.m(e, t);
    var n = pr;
    if (n && e) {
      var l = t && typeof t.as == "string" ? t.as : "script", a = 'link[rel="modulepreload"][as="' + jt(l) + '"][href="' + jt(e) + '"]', r = a;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          r = hr(e);
      }
      if (!mn.has(r) && (e = R({ rel: "modulepreload", href: e }, t), mn.set(r, e), n.querySelector(a) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(si(r)))
              return;
        }
        l = n.createElement("link"), ht(l, "link", e), Ke(l), n.head.appendChild(l);
      }
    }
  }
  function py(e, t, n) {
    pl.S(e, t, n);
    var l = pr;
    if (l && e) {
      var a = Zn(l).hoistableStyles, r = mr(e);
      t = t || "default";
      var u = a.get(r);
      if (!u) {
        var f = { loading: 0, preload: null };
        if (u = l.querySelector(
          ci(r)
        ))
          f.loading = 5;
        else {
          e = R(
            { rel: "stylesheet", href: e, "data-precedence": t },
            n
          ), (n = mn.get(r)) && Ic(e, n);
          var h = u = l.createElement("link");
          Ke(h), ht(h, "link", e), h._p = new Promise(function(k, O) {
            h.onload = k, h.onerror = O;
          }), h.addEventListener("load", function() {
            f.loading |= 1;
          }), h.addEventListener("error", function() {
            f.loading |= 2;
          }), f.loading |= 4, zo(u, t, l);
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
  function my(e, t) {
    pl.X(e, t);
    var n = pr;
    if (n && e) {
      var l = Zn(n).hoistableScripts, a = hr(e), r = l.get(a);
      r || (r = n.querySelector(si(a)), r || (e = R({ src: e, async: !0 }, t), (t = mn.get(a)) && Wc(e, t), r = n.createElement("script"), Ke(r), ht(r, "link", e), n.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, l.set(a, r));
    }
  }
  function hy(e, t) {
    pl.M(e, t);
    var n = pr;
    if (n && e) {
      var l = Zn(n).hoistableScripts, a = hr(e), r = l.get(a);
      r || (r = n.querySelector(si(a)), r || (e = R({ src: e, async: !0, type: "module" }, t), (t = mn.get(a)) && Wc(e, t), r = n.createElement("script"), Ke(r), ht(r, "link", e), n.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, l.set(a, r));
    }
  }
  function Xp(e, t, n, l) {
    var a = (a = at.current) ? No(a) : null;
    if (!a) throw Error(s(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (t = mr(n.href), n = Zn(
          a
        ).hoistableStyles, l = n.get(t), l || (l = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, l)), l) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          e = mr(n.href);
          var r = Zn(
            a
          ).hoistableStyles, u = r.get(e);
          if (u || (a = a.ownerDocument || a, u = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, r.set(e, u), (r = a.querySelector(
            ci(e)
          )) && !r._p && (u.instance = r, u.state.loading = 5), mn.has(e) || (n = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, mn.set(e, n), r || gy(
            a,
            e,
            n,
            u.state
          ))), t && l === null)
            throw Error(s(528, ""));
          return u;
        }
        if (t && l !== null)
          throw Error(s(529, ""));
        return null;
      case "script":
        return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = hr(n), n = Zn(
          a
        ).hoistableScripts, l = n.get(t), l || (l = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, l)), l) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(s(444, e));
    }
  }
  function mr(e) {
    return 'href="' + jt(e) + '"';
  }
  function ci(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function $p(e) {
    return R({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function gy(e, t, n, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? l.loading = 1 : (t = e.createElement("link"), l.preload = t, t.addEventListener("load", function() {
      return l.loading |= 1;
    }), t.addEventListener("error", function() {
      return l.loading |= 2;
    }), ht(t, "link", n), Ke(t), e.head.appendChild(t));
  }
  function hr(e) {
    return '[src="' + jt(e) + '"]';
  }
  function si(e) {
    return "script[async]" + e;
  }
  function Pp(e, t, n) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var l = e.querySelector(
            'style[data-href~="' + jt(n.href) + '"]'
          );
          if (l)
            return t.instance = l, Ke(l), l;
          var a = R({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return l = (e.ownerDocument || e).createElement(
            "style"
          ), Ke(l), ht(l, "style", a), zo(l, n.precedence, e), t.instance = l;
        case "stylesheet":
          a = mr(n.href);
          var r = e.querySelector(
            ci(a)
          );
          if (r)
            return t.state.loading |= 4, t.instance = r, Ke(r), r;
          l = $p(n), (a = mn.get(a)) && Ic(l, a), r = (e.ownerDocument || e).createElement("link"), Ke(r);
          var u = r;
          return u._p = new Promise(function(f, h) {
            u.onload = f, u.onerror = h;
          }), ht(r, "link", l), t.state.loading |= 4, zo(r, n.precedence, e), t.instance = r;
        case "script":
          return r = hr(n.src), (a = e.querySelector(
            si(r)
          )) ? (t.instance = a, Ke(a), a) : (l = n, (a = mn.get(r)) && (l = R({}, n), Wc(l, a)), e = e.ownerDocument || e, a = e.createElement("script"), Ke(a), ht(a, "link", l), e.head.appendChild(a), t.instance = a);
        case "void":
          return null;
        default:
          throw Error(s(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (l = t.instance, t.state.loading |= 4, zo(l, n.precedence, e));
    return t.instance;
  }
  function zo(e, t, n) {
    for (var l = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), a = l.length ? l[l.length - 1] : null, r = a, u = 0; u < l.length; u++) {
      var f = l[u];
      if (f.dataset.precedence === t) r = f;
      else if (r !== a) break;
    }
    r ? r.parentNode.insertBefore(e, r.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
  }
  function Ic(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Wc(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var Do = null;
  function Zp(e, t, n) {
    if (Do === null) {
      var l = /* @__PURE__ */ new Map(), a = Do = /* @__PURE__ */ new Map();
      a.set(n, l);
    } else
      a = Do, l = a.get(n), l || (l = /* @__PURE__ */ new Map(), a.set(n, l));
    if (l.has(e)) return l;
    for (l.set(e, null), n = n.getElementsByTagName(e), a = 0; a < n.length; a++) {
      var r = n[a];
      if (!(r[on] || r[Ze] || e === "link" && r.getAttribute("rel") === "stylesheet") && r.namespaceURI !== "http://www.w3.org/2000/svg") {
        var u = r.getAttribute(t) || "";
        u = e + u;
        var f = l.get(u);
        f ? f.push(r) : l.set(u, [r]);
      }
    }
    return l;
  }
  function Kp(e, t, n) {
    e = e.ownerDocument || e, e.head.insertBefore(
      n,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function yy(e, t, n) {
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
  function by(e, t, n, l) {
    if (n.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var a = mr(l.href), r = t.querySelector(
          ci(a)
        );
        if (r) {
          t = r._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Ro.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = r, Ke(r);
          return;
        }
        r = t.ownerDocument || t, l = $p(l), (a = mn.get(a)) && Ic(l, a), r = r.createElement("link"), Ke(r);
        var u = r;
        u._p = new Promise(function(f, h) {
          u.onload = f, u.onerror = h;
        }), ht(r, "link", l), n.instance = r;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (e.count++, n = Ro.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
    }
  }
  var Jc = 0;
  function vy(e, t) {
    return e.stylesheets && e.count === 0 && Lo(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
      var l = setTimeout(function() {
        if (e.stylesheets && Lo(e, e.stylesheets), e.unsuspend) {
          var r = e.unsuspend;
          e.unsuspend = null, r();
        }
      }, 6e4 + t);
      0 < e.imgBytes && Jc === 0 && (Jc = 62500 * Jg());
      var a = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Lo(e, e.stylesheets), e.unsuspend)) {
            var r = e.unsuspend;
            e.unsuspend = null, r();
          }
        },
        (e.imgBytes > Jc ? 50 : 800) + t
      );
      return e.unsuspend = n, function() {
        e.unsuspend = null, clearTimeout(l), clearTimeout(a);
      };
    } : null;
  }
  function Ro() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Lo(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var Mo = null;
  function Lo(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Mo = /* @__PURE__ */ new Map(), t.forEach(Sy, e), Mo = null, Ro.call(e));
  }
  function Sy(e, t) {
    if (!(t.state.loading & 4)) {
      var n = Mo.get(e);
      if (n) var l = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), Mo.set(e, n);
        for (var a = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), r = 0; r < a.length; r++) {
          var u = a[r];
          (u.nodeName === "LINK" || u.getAttribute("media") !== "not all") && (n.set(u.dataset.precedence, u), l = u);
        }
        l && n.set(null, l);
      }
      a = t.instance, u = a.getAttribute("data-precedence"), r = n.get(u) || l, r === l && n.set(null, a), n.set(u, a), this.count++, l = Ro.bind(this), a.addEventListener("load", l), a.addEventListener("error", l), r ? r.parentNode.insertBefore(a, r.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(a, e.firstChild)), t.state.loading |= 4;
    }
  }
  var fi = {
    $$typeof: le,
    Provider: null,
    Consumer: null,
    _currentValue: ue,
    _currentValue2: ue,
    _threadCount: 0
  };
  function wy(e, t, n, l, a, r, u, f, h) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ra(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ra(0), this.hiddenUpdates = Ra(null), this.identifierPrefix = l, this.onUncaughtError = a, this.onCaughtError = r, this.onRecoverableError = u, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = h, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Wp(e, t, n, l, a, r, u, f, h, k, O, D) {
    return e = new wy(
      e,
      t,
      n,
      u,
      h,
      k,
      O,
      D,
      f
    ), t = 1, r === !0 && (t |= 24), r = $t(3, null, null, t), e.current = r, r.stateNode = e, t = Du(), t.refCount++, e.pooledCache = t, t.refCount++, r.memoizedState = {
      element: l,
      isDehydrated: n,
      cache: t
    }, Uu(r), e;
  }
  function Jp(e) {
    return e ? (e = Xa, e) : Xa;
  }
  function em(e, t, n, l, a, r) {
    a = Jp(a), l.context === null ? l.context = a : l.pendingContext = a, l = Ml(t), l.payload = { element: n }, r = r === void 0 ? null : r, r !== null && (l.callback = r), n = Ll(e, l, t), n !== null && (Ut(n, e, t), Vr(n, e, t));
  }
  function tm(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function es(e, t) {
    tm(e, t), (e = e.alternate) && tm(e, t);
  }
  function nm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = sa(e, 67108864);
      t !== null && Ut(t, e, 67108864), es(e, 67108864);
    }
  }
  function lm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Wt();
      t = aa(t);
      var n = sa(e, t);
      n !== null && Ut(n, e, t), es(e, t);
    }
  }
  var Uo = !0;
  function Ty(e, t, n, l) {
    var a = M.T;
    M.T = null;
    var r = q.p;
    try {
      q.p = 2, ts(e, t, n, l);
    } finally {
      q.p = r, M.T = a;
    }
  }
  function ky(e, t, n, l) {
    var a = M.T;
    M.T = null;
    var r = q.p;
    try {
      q.p = 8, ts(e, t, n, l);
    } finally {
      q.p = r, M.T = a;
    }
  }
  function ts(e, t, n, l) {
    if (Uo) {
      var a = ns(l);
      if (a === null)
        Yc(
          e,
          t,
          l,
          jo,
          n
        ), rm(e, l);
      else if (Ay(
        a,
        e,
        t,
        n,
        l
      ))
        l.stopPropagation();
      else if (rm(e, l), t & 4 && -1 < Ey.indexOf(e)) {
        for (; a !== null; ) {
          var r = Dn(a);
          if (r !== null)
            switch (r.tag) {
              case 3:
                if (r = r.stateNode, r.current.memoizedState.isDehydrated) {
                  var u = Ct(r.pendingLanes);
                  if (u !== 0) {
                    var f = r;
                    for (f.pendingLanes |= 2, f.entangledLanes |= 2; u; ) {
                      var h = 1 << 31 - rt(u);
                      f.entanglements[1] |= h, u &= ~h;
                    }
                    Hn(r), (ke & 6) === 0 && (vo = st() + 500, ri(0));
                  }
                }
                break;
              case 31:
              case 13:
                f = sa(r, 2), f !== null && Ut(f, r, 2), wo(), es(r, 2);
            }
          if (r = ns(l), r === null && Yc(
            e,
            t,
            l,
            jo,
            n
          ), r === a) break;
          a = r;
        }
        a !== null && l.stopPropagation();
      } else
        Yc(
          e,
          t,
          l,
          null,
          n
        );
    }
  }
  function ns(e) {
    return e = Nr(e), ls(e);
  }
  var jo = null;
  function ls(e) {
    if (jo = null, e = Pn(e), e !== null) {
      var t = T(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (e = _(t), e !== null) return e;
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
    return jo = e, null;
  }
  function am(e) {
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
        switch (ki()) {
          case Ca:
            return 2;
          case tn:
            return 8;
          case nn:
          case Qn:
            return 32;
          case Na:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var as = !1, Xl = null, $l = null, Pl = null, di = /* @__PURE__ */ new Map(), pi = /* @__PURE__ */ new Map(), Zl = [], Ey = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function rm(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Xl = null;
        break;
      case "dragenter":
      case "dragleave":
        $l = null;
        break;
      case "mouseover":
      case "mouseout":
        Pl = null;
        break;
      case "pointerover":
      case "pointerout":
        di.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        pi.delete(t.pointerId);
    }
  }
  function mi(e, t, n, l, a, r) {
    return e === null || e.nativeEvent !== r ? (e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: l,
      nativeEvent: r,
      targetContainers: [a]
    }, t !== null && (t = Dn(t), t !== null && nm(t)), e) : (e.eventSystemFlags |= l, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
  }
  function Ay(e, t, n, l, a) {
    switch (t) {
      case "focusin":
        return Xl = mi(
          Xl,
          e,
          t,
          n,
          l,
          a
        ), !0;
      case "dragenter":
        return $l = mi(
          $l,
          e,
          t,
          n,
          l,
          a
        ), !0;
      case "mouseover":
        return Pl = mi(
          Pl,
          e,
          t,
          n,
          l,
          a
        ), !0;
      case "pointerover":
        var r = a.pointerId;
        return di.set(
          r,
          mi(
            di.get(r) || null,
            e,
            t,
            n,
            l,
            a
          )
        ), !0;
      case "gotpointercapture":
        return r = a.pointerId, pi.set(
          r,
          mi(
            pi.get(r) || null,
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
  function im(e) {
    var t = Pn(e.target);
    if (t !== null) {
      var n = T(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = _(n), t !== null) {
            e.blockedOn = t, Ar(e.priority, function() {
              lm(n);
            });
            return;
          }
        } else if (t === 31) {
          if (t = x(n), t !== null) {
            e.blockedOn = t, Ar(e.priority, function() {
              lm(n);
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
  function Ho(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = ns(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var l = new n.constructor(
          n.type,
          n
        );
        qa = l, n.target.dispatchEvent(l), qa = null;
      } else
        return t = Dn(n), t !== null && nm(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function om(e, t, n) {
    Ho(e) && n.delete(t);
  }
  function xy() {
    as = !1, Xl !== null && Ho(Xl) && (Xl = null), $l !== null && Ho($l) && ($l = null), Pl !== null && Ho(Pl) && (Pl = null), di.forEach(om), pi.forEach(om);
  }
  function qo(e, t) {
    e.blockedOn === t && (e.blockedOn = null, as || (as = !0, o.unstable_scheduleCallback(
      o.unstable_NormalPriority,
      xy
    )));
  }
  var Bo = null;
  function um(e) {
    Bo !== e && (Bo = e, o.unstable_scheduleCallback(
      o.unstable_NormalPriority,
      function() {
        Bo === e && (Bo = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t], l = e[t + 1], a = e[t + 2];
          if (typeof l != "function") {
            if (ls(l || n) === null)
              continue;
            break;
          }
          var r = Dn(n);
          r !== null && (e.splice(t, 3), t -= 3, nc(
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
  function gr(e) {
    function t(h) {
      return qo(h, e);
    }
    Xl !== null && qo(Xl, e), $l !== null && qo($l, e), Pl !== null && qo(Pl, e), di.forEach(t), pi.forEach(t);
    for (var n = 0; n < Zl.length; n++) {
      var l = Zl[n];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < Zl.length && (n = Zl[0], n.blockedOn === null); )
      im(n), n.blockedOn === null && Zl.shift();
    if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
      for (l = 0; l < n.length; l += 3) {
        var a = n[l], r = n[l + 1], u = a[it] || null;
        if (typeof r == "function")
          u || um(n);
        else if (u) {
          var f = null;
          if (r && r.hasAttribute("formAction")) {
            if (a = r, u = r[it] || null)
              f = u.formAction;
            else if (ls(a) !== null) continue;
          } else f = u.action;
          typeof f == "function" ? n[l + 1] = f : (n.splice(l, 3), l -= 3), um(n);
        }
      }
  }
  function cm() {
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
  function rs(e) {
    this._internalRoot = e;
  }
  Yo.prototype.render = rs.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(s(409));
    var n = t.current, l = Wt();
    em(n, l, e, t, null, null);
  }, Yo.prototype.unmount = rs.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      em(e.current, 2, null, e, null, null), wo(), t[Tl] = null;
    }
  };
  function Yo(e) {
    this._internalRoot = e;
  }
  Yo.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Oi();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Zl.length && t !== 0 && t < Zl[n].priority; n++) ;
      Zl.splice(n, 0, e), n === 0 && im(e);
    }
  };
  var sm = c.version;
  if (sm !== "19.2.6")
    throw Error(
      s(
        527,
        sm,
        "19.2.6"
      )
    );
  q.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
    return e = U(t), e = e !== null ? L(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var _y = {
    bundleType: 0,
    version: "19.2.6",
    rendererPackageName: "react-dom",
    currentDispatcherRef: M,
    reconcilerVersion: "19.2.6"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Go = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Go.isDisabled && Go.supportsFiber)
      try {
        Fn = Go.inject(
          _y
        ), Pe = Go;
      } catch {
      }
  }
  return Em.createRoot = function(e, t) {
    if (!y(e)) throw Error(s(299));
    var n = !1, l = "", a = yd, r = bd, u = vd;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onUncaughtError !== void 0 && (a = t.onUncaughtError), t.onCaughtError !== void 0 && (r = t.onCaughtError), t.onRecoverableError !== void 0 && (u = t.onRecoverableError)), t = Wp(
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
      cm
    ), e[Tl] = t.current, Bc(e), new rs(t);
  }, Em.hydrateRoot = function(e, t, n) {
    if (!y(e)) throw Error(s(299));
    var l = !1, a = "", r = yd, u = bd, f = vd, h = null;
    return n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onUncaughtError !== void 0 && (r = n.onUncaughtError), n.onCaughtError !== void 0 && (u = n.onCaughtError), n.onRecoverableError !== void 0 && (f = n.onRecoverableError), n.formState !== void 0 && (h = n.formState)), t = Wp(
      e,
      1,
      !0,
      t,
      n ?? null,
      l,
      a,
      h,
      r,
      u,
      f,
      cm
    ), t.context = Jp(null), n = t.current, l = Wt(), l = aa(l), a = Ml(l), a.callback = null, Ll(n, a, l), n = l, t.current.lanes = n, wl(t, n), Hn(t), e[Tl] = t.current, Bc(e), new Yo(t);
  }, Em.version = "19.2.6", Em;
}
var e1;
function QA() {
  if (e1) return S0.exports;
  e1 = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (o) {
        console.error(o);
      }
  }
  return i(), S0.exports = VA(), S0.exports;
}
var FA = QA();
const YS = (i, o, c) => {
  FA.createRoot(c).render(_t.createElement(i, o));
}, PA = ({ targetSelector: i, props: o }) => {
  YS(qS, o, document.querySelector(i));
}, ZA = ({ targetSelector: i, props: o }) => {
  YS(BS, o, document.querySelector(i));
};
export {
  qS as CardsGridEvents,
  BS as CardsListEvents,
  PA as initCardsGridEventsComponent,
  ZA as initCardsListEventsComponent
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
/*! @license DOMPurify 3.4.17 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.17/LICENSE */
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
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
