import St, { forwardRef as yn, createContext as Aw, useState as eu, useRef as lh, useId as C1, useCallback as Bv, useEffect as wi, Children as O1, isValidElement as N1, createElement as z1, useContext as fb } from "react";
import R1 from "react-dom";
function Ew(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var Xy = { exports: {} }, vm = {};
var Nb;
function _w() {
  if (Nb) return vm;
  Nb = 1;
  var r = Symbol.for("react.transitional.element"), o = Symbol.for("react.fragment");
  function s(f, c, p) {
    var y = null;
    if (p !== void 0 && (y = "" + p), c.key !== void 0 && (y = "" + c.key), "key" in c) {
      p = {};
      for (var T in c)
        T !== "key" && (p[T] = c[T]);
    } else p = c;
    return c = p.ref, {
      $$typeof: r,
      type: f,
      key: y,
      ref: c !== void 0 ? c : null,
      props: p
    };
  }
  return vm.Fragment = o, vm.jsx = s, vm.jsxs = s, vm;
}
var zb;
function Cw() {
  return zb || (zb = 1, Xy.exports = _w()), Xy.exports;
}
var On = Cw();
function db(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var Rb = { exports: {} }, bm = {}, Db;
function Ow() {
  if (Db) return bm;
  Db = 1;
  var r = Symbol.for("react.transitional.element"), o = Symbol.for("react.fragment");
  function s(f, c, p) {
    var y = null;
    if (p !== void 0 && (y = "" + p), c.key !== void 0 && (y = "" + c.key), "key" in c) {
      p = {};
      for (var T in c)
        T !== "key" && (p[T] = c[T]);
    } else p = c;
    return c = p.ref, {
      $$typeof: r,
      type: f,
      key: y,
      ref: c !== void 0 ? c : null,
      props: p
    };
  }
  return bm.Fragment = o, bm.jsx = s, bm.jsxs = s, bm;
}
var Lb;
function Nw() {
  return Lb || (Lb = 1, Rb.exports = Ow()), Rb.exports;
}
var Y = Nw(), Mb = { exports: {} }, Py, Ub;
function zw() {
  if (Ub) return Py;
  Ub = 1;
  var r = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Py = r, Py;
}
var $y, jb;
function Rw() {
  if (jb) return $y;
  jb = 1;
  var r = /* @__PURE__ */ zw();
  function o() {
  }
  function s() {
  }
  return s.resetWarningCache = o, $y = function() {
    function f(y, T, S, x, z, O) {
      if (O !== r) {
        var M = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw M.name = "Invariant Violation", M;
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
  }, $y;
}
var Hb;
function Dw() {
  return Hb || (Hb = 1, Mb.exports = /* @__PURE__ */ Rw()()), Mb.exports;
}
var Lw = /* @__PURE__ */ Dw();
const v = /* @__PURE__ */ db(Lw), Mw = () => {
  const [r, o] = eu(null), [s, f] = eu(!1), [c, p] = eu(null), [y, T] = eu("");
  return wi(() => {
    y && (() => {
      p(null), f(!0);
      try {
        fetch(y).then((S) => S.json()).then((S) => {
          o(S), f(!1);
        }).catch((S) => {
          p(S), f(!1);
        });
      } catch (S) {
        p(S);
      }
    })();
  }, [y]), [{ data: r, loading: s, error: c }, T];
}, Uw = (r) => (r || []).join(" ");
function qb(r, o) {
  (o == null || o > r.length) && (o = r.length);
  for (var s = 0, f = Array(o); s < o; s++) f[s] = r[s];
  return f;
}
function jw(r) {
  if (Array.isArray(r)) return r;
}
function Hw(r, o) {
  var s = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (s != null) {
    var f, c, p, y, T = [], S = !0, x = !1;
    try {
      if (p = (s = s.call(r)).next, o !== 0) for (; !(S = (f = p.call(s)).done) && (T.push(f.value), T.length !== o); S = !0) ;
    } catch (z) {
      x = !0, c = z;
    } finally {
      try {
        if (!S && s.return != null && (y = s.return(), Object(y) !== y)) return;
      } finally {
        if (x) throw c;
      }
    }
    return T;
  }
}
function qw() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Bw(r, o) {
  return jw(r) || Hw(r, o) || Yw(r, o) || qw();
}
function Yw(r, o) {
  if (r) {
    if (typeof r == "string") return qb(r, o);
    var s = {}.toString.call(r).slice(8, -1);
    return s === "Object" && r.constructor && (s = r.constructor.name), s === "Map" || s === "Set" ? Array.from(r) : s === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s) ? qb(r, o) : void 0;
  }
}
const D1 = Object.entries, Bb = Object.setPrototypeOf, Vw = Object.isFrozen, L1 = Object.getPrototypeOf, M1 = Object.getOwnPropertyDescriptor;
let va = Object.freeze, tl = Object.seal, Nc = Object.create, U1 = typeof Reflect < "u" && Reflect, Yv = U1.apply, Vv = U1.construct;
va || (va = function(r) {
  return r;
});
tl || (tl = function(r) {
  return r;
});
Yv || (Yv = function(r, o) {
  for (var s = arguments.length, f = new Array(s > 2 ? s - 2 : 0), c = 2; c < s; c++) f[c - 2] = arguments[c];
  return r.apply(o, f);
});
Vv || (Vv = function(r) {
  for (var o = arguments.length, s = new Array(o > 1 ? o - 1 : 0), f = 1; f < o; f++) s[f - 1] = arguments[f];
  return new r(...s);
});
const Po = Sn(Array.prototype.forEach), Gw = Sn(Array.prototype.lastIndexOf), Yb = Sn(Array.prototype.pop), Sm = Sn(Array.prototype.push), Fw = Sn(Array.prototype.slice), Qw = Sn(Array.prototype.splice), Dc = Array.isArray, Iy = j1(Set), Ky = Sn(Set.prototype.add), wm = Sn(Set.prototype.has), fc = Sn(String.prototype.toLowerCase), Zy = Sn(String.prototype.toString), Vb = Sn(String.prototype.match), Tm = Sn(String.prototype.replace), Gb = Sn(String.prototype.indexOf), Xw = Sn(String.prototype.trim), Pw = Sn(Number.prototype.toString), $w = Sn(Boolean.prototype.toString), Fb = typeof BigInt > "u" ? null : Sn(BigInt.prototype.toString), Qb = typeof Symbol > "u" ? null : Sn(Symbol.prototype.toString), Al = Sn(Object.prototype.hasOwnProperty), km = Sn(Object.prototype.toString), Ja = Sn(RegExp.prototype.test), $o = j1(TypeError);
function Sn(r) {
  return function(o) {
    o instanceof RegExp && (o.lastIndex = 0);
    for (var s = arguments.length, f = new Array(s > 1 ? s - 1 : 0), c = 1; c < s; c++) f[c - 1] = arguments[c];
    return Yv(r, o, f);
  };
}
function j1(r) {
  return function() {
    for (var o = arguments.length, s = new Array(o), f = 0; f < o; f++) s[f] = arguments[f];
    return Vv(r, s);
  };
}
function vt(r, o) {
  let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : fc;
  if (Bb && Bb(r, null), !Dc(o)) return r;
  let f = o.length;
  for (; f--; ) {
    let c = o[f];
    if (typeof c == "string") {
      const p = s(c);
      p !== c && (Vw(o) || (o[f] = p), c = p);
    }
    r[c] = !0;
  }
  return r;
}
function Iw(r) {
  for (let o = 0; o < r.length; o++) Al(r, o) || (r[o] = null);
  return r;
}
function br(r) {
  const o = Nc(null);
  for (const f of D1(r)) {
    var s = Bw(f, 2);
    const c = s[0], p = s[1];
    Al(r, c) && (Dc(p) ? o[c] = Iw(p) : p && typeof p == "object" && p.constructor === Object ? o[c] = br(p) : o[c] = p);
  }
  return o;
}
function Kw(r) {
  switch (typeof r) {
    case "string":
      return r;
    case "number":
      return Pw(r);
    case "boolean":
      return $w(r);
    case "bigint":
      return Fb ? Fb(r) : "0";
    case "symbol":
      return Qb ? Qb(r) : "Symbol()";
    case "undefined":
      return km(r);
    case "function":
    case "object": {
      if (r === null) return km(r);
      const o = r, s = wr(o, "toString");
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
function wr(r, o) {
  for (; r !== null; ) {
    const f = M1(r, o);
    if (f) {
      if (f.get) return Sn(f.get);
      if (typeof f.value == "function") return Sn(f.value);
    }
    r = L1(r);
  }
  function s() {
    return null;
  }
  return s;
}
function Zw(r, o) {
  for (; r !== null; ) {
    const s = M1(r, o);
    if (s) return s.get ? Sn(s.get) : null;
    r = L1(r);
  }
  return null;
}
function Ww(r) {
  try {
    return Ja(r, ""), !0;
  } catch {
    return !1;
  }
}
const Xb = va([
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
]), Wy = va([
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
]), Jy = va([
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
]), Jw = va([
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
]), ev = va([
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
]), eT = va([
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
]), Pb = va(["#text"]), $b = va([
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
]), tv = va([
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
]), Ib = va([
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
]), Pm = va([
  "xlink:href",
  "xml:id",
  "xlink:title",
  "xml:space",
  "xmlns:xlink"
]), tT = tl(/{{[\w\W]*|^[\w\W]*}}/g), nT = tl(/<%[\w\W]*|^[\w\W]*%>/g), aT = tl(/\${[\w\W]*/g), lT = tl(/^data-[\-\w.\u00B7-\uFFFF]+$/), rT = tl(/^aria-[\-\w]+$/), Kb = tl(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), iT = tl(/^(?:\w+script|data):/i), oT = tl(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), uT = tl(/^html$/i), sT = tl(/^[a-z][.\w]*(-[.\w]+)+$/i), nv = tl(/<[/\w!]/g), Zb = tl(/<[/\w]/g), cT = tl(/<\/no(script|embed|frames)/i), Wb = tl(/\/>/i), Bn = {
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
}, fT = va(vt({}, [
  "style",
  "script",
  "xmp",
  "iframe",
  "noembed",
  "noframes",
  "plaintext",
  "noscript"
])), dT = function() {
  return typeof window > "u" ? null : window;
}, pT = function(r, o) {
  if (typeof r != "object" || typeof r.createPolicy != "function") return null;
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
}, Jb = function() {
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
}, au = function(r, o, s, f) {
  return Al(r, o) && Dc(r[o]) ? vt(f.base ? br(f.base) : {}, r[o], f.transform) : s;
}, av = function(r, o, s) {
  const f = Al(r, o) ? r[o] : void 0;
  return f && typeof f == "object" ? br(f) : s();
};
function H1() {
  let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : dT();
  const o = (h) => H1(h);
  if (o.version = "3.4.17", o.removed = [], !r || !r.document || r.document.nodeType !== Bn.document || !r.Element)
    return o.isSupported = !1, o;
  let s = r.document;
  const f = s, c = f.currentScript;
  r.DocumentFragment;
  const p = r.HTMLTemplateElement, y = r.Node, T = r.Element, S = r.NodeFilter;
  r.NamedNodeMap === void 0 && (r.NamedNodeMap || r.MozNamedAttrMap), r.HTMLFormElement;
  const x = r.DOMParser, z = r.trustedTypes, O = T.prototype, M = wr(O, "cloneNode"), $ = wr(O, "remove"), H = wr(O, "removeAttributeNode"), V = wr(O, "nextSibling"), X = wr(O, "childNodes"), I = wr(O, "parentNode"), q = wr(O, "shadowRoot"), fe = wr(O, "attributes"), ae = y && y.prototype ? wr(y.prototype, "nodeType") : null, le = y && y.prototype ? wr(y.prototype, "nodeName") : null, K = y && y.prototype ? wr(y.prototype, "ownerDocument") : null, F = function(h) {
    return ae ? ae(h) : h.nodeType;
  }, J = function(h) {
    return le ? le(h) : h.nodeName;
  }, Ae = Zw(O, "namespaceURI"), Qe = function(h) {
    return Ae ? Ae(h) : h.namespaceURI;
  };
  if (typeof p == "function") {
    const h = s.createElement("template");
    h.content && h.content.ownerDocument && (s = h.content.ownerDocument);
  }
  let ve, je = "", xe, yt = !1, Fe = 0;
  const B = function() {
    if (Fe > 0) throw $o('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, U = function(h) {
    B(), Fe++;
    try {
      return ve.createHTML(h);
    } finally {
      Fe--;
    }
  }, G = function(h) {
    B(), Fe++;
    try {
      return ve.createScriptURL(h);
    } finally {
      Fe--;
    }
  }, ue = function() {
    return yt || (xe = pT(z, c), yt = !0), xe;
  }, ie = s, Ye = ie.implementation, Se = ie.createNodeIterator, se = ie.createDocumentFragment, Z = ie.getElementsByTagName, be = f.importNode;
  let ce = Jb();
  o.isSupported = typeof D1 == "function" && typeof I == "function" && Ye && Ye.createHTMLDocument !== void 0;
  const lt = tT, Nn = nT, kn = aT, st = lT, Ar = rT, _l = iT, Cl = oT, Ai = sT;
  let zn = Kb, Ce = null;
  const ll = vt({}, [
    ...Xb,
    ...Wy,
    ...Jy,
    ...ev,
    ...Pb
  ]);
  let De = null;
  const Ol = vt({}, [
    ...$b,
    ...tv,
    ...Ib,
    ...Pm
  ]);
  let _t = Object.seal(Nc(null, {
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
  })), Fn = null, Nl = null;
  const Rn = Object.seal(Nc(null, {
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
  let Ei = !0, ct = !0, _i = !1, zl = !0, en = !1, tn = !0, Qn = !1, Rl = !1, Dl = null, Ll = null, Xn = !1, $e = !1, Bt = !1, rt = !1, Ci = !0, Oi = !1;
  const Ni = "user-content-";
  let Sa = !0, wa = !1, nn = null, Ct = {}, an = null;
  const Ta = vt({}, [
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
  let zi = null;
  const Er = vt({}, [
    "audio",
    "video",
    "img",
    "source",
    "image",
    "track"
  ]);
  let Ml = null;
  const ka = vt({}, [
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
  ]), Ul = "http://www.w3.org/1998/Math/MathML", rl = "http://www.w3.org/2000/svg", Yt = "http://www.w3.org/1999/xhtml";
  let Pn = Yt, il = !1, ol = null;
  const Ri = vt({}, [
    Ul,
    rl,
    Yt
  ], Zy), _r = va([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext"
  ]);
  let ln = vt({}, _r);
  const Ie = va(["annotation-xml"]);
  let it = vt({}, Ie);
  const xa = vt({}, [
    "title",
    "style",
    "font",
    "a",
    "script"
  ]);
  let $n = null;
  const cu = ["application/xhtml+xml", "text/html"], fu = "text/html";
  let He = null, rn = null;
  const Cr = s.createElement("form"), In = function(h) {
    return h instanceof RegExp || h instanceof Function;
  }, Dn = function() {
    let h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (rn && rn === h) return;
    (!h || typeof h != "object") && (h = {}), h = br(h), $n = cu.indexOf(h.PARSER_MEDIA_TYPE) === -1 ? fu : h.PARSER_MEDIA_TYPE, He = $n === "application/xhtml+xml" ? Zy : fc, Ce = au(h, "ALLOWED_TAGS", ll, { transform: He }), De = au(h, "ALLOWED_ATTR", Ol, { transform: He }), ol = au(h, "ALLOWED_NAMESPACES", Ri, { transform: Zy }), Ml = au(h, "ADD_URI_SAFE_ATTR", ka, {
      transform: He,
      base: ka
    }), zi = au(h, "ADD_DATA_URI_TAGS", Er, {
      transform: He,
      base: Er
    }), an = au(h, "FORBID_CONTENTS", Ta, { transform: He }), Fn = au(h, "FORBID_TAGS", br({}), { transform: He }), Nl = au(h, "FORBID_ATTR", br({}), { transform: He }), Ct = Al(h, "USE_PROFILES") ? h.USE_PROFILES && typeof h.USE_PROFILES == "object" ? br(h.USE_PROFILES) : h.USE_PROFILES : !1, Ei = h.ALLOW_ARIA_ATTR !== !1, ct = h.ALLOW_DATA_ATTR !== !1, _i = h.ALLOW_UNKNOWN_PROTOCOLS || !1, zl = h.ALLOW_SELF_CLOSE_IN_ATTR !== !1, en = h.SAFE_FOR_TEMPLATES || !1, tn = h.SAFE_FOR_XML !== !1, Qn = h.WHOLE_DOCUMENT || !1, $e = h.RETURN_DOM || !1, Bt = h.RETURN_DOM_FRAGMENT || !1, rt = h.RETURN_TRUSTED_TYPE || !1, Xn = h.FORCE_BODY || !1, Ci = h.SANITIZE_DOM !== !1, Oi = h.SANITIZE_NAMED_PROPS || !1, Sa = h.KEEP_CONTENT !== !1, wa = h.IN_PLACE || !1, zn = Ww(h.ALLOWED_URI_REGEXP) ? h.ALLOWED_URI_REGEXP : Kb, Pn = typeof h.NAMESPACE == "string" ? h.NAMESPACE : Yt, ln = av(h, "MATHML_TEXT_INTEGRATION_POINTS", () => vt({}, _r)), it = av(h, "HTML_INTEGRATION_POINTS", () => vt({}, Ie));
    const m = av(h, "CUSTOM_ELEMENT_HANDLING", () => Nc(null));
    if (_t = Nc(null), Al(m, "tagNameCheck") && In(m.tagNameCheck) && (_t.tagNameCheck = m.tagNameCheck), Al(m, "attributeNameCheck") && In(m.attributeNameCheck) && (_t.attributeNameCheck = m.attributeNameCheck), Al(m, "allowCustomizedBuiltInElements") && typeof m.allowCustomizedBuiltInElements == "boolean" && (_t.allowCustomizedBuiltInElements = m.allowCustomizedBuiltInElements), tl(_t), en && (ct = !1), Bt && ($e = !0), Ct && (Ce = vt({}, Pb), De = Nc(null), Ct.html === !0 && (vt(Ce, Xb), vt(De, $b)), Ct.svg === !0 && (vt(Ce, Wy), vt(De, tv), vt(De, Pm)), Ct.svgFilters === !0 && (vt(Ce, Jy), vt(De, tv), vt(De, Pm)), Ct.mathMl === !0 && (vt(Ce, ev), vt(De, Ib), vt(De, Pm))), Rn.tagCheck = null, Rn.attributeCheck = null, Al(h, "ADD_TAGS") && (typeof h.ADD_TAGS == "function" ? Rn.tagCheck = h.ADD_TAGS : Dc(h.ADD_TAGS) && (Ce === ll && (Ce = br(Ce)), vt(Ce, h.ADD_TAGS, He))), Al(h, "ADD_ATTR") && (typeof h.ADD_ATTR == "function" ? Rn.attributeCheck = h.ADD_ATTR : Dc(h.ADD_ATTR) && (De === Ol && (De = br(De)), vt(De, h.ADD_ATTR, He))), Al(h, "ADD_FORBID_CONTENTS") && Dc(h.ADD_FORBID_CONTENTS) && (an === Ta && (an = br(an)), vt(an, h.ADD_FORBID_CONTENTS, He)), Sa && (Ce["#text"] = !0), Qn && vt(Ce, [
      "html",
      "head",
      "body"
    ]), Ce.table && (vt(Ce, ["tbody"]), delete Fn.tbody), h.TRUSTED_TYPES_POLICY) {
      if (typeof h.TRUSTED_TYPES_POLICY.createHTML != "function") throw $o('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof h.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw $o('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const k = ve;
      ve = h.TRUSTED_TYPES_POLICY;
      try {
        je = U("");
      } catch (D) {
        throw ve = k, D;
      }
    } else h.TRUSTED_TYPES_POLICY === null ? (ve = void 0, je = "") : (ve === void 0 && (ve = ue()), ve && typeof je == "string" && (je = U("")));
    va && va(h), rn = h;
  }, Aa = vt({}, [
    ...Wy,
    ...Jy,
    ...Jw
  ]), Kn = vt({}, [...ev, ...eT]), Ke = function(h, m, k) {
    return m.namespaceURI === Yt ? h === "svg" : m.namespaceURI === Ul ? h === "svg" && (k === "annotation-xml" || ln[k]) : !!Aa[h];
  }, Di = function(h, m, k) {
    return m.namespaceURI === Yt ? h === "math" : m.namespaceURI === rl ? h === "math" && it[k] : !!Kn[h];
  }, Li = function(h, m, k) {
    return m.namespaceURI === rl && !it[k] || m.namespaceURI === Ul && !ln[k] ? !1 : !Kn[h] && (xa[h] || !Aa[h]);
  }, Zn = function(h) {
    const m = Qe(h), k = fc(J(h)), D = I(h);
    let j, ee;
    return D && F(D) === Bn.element ? (j = { namespaceURI: Qe(D) }, ee = fc(J(D))) : (j = { namespaceURI: Pn }, ee = "template"), ol[m] ? m === rl ? Ke(k, j, ee) : m === Ul ? Di(k, j, ee) : m === Yt ? Li(k, j, ee) : !!($n === "application/xhtml+xml" && ol[m]) : !1;
  }, Et = function(h) {
    Sm(o.removed, { element: h });
    try {
      I(h).removeChild(h);
    } catch {
      if ($(h), !I(h)) throw $o("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Mi = function(h, m, k) {
    try {
      H(h, m);
    } catch {
      try {
        h.removeAttribute(k);
      } catch {
      }
    }
  }, jl = function(h) {
    _a(h);
    const m = X(h);
    m && Po(Fw(m), (D) => {
      try {
        $(D);
      } catch {
      }
    });
    const k = F(h) === Bn.element ? fe(h) : null;
    if (k) for (let D = k.length - 1; D >= 0; --D) {
      const j = k[D], ee = j && j.name;
      typeof ee == "string" && Mi(h, j, ee);
    }
  }, Wn = function(h, m, k) {
    if (!k) try {
      k = m.getAttributeNode(h);
    } catch {
      k = null;
    }
    Sm(o.removed, {
      attribute: k || null,
      from: m
    });
    try {
      k ? H(m, k) : m.removeAttribute(h);
    } catch {
      try {
        m.removeAttribute(h);
      } catch {
      }
    }
    if (h === "is")
      if ($e || Bt) try {
        Et(m);
      } catch {
      }
      else try {
        m.setAttribute(h, "");
      } catch {
      }
  }, Ui = function(h) {
    const m = fe(h);
    if (m)
      for (let k = m.length - 1; k >= 0; --k) {
        const D = m[k], j = D && D.name;
        typeof j != "string" || De[He(j)] || Mi(h, D, j);
      }
  }, Ea = function(h, m) {
    let k = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
    const D = [h];
    for (; D.length > 0; ) {
      const j = D.pop();
      if (m(j) === !1) continue;
      if (k && F(j) === Bn.element) {
        const ne = q(j);
        Tt(ne) && D.push(ne);
      }
      const ee = X(j);
      if (ee) for (let ne = ee.length - 1; ne >= 0; --ne) D.push(ee[ne]);
    }
  }, _a = function(h) {
    Ea(h, (m) => {
      F(m) === Bn.element && Ui(m);
    });
  }, Vt = function(h) {
    const m = [];
    return Ea(h, (k) => {
      m.push(k);
    }, !0), m;
  }, Ot = function(h, m) {
    const k = Iy();
    Po(Vt(h), (D) => {
      F(D) === Bn.element && Ky(k, D);
    }), Po(m, (D) => {
      F(D) === Bn.element && !wm(k, D) && Ui(D);
    });
  }, Or = function(h, m) {
    let k = !1;
    return Po(o.removed, (D) => {
      D.element && (k = k || D.element === h, _a(D.element));
    }), Ot(h, m), k;
  }, du = 8, Nr = function(h, m) {
    const k = nn;
    let D = null;
    const j = () => (D || (D = Iy(), Po(m, (ee) => {
      Ky(D, ee);
    })), D);
    for (let ee = 0; ; ee++) {
      const ne = Vt(h), ge = [h];
      let gt = !1;
      if (Po(ne, (Le) => {
        F(Le) === Bn.documentFragment ? Sm(ge, Le) : !gt && !wm(k, Le) && (gt = wm(j(), Le));
      }), !gt) return;
      if (ee >= du) throw $o("the tree kept changing during in-place sanitization; refusing to return it");
      Po(ge, (Le, Be) => {
        ji(Le, Be > 0, h, j());
      });
    }
  }, ji = function(h, m, k, D) {
    const j = Bl(h);
    let ee;
    for (; ee = j.nextNode(); )
      !wm(D, ee) || wm(nn, ee) || (m && Nt(ce.uponSanitizeShadowNode, ee, null), Gt(ee, k), Gl(ee, k), Tt(ee.content) && An(ee.content));
  }, Hl = function(h) {
    nn && Ky(nn, h);
  }, Hi = function(h, m) {
    return tn ? h === "patchsrc" ? !0 : h === "for" && m !== "label" && m !== "output" : !1;
  }, Ut = function(h) {
    tn && Ea(h, (m) => {
      const k = F(m);
      if (k === Bn.processingInstruction || k === Bn.comment && Ja(Zb, m.data)) {
        try {
          $(m);
        } catch {
        }
        return !1;
      }
      if (k === Bn.element) {
        const D = m, j = He(J(m));
        try {
          D.hasAttribute && D.hasAttribute("patchsrc") && D.removeAttribute("patchsrc"), D.hasAttribute && D.hasAttribute("for") && Hi("for", j) && D.removeAttribute("for");
        } catch {
        }
      }
      return !0;
    });
  }, ql = function(h) {
    let m = null, k = null;
    if (Xn) h = "<remove></remove>" + h;
    else {
      const ee = Vb(h, /^[\r\n\t ]+/);
      k = ee && ee[0];
    }
    $n === "application/xhtml+xml" && Pn === Yt && (h = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + h + "</body></html>");
    const D = ve ? U(h) : h;
    if (Pn === Yt) try {
      m = new x().parseFromString(D, $n);
    } catch {
    }
    if (!m || !m.documentElement) {
      m = Ye.createDocument(Pn, "template", null);
      try {
        m.documentElement.innerHTML = il ? je : D;
      } catch {
      }
    }
    const j = m.body || m.documentElement;
    return h && k && j.insertBefore(s.createTextNode(k), j.childNodes[0] || null), Pn === Yt ? Z.call(m, Qn ? "html" : "body")[0] : Qn ? m.documentElement : j;
  }, Bl = function(h) {
    const m = K ? K(h) : h.ownerDocument;
    return Se.call(m || h, h, S.SHOW_ELEMENT | S.SHOW_COMMENT | S.SHOW_TEXT | S.SHOW_PROCESSING_INSTRUCTION | S.SHOW_CDATA_SECTION, null);
  }, Ca = function(h) {
    return h = Tm(h, lt, " "), h = Tm(h, Nn, " "), h = Tm(h, kn, " "), h;
  }, Ln = function(h) {
    var m;
    zr(h);
    const k = (m = h.querySelectorAll) === null || m === void 0 ? void 0 : m.call(h, "template");
    k && Po(k, (D) => {
      Tt(D.content) && Ln(D.content);
    });
  }, zr = function(h) {
    h.normalize();
    const m = K ? K(h) : h.ownerDocument, k = Se.call(m || h, h, S.SHOW_TEXT | S.SHOW_COMMENT | S.SHOW_CDATA_SECTION | S.SHOW_PROCESSING_INSTRUCTION, null);
    let D = k.nextNode();
    for (; D; )
      D.data = Ca(D.data), D = k.nextNode();
  }, ul = function(h) {
    const m = le ? le(h) : null;
    return typeof m != "string" || He(m) !== "form" ? !1 : typeof h.nodeName != "string" || typeof h.textContent != "string" || typeof h.removeChild != "function" || h.attributes !== fe(h) || typeof h.removeAttribute != "function" || typeof h.removeAttributeNode != "function" || typeof h.getAttributeNode != "function" || typeof h.setAttribute != "function" || typeof h.namespaceURI != "string" || typeof h.insertBefore != "function" || typeof h.hasChildNodes != "function" || h.nodeType !== ae(h) || h.childNodes !== X(h);
  }, Tt = function(h) {
    if (!ae || typeof h != "object" || h === null) return !1;
    try {
      return ae(h) === Bn.documentFragment;
    } catch {
      return !1;
    }
  }, sl = function(h) {
    if (!ae || typeof h != "object" || h === null) return !1;
    try {
      return typeof ae(h) == "number";
    } catch {
      return !1;
    }
  };
  function Nt(h, m, k) {
    h.length !== 0 && Po(h, (D) => {
      D.call(o, m, k, rn);
    });
  }
  const qi = function(h, m) {
    return !!(tn && h.hasChildNodes() && !sl(h.firstElementChild) && Ja(nv, h.textContent) && Ja(nv, h.innerHTML) || tn && fT[m] && F(h) === Bn.element && Qe(h) === Yt && (sl(h.firstElementChild) || typeof h.textContent == "string" && Ja(nv, h.textContent)) || h.nodeType === Bn.processingInstruction || tn && h.nodeType === Bn.comment && Ja(Zb, h.data));
  }, Oa = function(h, m) {
    if (h instanceof RegExp) return Ja(h, m);
    if (h instanceof Function) {
      for (var k = arguments.length, D = new Array(k > 2 ? k - 2 : 0), j = 2; j < k; j++) D[j - 2] = arguments[j];
      return !!h(m, ...D);
    }
    return !1;
  }, pu = function(h, m, k) {
    if (!Fn[m] && Jn(m) && Oa(_t.tagNameCheck, m)) return !1;
    if (Sa && !an[m] && !an[fc(m)]) {
      const D = I(h), j = X(h);
      if (j && D) {
        const ee = j.length;
        for (let ne = ee - 1; ne >= 0; --ne) {
          const ge = h === k ? M(j[ne], !0) : j[ne];
          D.insertBefore(ge, V(h));
        }
      }
    }
    return Et(h), !0;
  }, Bi = function(h, m, k, D) {
    return h.length === 0 ? m : m === k || m === D ? br(m) : m;
  }, xn = function(h, m) {
    return h === m || I(h) !== null ? !1 : (wa && _a(h), !0);
  }, Gt = function(h, m) {
    if (Hl(h), Nt(ce.beforeSanitizeElements, h, null), xn(h, m)) return !0;
    if (ul(h))
      return Et(h), !0;
    const k = He(J(h));
    if (Ce = Bi(ce.uponSanitizeElement, Ce, ll, Dl), Nt(ce.uponSanitizeElement, h, {
      tagName: k,
      allowedTags: Ce
    }), xn(h, m)) return !0;
    if (qi(h, k))
      return Et(h), !0;
    if (Fn[k] || !(Rn.tagCheck instanceof Function && Rn.tagCheck(k)) && !Ce[k]) {
      const D = pu(h, k, m);
      return D === !1 && (Nt(ce.afterSanitizeElements, h, null), xn(h, m)) ? !0 : D;
    }
    if (F(h) === Bn.element && !Zn(h) || (k === "noscript" || k === "noembed" || k === "noframes") && Ja(cT, h.innerHTML))
      return Et(h), !0;
    if (en && h.nodeType === Bn.text) {
      const D = Ca(h.textContent);
      h.textContent !== D && (Sm(o.removed, { element: h.cloneNode() }), h.textContent = D);
    }
    return Nt(ce.afterSanitizeElements, h, null), xn(h, m);
  }, Yl = function(h, m, k) {
    if (Nl[m] || Hi(m, h) || Ci && (m === "id" || m === "name") && (k in s || k in Cr)) return !1;
    const D = De[m] || Rn.attributeCheck instanceof Function && Rn.attributeCheck(m, h);
    return ct && Ja(st, m) || Ei && Ja(Ar, m) ? !0 : D ? Ml[m] || Ja(zn, Tm(k, Cl, "")) || (m === "src" || m === "xlink:href" || m === "href") && h !== "script" && Gb(k, "data:") === 0 && zi[h] || _i && !Ja(_l, Tm(k, Cl, "")) ? !0 : !k : Jn(h) && Oa(_t.tagNameCheck, h) && Oa(_t.attributeNameCheck, m, h) || m === "is" && _t.allowCustomizedBuiltInElements && Oa(_t.tagNameCheck, k);
  }, Rr = vt({}, [
    "annotation-xml",
    "color-profile",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-src",
    "font-face-uri",
    "missing-glyph"
  ]), Jn = function(h) {
    return !Rr[fc(h)] && Ja(Ai, h);
  }, Na = function(h, m, k, D) {
    if (ve && typeof z == "object" && typeof z.getAttributeType == "function" && !k) switch (z.getAttributeType(h, m)) {
      case "TrustedHTML":
        return U(D);
      case "TrustedScriptURL":
        return G(D);
    }
    return D;
  }, Yi = function(h, m, k, D) {
    try {
      return k ? h.setAttributeNS(k, m, D) : h.setAttribute(m, D), ul(h) ? (Et(h), !1) : !0;
    } catch {
      return Wn(m, h), !1;
    }
  }, Vl = function(h, m) {
    return tn && Ja(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, m) ? !0 : fc(h) === "attributename" && Vb(m, "href") !== null;
  }, Gl = function(h, m) {
    if (Nt(ce.beforeSanitizeAttributes, h, null), xn(h, m)) return;
    const k = h.attributes;
    if (!k || ul(h)) return;
    De = Bi(ce.uponSanitizeAttribute, De, Ol, Ll);
    const D = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: De,
      forceKeepAttr: void 0
    };
    let j = k.length;
    const ee = He(h.nodeName);
    for (; j--; ) {
      const ne = k[j], ge = ne.name, gt = ne.namespaceURI, Le = ne.value, Be = He(ge), ft = Le;
      let ut = ge === "value" ? ft : Xw(ft), Mn = !1;
      if (D.attrName = Be, D.attrValue = ut, D.keepAttr = !0, D.forceKeepAttr = void 0, Nt(ce.uponSanitizeAttribute, h, D), ut = D.attrValue, Oi && (Be === "id" || Be === "name") && Gb(ut, Ni) !== 0 && (Wn(ge, h, ne), ut = Ni + ut, Mn = !0), Vl(ge, ut)) {
        Wn(ge, h, ne);
        continue;
      }
      if (!D.forceKeepAttr) {
        if (!D.keepAttr) {
          Wn(ge, h, ne);
          continue;
        }
        if (!zl && Ja(Wb, ut)) {
          Wn(ge, h, ne);
          continue;
        }
        if (en && (ut = Ca(ut)), !Yl(ee, Be, ut)) {
          Wn(ge, h, ne);
          continue;
        }
        ut = Na(ee, Be, gt, ut), ut !== ft && Yi(h, ge, gt, ut) && Mn && Yb(o.removed);
      }
    }
    Nt(ce.afterSanitizeAttributes, h, null), xn(h, m);
  }, An = function(h) {
    let m = null;
    const k = Bl(h);
    for (Nt(ce.beforeSanitizeShadowDOM, h, null); m = k.nextNode(); )
      if (Nt(ce.uponSanitizeShadowNode, m, null), Gt(m, h), Gl(m, h), Tt(m.content) && An(m.content), F(m) === Bn.element) {
        const D = q(m);
        Tt(D) && (Ft(D), An(D));
      }
    en && zr(h), Nt(ce.afterSanitizeShadowDOM, h, null);
  }, Ft = function(h) {
    const m = [{
      node: h,
      shadow: null
    }];
    for (; m.length > 0; ) {
      const k = m.pop();
      if (k.shadow) {
        An(k.shadow);
        continue;
      }
      const D = k.node, j = F(D) === Bn.element, ee = X(D);
      if (ee) for (let ne = ee.length - 1; ne >= 0; --ne) m.push({
        node: ee[ne],
        shadow: null
      });
      if (j) {
        const ne = le ? le(D) : null;
        if (typeof ne == "string" && He(ne) === "template") {
          const ge = D.content;
          Tt(ge) && m.push({
            node: ge,
            shadow: null
          });
        }
      }
      if (j) {
        const ne = q(D);
        Tt(ne) && m.push({
          node: null,
          shadow: ne
        }, {
          node: ne,
          shadow: null
        });
      }
    }
  };
  return o.sanitize = function(h) {
    let m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, k = null, D = null, j = null, ee = null;
    if (il = !h, il && (h = "<!-->"), typeof h != "string" && !sl(h) && (h = Kw(h), typeof h != "string"))
      throw $o("dirty is not a string, aborting");
    if (!o.isSupported) return h;
    Rl ? (Ce = Dl, De = Ll) : Dn(m), (ce.uponSanitizeElement.length > 0 || ce.uponSanitizeAttribute.length > 0) && (Ce = br(Ce)), ce.uponSanitizeAttribute.length > 0 && (De = br(De)), o.removed = [];
    const ne = wa && typeof h != "string" && sl(h);
    let ge = [];
    const gt = nn;
    if (ne) {
      Ut(h);
      const ft = J(h);
      if (typeof ft == "string") {
        const ut = He(ft);
        if (!Ce[ut] || Fn[ut])
          throw jl(h), $o("root node is forbidden and cannot be sanitized in-place");
      }
      if (ul(h))
        throw jl(h), $o("root node is clobbered and cannot be sanitized in-place");
      ge = Vt(h), nn = Iy();
    } else if (sl(h))
      k = ql("<!---->"), D = k.ownerDocument.importNode(h, !0), D.nodeType === Bn.element && D.nodeName === "BODY" || D.nodeName === "HTML" ? k = D : k.appendChild(D), Ft(k);
    else {
      if (!$e && !en && !Qn && h.indexOf("<") === -1) return ve && rt ? U(h) : h;
      if (k = ql(h), !k) return $e ? null : rt ? je : "";
    }
    k && Xn && Et(k.firstChild);
    const Le = ne ? h : k;
    try {
      ne && Ft(h);
      const ft = Bl(Le);
      for (; j = ft.nextNode(); )
        Gt(j, Le), Gl(j, Le), Tt(j.content) && An(j.content);
      ne && Nr(h, ge);
    } catch (ft) {
      throw ne && (jl(h), Or(h, ge)), ft;
    } finally {
      nn = gt;
    }
    if (ne) {
      if (Or(h, ge)) throw $o("a node selected for removal could not be safely returned; refusing to sanitize in place");
      return en && Ln(h), h;
    }
    if ($e) {
      if (en && Ln(k), Bt)
        for (ee = se.call(k.ownerDocument); k.firstChild; ) ee.appendChild(k.firstChild);
      else ee = k;
      return (De.shadowroot || De.shadowrootmode) && (ee = be.call(f, ee, !0)), ee;
    }
    let Be = Qn ? k.outerHTML : k.innerHTML;
    return Qn && Ce["!doctype"] && k.ownerDocument && k.ownerDocument.doctype && k.ownerDocument.doctype.name && Ja(uT, k.ownerDocument.doctype.name) && (Be = "<!DOCTYPE " + k.ownerDocument.doctype.name + `>
` + Be), en && (Be = Ca(Be)), ve && rt ? U(Be) : Be;
  }, o.setConfig = function() {
    let h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Dn(h), Rl = !0, Dl = Ce, Ll = De;
  }, o.clearConfig = function() {
    rn = null, Rl = !1, Dl = null, Ll = null, ve = xe, je = "";
  }, o.isValidAttribute = function(h, m, k) {
    rn || Dn({});
    const D = He(h), j = He(m);
    return typeof k == "string" && (Vl(m, k) || !zl && Ja(Wb, k)) ? !1 : Yl(D, j, k);
  }, o.addHook = function(h, m) {
    typeof m == "function" && Al(ce, h) && Sm(ce[h], m);
  }, o.removeHook = function(h, m) {
    if (Al(ce, h)) {
      if (m !== void 0) {
        const k = Gw(ce[h], m);
        return k === -1 ? void 0 : Qw(ce[h], k, 1)[0];
      }
      return Yb(ce[h]);
    }
  }, o.removeHooks = function(h) {
    Al(ce, h) && (ce[h] = []);
  }, o.removeAllHooks = function() {
    ce = Jb();
  }, o;
}
var e0 = H1();
let $m = null;
function mT() {
  return $m || (typeof window < "u" ? $m = e0(window) : $m = e0), $m;
}
const Rc = (r) => ({ __html: mT().sanitize(r) });
v.shape({
  event: v.string,
  action: v.string,
  name: v.string,
  region: v.string,
  section: v.string,
  component: v.string,
  type: v.string,
  text: v.string
});
const hT = ({
  event: r = "",
  action: o = "",
  name: s = "",
  type: f = "",
  section: c = "",
  text: p = "",
  region: y = "",
  component: T = "",
  eventCallback: S,
  eventTimeout: x
}) => {
  const { dataLayer: z } = window, O = {
    event: r.toLowerCase(),
    action: o.toLowerCase(),
    name: s.toLowerCase(),
    type: f.toLowerCase(),
    region: y.toLowerCase(),
    section: c.toLowerCase(),
    text: p.toLowerCase(),
    component: T.toLowerCase()
  };
  S && (O.eventCallback = S), x && (O.eventTimeout = x), z ? z.push(O) : S && S();
}, Gm = ({ children: r }) => /* @__PURE__ */ Y.jsx(Y.Fragment, { children: r });
Gm.propTypes = {
  children: v.oneOfType([
    v.arrayOf(v.node),
    v.node,
    v.string
  ])
};
var t0 = { exports: {} }, n0;
function gT() {
  return n0 || (n0 = 1, (function(r) {
    (function() {
      var o = {}.hasOwnProperty;
      function s() {
        for (var p = "", y = 0; y < arguments.length; y++) {
          var T = arguments[y];
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
        var y = "";
        for (var T in p)
          o.call(p, T) && p[T] && (y = c(y, T));
        return y;
      }
      function c(p, y) {
        return y ? p ? p + " " + y : p + y : p;
      }
      r.exports ? (s.default = s, r.exports = s) : window.classNames = s;
    })();
  })(t0)), t0.exports;
}
var yT = gT();
const tu = /* @__PURE__ */ db(yT);
({
  ...Gm.propTypes
});
const q1 = ({ children: r, className: o = "container", ...s }) => /* @__PURE__ */ Y.jsx("div", { className: o, ...s, children: /* @__PURE__ */ Y.jsx("div", { className: "row", children: r }) });
q1.propTypes = {
  children: Gm.propTypes.children
};
({
  ...q1.propTypes
});
Gm.propTypes.children, v.oneOf(["0", "3", "4", "6", "8", "9", "12"]);
Gm.propTypes.children;
const vT = v.shape({
  url: v.string,
  altText: v.string,
  cssClass: v.arrayOf(v.string),
  size: v.oneOf(["small", "medium", "large"])
}), lv = v.shape({
  text: v.string,
  maxWidth: v.string,
  cssClass: v.arrayOf(v.string),
  highlightColor: v.oneOf(["gold", "black"])
}), B1 = v.shape({
  color: v.oneOf(["gold", "maroon", "gray", "dark"]),
  content: v.shape({
    icon: v.arrayOf(v.string),
    header: v.string,
    body: v.string
  })
}), pb = v.shape({
  text: v.string,
  name: v.string,
  event: v.string,
  action: v.string,
  type: v.string,
  region: v.string,
  section: v.string,
  component: v.string
}), bT = "staticMarkup";
function ST() {
  const r = C1().indexOf(bT) > -1 ? !0 : void 0;
  return {
    isBootstrap: r,
    isReact: r ? void 0 : !0
  };
}
const ki = ({ gaData: r, prefix: o = "", children: s }) => {
  const { isReact: f } = ST(), { onClick: c, ...p } = s.props;
  if (f)
    return St.cloneElement(s, {
      ...p,
      onClick: (S) => (r && r.event && r.action && hT(r), c ? c(S) : !0)
    });
  let y = "";
  ["input", "header", "header-input"].includes(o) && (y = `-${o}`);
  const T = {
    [`data-ga${y}`]: r.text,
    [`data-ga${y}-name`]: r.name,
    [`data-ga${y}-event`]: r.event,
    [`data-ga${y}-action`]: r.action,
    [`data-ga${y}-type`]: r.type,
    [`data-ga${y}-region`]: r.region,
    [`data-ga${y}-section`]: r.section,
    [`data-ga${y}-component`]: r.component
  };
  return St.cloneElement(s, {
    ...p,
    onClick: c,
    ...T
  });
};
v.number, v.string, v.number, v.func, v.object;
v.arrayOf(B1).isRequired, v.number;
const a0 = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, mb = ({
  label: r = "",
  cardTitle: o = "",
  gaData: s,
  ariaLabel: f,
  block: c,
  color: p = "gray",
  disabled: y,
  element: T = "button",
  href: S,
  icon: x,
  innerRef: z,
  onClick: O,
  size: M = "default",
  variant: $,
  classes: H,
  target: V = "_self",
  ...X
}) => {
  if ($) {
    const fe = {
      borderless: "borderless",
      outline: "outline",
      filled: "filled"
    }, ae = tu("btn", fe[$], {
      [`btn-${fe[$]}-${p}`]: !0,
      "btn-medium": M === "medium",
      "btn-small": M === "small",
      "btn-large": M === "large" || M === "default",
      disabled: y
    });
    let le = T;
    return S && T === "button" && (le = "a"), /* @__PURE__ */ Y.jsx(
      ki,
      {
        gaData: {
          ...a0,
          section: o,
          ...s,
          text: r
        },
        children: /* @__PURE__ */ Y.jsxs(
          le,
          {
            type: le === "button" && O ? "button" : void 0,
            ...X,
            className: tu(H) || ae,
            href: S,
            ref: z,
            onClick: O,
            "aria-label": f,
            target: le === "a" ? V : null,
            disabled: y,
            children: [
              x && /* @__PURE__ */ Y.jsx("i", { className: `${x == null ? void 0 : x[0]} fa-${x == null ? void 0 : x[1]} me-1` }),
              r
            ]
          }
        )
      }
    );
  }
  const I = tu("btn", {
    [`btn-${p}`]: !0,
    "btn-md": M === "small",
    "btn-sm": M === "xsmall",
    "btn-block": c,
    disabled: y
  });
  let q = T;
  return S && T === "button" && (q = "a"), /* @__PURE__ */ Y.jsx(
    ki,
    {
      gaData: {
        ...a0,
        section: o,
        // @deprecated - remove at some point
        ...s,
        text: r
      },
      children: /* @__PURE__ */ Y.jsxs(
        q,
        {
          type: q === "button" && O ? "button" : void 0,
          ...X,
          className: tu(H) || I,
          href: S,
          ref: z,
          onClick: O,
          "aria-label": f,
          target: q === "a" ? V : null,
          children: [
            x && /* @__PURE__ */ Y.jsx("i", { className: `${x == null ? void 0 : x[0]} fa-${x == null ? void 0 : x[1]} me-1` }),
            r
          ]
        }
      )
    }
  );
};
mb.propTypes = {
  /**
   * Button label
   */
  label: v.string,
  /**
   * @deprecated
   * Card title, use `gaData.section` instead
   */
  cardTitle: v.string,
  /**
   * Google Analytics event data
   */
  gaData: pb,
  /**
    ARIA label for accessibility
  */
  ariaLabel: v.string,
  /**
    Render button as a block-button?
  */
  block: v.bool,
  /**
    Button background color
  */
  color: v.oneOf(["gold", "maroon", "gray", "dark"]),
  /**
    Disable the button?
  */
  disabled: v.bool,
  /**
    Pass in a Component to override default button element.
    For example: react-router Link
  */
  element: v.oneOfType([
    v.func,
    v.string,
    v.shape({ $$typeof: v.symbol, render: v.func }),
    v.arrayOf(
      v.oneOfType([
        v.func,
        v.string,
        v.shape({ $$typeof: v.symbol, render: v.func })
      ])
    )
  ]),
  /**
    Link target url; will cause button to be rendered as `<a>` link
  */
  href: v.string,
  /**
    React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  */
  icon: v.arrayOf(v.string),
  /**
   * ref will only get you a reference to the Button component, use innerRef to
   * get a reference to the DOM element (for things like focus management).
   */
  innerRef: v.oneOfType([
    v.object,
    v.func,
    v.string
  ]),
  /**
    Event handler function for `<button>`
  */
  onClick: v.func,
  /**
    Button size. Legacy sizes (default, small, xsmall) or new sizes (large, medium, small) when used with variant prop.
  */
  size: v.oneOf(["default", "small", "xsmall", "large", "medium"]),
  /**
    Button style variant (borderless, outline, filled). When provided, uses new UDS button styles.
  */
  variant: v.oneOf(["borderless", "outline", "filled"]),
  /**
    Classes to add to button
  */
  classes: v.arrayOf(v.string),
  /**
   Link target type
   */
  target: v.oneOf(["_blank", "_self", "_top", "_parent"])
};
function wT(r) {
  var o = /* @__PURE__ */ Object.create(null);
  return function(s) {
    return o[s] === void 0 && (o[s] = r(s)), o[s];
  };
}
var TT = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, kT = /* @__PURE__ */ wT(
  function(r) {
    return TT.test(r) || r.charCodeAt(0) === 111 && r.charCodeAt(1) === 110 && r.charCodeAt(2) < 91;
  }
  /* Z+1 */
), mn = "-ms-", Um = "-moz-", xt = "-webkit-", Y1 = "comm", Eh = "rule", hb = "decl", xT = "@import", AT = "@namespace", V1 = "@keyframes", ET = "@layer", G1 = Math.abs, gb = String.fromCharCode, Gv = Object.assign;
function _T(r, o) {
  return ga(r, 0) ^ 45 ? (((o << 2 ^ ga(r, 0)) << 2 ^ ga(r, 1)) << 2 ^ ga(r, 2)) << 2 ^ ga(r, 3) : 0;
}
function F1(r) {
  return r.trim();
}
function Zo(r, o) {
  return (r = o.exec(r)) ? r[0] : r;
}
function tt(r, o, s) {
  return r.replace(o, s);
}
function rh(r, o, s) {
  return r.indexOf(o, s);
}
function ga(r, o) {
  return r.charCodeAt(o) | 0;
}
function bc(r, o, s) {
  return r.slice(o, s);
}
function yi(r) {
  return r.length;
}
function Q1(r) {
  return r.length;
}
function Rm(r, o) {
  return o.push(r), r;
}
function CT(r, o) {
  return r.map(o).join("");
}
function l0(r, o) {
  return r.filter(function(s) {
    return !Zo(s, o);
  });
}
var _h = 1, Mc = 1, X1 = 0, kr = 0, Vn = 0, Yc = "";
function Ch(r, o, s, f, c, p, y, T) {
  return { value: r, root: o, parent: s, type: f, props: c, children: p, line: _h, column: Mc, length: y, return: "", siblings: T };
}
function ru(r, o) {
  return Gv(Ch("", null, null, "", null, null, 0, r.siblings), r, { length: -r.length }, o);
}
function Cc(r) {
  for (; r.root; )
    r = ru(r.root, { children: [r] });
  Rm(r, r.siblings);
}
function OT() {
  return Vn;
}
function NT() {
  return Vn = kr > 0 ? ga(Yc, --kr) : 0, Mc--, Vn === 10 && (Mc = 1, _h--), Vn;
}
function bi() {
  return Vn = kr < X1 ? ga(Yc, kr++) : 0, Mc++, Vn === 10 && (Mc = 1, _h++), Vn;
}
function ou() {
  return ga(Yc, kr);
}
function ih() {
  return kr;
}
function Oh(r, o) {
  return bc(Yc, r, o);
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
function zT(r) {
  return _h = Mc = 1, X1 = yi(Yc = r), kr = 0, [];
}
function RT(r) {
  return Yc = "", r;
}
function rv(r) {
  return F1(Oh(kr - 1, Fv(r === 91 ? r + 2 : r === 40 ? r + 1 : r)));
}
function DT(r) {
  for (; (Vn = ou()) && Vn < 33; )
    bi();
  return Bm(r) > 2 || Bm(Vn) > 3 ? "" : " ";
}
function LT(r, o) {
  for (; --o && bi() && !(Vn < 48 || Vn > 102 || Vn > 57 && Vn < 65 || Vn > 70 && Vn < 97); )
    ;
  return Oh(r, ih() + (o < 6 && ou() == 32 && bi() == 32));
}
function Fv(r) {
  for (; bi(); )
    switch (Vn) {
      // ] ) " '
      case r:
        return kr;
      // " '
      case 34:
      case 39:
        r !== 34 && r !== 39 && Fv(Vn);
        break;
      // (
      case 40:
        r === 41 && Fv(r);
        break;
      // \
      case 92:
        bi();
        break;
    }
  return kr;
}
function MT(r, o) {
  for (; bi() && r + Vn !== 57 && !(r + Vn === 84 && ou() === 47); )
    ;
  return "/*" + Oh(o, kr - 1) + "*" + gb(r === 47 ? r : bi());
}
function UT(r) {
  for (; !Bm(ou()); )
    bi();
  return Oh(r, kr);
}
function jT(r) {
  return RT(oh("", null, null, null, [""], r = zT(r), 0, [0], r));
}
function oh(r, o, s, f, c, p, y, T, S) {
  for (var x = 0, z = 0, O = y, M = 0, $ = 0, H = 0, V = 1, X = 1, I = 1, q = 0, fe = "", ae = c, le = p, K = f, F = fe; X; )
    switch (H = q, q = bi()) {
      // (
      case 40:
        if (H != 108 && ga(F, O - 1) == 58) {
          rh(F += tt(rv(q), "&", "&\f"), "&\f", G1(x ? T[x - 1] : 0)) != -1 && (I = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        F += rv(q);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        F += DT(H);
        break;
      // \
      case 92:
        F += LT(ih() - 1, 7);
        continue;
      // /
      case 47:
        switch (ou()) {
          case 42:
          case 47:
            Rm(HT(MT(bi(), ih()), o, s, S), S), (Bm(H || 1) == 5 || Bm(ou() || 1) == 5) && yi(F) && bc(F, -1, void 0) !== " " && (F += " ");
            break;
          default:
            F += "/";
        }
        break;
      // {
      case 123 * V:
        T[x++] = yi(F) * I;
      // } ; \0
      case 125 * V:
      case 59:
      case 0:
        switch (q) {
          // \0 }
          case 0:
          case 125:
            X = 0;
          // ;
          case 59 + z:
            I == -1 && (F = tt(F, /\f/g, "")), $ > 0 && (yi(F) - O || V === 0 && H === 47) && Rm($ > 32 ? i0(F + ";", f, s, O - 1, S) : i0(tt(F, " ", "") + ";", f, s, O - 2, S), S);
            break;
          // @ ;
          case 59:
            F += ";";
          // { rule/at-rule
          default:
            if (Rm(K = r0(F, o, s, x, z, c, T, fe, ae = [], le = [], O, p), p), q === 123)
              if (z === 0)
                oh(F, o, K, K, ae, p, O, T, le);
              else {
                switch (M) {
                  // c(ontainer)
                  case 99:
                    if (ga(F, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if (ga(F, 2) === 97) break;
                  default:
                    z = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                z ? oh(r, K, K, f && Rm(r0(r, K, K, 0, 0, c, T, fe, c, ae = [], O, le), le), c, le, O, T, f ? ae : le) : oh(F, K, K, K, [""], le, 0, T, le);
              }
        }
        x = z = $ = 0, V = I = 1, fe = F = "", O = y;
        break;
      // :
      case 58:
        O = 1 + yi(F), $ = H;
      default:
        if (V < 1) {
          if (q == 123)
            --V;
          else if (q == 125 && V++ == 0 && NT() == 125)
            continue;
        }
        switch (F += gb(q), q * V) {
          // &
          case 38:
            I = z > 0 ? 1 : (F += "\f", -1);
            break;
          // ,
          case 44:
            T[x++] = (yi(F) - 1) * I, I = 1;
            break;
          // @
          case 64:
            ou() === 45 && (F += rv(bi())), M = ou(), z = O = yi(fe = F += UT(ih())), q++;
            break;
          // -
          case 45:
            H === 45 && yi(F) == 2 && (V = 0);
        }
    }
  return p;
}
function r0(r, o, s, f, c, p, y, T, S, x, z, O) {
  for (var M = c - 1, $ = c === 0 ? p : [""], H = Q1($), V = 0, X = 0, I = 0; V < f; ++V)
    for (var q = 0, fe = bc(r, M + 1, M = G1(X = y[V])), ae = r; q < H; ++q)
      (ae = F1(X > 0 ? $[q] + " " + fe : tt(fe, /&\f/g, $[q]))) && (S[I++] = ae);
  return Ch(r, o, s, c === 0 ? Eh : T, S, x, z, O);
}
function HT(r, o, s, f) {
  return Ch(r, o, s, Y1, gb(OT()), bc(r, 2, -2), 0, f);
}
function i0(r, o, s, f, c) {
  return Ch(r, o, s, hb, bc(r, 0, f), bc(r, f + 1, -1), f, c);
}
function P1(r, o, s) {
  switch (_T(r, o)) {
    // color-adjust
    case 5103:
      return xt + "print-" + r + r;
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
      return xt + r + r;
    // mask-composite
    case 4855:
      return xt + r.replace("add", "source-over").replace("substract", "source-out").replace("intersect", "source-in").replace("exclude", "xor") + r;
    // tab-size
    case 4789:
      return Um + r + r;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return xt + r + Um + r + mn + r + r;
    // writing-mode
    case 5936:
      switch (ga(r, o + 11)) {
        // vertical-l(r)
        case 114:
          return xt + r + mn + tt(r, /[svh]\w+-[tblr]{2}/, "tb") + r;
        // vertical-r(l)
        case 108:
          return xt + r + mn + tt(r, /[svh]\w+-[tblr]{2}/, "tb-rl") + r;
        // horizontal(-)tb
        case 45:
          return xt + r + mn + tt(r, /[svh]\w+-[tblr]{2}/, "lr") + r;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return xt + r + mn + r + r;
    // order
    case 6165:
      return xt + r + mn + "flex-" + r + r;
    // align-items
    case 5187:
      return xt + r + tt(r, /(\w+).+(:[^]+)/, xt + "box-$1$2" + mn + "flex-$1$2") + r;
    // align-self
    case 5443:
      return xt + r + mn + "flex-item-" + tt(r, /flex-|-self/g, "") + (Zo(r, /flex-|baseline/) ? "" : mn + "grid-row-" + tt(r, /flex-|-self/g, "")) + r;
    // align-content
    case 4675:
      return xt + r + mn + "flex-line-pack" + tt(r, /align-content|flex-|-self/g, "") + r;
    // flex-shrink
    case 5548:
      return xt + r + mn + tt(r, "shrink", "negative") + r;
    // flex-basis
    case 5292:
      return xt + r + mn + tt(r, "basis", "preferred-size") + r;
    // flex-grow
    case 6060:
      return xt + "box-" + tt(r, "-grow", "") + xt + r + mn + tt(r, "grow", "positive") + r;
    // transition
    case 4554:
      return xt + tt(r, /([^-])(transform)/g, "$1" + xt + "$2") + r;
    // cursor
    case 6187:
      return tt(tt(tt(r, /(zoom-|grab)/, xt + "$1"), /(image-set)/, xt + "$1"), r, "") + r;
    // background, background-image
    case 5495:
    case 3959:
      return tt(r, /(image-set\([^]*)/, xt + "$1$`$1");
    // justify-content
    case 4968:
      return tt(tt(r, /(.+:)(flex-)?(.*)/, xt + "box-pack:$3" + mn + "flex-pack:$3"), /space-between/, "justify") + xt + r + r;
    // justify-self
    case 4200:
      if (!Zo(r, /flex-|baseline/)) return mn + "grid-column-align" + bc(r, o) + r;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return mn + tt(r, "template-", "") + r;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return s && s.some(function(f, c) {
        return o = c, Zo(f.props, /grid-\w+-end/);
      }) ? ~rh(r + (s = s[o].value), "span", 0) ? r : mn + tt(r, "-start", "") + r + mn + "grid-row-span:" + (~rh(s, "span", 0) ? Zo(s, /\d+/) : +Zo(s, /\d+/) - +Zo(r, /\d+/)) + ";" : mn + tt(r, "-start", "") + r;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return s && s.some(function(f) {
        return Zo(f.props, /grid-\w+-start/);
      }) ? r : mn + tt(tt(r, "-end", "-span"), "span ", "") + r;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return tt(r, /(.+)-inline(.+)/, xt + "$1$2") + r;
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
      if (yi(r) - 1 - o > 6)
        switch (ga(r, o + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (ga(r, o + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return tt(r, /(.+:)(.+)-([^]+)/, "$1" + xt + "$2-$3$1" + Um + (ga(r, o + 3) == 108 ? "$3" : "$2-$3")) + r;
          // (s)tretch
          case 115:
            return ~rh(r, "stretch", 0) ? P1(tt(r, "stretch", "fill-available"), o, s) + r : r;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return tt(r, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(f, c, p, y, T, S, x) {
        return mn + c + ":" + p + x + (y ? mn + c + "-span:" + (T ? S : +S - +p) + x : "") + r;
      });
    // position: sticky
    case 4949:
      if (ga(r, o + 6) === 121)
        return tt(r, ":", ":" + xt) + r;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (ga(r, ga(r, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return tt(r, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + xt + (ga(r, 14) === 45 ? "inline-" : "") + "box$3$1" + xt + "$2$3$1" + mn + "$2box$3") + r;
        // (inline-)?gri(d)
        case 100:
          return tt(r, ":", ":" + mn) + r;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return tt(r, "scroll-", "scroll-snap-") + r;
  }
  return r;
}
function bh(r, o) {
  for (var s = "", f = 0; f < r.length; f++)
    s += o(r[f], f, r, o) || "";
  return s;
}
function qT(r, o, s, f) {
  switch (r.type) {
    case ET:
      if (r.children.length) break;
    case xT:
    case AT:
    case hb:
      return r.return = r.return || r.value;
    case Y1:
      return "";
    case V1:
      return r.return = r.value + "{" + bh(r.children, f) + "}";
    case Eh:
      if (!yi(r.value = r.props.join(","))) return "";
  }
  return yi(s = bh(r.children, f)) ? r.return = r.value + "{" + s + "}" : "";
}
function BT(r) {
  var o = Q1(r);
  return function(s, f, c, p) {
    for (var y = "", T = 0; T < o; T++)
      y += r[T](s, f, c, p) || "";
    return y;
  };
}
function YT(r) {
  return function(o) {
    o.root || (o = o.return) && r(o);
  };
}
function VT(r, o, s, f) {
  if (r.length > -1 && !r.return)
    switch (r.type) {
      case hb:
        r.return = P1(r.value, r.length, s);
        return;
      case V1:
        return bh([ru(r, { value: tt(r.value, "@", "@" + xt) })], f);
      case Eh:
        if (r.length)
          return CT(s = r.props, function(c) {
            switch (Zo(c, f = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                Cc(ru(r, { props: [tt(c, /:(read-\w+)/, ":" + Um + "$1")] })), Cc(ru(r, { props: [c] })), Gv(r, { props: l0(s, f) });
                break;
              // :placeholder
              case "::placeholder":
                Cc(ru(r, { props: [tt(c, /:(plac\w+)/, ":" + xt + "input-$1")] })), Cc(ru(r, { props: [tt(c, /:(plac\w+)/, ":" + Um + "$1")] })), Cc(ru(r, { props: [tt(c, /:(plac\w+)/, mn + "input-$1")] })), Cc(ru(r, { props: [c] })), Gv(r, { props: l0(s, f) });
                break;
            }
            return "";
          });
    }
}
var jt = { env: { NODE_ENV: "production" } }, iv, ov;
const Sc = typeof jt < "u" && jt.env !== void 0 && (jt.env.REACT_APP_SC_ATTR || jt.env.SC_ATTR) || "data-styled", $1 = "active", I1 = "data-styled-version", Nh = "6.4.2", yb = `/*!sc*/
`, jm = typeof window < "u" && typeof document < "u";
function o0(r) {
  if (typeof jt < "u" && jt.env !== void 0) {
    const o = jt.env[r];
    if (o !== void 0 && o !== "") return o !== "false";
  }
}
const GT = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : (ov = (iv = o0("REACT_APP_SC_DISABLE_SPEEDY")) !== null && iv !== void 0 ? iv : o0("SC_DISABLE_SPEEDY")) !== null && ov !== void 0 ? ov : typeof jt < "u" && jt.env !== void 0 && jt.env.NODE_ENV !== "production"), FT = "sc-keyframes-", QT = jt.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function Fm(r, ...o) {
  return jt.env.NODE_ENV === "production" ? new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${r} for more information.${o.length > 0 ? ` Args: ${o.join(", ")}` : ""}`) : new Error((function(...s) {
    let f = s[0];
    const c = [];
    for (let p = 1, y = s.length; p < y; p += 1) c.push(s[p]);
    return c.forEach((p) => {
      f = f.replace(/%[a-z]/, p);
    }), f;
  })(QT[r], ...o).trim());
}
const XT = 1 << 30;
let uh = /* @__PURE__ */ new Map(), Sh = /* @__PURE__ */ new Map(), sh = 1;
const Im = (r) => {
  if (uh.has(r)) return uh.get(r);
  for (; Sh.has(sh); ) sh++;
  const o = sh++;
  if (jt.env.NODE_ENV !== "production" && ((0 | o) < 0 || o > XT)) throw Fm(16, `${o}`);
  return uh.set(r, o), Sh.set(o, r), o;
}, PT = (r) => Sh.get(r), $T = (r, o) => {
  sh = o + 1, uh.set(r, o), Sh.set(o, r);
}, u0 = /invalid hook call/i, Km = /* @__PURE__ */ new Set(), IT = (r, o) => {
  if (jt.env.NODE_ENV !== "production") {
    const s = `The component ${r}${o ? ` with the id of "${o}"` : ""} has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, f = console.error;
    try {
      let c = !0;
      console.error = (p, ...y) => {
        u0.test(p) ? (c = !1, Km.delete(s)) : f(p, ...y);
      }, typeof St.useState == "function" && St.useState(null), c && !Km.has(s) && (console.warn(s), Km.add(s));
    } catch (c) {
      u0.test(c.message) && Km.delete(s);
    } finally {
      console.error = f;
    }
  }
}, vb = Object.freeze([]), Uc = Object.freeze({});
function KT(r, o, s = Uc) {
  return r.theme !== s.theme && r.theme || o || s.theme;
}
const ZT = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, WT = /(^-|-$)/g;
function K1(r) {
  return r.replace(ZT, "-").replace(WT, "");
}
const JT = /(a)(d)/gi, s0 = (r) => String.fromCharCode(r + (r > 25 ? 39 : 97));
function Z1(r) {
  let o, s = "";
  for (o = Math.abs(r); o > 52; o = o / 52 | 0) s = s0(o % 52) + s;
  return (s0(o % 52) + s).replace(JT, "$1-$2");
}
const Qv = 5381, hc = (r, o) => {
  let s = o.length;
  for (; s; ) r = 33 * r ^ o.charCodeAt(--s);
  return r;
}, W1 = (r) => hc(Qv, r);
function ek(r) {
  return Z1(W1(r) >>> 0);
}
function bb(r) {
  return jt.env.NODE_ENV !== "production" && typeof r == "string" && r || r.displayName || r.name || "Component";
}
function ch(r) {
  return typeof r == "string" && (jt.env.NODE_ENV === "production" || r.charAt(0) === r.charAt(0).toLowerCase());
}
function tk(r) {
  return ch(r) ? `styled.${r}` : `Styled(${bb(r)})`;
}
const J1 = Symbol.for("react.memo"), nk = Symbol.for("react.forward_ref"), ak = { contextType: !0, defaultProps: !0, displayName: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, propTypes: !0, type: !0 }, lk = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, eS = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, rk = { [nk]: { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, [J1]: eS };
function c0(r) {
  return ("type" in (o = r) && o.type.$$typeof) === J1 ? eS : "$$typeof" in r ? rk[r.$$typeof] : ak;
  var o;
}
const ik = Object.defineProperty, ok = Object.getOwnPropertyNames, uk = Object.getOwnPropertySymbols, sk = Object.getOwnPropertyDescriptor, ck = Object.getPrototypeOf, fk = Object.prototype;
function tS(r, o, s) {
  if (typeof o != "string") {
    const f = ck(o);
    f && f !== fk && tS(r, f, s);
    const c = ok(o).concat(uk(o)), p = c0(r), y = c0(o);
    for (let T = 0; T < c.length; ++T) {
      const S = c[T];
      if (!(S in lk || s && s[S] || y && S in y || p && S in p)) {
        const x = sk(o, S);
        try {
          ik(r, S, x);
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
const dk = Symbol.for("react.forward_ref");
function nS(r) {
  return r != null && (typeof r == "object" || typeof r == "function") && r.$$typeof === dk && "styledComponentId" in r;
}
function Dm(r, o) {
  return r && o ? r + " " + o : r || o || "";
}
function f0(r, o) {
  return r.join("");
}
function wc(r) {
  return r !== null && typeof r == "object" && r.constructor.name === Object.name && !("props" in r && r.$$typeof);
}
function Xv(r, o, s = !1) {
  if (!s && !wc(r) && !Array.isArray(r)) return o;
  if (Array.isArray(o)) for (let f = 0; f < o.length; f++) r[f] = Xv(r[f], o[f]);
  else if (wc(o)) for (const f in o) r[f] = Xv(r[f], o[f]);
  return r;
}
function aS(r, o) {
  Object.defineProperty(r, "toString", { value: o });
}
const pk = class {
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
      let y = p;
      for (; r >= y; ) if (y <<= 1, y < 0) throw Fm(16, `${r}`);
      this.groupSizes = new Uint32Array(y), this.groupSizes.set(c), this.length = y;
      for (let T = p; T < y; T++) this.groupSizes[T] = 0;
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
    for (let p = f; p < c; p++) o += this.tag.getRule(p) + yb;
    return o;
  }
}, mk = `style[${Sc}][${I1}="${Nh}"]`, hk = new RegExp(`^${Sc}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`), d0 = (r) => typeof ShadowRoot < "u" && r instanceof ShadowRoot || "host" in r && r.nodeType === 11, Pv = (r) => {
  if (!r) return document;
  if (d0(r)) return r;
  if ("getRootNode" in r) {
    const o = r.getRootNode();
    if (d0(o)) return o;
  }
  return document;
}, gk = (r, o, s) => {
  const f = s.split(",");
  let c;
  for (let p = 0, y = f.length; p < y; p++) (c = f[p]) && r.registerName(o, c);
}, yk = (r, o) => {
  var s;
  const f = ((s = o.textContent) !== null && s !== void 0 ? s : "").split(yb), c = [];
  for (let p = 0, y = f.length; p < y; p++) {
    const T = f[p].trim();
    if (!T) continue;
    const S = T.match(hk);
    if (S) {
      const x = 0 | parseInt(S[1], 10), z = S[2];
      x !== 0 && ($T(z, x), gk(r, z, S[3]), r.getTag().insertRules(x, c)), c.length = 0;
    } else c.push(T);
  }
}, uv = (r) => {
  const o = Pv(r.options.target).querySelectorAll(mk);
  for (let s = 0, f = o.length; s < f; s++) {
    const c = o[s];
    c && c.getAttribute(Sc) !== $1 && (yk(r, c), c.parentNode && c.parentNode.removeChild(c));
  }
};
let xm = !1;
function vk() {
  if (xm !== !1) return xm;
  if (typeof document < "u") {
    const r = document.head.querySelector('meta[property="csp-nonce"]');
    if (r) return xm = r.nonce || r.getAttribute("content") || void 0;
    const o = document.head.querySelector('meta[name="sc-nonce"]');
    if (o) return xm = o.getAttribute("content") || void 0;
  }
  return xm = typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
}
const lS = (r, o) => {
  const s = document.head, f = r || s, c = document.createElement("style"), p = ((S) => {
    const x = Array.from(S.querySelectorAll(`style[${Sc}]`));
    return x[x.length - 1];
  })(f), y = p !== void 0 ? p.nextSibling : null;
  c.setAttribute(Sc, $1), c.setAttribute(I1, Nh);
  const T = o || vk();
  return T && c.setAttribute("nonce", T), f.insertBefore(c, y), c;
}, bk = class {
  constructor(r, o) {
    this.element = lS(r, o), this.element.appendChild(document.createTextNode("")), this.sheet = ((s) => {
      var f;
      if (s.sheet) return s.sheet;
      const c = (f = s.getRootNode().styleSheets) !== null && f !== void 0 ? f : document.styleSheets;
      for (let p = 0, y = c.length; p < y; p++) {
        const T = c[p];
        if (T.ownerNode === s) return T;
      }
      throw Fm(17);
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
}, Sk = class {
  constructor(r, o) {
    this.element = lS(r, o), this.nodes = this.element.childNodes, this.length = 0;
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
let p0 = jm;
const wk = { isServer: !jm, useCSSOMInjection: !GT };
class Rh {
  static registerId(o) {
    return Im(o);
  }
  constructor(o = Uc, s = {}, f) {
    this.options = Object.assign(Object.assign({}, wk), o), this.gs = s, this.keyframeIds = /* @__PURE__ */ new Set(), this.names = new Map(f), this.server = !!o.isServer, !this.server && jm && p0 && (p0 = !1, uv(this)), aS(this, () => ((c) => {
      const p = c.getTag(), { length: y } = p;
      let T = "";
      for (let S = 0; S < y; S++) {
        const x = PT(S);
        if (x === void 0) continue;
        const z = c.names.get(x);
        if (z === void 0 || !z.size) continue;
        const O = p.getGroup(S);
        if (O.length === 0) continue;
        const M = Sc + ".g" + S + '[id="' + x + '"]';
        let $ = "";
        for (const H of z) H.length > 0 && ($ += H + ",");
        T += O + M + '{content:"' + $ + '"}' + yb;
      }
      return T;
    })(this));
  }
  rehydrate() {
    !this.server && jm && uv(this);
  }
  reconstructWithOptions(o, s = !0) {
    const f = new Rh(Object.assign(Object.assign({}, this.options), o), this.gs, s && this.names || void 0);
    return f.keyframeIds = new Set(this.keyframeIds), !this.server && jm && o.target !== this.options.target && Pv(this.options.target) !== Pv(o.target) && uv(f), f;
  }
  allocateGSInstance(o) {
    return this.gs[o] = (this.gs[o] || 0) + 1;
  }
  getTag() {
    return this.tag || (this.tag = (o = (({ useCSSOMInjection: s, target: f, nonce: c }) => s ? new bk(f, c) : new Sk(f, c))(this.options), new pk(o)));
    var o;
  }
  hasNameForId(o, s) {
    var f, c;
    return (c = (f = this.names.get(o)) === null || f === void 0 ? void 0 : f.has(s)) !== null && c !== void 0 && c;
  }
  registerName(o, s) {
    Im(o), o.startsWith(FT) && this.keyframeIds.add(o);
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
const rS = /* @__PURE__ */ new WeakSet(), Tk = { animationIterationCount: 1, aspectRatio: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexShrink: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, scale: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 };
function kk(r, o) {
  return o == null || typeof o == "boolean" || o === "" ? "" : typeof o != "number" || o === 0 || r in Tk || r.startsWith("--") ? String(o).trim() : o + "px";
}
const pc = 47;
function m0(r) {
  if (r.charCodeAt(0) === 45 && r.charCodeAt(1) === 45) return r;
  let o = "";
  for (let s = 0; s < r.length; s++) {
    const f = r.charCodeAt(s);
    o += f >= 65 && f <= 90 ? "-" + String.fromCharCode(f + 32) : r[s];
  }
  return o.startsWith("ms-") ? "-" + o : o;
}
const xk = Symbol.for("sc-keyframes");
function $v(r) {
  return typeof r == "object" && r !== null && xk in r;
}
function iS(r) {
  return zh(r) && !(r.prototype && r.prototype.isReactComponent);
}
const oS = (r) => r == null || r === !1 || r === "", Ak = Symbol.for("react.client.reference");
function h0(r) {
  return r.$$typeof === Ak;
}
function g0(r) {
  const o = r.$$id, s = (o && o.includes("#") ? o.split("#").pop() : o) || r.name || "unknown";
  console.warn(`Interpolating a client component (${s}) as a selector is not supported in server components. The component selector pattern requires access to the component's internal class name, which is not available across the server/client boundary. Use a plain CSS class selector instead.`);
}
function uS(r, o) {
  for (const s in r) {
    const f = r[s];
    r.hasOwnProperty(s) && !oS(f) && (Array.isArray(f) && rS.has(f) || zh(f) ? o.push(m0(s) + ":", f, ";") : wc(f) ? (o.push(s + " {"), uS(f, o), o.push("}")) : o.push(m0(s) + ": " + kk(s, f) + ";"));
  }
}
function gc(r, o, s, f, c = []) {
  if (oS(r)) return c;
  const p = typeof r;
  if (p === "string") return c.push(r), c;
  if (p === "function") {
    if (h0(r)) return jt.env.NODE_ENV !== "production" && g0(r), c;
    if (iS(r) && o) {
      const y = r(o);
      return jt.env.NODE_ENV === "production" || typeof y != "object" || Array.isArray(y) || $v(y) || wc(y) || y === null || console.error(`${bb(r)} is not a styled component and cannot be referred to via component selector. See https://styled-components.com/docs/advanced#referring-to-other-components for more details.`), gc(y, o, s, f, c);
    }
    return c.push(r), c;
  }
  if (Array.isArray(r)) {
    for (let y = 0; y < r.length; y++) gc(r[y], o, s, f, c);
    return c;
  }
  return nS(r) ? (c.push(`.${r.styledComponentId}`), c) : $v(r) ? (s ? (r.inject(s, f), c.push(r.getName(f))) : c.push(r), c) : h0(r) ? (jt.env.NODE_ENV !== "production" && g0(r), c) : wc(r) ? r.toString !== Object.prototype.toString ? (c.push(r.toString()), c) : (uS(r, c), c) : (c.push(r.toString()), c);
}
const Ek = W1(Nh);
class _k {
  constructor(o, s, f) {
    this.rules = o, this.componentId = s, this.baseHash = hc(Ek, s), this.baseStyle = f, Rh.registerId(s);
  }
  generateAndInjectStyles(o, s, f) {
    let c = this.baseStyle ? this.baseStyle.generateAndInjectStyles(o, s, f) : "";
    {
      let p = "";
      for (let y = 0; y < this.rules.length; y++) {
        const T = this.rules[y];
        if (typeof T == "string") p += T;
        else if (T) if (iS(T)) {
          const S = T(o);
          typeof S == "string" ? p += S : S != null && S !== !1 && (jt.env.NODE_ENV === "production" || typeof S != "object" || Array.isArray(S) || $v(S) || wc(S) || console.error(`${bb(T)} is not a styled component and cannot be referred to via component selector. See https://styled-components.com/docs/advanced#referring-to-other-components for more details.`), p += f0(gc(S, o, s, f)));
        } else p += f0(gc(T, o, s, f));
      }
      if (p) {
        this.dynamicNameCache || (this.dynamicNameCache = /* @__PURE__ */ new Map());
        const y = f.hash ? f.hash + p : p;
        let T = this.dynamicNameCache.get(y);
        if (!T) {
          if (T = Z1(hc(hc(this.baseHash, f.hash), p) >>> 0), this.dynamicNameCache.size >= 200) {
            const S = this.dynamicNameCache.keys().next().value;
            S !== void 0 && this.dynamicNameCache.delete(S);
          }
          this.dynamicNameCache.set(y, T);
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
const Ck = /&/g;
function sS(r, o) {
  let s = 0;
  for (; --o >= 0 && r.charCodeAt(o) === 92; ) s++;
  return !(1 & ~s);
}
function sv(r) {
  const o = r.length;
  let s = "", f = 0, c = 0, p = 0, y = !1, T = !1;
  for (let S = 0; S < o; S++) {
    const x = r.charCodeAt(S);
    if (p !== 0 || y || x !== pc || r.charCodeAt(S + 1) !== 42) if (y) x === 42 && r.charCodeAt(S + 1) === pc && (y = !1, S++);
    else if (x !== 34 && x !== 39 || sS(r, S)) {
      if (p === 0) if (x === 123) c++;
      else if (x === 125) {
        if (c--, c < 0) {
          T = !0;
          let z = S + 1;
          for (; z < o; ) {
            const O = r.charCodeAt(z);
            if (O === 59 || O === 10) break;
            z++;
          }
          z < o && r.charCodeAt(z) === 59 && z++, c = 0, S = z - 1, f = z;
          continue;
        }
        c === 0 && (s += r.substring(f, S + 1), f = S + 1);
      } else x === 59 && c === 0 && (s += r.substring(f, S + 1), f = S + 1);
    } else p === 0 ? p = x : p === x && (p = 0);
    else y = !0, S++;
  }
  return T || c !== 0 || p !== 0 ? (f < o && c === 0 && p === 0 && (s += r.substring(f)), s) : r;
}
function cS(r, o) {
  const s = o + " ", f = "," + s;
  for (let c = 0; c < r.length; c++) {
    const p = r[c];
    if (p.type === "rule") {
      p.value = (s + p.value).replaceAll(",", f);
      const y = p.props, T = [];
      for (let S = 0; S < y.length; S++) T[S] = s + y[S];
      p.props = T;
    }
    Array.isArray(p.children) && p.type !== "@keyframes" && cS(p.children, o);
  }
  return r;
}
function Ok({ options: r = Uc, plugins: o = vb } = Uc) {
  let s, f, c;
  const p = (M, $, H) => H.startsWith(f) && H.endsWith(f) && H.replaceAll(f, "").length > 0 ? `.${s}` : M, y = o.slice();
  y.push((M) => {
    M.type === Eh && M.value.includes("&") && (c || (c = new RegExp(`\\${f}\\b`, "g")), M.props[0] = M.props[0].replace(Ck, f).replace(c, p));
  }), r.prefix && y.push(VT), y.push(qT);
  let T = [];
  const S = BT(y.concat(YT((M) => T.push(M)))), x = (M, $ = "", H = "", V = "&") => {
    s = V, f = $, c = void 0;
    const X = (function(q) {
      const fe = q.indexOf("//") !== -1, ae = q.indexOf("}") !== -1;
      if (!fe && !ae) return q;
      if (!fe) return sv(q);
      const le = q.length;
      let K = "", F = 0, J = 0, Ae = 0, Qe = 0, ve = 0, je = !1;
      for (; J < le; ) {
        const xe = q.charCodeAt(J);
        if (xe !== 34 && xe !== 39 || sS(q, J)) if (Ae === 0) if (xe === pc && J + 1 < le && q.charCodeAt(J + 1) === 42) {
          for (J += 2; J + 1 < le && (q.charCodeAt(J) !== 42 || q.charCodeAt(J + 1) !== pc); ) J++;
          J += 2;
        } else if (xe !== 40) if (xe !== 41) if (Qe > 0) J++;
        else if (xe === 42 && J + 1 < le && q.charCodeAt(J + 1) === pc) K += q.substring(F, J), J += 2, F = J, je = !0;
        else if (xe === pc && J + 1 < le && q.charCodeAt(J + 1) === pc) {
          for (K += q.substring(F, J); J < le && q.charCodeAt(J) !== 10; ) J++;
          F = J, je = !0;
        } else xe === 123 ? ve++ : xe === 125 && ve--, J++;
        else Qe > 0 && Qe--, J++;
        else Qe++, J++;
        else J++;
        else Ae === 0 ? Ae = xe : Ae === xe && (Ae = 0), J++;
      }
      return je ? (F < le && (K += q.substring(F)), ve === 0 ? K : sv(K)) : ve === 0 ? q : sv(q);
    })(M);
    let I = jT(H || $ ? H + " " + $ + " { " + X + " }" : X);
    return r.namespace && (I = cS(I, r.namespace)), T = [], bh(I, S), T;
  }, z = r;
  let O = Qv;
  for (let M = 0; M < o.length; M++) o[M].name || Fm(15), O = hc(O, o[M].name);
  return z != null && z.namespace && (O = hc(O, z.namespace)), z != null && z.prefix && (O = hc(O, "p")), x.hash = O !== Qv ? O.toString() : "", x;
}
const Nk = new Rh(), zk = Ok(), fS = St.createContext({ shouldForwardProp: void 0, styleSheet: Nk, stylis: zk, stylisPlugins: void 0 });
fS.Consumer;
function Rk() {
  return St.useContext(fS);
}
const dS = St.createContext(void 0);
dS.Consumer;
const y0 = Object.prototype.hasOwnProperty, cv = {};
function Dk(r, o) {
  const s = typeof r != "string" ? "sc" : K1(r);
  cv[s] = (cv[s] || 0) + 1;
  const f = s + "-" + ek(Nh + s + cv[s]);
  return o ? o + "-" + f : f;
}
let fv;
function Lk(r, o, s) {
  const f = nS(r), c = r, p = !ch(r), { attrs: y = vb, componentId: T = Dk(o.displayName, o.parentComponentId), displayName: S = tk(r) } = o, x = o.displayName && o.componentId ? K1(o.displayName) + "-" + o.componentId : o.componentId || T, z = f && c.attrs ? c.attrs.concat(y).filter(Boolean) : y;
  let { shouldForwardProp: O } = o;
  if (f && c.shouldForwardProp) {
    const V = c.shouldForwardProp;
    if (o.shouldForwardProp) {
      const X = o.shouldForwardProp;
      O = (I, q) => V(I, q) && X(I, q);
    } else O = V;
  }
  const M = new _k(s, x, f ? c.componentStyle : void 0);
  function $(V, X) {
    return (function(I, q, fe) {
      const { attrs: ae, componentStyle: le, defaultProps: K, foldedComponentIds: F, styledComponentId: J, target: Ae } = I, Qe = St.useContext(dS), ve = Rk(), je = I.shouldForwardProp || ve.shouldForwardProp;
      jt.env.NODE_ENV !== "production" && St.useDebugValue && St.useDebugValue(J);
      const xe = KT(q, Qe, K) || Uc;
      let yt, Fe;
      {
        const ue = St.useRef(null), ie = ue.current;
        if (ie !== null && ie[1] === xe && ie[2] === ve.styleSheet && ie[3] === ve.stylis && ie[7] === le && (function(Ye, Se, se) {
          const Z = Ye, be = Se;
          let ce = 0;
          for (const lt in be) if (y0.call(be, lt) && (ce++, Z[lt] !== be[lt])) return !1;
          return ce === se;
        })(ie[0], q, ie[4])) yt = ie[5], Fe = ie[6];
        else {
          yt = (function(Se, se, Z) {
            const be = Object.assign(Object.assign({}, se), { className: void 0, theme: Z }), ce = Se.length > 1;
            for (let lt = 0; lt < Se.length; lt++) {
              const Nn = Se[lt], kn = zh(Nn) ? Nn(ce ? Object.assign({}, be) : be) : Nn;
              for (const st in kn) st === "className" ? be.className = Dm(be.className, kn[st]) : st === "style" ? be.style = Object.assign(Object.assign({}, be.style), kn[st]) : st in se && se[st] === void 0 || (be[st] = kn[st]);
            }
            return "className" in se && typeof se.className == "string" && (be.className = Dm(be.className, se.className)), be;
          })(ae, q, xe), Fe = (function(Se, se, Z, be) {
            const ce = Se.generateAndInjectStyles(se, Z, be);
            return jt.env.NODE_ENV !== "production" && St.useDebugValue && St.useDebugValue(ce), ce;
          })(le, yt, ve.styleSheet, ve.stylis);
          let Ye = 0;
          for (const Se in q) y0.call(q, Se) && Ye++;
          ue.current = [q, xe, ve.styleSheet, ve.stylis, Ye, yt, Fe, le];
        }
      }
      jt.env.NODE_ENV !== "production" && I.warnTooManyClasses && I.warnTooManyClasses(Fe);
      const B = yt.as || Ae, U = (function(ue, ie, Ye, Se) {
        const se = {};
        for (const Z in ue) ue[Z] === void 0 || Z[0] === "$" || Z === "as" || Z === "theme" && ue.theme === Ye || (Z === "forwardedAs" ? se.as = ue.forwardedAs : Se && !Se(Z, ie) || (se[Z] = ue[Z], Se || jt.env.NODE_ENV !== "development" || kT(Z) || (fv || (fv = /* @__PURE__ */ new Set())).has(Z) || !ch(ie) || ie.includes("-") || (fv.add(Z), console.warn(`styled-components: it looks like an unknown prop "${Z}" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via \`<StyleSheetManager shouldForwardProp={...}>\` (connect an API like \`@emotion/is-prop-valid\`) or consider using transient props (\`$\` prefix for automatic filtering.)`))));
        return se;
      })(yt, B, xe, je);
      let G = Dm(F, J);
      return Fe && (G += " " + Fe), yt.className && (G += " " + yt.className), U[ch(B) && B.includes("-") ? "class" : "className"] = G, fe && (U.ref = fe), z1(B, U);
    })(H, V, X);
  }
  $.displayName = S;
  let H = St.forwardRef($);
  return H.attrs = z, H.componentStyle = M, H.displayName = S, H.shouldForwardProp = O, H.foldedComponentIds = f ? Dm(c.foldedComponentIds, c.styledComponentId) : "", H.styledComponentId = x, H.target = f ? c.target : r, Object.defineProperty(H, "defaultProps", { get() {
    return this._foldedDefaultProps;
  }, set(V) {
    this._foldedDefaultProps = f ? (function(X, ...I) {
      for (const q of I) Xv(X, q, !0);
      return X;
    })({}, c.defaultProps, V) : V;
  } }), jt.env.NODE_ENV !== "production" && (IT(S, x), H.warnTooManyClasses = /* @__PURE__ */ ((V, X) => {
    let I = {}, q = !1;
    return (fe) => {
      !q && (I[fe] = !0, Object.keys(I).length >= 200) && (console.warn(`Over 200 classes were generated for component ${V}${X ? ` with the id of "${X}"` : ""}.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), q = !0, I = {});
    };
  })(S, x)), aS(H, () => `.${H.styledComponentId}`), p && tS(H, r, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), H;
}
var Mk = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "blockquote", "body", "button", "br", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "menu", "meter", "nav", "object", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "slot", "small", "span", "strong", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "switch", "symbol", "text", "textPath", "tspan", "use"]);
function v0(r, o) {
  const s = [r[0]];
  for (let f = 0, c = o.length; f < c; f += 1) s.push(o[f], r[f + 1]);
  return s;
}
const b0 = (r) => (rS.add(r), r);
function Uk(r, ...o) {
  if (zh(r) || wc(r)) return b0(gc(v0(vb, [r, ...o])));
  const s = r;
  return o.length === 0 && s.length === 1 && typeof s[0] == "string" ? gc(s) : b0(gc(v0(s, o)));
}
function Iv(r, o, s = Uc) {
  if (!o) throw Fm(1, o);
  const f = (c, ...p) => r(o, s, Uk(c, ...p));
  return f.attrs = (c) => Iv(r, o, Object.assign(Object.assign({}, s), { attrs: Array.prototype.concat(s.attrs, c).filter(Boolean) })), f.withConfig = (c) => Iv(r, o, Object.assign(Object.assign({}, s), c)), f;
}
const pS = (r) => Iv(Lk, r), xi = pS;
Mk.forEach((r) => {
  xi[r] = pS(r);
});
jt.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://styled-components.com/docs/basics#react-native`);
const Zm = `__sc-${Sc}__`;
jt.env.NODE_ENV !== "production" && jt.env.NODE_ENV !== "test" && typeof window < "u" && (window[Zm] || (window[Zm] = 0), window[Zm] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://styled-components.com/docs/faqs#why-am-i-getting-a-warning-about-several-instances-of-module-on-the-page for more info.`), window[Zm] += 1);
xi.div`
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
v.arrayOf(
  v.shape({
    text: v.string.isRequired,
    targetIdName: v.string.isRequired,
    icon: v.arrayOf(v.string)
  })
).isRequired, v.string.isRequired, v.bool;
var dv = { exports: {} }, pv = { exports: {} }, mv, S0;
function jk() {
  if (S0) return mv;
  S0 = 1;
  var r = 1e3, o = r * 60, s = o * 60, f = s * 24, c = f * 365.25;
  mv = function(x, z) {
    z = z || {};
    var O = typeof x;
    if (O === "string" && x.length > 0)
      return p(x);
    if (O === "number" && isNaN(x) === !1)
      return z.long ? T(x) : y(x);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(x)
    );
  };
  function p(x) {
    if (x = String(x), !(x.length > 100)) {
      var z = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
        x
      );
      if (z) {
        var O = parseFloat(z[1]), M = (z[2] || "ms").toLowerCase();
        switch (M) {
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
  function y(x) {
    return x >= f ? Math.round(x / f) + "d" : x >= s ? Math.round(x / s) + "h" : x >= o ? Math.round(x / o) + "m" : x >= r ? Math.round(x / r) + "s" : x + "ms";
  }
  function T(x) {
    return S(x, f, "day") || S(x, s, "hour") || S(x, o, "minute") || S(x, r, "second") || x + " ms";
  }
  function S(x, z, O) {
    if (!(x < z))
      return x < z * 1.5 ? Math.floor(x / z) + " " + O : Math.ceil(x / z) + " " + O + "s";
  }
  return mv;
}
var w0;
function Hk() {
  return w0 || (w0 = 1, (function(r, o) {
    o = r.exports = c.debug = c.default = c, o.coerce = S, o.disable = y, o.enable = p, o.enabled = T, o.humanize = jk(), o.names = [], o.skips = [], o.formatters = {};
    var s;
    function f(x) {
      var z = 0, O;
      for (O in x)
        z = (z << 5) - z + x.charCodeAt(O), z |= 0;
      return o.colors[Math.abs(z) % o.colors.length];
    }
    function c(x) {
      function z() {
        if (z.enabled) {
          var O = z, M = +/* @__PURE__ */ new Date(), $ = M - (s || M);
          O.diff = $, O.prev = s, O.curr = M, s = M;
          for (var H = new Array(arguments.length), V = 0; V < H.length; V++)
            H[V] = arguments[V];
          H[0] = o.coerce(H[0]), typeof H[0] != "string" && H.unshift("%O");
          var X = 0;
          H[0] = H[0].replace(/%([a-zA-Z%])/g, function(q, fe) {
            if (q === "%%") return q;
            X++;
            var ae = o.formatters[fe];
            if (typeof ae == "function") {
              var le = H[X];
              q = ae.call(O, le), H.splice(X, 1), X--;
            }
            return q;
          }), o.formatArgs.call(O, H);
          var I = z.log || o.log || console.log.bind(console);
          I.apply(O, H);
        }
      }
      return z.namespace = x, z.enabled = o.enabled(x), z.useColors = o.useColors(), z.color = f(x), typeof o.init == "function" && o.init(z), z;
    }
    function p(x) {
      o.save(x), o.names = [], o.skips = [];
      for (var z = (typeof x == "string" ? x : "").split(/[\s,]+/), O = z.length, M = 0; M < O; M++)
        z[M] && (x = z[M].replace(/\*/g, ".*?"), x[0] === "-" ? o.skips.push(new RegExp("^" + x.substr(1) + "$")) : o.names.push(new RegExp("^" + x + "$")));
    }
    function y() {
      o.enable("");
    }
    function T(x) {
      var z, O;
      for (z = 0, O = o.skips.length; z < O; z++)
        if (o.skips[z].test(x))
          return !1;
      for (z = 0, O = o.names.length; z < O; z++)
        if (o.names[z].test(x))
          return !0;
      return !1;
    }
    function S(x) {
      return x instanceof Error ? x.stack || x.message : x;
    }
  })(pv, pv.exports)), pv.exports;
}
var T0;
function qk() {
  return T0 || (T0 = 1, (function(r, o) {
    var s = { env: { NODE_ENV: "production" } };
    o = r.exports = Hk(), o.log = p, o.formatArgs = c, o.save = y, o.load = T, o.useColors = f, o.storage = typeof chrome < "u" && typeof chrome.storage < "u" ? chrome.storage.local : S(), o.colors = [
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
      } catch (z) {
        return "[UnexpectedJSONParseError]: " + z.message;
      }
    };
    function c(x) {
      var z = this.useColors;
      if (x[0] = (z ? "%c" : "") + this.namespace + (z ? " %c" : " ") + x[0] + (z ? "%c " : " ") + "+" + o.humanize(this.diff), !!z) {
        var O = "color: " + this.color;
        x.splice(1, 0, O, "color: inherit");
        var M = 0, $ = 0;
        x[0].replace(/%[a-zA-Z%]/g, function(H) {
          H !== "%%" && (M++, H === "%c" && ($ = M));
        }), x.splice($, 0, O);
      }
    }
    function p() {
      return typeof console == "object" && console.log && Function.prototype.apply.call(console.log, console, arguments);
    }
    function y(x) {
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
  })(dv, dv.exports)), dv.exports;
}
var hv, k0;
function Bk() {
  if (k0) return hv;
  k0 = 1;
  var r = qk()("jsonp");
  hv = f;
  var o = 0;
  function s() {
  }
  function f(c, p, y) {
    typeof p == "function" && (y = p, p = {}), p || (p = {});
    var T = p.prefix || "__jp", S = p.name || T + o++, x = p.param || "callback", z = p.timeout != null ? p.timeout : 6e4, O = encodeURIComponent, M = document.getElementsByTagName("script")[0] || document.head, $, H;
    z && (H = setTimeout(function() {
      V(), y && y(new Error("Timeout"));
    }, z));
    function V() {
      $.parentNode && $.parentNode.removeChild($), window[S] = s, H && clearTimeout(H);
    }
    function X() {
      window[S] && V();
    }
    return window[S] = function(I) {
      r("jsonp got", I), V(), y && y(null, I);
    }, c += (~c.indexOf("?") ? "&" : "?") + x + "=" + O(S), c = c.replace("?&", "?"), r('jsonp req "%s"', c), $ = document.createElement("script"), $.src = c, M.parentNode.insertBefore($, M), X;
  }
  return hv;
}
var Yk = Bk();
const Ac = /* @__PURE__ */ db(Yk);
var Vk = Object.defineProperty, Gk = Object.defineProperties, Fk = Object.getOwnPropertyDescriptors, wh = Object.getOwnPropertySymbols, mS = Object.prototype.hasOwnProperty, hS = Object.prototype.propertyIsEnumerable, x0 = (r, o, s) => o in r ? Vk(r, o, { enumerable: !0, configurable: !0, writable: !0, value: s }) : r[o] = s, wt = (r, o) => {
  for (var s in o || (o = {}))
    mS.call(o, s) && x0(r, s, o[s]);
  if (wh)
    for (var s of wh(o))
      hS.call(o, s) && x0(r, s, o[s]);
  return r;
}, Wt = (r, o) => Gk(r, Fk(o)), Jt = (r, o) => {
  var s = {};
  for (var f in r)
    mS.call(r, f) && o.indexOf(f) < 0 && (s[f] = r[f]);
  if (r != null && wh)
    for (var f of wh(r))
      o.indexOf(f) < 0 && hS.call(r, f) && (s[f] = r[f]);
  return s;
};
class Qk extends Error {
  constructor(o) {
    super(o), this.name = "AssertionError";
  }
}
function gn(r, o) {
  if (!r)
    throw new Qk(o);
}
function qt(r) {
  const o = Object.entries(r).filter(([, s]) => s != null).map(([s, f]) => `${encodeURIComponent(s)}=${encodeURIComponent(String(f))}`);
  return o.length > 0 ? `?${o.join("&")}` : "";
}
const Xk = {
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
}, Pk = (r) => !!r && (typeof r == "object" || typeof r == "function") && "then" in r && typeof r.then == "function", $k = (r, o) => ({
  left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - r / 2,
  top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - o / 2
}), Ik = (r, o) => ({
  top: (window.screen.height - o) / 2,
  left: (window.screen.width - r) / 2
});
function Kk(r) {
  var o;
  const s = O1.toArray(r);
  if (s.length !== 1)
    return;
  const [f] = s;
  if (N1(f))
    return f.props.round ? "50%" : (o = f.props.borderRadius) != null ? o : 0;
}
function gS(r) {
  return O1.toArray(r).some((o) => typeof o == "string" ? o.trim().length > 0 : typeof o == "number" ? !0 : N1(o) ? gS(o.props.children) : !1);
}
function Zk(r, o, s) {
  var f = o, { height: c, width: p } = f, y = Jt(f, ["height", "width"]);
  const T = wt({
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
  }, y), S = window.open(
    r,
    "",
    Object.keys(T).map((x) => `${x}=${T[x]}`).join(", ")
  );
  if (s) {
    const x = window.setInterval(() => {
      try {
        (S === null || S.closed) && (window.clearInterval(x), s(S));
      } catch (z) {
        console.error(z);
      }
    }, 1e3);
  }
  return S;
}
function Tn(r) {
  var o = r, {
    "aria-label": s,
    "aria-labelledby": f,
    beforeOnClick: c,
    children: p,
    className: y,
    disabled: T,
    disabledStyle: S = { opacity: 0.6 },
    forwardedRef: x,
    htmlTitle: z,
    networkLink: O,
    networkName: M,
    onClick: $,
    onShareWindowClose: H,
    openShareDialogOnClick: V = !0,
    opts: X,
    resetButtonStyle: I = !0,
    style: q,
    title: fe,
    type: ae = "button",
    url: le,
    windowHeight: K = 400,
    windowPosition: F = "windowCenter",
    windowWidth: J = 550
  } = o, Ae = Jt(o, [
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
  const Qe = Kk(p), ve = !s && !f && !gS(p) ? Xk[M] : void 0, je = async (Fe) => {
    if (T)
      return;
    const B = O(le, X);
    if (Fe.preventDefault(), c) {
      const U = c();
      Pk(U) && await U;
    }
    if (V) {
      const U = wt({
        height: K,
        width: J
      }, F === "windowCenter" ? $k(J, K) : Ik(J, K));
      Zk(B, U, H);
    }
    $ && $(Fe, B);
  }, xe = tu(
    "react-share__ShareButton",
    {
      "react-share__ShareButton--disabled": !!T,
      disabled: !!T
    },
    y
  ), yt = wt(wt(I ? {
    backgroundColor: "transparent",
    border: "none",
    padding: 0,
    display: "inline-flex",
    borderRadius: Qe,
    outlineOffset: 2,
    font: "inherit",
    color: "inherit",
    cursor: "pointer"
  } : {}, q), T && S);
  return /* @__PURE__ */ Y.jsx(
    "button",
    Wt(wt({}, Ae), {
      "aria-label": s || ve,
      "aria-labelledby": f,
      className: xe,
      disabled: T,
      onClick: je,
      ref: x,
      style: yt,
      title: z,
      type: ae,
      children: p
    })
  );
}
function Wk(r, { title: o, separator: s }) {
  return gn(r, "bluesky.url"), "https://bsky.app/intent/compose" + qt({
    text: o ? o + s + r : r
  });
}
const Jk = yn(
  (r, o) => {
    var s = r, { separator: f, title: c } = s, p = Jt(s, ["separator", "title"]);
    return /* @__PURE__ */ Y.jsx(
      Tn,
      Wt(wt({}, p), {
        forwardedRef: o,
        networkName: "bluesky",
        networkLink: Wk,
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
Jk.displayName = "BlueskyShareButton";
function ex(r, { subject: o, body: s, separator: f }) {
  return "mailto:" + qt({ subject: o, body: s ? s + f + r : r });
}
const tx = yn(
  (r, o) => {
    var s = r, { body: f, separator: c, subject: p } = s, y = Jt(s, ["body", "separator", "subject"]);
    return /* @__PURE__ */ Y.jsx(
      Tn,
      Wt(wt({}, y), {
        forwardedRef: o,
        networkName: "email",
        networkLink: ex,
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
tx.displayName = "EmailShareButton";
function nx(r, { appId: o, redirectUri: s, to: f }) {
  return "https://www.facebook.com/dialog/send" + qt({
    link: r,
    redirect_uri: s || r,
    app_id: o,
    to: f
  });
}
const ax = yn((r, o) => {
  var s = r, { appId: f, redirectUri: c, to: p } = s, y = Jt(s, ["appId", "redirectUri", "to"]);
  return /* @__PURE__ */ Y.jsx(
    Tn,
    Wt(wt({}, y), {
      forwardedRef: o,
      networkName: "facebookmessenger",
      networkLink: nx,
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
ax.displayName = "FacebookMessengerShareButton";
function lx(r, { hashtag: o }) {
  return gn(r, "facebook.url"), "https://www.facebook.com/sharer/sharer.php" + qt({ u: r, hashtag: o });
}
const rx = yn(
  (r, o) => {
    var s = r, { hashtag: f } = s, c = Jt(s, ["hashtag"]);
    return /* @__PURE__ */ Y.jsx(
      Tn,
      Wt(wt({}, c), {
        forwardedRef: o,
        networkName: "facebook",
        networkLink: lx,
        opts: { hashtag: f },
        windowHeight: 400,
        windowWidth: 550
      })
    );
  }
);
rx.displayName = "FacebookShareButton";
function ix() {
  const r = lh(!1);
  return wi(() => (r.current = !0, () => {
    r.current = !1;
  }), []), Bv(() => r.current, []);
}
function ox(r) {
  var o = r, {
    children: s = (M) => M,
    className: f,
    getCount: c,
    url: p
  } = o, y = Jt(o, [
    "children",
    "className",
    "getCount",
    "url"
  ]);
  const T = ix(), [S, x] = eu(void 0), [z, O] = eu(!1);
  return wi(() => {
    O(!0), c(p, (M) => {
      T() && (x(M), O(!1));
    });
  }, [p]), /* @__PURE__ */ Y.jsx("span", Wt(wt({ className: tu("react-share__ShareCount", f) }, y), { children: !z && S !== void 0 && s(S) }));
}
function Ec(r) {
  const o = (s) => /* @__PURE__ */ Y.jsx(ox, wt({ getCount: r }, s));
  return o.displayName = `ShareCount(${r.name})`, o;
}
function ux(r, o) {
  const s = `https://graph.facebook.com/?id=${r}&fields=og_object{engagement}`;
  Ac(s, (f, c) => {
    o(
      !f && c && c.og_object && c.og_object.engagement ? c.og_object.engagement.count : void 0
    );
  });
}
Ec(ux);
function sx(r, { title: o }) {
  return gn(r, "hatena.url"), `http://b.hatena.ne.jp/add?mode=confirm&url=${r}&title=${o}`;
}
const cx = yn(
  (r, o) => {
    var s = r, { title: f } = s, c = Jt(s, ["title"]);
    return /* @__PURE__ */ Y.jsx(
      Tn,
      Wt(wt({}, c), {
        forwardedRef: o,
        networkName: "hatena",
        networkLink: sx,
        opts: { title: f },
        windowHeight: 460,
        windowPosition: "windowCenter",
        windowWidth: 660
      })
    );
  }
);
cx.displayName = "HatenaShareButton";
function fx(r, o) {
  Ac(
    "https://bookmark.hatenaapis.com/count/entry" + qt({
      url: r
    }),
    (s, f) => {
      o(f ?? void 0);
    }
  );
}
Ec(fx);
function dx(r, { title: o, description: s }) {
  return gn(r, "instapaper.url"), "http://www.instapaper.com/hello2" + qt({
    url: r,
    title: o,
    description: s
  });
}
const px = yn(
  (r, o) => {
    var s = r, { description: f, title: c } = s, p = Jt(s, ["description", "title"]);
    return /* @__PURE__ */ Y.jsx(
      Tn,
      Wt(wt({}, p), {
        forwardedRef: o,
        networkName: "instapaper",
        networkLink: dx,
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
px.displayName = "InstapaperShareButton";
function mx(r, { title: o }) {
  return gn(r, "line.url"), "https://social-plugins.line.me/lineit/share" + qt({
    url: r,
    text: o
  });
}
const hx = yn(
  (r, o) => {
    var s = r, { title: f } = s, c = Jt(s, ["title"]);
    return /* @__PURE__ */ Y.jsx(
      Tn,
      Wt(wt({}, c), {
        forwardedRef: o,
        networkName: "line",
        networkLink: mx,
        opts: { title: f },
        windowHeight: 500,
        windowWidth: 500
      })
    );
  }
);
hx.displayName = "LineShareButton";
function gx(r, { title: o, summary: s, source: f }) {
  return gn(r, "linkedin.url"), "https://linkedin.com/shareArticle" + qt({ url: r, mini: "true", title: o, summary: s, source: f });
}
const yx = yn(
  (r, o) => {
    var s = r, { source: f, summary: c, title: p } = s, y = Jt(s, ["source", "summary", "title"]);
    return /* @__PURE__ */ Y.jsx(
      Tn,
      Wt(wt({}, y), {
        forwardedRef: o,
        networkName: "linkedin",
        networkLink: gx,
        opts: { title: p, summary: c, source: f },
        windowHeight: 600,
        windowWidth: 750
      })
    );
  }
);
yx.displayName = "LinkedinShareButton";
function vx(r, { title: o, description: s }) {
  return gn(r, "livejournal.url"), "https://www.livejournal.com/update.bml" + qt({
    subject: o,
    event: s
  });
}
const bx = yn(
  (r, o) => {
    var s = r, { description: f, title: c } = s, p = Jt(s, ["description", "title"]);
    return /* @__PURE__ */ Y.jsx(
      Tn,
      Wt(wt({}, p), {
        forwardedRef: o,
        networkName: "livejournal",
        networkLink: vx,
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
bx.displayName = "LivejournalShareButton";
function Sx(r, { title: o, description: s, imageUrl: f }) {
  return gn(r, "mailru.url"), "https://connect.mail.ru/share" + qt({
    url: r,
    title: o,
    description: s,
    image_url: f
  });
}
const wx = yn(
  (r, o) => {
    var s = r, { description: f, imageUrl: c, title: p } = s, y = Jt(s, ["description", "imageUrl", "title"]);
    return /* @__PURE__ */ Y.jsx(
      Tn,
      Wt(wt({}, y), {
        forwardedRef: o,
        networkName: "mailru",
        networkLink: Sx,
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
wx.displayName = "MailruShareButton";
function Tx(r, { title: o, description: s, image: f }) {
  return gn(r, "ok.url"), "https://connect.ok.ru/offer" + qt({
    url: r,
    title: o,
    description: s,
    imageUrl: f
  });
}
const kx = yn(
  (r, o) => {
    var s = r, { description: f, image: c, title: p } = s, y = Jt(s, ["description", "image", "title"]);
    return /* @__PURE__ */ Y.jsx(
      Tn,
      Wt(wt({}, y), {
        forwardedRef: o,
        networkName: "ok",
        networkLink: Tx,
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
kx.displayName = "OKShareButton";
function xx(r, o) {
  window.OK || (window.OK = {
    Share: {
      count: function(c, p) {
        var y, T;
        (T = (y = window.OK.callbacks)[c]) == null || T.call(y, p);
      }
    },
    callbacks: []
  });
  const s = "https://connect.ok.ru/dk", f = window.OK.callbacks.length;
  return window.ODKL = {
    updateCount(c, p) {
      var y, T;
      const S = c === "" ? 0 : parseInt(c.replace("react-share-", ""), 10);
      (T = (y = window.OK.callbacks)[S]) == null || T.call(y, p === "" ? void 0 : parseInt(p, 10));
    }
  }, window.OK.callbacks.push(o), Ac(
    s + qt({
      "st.cmd": "extLike",
      uid: `react-share-${f}`,
      ref: r
    })
  );
}
Ec(xx);
function Ax(r, { media: o, description: s, pinId: f }) {
  return f ? `https://pinterest.com/pin/${f}/repin/x/` : (gn(r, "pinterest.url"), gn(o, "pinterest.media"), "https://pinterest.com/pin/create/button/" + qt({
    url: r,
    media: o,
    description: s
  }));
}
const Ex = yn(
  (r, o) => {
    var s = r, { description: f, media: c, pinId: p } = s, y = Jt(s, ["description", "media", "pinId"]);
    return /* @__PURE__ */ Y.jsx(
      Tn,
      Wt(wt({}, y), {
        forwardedRef: o,
        networkName: "pinterest",
        networkLink: Ax,
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
Ex.displayName = "PinterestShareButton";
function _x(r, o) {
  Ac(
    "https://api.pinterest.com/v1/urls/count.json" + qt({
      url: r
    }),
    (s, f) => {
      o(f ? f.count : void 0);
    }
  );
}
Ec(_x);
function Cx(r, { title: o }) {
  return gn(r, "pocket.url"), "https://getpocket.com/save" + qt({
    url: r,
    title: o
  });
}
const Ox = yn(
  (r, o) => {
    var s = r, { title: f } = s, c = Jt(s, ["title"]);
    return /* @__PURE__ */ Y.jsx(
      Tn,
      Wt(wt({}, c), {
        forwardedRef: o,
        networkName: "pocket",
        networkLink: Cx,
        opts: { title: f },
        windowHeight: 500,
        windowWidth: 500
      })
    );
  }
);
Ox.displayName = "PocketShareButton";
function Nx(r, { title: o }) {
  return gn(r, "reddit.url"), "https://www.reddit.com/submit" + qt({
    url: r,
    title: o
  });
}
const zx = yn(
  (r, o) => {
    var s = r, { title: f } = s, c = Jt(s, ["title"]);
    return /* @__PURE__ */ Y.jsx(
      Tn,
      Wt(wt({}, c), {
        forwardedRef: o,
        networkName: "reddit",
        networkLink: Nx,
        opts: { title: f },
        windowHeight: 460,
        windowPosition: "windowCenter",
        windowWidth: 660
      })
    );
  }
);
zx.displayName = "RedditShareButton";
function Rx(r, { title: o }) {
  return gn(r, "gab.url"), "https://gab.com/compose" + qt({
    url: r,
    text: o
  });
}
const Dx = yn(
  (r, o) => {
    var s = r, { title: f } = s, c = Jt(s, ["title"]);
    return /* @__PURE__ */ Y.jsx(
      Tn,
      Wt(wt({}, c), {
        forwardedRef: o,
        networkName: "gab",
        networkLink: Rx,
        opts: { title: f },
        windowHeight: 640,
        windowPosition: "windowCenter",
        windowWidth: 660
      })
    );
  }
);
Dx.displayName = "GabShareButton";
function Lx(r, o) {
  const s = `https://www.reddit.com/api/info.json?limit=1&url=${r}`;
  Ac(s, { param: "jsonp" }, (f, c) => {
    o(
      !f && c && c.data && c.data.children.length > 0 && c.data.children[0].data.score ? c.data.children[0].data.score : void 0
    );
  });
}
Ec(Lx);
function Mx(r, { title: o }) {
  return gn(r, "telegram.url"), "https://telegram.me/share/url" + qt({
    url: r,
    text: o
  });
}
const Ux = yn(
  (r, o) => {
    var s = r, { title: f } = s, c = Jt(s, ["title"]);
    return /* @__PURE__ */ Y.jsx(
      Tn,
      Wt(wt({}, c), {
        forwardedRef: o,
        networkName: "telegram",
        networkLink: Mx,
        opts: { title: f },
        windowHeight: 400,
        windowWidth: 550
      })
    );
  }
);
Ux.displayName = "TelegramShareButton";
function jx(r, { title: o }) {
  return gn(r, "threads.url"), "https://threads.net/intent/post" + qt({
    url: r,
    text: o
  });
}
const Hx = yn(
  (r, o) => {
    var s = r, { hashtags: f, related: c, title: p, via: y } = s, T = Jt(s, ["hashtags", "related", "title", "via"]);
    return /* @__PURE__ */ Y.jsx(
      Tn,
      Wt(wt({}, T), {
        forwardedRef: o,
        networkName: "threads",
        networkLink: jx,
        opts: { title: p },
        windowHeight: 600,
        windowWidth: 550
      })
    );
  }
);
Hx.displayName = "ThreadsShareButton";
function qx(r, {
  title: o,
  caption: s,
  tags: f,
  posttype: c
}) {
  return gn(r, "tumblr.url"), "https://www.tumblr.com/widgets/share/tool" + qt({
    canonicalUrl: r,
    title: o,
    caption: s,
    tags: f,
    posttype: c
  });
}
const Bx = yn(
  (r, o) => {
    var s = r, { caption: f, posttype: c, tags: p, title: y } = s, T = Jt(s, ["caption", "posttype", "tags", "title"]);
    return /* @__PURE__ */ Y.jsx(
      Tn,
      Wt(wt({}, T), {
        forwardedRef: o,
        networkName: "tumblr",
        networkLink: qx,
        opts: {
          title: y,
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
Bx.displayName = "TumblrShareButton";
function Yx(r, o) {
  return Ac(
    "https://api.tumblr.com/v2/share/stats" + qt({
      url: r
    }),
    (s, f) => {
      o(!s && f && f.response ? f.response.note_count : void 0);
    }
  );
}
Ec(Yx);
function Vx(r, {
  title: o,
  via: s,
  hashtags: f = [],
  related: c = []
}) {
  return gn(r, "x.url"), gn(Array.isArray(f), "x.hashtags is not an array"), gn(Array.isArray(c), "x.related is not an array"), "https://twitter.com/intent/tweet" + qt({
    url: r,
    text: o,
    via: s,
    hashtags: f.length > 0 ? f.join(",") : void 0,
    related: c.length > 0 ? c.join(",") : void 0
  });
}
const yS = yn(
  (r, o) => {
    var s = r, { hashtags: f, related: c, title: p, via: y } = s, T = Jt(s, ["hashtags", "related", "title", "via"]);
    return /* @__PURE__ */ Y.jsx(
      Tn,
      Wt(wt({}, T), {
        forwardedRef: o,
        networkName: "twitter",
        networkLink: Vx,
        opts: {
          hashtags: f,
          title: p,
          via: y,
          related: c
        },
        windowHeight: 400,
        windowWidth: 550
      })
    );
  }
);
yS.displayName = "XShareButton";
const Gx = yn((r, o) => /* @__PURE__ */ Y.jsx(yS, Wt(wt({}, r), { ref: o })));
Gx.displayName = "TwitterShareButton";
function Fx(r, { title: o, separator: s }) {
  return gn(r, "viber.url"), "viber://forward" + qt({
    text: o ? o + s + r : r
  });
}
const Qx = yn(
  (r, o) => {
    var s = r, { separator: f, title: c } = s, p = Jt(s, ["separator", "title"]);
    return /* @__PURE__ */ Y.jsx(
      Tn,
      Wt(wt({}, p), {
        forwardedRef: o,
        networkName: "viber",
        networkLink: Fx,
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
Qx.displayName = "ViberShareButton";
function Xx(r, { title: o, image: s, noParse: f, noVkLinks: c }) {
  return gn(r, "vk.url"), "https://vk.com/share.php" + qt({
    url: r,
    title: o,
    image: s,
    noparse: f ? 1 : 0,
    no_vk_links: c ? 1 : 0
  });
}
const Px = yn(
  (r, o) => {
    var s = r, { image: f, noParse: c, noVkLinks: p, title: y } = s, T = Jt(s, ["image", "noParse", "noVkLinks", "title"]);
    return /* @__PURE__ */ Y.jsx(
      Tn,
      Wt(wt({}, T), {
        forwardedRef: o,
        networkName: "vk",
        networkLink: Xx,
        opts: {
          title: y,
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
Px.displayName = "VKShareButton";
function $x(r, o) {
  window.VK || (window.VK = {}), window.VK.Share = {
    count: (c, p) => {
      var y, T;
      return (T = (y = window.VK.callbacks) == null ? void 0 : y[c]) == null ? void 0 : T.call(y, p);
    }
  }, window.VK.callbacks = [];
  const s = "https://vk.com/share.php", f = window.VK.callbacks.length;
  return window.VK.callbacks.push(o), Ac(
    s + qt({
      act: "count",
      index: f,
      url: r
    })
  );
}
Ec($x);
function Ix(r, { title: o, image: s }) {
  return gn(r, "weibo.url"), "http://service.weibo.com/share/share.php" + qt({
    url: r,
    title: o,
    pic: s
  });
}
const Kx = yn(
  (r, o) => {
    var s = r, { image: f, title: c } = s, p = Jt(s, ["image", "title"]);
    return /* @__PURE__ */ Y.jsx(
      Tn,
      Wt(wt({}, p), {
        forwardedRef: o,
        networkName: "weibo",
        networkLink: Ix,
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
Kx.displayName = "WeiboShareButton";
function Zx(r, { title: o, separator: s }) {
  return gn(r, "whatsapp.url"), "https://api.whatsapp.com/send" + qt({
    text: o ? o + s + r : r
  });
}
const Wx = yn(
  (r, o) => {
    var s = r, { separator: f, title: c } = s, p = Jt(s, ["separator", "title"]);
    return /* @__PURE__ */ Y.jsx(
      Tn,
      Wt(wt({}, p), {
        forwardedRef: o,
        networkName: "whatsapp",
        networkLink: Zx,
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
Wx.displayName = "WhatsappShareButton";
function Jx(r, { quote: o, hashtag: s }) {
  return gn(r, "workplace.url"), "https://work.facebook.com/sharer.php" + qt({
    u: r,
    quote: o,
    hashtag: s
  });
}
const e3 = yn(
  (r, o) => {
    var s = r, { hashtag: f, quote: c } = s, p = Jt(s, ["hashtag", "quote"]);
    return /* @__PURE__ */ Y.jsx(
      Tn,
      Wt(wt({}, p), {
        forwardedRef: o,
        networkName: "workplace",
        networkLink: Jx,
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
e3.displayName = "WorkplaceShareButton";
xi.div`
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
xi.div`
  border-top: 1px solid black;
  h4 {
    margin-top: 0;
  }
  .react-share__ShareButton {
    margin-right: 24px;
  }
`;
v.oneOf(["event", "news"]), v.string.isRequired, v.string.isRequired, v.string.isRequired, v.string.isRequired, v.string, v.string.isRequired, v.string, v.string, v.arrayOf(
  v.shape({
    title: v.string,
    url: v.string,
    active: v.bool
  })
), v.string, v.string, v.string, v.string, v.string, v.string;
v.oneOf(["white", "gray", "black"]), v.arrayOf(v.string), v.oneOfType([
  v.object,
  v.func,
  v.string
]), v.func, v.string, v.oneOf(["large", "small"]), v.string;
const t3 = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, vS = ({
  label: r = "",
  cardTitle: o = "",
  gaData: s,
  ariaLabel: f,
  color: c = "gray",
  disabled: p,
  element: y = "button",
  innerRef: T,
  href: S,
  onClick: x,
  ...z
}) => {
  const O = tu("btn", "btn-tag", {
    "btn-tag-alt-white": c === "white",
    "btn-tag-alt-gray": c === "gray",
    "btn-tag-alt-dark": c === "dark",
    disabled: p
  });
  let M = y;
  return S && y === "button" && (M = "a"), /* @__PURE__ */ Y.jsx(
    ki,
    {
      gaData: {
        ...t3,
        section: o,
        // @deprecated - remove at some point
        ...s,
        text: r
      },
      children: /* @__PURE__ */ Y.jsx(
        M,
        {
          type: M === "button" && x ? "button" : void 0,
          ...z,
          className: O,
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
vS.propTypes = {
  /**
    Button tag label
  */
  label: v.string,
  /**
   * @deprecated
   * Card title, use `gaData.section` instead
   */
  cardTitle: v.string,
  /**
   * Google Analytics event data
   */
  gaData: pb,
  /**
    ARIA label for accessibility
  */
  ariaLabel: v.string,
  /**
    Button background color
  */
  color: v.oneOf(["white", "gray", "dark"]),
  /**
    Disable the button?
  */
  disabled: v.bool,
  /**
    Pass in a Component to override default button element.
    For example: react-router Link
  */
  element: v.oneOfType([
    v.func,
    v.string,
    v.shape({ $$typeof: v.symbol, render: v.func }),
    v.arrayOf(
      v.oneOfType([
        v.func,
        v.string,
        v.shape({ $$typeof: v.symbol, render: v.func })
      ])
    )
  ]),
  /**
    Link target url; will cause button to be rendered as `<a>` link
  */
  href: v.string,
  /**
   * ref will only get you a reference to the Button component, use innerRef to
   * get a reference to the DOM element (for things like focus management).
   */
  innerRef: v.oneOfType([
    v.object,
    v.func,
    v.string
  ]),
  /**
    Event handler function for `<button>`
  */
  onClick: v.func
};
const bS = ({
  src: r,
  alt: o,
  cssClasses: s,
  loading: f = "lazy",
  decoding: c = "async",
  dataTestId: p,
  fetchPriority: y = "auto",
  width: T,
  height: S,
  cardLink: x,
  title: z,
  caption: O,
  captionTitle: M,
  buttons: $,
  border: H,
  dropShadow: V
}) => {
  const X = {
    src: r,
    alt: o,
    loading: f,
    decoding: c,
    fetchpriority: y,
    // React attribute bug workaround
    ...(s == null ? void 0 : s.length) > 0 && { className: Uw(s) },
    ...p && { "data-testid": p },
    ...T && { width: T },
    ...S && { height: S }
  }, I = tu("uds-img", {
    borderless: !H,
    "uds-img-drop-shadow": V
  }), q = (ae) => {
    const le = ae ? `${X.className} ${ae}` : X.className;
    return x ? /* @__PURE__ */ Y.jsxs("a", { href: x, children: [
      /* @__PURE__ */ Y.jsx("img", { ...X, className: le }),
      /* @__PURE__ */ Y.jsx("span", { className: "visually-hidden", children: z })
    ] }) : /* @__PURE__ */ Y.jsx("img", { ...X, className: le });
  }, fe = () => /* @__PURE__ */ Y.jsx(Y.Fragment, { children: $ && /* @__PURE__ */ Y.jsx("div", { className: "card-buttons", style: { marginTop: O ? 20 : 0 }, children: $.map((ae) => /* @__PURE__ */ Y.jsx(
    "div",
    {
      className: "card-button",
      "data-testid": "card-button",
      children: /* @__PURE__ */ Y.jsx(
        mb,
        {
          ariaLabel: ae.ariaLabel,
          color: ae.color,
          icon: ae.icon,
          href: ae.href,
          label: ae.label,
          onClick: ae.onClick,
          size: ae.size,
          target: ae.target,
          cardTitle: z
        }
      )
    },
    `${ae.label}-${ae.href}`
  )) }) });
  return $ || O ? /* @__PURE__ */ Y.jsx("div", { className: I, children: /* @__PURE__ */ Y.jsxs("figure", { className: "figure uds-figure", children: [
    q(),
    /* @__PURE__ */ Y.jsxs("figcaption", { className: "figure-caption uds-figure-caption", children: [
      M && /* @__PURE__ */ Y.jsx("h3", { children: M }),
      O && /* @__PURE__ */ Y.jsx(
        "span",
        {
          className: "uds-caption-text",
          dangerouslySetInnerHTML: Rc(O)
        }
      ),
      fe()
    ] })
  ] }) }) : q(I);
};
bS.propTypes = {
  /**
   * Image source (We keep the same name as in the whole project)
   */
  src: v.string.isRequired,
  /**
   * Image alt text
   */
  alt: v.string.isRequired,
  /**
   * Array classes for the image
   */
  cssClasses: v.arrayOf(v.string),
  /**
   * Image loading mode
   */
  loading: v.oneOf(["lazy", "eager"]),
  /**
   * Image decoding mode
   */
  decoding: v.oneOf(["sync", "async", "auto"]),
  /**
   * Image fetch priority mode
   */
  fetchPriority: v.oneOf(["auto", "high", "low"]),
  /**
   * Width of the image
   */
  width: v.string,
  /**
   * Height of the image
   */
  height: v.string,
  dataTestId: v.string,
  cardLink: v.string,
  title: v.string,
  caption: v.string,
  captionTitle: v.string,
  border: v.bool,
  dropShadow: v.bool
};
const n3 = xi.div`
  &.cards-components a + &.cards-components a {
    margin-left: 5px;
  }
  .card-button {
    column-gap: 1rem;
  }
  .card-button .btn {
    margin: 0;
  }
`, a3 = (r) => /^[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(r), l3 = (r) => !r.startsWith("https://") && !r.startsWith("http://") && a3(r) ? `mailto:${r}` : r, A0 = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, SS = (r) => r === "event" || r === "news", Jo = ({
  type: r = "default",
  width: o = "100%",
  horizontal: s = !1,
  image: f,
  imageAltText: c,
  title: p,
  icon: y,
  body: T,
  eventFormat: S = "stack",
  eventLocation: x,
  eventTime: z,
  buttons: O,
  linkLabel: M,
  linkUrl: $,
  tags: H,
  showBorders: V = !0,
  cardLink: X
}) => /* @__PURE__ */ Y.jsx(
  wS,
  {
    type: r,
    width: o,
    horizontal: s,
    image: f,
    imageAltText: c,
    title: p,
    icon: y,
    body: T,
    eventFormat: S,
    eventLocation: x,
    eventTime: z,
    buttons: O,
    linkLabel: M,
    linkUrl: $,
    tags: H,
    showBorders: V,
    cardLink: X
  }
);
Jo.propTypes = {
  /**
   * Type of card
   */
  type: v.oneOf(["default", "degree", "event", "news", "story"]),
  /**
   * Width of card
   */
  width: v.oneOf(["25%", "50%", "75%", "100%"]),
  /**
   * Enable horizontal mode
   */
  horizontal: v.bool,
  /**
   * Card title
   */
  title: v.string.isRequired,
  /**
    React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  */
  icon: v.arrayOf(v.string),
  /**
   * Card body content
   */
  body: v.string,
  /**
   * Event info format
   */
  eventFormat: v.oneOf(["stack", "inline"]),
  /**
   * Location
   */
  eventLocation: v.string,
  /**
   * Event start time
   */
  eventTime: v.string,
  /**
   * Card header image
   */
  image: v.string,
  /**
   * Card header image alt text
   */
  imageAltText: v.string,
  /**
   * Buttons
   */
  buttons: v.arrayOf(
    v.shape({
      ariaLabel: v.string,
      color: v.oneOf(["gold", "maroon", "gray", "dark"]),
      icon: v.arrayOf(v.string),
      href: v.string,
      label: v.string,
      onClick: v.func,
      size: v.oneOf(["default", "small", "xsmall"]),
      target: v.oneOf(["_blank", "_self", "_top", "_parent"])
    })
  ),
  linkLabel: v.string,
  linkUrl: v.string,
  /**
   * Tags
   */
  tags: v.arrayOf(
    v.shape({
      ariaLabel: v.string,
      color: v.oneOf(["white", "gray", "dark"]),
      href: v.string,
      label: v.string,
      onClick: v.func
    })
  ),
  /**
   * Remove card borders
   */
  showBorders: v.bool,
  /**
   * Card link
   */
  cardLink: v.string
};
const wS = ({
  type: r = "default",
  width: o = "100%",
  horizontal: s = !1,
  image: f = "",
  imageAltText: c = "",
  title: p,
  icon: y = void 0,
  body: T = "",
  eventFormat: S = "stack",
  eventLocation: x = "",
  eventTime: z = "",
  buttons: O = void 0,
  linkLabel: M = void 0,
  linkUrl: $ = void 0,
  tags: H = void 0,
  showBorders: V = !0,
  cardLink: X
}) => {
  const I = tu("card", "cards-components", {
    "card-degree": r === "degree",
    "card-event": r === "event",
    "card-story": r === "story",
    "card-news": r === "news",
    [`w-${o.replace("%", "")}`]: o !== "100%",
    "card-horizontal": s,
    borderless: !V
  }), q = typeof f == "string" && f.length > 0, fe = !SS(r);
  return /* @__PURE__ */ Y.jsxs(n3, { className: I, "data-testid": "card-container", children: [
    q && /* @__PURE__ */ Y.jsx(
      bS,
      {
        src: f,
        alt: c,
        dataTestId: "card-image",
        cssClasses: ["card-img-top"],
        title: p,
        cardLink: fe ? X : void 0
      }
    ),
    !f && y && /* @__PURE__ */ Y.jsx(
      "i",
      {
        className: `${y == null ? void 0 : y[0]} fa-${y == null ? void 0 : y[1]} fa-2x card-icon-top`,
        "data-testid": "card-icon"
      }
    ),
    /* @__PURE__ */ Y.jsx("div", { className: s ? "card-content-wrapper" : void 0, children: /* @__PURE__ */ Y.jsx(
      TS,
      {
        type: r,
        body: T,
        eventFormat: S,
        eventLocation: x,
        eventTime: z,
        title: p,
        buttons: O,
        linkLabel: M,
        linkUrl: $,
        tags: H,
        cardLink: X
      }
    ) })
  ] });
};
wS.propTypes = {
  type: v.oneOf(["default", "degree", "event", "news", "story"]),
  width: v.oneOf(["25%", "50%", "75%", "100%"]),
  horizontal: v.bool,
  title: v.string.isRequired,
  icon: v.arrayOf(v.string),
  // React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  body: v.string,
  eventFormat: v.oneOf(["stack", "inline"]),
  eventLocation: v.string,
  eventTime: v.string,
  image: v.string,
  imageAltText: v.string,
  buttons: v.arrayOf(
    v.shape({
      ariaLabel: v.string,
      color: v.oneOf(["gold", "maroon", "gray", "dark"]),
      icon: v.arrayOf(v.string),
      href: v.string,
      label: v.string,
      onClick: v.func,
      size: v.oneOf(["default", "small", "xsmall"]),
      target: v.oneOf(["_blank", "_self", "_top", "_parent"])
    })
  ),
  linkLabel: v.string,
  linkUrl: v.string,
  tags: v.arrayOf(
    v.shape({
      ariaLabel: v.string,
      color: v.oneOf(["white", "gray", "dark"]),
      href: v.string,
      label: v.string,
      onClick: v.func
    })
  ),
  showBorders: v.bool,
  cardLink: v.string
};
const TS = ({
  type: r = "default",
  body: o = "",
  eventFormat: s = "stack",
  eventLocation: f = "",
  eventTime: c = "",
  title: p,
  buttons: y = void 0,
  linkLabel: T = void 0,
  linkUrl: S = void 0,
  tags: x = void 0,
  cardLink: z
}) => {
  const O = SS(r), M = z && !O, $ = O && z, H = r === "event" && (c || f);
  return /* @__PURE__ */ Y.jsxs(Y.Fragment, { children: [
    p && /* @__PURE__ */ Y.jsx("div", { className: "card-header", "data-testid": "card-title", children: /* @__PURE__ */ Y.jsx("h3", { className: "card-title", children: M ? /* @__PURE__ */ Y.jsx("a", { href: z, children: p }) : p }) }),
    o && /* @__PURE__ */ Y.jsx("div", { className: "card-body", "data-testid": "card-body", children: /* @__PURE__ */ Y.jsx("div", { dangerouslySetInnerHTML: Rc(o) }) }),
    H && /* @__PURE__ */ Y.jsx(
      kS,
      {
        eventFormat: s,
        eventTime: c,
        eventLocation: f
      }
    ),
    $ ? /* @__PURE__ */ Y.jsx("div", { className: "card-link", "data-testid": "card-link", children: /* @__PURE__ */ Y.jsx(
      ki,
      {
        gaData: {
          ...A0,
          text: p
        },
        children: /* @__PURE__ */ Y.jsx("a", { href: z, className: "card-arrow-link", "aria-label": p, children: /* @__PURE__ */ Y.jsx("i", { className: "fas fa-arrow-right", "aria-hidden": "true" }) })
      }
    ) }) : /* @__PURE__ */ Y.jsxs(Y.Fragment, { children: [
      !p && !o && !H && /* @__PURE__ */ Y.jsx("br", {}),
      y && /* @__PURE__ */ Y.jsx("div", { className: "card-buttons", children: y.map((V) => /* @__PURE__ */ Y.jsx(
        "div",
        {
          className: "card-button",
          "data-testid": "card-button",
          children: /* @__PURE__ */ Y.jsx(
            mb,
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
      S && T && /* @__PURE__ */ Y.jsx("div", { className: "card-link", "data-testid": "card-link", children: /* @__PURE__ */ Y.jsx(
        ki,
        {
          gaData: {
            ...A0,
            section: p,
            text: T
          },
          children: /* @__PURE__ */ Y.jsx("a", { href: l3(S), children: T })
        }
      ) })
    ] }),
    x && /* @__PURE__ */ Y.jsx("div", { className: "card-tags", "data-testid": "card-tags", children: x.map((V) => (
      // @ts-ignore
      /* @__PURE__ */ Y.jsx(
        vS,
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
TS.propTypes = {
  type: v.oneOf(["default", "degree", "event", "news", "story"]),
  body: v.string,
  eventFormat: v.oneOf(["stack", "inline"]),
  eventLocation: v.string,
  eventTime: v.string,
  title: v.string.isRequired,
  buttons: v.arrayOf(
    v.shape({
      ariaLabel: v.string,
      color: v.oneOf(["gold", "maroon", "gray", "dark"]),
      icon: v.arrayOf(v.string),
      href: v.string,
      label: v.string,
      onClick: v.func,
      size: v.oneOf(["default", "small", "xsmall"]),
      target: v.oneOf(["_blank", "_self", "_top", "_parent"])
    })
  ),
  linkLabel: v.string,
  linkUrl: v.string,
  tags: v.arrayOf(
    v.shape({
      ariaLabel: v.string,
      color: v.oneOf(["white", "gray", "dark"]),
      href: v.string,
      label: v.string,
      onClick: v.func
    })
  ),
  cardLink: v.string
};
const kS = ({
  eventFormat: r = "stack",
  eventLocation: o = "",
  eventTime: s = ""
}) => r === "inline" ? /* @__PURE__ */ Y.jsxs("div", { className: "card-event-details", children: [
  s && /* @__PURE__ */ Y.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ Y.jsx("div", { children: /* @__PURE__ */ Y.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ Y.jsx("div", { dangerouslySetInnerHTML: Rc(s) })
  ] }),
  o && /* @__PURE__ */ Y.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ Y.jsx("div", { children: /* @__PURE__ */ Y.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ Y.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Rc(o)
      }
    )
  ] })
] }) : /* @__PURE__ */ Y.jsxs(Y.Fragment, { children: [
  s && /* @__PURE__ */ Y.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ Y.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ Y.jsx("div", { children: /* @__PURE__ */ Y.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ Y.jsx("div", { dangerouslySetInnerHTML: Rc(s) })
  ] }) }),
  o && /* @__PURE__ */ Y.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ Y.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ Y.jsx("div", { children: /* @__PURE__ */ Y.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ Y.jsx("span", { children: /* @__PURE__ */ Y.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Rc(o)
      }
    ) })
  ] }) })
] });
kS.propTypes = {
  eventFormat: v.oneOf(["stack", "inline"]),
  eventLocation: v.string,
  eventTime: v.string
};
v.oneOf(["small", "large"]), v.string.isRequired, v.string.isRequired, v.string;
v.oneOf(["small", "large"]).isRequired, v.string.isRequired, v.string.isRequired, v.string.isRequired, v.string.isRequired, v.string, v.string;
v.arrayOf(v.object).isRequired, v.oneOf(["card", "ranking", "image"]), v.oneOf([1, 2, 3, 4, "1", "2", "3", "4"]);
v.string.isRequired, v.oneOfType([
  v.string,
  v.arrayOf(v.string)
]), v.node.isRequired, v.string, v.string, v.shape({
  label: v.string.isRequired,
  href: v.string.isRequired,
  color: v.string
});
const r3 = xi.div`
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
`, i3 = () => /* @__PURE__ */ Y.jsxs(r3, { children: [
  /* @__PURE__ */ Y.jsx("div", {}),
  /* @__PURE__ */ Y.jsx("div", {}),
  /* @__PURE__ */ Y.jsx("div", {}),
  /* @__PURE__ */ Y.jsx("div", {})
] }), o3 = xi.section``, Dh = Aw(null), xS = ({
  defaultProps: r,
  dataSource: o,
  noFeedText: s,
  renderHeader: f,
  renderBody: c,
  dataTransformer: p,
  dataFilter: y,
  maxItems: T
}) => {
  const [{ data: S, loading: x, error: z }, O] = Mw(), [M, $] = eu([]), H = { ...r.dataSource, ...o };
  return wi(() => {
    O(H == null ? void 0 : H.url);
  }, [H == null ? void 0 : H.url]), wi(() => {
    const V = S == null ? void 0 : S.nodes.map(p), X = V == null ? void 0 : V.filter(
      (I) => y(I, o == null ? void 0 : o.filters)
    );
    $(T ? X == null ? void 0 : X.slice(0, T) : X);
  }, [S]), // Init the context to be used on its childrens
  /* @__PURE__ */ Y.jsx(Dh.Provider, { value: { feeds: M }, children: /* @__PURE__ */ Y.jsxs(o3, { children: [
    f,
    z ? /* @__PURE__ */ Y.jsx("span", { children: "Error, try again!" }) : /* @__PURE__ */ Y.jsxs(Y.Fragment, { children: [
      x && !(M != null && M.length) && /* @__PURE__ */ Y.jsx("div", { className: "text-center mt-4", children: /* @__PURE__ */ Y.jsx(i3, {}) }),
      M != null && M.length ? c : !x && /* @__PURE__ */ Y.jsx("p", { className: "text-center", children: s })
    ] })
  ] }) });
};
xS.propTypes = {
  renderHeader: v.element,
  renderBody: v.element,
  maxItems: v.number,
  dataTransformer: v.func,
  dataFilter: v.func,
  noFeedText: v.string
};
const Sb = v.shape({
  color: v.oneOf(["white", "dark"]),
  text: v.string
}), wb = v.shape({
  color: v.oneOf(["gold", "maroon", "gray", "dark"]),
  text: v.string
}), AS = v.shape({
  color: v.oneOf(["gold", "maroon", "gray", "dark"]),
  text: v.string,
  size: v.string
}), ES = v.shape({
  url: v.string,
  filters: v.string
}), u3 = v.shape({
  header: Sb,
  ctaButton: wb,
  dataSource: ES,
  maxItems: v.number
}), s3 = xi.div`
  @media screen and (min-width: 768px) {
    & {
      display: inline-flex;
      justify-content: flex-end;
    }
  }
`, _S = ({
  defaultProps: r,
  header: o,
  ctaButton: s
}) => {
  const f = { ...r.header, ...o }, c = { ...r.ctaButton, ...s }, p = f.tag || "h2", y = p !== "h2", T = `text-${f.color} ${y ? "h2" : ""}`.trim();
  return /* @__PURE__ */ Y.jsxs(
    "div",
    {
      className: "row justify-content-between align-items-center pb-6",
      "data-testid": "feed-header",
      children: [
        /* @__PURE__ */ Y.jsx("div", { className: "col-sm-12 col-md-9", children: /* @__PURE__ */ Y.jsx(p, { className: T, children: f.text }) }),
        /* @__PURE__ */ Y.jsx(s3, { className: "col-sm-12 col-md-3", children: /* @__PURE__ */ Y.jsx(
          ki,
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
            children: /* @__PURE__ */ Y.jsx("a", { className: `btn btn-${c.color}`, href: c.url, children: c.text })
          }
        ) })
      ]
    }
  );
};
_S.propTypes = {
  defaultProps: u3,
  header: Sb,
  ctaButton: wb
};
const CS = ({ children: r }) => /* @__PURE__ */ Y.jsx("div", { className: "row", "data-testid": "feed-body", children: /* @__PURE__ */ Y.jsx("div", { className: "col", children: r }) });
CS.propTypes = {
  children: v.element
};
xi.img`
  width: 100%;
`;
v.oneOf(["heading-hero", "story-hero"]), v.arrayOf(lv), v.string;
v.bool, v.bool, v.bool, v.bool, v.string, v.func, v.node, v.bool, v.string, v.bool;
v.oneOf(["default", "bordered"]).isRequired, v.oneOf(["white", "gray1", "gray2", "gray7"]).isRequired, v.number, v.number, v.func.isRequired;
xi.div`
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
v.object, v.bool, v.bool, v.func.isRequired;
const c3 = St.forwardRef(({
  overflowTabs: r,
  idToChild: o,
  activeTabID: s,
  selectTab: f,
  gaData: c,
  openRight: p = !1
}, y) => {
  const [T, S] = eu(!1), x = lh(null), z = lh(null), O = lh([]), M = Array.isArray(r) ? r : [], $ = C1(), H = M.includes(s ?? ""), V = M.map((K) => {
    const F = o == null ? void 0 : o[K];
    return F ? {
      id: K,
      title: F.props.title,
      icon: F.props.icon ?? null
    } : { id: K, title: K, icon: null };
  }), X = Bv((K = !0) => {
    var F;
    S(!1), K && ((F = z.current) == null || F.focus());
  }, []), I = (K) => {
    K.preventDefault(), S((F) => !F);
  };
  wi(() => {
    function K(F) {
      var J;
      (J = x.current) != null && J.contains(F.target) || S(!1);
    }
    return document.addEventListener("mousedown", K), () => document.removeEventListener("mousedown", K);
  }, []);
  const q = Bv(
    (K, F) => {
      var J, Ae;
      switch (K.key) {
        case "ArrowDown": {
          K.preventDefault();
          const Qe = O.current[F + 1] ?? O.current[0];
          Qe == null || Qe.focus();
          break;
        }
        case "ArrowUp": {
          K.preventDefault();
          const Qe = O.current[F - 1] ?? O.current[V.length - 1];
          Qe == null || Qe.focus();
          break;
        }
        case "Home":
          K.preventDefault(), (J = O.current[0]) == null || J.focus();
          break;
        case "End":
          K.preventDefault(), (Ae = O.current[V.length - 1]) == null || Ae.focus();
          break;
        case "Escape":
          K.preventDefault(), X();
          break;
        case "Tab":
          S(!1);
          break;
      }
    },
    [V.length, X]
  ), fe = (K, F, J) => {
    K.preventDefault(), X(!1), f == null || f(K, F, J);
  }, ae = V.length === 0, le = (K) => {
    x.current = K, typeof y == "function" ? y(K) : y && (y.current = K);
  };
  return /* @__PURE__ */ Y.jsxs(
    "div",
    {
      ref: le,
      className: `uds-more-dropdown${p ? " dropdown-open-right" : ""}${ae ? " uds-more-dropdown-hidden" : ""}`,
      "aria-hidden": ae || void 0,
      children: [
        /* @__PURE__ */ Y.jsx(ki, { gaData: c ?? {}, children: /* @__PURE__ */ Y.jsxs(
          "button",
          {
            ref: z,
            type: "button",
            onClick: I,
            onKeyDown: (K) => {
              var F, J;
              K.key === "Enter" || K.key === " " ? (K.preventDefault(), T ? X() : (S(!0), requestAnimationFrame(() => {
                var Ae;
                return (Ae = O.current[0]) == null ? void 0 : Ae.focus();
              }))) : T && K.key === "ArrowDown" ? (K.preventDefault(), (F = O.current[0]) == null || F.focus()) : T && K.key === "ArrowUp" ? (K.preventDefault(), (J = O.current[V.length - 1]) == null || J.focus()) : T && K.key === "Escape" && (K.preventDefault(), X());
            },
            "aria-haspopup": "true",
            "aria-expanded": T,
            "aria-controls": $,
            "aria-label": `More, ${V.length} additional tab${V.length !== 1 ? "s" : ""}`,
            className: `uds-tab more-dropdown-button${H ? " active" : ""}`,
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
            id: $,
            role: "menu",
            "aria-label": "More tabs",
            "aria-hidden": !T,
            className: `more-dropdown-menu uds-more-dropdown-list${T ? " open" : ""}`,
            children: V.map((K, F) => {
              const J = K.id === s;
              return /* @__PURE__ */ Y.jsx("li", { role: "none", children: /* @__PURE__ */ Y.jsxs(
                "button",
                {
                  ref: (Ae) => {
                    Ae && (O.current[F] = Ae);
                  },
                  type: "button",
                  role: "menuitem",
                  tabIndex: -1,
                  onClick: (Ae) => fe(Ae, K.id, K.title),
                  onKeyDown: (Ae) => q(Ae, F),
                  className: "more-dropdown-item",
                  "aria-current": J || void 0,
                  children: [
                    K.icon && /* @__PURE__ */ Y.jsx(
                      "i",
                      {
                        "aria-hidden": "true",
                        className: `${K.icon[0]} fa-${K.icon[1]} me-1`
                      }
                    ),
                    K.title
                  ]
                }
              ) }, K.id);
            })
          }
        )
      ]
    }
  );
});
c3.displayName = "MoreDropdown";
v.shape({
  title: v.string,
  content: v.string,
  cite: v.shape({
    name: v.string,
    description: v.string
  })
}).isRequired, v.string, v.string, v.shape({
  containerCssClass: v.arrayOf(v.string),
  titleCssClass: v.arrayOf(v.string),
  contentCssClass: v.arrayOf(v.string)
});
v.oneOf(["video", "youtube"]), v.string, v.string, v.string, v.string, v.string, v.bool;
const f3 = {
  event: "select",
  action: "click",
  name: "onclick",
  region: "main content",
  type: "pagination",
  text: "owl dot"
}, OS = ({ children: r }) => /* @__PURE__ */ Y.jsx(
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
OS.propTypes = {
  children: v.oneOfType([
    v.element,
    v.arrayOf(v.element)
  ]).isRequired
};
const NS = ({ buttonCount: r }) => {
  const o = [];
  for (let s = 0; s < r; s += 1)
    o.push(
      /* @__PURE__ */ Y.jsx(ki, { gaData: f3, children: /* @__PURE__ */ Y.jsx(
        "button",
        {
          type: "button",
          className: "glide__bullet",
          "data-glide-dir": `=${s}`,
          "aria-label": `Slide view ${s + 1}`
        }
      ) }, `bullet-${s}`)
    );
  return /* @__PURE__ */ Y.jsx(OS, { children: o });
};
NS.propTypes = {
  buttonCount: v.number.isRequired
};
v.arrayOf(v.string).isRequired, v.func;
const zS = ({ onClick: r = () => null }) => /* @__PURE__ */ Y.jsx(
  "button",
  {
    type: "button",
    className: "glide__arrow glide__arrow--next",
    "data-glide-dir": ">",
    "aria-label": "Next slide",
    onClick: r,
    children: /* @__PURE__ */ Y.jsx("i", { className: "fas fa-chevron-right arrow-icon" })
  }
);
zS.propTypes = {
  onClick: v.func
};
const RS = ({ onClick: r = () => null }) => /* @__PURE__ */ Y.jsx(
  "button",
  {
    type: "button",
    className: "glide__arrow glide__arrow--prev",
    "data-glide-dir": "<",
    "aria-label": "Previous slide",
    onClick: r,
    children: /* @__PURE__ */ Y.jsx("span", { className: "fas fa-chevron-left arrow-icon" })
  }
);
RS.propTypes = {
  onClick: v.func
};
const E0 = {
  event: "select",
  action: "click",
  name: "onclick",
  region: "main content",
  type: "carousel"
}, DS = ({ children: r = null }) => /* @__PURE__ */ Y.jsx(
  "div",
  {
    className: "glide__arrows",
    "data-glide-el": "controls",
    "data-testid": "arrows-container",
    children: r
  }
);
DS.propTypes = {
  children: v.arrayOf(v.element)
};
const LS = ({ onClick: r = () => null, children: o = void 0 }) => (
  // @ts-ignore
  /* @__PURE__ */ Y.jsxs(DS, { children: [
    /* @__PURE__ */ Y.jsx(ki, { gaData: { ...E0, text: "left chevron" }, children: /* @__PURE__ */ Y.jsx(RS, { onClick: r }) }),
    o,
    /* @__PURE__ */ Y.jsx(ki, { gaData: { ...E0, text: "right chevron" }, children: /* @__PURE__ */ Y.jsx(zS, { onClick: r }) })
  ] })
);
LS.propTypes = {
  children: v.element,
  onClick: v.func
};
const MS = ({ carouselItems: r }) => {
  const o = r.map((s) => /* @__PURE__ */ Y.jsx("li", { className: "glide__slide slider", children: s.item }, s.id.toString()));
  return /* @__PURE__ */ Y.jsx("ul", { className: "glide__slides", children: o });
};
MS.propTypes = {
  carouselItems: v.arrayOf(v.object)
};
function _0(r, o) {
  var s = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var f = Object.getOwnPropertySymbols(r);
    o && (f = f.filter(function(c) {
      return Object.getOwnPropertyDescriptor(r, c).enumerable;
    })), s.push.apply(s, f);
  }
  return s;
}
function C0(r) {
  for (var o = 1; o < arguments.length; o++) {
    var s = arguments[o] != null ? arguments[o] : {};
    o % 2 ? _0(Object(s), !0).forEach(function(f) {
      p3(r, f, s[f]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(s)) : _0(Object(s)).forEach(function(f) {
      Object.defineProperty(r, f, Object.getOwnPropertyDescriptor(s, f));
    });
  }
  return r;
}
function fh(r) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? fh = function(o) {
    return typeof o;
  } : fh = function(o) {
    return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, fh(r);
}
function Lh(r, o) {
  if (!(r instanceof o))
    throw new TypeError("Cannot call a class as a function");
}
function d3(r, o) {
  for (var s = 0; s < o.length; s++) {
    var f = o[s];
    f.enumerable = f.enumerable || !1, f.configurable = !0, "value" in f && (f.writable = !0), Object.defineProperty(r, f.key, f);
  }
}
function Mh(r, o, s) {
  return o && d3(r.prototype, o), r;
}
function p3(r, o, s) {
  return o in r ? Object.defineProperty(r, o, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[o] = s, r;
}
function m3(r, o) {
  if (typeof o != "function" && o !== null)
    throw new TypeError("Super expression must either be null or a function");
  r.prototype = Object.create(o && o.prototype, {
    constructor: {
      value: r,
      writable: !0,
      configurable: !0
    }
  }), o && Kv(r, o);
}
function jc(r) {
  return jc = Object.setPrototypeOf ? Object.getPrototypeOf : function(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, jc(r);
}
function Kv(r, o) {
  return Kv = Object.setPrototypeOf || function(s, f) {
    return s.__proto__ = f, s;
  }, Kv(r, o);
}
function h3() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function g3(r) {
  if (r === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
function y3(r, o) {
  if (o && (typeof o == "object" || typeof o == "function"))
    return o;
  if (o !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return g3(r);
}
function v3(r) {
  var o = h3();
  return function() {
    var s = jc(r), f;
    if (o) {
      var c = jc(this).constructor;
      f = Reflect.construct(s, arguments, c);
    } else
      f = s.apply(this, arguments);
    return y3(this, f);
  };
}
function b3(r, o) {
  for (; !Object.prototype.hasOwnProperty.call(r, o) && (r = jc(r), r !== null); )
    ;
  return r;
}
function dh() {
  return typeof Reflect < "u" && Reflect.get ? dh = Reflect.get : dh = function(r, o, s) {
    var f = b3(r, o);
    if (f) {
      var c = Object.getOwnPropertyDescriptor(f, o);
      return c.get ? c.get.call(arguments.length < 3 ? r : s) : c.value;
    }
  }, dh.apply(this, arguments);
}
var S3 = {
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
function nu(r) {
  console.error("[Glide warn]: ".concat(r));
}
function al(r) {
  return parseInt(r);
}
function w3(r) {
  return parseFloat(r);
}
function Zv(r) {
  return typeof r == "string";
}
function Hc(r) {
  var o = fh(r);
  return o === "function" || o === "object" && !!r;
}
function Th(r) {
  return typeof r == "function";
}
function US(r) {
  return typeof r > "u";
}
function Wv(r) {
  return r.constructor === Array;
}
function T3(r, o, s) {
  var f = {};
  for (var c in o)
    Th(o[c]) ? f[c] = o[c](r, f, s) : nu("Extension must be a function");
  for (var p in f)
    Th(f[p].mount) && f[p].mount();
  return f;
}
function bn(r, o, s) {
  Object.defineProperty(r, o, s);
}
function k3(r) {
  return Object.keys(r).sort().reduce(function(o, s) {
    return o[s] = r[s], o[s], o;
  }, {});
}
function Jv(r, o) {
  var s = Object.assign({}, r, o);
  if (o.hasOwnProperty("classes")) {
    s.classes = Object.assign({}, r.classes, o.classes);
    var f = ["direction", "type", "slide", "arrow", "nav"];
    f.forEach(function(c) {
      o.classes.hasOwnProperty(c) && (s.classes[c] = C0(C0({}, r.classes[c]), o.classes[c]));
    });
  }
  return o.hasOwnProperty("breakpoints") && (s.breakpoints = Object.assign({}, r.breakpoints, o.breakpoints)), s;
}
var x3 = /* @__PURE__ */ (function() {
  function r() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Lh(this, r), this.events = o, this.hop = o.hasOwnProperty;
  }
  return Mh(r, [{
    key: "on",
    value: function(o, s) {
      if (Wv(o)) {
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
      if (Wv(o)) {
        for (var f = 0; f < o.length; f++)
          this.emit(o[f], s);
        return;
      }
      this.hop.call(this.events, o) && this.events[o].forEach(function(c) {
        c(s || {});
      });
    }
  }]), r;
})(), A3 = /* @__PURE__ */ (function() {
  function r(o) {
    var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    Lh(this, r), this._c = {}, this._t = [], this._e = new x3(), this.disabled = !1, this.selector = o, this.settings = Jv(S3, s), this.index = this.settings.startAt;
  }
  return Mh(r, [{
    key: "mount",
    value: function() {
      var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return this._e.emit("mount.before"), Hc(o) ? this._c = T3(this, o, this._e) : nu("You need to provide a object on `mount()`"), this._e.emit("mount.after"), this;
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
      return Wv(o) ? this._t = o : nu("You need to provide a array on `mutate()`"), this;
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
      return this.settings = Jv(this.settings, o), o.hasOwnProperty("startAt") && (this.index = o.startAt), this._e.emit("update"), this;
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
      Hc(o) ? this._o = o : nu("Options must be an `object` instance.");
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
      this._i = al(o);
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
function E3(r, o, s) {
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
      var S = this.move, x = this.length, z = S.steps, O = S.direction, M = 1;
      if (O === "=") {
        if (r.settings.bound && al(z) > x) {
          r.index = x;
          return;
        }
        r.index = z;
        return;
      }
      if (O === ">" && z === ">") {
        r.index = x;
        return;
      }
      if (O === "<" && z === "<") {
        r.index = 0;
        return;
      }
      if (O === "|" && (M = r.settings.perView || 1), O === ">" || O === "|" && z === ">") {
        var $ = c(M);
        $ > x && (this._o = !0), r.index = p($, M);
        return;
      }
      if (O === "<" || O === "|" && z === "<") {
        var H = y(M);
        H < 0 && (this._o = !0), r.index = T(H, M);
        return;
      }
      nu("Invalid direction pattern [".concat(O).concat(z, "] has been used"));
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
    var z = f.length;
    return S <= z ? S : r.isType("carousel") ? S - (z + 1) : r.settings.rewind ? f.isBound() && !f.isEnd() ? z : 0 : f.isBound() ? z : Math.floor(z / x) * x;
  }
  function y(S) {
    var x = r.index;
    if (r.isType("carousel"))
      return x - S;
    var z = Math.ceil(x / S);
    return (z - 1) * S;
  }
  function T(S, x) {
    var z = f.length;
    return S >= 0 ? S : r.isType("carousel") ? S + (z + 1) : r.settings.rewind ? f.isBound() && f.isStart() ? z : Math.floor(z / x) * x : 0;
  }
  return bn(f, "move", {
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
        steps: x ? al(x) ? al(x) : x : 0
      };
    }
  }), bn(f, "length", {
    /**
     * Gets value of the running distance based
     * on zero-indexing number of slides.
     *
     * @return {Number}
     */
    get: function() {
      var S = r.settings, x = o.Html.slides.length;
      return this.isBound() ? x - 1 - (al(S.perView) - 1) + al(S.focusAt) : x - 1;
    }
  }), bn(f, "offset", {
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
function O0() {
  return (/* @__PURE__ */ new Date()).getTime();
}
function Uh(r, o) {
  var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, f, c, p, y, T = 0, S = function() {
    T = s.leading === !1 ? 0 : O0(), f = null, y = r.apply(c, p), f || (c = p = null);
  }, x = function() {
    var z = O0();
    !T && s.leading === !1 && (T = z);
    var O = o - (z - T);
    return c = this, p = arguments, O <= 0 || O > o ? (f && (clearTimeout(f), f = null), T = z, y = r.apply(c, p), f || (c = p = null)) : !f && s.trailing !== !1 && (f = setTimeout(S, O)), y;
  };
  return x.cancel = function() {
    clearTimeout(f), T = 0, f = c = p = null;
  }, x;
}
var Wm = {
  ltr: ["marginLeft", "marginRight"],
  rtl: ["marginRight", "marginLeft"]
};
function _3(r, o, s) {
  var f = {
    /**
     * Applies gaps between slides. First and last
     * slides do not receive it's edge margins.
     *
     * @param {HTMLCollection} slides
     * @return {Void}
     */
    apply: function(c) {
      for (var p = 0, y = c.length; p < y; p++) {
        var T = c[p].style, S = o.Direction.value;
        p !== 0 ? T[Wm[S][0]] = "".concat(this.value / 2, "px") : T[Wm[S][0]] = "", p !== c.length - 1 ? T[Wm[S][1]] = "".concat(this.value / 2, "px") : T[Wm[S][1]] = "";
      }
    },
    /**
     * Removes gaps from the slides.
     *
     * @param {HTMLCollection} slides
     * @returns {Void}
    */
    remove: function(c) {
      for (var p = 0, y = c.length; p < y; p++) {
        var T = c[p].style;
        T.marginLeft = "", T.marginRight = "";
      }
    }
  };
  return bn(f, "value", {
    /**
     * Gets value of the gap.
     *
     * @returns {Number}
     */
    get: function() {
      return al(r.settings.gap);
    }
  }), bn(f, "grow", {
    /**
     * Gets additional dimensions value caused by gaps.
     * Used to increase width of the slides wrapper.
     *
     * @returns {Number}
     */
    get: function() {
      return f.value * o.Sizes.length;
    }
  }), bn(f, "reductor", {
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
  }), s.on(["build.after", "update"], Uh(function() {
    f.apply(o.Html.wrapper.children);
  }, 30)), s.on("destroy", function() {
    f.remove(o.Html.wrapper.children);
  }), f;
}
function jS(r) {
  if (r && r.parentNode) {
    for (var o = r.parentNode.firstChild, s = []; o; o = o.nextSibling)
      o.nodeType === 1 && o !== r && s.push(o);
    return s;
  }
  return [];
}
function eb(r) {
  return Array.prototype.slice.call(r);
}
var C3 = '[data-glide-el="track"]';
function O3(r, o, s) {
  var f = {
    /**
     * Setup slider HTML nodes.
     *
     * @param {Glide} glide
     */
    mount: function() {
      this.root = r.selector, this.track = this.root.querySelector(C3), this.collectSlides();
    },
    /**
     * Collect slides
     */
    collectSlides: function() {
      this.slides = eb(this.wrapper.children).filter(function(c) {
        return !c.classList.contains(r.settings.classes.slide.clone);
      });
    }
  };
  return bn(f, "root", {
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
      Zv(c) && (c = document.querySelector(c)), c !== null ? f._r = c : nu("Root element must be a existing Html node");
    }
  }), bn(f, "track", {
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
  }), bn(f, "wrapper", {
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
function N3(r, o, s) {
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
  return bn(f, "value", {
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
      Hc(c) ? (c.before = al(c.before), c.after = al(c.after)) : c = al(c), f._v = c;
    }
  }), bn(f, "reductor", {
    /**
     * Gets reduction value caused by peek.
     *
     * @returns {Number}
     */
    get: function() {
      var c = f.value, p = r.settings.perView;
      return Hc(c) ? c.before / p + c.after / p : c * 2 / p;
    }
  }), s.on(["resize", "update"], function() {
    f.mount();
  }), f;
}
function z3(r, o, s) {
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
  return bn(f, "offset", {
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
      f._o = US(c) ? 0 : al(c);
    }
  }), bn(f, "translate", {
    /**
     * Gets a raw movement value.
     *
     * @return {Number}
     */
    get: function() {
      return o.Sizes.slideWidth * r.index;
    }
  }), bn(f, "value", {
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
function R3(r, o, s) {
  var f = {
    /**
     * Setups dimensions of slides.
     *
     * @return {Void}
     */
    setupSlides: function() {
      for (var c = "".concat(this.slideWidth, "px"), p = o.Html.slides, y = 0; y < p.length; y++)
        p[y].style.width = c;
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
  return bn(f, "length", {
    /**
     * Gets count number of the slides.
     *
     * @return {Number}
     */
    get: function() {
      return o.Html.slides.length;
    }
  }), bn(f, "width", {
    /**
     * Gets width value of the slider (visible area).
     *
     * @return {Number}
     */
    get: function() {
      return o.Html.track.offsetWidth;
    }
  }), bn(f, "wrapperSize", {
    /**
     * Gets size of the slides wrapper.
     *
     * @return {Number}
     */
    get: function() {
      return f.slideWidth * f.length + o.Gaps.grow + o.Clones.grow;
    }
  }), bn(f, "slideWidth", {
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
function D3(r, o, s) {
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
      p && (p.classList.add(c.slide.active), jS(p).forEach(function(y) {
        y.classList.remove(c.slide.active);
      }));
    },
    /**
     * Removes HTML classes applied at building.
     *
     * @return {Void}
     */
    removeClasses: function() {
      var c = r.settings.classes, p = c.type, y = c.slide;
      o.Html.root.classList.remove(p[r.settings.type]), o.Html.slides.forEach(function(T) {
        T.classList.remove(y.active);
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
function L3(r, o, s) {
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
      var c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], p = o.Html.slides, y = r.settings, T = y.perView, S = y.classes, x = y.cloningRatio;
      if (p.length > 0)
        for (var z = +!!r.settings.peek, O = T + z + Math.round(T / 2), M = p.slice(0, O).reverse(), $ = p.slice(O * -1), H = 0; H < Math.max(x, Math.floor(T / p.length)); H++) {
          for (var V = 0; V < M.length; V++) {
            var X = M[V].cloneNode(!0);
            X.classList.add(S.slide.clone), c.push(X);
          }
          for (var I = 0; I < $.length; I++) {
            var q = $[I].cloneNode(!0);
            q.classList.add(S.slide.clone), c.unshift(q);
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
      for (var c = this.items, p = o.Html, y = p.wrapper, T = p.slides, S = Math.floor(c.length / 2), x = c.slice(0, S).reverse(), z = c.slice(S * -1).reverse(), O = "".concat(o.Sizes.slideWidth, "px"), M = 0; M < z.length; M++)
        y.appendChild(z[M]);
      for (var $ = 0; $ < x.length; $++)
        y.insertBefore(x[$], T[0]);
      for (var H = 0; H < c.length; H++)
        c[H].style.width = O;
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
  return bn(f, "grow", {
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
var su = /* @__PURE__ */ (function() {
  function r() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Lh(this, r), this.listeners = o;
  }
  return Mh(r, [{
    key: "on",
    value: function(o, s, f) {
      var c = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
      Zv(o) && (o = [o]);
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
      Zv(o) && (o = [o]);
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
function M3(r, o, s) {
  var f = new su(), c = {
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
      f.on("resize", window, Uh(function() {
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
var U3 = ["ltr", "rtl"], j3 = {
  ">": "<",
  "<": ">",
  "=": "="
};
function H3(r, o, s) {
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
      return this.is("rtl") ? c.split(p).join(j3[p]) : c;
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
  return bn(f, "value", {
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
      U3.indexOf(c) > -1 ? f._v = c : nu("Direction value must be `ltr` or `rtl`");
    }
  }), s.on(["destroy", "update"], function() {
    f.removeClass();
  }), s.on("update", function() {
    f.mount();
  }), s.on(["build.before", "update"], function() {
    f.addClass();
  }), f;
}
function q3(r, o) {
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
function B3(r, o) {
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
function Y3(r, o) {
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
function V3(r, o) {
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
        return Hc(f) ? s - f.before : s - f;
      }
      return s;
    }
  };
}
function G3(r, o) {
  return {
    /**
     * Modifies passed translate value with index in the `focusAt` setting.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    modify: function(s) {
      var f = o.Gaps.value, c = o.Sizes.width, p = r.settings.focusAt, y = o.Sizes.slideWidth;
      return p === "center" ? s - (c / 2 - y / 2) : s - y * p - f * p;
    }
  };
}
function F3(r, o, s) {
  var f = [B3, Y3, V3, G3].concat(r._t, [q3]);
  return {
    /**
     * Piplines translate value with registered transformers.
     *
     * @param  {Number} translate
     * @return {Number}
     */
    mutate: function(c) {
      for (var p = 0; p < f.length; p++) {
        var y = f[p];
        Th(y) && Th(y().modify) ? c = y(r, o, s).modify(c) : nu("Transformer should be a function that returns an object with `modify()` method");
      }
      return c;
    }
  };
}
function Q3(r, o, s) {
  var f = {
    /**
     * Sets value of translate on HTML element.
     *
     * @param {Number} value
     * @return {Void}
     */
    set: function(c) {
      var p = F3(r, o).mutate(c), y = "translate3d(".concat(-1 * p, "px, 0px, 0px)");
      o.Html.wrapper.style.mozTransform = y, o.Html.wrapper.style.webkitTransform = y, o.Html.wrapper.style.transform = y;
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
      var c = o.Sizes.length, p = r.index, y = r.settings.perView;
      return o.Run.isOffset(">") || o.Run.isOffset("|>") ? c + (p - y) : (p + y) % c;
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
function X3(r, o, s) {
  var f = !1, c = {
    /**
     * Composes string of the CSS transition.
     *
     * @param {String} property
     * @return {String}
     */
    compose: function(p) {
      var y = r.settings;
      return f ? "".concat(p, " 0ms ").concat(y.animationTimingFunc) : "".concat(p, " ").concat(this.duration, "ms ").concat(y.animationTimingFunc);
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
  return bn(c, "duration", {
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
var HS = !1;
try {
  var N0 = Object.defineProperty({}, "passive", {
    get: function() {
      HS = !0;
    }
  });
  window.addEventListener("testPassive", null, N0), window.removeEventListener("testPassive", null, N0);
} catch {
}
var tb = HS, Jm = ["touchstart", "mousedown"], z0 = ["touchmove", "mousemove"], R0 = ["touchend", "touchcancel", "mouseup", "mouseleave"], D0 = ["mousedown", "mousemove", "mouseup", "mouseleave"];
function P3(r, o, s) {
  var f = new su(), c = 0, p = 0, y = 0, T = !1, S = tb ? {
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
    start: function(z) {
      if (!T && !r.disabled) {
        this.disable();
        var O = this.touches(z);
        c = null, p = al(O.pageX), y = al(O.pageY), this.bindSwipeMove(), this.bindSwipeEnd(), s.emit("swipe.start");
      }
    },
    /**
     * Handler for `swipemove` event. Calculates user's tap angle and distance.
     *
     * @param {Object} event
     */
    move: function(z) {
      if (!r.disabled) {
        var O = r.settings, M = O.touchAngle, $ = O.touchRatio, H = O.classes, V = this.touches(z), X = al(V.pageX) - p, I = al(V.pageY) - y, q = Math.abs(X << 2), fe = Math.abs(I << 2), ae = Math.sqrt(q + fe), le = Math.sqrt(fe);
        if (c = Math.asin(le / ae), c * 180 / Math.PI < M)
          z.stopPropagation(), o.Move.make(X * w3($)), o.Html.root.classList.add(H.dragging), s.emit("swipe.move");
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
    end: function(z) {
      if (!r.disabled) {
        var O = r.settings, M = O.perSwipe, $ = O.touchAngle, H = O.classes, V = this.touches(z), X = this.threshold(z), I = V.pageX - p, q = c * 180 / Math.PI;
        this.enable(), I > X && q < $ ? o.Run.make(o.Direction.resolve("".concat(M, "<"))) : I < -X && q < $ ? o.Run.make(o.Direction.resolve("".concat(M, ">"))) : o.Move.make(), o.Html.root.classList.remove(H.dragging), this.unbindSwipeMove(), this.unbindSwipeEnd(), s.emit("swipe.end");
      }
    },
    /**
     * Binds swipe's starting event.
     *
     * @return {Void}
     */
    bindSwipeStart: function() {
      var z = this, O = r.settings, M = O.swipeThreshold, $ = O.dragThreshold;
      M && f.on(Jm[0], o.Html.wrapper, function(H) {
        z.start(H);
      }, S), $ && f.on(Jm[1], o.Html.wrapper, function(H) {
        z.start(H);
      }, S);
    },
    /**
     * Unbinds swipe's starting event.
     *
     * @return {Void}
     */
    unbindSwipeStart: function() {
      f.off(Jm[0], o.Html.wrapper, S), f.off(Jm[1], o.Html.wrapper, S);
    },
    /**
     * Binds swipe's moving event.
     *
     * @return {Void}
     */
    bindSwipeMove: function() {
      var z = this;
      f.on(z0, o.Html.wrapper, Uh(function(O) {
        z.move(O);
      }, r.settings.throttle), S);
    },
    /**
     * Unbinds swipe's moving event.
     *
     * @return {Void}
     */
    unbindSwipeMove: function() {
      f.off(z0, o.Html.wrapper, S);
    },
    /**
     * Binds swipe's ending event.
     *
     * @return {Void}
     */
    bindSwipeEnd: function() {
      var z = this;
      f.on(R0, o.Html.wrapper, function(O) {
        z.end(O);
      });
    },
    /**
     * Unbinds swipe's ending event.
     *
     * @return {Void}
     */
    unbindSwipeEnd: function() {
      f.off(R0, o.Html.wrapper);
    },
    /**
     * Normalizes event touches points accorting to different types.
     *
     * @param {Object} event
     */
    touches: function(z) {
      return D0.indexOf(z.type) > -1 ? z : z.touches[0] || z.changedTouches[0];
    },
    /**
     * Gets value of minimum swipe distance settings based on event type.
     *
     * @return {Number}
     */
    threshold: function(z) {
      var O = r.settings;
      return D0.indexOf(z.type) > -1 ? O.dragThreshold : O.swipeThreshold;
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
function $3(r, o, s) {
  var f = new su(), c = {
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
function I3(r, o, s) {
  var f = new su(), c = !1, p = !1, y = {
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
  return bn(y, "items", {
    /**
     * Gets collection of the arrows HTML elements.
     *
     * @return {HTMLElement[]}
     */
    get: function() {
      return y._a;
    }
  }), s.on("swipe.move", function() {
    y.detach();
  }), s.on("swipe.end", function() {
    o.Transition.after(function() {
      y.attach();
    });
  }), s.on("destroy", function() {
    y.attach(), y.unbind(), f.destroy();
  }), y;
}
var K3 = '[data-glide-el="controls[nav]"]', Tb = '[data-glide-el^="controls"]', Z3 = "".concat(Tb, ' [data-glide-dir*="<"]'), W3 = "".concat(Tb, ' [data-glide-dir*=">"]');
function J3(r, o, s) {
  var f = new su(), c = tb ? {
    passive: !0
  } : !1, p = {
    /**
     * Inits arrows. Binds events listeners
     * to the arrows HTML elements.
     *
     * @return {Void}
     */
    mount: function() {
      this._n = o.Html.root.querySelectorAll(K3), this._c = o.Html.root.querySelectorAll(Tb), this._arrowControls = {
        previous: o.Html.root.querySelectorAll(Z3),
        next: o.Html.root.querySelectorAll(W3)
      }, this.addBindings();
    },
    /**
     * Sets active class to current slide.
     *
     * @return {Void}
     */
    setActive: function() {
      for (var y = 0; y < this._n.length; y++)
        this.addClass(this._n[y].children);
    },
    /**
     * Removes active class to current slide.
     *
     * @return {Void}
     */
    removeActive: function() {
      for (var y = 0; y < this._n.length; y++)
        this.removeClass(this._n[y].children);
    },
    /**
     * Toggles active class on items inside navigation.
     *
     * @param  {HTMLElement} controls
     * @return {Void}
     */
    addClass: function(y) {
      var T = r.settings, S = y[r.index];
      S && (S.classList.add(T.classes.nav.active), jS(S).forEach(function(x) {
        x.classList.remove(T.classes.nav.active);
      }));
    },
    /**
     * Removes active class from active control.
     *
     * @param  {HTMLElement} controls
     * @return {Void}
     */
    removeClass: function(y) {
      var T = y[r.index];
      T == null || T.classList.remove(r.settings.classes.nav.active);
    },
    /**
     * Calculates, removes or adds `Glide.settings.classes.disabledArrow` class on the control arrows
     */
    setArrowState: function() {
      if (!r.settings.rewind) {
        var y = p._arrowControls.next, T = p._arrowControls.previous;
        this.resetArrowState(y, T), r.index === 0 && this.disableArrow(T), r.index === o.Run.length && this.disableArrow(y);
      }
    },
    /**
     * Removes `Glide.settings.classes.disabledArrow` from given NodeList elements
     *
     * @param {NodeList[]} lists
     */
    resetArrowState: function() {
      for (var y = r.settings, T = arguments.length, S = new Array(T), x = 0; x < T; x++)
        S[x] = arguments[x];
      S.forEach(function(z) {
        eb(z).forEach(function(O) {
          O.classList.remove(y.classes.arrow.disabled);
        });
      });
    },
    /**
     * Adds `Glide.settings.classes.disabledArrow` to given NodeList elements
     *
     * @param {NodeList[]} lists
     */
    disableArrow: function() {
      for (var y = r.settings, T = arguments.length, S = new Array(T), x = 0; x < T; x++)
        S[x] = arguments[x];
      S.forEach(function(z) {
        eb(z).forEach(function(O) {
          O.classList.add(y.classes.arrow.disabled);
        });
      });
    },
    /**
     * Adds handles to the each group of controls.
     *
     * @return {Void}
     */
    addBindings: function() {
      for (var y = 0; y < this._c.length; y++)
        this.bind(this._c[y].children);
    },
    /**
     * Removes handles from the each group of controls.
     *
     * @return {Void}
     */
    removeBindings: function() {
      for (var y = 0; y < this._c.length; y++)
        this.unbind(this._c[y].children);
    },
    /**
     * Binds events to arrows HTML elements.
     *
     * @param {HTMLCollection} elements
     * @return {Void}
     */
    bind: function(y) {
      for (var T = 0; T < y.length; T++)
        f.on("click", y[T], this.click), f.on("touchstart", y[T], this.click, c);
    },
    /**
     * Unbinds events binded to the arrows HTML elements.
     *
     * @param {HTMLCollection} elements
     * @return {Void}
     */
    unbind: function(y) {
      for (var T = 0; T < y.length; T++)
        f.off(["click", "touchstart"], y[T]);
    },
    /**
     * Handles `click` event on the arrows HTML elements.
     * Moves slider in direction given via the
     * `data-glide-dir` attribute.
     *
     * @param {Object} event
     * @return {void}
     */
    click: function(y) {
      !tb && y.type === "touchstart" && y.preventDefault();
      var T = y.currentTarget.getAttribute("data-glide-dir");
      o.Run.make(o.Direction.resolve(T));
    }
  };
  return bn(p, "items", {
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
function eA(r, o, s) {
  var f = new su(), c = {
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
      var y = r.settings.perSwipe, T = {
        ArrowRight: ">",
        ArrowLeft: "<"
      };
      ["ArrowRight", "ArrowLeft"].includes(p.code) && o.Run.make(o.Direction.resolve("".concat(y).concat(T[p.code])));
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
function tA(r, o, s) {
  var f = new su(), c = {
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
      this._e && (this.enable(), r.settings.autoplay && US(this._i) && (this._i = setInterval(function() {
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
  return bn(c, "time", {
    /**
     * Gets time period value for the autoplay interval. Prioritizes
     * times in `data-glide-autoplay` attrubutes over options.
     *
     * @return {Number}
     */
    get: function() {
      var p = o.Html.slides[r.index].getAttribute("data-glide-autoplay");
      return al(p || r.settings.autoplay);
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
function L0(r) {
  return Hc(r) ? k3(r) : (nu("Breakpoints option must be an object"), {});
}
function nA(r, o, s) {
  var f = new su(), c = r.settings, p = L0(c.breakpoints), y = Object.assign({}, c), T = {
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
      return y;
    }
  };
  return Object.assign(c, T.match(p)), f.on("resize", window, Uh(function() {
    r.settings = Jv(c, T.match(p));
  }, r.settings.throttle)), s.on("update", function() {
    p = L0(p), y = Object.assign({}, c);
  }), s.on("destroy", function() {
    f.off("resize", window);
  }), T;
}
var aA = {
  // Required
  Html: O3,
  Translate: Q3,
  Transition: X3,
  Direction: H3,
  Peek: N3,
  Sizes: R3,
  Gaps: _3,
  Move: z3,
  Clones: L3,
  Resize: M3,
  Build: D3,
  Run: E3,
  // Optional
  Swipe: P3,
  Images: $3,
  Anchors: I3,
  Controls: J3,
  Keyboard: eA,
  Autoplay: tA,
  Breakpoints: nA
}, lA = /* @__PURE__ */ (function(r) {
  m3(s, r);
  var o = v3(s);
  function s() {
    return Lh(this, s), o.apply(this, arguments);
  }
  return Mh(s, [{
    key: "mount",
    value: function() {
      var f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return dh(jc(s.prototype), "mount", this).call(this, Object.assign({}, aA, f));
    }
  }]), s;
})(A3);
function rA(r) {
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
function iA(r = 1, o, s = !0, f) {
  const { perViewSm: c, perViewMd: p, perViewLg: y } = rA(r), T = s ? 24 : 0, S = s ? { before: 48, after: 48 } : 0, x = s ? { before: 124, after: 124 } : 0;
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
    perView: y,
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
        perView: y,
        peek: S
      },
      1260: {
        // BS4 xl
        perView: y,
        peek: S
      },
      1400: {
        perView: y,
        peek: x
      },
      1920: {
        perView: y,
        peek: x
      }
    }
  };
}
function oA(r, o, s) {
  const f = r.querySelector(".glide__arrow--prev"), c = r.querySelector(".glide__arrow--next"), p = r.querySelector(".glide__track"), y = r.querySelector(
    ".image-navigator-images"
  );
  if (!(f || c)) return;
  const T = ["slider-start", "slider-mid", "slider-end"], S = "glide__arrow--disabled";
  p == null || p.classList.remove(...T), y == null || y.classList.remove(...T), o === 0 ? (p == null || p.classList.add("slider-start"), y == null || y.classList.add("slider-start"), f == null || f.classList.add(S), f == null || f.setAttribute("aria-disabled", "true"), c == null || c.classList.remove(S), c == null || c.setAttribute("aria-disabled", "false")) : o >= s - 1 ? (p == null || p.classList.add("slider-end"), y == null || y.classList.add("slider-end"), f == null || f.classList.remove(S), f == null || f.setAttribute("aria-disabled", "false"), c == null || c.classList.add(S), c == null || c.setAttribute("aria-disabled", "true")) : (p == null || p.classList.add("slider-mid"), y == null || y.classList.add("slider-mid"), f == null || f.classList.remove(S), c == null || c.classList.remove(S), f == null || f.setAttribute("aria-disabled", "false"), c == null || c.setAttribute("aria-disabled", "false"));
}
function uA(r, o, s) {
  const f = r.querySelectorAll(".glide__slide"), c = o, p = Math.min(
    f.length - 1,
    o + s - 1
  );
  f.forEach((y, T) => {
    T < c || T > p ? (y.setAttribute("aria-hidden", "true"), y.setAttribute("tabindex", "-1"), y.setAttribute("inert", "")) : (y.setAttribute("aria-hidden", "false"), y.removeAttribute("tabindex"), y.removeAttribute("inert"));
  });
}
function sA({
  instanceName: r,
  perView: o,
  buttonCount: s,
  isFullWidth: f = !1,
  onItemClick: c,
  hasPeek: p = !0,
  isDraggable: y
}) {
  const T = iA(o, f, p, y), S = new lA(`#${r}`, T);
  let x = document.querySelector(`#${r}`);
  return x.addEventListener("keyup", (z) => {
    const O = z;
    O.keyCode === 39 ? S.go(">") : O.keyCode === 37 ? S.go("<") : O.keyCode === 13 && S.go(document.activeElement.dataset.glideDir);
  }), S.on("build.before", () => {
    x = document.querySelector(`#${r}`), x && x.classList.add("slider-start");
  }), S.on("move", () => {
    if (x = document.querySelector(`#${r}`), !x) return;
    const z = S.index;
    uA(x, z, o);
    const O = x.querySelector(".navigation-slider"), M = x.querySelector(".image-navigator-images");
    if (O && M) {
      const $ = O.querySelectorAll(
        ".bullet-image-container"
      ), H = O.clientWidth, V = 82, X = $[z], I = M.getBoundingClientRect().x, q = O.getBoundingClientRect().x - I, fe = X.getBoundingClientRect().x - I, ae = X.getBoundingClientRect().x + X.getBoundingClientRect().width - I;
      if (z === 0 || fe <= 0 + V)
        O.style.left = `${q - fe + V}px`;
      else if (ae >= H - V) {
        const le = ae - H;
        O.style.left = `${q - le - V}px`;
      }
    }
    oA(x, z, s), x.setAttribute("data-current-index", z), c && c(z);
  }), S.mount(), S;
}
function cA(r, o) {
  let s;
  const f = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  return s = r, f >= 992 && (o >= 2 && (s = r - 1), o >= 3 && (s = r - 2)), s;
}
const qS = ({
  perView: r = 1,
  width: o = "",
  maxWidth: s = "",
  // @ts-ignore
  carouselItems: f,
  cssClass: c = "",
  CustomNavComponent: p = void 0,
  role: y = "",
  ariaLabelledBy: T = "",
  isFullWidth: S = !1,
  removeSideBackground: x = !1,
  hasNavButtons: z = !0,
  hasPositionIndicators: O = !0,
  imageAutoSize: M = !0,
  onItemClick: $ = () => null,
  hasPeek: H = !0,
  isDraggable: V = !0,
  hasShadow: X = !0,
  bgColor: I = ""
}) => {
  const q = `glide-${Math.ceil(Math.random() * 1e4)}`, fe = cA(f.length, r);
  return wi(() => {
    sA({
      instanceName: q,
      perView: r,
      buttonCount: fe,
      isFullWidth: S,
      onItemClick: $,
      hasPeek: H,
      isDraggable: V
    });
  }, [
    q,
    r,
    fe,
    S,
    $,
    H,
    V
  ]), /* @__PURE__ */ Y.jsxs(
    "div",
    {
      role: y,
      "aria-labelledby": T,
      className: `glide ${c} ${I}`,
      id: q,
      style: { width: o, maxWidth: s },
      "data-remove-side-background": x,
      "data-image-auto-size": M,
      "data-has-shadow": X,
      children: [
        /* @__PURE__ */ Y.jsx("div", { className: "glide__track", "data-glide-el": "track", children: /* @__PURE__ */ Y.jsx(MS, { carouselItems: f }) }),
        p ? (
          // @ts-ignore
          /* @__PURE__ */ Y.jsx(p, { instanceName: q })
        ) : /* @__PURE__ */ Y.jsxs(Y.Fragment, { children: [
          O && /* @__PURE__ */ Y.jsx(NS, { buttonCount: fe }),
          z && /* @__PURE__ */ Y.jsx(LS, {})
        ] })
      ]
    }
  );
};
qS.propTypes = {
  perView: v.number,
  width: v.string,
  maxWidth: v.string,
  carouselItems: v.arrayOf(v.object).isRequired,
  cssClass: v.string,
  CustomNavComponent: v.func,
  role: v.string,
  ariaLabelledBy: v.string,
  onItemClick: v.func,
  isFullWidth: v.bool,
  removeSideBackground: v.bool,
  hasNavButtons: v.bool,
  hasPositionIndicators: v.bool,
  imageAutoSize: v.bool,
  bgColor: v.string,
  hasPeek: v.bool,
  isDraggable: v.bool,
  hasShadow: v.bool
};
const fA = ({
  id: r,
  imageSource: o,
  imageAltText: s,
  title: f,
  content: c,
  eventLocation: p,
  eventTime: y,
  buttons: T,
  linkLabel: S,
  linkUrl: x,
  tags: z
}, O, M, $) => {
  var H, V;
  return {
    // @ts-ignore
    id: r,
    item: /* @__PURE__ */ Y.jsx(
      Jo,
      {
        type: O,
        horizontal: M,
        image: o,
        imageAltText: s,
        title: f,
        body: c,
        eventFormat: $,
        eventLocation: p,
        eventTime: y,
        buttons: T,
        linkLabel: S,
        linkUrl: x || ((H = T == null ? void 0 : T[0]) == null ? void 0 : H.href),
        tags: z,
        cardLink: x || ((V = T == null ? void 0 : T[0]) == null ? void 0 : V.href)
      }
    )
  };
}, BS = ({
  perView: r = 0,
  cardItems: o = [],
  cardType: s = "default",
  cardEventFormat: f = "stack",
  cardHorizontal: c = !1,
  width: p = void 0,
  maxWidth: y = void 0,
  imageAutoSize: T = !0,
  bgColor: S = ""
}) => {
  const x = parseInt(`${r}`, 10), [z, O] = eu(x), M = 1024, $ = 768;
  wi(() => {
    const X = () => {
      const I = window.innerWidth;
      let q;
      switch (x) {
        case 3:
          I > M ? q = 3 : I > $ ? q = 2 : q = 1;
          break;
        case 2:
          q = I < $ ? 1 : 2;
          break;
        default:
          q = 1;
          break;
      }
      O(q);
    };
    return X(), window.addEventListener("resize", X), () => window.removeEventListener("resize", X);
  }, [x]);
  const H = o.map(
    (X) => fA(X, s, c, f)
  ), V = o.length > z;
  return /* @__PURE__ */ Y.jsx(
    qS,
    {
      perView: +z,
      maxWidth: y,
      width: p,
      carouselItems: H,
      cssClass: "aligned-carousel",
      imageAutoSize: T,
      removeSideBackground: o.length <= z,
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
BS.propTypes = {
  perView: v.string.isRequired,
  cardItems: v.arrayOf(
    v.shape({
      title: v.string.isRequired,
      content: v.string,
      eventLocation: v.string,
      eventTime: v.string,
      image: v.string,
      imageAltText: v.string,
      buttons: Jo.propTypes.buttons,
      linkLabel: v.string,
      linkUrl: v.string,
      tags: Jo.propTypes.tags
    })
  ).isRequired,
  cardType: Jo.propTypes.type,
  cardEventFormat: Jo.propTypes.eventFormat,
  cardHorizontal: Jo.propTypes.horizontal,
  width: v.string,
  maxWidth: v.string,
  imageAutoSize: v.bool,
  bgColor: v.string
};
v.number.isRequired, v.arrayOf(v.object).isRequired, v.string, v.string, v.bool, v.string;
const kh = {
  imageItems: v.arrayOf(
    v.shape({
      id: v.number,
      imageSource: v.string,
      thumbnailSource: v.string,
      imageAltText: v.string,
      content: v.oneOfType([v.string, v.element])
    })
  ),
  hasContent: v.bool
};
v.string, kh.imageItems, kh.hasContent;
kh.imageItems.isRequired, kh.hasContent, v.string, v.string, v.bool;
v.arrayOf(
  v.shape({
    title: v.string,
    content: v.string,
    cite: v.shape({
      name: v.string,
      description: v.string
    })
  })
).isRequired, v.shape({
  containerCssClass: v.arrayOf(v.string),
  titleCssClass: v.arrayOf(v.string),
  contentCssClass: v.arrayOf(v.string)
}), v.string, v.string, v.bool, v.bool, v.bool;
var gv = { exports: {} }, Am = {}, M0 = { exports: {} }, U0 = {}, j0;
function dA() {
  return j0 || (j0 = 1, (function(r) {
    function o(B, U) {
      var G = B.length;
      B.push(U);
      e: for (; 0 < G; ) {
        var ue = G - 1 >>> 1, ie = B[ue];
        if (0 < c(ie, U))
          B[ue] = U, B[G] = ie, G = ue;
        else break e;
      }
    }
    function s(B) {
      return B.length === 0 ? null : B[0];
    }
    function f(B) {
      if (B.length === 0) return null;
      var U = B[0], G = B.pop();
      if (G !== U) {
        B[0] = G;
        e: for (var ue = 0, ie = B.length, Ye = ie >>> 1; ue < Ye; ) {
          var Se = 2 * (ue + 1) - 1, se = B[Se], Z = Se + 1, be = B[Z];
          if (0 > c(se, G))
            Z < ie && 0 > c(be, se) ? (B[ue] = be, B[Z] = G, ue = Z) : (B[ue] = se, B[Se] = G, ue = Se);
          else if (Z < ie && 0 > c(be, G))
            B[ue] = be, B[Z] = G, ue = Z;
          else break e;
        }
      }
      return U;
    }
    function c(B, U) {
      var G = B.sortIndex - U.sortIndex;
      return G !== 0 ? G : B.id - U.id;
    }
    if (r.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var p = performance;
      r.unstable_now = function() {
        return p.now();
      };
    } else {
      var y = Date, T = y.now();
      r.unstable_now = function() {
        return y.now() - T;
      };
    }
    var S = [], x = [], z = 1, O = null, M = 3, $ = !1, H = !1, V = !1, X = !1, I = typeof setTimeout == "function" ? setTimeout : null, q = typeof clearTimeout == "function" ? clearTimeout : null, fe = typeof setImmediate < "u" ? setImmediate : null;
    function ae(B) {
      for (var U = s(x); U !== null; ) {
        if (U.callback === null) f(x);
        else if (U.startTime <= B)
          f(x), U.sortIndex = U.expirationTime, o(S, U);
        else break;
        U = s(x);
      }
    }
    function le(B) {
      if (V = !1, ae(B), !H)
        if (s(S) !== null)
          H = !0, K || (K = !0, je());
        else {
          var U = s(x);
          U !== null && Fe(le, U.startTime - B);
        }
    }
    var K = !1, F = -1, J = 5, Ae = -1;
    function Qe() {
      return X ? !0 : !(r.unstable_now() - Ae < J);
    }
    function ve() {
      if (X = !1, K) {
        var B = r.unstable_now();
        Ae = B;
        var U = !0;
        try {
          e: {
            H = !1, V && (V = !1, q(F), F = -1), $ = !0;
            var G = M;
            try {
              t: {
                for (ae(B), O = s(S); O !== null && !(O.expirationTime > B && Qe()); ) {
                  var ue = O.callback;
                  if (typeof ue == "function") {
                    O.callback = null, M = O.priorityLevel;
                    var ie = ue(
                      O.expirationTime <= B
                    );
                    if (B = r.unstable_now(), typeof ie == "function") {
                      O.callback = ie, ae(B), U = !0;
                      break t;
                    }
                    O === s(S) && f(S), ae(B);
                  } else f(S);
                  O = s(S);
                }
                if (O !== null) U = !0;
                else {
                  var Ye = s(x);
                  Ye !== null && Fe(
                    le,
                    Ye.startTime - B
                  ), U = !1;
                }
              }
              break e;
            } finally {
              O = null, M = G, $ = !1;
            }
            U = void 0;
          }
        } finally {
          U ? je() : K = !1;
        }
      }
    }
    var je;
    if (typeof fe == "function")
      je = function() {
        fe(ve);
      };
    else if (typeof MessageChannel < "u") {
      var xe = new MessageChannel(), yt = xe.port2;
      xe.port1.onmessage = ve, je = function() {
        yt.postMessage(null);
      };
    } else
      je = function() {
        I(ve, 0);
      };
    function Fe(B, U) {
      F = I(function() {
        B(r.unstable_now());
      }, U);
    }
    r.unstable_IdlePriority = 5, r.unstable_ImmediatePriority = 1, r.unstable_LowPriority = 4, r.unstable_NormalPriority = 3, r.unstable_Profiling = null, r.unstable_UserBlockingPriority = 2, r.unstable_cancelCallback = function(B) {
      B.callback = null;
    }, r.unstable_forceFrameRate = function(B) {
      0 > B || 125 < B ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : J = 0 < B ? Math.floor(1e3 / B) : 5;
    }, r.unstable_getCurrentPriorityLevel = function() {
      return M;
    }, r.unstable_next = function(B) {
      switch (M) {
        case 1:
        case 2:
        case 3:
          var U = 3;
          break;
        default:
          U = M;
      }
      var G = M;
      M = U;
      try {
        return B();
      } finally {
        M = G;
      }
    }, r.unstable_requestPaint = function() {
      X = !0;
    }, r.unstable_runWithPriority = function(B, U) {
      switch (B) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          B = 3;
      }
      var G = M;
      M = B;
      try {
        return U();
      } finally {
        M = G;
      }
    }, r.unstable_scheduleCallback = function(B, U, G) {
      var ue = r.unstable_now();
      switch (typeof G == "object" && G !== null ? (G = G.delay, G = typeof G == "number" && 0 < G ? ue + G : ue) : G = ue, B) {
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
      return ie = G + ie, B = {
        id: z++,
        callback: U,
        priorityLevel: B,
        startTime: G,
        expirationTime: ie,
        sortIndex: -1
      }, G > ue ? (B.sortIndex = G, o(x, B), s(S) === null && B === s(x) && (V ? (q(F), F = -1) : V = !0, Fe(le, G - ue))) : (B.sortIndex = ie, o(S, B), H || $ || (H = !0, K || (K = !0, je()))), B;
    }, r.unstable_shouldYield = Qe, r.unstable_wrapCallback = function(B) {
      var U = M;
      return function() {
        var G = M;
        M = U;
        try {
          return B.apply(this, arguments);
        } finally {
          M = G;
        }
      };
    };
  })(U0)), U0;
}
var H0;
function pA() {
  return H0 || (H0 = 1, M0.exports = dA()), M0.exports;
}
var q0;
function mA() {
  if (q0) return Am;
  q0 = 1;
  var r = { env: { NODE_ENV: "production" } }, o = pA(), s = St, f = R1;
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
  function y(e) {
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
    if (y(e) !== e)
      throw Error(c(188));
  }
  function z(e) {
    var t = e.alternate;
    if (!t) {
      if (t = y(e), t === null) throw Error(c(188));
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
  function O(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = O(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var M = Object.assign, $ = Symbol.for("react.element"), H = Symbol.for("react.transitional.element"), V = Symbol.for("react.portal"), X = Symbol.for("react.fragment"), I = Symbol.for("react.strict_mode"), q = Symbol.for("react.profiler"), fe = Symbol.for("react.consumer"), ae = Symbol.for("react.context"), le = Symbol.for("react.forward_ref"), K = Symbol.for("react.suspense"), F = Symbol.for("react.suspense_list"), J = Symbol.for("react.memo"), Ae = Symbol.for("react.lazy"), Qe = Symbol.for("react.activity"), ve = Symbol.for("react.memo_cache_sentinel"), je = Symbol.iterator;
  function xe(e) {
    return e === null || typeof e != "object" ? null : (e = je && e[je] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var yt = Symbol.for("react.client.reference");
  function Fe(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === yt ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case X:
        return "Fragment";
      case q:
        return "Profiler";
      case I:
        return "StrictMode";
      case K:
        return "Suspense";
      case F:
        return "SuspenseList";
      case Qe:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case V:
          return "Portal";
        case ae:
          return e.displayName || "Context";
        case fe:
          return (e._context.displayName || "Context") + ".Consumer";
        case le:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case J:
          return t = e.displayName || null, t !== null ? t : Fe(e.type) || "Memo";
        case Ae:
          t = e._payload, e = e._init;
          try {
            return Fe(e(t));
          } catch {
          }
      }
    return null;
  }
  var B = Array.isArray, U = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, G = f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ue = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ie = [], Ye = -1;
  function Se(e) {
    return { current: e };
  }
  function se(e) {
    0 > Ye || (e.current = ie[Ye], ie[Ye] = null, Ye--);
  }
  function Z(e, t) {
    Ye++, ie[Ye] = e.current, e.current = t;
  }
  var be = Se(null), ce = Se(null), lt = Se(null), Nn = Se(null);
  function kn(e, t) {
    switch (Z(lt, t), Z(ce, e), Z(be, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Yp(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = Yp(t), e = Vp(t, e);
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
    se(be), Z(be, e);
  }
  function st() {
    se(be), se(ce), se(lt);
  }
  function Ar(e) {
    e.memoizedState !== null && Z(Nn, e);
    var t = be.current, n = Vp(t, e.type);
    t !== n && (Z(ce, e), Z(be, n));
  }
  function _l(e) {
    ce.current === e && (se(be), se(ce)), Nn.current === e && (se(Nn), pi._currentValue = ue);
  }
  var Cl, Ai;
  function zn(e) {
    if (Cl === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Cl = t && t[1] || "", Ai = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Cl + e + Ai;
  }
  var Ce = !1;
  function ll(e, t) {
    if (!e || Ce) return "";
    Ce = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var L = function() {
                throw Error();
              };
              if (Object.defineProperty(L.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(L, []);
                } catch (C) {
                  var _ = C;
                }
                Reflect.construct(e, [], L);
              } else {
                try {
                  L.call();
                } catch (C) {
                  _ = C;
                }
                e.call(L.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (C) {
                _ = C;
              }
              (L = e()) && typeof L.catch == "function" && L.catch(function() {
              });
            }
          } catch (C) {
            if (C && _ && typeof C.stack == "string")
              return [C.stack, _.stack];
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
        var g = u.split(`
`), E = d.split(`
`);
        for (l = a = 0; a < g.length && !g[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; l < E.length && !E[l].includes(
          "DetermineComponentFrameRoot"
        ); )
          l++;
        if (a === g.length || l === E.length)
          for (a = g.length - 1, l = E.length - 1; 1 <= a && 0 <= l && g[a] !== E[l]; )
            l--;
        for (; 1 <= a && 0 <= l; a--, l--)
          if (g[a] !== E[l]) {
            if (a !== 1 || l !== 1)
              do
                if (a--, l--, 0 > l || g[a] !== E[l]) {
                  var N = `
` + g[a].replace(" at new ", " at ");
                  return e.displayName && N.includes("<anonymous>") && (N = N.replace("<anonymous>", e.displayName)), N;
                }
              while (1 <= a && 0 <= l);
            break;
          }
      }
    } finally {
      Ce = !1, Error.prepareStackTrace = n;
    }
    return (n = e ? e.displayName || e.name : "") ? zn(n) : "";
  }
  function De(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return zn(e.type);
      case 16:
        return zn("Lazy");
      case 13:
        return e.child !== t && t !== null ? zn("Suspense Fallback") : zn("Suspense");
      case 19:
        return zn("SuspenseList");
      case 0:
      case 15:
        return ll(e.type, !1);
      case 11:
        return ll(e.type.render, !1);
      case 1:
        return ll(e.type, !0);
      case 31:
        return zn("Activity");
      default:
        return "";
    }
  }
  function Ol(e) {
    try {
      var t = "", n = null;
      do
        t += De(e, n), n = e, e = e.return;
      while (e);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var _t = Object.prototype.hasOwnProperty, Fn = o.unstable_scheduleCallback, Nl = o.unstable_cancelCallback, Rn = o.unstable_shouldYield, Ei = o.unstable_requestPaint, ct = o.unstable_now, _i = o.unstable_getCurrentPriorityLevel, zl = o.unstable_ImmediatePriority, en = o.unstable_UserBlockingPriority, tn = o.unstable_NormalPriority, Qn = o.unstable_LowPriority, Rl = o.unstable_IdlePriority, Dl = o.log, Ll = o.unstable_setDisableYieldValue, Xn = null, $e = null;
  function Bt(e) {
    if (typeof Dl == "function" && Ll(e), $e && typeof $e.setStrictMode == "function")
      try {
        $e.setStrictMode(Xn, e);
      } catch {
      }
  }
  var rt = Math.clz32 ? Math.clz32 : Ni, Ci = Math.log, Oi = Math.LN2;
  function Ni(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Ci(e) / Oi | 0) | 0;
  }
  var Sa = 256, wa = 262144, nn = 4194304;
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
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var l = 0, i = e.suspendedLanes, u = e.pingedLanes;
    e = e.warmLanes;
    var d = a & 134217727;
    return d !== 0 ? (a = d & ~i, a !== 0 ? l = Ct(a) : (u &= d, u !== 0 ? l = Ct(u) : n || (n = d & ~e, n !== 0 && (l = Ct(n))))) : (d = a & ~i, d !== 0 ? l = Ct(d) : u !== 0 ? l = Ct(u) : n || (n = a & ~e, n !== 0 && (l = Ct(n)))), l === 0 ? 0 : t !== 0 && t !== l && (t & i) === 0 && (i = l & -l, n = t & -t, i >= n || i === 32 && (n & 4194048) !== 0) ? t : l;
  }
  function Ta(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function zi(e, t) {
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
    var e = nn;
    return nn <<= 1, (nn & 62914560) === 0 && (nn = 4194304), e;
  }
  function Ml(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function ka(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function Ul(e, t, n, a, l, i) {
    var u = e.pendingLanes;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
    var d = e.entanglements, g = e.expirationTimes, E = e.hiddenUpdates;
    for (n = u & ~n; 0 < n; ) {
      var N = 31 - rt(n), L = 1 << N;
      d[N] = 0, g[N] = -1;
      var _ = E[N];
      if (_ !== null)
        for (E[N] = null, N = 0; N < _.length; N++) {
          var C = _[N];
          C !== null && (C.lane &= -536870913);
        }
      n &= ~L;
    }
    a !== 0 && rl(e, a, 0), i !== 0 && l === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(u & ~t));
  }
  function rl(e, t, n) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var a = 31 - rt(t);
    e.entangledLanes |= t, e.entanglements[a] = e.entanglements[a] | 1073741824 | n & 261930;
  }
  function Yt(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var a = 31 - rt(n), l = 1 << a;
      l & t | e[a] & t && (e[a] |= t), n &= ~l;
    }
  }
  function Pn(e, t) {
    var n = t & -t;
    return n = (n & 42) !== 0 ? 1 : il(n), (n & (e.suspendedLanes | t)) !== 0 ? 0 : n;
  }
  function il(e) {
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
  function ol(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Ri() {
    var e = G.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : fm(e.type));
  }
  function _r(e, t) {
    var n = G.p;
    try {
      return G.p = e, t();
    } finally {
      G.p = n;
    }
  }
  var ln = Math.random().toString(36).slice(2), Ie = "__reactFiber$" + ln, it = "__reactProps$" + ln, xa = "__reactContainer$" + ln, $n = "__reactEvents$" + ln, cu = "__reactListeners$" + ln, fu = "__reactHandles$" + ln, He = "__reactResources$" + ln, rn = "__reactMarker$" + ln;
  function Cr(e) {
    delete e[Ie], delete e[it], delete e[$n], delete e[cu], delete e[fu];
  }
  function In(e) {
    var t = e[Ie];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[xa] || n[Ie]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
          for (e = Ip(e); e !== null; ) {
            if (n = e[Ie]) return n;
            e = Ip(e);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Dn(e) {
    if (e = e[Ie] || e[xa]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function Aa(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(c(33));
  }
  function Kn(e) {
    var t = e[He];
    return t || (t = e[He] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Ke(e) {
    e[rn] = !0;
  }
  var Di = /* @__PURE__ */ new Set(), Li = {};
  function Zn(e, t) {
    Et(e, t), Et(e + "Capture", t);
  }
  function Et(e, t) {
    for (Li[e] = t, e = 0; e < t.length; e++)
      Di.add(t[e]);
  }
  var Mi = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), jl = {}, Wn = {};
  function Ui(e) {
    return _t.call(Wn, e) ? !0 : _t.call(jl, e) ? !1 : Mi.test(e) ? Wn[e] = !0 : (jl[e] = !0, !1);
  }
  function Ea(e, t, n) {
    if (Ui(t))
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
  function _a(e, t, n) {
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
  function Vt(e, t, n, a) {
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
  function Ot(e) {
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
  function Or(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function du(e, t, n) {
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
  function Nr(e) {
    if (!e._valueTracker) {
      var t = Or(e) ? "checked" : "value";
      e._valueTracker = du(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function ji(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), a = "";
    return e && (a = Or(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== n ? (t.setValue(e), !0) : !1;
  }
  function Hl(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Hi = /[\n"\\]/g;
  function Ut(e) {
    return e.replace(
      Hi,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function ql(e, t, n, a, l, i, u, d) {
    e.name = "", u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" ? e.type = u : e.removeAttribute("type"), t != null ? u === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Ot(t)) : e.value !== "" + Ot(t) && (e.value = "" + Ot(t)) : u !== "submit" && u !== "reset" || e.removeAttribute("value"), t != null ? Ca(e, u, Ot(t)) : n != null ? Ca(e, u, Ot(n)) : a != null && e.removeAttribute("value"), l == null && i != null && (e.defaultChecked = !!i), l != null && (e.checked = l && typeof l != "function" && typeof l != "symbol"), d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? e.name = "" + Ot(d) : e.removeAttribute("name");
  }
  function Bl(e, t, n, a, l, i, u, d) {
    if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (e.type = i), t != null || n != null) {
      if (!(i !== "submit" && i !== "reset" || t != null)) {
        Nr(e);
        return;
      }
      n = n != null ? "" + Ot(n) : "", t = t != null ? "" + Ot(t) : n, d || t === e.value || (e.value = t), e.defaultValue = t;
    }
    a = a ?? l, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = d ? e.checked : !!a, e.defaultChecked = !!a, u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.name = u), Nr(e);
  }
  function Ca(e, t, n) {
    t === "number" && Hl(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
  }
  function Ln(e, t, n, a) {
    if (e = e.options, t) {
      t = {};
      for (var l = 0; l < n.length; l++)
        t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && a && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + Ot(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          e[l].selected = !0, a && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function zr(e, t, n) {
    if (t != null && (t = "" + Ot(t), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + Ot(n) : "";
  }
  function ul(e, t, n, a) {
    if (t == null) {
      if (a != null) {
        if (n != null) throw Error(c(92));
        if (B(a)) {
          if (1 < a.length) throw Error(c(93));
          a = a[0];
        }
        n = a;
      }
      n == null && (n = ""), t = n;
    }
    n = Ot(t), e.defaultValue = n, a = e.textContent, a === n && a !== "" && a !== null && (e.value = a), Nr(e);
  }
  function Tt(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var sl = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Nt(e, t, n) {
    var a = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, n) : typeof n != "number" || n === 0 || sl.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
  }
  function qi(e, t, n) {
    if (t != null && typeof t != "object")
      throw Error(c(62));
    if (e = e.style, n != null) {
      for (var a in n)
        !n.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "");
      for (var l in t)
        a = t[l], t.hasOwnProperty(l) && n[l] !== a && Nt(e, l, a);
    } else
      for (var i in t)
        t.hasOwnProperty(i) && Nt(e, i, t[i]);
  }
  function Oa(e) {
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
  var pu = /* @__PURE__ */ new Map([
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
  ]), Bi = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function xn(e) {
    return Bi.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function Gt() {
  }
  var Yl = null;
  function Rr(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Jn = null, Na = null;
  function Yi(e) {
    var t = Dn(e);
    if (t && (e = t.stateNode)) {
      var n = e[it] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (ql(
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
              'input[name="' + Ut(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < n.length; t++) {
              var a = n[t];
              if (a !== e && a.form === e.form) {
                var l = a[it] || null;
                if (!l) throw Error(c(90));
                ql(
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
              a = n[t], a.form === e.form && ji(a);
          }
          break e;
        case "textarea":
          zr(e, n.value, n.defaultValue);
          break e;
        case "select":
          t = n.value, t != null && Ln(e, !!n.multiple, t, !1);
      }
    }
  }
  var Vl = !1;
  function Gl(e, t, n) {
    if (Vl) return e(t, n);
    Vl = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (Vl = !1, (Jn !== null || Na !== null) && (Ao(), Jn && (t = Jn, e = Na, Na = Jn = null, Yi(t), e)))
        for (t = 0; t < e.length; t++) Yi(e[t]);
    }
  }
  function An(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var a = n[it] || null;
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
  var Ft = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), h = !1;
  if (Ft)
    try {
      var m = {};
      Object.defineProperty(m, "passive", {
        get: function() {
          h = !0;
        }
      }), window.addEventListener("test", m, m), window.removeEventListener("test", m, m);
    } catch {
      h = !1;
    }
  var k = null, D = null, j = null;
  function ee() {
    if (j) return j;
    var e, t = D, n = t.length, a, l = "value" in k ? k.value : k.textContent, i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var u = n - e;
    for (a = 1; a <= u && t[n - a] === l[i - a]; a++) ;
    return j = l.slice(e, 1 < a ? 1 - a : void 0);
  }
  function ne(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function ge() {
    return !0;
  }
  function gt() {
    return !1;
  }
  function Le(e) {
    function t(n, a, l, i, u) {
      this._reactName = n, this._targetInst = l, this.type = a, this.nativeEvent = i, this.target = u, this.currentTarget = null;
      for (var d in e)
        e.hasOwnProperty(d) && (n = e[d], this[d] = n ? n(i) : i[d]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? ge : gt, this.isPropagationStopped = gt, this;
    }
    return M(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = ge);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = ge);
      },
      persist: function() {
      },
      isPersistent: ge
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
  }, ft = Le(Be), ut = M({}, Be, { view: 0, detail: 0 }), Mn = Le(ut), Ti, mu, Dr, Vi = M({}, ut, {
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
    getModifierState: gu,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Dr && (Dr && e.type === "mousemove" ? (Ti = e.screenX - Dr.screenX, mu = e.screenY - Dr.screenY) : mu = Ti = 0, Dr = e), Ti);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : mu;
    }
  }), Gc = Le(Vi), Qh = M({}, Vi, { dataTransfer: 0 }), Xh = Le(Qh), Ph = M({}, ut, { relatedTarget: 0 }), hu = Le(Ph), $h = M({}, Be, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Ih = Le($h), Kh = M({}, Be, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Zh = Le(Kh), Wh = M({}, Be, { data: 0 }), Fc = Le(Wh), Jh = {
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
  }, eg = {
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
  }, tg = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function ng(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = tg[e]) ? !!t[e] : !1;
  }
  function gu() {
    return ng;
  }
  var ag = M({}, ut, {
    key: function(e) {
      if (e.key) {
        var t = Jh[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = ne(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? eg[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: gu,
    charCode: function(e) {
      return e.type === "keypress" ? ne(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? ne(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), lg = Le(ag), rg = M({}, Vi, {
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
  }), Qc = Le(rg), ig = M({}, ut, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: gu
  }), og = Le(ig), ug = M({}, Be, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), sg = Le(ug), cg = M({}, Vi, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), fg = Le(cg), dg = M({}, Be, {
    newState: 0,
    oldState: 0
  }), pg = Le(dg), mg = [9, 13, 27, 32], yu = Ft && "CompositionEvent" in window, Lr = null;
  Ft && "documentMode" in document && (Lr = document.documentMode);
  var hg = Ft && "TextEvent" in window && !Lr, Xc = Ft && (!yu || Lr && 8 < Lr && 11 >= Lr), Pc = " ", $c = !1;
  function Ic(e, t) {
    switch (e) {
      case "keyup":
        return mg.indexOf(t.keyCode) !== -1;
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
  function Kc(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Fl = !1;
  function gg(e, t) {
    switch (e) {
      case "compositionend":
        return Kc(t);
      case "keypress":
        return t.which !== 32 ? null : ($c = !0, Pc);
      case "textInput":
        return e = t.data, e === Pc && $c ? null : e;
      default:
        return null;
    }
  }
  function yg(e, t) {
    if (Fl)
      return e === "compositionend" || !yu && Ic(e, t) ? (e = ee(), j = D = k = null, Fl = !1, e) : null;
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
        return Xc && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var vg = {
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
  function Zc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!vg[e.type] : t === "textarea";
  }
  function Wc(e, t, n, a) {
    Jn ? Na ? Na.push(a) : Na = [a] : Jn = a, t = Ro(t, "onChange"), 0 < t.length && (n = new ft(
      "onChange",
      "change",
      null,
      n,
      a
    ), e.push({ event: n, listeners: t }));
  }
  var Mr = null, Ur = null;
  function bg(e) {
    Mp(e, 0);
  }
  function Gi(e) {
    var t = Aa(e);
    if (ji(t)) return e;
  }
  function Jc(e, t) {
    if (e === "change") return t;
  }
  var ef = !1;
  if (Ft) {
    var vu;
    if (Ft) {
      var bu = "oninput" in document;
      if (!bu) {
        var tf = document.createElement("div");
        tf.setAttribute("oninput", "return;"), bu = typeof tf.oninput == "function";
      }
      vu = bu;
    } else vu = !1;
    ef = vu && (!document.documentMode || 9 < document.documentMode);
  }
  function nf() {
    Mr && (Mr.detachEvent("onpropertychange", af), Ur = Mr = null);
  }
  function af(e) {
    if (e.propertyName === "value" && Gi(Ur)) {
      var t = [];
      Wc(
        t,
        Ur,
        e,
        Rr(e)
      ), Gl(bg, t);
    }
  }
  function Sg(e, t, n) {
    e === "focusin" ? (nf(), Mr = t, Ur = n, Mr.attachEvent("onpropertychange", af)) : e === "focusout" && nf();
  }
  function wg(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Gi(Ur);
  }
  function Tg(e, t) {
    if (e === "click") return Gi(t);
  }
  function kg(e, t) {
    if (e === "input" || e === "change")
      return Gi(t);
  }
  function xg(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Qt = typeof Object.is == "function" ? Object.is : xg;
  function jr(e, t) {
    if (Qt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), a = Object.keys(t);
    if (n.length !== a.length) return !1;
    for (a = 0; a < n.length; a++) {
      var l = n[a];
      if (!_t.call(t, l) || !Qt(e[l], t[l]))
        return !1;
    }
    return !0;
  }
  function lf(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function rf(e, t) {
    var n = lf(e);
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
      n = lf(n);
    }
  }
  function of(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? of(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function uf(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = Hl(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Hl(e.document);
    }
    return t;
  }
  function Su(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var Ag = Ft && "documentMode" in document && 11 >= document.documentMode, Ql = null, wu = null, Hr = null, Tu = !1;
  function sf(e, t, n) {
    var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Tu || Ql == null || Ql !== Hl(a) || (a = Ql, "selectionStart" in a && Su(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Hr && jr(Hr, a) || (Hr = a, a = Ro(wu, "onSelect"), 0 < a.length && (t = new ft(
      "onSelect",
      "select",
      null,
      t,
      n
    ), e.push({ event: t, listeners: a }), t.target = Ql)));
  }
  function cl(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Xl = {
    animationend: cl("Animation", "AnimationEnd"),
    animationiteration: cl("Animation", "AnimationIteration"),
    animationstart: cl("Animation", "AnimationStart"),
    transitionrun: cl("Transition", "TransitionRun"),
    transitionstart: cl("Transition", "TransitionStart"),
    transitioncancel: cl("Transition", "TransitionCancel"),
    transitionend: cl("Transition", "TransitionEnd")
  }, ku = {}, cf = {};
  Ft && (cf = document.createElement("div").style, "AnimationEvent" in window || (delete Xl.animationend.animation, delete Xl.animationiteration.animation, delete Xl.animationstart.animation), "TransitionEvent" in window || delete Xl.transitionend.transition);
  function fl(e) {
    if (ku[e]) return ku[e];
    if (!Xl[e]) return e;
    var t = Xl[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in cf)
        return ku[e] = t[n];
    return e;
  }
  var ff = fl("animationend"), df = fl("animationiteration"), pf = fl("animationstart"), Eg = fl("transitionrun"), _g = fl("transitionstart"), Cg = fl("transitioncancel"), mf = fl("transitionend"), hf = /* @__PURE__ */ new Map(), xu = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  xu.push("scrollEnd");
  function En(e, t) {
    hf.set(e, t), Zn(t, [e]);
  }
  var Fi = typeof reportError == "function" ? reportError : function(e) {
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
  }, on = [], Pl = 0, Au = 0;
  function Qi() {
    for (var e = Pl, t = Au = Pl = 0; t < e; ) {
      var n = on[t];
      on[t++] = null;
      var a = on[t];
      on[t++] = null;
      var l = on[t];
      on[t++] = null;
      var i = on[t];
      if (on[t++] = null, a !== null && l !== null) {
        var u = a.pending;
        u === null ? l.next = l : (l.next = u.next, u.next = l), a.pending = l;
      }
      i !== 0 && gf(n, l, i);
    }
  }
  function Xi(e, t, n, a) {
    on[Pl++] = e, on[Pl++] = t, on[Pl++] = n, on[Pl++] = a, Au |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a);
  }
  function Eu(e, t, n, a) {
    return Xi(e, t, n, a), Pi(e);
  }
  function dl(e, t) {
    return Xi(e, null, null, t), Pi(e);
  }
  function gf(e, t, n) {
    e.lanes |= n;
    var a = e.alternate;
    a !== null && (a.lanes |= n);
    for (var l = !1, i = e.return; i !== null; )
      i.childLanes |= n, a = i.alternate, a !== null && (a.childLanes |= n), i.tag === 22 && (e = i.stateNode, e === null || e._visibility & 1 || (l = !0)), e = i, i = i.return;
    return e.tag === 3 ? (i = e.stateNode, l && t !== null && (l = 31 - rt(n), e = i.hiddenUpdates, a = e[l], a === null ? e[l] = [t] : a.push(t), t.lane = n | 536870912), i) : null;
  }
  function Pi(e) {
    if (50 < ii)
      throw ii = 0, Ms = null, Error(c(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var $l = {};
  function Og(e, t, n, a) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Xt(e, t, n, a) {
    return new Og(e, t, n, a);
  }
  function _u(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function ea(e, t) {
    var n = e.alternate;
    return n === null ? (n = Xt(
      e.tag,
      t,
      e.key,
      e.mode
    ), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 65011712, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
  }
  function yf(e, t) {
    e.flags &= 65011714;
    var n = e.alternate;
    return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function $i(e, t, n, a, l, i) {
    var u = 0;
    if (a = e, typeof e == "function") _u(e) && (u = 1);
    else if (typeof e == "string")
      u = Ly(
        e,
        n,
        be.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case Qe:
          return e = Xt(31, n, t, l), e.elementType = Qe, e.lanes = i, e;
        case X:
          return pl(n.children, l, i, t);
        case I:
          u = 8, l |= 24;
          break;
        case q:
          return e = Xt(12, n, t, l | 2), e.elementType = q, e.lanes = i, e;
        case K:
          return e = Xt(13, n, t, l), e.elementType = K, e.lanes = i, e;
        case F:
          return e = Xt(19, n, t, l), e.elementType = F, e.lanes = i, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case ae:
                u = 10;
                break e;
              case fe:
                u = 9;
                break e;
              case le:
                u = 11;
                break e;
              case J:
                u = 14;
                break e;
              case Ae:
                u = 16, a = null;
                break e;
            }
          u = 29, n = Error(
            c(130, e === null ? "null" : typeof e, "")
          ), a = null;
      }
    return t = Xt(u, n, t, l), t.elementType = e, t.type = a, t.lanes = i, t;
  }
  function pl(e, t, n, a) {
    return e = Xt(7, e, a, t), e.lanes = n, e;
  }
  function Cu(e, t, n) {
    return e = Xt(6, e, null, t), e.lanes = n, e;
  }
  function vf(e) {
    var t = Xt(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function Ou(e, t, n) {
    return t = Xt(
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
  var bf = /* @__PURE__ */ new WeakMap();
  function un(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = bf.get(e);
      return n !== void 0 ? n : (t = {
        value: e,
        source: t,
        stack: Ol(t)
      }, bf.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: Ol(t)
    };
  }
  var Il = [], Kl = 0, Ii = null, qr = 0, sn = [], cn = 0, za = null, Un = 1, jn = "";
  function ta(e, t) {
    Il[Kl++] = qr, Il[Kl++] = Ii, Ii = e, qr = t;
  }
  function Sf(e, t, n) {
    sn[cn++] = Un, sn[cn++] = jn, sn[cn++] = za, za = e;
    var a = Un;
    e = jn;
    var l = 32 - rt(a) - 1;
    a &= ~(1 << l), n += 1;
    var i = 32 - rt(t) + l;
    if (30 < i) {
      var u = l - l % 5;
      i = (a & (1 << u) - 1).toString(32), a >>= u, l -= u, Un = 1 << 32 - rt(t) + l | n << l | a, jn = i + e;
    } else
      Un = 1 << i | n << l | a, jn = e;
  }
  function Nu(e) {
    e.return !== null && (ta(e, 1), Sf(e, 1, 0));
  }
  function zu(e) {
    for (; e === Ii; )
      Ii = Il[--Kl], Il[Kl] = null, qr = Il[--Kl], Il[Kl] = null;
    for (; e === za; )
      za = sn[--cn], sn[cn] = null, jn = sn[--cn], sn[cn] = null, Un = sn[--cn], sn[cn] = null;
  }
  function wf(e, t) {
    sn[cn++] = Un, sn[cn++] = jn, sn[cn++] = za, Un = t.id, jn = t.overflow, za = e;
  }
  var dt = null, Me = null, ye = !1, Ra = null, fn = !1, Ru = Error(c(519));
  function Da(e) {
    var t = Error(
      c(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Br(un(t, e)), Ru;
  }
  function Tf(e) {
    var t = e.stateNode, n = e.type, a = e.memoizedProps;
    switch (t[Ie] = e, t[it] = a, n) {
      case "dialog":
        pe("cancel", t), pe("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        pe("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < ui.length; n++)
          pe(ui[n], t);
        break;
      case "source":
        pe("error", t);
        break;
      case "img":
      case "image":
      case "link":
        pe("error", t), pe("load", t);
        break;
      case "details":
        pe("toggle", t);
        break;
      case "input":
        pe("invalid", t), Bl(
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
        pe("invalid", t);
        break;
      case "textarea":
        pe("invalid", t), ul(t, a.value, a.defaultValue, a.children);
    }
    n = a.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || a.suppressHydrationWarning === !0 || qp(t.textContent, n) ? (a.popover != null && (pe("beforetoggle", t), pe("toggle", t)), a.onScroll != null && pe("scroll", t), a.onScrollEnd != null && pe("scrollend", t), a.onClick != null && (t.onclick = Gt), t = !0) : t = !1, t || Da(e, !0);
  }
  function kf(e) {
    for (dt = e.return; dt; )
      switch (dt.tag) {
        case 5:
        case 31:
        case 13:
          fn = !1;
          return;
        case 27:
        case 3:
          fn = !0;
          return;
        default:
          dt = dt.return;
      }
  }
  function Zl(e) {
    if (e !== dt) return !1;
    if (!ye) return kf(e), ye = !0, !1;
    var t = e.tag, n;
    if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || Ks(e.type, e.memoizedProps)), n = !n), n && Me && Da(e), kf(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(317));
      Me = $p(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(317));
      Me = $p(e);
    } else
      t === 27 ? (t = Me, Pa(e.type) ? (e = tc, tc = null, Me = e) : Me = t) : Me = dt ? dn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ml() {
    Me = dt = null, ye = !1;
  }
  function Du() {
    var e = Ra;
    return e !== null && (Lt === null ? Lt = e : Lt.push.apply(
      Lt,
      e
    ), Ra = null), e;
  }
  function Br(e) {
    Ra === null ? Ra = [e] : Ra.push(e);
  }
  var Lu = Se(null), hl = null, na = null;
  function La(e, t, n) {
    Z(Lu, t._currentValue), t._currentValue = n;
  }
  function aa(e) {
    e._currentValue = Lu.current, se(Lu);
  }
  function Mu(e, t, n) {
    for (; e !== null; ) {
      var a = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Uu(e, t, n, a) {
    var l = e.child;
    for (l !== null && (l.return = e); l !== null; ) {
      var i = l.dependencies;
      if (i !== null) {
        var u = l.child;
        i = i.firstContext;
        e: for (; i !== null; ) {
          var d = i;
          i = l;
          for (var g = 0; g < t.length; g++)
            if (d.context === t[g]) {
              i.lanes |= n, d = i.alternate, d !== null && (d.lanes |= n), Mu(
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
        u.lanes |= n, i = u.alternate, i !== null && (i.lanes |= n), Mu(u, n, e), u = null;
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
  function Wl(e, t, n, a) {
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
          Qt(l.pendingProps.value, u.value) || (e !== null ? e.push(d) : e = [d]);
        }
      } else if (l === Nn.current) {
        if (u = l.alternate, u === null) throw Error(c(387));
        u.memoizedState.memoizedState !== l.memoizedState.memoizedState && (e !== null ? e.push(pi) : e = [pi]);
      }
      l = l.return;
    }
    e !== null && Uu(
      t,
      e,
      n,
      a
    ), t.flags |= 262144;
  }
  function Ki(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Qt(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function gl(e) {
    hl = e, na = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function pt(e) {
    return xf(hl, e);
  }
  function Zi(e, t) {
    return hl === null && gl(e), xf(e, t);
  }
  function xf(e, t) {
    var n = t._currentValue;
    if (t = { context: t, memoizedValue: n, next: null }, na === null) {
      if (e === null) throw Error(c(308));
      na = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else na = na.next = t;
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
  }, zg = o.unstable_scheduleCallback, Rg = o.unstable_NormalPriority, Ze = {
    $$typeof: ae,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function ju() {
    return {
      controller: new Ng(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Yr(e) {
    e.refCount--, e.refCount === 0 && zg(Rg, function() {
      e.controller.abort();
    });
  }
  var Vr = null, Hu = 0, Jl = 0, er = null;
  function Dg(e, t) {
    if (Vr === null) {
      var n = Vr = [];
      Hu = 0, Jl = Ys(), er = {
        status: "pending",
        value: void 0,
        then: function(a) {
          n.push(a);
        }
      };
    }
    return Hu++, t.then(Af, Af), t;
  }
  function Af() {
    if (--Hu === 0 && Vr !== null) {
      er !== null && (er.status = "fulfilled");
      var e = Vr;
      Vr = null, Jl = 0, er = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Lg(e, t) {
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
  var Ef = U.S;
  U.S = function(e, t) {
    sp = ct(), typeof t == "object" && t !== null && typeof t.then == "function" && Dg(e, t), Ef !== null && Ef(e, t);
  };
  var yl = Se(null);
  function qu() {
    var e = yl.current;
    return e !== null ? e : Re.pooledCache;
  }
  function Wi(e, t) {
    t === null ? Z(yl, yl.current) : Z(yl, t.pool);
  }
  function _f() {
    var e = qu();
    return e === null ? null : { parent: Ze._currentValue, pool: e };
  }
  var tr = Error(c(460)), Bu = Error(c(474)), Ji = Error(c(542)), eo = { then: function() {
  } };
  function Cf(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Of(e, t, n) {
    switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(Gt, Gt), t = n), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, zf(e), e;
      default:
        if (typeof t.status == "string") t.then(Gt, Gt);
        else {
          if (e = Re, e !== null && 100 < e.shellSuspendCounter)
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
        throw bl = t, tr;
    }
  }
  function vl(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (bl = n, tr) : n;
    }
  }
  var bl = null;
  function Nf() {
    if (bl === null) throw Error(c(459));
    var e = bl;
    return bl = null, e;
  }
  function zf(e) {
    if (e === tr || e === Ji)
      throw Error(c(483));
  }
  var nr = null, Gr = 0;
  function to(e) {
    var t = Gr;
    return Gr += 1, nr === null && (nr = []), Of(nr, e, t);
  }
  function Fr(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function no(e, t) {
    throw t.$$typeof === $ ? Error(c(525)) : (e = Object.prototype.toString.call(t), Error(
      c(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function Rf(e) {
    function t(w, b) {
      if (e) {
        var A = w.deletions;
        A === null ? (w.deletions = [b], w.flags |= 16) : A.push(b);
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
      return w = ea(w, b), w.index = 0, w.sibling = null, w;
    }
    function i(w, b, A) {
      return w.index = A, e ? (A = w.alternate, A !== null ? (A = A.index, A < b ? (w.flags |= 67108866, b) : A) : (w.flags |= 67108866, b)) : (w.flags |= 1048576, b);
    }
    function u(w) {
      return e && w.alternate === null && (w.flags |= 67108866), w;
    }
    function d(w, b, A, R) {
      return b === null || b.tag !== 6 ? (b = Cu(A, w.mode, R), b.return = w, b) : (b = l(b, A), b.return = w, b);
    }
    function g(w, b, A, R) {
      var W = A.type;
      return W === X ? N(
        w,
        b,
        A.props.children,
        R,
        A.key
      ) : b !== null && (b.elementType === W || typeof W == "object" && W !== null && W.$$typeof === Ae && vl(W) === b.type) ? (b = l(b, A.props), Fr(b, A), b.return = w, b) : (b = $i(
        A.type,
        A.key,
        A.props,
        null,
        w.mode,
        R
      ), Fr(b, A), b.return = w, b);
    }
    function E(w, b, A, R) {
      return b === null || b.tag !== 4 || b.stateNode.containerInfo !== A.containerInfo || b.stateNode.implementation !== A.implementation ? (b = Ou(A, w.mode, R), b.return = w, b) : (b = l(b, A.children || []), b.return = w, b);
    }
    function N(w, b, A, R, W) {
      return b === null || b.tag !== 7 ? (b = pl(
        A,
        w.mode,
        R,
        W
      ), b.return = w, b) : (b = l(b, A), b.return = w, b);
    }
    function L(w, b, A) {
      if (typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint")
        return b = Cu(
          "" + b,
          w.mode,
          A
        ), b.return = w, b;
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case H:
            return A = $i(
              b.type,
              b.key,
              b.props,
              null,
              w.mode,
              A
            ), Fr(A, b), A.return = w, A;
          case V:
            return b = Ou(
              b,
              w.mode,
              A
            ), b.return = w, b;
          case Ae:
            return b = vl(b), L(w, b, A);
        }
        if (B(b) || xe(b))
          return b = pl(
            b,
            w.mode,
            A,
            null
          ), b.return = w, b;
        if (typeof b.then == "function")
          return L(w, to(b), A);
        if (b.$$typeof === ae)
          return L(
            w,
            Zi(w, b),
            A
          );
        no(w, b);
      }
      return null;
    }
    function _(w, b, A, R) {
      var W = b !== null ? b.key : null;
      if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint")
        return W !== null ? null : d(w, b, "" + A, R);
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case H:
            return A.key === W ? g(w, b, A, R) : null;
          case V:
            return A.key === W ? E(w, b, A, R) : null;
          case Ae:
            return A = vl(A), _(w, b, A, R);
        }
        if (B(A) || xe(A))
          return W !== null ? null : N(w, b, A, R, null);
        if (typeof A.then == "function")
          return _(
            w,
            b,
            to(A),
            R
          );
        if (A.$$typeof === ae)
          return _(
            w,
            b,
            Zi(w, A),
            R
          );
        no(w, A);
      }
      return null;
    }
    function C(w, b, A, R, W) {
      if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint")
        return w = w.get(A) || null, d(b, w, "" + R, W);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case H:
            return w = w.get(
              R.key === null ? A : R.key
            ) || null, g(b, w, R, W);
          case V:
            return w = w.get(
              R.key === null ? A : R.key
            ) || null, E(b, w, R, W);
          case Ae:
            return R = vl(R), C(
              w,
              b,
              A,
              R,
              W
            );
        }
        if (B(R) || xe(R))
          return w = w.get(A) || null, N(b, w, R, W, null);
        if (typeof R.then == "function")
          return C(
            w,
            b,
            A,
            to(R),
            W
          );
        if (R.$$typeof === ae)
          return C(
            w,
            b,
            A,
            Zi(b, R),
            W
          );
        no(b, R);
      }
      return null;
    }
    function Q(w, b, A, R) {
      for (var W = null, we = null, P = b, oe = b = 0, he = null; P !== null && oe < A.length; oe++) {
        P.index > oe ? (he = P, P = null) : he = P.sibling;
        var Te = _(
          w,
          P,
          A[oe],
          R
        );
        if (Te === null) {
          P === null && (P = he);
          break;
        }
        e && P && Te.alternate === null && t(w, P), b = i(Te, b, oe), we === null ? W = Te : we.sibling = Te, we = Te, P = he;
      }
      if (oe === A.length)
        return n(w, P), ye && ta(w, oe), W;
      if (P === null) {
        for (; oe < A.length; oe++)
          P = L(w, A[oe], R), P !== null && (b = i(
            P,
            b,
            oe
          ), we === null ? W = P : we.sibling = P, we = P);
        return ye && ta(w, oe), W;
      }
      for (P = a(P); oe < A.length; oe++)
        he = C(
          P,
          w,
          oe,
          A[oe],
          R
        ), he !== null && (e && he.alternate !== null && P.delete(
          he.key === null ? oe : he.key
        ), b = i(
          he,
          b,
          oe
        ), we === null ? W = he : we.sibling = he, we = he);
      return e && P.forEach(function(Wa) {
        return t(w, Wa);
      }), ye && ta(w, oe), W;
    }
    function te(w, b, A, R) {
      if (A == null) throw Error(c(151));
      for (var W = null, we = null, P = b, oe = b = 0, he = null, Te = A.next(); P !== null && !Te.done; oe++, Te = A.next()) {
        P.index > oe ? (he = P, P = null) : he = P.sibling;
        var Wa = _(w, P, Te.value, R);
        if (Wa === null) {
          P === null && (P = he);
          break;
        }
        e && P && Wa.alternate === null && t(w, P), b = i(Wa, b, oe), we === null ? W = Wa : we.sibling = Wa, we = Wa, P = he;
      }
      if (Te.done)
        return n(w, P), ye && ta(w, oe), W;
      if (P === null) {
        for (; !Te.done; oe++, Te = A.next())
          Te = L(w, Te.value, R), Te !== null && (b = i(Te, b, oe), we === null ? W = Te : we.sibling = Te, we = Te);
        return ye && ta(w, oe), W;
      }
      for (P = a(P); !Te.done; oe++, Te = A.next())
        Te = C(P, w, oe, Te.value, R), Te !== null && (e && Te.alternate !== null && P.delete(Te.key === null ? oe : Te.key), b = i(Te, b, oe), we === null ? W = Te : we.sibling = Te, we = Te);
      return e && P.forEach(function(Qy) {
        return t(w, Qy);
      }), ye && ta(w, oe), W;
    }
    function ze(w, b, A, R) {
      if (typeof A == "object" && A !== null && A.type === X && A.key === null && (A = A.props.children), typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case H:
            e: {
              for (var W = A.key; b !== null; ) {
                if (b.key === W) {
                  if (W = A.type, W === X) {
                    if (b.tag === 7) {
                      n(
                        w,
                        b.sibling
                      ), R = l(
                        b,
                        A.props.children
                      ), R.return = w, w = R;
                      break e;
                    }
                  } else if (b.elementType === W || typeof W == "object" && W !== null && W.$$typeof === Ae && vl(W) === b.type) {
                    n(
                      w,
                      b.sibling
                    ), R = l(b, A.props), Fr(R, A), R.return = w, w = R;
                    break e;
                  }
                  n(w, b);
                  break;
                } else t(w, b);
                b = b.sibling;
              }
              A.type === X ? (R = pl(
                A.props.children,
                w.mode,
                R,
                A.key
              ), R.return = w, w = R) : (R = $i(
                A.type,
                A.key,
                A.props,
                null,
                w.mode,
                R
              ), Fr(R, A), R.return = w, w = R);
            }
            return u(w);
          case V:
            e: {
              for (W = A.key; b !== null; ) {
                if (b.key === W)
                  if (b.tag === 4 && b.stateNode.containerInfo === A.containerInfo && b.stateNode.implementation === A.implementation) {
                    n(
                      w,
                      b.sibling
                    ), R = l(b, A.children || []), R.return = w, w = R;
                    break e;
                  } else {
                    n(w, b);
                    break;
                  }
                else t(w, b);
                b = b.sibling;
              }
              R = Ou(A, w.mode, R), R.return = w, w = R;
            }
            return u(w);
          case Ae:
            return A = vl(A), ze(
              w,
              b,
              A,
              R
            );
        }
        if (B(A))
          return Q(
            w,
            b,
            A,
            R
          );
        if (xe(A)) {
          if (W = xe(A), typeof W != "function") throw Error(c(150));
          return A = W.call(A), te(
            w,
            b,
            A,
            R
          );
        }
        if (typeof A.then == "function")
          return ze(
            w,
            b,
            to(A),
            R
          );
        if (A.$$typeof === ae)
          return ze(
            w,
            b,
            Zi(w, A),
            R
          );
        no(w, A);
      }
      return typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint" ? (A = "" + A, b !== null && b.tag === 6 ? (n(w, b.sibling), R = l(b, A), R.return = w, w = R) : (n(w, b), R = Cu(A, w.mode, R), R.return = w, w = R), u(w)) : n(w, b);
    }
    return function(w, b, A, R) {
      try {
        Gr = 0;
        var W = ze(
          w,
          b,
          A,
          R
        );
        return nr = null, W;
      } catch (P) {
        if (P === tr || P === Ji) throw P;
        var we = Xt(29, P, null, w.mode);
        return we.lanes = R, we.return = w, we;
      } finally {
      }
    };
  }
  var Sl = Rf(!0), Df = Rf(!1), Ma = !1;
  function Yu(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Vu(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function Ua(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function ja(e, t, n) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (ke & 2) !== 0) {
      var l = a.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), a.pending = t, t = Pi(e), gf(e, null, n), t;
    }
    return Xi(e, a, t, n), Pi(e);
  }
  function Qr(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
      var a = t.lanes;
      a &= e.pendingLanes, n |= a, t.lanes = n, Yt(e, n);
    }
  }
  function Gu(e, t) {
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
  var Fu = !1;
  function Xr() {
    if (Fu) {
      var e = er;
      if (e !== null) throw e;
    }
  }
  function Pr(e, t, n, a) {
    Fu = !1;
    var l = e.updateQueue;
    Ma = !1;
    var i = l.firstBaseUpdate, u = l.lastBaseUpdate, d = l.shared.pending;
    if (d !== null) {
      l.shared.pending = null;
      var g = d, E = g.next;
      g.next = null, u === null ? i = E : u.next = E, u = g;
      var N = e.alternate;
      N !== null && (N = N.updateQueue, d = N.lastBaseUpdate, d !== u && (d === null ? N.firstBaseUpdate = E : d.next = E, N.lastBaseUpdate = g));
    }
    if (i !== null) {
      var L = l.baseState;
      u = 0, N = E = g = null, d = i;
      do {
        var _ = d.lane & -536870913, C = _ !== d.lane;
        if (C ? (me & _) === _ : (a & _) === _) {
          _ !== 0 && _ === Jl && (Fu = !0), N !== null && (N = N.next = {
            lane: 0,
            tag: d.tag,
            payload: d.payload,
            callback: null,
            next: null
          });
          e: {
            var Q = e, te = d;
            _ = t;
            var ze = n;
            switch (te.tag) {
              case 1:
                if (Q = te.payload, typeof Q == "function") {
                  L = Q.call(ze, L, _);
                  break e;
                }
                L = Q;
                break e;
              case 3:
                Q.flags = Q.flags & -65537 | 128;
              case 0:
                if (Q = te.payload, _ = typeof Q == "function" ? Q.call(ze, L, _) : Q, _ == null) break e;
                L = M({}, L, _);
                break e;
              case 2:
                Ma = !0;
            }
          }
          _ = d.callback, _ !== null && (e.flags |= 64, C && (e.flags |= 8192), C = l.callbacks, C === null ? l.callbacks = [_] : C.push(_));
        } else
          C = {
            lane: _,
            tag: d.tag,
            payload: d.payload,
            callback: d.callback,
            next: null
          }, N === null ? (E = N = C, g = L) : N = N.next = C, u |= _;
        if (d = d.next, d === null) {
          if (d = l.shared.pending, d === null)
            break;
          C = d, d = C.next, C.next = null, l.lastBaseUpdate = C, l.shared.pending = null;
        }
      } while (!0);
      N === null && (g = L), l.baseState = g, l.firstBaseUpdate = E, l.lastBaseUpdate = N, i === null && (l.shared.lanes = 0), Va |= u, e.lanes = u, e.memoizedState = L;
    }
  }
  function Lf(e, t) {
    if (typeof e != "function")
      throw Error(c(191, e));
    e.call(t);
  }
  function Mf(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++)
        Lf(n[e], t);
  }
  var ar = Se(null), ao = Se(0);
  function Uf(e, t) {
    e = da, Z(ao, e), Z(ar, t), da = e | t.baseLanes;
  }
  function Qu() {
    Z(ao, da), Z(ar, ar.current);
  }
  function Xu() {
    da = ao.current, se(ar), se(ao);
  }
  var Pt = Se(null), vn = null;
  function Ha(e) {
    var t = e.alternate;
    Z(Xe, Xe.current & 1), Z(Pt, e), vn === null && (t === null || ar.current !== null || t.memoizedState !== null) && (vn = e);
  }
  function Pu(e) {
    Z(Xe, Xe.current), Z(Pt, e), vn === null && (vn = e);
  }
  function jf(e) {
    e.tag === 22 ? (Z(Xe, Xe.current), Z(Pt, e), vn === null && (vn = e)) : qa();
  }
  function qa() {
    Z(Xe, Xe.current), Z(Pt, Pt.current);
  }
  function $t(e) {
    se(Pt), vn === e && (vn = null), se(Xe);
  }
  var Xe = Se(0);
  function lo(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || Js(n) || ec(n)))
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
  var la = 0, re = null, Oe = null, We = null, ro = !1, lr = !1, wl = !1, io = 0, $r = 0, rr = null, Mg = 0;
  function Ve() {
    throw Error(c(321));
  }
  function $u(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Qt(e[n], t[n])) return !1;
    return !0;
  }
  function Iu(e, t, n, a, l, i) {
    return la = i, re = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, U.H = e === null || e.memoizedState === null ? Sd : cs, wl = !1, i = n(a, l), wl = !1, lr && (i = qf(
      t,
      n,
      a,
      l
    )), Hf(e), i;
  }
  function Hf(e) {
    U.H = Zr;
    var t = Oe !== null && Oe.next !== null;
    if (la = 0, We = Oe = re = null, ro = !1, $r = 0, rr = null, t) throw Error(c(300));
    e === null || Je || (e = e.dependencies, e !== null && Ki(e) && (Je = !0));
  }
  function qf(e, t, n, a) {
    re = e;
    var l = 0;
    do {
      if (lr && (rr = null), $r = 0, lr = !1, 25 <= l) throw Error(c(301));
      if (l += 1, We = Oe = null, e.updateQueue != null) {
        var i = e.updateQueue;
        i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
      }
      U.H = wd, i = t(n, a);
    } while (lr);
    return i;
  }
  function Ug() {
    var e = U.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Ir(t) : t, e = e.useState()[0], (Oe !== null ? Oe.memoizedState : null) !== e && (re.flags |= 1024), t;
  }
  function Ku() {
    var e = io !== 0;
    return io = 0, e;
  }
  function Zu(e, t, n) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
  }
  function Wu(e) {
    if (ro) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      ro = !1;
    }
    la = 0, We = Oe = re = null, lr = !1, $r = io = 0, rr = null;
  }
  function kt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return We === null ? re.memoizedState = We = e : We = We.next = e, We;
  }
  function Pe() {
    if (Oe === null) {
      var e = re.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Oe.next;
    var t = We === null ? re.memoizedState : We.next;
    if (t !== null)
      We = t, Oe = e;
    else {
      if (e === null)
        throw re.alternate === null ? Error(c(467)) : Error(c(310));
      Oe = e, e = {
        memoizedState: Oe.memoizedState,
        baseState: Oe.baseState,
        baseQueue: Oe.baseQueue,
        queue: Oe.queue,
        next: null
      }, We === null ? re.memoizedState = We = e : We = We.next = e;
    }
    return We;
  }
  function oo() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ir(e) {
    var t = $r;
    return $r += 1, rr === null && (rr = []), e = Of(rr, e, t), t = re, (We === null ? t.memoizedState : We.next) === null && (t = t.alternate, U.H = t === null || t.memoizedState === null ? Sd : cs), e;
  }
  function uo(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Ir(e);
      if (e.$$typeof === ae) return pt(e);
    }
    throw Error(c(438, String(e)));
  }
  function Ju(e) {
    var t = null, n = re.updateQueue;
    if (n !== null && (t = n.memoCache), t == null) {
      var a = re.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
        data: a.data.map(function(l) {
          return l.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), n === null && (n = oo(), re.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
      for (n = t.data[t.index] = Array(e), a = 0; a < e; a++)
        n[a] = ve;
    return t.index++, n;
  }
  function ra(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function so(e) {
    var t = Pe();
    return es(t, Oe, e);
  }
  function es(e, t, n) {
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
      var d = u = null, g = null, E = t, N = !1;
      do {
        var L = E.lane & -536870913;
        if (L !== E.lane ? (me & L) === L : (la & L) === L) {
          var _ = E.revertLane;
          if (_ === 0)
            g !== null && (g = g.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: E.action,
              hasEagerState: E.hasEagerState,
              eagerState: E.eagerState,
              next: null
            }), L === Jl && (N = !0);
          else if ((la & _) === _) {
            E = E.next, _ === Jl && (N = !0);
            continue;
          } else
            L = {
              lane: 0,
              revertLane: E.revertLane,
              gesture: null,
              action: E.action,
              hasEagerState: E.hasEagerState,
              eagerState: E.eagerState,
              next: null
            }, g === null ? (d = g = L, u = i) : g = g.next = L, re.lanes |= _, Va |= _;
          L = E.action, wl && n(i, L), i = E.hasEagerState ? E.eagerState : n(i, L);
        } else
          _ = {
            lane: L,
            revertLane: E.revertLane,
            gesture: E.gesture,
            action: E.action,
            hasEagerState: E.hasEagerState,
            eagerState: E.eagerState,
            next: null
          }, g === null ? (d = g = _, u = i) : g = g.next = _, re.lanes |= L, Va |= L;
        E = E.next;
      } while (E !== null && E !== t);
      if (g === null ? u = i : g.next = d, !Qt(i, e.memoizedState) && (Je = !0, N && (n = er, n !== null)))
        throw n;
      e.memoizedState = i, e.baseState = u, e.baseQueue = g, a.lastRenderedState = i;
    }
    return l === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
  }
  function ts(e) {
    var t = Pe(), n = t.queue;
    if (n === null) throw Error(c(311));
    n.lastRenderedReducer = e;
    var a = n.dispatch, l = n.pending, i = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var u = l = l.next;
      do
        i = e(i, u.action), u = u.next;
      while (u !== l);
      Qt(i, t.memoizedState) || (Je = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
    }
    return [i, a];
  }
  function Bf(e, t, n) {
    var a = re, l = Pe(), i = ye;
    if (i) {
      if (n === void 0) throw Error(c(407));
      n = n();
    } else n = t();
    var u = !Qt(
      (Oe || l).memoizedState,
      n
    );
    if (u && (l.memoizedState = n, Je = !0), l = l.queue, ls(Gf.bind(null, a, l, e), [
      e
    ]), l.getSnapshot !== t || u || We !== null && We.memoizedState.tag & 1) {
      if (a.flags |= 2048, ir(
        9,
        { destroy: void 0 },
        Vf.bind(
          null,
          a,
          l,
          n,
          t
        ),
        null
      ), Re === null) throw Error(c(349));
      i || (la & 127) !== 0 || Yf(a, t, n);
    }
    return n;
  }
  function Yf(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = re.updateQueue, t === null ? (t = oo(), re.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Vf(e, t, n, a) {
    t.value = n, t.getSnapshot = a, Ff(t) && Qf(e);
  }
  function Gf(e, t, n) {
    return n(function() {
      Ff(t) && Qf(e);
    });
  }
  function Ff(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Qt(e, n);
    } catch {
      return !0;
    }
  }
  function Qf(e) {
    var t = dl(e, 2);
    t !== null && Mt(t, e, 2);
  }
  function ns(e) {
    var t = kt();
    if (typeof e == "function") {
      var n = e;
      if (e = n(), wl) {
        Bt(!0);
        try {
          n();
        } finally {
          Bt(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ra,
      lastRenderedState: e
    }, t;
  }
  function Xf(e, t, n, a) {
    return e.baseState = n, es(
      e,
      Oe,
      typeof a == "function" ? a : ra
    );
  }
  function jg(e, t, n, a, l) {
    if (po(e)) throw Error(c(485));
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
      U.T !== null ? n(!0) : i.isTransition = !1, a(i), n = t.pending, n === null ? (i.next = t.pending = i, Pf(t, i)) : (i.next = n.next, t.pending = n.next = i);
    }
  }
  function Pf(e, t) {
    var n = t.action, a = t.payload, l = e.state;
    if (t.isTransition) {
      var i = U.T, u = {};
      U.T = u;
      try {
        var d = n(l, a), g = U.S;
        g !== null && g(u, d), $f(e, t, d);
      } catch (E) {
        as(e, t, E);
      } finally {
        i !== null && u.types !== null && (i.types = u.types), U.T = i;
      }
    } else
      try {
        i = n(l, a), $f(e, t, i);
      } catch (E) {
        as(e, t, E);
      }
  }
  function $f(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(a) {
        If(e, t, a);
      },
      function(a) {
        return as(e, t, a);
      }
    ) : If(e, t, n);
  }
  function If(e, t, n) {
    t.status = "fulfilled", t.value = n, Kf(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, Pf(e, n)));
  }
  function as(e, t, n) {
    var a = e.pending;
    if (e.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = n, Kf(t), t = t.next;
      while (t !== a);
    }
    e.action = null;
  }
  function Kf(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Zf(e, t) {
    return t;
  }
  function Wf(e, t) {
    if (ye) {
      var n = Re.formState;
      if (n !== null) {
        e: {
          var a = re;
          if (ye) {
            if (Me) {
              t: {
                for (var l = Me, i = fn; l.nodeType !== 8; ) {
                  if (!i) {
                    l = null;
                    break t;
                  }
                  if (l = dn(
                    l.nextSibling
                  ), l === null) {
                    l = null;
                    break t;
                  }
                }
                i = l.data, l = i === "F!" || i === "F" ? l : null;
              }
              if (l) {
                Me = dn(
                  l.nextSibling
                ), a = l.data === "F!";
                break e;
              }
            }
            Da(a);
          }
          a = !1;
        }
        a && (t = n[0]);
      }
    }
    return n = kt(), n.memoizedState = n.baseState = t, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Zf,
      lastRenderedState: t
    }, n.queue = a, n = yd.bind(
      null,
      re,
      a
    ), a.dispatch = n, a = ns(!1), i = ss.bind(
      null,
      re,
      !1,
      a.queue
    ), a = kt(), l = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, a.queue = l, n = jg.bind(
      null,
      re,
      l,
      i,
      n
    ), l.dispatch = n, a.memoizedState = e, [t, n, !1];
  }
  function Jf(e) {
    var t = Pe();
    return ed(t, Oe, e);
  }
  function ed(e, t, n) {
    if (t = es(
      e,
      t,
      Zf
    )[0], e = so(ra)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = Ir(t);
      } catch (u) {
        throw u === tr ? Ji : u;
      }
    else a = t;
    t = Pe();
    var l = t.queue, i = l.dispatch;
    return n !== t.memoizedState && (re.flags |= 2048, ir(
      9,
      { destroy: void 0 },
      Hg.bind(null, l, n),
      null
    )), [a, i, e];
  }
  function Hg(e, t) {
    e.action = t;
  }
  function td(e) {
    var t = Pe(), n = Oe;
    if (n !== null)
      return ed(t, n, e);
    Pe(), t = t.memoizedState, n = Pe();
    var a = n.queue.dispatch;
    return n.memoizedState = e, [t, a, !1];
  }
  function ir(e, t, n, a) {
    return e = { tag: e, create: n, deps: a, inst: t, next: null }, t = re.updateQueue, t === null && (t = oo(), re.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (a = n.next, n.next = e, e.next = a, t.lastEffect = e), e;
  }
  function nd() {
    return Pe().memoizedState;
  }
  function co(e, t, n, a) {
    var l = kt();
    re.flags |= e, l.memoizedState = ir(
      1 | t,
      { destroy: void 0 },
      n,
      a === void 0 ? null : a
    );
  }
  function fo(e, t, n, a) {
    var l = Pe();
    a = a === void 0 ? null : a;
    var i = l.memoizedState.inst;
    Oe !== null && a !== null && $u(a, Oe.memoizedState.deps) ? l.memoizedState = ir(t, i, n, a) : (re.flags |= e, l.memoizedState = ir(
      1 | t,
      i,
      n,
      a
    ));
  }
  function ad(e, t) {
    co(8390656, 8, e, t);
  }
  function ls(e, t) {
    fo(2048, 8, e, t);
  }
  function qg(e) {
    re.flags |= 4;
    var t = re.updateQueue;
    if (t === null)
      t = oo(), re.updateQueue = t, t.events = [e];
    else {
      var n = t.events;
      n === null ? t.events = [e] : n.push(e);
    }
  }
  function ld(e) {
    var t = Pe().memoizedState;
    return qg({ ref: t, nextImpl: e }), function() {
      if ((ke & 2) !== 0) throw Error(c(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function rd(e, t) {
    return fo(4, 2, e, t);
  }
  function id(e, t) {
    return fo(4, 4, e, t);
  }
  function od(e, t) {
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
  function ud(e, t, n) {
    n = n != null ? n.concat([e]) : null, fo(4, 4, od.bind(null, t, e), n);
  }
  function rs() {
  }
  function sd(e, t) {
    var n = Pe();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    return t !== null && $u(t, a[1]) ? a[0] : (n.memoizedState = [e, t], e);
  }
  function cd(e, t) {
    var n = Pe();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    if (t !== null && $u(t, a[1]))
      return a[0];
    if (a = e(), wl) {
      Bt(!0);
      try {
        e();
      } finally {
        Bt(!1);
      }
    }
    return n.memoizedState = [a, t], a;
  }
  function is(e, t, n) {
    return n === void 0 || (la & 1073741824) !== 0 && (me & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n, e = fp(), re.lanes |= e, Va |= e, n);
  }
  function fd(e, t, n, a) {
    return Qt(n, t) ? n : ar.current !== null ? (e = is(e, n, a), Qt(e, t) || (Je = !0), e) : (la & 42) === 0 || (la & 1073741824) !== 0 && (me & 261930) === 0 ? (Je = !0, e.memoizedState = n) : (e = fp(), re.lanes |= e, Va |= e, t);
  }
  function dd(e, t, n, a, l) {
    var i = G.p;
    G.p = i !== 0 && 8 > i ? i : 8;
    var u = U.T, d = {};
    U.T = d, ss(e, !1, t, n);
    try {
      var g = l(), E = U.S;
      if (E !== null && E(d, g), g !== null && typeof g == "object" && typeof g.then == "function") {
        var N = Lg(
          g,
          a
        );
        Kr(
          e,
          t,
          N,
          Zt(e)
        );
      } else
        Kr(
          e,
          t,
          a,
          Zt(e)
        );
    } catch (L) {
      Kr(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: L },
        Zt()
      );
    } finally {
      G.p = i, u !== null && d.types !== null && (u.types = d.types), U.T = u;
    }
  }
  function Bg() {
  }
  function os(e, t, n, a) {
    if (e.tag !== 5) throw Error(c(476));
    var l = pd(e).queue;
    dd(
      e,
      l,
      t,
      ue,
      n === null ? Bg : function() {
        return md(e), n(a);
      }
    );
  }
  function pd(e) {
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
        lastRenderedReducer: ra,
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
        lastRenderedReducer: ra,
        lastRenderedState: n
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function md(e) {
    var t = pd(e);
    t.next === null && (t = e.alternate.memoizedState), Kr(
      e,
      t.next.queue,
      {},
      Zt()
    );
  }
  function us() {
    return pt(pi);
  }
  function hd() {
    return Pe().memoizedState;
  }
  function gd() {
    return Pe().memoizedState;
  }
  function Yg(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = Zt();
          e = Ua(n);
          var a = ja(t, e, n);
          a !== null && (Mt(a, t, n), Qr(a, t, n)), t = { cache: ju() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Vg(e, t, n) {
    var a = Zt();
    n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, po(e) ? vd(t, n) : (n = Eu(e, t, n, a), n !== null && (Mt(n, e, a), bd(n, t, a)));
  }
  function yd(e, t, n) {
    var a = Zt();
    Kr(e, t, n, a);
  }
  function Kr(e, t, n, a) {
    var l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (po(e)) vd(t, l);
    else {
      var i = e.alternate;
      if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
        try {
          var u = t.lastRenderedState, d = i(u, n);
          if (l.hasEagerState = !0, l.eagerState = d, Qt(d, u))
            return Xi(e, t, l, 0), Re === null && Qi(), !1;
        } catch {
        } finally {
        }
      if (n = Eu(e, t, l, a), n !== null)
        return Mt(n, e, a), bd(n, t, a), !0;
    }
    return !1;
  }
  function ss(e, t, n, a) {
    if (a = {
      lane: 2,
      revertLane: Ys(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, po(e)) {
      if (t) throw Error(c(479));
    } else
      t = Eu(
        e,
        n,
        a,
        2
      ), t !== null && Mt(t, e, 2);
  }
  function po(e) {
    var t = e.alternate;
    return e === re || t !== null && t === re;
  }
  function vd(e, t) {
    lr = ro = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function bd(e, t, n) {
    if ((n & 4194048) !== 0) {
      var a = t.lanes;
      a &= e.pendingLanes, n |= a, t.lanes = n, Yt(e, n);
    }
  }
  var Zr = {
    readContext: pt,
    use: uo,
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
  Zr.useEffectEvent = Ve;
  var Sd = {
    readContext: pt,
    use: uo,
    useCallback: function(e, t) {
      return kt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: pt,
    useEffect: ad,
    useImperativeHandle: function(e, t, n) {
      n = n != null ? n.concat([e]) : null, co(
        4194308,
        4,
        od.bind(null, t, e),
        n
      );
    },
    useLayoutEffect: function(e, t) {
      return co(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      co(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var n = kt();
      t = t === void 0 ? null : t;
      var a = e();
      if (wl) {
        Bt(!0);
        try {
          e();
        } finally {
          Bt(!1);
        }
      }
      return n.memoizedState = [a, t], a;
    },
    useReducer: function(e, t, n) {
      var a = kt();
      if (n !== void 0) {
        var l = n(t);
        if (wl) {
          Bt(!0);
          try {
            n(t);
          } finally {
            Bt(!1);
          }
        }
      } else l = t;
      return a.memoizedState = a.baseState = l, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: l
      }, a.queue = e, e = e.dispatch = Vg.bind(
        null,
        re,
        e
      ), [a.memoizedState, e];
    },
    useRef: function(e) {
      var t = kt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = ns(e);
      var t = e.queue, n = yd.bind(null, re, t);
      return t.dispatch = n, [e.memoizedState, n];
    },
    useDebugValue: rs,
    useDeferredValue: function(e, t) {
      var n = kt();
      return is(n, e, t);
    },
    useTransition: function() {
      var e = ns(!1);
      return e = dd.bind(
        null,
        re,
        e.queue,
        !0,
        !1
      ), kt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, n) {
      var a = re, l = kt();
      if (ye) {
        if (n === void 0)
          throw Error(c(407));
        n = n();
      } else {
        if (n = t(), Re === null)
          throw Error(c(349));
        (me & 127) !== 0 || Yf(a, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return l.queue = i, ad(Gf.bind(null, a, i, e), [
        e
      ]), a.flags |= 2048, ir(
        9,
        { destroy: void 0 },
        Vf.bind(
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
      var e = kt(), t = Re.identifierPrefix;
      if (ye) {
        var n = jn, a = Un;
        n = (a & ~(1 << 32 - rt(a) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = io++, 0 < n && (t += "H" + n.toString(32)), t += "_";
      } else
        n = Mg++, t = "_" + t + "r_" + n.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: us,
    useFormState: Wf,
    useActionState: Wf,
    useOptimistic: function(e) {
      var t = kt();
      t.memoizedState = t.baseState = e;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = n, t = ss.bind(
        null,
        re,
        !0,
        n
      ), n.dispatch = t, [e, t];
    },
    useMemoCache: Ju,
    useCacheRefresh: function() {
      return kt().memoizedState = Yg.bind(
        null,
        re
      );
    },
    useEffectEvent: function(e) {
      var t = kt(), n = { impl: e };
      return t.memoizedState = n, function() {
        if ((ke & 2) !== 0)
          throw Error(c(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, cs = {
    readContext: pt,
    use: uo,
    useCallback: sd,
    useContext: pt,
    useEffect: ls,
    useImperativeHandle: ud,
    useInsertionEffect: rd,
    useLayoutEffect: id,
    useMemo: cd,
    useReducer: so,
    useRef: nd,
    useState: function() {
      return so(ra);
    },
    useDebugValue: rs,
    useDeferredValue: function(e, t) {
      var n = Pe();
      return fd(
        n,
        Oe.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = so(ra)[0], t = Pe().memoizedState;
      return [
        typeof e == "boolean" ? e : Ir(e),
        t
      ];
    },
    useSyncExternalStore: Bf,
    useId: hd,
    useHostTransitionStatus: us,
    useFormState: Jf,
    useActionState: Jf,
    useOptimistic: function(e, t) {
      var n = Pe();
      return Xf(n, Oe, e, t);
    },
    useMemoCache: Ju,
    useCacheRefresh: gd
  };
  cs.useEffectEvent = ld;
  var wd = {
    readContext: pt,
    use: uo,
    useCallback: sd,
    useContext: pt,
    useEffect: ls,
    useImperativeHandle: ud,
    useInsertionEffect: rd,
    useLayoutEffect: id,
    useMemo: cd,
    useReducer: ts,
    useRef: nd,
    useState: function() {
      return ts(ra);
    },
    useDebugValue: rs,
    useDeferredValue: function(e, t) {
      var n = Pe();
      return Oe === null ? is(n, e, t) : fd(
        n,
        Oe.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = ts(ra)[0], t = Pe().memoizedState;
      return [
        typeof e == "boolean" ? e : Ir(e),
        t
      ];
    },
    useSyncExternalStore: Bf,
    useId: hd,
    useHostTransitionStatus: us,
    useFormState: td,
    useActionState: td,
    useOptimistic: function(e, t) {
      var n = Pe();
      return Oe !== null ? Xf(n, Oe, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
    },
    useMemoCache: Ju,
    useCacheRefresh: gd
  };
  wd.useEffectEvent = ld;
  function fs(e, t, n, a) {
    t = e.memoizedState, n = n(a, t), n = n == null ? t : M({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var ds = {
    enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var a = Zt(), l = Ua(a);
      l.payload = t, n != null && (l.callback = n), t = ja(e, l, a), t !== null && (Mt(t, e, a), Qr(t, e, a));
    },
    enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var a = Zt(), l = Ua(a);
      l.tag = 1, l.payload = t, n != null && (l.callback = n), t = ja(e, l, a), t !== null && (Mt(t, e, a), Qr(t, e, a));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = Zt(), a = Ua(n);
      a.tag = 2, t != null && (a.callback = t), t = ja(e, a, n), t !== null && (Mt(t, e, n), Qr(t, e, n));
    }
  };
  function Td(e, t, n, a, l, i, u) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, i, u) : t.prototype && t.prototype.isPureReactComponent ? !jr(n, a) || !jr(l, i) : !0;
  }
  function kd(e, t, n, a) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, a), t.state !== e && ds.enqueueReplaceState(t, t.state, null);
  }
  function Tl(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var a in t)
        a !== "ref" && (n[a] = t[a]);
    }
    if (e = e.defaultProps) {
      n === t && (n = M({}, n));
      for (var l in e)
        n[l] === void 0 && (n[l] = e[l]);
    }
    return n;
  }
  function xd(e) {
    Fi(e);
  }
  function Ad(e) {
    console.error(e);
  }
  function Ed(e) {
    Fi(e);
  }
  function mo(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function _d(e, t, n) {
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
  function ps(e, t, n) {
    return n = Ua(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      mo(e, t);
    }, n;
  }
  function Cd(e) {
    return e = Ua(e), e.tag = 3, e;
  }
  function Od(e, t, n, a) {
    var l = n.type.getDerivedStateFromError;
    if (typeof l == "function") {
      var i = a.value;
      e.payload = function() {
        return l(i);
      }, e.callback = function() {
        _d(t, n, a);
      };
    }
    var u = n.stateNode;
    u !== null && typeof u.componentDidCatch == "function" && (e.callback = function() {
      _d(t, n, a), typeof l != "function" && (Ga === null ? Ga = /* @__PURE__ */ new Set([this]) : Ga.add(this));
      var d = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: d !== null ? d : ""
      });
    });
  }
  function Gg(e, t, n, a, l) {
    if (n.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = n.alternate, t !== null && Wl(
        t,
        n,
        l,
        !0
      ), n = Pt.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
            return vn === null ? Eo() : n.alternate === null && Ge === 0 && (Ge = 3), n.flags &= -257, n.flags |= 65536, n.lanes = l, a === eo ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), Hs(e, a, l)), !1;
          case 22:
            return n.flags |= 65536, a === eo ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : n.add(a)), Hs(e, a, l)), !1;
        }
        throw Error(c(435, n.tag));
      }
      return Hs(e, a, l), Eo(), !1;
    }
    if (ye)
      return t = Pt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = l, a !== Ru && (e = Error(c(422), { cause: a }), Br(un(e, n)))) : (a !== Ru && (t = Error(c(423), {
        cause: a
      }), Br(
        un(t, n)
      )), e = e.current.alternate, e.flags |= 65536, l &= -l, e.lanes |= l, a = un(a, n), l = ps(
        e.stateNode,
        a,
        l
      ), Gu(e, l), Ge !== 4 && (Ge = 2)), !1;
    var i = Error(c(520), { cause: a });
    if (i = un(i, n), ri === null ? ri = [i] : ri.push(i), Ge !== 4 && (Ge = 2), t === null) return !0;
    a = un(a, n), n = t;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, e = l & -l, n.lanes |= e, e = ps(n.stateNode, a, e), Gu(n, e), !1;
        case 1:
          if (t = n.type, i = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (Ga === null || !Ga.has(i))))
            return n.flags |= 65536, l &= -l, n.lanes |= l, l = Cd(l), Od(
              l,
              e,
              n,
              a
            ), Gu(n, l), !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var ms = Error(c(461)), Je = !1;
  function mt(e, t, n, a) {
    t.child = e === null ? Df(t, null, n, a) : Sl(
      t,
      e.child,
      n,
      a
    );
  }
  function Nd(e, t, n, a, l) {
    n = n.render;
    var i = t.ref;
    if ("ref" in a) {
      var u = {};
      for (var d in a)
        d !== "ref" && (u[d] = a[d]);
    } else u = a;
    return gl(t), a = Iu(
      e,
      t,
      n,
      u,
      i,
      l
    ), d = Ku(), e !== null && !Je ? (Zu(e, t, l), ia(e, t, l)) : (ye && d && Nu(t), t.flags |= 1, mt(e, t, a, l), t.child);
  }
  function zd(e, t, n, a, l) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" && !_u(i) && i.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = i, Rd(
        e,
        t,
        i,
        a,
        l
      )) : (e = $i(
        n.type,
        null,
        a,
        t,
        t.mode,
        l
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (i = e.child, !Ts(e, l)) {
      var u = i.memoizedProps;
      if (n = n.compare, n = n !== null ? n : jr, n(u, a) && e.ref === t.ref)
        return ia(e, t, l);
    }
    return t.flags |= 1, e = ea(i, a), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Rd(e, t, n, a, l) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (jr(i, a) && e.ref === t.ref)
        if (Je = !1, t.pendingProps = a = i, Ts(e, l))
          (e.flags & 131072) !== 0 && (Je = !0);
        else
          return t.lanes = e.lanes, ia(e, t, l);
    }
    return hs(
      e,
      t,
      n,
      a,
      l
    );
  }
  function Dd(e, t, n, a) {
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
        return Ld(
          e,
          t,
          i,
          n,
          a
        );
      }
      if ((n & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Wi(
          t,
          i !== null ? i.cachePool : null
        ), i !== null ? Uf(t, i) : Qu(), jf(t);
      else
        return a = t.lanes = 536870912, Ld(
          e,
          t,
          i !== null ? i.baseLanes | n : n,
          n,
          a
        );
    } else
      i !== null ? (Wi(t, i.cachePool), Uf(t, i), qa(), t.memoizedState = null) : (e !== null && Wi(t, null), Qu(), qa());
    return mt(e, t, l, n), t.child;
  }
  function Wr(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Ld(e, t, n, a, l) {
    var i = qu();
    return i = i === null ? null : { parent: Ze._currentValue, pool: i }, t.memoizedState = {
      baseLanes: n,
      cachePool: i
    }, e !== null && Wi(t, null), Qu(), jf(t), e !== null && Wl(e, t, a, !0), t.childLanes = l, null;
  }
  function ho(e, t) {
    return t = yo(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Md(e, t, n) {
    return Sl(t, e.child, null, n), e = ho(t, t.pendingProps), e.flags |= 2, $t(t), t.memoizedState = null, e;
  }
  function Fg(e, t, n) {
    var a = t.pendingProps, l = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (ye) {
        if (a.mode === "hidden")
          return e = ho(t, a), t.lanes = 536870912, Wr(null, e);
        if (Pu(t), (e = Me) ? (e = Pp(
          e,
          fn
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: za !== null ? { id: Un, overflow: jn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = vf(e), n.return = t, t.child = n, dt = t, Me = null)) : e = null, e === null) throw Da(t);
        return t.lanes = 536870912, null;
      }
      return ho(t, a);
    }
    var i = e.memoizedState;
    if (i !== null) {
      var u = i.dehydrated;
      if (Pu(t), l)
        if (t.flags & 256)
          t.flags &= -257, t = Md(
            e,
            t,
            n
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(c(558));
      else if (Je || Wl(e, t, n, !1), l = (n & e.childLanes) !== 0, Je || l) {
        if (a = Re, a !== null && (u = Pn(a, n), u !== 0 && u !== i.retryLane))
          throw i.retryLane = u, dl(e, u), Mt(a, e, u), ms;
        Eo(), t = Md(
          e,
          t,
          n
        );
      } else
        e = i.treeContext, Me = dn(u.nextSibling), dt = t, ye = !0, Ra = null, fn = !1, e !== null && wf(t, e), t = ho(t, a), t.flags |= 4096;
      return t;
    }
    return e = ea(e.child, {
      mode: a.mode,
      children: a.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function go(e, t) {
    var n = t.ref;
    if (n === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object")
        throw Error(c(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function hs(e, t, n, a, l) {
    return gl(t), n = Iu(
      e,
      t,
      n,
      a,
      void 0,
      l
    ), a = Ku(), e !== null && !Je ? (Zu(e, t, l), ia(e, t, l)) : (ye && a && Nu(t), t.flags |= 1, mt(e, t, n, l), t.child);
  }
  function Ud(e, t, n, a, l, i) {
    return gl(t), t.updateQueue = null, n = qf(
      t,
      a,
      n,
      l
    ), Hf(e), a = Ku(), e !== null && !Je ? (Zu(e, t, i), ia(e, t, i)) : (ye && a && Nu(t), t.flags |= 1, mt(e, t, n, i), t.child);
  }
  function jd(e, t, n, a, l) {
    if (gl(t), t.stateNode === null) {
      var i = $l, u = n.contextType;
      typeof u == "object" && u !== null && (i = pt(u)), i = new n(a, i), t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = ds, t.stateNode = i, i._reactInternals = t, i = t.stateNode, i.props = a, i.state = t.memoizedState, i.refs = {}, Yu(t), u = n.contextType, i.context = typeof u == "object" && u !== null ? pt(u) : $l, i.state = t.memoizedState, u = n.getDerivedStateFromProps, typeof u == "function" && (fs(
        t,
        n,
        u,
        a
      ), i.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (u = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), u !== i.state && ds.enqueueReplaceState(i, i.state, null), Pr(t, a, i, l), Xr(), i.state = t.memoizedState), typeof i.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (e === null) {
      i = t.stateNode;
      var d = t.memoizedProps, g = Tl(n, d);
      i.props = g;
      var E = i.context, N = n.contextType;
      u = $l, typeof N == "object" && N !== null && (u = pt(N));
      var L = n.getDerivedStateFromProps;
      N = typeof L == "function" || typeof i.getSnapshotBeforeUpdate == "function", d = t.pendingProps !== d, N || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (d || E !== u) && kd(
        t,
        i,
        a,
        u
      ), Ma = !1;
      var _ = t.memoizedState;
      i.state = _, Pr(t, a, i, l), Xr(), E = t.memoizedState, d || _ !== E || Ma ? (typeof L == "function" && (fs(
        t,
        n,
        L,
        a
      ), E = t.memoizedState), (g = Ma || Td(
        t,
        n,
        g,
        a,
        _,
        E,
        u
      )) ? (N || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = E), i.props = a, i.state = E, i.context = u, a = g) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      i = t.stateNode, Vu(e, t), u = t.memoizedProps, N = Tl(n, u), i.props = N, L = t.pendingProps, _ = i.context, E = n.contextType, g = $l, typeof E == "object" && E !== null && (g = pt(E)), d = n.getDerivedStateFromProps, (E = typeof d == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== L || _ !== g) && kd(
        t,
        i,
        a,
        g
      ), Ma = !1, _ = t.memoizedState, i.state = _, Pr(t, a, i, l), Xr();
      var C = t.memoizedState;
      u !== L || _ !== C || Ma || e !== null && e.dependencies !== null && Ki(e.dependencies) ? (typeof d == "function" && (fs(
        t,
        n,
        d,
        a
      ), C = t.memoizedState), (N = Ma || Td(
        t,
        n,
        N,
        a,
        _,
        C,
        g
      ) || e !== null && e.dependencies !== null && Ki(e.dependencies)) ? (E || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(a, C, g), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(
        a,
        C,
        g
      )), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && _ === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && _ === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = C), i.props = a, i.state = C, i.context = g, a = N) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && _ === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && _ === e.memoizedState || (t.flags |= 1024), a = !1);
    }
    return i = a, go(e, t), a = (t.flags & 128) !== 0, i || a ? (i = t.stateNode, n = a && typeof n.getDerivedStateFromError != "function" ? null : i.render(), t.flags |= 1, e !== null && a ? (t.child = Sl(
      t,
      e.child,
      null,
      l
    ), t.child = Sl(
      t,
      null,
      n,
      l
    )) : mt(e, t, n, l), t.memoizedState = i.state, e = t.child) : e = ia(
      e,
      t,
      l
    ), e;
  }
  function Hd(e, t, n, a) {
    return ml(), t.flags |= 256, mt(e, t, n, a), t.child;
  }
  var gs = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function ys(e) {
    return { baseLanes: e, cachePool: _f() };
  }
  function vs(e, t, n) {
    return e = e !== null ? e.childLanes & ~n : 0, t && (e |= Kt), e;
  }
  function qd(e, t, n) {
    var a = t.pendingProps, l = !1, i = (t.flags & 128) !== 0, u;
    if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (Xe.current & 2) !== 0), u && (l = !0, t.flags &= -129), u = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (ye) {
        if (l ? Ha(t) : qa(), (e = Me) ? (e = Pp(
          e,
          fn
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: za !== null ? { id: Un, overflow: jn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = vf(e), n.return = t, t.child = n, dt = t, Me = null)) : e = null, e === null) throw Da(t);
        return ec(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var d = a.children;
      return a = a.fallback, l ? (qa(), l = t.mode, d = yo(
        { mode: "hidden", children: d },
        l
      ), a = pl(
        a,
        l,
        n,
        null
      ), d.return = t, a.return = t, d.sibling = a, t.child = d, a = t.child, a.memoizedState = ys(n), a.childLanes = vs(
        e,
        u,
        n
      ), t.memoizedState = gs, Wr(null, a)) : (Ha(t), bs(t, d));
    }
    var g = e.memoizedState;
    if (g !== null && (d = g.dehydrated, d !== null)) {
      if (i)
        t.flags & 256 ? (Ha(t), t.flags &= -257, t = Ss(
          e,
          t,
          n
        )) : t.memoizedState !== null ? (qa(), t.child = e.child, t.flags |= 128, t = null) : (qa(), d = a.fallback, l = t.mode, a = yo(
          { mode: "visible", children: a.children },
          l
        ), d = pl(
          d,
          l,
          n,
          null
        ), d.flags |= 2, a.return = t, d.return = t, a.sibling = d, t.child = a, Sl(
          t,
          e.child,
          null,
          n
        ), a = t.child, a.memoizedState = ys(n), a.childLanes = vs(
          e,
          u,
          n
        ), t.memoizedState = gs, t = Wr(null, a));
      else if (Ha(t), ec(d)) {
        if (u = d.nextSibling && d.nextSibling.dataset, u) var E = u.dgst;
        u = E, a = Error(c(419)), a.stack = "", a.digest = u, Br({ value: a, source: null, stack: null }), t = Ss(
          e,
          t,
          n
        );
      } else if (Je || Wl(e, t, n, !1), u = (n & e.childLanes) !== 0, Je || u) {
        if (u = Re, u !== null && (a = Pn(u, n), a !== 0 && a !== g.retryLane))
          throw g.retryLane = a, dl(e, a), Mt(u, e, a), ms;
        Js(d) || Eo(), t = Ss(
          e,
          t,
          n
        );
      } else
        Js(d) ? (t.flags |= 192, t.child = e.child, t = null) : (e = g.treeContext, Me = dn(
          d.nextSibling
        ), dt = t, ye = !0, Ra = null, fn = !1, e !== null && wf(t, e), t = bs(
          t,
          a.children
        ), t.flags |= 4096);
      return t;
    }
    return l ? (qa(), d = a.fallback, l = t.mode, g = e.child, E = g.sibling, a = ea(g, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = g.subtreeFlags & 65011712, E !== null ? d = ea(
      E,
      d
    ) : (d = pl(
      d,
      l,
      n,
      null
    ), d.flags |= 2), d.return = t, a.return = t, a.sibling = d, t.child = a, Wr(null, a), a = t.child, d = e.child.memoizedState, d === null ? d = ys(n) : (l = d.cachePool, l !== null ? (g = Ze._currentValue, l = l.parent !== g ? { parent: g, pool: g } : l) : l = _f(), d = {
      baseLanes: d.baseLanes | n,
      cachePool: l
    }), a.memoizedState = d, a.childLanes = vs(
      e,
      u,
      n
    ), t.memoizedState = gs, Wr(e.child, a)) : (Ha(t), n = e.child, e = n.sibling, n = ea(n, {
      mode: "visible",
      children: a.children
    }), n.return = t, n.sibling = null, e !== null && (u = t.deletions, u === null ? (t.deletions = [e], t.flags |= 16) : u.push(e)), t.child = n, t.memoizedState = null, n);
  }
  function bs(e, t) {
    return t = yo(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function yo(e, t) {
    return e = Xt(22, e, null, t), e.lanes = 0, e;
  }
  function Ss(e, t, n) {
    return Sl(t, e.child, null, n), e = bs(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Bd(e, t, n) {
    e.lanes |= t;
    var a = e.alternate;
    a !== null && (a.lanes |= t), Mu(e.return, t, n);
  }
  function ws(e, t, n, a, l, i) {
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
  function Yd(e, t, n) {
    var a = t.pendingProps, l = a.revealOrder, i = a.tail;
    a = a.children;
    var u = Xe.current, d = (u & 2) !== 0;
    if (d ? (u = u & 1 | 2, t.flags |= 128) : u &= 1, Z(Xe, u), mt(e, t, a, n), a = ye ? qr : 0, !d && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && Bd(e, n, t);
        else if (e.tag === 19)
          Bd(e, n, t);
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
          e = n.alternate, e !== null && lo(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), ws(
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
          if (e = l.alternate, e !== null && lo(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        ws(
          t,
          !0,
          n,
          null,
          i,
          a
        );
        break;
      case "together":
        ws(
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
  function ia(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Va |= t.lanes, (n & t.childLanes) === 0)
      if (e !== null) {
        if (Wl(
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
      for (e = t.child, n = ea(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        e = e.sibling, n = n.sibling = ea(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Ts(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Ki(e)));
  }
  function Qg(e, t, n) {
    switch (t.tag) {
      case 3:
        kn(t, t.stateNode.containerInfo), La(t, Ze, e.memoizedState.cache), ml();
        break;
      case 27:
      case 5:
        Ar(t);
        break;
      case 4:
        kn(t, t.stateNode.containerInfo);
        break;
      case 10:
        La(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, Pu(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (Ha(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? qd(e, t, n) : (Ha(t), e = ia(
            e,
            t,
            n
          ), e !== null ? e.sibling : null);
        Ha(t);
        break;
      case 19:
        var l = (e.flags & 128) !== 0;
        if (a = (n & t.childLanes) !== 0, a || (Wl(
          e,
          t,
          n,
          !1
        ), a = (n & t.childLanes) !== 0), l) {
          if (a)
            return Yd(
              e,
              t,
              n
            );
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), Z(Xe, Xe.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, Dd(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        La(t, Ze, e.memoizedState.cache);
    }
    return ia(e, t, n);
  }
  function Vd(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        Je = !0;
      else {
        if (!Ts(e, n) && (t.flags & 128) === 0)
          return Je = !1, Qg(
            e,
            t,
            n
          );
        Je = (e.flags & 131072) !== 0;
      }
    else
      Je = !1, ye && (t.flags & 1048576) !== 0 && Sf(t, qr, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (e = vl(t.elementType), t.type = e, typeof e == "function")
            _u(e) ? (a = Tl(e, a), t.tag = 1, t = jd(
              null,
              t,
              e,
              a,
              n
            )) : (t.tag = 0, t = hs(
              null,
              t,
              e,
              a,
              n
            ));
          else {
            if (e != null) {
              var l = e.$$typeof;
              if (l === le) {
                t.tag = 11, t = Nd(
                  null,
                  t,
                  e,
                  a,
                  n
                );
                break e;
              } else if (l === J) {
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
            throw t = Fe(e) || e, Error(c(306, t, ""));
          }
        }
        return t;
      case 0:
        return hs(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 1:
        return a = t.type, l = Tl(
          a,
          t.pendingProps
        ), jd(
          e,
          t,
          a,
          l,
          n
        );
      case 3:
        e: {
          if (kn(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(c(387));
          a = t.pendingProps;
          var i = t.memoizedState;
          l = i.element, Vu(e, t), Pr(t, a, null, n);
          var u = t.memoizedState;
          if (a = u.cache, La(t, Ze, a), a !== i.cache && Uu(
            t,
            [Ze],
            n,
            !0
          ), Xr(), a = u.element, i.isDehydrated)
            if (i = {
              element: a,
              isDehydrated: !1,
              cache: u.cache
            }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
              t = Hd(
                e,
                t,
                a,
                n
              );
              break e;
            } else if (a !== l) {
              l = un(
                Error(c(424)),
                t
              ), Br(l), t = Hd(
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
              for (Me = dn(e.firstChild), dt = t, ye = !0, Ra = null, fn = !0, n = Df(
                t,
                null,
                a,
                n
              ), t.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
            }
          else {
            if (ml(), a === l) {
              t = ia(
                e,
                t,
                n
              );
              break e;
            }
            mt(e, t, a, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return go(e, t), e === null ? (n = Jp(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = n : ye || (n = t.type, e = t.pendingProps, a = Do(
          lt.current
        ).createElement(n), a[Ie] = t, a[it] = e, ht(a, n, e), Ke(a), t.stateNode = a) : t.memoizedState = Jp(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return Ar(t), e === null && ye && (a = t.stateNode = Kp(
          t.type,
          t.pendingProps,
          lt.current
        ), dt = t, fn = !0, l = Me, Pa(t.type) ? (tc = l, Me = dn(a.firstChild)) : Me = l), mt(
          e,
          t,
          t.pendingProps.children,
          n
        ), go(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && ye && ((l = a = Me) && (a = wy(
          a,
          t.type,
          t.pendingProps,
          fn
        ), a !== null ? (t.stateNode = a, dt = t, Me = dn(a.firstChild), fn = !1, l = !0) : l = !1), l || Da(t)), Ar(t), l = t.type, i = t.pendingProps, u = e !== null ? e.memoizedProps : null, a = i.children, Ks(l, i) ? a = null : u !== null && Ks(l, u) && (t.flags |= 32), t.memoizedState !== null && (l = Iu(
          e,
          t,
          Ug,
          null,
          null,
          n
        ), pi._currentValue = l), go(e, t), mt(e, t, a, n), t.child;
      case 6:
        return e === null && ye && ((e = n = Me) && (n = Ty(
          n,
          t.pendingProps,
          fn
        ), n !== null ? (t.stateNode = n, dt = t, Me = null, e = !0) : e = !1), e || Da(t)), null;
      case 13:
        return qd(e, t, n);
      case 4:
        return kn(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, e === null ? t.child = Sl(
          t,
          null,
          a,
          n
        ) : mt(e, t, a, n), t.child;
      case 11:
        return Nd(
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
        return a = t.pendingProps, La(t, t.type, a.value), mt(e, t, a.children, n), t.child;
      case 9:
        return l = t.type._context, a = t.pendingProps.children, gl(t), l = pt(l), a = a(l), t.flags |= 1, mt(e, t, a, n), t.child;
      case 14:
        return zd(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 15:
        return Rd(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 19:
        return Yd(e, t, n);
      case 31:
        return Fg(e, t, n);
      case 22:
        return Dd(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        return gl(t), a = pt(Ze), e === null ? (l = qu(), l === null && (l = Re, i = ju(), l.pooledCache = i, i.refCount++, i !== null && (l.pooledCacheLanes |= n), l = i), t.memoizedState = { parent: a, cache: l }, Yu(t), La(t, Ze, l)) : ((e.lanes & n) !== 0 && (Vu(e, t), Pr(t, null, null, n), Xr()), l = e.memoizedState, i = t.memoizedState, l.parent !== a ? (l = { parent: a, cache: a }, t.memoizedState = l, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = l), La(t, Ze, a)) : (a = i.cache, La(t, Ze, a), a !== l.cache && Uu(
          t,
          [Ze],
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
    throw Error(c(156, t.tag));
  }
  function oa(e) {
    e.flags |= 4;
  }
  function ks(e, t, n, a, l) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (l & 335544128) === l)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (hp()) e.flags |= 8192;
        else
          throw bl = eo, Bu;
    } else e.flags &= -16777217;
  }
  function Gd(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !lm(t))
      if (hp()) e.flags |= 8192;
      else
        throw bl = eo, Bu;
  }
  function vo(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Er() : 536870912, e.lanes |= t, cr |= t);
  }
  function Jr(e, t) {
    if (!ye)
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
  function Ue(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, a = 0;
    if (t)
      for (var l = e.child; l !== null; )
        n |= l.lanes | l.childLanes, a |= l.subtreeFlags & 65011712, a |= l.flags & 65011712, l.return = e, l = l.sibling;
    else
      for (l = e.child; l !== null; )
        n |= l.lanes | l.childLanes, a |= l.subtreeFlags, a |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= a, e.childLanes = n, t;
  }
  function Xg(e, t, n) {
    var a = t.pendingProps;
    switch (zu(t), t.tag) {
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
        return n = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), aa(Ze), st(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (Zl(t) ? oa(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Du())), Ue(t), null;
      case 26:
        var l = t.type, i = t.memoizedState;
        return e === null ? (oa(t), i !== null ? (Ue(t), Gd(t, i)) : (Ue(t), ks(
          t,
          l,
          null,
          a,
          n
        ))) : i ? i !== e.memoizedState ? (oa(t), Ue(t), Gd(t, i)) : (Ue(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== a && oa(t), Ue(t), ks(
          t,
          l,
          e,
          a,
          n
        )), null;
      case 27:
        if (_l(t), n = lt.current, l = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== a && oa(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(c(166));
            return Ue(t), null;
          }
          e = be.current, Zl(t) ? Tf(t) : (e = Kp(l, a, n), t.stateNode = e, oa(t));
        }
        return Ue(t), null;
      case 5:
        if (_l(t), l = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== a && oa(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(c(166));
            return Ue(t), null;
          }
          if (i = be.current, Zl(t))
            Tf(t);
          else {
            var u = Do(
              lt.current
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
            i[Ie] = t, i[it] = a;
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
            e: switch (ht(i, l, a), l) {
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
            a && oa(t);
          }
        }
        return Ue(t), ks(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          n
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== a && oa(t);
        else {
          if (typeof a != "string" && t.stateNode === null)
            throw Error(c(166));
          if (e = lt.current, Zl(t)) {
            if (e = t.stateNode, n = t.memoizedProps, a = null, l = dt, l !== null)
              switch (l.tag) {
                case 27:
                case 5:
                  a = l.memoizedProps;
              }
            e[Ie] = t, e = !!(e.nodeValue === n || a !== null && a.suppressHydrationWarning === !0 || qp(e.nodeValue, n)), e || Da(t, !0);
          } else
            e = Do(e).createTextNode(
              a
            ), e[Ie] = t, t.stateNode = e;
        }
        return Ue(t), null;
      case 31:
        if (n = t.memoizedState, e === null || e.memoizedState !== null) {
          if (a = Zl(t), n !== null) {
            if (e === null) {
              if (!a) throw Error(c(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(557));
              e[Ie] = t;
            } else
              ml(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ue(t), e = !1;
          } else
            n = Du(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
          if (!e)
            return t.flags & 256 ? ($t(t), t) : ($t(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(c(558));
        }
        return Ue(t), null;
      case 13:
        if (a = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (l = Zl(t), a !== null && a.dehydrated !== null) {
            if (e === null) {
              if (!l) throw Error(c(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(c(317));
              l[Ie] = t;
            } else
              ml(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ue(t), l = !1;
          } else
            l = Du(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l), l = !0;
          if (!l)
            return t.flags & 256 ? ($t(t), t) : ($t(t), null);
        }
        return $t(t), (t.flags & 128) !== 0 ? (t.lanes = n, t) : (n = a !== null, e = e !== null && e.memoizedState !== null, n && (a = t.child, l = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (l = a.alternate.memoizedState.cachePool.pool), i = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (i = a.memoizedState.cachePool.pool), i !== l && (a.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), vo(t, t.updateQueue), Ue(t), null);
      case 4:
        return st(), e === null && Qs(t.stateNode.containerInfo), Ue(t), null;
      case 10:
        return aa(t.type), Ue(t), null;
      case 19:
        if (se(Xe), a = t.memoizedState, a === null) return Ue(t), null;
        if (l = (t.flags & 128) !== 0, i = a.rendering, i === null)
          if (l) Jr(a, !1);
          else {
            if (Ge !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (i = lo(e), i !== null) {
                  for (t.flags |= 128, Jr(a, !1), e = i.updateQueue, t.updateQueue = e, vo(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; )
                    yf(n, e), n = n.sibling;
                  return Z(
                    Xe,
                    Xe.current & 1 | 2
                  ), ye && ta(t, a.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            a.tail !== null && ct() > ko && (t.flags |= 128, l = !0, Jr(a, !1), t.lanes = 4194304);
          }
        else {
          if (!l)
            if (e = lo(i), e !== null) {
              if (t.flags |= 128, l = !0, e = e.updateQueue, t.updateQueue = e, vo(t, e), Jr(a, !0), a.tail === null && a.tailMode === "hidden" && !i.alternate && !ye)
                return Ue(t), null;
            } else
              2 * ct() - a.renderingStartTime > ko && n !== 536870912 && (t.flags |= 128, l = !0, Jr(a, !1), t.lanes = 4194304);
          a.isBackwards ? (i.sibling = t.child, t.child = i) : (e = a.last, e !== null ? e.sibling = i : t.child = i, a.last = i);
        }
        return a.tail !== null ? (e = a.tail, a.rendering = e, a.tail = e.sibling, a.renderingStartTime = ct(), e.sibling = null, n = Xe.current, Z(
          Xe,
          l ? n & 1 | 2 : n & 1
        ), ye && ta(t, a.treeForkCount), e) : (Ue(t), null);
      case 22:
      case 23:
        return $t(t), Xu(), a = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (Ue(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ue(t), n = t.updateQueue, n !== null && vo(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== n && (t.flags |= 2048), e !== null && se(yl), null;
      case 24:
        return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), aa(Ze), Ue(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(c(156, t.tag));
  }
  function Pg(e, t) {
    switch (zu(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return aa(Ze), st(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return _l(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if ($t(t), t.alternate === null)
            throw Error(c(340));
          ml();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if ($t(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(c(340));
          ml();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return se(Xe), null;
      case 4:
        return st(), null;
      case 10:
        return aa(t.type), null;
      case 22:
      case 23:
        return $t(t), Xu(), e !== null && se(yl), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return aa(Ze), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Fd(e, t) {
    switch (zu(t), t.tag) {
      case 3:
        aa(Ze), st();
        break;
      case 26:
      case 27:
      case 5:
        _l(t);
        break;
      case 4:
        st();
        break;
      case 31:
        t.memoizedState !== null && $t(t);
        break;
      case 13:
        $t(t);
        break;
      case 19:
        se(Xe);
        break;
      case 10:
        aa(t.type);
        break;
      case 22:
      case 23:
        $t(t), Xu(), e !== null && se(yl);
        break;
      case 24:
        aa(Ze);
    }
  }
  function ei(e, t) {
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
  function Ba(e, t, n) {
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
              var g = n, E = d;
              try {
                E();
              } catch (N) {
                _e(
                  l,
                  g,
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
  function Qd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        Mf(t, n);
      } catch (a) {
        _e(e, e.return, a);
      }
    }
  }
  function Xd(e, t, n) {
    n.props = Tl(
      e.type,
      e.memoizedProps
    ), n.state = e.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (a) {
      _e(e, t, a);
    }
  }
  function ti(e, t) {
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
  function Hn(e, t) {
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
  function Pd(e) {
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
  function xs(e, t, n) {
    try {
      var a = e.stateNode;
      hy(a, e.type, n, t), a[it] = t;
    } catch (l) {
      _e(e, e.return, l);
    }
  }
  function $d(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Pa(e.type) || e.tag === 4;
  }
  function As(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || $d(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Pa(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Es(e, t, n) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Gt));
    else if (a !== 4 && (a === 27 && Pa(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null))
      for (Es(e, t, n), e = e.sibling; e !== null; )
        Es(e, t, n), e = e.sibling;
  }
  function bo(e, t, n) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (a !== 4 && (a === 27 && Pa(e.type) && (n = e.stateNode), e = e.child, e !== null))
      for (bo(e, t, n), e = e.sibling; e !== null; )
        bo(e, t, n), e = e.sibling;
  }
  function Id(e) {
    var t = e.stateNode, n = e.memoizedProps;
    try {
      for (var a = e.type, l = t.attributes; l.length; )
        t.removeAttributeNode(l[0]);
      ht(t, a, n), t[Ie] = e, t[it] = n;
    } catch (i) {
      _e(e, e.return, i);
    }
  }
  var ua = !1, et = !1, _s = !1, Kd = typeof WeakSet == "function" ? WeakSet : Set, ot = null;
  function $g(e, t) {
    if (e = e.containerInfo, $s = Bo, e = uf(e), Su(e)) {
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
            var u = 0, d = -1, g = -1, E = 0, N = 0, L = e, _ = null;
            t: for (; ; ) {
              for (var C; L !== n || l !== 0 && L.nodeType !== 3 || (d = u + l), L !== i || a !== 0 && L.nodeType !== 3 || (g = u + a), L.nodeType === 3 && (u += L.nodeValue.length), (C = L.firstChild) !== null; )
                _ = L, L = C;
              for (; ; ) {
                if (L === e) break t;
                if (_ === n && ++E === l && (d = u), _ === i && ++N === a && (g = u), (C = L.nextSibling) !== null) break;
                L = _, _ = L.parentNode;
              }
              L = C;
            }
            n = d === -1 || g === -1 ? null : { start: d, end: g };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Is = { focusedElem: e, selectionRange: n }, Bo = !1, ot = t; ot !== null; )
      if (t = ot, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, ot = e;
      else
        for (; ot !== null; ) {
          switch (t = ot, i = t.alternate, e = t.flags, t.tag) {
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
                  var Q = Tl(
                    n.type,
                    l
                  );
                  e = a.getSnapshotBeforeUpdate(
                    Q,
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
                  Ws(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Ws(e);
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
            e.return = t.return, ot = e;
            break;
          }
          ot = t.return;
        }
  }
  function Zd(e, t, n) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        ca(e, n), a & 4 && ei(5, n);
        break;
      case 1:
        if (ca(e, n), a & 4)
          if (e = n.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (u) {
              _e(n, n.return, u);
            }
          else {
            var l = Tl(
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
        a & 64 && Qd(n), a & 512 && ti(n, n.return);
        break;
      case 3:
        if (ca(e, n), a & 64 && (e = n.updateQueue, e !== null)) {
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
            Mf(e, t);
          } catch (u) {
            _e(n, n.return, u);
          }
        }
        break;
      case 27:
        t === null && a & 4 && Id(n);
      case 26:
      case 5:
        ca(e, n), t === null && a & 4 && Pd(n), a & 512 && ti(n, n.return);
        break;
      case 12:
        ca(e, n);
        break;
      case 31:
        ca(e, n), a & 4 && ep(e, n);
        break;
      case 13:
        ca(e, n), a & 4 && tp(e, n), a & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = ay.bind(
          null,
          n
        ), ky(e, n))));
        break;
      case 22:
        if (a = n.memoizedState !== null || ua, !a) {
          t = t !== null && t.memoizedState !== null || et, l = ua;
          var i = et;
          ua = a, (et = t) && !i ? fa(
            e,
            n,
            (n.subtreeFlags & 8772) !== 0
          ) : ca(e, n), ua = l, et = i;
        }
        break;
      case 30:
        break;
      default:
        ca(e, n);
    }
  }
  function Wd(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Wd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Cr(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var qe = null, zt = !1;
  function sa(e, t, n) {
    for (n = n.child; n !== null; )
      Jd(e, t, n), n = n.sibling;
  }
  function Jd(e, t, n) {
    if ($e && typeof $e.onCommitFiberUnmount == "function")
      try {
        $e.onCommitFiberUnmount(Xn, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        et || Hn(n, t), sa(
          e,
          t,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        et || Hn(n, t);
        var a = qe, l = zt;
        Pa(n.type) && (qe = n.stateNode, zt = !1), sa(
          e,
          t,
          n
        ), ci(n.stateNode), qe = a, zt = l;
        break;
      case 5:
        et || Hn(n, t);
      case 6:
        if (a = qe, l = zt, qe = null, sa(
          e,
          t,
          n
        ), qe = a, zt = l, qe !== null)
          if (zt)
            try {
              (qe.nodeType === 9 ? qe.body : qe.nodeName === "HTML" ? qe.ownerDocument.body : qe).removeChild(n.stateNode);
            } catch (i) {
              _e(
                n,
                t,
                i
              );
            }
          else
            try {
              qe.removeChild(n.stateNode);
            } catch (i) {
              _e(
                n,
                t,
                i
              );
            }
        break;
      case 18:
        qe !== null && (zt ? (e = qe, Qp(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          n.stateNode
        ), vr(e)) : Qp(qe, n.stateNode));
        break;
      case 4:
        a = qe, l = zt, qe = n.stateNode.containerInfo, zt = !0, sa(
          e,
          t,
          n
        ), qe = a, zt = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Ba(2, n, t), et || Ba(4, n, t), sa(
          e,
          t,
          n
        );
        break;
      case 1:
        et || (Hn(n, t), a = n.stateNode, typeof a.componentWillUnmount == "function" && Xd(
          n,
          t,
          a
        )), sa(
          e,
          t,
          n
        );
        break;
      case 21:
        sa(
          e,
          t,
          n
        );
        break;
      case 22:
        et = (a = et) || n.memoizedState !== null, sa(
          e,
          t,
          n
        ), et = a;
        break;
      default:
        sa(
          e,
          t,
          n
        );
    }
  }
  function ep(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        vr(e);
      } catch (n) {
        _e(t, t.return, n);
      }
    }
  }
  function tp(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        vr(e);
      } catch (n) {
        _e(t, t.return, n);
      }
  }
  function Ig(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Kd()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Kd()), t;
      default:
        throw Error(c(435, e.tag));
    }
  }
  function So(e, t) {
    var n = Ig(e);
    t.forEach(function(a) {
      if (!n.has(a)) {
        n.add(a);
        var l = ly.bind(null, e, a);
        a.then(l, l);
      }
    });
  }
  function Rt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var l = n[a], i = e, u = t, d = u;
        e: for (; d !== null; ) {
          switch (d.tag) {
            case 27:
              if (Pa(d.type)) {
                qe = d.stateNode, zt = !1;
                break e;
              }
              break;
            case 5:
              qe = d.stateNode, zt = !1;
              break e;
            case 3:
            case 4:
              qe = d.stateNode.containerInfo, zt = !0;
              break e;
          }
          d = d.return;
        }
        if (qe === null) throw Error(c(160));
        Jd(i, u, l), qe = null, zt = !1, i = l.alternate, i !== null && (i.return = null), l.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        np(t, e), t = t.sibling;
  }
  var _n = null;
  function np(e, t) {
    var n = e.alternate, a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Rt(t, e), Dt(e), a & 4 && (Ba(3, e, e.return), ei(3, e), Ba(5, e, e.return));
        break;
      case 1:
        Rt(t, e), Dt(e), a & 512 && (et || n === null || Hn(n, n.return)), a & 64 && ua && (e = e.updateQueue, e !== null && (a = e.callbacks, a !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? a : n.concat(a))));
        break;
      case 26:
        var l = _n;
        if (Rt(t, e), Dt(e), a & 512 && (et || n === null || Hn(n, n.return)), a & 4) {
          var i = n !== null ? n.memoizedState : null;
          if (a = e.memoizedState, n === null)
            if (a === null)
              if (e.stateNode === null) {
                e: {
                  a = e.type, n = e.memoizedProps, l = l.ownerDocument || l;
                  t: switch (a) {
                    case "title":
                      i = l.getElementsByTagName("title")[0], (!i || i[rn] || i[Ie] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = l.createElement(a), l.head.insertBefore(
                        i,
                        l.querySelector("head > title")
                      )), ht(i, a, n), i[Ie] = e, Ke(i), a = i;
                      break e;
                    case "link":
                      var u = nm(
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
                      i = l.createElement(a), ht(i, a, n), l.head.appendChild(i);
                      break;
                    case "meta":
                      if (u = nm(
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
                      i = l.createElement(a), ht(i, a, n), l.head.appendChild(i);
                      break;
                    default:
                      throw Error(c(468, a));
                  }
                  i[Ie] = e, Ke(i), a = i;
                }
                e.stateNode = a;
              } else
                am(
                  l,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = tm(
                l,
                a,
                e.memoizedProps
              );
          else
            i !== a ? (i === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : i.count--, a === null ? am(
              l,
              e.type,
              e.stateNode
            ) : tm(
              l,
              a,
              e.memoizedProps
            )) : a === null && e.stateNode !== null && xs(
              e,
              e.memoizedProps,
              n.memoizedProps
            );
        }
        break;
      case 27:
        Rt(t, e), Dt(e), a & 512 && (et || n === null || Hn(n, n.return)), n !== null && a & 4 && xs(
          e,
          e.memoizedProps,
          n.memoizedProps
        );
        break;
      case 5:
        if (Rt(t, e), Dt(e), a & 512 && (et || n === null || Hn(n, n.return)), e.flags & 32) {
          l = e.stateNode;
          try {
            Tt(l, "");
          } catch (Q) {
            _e(e, e.return, Q);
          }
        }
        a & 4 && e.stateNode != null && (l = e.memoizedProps, xs(
          e,
          l,
          n !== null ? n.memoizedProps : l
        )), a & 1024 && (_s = !0);
        break;
      case 6:
        if (Rt(t, e), Dt(e), a & 4) {
          if (e.stateNode === null)
            throw Error(c(162));
          a = e.memoizedProps, n = e.stateNode;
          try {
            n.nodeValue = a;
          } catch (Q) {
            _e(e, e.return, Q);
          }
        }
        break;
      case 3:
        if (Uo = null, l = _n, _n = Lo(t.containerInfo), Rt(t, e), _n = l, Dt(e), a & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            vr(t.containerInfo);
          } catch (Q) {
            _e(e, e.return, Q);
          }
        _s && (_s = !1, ap(e));
        break;
      case 4:
        a = _n, _n = Lo(
          e.stateNode.containerInfo
        ), Rt(t, e), Dt(e), _n = a;
        break;
      case 12:
        Rt(t, e), Dt(e);
        break;
      case 31:
        Rt(t, e), Dt(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, So(e, a)));
        break;
      case 13:
        Rt(t, e), Dt(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (To = ct()), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, So(e, a)));
        break;
      case 22:
        l = e.memoizedState !== null;
        var g = n !== null && n.memoizedState !== null, E = ua, N = et;
        if (ua = E || l, et = N || g, Rt(t, e), et = N, ua = E, Dt(e), a & 8192)
          e: for (t = e.stateNode, t._visibility = l ? t._visibility & -2 : t._visibility | 1, l && (n === null || g || ua || et || kl(e)), n = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                g = n = t;
                try {
                  if (i = g.stateNode, l)
                    u = i.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none";
                  else {
                    d = g.stateNode;
                    var L = g.memoizedProps.style, _ = L != null && L.hasOwnProperty("display") ? L.display : null;
                    d.style.display = _ == null || typeof _ == "boolean" ? "" : ("" + _).trim();
                  }
                } catch (Q) {
                  _e(g, g.return, Q);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                g = t;
                try {
                  g.stateNode.nodeValue = l ? "" : g.memoizedProps;
                } catch (Q) {
                  _e(g, g.return, Q);
                }
              }
            } else if (t.tag === 18) {
              if (n === null) {
                g = t;
                try {
                  var C = g.stateNode;
                  l ? Xp(C, !0) : Xp(g.stateNode, !1);
                } catch (Q) {
                  _e(g, g.return, Q);
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
        a & 4 && (a = e.updateQueue, a !== null && (n = a.retryQueue, n !== null && (a.retryQueue = null, So(e, n))));
        break;
      case 19:
        Rt(t, e), Dt(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, So(e, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Rt(t, e), Dt(e);
    }
  }
  function Dt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, a = e.return; a !== null; ) {
          if ($d(a)) {
            n = a;
            break;
          }
          a = a.return;
        }
        if (n == null) throw Error(c(160));
        switch (n.tag) {
          case 27:
            var l = n.stateNode, i = As(e);
            bo(e, i, l);
            break;
          case 5:
            var u = n.stateNode;
            n.flags & 32 && (Tt(u, ""), n.flags &= -33);
            var d = As(e);
            bo(e, d, u);
            break;
          case 3:
          case 4:
            var g = n.stateNode.containerInfo, E = As(e);
            Es(
              e,
              E,
              g
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
  function ap(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        ap(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function ca(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Zd(e, t.alternate, t), t = t.sibling;
  }
  function kl(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ba(4, t, t.return), kl(t);
          break;
        case 1:
          Hn(t, t.return);
          var n = t.stateNode;
          typeof n.componentWillUnmount == "function" && Xd(
            t,
            t.return,
            n
          ), kl(t);
          break;
        case 27:
          ci(t.stateNode);
        case 26:
        case 5:
          Hn(t, t.return), kl(t);
          break;
        case 22:
          t.memoizedState === null && kl(t);
          break;
        case 30:
          kl(t);
          break;
        default:
          kl(t);
      }
      e = e.sibling;
    }
  }
  function fa(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate, l = e, i = t, u = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          fa(
            l,
            i,
            n
          ), ei(4, i);
          break;
        case 1:
          if (fa(
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
              var g = l.shared.hiddenCallbacks;
              if (g !== null)
                for (l.shared.hiddenCallbacks = null, l = 0; l < g.length; l++)
                  Lf(g[l], d);
            } catch (E) {
              _e(a, a.return, E);
            }
          }
          n && u & 64 && Qd(i), ti(i, i.return);
          break;
        case 27:
          Id(i);
        case 26:
        case 5:
          fa(
            l,
            i,
            n
          ), n && a === null && u & 4 && Pd(i), ti(i, i.return);
          break;
        case 12:
          fa(
            l,
            i,
            n
          );
          break;
        case 31:
          fa(
            l,
            i,
            n
          ), n && u & 4 && ep(l, i);
          break;
        case 13:
          fa(
            l,
            i,
            n
          ), n && u & 4 && tp(l, i);
          break;
        case 22:
          i.memoizedState === null && fa(
            l,
            i,
            n
          ), ti(i, i.return);
          break;
        case 30:
          break;
        default:
          fa(
            l,
            i,
            n
          );
      }
      t = t.sibling;
    }
  }
  function Cs(e, t) {
    var n = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && Yr(n));
  }
  function Os(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Yr(e));
  }
  function Cn(e, t, n, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        lp(
          e,
          t,
          n,
          a
        ), t = t.sibling;
  }
  function lp(e, t, n, a) {
    var l = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Cn(
          e,
          t,
          n,
          a
        ), l & 2048 && ei(9, t);
        break;
      case 1:
        Cn(
          e,
          t,
          n,
          a
        );
        break;
      case 3:
        Cn(
          e,
          t,
          n,
          a
        ), l & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Yr(e)));
        break;
      case 12:
        if (l & 2048) {
          Cn(
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
          } catch (g) {
            _e(t, t.return, g);
          }
        } else
          Cn(
            e,
            t,
            n,
            a
          );
        break;
      case 31:
        Cn(
          e,
          t,
          n,
          a
        );
        break;
      case 13:
        Cn(
          e,
          t,
          n,
          a
        );
        break;
      case 23:
        break;
      case 22:
        i = t.stateNode, u = t.alternate, t.memoizedState !== null ? i._visibility & 2 ? Cn(
          e,
          t,
          n,
          a
        ) : ni(e, t) : i._visibility & 2 ? Cn(
          e,
          t,
          n,
          a
        ) : (i._visibility |= 2, or(
          e,
          t,
          n,
          a,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), l & 2048 && Cs(u, t);
        break;
      case 24:
        Cn(
          e,
          t,
          n,
          a
        ), l & 2048 && Os(t.alternate, t);
        break;
      default:
        Cn(
          e,
          t,
          n,
          a
        );
    }
  }
  function or(e, t, n, a, l) {
    for (l = l && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var i = e, u = t, d = n, g = a, E = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          or(
            i,
            u,
            d,
            g,
            l
          ), ei(8, u);
          break;
        case 23:
          break;
        case 22:
          var N = u.stateNode;
          u.memoizedState !== null ? N._visibility & 2 ? or(
            i,
            u,
            d,
            g,
            l
          ) : ni(
            i,
            u
          ) : (N._visibility |= 2, or(
            i,
            u,
            d,
            g,
            l
          )), l && E & 2048 && Cs(
            u.alternate,
            u
          );
          break;
        case 24:
          or(
            i,
            u,
            d,
            g,
            l
          ), l && E & 2048 && Os(u.alternate, u);
          break;
        default:
          or(
            i,
            u,
            d,
            g,
            l
          );
      }
      t = t.sibling;
    }
  }
  function ni(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e, a = t, l = a.flags;
        switch (a.tag) {
          case 22:
            ni(n, a), l & 2048 && Cs(
              a.alternate,
              a
            );
            break;
          case 24:
            ni(n, a), l & 2048 && Os(a.alternate, a);
            break;
          default:
            ni(n, a);
        }
        t = t.sibling;
      }
  }
  var ai = 8192;
  function ur(e, t, n) {
    if (e.subtreeFlags & ai)
      for (e = e.child; e !== null; )
        rp(
          e,
          t,
          n
        ), e = e.sibling;
  }
  function rp(e, t, n) {
    switch (e.tag) {
      case 26:
        ur(
          e,
          t,
          n
        ), e.flags & ai && e.memoizedState !== null && My(
          n,
          _n,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        ur(
          e,
          t,
          n
        );
        break;
      case 3:
      case 4:
        var a = _n;
        _n = Lo(e.stateNode.containerInfo), ur(
          e,
          t,
          n
        ), _n = a;
        break;
      case 22:
        e.memoizedState === null && (a = e.alternate, a !== null && a.memoizedState !== null ? (a = ai, ai = 16777216, ur(
          e,
          t,
          n
        ), ai = a) : ur(
          e,
          t,
          n
        ));
        break;
      default:
        ur(
          e,
          t,
          n
        );
    }
  }
  function ip(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function li(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          ot = a, up(
            a,
            e
          );
        }
      ip(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        op(e), e = e.sibling;
  }
  function op(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        li(e), e.flags & 2048 && Ba(9, e, e.return);
        break;
      case 3:
        li(e);
        break;
      case 12:
        li(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, wo(e)) : li(e);
        break;
      default:
        li(e);
    }
  }
  function wo(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          ot = a, up(
            a,
            e
          );
        }
      ip(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          Ba(8, t, t.return), wo(t);
          break;
        case 22:
          n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, wo(t));
          break;
        default:
          wo(t);
      }
      e = e.sibling;
    }
  }
  function up(e, t) {
    for (; ot !== null; ) {
      var n = ot;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Ba(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var a = n.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Yr(n.memoizedState.cache);
      }
      if (a = n.child, a !== null) a.return = n, ot = a;
      else
        e: for (n = e; ot !== null; ) {
          a = ot;
          var l = a.sibling, i = a.return;
          if (Wd(a), a === n) {
            ot = null;
            break e;
          }
          if (l !== null) {
            l.return = i, ot = l;
            break e;
          }
          ot = i;
        }
    }
  }
  var Kg = {
    getCacheForType: function(e) {
      var t = pt(Ze), n = t.data.get(e);
      return n === void 0 && (n = e(), t.data.set(e, n)), n;
    },
    cacheSignal: function() {
      return pt(Ze).controller.signal;
    }
  }, Zg = typeof WeakMap == "function" ? WeakMap : Map, ke = 0, Re = null, de = null, me = 0, Ee = 0, It = null, Ya = !1, sr = !1, Ns = !1, da = 0, Ge = 0, Va = 0, xl = 0, zs = 0, Kt = 0, cr = 0, ri = null, Lt = null, Rs = !1, To = 0, sp = 0, ko = 1 / 0, xo = null, Ga = null, at = 0, Fa = null, fr = null, pa = 0, Ds = 0, Ls = null, cp = null, ii = 0, Ms = null;
  function Zt() {
    return (ke & 2) !== 0 && me !== 0 ? me & -me : U.T !== null ? Ys() : Ri();
  }
  function fp() {
    if (Kt === 0)
      if ((me & 536870912) === 0 || ye) {
        var e = wa;
        wa <<= 1, (wa & 3932160) === 0 && (wa = 262144), Kt = e;
      } else Kt = 536870912;
    return e = Pt.current, e !== null && (e.flags |= 32), Kt;
  }
  function Mt(e, t, n) {
    (e === Re && (Ee === 2 || Ee === 9) || e.cancelPendingCommit !== null) && (dr(e, 0), Qa(
      e,
      me,
      Kt,
      !1
    )), ka(e, n), ((ke & 2) === 0 || e !== Re) && (e === Re && ((ke & 2) === 0 && (xl |= n), Ge === 4 && Qa(
      e,
      me,
      Kt,
      !1
    )), qn(e));
  }
  function dp(e, t, n) {
    if ((ke & 6) !== 0) throw Error(c(327));
    var a = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Ta(e, t), l = a ? ey(e, t) : js(e, t, !0), i = a;
    do {
      if (l === 0) {
        sr && !a && Qa(e, t, 0, !1);
        break;
      } else {
        if (n = e.current.alternate, i && !Wg(n)) {
          l = js(e, t, !1), i = !1;
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
              l = ri;
              var g = d.current.memoizedState.isDehydrated;
              if (g && (dr(d, u).flags |= 256), u = js(
                d,
                u,
                !1
              ), u !== 2) {
                if (Ns && !g) {
                  d.errorRecoveryDisabledLanes |= i, xl |= i, l = 4;
                  break e;
                }
                i = Lt, Lt = l, i !== null && (Lt === null ? Lt = i : Lt.push.apply(
                  Lt,
                  i
                ));
              }
              l = u;
            }
            if (i = !1, l !== 2) continue;
          }
        }
        if (l === 1) {
          dr(e, 0), Qa(e, t, 0, !0);
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
              Qa(
                a,
                t,
                Kt,
                !Ya
              );
              break e;
            case 2:
              Lt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(c(329));
          }
          if ((t & 62914560) === t && (l = To + 300 - ct(), 10 < l)) {
            if (Qa(
              a,
              t,
              Kt,
              !Ya
            ), an(a, 0, !0) !== 0) break e;
            pa = t, a.timeoutHandle = Gp(
              pp.bind(
                null,
                a,
                n,
                Lt,
                xo,
                Rs,
                t,
                Kt,
                xl,
                cr,
                Ya,
                i,
                "Throttled",
                -0,
                0
              ),
              l
            );
            break e;
          }
          pp(
            a,
            n,
            Lt,
            xo,
            Rs,
            t,
            Kt,
            xl,
            cr,
            Ya,
            i,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    qn(e);
  }
  function pp(e, t, n, a, l, i, u, d, g, E, N, L, _, C) {
    if (e.timeoutHandle = -1, L = t.subtreeFlags, L & 8192 || (L & 16785408) === 16785408) {
      L = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Gt
      }, rp(
        t,
        i,
        L
      );
      var Q = (i & 62914560) === i ? To - ct() : (i & 4194048) === i ? sp - ct() : 0;
      if (Q = Uy(
        L,
        Q
      ), Q !== null) {
        pa = i, e.cancelPendingCommit = Q(
          wp.bind(
            null,
            e,
            t,
            i,
            n,
            a,
            l,
            u,
            d,
            g,
            N,
            L,
            null,
            _,
            C
          )
        ), Qa(e, i, u, !E);
        return;
      }
    }
    wp(
      e,
      t,
      i,
      n,
      a,
      l,
      u,
      d,
      g
    );
  }
  function Wg(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var a = 0; a < n.length; a++) {
          var l = n[a], i = l.getSnapshot;
          l = l.value;
          try {
            if (!Qt(i(), l)) return !1;
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
  function Qa(e, t, n, a) {
    t &= ~zs, t &= ~xl, e.suspendedLanes |= t, e.pingedLanes &= ~t, a && (e.warmLanes |= t), a = e.expirationTimes;
    for (var l = t; 0 < l; ) {
      var i = 31 - rt(l), u = 1 << i;
      a[i] = -1, l &= ~u;
    }
    n !== 0 && rl(e, n, t);
  }
  function Ao() {
    return (ke & 6) === 0 ? (oi(0), !1) : !0;
  }
  function Us() {
    if (de !== null) {
      if (Ee === 0)
        var e = de.return;
      else
        e = de, na = hl = null, Wu(e), nr = null, Gr = 0, e = de;
      for (; e !== null; )
        Fd(e.alternate, e), e = e.return;
      de = null;
    }
  }
  function dr(e, t) {
    var n = e.timeoutHandle;
    n !== -1 && (e.timeoutHandle = -1, vy(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), pa = 0, Us(), Re = e, de = n = ea(e.current, null), me = t, Ee = 0, It = null, Ya = !1, sr = Ta(e, t), Ns = !1, cr = Kt = zs = xl = Va = Ge = 0, Lt = ri = null, Rs = !1, (t & 8) !== 0 && (t |= t & 32);
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var l = 31 - rt(a), i = 1 << l;
        t |= e[l], a &= ~i;
      }
    return da = t, Qi(), n;
  }
  function mp(e, t) {
    re = null, U.H = Zr, t === tr || t === Ji ? (t = Nf(), Ee = 3) : t === Bu ? (t = Nf(), Ee = 4) : Ee = t === ms ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, It = t, de === null && (Ge = 1, mo(
      e,
      un(t, e.current)
    ));
  }
  function hp() {
    var e = Pt.current;
    return e === null ? !0 : (me & 4194048) === me ? vn === null : (me & 62914560) === me || (me & 536870912) !== 0 ? e === vn : !1;
  }
  function gp() {
    var e = U.H;
    return U.H = Zr, e === null ? Zr : e;
  }
  function yp() {
    var e = U.A;
    return U.A = Kg, e;
  }
  function Eo() {
    Ge = 4, Ya || (me & 4194048) !== me && Pt.current !== null || (sr = !0), (Va & 134217727) === 0 && (xl & 134217727) === 0 || Re === null || Qa(
      Re,
      me,
      Kt,
      !1
    );
  }
  function js(e, t, n) {
    var a = ke;
    ke |= 2;
    var l = gp(), i = yp();
    (Re !== e || me !== t) && (xo = null, dr(e, t)), t = !1;
    var u = Ge;
    e: do
      try {
        if (Ee !== 0 && de !== null) {
          var d = de, g = It;
          switch (Ee) {
            case 8:
              Us(), u = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Pt.current === null && (t = !0);
              var E = Ee;
              if (Ee = 0, It = null, pr(e, d, g, E), n && sr) {
                u = 0;
                break e;
              }
              break;
            default:
              E = Ee, Ee = 0, It = null, pr(e, d, g, E);
          }
        }
        Jg(), u = Ge;
        break;
      } catch (N) {
        mp(e, N);
      }
    while (!0);
    return t && e.shellSuspendCounter++, na = hl = null, ke = a, U.H = l, U.A = i, de === null && (Re = null, me = 0, Qi()), u;
  }
  function Jg() {
    for (; de !== null; ) vp(de);
  }
  function ey(e, t) {
    var n = ke;
    ke |= 2;
    var a = gp(), l = yp();
    Re !== e || me !== t ? (xo = null, ko = ct() + 500, dr(e, t)) : sr = Ta(
      e,
      t
    );
    e: do
      try {
        if (Ee !== 0 && de !== null) {
          t = de;
          var i = It;
          t: switch (Ee) {
            case 1:
              Ee = 0, It = null, pr(e, t, i, 1);
              break;
            case 2:
            case 9:
              if (Cf(i)) {
                Ee = 0, It = null, bp(t);
                break;
              }
              t = function() {
                Ee !== 2 && Ee !== 9 || Re !== e || (Ee = 7), qn(e);
              }, i.then(t, t);
              break e;
            case 3:
              Ee = 7;
              break e;
            case 4:
              Ee = 5;
              break e;
            case 7:
              Cf(i) ? (Ee = 0, It = null, bp(t)) : (Ee = 0, It = null, pr(e, t, i, 7));
              break;
            case 5:
              var u = null;
              switch (de.tag) {
                case 26:
                  u = de.memoizedState;
                case 5:
                case 27:
                  var d = de;
                  if (u ? lm(u) : d.stateNode.complete) {
                    Ee = 0, It = null;
                    var g = d.sibling;
                    if (g !== null) de = g;
                    else {
                      var E = d.return;
                      E !== null ? (de = E, _o(E)) : de = null;
                    }
                    break t;
                  }
              }
              Ee = 0, It = null, pr(e, t, i, 5);
              break;
            case 6:
              Ee = 0, It = null, pr(e, t, i, 6);
              break;
            case 8:
              Us(), Ge = 6;
              break e;
            default:
              throw Error(c(462));
          }
        }
        ty();
        break;
      } catch (N) {
        mp(e, N);
      }
    while (!0);
    return na = hl = null, U.H = a, U.A = l, ke = n, de !== null ? 0 : (Re = null, me = 0, Qi(), Ge);
  }
  function ty() {
    for (; de !== null && !Rn(); )
      vp(de);
  }
  function vp(e) {
    var t = Vd(e.alternate, e, da);
    e.memoizedProps = e.pendingProps, t === null ? _o(e) : de = t;
  }
  function bp(e) {
    var t = e, n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Ud(
          n,
          t,
          t.pendingProps,
          t.type,
          void 0,
          me
        );
        break;
      case 11:
        t = Ud(
          n,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          me
        );
        break;
      case 5:
        Wu(t);
      default:
        Fd(n, t), t = de = yf(t, da), t = Vd(n, t, da);
    }
    e.memoizedProps = e.pendingProps, t === null ? _o(e) : de = t;
  }
  function pr(e, t, n, a) {
    na = hl = null, Wu(t), nr = null, Gr = 0;
    var l = t.return;
    try {
      if (Gg(
        e,
        l,
        t,
        n,
        me
      )) {
        Ge = 1, mo(
          e,
          un(n, e.current)
        ), de = null;
        return;
      }
    } catch (i) {
      if (l !== null) throw de = l, i;
      Ge = 1, mo(
        e,
        un(n, e.current)
      ), de = null;
      return;
    }
    t.flags & 32768 ? (ye || a === 1 ? e = !0 : sr || (me & 536870912) !== 0 ? e = !1 : (Ya = e = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = Pt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Sp(t, e)) : _o(t);
  }
  function _o(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Sp(
          t,
          Ya
        );
        return;
      }
      e = t.return;
      var n = Xg(
        t.alternate,
        t,
        da
      );
      if (n !== null) {
        de = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        de = t;
        return;
      }
      de = t = e;
    } while (t !== null);
    Ge === 0 && (Ge = 5);
  }
  function Sp(e, t) {
    do {
      var n = Pg(e.alternate, e);
      if (n !== null) {
        n.flags &= 32767, de = n;
        return;
      }
      if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
        de = e;
        return;
      }
      de = e = n;
    } while (e !== null);
    Ge = 6, de = null;
  }
  function wp(e, t, n, a, l, i, u, d, g) {
    e.cancelPendingCommit = null;
    do
      Co();
    while (at !== 0);
    if ((ke & 6) !== 0) throw Error(c(327));
    if (t !== null) {
      if (t === e.current) throw Error(c(177));
      if (i = t.lanes | t.childLanes, i |= Au, Ul(
        e,
        n,
        i,
        u,
        d,
        g
      ), e === Re && (de = Re = null, me = 0), fr = t, Fa = e, pa = n, Ds = i, Ls = l, cp = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, ry(tn, function() {
        return Ep(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = U.T, U.T = null, l = G.p, G.p = 2, u = ke, ke |= 4;
        try {
          $g(e, t, n);
        } finally {
          ke = u, G.p = l, U.T = a;
        }
      }
      at = 1, Tp(), kp(), xp();
    }
  }
  function Tp() {
    if (at === 1) {
      at = 0;
      var e = Fa, t = fr, n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        n = U.T, U.T = null;
        var a = G.p;
        G.p = 2;
        var l = ke;
        ke |= 4;
        try {
          np(t, e);
          var i = Is, u = uf(e.containerInfo), d = i.focusedElem, g = i.selectionRange;
          if (u !== d && d && d.ownerDocument && of(
            d.ownerDocument.documentElement,
            d
          )) {
            if (g !== null && Su(d)) {
              var E = g.start, N = g.end;
              if (N === void 0 && (N = E), "selectionStart" in d)
                d.selectionStart = E, d.selectionEnd = Math.min(
                  N,
                  d.value.length
                );
              else {
                var L = d.ownerDocument || document, _ = L && L.defaultView || window;
                if (_.getSelection) {
                  var C = _.getSelection(), Q = d.textContent.length, te = Math.min(g.start, Q), ze = g.end === void 0 ? te : Math.min(g.end, Q);
                  !C.extend && te > ze && (u = ze, ze = te, te = u);
                  var w = rf(
                    d,
                    te
                  ), b = rf(
                    d,
                    ze
                  );
                  if (w && b && (C.rangeCount !== 1 || C.anchorNode !== w.node || C.anchorOffset !== w.offset || C.focusNode !== b.node || C.focusOffset !== b.offset)) {
                    var A = L.createRange();
                    A.setStart(w.node, w.offset), C.removeAllRanges(), te > ze ? (C.addRange(A), C.extend(b.node, b.offset)) : (A.setEnd(b.node, b.offset), C.addRange(A));
                  }
                }
              }
            }
            for (L = [], C = d; C = C.parentNode; )
              C.nodeType === 1 && L.push({
                element: C,
                left: C.scrollLeft,
                top: C.scrollTop
              });
            for (typeof d.focus == "function" && d.focus(), d = 0; d < L.length; d++) {
              var R = L[d];
              R.element.scrollLeft = R.left, R.element.scrollTop = R.top;
            }
          }
          Bo = !!$s, Is = $s = null;
        } finally {
          ke = l, G.p = a, U.T = n;
        }
      }
      e.current = t, at = 2;
    }
  }
  function kp() {
    if (at === 2) {
      at = 0;
      var e = Fa, t = fr, n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        n = U.T, U.T = null;
        var a = G.p;
        G.p = 2;
        var l = ke;
        ke |= 4;
        try {
          Zd(e, t.alternate, t);
        } finally {
          ke = l, G.p = a, U.T = n;
        }
      }
      at = 3;
    }
  }
  function xp() {
    if (at === 4 || at === 3) {
      at = 0, Ei();
      var e = Fa, t = fr, n = pa, a = cp;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? at = 5 : (at = 0, fr = Fa = null, Ap(e, e.pendingLanes));
      var l = e.pendingLanes;
      if (l === 0 && (Ga = null), ol(n), t = t.stateNode, $e && typeof $e.onCommitFiberRoot == "function")
        try {
          $e.onCommitFiberRoot(
            Xn,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        t = U.T, l = G.p, G.p = 2, U.T = null;
        try {
          for (var i = e.onRecoverableError, u = 0; u < a.length; u++) {
            var d = a[u];
            i(d.value, {
              componentStack: d.stack
            });
          }
        } finally {
          U.T = t, G.p = l;
        }
      }
      (pa & 3) !== 0 && Co(), qn(e), l = e.pendingLanes, (n & 261930) !== 0 && (l & 42) !== 0 ? e === Ms ? ii++ : (ii = 0, Ms = e) : ii = 0, oi(0);
    }
  }
  function Ap(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Yr(t)));
  }
  function Co() {
    return Tp(), kp(), xp(), Ep();
  }
  function Ep() {
    if (at !== 5) return !1;
    var e = Fa, t = Ds;
    Ds = 0;
    var n = ol(pa), a = U.T, l = G.p;
    try {
      G.p = 32 > n ? 32 : n, U.T = null, n = Ls, Ls = null;
      var i = Fa, u = pa;
      if (at = 0, fr = Fa = null, pa = 0, (ke & 6) !== 0) throw Error(c(331));
      var d = ke;
      if (ke |= 4, op(i.current), lp(
        i,
        i.current,
        u,
        n
      ), ke = d, oi(0, !1), $e && typeof $e.onPostCommitFiberRoot == "function")
        try {
          $e.onPostCommitFiberRoot(Xn, i);
        } catch {
        }
      return !0;
    } finally {
      G.p = l, U.T = a, Ap(e, t);
    }
  }
  function _p(e, t, n) {
    t = un(n, t), t = ps(e.stateNode, t, 2), e = ja(e, t, 2), e !== null && (ka(e, 2), qn(e));
  }
  function _e(e, t, n) {
    if (e.tag === 3)
      _p(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          _p(
            t,
            e,
            n
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Ga === null || !Ga.has(a))) {
            e = un(n, e), n = Cd(2), a = ja(t, n, 2), a !== null && (Od(
              n,
              a,
              t,
              e
            ), ka(a, 2), qn(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function Hs(e, t, n) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new Zg();
      var l = /* @__PURE__ */ new Set();
      a.set(t, l);
    } else
      l = a.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), a.set(t, l));
    l.has(n) || (Ns = !0, l.add(n), e = ny.bind(null, e, t, n), t.then(e, e));
  }
  function ny(e, t, n) {
    var a = e.pingCache;
    a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Re === e && (me & n) === n && (Ge === 4 || Ge === 3 && (me & 62914560) === me && 300 > ct() - To ? (ke & 2) === 0 && dr(e, 0) : zs |= n, cr === me && (cr = 0)), qn(e);
  }
  function Cp(e, t) {
    t === 0 && (t = Er()), e = dl(e, t), e !== null && (ka(e, t), qn(e));
  }
  function ay(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Cp(e, n);
  }
  function ly(e, t) {
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
    a !== null && a.delete(t), Cp(e, n);
  }
  function ry(e, t) {
    return Fn(e, t);
  }
  var Oo = null, mr = null, qs = !1, No = !1, Bs = !1, Xa = 0;
  function qn(e) {
    e !== mr && e.next === null && (mr === null ? Oo = mr = e : mr = mr.next = e), No = !0, qs || (qs = !0, oy());
  }
  function oi(e, t) {
    if (!Bs && No) {
      Bs = !0;
      do
        for (var n = !1, a = Oo; a !== null; ) {
          if (e !== 0) {
            var l = a.pendingLanes;
            if (l === 0) var i = 0;
            else {
              var u = a.suspendedLanes, d = a.pingedLanes;
              i = (1 << 31 - rt(42 | e) + 1) - 1, i &= l & ~(u & ~d), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
            }
            i !== 0 && (n = !0, Rp(a, i));
          } else
            i = me, i = an(
              a,
              a === Re ? i : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (i & 3) === 0 || Ta(a, i) || (n = !0, Rp(a, i));
          a = a.next;
        }
      while (n);
      Bs = !1;
    }
  }
  function iy() {
    Op();
  }
  function Op() {
    No = qs = !1;
    var e = 0;
    Xa !== 0 && yy() && (e = Xa);
    for (var t = ct(), n = null, a = Oo; a !== null; ) {
      var l = a.next, i = Np(a, t);
      i === 0 ? (a.next = null, n === null ? Oo = l : n.next = l, l === null && (mr = n)) : (n = a, (e !== 0 || (i & 3) !== 0) && (No = !0)), a = l;
    }
    at !== 0 && at !== 5 || oi(e), Xa !== 0 && (Xa = 0);
  }
  function Np(e, t) {
    for (var n = e.suspendedLanes, a = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes & -62914561; 0 < i; ) {
      var u = 31 - rt(i), d = 1 << u, g = l[u];
      g === -1 ? ((d & n) === 0 || (d & a) !== 0) && (l[u] = zi(d, t)) : g <= t && (e.expiredLanes |= d), i &= ~d;
    }
    if (t = Re, n = me, n = an(
      e,
      e === t ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a = e.callbackNode, n === 0 || e === t && (Ee === 2 || Ee === 9) || e.cancelPendingCommit !== null)
      return a !== null && a !== null && Nl(a), e.callbackNode = null, e.callbackPriority = 0;
    if ((n & 3) === 0 || Ta(e, n)) {
      if (t = n & -n, t === e.callbackPriority) return t;
      switch (a !== null && Nl(a), ol(n)) {
        case 2:
        case 8:
          n = en;
          break;
        case 32:
          n = tn;
          break;
        case 268435456:
          n = Rl;
          break;
        default:
          n = tn;
      }
      return a = zp.bind(null, e), n = Fn(n, a), e.callbackPriority = t, e.callbackNode = n, t;
    }
    return a !== null && a !== null && Nl(a), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function zp(e, t) {
    if (at !== 0 && at !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var n = e.callbackNode;
    if (Co() && e.callbackNode !== n)
      return null;
    var a = me;
    return a = an(
      e,
      e === Re ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a === 0 ? null : (dp(e, a, t), Np(e, ct()), e.callbackNode != null && e.callbackNode === n ? zp.bind(null, e) : null);
  }
  function Rp(e, t) {
    if (Co()) return null;
    dp(e, t, !0);
  }
  function oy() {
    by(function() {
      (ke & 6) !== 0 ? Fn(
        zl,
        iy
      ) : Op();
    });
  }
  function Ys() {
    if (Xa === 0) {
      var e = Jl;
      e === 0 && (e = Sa, Sa <<= 1, (Sa & 261888) === 0 && (Sa = 256)), Xa = e;
    }
    return Xa;
  }
  function Dp(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : xn("" + e);
  }
  function Lp(e, t) {
    var n = t.ownerDocument.createElement("input");
    return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
  }
  function uy(e, t, n, a, l) {
    if (t === "submit" && n && n.stateNode === l) {
      var i = Dp(
        (l[it] || null).action
      ), u = a.submitter;
      u && (t = (t = u[it] || null) ? Dp(t.formAction) : u.getAttribute("formAction"), t !== null && (i = t, u = null));
      var d = new ft(
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
                if (Xa !== 0) {
                  var g = u ? Lp(l, u) : new FormData(l);
                  os(
                    n,
                    {
                      pending: !0,
                      data: g,
                      method: l.method,
                      action: i
                    },
                    null,
                    g
                  );
                }
              } else
                typeof i == "function" && (d.preventDefault(), g = u ? Lp(l, u) : new FormData(l), os(
                  n,
                  {
                    pending: !0,
                    data: g,
                    method: l.method,
                    action: i
                  },
                  i,
                  g
                ));
            },
            currentTarget: l
          }
        ]
      });
    }
  }
  for (var Vs = 0; Vs < xu.length; Vs++) {
    var Gs = xu[Vs], sy = Gs.toLowerCase(), cy = Gs[0].toUpperCase() + Gs.slice(1);
    En(
      sy,
      "on" + cy
    );
  }
  En(ff, "onAnimationEnd"), En(df, "onAnimationIteration"), En(pf, "onAnimationStart"), En("dblclick", "onDoubleClick"), En("focusin", "onFocus"), En("focusout", "onBlur"), En(Eg, "onTransitionRun"), En(_g, "onTransitionStart"), En(Cg, "onTransitionCancel"), En(mf, "onTransitionEnd"), Et("onMouseEnter", ["mouseout", "mouseover"]), Et("onMouseLeave", ["mouseout", "mouseover"]), Et("onPointerEnter", ["pointerout", "pointerover"]), Et("onPointerLeave", ["pointerout", "pointerover"]), Zn(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Zn(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Zn("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Zn(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Zn(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Zn(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var ui = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), fy = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ui)
  );
  function Mp(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var a = e[n], l = a.event;
      a = a.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var u = a.length - 1; 0 <= u; u--) {
            var d = a[u], g = d.instance, E = d.currentTarget;
            if (d = d.listener, g !== i && l.isPropagationStopped())
              break e;
            i = d, l.currentTarget = E;
            try {
              i(l);
            } catch (N) {
              Fi(N);
            }
            l.currentTarget = null, i = g;
          }
        else
          for (u = 0; u < a.length; u++) {
            if (d = a[u], g = d.instance, E = d.currentTarget, d = d.listener, g !== i && l.isPropagationStopped())
              break e;
            i = d, l.currentTarget = E;
            try {
              i(l);
            } catch (N) {
              Fi(N);
            }
            l.currentTarget = null, i = g;
          }
      }
    }
  }
  function pe(e, t) {
    var n = t[$n];
    n === void 0 && (n = t[$n] = /* @__PURE__ */ new Set());
    var a = e + "__bubble";
    n.has(a) || (Up(t, e, 2, !1), n.add(a));
  }
  function Fs(e, t, n) {
    var a = 0;
    t && (a |= 4), Up(
      n,
      e,
      a,
      t
    );
  }
  var zo = "_reactListening" + Math.random().toString(36).slice(2);
  function Qs(e) {
    if (!e[zo]) {
      e[zo] = !0, Di.forEach(function(n) {
        n !== "selectionchange" && (fy.has(n) || Fs(n, !1, e), Fs(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[zo] || (t[zo] = !0, Fs("selectionchange", !1, t));
    }
  }
  function Up(e, t, n, a) {
    switch (fm(t)) {
      case 2:
        var l = qy;
        break;
      case 8:
        l = By;
        break;
      default:
        l = ic;
    }
    n = l.bind(
      null,
      t,
      n,
      e
    ), l = void 0, !h || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), a ? l !== void 0 ? e.addEventListener(t, n, {
      capture: !0,
      passive: l
    }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, {
      passive: l
    }) : e.addEventListener(t, n, !1);
  }
  function Xs(e, t, n, a, l) {
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
              var g = u.tag;
              if ((g === 3 || g === 4) && u.stateNode.containerInfo === l)
                return;
              u = u.return;
            }
          for (; d !== null; ) {
            if (u = In(d), u === null) return;
            if (g = u.tag, g === 5 || g === 6 || g === 26 || g === 27) {
              a = i = u;
              continue e;
            }
            d = d.parentNode;
          }
        }
        a = a.return;
      }
    Gl(function() {
      var E = i, N = Rr(n), L = [];
      e: {
        var _ = hf.get(e);
        if (_ !== void 0) {
          var C = ft, Q = e;
          switch (e) {
            case "keypress":
              if (ne(n) === 0) break e;
            case "keydown":
            case "keyup":
              C = lg;
              break;
            case "focusin":
              Q = "focus", C = hu;
              break;
            case "focusout":
              Q = "blur", C = hu;
              break;
            case "beforeblur":
            case "afterblur":
              C = hu;
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
              C = Gc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              C = Xh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              C = og;
              break;
            case ff:
            case df:
            case pf:
              C = Ih;
              break;
            case mf:
              C = sg;
              break;
            case "scroll":
            case "scrollend":
              C = Mn;
              break;
            case "wheel":
              C = fg;
              break;
            case "copy":
            case "cut":
            case "paste":
              C = Zh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              C = Qc;
              break;
            case "toggle":
            case "beforetoggle":
              C = pg;
          }
          var te = (t & 4) !== 0, ze = !te && (e === "scroll" || e === "scrollend"), w = te ? _ !== null ? _ + "Capture" : null : _;
          te = [];
          for (var b = E, A; b !== null; ) {
            var R = b;
            if (A = R.stateNode, R = R.tag, R !== 5 && R !== 26 && R !== 27 || A === null || w === null || (R = An(b, w), R != null && te.push(
              si(b, R, A)
            )), ze) break;
            b = b.return;
          }
          0 < te.length && (_ = new C(
            _,
            Q,
            null,
            n,
            N
          ), L.push({ event: _, listeners: te }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (_ = e === "mouseover" || e === "pointerover", C = e === "mouseout" || e === "pointerout", _ && n !== Yl && (Q = n.relatedTarget || n.fromElement) && (In(Q) || Q[xa]))
            break e;
          if ((C || _) && (_ = N.window === N ? N : (_ = N.ownerDocument) ? _.defaultView || _.parentWindow : window, C ? (Q = n.relatedTarget || n.toElement, C = E, Q = Q ? In(Q) : null, Q !== null && (ze = y(Q), te = Q.tag, Q !== ze || te !== 5 && te !== 27 && te !== 6) && (Q = null)) : (C = null, Q = E), C !== Q)) {
            if (te = Gc, R = "onMouseLeave", w = "onMouseEnter", b = "mouse", (e === "pointerout" || e === "pointerover") && (te = Qc, R = "onPointerLeave", w = "onPointerEnter", b = "pointer"), ze = C == null ? _ : Aa(C), A = Q == null ? _ : Aa(Q), _ = new te(
              R,
              b + "leave",
              C,
              n,
              N
            ), _.target = ze, _.relatedTarget = A, R = null, In(N) === E && (te = new te(
              w,
              b + "enter",
              Q,
              n,
              N
            ), te.target = A, te.relatedTarget = ze, R = te), ze = R, C && Q)
              t: {
                for (te = dy, w = C, b = Q, A = 0, R = w; R; R = te(R))
                  A++;
                R = 0;
                for (var W = b; W; W = te(W))
                  R++;
                for (; 0 < A - R; )
                  w = te(w), A--;
                for (; 0 < R - A; )
                  b = te(b), R--;
                for (; A--; ) {
                  if (w === b || b !== null && w === b.alternate) {
                    te = w;
                    break t;
                  }
                  w = te(w), b = te(b);
                }
                te = null;
              }
            else te = null;
            C !== null && jp(
              L,
              _,
              C,
              te,
              !1
            ), Q !== null && ze !== null && jp(
              L,
              ze,
              Q,
              te,
              !0
            );
          }
        }
        e: {
          if (_ = E ? Aa(E) : window, C = _.nodeName && _.nodeName.toLowerCase(), C === "select" || C === "input" && _.type === "file")
            var we = Jc;
          else if (Zc(_))
            if (ef)
              we = kg;
            else {
              we = wg;
              var P = Sg;
            }
          else
            C = _.nodeName, !C || C.toLowerCase() !== "input" || _.type !== "checkbox" && _.type !== "radio" ? E && Oa(E.elementType) && (we = Jc) : we = Tg;
          if (we && (we = we(e, E))) {
            Wc(
              L,
              we,
              n,
              N
            );
            break e;
          }
          P && P(e, _, E), e === "focusout" && E && _.type === "number" && E.memoizedProps.value != null && Ca(_, "number", _.value);
        }
        switch (P = E ? Aa(E) : window, e) {
          case "focusin":
            (Zc(P) || P.contentEditable === "true") && (Ql = P, wu = E, Hr = null);
            break;
          case "focusout":
            Hr = wu = Ql = null;
            break;
          case "mousedown":
            Tu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Tu = !1, sf(L, n, N);
            break;
          case "selectionchange":
            if (Ag) break;
          case "keydown":
          case "keyup":
            sf(L, n, N);
        }
        var oe;
        if (yu)
          e: {
            switch (e) {
              case "compositionstart":
                var he = "onCompositionStart";
                break e;
              case "compositionend":
                he = "onCompositionEnd";
                break e;
              case "compositionupdate":
                he = "onCompositionUpdate";
                break e;
            }
            he = void 0;
          }
        else
          Fl ? Ic(e, n) && (he = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (he = "onCompositionStart");
        he && (Xc && n.locale !== "ko" && (Fl || he !== "onCompositionStart" ? he === "onCompositionEnd" && Fl && (oe = ee()) : (k = N, D = "value" in k ? k.value : k.textContent, Fl = !0)), P = Ro(E, he), 0 < P.length && (he = new Fc(
          he,
          e,
          null,
          n,
          N
        ), L.push({ event: he, listeners: P }), oe ? he.data = oe : (oe = Kc(n), oe !== null && (he.data = oe)))), (oe = hg ? gg(e, n) : yg(e, n)) && (he = Ro(E, "onBeforeInput"), 0 < he.length && (P = new Fc(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          N
        ), L.push({
          event: P,
          listeners: he
        }), P.data = oe)), uy(
          L,
          e,
          E,
          n,
          N
        );
      }
      Mp(L, t);
    });
  }
  function si(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function Ro(e, t) {
    for (var n = t + "Capture", a = []; e !== null; ) {
      var l = e, i = l.stateNode;
      if (l = l.tag, l !== 5 && l !== 26 && l !== 27 || i === null || (l = An(e, n), l != null && a.unshift(
        si(e, l, i)
      ), l = An(e, t), l != null && a.push(
        si(e, l, i)
      )), e.tag === 3) return a;
      e = e.return;
    }
    return [];
  }
  function dy(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function jp(e, t, n, a, l) {
    for (var i = t._reactName, u = []; n !== null && n !== a; ) {
      var d = n, g = d.alternate, E = d.stateNode;
      if (d = d.tag, g !== null && g === a) break;
      d !== 5 && d !== 26 && d !== 27 || E === null || (g = E, l ? (E = An(n, i), E != null && u.unshift(
        si(n, E, g)
      )) : l || (E = An(n, i), E != null && u.push(
        si(n, E, g)
      ))), n = n.return;
    }
    u.length !== 0 && e.push({ event: t, listeners: u });
  }
  var py = /\r\n?/g, my = /\u0000|\uFFFD/g;
  function Hp(e) {
    return (typeof e == "string" ? e : "" + e).replace(py, `
`).replace(my, "");
  }
  function qp(e, t) {
    return t = Hp(t), Hp(e) === t;
  }
  function Ne(e, t, n, a, l, i) {
    switch (n) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || Tt(e, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && Tt(e, "" + a);
        break;
      case "className":
        _a(e, "class", a);
        break;
      case "tabIndex":
        _a(e, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        _a(e, n, a);
        break;
      case "style":
        qi(e, a, i);
        break;
      case "data":
        if (t !== "object") {
          _a(e, "data", a);
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
        a = xn("" + a), e.setAttribute(n, a);
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
        a = xn("" + a), e.setAttribute(n, a);
        break;
      case "onClick":
        a != null && (e.onclick = Gt);
        break;
      case "onScroll":
        a != null && pe("scroll", e);
        break;
      case "onScrollEnd":
        a != null && pe("scrollend", e);
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
        n = xn("" + a), e.setAttributeNS(
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
        pe("beforetoggle", e), pe("toggle", e), Ea(e, "popover", a);
        break;
      case "xlinkActuate":
        Vt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        Vt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        Vt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        Vt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        Vt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        Vt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        Vt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        Vt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        Vt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        Ea(e, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = pu.get(n) || n, Ea(e, n, a));
    }
  }
  function Ps(e, t, n, a, l, i) {
    switch (n) {
      case "style":
        qi(e, a, i);
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
        typeof a == "string" ? Tt(e, a) : (typeof a == "number" || typeof a == "bigint") && Tt(e, "" + a);
        break;
      case "onScroll":
        a != null && pe("scroll", e);
        break;
      case "onScrollEnd":
        a != null && pe("scrollend", e);
        break;
      case "onClick":
        a != null && (e.onclick = Gt);
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
        if (!Li.hasOwnProperty(n))
          e: {
            if (n[0] === "o" && n[1] === "n" && (l = n.endsWith("Capture"), t = n.slice(2, l ? n.length - 7 : void 0), i = e[it] || null, i = i != null ? i[n] : null, typeof i == "function" && e.removeEventListener(t, i, l), typeof a == "function")) {
              typeof i != "function" && i !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, a, l);
              break e;
            }
            n in e ? e[n] = a : a === !0 ? e.setAttribute(n, "") : Ea(e, n, a);
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
        pe("error", e), pe("load", e);
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
        pe("invalid", e);
        var d = i = u = l = null, g = null, E = null;
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
                  g = N;
                  break;
                case "defaultChecked":
                  E = N;
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
        Bl(
          e,
          i,
          d,
          g,
          E,
          u,
          l,
          !1
        );
        return;
      case "select":
        pe("invalid", e), a = u = i = null;
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
        t = i, n = u, e.multiple = !!a, t != null ? Ln(e, !!a, t, !1) : n != null && Ln(e, !!a, n, !0);
        return;
      case "textarea":
        pe("invalid", e), i = l = a = null;
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
        ul(e, a, l, i);
        return;
      case "option":
        for (g in n)
          if (n.hasOwnProperty(g) && (a = n[g], a != null))
            switch (g) {
              case "selected":
                e.selected = a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                Ne(e, t, g, a, n, null);
            }
        return;
      case "dialog":
        pe("beforetoggle", e), pe("toggle", e), pe("cancel", e), pe("close", e);
        break;
      case "iframe":
      case "object":
        pe("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < ui.length; a++)
          pe(ui[a], e);
        break;
      case "image":
        pe("error", e), pe("load", e);
        break;
      case "details":
        pe("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        pe("error", e), pe("load", e);
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
                Ne(e, t, E, a, n, null);
            }
        return;
      default:
        if (Oa(t)) {
          for (N in n)
            n.hasOwnProperty(N) && (a = n[N], a !== void 0 && Ps(
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
  function hy(e, t, n, a) {
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
        var l = null, i = null, u = null, d = null, g = null, E = null, N = null;
        for (C in n) {
          var L = n[C];
          if (n.hasOwnProperty(C) && L != null)
            switch (C) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                g = L;
              default:
                a.hasOwnProperty(C) || Ne(e, t, C, null, a, L);
            }
        }
        for (var _ in a) {
          var C = a[_];
          if (L = n[_], a.hasOwnProperty(_) && (C != null || L != null))
            switch (_) {
              case "type":
                i = C;
                break;
              case "name":
                l = C;
                break;
              case "checked":
                E = C;
                break;
              case "defaultChecked":
                N = C;
                break;
              case "value":
                u = C;
                break;
              case "defaultValue":
                d = C;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (C != null)
                  throw Error(c(137, t));
                break;
              default:
                C !== L && Ne(
                  e,
                  t,
                  _,
                  C,
                  a,
                  L
                );
            }
        }
        ql(
          e,
          u,
          d,
          g,
          E,
          N,
          i,
          l
        );
        return;
      case "select":
        C = u = d = _ = null;
        for (i in n)
          if (g = n[i], n.hasOwnProperty(i) && g != null)
            switch (i) {
              case "value":
                break;
              case "multiple":
                C = g;
              default:
                a.hasOwnProperty(i) || Ne(
                  e,
                  t,
                  i,
                  null,
                  a,
                  g
                );
            }
        for (l in a)
          if (i = a[l], g = n[l], a.hasOwnProperty(l) && (i != null || g != null))
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
                i !== g && Ne(
                  e,
                  t,
                  l,
                  i,
                  a,
                  g
                );
            }
        t = d, n = u, a = C, _ != null ? Ln(e, !!n, _, !1) : !!a != !!n && (t != null ? Ln(e, !!n, t, !0) : Ln(e, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        C = _ = null;
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
                C = l;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (l != null) throw Error(c(91));
                break;
              default:
                l !== i && Ne(e, t, u, l, a, i);
            }
        zr(e, _, C);
        return;
      case "option":
        for (var Q in n)
          if (_ = n[Q], n.hasOwnProperty(Q) && _ != null && !a.hasOwnProperty(Q))
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
                  a,
                  _
                );
            }
        for (g in a)
          if (_ = a[g], C = n[g], a.hasOwnProperty(g) && _ !== C && (_ != null || C != null))
            switch (g) {
              case "selected":
                e.selected = _ && typeof _ != "function" && typeof _ != "symbol";
                break;
              default:
                Ne(
                  e,
                  t,
                  g,
                  _,
                  a,
                  C
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
        for (E in a)
          if (_ = a[E], C = n[E], a.hasOwnProperty(E) && _ !== C && (_ != null || C != null))
            switch (E) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (_ != null)
                  throw Error(c(137, t));
                break;
              default:
                Ne(
                  e,
                  t,
                  E,
                  _,
                  a,
                  C
                );
            }
        return;
      default:
        if (Oa(t)) {
          for (var ze in n)
            _ = n[ze], n.hasOwnProperty(ze) && _ !== void 0 && !a.hasOwnProperty(ze) && Ps(
              e,
              t,
              ze,
              void 0,
              a,
              _
            );
          for (N in a)
            _ = a[N], C = n[N], !a.hasOwnProperty(N) || _ === C || _ === void 0 && C === void 0 || Ps(
              e,
              t,
              N,
              _,
              a,
              C
            );
          return;
        }
    }
    for (var w in n)
      _ = n[w], n.hasOwnProperty(w) && _ != null && !a.hasOwnProperty(w) && Ne(e, t, w, null, a, _);
    for (L in a)
      _ = a[L], C = n[L], !a.hasOwnProperty(L) || _ === C || _ == null && C == null || Ne(e, t, L, _, a, C);
  }
  function Bp(e) {
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
  function gy() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), a = 0; a < n.length; a++) {
        var l = n[a], i = l.transferSize, u = l.initiatorType, d = l.duration;
        if (i && d && Bp(u)) {
          for (u = 0, d = l.responseEnd, a += 1; a < n.length; a++) {
            var g = n[a], E = g.startTime;
            if (E > d) break;
            var N = g.transferSize, L = g.initiatorType;
            N && Bp(L) && (g = g.responseEnd, u += N * (g < d ? 1 : (d - E) / (g - E)));
          }
          if (--a, t += 8 * (i + u) / (l.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var $s = null, Is = null;
  function Do(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Yp(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Vp(e, t) {
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
  function Ks(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Zs = null;
  function yy() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Zs ? !1 : (Zs = e, !0) : (Zs = null, !1);
  }
  var Gp = typeof setTimeout == "function" ? setTimeout : void 0, vy = typeof clearTimeout == "function" ? clearTimeout : void 0, Fp = typeof Promise == "function" ? Promise : void 0, by = typeof queueMicrotask == "function" ? queueMicrotask : typeof Fp < "u" ? function(e) {
    return Fp.resolve(null).then(e).catch(Sy);
  } : Gp;
  function Sy(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Pa(e) {
    return e === "head";
  }
  function Qp(e, t) {
    var n = t, a = 0;
    do {
      var l = n.nextSibling;
      if (e.removeChild(n), l && l.nodeType === 8)
        if (n = l.data, n === "/$" || n === "/&") {
          if (a === 0) {
            e.removeChild(l), vr(t);
            return;
          }
          a--;
        } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
          a++;
        else if (n === "html")
          ci(e.ownerDocument.documentElement);
        else if (n === "head") {
          n = e.ownerDocument.head, ci(n);
          for (var i = n.firstChild; i; ) {
            var u = i.nextSibling, d = i.nodeName;
            i[rn] || d === "SCRIPT" || d === "STYLE" || d === "LINK" && i.rel.toLowerCase() === "stylesheet" || n.removeChild(i), i = u;
          }
        } else
          n === "body" && ci(e.ownerDocument.body);
      n = l;
    } while (n);
    vr(t);
  }
  function Xp(e, t) {
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
  function Ws(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (t = t.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Ws(n), Cr(n);
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
  function wy(e, t, n, a) {
    for (; e.nodeType === 1; ) {
      var l = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (a) {
        if (!e[rn])
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
      if (e = dn(e.nextSibling), e === null) break;
    }
    return null;
  }
  function Ty(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = dn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Pp(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = dn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Js(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function ec(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function ky(e, t) {
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
  function dn(e) {
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
  var tc = null;
  function $p(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "/$" || n === "/&") {
          if (t === 0)
            return dn(e.nextSibling);
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
  function Kp(e, t, n) {
    switch (t = Do(n), e) {
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
  function ci(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    Cr(e);
  }
  var pn = /* @__PURE__ */ new Map(), Zp = /* @__PURE__ */ new Set();
  function Lo(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var ma = G.d;
  G.d = {
    f: xy,
    r: Ay,
    D: Ey,
    C: _y,
    L: Cy,
    m: Oy,
    X: zy,
    S: Ny,
    M: Ry
  };
  function xy() {
    var e = ma.f(), t = Ao();
    return e || t;
  }
  function Ay(e) {
    var t = Dn(e);
    t !== null && t.tag === 5 && t.type === "form" ? md(t) : ma.r(e);
  }
  var hr = typeof document > "u" ? null : document;
  function Wp(e, t, n) {
    var a = hr;
    if (a && typeof t == "string" && t) {
      var l = Ut(t);
      l = 'link[rel="' + e + '"][href="' + l + '"]', typeof n == "string" && (l += '[crossorigin="' + n + '"]'), Zp.has(l) || (Zp.add(l), e = { rel: e, crossOrigin: n, href: t }, a.querySelector(l) === null && (t = a.createElement("link"), ht(t, "link", e), Ke(t), a.head.appendChild(t)));
    }
  }
  function Ey(e) {
    ma.D(e), Wp("dns-prefetch", e, null);
  }
  function _y(e, t) {
    ma.C(e, t), Wp("preconnect", e, t);
  }
  function Cy(e, t, n) {
    ma.L(e, t, n);
    var a = hr;
    if (a && e && t) {
      var l = 'link[rel="preload"][as="' + Ut(t) + '"]';
      t === "image" && n && n.imageSrcSet ? (l += '[imagesrcset="' + Ut(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (l += '[imagesizes="' + Ut(
        n.imageSizes
      ) + '"]')) : l += '[href="' + Ut(e) + '"]';
      var i = l;
      switch (t) {
        case "style":
          i = gr(e);
          break;
        case "script":
          i = yr(e);
      }
      pn.has(i) || (e = M(
        {
          rel: "preload",
          href: t === "image" && n && n.imageSrcSet ? void 0 : e,
          as: t
        },
        n
      ), pn.set(i, e), a.querySelector(l) !== null || t === "style" && a.querySelector(fi(i)) || t === "script" && a.querySelector(di(i)) || (t = a.createElement("link"), ht(t, "link", e), Ke(t), a.head.appendChild(t)));
    }
  }
  function Oy(e, t) {
    ma.m(e, t);
    var n = hr;
    if (n && e) {
      var a = t && typeof t.as == "string" ? t.as : "script", l = 'link[rel="modulepreload"][as="' + Ut(a) + '"][href="' + Ut(e) + '"]', i = l;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = yr(e);
      }
      if (!pn.has(i) && (e = M({ rel: "modulepreload", href: e }, t), pn.set(i, e), n.querySelector(l) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(di(i)))
              return;
        }
        a = n.createElement("link"), ht(a, "link", e), Ke(a), n.head.appendChild(a);
      }
    }
  }
  function Ny(e, t, n) {
    ma.S(e, t, n);
    var a = hr;
    if (a && e) {
      var l = Kn(a).hoistableStyles, i = gr(e);
      t = t || "default";
      var u = l.get(i);
      if (!u) {
        var d = { loading: 0, preload: null };
        if (u = a.querySelector(
          fi(i)
        ))
          d.loading = 5;
        else {
          e = M(
            { rel: "stylesheet", href: e, "data-precedence": t },
            n
          ), (n = pn.get(i)) && nc(e, n);
          var g = u = a.createElement("link");
          Ke(g), ht(g, "link", e), g._p = new Promise(function(E, N) {
            g.onload = E, g.onerror = N;
          }), g.addEventListener("load", function() {
            d.loading |= 1;
          }), g.addEventListener("error", function() {
            d.loading |= 2;
          }), d.loading |= 4, Mo(u, t, a);
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
  function zy(e, t) {
    ma.X(e, t);
    var n = hr;
    if (n && e) {
      var a = Kn(n).hoistableScripts, l = yr(e), i = a.get(l);
      i || (i = n.querySelector(di(l)), i || (e = M({ src: e, async: !0 }, t), (t = pn.get(l)) && ac(e, t), i = n.createElement("script"), Ke(i), ht(i, "link", e), n.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, a.set(l, i));
    }
  }
  function Ry(e, t) {
    ma.M(e, t);
    var n = hr;
    if (n && e) {
      var a = Kn(n).hoistableScripts, l = yr(e), i = a.get(l);
      i || (i = n.querySelector(di(l)), i || (e = M({ src: e, async: !0, type: "module" }, t), (t = pn.get(l)) && ac(e, t), i = n.createElement("script"), Ke(i), ht(i, "link", e), n.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, a.set(l, i));
    }
  }
  function Jp(e, t, n, a) {
    var l = (l = lt.current) ? Lo(l) : null;
    if (!l) throw Error(c(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (t = gr(n.href), n = Kn(
          l
        ).hoistableStyles, a = n.get(t), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          e = gr(n.href);
          var i = Kn(
            l
          ).hoistableStyles, u = i.get(e);
          if (u || (l = l.ownerDocument || l, u = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, i.set(e, u), (i = l.querySelector(
            fi(e)
          )) && !i._p && (u.instance = i, u.state.loading = 5), pn.has(e) || (n = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, pn.set(e, n), i || Dy(
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
        return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = yr(n), n = Kn(
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
  function gr(e) {
    return 'href="' + Ut(e) + '"';
  }
  function fi(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function em(e) {
    return M({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function Dy(e, t, n, a) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = e.createElement("link"), a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    }), ht(t, "link", n), Ke(t), e.head.appendChild(t));
  }
  function yr(e) {
    return '[src="' + Ut(e) + '"]';
  }
  function di(e) {
    return "script[async]" + e;
  }
  function tm(e, t, n) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = e.querySelector(
            'style[data-href~="' + Ut(n.href) + '"]'
          );
          if (a)
            return t.instance = a, Ke(a), a;
          var l = M({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return a = (e.ownerDocument || e).createElement(
            "style"
          ), Ke(a), ht(a, "style", l), Mo(a, n.precedence, e), t.instance = a;
        case "stylesheet":
          l = gr(n.href);
          var i = e.querySelector(
            fi(l)
          );
          if (i)
            return t.state.loading |= 4, t.instance = i, Ke(i), i;
          a = em(n), (l = pn.get(l)) && nc(a, l), i = (e.ownerDocument || e).createElement("link"), Ke(i);
          var u = i;
          return u._p = new Promise(function(d, g) {
            u.onload = d, u.onerror = g;
          }), ht(i, "link", a), t.state.loading |= 4, Mo(i, n.precedence, e), t.instance = i;
        case "script":
          return i = yr(n.src), (l = e.querySelector(
            di(i)
          )) ? (t.instance = l, Ke(l), l) : (a = n, (l = pn.get(i)) && (a = M({}, n), ac(a, l)), e = e.ownerDocument || e, l = e.createElement("script"), Ke(l), ht(l, "link", a), e.head.appendChild(l), t.instance = l);
        case "void":
          return null;
        default:
          throw Error(c(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, Mo(a, n.precedence, e));
    return t.instance;
  }
  function Mo(e, t, n) {
    for (var a = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), l = a.length ? a[a.length - 1] : null, i = l, u = 0; u < a.length; u++) {
      var d = a[u];
      if (d.dataset.precedence === t) i = d;
      else if (i !== l) break;
    }
    i ? i.parentNode.insertBefore(e, i.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
  }
  function nc(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function ac(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var Uo = null;
  function nm(e, t, n) {
    if (Uo === null) {
      var a = /* @__PURE__ */ new Map(), l = Uo = /* @__PURE__ */ new Map();
      l.set(n, a);
    } else
      l = Uo, a = l.get(n), a || (a = /* @__PURE__ */ new Map(), l.set(n, a));
    if (a.has(e)) return a;
    for (a.set(e, null), n = n.getElementsByTagName(e), l = 0; l < n.length; l++) {
      var i = n[l];
      if (!(i[rn] || i[Ie] || e === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
        var u = i.getAttribute(t) || "";
        u = e + u;
        var d = a.get(u);
        d ? d.push(i) : a.set(u, [i]);
      }
    }
    return a;
  }
  function am(e, t, n) {
    e = e.ownerDocument || e, e.head.insertBefore(
      n,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function Ly(e, t, n) {
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
  function lm(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function My(e, t, n, a) {
    if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var l = gr(a.href), i = t.querySelector(
          fi(l)
        );
        if (i) {
          t = i._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = jo.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = i, Ke(i);
          return;
        }
        i = t.ownerDocument || t, a = em(a), (l = pn.get(l)) && nc(a, l), i = i.createElement("link"), Ke(i);
        var u = i;
        u._p = new Promise(function(d, g) {
          u.onload = d, u.onerror = g;
        }), ht(i, "link", a), n.instance = i;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (e.count++, n = jo.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
    }
  }
  var lc = 0;
  function Uy(e, t) {
    return e.stylesheets && e.count === 0 && qo(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
      var a = setTimeout(function() {
        if (e.stylesheets && qo(e, e.stylesheets), e.unsuspend) {
          var i = e.unsuspend;
          e.unsuspend = null, i();
        }
      }, 6e4 + t);
      0 < e.imgBytes && lc === 0 && (lc = 62500 * gy());
      var l = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && qo(e, e.stylesheets), e.unsuspend)) {
            var i = e.unsuspend;
            e.unsuspend = null, i();
          }
        },
        (e.imgBytes > lc ? 50 : 800) + t
      );
      return e.unsuspend = n, function() {
        e.unsuspend = null, clearTimeout(a), clearTimeout(l);
      };
    } : null;
  }
  function jo() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) qo(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var Ho = null;
  function qo(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Ho = /* @__PURE__ */ new Map(), t.forEach(jy, e), Ho = null, jo.call(e));
  }
  function jy(e, t) {
    if (!(t.state.loading & 4)) {
      var n = Ho.get(e);
      if (n) var a = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), Ho.set(e, n);
        for (var l = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), i = 0; i < l.length; i++) {
          var u = l[i];
          (u.nodeName === "LINK" || u.getAttribute("media") !== "not all") && (n.set(u.dataset.precedence, u), a = u);
        }
        a && n.set(null, a);
      }
      l = t.instance, u = l.getAttribute("data-precedence"), i = n.get(u) || a, i === a && n.set(null, l), n.set(u, l), this.count++, a = jo.bind(this), l.addEventListener("load", a), l.addEventListener("error", a), i ? i.parentNode.insertBefore(l, i.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(l, e.firstChild)), t.state.loading |= 4;
    }
  }
  var pi = {
    $$typeof: ae,
    Provider: null,
    Consumer: null,
    _currentValue: ue,
    _currentValue2: ue,
    _threadCount: 0
  };
  function Hy(e, t, n, a, l, i, u, d, g) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ml(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ml(0), this.hiddenUpdates = Ml(null), this.identifierPrefix = a, this.onUncaughtError = l, this.onCaughtError = i, this.onRecoverableError = u, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = g, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function rm(e, t, n, a, l, i, u, d, g, E, N, L) {
    return e = new Hy(
      e,
      t,
      n,
      u,
      g,
      E,
      N,
      L,
      d
    ), t = 1, i === !0 && (t |= 24), i = Xt(3, null, null, t), e.current = i, i.stateNode = e, t = ju(), t.refCount++, e.pooledCache = t, t.refCount++, i.memoizedState = {
      element: a,
      isDehydrated: n,
      cache: t
    }, Yu(i), e;
  }
  function im(e) {
    return e ? (e = $l, e) : $l;
  }
  function om(e, t, n, a, l, i) {
    l = im(l), a.context === null ? a.context = l : a.pendingContext = l, a = Ua(t), a.payload = { element: n }, i = i === void 0 ? null : i, i !== null && (a.callback = i), n = ja(e, a, t), n !== null && (Mt(n, e, t), Qr(n, e, t));
  }
  function um(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function rc(e, t) {
    um(e, t), (e = e.alternate) && um(e, t);
  }
  function sm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = dl(e, 67108864);
      t !== null && Mt(t, e, 67108864), rc(e, 67108864);
    }
  }
  function cm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Zt();
      t = il(t);
      var n = dl(e, t);
      n !== null && Mt(n, e, t), rc(e, t);
    }
  }
  var Bo = !0;
  function qy(e, t, n, a) {
    var l = U.T;
    U.T = null;
    var i = G.p;
    try {
      G.p = 2, ic(e, t, n, a);
    } finally {
      G.p = i, U.T = l;
    }
  }
  function By(e, t, n, a) {
    var l = U.T;
    U.T = null;
    var i = G.p;
    try {
      G.p = 8, ic(e, t, n, a);
    } finally {
      G.p = i, U.T = l;
    }
  }
  function ic(e, t, n, a) {
    if (Bo) {
      var l = oc(a);
      if (l === null)
        Xs(
          e,
          t,
          a,
          Yo,
          n
        ), dm(e, a);
      else if (Vy(
        l,
        e,
        t,
        n,
        a
      ))
        a.stopPropagation();
      else if (dm(e, a), t & 4 && -1 < Yy.indexOf(e)) {
        for (; l !== null; ) {
          var i = Dn(l);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (i = i.stateNode, i.current.memoizedState.isDehydrated) {
                  var u = Ct(i.pendingLanes);
                  if (u !== 0) {
                    var d = i;
                    for (d.pendingLanes |= 2, d.entangledLanes |= 2; u; ) {
                      var g = 1 << 31 - rt(u);
                      d.entanglements[1] |= g, u &= ~g;
                    }
                    qn(i), (ke & 6) === 0 && (ko = ct() + 500, oi(0));
                  }
                }
                break;
              case 31:
              case 13:
                d = dl(i, 2), d !== null && Mt(d, i, 2), Ao(), rc(i, 2);
            }
          if (i = oc(a), i === null && Xs(
            e,
            t,
            a,
            Yo,
            n
          ), i === l) break;
          l = i;
        }
        l !== null && a.stopPropagation();
      } else
        Xs(
          e,
          t,
          a,
          null,
          n
        );
    }
  }
  function oc(e) {
    return e = Rr(e), uc(e);
  }
  var Yo = null;
  function uc(e) {
    if (Yo = null, e = In(e), e !== null) {
      var t = y(e);
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
    return Yo = e, null;
  }
  function fm(e) {
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
        switch (_i()) {
          case zl:
            return 2;
          case en:
            return 8;
          case tn:
          case Qn:
            return 32;
          case Rl:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var sc = !1, $a = null, Ia = null, Ka = null, mi = /* @__PURE__ */ new Map(), hi = /* @__PURE__ */ new Map(), Za = [], Yy = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function dm(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        $a = null;
        break;
      case "dragenter":
      case "dragleave":
        Ia = null;
        break;
      case "mouseover":
      case "mouseout":
        Ka = null;
        break;
      case "pointerover":
      case "pointerout":
        mi.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        hi.delete(t.pointerId);
    }
  }
  function gi(e, t, n, a, l, i) {
    return e === null || e.nativeEvent !== i ? (e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: a,
      nativeEvent: i,
      targetContainers: [l]
    }, t !== null && (t = Dn(t), t !== null && sm(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function Vy(e, t, n, a, l) {
    switch (t) {
      case "focusin":
        return $a = gi(
          $a,
          e,
          t,
          n,
          a,
          l
        ), !0;
      case "dragenter":
        return Ia = gi(
          Ia,
          e,
          t,
          n,
          a,
          l
        ), !0;
      case "mouseover":
        return Ka = gi(
          Ka,
          e,
          t,
          n,
          a,
          l
        ), !0;
      case "pointerover":
        var i = l.pointerId;
        return mi.set(
          i,
          gi(
            mi.get(i) || null,
            e,
            t,
            n,
            a,
            l
          )
        ), !0;
      case "gotpointercapture":
        return i = l.pointerId, hi.set(
          i,
          gi(
            hi.get(i) || null,
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
  function pm(e) {
    var t = In(e.target);
    if (t !== null) {
      var n = y(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = T(n), t !== null) {
            e.blockedOn = t, _r(e.priority, function() {
              cm(n);
            });
            return;
          }
        } else if (t === 31) {
          if (t = S(n), t !== null) {
            e.blockedOn = t, _r(e.priority, function() {
              cm(n);
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
  function Vo(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = oc(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var a = new n.constructor(
          n.type,
          n
        );
        Yl = a, n.target.dispatchEvent(a), Yl = null;
      } else
        return t = Dn(n), t !== null && sm(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function mm(e, t, n) {
    Vo(e) && n.delete(t);
  }
  function Gy() {
    sc = !1, $a !== null && Vo($a) && ($a = null), Ia !== null && Vo(Ia) && (Ia = null), Ka !== null && Vo(Ka) && (Ka = null), mi.forEach(mm), hi.forEach(mm);
  }
  function Go(e, t) {
    e.blockedOn === t && (e.blockedOn = null, sc || (sc = !0, o.unstable_scheduleCallback(
      o.unstable_NormalPriority,
      Gy
    )));
  }
  var Fo = null;
  function hm(e) {
    Fo !== e && (Fo = e, o.unstable_scheduleCallback(
      o.unstable_NormalPriority,
      function() {
        Fo === e && (Fo = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t], a = e[t + 1], l = e[t + 2];
          if (typeof a != "function") {
            if (uc(a || n) === null)
              continue;
            break;
          }
          var i = Dn(n);
          i !== null && (e.splice(t, 3), t -= 3, os(
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
  function vr(e) {
    function t(g) {
      return Go(g, e);
    }
    $a !== null && Go($a, e), Ia !== null && Go(Ia, e), Ka !== null && Go(Ka, e), mi.forEach(t), hi.forEach(t);
    for (var n = 0; n < Za.length; n++) {
      var a = Za[n];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < Za.length && (n = Za[0], n.blockedOn === null); )
      pm(n), n.blockedOn === null && Za.shift();
    if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
      for (a = 0; a < n.length; a += 3) {
        var l = n[a], i = n[a + 1], u = l[it] || null;
        if (typeof i == "function")
          u || hm(n);
        else if (u) {
          var d = null;
          if (i && i.hasAttribute("formAction")) {
            if (l = i, u = i[it] || null)
              d = u.formAction;
            else if (uc(l) !== null) continue;
          } else d = u.action;
          typeof d == "function" ? n[a + 1] = d : (n.splice(a, 3), a -= 3), hm(n);
        }
      }
  }
  function gm() {
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
  function cc(e) {
    this._internalRoot = e;
  }
  Qo.prototype.render = cc.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(c(409));
    var n = t.current, a = Zt();
    om(n, a, e, t, null, null);
  }, Qo.prototype.unmount = cc.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      om(e.current, 2, null, e, null, null), Ao(), t[xa] = null;
    }
  };
  function Qo(e) {
    this._internalRoot = e;
  }
  Qo.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Ri();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Za.length && t !== 0 && t < Za[n].priority; n++) ;
      Za.splice(n, 0, e), n === 0 && pm(e);
    }
  };
  var ym = s.version;
  if (ym !== "19.2.6")
    throw Error(
      c(
        527,
        ym,
        "19.2.6"
      )
    );
  G.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(c(188)) : (e = Object.keys(e).join(","), Error(c(268, e)));
    return e = z(t), e = e !== null ? O(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var Fy = {
    bundleType: 0,
    version: "19.2.6",
    rendererPackageName: "react-dom",
    currentDispatcherRef: U,
    reconcilerVersion: "19.2.6"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Xo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Xo.isDisabled && Xo.supportsFiber)
      try {
        Xn = Xo.inject(
          Fy
        ), $e = Xo;
      } catch {
      }
  }
  return Am.createRoot = function(e, t) {
    if (!p(e)) throw Error(c(299));
    var n = !1, a = "", l = xd, i = Ad, u = Ed;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (l = t.onUncaughtError), t.onCaughtError !== void 0 && (i = t.onCaughtError), t.onRecoverableError !== void 0 && (u = t.onRecoverableError)), t = rm(
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
      gm
    ), e[xa] = t.current, Qs(e), new cc(t);
  }, Am.hydrateRoot = function(e, t, n) {
    if (!p(e)) throw Error(c(299));
    var a = !1, l = "", i = xd, u = Ad, d = Ed, g = null;
    return n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onUncaughtError !== void 0 && (i = n.onUncaughtError), n.onCaughtError !== void 0 && (u = n.onCaughtError), n.onRecoverableError !== void 0 && (d = n.onRecoverableError), n.formState !== void 0 && (g = n.formState)), t = rm(
      e,
      1,
      !0,
      t,
      n ?? null,
      a,
      l,
      g,
      i,
      u,
      d,
      gm
    ), t.context = im(null), n = t.current, a = Zt(), a = il(a), l = Ua(a), l.callback = null, ja(n, l, a), n = a, t.current.lanes = n, ka(t, n), qn(t), e[xa] = t.current, Qs(e), new Qo(t);
  }, Am.version = "19.2.6", Am;
}
var B0;
function hA() {
  if (B0) return gv.exports;
  B0 = 1;
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (o) {
        console.error(o);
      }
  }
  return r(), gv.exports = mA(), gv.exports;
}
hA();
(function() {
  var r = `@charset "UTF-8";.glide{position:relative;width:100%;box-sizing:border-box}.glide *{box-sizing:inherit}.glide__track{overflow:hidden}.glide__slides{position:relative;width:100%;list-style:none;backface-visibility:hidden;transform-style:preserve-3d;touch-action:pan-Y;overflow:hidden;margin:0;padding:0;white-space:nowrap;display:flex;flex-wrap:nowrap;will-change:transform}.glide__slides--dragging{-webkit-user-select:none;user-select:none}.glide__slide{width:100%;height:100%;flex-shrink:0;white-space:normal;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent}.glide__slide a{-webkit-user-select:none;user-select:none;-webkit-user-drag:none;-moz-user-select:none;-ms-user-select:none}.glide__arrows,.glide__bullets{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}.glide--rtl{direction:rtl}@media only screen and (min-width:1260px){.container .aligned-carousel{margin-left:-124px!important}}.glide{display:flex;flex-direction:column;gap:32px;position:relative}[data-image-auto-size=true] .glide__slides .glide__slide{height:auto;position:relative;display:inline-flex;justify-content:center}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img{display:flex;width:100%;max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img{flex-grow:1;object-fit:cover}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img.uds-img{max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img figure.uds-figure{display:flex;justify-content:space-between;flex-direction:column}.glide .glide__track{position:relative}.glide .glide__track .glide__slides{margin-bottom:0;touch-action:auto}.glide .glide__track .glide__slides .glide__slide .card{width:100%}@media only screen and (min-width:576px){.glide[data-has-shadow=true] .glide__track.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}}.glide__arrows{z-index:2;align-self:center}.glide__arrows .glide__arrow{color:#191919;width:4rem;height:4rem;margin:0 .5rem;background-color:#e8e8e8;border:1px solid #d0d0d0;border-radius:50%;font-size:1.3rem;text-shadow:0 .25em .5em rgba(0,0,0,.1);opacity:1;cursor:pointer;transition:opacity .15s ease,border .3s ease-in-out;line-height:1}.glide__arrows .glide__arrow.glide__arrow--disabled{color:#e8e8e8;background-color:#fafafa;border:1px solid #e8e8e8;opacity:1}.glide__arrows .glide__arrow:focus{outline:none}.glide__arrows .glide__arrow:hover{border-color:#fff}.glide__arrows .glide__arrow--left{left:2em}.glide__arrows .glide__arrow--right{right:2em}.glide__arrows .glide__arrow--disabled{opacity:.33}.glide__bullets{z-index:2;list-style:none;max-width:100%;display:flex;justify-content:center}.glide__bullet{transition:all .3s ease-in-out;background-color:#d0d0d0;width:1rem;height:1rem;padding:0;border-radius:50%;border:2px solid transparent;cursor:pointer;line-height:0;margin:.375rem}.glide__bullet:focus{outline:none}.glide__bullet:hover{border:1px solid #d0d0d0;background-color:#191919}.glide__bullet--active{background-color:#191919}.glide.gray-dark-bg .glide__bullet:focus{background-color:#ffc627}.glide.gray-dark-bg .glide__bullet:hover{border:1px solid #ffc627;background-color:#333}.glide.gray-dark-bg .glide__bullet--active{background-color:#ffc627}.glide.aligned-carousel{width:1448px;margin:auto}.glide.image-gallery{gap:0;overflow:hidden}.glide.image-gallery .glide__track{border:1px solid #d0d0d0}.glide.image-gallery .glide__track:after{content:none}.glide.image-gallery .glide__track .glide__slides li.glide__slide{display:list-item}.glide.image-gallery .glide__track .glide__slides{margin-bottom:0;height:100%}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img{height:100%}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img img{object-fit:cover;border:none}.glide.image-gallery .image-gallery-action-area{border:1px solid #d0d0d0;border-top:0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .image-navigator{border-bottom:1px solid #d0d0d0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text{padding:1rem 0;display:inline-block}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text>div{height:auto!important}.glide.image-gallery figcaption{padding:0 .75rem;font-size:.75rem}.glide.image-gallery figcaption h2{font-size:1.5rem;line-height:1.75rem;letter-spacing:-.0525rem}.glide.image-gallery .image-navigator{position:relative}.glide.image-gallery .image-navigator .image-navigator-images{min-height:64px;padding-top:1rem;padding-bottom:1rem;width:100%;margin:auto;overflow:hidden}.glide.image-gallery .image-navigator .image-navigator-images.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider{position:relative;left:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets{position:relative}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container{position:relative;margin:0 .5rem;height:48px;border:0;padding:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:first-child{margin-left:16rem}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container .bullet-image{flex-basis:auto;width:88px;height:100%;border-radius:0;border:0;z-index:2;object-fit:cover;margin:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:focus{box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .glide__bullet--active{background-color:transparent;border:5px solid #ffc627}.glide.image-gallery .image-navigator .glide__arrows{width:100%;display:flex;justify-content:space-between;align-items:center}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow{width:2.5rem;height:2.5rem;display:flex;align-items:center;justify-content:center;z-index:3;position:absolute;background-color:#fff}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow:hover{border-color:#d0d0d0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow .arrow-icon{font-size:1rem}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--prev{left:0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--next{right:0}@media only screen and (max-width:576px){.glide{gap:21px}.glide:not(.glide.image-gallery) .glide__bullets{display:none}.glide.image-gallery{width:100%;margin:auto!important}.glide.image-gallery .image-navigator .image-navigator-images .glide__arrows .glide__arrow{display:none}}@media only screen and (max-width:1260px){.glide.aligned-carousel{width:100%}}.glide--swipeable{cursor:grab;cursor:-moz-grab;cursor:-webkit-grab}.glide--dragging{cursor:grabbing;cursor:-moz-grabbing;cursor:-webkit-grabbing}.glide[data-remove-side-background=true]:after,.glide[data-remove-side-background=true]:before{content:none}.glide button:focus,.glide a:focus,.glide input:focus,.glide textarea:focus,.glide select:focus{outline:none!important;box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.gray-dark-bg button:focus,.glide.gray-dark-bg a:focus,.glide.gray-dark-bg input:focus,.glide.gray-dark-bg textarea:focus,.glide.gray-dark-bg select:focus{box-shadow:0 0 0 3px #333,0 0 0 5px #ffc627!important}.glide.image-gallery,.glide.image-carousel{margin:auto}.glide.image-gallery[role=figure],.glide.image-gallery figure.uds-figure,.glide.image-carousel[role=figure],.glide.image-carousel figure.uds-figure{margin:0}.glide.image-gallery[role=figure] figcaption *,.glide.image-gallery[role=figure] .uds-caption-text,.glide.image-gallery figure.uds-figure figcaption *,.glide.image-gallery figure.uds-figure .uds-caption-text,.glide.image-carousel[role=figure] figcaption *,.glide.image-carousel[role=figure] .uds-caption-text,.glide.image-carousel figure.uds-figure figcaption *,.glide.image-carousel figure.uds-figure .uds-caption-text{color:#191919;max-width:100%}
`, o = document.createElement("style");
  o.type = "text/css", o.styleSheet ? o.styleSheet.cssText = r : o.appendChild(document.createTextNode(r)), document.head.appendChild(o);
})();
function Y0(r, o) {
  (o == null || o > r.length) && (o = r.length);
  for (var s = 0, f = Array(o); s < o; s++) f[s] = r[s];
  return f;
}
function gA(r) {
  if (Array.isArray(r)) return r;
}
function yA(r, o) {
  var s = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (s != null) {
    var f, c, p, y, T = [], S = !0, x = !1;
    try {
      if (p = (s = s.call(r)).next, o !== 0) for (; !(S = (f = p.call(s)).done) && (T.push(f.value), T.length !== o); S = !0) ;
    } catch (z) {
      x = !0, c = z;
    } finally {
      try {
        if (!S && s.return != null && (y = s.return(), Object(y) !== y)) return;
      } finally {
        if (x) throw c;
      }
    }
    return T;
  }
}
function vA() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function bA(r, o) {
  return gA(r) || yA(r, o) || SA(r, o) || vA();
}
function SA(r, o) {
  if (r) {
    if (typeof r == "string") return Y0(r, o);
    var s = {}.toString.call(r).slice(8, -1);
    return s === "Object" && r.constructor && (s = r.constructor.name), s === "Map" || s === "Set" ? Array.from(r) : s === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s) ? Y0(r, o) : void 0;
  }
}
const YS = Object.entries, V0 = Object.setPrototypeOf, wA = Object.isFrozen, VS = Object.getPrototypeOf, GS = Object.getOwnPropertyDescriptor;
let ba = Object.freeze, nl = Object.seal, zc = Object.create, FS = typeof Reflect < "u" && Reflect, nb = FS.apply, ab = FS.construct;
ba || (ba = function(o) {
  return o;
});
nl || (nl = function(o) {
  return o;
});
nb || (nb = function(o, s) {
  for (var f = arguments.length, c = new Array(f > 2 ? f - 2 : 0), p = 2; p < f; p++) c[p - 2] = arguments[p];
  return o.apply(s, c);
});
ab || (ab = function(o) {
  for (var s = arguments.length, f = new Array(s > 1 ? s - 1 : 0), c = 1; c < s; c++) f[c - 1] = arguments[c];
  return new o(...f);
});
const Io = wn(Array.prototype.forEach), TA = wn(Array.prototype.lastIndexOf), G0 = wn(Array.prototype.pop), Em = wn(Array.prototype.push), kA = wn(Array.prototype.slice), xA = wn(Array.prototype.splice), Lc = Array.isArray, yv = QS(Set), vv = wn(Set.prototype.add), _m = wn(Set.prototype.has), dc = wn(String.prototype.toLowerCase), bv = wn(String.prototype.toString), F0 = wn(String.prototype.match), Cm = wn(String.prototype.replace), Q0 = wn(String.prototype.indexOf), AA = wn(String.prototype.trim), EA = wn(Number.prototype.toString), _A = wn(Boolean.prototype.toString), X0 = typeof BigInt > "u" ? null : wn(BigInt.prototype.toString), P0 = typeof Symbol > "u" ? null : wn(Symbol.prototype.toString), El = wn(Object.prototype.hasOwnProperty), Om = wn(Object.prototype.toString), el = wn(RegExp.prototype.test), Ko = QS(TypeError);
function wn(r) {
  return function(o) {
    o instanceof RegExp && (o.lastIndex = 0);
    for (var s = arguments.length, f = new Array(s > 1 ? s - 1 : 0), c = 1; c < s; c++) f[c - 1] = arguments[c];
    return nb(r, o, f);
  };
}
function QS(r) {
  return function() {
    for (var o = arguments.length, s = new Array(o), f = 0; f < o; f++) s[f] = arguments[f];
    return ab(r, s);
  };
}
function bt(r, o) {
  let s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : dc;
  if (V0 && V0(r, null), !Lc(o)) return r;
  let f = o.length;
  for (; f--; ) {
    let c = o[f];
    if (typeof c == "string") {
      const p = s(c);
      p !== c && (wA(o) || (o[f] = p), c = p);
    }
    r[c] = !0;
  }
  return r;
}
function CA(r) {
  for (let o = 0; o < r.length; o++) El(r, o) || (r[o] = null);
  return r;
}
function Sr(r) {
  const o = zc(null);
  for (const f of YS(r)) {
    var s = bA(f, 2);
    const c = s[0], p = s[1];
    El(r, c) && (Lc(p) ? o[c] = CA(p) : p && typeof p == "object" && p.constructor === Object ? o[c] = Sr(p) : o[c] = p);
  }
  return o;
}
function OA(r) {
  switch (typeof r) {
    case "string":
      return r;
    case "number":
      return EA(r);
    case "boolean":
      return _A(r);
    case "bigint":
      return X0 ? X0(r) : "0";
    case "symbol":
      return P0 ? P0(r) : "Symbol()";
    case "undefined":
      return Om(r);
    case "function":
    case "object": {
      if (r === null) return Om(r);
      const o = r, s = Tr(o, "toString");
      if (typeof s == "function") {
        const f = s(o);
        return typeof f == "string" ? f : Om(f);
      }
      return Om(r);
    }
    default:
      return Om(r);
  }
}
function Tr(r, o) {
  for (; r !== null; ) {
    const f = GS(r, o);
    if (f) {
      if (f.get) return wn(f.get);
      if (typeof f.value == "function") return wn(f.value);
    }
    r = VS(r);
  }
  function s() {
    return null;
  }
  return s;
}
function NA(r, o) {
  for (; r !== null; ) {
    const s = GS(r, o);
    if (s) return s.get ? wn(s.get) : null;
    r = VS(r);
  }
  return null;
}
function zA(r) {
  try {
    return el(r, ""), !0;
  } catch {
    return !1;
  }
}
const $0 = ba([
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
]), Sv = ba([
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
]), wv = ba([
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
]), RA = ba([
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
]), Tv = ba([
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
]), DA = ba([
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
]), I0 = ba(["#text"]), K0 = ba([
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
]), kv = ba([
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
]), Z0 = ba([
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
]), eh = ba([
  "xlink:href",
  "xml:id",
  "xlink:title",
  "xml:space",
  "xmlns:xlink"
]), LA = nl(/{{[\w\W]*|^[\w\W]*}}/g), MA = nl(/<%[\w\W]*|^[\w\W]*%>/g), UA = nl(/\${[\w\W]*/g), jA = nl(/^data-[\-\w.\u00B7-\uFFFF]+$/), HA = nl(/^aria-[\-\w]+$/), W0 = nl(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), qA = nl(/^(?:\w+script|data):/i), BA = nl(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), YA = nl(/^html$/i), VA = nl(/^[a-z][.\w]*(-[.\w]+)+$/i), xv = nl(/<[/\w!]/g), J0 = nl(/<[/\w]/g), GA = nl(/<\/no(script|embed|frames)/i), e1 = nl(/\/>/i), Yn = {
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
}, FA = ba(bt({}, [
  "style",
  "script",
  "xmp",
  "iframe",
  "noembed",
  "noframes",
  "plaintext",
  "noscript"
])), QA = function() {
  return typeof window > "u" ? null : window;
}, XA = function(o, s) {
  if (typeof o != "object" || typeof o.createPolicy != "function") return null;
  let f = null;
  const c = "data-tt-policy-suffix";
  s && s.hasAttribute(c) && (f = s.getAttribute(c));
  const p = "dompurify" + (f ? "#" + f : "");
  try {
    return o.createPolicy(p, {
      createHTML(y) {
        return y;
      },
      createScriptURL(y) {
        return y;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + p + " could not be created."), null;
  }
}, t1 = function() {
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
}, lu = function(o, s, f, c) {
  return El(o, s) && Lc(o[s]) ? bt(c.base ? Sr(c.base) : {}, o[s], c.transform) : f;
}, Av = function(o, s, f) {
  const c = El(o, s) ? o[s] : void 0;
  return c && typeof c == "object" ? Sr(c) : f();
};
function XS() {
  let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : QA();
  const o = (h) => XS(h);
  if (o.version = "3.4.17", o.removed = [], !r || !r.document || r.document.nodeType !== Yn.document || !r.Element)
    return o.isSupported = !1, o;
  let s = r.document;
  const f = s, c = f.currentScript;
  r.DocumentFragment;
  const p = r.HTMLTemplateElement, y = r.Node, T = r.Element, S = r.NodeFilter;
  r.NamedNodeMap === void 0 && (r.NamedNodeMap || r.MozNamedAttrMap), r.HTMLFormElement;
  const x = r.DOMParser, z = r.trustedTypes, O = T.prototype, M = Tr(O, "cloneNode"), $ = Tr(O, "remove"), H = Tr(O, "removeAttributeNode"), V = Tr(O, "nextSibling"), X = Tr(O, "childNodes"), I = Tr(O, "parentNode"), q = Tr(O, "shadowRoot"), fe = Tr(O, "attributes"), ae = y && y.prototype ? Tr(y.prototype, "nodeType") : null, le = y && y.prototype ? Tr(y.prototype, "nodeName") : null, K = y && y.prototype ? Tr(y.prototype, "ownerDocument") : null, F = function(m) {
    return ae ? ae(m) : m.nodeType;
  }, J = function(m) {
    return le ? le(m) : m.nodeName;
  }, Ae = NA(O, "namespaceURI"), Qe = function(m) {
    return Ae ? Ae(m) : m.namespaceURI;
  };
  if (typeof p == "function") {
    const h = s.createElement("template");
    h.content && h.content.ownerDocument && (s = h.content.ownerDocument);
  }
  let ve, je = "", xe, yt = !1, Fe = 0;
  const B = function() {
    if (Fe > 0) throw Ko('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  }, U = function(m) {
    B(), Fe++;
    try {
      return ve.createHTML(m);
    } finally {
      Fe--;
    }
  }, G = function(m) {
    B(), Fe++;
    try {
      return ve.createScriptURL(m);
    } finally {
      Fe--;
    }
  }, ue = function() {
    return yt || (xe = XA(z, c), yt = !0), xe;
  }, ie = s, Ye = ie.implementation, Se = ie.createNodeIterator, se = ie.createDocumentFragment, Z = ie.getElementsByTagName, be = f.importNode;
  let ce = t1();
  o.isSupported = typeof YS == "function" && typeof I == "function" && Ye && Ye.createHTMLDocument !== void 0;
  const lt = LA, Nn = MA, kn = UA, st = jA, Ar = HA, _l = qA, Cl = BA, Ai = VA;
  let zn = W0, Ce = null;
  const ll = bt({}, [
    ...$0,
    ...Sv,
    ...wv,
    ...Tv,
    ...I0
  ]);
  let De = null;
  const Ol = bt({}, [
    ...K0,
    ...kv,
    ...Z0,
    ...eh
  ]);
  let _t = Object.seal(zc(null, {
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
  })), Fn = null, Nl = null;
  const Rn = Object.seal(zc(null, {
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
  let Ei = !0, ct = !0, _i = !1, zl = !0, en = !1, tn = !0, Qn = !1, Rl = !1, Dl = null, Ll = null, Xn = !1, $e = !1, Bt = !1, rt = !1, Ci = !0, Oi = !1;
  const Ni = "user-content-";
  let Sa = !0, wa = !1, nn = null, Ct = {}, an = null;
  const Ta = bt({}, [
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
  let zi = null;
  const Er = bt({}, [
    "audio",
    "video",
    "img",
    "source",
    "image",
    "track"
  ]);
  let Ml = null;
  const ka = bt({}, [
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
  ]), Ul = "http://www.w3.org/1998/Math/MathML", rl = "http://www.w3.org/2000/svg", Yt = "http://www.w3.org/1999/xhtml";
  let Pn = Yt, il = !1, ol = null;
  const Ri = bt({}, [
    Ul,
    rl,
    Yt
  ], bv), _r = ba([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext"
  ]);
  let ln = bt({}, _r);
  const Ie = ba(["annotation-xml"]);
  let it = bt({}, Ie);
  const xa = bt({}, [
    "title",
    "style",
    "font",
    "a",
    "script"
  ]);
  let $n = null;
  const cu = ["application/xhtml+xml", "text/html"], fu = "text/html";
  let He = null, rn = null;
  const Cr = s.createElement("form"), In = function(m) {
    return m instanceof RegExp || m instanceof Function;
  }, Dn = function() {
    let m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (rn && rn === m) return;
    (!m || typeof m != "object") && (m = {}), m = Sr(m), $n = cu.indexOf(m.PARSER_MEDIA_TYPE) === -1 ? fu : m.PARSER_MEDIA_TYPE, He = $n === "application/xhtml+xml" ? bv : dc, Ce = lu(m, "ALLOWED_TAGS", ll, { transform: He }), De = lu(m, "ALLOWED_ATTR", Ol, { transform: He }), ol = lu(m, "ALLOWED_NAMESPACES", Ri, { transform: bv }), Ml = lu(m, "ADD_URI_SAFE_ATTR", ka, {
      transform: He,
      base: ka
    }), zi = lu(m, "ADD_DATA_URI_TAGS", Er, {
      transform: He,
      base: Er
    }), an = lu(m, "FORBID_CONTENTS", Ta, { transform: He }), Fn = lu(m, "FORBID_TAGS", Sr({}), { transform: He }), Nl = lu(m, "FORBID_ATTR", Sr({}), { transform: He }), Ct = El(m, "USE_PROFILES") ? m.USE_PROFILES && typeof m.USE_PROFILES == "object" ? Sr(m.USE_PROFILES) : m.USE_PROFILES : !1, Ei = m.ALLOW_ARIA_ATTR !== !1, ct = m.ALLOW_DATA_ATTR !== !1, _i = m.ALLOW_UNKNOWN_PROTOCOLS || !1, zl = m.ALLOW_SELF_CLOSE_IN_ATTR !== !1, en = m.SAFE_FOR_TEMPLATES || !1, tn = m.SAFE_FOR_XML !== !1, Qn = m.WHOLE_DOCUMENT || !1, $e = m.RETURN_DOM || !1, Bt = m.RETURN_DOM_FRAGMENT || !1, rt = m.RETURN_TRUSTED_TYPE || !1, Xn = m.FORCE_BODY || !1, Ci = m.SANITIZE_DOM !== !1, Oi = m.SANITIZE_NAMED_PROPS || !1, Sa = m.KEEP_CONTENT !== !1, wa = m.IN_PLACE || !1, zn = zA(m.ALLOWED_URI_REGEXP) ? m.ALLOWED_URI_REGEXP : W0, Pn = typeof m.NAMESPACE == "string" ? m.NAMESPACE : Yt, ln = Av(m, "MATHML_TEXT_INTEGRATION_POINTS", () => bt({}, _r)), it = Av(m, "HTML_INTEGRATION_POINTS", () => bt({}, Ie));
    const k = Av(m, "CUSTOM_ELEMENT_HANDLING", () => zc(null));
    if (_t = zc(null), El(k, "tagNameCheck") && In(k.tagNameCheck) && (_t.tagNameCheck = k.tagNameCheck), El(k, "attributeNameCheck") && In(k.attributeNameCheck) && (_t.attributeNameCheck = k.attributeNameCheck), El(k, "allowCustomizedBuiltInElements") && typeof k.allowCustomizedBuiltInElements == "boolean" && (_t.allowCustomizedBuiltInElements = k.allowCustomizedBuiltInElements), nl(_t), en && (ct = !1), Bt && ($e = !0), Ct && (Ce = bt({}, I0), De = zc(null), Ct.html === !0 && (bt(Ce, $0), bt(De, K0)), Ct.svg === !0 && (bt(Ce, Sv), bt(De, kv), bt(De, eh)), Ct.svgFilters === !0 && (bt(Ce, wv), bt(De, kv), bt(De, eh)), Ct.mathMl === !0 && (bt(Ce, Tv), bt(De, Z0), bt(De, eh))), Rn.tagCheck = null, Rn.attributeCheck = null, El(m, "ADD_TAGS") && (typeof m.ADD_TAGS == "function" ? Rn.tagCheck = m.ADD_TAGS : Lc(m.ADD_TAGS) && (Ce === ll && (Ce = Sr(Ce)), bt(Ce, m.ADD_TAGS, He))), El(m, "ADD_ATTR") && (typeof m.ADD_ATTR == "function" ? Rn.attributeCheck = m.ADD_ATTR : Lc(m.ADD_ATTR) && (De === Ol && (De = Sr(De)), bt(De, m.ADD_ATTR, He))), El(m, "ADD_FORBID_CONTENTS") && Lc(m.ADD_FORBID_CONTENTS) && (an === Ta && (an = Sr(an)), bt(an, m.ADD_FORBID_CONTENTS, He)), Sa && (Ce["#text"] = !0), Qn && bt(Ce, [
      "html",
      "head",
      "body"
    ]), Ce.table && (bt(Ce, ["tbody"]), delete Fn.tbody), m.TRUSTED_TYPES_POLICY) {
      if (typeof m.TRUSTED_TYPES_POLICY.createHTML != "function") throw Ko('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof m.TRUSTED_TYPES_POLICY.createScriptURL != "function") throw Ko('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const D = ve;
      ve = m.TRUSTED_TYPES_POLICY;
      try {
        je = U("");
      } catch (j) {
        throw ve = D, j;
      }
    } else m.TRUSTED_TYPES_POLICY === null ? (ve = void 0, je = "") : (ve === void 0 && (ve = ue()), ve && typeof je == "string" && (je = U("")));
    ba && ba(m), rn = m;
  }, Aa = bt({}, [
    ...Sv,
    ...wv,
    ...RA
  ]), Kn = bt({}, [...Tv, ...DA]), Ke = function(m, k, D) {
    return k.namespaceURI === Yt ? m === "svg" : k.namespaceURI === Ul ? m === "svg" && (D === "annotation-xml" || ln[D]) : !!Aa[m];
  }, Di = function(m, k, D) {
    return k.namespaceURI === Yt ? m === "math" : k.namespaceURI === rl ? m === "math" && it[D] : !!Kn[m];
  }, Li = function(m, k, D) {
    return k.namespaceURI === rl && !it[D] || k.namespaceURI === Ul && !ln[D] ? !1 : !Kn[m] && (xa[m] || !Aa[m]);
  }, Zn = function(m) {
    const k = Qe(m), D = dc(J(m)), j = I(m);
    let ee, ne;
    return j && F(j) === Yn.element ? (ee = { namespaceURI: Qe(j) }, ne = dc(J(j))) : (ee = { namespaceURI: Pn }, ne = "template"), ol[k] ? k === rl ? Ke(D, ee, ne) : k === Ul ? Di(D, ee, ne) : k === Yt ? Li(D, ee, ne) : !!($n === "application/xhtml+xml" && ol[k]) : !1;
  }, Et = function(m) {
    Em(o.removed, { element: m });
    try {
      I(m).removeChild(m);
    } catch {
      if ($(m), !I(m)) throw Ko("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  }, Mi = function(m, k, D) {
    try {
      H(m, k);
    } catch {
      try {
        m.removeAttribute(D);
      } catch {
      }
    }
  }, jl = function(m) {
    _a(m);
    const k = X(m);
    k && Io(kA(k), (j) => {
      try {
        $(j);
      } catch {
      }
    });
    const D = F(m) === Yn.element ? fe(m) : null;
    if (D) for (let j = D.length - 1; j >= 0; --j) {
      const ee = D[j], ne = ee && ee.name;
      typeof ne == "string" && Mi(m, ee, ne);
    }
  }, Wn = function(m, k, D) {
    if (!D) try {
      D = k.getAttributeNode(m);
    } catch {
      D = null;
    }
    Em(o.removed, {
      attribute: D || null,
      from: k
    });
    try {
      D ? H(k, D) : k.removeAttribute(m);
    } catch {
      try {
        k.removeAttribute(m);
      } catch {
      }
    }
    if (m === "is")
      if ($e || Bt) try {
        Et(k);
      } catch {
      }
      else try {
        k.setAttribute(m, "");
      } catch {
      }
  }, Ui = function(m) {
    const k = fe(m);
    if (k)
      for (let D = k.length - 1; D >= 0; --D) {
        const j = k[D], ee = j && j.name;
        typeof ee != "string" || De[He(ee)] || Mi(m, j, ee);
      }
  }, Ea = function(m, k) {
    let D = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
    const j = [m];
    for (; j.length > 0; ) {
      const ee = j.pop();
      if (k(ee) === !1) continue;
      if (D && F(ee) === Yn.element) {
        const ge = q(ee);
        Tt(ge) && j.push(ge);
      }
      const ne = X(ee);
      if (ne) for (let ge = ne.length - 1; ge >= 0; --ge) j.push(ne[ge]);
    }
  }, _a = function(m) {
    Ea(m, (k) => {
      F(k) === Yn.element && Ui(k);
    });
  }, Vt = function(m) {
    const k = [];
    return Ea(m, (D) => {
      k.push(D);
    }, !0), k;
  }, Ot = function(m, k) {
    const D = yv();
    Io(Vt(m), (j) => {
      F(j) === Yn.element && vv(D, j);
    }), Io(k, (j) => {
      F(j) === Yn.element && !_m(D, j) && Ui(j);
    });
  }, Or = function(m, k) {
    let D = !1;
    return Io(o.removed, (j) => {
      j.element && (D = D || j.element === m, _a(j.element));
    }), Ot(m, k), D;
  }, du = 8, Nr = function(m, k) {
    const D = nn;
    let j = null;
    const ee = () => (j || (j = yv(), Io(k, (ne) => {
      vv(j, ne);
    })), j);
    for (let ne = 0; ; ne++) {
      const ge = Vt(m), gt = [m];
      let Le = !1;
      if (Io(ge, (Be) => {
        F(Be) === Yn.documentFragment ? Em(gt, Be) : !Le && !_m(D, Be) && (Le = _m(ee(), Be));
      }), !Le) return;
      if (ne >= du) throw Ko("the tree kept changing during in-place sanitization; refusing to return it");
      Io(gt, (Be, ft) => {
        ji(Be, ft > 0, m, ee());
      });
    }
  }, ji = function(m, k, D, j) {
    const ee = Bl(m);
    let ne;
    for (; ne = ee.nextNode(); )
      !_m(j, ne) || _m(nn, ne) || (k && Nt(ce.uponSanitizeShadowNode, ne, null), Gt(ne, D), Gl(ne, D), Tt(ne.content) && An(ne.content));
  }, Hl = function(m) {
    nn && vv(nn, m);
  }, Hi = function(m, k) {
    return tn ? m === "patchsrc" ? !0 : m === "for" && k !== "label" && k !== "output" : !1;
  }, Ut = function(m) {
    tn && Ea(m, (k) => {
      const D = F(k);
      if (D === Yn.processingInstruction || D === Yn.comment && el(J0, k.data)) {
        try {
          $(k);
        } catch {
        }
        return !1;
      }
      if (D === Yn.element) {
        const j = k, ee = He(J(k));
        try {
          j.hasAttribute && j.hasAttribute("patchsrc") && j.removeAttribute("patchsrc"), j.hasAttribute && j.hasAttribute("for") && Hi("for", ee) && j.removeAttribute("for");
        } catch {
        }
      }
      return !0;
    });
  }, ql = function(m) {
    let k = null, D = null;
    if (Xn) m = "<remove></remove>" + m;
    else {
      const ne = F0(m, /^[\r\n\t ]+/);
      D = ne && ne[0];
    }
    $n === "application/xhtml+xml" && Pn === Yt && (m = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + m + "</body></html>");
    const j = ve ? U(m) : m;
    if (Pn === Yt) try {
      k = new x().parseFromString(j, $n);
    } catch {
    }
    if (!k || !k.documentElement) {
      k = Ye.createDocument(Pn, "template", null);
      try {
        k.documentElement.innerHTML = il ? je : j;
      } catch {
      }
    }
    const ee = k.body || k.documentElement;
    return m && D && ee.insertBefore(s.createTextNode(D), ee.childNodes[0] || null), Pn === Yt ? Z.call(k, Qn ? "html" : "body")[0] : Qn ? k.documentElement : ee;
  }, Bl = function(m) {
    const k = K ? K(m) : m.ownerDocument;
    return Se.call(k || m, m, S.SHOW_ELEMENT | S.SHOW_COMMENT | S.SHOW_TEXT | S.SHOW_PROCESSING_INSTRUCTION | S.SHOW_CDATA_SECTION, null);
  }, Ca = function(m) {
    return m = Cm(m, lt, " "), m = Cm(m, Nn, " "), m = Cm(m, kn, " "), m;
  }, Ln = function(m) {
    var k;
    zr(m);
    const D = (k = m.querySelectorAll) === null || k === void 0 ? void 0 : k.call(m, "template");
    D && Io(D, (j) => {
      Tt(j.content) && Ln(j.content);
    });
  }, zr = function(m) {
    m.normalize();
    const k = K ? K(m) : m.ownerDocument, D = Se.call(k || m, m, S.SHOW_TEXT | S.SHOW_COMMENT | S.SHOW_CDATA_SECTION | S.SHOW_PROCESSING_INSTRUCTION, null);
    let j = D.nextNode();
    for (; j; )
      j.data = Ca(j.data), j = D.nextNode();
  }, ul = function(m) {
    const k = le ? le(m) : null;
    return typeof k != "string" || He(k) !== "form" ? !1 : typeof m.nodeName != "string" || typeof m.textContent != "string" || typeof m.removeChild != "function" || m.attributes !== fe(m) || typeof m.removeAttribute != "function" || typeof m.removeAttributeNode != "function" || typeof m.getAttributeNode != "function" || typeof m.setAttribute != "function" || typeof m.namespaceURI != "string" || typeof m.insertBefore != "function" || typeof m.hasChildNodes != "function" || m.nodeType !== ae(m) || m.childNodes !== X(m);
  }, Tt = function(m) {
    if (!ae || typeof m != "object" || m === null) return !1;
    try {
      return ae(m) === Yn.documentFragment;
    } catch {
      return !1;
    }
  }, sl = function(m) {
    if (!ae || typeof m != "object" || m === null) return !1;
    try {
      return typeof ae(m) == "number";
    } catch {
      return !1;
    }
  };
  function Nt(h, m, k) {
    h.length !== 0 && Io(h, (D) => {
      D.call(o, m, k, rn);
    });
  }
  const qi = function(m, k) {
    return !!(tn && m.hasChildNodes() && !sl(m.firstElementChild) && el(xv, m.textContent) && el(xv, m.innerHTML) || tn && FA[k] && F(m) === Yn.element && Qe(m) === Yt && (sl(m.firstElementChild) || typeof m.textContent == "string" && el(xv, m.textContent)) || m.nodeType === Yn.processingInstruction || tn && m.nodeType === Yn.comment && el(J0, m.data));
  }, Oa = function(m, k) {
    if (m instanceof RegExp) return el(m, k);
    if (m instanceof Function) {
      for (var D = arguments.length, j = new Array(D > 2 ? D - 2 : 0), ee = 2; ee < D; ee++) j[ee - 2] = arguments[ee];
      return !!m(k, ...j);
    }
    return !1;
  }, pu = function(m, k, D) {
    if (!Fn[k] && Jn(k) && Oa(_t.tagNameCheck, k)) return !1;
    if (Sa && !an[k] && !an[dc(k)]) {
      const j = I(m), ee = X(m);
      if (ee && j) {
        const ne = ee.length;
        for (let ge = ne - 1; ge >= 0; --ge) {
          const gt = m === D ? M(ee[ge], !0) : ee[ge];
          j.insertBefore(gt, V(m));
        }
      }
    }
    return Et(m), !0;
  }, Bi = function(m, k, D, j) {
    return m.length === 0 ? k : k === D || k === j ? Sr(k) : k;
  }, xn = function(m, k) {
    return m === k || I(m) !== null ? !1 : (wa && _a(m), !0);
  }, Gt = function(m, k) {
    if (Hl(m), Nt(ce.beforeSanitizeElements, m, null), xn(m, k)) return !0;
    if (ul(m))
      return Et(m), !0;
    const D = He(J(m));
    if (Ce = Bi(ce.uponSanitizeElement, Ce, ll, Dl), Nt(ce.uponSanitizeElement, m, {
      tagName: D,
      allowedTags: Ce
    }), xn(m, k)) return !0;
    if (qi(m, D))
      return Et(m), !0;
    if (Fn[D] || !(Rn.tagCheck instanceof Function && Rn.tagCheck(D)) && !Ce[D]) {
      const j = pu(m, D, k);
      return j === !1 && (Nt(ce.afterSanitizeElements, m, null), xn(m, k)) ? !0 : j;
    }
    if (F(m) === Yn.element && !Zn(m) || (D === "noscript" || D === "noembed" || D === "noframes") && el(GA, m.innerHTML))
      return Et(m), !0;
    if (en && m.nodeType === Yn.text) {
      const j = Ca(m.textContent);
      m.textContent !== j && (Em(o.removed, { element: m.cloneNode() }), m.textContent = j);
    }
    return Nt(ce.afterSanitizeElements, m, null), xn(m, k);
  }, Yl = function(m, k, D) {
    if (Nl[k] || Hi(k, m) || Ci && (k === "id" || k === "name") && (D in s || D in Cr)) return !1;
    const j = De[k] || Rn.attributeCheck instanceof Function && Rn.attributeCheck(k, m);
    return ct && el(st, k) || Ei && el(Ar, k) ? !0 : j ? Ml[k] || el(zn, Cm(D, Cl, "")) || (k === "src" || k === "xlink:href" || k === "href") && m !== "script" && Q0(D, "data:") === 0 && zi[m] || _i && !el(_l, Cm(D, Cl, "")) ? !0 : !D : Jn(m) && Oa(_t.tagNameCheck, m) && Oa(_t.attributeNameCheck, k, m) || k === "is" && _t.allowCustomizedBuiltInElements && Oa(_t.tagNameCheck, D);
  }, Rr = bt({}, [
    "annotation-xml",
    "color-profile",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-src",
    "font-face-uri",
    "missing-glyph"
  ]), Jn = function(m) {
    return !Rr[dc(m)] && el(Ai, m);
  }, Na = function(m, k, D, j) {
    if (ve && typeof z == "object" && typeof z.getAttributeType == "function" && !D) switch (z.getAttributeType(m, k)) {
      case "TrustedHTML":
        return U(j);
      case "TrustedScriptURL":
        return G(j);
    }
    return j;
  }, Yi = function(m, k, D, j) {
    try {
      return D ? m.setAttributeNS(D, k, j) : m.setAttribute(k, j), ul(m) ? (Et(m), !1) : !0;
    } catch {
      return Wn(k, m), !1;
    }
  }, Vl = function(m, k) {
    return tn && el(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, k) ? !0 : dc(m) === "attributename" && F0(k, "href") !== null;
  }, Gl = function(m, k) {
    if (Nt(ce.beforeSanitizeAttributes, m, null), xn(m, k)) return;
    const D = m.attributes;
    if (!D || ul(m)) return;
    De = Bi(ce.uponSanitizeAttribute, De, Ol, Ll);
    const j = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: De,
      forceKeepAttr: void 0
    };
    let ee = D.length;
    const ne = He(m.nodeName);
    for (; ee--; ) {
      const ge = D[ee], gt = ge.name, Le = ge.namespaceURI, Be = ge.value, ft = He(gt), ut = Be;
      let Mn = gt === "value" ? ut : AA(ut), Ti = !1;
      if (j.attrName = ft, j.attrValue = Mn, j.keepAttr = !0, j.forceKeepAttr = void 0, Nt(ce.uponSanitizeAttribute, m, j), Mn = j.attrValue, Oi && (ft === "id" || ft === "name") && Q0(Mn, Ni) !== 0 && (Wn(gt, m, ge), Mn = Ni + Mn, Ti = !0), Vl(gt, Mn)) {
        Wn(gt, m, ge);
        continue;
      }
      if (!j.forceKeepAttr) {
        if (!j.keepAttr) {
          Wn(gt, m, ge);
          continue;
        }
        if (!zl && el(e1, Mn)) {
          Wn(gt, m, ge);
          continue;
        }
        if (en && (Mn = Ca(Mn)), !Yl(ne, ft, Mn)) {
          Wn(gt, m, ge);
          continue;
        }
        Mn = Na(ne, ft, Le, Mn), Mn !== ut && Yi(m, gt, Le, Mn) && Ti && G0(o.removed);
      }
    }
    Nt(ce.afterSanitizeAttributes, m, null), xn(m, k);
  }, An = function(m) {
    let k = null;
    const D = Bl(m);
    for (Nt(ce.beforeSanitizeShadowDOM, m, null); k = D.nextNode(); )
      if (Nt(ce.uponSanitizeShadowNode, k, null), Gt(k, m), Gl(k, m), Tt(k.content) && An(k.content), F(k) === Yn.element) {
        const j = q(k);
        Tt(j) && (Ft(j), An(j));
      }
    en && zr(m), Nt(ce.afterSanitizeShadowDOM, m, null);
  }, Ft = function(m) {
    const k = [{
      node: m,
      shadow: null
    }];
    for (; k.length > 0; ) {
      const D = k.pop();
      if (D.shadow) {
        An(D.shadow);
        continue;
      }
      const j = D.node, ee = F(j) === Yn.element, ne = X(j);
      if (ne) for (let ge = ne.length - 1; ge >= 0; --ge) k.push({
        node: ne[ge],
        shadow: null
      });
      if (ee) {
        const ge = le ? le(j) : null;
        if (typeof ge == "string" && He(ge) === "template") {
          const gt = j.content;
          Tt(gt) && k.push({
            node: gt,
            shadow: null
          });
        }
      }
      if (ee) {
        const ge = q(j);
        Tt(ge) && k.push({
          node: null,
          shadow: ge
        }, {
          node: ge,
          shadow: null
        });
      }
    }
  };
  return o.sanitize = function(h) {
    let m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, k = null, D = null, j = null, ee = null;
    if (il = !h, il && (h = "<!-->"), typeof h != "string" && !sl(h) && (h = OA(h), typeof h != "string"))
      throw Ko("dirty is not a string, aborting");
    if (!o.isSupported) return h;
    Rl ? (Ce = Dl, De = Ll) : Dn(m), (ce.uponSanitizeElement.length > 0 || ce.uponSanitizeAttribute.length > 0) && (Ce = Sr(Ce)), ce.uponSanitizeAttribute.length > 0 && (De = Sr(De)), o.removed = [];
    const ne = wa && typeof h != "string" && sl(h);
    let ge = [];
    const gt = nn;
    if (ne) {
      Ut(h);
      const ft = J(h);
      if (typeof ft == "string") {
        const ut = He(ft);
        if (!Ce[ut] || Fn[ut])
          throw jl(h), Ko("root node is forbidden and cannot be sanitized in-place");
      }
      if (ul(h))
        throw jl(h), Ko("root node is clobbered and cannot be sanitized in-place");
      ge = Vt(h), nn = yv();
    } else if (sl(h))
      k = ql("<!---->"), D = k.ownerDocument.importNode(h, !0), D.nodeType === Yn.element && D.nodeName === "BODY" || D.nodeName === "HTML" ? k = D : k.appendChild(D), Ft(k);
    else {
      if (!$e && !en && !Qn && h.indexOf("<") === -1) return ve && rt ? U(h) : h;
      if (k = ql(h), !k) return $e ? null : rt ? je : "";
    }
    k && Xn && Et(k.firstChild);
    const Le = ne ? h : k;
    try {
      ne && Ft(h);
      const ft = Bl(Le);
      for (; j = ft.nextNode(); )
        Gt(j, Le), Gl(j, Le), Tt(j.content) && An(j.content);
      ne && Nr(h, ge);
    } catch (ft) {
      throw ne && (jl(h), Or(h, ge)), ft;
    } finally {
      nn = gt;
    }
    if (ne) {
      if (Or(h, ge)) throw Ko("a node selected for removal could not be safely returned; refusing to sanitize in place");
      return en && Ln(h), h;
    }
    if ($e) {
      if (en && Ln(k), Bt)
        for (ee = se.call(k.ownerDocument); k.firstChild; ) ee.appendChild(k.firstChild);
      else ee = k;
      return (De.shadowroot || De.shadowrootmode) && (ee = be.call(f, ee, !0)), ee;
    }
    let Be = Qn ? k.outerHTML : k.innerHTML;
    return Qn && Ce["!doctype"] && k.ownerDocument && k.ownerDocument.doctype && k.ownerDocument.doctype.name && el(YA, k.ownerDocument.doctype.name) && (Be = "<!DOCTYPE " + k.ownerDocument.doctype.name + `>
` + Be), en && (Be = Ca(Be)), ve && rt ? U(Be) : Be;
  }, o.setConfig = function() {
    let h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Dn(h), Rl = !0, Dl = Ce, Ll = De;
  }, o.clearConfig = function() {
    rn = null, Rl = !1, Dl = null, Ll = null, ve = xe, je = "";
  }, o.isValidAttribute = function(h, m, k) {
    rn || Dn({});
    const D = He(h), j = He(m);
    return typeof k == "string" && (Vl(m, k) || !zl && el(e1, k)) ? !1 : Yl(D, j, k);
  }, o.addHook = function(h, m) {
    typeof m == "function" && El(ce, h) && Em(ce[h], m);
  }, o.removeHook = function(h, m) {
    if (El(ce, h)) {
      if (m !== void 0) {
        const k = TA(ce[h], m);
        return k === -1 ? void 0 : xA(ce[h], k, 1)[0];
      }
      return G0(ce[h]);
    }
  }, o.removeHooks = function(h) {
    El(ce, h) && (ce[h] = []);
  }, o.removeAllHooks = function() {
    ce = t1();
  }, o;
}
XS();
var Ev = { exports: {} }, _v, n1;
function PA() {
  if (n1) return _v;
  n1 = 1;
  var r = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return _v = r, _v;
}
var Cv, a1;
function $A() {
  if (a1) return Cv;
  a1 = 1;
  var r = /* @__PURE__ */ PA();
  function o() {
  }
  function s() {
  }
  return s.resetWarningCache = o, Cv = function() {
    function f(y, T, S, x, z, O) {
      if (O !== r) {
        var M = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw M.name = "Invariant Violation", M;
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
  }, Cv;
}
var l1;
function IA() {
  return l1 || (l1 = 1, Ev.exports = /* @__PURE__ */ $A()()), Ev.exports;
}
var KA = /* @__PURE__ */ IA();
const ha = /* @__PURE__ */ Ew(KA);
ha.shape({
  event: ha.string,
  action: ha.string,
  name: ha.string,
  region: ha.string,
  section: ha.string,
  component: ha.string,
  type: ha.string,
  text: ha.string
});
const Qm = ({ children: r }) => /* @__PURE__ */ On.jsx(On.Fragment, { children: r });
Qm.propTypes = {
  children: ha.oneOfType([
    ha.arrayOf(ha.node),
    ha.node,
    ha.string
  ])
};
var Ov = { exports: {} };
var r1;
function ZA() {
  return r1 || (r1 = 1, (function(r) {
    (function() {
      var o = {}.hasOwnProperty;
      function s() {
        for (var p = "", y = 0; y < arguments.length; y++) {
          var T = arguments[y];
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
        var y = "";
        for (var T in p)
          o.call(p, T) && p[T] && (y = c(y, T));
        return y;
      }
      function c(p, y) {
        return y ? p ? p + " " + y : p + y : p;
      }
      r.exports ? (s.default = s, r.exports = s) : window.classNames = s;
    })();
  })(Ov)), Ov.exports;
}
ZA();
({
  ...Qm.propTypes
});
const PS = ({ children: r, className: o = "container", ...s }) => /* @__PURE__ */ On.jsx("div", { className: o, ...s, children: /* @__PURE__ */ On.jsx("div", { className: "row", children: r }) });
PS.propTypes = {
  children: Qm.propTypes.children
};
({
  ...PS.propTypes
});
Qm.propTypes.children, ha.oneOf(["0", "3", "4", "6", "8", "9", "12"]);
Qm.propTypes.children;
function kb({
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
const Ym = {
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
}, i1 = ["newsUnits", "interests", "audiences", "eventTypes"], WA = (r, o = "") => {
  if (!o) return !0;
  const s = o.split(",");
  for (let f = 0; f < i1.length; f += 1) {
    const c = i1[f];
    for (let p = 0; p < s.length; p += 1) {
      const y = s[p], S = (r[c] || "").match(new RegExp(y, "gi"));
      if ((S == null ? void 0 : S.length) > 0) return !0;
    }
  }
  return !1;
}, o1 = (r, o) => {
  let s = r;
  return s.length > o && (s = s.substr(0, s.lastIndexOf(" ", o)), s += "..."), s;
}, JA = ({ node: r }, o) => ({
  index: o,
  id: r.nid,
  imageUrl: r.image_url,
  imageAltText: r.image_alt,
  title: o1(r.title, 80),
  content: o1(r == null ? void 0 : r.clas_teaser, 140),
  buttonLink: r.path,
  interests: r.interests,
  newsUnits: r.news_units,
  eventTypes: r.event_types,
  alias: r.path
  // Used for card link in title, matches component-events data transformer
}), _c = ({
  children: r,
  header: o,
  ctaButton: s,
  dataSource: f,
  maxItems: c
}) => {
  var T;
  const p = (T = f == null ? void 0 : f.filters) == null ? void 0 : T.replace(/_/g, " "), y = { ...f, filters: p };
  return /* @__PURE__ */ On.jsx(
    xS,
    {
      renderHeader: o && s ? /* @__PURE__ */ On.jsx(
        _S,
        {
          header: o,
          ctaButton: s,
          defaultProps: Ym
        }
      ) : null,
      renderBody: /* @__PURE__ */ On.jsx(CS, { children: r }),
      dataTransformer: JA,
      dataFilter: WA,
      dataSource: y,
      defaultProps: Ym,
      noFeedText: "No news to show.",
      maxItems: c
    }
  );
};
_c.propTypes = {
  header: Sb,
  ctaButton: wb,
  dataSource: ES,
  maxItems: ha.number,
  children: ha.element
};
function eE(r) {
  var o = /* @__PURE__ */ Object.create(null);
  return function(s) {
    return o[s] === void 0 && (o[s] = r(s)), o[s];
  };
}
var tE = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, nE = /* @__PURE__ */ eE(
  function(r) {
    return tE.test(r) || r.charCodeAt(0) === 111 && r.charCodeAt(1) === 110 && r.charCodeAt(2) < 91;
  }
  /* Z+1 */
), hn = "-ms-", Hm = "-moz-", At = "-webkit-", $S = "comm", jh = "rule", xb = "decl", aE = "@import", lE = "@namespace", IS = "@keyframes", rE = "@layer", KS = Math.abs, Ab = String.fromCharCode, lb = Object.assign;
function iE(r, o) {
  return ya(r, 0) ^ 45 ? (((o << 2 ^ ya(r, 0)) << 2 ^ ya(r, 1)) << 2 ^ ya(r, 2)) << 2 ^ ya(r, 3) : 0;
}
function ZS(r) {
  return r.trim();
}
function Wo(r, o) {
  return (r = o.exec(r)) ? r[0] : r;
}
function nt(r, o, s) {
  return r.replace(o, s);
}
function ph(r, o, s) {
  return r.indexOf(o, s);
}
function ya(r, o) {
  return r.charCodeAt(o) | 0;
}
function Tc(r, o, s) {
  return r.slice(o, s);
}
function vi(r) {
  return r.length;
}
function WS(r) {
  return r.length;
}
function Lm(r, o) {
  return o.push(r), r;
}
function oE(r, o) {
  return r.map(o).join("");
}
function u1(r, o) {
  return r.filter(function(s) {
    return !Wo(s, o);
  });
}
var Hh = 1, qc = 1, JS = 0, xr = 0, Gn = 0, Vc = "";
function qh(r, o, s, f, c, p, y, T) {
  return { value: r, root: o, parent: s, type: f, props: c, children: p, line: Hh, column: qc, length: y, return: "", siblings: T };
}
function iu(r, o) {
  return lb(qh("", null, null, "", null, null, 0, r.siblings), r, { length: -r.length }, o);
}
function Oc(r) {
  for (; r.root; )
    r = iu(r.root, { children: [r] });
  Lm(r, r.siblings);
}
function uE() {
  return Gn;
}
function sE() {
  return Gn = xr > 0 ? ya(Vc, --xr) : 0, qc--, Gn === 10 && (qc = 1, Hh--), Gn;
}
function Si() {
  return Gn = xr < JS ? ya(Vc, xr++) : 0, qc++, Gn === 10 && (qc = 1, Hh++), Gn;
}
function uu() {
  return ya(Vc, xr);
}
function mh() {
  return xr;
}
function Bh(r, o) {
  return Tc(Vc, r, o);
}
function Vm(r) {
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
function cE(r) {
  return Hh = qc = 1, JS = vi(Vc = r), xr = 0, [];
}
function fE(r) {
  return Vc = "", r;
}
function Nv(r) {
  return ZS(Bh(xr - 1, rb(r === 91 ? r + 2 : r === 40 ? r + 1 : r)));
}
function dE(r) {
  for (; (Gn = uu()) && Gn < 33; )
    Si();
  return Vm(r) > 2 || Vm(Gn) > 3 ? "" : " ";
}
function pE(r, o) {
  for (; --o && Si() && !(Gn < 48 || Gn > 102 || Gn > 57 && Gn < 65 || Gn > 70 && Gn < 97); )
    ;
  return Bh(r, mh() + (o < 6 && uu() == 32 && Si() == 32));
}
function rb(r) {
  for (; Si(); )
    switch (Gn) {
      // ] ) " '
      case r:
        return xr;
      // " '
      case 34:
      case 39:
        r !== 34 && r !== 39 && rb(Gn);
        break;
      // (
      case 40:
        r === 41 && rb(r);
        break;
      // \
      case 92:
        Si();
        break;
    }
  return xr;
}
function mE(r, o) {
  for (; Si() && r + Gn !== 57; )
    if (r + Gn === 84 && uu() === 47)
      break;
  return "/*" + Bh(o, xr - 1) + "*" + Ab(r === 47 ? r : Si());
}
function hE(r) {
  for (; !Vm(uu()); )
    Si();
  return Bh(r, xr);
}
function gE(r) {
  return fE(hh("", null, null, null, [""], r = cE(r), 0, [0], r));
}
function hh(r, o, s, f, c, p, y, T, S) {
  for (var x = 0, z = 0, O = y, M = 0, $ = 0, H = 0, V = 1, X = 1, I = 1, q = 0, fe = "", ae = c, le = p, K = f, F = fe; X; )
    switch (H = q, q = Si()) {
      // (
      case 40:
        if (H != 108 && ya(F, O - 1) == 58) {
          ph(F += nt(Nv(q), "&", "&\f"), "&\f", KS(x ? T[x - 1] : 0)) != -1 && (I = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        F += Nv(q);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        F += dE(H);
        break;
      // \
      case 92:
        F += pE(mh() - 1, 7);
        continue;
      // /
      case 47:
        switch (uu()) {
          case 42:
          case 47:
            Lm(yE(mE(Si(), mh()), o, s, S), S), (Vm(H || 1) == 5 || Vm(uu() || 1) == 5) && vi(F) && Tc(F, -1, void 0) !== " " && (F += " ");
            break;
          default:
            F += "/";
        }
        break;
      // {
      case 123 * V:
        T[x++] = vi(F) * I;
      // } ; \0
      case 125 * V:
      case 59:
      case 0:
        switch (q) {
          // \0 }
          case 0:
          case 125:
            X = 0;
          // ;
          case 59 + z:
            I == -1 && (F = nt(F, /\f/g, "")), $ > 0 && (vi(F) - O || V === 0 && H === 47) && Lm($ > 32 ? c1(F + ";", f, s, O - 1, S) : c1(nt(F, " ", "") + ";", f, s, O - 2, S), S);
            break;
          // @ ;
          case 59:
            F += ";";
          // { rule/at-rule
          default:
            if (Lm(K = s1(F, o, s, x, z, c, T, fe, ae = [], le = [], O, p), p), q === 123)
              if (z === 0)
                hh(F, o, K, K, ae, p, O, T, le);
              else {
                switch (M) {
                  // c(ontainer)
                  case 99:
                    if (ya(F, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if (ya(F, 2) === 97) break;
                  default:
                    z = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                z ? hh(r, K, K, f && Lm(s1(r, K, K, 0, 0, c, T, fe, c, ae = [], O, le), le), c, le, O, T, f ? ae : le) : hh(F, K, K, K, [""], le, 0, T, le);
              }
        }
        x = z = $ = 0, V = I = 1, fe = F = "", O = y;
        break;
      // :
      case 58:
        O = 1 + vi(F), $ = H;
      default:
        if (V < 1) {
          if (q == 123)
            --V;
          else if (q == 125 && V++ == 0 && sE() == 125)
            continue;
        }
        switch (F += Ab(q), q * V) {
          // &
          case 38:
            I = z > 0 ? 1 : (F += "\f", -1);
            break;
          // ,
          case 44:
            T[x++] = (vi(F) - 1) * I, I = 1;
            break;
          // @
          case 64:
            uu() === 45 && (F += Nv(Si())), M = uu(), z = O = vi(fe = F += hE(mh())), q++;
            break;
          // -
          case 45:
            H === 45 && vi(F) == 2 && (V = 0);
        }
    }
  return p;
}
function s1(r, o, s, f, c, p, y, T, S, x, z, O) {
  for (var M = c - 1, $ = c === 0 ? p : [""], H = WS($), V = 0, X = 0, I = 0; V < f; ++V)
    for (var q = 0, fe = Tc(r, M + 1, M = KS(X = y[V])), ae = r; q < H; ++q)
      (ae = ZS(X > 0 ? $[q] + " " + fe : nt(fe, /&\f/g, $[q]))) && (S[I++] = ae);
  return qh(r, o, s, c === 0 ? jh : T, S, x, z, O);
}
function yE(r, o, s, f) {
  return qh(r, o, s, $S, Ab(uE()), Tc(r, 2, -2), 0, f);
}
function c1(r, o, s, f, c) {
  return qh(r, o, s, xb, Tc(r, 0, f), Tc(r, f + 1, -1), f, c);
}
function ew(r, o, s) {
  switch (iE(r, o)) {
    // color-adjust
    case 5103:
      return At + "print-" + r + r;
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
      return At + r + r;
    // mask-composite
    case 4855:
      return At + r.replace("add", "source-over").replace("substract", "source-out").replace("intersect", "source-in").replace("exclude", "xor") + r;
    // tab-size
    case 4789:
      return Hm + r + r;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return At + r + Hm + r + hn + r + r;
    // writing-mode
    case 5936:
      switch (ya(r, o + 11)) {
        // vertical-l(r)
        case 114:
          return At + r + hn + nt(r, /[svh]\w+-[tblr]{2}/, "tb") + r;
        // vertical-r(l)
        case 108:
          return At + r + hn + nt(r, /[svh]\w+-[tblr]{2}/, "tb-rl") + r;
        // horizontal(-)tb
        case 45:
          return At + r + hn + nt(r, /[svh]\w+-[tblr]{2}/, "lr") + r;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return At + r + hn + r + r;
    // order
    case 6165:
      return At + r + hn + "flex-" + r + r;
    // align-items
    case 5187:
      return At + r + nt(r, /(\w+).+(:[^]+)/, At + "box-$1$2" + hn + "flex-$1$2") + r;
    // align-self
    case 5443:
      return At + r + hn + "flex-item-" + nt(r, /flex-|-self/g, "") + (Wo(r, /flex-|baseline/) ? "" : hn + "grid-row-" + nt(r, /flex-|-self/g, "")) + r;
    // align-content
    case 4675:
      return At + r + hn + "flex-line-pack" + nt(r, /align-content|flex-|-self/g, "") + r;
    // flex-shrink
    case 5548:
      return At + r + hn + nt(r, "shrink", "negative") + r;
    // flex-basis
    case 5292:
      return At + r + hn + nt(r, "basis", "preferred-size") + r;
    // flex-grow
    case 6060:
      return At + "box-" + nt(r, "-grow", "") + At + r + hn + nt(r, "grow", "positive") + r;
    // transition
    case 4554:
      return At + nt(r, /([^-])(transform)/g, "$1" + At + "$2") + r;
    // cursor
    case 6187:
      return nt(nt(nt(r, /(zoom-|grab)/, At + "$1"), /(image-set)/, At + "$1"), r, "") + r;
    // background, background-image
    case 5495:
    case 3959:
      return nt(r, /(image-set\([^]*)/, At + "$1$`$1");
    // justify-content
    case 4968:
      return nt(nt(r, /(.+:)(flex-)?(.*)/, At + "box-pack:$3" + hn + "flex-pack:$3"), /space-between/, "justify") + At + r + r;
    // justify-self
    case 4200:
      if (!Wo(r, /flex-|baseline/)) return hn + "grid-column-align" + Tc(r, o) + r;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return hn + nt(r, "template-", "") + r;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return s && s.some(function(f, c) {
        return o = c, Wo(f.props, /grid-\w+-end/);
      }) ? ~ph(r + (s = s[o].value), "span", 0) ? r : hn + nt(r, "-start", "") + r + hn + "grid-row-span:" + (~ph(s, "span", 0) ? Wo(s, /\d+/) : +Wo(s, /\d+/) - +Wo(r, /\d+/)) + ";" : hn + nt(r, "-start", "") + r;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return s && s.some(function(f) {
        return Wo(f.props, /grid-\w+-start/);
      }) ? r : hn + nt(nt(r, "-end", "-span"), "span ", "") + r;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return nt(r, /(.+)-inline(.+)/, At + "$1$2") + r;
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
      if (vi(r) - 1 - o > 6)
        switch (ya(r, o + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (ya(r, o + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return nt(r, /(.+:)(.+)-([^]+)/, "$1" + At + "$2-$3$1" + Hm + (ya(r, o + 3) == 108 ? "$3" : "$2-$3")) + r;
          // (s)tretch
          case 115:
            return ~ph(r, "stretch", 0) ? ew(nt(r, "stretch", "fill-available"), o, s) + r : r;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return nt(r, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(f, c, p, y, T, S, x) {
        return hn + c + ":" + p + x + (y ? hn + c + "-span:" + (T ? S : +S - +p) + x : "") + r;
      });
    // position: sticky
    case 4949:
      if (ya(r, o + 6) === 121)
        return nt(r, ":", ":" + At) + r;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (ya(r, ya(r, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return nt(r, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + At + (ya(r, 14) === 45 ? "inline-" : "") + "box$3$1" + At + "$2$3$1" + hn + "$2box$3") + r;
        // (inline-)?gri(d)
        case 100:
          return nt(r, ":", ":" + hn) + r;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return nt(r, "scroll-", "scroll-snap-") + r;
  }
  return r;
}
function xh(r, o) {
  for (var s = "", f = 0; f < r.length; f++)
    s += o(r[f], f, r, o) || "";
  return s;
}
function vE(r, o, s, f) {
  switch (r.type) {
    case rE:
      if (r.children.length) break;
    case aE:
    case lE:
    case xb:
      return r.return = r.return || r.value;
    case $S:
      return "";
    case IS:
      return r.return = r.value + "{" + xh(r.children, f) + "}";
    case jh:
      if (!vi(r.value = r.props.join(","))) return "";
  }
  return vi(s = xh(r.children, f)) ? r.return = r.value + "{" + s + "}" : "";
}
function bE(r) {
  var o = WS(r);
  return function(s, f, c, p) {
    for (var y = "", T = 0; T < o; T++)
      y += r[T](s, f, c, p) || "";
    return y;
  };
}
function SE(r) {
  return function(o) {
    o.root || (o = o.return) && r(o);
  };
}
function wE(r, o, s, f) {
  if (r.length > -1 && !r.return)
    switch (r.type) {
      case xb:
        r.return = ew(r.value, r.length, s);
        return;
      case IS:
        return xh([iu(r, { value: nt(r.value, "@", "@" + At) })], f);
      case jh:
        if (r.length)
          return oE(s = r.props, function(c) {
            switch (Wo(c, f = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                Oc(iu(r, { props: [nt(c, /:(read-\w+)/, ":" + Hm + "$1")] })), Oc(iu(r, { props: [c] })), lb(r, { props: u1(s, f) });
                break;
              // :placeholder
              case "::placeholder":
                Oc(iu(r, { props: [nt(c, /:(plac\w+)/, ":" + At + "input-$1")] })), Oc(iu(r, { props: [nt(c, /:(plac\w+)/, ":" + Hm + "$1")] })), Oc(iu(r, { props: [nt(c, /:(plac\w+)/, hn + "input-$1")] })), Oc(iu(r, { props: [c] })), lb(r, { props: u1(s, f) });
                break;
            }
            return "";
          });
    }
}
var Ht = { env: { NODE_ENV: "production" } }, zv, Rv;
const kc = typeof Ht < "u" && Ht.env !== void 0 && (Ht.env.REACT_APP_SC_ATTR || Ht.env.SC_ATTR) || "data-styled", tw = "active", nw = "data-styled-version", Yh = "6.4.2", Eb = `/*!sc*/
`, qm = typeof window < "u" && typeof document < "u";
function f1(r) {
  if (typeof Ht < "u" && Ht.env !== void 0) {
    const o = Ht.env[r];
    if (o !== void 0 && o !== "") return o !== "false";
  }
}
const TE = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : (Rv = (zv = f1("REACT_APP_SC_DISABLE_SPEEDY")) !== null && zv !== void 0 ? zv : f1("SC_DISABLE_SPEEDY")) !== null && Rv !== void 0 ? Rv : typeof Ht < "u" && Ht.env !== void 0 && Ht.env.NODE_ENV !== "production"), kE = "sc-keyframes-", xE = Ht.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function Xm(r, ...o) {
  return Ht.env.NODE_ENV === "production" ? new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${r} for more information.${o.length > 0 ? ` Args: ${o.join(", ")}` : ""}`) : new Error((function(...s) {
    let f = s[0];
    const c = [];
    for (let p = 1, y = s.length; p < y; p += 1) c.push(s[p]);
    return c.forEach((p) => {
      f = f.replace(/%[a-z]/, p);
    }), f;
  })(xE[r], ...o).trim());
}
const AE = 1 << 30;
let gh = /* @__PURE__ */ new Map(), Ah = /* @__PURE__ */ new Map(), yh = 1;
const th = (r) => {
  if (gh.has(r)) return gh.get(r);
  for (; Ah.has(yh); ) yh++;
  const o = yh++;
  if (Ht.env.NODE_ENV !== "production" && ((0 | o) < 0 || o > AE)) throw Xm(16, `${o}`);
  return gh.set(r, o), Ah.set(o, r), o;
}, EE = (r) => Ah.get(r), _E = (r, o) => {
  yh = o + 1, gh.set(r, o), Ah.set(o, r);
}, d1 = /invalid hook call/i, nh = /* @__PURE__ */ new Set(), CE = (r, o) => {
  if (Ht.env.NODE_ENV !== "production") {
    const s = `The component ${r}${o ? ` with the id of "${o}"` : ""} has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.
See https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method for more info.
`, f = console.error;
    try {
      let c = !0;
      console.error = (p, ...y) => {
        d1.test(p) ? (c = !1, nh.delete(s)) : f(p, ...y);
      }, typeof St.useState == "function" && St.useState(null), c && !nh.has(s) && (console.warn(s), nh.add(s));
    } catch (c) {
      d1.test(c.message) && nh.delete(s);
    } finally {
      console.error = f;
    }
  }
}, _b = Object.freeze([]), Bc = Object.freeze({});
function OE(r, o, s = Bc) {
  return r.theme !== s.theme && r.theme || o || s.theme;
}
const NE = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, zE = /(^-|-$)/g;
function aw(r) {
  return r.replace(NE, "-").replace(zE, "");
}
const RE = /(a)(d)/gi, p1 = (r) => String.fromCharCode(r + (r > 25 ? 39 : 97));
function lw(r) {
  let o, s = "";
  for (o = Math.abs(r); o > 52; o = o / 52 | 0) s = p1(o % 52) + s;
  return (p1(o % 52) + s).replace(RE, "$1-$2");
}
const ib = 5381, yc = (r, o) => {
  let s = o.length;
  for (; s; ) r = 33 * r ^ o.charCodeAt(--s);
  return r;
}, rw = (r) => yc(ib, r);
function DE(r) {
  return lw(rw(r) >>> 0);
}
function Cb(r) {
  return Ht.env.NODE_ENV !== "production" && typeof r == "string" && r || r.displayName || r.name || "Component";
}
function vh(r) {
  return typeof r == "string" && (Ht.env.NODE_ENV === "production" || r.charAt(0) === r.charAt(0).toLowerCase());
}
function LE(r) {
  return vh(r) ? `styled.${r}` : `Styled(${Cb(r)})`;
}
const iw = Symbol.for("react.memo"), ME = Symbol.for("react.forward_ref"), UE = { contextType: !0, defaultProps: !0, displayName: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, propTypes: !0, type: !0 }, jE = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, ow = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, HE = { [ME]: { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, [iw]: ow };
function m1(r) {
  return ("type" in (o = r) && o.type.$$typeof) === iw ? ow : "$$typeof" in r ? HE[r.$$typeof] : UE;
  var o;
}
const qE = Object.defineProperty, BE = Object.getOwnPropertyNames, YE = Object.getOwnPropertySymbols, VE = Object.getOwnPropertyDescriptor, GE = Object.getPrototypeOf, FE = Object.prototype;
function uw(r, o, s) {
  if (typeof o != "string") {
    const f = GE(o);
    f && f !== FE && uw(r, f, s);
    const c = BE(o).concat(YE(o)), p = m1(r), y = m1(o);
    for (let T = 0; T < c.length; ++T) {
      const S = c[T];
      if (!(S in jE || s && s[S] || y && S in y || p && S in p)) {
        const x = VE(o, S);
        try {
          qE(r, S, x);
        } catch {
        }
      }
    }
  }
  return r;
}
function Vh(r) {
  return typeof r == "function";
}
const QE = Symbol.for("react.forward_ref");
function sw(r) {
  return r != null && (typeof r == "object" || typeof r == "function") && r.$$typeof === QE && "styledComponentId" in r;
}
function Mm(r, o) {
  return r && o ? r + " " + o : r || o || "";
}
function h1(r, o) {
  return r.join("");
}
function xc(r) {
  return r !== null && typeof r == "object" && r.constructor.name === Object.name && !("props" in r && r.$$typeof);
}
function ob(r, o, s = !1) {
  if (!s && !xc(r) && !Array.isArray(r)) return o;
  if (Array.isArray(o)) for (let f = 0; f < o.length; f++) r[f] = ob(r[f], o[f]);
  else if (xc(o)) for (const f in o) r[f] = ob(r[f], o[f]);
  return r;
}
function cw(r, o) {
  Object.defineProperty(r, "toString", { value: o });
}
const XE = class {
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
      let y = p;
      for (; r >= y; ) if (y <<= 1, y < 0) throw Xm(16, `${r}`);
      this.groupSizes = new Uint32Array(y), this.groupSizes.set(c), this.length = y;
      for (let T = p; T < y; T++) this.groupSizes[T] = 0;
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
    for (let p = f; p < c; p++) o += this.tag.getRule(p) + Eb;
    return o;
  }
}, PE = `style[${kc}][${nw}="${Yh}"]`, $E = new RegExp(`^${kc}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`), g1 = (r) => typeof ShadowRoot < "u" && r instanceof ShadowRoot || "host" in r && r.nodeType === 11, ub = (r) => {
  if (!r) return document;
  if (g1(r)) return r;
  if ("getRootNode" in r) {
    const o = r.getRootNode();
    if (g1(o)) return o;
  }
  return document;
}, IE = (r, o, s) => {
  const f = s.split(",");
  let c;
  for (let p = 0, y = f.length; p < y; p++) (c = f[p]) && r.registerName(o, c);
}, KE = (r, o) => {
  var s;
  const f = ((s = o.textContent) !== null && s !== void 0 ? s : "").split(Eb), c = [];
  for (let p = 0, y = f.length; p < y; p++) {
    const T = f[p].trim();
    if (!T) continue;
    const S = T.match($E);
    if (S) {
      const x = 0 | parseInt(S[1], 10), z = S[2];
      x !== 0 && (_E(z, x), IE(r, z, S[3]), r.getTag().insertRules(x, c)), c.length = 0;
    } else c.push(T);
  }
}, Dv = (r) => {
  const o = ub(r.options.target).querySelectorAll(PE);
  for (let s = 0, f = o.length; s < f; s++) {
    const c = o[s];
    c && c.getAttribute(kc) !== tw && (KE(r, c), c.parentNode && c.parentNode.removeChild(c));
  }
};
let Nm = !1;
function ZE() {
  if (Nm !== !1) return Nm;
  if (typeof document < "u") {
    const r = document.head.querySelector('meta[property="csp-nonce"]');
    if (r) return Nm = r.nonce || r.getAttribute("content") || void 0;
    const o = document.head.querySelector('meta[name="sc-nonce"]');
    if (o) return Nm = o.getAttribute("content") || void 0;
  }
  return Nm = typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : void 0;
}
const fw = (r, o) => {
  const s = document.head, f = r || s, c = document.createElement("style"), p = ((S) => {
    const x = Array.from(S.querySelectorAll(`style[${kc}]`));
    return x[x.length - 1];
  })(f), y = p !== void 0 ? p.nextSibling : null;
  c.setAttribute(kc, tw), c.setAttribute(nw, Yh);
  const T = o || ZE();
  return T && c.setAttribute("nonce", T), f.insertBefore(c, y), c;
}, WE = class {
  constructor(r, o) {
    this.element = fw(r, o), this.element.appendChild(document.createTextNode("")), this.sheet = ((s) => {
      var f;
      if (s.sheet) return s.sheet;
      const c = (f = s.getRootNode().styleSheets) !== null && f !== void 0 ? f : document.styleSheets;
      for (let p = 0, y = c.length; p < y; p++) {
        const T = c[p];
        if (T.ownerNode === s) return T;
      }
      throw Xm(17);
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
}, JE = class {
  constructor(r, o) {
    this.element = fw(r, o), this.nodes = this.element.childNodes, this.length = 0;
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
let y1 = qm;
const e_ = { isServer: !qm, useCSSOMInjection: !TE };
class Gh {
  static registerId(o) {
    return th(o);
  }
  constructor(o = Bc, s = {}, f) {
    this.options = Object.assign(Object.assign({}, e_), o), this.gs = s, this.keyframeIds = /* @__PURE__ */ new Set(), this.names = new Map(f), this.server = !!o.isServer, !this.server && qm && y1 && (y1 = !1, Dv(this)), cw(this, () => ((c) => {
      const p = c.getTag(), { length: y } = p;
      let T = "";
      for (let S = 0; S < y; S++) {
        const x = EE(S);
        if (x === void 0) continue;
        const z = c.names.get(x);
        if (z === void 0 || !z.size) continue;
        const O = p.getGroup(S);
        if (O.length === 0) continue;
        const M = kc + ".g" + S + '[id="' + x + '"]';
        let $ = "";
        for (const H of z) H.length > 0 && ($ += H + ",");
        T += O + M + '{content:"' + $ + '"}' + Eb;
      }
      return T;
    })(this));
  }
  rehydrate() {
    !this.server && qm && Dv(this);
  }
  reconstructWithOptions(o, s = !0) {
    const f = new Gh(Object.assign(Object.assign({}, this.options), o), this.gs, s && this.names || void 0);
    return f.keyframeIds = new Set(this.keyframeIds), !this.server && qm && o.target !== this.options.target && ub(this.options.target) !== ub(o.target) && Dv(f), f;
  }
  allocateGSInstance(o) {
    return this.gs[o] = (this.gs[o] || 0) + 1;
  }
  getTag() {
    return this.tag || (this.tag = (o = (({ useCSSOMInjection: s, target: f, nonce: c }) => s ? new WE(f, c) : new JE(f, c))(this.options), new XE(o)));
    var o;
  }
  hasNameForId(o, s) {
    var f, c;
    return (c = (f = this.names.get(o)) === null || f === void 0 ? void 0 : f.has(s)) !== null && c !== void 0 && c;
  }
  registerName(o, s) {
    th(o), o.startsWith(kE) && this.keyframeIds.add(o);
    const f = this.names.get(o);
    f ? f.add(s) : this.names.set(o, /* @__PURE__ */ new Set([s]));
  }
  insertRules(o, s, f) {
    this.registerName(o, s), this.getTag().insertRules(th(o), f);
  }
  clearNames(o) {
    this.names.has(o) && this.names.get(o).clear();
  }
  clearRules(o) {
    this.getTag().clearGroup(th(o)), this.clearNames(o);
  }
  clearTag() {
    this.tag = void 0;
  }
}
const dw = /* @__PURE__ */ new WeakSet(), t_ = { animationIterationCount: 1, aspectRatio: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexShrink: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, scale: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 };
function n_(r, o) {
  return o == null || typeof o == "boolean" || o === "" ? "" : typeof o != "number" || o === 0 || r in t_ || r.startsWith("--") ? String(o).trim() : o + "px";
}
const mc = 47;
function v1(r) {
  if (r.charCodeAt(0) === 45 && r.charCodeAt(1) === 45) return r;
  let o = "";
  for (let s = 0; s < r.length; s++) {
    const f = r.charCodeAt(s);
    o += f >= 65 && f <= 90 ? "-" + String.fromCharCode(f + 32) : r[s];
  }
  return o.startsWith("ms-") ? "-" + o : o;
}
const a_ = Symbol.for("sc-keyframes");
function sb(r) {
  return typeof r == "object" && r !== null && a_ in r;
}
function pw(r) {
  return Vh(r) && !(r.prototype && r.prototype.isReactComponent);
}
const mw = (r) => r == null || r === !1 || r === "", l_ = Symbol.for("react.client.reference");
function b1(r) {
  return r.$$typeof === l_;
}
function S1(r) {
  const o = r.$$id, s = (o && o.includes("#") ? o.split("#").pop() : o) || r.name || "unknown";
  console.warn(`Interpolating a client component (${s}) as a selector is not supported in server components. The component selector pattern requires access to the component's internal class name, which is not available across the server/client boundary. Use a plain CSS class selector instead.`);
}
function hw(r, o) {
  for (const s in r) {
    const f = r[s];
    r.hasOwnProperty(s) && !mw(f) && (Array.isArray(f) && dw.has(f) || Vh(f) ? o.push(v1(s) + ":", f, ";") : xc(f) ? (o.push(s + " {"), hw(f, o), o.push("}")) : o.push(v1(s) + ": " + n_(s, f) + ";"));
  }
}
function vc(r, o, s, f, c = []) {
  if (mw(r)) return c;
  const p = typeof r;
  if (p === "string") return c.push(r), c;
  if (p === "function") {
    if (b1(r)) return Ht.env.NODE_ENV !== "production" && S1(r), c;
    if (pw(r) && o) {
      const y = r(o);
      return Ht.env.NODE_ENV === "production" || typeof y != "object" || Array.isArray(y) || sb(y) || xc(y) || y === null || console.error(`${Cb(r)} is not a styled component and cannot be referred to via component selector. See https://styled-components.com/docs/advanced#referring-to-other-components for more details.`), vc(y, o, s, f, c);
    }
    return c.push(r), c;
  }
  if (Array.isArray(r)) {
    for (let y = 0; y < r.length; y++) vc(r[y], o, s, f, c);
    return c;
  }
  return sw(r) ? (c.push(`.${r.styledComponentId}`), c) : sb(r) ? (s ? (r.inject(s, f), c.push(r.getName(f))) : c.push(r), c) : b1(r) ? (Ht.env.NODE_ENV !== "production" && S1(r), c) : xc(r) ? r.toString !== Object.prototype.toString ? (c.push(r.toString()), c) : (hw(r, c), c) : (c.push(r.toString()), c);
}
const r_ = rw(Yh);
class i_ {
  constructor(o, s, f) {
    this.rules = o, this.componentId = s, this.baseHash = yc(r_, s), this.baseStyle = f, Gh.registerId(s);
  }
  generateAndInjectStyles(o, s, f) {
    let c = this.baseStyle ? this.baseStyle.generateAndInjectStyles(o, s, f) : "";
    {
      let p = "";
      for (let y = 0; y < this.rules.length; y++) {
        const T = this.rules[y];
        if (typeof T == "string") p += T;
        else if (T) if (pw(T)) {
          const S = T(o);
          typeof S == "string" ? p += S : S != null && S !== !1 && (Ht.env.NODE_ENV === "production" || typeof S != "object" || Array.isArray(S) || sb(S) || xc(S) || console.error(`${Cb(T)} is not a styled component and cannot be referred to via component selector. See https://styled-components.com/docs/advanced#referring-to-other-components for more details.`), p += h1(vc(S, o, s, f)));
        } else p += h1(vc(T, o, s, f));
      }
      if (p) {
        this.dynamicNameCache || (this.dynamicNameCache = /* @__PURE__ */ new Map());
        const y = f.hash ? f.hash + p : p;
        let T = this.dynamicNameCache.get(y);
        if (!T) {
          if (T = lw(yc(yc(this.baseHash, f.hash), p) >>> 0), this.dynamicNameCache.size >= 200) {
            const S = this.dynamicNameCache.keys().next().value;
            S !== void 0 && this.dynamicNameCache.delete(S);
          }
          this.dynamicNameCache.set(y, T);
        }
        if (!s.hasNameForId(this.componentId, T)) {
          const S = f(p, "." + T, void 0, this.componentId);
          s.insertRules(this.componentId, T, S);
        }
        c = Mm(c, T);
      }
    }
    return c;
  }
}
const o_ = /&/g;
function gw(r, o) {
  let s = 0;
  for (; --o >= 0 && r.charCodeAt(o) === 92; ) s++;
  return !(1 & ~s);
}
function Lv(r) {
  const o = r.length;
  let s = "", f = 0, c = 0, p = 0, y = !1, T = !1;
  for (let S = 0; S < o; S++) {
    const x = r.charCodeAt(S);
    if (p !== 0 || y || x !== mc || r.charCodeAt(S + 1) !== 42) if (y) x === 42 && r.charCodeAt(S + 1) === mc && (y = !1, S++);
    else if (x !== 34 && x !== 39 || gw(r, S)) {
      if (p === 0) if (x === 123) c++;
      else if (x === 125) {
        if (c--, c < 0) {
          T = !0;
          let z = S + 1;
          for (; z < o; ) {
            const O = r.charCodeAt(z);
            if (O === 59 || O === 10) break;
            z++;
          }
          z < o && r.charCodeAt(z) === 59 && z++, c = 0, S = z - 1, f = z;
          continue;
        }
        c === 0 && (s += r.substring(f, S + 1), f = S + 1);
      } else x === 59 && c === 0 && (s += r.substring(f, S + 1), f = S + 1);
    } else p === 0 ? p = x : p === x && (p = 0);
    else y = !0, S++;
  }
  return T || c !== 0 || p !== 0 ? (f < o && c === 0 && p === 0 && (s += r.substring(f)), s) : r;
}
function yw(r, o) {
  const s = o + " ", f = "," + s;
  for (let c = 0; c < r.length; c++) {
    const p = r[c];
    if (p.type === "rule") {
      p.value = (s + p.value).replaceAll(",", f);
      const y = p.props, T = [];
      for (let S = 0; S < y.length; S++) T[S] = s + y[S];
      p.props = T;
    }
    Array.isArray(p.children) && p.type !== "@keyframes" && yw(p.children, o);
  }
  return r;
}
function u_({ options: r = Bc, plugins: o = _b } = Bc) {
  let s, f, c;
  const p = (M, $, H) => H.startsWith(f) && H.endsWith(f) && H.replaceAll(f, "").length > 0 ? `.${s}` : M, y = o.slice();
  y.push((M) => {
    M.type === jh && M.value.includes("&") && (c || (c = new RegExp(`\\${f}\\b`, "g")), M.props[0] = M.props[0].replace(o_, f).replace(c, p));
  }), r.prefix && y.push(wE), y.push(vE);
  let T = [];
  const S = bE(y.concat(SE((M) => T.push(M)))), x = (M, $ = "", H = "", V = "&") => {
    s = V, f = $, c = void 0;
    const X = (function(q) {
      const fe = q.indexOf("//") !== -1, ae = q.indexOf("}") !== -1;
      if (!fe && !ae) return q;
      if (!fe) return Lv(q);
      const le = q.length;
      let K = "", F = 0, J = 0, Ae = 0, Qe = 0, ve = 0, je = !1;
      for (; J < le; ) {
        const xe = q.charCodeAt(J);
        if (xe !== 34 && xe !== 39 || gw(q, J)) if (Ae === 0) if (xe === mc && J + 1 < le && q.charCodeAt(J + 1) === 42) {
          for (J += 2; J + 1 < le && (q.charCodeAt(J) !== 42 || q.charCodeAt(J + 1) !== mc); ) J++;
          J += 2;
        } else if (xe !== 40) if (xe !== 41) if (Qe > 0) J++;
        else if (xe === 42 && J + 1 < le && q.charCodeAt(J + 1) === mc) K += q.substring(F, J), J += 2, F = J, je = !0;
        else if (xe === mc && J + 1 < le && q.charCodeAt(J + 1) === mc) {
          for (K += q.substring(F, J); J < le && q.charCodeAt(J) !== 10; ) J++;
          F = J, je = !0;
        } else xe === 123 ? ve++ : xe === 125 && ve--, J++;
        else Qe > 0 && Qe--, J++;
        else Qe++, J++;
        else J++;
        else Ae === 0 ? Ae = xe : Ae === xe && (Ae = 0), J++;
      }
      return je ? (F < le && (K += q.substring(F)), ve === 0 ? K : Lv(K)) : ve === 0 ? q : Lv(q);
    })(M);
    let I = gE(H || $ ? H + " " + $ + " { " + X + " }" : X);
    return r.namespace && (I = yw(I, r.namespace)), T = [], xh(I, S), T;
  }, z = r;
  let O = ib;
  for (let M = 0; M < o.length; M++) o[M].name || Xm(15), O = yc(O, o[M].name);
  return z != null && z.namespace && (O = yc(O, z.namespace)), z != null && z.prefix && (O = yc(O, "p")), x.hash = O !== ib ? O.toString() : "", x;
}
const s_ = new Gh(), c_ = u_(), vw = St.createContext({ shouldForwardProp: void 0, styleSheet: s_, stylis: c_, stylisPlugins: void 0 });
vw.Consumer;
function f_() {
  return St.useContext(vw);
}
const bw = St.createContext(void 0);
bw.Consumer;
const w1 = Object.prototype.hasOwnProperty, Mv = {};
function d_(r, o) {
  const s = typeof r != "string" ? "sc" : aw(r);
  Mv[s] = (Mv[s] || 0) + 1;
  const f = s + "-" + DE(Yh + s + Mv[s]);
  return o ? o + "-" + f : f;
}
let Uv;
function p_(r, o, s) {
  const f = sw(r), c = r, p = !vh(r), { attrs: y = _b, componentId: T = d_(o.displayName, o.parentComponentId), displayName: S = LE(r) } = o, x = o.displayName && o.componentId ? aw(o.displayName) + "-" + o.componentId : o.componentId || T, z = f && c.attrs ? c.attrs.concat(y).filter(Boolean) : y;
  let { shouldForwardProp: O } = o;
  if (f && c.shouldForwardProp) {
    const V = c.shouldForwardProp;
    if (o.shouldForwardProp) {
      const X = o.shouldForwardProp;
      O = (I, q) => V(I, q) && X(I, q);
    } else O = V;
  }
  const M = new i_(s, x, f ? c.componentStyle : void 0);
  function $(V, X) {
    return (function(I, q, fe) {
      const { attrs: ae, componentStyle: le, defaultProps: K, foldedComponentIds: F, styledComponentId: J, target: Ae } = I, Qe = St.useContext(bw), ve = f_(), je = I.shouldForwardProp || ve.shouldForwardProp;
      Ht.env.NODE_ENV !== "production" && St.useDebugValue && St.useDebugValue(J);
      const xe = OE(q, Qe, K) || Bc;
      let yt, Fe;
      {
        const ue = St.useRef(null), ie = ue.current;
        if (ie !== null && ie[1] === xe && ie[2] === ve.styleSheet && ie[3] === ve.stylis && ie[7] === le && (function(Ye, Se, se) {
          const Z = Ye, be = Se;
          let ce = 0;
          for (const lt in be) if (w1.call(be, lt) && (ce++, Z[lt] !== be[lt])) return !1;
          return ce === se;
        })(ie[0], q, ie[4])) yt = ie[5], Fe = ie[6];
        else {
          yt = (function(Se, se, Z) {
            const be = Object.assign(Object.assign({}, se), { className: void 0, theme: Z }), ce = Se.length > 1;
            for (let lt = 0; lt < Se.length; lt++) {
              const Nn = Se[lt], kn = Vh(Nn) ? Nn(ce ? Object.assign({}, be) : be) : Nn;
              for (const st in kn) st === "className" ? be.className = Mm(be.className, kn[st]) : st === "style" ? be.style = Object.assign(Object.assign({}, be.style), kn[st]) : st in se && se[st] === void 0 || (be[st] = kn[st]);
            }
            return "className" in se && typeof se.className == "string" && (be.className = Mm(be.className, se.className)), be;
          })(ae, q, xe), Fe = (function(Se, se, Z, be) {
            const ce = Se.generateAndInjectStyles(se, Z, be);
            return Ht.env.NODE_ENV !== "production" && St.useDebugValue && St.useDebugValue(ce), ce;
          })(le, yt, ve.styleSheet, ve.stylis);
          let Ye = 0;
          for (const Se in q) w1.call(q, Se) && Ye++;
          ue.current = [q, xe, ve.styleSheet, ve.stylis, Ye, yt, Fe, le];
        }
      }
      Ht.env.NODE_ENV !== "production" && I.warnTooManyClasses && I.warnTooManyClasses(Fe);
      const B = yt.as || Ae, U = (function(ue, ie, Ye, Se) {
        const se = {};
        for (const Z in ue) ue[Z] === void 0 || Z[0] === "$" || Z === "as" || Z === "theme" && ue.theme === Ye || (Z === "forwardedAs" ? se.as = ue.forwardedAs : Se && !Se(Z, ie) || (se[Z] = ue[Z], Se || Ht.env.NODE_ENV !== "development" || nE(Z) || (Uv || (Uv = /* @__PURE__ */ new Set())).has(Z) || !vh(ie) || ie.includes("-") || (Uv.add(Z), console.warn(`styled-components: it looks like an unknown prop "${Z}" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via \`<StyleSheetManager shouldForwardProp={...}>\` (connect an API like \`@emotion/is-prop-valid\`) or consider using transient props (\`$\` prefix for automatic filtering.)`))));
        return se;
      })(yt, B, xe, je);
      let G = Mm(F, J);
      return Fe && (G += " " + Fe), yt.className && (G += " " + yt.className), U[vh(B) && B.includes("-") ? "class" : "className"] = G, fe && (U.ref = fe), z1(B, U);
    })(H, V, X);
  }
  $.displayName = S;
  let H = St.forwardRef($);
  return H.attrs = z, H.componentStyle = M, H.displayName = S, H.shouldForwardProp = O, H.foldedComponentIds = f ? Mm(c.foldedComponentIds, c.styledComponentId) : "", H.styledComponentId = x, H.target = f ? c.target : r, Object.defineProperty(H, "defaultProps", { get() {
    return this._foldedDefaultProps;
  }, set(V) {
    this._foldedDefaultProps = f ? (function(X, ...I) {
      for (const q of I) ob(X, q, !0);
      return X;
    })({}, c.defaultProps, V) : V;
  } }), Ht.env.NODE_ENV !== "production" && (CE(S, x), H.warnTooManyClasses = /* @__PURE__ */ ((V, X) => {
    let I = {}, q = !1;
    return (fe) => {
      !q && (I[fe] = !0, Object.keys(I).length >= 200) && (console.warn(`Over 200 classes were generated for component ${V}${X ? ` with the id of "${X}"` : ""}.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), q = !0, I = {});
    };
  })(S, x)), cw(H, () => `.${H.styledComponentId}`), p && uw(H, r, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), H;
}
var m_ = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "blockquote", "body", "button", "br", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "menu", "meter", "nav", "object", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "slot", "small", "span", "strong", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "switch", "symbol", "text", "textPath", "tspan", "use"]);
function T1(r, o) {
  const s = [r[0]];
  for (let f = 0, c = o.length; f < c; f += 1) s.push(o[f], r[f + 1]);
  return s;
}
const k1 = (r) => (dw.add(r), r);
function h_(r, ...o) {
  if (Vh(r) || xc(r)) return k1(vc(T1(_b, [r, ...o])));
  const s = r;
  return o.length === 0 && s.length === 1 && typeof s[0] == "string" ? vc(s) : k1(vc(T1(s, o)));
}
function cb(r, o, s = Bc) {
  if (!o) throw Xm(1, o);
  const f = (c, ...p) => r(o, s, h_(c, ...p));
  return f.attrs = (c) => cb(r, o, Object.assign(Object.assign({}, s), { attrs: Array.prototype.concat(s.attrs, c).filter(Boolean) })), f.withConfig = (c) => cb(r, o, Object.assign(Object.assign({}, s), c)), f;
}
const Sw = (r) => cb(p_, r), Fh = Sw;
m_.forEach((r) => {
  Fh[r] = Sw(r);
});
Ht.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://styled-components.com/docs/basics#react-native`);
const ah = `__sc-${kc}__`;
Ht.env.NODE_ENV !== "production" && Ht.env.NODE_ENV !== "test" && typeof window < "u" && (window[ah] || (window[ah] = 0), window[ah] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://styled-components.com/docs/faqs#why-am-i-getting-a-warning-about-several-instances-of-module-on-the-page for more info.`), window[ah] += 1);
const g_ = Fh.section``, y_ = (r, o, s) => ({
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
}), v_ = ({ cardButton: r }) => {
  const { feeds: o } = fb(Dh), s = o == null ? void 0 : o.map(
    (f, c) => y_(f, c, r)
  );
  return /* @__PURE__ */ On.jsx(g_, { children: /* @__PURE__ */ On.jsx(
    BS,
    {
      width: "auto",
      cardType: "news",
      perView: "3",
      cardItems: s || []
    }
  ) });
}, ww = ({ cardButton: r, ...o }) => (wi(() => {
  typeof window < "u" && kb({
    packageName: "component-news",
    component: "CardCarouselNews",
    type: "NA",
    configuration: {
      cardButton: r,
      props: o
    }
  });
}, []), // Calling the high order component that fetches the data
/* @__PURE__ */ On.jsx(_c, { ...o, children: /* @__PURE__ */ On.jsx(
  v_,
  {
    cardButton: { ...Ym.cardButton, ...r }
  }
) }));
ww.propTypes = _c.propTypes;
const Tw = (r = "") => (r == null ? void 0 : r.length) === 0 ? [] : r.split("|").map((s) => ({
  label: s
})).filter((s) => s), b_ = Fh.section`
  .c-card {
    height: 100%;
  }
`, S_ = (r, o, s) => /* @__PURE__ */ On.jsx(
  "div",
  {
    className: "col col-12 col-md-6 col-lg-4 cards-items-container",
    children: /* @__PURE__ */ On.jsx(
      Jo,
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
        tags: s ? [] : Tw(r == null ? void 0 : r.interests),
        cardLink: r.eventButtonUrl || (r == null ? void 0 : r.buttonLink)
      }
    )
  },
  r.id
), w_ = ({ cardButton: r, hideTags: o }) => {
  const { feeds: s } = fb(Dh), f = o === !0 || o === "true";
  return /* @__PURE__ */ On.jsx(b_, { className: "row row-spaced", "data-testid": "grid-view-container", children: s == null ? void 0 : s.map((c, p) => /* @__PURE__ */ On.jsx(St.Fragment, { children: S_(c, r, f) }, p)) });
}, kw = ({ cardButton: r, hideTags: o = !0, ...s }) => (wi(() => {
  typeof window < "u" && kb({
    packageName: "component-news",
    component: "CardGridNews",
    type: "NA",
    configuration: {
      cardButton: r,
      ...s
    }
  });
}, []), // Calling the high order component that fetch the data
/* @__PURE__ */ On.jsx(_c, { ...s, children: /* @__PURE__ */ On.jsx(
  w_,
  {
    cardButton: { ...Ym.cardButton, ...r },
    hideTags: o
  }
) }));
kw.propTypes = {
  ..._c.propTypes,
  cardButton: AS,
  hideTags: ha.oneOf(["true", "false", !0, !1])
};
const T_ = Fh.section``, k_ = (r, o, s) => /* @__PURE__ */ On.jsx("div", { className: "card card-hover cards-items-container", children: /* @__PURE__ */ On.jsx(
  Jo,
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
    tags: s ? [] : Tw(r == null ? void 0 : r.interests),
    cardLink: r.eventButtonUrl || (r == null ? void 0 : r.buttonLink)
  }
) }, r.id), x_ = ({ cardButton: r, hideTags: o }) => {
  const { feeds: s } = fb(Dh), f = o === !0 || o === "true";
  return /* @__PURE__ */ On.jsx(T_, { className: "row-spaced", "data-testid": "list-view-container", children: s == null ? void 0 : s.map((c, p) => /* @__PURE__ */ On.jsx(St.Fragment, { children: k_(c, r, f) }, p)) });
}, xw = ({ cardButton: r, hideTags: o = !0, ...s }) => (wi(() => {
  typeof window < "u" && kb({
    packageName: "component-news",
    component: "CardListlNews",
    type: "NA",
    configuration: {
      cardButton: r,
      ...s
    }
  });
}, []), // Calling the high order component that fetch the data
/* @__PURE__ */ On.jsx(_c, { ...s, children: /* @__PURE__ */ On.jsx(
  x_,
  {
    cardButton: { ...Ym.cardButton, ...r },
    hideTags: o
  }
) }));
xw.propTypes = {
  ..._c.propTypes,
  feedCardButtonShape: AS,
  hideTags: ha.oneOf(["true", "false", !0, !1])
};
var jv = { exports: {} }, zm = {}, Hv = { exports: {} }, qv = {};
var x1;
function A_() {
  return x1 || (x1 = 1, (function(r) {
    function o(B, U) {
      var G = B.length;
      B.push(U);
      e: for (; 0 < G; ) {
        var ue = G - 1 >>> 1, ie = B[ue];
        if (0 < c(ie, U))
          B[ue] = U, B[G] = ie, G = ue;
        else break e;
      }
    }
    function s(B) {
      return B.length === 0 ? null : B[0];
    }
    function f(B) {
      if (B.length === 0) return null;
      var U = B[0], G = B.pop();
      if (G !== U) {
        B[0] = G;
        e: for (var ue = 0, ie = B.length, Ye = ie >>> 1; ue < Ye; ) {
          var Se = 2 * (ue + 1) - 1, se = B[Se], Z = Se + 1, be = B[Z];
          if (0 > c(se, G))
            Z < ie && 0 > c(be, se) ? (B[ue] = be, B[Z] = G, ue = Z) : (B[ue] = se, B[Se] = G, ue = Se);
          else if (Z < ie && 0 > c(be, G))
            B[ue] = be, B[Z] = G, ue = Z;
          else break e;
        }
      }
      return U;
    }
    function c(B, U) {
      var G = B.sortIndex - U.sortIndex;
      return G !== 0 ? G : B.id - U.id;
    }
    if (r.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var p = performance;
      r.unstable_now = function() {
        return p.now();
      };
    } else {
      var y = Date, T = y.now();
      r.unstable_now = function() {
        return y.now() - T;
      };
    }
    var S = [], x = [], z = 1, O = null, M = 3, $ = !1, H = !1, V = !1, X = !1, I = typeof setTimeout == "function" ? setTimeout : null, q = typeof clearTimeout == "function" ? clearTimeout : null, fe = typeof setImmediate < "u" ? setImmediate : null;
    function ae(B) {
      for (var U = s(x); U !== null; ) {
        if (U.callback === null) f(x);
        else if (U.startTime <= B)
          f(x), U.sortIndex = U.expirationTime, o(S, U);
        else break;
        U = s(x);
      }
    }
    function le(B) {
      if (V = !1, ae(B), !H)
        if (s(S) !== null)
          H = !0, K || (K = !0, je());
        else {
          var U = s(x);
          U !== null && Fe(le, U.startTime - B);
        }
    }
    var K = !1, F = -1, J = 5, Ae = -1;
    function Qe() {
      return X ? !0 : !(r.unstable_now() - Ae < J);
    }
    function ve() {
      if (X = !1, K) {
        var B = r.unstable_now();
        Ae = B;
        var U = !0;
        try {
          e: {
            H = !1, V && (V = !1, q(F), F = -1), $ = !0;
            var G = M;
            try {
              t: {
                for (ae(B), O = s(S); O !== null && !(O.expirationTime > B && Qe()); ) {
                  var ue = O.callback;
                  if (typeof ue == "function") {
                    O.callback = null, M = O.priorityLevel;
                    var ie = ue(
                      O.expirationTime <= B
                    );
                    if (B = r.unstable_now(), typeof ie == "function") {
                      O.callback = ie, ae(B), U = !0;
                      break t;
                    }
                    O === s(S) && f(S), ae(B);
                  } else f(S);
                  O = s(S);
                }
                if (O !== null) U = !0;
                else {
                  var Ye = s(x);
                  Ye !== null && Fe(
                    le,
                    Ye.startTime - B
                  ), U = !1;
                }
              }
              break e;
            } finally {
              O = null, M = G, $ = !1;
            }
            U = void 0;
          }
        } finally {
          U ? je() : K = !1;
        }
      }
    }
    var je;
    if (typeof fe == "function")
      je = function() {
        fe(ve);
      };
    else if (typeof MessageChannel < "u") {
      var xe = new MessageChannel(), yt = xe.port2;
      xe.port1.onmessage = ve, je = function() {
        yt.postMessage(null);
      };
    } else
      je = function() {
        I(ve, 0);
      };
    function Fe(B, U) {
      F = I(function() {
        B(r.unstable_now());
      }, U);
    }
    r.unstable_IdlePriority = 5, r.unstable_ImmediatePriority = 1, r.unstable_LowPriority = 4, r.unstable_NormalPriority = 3, r.unstable_Profiling = null, r.unstable_UserBlockingPriority = 2, r.unstable_cancelCallback = function(B) {
      B.callback = null;
    }, r.unstable_forceFrameRate = function(B) {
      0 > B || 125 < B ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : J = 0 < B ? Math.floor(1e3 / B) : 5;
    }, r.unstable_getCurrentPriorityLevel = function() {
      return M;
    }, r.unstable_next = function(B) {
      switch (M) {
        case 1:
        case 2:
        case 3:
          var U = 3;
          break;
        default:
          U = M;
      }
      var G = M;
      M = U;
      try {
        return B();
      } finally {
        M = G;
      }
    }, r.unstable_requestPaint = function() {
      X = !0;
    }, r.unstable_runWithPriority = function(B, U) {
      switch (B) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          B = 3;
      }
      var G = M;
      M = B;
      try {
        return U();
      } finally {
        M = G;
      }
    }, r.unstable_scheduleCallback = function(B, U, G) {
      var ue = r.unstable_now();
      switch (typeof G == "object" && G !== null ? (G = G.delay, G = typeof G == "number" && 0 < G ? ue + G : ue) : G = ue, B) {
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
      return ie = G + ie, B = {
        id: z++,
        callback: U,
        priorityLevel: B,
        startTime: G,
        expirationTime: ie,
        sortIndex: -1
      }, G > ue ? (B.sortIndex = G, o(x, B), s(S) === null && B === s(x) && (V ? (q(F), F = -1) : V = !0, Fe(le, G - ue))) : (B.sortIndex = ie, o(S, B), H || $ || (H = !0, K || (K = !0, je()))), B;
    }, r.unstable_shouldYield = Qe, r.unstable_wrapCallback = function(B) {
      var U = M;
      return function() {
        var G = M;
        M = U;
        try {
          return B.apply(this, arguments);
        } finally {
          M = G;
        }
      };
    };
  })(qv)), qv;
}
var A1;
function E_() {
  return A1 || (A1 = 1, Hv.exports = A_()), Hv.exports;
}
var E1;
function __() {
  if (E1) return zm;
  E1 = 1;
  var r = { env: { NODE_ENV: "production" } };
  var o = E_(), s = St, f = R1;
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
  function y(e) {
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
    if (y(e) !== e)
      throw Error(c(188));
  }
  function z(e) {
    var t = e.alternate;
    if (!t) {
      if (t = y(e), t === null) throw Error(c(188));
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
  function O(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = O(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var M = Object.assign, $ = Symbol.for("react.element"), H = Symbol.for("react.transitional.element"), V = Symbol.for("react.portal"), X = Symbol.for("react.fragment"), I = Symbol.for("react.strict_mode"), q = Symbol.for("react.profiler"), fe = Symbol.for("react.consumer"), ae = Symbol.for("react.context"), le = Symbol.for("react.forward_ref"), K = Symbol.for("react.suspense"), F = Symbol.for("react.suspense_list"), J = Symbol.for("react.memo"), Ae = Symbol.for("react.lazy"), Qe = Symbol.for("react.activity"), ve = Symbol.for("react.memo_cache_sentinel"), je = Symbol.iterator;
  function xe(e) {
    return e === null || typeof e != "object" ? null : (e = je && e[je] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var yt = Symbol.for("react.client.reference");
  function Fe(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === yt ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case X:
        return "Fragment";
      case q:
        return "Profiler";
      case I:
        return "StrictMode";
      case K:
        return "Suspense";
      case F:
        return "SuspenseList";
      case Qe:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case V:
          return "Portal";
        case ae:
          return e.displayName || "Context";
        case fe:
          return (e._context.displayName || "Context") + ".Consumer";
        case le:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case J:
          return t = e.displayName || null, t !== null ? t : Fe(e.type) || "Memo";
        case Ae:
          t = e._payload, e = e._init;
          try {
            return Fe(e(t));
          } catch {
          }
      }
    return null;
  }
  var B = Array.isArray, U = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, G = f.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ue = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ie = [], Ye = -1;
  function Se(e) {
    return { current: e };
  }
  function se(e) {
    0 > Ye || (e.current = ie[Ye], ie[Ye] = null, Ye--);
  }
  function Z(e, t) {
    Ye++, ie[Ye] = e.current, e.current = t;
  }
  var be = Se(null), ce = Se(null), lt = Se(null), Nn = Se(null);
  function kn(e, t) {
    switch (Z(lt, t), Z(ce, e), Z(be, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Yp(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = Yp(t), e = Vp(t, e);
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
    se(be), Z(be, e);
  }
  function st() {
    se(be), se(ce), se(lt);
  }
  function Ar(e) {
    e.memoizedState !== null && Z(Nn, e);
    var t = be.current, n = Vp(t, e.type);
    t !== n && (Z(ce, e), Z(be, n));
  }
  function _l(e) {
    ce.current === e && (se(be), se(ce)), Nn.current === e && (se(Nn), pi._currentValue = ue);
  }
  var Cl, Ai;
  function zn(e) {
    if (Cl === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Cl = t && t[1] || "", Ai = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Cl + e + Ai;
  }
  var Ce = !1;
  function ll(e, t) {
    if (!e || Ce) return "";
    Ce = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var L = function() {
                throw Error();
              };
              if (Object.defineProperty(L.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(L, []);
                } catch (C) {
                  var _ = C;
                }
                Reflect.construct(e, [], L);
              } else {
                try {
                  L.call();
                } catch (C) {
                  _ = C;
                }
                e.call(L.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (C) {
                _ = C;
              }
              (L = e()) && typeof L.catch == "function" && L.catch(function() {
              });
            }
          } catch (C) {
            if (C && _ && typeof C.stack == "string")
              return [C.stack, _.stack];
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
        var g = u.split(`
`), E = d.split(`
`);
        for (l = a = 0; a < g.length && !g[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; l < E.length && !E[l].includes(
          "DetermineComponentFrameRoot"
        ); )
          l++;
        if (a === g.length || l === E.length)
          for (a = g.length - 1, l = E.length - 1; 1 <= a && 0 <= l && g[a] !== E[l]; )
            l--;
        for (; 1 <= a && 0 <= l; a--, l--)
          if (g[a] !== E[l]) {
            if (a !== 1 || l !== 1)
              do
                if (a--, l--, 0 > l || g[a] !== E[l]) {
                  var N = `
` + g[a].replace(" at new ", " at ");
                  return e.displayName && N.includes("<anonymous>") && (N = N.replace("<anonymous>", e.displayName)), N;
                }
              while (1 <= a && 0 <= l);
            break;
          }
      }
    } finally {
      Ce = !1, Error.prepareStackTrace = n;
    }
    return (n = e ? e.displayName || e.name : "") ? zn(n) : "";
  }
  function De(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return zn(e.type);
      case 16:
        return zn("Lazy");
      case 13:
        return e.child !== t && t !== null ? zn("Suspense Fallback") : zn("Suspense");
      case 19:
        return zn("SuspenseList");
      case 0:
      case 15:
        return ll(e.type, !1);
      case 11:
        return ll(e.type.render, !1);
      case 1:
        return ll(e.type, !0);
      case 31:
        return zn("Activity");
      default:
        return "";
    }
  }
  function Ol(e) {
    try {
      var t = "", n = null;
      do
        t += De(e, n), n = e, e = e.return;
      while (e);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var _t = Object.prototype.hasOwnProperty, Fn = o.unstable_scheduleCallback, Nl = o.unstable_cancelCallback, Rn = o.unstable_shouldYield, Ei = o.unstable_requestPaint, ct = o.unstable_now, _i = o.unstable_getCurrentPriorityLevel, zl = o.unstable_ImmediatePriority, en = o.unstable_UserBlockingPriority, tn = o.unstable_NormalPriority, Qn = o.unstable_LowPriority, Rl = o.unstable_IdlePriority, Dl = o.log, Ll = o.unstable_setDisableYieldValue, Xn = null, $e = null;
  function Bt(e) {
    if (typeof Dl == "function" && Ll(e), $e && typeof $e.setStrictMode == "function")
      try {
        $e.setStrictMode(Xn, e);
      } catch {
      }
  }
  var rt = Math.clz32 ? Math.clz32 : Ni, Ci = Math.log, Oi = Math.LN2;
  function Ni(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Ci(e) / Oi | 0) | 0;
  }
  var Sa = 256, wa = 262144, nn = 4194304;
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
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var l = 0, i = e.suspendedLanes, u = e.pingedLanes;
    e = e.warmLanes;
    var d = a & 134217727;
    return d !== 0 ? (a = d & ~i, a !== 0 ? l = Ct(a) : (u &= d, u !== 0 ? l = Ct(u) : n || (n = d & ~e, n !== 0 && (l = Ct(n))))) : (d = a & ~i, d !== 0 ? l = Ct(d) : u !== 0 ? l = Ct(u) : n || (n = a & ~e, n !== 0 && (l = Ct(n)))), l === 0 ? 0 : t !== 0 && t !== l && (t & i) === 0 && (i = l & -l, n = t & -t, i >= n || i === 32 && (n & 4194048) !== 0) ? t : l;
  }
  function Ta(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function zi(e, t) {
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
    var e = nn;
    return nn <<= 1, (nn & 62914560) === 0 && (nn = 4194304), e;
  }
  function Ml(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function ka(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function Ul(e, t, n, a, l, i) {
    var u = e.pendingLanes;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
    var d = e.entanglements, g = e.expirationTimes, E = e.hiddenUpdates;
    for (n = u & ~n; 0 < n; ) {
      var N = 31 - rt(n), L = 1 << N;
      d[N] = 0, g[N] = -1;
      var _ = E[N];
      if (_ !== null)
        for (E[N] = null, N = 0; N < _.length; N++) {
          var C = _[N];
          C !== null && (C.lane &= -536870913);
        }
      n &= ~L;
    }
    a !== 0 && rl(e, a, 0), i !== 0 && l === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(u & ~t));
  }
  function rl(e, t, n) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var a = 31 - rt(t);
    e.entangledLanes |= t, e.entanglements[a] = e.entanglements[a] | 1073741824 | n & 261930;
  }
  function Yt(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var a = 31 - rt(n), l = 1 << a;
      l & t | e[a] & t && (e[a] |= t), n &= ~l;
    }
  }
  function Pn(e, t) {
    var n = t & -t;
    return n = (n & 42) !== 0 ? 1 : il(n), (n & (e.suspendedLanes | t)) !== 0 ? 0 : n;
  }
  function il(e) {
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
  function ol(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Ri() {
    var e = G.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : fm(e.type));
  }
  function _r(e, t) {
    var n = G.p;
    try {
      return G.p = e, t();
    } finally {
      G.p = n;
    }
  }
  var ln = Math.random().toString(36).slice(2), Ie = "__reactFiber$" + ln, it = "__reactProps$" + ln, xa = "__reactContainer$" + ln, $n = "__reactEvents$" + ln, cu = "__reactListeners$" + ln, fu = "__reactHandles$" + ln, He = "__reactResources$" + ln, rn = "__reactMarker$" + ln;
  function Cr(e) {
    delete e[Ie], delete e[it], delete e[$n], delete e[cu], delete e[fu];
  }
  function In(e) {
    var t = e[Ie];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[xa] || n[Ie]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
          for (e = Ip(e); e !== null; ) {
            if (n = e[Ie]) return n;
            e = Ip(e);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Dn(e) {
    if (e = e[Ie] || e[xa]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function Aa(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(c(33));
  }
  function Kn(e) {
    var t = e[He];
    return t || (t = e[He] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Ke(e) {
    e[rn] = !0;
  }
  var Di = /* @__PURE__ */ new Set(), Li = {};
  function Zn(e, t) {
    Et(e, t), Et(e + "Capture", t);
  }
  function Et(e, t) {
    for (Li[e] = t, e = 0; e < t.length; e++)
      Di.add(t[e]);
  }
  var Mi = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), jl = {}, Wn = {};
  function Ui(e) {
    return _t.call(Wn, e) ? !0 : _t.call(jl, e) ? !1 : Mi.test(e) ? Wn[e] = !0 : (jl[e] = !0, !1);
  }
  function Ea(e, t, n) {
    if (Ui(t))
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
  function _a(e, t, n) {
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
  function Vt(e, t, n, a) {
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
  function Ot(e) {
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
  function Or(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function du(e, t, n) {
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
  function Nr(e) {
    if (!e._valueTracker) {
      var t = Or(e) ? "checked" : "value";
      e._valueTracker = du(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function ji(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), a = "";
    return e && (a = Or(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== n ? (t.setValue(e), !0) : !1;
  }
  function Hl(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Hi = /[\n"\\]/g;
  function Ut(e) {
    return e.replace(
      Hi,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function ql(e, t, n, a, l, i, u, d) {
    e.name = "", u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" ? e.type = u : e.removeAttribute("type"), t != null ? u === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Ot(t)) : e.value !== "" + Ot(t) && (e.value = "" + Ot(t)) : u !== "submit" && u !== "reset" || e.removeAttribute("value"), t != null ? Ca(e, u, Ot(t)) : n != null ? Ca(e, u, Ot(n)) : a != null && e.removeAttribute("value"), l == null && i != null && (e.defaultChecked = !!i), l != null && (e.checked = l && typeof l != "function" && typeof l != "symbol"), d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? e.name = "" + Ot(d) : e.removeAttribute("name");
  }
  function Bl(e, t, n, a, l, i, u, d) {
    if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (e.type = i), t != null || n != null) {
      if (!(i !== "submit" && i !== "reset" || t != null)) {
        Nr(e);
        return;
      }
      n = n != null ? "" + Ot(n) : "", t = t != null ? "" + Ot(t) : n, d || t === e.value || (e.value = t), e.defaultValue = t;
    }
    a = a ?? l, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = d ? e.checked : !!a, e.defaultChecked = !!a, u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.name = u), Nr(e);
  }
  function Ca(e, t, n) {
    t === "number" && Hl(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
  }
  function Ln(e, t, n, a) {
    if (e = e.options, t) {
      t = {};
      for (var l = 0; l < n.length; l++)
        t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && a && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + Ot(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          e[l].selected = !0, a && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function zr(e, t, n) {
    if (t != null && (t = "" + Ot(t), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + Ot(n) : "";
  }
  function ul(e, t, n, a) {
    if (t == null) {
      if (a != null) {
        if (n != null) throw Error(c(92));
        if (B(a)) {
          if (1 < a.length) throw Error(c(93));
          a = a[0];
        }
        n = a;
      }
      n == null && (n = ""), t = n;
    }
    n = Ot(t), e.defaultValue = n, a = e.textContent, a === n && a !== "" && a !== null && (e.value = a), Nr(e);
  }
  function Tt(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var sl = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Nt(e, t, n) {
    var a = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, n) : typeof n != "number" || n === 0 || sl.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
  }
  function qi(e, t, n) {
    if (t != null && typeof t != "object")
      throw Error(c(62));
    if (e = e.style, n != null) {
      for (var a in n)
        !n.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "");
      for (var l in t)
        a = t[l], t.hasOwnProperty(l) && n[l] !== a && Nt(e, l, a);
    } else
      for (var i in t)
        t.hasOwnProperty(i) && Nt(e, i, t[i]);
  }
  function Oa(e) {
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
  var pu = /* @__PURE__ */ new Map([
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
  ]), Bi = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function xn(e) {
    return Bi.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function Gt() {
  }
  var Yl = null;
  function Rr(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Jn = null, Na = null;
  function Yi(e) {
    var t = Dn(e);
    if (t && (e = t.stateNode)) {
      var n = e[it] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (ql(
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
              'input[name="' + Ut(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < n.length; t++) {
              var a = n[t];
              if (a !== e && a.form === e.form) {
                var l = a[it] || null;
                if (!l) throw Error(c(90));
                ql(
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
              a = n[t], a.form === e.form && ji(a);
          }
          break e;
        case "textarea":
          zr(e, n.value, n.defaultValue);
          break e;
        case "select":
          t = n.value, t != null && Ln(e, !!n.multiple, t, !1);
      }
    }
  }
  var Vl = !1;
  function Gl(e, t, n) {
    if (Vl) return e(t, n);
    Vl = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (Vl = !1, (Jn !== null || Na !== null) && (Ao(), Jn && (t = Jn, e = Na, Na = Jn = null, Yi(t), e)))
        for (t = 0; t < e.length; t++) Yi(e[t]);
    }
  }
  function An(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var a = n[it] || null;
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
  var Ft = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), h = !1;
  if (Ft)
    try {
      var m = {};
      Object.defineProperty(m, "passive", {
        get: function() {
          h = !0;
        }
      }), window.addEventListener("test", m, m), window.removeEventListener("test", m, m);
    } catch {
      h = !1;
    }
  var k = null, D = null, j = null;
  function ee() {
    if (j) return j;
    var e, t = D, n = t.length, a, l = "value" in k ? k.value : k.textContent, i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var u = n - e;
    for (a = 1; a <= u && t[n - a] === l[i - a]; a++) ;
    return j = l.slice(e, 1 < a ? 1 - a : void 0);
  }
  function ne(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function ge() {
    return !0;
  }
  function gt() {
    return !1;
  }
  function Le(e) {
    function t(n, a, l, i, u) {
      this._reactName = n, this._targetInst = l, this.type = a, this.nativeEvent = i, this.target = u, this.currentTarget = null;
      for (var d in e)
        e.hasOwnProperty(d) && (n = e[d], this[d] = n ? n(i) : i[d]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? ge : gt, this.isPropagationStopped = gt, this;
    }
    return M(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = ge);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = ge);
      },
      persist: function() {
      },
      isPersistent: ge
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
  }, ft = Le(Be), ut = M({}, Be, { view: 0, detail: 0 }), Mn = Le(ut), Ti, mu, Dr, Vi = M({}, ut, {
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
    getModifierState: gu,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Dr && (Dr && e.type === "mousemove" ? (Ti = e.screenX - Dr.screenX, mu = e.screenY - Dr.screenY) : mu = Ti = 0, Dr = e), Ti);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : mu;
    }
  }), Gc = Le(Vi), Qh = M({}, Vi, { dataTransfer: 0 }), Xh = Le(Qh), Ph = M({}, ut, { relatedTarget: 0 }), hu = Le(Ph), $h = M({}, Be, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Ih = Le($h), Kh = M({}, Be, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Zh = Le(Kh), Wh = M({}, Be, { data: 0 }), Fc = Le(Wh), Jh = {
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
  }, eg = {
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
  }, tg = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function ng(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = tg[e]) ? !!t[e] : !1;
  }
  function gu() {
    return ng;
  }
  var ag = M({}, ut, {
    key: function(e) {
      if (e.key) {
        var t = Jh[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = ne(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? eg[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: gu,
    charCode: function(e) {
      return e.type === "keypress" ? ne(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? ne(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), lg = Le(ag), rg = M({}, Vi, {
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
  }), Qc = Le(rg), ig = M({}, ut, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: gu
  }), og = Le(ig), ug = M({}, Be, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), sg = Le(ug), cg = M({}, Vi, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), fg = Le(cg), dg = M({}, Be, {
    newState: 0,
    oldState: 0
  }), pg = Le(dg), mg = [9, 13, 27, 32], yu = Ft && "CompositionEvent" in window, Lr = null;
  Ft && "documentMode" in document && (Lr = document.documentMode);
  var hg = Ft && "TextEvent" in window && !Lr, Xc = Ft && (!yu || Lr && 8 < Lr && 11 >= Lr), Pc = " ", $c = !1;
  function Ic(e, t) {
    switch (e) {
      case "keyup":
        return mg.indexOf(t.keyCode) !== -1;
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
  function Kc(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Fl = !1;
  function gg(e, t) {
    switch (e) {
      case "compositionend":
        return Kc(t);
      case "keypress":
        return t.which !== 32 ? null : ($c = !0, Pc);
      case "textInput":
        return e = t.data, e === Pc && $c ? null : e;
      default:
        return null;
    }
  }
  function yg(e, t) {
    if (Fl)
      return e === "compositionend" || !yu && Ic(e, t) ? (e = ee(), j = D = k = null, Fl = !1, e) : null;
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
        return Xc && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var vg = {
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
  function Zc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!vg[e.type] : t === "textarea";
  }
  function Wc(e, t, n, a) {
    Jn ? Na ? Na.push(a) : Na = [a] : Jn = a, t = Ro(t, "onChange"), 0 < t.length && (n = new ft(
      "onChange",
      "change",
      null,
      n,
      a
    ), e.push({ event: n, listeners: t }));
  }
  var Mr = null, Ur = null;
  function bg(e) {
    Mp(e, 0);
  }
  function Gi(e) {
    var t = Aa(e);
    if (ji(t)) return e;
  }
  function Jc(e, t) {
    if (e === "change") return t;
  }
  var ef = !1;
  if (Ft) {
    var vu;
    if (Ft) {
      var bu = "oninput" in document;
      if (!bu) {
        var tf = document.createElement("div");
        tf.setAttribute("oninput", "return;"), bu = typeof tf.oninput == "function";
      }
      vu = bu;
    } else vu = !1;
    ef = vu && (!document.documentMode || 9 < document.documentMode);
  }
  function nf() {
    Mr && (Mr.detachEvent("onpropertychange", af), Ur = Mr = null);
  }
  function af(e) {
    if (e.propertyName === "value" && Gi(Ur)) {
      var t = [];
      Wc(
        t,
        Ur,
        e,
        Rr(e)
      ), Gl(bg, t);
    }
  }
  function Sg(e, t, n) {
    e === "focusin" ? (nf(), Mr = t, Ur = n, Mr.attachEvent("onpropertychange", af)) : e === "focusout" && nf();
  }
  function wg(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Gi(Ur);
  }
  function Tg(e, t) {
    if (e === "click") return Gi(t);
  }
  function kg(e, t) {
    if (e === "input" || e === "change")
      return Gi(t);
  }
  function xg(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Qt = typeof Object.is == "function" ? Object.is : xg;
  function jr(e, t) {
    if (Qt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), a = Object.keys(t);
    if (n.length !== a.length) return !1;
    for (a = 0; a < n.length; a++) {
      var l = n[a];
      if (!_t.call(t, l) || !Qt(e[l], t[l]))
        return !1;
    }
    return !0;
  }
  function lf(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function rf(e, t) {
    var n = lf(e);
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
      n = lf(n);
    }
  }
  function of(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? of(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function uf(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = Hl(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Hl(e.document);
    }
    return t;
  }
  function Su(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var Ag = Ft && "documentMode" in document && 11 >= document.documentMode, Ql = null, wu = null, Hr = null, Tu = !1;
  function sf(e, t, n) {
    var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Tu || Ql == null || Ql !== Hl(a) || (a = Ql, "selectionStart" in a && Su(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Hr && jr(Hr, a) || (Hr = a, a = Ro(wu, "onSelect"), 0 < a.length && (t = new ft(
      "onSelect",
      "select",
      null,
      t,
      n
    ), e.push({ event: t, listeners: a }), t.target = Ql)));
  }
  function cl(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Xl = {
    animationend: cl("Animation", "AnimationEnd"),
    animationiteration: cl("Animation", "AnimationIteration"),
    animationstart: cl("Animation", "AnimationStart"),
    transitionrun: cl("Transition", "TransitionRun"),
    transitionstart: cl("Transition", "TransitionStart"),
    transitioncancel: cl("Transition", "TransitionCancel"),
    transitionend: cl("Transition", "TransitionEnd")
  }, ku = {}, cf = {};
  Ft && (cf = document.createElement("div").style, "AnimationEvent" in window || (delete Xl.animationend.animation, delete Xl.animationiteration.animation, delete Xl.animationstart.animation), "TransitionEvent" in window || delete Xl.transitionend.transition);
  function fl(e) {
    if (ku[e]) return ku[e];
    if (!Xl[e]) return e;
    var t = Xl[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in cf)
        return ku[e] = t[n];
    return e;
  }
  var ff = fl("animationend"), df = fl("animationiteration"), pf = fl("animationstart"), Eg = fl("transitionrun"), _g = fl("transitionstart"), Cg = fl("transitioncancel"), mf = fl("transitionend"), hf = /* @__PURE__ */ new Map(), xu = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  xu.push("scrollEnd");
  function En(e, t) {
    hf.set(e, t), Zn(t, [e]);
  }
  var Fi = typeof reportError == "function" ? reportError : function(e) {
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
  }, on = [], Pl = 0, Au = 0;
  function Qi() {
    for (var e = Pl, t = Au = Pl = 0; t < e; ) {
      var n = on[t];
      on[t++] = null;
      var a = on[t];
      on[t++] = null;
      var l = on[t];
      on[t++] = null;
      var i = on[t];
      if (on[t++] = null, a !== null && l !== null) {
        var u = a.pending;
        u === null ? l.next = l : (l.next = u.next, u.next = l), a.pending = l;
      }
      i !== 0 && gf(n, l, i);
    }
  }
  function Xi(e, t, n, a) {
    on[Pl++] = e, on[Pl++] = t, on[Pl++] = n, on[Pl++] = a, Au |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a);
  }
  function Eu(e, t, n, a) {
    return Xi(e, t, n, a), Pi(e);
  }
  function dl(e, t) {
    return Xi(e, null, null, t), Pi(e);
  }
  function gf(e, t, n) {
    e.lanes |= n;
    var a = e.alternate;
    a !== null && (a.lanes |= n);
    for (var l = !1, i = e.return; i !== null; )
      i.childLanes |= n, a = i.alternate, a !== null && (a.childLanes |= n), i.tag === 22 && (e = i.stateNode, e === null || e._visibility & 1 || (l = !0)), e = i, i = i.return;
    return e.tag === 3 ? (i = e.stateNode, l && t !== null && (l = 31 - rt(n), e = i.hiddenUpdates, a = e[l], a === null ? e[l] = [t] : a.push(t), t.lane = n | 536870912), i) : null;
  }
  function Pi(e) {
    if (50 < ii)
      throw ii = 0, Ms = null, Error(c(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var $l = {};
  function Og(e, t, n, a) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Xt(e, t, n, a) {
    return new Og(e, t, n, a);
  }
  function _u(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function ea(e, t) {
    var n = e.alternate;
    return n === null ? (n = Xt(
      e.tag,
      t,
      e.key,
      e.mode
    ), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 65011712, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
  }
  function yf(e, t) {
    e.flags &= 65011714;
    var n = e.alternate;
    return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function $i(e, t, n, a, l, i) {
    var u = 0;
    if (a = e, typeof e == "function") _u(e) && (u = 1);
    else if (typeof e == "string")
      u = Ly(
        e,
        n,
        be.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case Qe:
          return e = Xt(31, n, t, l), e.elementType = Qe, e.lanes = i, e;
        case X:
          return pl(n.children, l, i, t);
        case I:
          u = 8, l |= 24;
          break;
        case q:
          return e = Xt(12, n, t, l | 2), e.elementType = q, e.lanes = i, e;
        case K:
          return e = Xt(13, n, t, l), e.elementType = K, e.lanes = i, e;
        case F:
          return e = Xt(19, n, t, l), e.elementType = F, e.lanes = i, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case ae:
                u = 10;
                break e;
              case fe:
                u = 9;
                break e;
              case le:
                u = 11;
                break e;
              case J:
                u = 14;
                break e;
              case Ae:
                u = 16, a = null;
                break e;
            }
          u = 29, n = Error(
            c(130, e === null ? "null" : typeof e, "")
          ), a = null;
      }
    return t = Xt(u, n, t, l), t.elementType = e, t.type = a, t.lanes = i, t;
  }
  function pl(e, t, n, a) {
    return e = Xt(7, e, a, t), e.lanes = n, e;
  }
  function Cu(e, t, n) {
    return e = Xt(6, e, null, t), e.lanes = n, e;
  }
  function vf(e) {
    var t = Xt(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function Ou(e, t, n) {
    return t = Xt(
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
  var bf = /* @__PURE__ */ new WeakMap();
  function un(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = bf.get(e);
      return n !== void 0 ? n : (t = {
        value: e,
        source: t,
        stack: Ol(t)
      }, bf.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: Ol(t)
    };
  }
  var Il = [], Kl = 0, Ii = null, qr = 0, sn = [], cn = 0, za = null, Un = 1, jn = "";
  function ta(e, t) {
    Il[Kl++] = qr, Il[Kl++] = Ii, Ii = e, qr = t;
  }
  function Sf(e, t, n) {
    sn[cn++] = Un, sn[cn++] = jn, sn[cn++] = za, za = e;
    var a = Un;
    e = jn;
    var l = 32 - rt(a) - 1;
    a &= ~(1 << l), n += 1;
    var i = 32 - rt(t) + l;
    if (30 < i) {
      var u = l - l % 5;
      i = (a & (1 << u) - 1).toString(32), a >>= u, l -= u, Un = 1 << 32 - rt(t) + l | n << l | a, jn = i + e;
    } else
      Un = 1 << i | n << l | a, jn = e;
  }
  function Nu(e) {
    e.return !== null && (ta(e, 1), Sf(e, 1, 0));
  }
  function zu(e) {
    for (; e === Ii; )
      Ii = Il[--Kl], Il[Kl] = null, qr = Il[--Kl], Il[Kl] = null;
    for (; e === za; )
      za = sn[--cn], sn[cn] = null, jn = sn[--cn], sn[cn] = null, Un = sn[--cn], sn[cn] = null;
  }
  function wf(e, t) {
    sn[cn++] = Un, sn[cn++] = jn, sn[cn++] = za, Un = t.id, jn = t.overflow, za = e;
  }
  var dt = null, Me = null, ye = !1, Ra = null, fn = !1, Ru = Error(c(519));
  function Da(e) {
    var t = Error(
      c(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Br(un(t, e)), Ru;
  }
  function Tf(e) {
    var t = e.stateNode, n = e.type, a = e.memoizedProps;
    switch (t[Ie] = e, t[it] = a, n) {
      case "dialog":
        pe("cancel", t), pe("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        pe("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < ui.length; n++)
          pe(ui[n], t);
        break;
      case "source":
        pe("error", t);
        break;
      case "img":
      case "image":
      case "link":
        pe("error", t), pe("load", t);
        break;
      case "details":
        pe("toggle", t);
        break;
      case "input":
        pe("invalid", t), Bl(
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
        pe("invalid", t);
        break;
      case "textarea":
        pe("invalid", t), ul(t, a.value, a.defaultValue, a.children);
    }
    n = a.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || a.suppressHydrationWarning === !0 || qp(t.textContent, n) ? (a.popover != null && (pe("beforetoggle", t), pe("toggle", t)), a.onScroll != null && pe("scroll", t), a.onScrollEnd != null && pe("scrollend", t), a.onClick != null && (t.onclick = Gt), t = !0) : t = !1, t || Da(e, !0);
  }
  function kf(e) {
    for (dt = e.return; dt; )
      switch (dt.tag) {
        case 5:
        case 31:
        case 13:
          fn = !1;
          return;
        case 27:
        case 3:
          fn = !0;
          return;
        default:
          dt = dt.return;
      }
  }
  function Zl(e) {
    if (e !== dt) return !1;
    if (!ye) return kf(e), ye = !0, !1;
    var t = e.tag, n;
    if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || Ks(e.type, e.memoizedProps)), n = !n), n && Me && Da(e), kf(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(317));
      Me = $p(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(317));
      Me = $p(e);
    } else
      t === 27 ? (t = Me, Pa(e.type) ? (e = tc, tc = null, Me = e) : Me = t) : Me = dt ? dn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ml() {
    Me = dt = null, ye = !1;
  }
  function Du() {
    var e = Ra;
    return e !== null && (Lt === null ? Lt = e : Lt.push.apply(
      Lt,
      e
    ), Ra = null), e;
  }
  function Br(e) {
    Ra === null ? Ra = [e] : Ra.push(e);
  }
  var Lu = Se(null), hl = null, na = null;
  function La(e, t, n) {
    Z(Lu, t._currentValue), t._currentValue = n;
  }
  function aa(e) {
    e._currentValue = Lu.current, se(Lu);
  }
  function Mu(e, t, n) {
    for (; e !== null; ) {
      var a = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Uu(e, t, n, a) {
    var l = e.child;
    for (l !== null && (l.return = e); l !== null; ) {
      var i = l.dependencies;
      if (i !== null) {
        var u = l.child;
        i = i.firstContext;
        e: for (; i !== null; ) {
          var d = i;
          i = l;
          for (var g = 0; g < t.length; g++)
            if (d.context === t[g]) {
              i.lanes |= n, d = i.alternate, d !== null && (d.lanes |= n), Mu(
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
        u.lanes |= n, i = u.alternate, i !== null && (i.lanes |= n), Mu(u, n, e), u = null;
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
  function Wl(e, t, n, a) {
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
          Qt(l.pendingProps.value, u.value) || (e !== null ? e.push(d) : e = [d]);
        }
      } else if (l === Nn.current) {
        if (u = l.alternate, u === null) throw Error(c(387));
        u.memoizedState.memoizedState !== l.memoizedState.memoizedState && (e !== null ? e.push(pi) : e = [pi]);
      }
      l = l.return;
    }
    e !== null && Uu(
      t,
      e,
      n,
      a
    ), t.flags |= 262144;
  }
  function Ki(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Qt(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function gl(e) {
    hl = e, na = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function pt(e) {
    return xf(hl, e);
  }
  function Zi(e, t) {
    return hl === null && gl(e), xf(e, t);
  }
  function xf(e, t) {
    var n = t._currentValue;
    if (t = { context: t, memoizedValue: n, next: null }, na === null) {
      if (e === null) throw Error(c(308));
      na = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else na = na.next = t;
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
  }, zg = o.unstable_scheduleCallback, Rg = o.unstable_NormalPriority, Ze = {
    $$typeof: ae,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function ju() {
    return {
      controller: new Ng(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Yr(e) {
    e.refCount--, e.refCount === 0 && zg(Rg, function() {
      e.controller.abort();
    });
  }
  var Vr = null, Hu = 0, Jl = 0, er = null;
  function Dg(e, t) {
    if (Vr === null) {
      var n = Vr = [];
      Hu = 0, Jl = Ys(), er = {
        status: "pending",
        value: void 0,
        then: function(a) {
          n.push(a);
        }
      };
    }
    return Hu++, t.then(Af, Af), t;
  }
  function Af() {
    if (--Hu === 0 && Vr !== null) {
      er !== null && (er.status = "fulfilled");
      var e = Vr;
      Vr = null, Jl = 0, er = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Lg(e, t) {
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
  var Ef = U.S;
  U.S = function(e, t) {
    sp = ct(), typeof t == "object" && t !== null && typeof t.then == "function" && Dg(e, t), Ef !== null && Ef(e, t);
  };
  var yl = Se(null);
  function qu() {
    var e = yl.current;
    return e !== null ? e : Re.pooledCache;
  }
  function Wi(e, t) {
    t === null ? Z(yl, yl.current) : Z(yl, t.pool);
  }
  function _f() {
    var e = qu();
    return e === null ? null : { parent: Ze._currentValue, pool: e };
  }
  var tr = Error(c(460)), Bu = Error(c(474)), Ji = Error(c(542)), eo = { then: function() {
  } };
  function Cf(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Of(e, t, n) {
    switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(Gt, Gt), t = n), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, zf(e), e;
      default:
        if (typeof t.status == "string") t.then(Gt, Gt);
        else {
          if (e = Re, e !== null && 100 < e.shellSuspendCounter)
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
        throw bl = t, tr;
    }
  }
  function vl(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (bl = n, tr) : n;
    }
  }
  var bl = null;
  function Nf() {
    if (bl === null) throw Error(c(459));
    var e = bl;
    return bl = null, e;
  }
  function zf(e) {
    if (e === tr || e === Ji)
      throw Error(c(483));
  }
  var nr = null, Gr = 0;
  function to(e) {
    var t = Gr;
    return Gr += 1, nr === null && (nr = []), Of(nr, e, t);
  }
  function Fr(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function no(e, t) {
    throw t.$$typeof === $ ? Error(c(525)) : (e = Object.prototype.toString.call(t), Error(
      c(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function Rf(e) {
    function t(w, b) {
      if (e) {
        var A = w.deletions;
        A === null ? (w.deletions = [b], w.flags |= 16) : A.push(b);
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
      return w = ea(w, b), w.index = 0, w.sibling = null, w;
    }
    function i(w, b, A) {
      return w.index = A, e ? (A = w.alternate, A !== null ? (A = A.index, A < b ? (w.flags |= 67108866, b) : A) : (w.flags |= 67108866, b)) : (w.flags |= 1048576, b);
    }
    function u(w) {
      return e && w.alternate === null && (w.flags |= 67108866), w;
    }
    function d(w, b, A, R) {
      return b === null || b.tag !== 6 ? (b = Cu(A, w.mode, R), b.return = w, b) : (b = l(b, A), b.return = w, b);
    }
    function g(w, b, A, R) {
      var W = A.type;
      return W === X ? N(
        w,
        b,
        A.props.children,
        R,
        A.key
      ) : b !== null && (b.elementType === W || typeof W == "object" && W !== null && W.$$typeof === Ae && vl(W) === b.type) ? (b = l(b, A.props), Fr(b, A), b.return = w, b) : (b = $i(
        A.type,
        A.key,
        A.props,
        null,
        w.mode,
        R
      ), Fr(b, A), b.return = w, b);
    }
    function E(w, b, A, R) {
      return b === null || b.tag !== 4 || b.stateNode.containerInfo !== A.containerInfo || b.stateNode.implementation !== A.implementation ? (b = Ou(A, w.mode, R), b.return = w, b) : (b = l(b, A.children || []), b.return = w, b);
    }
    function N(w, b, A, R, W) {
      return b === null || b.tag !== 7 ? (b = pl(
        A,
        w.mode,
        R,
        W
      ), b.return = w, b) : (b = l(b, A), b.return = w, b);
    }
    function L(w, b, A) {
      if (typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint")
        return b = Cu(
          "" + b,
          w.mode,
          A
        ), b.return = w, b;
      if (typeof b == "object" && b !== null) {
        switch (b.$$typeof) {
          case H:
            return A = $i(
              b.type,
              b.key,
              b.props,
              null,
              w.mode,
              A
            ), Fr(A, b), A.return = w, A;
          case V:
            return b = Ou(
              b,
              w.mode,
              A
            ), b.return = w, b;
          case Ae:
            return b = vl(b), L(w, b, A);
        }
        if (B(b) || xe(b))
          return b = pl(
            b,
            w.mode,
            A,
            null
          ), b.return = w, b;
        if (typeof b.then == "function")
          return L(w, to(b), A);
        if (b.$$typeof === ae)
          return L(
            w,
            Zi(w, b),
            A
          );
        no(w, b);
      }
      return null;
    }
    function _(w, b, A, R) {
      var W = b !== null ? b.key : null;
      if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint")
        return W !== null ? null : d(w, b, "" + A, R);
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case H:
            return A.key === W ? g(w, b, A, R) : null;
          case V:
            return A.key === W ? E(w, b, A, R) : null;
          case Ae:
            return A = vl(A), _(w, b, A, R);
        }
        if (B(A) || xe(A))
          return W !== null ? null : N(w, b, A, R, null);
        if (typeof A.then == "function")
          return _(
            w,
            b,
            to(A),
            R
          );
        if (A.$$typeof === ae)
          return _(
            w,
            b,
            Zi(w, A),
            R
          );
        no(w, A);
      }
      return null;
    }
    function C(w, b, A, R, W) {
      if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint")
        return w = w.get(A) || null, d(b, w, "" + R, W);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case H:
            return w = w.get(
              R.key === null ? A : R.key
            ) || null, g(b, w, R, W);
          case V:
            return w = w.get(
              R.key === null ? A : R.key
            ) || null, E(b, w, R, W);
          case Ae:
            return R = vl(R), C(
              w,
              b,
              A,
              R,
              W
            );
        }
        if (B(R) || xe(R))
          return w = w.get(A) || null, N(b, w, R, W, null);
        if (typeof R.then == "function")
          return C(
            w,
            b,
            A,
            to(R),
            W
          );
        if (R.$$typeof === ae)
          return C(
            w,
            b,
            A,
            Zi(b, R),
            W
          );
        no(b, R);
      }
      return null;
    }
    function Q(w, b, A, R) {
      for (var W = null, we = null, P = b, oe = b = 0, he = null; P !== null && oe < A.length; oe++) {
        P.index > oe ? (he = P, P = null) : he = P.sibling;
        var Te = _(
          w,
          P,
          A[oe],
          R
        );
        if (Te === null) {
          P === null && (P = he);
          break;
        }
        e && P && Te.alternate === null && t(w, P), b = i(Te, b, oe), we === null ? W = Te : we.sibling = Te, we = Te, P = he;
      }
      if (oe === A.length)
        return n(w, P), ye && ta(w, oe), W;
      if (P === null) {
        for (; oe < A.length; oe++)
          P = L(w, A[oe], R), P !== null && (b = i(
            P,
            b,
            oe
          ), we === null ? W = P : we.sibling = P, we = P);
        return ye && ta(w, oe), W;
      }
      for (P = a(P); oe < A.length; oe++)
        he = C(
          P,
          w,
          oe,
          A[oe],
          R
        ), he !== null && (e && he.alternate !== null && P.delete(
          he.key === null ? oe : he.key
        ), b = i(
          he,
          b,
          oe
        ), we === null ? W = he : we.sibling = he, we = he);
      return e && P.forEach(function(Wa) {
        return t(w, Wa);
      }), ye && ta(w, oe), W;
    }
    function te(w, b, A, R) {
      if (A == null) throw Error(c(151));
      for (var W = null, we = null, P = b, oe = b = 0, he = null, Te = A.next(); P !== null && !Te.done; oe++, Te = A.next()) {
        P.index > oe ? (he = P, P = null) : he = P.sibling;
        var Wa = _(w, P, Te.value, R);
        if (Wa === null) {
          P === null && (P = he);
          break;
        }
        e && P && Wa.alternate === null && t(w, P), b = i(Wa, b, oe), we === null ? W = Wa : we.sibling = Wa, we = Wa, P = he;
      }
      if (Te.done)
        return n(w, P), ye && ta(w, oe), W;
      if (P === null) {
        for (; !Te.done; oe++, Te = A.next())
          Te = L(w, Te.value, R), Te !== null && (b = i(Te, b, oe), we === null ? W = Te : we.sibling = Te, we = Te);
        return ye && ta(w, oe), W;
      }
      for (P = a(P); !Te.done; oe++, Te = A.next())
        Te = C(P, w, oe, Te.value, R), Te !== null && (e && Te.alternate !== null && P.delete(Te.key === null ? oe : Te.key), b = i(Te, b, oe), we === null ? W = Te : we.sibling = Te, we = Te);
      return e && P.forEach(function(Qy) {
        return t(w, Qy);
      }), ye && ta(w, oe), W;
    }
    function ze(w, b, A, R) {
      if (typeof A == "object" && A !== null && A.type === X && A.key === null && (A = A.props.children), typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case H:
            e: {
              for (var W = A.key; b !== null; ) {
                if (b.key === W) {
                  if (W = A.type, W === X) {
                    if (b.tag === 7) {
                      n(
                        w,
                        b.sibling
                      ), R = l(
                        b,
                        A.props.children
                      ), R.return = w, w = R;
                      break e;
                    }
                  } else if (b.elementType === W || typeof W == "object" && W !== null && W.$$typeof === Ae && vl(W) === b.type) {
                    n(
                      w,
                      b.sibling
                    ), R = l(b, A.props), Fr(R, A), R.return = w, w = R;
                    break e;
                  }
                  n(w, b);
                  break;
                } else t(w, b);
                b = b.sibling;
              }
              A.type === X ? (R = pl(
                A.props.children,
                w.mode,
                R,
                A.key
              ), R.return = w, w = R) : (R = $i(
                A.type,
                A.key,
                A.props,
                null,
                w.mode,
                R
              ), Fr(R, A), R.return = w, w = R);
            }
            return u(w);
          case V:
            e: {
              for (W = A.key; b !== null; ) {
                if (b.key === W)
                  if (b.tag === 4 && b.stateNode.containerInfo === A.containerInfo && b.stateNode.implementation === A.implementation) {
                    n(
                      w,
                      b.sibling
                    ), R = l(b, A.children || []), R.return = w, w = R;
                    break e;
                  } else {
                    n(w, b);
                    break;
                  }
                else t(w, b);
                b = b.sibling;
              }
              R = Ou(A, w.mode, R), R.return = w, w = R;
            }
            return u(w);
          case Ae:
            return A = vl(A), ze(
              w,
              b,
              A,
              R
            );
        }
        if (B(A))
          return Q(
            w,
            b,
            A,
            R
          );
        if (xe(A)) {
          if (W = xe(A), typeof W != "function") throw Error(c(150));
          return A = W.call(A), te(
            w,
            b,
            A,
            R
          );
        }
        if (typeof A.then == "function")
          return ze(
            w,
            b,
            to(A),
            R
          );
        if (A.$$typeof === ae)
          return ze(
            w,
            b,
            Zi(w, A),
            R
          );
        no(w, A);
      }
      return typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint" ? (A = "" + A, b !== null && b.tag === 6 ? (n(w, b.sibling), R = l(b, A), R.return = w, w = R) : (n(w, b), R = Cu(A, w.mode, R), R.return = w, w = R), u(w)) : n(w, b);
    }
    return function(w, b, A, R) {
      try {
        Gr = 0;
        var W = ze(
          w,
          b,
          A,
          R
        );
        return nr = null, W;
      } catch (P) {
        if (P === tr || P === Ji) throw P;
        var we = Xt(29, P, null, w.mode);
        return we.lanes = R, we.return = w, we;
      } finally {
      }
    };
  }
  var Sl = Rf(!0), Df = Rf(!1), Ma = !1;
  function Yu(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Vu(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function Ua(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function ja(e, t, n) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (ke & 2) !== 0) {
      var l = a.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), a.pending = t, t = Pi(e), gf(e, null, n), t;
    }
    return Xi(e, a, t, n), Pi(e);
  }
  function Qr(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
      var a = t.lanes;
      a &= e.pendingLanes, n |= a, t.lanes = n, Yt(e, n);
    }
  }
  function Gu(e, t) {
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
  var Fu = !1;
  function Xr() {
    if (Fu) {
      var e = er;
      if (e !== null) throw e;
    }
  }
  function Pr(e, t, n, a) {
    Fu = !1;
    var l = e.updateQueue;
    Ma = !1;
    var i = l.firstBaseUpdate, u = l.lastBaseUpdate, d = l.shared.pending;
    if (d !== null) {
      l.shared.pending = null;
      var g = d, E = g.next;
      g.next = null, u === null ? i = E : u.next = E, u = g;
      var N = e.alternate;
      N !== null && (N = N.updateQueue, d = N.lastBaseUpdate, d !== u && (d === null ? N.firstBaseUpdate = E : d.next = E, N.lastBaseUpdate = g));
    }
    if (i !== null) {
      var L = l.baseState;
      u = 0, N = E = g = null, d = i;
      do {
        var _ = d.lane & -536870913, C = _ !== d.lane;
        if (C ? (me & _) === _ : (a & _) === _) {
          _ !== 0 && _ === Jl && (Fu = !0), N !== null && (N = N.next = {
            lane: 0,
            tag: d.tag,
            payload: d.payload,
            callback: null,
            next: null
          });
          e: {
            var Q = e, te = d;
            _ = t;
            var ze = n;
            switch (te.tag) {
              case 1:
                if (Q = te.payload, typeof Q == "function") {
                  L = Q.call(ze, L, _);
                  break e;
                }
                L = Q;
                break e;
              case 3:
                Q.flags = Q.flags & -65537 | 128;
              case 0:
                if (Q = te.payload, _ = typeof Q == "function" ? Q.call(ze, L, _) : Q, _ == null) break e;
                L = M({}, L, _);
                break e;
              case 2:
                Ma = !0;
            }
          }
          _ = d.callback, _ !== null && (e.flags |= 64, C && (e.flags |= 8192), C = l.callbacks, C === null ? l.callbacks = [_] : C.push(_));
        } else
          C = {
            lane: _,
            tag: d.tag,
            payload: d.payload,
            callback: d.callback,
            next: null
          }, N === null ? (E = N = C, g = L) : N = N.next = C, u |= _;
        if (d = d.next, d === null) {
          if (d = l.shared.pending, d === null)
            break;
          C = d, d = C.next, C.next = null, l.lastBaseUpdate = C, l.shared.pending = null;
        }
      } while (!0);
      N === null && (g = L), l.baseState = g, l.firstBaseUpdate = E, l.lastBaseUpdate = N, i === null && (l.shared.lanes = 0), Va |= u, e.lanes = u, e.memoizedState = L;
    }
  }
  function Lf(e, t) {
    if (typeof e != "function")
      throw Error(c(191, e));
    e.call(t);
  }
  function Mf(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++)
        Lf(n[e], t);
  }
  var ar = Se(null), ao = Se(0);
  function Uf(e, t) {
    e = da, Z(ao, e), Z(ar, t), da = e | t.baseLanes;
  }
  function Qu() {
    Z(ao, da), Z(ar, ar.current);
  }
  function Xu() {
    da = ao.current, se(ar), se(ao);
  }
  var Pt = Se(null), vn = null;
  function Ha(e) {
    var t = e.alternate;
    Z(Xe, Xe.current & 1), Z(Pt, e), vn === null && (t === null || ar.current !== null || t.memoizedState !== null) && (vn = e);
  }
  function Pu(e) {
    Z(Xe, Xe.current), Z(Pt, e), vn === null && (vn = e);
  }
  function jf(e) {
    e.tag === 22 ? (Z(Xe, Xe.current), Z(Pt, e), vn === null && (vn = e)) : qa();
  }
  function qa() {
    Z(Xe, Xe.current), Z(Pt, Pt.current);
  }
  function $t(e) {
    se(Pt), vn === e && (vn = null), se(Xe);
  }
  var Xe = Se(0);
  function lo(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || Js(n) || ec(n)))
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
  var la = 0, re = null, Oe = null, We = null, ro = !1, lr = !1, wl = !1, io = 0, $r = 0, rr = null, Mg = 0;
  function Ve() {
    throw Error(c(321));
  }
  function $u(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Qt(e[n], t[n])) return !1;
    return !0;
  }
  function Iu(e, t, n, a, l, i) {
    return la = i, re = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, U.H = e === null || e.memoizedState === null ? Sd : cs, wl = !1, i = n(a, l), wl = !1, lr && (i = qf(
      t,
      n,
      a,
      l
    )), Hf(e), i;
  }
  function Hf(e) {
    U.H = Zr;
    var t = Oe !== null && Oe.next !== null;
    if (la = 0, We = Oe = re = null, ro = !1, $r = 0, rr = null, t) throw Error(c(300));
    e === null || Je || (e = e.dependencies, e !== null && Ki(e) && (Je = !0));
  }
  function qf(e, t, n, a) {
    re = e;
    var l = 0;
    do {
      if (lr && (rr = null), $r = 0, lr = !1, 25 <= l) throw Error(c(301));
      if (l += 1, We = Oe = null, e.updateQueue != null) {
        var i = e.updateQueue;
        i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
      }
      U.H = wd, i = t(n, a);
    } while (lr);
    return i;
  }
  function Ug() {
    var e = U.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Ir(t) : t, e = e.useState()[0], (Oe !== null ? Oe.memoizedState : null) !== e && (re.flags |= 1024), t;
  }
  function Ku() {
    var e = io !== 0;
    return io = 0, e;
  }
  function Zu(e, t, n) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
  }
  function Wu(e) {
    if (ro) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      ro = !1;
    }
    la = 0, We = Oe = re = null, lr = !1, $r = io = 0, rr = null;
  }
  function kt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return We === null ? re.memoizedState = We = e : We = We.next = e, We;
  }
  function Pe() {
    if (Oe === null) {
      var e = re.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Oe.next;
    var t = We === null ? re.memoizedState : We.next;
    if (t !== null)
      We = t, Oe = e;
    else {
      if (e === null)
        throw re.alternate === null ? Error(c(467)) : Error(c(310));
      Oe = e, e = {
        memoizedState: Oe.memoizedState,
        baseState: Oe.baseState,
        baseQueue: Oe.baseQueue,
        queue: Oe.queue,
        next: null
      }, We === null ? re.memoizedState = We = e : We = We.next = e;
    }
    return We;
  }
  function oo() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ir(e) {
    var t = $r;
    return $r += 1, rr === null && (rr = []), e = Of(rr, e, t), t = re, (We === null ? t.memoizedState : We.next) === null && (t = t.alternate, U.H = t === null || t.memoizedState === null ? Sd : cs), e;
  }
  function uo(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Ir(e);
      if (e.$$typeof === ae) return pt(e);
    }
    throw Error(c(438, String(e)));
  }
  function Ju(e) {
    var t = null, n = re.updateQueue;
    if (n !== null && (t = n.memoCache), t == null) {
      var a = re.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
        data: a.data.map(function(l) {
          return l.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), n === null && (n = oo(), re.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
      for (n = t.data[t.index] = Array(e), a = 0; a < e; a++)
        n[a] = ve;
    return t.index++, n;
  }
  function ra(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function so(e) {
    var t = Pe();
    return es(t, Oe, e);
  }
  function es(e, t, n) {
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
      var d = u = null, g = null, E = t, N = !1;
      do {
        var L = E.lane & -536870913;
        if (L !== E.lane ? (me & L) === L : (la & L) === L) {
          var _ = E.revertLane;
          if (_ === 0)
            g !== null && (g = g.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: E.action,
              hasEagerState: E.hasEagerState,
              eagerState: E.eagerState,
              next: null
            }), L === Jl && (N = !0);
          else if ((la & _) === _) {
            E = E.next, _ === Jl && (N = !0);
            continue;
          } else
            L = {
              lane: 0,
              revertLane: E.revertLane,
              gesture: null,
              action: E.action,
              hasEagerState: E.hasEagerState,
              eagerState: E.eagerState,
              next: null
            }, g === null ? (d = g = L, u = i) : g = g.next = L, re.lanes |= _, Va |= _;
          L = E.action, wl && n(i, L), i = E.hasEagerState ? E.eagerState : n(i, L);
        } else
          _ = {
            lane: L,
            revertLane: E.revertLane,
            gesture: E.gesture,
            action: E.action,
            hasEagerState: E.hasEagerState,
            eagerState: E.eagerState,
            next: null
          }, g === null ? (d = g = _, u = i) : g = g.next = _, re.lanes |= L, Va |= L;
        E = E.next;
      } while (E !== null && E !== t);
      if (g === null ? u = i : g.next = d, !Qt(i, e.memoizedState) && (Je = !0, N && (n = er, n !== null)))
        throw n;
      e.memoizedState = i, e.baseState = u, e.baseQueue = g, a.lastRenderedState = i;
    }
    return l === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
  }
  function ts(e) {
    var t = Pe(), n = t.queue;
    if (n === null) throw Error(c(311));
    n.lastRenderedReducer = e;
    var a = n.dispatch, l = n.pending, i = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var u = l = l.next;
      do
        i = e(i, u.action), u = u.next;
      while (u !== l);
      Qt(i, t.memoizedState) || (Je = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
    }
    return [i, a];
  }
  function Bf(e, t, n) {
    var a = re, l = Pe(), i = ye;
    if (i) {
      if (n === void 0) throw Error(c(407));
      n = n();
    } else n = t();
    var u = !Qt(
      (Oe || l).memoizedState,
      n
    );
    if (u && (l.memoizedState = n, Je = !0), l = l.queue, ls(Gf.bind(null, a, l, e), [
      e
    ]), l.getSnapshot !== t || u || We !== null && We.memoizedState.tag & 1) {
      if (a.flags |= 2048, ir(
        9,
        { destroy: void 0 },
        Vf.bind(
          null,
          a,
          l,
          n,
          t
        ),
        null
      ), Re === null) throw Error(c(349));
      i || (la & 127) !== 0 || Yf(a, t, n);
    }
    return n;
  }
  function Yf(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = re.updateQueue, t === null ? (t = oo(), re.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Vf(e, t, n, a) {
    t.value = n, t.getSnapshot = a, Ff(t) && Qf(e);
  }
  function Gf(e, t, n) {
    return n(function() {
      Ff(t) && Qf(e);
    });
  }
  function Ff(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Qt(e, n);
    } catch {
      return !0;
    }
  }
  function Qf(e) {
    var t = dl(e, 2);
    t !== null && Mt(t, e, 2);
  }
  function ns(e) {
    var t = kt();
    if (typeof e == "function") {
      var n = e;
      if (e = n(), wl) {
        Bt(!0);
        try {
          n();
        } finally {
          Bt(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ra,
      lastRenderedState: e
    }, t;
  }
  function Xf(e, t, n, a) {
    return e.baseState = n, es(
      e,
      Oe,
      typeof a == "function" ? a : ra
    );
  }
  function jg(e, t, n, a, l) {
    if (po(e)) throw Error(c(485));
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
      U.T !== null ? n(!0) : i.isTransition = !1, a(i), n = t.pending, n === null ? (i.next = t.pending = i, Pf(t, i)) : (i.next = n.next, t.pending = n.next = i);
    }
  }
  function Pf(e, t) {
    var n = t.action, a = t.payload, l = e.state;
    if (t.isTransition) {
      var i = U.T, u = {};
      U.T = u;
      try {
        var d = n(l, a), g = U.S;
        g !== null && g(u, d), $f(e, t, d);
      } catch (E) {
        as(e, t, E);
      } finally {
        i !== null && u.types !== null && (i.types = u.types), U.T = i;
      }
    } else
      try {
        i = n(l, a), $f(e, t, i);
      } catch (E) {
        as(e, t, E);
      }
  }
  function $f(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(a) {
        If(e, t, a);
      },
      function(a) {
        return as(e, t, a);
      }
    ) : If(e, t, n);
  }
  function If(e, t, n) {
    t.status = "fulfilled", t.value = n, Kf(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, Pf(e, n)));
  }
  function as(e, t, n) {
    var a = e.pending;
    if (e.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = n, Kf(t), t = t.next;
      while (t !== a);
    }
    e.action = null;
  }
  function Kf(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Zf(e, t) {
    return t;
  }
  function Wf(e, t) {
    if (ye) {
      var n = Re.formState;
      if (n !== null) {
        e: {
          var a = re;
          if (ye) {
            if (Me) {
              t: {
                for (var l = Me, i = fn; l.nodeType !== 8; ) {
                  if (!i) {
                    l = null;
                    break t;
                  }
                  if (l = dn(
                    l.nextSibling
                  ), l === null) {
                    l = null;
                    break t;
                  }
                }
                i = l.data, l = i === "F!" || i === "F" ? l : null;
              }
              if (l) {
                Me = dn(
                  l.nextSibling
                ), a = l.data === "F!";
                break e;
              }
            }
            Da(a);
          }
          a = !1;
        }
        a && (t = n[0]);
      }
    }
    return n = kt(), n.memoizedState = n.baseState = t, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Zf,
      lastRenderedState: t
    }, n.queue = a, n = yd.bind(
      null,
      re,
      a
    ), a.dispatch = n, a = ns(!1), i = ss.bind(
      null,
      re,
      !1,
      a.queue
    ), a = kt(), l = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, a.queue = l, n = jg.bind(
      null,
      re,
      l,
      i,
      n
    ), l.dispatch = n, a.memoizedState = e, [t, n, !1];
  }
  function Jf(e) {
    var t = Pe();
    return ed(t, Oe, e);
  }
  function ed(e, t, n) {
    if (t = es(
      e,
      t,
      Zf
    )[0], e = so(ra)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = Ir(t);
      } catch (u) {
        throw u === tr ? Ji : u;
      }
    else a = t;
    t = Pe();
    var l = t.queue, i = l.dispatch;
    return n !== t.memoizedState && (re.flags |= 2048, ir(
      9,
      { destroy: void 0 },
      Hg.bind(null, l, n),
      null
    )), [a, i, e];
  }
  function Hg(e, t) {
    e.action = t;
  }
  function td(e) {
    var t = Pe(), n = Oe;
    if (n !== null)
      return ed(t, n, e);
    Pe(), t = t.memoizedState, n = Pe();
    var a = n.queue.dispatch;
    return n.memoizedState = e, [t, a, !1];
  }
  function ir(e, t, n, a) {
    return e = { tag: e, create: n, deps: a, inst: t, next: null }, t = re.updateQueue, t === null && (t = oo(), re.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (a = n.next, n.next = e, e.next = a, t.lastEffect = e), e;
  }
  function nd() {
    return Pe().memoizedState;
  }
  function co(e, t, n, a) {
    var l = kt();
    re.flags |= e, l.memoizedState = ir(
      1 | t,
      { destroy: void 0 },
      n,
      a === void 0 ? null : a
    );
  }
  function fo(e, t, n, a) {
    var l = Pe();
    a = a === void 0 ? null : a;
    var i = l.memoizedState.inst;
    Oe !== null && a !== null && $u(a, Oe.memoizedState.deps) ? l.memoizedState = ir(t, i, n, a) : (re.flags |= e, l.memoizedState = ir(
      1 | t,
      i,
      n,
      a
    ));
  }
  function ad(e, t) {
    co(8390656, 8, e, t);
  }
  function ls(e, t) {
    fo(2048, 8, e, t);
  }
  function qg(e) {
    re.flags |= 4;
    var t = re.updateQueue;
    if (t === null)
      t = oo(), re.updateQueue = t, t.events = [e];
    else {
      var n = t.events;
      n === null ? t.events = [e] : n.push(e);
    }
  }
  function ld(e) {
    var t = Pe().memoizedState;
    return qg({ ref: t, nextImpl: e }), function() {
      if ((ke & 2) !== 0) throw Error(c(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function rd(e, t) {
    return fo(4, 2, e, t);
  }
  function id(e, t) {
    return fo(4, 4, e, t);
  }
  function od(e, t) {
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
  function ud(e, t, n) {
    n = n != null ? n.concat([e]) : null, fo(4, 4, od.bind(null, t, e), n);
  }
  function rs() {
  }
  function sd(e, t) {
    var n = Pe();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    return t !== null && $u(t, a[1]) ? a[0] : (n.memoizedState = [e, t], e);
  }
  function cd(e, t) {
    var n = Pe();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    if (t !== null && $u(t, a[1]))
      return a[0];
    if (a = e(), wl) {
      Bt(!0);
      try {
        e();
      } finally {
        Bt(!1);
      }
    }
    return n.memoizedState = [a, t], a;
  }
  function is(e, t, n) {
    return n === void 0 || (la & 1073741824) !== 0 && (me & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n, e = fp(), re.lanes |= e, Va |= e, n);
  }
  function fd(e, t, n, a) {
    return Qt(n, t) ? n : ar.current !== null ? (e = is(e, n, a), Qt(e, t) || (Je = !0), e) : (la & 42) === 0 || (la & 1073741824) !== 0 && (me & 261930) === 0 ? (Je = !0, e.memoizedState = n) : (e = fp(), re.lanes |= e, Va |= e, t);
  }
  function dd(e, t, n, a, l) {
    var i = G.p;
    G.p = i !== 0 && 8 > i ? i : 8;
    var u = U.T, d = {};
    U.T = d, ss(e, !1, t, n);
    try {
      var g = l(), E = U.S;
      if (E !== null && E(d, g), g !== null && typeof g == "object" && typeof g.then == "function") {
        var N = Lg(
          g,
          a
        );
        Kr(
          e,
          t,
          N,
          Zt(e)
        );
      } else
        Kr(
          e,
          t,
          a,
          Zt(e)
        );
    } catch (L) {
      Kr(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: L },
        Zt()
      );
    } finally {
      G.p = i, u !== null && d.types !== null && (u.types = d.types), U.T = u;
    }
  }
  function Bg() {
  }
  function os(e, t, n, a) {
    if (e.tag !== 5) throw Error(c(476));
    var l = pd(e).queue;
    dd(
      e,
      l,
      t,
      ue,
      n === null ? Bg : function() {
        return md(e), n(a);
      }
    );
  }
  function pd(e) {
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
        lastRenderedReducer: ra,
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
        lastRenderedReducer: ra,
        lastRenderedState: n
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function md(e) {
    var t = pd(e);
    t.next === null && (t = e.alternate.memoizedState), Kr(
      e,
      t.next.queue,
      {},
      Zt()
    );
  }
  function us() {
    return pt(pi);
  }
  function hd() {
    return Pe().memoizedState;
  }
  function gd() {
    return Pe().memoizedState;
  }
  function Yg(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = Zt();
          e = Ua(n);
          var a = ja(t, e, n);
          a !== null && (Mt(a, t, n), Qr(a, t, n)), t = { cache: ju() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Vg(e, t, n) {
    var a = Zt();
    n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, po(e) ? vd(t, n) : (n = Eu(e, t, n, a), n !== null && (Mt(n, e, a), bd(n, t, a)));
  }
  function yd(e, t, n) {
    var a = Zt();
    Kr(e, t, n, a);
  }
  function Kr(e, t, n, a) {
    var l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (po(e)) vd(t, l);
    else {
      var i = e.alternate;
      if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
        try {
          var u = t.lastRenderedState, d = i(u, n);
          if (l.hasEagerState = !0, l.eagerState = d, Qt(d, u))
            return Xi(e, t, l, 0), Re === null && Qi(), !1;
        } catch {
        } finally {
        }
      if (n = Eu(e, t, l, a), n !== null)
        return Mt(n, e, a), bd(n, t, a), !0;
    }
    return !1;
  }
  function ss(e, t, n, a) {
    if (a = {
      lane: 2,
      revertLane: Ys(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, po(e)) {
      if (t) throw Error(c(479));
    } else
      t = Eu(
        e,
        n,
        a,
        2
      ), t !== null && Mt(t, e, 2);
  }
  function po(e) {
    var t = e.alternate;
    return e === re || t !== null && t === re;
  }
  function vd(e, t) {
    lr = ro = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function bd(e, t, n) {
    if ((n & 4194048) !== 0) {
      var a = t.lanes;
      a &= e.pendingLanes, n |= a, t.lanes = n, Yt(e, n);
    }
  }
  var Zr = {
    readContext: pt,
    use: uo,
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
  Zr.useEffectEvent = Ve;
  var Sd = {
    readContext: pt,
    use: uo,
    useCallback: function(e, t) {
      return kt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: pt,
    useEffect: ad,
    useImperativeHandle: function(e, t, n) {
      n = n != null ? n.concat([e]) : null, co(
        4194308,
        4,
        od.bind(null, t, e),
        n
      );
    },
    useLayoutEffect: function(e, t) {
      return co(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      co(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var n = kt();
      t = t === void 0 ? null : t;
      var a = e();
      if (wl) {
        Bt(!0);
        try {
          e();
        } finally {
          Bt(!1);
        }
      }
      return n.memoizedState = [a, t], a;
    },
    useReducer: function(e, t, n) {
      var a = kt();
      if (n !== void 0) {
        var l = n(t);
        if (wl) {
          Bt(!0);
          try {
            n(t);
          } finally {
            Bt(!1);
          }
        }
      } else l = t;
      return a.memoizedState = a.baseState = l, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: l
      }, a.queue = e, e = e.dispatch = Vg.bind(
        null,
        re,
        e
      ), [a.memoizedState, e];
    },
    useRef: function(e) {
      var t = kt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = ns(e);
      var t = e.queue, n = yd.bind(null, re, t);
      return t.dispatch = n, [e.memoizedState, n];
    },
    useDebugValue: rs,
    useDeferredValue: function(e, t) {
      var n = kt();
      return is(n, e, t);
    },
    useTransition: function() {
      var e = ns(!1);
      return e = dd.bind(
        null,
        re,
        e.queue,
        !0,
        !1
      ), kt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, n) {
      var a = re, l = kt();
      if (ye) {
        if (n === void 0)
          throw Error(c(407));
        n = n();
      } else {
        if (n = t(), Re === null)
          throw Error(c(349));
        (me & 127) !== 0 || Yf(a, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return l.queue = i, ad(Gf.bind(null, a, i, e), [
        e
      ]), a.flags |= 2048, ir(
        9,
        { destroy: void 0 },
        Vf.bind(
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
      var e = kt(), t = Re.identifierPrefix;
      if (ye) {
        var n = jn, a = Un;
        n = (a & ~(1 << 32 - rt(a) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = io++, 0 < n && (t += "H" + n.toString(32)), t += "_";
      } else
        n = Mg++, t = "_" + t + "r_" + n.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: us,
    useFormState: Wf,
    useActionState: Wf,
    useOptimistic: function(e) {
      var t = kt();
      t.memoizedState = t.baseState = e;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = n, t = ss.bind(
        null,
        re,
        !0,
        n
      ), n.dispatch = t, [e, t];
    },
    useMemoCache: Ju,
    useCacheRefresh: function() {
      return kt().memoizedState = Yg.bind(
        null,
        re
      );
    },
    useEffectEvent: function(e) {
      var t = kt(), n = { impl: e };
      return t.memoizedState = n, function() {
        if ((ke & 2) !== 0)
          throw Error(c(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, cs = {
    readContext: pt,
    use: uo,
    useCallback: sd,
    useContext: pt,
    useEffect: ls,
    useImperativeHandle: ud,
    useInsertionEffect: rd,
    useLayoutEffect: id,
    useMemo: cd,
    useReducer: so,
    useRef: nd,
    useState: function() {
      return so(ra);
    },
    useDebugValue: rs,
    useDeferredValue: function(e, t) {
      var n = Pe();
      return fd(
        n,
        Oe.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = so(ra)[0], t = Pe().memoizedState;
      return [
        typeof e == "boolean" ? e : Ir(e),
        t
      ];
    },
    useSyncExternalStore: Bf,
    useId: hd,
    useHostTransitionStatus: us,
    useFormState: Jf,
    useActionState: Jf,
    useOptimistic: function(e, t) {
      var n = Pe();
      return Xf(n, Oe, e, t);
    },
    useMemoCache: Ju,
    useCacheRefresh: gd
  };
  cs.useEffectEvent = ld;
  var wd = {
    readContext: pt,
    use: uo,
    useCallback: sd,
    useContext: pt,
    useEffect: ls,
    useImperativeHandle: ud,
    useInsertionEffect: rd,
    useLayoutEffect: id,
    useMemo: cd,
    useReducer: ts,
    useRef: nd,
    useState: function() {
      return ts(ra);
    },
    useDebugValue: rs,
    useDeferredValue: function(e, t) {
      var n = Pe();
      return Oe === null ? is(n, e, t) : fd(
        n,
        Oe.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = ts(ra)[0], t = Pe().memoizedState;
      return [
        typeof e == "boolean" ? e : Ir(e),
        t
      ];
    },
    useSyncExternalStore: Bf,
    useId: hd,
    useHostTransitionStatus: us,
    useFormState: td,
    useActionState: td,
    useOptimistic: function(e, t) {
      var n = Pe();
      return Oe !== null ? Xf(n, Oe, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
    },
    useMemoCache: Ju,
    useCacheRefresh: gd
  };
  wd.useEffectEvent = ld;
  function fs(e, t, n, a) {
    t = e.memoizedState, n = n(a, t), n = n == null ? t : M({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var ds = {
    enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var a = Zt(), l = Ua(a);
      l.payload = t, n != null && (l.callback = n), t = ja(e, l, a), t !== null && (Mt(t, e, a), Qr(t, e, a));
    },
    enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var a = Zt(), l = Ua(a);
      l.tag = 1, l.payload = t, n != null && (l.callback = n), t = ja(e, l, a), t !== null && (Mt(t, e, a), Qr(t, e, a));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = Zt(), a = Ua(n);
      a.tag = 2, t != null && (a.callback = t), t = ja(e, a, n), t !== null && (Mt(t, e, n), Qr(t, e, n));
    }
  };
  function Td(e, t, n, a, l, i, u) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, i, u) : t.prototype && t.prototype.isPureReactComponent ? !jr(n, a) || !jr(l, i) : !0;
  }
  function kd(e, t, n, a) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, a), t.state !== e && ds.enqueueReplaceState(t, t.state, null);
  }
  function Tl(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var a in t)
        a !== "ref" && (n[a] = t[a]);
    }
    if (e = e.defaultProps) {
      n === t && (n = M({}, n));
      for (var l in e)
        n[l] === void 0 && (n[l] = e[l]);
    }
    return n;
  }
  function xd(e) {
    Fi(e);
  }
  function Ad(e) {
    console.error(e);
  }
  function Ed(e) {
    Fi(e);
  }
  function mo(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function _d(e, t, n) {
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
  function ps(e, t, n) {
    return n = Ua(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      mo(e, t);
    }, n;
  }
  function Cd(e) {
    return e = Ua(e), e.tag = 3, e;
  }
  function Od(e, t, n, a) {
    var l = n.type.getDerivedStateFromError;
    if (typeof l == "function") {
      var i = a.value;
      e.payload = function() {
        return l(i);
      }, e.callback = function() {
        _d(t, n, a);
      };
    }
    var u = n.stateNode;
    u !== null && typeof u.componentDidCatch == "function" && (e.callback = function() {
      _d(t, n, a), typeof l != "function" && (Ga === null ? Ga = /* @__PURE__ */ new Set([this]) : Ga.add(this));
      var d = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: d !== null ? d : ""
      });
    });
  }
  function Gg(e, t, n, a, l) {
    if (n.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = n.alternate, t !== null && Wl(
        t,
        n,
        l,
        !0
      ), n = Pt.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
            return vn === null ? Eo() : n.alternate === null && Ge === 0 && (Ge = 3), n.flags &= -257, n.flags |= 65536, n.lanes = l, a === eo ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), Hs(e, a, l)), !1;
          case 22:
            return n.flags |= 65536, a === eo ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : n.add(a)), Hs(e, a, l)), !1;
        }
        throw Error(c(435, n.tag));
      }
      return Hs(e, a, l), Eo(), !1;
    }
    if (ye)
      return t = Pt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = l, a !== Ru && (e = Error(c(422), { cause: a }), Br(un(e, n)))) : (a !== Ru && (t = Error(c(423), {
        cause: a
      }), Br(
        un(t, n)
      )), e = e.current.alternate, e.flags |= 65536, l &= -l, e.lanes |= l, a = un(a, n), l = ps(
        e.stateNode,
        a,
        l
      ), Gu(e, l), Ge !== 4 && (Ge = 2)), !1;
    var i = Error(c(520), { cause: a });
    if (i = un(i, n), ri === null ? ri = [i] : ri.push(i), Ge !== 4 && (Ge = 2), t === null) return !0;
    a = un(a, n), n = t;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, e = l & -l, n.lanes |= e, e = ps(n.stateNode, a, e), Gu(n, e), !1;
        case 1:
          if (t = n.type, i = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (Ga === null || !Ga.has(i))))
            return n.flags |= 65536, l &= -l, n.lanes |= l, l = Cd(l), Od(
              l,
              e,
              n,
              a
            ), Gu(n, l), !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var ms = Error(c(461)), Je = !1;
  function mt(e, t, n, a) {
    t.child = e === null ? Df(t, null, n, a) : Sl(
      t,
      e.child,
      n,
      a
    );
  }
  function Nd(e, t, n, a, l) {
    n = n.render;
    var i = t.ref;
    if ("ref" in a) {
      var u = {};
      for (var d in a)
        d !== "ref" && (u[d] = a[d]);
    } else u = a;
    return gl(t), a = Iu(
      e,
      t,
      n,
      u,
      i,
      l
    ), d = Ku(), e !== null && !Je ? (Zu(e, t, l), ia(e, t, l)) : (ye && d && Nu(t), t.flags |= 1, mt(e, t, a, l), t.child);
  }
  function zd(e, t, n, a, l) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" && !_u(i) && i.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = i, Rd(
        e,
        t,
        i,
        a,
        l
      )) : (e = $i(
        n.type,
        null,
        a,
        t,
        t.mode,
        l
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (i = e.child, !Ts(e, l)) {
      var u = i.memoizedProps;
      if (n = n.compare, n = n !== null ? n : jr, n(u, a) && e.ref === t.ref)
        return ia(e, t, l);
    }
    return t.flags |= 1, e = ea(i, a), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Rd(e, t, n, a, l) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (jr(i, a) && e.ref === t.ref)
        if (Je = !1, t.pendingProps = a = i, Ts(e, l))
          (e.flags & 131072) !== 0 && (Je = !0);
        else
          return t.lanes = e.lanes, ia(e, t, l);
    }
    return hs(
      e,
      t,
      n,
      a,
      l
    );
  }
  function Dd(e, t, n, a) {
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
        return Ld(
          e,
          t,
          i,
          n,
          a
        );
      }
      if ((n & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Wi(
          t,
          i !== null ? i.cachePool : null
        ), i !== null ? Uf(t, i) : Qu(), jf(t);
      else
        return a = t.lanes = 536870912, Ld(
          e,
          t,
          i !== null ? i.baseLanes | n : n,
          n,
          a
        );
    } else
      i !== null ? (Wi(t, i.cachePool), Uf(t, i), qa(), t.memoizedState = null) : (e !== null && Wi(t, null), Qu(), qa());
    return mt(e, t, l, n), t.child;
  }
  function Wr(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Ld(e, t, n, a, l) {
    var i = qu();
    return i = i === null ? null : { parent: Ze._currentValue, pool: i }, t.memoizedState = {
      baseLanes: n,
      cachePool: i
    }, e !== null && Wi(t, null), Qu(), jf(t), e !== null && Wl(e, t, a, !0), t.childLanes = l, null;
  }
  function ho(e, t) {
    return t = yo(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Md(e, t, n) {
    return Sl(t, e.child, null, n), e = ho(t, t.pendingProps), e.flags |= 2, $t(t), t.memoizedState = null, e;
  }
  function Fg(e, t, n) {
    var a = t.pendingProps, l = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (ye) {
        if (a.mode === "hidden")
          return e = ho(t, a), t.lanes = 536870912, Wr(null, e);
        if (Pu(t), (e = Me) ? (e = Pp(
          e,
          fn
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: za !== null ? { id: Un, overflow: jn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = vf(e), n.return = t, t.child = n, dt = t, Me = null)) : e = null, e === null) throw Da(t);
        return t.lanes = 536870912, null;
      }
      return ho(t, a);
    }
    var i = e.memoizedState;
    if (i !== null) {
      var u = i.dehydrated;
      if (Pu(t), l)
        if (t.flags & 256)
          t.flags &= -257, t = Md(
            e,
            t,
            n
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(c(558));
      else if (Je || Wl(e, t, n, !1), l = (n & e.childLanes) !== 0, Je || l) {
        if (a = Re, a !== null && (u = Pn(a, n), u !== 0 && u !== i.retryLane))
          throw i.retryLane = u, dl(e, u), Mt(a, e, u), ms;
        Eo(), t = Md(
          e,
          t,
          n
        );
      } else
        e = i.treeContext, Me = dn(u.nextSibling), dt = t, ye = !0, Ra = null, fn = !1, e !== null && wf(t, e), t = ho(t, a), t.flags |= 4096;
      return t;
    }
    return e = ea(e.child, {
      mode: a.mode,
      children: a.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function go(e, t) {
    var n = t.ref;
    if (n === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object")
        throw Error(c(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function hs(e, t, n, a, l) {
    return gl(t), n = Iu(
      e,
      t,
      n,
      a,
      void 0,
      l
    ), a = Ku(), e !== null && !Je ? (Zu(e, t, l), ia(e, t, l)) : (ye && a && Nu(t), t.flags |= 1, mt(e, t, n, l), t.child);
  }
  function Ud(e, t, n, a, l, i) {
    return gl(t), t.updateQueue = null, n = qf(
      t,
      a,
      n,
      l
    ), Hf(e), a = Ku(), e !== null && !Je ? (Zu(e, t, i), ia(e, t, i)) : (ye && a && Nu(t), t.flags |= 1, mt(e, t, n, i), t.child);
  }
  function jd(e, t, n, a, l) {
    if (gl(t), t.stateNode === null) {
      var i = $l, u = n.contextType;
      typeof u == "object" && u !== null && (i = pt(u)), i = new n(a, i), t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = ds, t.stateNode = i, i._reactInternals = t, i = t.stateNode, i.props = a, i.state = t.memoizedState, i.refs = {}, Yu(t), u = n.contextType, i.context = typeof u == "object" && u !== null ? pt(u) : $l, i.state = t.memoizedState, u = n.getDerivedStateFromProps, typeof u == "function" && (fs(
        t,
        n,
        u,
        a
      ), i.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (u = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), u !== i.state && ds.enqueueReplaceState(i, i.state, null), Pr(t, a, i, l), Xr(), i.state = t.memoizedState), typeof i.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (e === null) {
      i = t.stateNode;
      var d = t.memoizedProps, g = Tl(n, d);
      i.props = g;
      var E = i.context, N = n.contextType;
      u = $l, typeof N == "object" && N !== null && (u = pt(N));
      var L = n.getDerivedStateFromProps;
      N = typeof L == "function" || typeof i.getSnapshotBeforeUpdate == "function", d = t.pendingProps !== d, N || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (d || E !== u) && kd(
        t,
        i,
        a,
        u
      ), Ma = !1;
      var _ = t.memoizedState;
      i.state = _, Pr(t, a, i, l), Xr(), E = t.memoizedState, d || _ !== E || Ma ? (typeof L == "function" && (fs(
        t,
        n,
        L,
        a
      ), E = t.memoizedState), (g = Ma || Td(
        t,
        n,
        g,
        a,
        _,
        E,
        u
      )) ? (N || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = E), i.props = a, i.state = E, i.context = u, a = g) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      i = t.stateNode, Vu(e, t), u = t.memoizedProps, N = Tl(n, u), i.props = N, L = t.pendingProps, _ = i.context, E = n.contextType, g = $l, typeof E == "object" && E !== null && (g = pt(E)), d = n.getDerivedStateFromProps, (E = typeof d == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== L || _ !== g) && kd(
        t,
        i,
        a,
        g
      ), Ma = !1, _ = t.memoizedState, i.state = _, Pr(t, a, i, l), Xr();
      var C = t.memoizedState;
      u !== L || _ !== C || Ma || e !== null && e.dependencies !== null && Ki(e.dependencies) ? (typeof d == "function" && (fs(
        t,
        n,
        d,
        a
      ), C = t.memoizedState), (N = Ma || Td(
        t,
        n,
        N,
        a,
        _,
        C,
        g
      ) || e !== null && e.dependencies !== null && Ki(e.dependencies)) ? (E || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(a, C, g), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(
        a,
        C,
        g
      )), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && _ === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && _ === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = C), i.props = a, i.state = C, i.context = g, a = N) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && _ === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && _ === e.memoizedState || (t.flags |= 1024), a = !1);
    }
    return i = a, go(e, t), a = (t.flags & 128) !== 0, i || a ? (i = t.stateNode, n = a && typeof n.getDerivedStateFromError != "function" ? null : i.render(), t.flags |= 1, e !== null && a ? (t.child = Sl(
      t,
      e.child,
      null,
      l
    ), t.child = Sl(
      t,
      null,
      n,
      l
    )) : mt(e, t, n, l), t.memoizedState = i.state, e = t.child) : e = ia(
      e,
      t,
      l
    ), e;
  }
  function Hd(e, t, n, a) {
    return ml(), t.flags |= 256, mt(e, t, n, a), t.child;
  }
  var gs = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function ys(e) {
    return { baseLanes: e, cachePool: _f() };
  }
  function vs(e, t, n) {
    return e = e !== null ? e.childLanes & ~n : 0, t && (e |= Kt), e;
  }
  function qd(e, t, n) {
    var a = t.pendingProps, l = !1, i = (t.flags & 128) !== 0, u;
    if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (Xe.current & 2) !== 0), u && (l = !0, t.flags &= -129), u = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (ye) {
        if (l ? Ha(t) : qa(), (e = Me) ? (e = Pp(
          e,
          fn
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: za !== null ? { id: Un, overflow: jn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = vf(e), n.return = t, t.child = n, dt = t, Me = null)) : e = null, e === null) throw Da(t);
        return ec(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var d = a.children;
      return a = a.fallback, l ? (qa(), l = t.mode, d = yo(
        { mode: "hidden", children: d },
        l
      ), a = pl(
        a,
        l,
        n,
        null
      ), d.return = t, a.return = t, d.sibling = a, t.child = d, a = t.child, a.memoizedState = ys(n), a.childLanes = vs(
        e,
        u,
        n
      ), t.memoizedState = gs, Wr(null, a)) : (Ha(t), bs(t, d));
    }
    var g = e.memoizedState;
    if (g !== null && (d = g.dehydrated, d !== null)) {
      if (i)
        t.flags & 256 ? (Ha(t), t.flags &= -257, t = Ss(
          e,
          t,
          n
        )) : t.memoizedState !== null ? (qa(), t.child = e.child, t.flags |= 128, t = null) : (qa(), d = a.fallback, l = t.mode, a = yo(
          { mode: "visible", children: a.children },
          l
        ), d = pl(
          d,
          l,
          n,
          null
        ), d.flags |= 2, a.return = t, d.return = t, a.sibling = d, t.child = a, Sl(
          t,
          e.child,
          null,
          n
        ), a = t.child, a.memoizedState = ys(n), a.childLanes = vs(
          e,
          u,
          n
        ), t.memoizedState = gs, t = Wr(null, a));
      else if (Ha(t), ec(d)) {
        if (u = d.nextSibling && d.nextSibling.dataset, u) var E = u.dgst;
        u = E, a = Error(c(419)), a.stack = "", a.digest = u, Br({ value: a, source: null, stack: null }), t = Ss(
          e,
          t,
          n
        );
      } else if (Je || Wl(e, t, n, !1), u = (n & e.childLanes) !== 0, Je || u) {
        if (u = Re, u !== null && (a = Pn(u, n), a !== 0 && a !== g.retryLane))
          throw g.retryLane = a, dl(e, a), Mt(u, e, a), ms;
        Js(d) || Eo(), t = Ss(
          e,
          t,
          n
        );
      } else
        Js(d) ? (t.flags |= 192, t.child = e.child, t = null) : (e = g.treeContext, Me = dn(
          d.nextSibling
        ), dt = t, ye = !0, Ra = null, fn = !1, e !== null && wf(t, e), t = bs(
          t,
          a.children
        ), t.flags |= 4096);
      return t;
    }
    return l ? (qa(), d = a.fallback, l = t.mode, g = e.child, E = g.sibling, a = ea(g, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = g.subtreeFlags & 65011712, E !== null ? d = ea(
      E,
      d
    ) : (d = pl(
      d,
      l,
      n,
      null
    ), d.flags |= 2), d.return = t, a.return = t, a.sibling = d, t.child = a, Wr(null, a), a = t.child, d = e.child.memoizedState, d === null ? d = ys(n) : (l = d.cachePool, l !== null ? (g = Ze._currentValue, l = l.parent !== g ? { parent: g, pool: g } : l) : l = _f(), d = {
      baseLanes: d.baseLanes | n,
      cachePool: l
    }), a.memoizedState = d, a.childLanes = vs(
      e,
      u,
      n
    ), t.memoizedState = gs, Wr(e.child, a)) : (Ha(t), n = e.child, e = n.sibling, n = ea(n, {
      mode: "visible",
      children: a.children
    }), n.return = t, n.sibling = null, e !== null && (u = t.deletions, u === null ? (t.deletions = [e], t.flags |= 16) : u.push(e)), t.child = n, t.memoizedState = null, n);
  }
  function bs(e, t) {
    return t = yo(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function yo(e, t) {
    return e = Xt(22, e, null, t), e.lanes = 0, e;
  }
  function Ss(e, t, n) {
    return Sl(t, e.child, null, n), e = bs(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Bd(e, t, n) {
    e.lanes |= t;
    var a = e.alternate;
    a !== null && (a.lanes |= t), Mu(e.return, t, n);
  }
  function ws(e, t, n, a, l, i) {
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
  function Yd(e, t, n) {
    var a = t.pendingProps, l = a.revealOrder, i = a.tail;
    a = a.children;
    var u = Xe.current, d = (u & 2) !== 0;
    if (d ? (u = u & 1 | 2, t.flags |= 128) : u &= 1, Z(Xe, u), mt(e, t, a, n), a = ye ? qr : 0, !d && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && Bd(e, n, t);
        else if (e.tag === 19)
          Bd(e, n, t);
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
          e = n.alternate, e !== null && lo(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), ws(
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
          if (e = l.alternate, e !== null && lo(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        ws(
          t,
          !0,
          n,
          null,
          i,
          a
        );
        break;
      case "together":
        ws(
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
  function ia(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Va |= t.lanes, (n & t.childLanes) === 0)
      if (e !== null) {
        if (Wl(
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
      for (e = t.child, n = ea(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        e = e.sibling, n = n.sibling = ea(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Ts(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Ki(e)));
  }
  function Qg(e, t, n) {
    switch (t.tag) {
      case 3:
        kn(t, t.stateNode.containerInfo), La(t, Ze, e.memoizedState.cache), ml();
        break;
      case 27:
      case 5:
        Ar(t);
        break;
      case 4:
        kn(t, t.stateNode.containerInfo);
        break;
      case 10:
        La(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, Pu(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (Ha(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? qd(e, t, n) : (Ha(t), e = ia(
            e,
            t,
            n
          ), e !== null ? e.sibling : null);
        Ha(t);
        break;
      case 19:
        var l = (e.flags & 128) !== 0;
        if (a = (n & t.childLanes) !== 0, a || (Wl(
          e,
          t,
          n,
          !1
        ), a = (n & t.childLanes) !== 0), l) {
          if (a)
            return Yd(
              e,
              t,
              n
            );
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), Z(Xe, Xe.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, Dd(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        La(t, Ze, e.memoizedState.cache);
    }
    return ia(e, t, n);
  }
  function Vd(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        Je = !0;
      else {
        if (!Ts(e, n) && (t.flags & 128) === 0)
          return Je = !1, Qg(
            e,
            t,
            n
          );
        Je = (e.flags & 131072) !== 0;
      }
    else
      Je = !1, ye && (t.flags & 1048576) !== 0 && Sf(t, qr, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (e = vl(t.elementType), t.type = e, typeof e == "function")
            _u(e) ? (a = Tl(e, a), t.tag = 1, t = jd(
              null,
              t,
              e,
              a,
              n
            )) : (t.tag = 0, t = hs(
              null,
              t,
              e,
              a,
              n
            ));
          else {
            if (e != null) {
              var l = e.$$typeof;
              if (l === le) {
                t.tag = 11, t = Nd(
                  null,
                  t,
                  e,
                  a,
                  n
                );
                break e;
              } else if (l === J) {
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
            throw t = Fe(e) || e, Error(c(306, t, ""));
          }
        }
        return t;
      case 0:
        return hs(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 1:
        return a = t.type, l = Tl(
          a,
          t.pendingProps
        ), jd(
          e,
          t,
          a,
          l,
          n
        );
      case 3:
        e: {
          if (kn(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(c(387));
          a = t.pendingProps;
          var i = t.memoizedState;
          l = i.element, Vu(e, t), Pr(t, a, null, n);
          var u = t.memoizedState;
          if (a = u.cache, La(t, Ze, a), a !== i.cache && Uu(
            t,
            [Ze],
            n,
            !0
          ), Xr(), a = u.element, i.isDehydrated)
            if (i = {
              element: a,
              isDehydrated: !1,
              cache: u.cache
            }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
              t = Hd(
                e,
                t,
                a,
                n
              );
              break e;
            } else if (a !== l) {
              l = un(
                Error(c(424)),
                t
              ), Br(l), t = Hd(
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
              for (Me = dn(e.firstChild), dt = t, ye = !0, Ra = null, fn = !0, n = Df(
                t,
                null,
                a,
                n
              ), t.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
            }
          else {
            if (ml(), a === l) {
              t = ia(
                e,
                t,
                n
              );
              break e;
            }
            mt(e, t, a, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return go(e, t), e === null ? (n = Jp(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = n : ye || (n = t.type, e = t.pendingProps, a = Do(
          lt.current
        ).createElement(n), a[Ie] = t, a[it] = e, ht(a, n, e), Ke(a), t.stateNode = a) : t.memoizedState = Jp(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return Ar(t), e === null && ye && (a = t.stateNode = Kp(
          t.type,
          t.pendingProps,
          lt.current
        ), dt = t, fn = !0, l = Me, Pa(t.type) ? (tc = l, Me = dn(a.firstChild)) : Me = l), mt(
          e,
          t,
          t.pendingProps.children,
          n
        ), go(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && ye && ((l = a = Me) && (a = wy(
          a,
          t.type,
          t.pendingProps,
          fn
        ), a !== null ? (t.stateNode = a, dt = t, Me = dn(a.firstChild), fn = !1, l = !0) : l = !1), l || Da(t)), Ar(t), l = t.type, i = t.pendingProps, u = e !== null ? e.memoizedProps : null, a = i.children, Ks(l, i) ? a = null : u !== null && Ks(l, u) && (t.flags |= 32), t.memoizedState !== null && (l = Iu(
          e,
          t,
          Ug,
          null,
          null,
          n
        ), pi._currentValue = l), go(e, t), mt(e, t, a, n), t.child;
      case 6:
        return e === null && ye && ((e = n = Me) && (n = Ty(
          n,
          t.pendingProps,
          fn
        ), n !== null ? (t.stateNode = n, dt = t, Me = null, e = !0) : e = !1), e || Da(t)), null;
      case 13:
        return qd(e, t, n);
      case 4:
        return kn(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, e === null ? t.child = Sl(
          t,
          null,
          a,
          n
        ) : mt(e, t, a, n), t.child;
      case 11:
        return Nd(
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
        return a = t.pendingProps, La(t, t.type, a.value), mt(e, t, a.children, n), t.child;
      case 9:
        return l = t.type._context, a = t.pendingProps.children, gl(t), l = pt(l), a = a(l), t.flags |= 1, mt(e, t, a, n), t.child;
      case 14:
        return zd(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 15:
        return Rd(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 19:
        return Yd(e, t, n);
      case 31:
        return Fg(e, t, n);
      case 22:
        return Dd(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        return gl(t), a = pt(Ze), e === null ? (l = qu(), l === null && (l = Re, i = ju(), l.pooledCache = i, i.refCount++, i !== null && (l.pooledCacheLanes |= n), l = i), t.memoizedState = { parent: a, cache: l }, Yu(t), La(t, Ze, l)) : ((e.lanes & n) !== 0 && (Vu(e, t), Pr(t, null, null, n), Xr()), l = e.memoizedState, i = t.memoizedState, l.parent !== a ? (l = { parent: a, cache: a }, t.memoizedState = l, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = l), La(t, Ze, a)) : (a = i.cache, La(t, Ze, a), a !== l.cache && Uu(
          t,
          [Ze],
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
    throw Error(c(156, t.tag));
  }
  function oa(e) {
    e.flags |= 4;
  }
  function ks(e, t, n, a, l) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (l & 335544128) === l)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (hp()) e.flags |= 8192;
        else
          throw bl = eo, Bu;
    } else e.flags &= -16777217;
  }
  function Gd(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !lm(t))
      if (hp()) e.flags |= 8192;
      else
        throw bl = eo, Bu;
  }
  function vo(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Er() : 536870912, e.lanes |= t, cr |= t);
  }
  function Jr(e, t) {
    if (!ye)
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
  function Ue(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, a = 0;
    if (t)
      for (var l = e.child; l !== null; )
        n |= l.lanes | l.childLanes, a |= l.subtreeFlags & 65011712, a |= l.flags & 65011712, l.return = e, l = l.sibling;
    else
      for (l = e.child; l !== null; )
        n |= l.lanes | l.childLanes, a |= l.subtreeFlags, a |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= a, e.childLanes = n, t;
  }
  function Xg(e, t, n) {
    var a = t.pendingProps;
    switch (zu(t), t.tag) {
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
        return n = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), aa(Ze), st(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (Zl(t) ? oa(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Du())), Ue(t), null;
      case 26:
        var l = t.type, i = t.memoizedState;
        return e === null ? (oa(t), i !== null ? (Ue(t), Gd(t, i)) : (Ue(t), ks(
          t,
          l,
          null,
          a,
          n
        ))) : i ? i !== e.memoizedState ? (oa(t), Ue(t), Gd(t, i)) : (Ue(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== a && oa(t), Ue(t), ks(
          t,
          l,
          e,
          a,
          n
        )), null;
      case 27:
        if (_l(t), n = lt.current, l = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== a && oa(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(c(166));
            return Ue(t), null;
          }
          e = be.current, Zl(t) ? Tf(t) : (e = Kp(l, a, n), t.stateNode = e, oa(t));
        }
        return Ue(t), null;
      case 5:
        if (_l(t), l = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== a && oa(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(c(166));
            return Ue(t), null;
          }
          if (i = be.current, Zl(t))
            Tf(t);
          else {
            var u = Do(
              lt.current
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
            i[Ie] = t, i[it] = a;
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
            e: switch (ht(i, l, a), l) {
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
            a && oa(t);
          }
        }
        return Ue(t), ks(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          n
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== a && oa(t);
        else {
          if (typeof a != "string" && t.stateNode === null)
            throw Error(c(166));
          if (e = lt.current, Zl(t)) {
            if (e = t.stateNode, n = t.memoizedProps, a = null, l = dt, l !== null)
              switch (l.tag) {
                case 27:
                case 5:
                  a = l.memoizedProps;
              }
            e[Ie] = t, e = !!(e.nodeValue === n || a !== null && a.suppressHydrationWarning === !0 || qp(e.nodeValue, n)), e || Da(t, !0);
          } else
            e = Do(e).createTextNode(
              a
            ), e[Ie] = t, t.stateNode = e;
        }
        return Ue(t), null;
      case 31:
        if (n = t.memoizedState, e === null || e.memoizedState !== null) {
          if (a = Zl(t), n !== null) {
            if (e === null) {
              if (!a) throw Error(c(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(557));
              e[Ie] = t;
            } else
              ml(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ue(t), e = !1;
          } else
            n = Du(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
          if (!e)
            return t.flags & 256 ? ($t(t), t) : ($t(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(c(558));
        }
        return Ue(t), null;
      case 13:
        if (a = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (l = Zl(t), a !== null && a.dehydrated !== null) {
            if (e === null) {
              if (!l) throw Error(c(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(c(317));
              l[Ie] = t;
            } else
              ml(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ue(t), l = !1;
          } else
            l = Du(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l), l = !0;
          if (!l)
            return t.flags & 256 ? ($t(t), t) : ($t(t), null);
        }
        return $t(t), (t.flags & 128) !== 0 ? (t.lanes = n, t) : (n = a !== null, e = e !== null && e.memoizedState !== null, n && (a = t.child, l = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (l = a.alternate.memoizedState.cachePool.pool), i = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (i = a.memoizedState.cachePool.pool), i !== l && (a.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), vo(t, t.updateQueue), Ue(t), null);
      case 4:
        return st(), e === null && Qs(t.stateNode.containerInfo), Ue(t), null;
      case 10:
        return aa(t.type), Ue(t), null;
      case 19:
        if (se(Xe), a = t.memoizedState, a === null) return Ue(t), null;
        if (l = (t.flags & 128) !== 0, i = a.rendering, i === null)
          if (l) Jr(a, !1);
          else {
            if (Ge !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (i = lo(e), i !== null) {
                  for (t.flags |= 128, Jr(a, !1), e = i.updateQueue, t.updateQueue = e, vo(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; )
                    yf(n, e), n = n.sibling;
                  return Z(
                    Xe,
                    Xe.current & 1 | 2
                  ), ye && ta(t, a.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            a.tail !== null && ct() > ko && (t.flags |= 128, l = !0, Jr(a, !1), t.lanes = 4194304);
          }
        else {
          if (!l)
            if (e = lo(i), e !== null) {
              if (t.flags |= 128, l = !0, e = e.updateQueue, t.updateQueue = e, vo(t, e), Jr(a, !0), a.tail === null && a.tailMode === "hidden" && !i.alternate && !ye)
                return Ue(t), null;
            } else
              2 * ct() - a.renderingStartTime > ko && n !== 536870912 && (t.flags |= 128, l = !0, Jr(a, !1), t.lanes = 4194304);
          a.isBackwards ? (i.sibling = t.child, t.child = i) : (e = a.last, e !== null ? e.sibling = i : t.child = i, a.last = i);
        }
        return a.tail !== null ? (e = a.tail, a.rendering = e, a.tail = e.sibling, a.renderingStartTime = ct(), e.sibling = null, n = Xe.current, Z(
          Xe,
          l ? n & 1 | 2 : n & 1
        ), ye && ta(t, a.treeForkCount), e) : (Ue(t), null);
      case 22:
      case 23:
        return $t(t), Xu(), a = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (Ue(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ue(t), n = t.updateQueue, n !== null && vo(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== n && (t.flags |= 2048), e !== null && se(yl), null;
      case 24:
        return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), aa(Ze), Ue(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(c(156, t.tag));
  }
  function Pg(e, t) {
    switch (zu(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return aa(Ze), st(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return _l(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if ($t(t), t.alternate === null)
            throw Error(c(340));
          ml();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if ($t(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(c(340));
          ml();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return se(Xe), null;
      case 4:
        return st(), null;
      case 10:
        return aa(t.type), null;
      case 22:
      case 23:
        return $t(t), Xu(), e !== null && se(yl), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return aa(Ze), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Fd(e, t) {
    switch (zu(t), t.tag) {
      case 3:
        aa(Ze), st();
        break;
      case 26:
      case 27:
      case 5:
        _l(t);
        break;
      case 4:
        st();
        break;
      case 31:
        t.memoizedState !== null && $t(t);
        break;
      case 13:
        $t(t);
        break;
      case 19:
        se(Xe);
        break;
      case 10:
        aa(t.type);
        break;
      case 22:
      case 23:
        $t(t), Xu(), e !== null && se(yl);
        break;
      case 24:
        aa(Ze);
    }
  }
  function ei(e, t) {
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
  function Ba(e, t, n) {
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
              var g = n, E = d;
              try {
                E();
              } catch (N) {
                _e(
                  l,
                  g,
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
  function Qd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        Mf(t, n);
      } catch (a) {
        _e(e, e.return, a);
      }
    }
  }
  function Xd(e, t, n) {
    n.props = Tl(
      e.type,
      e.memoizedProps
    ), n.state = e.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (a) {
      _e(e, t, a);
    }
  }
  function ti(e, t) {
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
  function Hn(e, t) {
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
  function Pd(e) {
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
  function xs(e, t, n) {
    try {
      var a = e.stateNode;
      hy(a, e.type, n, t), a[it] = t;
    } catch (l) {
      _e(e, e.return, l);
    }
  }
  function $d(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Pa(e.type) || e.tag === 4;
  }
  function As(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || $d(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Pa(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Es(e, t, n) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Gt));
    else if (a !== 4 && (a === 27 && Pa(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null))
      for (Es(e, t, n), e = e.sibling; e !== null; )
        Es(e, t, n), e = e.sibling;
  }
  function bo(e, t, n) {
    var a = e.tag;
    if (a === 5 || a === 6)
      e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (a !== 4 && (a === 27 && Pa(e.type) && (n = e.stateNode), e = e.child, e !== null))
      for (bo(e, t, n), e = e.sibling; e !== null; )
        bo(e, t, n), e = e.sibling;
  }
  function Id(e) {
    var t = e.stateNode, n = e.memoizedProps;
    try {
      for (var a = e.type, l = t.attributes; l.length; )
        t.removeAttributeNode(l[0]);
      ht(t, a, n), t[Ie] = e, t[it] = n;
    } catch (i) {
      _e(e, e.return, i);
    }
  }
  var ua = !1, et = !1, _s = !1, Kd = typeof WeakSet == "function" ? WeakSet : Set, ot = null;
  function $g(e, t) {
    if (e = e.containerInfo, $s = Bo, e = uf(e), Su(e)) {
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
            var u = 0, d = -1, g = -1, E = 0, N = 0, L = e, _ = null;
            t: for (; ; ) {
              for (var C; L !== n || l !== 0 && L.nodeType !== 3 || (d = u + l), L !== i || a !== 0 && L.nodeType !== 3 || (g = u + a), L.nodeType === 3 && (u += L.nodeValue.length), (C = L.firstChild) !== null; )
                _ = L, L = C;
              for (; ; ) {
                if (L === e) break t;
                if (_ === n && ++E === l && (d = u), _ === i && ++N === a && (g = u), (C = L.nextSibling) !== null) break;
                L = _, _ = L.parentNode;
              }
              L = C;
            }
            n = d === -1 || g === -1 ? null : { start: d, end: g };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Is = { focusedElem: e, selectionRange: n }, Bo = !1, ot = t; ot !== null; )
      if (t = ot, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, ot = e;
      else
        for (; ot !== null; ) {
          switch (t = ot, i = t.alternate, e = t.flags, t.tag) {
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
                  var Q = Tl(
                    n.type,
                    l
                  );
                  e = a.getSnapshotBeforeUpdate(
                    Q,
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
                  Ws(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Ws(e);
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
            e.return = t.return, ot = e;
            break;
          }
          ot = t.return;
        }
  }
  function Zd(e, t, n) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        ca(e, n), a & 4 && ei(5, n);
        break;
      case 1:
        if (ca(e, n), a & 4)
          if (e = n.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (u) {
              _e(n, n.return, u);
            }
          else {
            var l = Tl(
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
        a & 64 && Qd(n), a & 512 && ti(n, n.return);
        break;
      case 3:
        if (ca(e, n), a & 64 && (e = n.updateQueue, e !== null)) {
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
            Mf(e, t);
          } catch (u) {
            _e(n, n.return, u);
          }
        }
        break;
      case 27:
        t === null && a & 4 && Id(n);
      case 26:
      case 5:
        ca(e, n), t === null && a & 4 && Pd(n), a & 512 && ti(n, n.return);
        break;
      case 12:
        ca(e, n);
        break;
      case 31:
        ca(e, n), a & 4 && ep(e, n);
        break;
      case 13:
        ca(e, n), a & 4 && tp(e, n), a & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = ay.bind(
          null,
          n
        ), ky(e, n))));
        break;
      case 22:
        if (a = n.memoizedState !== null || ua, !a) {
          t = t !== null && t.memoizedState !== null || et, l = ua;
          var i = et;
          ua = a, (et = t) && !i ? fa(
            e,
            n,
            (n.subtreeFlags & 8772) !== 0
          ) : ca(e, n), ua = l, et = i;
        }
        break;
      case 30:
        break;
      default:
        ca(e, n);
    }
  }
  function Wd(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Wd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && Cr(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var qe = null, zt = !1;
  function sa(e, t, n) {
    for (n = n.child; n !== null; )
      Jd(e, t, n), n = n.sibling;
  }
  function Jd(e, t, n) {
    if ($e && typeof $e.onCommitFiberUnmount == "function")
      try {
        $e.onCommitFiberUnmount(Xn, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        et || Hn(n, t), sa(
          e,
          t,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        et || Hn(n, t);
        var a = qe, l = zt;
        Pa(n.type) && (qe = n.stateNode, zt = !1), sa(
          e,
          t,
          n
        ), ci(n.stateNode), qe = a, zt = l;
        break;
      case 5:
        et || Hn(n, t);
      case 6:
        if (a = qe, l = zt, qe = null, sa(
          e,
          t,
          n
        ), qe = a, zt = l, qe !== null)
          if (zt)
            try {
              (qe.nodeType === 9 ? qe.body : qe.nodeName === "HTML" ? qe.ownerDocument.body : qe).removeChild(n.stateNode);
            } catch (i) {
              _e(
                n,
                t,
                i
              );
            }
          else
            try {
              qe.removeChild(n.stateNode);
            } catch (i) {
              _e(
                n,
                t,
                i
              );
            }
        break;
      case 18:
        qe !== null && (zt ? (e = qe, Qp(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          n.stateNode
        ), vr(e)) : Qp(qe, n.stateNode));
        break;
      case 4:
        a = qe, l = zt, qe = n.stateNode.containerInfo, zt = !0, sa(
          e,
          t,
          n
        ), qe = a, zt = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Ba(2, n, t), et || Ba(4, n, t), sa(
          e,
          t,
          n
        );
        break;
      case 1:
        et || (Hn(n, t), a = n.stateNode, typeof a.componentWillUnmount == "function" && Xd(
          n,
          t,
          a
        )), sa(
          e,
          t,
          n
        );
        break;
      case 21:
        sa(
          e,
          t,
          n
        );
        break;
      case 22:
        et = (a = et) || n.memoizedState !== null, sa(
          e,
          t,
          n
        ), et = a;
        break;
      default:
        sa(
          e,
          t,
          n
        );
    }
  }
  function ep(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        vr(e);
      } catch (n) {
        _e(t, t.return, n);
      }
    }
  }
  function tp(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        vr(e);
      } catch (n) {
        _e(t, t.return, n);
      }
  }
  function Ig(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Kd()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Kd()), t;
      default:
        throw Error(c(435, e.tag));
    }
  }
  function So(e, t) {
    var n = Ig(e);
    t.forEach(function(a) {
      if (!n.has(a)) {
        n.add(a);
        var l = ly.bind(null, e, a);
        a.then(l, l);
      }
    });
  }
  function Rt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var l = n[a], i = e, u = t, d = u;
        e: for (; d !== null; ) {
          switch (d.tag) {
            case 27:
              if (Pa(d.type)) {
                qe = d.stateNode, zt = !1;
                break e;
              }
              break;
            case 5:
              qe = d.stateNode, zt = !1;
              break e;
            case 3:
            case 4:
              qe = d.stateNode.containerInfo, zt = !0;
              break e;
          }
          d = d.return;
        }
        if (qe === null) throw Error(c(160));
        Jd(i, u, l), qe = null, zt = !1, i = l.alternate, i !== null && (i.return = null), l.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        np(t, e), t = t.sibling;
  }
  var _n = null;
  function np(e, t) {
    var n = e.alternate, a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Rt(t, e), Dt(e), a & 4 && (Ba(3, e, e.return), ei(3, e), Ba(5, e, e.return));
        break;
      case 1:
        Rt(t, e), Dt(e), a & 512 && (et || n === null || Hn(n, n.return)), a & 64 && ua && (e = e.updateQueue, e !== null && (a = e.callbacks, a !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? a : n.concat(a))));
        break;
      case 26:
        var l = _n;
        if (Rt(t, e), Dt(e), a & 512 && (et || n === null || Hn(n, n.return)), a & 4) {
          var i = n !== null ? n.memoizedState : null;
          if (a = e.memoizedState, n === null)
            if (a === null)
              if (e.stateNode === null) {
                e: {
                  a = e.type, n = e.memoizedProps, l = l.ownerDocument || l;
                  t: switch (a) {
                    case "title":
                      i = l.getElementsByTagName("title")[0], (!i || i[rn] || i[Ie] || i.namespaceURI === "http://www.w3.org/2000/svg" || i.hasAttribute("itemprop")) && (i = l.createElement(a), l.head.insertBefore(
                        i,
                        l.querySelector("head > title")
                      )), ht(i, a, n), i[Ie] = e, Ke(i), a = i;
                      break e;
                    case "link":
                      var u = nm(
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
                      i = l.createElement(a), ht(i, a, n), l.head.appendChild(i);
                      break;
                    case "meta":
                      if (u = nm(
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
                      i = l.createElement(a), ht(i, a, n), l.head.appendChild(i);
                      break;
                    default:
                      throw Error(c(468, a));
                  }
                  i[Ie] = e, Ke(i), a = i;
                }
                e.stateNode = a;
              } else
                am(
                  l,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = tm(
                l,
                a,
                e.memoizedProps
              );
          else
            i !== a ? (i === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : i.count--, a === null ? am(
              l,
              e.type,
              e.stateNode
            ) : tm(
              l,
              a,
              e.memoizedProps
            )) : a === null && e.stateNode !== null && xs(
              e,
              e.memoizedProps,
              n.memoizedProps
            );
        }
        break;
      case 27:
        Rt(t, e), Dt(e), a & 512 && (et || n === null || Hn(n, n.return)), n !== null && a & 4 && xs(
          e,
          e.memoizedProps,
          n.memoizedProps
        );
        break;
      case 5:
        if (Rt(t, e), Dt(e), a & 512 && (et || n === null || Hn(n, n.return)), e.flags & 32) {
          l = e.stateNode;
          try {
            Tt(l, "");
          } catch (Q) {
            _e(e, e.return, Q);
          }
        }
        a & 4 && e.stateNode != null && (l = e.memoizedProps, xs(
          e,
          l,
          n !== null ? n.memoizedProps : l
        )), a & 1024 && (_s = !0);
        break;
      case 6:
        if (Rt(t, e), Dt(e), a & 4) {
          if (e.stateNode === null)
            throw Error(c(162));
          a = e.memoizedProps, n = e.stateNode;
          try {
            n.nodeValue = a;
          } catch (Q) {
            _e(e, e.return, Q);
          }
        }
        break;
      case 3:
        if (Uo = null, l = _n, _n = Lo(t.containerInfo), Rt(t, e), _n = l, Dt(e), a & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            vr(t.containerInfo);
          } catch (Q) {
            _e(e, e.return, Q);
          }
        _s && (_s = !1, ap(e));
        break;
      case 4:
        a = _n, _n = Lo(
          e.stateNode.containerInfo
        ), Rt(t, e), Dt(e), _n = a;
        break;
      case 12:
        Rt(t, e), Dt(e);
        break;
      case 31:
        Rt(t, e), Dt(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, So(e, a)));
        break;
      case 13:
        Rt(t, e), Dt(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (To = ct()), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, So(e, a)));
        break;
      case 22:
        l = e.memoizedState !== null;
        var g = n !== null && n.memoizedState !== null, E = ua, N = et;
        if (ua = E || l, et = N || g, Rt(t, e), et = N, ua = E, Dt(e), a & 8192)
          e: for (t = e.stateNode, t._visibility = l ? t._visibility & -2 : t._visibility | 1, l && (n === null || g || ua || et || kl(e)), n = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                g = n = t;
                try {
                  if (i = g.stateNode, l)
                    u = i.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none";
                  else {
                    d = g.stateNode;
                    var L = g.memoizedProps.style, _ = L != null && L.hasOwnProperty("display") ? L.display : null;
                    d.style.display = _ == null || typeof _ == "boolean" ? "" : ("" + _).trim();
                  }
                } catch (Q) {
                  _e(g, g.return, Q);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                g = t;
                try {
                  g.stateNode.nodeValue = l ? "" : g.memoizedProps;
                } catch (Q) {
                  _e(g, g.return, Q);
                }
              }
            } else if (t.tag === 18) {
              if (n === null) {
                g = t;
                try {
                  var C = g.stateNode;
                  l ? Xp(C, !0) : Xp(g.stateNode, !1);
                } catch (Q) {
                  _e(g, g.return, Q);
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
        a & 4 && (a = e.updateQueue, a !== null && (n = a.retryQueue, n !== null && (a.retryQueue = null, So(e, n))));
        break;
      case 19:
        Rt(t, e), Dt(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, So(e, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Rt(t, e), Dt(e);
    }
  }
  function Dt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, a = e.return; a !== null; ) {
          if ($d(a)) {
            n = a;
            break;
          }
          a = a.return;
        }
        if (n == null) throw Error(c(160));
        switch (n.tag) {
          case 27:
            var l = n.stateNode, i = As(e);
            bo(e, i, l);
            break;
          case 5:
            var u = n.stateNode;
            n.flags & 32 && (Tt(u, ""), n.flags &= -33);
            var d = As(e);
            bo(e, d, u);
            break;
          case 3:
          case 4:
            var g = n.stateNode.containerInfo, E = As(e);
            Es(
              e,
              E,
              g
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
  function ap(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        ap(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function ca(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Zd(e, t.alternate, t), t = t.sibling;
  }
  function kl(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ba(4, t, t.return), kl(t);
          break;
        case 1:
          Hn(t, t.return);
          var n = t.stateNode;
          typeof n.componentWillUnmount == "function" && Xd(
            t,
            t.return,
            n
          ), kl(t);
          break;
        case 27:
          ci(t.stateNode);
        case 26:
        case 5:
          Hn(t, t.return), kl(t);
          break;
        case 22:
          t.memoizedState === null && kl(t);
          break;
        case 30:
          kl(t);
          break;
        default:
          kl(t);
      }
      e = e.sibling;
    }
  }
  function fa(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate, l = e, i = t, u = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          fa(
            l,
            i,
            n
          ), ei(4, i);
          break;
        case 1:
          if (fa(
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
              var g = l.shared.hiddenCallbacks;
              if (g !== null)
                for (l.shared.hiddenCallbacks = null, l = 0; l < g.length; l++)
                  Lf(g[l], d);
            } catch (E) {
              _e(a, a.return, E);
            }
          }
          n && u & 64 && Qd(i), ti(i, i.return);
          break;
        case 27:
          Id(i);
        case 26:
        case 5:
          fa(
            l,
            i,
            n
          ), n && a === null && u & 4 && Pd(i), ti(i, i.return);
          break;
        case 12:
          fa(
            l,
            i,
            n
          );
          break;
        case 31:
          fa(
            l,
            i,
            n
          ), n && u & 4 && ep(l, i);
          break;
        case 13:
          fa(
            l,
            i,
            n
          ), n && u & 4 && tp(l, i);
          break;
        case 22:
          i.memoizedState === null && fa(
            l,
            i,
            n
          ), ti(i, i.return);
          break;
        case 30:
          break;
        default:
          fa(
            l,
            i,
            n
          );
      }
      t = t.sibling;
    }
  }
  function Cs(e, t) {
    var n = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && Yr(n));
  }
  function Os(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Yr(e));
  }
  function Cn(e, t, n, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        lp(
          e,
          t,
          n,
          a
        ), t = t.sibling;
  }
  function lp(e, t, n, a) {
    var l = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Cn(
          e,
          t,
          n,
          a
        ), l & 2048 && ei(9, t);
        break;
      case 1:
        Cn(
          e,
          t,
          n,
          a
        );
        break;
      case 3:
        Cn(
          e,
          t,
          n,
          a
        ), l & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Yr(e)));
        break;
      case 12:
        if (l & 2048) {
          Cn(
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
          } catch (g) {
            _e(t, t.return, g);
          }
        } else
          Cn(
            e,
            t,
            n,
            a
          );
        break;
      case 31:
        Cn(
          e,
          t,
          n,
          a
        );
        break;
      case 13:
        Cn(
          e,
          t,
          n,
          a
        );
        break;
      case 23:
        break;
      case 22:
        i = t.stateNode, u = t.alternate, t.memoizedState !== null ? i._visibility & 2 ? Cn(
          e,
          t,
          n,
          a
        ) : ni(e, t) : i._visibility & 2 ? Cn(
          e,
          t,
          n,
          a
        ) : (i._visibility |= 2, or(
          e,
          t,
          n,
          a,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), l & 2048 && Cs(u, t);
        break;
      case 24:
        Cn(
          e,
          t,
          n,
          a
        ), l & 2048 && Os(t.alternate, t);
        break;
      default:
        Cn(
          e,
          t,
          n,
          a
        );
    }
  }
  function or(e, t, n, a, l) {
    for (l = l && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var i = e, u = t, d = n, g = a, E = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          or(
            i,
            u,
            d,
            g,
            l
          ), ei(8, u);
          break;
        case 23:
          break;
        case 22:
          var N = u.stateNode;
          u.memoizedState !== null ? N._visibility & 2 ? or(
            i,
            u,
            d,
            g,
            l
          ) : ni(
            i,
            u
          ) : (N._visibility |= 2, or(
            i,
            u,
            d,
            g,
            l
          )), l && E & 2048 && Cs(
            u.alternate,
            u
          );
          break;
        case 24:
          or(
            i,
            u,
            d,
            g,
            l
          ), l && E & 2048 && Os(u.alternate, u);
          break;
        default:
          or(
            i,
            u,
            d,
            g,
            l
          );
      }
      t = t.sibling;
    }
  }
  function ni(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e, a = t, l = a.flags;
        switch (a.tag) {
          case 22:
            ni(n, a), l & 2048 && Cs(
              a.alternate,
              a
            );
            break;
          case 24:
            ni(n, a), l & 2048 && Os(a.alternate, a);
            break;
          default:
            ni(n, a);
        }
        t = t.sibling;
      }
  }
  var ai = 8192;
  function ur(e, t, n) {
    if (e.subtreeFlags & ai)
      for (e = e.child; e !== null; )
        rp(
          e,
          t,
          n
        ), e = e.sibling;
  }
  function rp(e, t, n) {
    switch (e.tag) {
      case 26:
        ur(
          e,
          t,
          n
        ), e.flags & ai && e.memoizedState !== null && My(
          n,
          _n,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        ur(
          e,
          t,
          n
        );
        break;
      case 3:
      case 4:
        var a = _n;
        _n = Lo(e.stateNode.containerInfo), ur(
          e,
          t,
          n
        ), _n = a;
        break;
      case 22:
        e.memoizedState === null && (a = e.alternate, a !== null && a.memoizedState !== null ? (a = ai, ai = 16777216, ur(
          e,
          t,
          n
        ), ai = a) : ur(
          e,
          t,
          n
        ));
        break;
      default:
        ur(
          e,
          t,
          n
        );
    }
  }
  function ip(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function li(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          ot = a, up(
            a,
            e
          );
        }
      ip(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        op(e), e = e.sibling;
  }
  function op(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        li(e), e.flags & 2048 && Ba(9, e, e.return);
        break;
      case 3:
        li(e);
        break;
      case 12:
        li(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, wo(e)) : li(e);
        break;
      default:
        li(e);
    }
  }
  function wo(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          ot = a, up(
            a,
            e
          );
        }
      ip(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          Ba(8, t, t.return), wo(t);
          break;
        case 22:
          n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, wo(t));
          break;
        default:
          wo(t);
      }
      e = e.sibling;
    }
  }
  function up(e, t) {
    for (; ot !== null; ) {
      var n = ot;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Ba(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var a = n.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Yr(n.memoizedState.cache);
      }
      if (a = n.child, a !== null) a.return = n, ot = a;
      else
        e: for (n = e; ot !== null; ) {
          a = ot;
          var l = a.sibling, i = a.return;
          if (Wd(a), a === n) {
            ot = null;
            break e;
          }
          if (l !== null) {
            l.return = i, ot = l;
            break e;
          }
          ot = i;
        }
    }
  }
  var Kg = {
    getCacheForType: function(e) {
      var t = pt(Ze), n = t.data.get(e);
      return n === void 0 && (n = e(), t.data.set(e, n)), n;
    },
    cacheSignal: function() {
      return pt(Ze).controller.signal;
    }
  }, Zg = typeof WeakMap == "function" ? WeakMap : Map, ke = 0, Re = null, de = null, me = 0, Ee = 0, It = null, Ya = !1, sr = !1, Ns = !1, da = 0, Ge = 0, Va = 0, xl = 0, zs = 0, Kt = 0, cr = 0, ri = null, Lt = null, Rs = !1, To = 0, sp = 0, ko = 1 / 0, xo = null, Ga = null, at = 0, Fa = null, fr = null, pa = 0, Ds = 0, Ls = null, cp = null, ii = 0, Ms = null;
  function Zt() {
    return (ke & 2) !== 0 && me !== 0 ? me & -me : U.T !== null ? Ys() : Ri();
  }
  function fp() {
    if (Kt === 0)
      if ((me & 536870912) === 0 || ye) {
        var e = wa;
        wa <<= 1, (wa & 3932160) === 0 && (wa = 262144), Kt = e;
      } else Kt = 536870912;
    return e = Pt.current, e !== null && (e.flags |= 32), Kt;
  }
  function Mt(e, t, n) {
    (e === Re && (Ee === 2 || Ee === 9) || e.cancelPendingCommit !== null) && (dr(e, 0), Qa(
      e,
      me,
      Kt,
      !1
    )), ka(e, n), ((ke & 2) === 0 || e !== Re) && (e === Re && ((ke & 2) === 0 && (xl |= n), Ge === 4 && Qa(
      e,
      me,
      Kt,
      !1
    )), qn(e));
  }
  function dp(e, t, n) {
    if ((ke & 6) !== 0) throw Error(c(327));
    var a = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Ta(e, t), l = a ? ey(e, t) : js(e, t, !0), i = a;
    do {
      if (l === 0) {
        sr && !a && Qa(e, t, 0, !1);
        break;
      } else {
        if (n = e.current.alternate, i && !Wg(n)) {
          l = js(e, t, !1), i = !1;
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
              l = ri;
              var g = d.current.memoizedState.isDehydrated;
              if (g && (dr(d, u).flags |= 256), u = js(
                d,
                u,
                !1
              ), u !== 2) {
                if (Ns && !g) {
                  d.errorRecoveryDisabledLanes |= i, xl |= i, l = 4;
                  break e;
                }
                i = Lt, Lt = l, i !== null && (Lt === null ? Lt = i : Lt.push.apply(
                  Lt,
                  i
                ));
              }
              l = u;
            }
            if (i = !1, l !== 2) continue;
          }
        }
        if (l === 1) {
          dr(e, 0), Qa(e, t, 0, !0);
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
              Qa(
                a,
                t,
                Kt,
                !Ya
              );
              break e;
            case 2:
              Lt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(c(329));
          }
          if ((t & 62914560) === t && (l = To + 300 - ct(), 10 < l)) {
            if (Qa(
              a,
              t,
              Kt,
              !Ya
            ), an(a, 0, !0) !== 0) break e;
            pa = t, a.timeoutHandle = Gp(
              pp.bind(
                null,
                a,
                n,
                Lt,
                xo,
                Rs,
                t,
                Kt,
                xl,
                cr,
                Ya,
                i,
                "Throttled",
                -0,
                0
              ),
              l
            );
            break e;
          }
          pp(
            a,
            n,
            Lt,
            xo,
            Rs,
            t,
            Kt,
            xl,
            cr,
            Ya,
            i,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    qn(e);
  }
  function pp(e, t, n, a, l, i, u, d, g, E, N, L, _, C) {
    if (e.timeoutHandle = -1, L = t.subtreeFlags, L & 8192 || (L & 16785408) === 16785408) {
      L = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Gt
      }, rp(
        t,
        i,
        L
      );
      var Q = (i & 62914560) === i ? To - ct() : (i & 4194048) === i ? sp - ct() : 0;
      if (Q = Uy(
        L,
        Q
      ), Q !== null) {
        pa = i, e.cancelPendingCommit = Q(
          wp.bind(
            null,
            e,
            t,
            i,
            n,
            a,
            l,
            u,
            d,
            g,
            N,
            L,
            null,
            _,
            C
          )
        ), Qa(e, i, u, !E);
        return;
      }
    }
    wp(
      e,
      t,
      i,
      n,
      a,
      l,
      u,
      d,
      g
    );
  }
  function Wg(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var a = 0; a < n.length; a++) {
          var l = n[a], i = l.getSnapshot;
          l = l.value;
          try {
            if (!Qt(i(), l)) return !1;
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
  function Qa(e, t, n, a) {
    t &= ~zs, t &= ~xl, e.suspendedLanes |= t, e.pingedLanes &= ~t, a && (e.warmLanes |= t), a = e.expirationTimes;
    for (var l = t; 0 < l; ) {
      var i = 31 - rt(l), u = 1 << i;
      a[i] = -1, l &= ~u;
    }
    n !== 0 && rl(e, n, t);
  }
  function Ao() {
    return (ke & 6) === 0 ? (oi(0), !1) : !0;
  }
  function Us() {
    if (de !== null) {
      if (Ee === 0)
        var e = de.return;
      else
        e = de, na = hl = null, Wu(e), nr = null, Gr = 0, e = de;
      for (; e !== null; )
        Fd(e.alternate, e), e = e.return;
      de = null;
    }
  }
  function dr(e, t) {
    var n = e.timeoutHandle;
    n !== -1 && (e.timeoutHandle = -1, vy(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), pa = 0, Us(), Re = e, de = n = ea(e.current, null), me = t, Ee = 0, It = null, Ya = !1, sr = Ta(e, t), Ns = !1, cr = Kt = zs = xl = Va = Ge = 0, Lt = ri = null, Rs = !1, (t & 8) !== 0 && (t |= t & 32);
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var l = 31 - rt(a), i = 1 << l;
        t |= e[l], a &= ~i;
      }
    return da = t, Qi(), n;
  }
  function mp(e, t) {
    re = null, U.H = Zr, t === tr || t === Ji ? (t = Nf(), Ee = 3) : t === Bu ? (t = Nf(), Ee = 4) : Ee = t === ms ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, It = t, de === null && (Ge = 1, mo(
      e,
      un(t, e.current)
    ));
  }
  function hp() {
    var e = Pt.current;
    return e === null ? !0 : (me & 4194048) === me ? vn === null : (me & 62914560) === me || (me & 536870912) !== 0 ? e === vn : !1;
  }
  function gp() {
    var e = U.H;
    return U.H = Zr, e === null ? Zr : e;
  }
  function yp() {
    var e = U.A;
    return U.A = Kg, e;
  }
  function Eo() {
    Ge = 4, Ya || (me & 4194048) !== me && Pt.current !== null || (sr = !0), (Va & 134217727) === 0 && (xl & 134217727) === 0 || Re === null || Qa(
      Re,
      me,
      Kt,
      !1
    );
  }
  function js(e, t, n) {
    var a = ke;
    ke |= 2;
    var l = gp(), i = yp();
    (Re !== e || me !== t) && (xo = null, dr(e, t)), t = !1;
    var u = Ge;
    e: do
      try {
        if (Ee !== 0 && de !== null) {
          var d = de, g = It;
          switch (Ee) {
            case 8:
              Us(), u = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Pt.current === null && (t = !0);
              var E = Ee;
              if (Ee = 0, It = null, pr(e, d, g, E), n && sr) {
                u = 0;
                break e;
              }
              break;
            default:
              E = Ee, Ee = 0, It = null, pr(e, d, g, E);
          }
        }
        Jg(), u = Ge;
        break;
      } catch (N) {
        mp(e, N);
      }
    while (!0);
    return t && e.shellSuspendCounter++, na = hl = null, ke = a, U.H = l, U.A = i, de === null && (Re = null, me = 0, Qi()), u;
  }
  function Jg() {
    for (; de !== null; ) vp(de);
  }
  function ey(e, t) {
    var n = ke;
    ke |= 2;
    var a = gp(), l = yp();
    Re !== e || me !== t ? (xo = null, ko = ct() + 500, dr(e, t)) : sr = Ta(
      e,
      t
    );
    e: do
      try {
        if (Ee !== 0 && de !== null) {
          t = de;
          var i = It;
          t: switch (Ee) {
            case 1:
              Ee = 0, It = null, pr(e, t, i, 1);
              break;
            case 2:
            case 9:
              if (Cf(i)) {
                Ee = 0, It = null, bp(t);
                break;
              }
              t = function() {
                Ee !== 2 && Ee !== 9 || Re !== e || (Ee = 7), qn(e);
              }, i.then(t, t);
              break e;
            case 3:
              Ee = 7;
              break e;
            case 4:
              Ee = 5;
              break e;
            case 7:
              Cf(i) ? (Ee = 0, It = null, bp(t)) : (Ee = 0, It = null, pr(e, t, i, 7));
              break;
            case 5:
              var u = null;
              switch (de.tag) {
                case 26:
                  u = de.memoizedState;
                case 5:
                case 27:
                  var d = de;
                  if (u ? lm(u) : d.stateNode.complete) {
                    Ee = 0, It = null;
                    var g = d.sibling;
                    if (g !== null) de = g;
                    else {
                      var E = d.return;
                      E !== null ? (de = E, _o(E)) : de = null;
                    }
                    break t;
                  }
              }
              Ee = 0, It = null, pr(e, t, i, 5);
              break;
            case 6:
              Ee = 0, It = null, pr(e, t, i, 6);
              break;
            case 8:
              Us(), Ge = 6;
              break e;
            default:
              throw Error(c(462));
          }
        }
        ty();
        break;
      } catch (N) {
        mp(e, N);
      }
    while (!0);
    return na = hl = null, U.H = a, U.A = l, ke = n, de !== null ? 0 : (Re = null, me = 0, Qi(), Ge);
  }
  function ty() {
    for (; de !== null && !Rn(); )
      vp(de);
  }
  function vp(e) {
    var t = Vd(e.alternate, e, da);
    e.memoizedProps = e.pendingProps, t === null ? _o(e) : de = t;
  }
  function bp(e) {
    var t = e, n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Ud(
          n,
          t,
          t.pendingProps,
          t.type,
          void 0,
          me
        );
        break;
      case 11:
        t = Ud(
          n,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          me
        );
        break;
      case 5:
        Wu(t);
      default:
        Fd(n, t), t = de = yf(t, da), t = Vd(n, t, da);
    }
    e.memoizedProps = e.pendingProps, t === null ? _o(e) : de = t;
  }
  function pr(e, t, n, a) {
    na = hl = null, Wu(t), nr = null, Gr = 0;
    var l = t.return;
    try {
      if (Gg(
        e,
        l,
        t,
        n,
        me
      )) {
        Ge = 1, mo(
          e,
          un(n, e.current)
        ), de = null;
        return;
      }
    } catch (i) {
      if (l !== null) throw de = l, i;
      Ge = 1, mo(
        e,
        un(n, e.current)
      ), de = null;
      return;
    }
    t.flags & 32768 ? (ye || a === 1 ? e = !0 : sr || (me & 536870912) !== 0 ? e = !1 : (Ya = e = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = Pt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Sp(t, e)) : _o(t);
  }
  function _o(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Sp(
          t,
          Ya
        );
        return;
      }
      e = t.return;
      var n = Xg(
        t.alternate,
        t,
        da
      );
      if (n !== null) {
        de = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        de = t;
        return;
      }
      de = t = e;
    } while (t !== null);
    Ge === 0 && (Ge = 5);
  }
  function Sp(e, t) {
    do {
      var n = Pg(e.alternate, e);
      if (n !== null) {
        n.flags &= 32767, de = n;
        return;
      }
      if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
        de = e;
        return;
      }
      de = e = n;
    } while (e !== null);
    Ge = 6, de = null;
  }
  function wp(e, t, n, a, l, i, u, d, g) {
    e.cancelPendingCommit = null;
    do
      Co();
    while (at !== 0);
    if ((ke & 6) !== 0) throw Error(c(327));
    if (t !== null) {
      if (t === e.current) throw Error(c(177));
      if (i = t.lanes | t.childLanes, i |= Au, Ul(
        e,
        n,
        i,
        u,
        d,
        g
      ), e === Re && (de = Re = null, me = 0), fr = t, Fa = e, pa = n, Ds = i, Ls = l, cp = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, ry(tn, function() {
        return Ep(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = U.T, U.T = null, l = G.p, G.p = 2, u = ke, ke |= 4;
        try {
          $g(e, t, n);
        } finally {
          ke = u, G.p = l, U.T = a;
        }
      }
      at = 1, Tp(), kp(), xp();
    }
  }
  function Tp() {
    if (at === 1) {
      at = 0;
      var e = Fa, t = fr, n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        n = U.T, U.T = null;
        var a = G.p;
        G.p = 2;
        var l = ke;
        ke |= 4;
        try {
          np(t, e);
          var i = Is, u = uf(e.containerInfo), d = i.focusedElem, g = i.selectionRange;
          if (u !== d && d && d.ownerDocument && of(
            d.ownerDocument.documentElement,
            d
          )) {
            if (g !== null && Su(d)) {
              var E = g.start, N = g.end;
              if (N === void 0 && (N = E), "selectionStart" in d)
                d.selectionStart = E, d.selectionEnd = Math.min(
                  N,
                  d.value.length
                );
              else {
                var L = d.ownerDocument || document, _ = L && L.defaultView || window;
                if (_.getSelection) {
                  var C = _.getSelection(), Q = d.textContent.length, te = Math.min(g.start, Q), ze = g.end === void 0 ? te : Math.min(g.end, Q);
                  !C.extend && te > ze && (u = ze, ze = te, te = u);
                  var w = rf(
                    d,
                    te
                  ), b = rf(
                    d,
                    ze
                  );
                  if (w && b && (C.rangeCount !== 1 || C.anchorNode !== w.node || C.anchorOffset !== w.offset || C.focusNode !== b.node || C.focusOffset !== b.offset)) {
                    var A = L.createRange();
                    A.setStart(w.node, w.offset), C.removeAllRanges(), te > ze ? (C.addRange(A), C.extend(b.node, b.offset)) : (A.setEnd(b.node, b.offset), C.addRange(A));
                  }
                }
              }
            }
            for (L = [], C = d; C = C.parentNode; )
              C.nodeType === 1 && L.push({
                element: C,
                left: C.scrollLeft,
                top: C.scrollTop
              });
            for (typeof d.focus == "function" && d.focus(), d = 0; d < L.length; d++) {
              var R = L[d];
              R.element.scrollLeft = R.left, R.element.scrollTop = R.top;
            }
          }
          Bo = !!$s, Is = $s = null;
        } finally {
          ke = l, G.p = a, U.T = n;
        }
      }
      e.current = t, at = 2;
    }
  }
  function kp() {
    if (at === 2) {
      at = 0;
      var e = Fa, t = fr, n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        n = U.T, U.T = null;
        var a = G.p;
        G.p = 2;
        var l = ke;
        ke |= 4;
        try {
          Zd(e, t.alternate, t);
        } finally {
          ke = l, G.p = a, U.T = n;
        }
      }
      at = 3;
    }
  }
  function xp() {
    if (at === 4 || at === 3) {
      at = 0, Ei();
      var e = Fa, t = fr, n = pa, a = cp;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? at = 5 : (at = 0, fr = Fa = null, Ap(e, e.pendingLanes));
      var l = e.pendingLanes;
      if (l === 0 && (Ga = null), ol(n), t = t.stateNode, $e && typeof $e.onCommitFiberRoot == "function")
        try {
          $e.onCommitFiberRoot(
            Xn,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        t = U.T, l = G.p, G.p = 2, U.T = null;
        try {
          for (var i = e.onRecoverableError, u = 0; u < a.length; u++) {
            var d = a[u];
            i(d.value, {
              componentStack: d.stack
            });
          }
        } finally {
          U.T = t, G.p = l;
        }
      }
      (pa & 3) !== 0 && Co(), qn(e), l = e.pendingLanes, (n & 261930) !== 0 && (l & 42) !== 0 ? e === Ms ? ii++ : (ii = 0, Ms = e) : ii = 0, oi(0);
    }
  }
  function Ap(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Yr(t)));
  }
  function Co() {
    return Tp(), kp(), xp(), Ep();
  }
  function Ep() {
    if (at !== 5) return !1;
    var e = Fa, t = Ds;
    Ds = 0;
    var n = ol(pa), a = U.T, l = G.p;
    try {
      G.p = 32 > n ? 32 : n, U.T = null, n = Ls, Ls = null;
      var i = Fa, u = pa;
      if (at = 0, fr = Fa = null, pa = 0, (ke & 6) !== 0) throw Error(c(331));
      var d = ke;
      if (ke |= 4, op(i.current), lp(
        i,
        i.current,
        u,
        n
      ), ke = d, oi(0, !1), $e && typeof $e.onPostCommitFiberRoot == "function")
        try {
          $e.onPostCommitFiberRoot(Xn, i);
        } catch {
        }
      return !0;
    } finally {
      G.p = l, U.T = a, Ap(e, t);
    }
  }
  function _p(e, t, n) {
    t = un(n, t), t = ps(e.stateNode, t, 2), e = ja(e, t, 2), e !== null && (ka(e, 2), qn(e));
  }
  function _e(e, t, n) {
    if (e.tag === 3)
      _p(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          _p(
            t,
            e,
            n
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Ga === null || !Ga.has(a))) {
            e = un(n, e), n = Cd(2), a = ja(t, n, 2), a !== null && (Od(
              n,
              a,
              t,
              e
            ), ka(a, 2), qn(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function Hs(e, t, n) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new Zg();
      var l = /* @__PURE__ */ new Set();
      a.set(t, l);
    } else
      l = a.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), a.set(t, l));
    l.has(n) || (Ns = !0, l.add(n), e = ny.bind(null, e, t, n), t.then(e, e));
  }
  function ny(e, t, n) {
    var a = e.pingCache;
    a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Re === e && (me & n) === n && (Ge === 4 || Ge === 3 && (me & 62914560) === me && 300 > ct() - To ? (ke & 2) === 0 && dr(e, 0) : zs |= n, cr === me && (cr = 0)), qn(e);
  }
  function Cp(e, t) {
    t === 0 && (t = Er()), e = dl(e, t), e !== null && (ka(e, t), qn(e));
  }
  function ay(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Cp(e, n);
  }
  function ly(e, t) {
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
    a !== null && a.delete(t), Cp(e, n);
  }
  function ry(e, t) {
    return Fn(e, t);
  }
  var Oo = null, mr = null, qs = !1, No = !1, Bs = !1, Xa = 0;
  function qn(e) {
    e !== mr && e.next === null && (mr === null ? Oo = mr = e : mr = mr.next = e), No = !0, qs || (qs = !0, oy());
  }
  function oi(e, t) {
    if (!Bs && No) {
      Bs = !0;
      do
        for (var n = !1, a = Oo; a !== null; ) {
          if (e !== 0) {
            var l = a.pendingLanes;
            if (l === 0) var i = 0;
            else {
              var u = a.suspendedLanes, d = a.pingedLanes;
              i = (1 << 31 - rt(42 | e) + 1) - 1, i &= l & ~(u & ~d), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
            }
            i !== 0 && (n = !0, Rp(a, i));
          } else
            i = me, i = an(
              a,
              a === Re ? i : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (i & 3) === 0 || Ta(a, i) || (n = !0, Rp(a, i));
          a = a.next;
        }
      while (n);
      Bs = !1;
    }
  }
  function iy() {
    Op();
  }
  function Op() {
    No = qs = !1;
    var e = 0;
    Xa !== 0 && yy() && (e = Xa);
    for (var t = ct(), n = null, a = Oo; a !== null; ) {
      var l = a.next, i = Np(a, t);
      i === 0 ? (a.next = null, n === null ? Oo = l : n.next = l, l === null && (mr = n)) : (n = a, (e !== 0 || (i & 3) !== 0) && (No = !0)), a = l;
    }
    at !== 0 && at !== 5 || oi(e), Xa !== 0 && (Xa = 0);
  }
  function Np(e, t) {
    for (var n = e.suspendedLanes, a = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes & -62914561; 0 < i; ) {
      var u = 31 - rt(i), d = 1 << u, g = l[u];
      g === -1 ? ((d & n) === 0 || (d & a) !== 0) && (l[u] = zi(d, t)) : g <= t && (e.expiredLanes |= d), i &= ~d;
    }
    if (t = Re, n = me, n = an(
      e,
      e === t ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a = e.callbackNode, n === 0 || e === t && (Ee === 2 || Ee === 9) || e.cancelPendingCommit !== null)
      return a !== null && a !== null && Nl(a), e.callbackNode = null, e.callbackPriority = 0;
    if ((n & 3) === 0 || Ta(e, n)) {
      if (t = n & -n, t === e.callbackPriority) return t;
      switch (a !== null && Nl(a), ol(n)) {
        case 2:
        case 8:
          n = en;
          break;
        case 32:
          n = tn;
          break;
        case 268435456:
          n = Rl;
          break;
        default:
          n = tn;
      }
      return a = zp.bind(null, e), n = Fn(n, a), e.callbackPriority = t, e.callbackNode = n, t;
    }
    return a !== null && a !== null && Nl(a), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function zp(e, t) {
    if (at !== 0 && at !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var n = e.callbackNode;
    if (Co() && e.callbackNode !== n)
      return null;
    var a = me;
    return a = an(
      e,
      e === Re ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a === 0 ? null : (dp(e, a, t), Np(e, ct()), e.callbackNode != null && e.callbackNode === n ? zp.bind(null, e) : null);
  }
  function Rp(e, t) {
    if (Co()) return null;
    dp(e, t, !0);
  }
  function oy() {
    by(function() {
      (ke & 6) !== 0 ? Fn(
        zl,
        iy
      ) : Op();
    });
  }
  function Ys() {
    if (Xa === 0) {
      var e = Jl;
      e === 0 && (e = Sa, Sa <<= 1, (Sa & 261888) === 0 && (Sa = 256)), Xa = e;
    }
    return Xa;
  }
  function Dp(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : xn("" + e);
  }
  function Lp(e, t) {
    var n = t.ownerDocument.createElement("input");
    return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
  }
  function uy(e, t, n, a, l) {
    if (t === "submit" && n && n.stateNode === l) {
      var i = Dp(
        (l[it] || null).action
      ), u = a.submitter;
      u && (t = (t = u[it] || null) ? Dp(t.formAction) : u.getAttribute("formAction"), t !== null && (i = t, u = null));
      var d = new ft(
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
                if (Xa !== 0) {
                  var g = u ? Lp(l, u) : new FormData(l);
                  os(
                    n,
                    {
                      pending: !0,
                      data: g,
                      method: l.method,
                      action: i
                    },
                    null,
                    g
                  );
                }
              } else
                typeof i == "function" && (d.preventDefault(), g = u ? Lp(l, u) : new FormData(l), os(
                  n,
                  {
                    pending: !0,
                    data: g,
                    method: l.method,
                    action: i
                  },
                  i,
                  g
                ));
            },
            currentTarget: l
          }
        ]
      });
    }
  }
  for (var Vs = 0; Vs < xu.length; Vs++) {
    var Gs = xu[Vs], sy = Gs.toLowerCase(), cy = Gs[0].toUpperCase() + Gs.slice(1);
    En(
      sy,
      "on" + cy
    );
  }
  En(ff, "onAnimationEnd"), En(df, "onAnimationIteration"), En(pf, "onAnimationStart"), En("dblclick", "onDoubleClick"), En("focusin", "onFocus"), En("focusout", "onBlur"), En(Eg, "onTransitionRun"), En(_g, "onTransitionStart"), En(Cg, "onTransitionCancel"), En(mf, "onTransitionEnd"), Et("onMouseEnter", ["mouseout", "mouseover"]), Et("onMouseLeave", ["mouseout", "mouseover"]), Et("onPointerEnter", ["pointerout", "pointerover"]), Et("onPointerLeave", ["pointerout", "pointerover"]), Zn(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Zn(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Zn("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Zn(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Zn(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Zn(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var ui = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), fy = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ui)
  );
  function Mp(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var a = e[n], l = a.event;
      a = a.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var u = a.length - 1; 0 <= u; u--) {
            var d = a[u], g = d.instance, E = d.currentTarget;
            if (d = d.listener, g !== i && l.isPropagationStopped())
              break e;
            i = d, l.currentTarget = E;
            try {
              i(l);
            } catch (N) {
              Fi(N);
            }
            l.currentTarget = null, i = g;
          }
        else
          for (u = 0; u < a.length; u++) {
            if (d = a[u], g = d.instance, E = d.currentTarget, d = d.listener, g !== i && l.isPropagationStopped())
              break e;
            i = d, l.currentTarget = E;
            try {
              i(l);
            } catch (N) {
              Fi(N);
            }
            l.currentTarget = null, i = g;
          }
      }
    }
  }
  function pe(e, t) {
    var n = t[$n];
    n === void 0 && (n = t[$n] = /* @__PURE__ */ new Set());
    var a = e + "__bubble";
    n.has(a) || (Up(t, e, 2, !1), n.add(a));
  }
  function Fs(e, t, n) {
    var a = 0;
    t && (a |= 4), Up(
      n,
      e,
      a,
      t
    );
  }
  var zo = "_reactListening" + Math.random().toString(36).slice(2);
  function Qs(e) {
    if (!e[zo]) {
      e[zo] = !0, Di.forEach(function(n) {
        n !== "selectionchange" && (fy.has(n) || Fs(n, !1, e), Fs(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[zo] || (t[zo] = !0, Fs("selectionchange", !1, t));
    }
  }
  function Up(e, t, n, a) {
    switch (fm(t)) {
      case 2:
        var l = qy;
        break;
      case 8:
        l = By;
        break;
      default:
        l = ic;
    }
    n = l.bind(
      null,
      t,
      n,
      e
    ), l = void 0, !h || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), a ? l !== void 0 ? e.addEventListener(t, n, {
      capture: !0,
      passive: l
    }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, {
      passive: l
    }) : e.addEventListener(t, n, !1);
  }
  function Xs(e, t, n, a, l) {
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
              var g = u.tag;
              if ((g === 3 || g === 4) && u.stateNode.containerInfo === l)
                return;
              u = u.return;
            }
          for (; d !== null; ) {
            if (u = In(d), u === null) return;
            if (g = u.tag, g === 5 || g === 6 || g === 26 || g === 27) {
              a = i = u;
              continue e;
            }
            d = d.parentNode;
          }
        }
        a = a.return;
      }
    Gl(function() {
      var E = i, N = Rr(n), L = [];
      e: {
        var _ = hf.get(e);
        if (_ !== void 0) {
          var C = ft, Q = e;
          switch (e) {
            case "keypress":
              if (ne(n) === 0) break e;
            case "keydown":
            case "keyup":
              C = lg;
              break;
            case "focusin":
              Q = "focus", C = hu;
              break;
            case "focusout":
              Q = "blur", C = hu;
              break;
            case "beforeblur":
            case "afterblur":
              C = hu;
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
              C = Gc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              C = Xh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              C = og;
              break;
            case ff:
            case df:
            case pf:
              C = Ih;
              break;
            case mf:
              C = sg;
              break;
            case "scroll":
            case "scrollend":
              C = Mn;
              break;
            case "wheel":
              C = fg;
              break;
            case "copy":
            case "cut":
            case "paste":
              C = Zh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              C = Qc;
              break;
            case "toggle":
            case "beforetoggle":
              C = pg;
          }
          var te = (t & 4) !== 0, ze = !te && (e === "scroll" || e === "scrollend"), w = te ? _ !== null ? _ + "Capture" : null : _;
          te = [];
          for (var b = E, A; b !== null; ) {
            var R = b;
            if (A = R.stateNode, R = R.tag, R !== 5 && R !== 26 && R !== 27 || A === null || w === null || (R = An(b, w), R != null && te.push(
              si(b, R, A)
            )), ze) break;
            b = b.return;
          }
          0 < te.length && (_ = new C(
            _,
            Q,
            null,
            n,
            N
          ), L.push({ event: _, listeners: te }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (_ = e === "mouseover" || e === "pointerover", C = e === "mouseout" || e === "pointerout", _ && n !== Yl && (Q = n.relatedTarget || n.fromElement) && (In(Q) || Q[xa]))
            break e;
          if ((C || _) && (_ = N.window === N ? N : (_ = N.ownerDocument) ? _.defaultView || _.parentWindow : window, C ? (Q = n.relatedTarget || n.toElement, C = E, Q = Q ? In(Q) : null, Q !== null && (ze = y(Q), te = Q.tag, Q !== ze || te !== 5 && te !== 27 && te !== 6) && (Q = null)) : (C = null, Q = E), C !== Q)) {
            if (te = Gc, R = "onMouseLeave", w = "onMouseEnter", b = "mouse", (e === "pointerout" || e === "pointerover") && (te = Qc, R = "onPointerLeave", w = "onPointerEnter", b = "pointer"), ze = C == null ? _ : Aa(C), A = Q == null ? _ : Aa(Q), _ = new te(
              R,
              b + "leave",
              C,
              n,
              N
            ), _.target = ze, _.relatedTarget = A, R = null, In(N) === E && (te = new te(
              w,
              b + "enter",
              Q,
              n,
              N
            ), te.target = A, te.relatedTarget = ze, R = te), ze = R, C && Q)
              t: {
                for (te = dy, w = C, b = Q, A = 0, R = w; R; R = te(R))
                  A++;
                R = 0;
                for (var W = b; W; W = te(W))
                  R++;
                for (; 0 < A - R; )
                  w = te(w), A--;
                for (; 0 < R - A; )
                  b = te(b), R--;
                for (; A--; ) {
                  if (w === b || b !== null && w === b.alternate) {
                    te = w;
                    break t;
                  }
                  w = te(w), b = te(b);
                }
                te = null;
              }
            else te = null;
            C !== null && jp(
              L,
              _,
              C,
              te,
              !1
            ), Q !== null && ze !== null && jp(
              L,
              ze,
              Q,
              te,
              !0
            );
          }
        }
        e: {
          if (_ = E ? Aa(E) : window, C = _.nodeName && _.nodeName.toLowerCase(), C === "select" || C === "input" && _.type === "file")
            var we = Jc;
          else if (Zc(_))
            if (ef)
              we = kg;
            else {
              we = wg;
              var P = Sg;
            }
          else
            C = _.nodeName, !C || C.toLowerCase() !== "input" || _.type !== "checkbox" && _.type !== "radio" ? E && Oa(E.elementType) && (we = Jc) : we = Tg;
          if (we && (we = we(e, E))) {
            Wc(
              L,
              we,
              n,
              N
            );
            break e;
          }
          P && P(e, _, E), e === "focusout" && E && _.type === "number" && E.memoizedProps.value != null && Ca(_, "number", _.value);
        }
        switch (P = E ? Aa(E) : window, e) {
          case "focusin":
            (Zc(P) || P.contentEditable === "true") && (Ql = P, wu = E, Hr = null);
            break;
          case "focusout":
            Hr = wu = Ql = null;
            break;
          case "mousedown":
            Tu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Tu = !1, sf(L, n, N);
            break;
          case "selectionchange":
            if (Ag) break;
          case "keydown":
          case "keyup":
            sf(L, n, N);
        }
        var oe;
        if (yu)
          e: {
            switch (e) {
              case "compositionstart":
                var he = "onCompositionStart";
                break e;
              case "compositionend":
                he = "onCompositionEnd";
                break e;
              case "compositionupdate":
                he = "onCompositionUpdate";
                break e;
            }
            he = void 0;
          }
        else
          Fl ? Ic(e, n) && (he = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (he = "onCompositionStart");
        he && (Xc && n.locale !== "ko" && (Fl || he !== "onCompositionStart" ? he === "onCompositionEnd" && Fl && (oe = ee()) : (k = N, D = "value" in k ? k.value : k.textContent, Fl = !0)), P = Ro(E, he), 0 < P.length && (he = new Fc(
          he,
          e,
          null,
          n,
          N
        ), L.push({ event: he, listeners: P }), oe ? he.data = oe : (oe = Kc(n), oe !== null && (he.data = oe)))), (oe = hg ? gg(e, n) : yg(e, n)) && (he = Ro(E, "onBeforeInput"), 0 < he.length && (P = new Fc(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          N
        ), L.push({
          event: P,
          listeners: he
        }), P.data = oe)), uy(
          L,
          e,
          E,
          n,
          N
        );
      }
      Mp(L, t);
    });
  }
  function si(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function Ro(e, t) {
    for (var n = t + "Capture", a = []; e !== null; ) {
      var l = e, i = l.stateNode;
      if (l = l.tag, l !== 5 && l !== 26 && l !== 27 || i === null || (l = An(e, n), l != null && a.unshift(
        si(e, l, i)
      ), l = An(e, t), l != null && a.push(
        si(e, l, i)
      )), e.tag === 3) return a;
      e = e.return;
    }
    return [];
  }
  function dy(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function jp(e, t, n, a, l) {
    for (var i = t._reactName, u = []; n !== null && n !== a; ) {
      var d = n, g = d.alternate, E = d.stateNode;
      if (d = d.tag, g !== null && g === a) break;
      d !== 5 && d !== 26 && d !== 27 || E === null || (g = E, l ? (E = An(n, i), E != null && u.unshift(
        si(n, E, g)
      )) : l || (E = An(n, i), E != null && u.push(
        si(n, E, g)
      ))), n = n.return;
    }
    u.length !== 0 && e.push({ event: t, listeners: u });
  }
  var py = /\r\n?/g, my = /\u0000|\uFFFD/g;
  function Hp(e) {
    return (typeof e == "string" ? e : "" + e).replace(py, `
`).replace(my, "");
  }
  function qp(e, t) {
    return t = Hp(t), Hp(e) === t;
  }
  function Ne(e, t, n, a, l, i) {
    switch (n) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || Tt(e, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && Tt(e, "" + a);
        break;
      case "className":
        _a(e, "class", a);
        break;
      case "tabIndex":
        _a(e, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        _a(e, n, a);
        break;
      case "style":
        qi(e, a, i);
        break;
      case "data":
        if (t !== "object") {
          _a(e, "data", a);
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
        a = xn("" + a), e.setAttribute(n, a);
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
        a = xn("" + a), e.setAttribute(n, a);
        break;
      case "onClick":
        a != null && (e.onclick = Gt);
        break;
      case "onScroll":
        a != null && pe("scroll", e);
        break;
      case "onScrollEnd":
        a != null && pe("scrollend", e);
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
        n = xn("" + a), e.setAttributeNS(
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
        pe("beforetoggle", e), pe("toggle", e), Ea(e, "popover", a);
        break;
      case "xlinkActuate":
        Vt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        Vt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        Vt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        Vt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        Vt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        Vt(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        Vt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        Vt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        Vt(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        Ea(e, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = pu.get(n) || n, Ea(e, n, a));
    }
  }
  function Ps(e, t, n, a, l, i) {
    switch (n) {
      case "style":
        qi(e, a, i);
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
        typeof a == "string" ? Tt(e, a) : (typeof a == "number" || typeof a == "bigint") && Tt(e, "" + a);
        break;
      case "onScroll":
        a != null && pe("scroll", e);
        break;
      case "onScrollEnd":
        a != null && pe("scrollend", e);
        break;
      case "onClick":
        a != null && (e.onclick = Gt);
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
        if (!Li.hasOwnProperty(n))
          e: {
            if (n[0] === "o" && n[1] === "n" && (l = n.endsWith("Capture"), t = n.slice(2, l ? n.length - 7 : void 0), i = e[it] || null, i = i != null ? i[n] : null, typeof i == "function" && e.removeEventListener(t, i, l), typeof a == "function")) {
              typeof i != "function" && i !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, a, l);
              break e;
            }
            n in e ? e[n] = a : a === !0 ? e.setAttribute(n, "") : Ea(e, n, a);
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
        pe("error", e), pe("load", e);
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
        pe("invalid", e);
        var d = i = u = l = null, g = null, E = null;
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
                  g = N;
                  break;
                case "defaultChecked":
                  E = N;
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
        Bl(
          e,
          i,
          d,
          g,
          E,
          u,
          l,
          !1
        );
        return;
      case "select":
        pe("invalid", e), a = u = i = null;
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
        t = i, n = u, e.multiple = !!a, t != null ? Ln(e, !!a, t, !1) : n != null && Ln(e, !!a, n, !0);
        return;
      case "textarea":
        pe("invalid", e), i = l = a = null;
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
        ul(e, a, l, i);
        return;
      case "option":
        for (g in n)
          if (n.hasOwnProperty(g) && (a = n[g], a != null))
            switch (g) {
              case "selected":
                e.selected = a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                Ne(e, t, g, a, n, null);
            }
        return;
      case "dialog":
        pe("beforetoggle", e), pe("toggle", e), pe("cancel", e), pe("close", e);
        break;
      case "iframe":
      case "object":
        pe("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < ui.length; a++)
          pe(ui[a], e);
        break;
      case "image":
        pe("error", e), pe("load", e);
        break;
      case "details":
        pe("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        pe("error", e), pe("load", e);
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
                Ne(e, t, E, a, n, null);
            }
        return;
      default:
        if (Oa(t)) {
          for (N in n)
            n.hasOwnProperty(N) && (a = n[N], a !== void 0 && Ps(
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
  function hy(e, t, n, a) {
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
        var l = null, i = null, u = null, d = null, g = null, E = null, N = null;
        for (C in n) {
          var L = n[C];
          if (n.hasOwnProperty(C) && L != null)
            switch (C) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                g = L;
              default:
                a.hasOwnProperty(C) || Ne(e, t, C, null, a, L);
            }
        }
        for (var _ in a) {
          var C = a[_];
          if (L = n[_], a.hasOwnProperty(_) && (C != null || L != null))
            switch (_) {
              case "type":
                i = C;
                break;
              case "name":
                l = C;
                break;
              case "checked":
                E = C;
                break;
              case "defaultChecked":
                N = C;
                break;
              case "value":
                u = C;
                break;
              case "defaultValue":
                d = C;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (C != null)
                  throw Error(c(137, t));
                break;
              default:
                C !== L && Ne(
                  e,
                  t,
                  _,
                  C,
                  a,
                  L
                );
            }
        }
        ql(
          e,
          u,
          d,
          g,
          E,
          N,
          i,
          l
        );
        return;
      case "select":
        C = u = d = _ = null;
        for (i in n)
          if (g = n[i], n.hasOwnProperty(i) && g != null)
            switch (i) {
              case "value":
                break;
              case "multiple":
                C = g;
              default:
                a.hasOwnProperty(i) || Ne(
                  e,
                  t,
                  i,
                  null,
                  a,
                  g
                );
            }
        for (l in a)
          if (i = a[l], g = n[l], a.hasOwnProperty(l) && (i != null || g != null))
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
                i !== g && Ne(
                  e,
                  t,
                  l,
                  i,
                  a,
                  g
                );
            }
        t = d, n = u, a = C, _ != null ? Ln(e, !!n, _, !1) : !!a != !!n && (t != null ? Ln(e, !!n, t, !0) : Ln(e, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        C = _ = null;
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
                C = l;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (l != null) throw Error(c(91));
                break;
              default:
                l !== i && Ne(e, t, u, l, a, i);
            }
        zr(e, _, C);
        return;
      case "option":
        for (var Q in n)
          if (_ = n[Q], n.hasOwnProperty(Q) && _ != null && !a.hasOwnProperty(Q))
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
                  a,
                  _
                );
            }
        for (g in a)
          if (_ = a[g], C = n[g], a.hasOwnProperty(g) && _ !== C && (_ != null || C != null))
            switch (g) {
              case "selected":
                e.selected = _ && typeof _ != "function" && typeof _ != "symbol";
                break;
              default:
                Ne(
                  e,
                  t,
                  g,
                  _,
                  a,
                  C
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
        for (E in a)
          if (_ = a[E], C = n[E], a.hasOwnProperty(E) && _ !== C && (_ != null || C != null))
            switch (E) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (_ != null)
                  throw Error(c(137, t));
                break;
              default:
                Ne(
                  e,
                  t,
                  E,
                  _,
                  a,
                  C
                );
            }
        return;
      default:
        if (Oa(t)) {
          for (var ze in n)
            _ = n[ze], n.hasOwnProperty(ze) && _ !== void 0 && !a.hasOwnProperty(ze) && Ps(
              e,
              t,
              ze,
              void 0,
              a,
              _
            );
          for (N in a)
            _ = a[N], C = n[N], !a.hasOwnProperty(N) || _ === C || _ === void 0 && C === void 0 || Ps(
              e,
              t,
              N,
              _,
              a,
              C
            );
          return;
        }
    }
    for (var w in n)
      _ = n[w], n.hasOwnProperty(w) && _ != null && !a.hasOwnProperty(w) && Ne(e, t, w, null, a, _);
    for (L in a)
      _ = a[L], C = n[L], !a.hasOwnProperty(L) || _ === C || _ == null && C == null || Ne(e, t, L, _, a, C);
  }
  function Bp(e) {
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
  function gy() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), a = 0; a < n.length; a++) {
        var l = n[a], i = l.transferSize, u = l.initiatorType, d = l.duration;
        if (i && d && Bp(u)) {
          for (u = 0, d = l.responseEnd, a += 1; a < n.length; a++) {
            var g = n[a], E = g.startTime;
            if (E > d) break;
            var N = g.transferSize, L = g.initiatorType;
            N && Bp(L) && (g = g.responseEnd, u += N * (g < d ? 1 : (d - E) / (g - E)));
          }
          if (--a, t += 8 * (i + u) / (l.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var $s = null, Is = null;
  function Do(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Yp(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Vp(e, t) {
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
  function Ks(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Zs = null;
  function yy() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Zs ? !1 : (Zs = e, !0) : (Zs = null, !1);
  }
  var Gp = typeof setTimeout == "function" ? setTimeout : void 0, vy = typeof clearTimeout == "function" ? clearTimeout : void 0, Fp = typeof Promise == "function" ? Promise : void 0, by = typeof queueMicrotask == "function" ? queueMicrotask : typeof Fp < "u" ? function(e) {
    return Fp.resolve(null).then(e).catch(Sy);
  } : Gp;
  function Sy(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Pa(e) {
    return e === "head";
  }
  function Qp(e, t) {
    var n = t, a = 0;
    do {
      var l = n.nextSibling;
      if (e.removeChild(n), l && l.nodeType === 8)
        if (n = l.data, n === "/$" || n === "/&") {
          if (a === 0) {
            e.removeChild(l), vr(t);
            return;
          }
          a--;
        } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
          a++;
        else if (n === "html")
          ci(e.ownerDocument.documentElement);
        else if (n === "head") {
          n = e.ownerDocument.head, ci(n);
          for (var i = n.firstChild; i; ) {
            var u = i.nextSibling, d = i.nodeName;
            i[rn] || d === "SCRIPT" || d === "STYLE" || d === "LINK" && i.rel.toLowerCase() === "stylesheet" || n.removeChild(i), i = u;
          }
        } else
          n === "body" && ci(e.ownerDocument.body);
      n = l;
    } while (n);
    vr(t);
  }
  function Xp(e, t) {
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
  function Ws(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (t = t.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Ws(n), Cr(n);
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
  function wy(e, t, n, a) {
    for (; e.nodeType === 1; ) {
      var l = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (a) {
        if (!e[rn])
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
      if (e = dn(e.nextSibling), e === null) break;
    }
    return null;
  }
  function Ty(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = dn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Pp(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = dn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Js(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function ec(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function ky(e, t) {
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
  function dn(e) {
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
  var tc = null;
  function $p(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "/$" || n === "/&") {
          if (t === 0)
            return dn(e.nextSibling);
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
  function Kp(e, t, n) {
    switch (t = Do(n), e) {
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
  function ci(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    Cr(e);
  }
  var pn = /* @__PURE__ */ new Map(), Zp = /* @__PURE__ */ new Set();
  function Lo(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var ma = G.d;
  G.d = {
    f: xy,
    r: Ay,
    D: Ey,
    C: _y,
    L: Cy,
    m: Oy,
    X: zy,
    S: Ny,
    M: Ry
  };
  function xy() {
    var e = ma.f(), t = Ao();
    return e || t;
  }
  function Ay(e) {
    var t = Dn(e);
    t !== null && t.tag === 5 && t.type === "form" ? md(t) : ma.r(e);
  }
  var hr = typeof document > "u" ? null : document;
  function Wp(e, t, n) {
    var a = hr;
    if (a && typeof t == "string" && t) {
      var l = Ut(t);
      l = 'link[rel="' + e + '"][href="' + l + '"]', typeof n == "string" && (l += '[crossorigin="' + n + '"]'), Zp.has(l) || (Zp.add(l), e = { rel: e, crossOrigin: n, href: t }, a.querySelector(l) === null && (t = a.createElement("link"), ht(t, "link", e), Ke(t), a.head.appendChild(t)));
    }
  }
  function Ey(e) {
    ma.D(e), Wp("dns-prefetch", e, null);
  }
  function _y(e, t) {
    ma.C(e, t), Wp("preconnect", e, t);
  }
  function Cy(e, t, n) {
    ma.L(e, t, n);
    var a = hr;
    if (a && e && t) {
      var l = 'link[rel="preload"][as="' + Ut(t) + '"]';
      t === "image" && n && n.imageSrcSet ? (l += '[imagesrcset="' + Ut(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (l += '[imagesizes="' + Ut(
        n.imageSizes
      ) + '"]')) : l += '[href="' + Ut(e) + '"]';
      var i = l;
      switch (t) {
        case "style":
          i = gr(e);
          break;
        case "script":
          i = yr(e);
      }
      pn.has(i) || (e = M(
        {
          rel: "preload",
          href: t === "image" && n && n.imageSrcSet ? void 0 : e,
          as: t
        },
        n
      ), pn.set(i, e), a.querySelector(l) !== null || t === "style" && a.querySelector(fi(i)) || t === "script" && a.querySelector(di(i)) || (t = a.createElement("link"), ht(t, "link", e), Ke(t), a.head.appendChild(t)));
    }
  }
  function Oy(e, t) {
    ma.m(e, t);
    var n = hr;
    if (n && e) {
      var a = t && typeof t.as == "string" ? t.as : "script", l = 'link[rel="modulepreload"][as="' + Ut(a) + '"][href="' + Ut(e) + '"]', i = l;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = yr(e);
      }
      if (!pn.has(i) && (e = M({ rel: "modulepreload", href: e }, t), pn.set(i, e), n.querySelector(l) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(di(i)))
              return;
        }
        a = n.createElement("link"), ht(a, "link", e), Ke(a), n.head.appendChild(a);
      }
    }
  }
  function Ny(e, t, n) {
    ma.S(e, t, n);
    var a = hr;
    if (a && e) {
      var l = Kn(a).hoistableStyles, i = gr(e);
      t = t || "default";
      var u = l.get(i);
      if (!u) {
        var d = { loading: 0, preload: null };
        if (u = a.querySelector(
          fi(i)
        ))
          d.loading = 5;
        else {
          e = M(
            { rel: "stylesheet", href: e, "data-precedence": t },
            n
          ), (n = pn.get(i)) && nc(e, n);
          var g = u = a.createElement("link");
          Ke(g), ht(g, "link", e), g._p = new Promise(function(E, N) {
            g.onload = E, g.onerror = N;
          }), g.addEventListener("load", function() {
            d.loading |= 1;
          }), g.addEventListener("error", function() {
            d.loading |= 2;
          }), d.loading |= 4, Mo(u, t, a);
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
  function zy(e, t) {
    ma.X(e, t);
    var n = hr;
    if (n && e) {
      var a = Kn(n).hoistableScripts, l = yr(e), i = a.get(l);
      i || (i = n.querySelector(di(l)), i || (e = M({ src: e, async: !0 }, t), (t = pn.get(l)) && ac(e, t), i = n.createElement("script"), Ke(i), ht(i, "link", e), n.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, a.set(l, i));
    }
  }
  function Ry(e, t) {
    ma.M(e, t);
    var n = hr;
    if (n && e) {
      var a = Kn(n).hoistableScripts, l = yr(e), i = a.get(l);
      i || (i = n.querySelector(di(l)), i || (e = M({ src: e, async: !0, type: "module" }, t), (t = pn.get(l)) && ac(e, t), i = n.createElement("script"), Ke(i), ht(i, "link", e), n.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, a.set(l, i));
    }
  }
  function Jp(e, t, n, a) {
    var l = (l = lt.current) ? Lo(l) : null;
    if (!l) throw Error(c(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (t = gr(n.href), n = Kn(
          l
        ).hoistableStyles, a = n.get(t), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          e = gr(n.href);
          var i = Kn(
            l
          ).hoistableStyles, u = i.get(e);
          if (u || (l = l.ownerDocument || l, u = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, i.set(e, u), (i = l.querySelector(
            fi(e)
          )) && !i._p && (u.instance = i, u.state.loading = 5), pn.has(e) || (n = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, pn.set(e, n), i || Dy(
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
        return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = yr(n), n = Kn(
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
  function gr(e) {
    return 'href="' + Ut(e) + '"';
  }
  function fi(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function em(e) {
    return M({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function Dy(e, t, n, a) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = e.createElement("link"), a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    }), ht(t, "link", n), Ke(t), e.head.appendChild(t));
  }
  function yr(e) {
    return '[src="' + Ut(e) + '"]';
  }
  function di(e) {
    return "script[async]" + e;
  }
  function tm(e, t, n) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = e.querySelector(
            'style[data-href~="' + Ut(n.href) + '"]'
          );
          if (a)
            return t.instance = a, Ke(a), a;
          var l = M({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return a = (e.ownerDocument || e).createElement(
            "style"
          ), Ke(a), ht(a, "style", l), Mo(a, n.precedence, e), t.instance = a;
        case "stylesheet":
          l = gr(n.href);
          var i = e.querySelector(
            fi(l)
          );
          if (i)
            return t.state.loading |= 4, t.instance = i, Ke(i), i;
          a = em(n), (l = pn.get(l)) && nc(a, l), i = (e.ownerDocument || e).createElement("link"), Ke(i);
          var u = i;
          return u._p = new Promise(function(d, g) {
            u.onload = d, u.onerror = g;
          }), ht(i, "link", a), t.state.loading |= 4, Mo(i, n.precedence, e), t.instance = i;
        case "script":
          return i = yr(n.src), (l = e.querySelector(
            di(i)
          )) ? (t.instance = l, Ke(l), l) : (a = n, (l = pn.get(i)) && (a = M({}, n), ac(a, l)), e = e.ownerDocument || e, l = e.createElement("script"), Ke(l), ht(l, "link", a), e.head.appendChild(l), t.instance = l);
        case "void":
          return null;
        default:
          throw Error(c(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, Mo(a, n.precedence, e));
    return t.instance;
  }
  function Mo(e, t, n) {
    for (var a = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), l = a.length ? a[a.length - 1] : null, i = l, u = 0; u < a.length; u++) {
      var d = a[u];
      if (d.dataset.precedence === t) i = d;
      else if (i !== l) break;
    }
    i ? i.parentNode.insertBefore(e, i.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
  }
  function nc(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function ac(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var Uo = null;
  function nm(e, t, n) {
    if (Uo === null) {
      var a = /* @__PURE__ */ new Map(), l = Uo = /* @__PURE__ */ new Map();
      l.set(n, a);
    } else
      l = Uo, a = l.get(n), a || (a = /* @__PURE__ */ new Map(), l.set(n, a));
    if (a.has(e)) return a;
    for (a.set(e, null), n = n.getElementsByTagName(e), l = 0; l < n.length; l++) {
      var i = n[l];
      if (!(i[rn] || i[Ie] || e === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
        var u = i.getAttribute(t) || "";
        u = e + u;
        var d = a.get(u);
        d ? d.push(i) : a.set(u, [i]);
      }
    }
    return a;
  }
  function am(e, t, n) {
    e = e.ownerDocument || e, e.head.insertBefore(
      n,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function Ly(e, t, n) {
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
  function lm(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function My(e, t, n, a) {
    if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var l = gr(a.href), i = t.querySelector(
          fi(l)
        );
        if (i) {
          t = i._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = jo.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = i, Ke(i);
          return;
        }
        i = t.ownerDocument || t, a = em(a), (l = pn.get(l)) && nc(a, l), i = i.createElement("link"), Ke(i);
        var u = i;
        u._p = new Promise(function(d, g) {
          u.onload = d, u.onerror = g;
        }), ht(i, "link", a), n.instance = i;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (e.count++, n = jo.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
    }
  }
  var lc = 0;
  function Uy(e, t) {
    return e.stylesheets && e.count === 0 && qo(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
      var a = setTimeout(function() {
        if (e.stylesheets && qo(e, e.stylesheets), e.unsuspend) {
          var i = e.unsuspend;
          e.unsuspend = null, i();
        }
      }, 6e4 + t);
      0 < e.imgBytes && lc === 0 && (lc = 62500 * gy());
      var l = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && qo(e, e.stylesheets), e.unsuspend)) {
            var i = e.unsuspend;
            e.unsuspend = null, i();
          }
        },
        (e.imgBytes > lc ? 50 : 800) + t
      );
      return e.unsuspend = n, function() {
        e.unsuspend = null, clearTimeout(a), clearTimeout(l);
      };
    } : null;
  }
  function jo() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) qo(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var Ho = null;
  function qo(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Ho = /* @__PURE__ */ new Map(), t.forEach(jy, e), Ho = null, jo.call(e));
  }
  function jy(e, t) {
    if (!(t.state.loading & 4)) {
      var n = Ho.get(e);
      if (n) var a = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), Ho.set(e, n);
        for (var l = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), i = 0; i < l.length; i++) {
          var u = l[i];
          (u.nodeName === "LINK" || u.getAttribute("media") !== "not all") && (n.set(u.dataset.precedence, u), a = u);
        }
        a && n.set(null, a);
      }
      l = t.instance, u = l.getAttribute("data-precedence"), i = n.get(u) || a, i === a && n.set(null, l), n.set(u, l), this.count++, a = jo.bind(this), l.addEventListener("load", a), l.addEventListener("error", a), i ? i.parentNode.insertBefore(l, i.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(l, e.firstChild)), t.state.loading |= 4;
    }
  }
  var pi = {
    $$typeof: ae,
    Provider: null,
    Consumer: null,
    _currentValue: ue,
    _currentValue2: ue,
    _threadCount: 0
  };
  function Hy(e, t, n, a, l, i, u, d, g) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ml(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ml(0), this.hiddenUpdates = Ml(null), this.identifierPrefix = a, this.onUncaughtError = l, this.onCaughtError = i, this.onRecoverableError = u, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = g, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function rm(e, t, n, a, l, i, u, d, g, E, N, L) {
    return e = new Hy(
      e,
      t,
      n,
      u,
      g,
      E,
      N,
      L,
      d
    ), t = 1, i === !0 && (t |= 24), i = Xt(3, null, null, t), e.current = i, i.stateNode = e, t = ju(), t.refCount++, e.pooledCache = t, t.refCount++, i.memoizedState = {
      element: a,
      isDehydrated: n,
      cache: t
    }, Yu(i), e;
  }
  function im(e) {
    return e ? (e = $l, e) : $l;
  }
  function om(e, t, n, a, l, i) {
    l = im(l), a.context === null ? a.context = l : a.pendingContext = l, a = Ua(t), a.payload = { element: n }, i = i === void 0 ? null : i, i !== null && (a.callback = i), n = ja(e, a, t), n !== null && (Mt(n, e, t), Qr(n, e, t));
  }
  function um(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function rc(e, t) {
    um(e, t), (e = e.alternate) && um(e, t);
  }
  function sm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = dl(e, 67108864);
      t !== null && Mt(t, e, 67108864), rc(e, 67108864);
    }
  }
  function cm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Zt();
      t = il(t);
      var n = dl(e, t);
      n !== null && Mt(n, e, t), rc(e, t);
    }
  }
  var Bo = !0;
  function qy(e, t, n, a) {
    var l = U.T;
    U.T = null;
    var i = G.p;
    try {
      G.p = 2, ic(e, t, n, a);
    } finally {
      G.p = i, U.T = l;
    }
  }
  function By(e, t, n, a) {
    var l = U.T;
    U.T = null;
    var i = G.p;
    try {
      G.p = 8, ic(e, t, n, a);
    } finally {
      G.p = i, U.T = l;
    }
  }
  function ic(e, t, n, a) {
    if (Bo) {
      var l = oc(a);
      if (l === null)
        Xs(
          e,
          t,
          a,
          Yo,
          n
        ), dm(e, a);
      else if (Vy(
        l,
        e,
        t,
        n,
        a
      ))
        a.stopPropagation();
      else if (dm(e, a), t & 4 && -1 < Yy.indexOf(e)) {
        for (; l !== null; ) {
          var i = Dn(l);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (i = i.stateNode, i.current.memoizedState.isDehydrated) {
                  var u = Ct(i.pendingLanes);
                  if (u !== 0) {
                    var d = i;
                    for (d.pendingLanes |= 2, d.entangledLanes |= 2; u; ) {
                      var g = 1 << 31 - rt(u);
                      d.entanglements[1] |= g, u &= ~g;
                    }
                    qn(i), (ke & 6) === 0 && (ko = ct() + 500, oi(0));
                  }
                }
                break;
              case 31:
              case 13:
                d = dl(i, 2), d !== null && Mt(d, i, 2), Ao(), rc(i, 2);
            }
          if (i = oc(a), i === null && Xs(
            e,
            t,
            a,
            Yo,
            n
          ), i === l) break;
          l = i;
        }
        l !== null && a.stopPropagation();
      } else
        Xs(
          e,
          t,
          a,
          null,
          n
        );
    }
  }
  function oc(e) {
    return e = Rr(e), uc(e);
  }
  var Yo = null;
  function uc(e) {
    if (Yo = null, e = In(e), e !== null) {
      var t = y(e);
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
    return Yo = e, null;
  }
  function fm(e) {
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
        switch (_i()) {
          case zl:
            return 2;
          case en:
            return 8;
          case tn:
          case Qn:
            return 32;
          case Rl:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var sc = !1, $a = null, Ia = null, Ka = null, mi = /* @__PURE__ */ new Map(), hi = /* @__PURE__ */ new Map(), Za = [], Yy = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function dm(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        $a = null;
        break;
      case "dragenter":
      case "dragleave":
        Ia = null;
        break;
      case "mouseover":
      case "mouseout":
        Ka = null;
        break;
      case "pointerover":
      case "pointerout":
        mi.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        hi.delete(t.pointerId);
    }
  }
  function gi(e, t, n, a, l, i) {
    return e === null || e.nativeEvent !== i ? (e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: a,
      nativeEvent: i,
      targetContainers: [l]
    }, t !== null && (t = Dn(t), t !== null && sm(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function Vy(e, t, n, a, l) {
    switch (t) {
      case "focusin":
        return $a = gi(
          $a,
          e,
          t,
          n,
          a,
          l
        ), !0;
      case "dragenter":
        return Ia = gi(
          Ia,
          e,
          t,
          n,
          a,
          l
        ), !0;
      case "mouseover":
        return Ka = gi(
          Ka,
          e,
          t,
          n,
          a,
          l
        ), !0;
      case "pointerover":
        var i = l.pointerId;
        return mi.set(
          i,
          gi(
            mi.get(i) || null,
            e,
            t,
            n,
            a,
            l
          )
        ), !0;
      case "gotpointercapture":
        return i = l.pointerId, hi.set(
          i,
          gi(
            hi.get(i) || null,
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
  function pm(e) {
    var t = In(e.target);
    if (t !== null) {
      var n = y(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = T(n), t !== null) {
            e.blockedOn = t, _r(e.priority, function() {
              cm(n);
            });
            return;
          }
        } else if (t === 31) {
          if (t = S(n), t !== null) {
            e.blockedOn = t, _r(e.priority, function() {
              cm(n);
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
  function Vo(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = oc(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var a = new n.constructor(
          n.type,
          n
        );
        Yl = a, n.target.dispatchEvent(a), Yl = null;
      } else
        return t = Dn(n), t !== null && sm(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function mm(e, t, n) {
    Vo(e) && n.delete(t);
  }
  function Gy() {
    sc = !1, $a !== null && Vo($a) && ($a = null), Ia !== null && Vo(Ia) && (Ia = null), Ka !== null && Vo(Ka) && (Ka = null), mi.forEach(mm), hi.forEach(mm);
  }
  function Go(e, t) {
    e.blockedOn === t && (e.blockedOn = null, sc || (sc = !0, o.unstable_scheduleCallback(
      o.unstable_NormalPriority,
      Gy
    )));
  }
  var Fo = null;
  function hm(e) {
    Fo !== e && (Fo = e, o.unstable_scheduleCallback(
      o.unstable_NormalPriority,
      function() {
        Fo === e && (Fo = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t], a = e[t + 1], l = e[t + 2];
          if (typeof a != "function") {
            if (uc(a || n) === null)
              continue;
            break;
          }
          var i = Dn(n);
          i !== null && (e.splice(t, 3), t -= 3, os(
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
  function vr(e) {
    function t(g) {
      return Go(g, e);
    }
    $a !== null && Go($a, e), Ia !== null && Go(Ia, e), Ka !== null && Go(Ka, e), mi.forEach(t), hi.forEach(t);
    for (var n = 0; n < Za.length; n++) {
      var a = Za[n];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < Za.length && (n = Za[0], n.blockedOn === null); )
      pm(n), n.blockedOn === null && Za.shift();
    if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
      for (a = 0; a < n.length; a += 3) {
        var l = n[a], i = n[a + 1], u = l[it] || null;
        if (typeof i == "function")
          u || hm(n);
        else if (u) {
          var d = null;
          if (i && i.hasAttribute("formAction")) {
            if (l = i, u = i[it] || null)
              d = u.formAction;
            else if (uc(l) !== null) continue;
          } else d = u.action;
          typeof d == "function" ? n[a + 1] = d : (n.splice(a, 3), a -= 3), hm(n);
        }
      }
  }
  function gm() {
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
  function cc(e) {
    this._internalRoot = e;
  }
  Qo.prototype.render = cc.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(c(409));
    var n = t.current, a = Zt();
    om(n, a, e, t, null, null);
  }, Qo.prototype.unmount = cc.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      om(e.current, 2, null, e, null, null), Ao(), t[xa] = null;
    }
  };
  function Qo(e) {
    this._internalRoot = e;
  }
  Qo.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Ri();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Za.length && t !== 0 && t < Za[n].priority; n++) ;
      Za.splice(n, 0, e), n === 0 && pm(e);
    }
  };
  var ym = s.version;
  if (ym !== "19.2.6")
    throw Error(
      c(
        527,
        ym,
        "19.2.6"
      )
    );
  G.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(c(188)) : (e = Object.keys(e).join(","), Error(c(268, e)));
    return e = z(t), e = e !== null ? O(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var Fy = {
    bundleType: 0,
    version: "19.2.6",
    rendererPackageName: "react-dom",
    currentDispatcherRef: U,
    reconcilerVersion: "19.2.6"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Xo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Xo.isDisabled && Xo.supportsFiber)
      try {
        Xn = Xo.inject(
          Fy
        ), $e = Xo;
      } catch {
      }
  }
  return zm.createRoot = function(e, t) {
    if (!p(e)) throw Error(c(299));
    var n = !1, a = "", l = xd, i = Ad, u = Ed;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (l = t.onUncaughtError), t.onCaughtError !== void 0 && (i = t.onCaughtError), t.onRecoverableError !== void 0 && (u = t.onRecoverableError)), t = rm(
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
      gm
    ), e[xa] = t.current, Qs(e), new cc(t);
  }, zm.hydrateRoot = function(e, t, n) {
    if (!p(e)) throw Error(c(299));
    var a = !1, l = "", i = xd, u = Ad, d = Ed, g = null;
    return n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onUncaughtError !== void 0 && (i = n.onUncaughtError), n.onCaughtError !== void 0 && (u = n.onCaughtError), n.onRecoverableError !== void 0 && (d = n.onRecoverableError), n.formState !== void 0 && (g = n.formState)), t = rm(
      e,
      1,
      !0,
      t,
      n ?? null,
      a,
      l,
      g,
      i,
      u,
      d,
      gm
    ), t.context = im(null), n = t.current, a = Zt(), a = il(a), l = Ua(a), l.callback = null, ja(n, l, a), n = a, t.current.lanes = n, ka(t, n), qn(t), e[xa] = t.current, Qs(e), new Qo(t);
  }, zm.version = "19.2.6", zm;
}
var _1;
function C_() {
  if (_1) return jv.exports;
  _1 = 1;
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (o) {
        console.error(o);
      }
  }
  return r(), jv.exports = __(), jv.exports;
}
var O_ = C_();
const Ob = (r, o, s) => {
  O_.createRoot(s).render(St.createElement(r, o));
}, R_ = ({ targetSelector: r, props: o }) => {
  Ob(kw, o, document.querySelector(r));
}, D_ = ({ targetSelector: r, props: o }) => {
  Ob(xw, o, document.querySelector(r));
}, L_ = ({ targetSelector: r, props: o }) => {
  Ob(ww, o, document.querySelector(r));
};
export {
  ww as CardCarouselNews,
  kw as CardGridNews,
  xw as CardListlNews,
  L_ as initCardCarouselNewsComponent,
  R_ as initCardGridNewsComponent,
  D_ as initCardListNewsComponent
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
