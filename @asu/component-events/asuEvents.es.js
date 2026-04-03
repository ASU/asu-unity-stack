import ft, { forwardRef as oi, Component as ol, createContext as sl, useRef as ll, useImperativeHandle as cl, useId as ul, useContext as xr, createElement as es, useState as ln, useEffect as fn } from "react";
import ts from "react-dom";
function rs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ya = { exports: {} }, Xr = {};
var Pi;
function dl() {
  if (Pi) return Xr;
  Pi = 1;
  var e = ft, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, c = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(k, w, g) {
    var I, R = {}, M = null, q = null;
    g !== void 0 && (M = "" + g), w.key !== void 0 && (M = "" + w.key), w.ref !== void 0 && (q = w.ref);
    for (I in w) i.call(w, I) && !u.hasOwnProperty(I) && (R[I] = w[I]);
    if (k && k.defaultProps) for (I in w = k.defaultProps, w) R[I] === void 0 && (R[I] = w[I]);
    return { $$typeof: t, type: k, key: M, ref: q, props: R, _owner: c.current };
  }
  return Xr.Fragment = r, Xr.jsx = y, Xr.jsxs = y, Xr;
}
var Li;
function fl() {
  return Li || (Li = 1, ya.exports = dl()), ya.exports;
}
var dt = fl();
const {
  entries: ns,
  setPrototypeOf: Fi,
  isFrozen: pl,
  getPrototypeOf: hl,
  getOwnPropertyDescriptor: ml
} = Object;
let {
  freeze: kt,
  seal: zt,
  create: Yn
} = Object, {
  apply: qa,
  construct: Ya
} = typeof Reflect < "u" && Reflect;
kt || (kt = function(t) {
  return t;
});
zt || (zt = function(t) {
  return t;
});
qa || (qa = function(t, r) {
  for (var i = arguments.length, c = new Array(i > 2 ? i - 2 : 0), u = 2; u < i; u++)
    c[u - 2] = arguments[u];
  return t.apply(r, c);
});
Ya || (Ya = function(t) {
  for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), c = 1; c < r; c++)
    i[c - 1] = arguments[c];
  return new t(...i);
});
const Pn = xt(Array.prototype.forEach), gl = xt(Array.prototype.lastIndexOf), ji = xt(Array.prototype.pop), Kr = xt(Array.prototype.push), yl = xt(Array.prototype.splice), Gn = xt(String.prototype.toLowerCase), ba = xt(String.prototype.toString), va = xt(String.prototype.match), Jr = xt(String.prototype.replace), bl = xt(String.prototype.indexOf), vl = xt(String.prototype.trim), Pt = xt(Object.prototype.hasOwnProperty), St = xt(RegExp.prototype.test), Zr = Sl(TypeError);
function xt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), c = 1; c < r; c++)
      i[c - 1] = arguments[c];
    return qa(e, t, i);
  };
}
function Sl(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++)
      r[i] = arguments[i];
    return Ya(e, r);
  };
}
function Ce(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Gn;
  Fi && Fi(e, null);
  let i = t.length;
  for (; i--; ) {
    let c = t[i];
    if (typeof c == "string") {
      const u = r(c);
      u !== c && (pl(t) || (t[i] = u), c = u);
    }
    e[c] = !0;
  }
  return e;
}
function wl(e) {
  for (let t = 0; t < e.length; t++)
    Pt(e, t) || (e[t] = null);
  return e;
}
function or(e) {
  const t = Yn(null);
  for (const [r, i] of ns(e))
    Pt(e, r) && (Array.isArray(i) ? t[r] = wl(i) : i && typeof i == "object" && i.constructor === Object ? t[r] = or(i) : t[r] = i);
  return t;
}
function Qr(e, t) {
  for (; e !== null; ) {
    const i = ml(e, t);
    if (i) {
      if (i.get)
        return xt(i.get);
      if (typeof i.value == "function")
        return xt(i.value);
    }
    e = hl(e);
  }
  function r() {
    return null;
  }
  return r;
}
const Mi = kt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Sa = kt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), wa = kt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), kl = kt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ka = kt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), xl = kt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), zi = kt(["#text"]), $i = kt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), xa = kt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Ui = kt(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Ln = kt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), El = zt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), _l = zt(/<%[\w\W]*|[\w\W]*%>/gm), Tl = zt(/\$\{[\w\W]*/gm), Cl = zt(/^data-[\-\w.\u00B7-\uFFFF]+$/), Al = zt(/^aria-[\-\w]+$/), as = zt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Ol = zt(/^(?:\w+script|data):/i), Rl = zt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), is = zt(/^html$/i), Il = zt(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Hi = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: Al,
  ATTR_WHITESPACE: Rl,
  CUSTOM_ELEMENT: Il,
  DATA_ATTR: Cl,
  DOCTYPE_NAME: is,
  ERB_EXPR: _l,
  IS_ALLOWED_URI: as,
  IS_SCRIPT_OR_DATA: Ol,
  MUSTACHE_EXPR: El,
  TMPLIT_EXPR: Tl
});
const en = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, Nl = function() {
  return typeof window > "u" ? null : window;
}, Dl = function(t, r) {
  if (typeof t != "object" || typeof t.createPolicy != "function")
    return null;
  let i = null;
  const c = "data-tt-policy-suffix";
  r && r.hasAttribute(c) && (i = r.getAttribute(c));
  const u = "dompurify" + (i ? "#" + i : "");
  try {
    return t.createPolicy(u, {
      createHTML(y) {
        return y;
      },
      createScriptURL(y) {
        return y;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + u + " could not be created."), null;
  }
}, Bi = function() {
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
};
function os() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Nl();
  const t = (p) => os(p);
  if (t.version = "3.3.2", t.removed = [], !e || !e.document || e.document.nodeType !== en.document || !e.Element)
    return t.isSupported = !1, t;
  let {
    document: r
  } = e;
  const i = r, c = i.currentScript, {
    DocumentFragment: u,
    HTMLTemplateElement: y,
    Node: k,
    Element: w,
    NodeFilter: g,
    NamedNodeMap: I = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: R,
    DOMParser: M,
    trustedTypes: q
  } = e, E = w.prototype, S = Qr(E, "cloneNode"), P = Qr(E, "remove"), Y = Qr(E, "nextSibling"), U = Qr(E, "childNodes"), G = Qr(E, "parentNode");
  if (typeof y == "function") {
    const p = r.createElement("template");
    p.content && p.content.ownerDocument && (r = p.content.ownerDocument);
  }
  let H, x = "";
  const {
    implementation: ae,
    createNodeIterator: we,
    createDocumentFragment: Ie,
    getElementsByTagName: Fe
  } = r, {
    importNode: Ve
  } = i;
  let ue = Bi();
  t.isSupported = typeof ns == "function" && typeof G == "function" && ae && ae.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: me,
    ERB_EXPR: Re,
    TMPLIT_EXPR: Ne,
    DATA_ATTR: Te,
    ARIA_ATTR: st,
    IS_SCRIPT_OR_DATA: je,
    ATTR_WHITESPACE: Oe,
    CUSTOM_ELEMENT: Be
  } = Hi;
  let {
    IS_ALLOWED_URI: tt
  } = Hi, se = null;
  const j = Ce({}, [...Mi, ...Sa, ...wa, ...ka, ...zi]);
  let C = null;
  const F = Ce({}, [...$i, ...xa, ...Ui, ...Ln]);
  let L = Object.seal(Yn(null, {
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
  })), h = null, ee = null;
  const _ = Object.seal(Yn(null, {
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
  let ie = !0, Q = !0, te = !1, X = !0, ne = !1, de = !0, J = !1, ge = !1, re = !1, le = !1, Ue = !1, ce = !1, it = !0, We = !1;
  const ke = "user-content-";
  let W = !0, oe = !1, Ke = {}, De = null;
  const Pe = Ce({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let er = null;
  const tr = Ce({}, ["audio", "video", "img", "source", "image", "track"]);
  let Ut = null;
  const Ht = Ce({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), pt = "http://www.w3.org/1998/Math/MathML", Tt = "http://www.w3.org/2000/svg", nt = "http://www.w3.org/1999/xhtml";
  let ut = nt, Bt = !1, Wt = null;
  const ht = Ce({}, [pt, Tt, nt], ba);
  let vt = Ce({}, ["mi", "mo", "mn", "ms", "mtext"]), mt = Ce({}, ["annotation-xml"]);
  const Le = Ce({}, ["title", "style", "font", "a", "script"]);
  let lt = null;
  const rr = ["application/xhtml+xml", "text/html"], qt = "text/html";
  let fe = null, ot = null;
  const Ct = r.createElement("form"), nr = function(m) {
    return m instanceof RegExp || m instanceof Function;
  }, At = function() {
    let m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(ot && ot === m)) {
      if ((!m || typeof m != "object") && (m = {}), m = or(m), lt = // eslint-disable-next-line unicorn/prefer-includes
      rr.indexOf(m.PARSER_MEDIA_TYPE) === -1 ? qt : m.PARSER_MEDIA_TYPE, fe = lt === "application/xhtml+xml" ? ba : Gn, se = Pt(m, "ALLOWED_TAGS") ? Ce({}, m.ALLOWED_TAGS, fe) : j, C = Pt(m, "ALLOWED_ATTR") ? Ce({}, m.ALLOWED_ATTR, fe) : F, Wt = Pt(m, "ALLOWED_NAMESPACES") ? Ce({}, m.ALLOWED_NAMESPACES, ba) : ht, Ut = Pt(m, "ADD_URI_SAFE_ATTR") ? Ce(or(Ht), m.ADD_URI_SAFE_ATTR, fe) : Ht, er = Pt(m, "ADD_DATA_URI_TAGS") ? Ce(or(tr), m.ADD_DATA_URI_TAGS, fe) : tr, De = Pt(m, "FORBID_CONTENTS") ? Ce({}, m.FORBID_CONTENTS, fe) : Pe, h = Pt(m, "FORBID_TAGS") ? Ce({}, m.FORBID_TAGS, fe) : or({}), ee = Pt(m, "FORBID_ATTR") ? Ce({}, m.FORBID_ATTR, fe) : or({}), Ke = Pt(m, "USE_PROFILES") ? m.USE_PROFILES : !1, ie = m.ALLOW_ARIA_ATTR !== !1, Q = m.ALLOW_DATA_ATTR !== !1, te = m.ALLOW_UNKNOWN_PROTOCOLS || !1, X = m.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ne = m.SAFE_FOR_TEMPLATES || !1, de = m.SAFE_FOR_XML !== !1, J = m.WHOLE_DOCUMENT || !1, le = m.RETURN_DOM || !1, Ue = m.RETURN_DOM_FRAGMENT || !1, ce = m.RETURN_TRUSTED_TYPE || !1, re = m.FORCE_BODY || !1, it = m.SANITIZE_DOM !== !1, We = m.SANITIZE_NAMED_PROPS || !1, W = m.KEEP_CONTENT !== !1, oe = m.IN_PLACE || !1, tt = m.ALLOWED_URI_REGEXP || as, ut = m.NAMESPACE || nt, vt = m.MATHML_TEXT_INTEGRATION_POINTS || vt, mt = m.HTML_INTEGRATION_POINTS || mt, L = m.CUSTOM_ELEMENT_HANDLING || {}, m.CUSTOM_ELEMENT_HANDLING && nr(m.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (L.tagNameCheck = m.CUSTOM_ELEMENT_HANDLING.tagNameCheck), m.CUSTOM_ELEMENT_HANDLING && nr(m.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (L.attributeNameCheck = m.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), m.CUSTOM_ELEMENT_HANDLING && typeof m.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (L.allowCustomizedBuiltInElements = m.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), ne && (Q = !1), Ue && (le = !0), Ke && (se = Ce({}, zi), C = Yn(null), Ke.html === !0 && (Ce(se, Mi), Ce(C, $i)), Ke.svg === !0 && (Ce(se, Sa), Ce(C, xa), Ce(C, Ln)), Ke.svgFilters === !0 && (Ce(se, wa), Ce(C, xa), Ce(C, Ln)), Ke.mathMl === !0 && (Ce(se, ka), Ce(C, Ui), Ce(C, Ln))), Pt(m, "ADD_TAGS") || (_.tagCheck = null), Pt(m, "ADD_ATTR") || (_.attributeCheck = null), m.ADD_TAGS && (typeof m.ADD_TAGS == "function" ? _.tagCheck = m.ADD_TAGS : (se === j && (se = or(se)), Ce(se, m.ADD_TAGS, fe))), m.ADD_ATTR && (typeof m.ADD_ATTR == "function" ? _.attributeCheck = m.ADD_ATTR : (C === F && (C = or(C)), Ce(C, m.ADD_ATTR, fe))), m.ADD_URI_SAFE_ATTR && Ce(Ut, m.ADD_URI_SAFE_ATTR, fe), m.FORBID_CONTENTS && (De === Pe && (De = or(De)), Ce(De, m.FORBID_CONTENTS, fe)), m.ADD_FORBID_CONTENTS && (De === Pe && (De = or(De)), Ce(De, m.ADD_FORBID_CONTENTS, fe)), W && (se["#text"] = !0), J && Ce(se, ["html", "head", "body"]), se.table && (Ce(se, ["tbody"]), delete h.tbody), m.TRUSTED_TYPES_POLICY) {
        if (typeof m.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Zr('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof m.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Zr('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        H = m.TRUSTED_TYPES_POLICY, x = H.createHTML("");
      } else
        H === void 0 && (H = Dl(q, c)), H !== null && typeof x == "string" && (x = H.createHTML(""));
      kt && kt(m), ot = m;
    }
  }, Yt = Ce({}, [...Sa, ...wa, ...kl]), ar = Ce({}, [...ka, ...xl]), mr = function(m) {
    let T = G(m);
    (!T || !T.tagName) && (T = {
      namespaceURI: ut,
      tagName: "template"
    });
    const V = Gn(m.tagName), ye = Gn(T.tagName);
    return Wt[m.namespaceURI] ? m.namespaceURI === Tt ? T.namespaceURI === nt ? V === "svg" : T.namespaceURI === pt ? V === "svg" && (ye === "annotation-xml" || vt[ye]) : !!Yt[V] : m.namespaceURI === pt ? T.namespaceURI === nt ? V === "math" : T.namespaceURI === Tt ? V === "math" && mt[ye] : !!ar[V] : m.namespaceURI === nt ? T.namespaceURI === Tt && !mt[ye] || T.namespaceURI === pt && !vt[ye] ? !1 : !ar[V] && (Le[V] || !Yt[V]) : !!(lt === "application/xhtml+xml" && Wt[m.namespaceURI]) : !1;
  }, at = function(m) {
    Kr(t.removed, {
      element: m
    });
    try {
      G(m).removeChild(m);
    } catch {
      P(m);
    }
  }, ct = function(m, T) {
    try {
      Kr(t.removed, {
        attribute: T.getAttributeNode(m),
        from: T
      });
    } catch {
      Kr(t.removed, {
        attribute: null,
        from: T
      });
    }
    if (T.removeAttribute(m), m === "is")
      if (le || Ue)
        try {
          at(T);
        } catch {
        }
      else
        try {
          T.setAttribute(m, "");
        } catch {
        }
  }, lr = function(m) {
    let T = null, V = null;
    if (re)
      m = "<remove></remove>" + m;
    else {
      const Se = va(m, /^[\r\n\t ]+/);
      V = Se && Se[0];
    }
    lt === "application/xhtml+xml" && ut === nt && (m = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + m + "</body></html>");
    const ye = H ? H.createHTML(m) : m;
    if (ut === nt)
      try {
        T = new M().parseFromString(ye, lt);
      } catch {
      }
    if (!T || !T.documentElement) {
      T = ae.createDocument(ut, "template", null);
      try {
        T.documentElement.innerHTML = Bt ? x : ye;
      } catch {
      }
    }
    const ve = T.body || T.documentElement;
    return m && V && ve.insertBefore(r.createTextNode(V), ve.childNodes[0] || null), ut === nt ? Fe.call(T, J ? "html" : "body")[0] : J ? T.documentElement : ve;
  }, Ft = function(m) {
    return we.call(
      m.ownerDocument || m,
      m,
      // eslint-disable-next-line no-bitwise
      g.SHOW_ELEMENT | g.SHOW_COMMENT | g.SHOW_TEXT | g.SHOW_PROCESSING_INSTRUCTION | g.SHOW_CDATA_SECTION,
      null
    );
  }, jt = function(m) {
    return m instanceof R && (typeof m.nodeName != "string" || typeof m.textContent != "string" || typeof m.removeChild != "function" || !(m.attributes instanceof I) || typeof m.removeAttribute != "function" || typeof m.setAttribute != "function" || typeof m.namespaceURI != "string" || typeof m.insertBefore != "function" || typeof m.hasChildNodes != "function");
  }, Mt = function(m) {
    return typeof k == "function" && m instanceof k;
  };
  function Qe(p, m, T) {
    Pn(p, (V) => {
      V.call(t, m, T, ot);
    });
  }
  const cr = function(m) {
    let T = null;
    if (Qe(ue.beforeSanitizeElements, m, null), jt(m))
      return at(m), !0;
    const V = fe(m.nodeName);
    if (Qe(ue.uponSanitizeElement, m, {
      tagName: V,
      allowedTags: se
    }), de && m.hasChildNodes() && !Mt(m.firstElementChild) && St(/<[/\w!]/g, m.innerHTML) && St(/<[/\w!]/g, m.textContent) || m.nodeType === en.progressingInstruction || de && m.nodeType === en.comment && St(/<[/\w]/g, m.data))
      return at(m), !0;
    if (!(_.tagCheck instanceof Function && _.tagCheck(V)) && (!se[V] || h[V])) {
      if (!h[V] && ur(V) && (L.tagNameCheck instanceof RegExp && St(L.tagNameCheck, V) || L.tagNameCheck instanceof Function && L.tagNameCheck(V)))
        return !1;
      if (W && !De[V]) {
        const ye = G(m) || m.parentNode, ve = U(m) || m.childNodes;
        if (ve && ye) {
          const Se = ve.length;
          for (let Me = Se - 1; Me >= 0; --Me) {
            const Xe = S(ve[Me], !0);
            Xe.__removalCount = (m.__removalCount || 0) + 1, ye.insertBefore(Xe, Y(m));
          }
        }
      }
      return at(m), !0;
    }
    return m instanceof w && !mr(m) || (V === "noscript" || V === "noembed" || V === "noframes") && St(/<\/no(script|embed|frames)/i, m.innerHTML) ? (at(m), !0) : (ne && m.nodeType === en.text && (T = m.textContent, Pn([me, Re, Ne], (ye) => {
      T = Jr(T, ye, " ");
    }), m.textContent !== T && (Kr(t.removed, {
      element: m.cloneNode()
    }), m.textContent = T)), Qe(ue.afterSanitizeElements, m, null), !1);
  }, Ot = function(m, T, V) {
    if (ee[T] || it && (T === "id" || T === "name") && (V in r || V in Ct))
      return !1;
    if (!(Q && !ee[T] && St(Te, T))) {
      if (!(ie && St(st, T))) {
        if (!(_.attributeCheck instanceof Function && _.attributeCheck(T, m))) {
          if (!C[T] || ee[T]) {
            if (
              // First condition does a very basic check if a) it's basically a valid custom element tagname AND
              // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
              !(ur(m) && (L.tagNameCheck instanceof RegExp && St(L.tagNameCheck, m) || L.tagNameCheck instanceof Function && L.tagNameCheck(m)) && (L.attributeNameCheck instanceof RegExp && St(L.attributeNameCheck, T) || L.attributeNameCheck instanceof Function && L.attributeNameCheck(T, m)) || // Alternative, second condition checks if it's an `is`-attribute, AND
              // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              T === "is" && L.allowCustomizedBuiltInElements && (L.tagNameCheck instanceof RegExp && St(L.tagNameCheck, V) || L.tagNameCheck instanceof Function && L.tagNameCheck(V)))
            ) return !1;
          } else if (!Ut[T]) {
            if (!St(tt, Jr(V, Oe, ""))) {
              if (!((T === "src" || T === "xlink:href" || T === "href") && m !== "script" && bl(V, "data:") === 0 && er[m])) {
                if (!(te && !St(je, Jr(V, Oe, "")))) {
                  if (V)
                    return !1;
                }
              }
            }
          }
        }
      }
    }
    return !0;
  }, ur = function(m) {
    return m !== "annotation-xml" && va(m, Be);
  }, Gt = function(m) {
    Qe(ue.beforeSanitizeAttributes, m, null);
    const {
      attributes: T
    } = m;
    if (!T || jt(m))
      return;
    const V = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: C,
      forceKeepAttr: void 0
    };
    let ye = T.length;
    for (; ye--; ) {
      const ve = T[ye], {
        name: Se,
        namespaceURI: Me,
        value: Xe
      } = ve, gt = fe(Se), Je = Xe;
      let He = Se === "value" ? Je : vl(Je);
      if (V.attrName = gt, V.attrValue = He, V.keepAttr = !0, V.forceKeepAttr = void 0, Qe(ue.uponSanitizeAttribute, m, V), He = V.attrValue, We && (gt === "id" || gt === "name") && (ct(Se, m), He = ke + He), de && St(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, He)) {
        ct(Se, m);
        continue;
      }
      if (gt === "attributename" && va(He, "href")) {
        ct(Se, m);
        continue;
      }
      if (V.forceKeepAttr)
        continue;
      if (!V.keepAttr) {
        ct(Se, m);
        continue;
      }
      if (!X && St(/\/>/i, He)) {
        ct(Se, m);
        continue;
      }
      ne && Pn([me, Re, Ne], (Er) => {
        He = Jr(He, Er, " ");
      });
      const Rt = fe(m.nodeName);
      if (!Ot(Rt, gt, He)) {
        ct(Se, m);
        continue;
      }
      if (H && typeof q == "object" && typeof q.getAttributeType == "function" && !Me)
        switch (q.getAttributeType(Rt, gt)) {
          case "TrustedHTML": {
            He = H.createHTML(He);
            break;
          }
          case "TrustedScriptURL": {
            He = H.createScriptURL(He);
            break;
          }
        }
      if (He !== Je)
        try {
          Me ? m.setAttributeNS(Me, Se, He) : m.setAttribute(Se, He), jt(m) ? at(m) : ji(t.removed);
        } catch {
          ct(Se, m);
        }
    }
    Qe(ue.afterSanitizeAttributes, m, null);
  }, ir = function p(m) {
    let T = null;
    const V = Ft(m);
    for (Qe(ue.beforeSanitizeShadowDOM, m, null); T = V.nextNode(); )
      Qe(ue.uponSanitizeShadowNode, T, null), cr(T), Gt(T), T.content instanceof u && p(T.content);
    Qe(ue.afterSanitizeShadowDOM, m, null);
  };
  return t.sanitize = function(p) {
    let m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, T = null, V = null, ye = null, ve = null;
    if (Bt = !p, Bt && (p = "<!-->"), typeof p != "string" && !Mt(p))
      if (typeof p.toString == "function") {
        if (p = p.toString(), typeof p != "string")
          throw Zr("dirty is not a string, aborting");
      } else
        throw Zr("toString is not a function");
    if (!t.isSupported)
      return p;
    if (ge || At(m), t.removed = [], typeof p == "string" && (oe = !1), oe) {
      if (p.nodeName) {
        const Xe = fe(p.nodeName);
        if (!se[Xe] || h[Xe])
          throw Zr("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (p instanceof k)
      T = lr("<!---->"), V = T.ownerDocument.importNode(p, !0), V.nodeType === en.element && V.nodeName === "BODY" || V.nodeName === "HTML" ? T = V : T.appendChild(V);
    else {
      if (!le && !ne && !J && // eslint-disable-next-line unicorn/prefer-includes
      p.indexOf("<") === -1)
        return H && ce ? H.createHTML(p) : p;
      if (T = lr(p), !T)
        return le ? null : ce ? x : "";
    }
    T && re && at(T.firstChild);
    const Se = Ft(oe ? p : T);
    for (; ye = Se.nextNode(); )
      cr(ye), Gt(ye), ye.content instanceof u && ir(ye.content);
    if (oe)
      return p;
    if (le) {
      if (Ue)
        for (ve = Ie.call(T.ownerDocument); T.firstChild; )
          ve.appendChild(T.firstChild);
      else
        ve = T;
      return (C.shadowroot || C.shadowrootmode) && (ve = Ve.call(i, ve, !0)), ve;
    }
    let Me = J ? T.outerHTML : T.innerHTML;
    return J && se["!doctype"] && T.ownerDocument && T.ownerDocument.doctype && T.ownerDocument.doctype.name && St(is, T.ownerDocument.doctype.name) && (Me = "<!DOCTYPE " + T.ownerDocument.doctype.name + `>
` + Me), ne && Pn([me, Re, Ne], (Xe) => {
      Me = Jr(Me, Xe, " ");
    }), H && ce ? H.createHTML(Me) : Me;
  }, t.setConfig = function() {
    let p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    At(p), ge = !0;
  }, t.clearConfig = function() {
    ot = null, ge = !1;
  }, t.isValidAttribute = function(p, m, T) {
    ot || At({});
    const V = fe(p), ye = fe(m);
    return Ot(V, ye, T);
  }, t.addHook = function(p, m) {
    typeof m == "function" && Kr(ue[p], m);
  }, t.removeHook = function(p, m) {
    if (m !== void 0) {
      const T = gl(ue[p], m);
      return T === -1 ? void 0 : yl(ue[p], T, 1)[0];
    }
    return ji(ue[p]);
  }, t.removeHooks = function(p) {
    ue[p] = [];
  }, t.removeAllHooks = function() {
    ue = Bi();
  }, t;
}
os();
var Ea = { exports: {} }, _a, Wi;
function Pl() {
  if (Wi) return _a;
  Wi = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return _a = e, _a;
}
var Ta, qi;
function Ll() {
  if (qi) return Ta;
  qi = 1;
  var e = /* @__PURE__ */ Pl();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Ta = function() {
    function i(y, k, w, g, I, R) {
      if (R !== e) {
        var M = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw M.name = "Invariant Violation", M;
      }
    }
    i.isRequired = i;
    function c() {
      return i;
    }
    var u = {
      array: i,
      bigint: i,
      bool: i,
      func: i,
      number: i,
      object: i,
      string: i,
      symbol: i,
      any: i,
      arrayOf: c,
      element: i,
      elementType: i,
      instanceOf: c,
      node: i,
      objectOf: c,
      oneOf: c,
      oneOfType: c,
      shape: c,
      exact: c,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return u.PropTypes = u, u;
  }, Ta;
}
var Yi;
function Fl() {
  return Yi || (Yi = 1, Ea.exports = /* @__PURE__ */ Ll()()), Ea.exports;
}
var jl = /* @__PURE__ */ Fl();
const Ge = /* @__PURE__ */ rs(jl);
Ge.shape({
  event: Ge.string,
  action: Ge.string,
  name: Ge.string,
  region: Ge.string,
  section: Ge.string,
  component: Ge.string,
  type: Ge.string,
  text: Ge.string
});
const mn = ({ children: e }) => /* @__PURE__ */ dt.jsx(dt.Fragment, { children: e });
mn.propTypes = {
  children: Ge.oneOfType([
    Ge.arrayOf(Ge.node),
    Ge.node,
    Ge.string
  ])
};
var Ca = { exports: {} };
var Gi;
function Ml() {
  return Gi || (Gi = 1, function(e) {
    (function() {
      var t = {}.hasOwnProperty;
      function r() {
        for (var u = "", y = 0; y < arguments.length; y++) {
          var k = arguments[y];
          k && (u = c(u, i(k)));
        }
        return u;
      }
      function i(u) {
        if (typeof u == "string" || typeof u == "number")
          return u;
        if (typeof u != "object")
          return "";
        if (Array.isArray(u))
          return r.apply(null, u);
        if (u.toString !== Object.prototype.toString && !u.toString.toString().includes("[native code]"))
          return u.toString();
        var y = "";
        for (var k in u)
          t.call(u, k) && u[k] && (y = c(y, k));
        return y;
      }
      function c(u, y) {
        return y ? u ? u + " " + y : u + y : u;
      }
      e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
    })();
  }(Ca)), Ca.exports;
}
Ml();
({
  ...mn.propTypes
});
const ss = ({ children: e, className: t = "container", ...r }) => /* @__PURE__ */ dt.jsx("div", { className: t, ...r, children: /* @__PURE__ */ dt.jsx("div", { className: "row", children: e }) });
ss.propTypes = {
  children: mn.propTypes.children
};
({
  ...ss.propTypes
});
mn.propTypes.children, Ge.oneOf(["0", "3", "4", "6", "8", "9", "12"]);
mn.propTypes.children;
function ls({
  packageName: e = "",
  component: t = "",
  type: r = "",
  configuration: i = {}
}) {
  if (!e || !t) {
    console.error("trackReactComponent: Missing required arguments.");
    return;
  }
  window.uds = window.uds || {}, window.uds.package = window.uds.package || {}, window.uds.package[e] = {
    component: t,
    type: r,
    configuration: i
  };
}
function si(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Vi = { exports: {} }, tn = {}, Xi;
function zl() {
  if (Xi) return tn;
  Xi = 1;
  var e = ft, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, c = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(k, w, g) {
    var I, R = {}, M = null, q = null;
    g !== void 0 && (M = "" + g), w.key !== void 0 && (M = "" + w.key), w.ref !== void 0 && (q = w.ref);
    for (I in w) i.call(w, I) && !u.hasOwnProperty(I) && (R[I] = w[I]);
    if (k && k.defaultProps) for (I in w = k.defaultProps, w) R[I] === void 0 && (R[I] = w[I]);
    return { $$typeof: t, type: k, key: M, ref: q, props: R, _owner: c.current };
  }
  return tn.Fragment = r, tn.jsx = y, tn.jsxs = y, tn;
}
var Ki;
function $l() {
  return Ki || (Ki = 1, Vi.exports = zl()), Vi.exports;
}
var B = $l(), Ji = { exports: {} }, Aa, Zi;
function Ul() {
  if (Zi) return Aa;
  Zi = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Aa = e, Aa;
}
var Oa, Qi;
function Hl() {
  if (Qi) return Oa;
  Qi = 1;
  var e = /* @__PURE__ */ Ul();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Oa = function() {
    function i(y, k, w, g, I, R) {
      if (R !== e) {
        var M = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw M.name = "Invariant Violation", M;
      }
    }
    i.isRequired = i;
    function c() {
      return i;
    }
    var u = {
      array: i,
      bigint: i,
      bool: i,
      func: i,
      number: i,
      object: i,
      string: i,
      symbol: i,
      any: i,
      arrayOf: c,
      element: i,
      elementType: i,
      instanceOf: c,
      node: i,
      objectOf: c,
      oneOf: c,
      oneOfType: c,
      shape: c,
      exact: c,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return u.PropTypes = u, u;
  }, Oa;
}
var eo;
function Bl() {
  return eo || (eo = 1, Ji.exports = /* @__PURE__ */ Hl()()), Ji.exports;
}
var Wl = /* @__PURE__ */ Bl();
const o = /* @__PURE__ */ si(Wl), ql = () => {
  const [e, t] = ln(null), [r, i] = ln(!1), [c, u] = ln(null), [y, k] = ln("");
  return fn(() => {
    y && (() => {
      u(null), i(!0);
      try {
        fetch(y).then((w) => w.json()).then((w) => {
          t(w), i(!1);
        }).catch((w) => {
          u(w), i(!1);
        });
      } catch (w) {
        u(w);
      }
    })();
  }, [y]), [{ data: e, loading: r, error: c }, k];
}, Yl = (e) => (e || []).join(" "), {
  entries: cs,
  setPrototypeOf: to,
  isFrozen: Gl,
  getPrototypeOf: Vl,
  getOwnPropertyDescriptor: Xl
} = Object;
let {
  freeze: Et,
  seal: $t,
  create: Vn
} = Object, {
  apply: Ga,
  construct: Va
} = typeof Reflect < "u" && Reflect;
Et || (Et = function(e) {
  return e;
});
$t || ($t = function(e) {
  return e;
});
Ga || (Ga = function(e, t) {
  for (var r = arguments.length, i = new Array(r > 2 ? r - 2 : 0), c = 2; c < r; c++)
    i[c - 2] = arguments[c];
  return e.apply(t, i);
});
Va || (Va = function(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
    r[i - 1] = arguments[i];
  return new e(...r);
});
const Fn = _t(Array.prototype.forEach), Kl = _t(Array.prototype.lastIndexOf), ro = _t(Array.prototype.pop), rn = _t(Array.prototype.push), Jl = _t(Array.prototype.splice), Xn = _t(String.prototype.toLowerCase), Ra = _t(String.prototype.toString), Ia = _t(String.prototype.match), nn = _t(String.prototype.replace), Zl = _t(String.prototype.indexOf), Ql = _t(String.prototype.trim), Lt = _t(Object.prototype.hasOwnProperty), wt = _t(RegExp.prototype.test), an = ec(TypeError);
function _t(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), c = 1; c < r; c++)
      i[c - 1] = arguments[c];
    return Ga(e, t, i);
  };
}
function ec(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++)
      r[i] = arguments[i];
    return Va(e, r);
  };
}
function Ae(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Xn;
  to && to(e, null);
  let i = t.length;
  for (; i--; ) {
    let c = t[i];
    if (typeof c == "string") {
      const u = r(c);
      u !== c && (Gl(t) || (t[i] = u), c = u);
    }
    e[c] = !0;
  }
  return e;
}
function tc(e) {
  for (let t = 0; t < e.length; t++)
    Lt(e, t) || (e[t] = null);
  return e;
}
function sr(e) {
  const t = Vn(null);
  for (const [r, i] of cs(e))
    Lt(e, r) && (Array.isArray(i) ? t[r] = tc(i) : i && typeof i == "object" && i.constructor === Object ? t[r] = sr(i) : t[r] = i);
  return t;
}
function on(e, t) {
  for (; e !== null; ) {
    const i = Xl(e, t);
    if (i) {
      if (i.get)
        return _t(i.get);
      if (typeof i.value == "function")
        return _t(i.value);
    }
    e = Vl(e);
  }
  function r() {
    return null;
  }
  return r;
}
const no = Et(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Na = Et(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Da = Et(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), rc = Et(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Pa = Et(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), nc = Et(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), ao = Et(["#text"]), io = Et(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), La = Et(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), oo = Et(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), jn = Et(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), ac = $t(/\{\{[\w\W]*|[\w\W]*\}\}/gm), ic = $t(/<%[\w\W]*|[\w\W]*%>/gm), oc = $t(/\$\{[\w\W]*/gm), sc = $t(/^data-[\-\w.\u00B7-\uFFFF]+$/), lc = $t(/^aria-[\-\w]+$/), us = $t(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), cc = $t(/^(?:\w+script|data):/i), uc = $t(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), ds = $t(/^html$/i), dc = $t(/^[a-z][.\w]*(-[.\w]+)+$/i);
var so = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: lc,
  ATTR_WHITESPACE: uc,
  CUSTOM_ELEMENT: dc,
  DATA_ATTR: sc,
  DOCTYPE_NAME: ds,
  ERB_EXPR: ic,
  IS_ALLOWED_URI: us,
  IS_SCRIPT_OR_DATA: cc,
  MUSTACHE_EXPR: ac,
  TMPLIT_EXPR: oc
});
const sn = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, fc = function() {
  return typeof window > "u" ? null : window;
}, pc = function(e, t) {
  if (typeof e != "object" || typeof e.createPolicy != "function")
    return null;
  let r = null;
  const i = "data-tt-policy-suffix";
  t && t.hasAttribute(i) && (r = t.getAttribute(i));
  const c = "dompurify" + (r ? "#" + r : "");
  try {
    return e.createPolicy(c, {
      createHTML(u) {
        return u;
      },
      createScriptURL(u) {
        return u;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + c + " could not be created."), null;
  }
}, lo = function() {
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
};
function fs() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : fc();
  const t = (p) => fs(p);
  if (t.version = "3.3.2", t.removed = [], !e || !e.document || e.document.nodeType !== sn.document || !e.Element)
    return t.isSupported = !1, t;
  let {
    document: r
  } = e;
  const i = r, c = i.currentScript, {
    DocumentFragment: u,
    HTMLTemplateElement: y,
    Node: k,
    Element: w,
    NodeFilter: g,
    NamedNodeMap: I = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: R,
    DOMParser: M,
    trustedTypes: q
  } = e, E = w.prototype, S = on(E, "cloneNode"), P = on(E, "remove"), Y = on(E, "nextSibling"), U = on(E, "childNodes"), G = on(E, "parentNode");
  if (typeof y == "function") {
    const p = r.createElement("template");
    p.content && p.content.ownerDocument && (r = p.content.ownerDocument);
  }
  let H, x = "";
  const {
    implementation: ae,
    createNodeIterator: we,
    createDocumentFragment: Ie,
    getElementsByTagName: Fe
  } = r, {
    importNode: Ve
  } = i;
  let ue = lo();
  t.isSupported = typeof cs == "function" && typeof G == "function" && ae && ae.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: me,
    ERB_EXPR: Re,
    TMPLIT_EXPR: Ne,
    DATA_ATTR: Te,
    ARIA_ATTR: st,
    IS_SCRIPT_OR_DATA: je,
    ATTR_WHITESPACE: Oe,
    CUSTOM_ELEMENT: Be
  } = so;
  let {
    IS_ALLOWED_URI: tt
  } = so, se = null;
  const j = Ae({}, [...no, ...Na, ...Da, ...Pa, ...ao]);
  let C = null;
  const F = Ae({}, [...io, ...La, ...oo, ...jn]);
  let L = Object.seal(Vn(null, {
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
  })), h = null, ee = null;
  const _ = Object.seal(Vn(null, {
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
  let ie = !0, Q = !0, te = !1, X = !0, ne = !1, de = !0, J = !1, ge = !1, re = !1, le = !1, Ue = !1, ce = !1, it = !0, We = !1;
  const ke = "user-content-";
  let W = !0, oe = !1, Ke = {}, De = null;
  const Pe = Ae({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let er = null;
  const tr = Ae({}, ["audio", "video", "img", "source", "image", "track"]);
  let Ut = null;
  const Ht = Ae({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), pt = "http://www.w3.org/1998/Math/MathML", Tt = "http://www.w3.org/2000/svg", nt = "http://www.w3.org/1999/xhtml";
  let ut = nt, Bt = !1, Wt = null;
  const ht = Ae({}, [pt, Tt, nt], Ra);
  let vt = Ae({}, ["mi", "mo", "mn", "ms", "mtext"]), mt = Ae({}, ["annotation-xml"]);
  const Le = Ae({}, ["title", "style", "font", "a", "script"]);
  let lt = null;
  const rr = ["application/xhtml+xml", "text/html"], qt = "text/html";
  let fe = null, ot = null;
  const Ct = r.createElement("form"), nr = function(p) {
    return p instanceof RegExp || p instanceof Function;
  }, At = function() {
    let p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(ot && ot === p)) {
      if ((!p || typeof p != "object") && (p = {}), p = sr(p), lt = // eslint-disable-next-line unicorn/prefer-includes
      rr.indexOf(p.PARSER_MEDIA_TYPE) === -1 ? qt : p.PARSER_MEDIA_TYPE, fe = lt === "application/xhtml+xml" ? Ra : Xn, se = Lt(p, "ALLOWED_TAGS") ? Ae({}, p.ALLOWED_TAGS, fe) : j, C = Lt(p, "ALLOWED_ATTR") ? Ae({}, p.ALLOWED_ATTR, fe) : F, Wt = Lt(p, "ALLOWED_NAMESPACES") ? Ae({}, p.ALLOWED_NAMESPACES, Ra) : ht, Ut = Lt(p, "ADD_URI_SAFE_ATTR") ? Ae(sr(Ht), p.ADD_URI_SAFE_ATTR, fe) : Ht, er = Lt(p, "ADD_DATA_URI_TAGS") ? Ae(sr(tr), p.ADD_DATA_URI_TAGS, fe) : tr, De = Lt(p, "FORBID_CONTENTS") ? Ae({}, p.FORBID_CONTENTS, fe) : Pe, h = Lt(p, "FORBID_TAGS") ? Ae({}, p.FORBID_TAGS, fe) : sr({}), ee = Lt(p, "FORBID_ATTR") ? Ae({}, p.FORBID_ATTR, fe) : sr({}), Ke = Lt(p, "USE_PROFILES") ? p.USE_PROFILES : !1, ie = p.ALLOW_ARIA_ATTR !== !1, Q = p.ALLOW_DATA_ATTR !== !1, te = p.ALLOW_UNKNOWN_PROTOCOLS || !1, X = p.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ne = p.SAFE_FOR_TEMPLATES || !1, de = p.SAFE_FOR_XML !== !1, J = p.WHOLE_DOCUMENT || !1, le = p.RETURN_DOM || !1, Ue = p.RETURN_DOM_FRAGMENT || !1, ce = p.RETURN_TRUSTED_TYPE || !1, re = p.FORCE_BODY || !1, it = p.SANITIZE_DOM !== !1, We = p.SANITIZE_NAMED_PROPS || !1, W = p.KEEP_CONTENT !== !1, oe = p.IN_PLACE || !1, tt = p.ALLOWED_URI_REGEXP || us, ut = p.NAMESPACE || nt, vt = p.MATHML_TEXT_INTEGRATION_POINTS || vt, mt = p.HTML_INTEGRATION_POINTS || mt, L = p.CUSTOM_ELEMENT_HANDLING || {}, p.CUSTOM_ELEMENT_HANDLING && nr(p.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (L.tagNameCheck = p.CUSTOM_ELEMENT_HANDLING.tagNameCheck), p.CUSTOM_ELEMENT_HANDLING && nr(p.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (L.attributeNameCheck = p.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), p.CUSTOM_ELEMENT_HANDLING && typeof p.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (L.allowCustomizedBuiltInElements = p.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), ne && (Q = !1), Ue && (le = !0), Ke && (se = Ae({}, ao), C = Vn(null), Ke.html === !0 && (Ae(se, no), Ae(C, io)), Ke.svg === !0 && (Ae(se, Na), Ae(C, La), Ae(C, jn)), Ke.svgFilters === !0 && (Ae(se, Da), Ae(C, La), Ae(C, jn)), Ke.mathMl === !0 && (Ae(se, Pa), Ae(C, oo), Ae(C, jn))), Lt(p, "ADD_TAGS") || (_.tagCheck = null), Lt(p, "ADD_ATTR") || (_.attributeCheck = null), p.ADD_TAGS && (typeof p.ADD_TAGS == "function" ? _.tagCheck = p.ADD_TAGS : (se === j && (se = sr(se)), Ae(se, p.ADD_TAGS, fe))), p.ADD_ATTR && (typeof p.ADD_ATTR == "function" ? _.attributeCheck = p.ADD_ATTR : (C === F && (C = sr(C)), Ae(C, p.ADD_ATTR, fe))), p.ADD_URI_SAFE_ATTR && Ae(Ut, p.ADD_URI_SAFE_ATTR, fe), p.FORBID_CONTENTS && (De === Pe && (De = sr(De)), Ae(De, p.FORBID_CONTENTS, fe)), p.ADD_FORBID_CONTENTS && (De === Pe && (De = sr(De)), Ae(De, p.ADD_FORBID_CONTENTS, fe)), W && (se["#text"] = !0), J && Ae(se, ["html", "head", "body"]), se.table && (Ae(se, ["tbody"]), delete h.tbody), p.TRUSTED_TYPES_POLICY) {
        if (typeof p.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw an('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof p.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw an('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        H = p.TRUSTED_TYPES_POLICY, x = H.createHTML("");
      } else
        H === void 0 && (H = pc(q, c)), H !== null && typeof x == "string" && (x = H.createHTML(""));
      Et && Et(p), ot = p;
    }
  }, Yt = Ae({}, [...Na, ...Da, ...rc]), ar = Ae({}, [...Pa, ...nc]), mr = function(p) {
    let m = G(p);
    (!m || !m.tagName) && (m = {
      namespaceURI: ut,
      tagName: "template"
    });
    const T = Xn(p.tagName), V = Xn(m.tagName);
    return Wt[p.namespaceURI] ? p.namespaceURI === Tt ? m.namespaceURI === nt ? T === "svg" : m.namespaceURI === pt ? T === "svg" && (V === "annotation-xml" || vt[V]) : !!Yt[T] : p.namespaceURI === pt ? m.namespaceURI === nt ? T === "math" : m.namespaceURI === Tt ? T === "math" && mt[V] : !!ar[T] : p.namespaceURI === nt ? m.namespaceURI === Tt && !mt[V] || m.namespaceURI === pt && !vt[V] ? !1 : !ar[T] && (Le[T] || !Yt[T]) : !!(lt === "application/xhtml+xml" && Wt[p.namespaceURI]) : !1;
  }, at = function(p) {
    rn(t.removed, {
      element: p
    });
    try {
      G(p).removeChild(p);
    } catch {
      P(p);
    }
  }, ct = function(p, m) {
    try {
      rn(t.removed, {
        attribute: m.getAttributeNode(p),
        from: m
      });
    } catch {
      rn(t.removed, {
        attribute: null,
        from: m
      });
    }
    if (m.removeAttribute(p), p === "is")
      if (le || Ue)
        try {
          at(m);
        } catch {
        }
      else
        try {
          m.setAttribute(p, "");
        } catch {
        }
  }, lr = function(p) {
    let m = null, T = null;
    if (re)
      p = "<remove></remove>" + p;
    else {
      const ve = Ia(p, /^[\r\n\t ]+/);
      T = ve && ve[0];
    }
    lt === "application/xhtml+xml" && ut === nt && (p = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + p + "</body></html>");
    const V = H ? H.createHTML(p) : p;
    if (ut === nt)
      try {
        m = new M().parseFromString(V, lt);
      } catch {
      }
    if (!m || !m.documentElement) {
      m = ae.createDocument(ut, "template", null);
      try {
        m.documentElement.innerHTML = Bt ? x : V;
      } catch {
      }
    }
    const ye = m.body || m.documentElement;
    return p && T && ye.insertBefore(r.createTextNode(T), ye.childNodes[0] || null), ut === nt ? Fe.call(m, J ? "html" : "body")[0] : J ? m.documentElement : ye;
  }, Ft = function(p) {
    return we.call(
      p.ownerDocument || p,
      p,
      // eslint-disable-next-line no-bitwise
      g.SHOW_ELEMENT | g.SHOW_COMMENT | g.SHOW_TEXT | g.SHOW_PROCESSING_INSTRUCTION | g.SHOW_CDATA_SECTION,
      null
    );
  }, jt = function(p) {
    return p instanceof R && (typeof p.nodeName != "string" || typeof p.textContent != "string" || typeof p.removeChild != "function" || !(p.attributes instanceof I) || typeof p.removeAttribute != "function" || typeof p.setAttribute != "function" || typeof p.namespaceURI != "string" || typeof p.insertBefore != "function" || typeof p.hasChildNodes != "function");
  }, Mt = function(p) {
    return typeof k == "function" && p instanceof k;
  };
  function Qe(p, m, T) {
    Fn(p, (V) => {
      V.call(t, m, T, ot);
    });
  }
  const cr = function(p) {
    let m = null;
    if (Qe(ue.beforeSanitizeElements, p, null), jt(p))
      return at(p), !0;
    const T = fe(p.nodeName);
    if (Qe(ue.uponSanitizeElement, p, {
      tagName: T,
      allowedTags: se
    }), de && p.hasChildNodes() && !Mt(p.firstElementChild) && wt(/<[/\w!]/g, p.innerHTML) && wt(/<[/\w!]/g, p.textContent) || p.nodeType === sn.progressingInstruction || de && p.nodeType === sn.comment && wt(/<[/\w]/g, p.data))
      return at(p), !0;
    if (!(_.tagCheck instanceof Function && _.tagCheck(T)) && (!se[T] || h[T])) {
      if (!h[T] && ur(T) && (L.tagNameCheck instanceof RegExp && wt(L.tagNameCheck, T) || L.tagNameCheck instanceof Function && L.tagNameCheck(T)))
        return !1;
      if (W && !De[T]) {
        const V = G(p) || p.parentNode, ye = U(p) || p.childNodes;
        if (ye && V) {
          const ve = ye.length;
          for (let Se = ve - 1; Se >= 0; --Se) {
            const Me = S(ye[Se], !0);
            Me.__removalCount = (p.__removalCount || 0) + 1, V.insertBefore(Me, Y(p));
          }
        }
      }
      return at(p), !0;
    }
    return p instanceof w && !mr(p) || (T === "noscript" || T === "noembed" || T === "noframes") && wt(/<\/no(script|embed|frames)/i, p.innerHTML) ? (at(p), !0) : (ne && p.nodeType === sn.text && (m = p.textContent, Fn([me, Re, Ne], (V) => {
      m = nn(m, V, " ");
    }), p.textContent !== m && (rn(t.removed, {
      element: p.cloneNode()
    }), p.textContent = m)), Qe(ue.afterSanitizeElements, p, null), !1);
  }, Ot = function(p, m, T) {
    if (ee[m] || it && (m === "id" || m === "name") && (T in r || T in Ct))
      return !1;
    if (!(Q && !ee[m] && wt(Te, m)) && !(ie && wt(st, m)) && !(_.attributeCheck instanceof Function && _.attributeCheck(m, p))) {
      if (!C[m] || ee[m]) {
        if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(ur(p) && (L.tagNameCheck instanceof RegExp && wt(L.tagNameCheck, p) || L.tagNameCheck instanceof Function && L.tagNameCheck(p)) && (L.attributeNameCheck instanceof RegExp && wt(L.attributeNameCheck, m) || L.attributeNameCheck instanceof Function && L.attributeNameCheck(m, p)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          m === "is" && L.allowCustomizedBuiltInElements && (L.tagNameCheck instanceof RegExp && wt(L.tagNameCheck, T) || L.tagNameCheck instanceof Function && L.tagNameCheck(T)))
        ) return !1;
      } else if (!Ut[m] && !wt(tt, nn(T, Oe, "")) && !((m === "src" || m === "xlink:href" || m === "href") && p !== "script" && Zl(T, "data:") === 0 && er[p]) && !(te && !wt(je, nn(T, Oe, ""))) && T)
        return !1;
    }
    return !0;
  }, ur = function(p) {
    return p !== "annotation-xml" && Ia(p, Be);
  }, Gt = function(p) {
    Qe(ue.beforeSanitizeAttributes, p, null);
    const {
      attributes: m
    } = p;
    if (!m || jt(p))
      return;
    const T = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: C,
      forceKeepAttr: void 0
    };
    let V = m.length;
    for (; V--; ) {
      const ye = m[V], {
        name: ve,
        namespaceURI: Se,
        value: Me
      } = ye, Xe = fe(ve), gt = Me;
      let Je = ve === "value" ? gt : Ql(gt);
      if (T.attrName = Xe, T.attrValue = Je, T.keepAttr = !0, T.forceKeepAttr = void 0, Qe(ue.uponSanitizeAttribute, p, T), Je = T.attrValue, We && (Xe === "id" || Xe === "name") && (ct(ve, p), Je = ke + Je), de && wt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Je)) {
        ct(ve, p);
        continue;
      }
      if (Xe === "attributename" && Ia(Je, "href")) {
        ct(ve, p);
        continue;
      }
      if (T.forceKeepAttr)
        continue;
      if (!T.keepAttr) {
        ct(ve, p);
        continue;
      }
      if (!X && wt(/\/>/i, Je)) {
        ct(ve, p);
        continue;
      }
      ne && Fn([me, Re, Ne], (Rt) => {
        Je = nn(Je, Rt, " ");
      });
      const He = fe(p.nodeName);
      if (!Ot(He, Xe, Je)) {
        ct(ve, p);
        continue;
      }
      if (H && typeof q == "object" && typeof q.getAttributeType == "function" && !Se)
        switch (q.getAttributeType(He, Xe)) {
          case "TrustedHTML": {
            Je = H.createHTML(Je);
            break;
          }
          case "TrustedScriptURL": {
            Je = H.createScriptURL(Je);
            break;
          }
        }
      if (Je !== gt)
        try {
          Se ? p.setAttributeNS(Se, ve, Je) : p.setAttribute(ve, Je), jt(p) ? at(p) : ro(t.removed);
        } catch {
          ct(ve, p);
        }
    }
    Qe(ue.afterSanitizeAttributes, p, null);
  }, ir = function p(m) {
    let T = null;
    const V = Ft(m);
    for (Qe(ue.beforeSanitizeShadowDOM, m, null); T = V.nextNode(); )
      Qe(ue.uponSanitizeShadowNode, T, null), cr(T), Gt(T), T.content instanceof u && p(T.content);
    Qe(ue.afterSanitizeShadowDOM, m, null);
  };
  return t.sanitize = function(p) {
    let m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, T = null, V = null, ye = null, ve = null;
    if (Bt = !p, Bt && (p = "<!-->"), typeof p != "string" && !Mt(p))
      if (typeof p.toString == "function") {
        if (p = p.toString(), typeof p != "string")
          throw an("dirty is not a string, aborting");
      } else
        throw an("toString is not a function");
    if (!t.isSupported)
      return p;
    if (ge || At(m), t.removed = [], typeof p == "string" && (oe = !1), oe) {
      if (p.nodeName) {
        const Xe = fe(p.nodeName);
        if (!se[Xe] || h[Xe])
          throw an("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (p instanceof k)
      T = lr("<!---->"), V = T.ownerDocument.importNode(p, !0), V.nodeType === sn.element && V.nodeName === "BODY" || V.nodeName === "HTML" ? T = V : T.appendChild(V);
    else {
      if (!le && !ne && !J && // eslint-disable-next-line unicorn/prefer-includes
      p.indexOf("<") === -1)
        return H && ce ? H.createHTML(p) : p;
      if (T = lr(p), !T)
        return le ? null : ce ? x : "";
    }
    T && re && at(T.firstChild);
    const Se = Ft(oe ? p : T);
    for (; ye = Se.nextNode(); )
      cr(ye), Gt(ye), ye.content instanceof u && ir(ye.content);
    if (oe)
      return p;
    if (le) {
      if (Ue)
        for (ve = Ie.call(T.ownerDocument); T.firstChild; )
          ve.appendChild(T.firstChild);
      else
        ve = T;
      return (C.shadowroot || C.shadowrootmode) && (ve = Ve.call(i, ve, !0)), ve;
    }
    let Me = J ? T.outerHTML : T.innerHTML;
    return J && se["!doctype"] && T.ownerDocument && T.ownerDocument.doctype && T.ownerDocument.doctype.name && wt(ds, T.ownerDocument.doctype.name) && (Me = "<!DOCTYPE " + T.ownerDocument.doctype.name + `>
` + Me), ne && Fn([me, Re, Ne], (Xe) => {
      Me = nn(Me, Xe, " ");
    }), H && ce ? H.createHTML(Me) : Me;
  }, t.setConfig = function() {
    let p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    At(p), ge = !0;
  }, t.clearConfig = function() {
    ot = null, ge = !1;
  }, t.isValidAttribute = function(p, m, T) {
    ot || At({});
    const V = fe(p), ye = fe(m);
    return Ot(V, ye, T);
  }, t.addHook = function(p, m) {
    typeof m == "function" && rn(ue[p], m);
  }, t.removeHook = function(p, m) {
    if (m !== void 0) {
      const T = Kl(ue[p], m);
      return T === -1 ? void 0 : Jl(ue[p], T, 1)[0];
    }
    return ro(ue[p]);
  }, t.removeHooks = function(p) {
    ue[p] = [];
  }, t.removeAllHooks = function() {
    ue = lo();
  }, t;
}
var co = fs();
let Mn = null;
function hc() {
  return Mn || (typeof window < "u" ? Mn = co(window) : Mn = co), Mn;
}
const Ir = (e) => ({ __html: hc().sanitize(e) });
o.shape({
  event: o.string,
  action: o.string,
  name: o.string,
  region: o.string,
  section: o.string,
  component: o.string,
  type: o.string,
  text: o.string
});
const mc = ({
  event: e = "",
  action: t = "",
  name: r = "",
  type: i = "",
  section: c = "",
  text: u = "",
  region: y = "",
  component: k = ""
}) => {
  const { dataLayer: w } = window, g = {
    event: e.toLowerCase(),
    action: t.toLowerCase(),
    name: r.toLowerCase(),
    type: i.toLowerCase(),
    region: y.toLowerCase(),
    section: c.toLowerCase(),
    text: u.toLowerCase(),
    component: k.toLowerCase()
  };
  w && w.push(g);
}, gn = ({ children: e }) => /* @__PURE__ */ B.jsx(B.Fragment, { children: e });
gn.propTypes = {
  children: o.oneOfType([
    o.arrayOf(o.node),
    o.node,
    o.string
  ])
};
var uo = { exports: {} }, fo;
function gc() {
  return fo || (fo = 1, function(e) {
    (function() {
      var t = {}.hasOwnProperty;
      function r() {
        for (var u = "", y = 0; y < arguments.length; y++) {
          var k = arguments[y];
          k && (u = c(u, i(k)));
        }
        return u;
      }
      function i(u) {
        if (typeof u == "string" || typeof u == "number")
          return u;
        if (typeof u != "object")
          return "";
        if (Array.isArray(u))
          return r.apply(null, u);
        if (u.toString !== Object.prototype.toString && !u.toString.toString().includes("[native code]"))
          return u.toString();
        var y = "";
        for (var k in u)
          t.call(u, k) && u[k] && (y = c(y, k));
        return y;
      }
      function c(u, y) {
        return y ? u ? u + " " + y : u + y : u;
      }
      e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
    })();
  }(uo)), uo.exports;
}
var yc = gc();
const Zt = /* @__PURE__ */ si(yc);
({
  ...gn.propTypes
});
const ps = ({ children: e, className: t = "container", ...r }) => /* @__PURE__ */ B.jsx("div", { className: t, ...r, children: /* @__PURE__ */ B.jsx("div", { className: "row", children: e }) });
ps.propTypes = {
  children: gn.propTypes.children
};
({
  ...ps.propTypes
});
gn.propTypes.children, o.oneOf(["0", "3", "4", "6", "8", "9", "12"]);
gn.propTypes.children;
const bc = o.shape({
  url: o.string,
  altText: o.string,
  cssClass: o.arrayOf(o.string),
  size: o.oneOf(["small", "medium", "large"])
}), Fa = o.shape({
  text: o.string,
  maxWidth: o.string,
  cssClass: o.arrayOf(o.string),
  highlightColor: o.oneOf(["gold", "black"])
}), hs = o.shape({
  color: o.oneOf(["gold", "maroon", "gray", "dark"]),
  content: o.shape({
    icon: o.arrayOf(o.string),
    header: o.string,
    body: o.string
  })
}), li = o.shape({
  text: o.string,
  name: o.string,
  event: o.string,
  action: o.string,
  type: o.string,
  region: o.string,
  section: o.string,
  component: o.string
});
var br = {}, Rr = {}, po;
function vc() {
  if (po) return Rr;
  po = 1;
  var e = ft;
  function t(n) {
    for (var l = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, f = 1; f < arguments.length; f++) l += "&args[]=" + encodeURIComponent(arguments[f]);
    return "Minified React error #" + n + "; visit " + l + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var r = Object.prototype.hasOwnProperty, i = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, c = {}, u = {};
  function y(n) {
    return r.call(u, n) ? !0 : r.call(c, n) ? !1 : i.test(n) ? u[n] = !0 : (c[n] = !0, !1);
  }
  function k(n, l, f, v, D, A, z) {
    this.acceptsBooleans = l === 2 || l === 3 || l === 4, this.attributeName = v, this.attributeNamespace = D, this.mustUseProperty = f, this.propertyName = n, this.type = l, this.sanitizeURL = A, this.removeEmptyString = z;
  }
  var w = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    w[n] = new k(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var l = n[0];
    w[l] = new k(l, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    w[n] = new k(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    w[n] = new k(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    w[n] = new k(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    w[n] = new k(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    w[n] = new k(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    w[n] = new k(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    w[n] = new k(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var g = /[\-:]([a-z])/g;
  function I(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var l = n.replace(
      g,
      I
    );
    w[l] = new k(l, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var l = n.replace(g, I);
    w[l] = new k(l, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var l = n.replace(g, I);
    w[l] = new k(l, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    w[n] = new k(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), w.xlinkHref = new k("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    w[n] = new k(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  var R = {
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
  }, M = ["Webkit", "ms", "Moz", "O"];
  Object.keys(R).forEach(function(n) {
    M.forEach(function(l) {
      l = l + n.charAt(0).toUpperCase() + n.substring(1), R[l] = R[n];
    });
  });
  var q = /["'&<>]/;
  function E(n) {
    if (typeof n == "boolean" || typeof n == "number") return "" + n;
    n = "" + n;
    var l = q.exec(n);
    if (l) {
      var f = "", v, D = 0;
      for (v = l.index; v < n.length; v++) {
        switch (n.charCodeAt(v)) {
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
        D !== v && (f += n.substring(D, v)), D = v + 1, f += l;
      }
      n = D !== v ? f + n.substring(D, v) : f;
    }
    return n;
  }
  var S = /([A-Z])/g, P = /^ms-/, Y = Array.isArray;
  function U(n, l) {
    return { insertionMode: n, selectedValue: l };
  }
  function G(n, l, f) {
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
  var H = /* @__PURE__ */ new Map();
  function x(n, l, f) {
    if (typeof f != "object") throw Error(t(62));
    l = !0;
    for (var v in f) if (r.call(f, v)) {
      var D = f[v];
      if (D != null && typeof D != "boolean" && D !== "") {
        if (v.indexOf("--") === 0) {
          var A = E(v);
          D = E(("" + D).trim());
        } else {
          A = v;
          var z = H.get(A);
          z !== void 0 || (z = E(A.replace(S, "-$1").toLowerCase().replace(P, "-ms-")), H.set(A, z)), A = z, D = typeof D == "number" ? D === 0 || r.call(R, v) ? "" + D : D + "px" : E(("" + D).trim());
        }
        l ? (l = !1, n.push(' style="', A, ":", D)) : n.push(";", A, ":", D);
      }
    }
    l || n.push('"');
  }
  function ae(n, l, f, v) {
    switch (f) {
      case "style":
        x(n, l, v);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < f.length) || f[0] !== "o" && f[0] !== "O" || f[1] !== "n" && f[1] !== "N") {
      if (l = w.hasOwnProperty(f) ? w[f] : null, l !== null) {
        switch (typeof v) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!l.acceptsBooleans) return;
        }
        switch (f = l.attributeName, l.type) {
          case 3:
            v && n.push(" ", f, '=""');
            break;
          case 4:
            v === !0 ? n.push(" ", f, '=""') : v !== !1 && n.push(" ", f, '="', E(v), '"');
            break;
          case 5:
            isNaN(v) || n.push(" ", f, '="', E(v), '"');
            break;
          case 6:
            !isNaN(v) && 1 <= v && n.push(" ", f, '="', E(v), '"');
            break;
          default:
            l.sanitizeURL && (v = "" + v), n.push(" ", f, '="', E(v), '"');
        }
      } else if (y(f)) {
        switch (typeof v) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (l = f.toLowerCase().slice(0, 5), l !== "data-" && l !== "aria-") return;
        }
        n.push(" ", f, '="', E(v), '"');
      }
    }
  }
  function we(n, l, f) {
    if (l != null) {
      if (f != null) throw Error(t(60));
      if (typeof l != "object" || !("__html" in l)) throw Error(t(61));
      l = l.__html, l != null && n.push("" + l);
    }
  }
  function Ie(n) {
    var l = "";
    return e.Children.forEach(n, function(f) {
      f != null && (l += f);
    }), l;
  }
  function Fe(n, l, f, v) {
    n.push(me(f));
    var D = f = null, A;
    for (A in l) if (r.call(l, A)) {
      var z = l[A];
      if (z != null) switch (A) {
        case "children":
          f = z;
          break;
        case "dangerouslySetInnerHTML":
          D = z;
          break;
        default:
          ae(n, v, A, z);
      }
    }
    return n.push(">"), we(n, D, f), typeof f == "string" ? (n.push(E(f)), null) : f;
  }
  var Ve = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, ue = /* @__PURE__ */ new Map();
  function me(n) {
    var l = ue.get(n);
    if (l === void 0) {
      if (!Ve.test(n)) throw Error(t(65, n));
      l = "<" + n, ue.set(n, l);
    }
    return l;
  }
  function Re(n, l, f, v, D) {
    switch (l) {
      case "select":
        n.push(me("select"));
        var A = null, z = null;
        for (xe in f) if (r.call(f, xe)) {
          var Z = f[xe];
          if (Z != null) switch (xe) {
            case "children":
              A = Z;
              break;
            case "dangerouslySetInnerHTML":
              z = Z;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              ae(n, v, xe, Z);
          }
        }
        return n.push(">"), we(n, z, A), A;
      case "option":
        z = D.selectedValue, n.push(me("option"));
        var pe = Z = null, be = null, xe = null;
        for (A in f) if (r.call(f, A)) {
          var rt = f[A];
          if (rt != null) switch (A) {
            case "children":
              Z = rt;
              break;
            case "selected":
              be = rt;
              break;
            case "dangerouslySetInnerHTML":
              xe = rt;
              break;
            case "value":
              pe = rt;
            default:
              ae(n, v, A, rt);
          }
        }
        if (z != null) if (f = pe !== null ? "" + pe : Ie(Z), Y(z)) {
          for (v = 0; v < z.length; v++)
            if ("" + z[v] === f) {
              n.push(' selected=""');
              break;
            }
        } else "" + z === f && n.push(' selected=""');
        else be && n.push(' selected=""');
        return n.push(">"), we(n, xe, Z), Z;
      case "textarea":
        n.push(me("textarea")), xe = z = A = null;
        for (Z in f) if (r.call(f, Z) && (pe = f[Z], pe != null)) switch (Z) {
          case "children":
            xe = pe;
            break;
          case "value":
            A = pe;
            break;
          case "defaultValue":
            z = pe;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(91));
          default:
            ae(
              n,
              v,
              Z,
              pe
            );
        }
        if (A === null && z !== null && (A = z), n.push(">"), xe != null) {
          if (A != null) throw Error(t(92));
          if (Y(xe) && 1 < xe.length) throw Error(t(93));
          A = "" + xe;
        }
        return typeof A == "string" && A[0] === `
` && n.push(`
`), A !== null && n.push(E("" + A)), null;
      case "input":
        n.push(me("input")), pe = xe = Z = A = null;
        for (z in f) if (r.call(f, z) && (be = f[z], be != null)) switch (z) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, "input"));
          case "defaultChecked":
            pe = be;
            break;
          case "defaultValue":
            Z = be;
            break;
          case "checked":
            xe = be;
            break;
          case "value":
            A = be;
            break;
          default:
            ae(n, v, z, be);
        }
        return xe !== null ? ae(n, v, "checked", xe) : pe !== null && ae(n, v, "checked", pe), A !== null ? ae(n, v, "value", A) : Z !== null && ae(n, v, "value", Z), n.push("/>"), null;
      case "menuitem":
        n.push(me("menuitem"));
        for (var Vt in f) if (r.call(f, Vt) && (A = f[Vt], A != null)) switch (Vt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            ae(n, v, Vt, A);
        }
        return n.push(">"), null;
      case "title":
        n.push(me("title")), A = null;
        for (rt in f) if (r.call(f, rt) && (z = f[rt], z != null)) switch (rt) {
          case "children":
            A = z;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(434));
          default:
            ae(n, v, rt, z);
        }
        return n.push(">"), A;
      case "listing":
      case "pre":
        n.push(me(l)), z = A = null;
        for (pe in f) if (r.call(f, pe) && (Z = f[pe], Z != null)) switch (pe) {
          case "children":
            A = Z;
            break;
          case "dangerouslySetInnerHTML":
            z = Z;
            break;
          default:
            ae(n, v, pe, Z);
        }
        if (n.push(">"), z != null) {
          if (A != null) throw Error(t(60));
          if (typeof z != "object" || !("__html" in z)) throw Error(t(61));
          f = z.__html, f != null && (typeof f == "string" && 0 < f.length && f[0] === `
` ? n.push(`
`, f) : n.push("" + f));
        }
        return typeof A == "string" && A[0] === `
` && n.push(`
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
        n.push(me(l));
        for (var Xt in f) if (r.call(f, Xt) && (A = f[Xt], A != null)) switch (Xt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, l));
          default:
            ae(n, v, Xt, A);
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
        return Fe(
          n,
          f,
          l,
          v
        );
      case "html":
        return D.insertionMode === 0 && n.push("<!DOCTYPE html>"), Fe(n, f, l, v);
      default:
        if (l.indexOf("-") === -1 && typeof f.is != "string") return Fe(n, f, l, v);
        n.push(me(l)), z = A = null;
        for (be in f) if (r.call(f, be) && (Z = f[be], Z != null)) switch (be) {
          case "children":
            A = Z;
            break;
          case "dangerouslySetInnerHTML":
            z = Z;
            break;
          case "style":
            x(n, v, Z);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            y(be) && typeof Z != "function" && typeof Z != "symbol" && n.push(" ", be, '="', E(Z), '"');
        }
        return n.push(">"), we(n, z, A), A;
    }
  }
  function Ne(n, l, f) {
    if (n.push('<!--$?--><template id="'), f === null) throw Error(t(395));
    return n.push(f), n.push('"></template>');
  }
  function Te(n, l, f, v) {
    switch (f.insertionMode) {
      case 0:
      case 1:
        return n.push('<div hidden id="'), n.push(l.segmentPrefix), l = v.toString(16), n.push(l), n.push('">');
      case 2:
        return n.push('<svg aria-hidden="true" style="display:none" id="'), n.push(l.segmentPrefix), l = v.toString(16), n.push(l), n.push('">');
      case 3:
        return n.push('<math aria-hidden="true" style="display:none" id="'), n.push(l.segmentPrefix), l = v.toString(16), n.push(l), n.push('">');
      case 4:
        return n.push('<table hidden id="'), n.push(l.segmentPrefix), l = v.toString(16), n.push(l), n.push('">');
      case 5:
        return n.push('<table hidden><tbody id="'), n.push(l.segmentPrefix), l = v.toString(16), n.push(l), n.push('">');
      case 6:
        return n.push('<table hidden><tr id="'), n.push(l.segmentPrefix), l = v.toString(16), n.push(l), n.push('">');
      case 7:
        return n.push('<table hidden><colgroup id="'), n.push(l.segmentPrefix), l = v.toString(16), n.push(l), n.push('">');
      default:
        throw Error(t(397));
    }
  }
  function st(n, l) {
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
  var je = /[<\u2028\u2029]/g;
  function Oe(n) {
    return JSON.stringify(n).replace(je, function(l) {
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
  function Be(n, l) {
    return l = l === void 0 ? "" : l, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: l + "P:", segmentPrefix: l + "S:", boundaryPrefix: l + "B:", idPrefix: l, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: n };
  }
  function tt(n, l, f, v) {
    return f.generateStaticMarkup ? (n.push(E(l)), !1) : (l === "" ? n = v : (v && n.push("<!-- -->"), n.push(E(l)), n = !0), n);
  }
  var se = Object.assign, j = Symbol.for("react.element"), C = Symbol.for("react.portal"), F = Symbol.for("react.fragment"), L = Symbol.for("react.strict_mode"), h = Symbol.for("react.profiler"), ee = Symbol.for("react.provider"), _ = Symbol.for("react.context"), ie = Symbol.for("react.forward_ref"), Q = Symbol.for("react.suspense"), te = Symbol.for("react.suspense_list"), X = Symbol.for("react.memo"), ne = Symbol.for("react.lazy"), de = Symbol.for("react.scope"), J = Symbol.for("react.debug_trace_mode"), ge = Symbol.for("react.legacy_hidden"), re = Symbol.for("react.default_value"), le = Symbol.iterator;
  function Ue(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case F:
        return "Fragment";
      case C:
        return "Portal";
      case h:
        return "Profiler";
      case L:
        return "StrictMode";
      case Q:
        return "Suspense";
      case te:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case _:
        return (n.displayName || "Context") + ".Consumer";
      case ee:
        return (n._context.displayName || "Context") + ".Provider";
      case ie:
        var l = n.render;
        return n = n.displayName, n || (n = l.displayName || l.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case X:
        return l = n.displayName || null, l !== null ? l : Ue(n.type) || "Memo";
      case ne:
        l = n._payload, n = n._init;
        try {
          return Ue(n(l));
        } catch {
        }
    }
    return null;
  }
  var ce = {};
  function it(n, l) {
    if (n = n.contextTypes, !n) return ce;
    var f = {}, v;
    for (v in n) f[v] = l[v];
    return f;
  }
  var We = null;
  function ke(n, l) {
    if (n !== l) {
      n.context._currentValue2 = n.parentValue, n = n.parent;
      var f = l.parent;
      if (n === null) {
        if (f !== null) throw Error(t(401));
      } else {
        if (f === null) throw Error(t(401));
        ke(n, f);
      }
      l.context._currentValue2 = l.value;
    }
  }
  function W(n) {
    n.context._currentValue2 = n.parentValue, n = n.parent, n !== null && W(n);
  }
  function oe(n) {
    var l = n.parent;
    l !== null && oe(l), n.context._currentValue2 = n.value;
  }
  function Ke(n, l) {
    if (n.context._currentValue2 = n.parentValue, n = n.parent, n === null) throw Error(t(402));
    n.depth === l.depth ? ke(n, l) : Ke(n, l);
  }
  function De(n, l) {
    var f = l.parent;
    if (f === null) throw Error(t(402));
    n.depth === f.depth ? ke(n, f) : De(n, f), l.context._currentValue2 = l.value;
  }
  function Pe(n) {
    var l = We;
    l !== n && (l === null ? oe(n) : n === null ? W(l) : l.depth === n.depth ? ke(l, n) : l.depth > n.depth ? Ke(l, n) : De(l, n), We = n);
  }
  var er = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(n, l) {
    n = n._reactInternals, n.queue !== null && n.queue.push(l);
  }, enqueueReplaceState: function(n, l) {
    n = n._reactInternals, n.replace = !0, n.queue = [l];
  }, enqueueForceUpdate: function() {
  } };
  function tr(n, l, f, v) {
    var D = n.state !== void 0 ? n.state : null;
    n.updater = er, n.props = f, n.state = D;
    var A = { queue: [], replace: !1 };
    n._reactInternals = A;
    var z = l.contextType;
    if (n.context = typeof z == "object" && z !== null ? z._currentValue2 : v, z = l.getDerivedStateFromProps, typeof z == "function" && (z = z(f, D), D = z == null ? D : se({}, D, z), n.state = D), typeof l.getDerivedStateFromProps != "function" && typeof n.getSnapshotBeforeUpdate != "function" && (typeof n.UNSAFE_componentWillMount == "function" || typeof n.componentWillMount == "function")) if (l = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), l !== n.state && er.enqueueReplaceState(n, n.state, null), A.queue !== null && 0 < A.queue.length) if (l = A.queue, z = A.replace, A.queue = null, A.replace = !1, z && l.length === 1) n.state = l[0];
    else {
      for (A = z ? l[0] : n.state, D = !0, z = z ? 1 : 0; z < l.length; z++) {
        var Z = l[z];
        Z = typeof Z == "function" ? Z.call(n, A, f, v) : Z, Z != null && (D ? (D = !1, A = se({}, A, Z)) : se(A, Z));
      }
      n.state = A;
    }
    else A.queue = null;
  }
  var Ut = { id: 1, overflow: "" };
  function Ht(n, l, f) {
    var v = n.id;
    n = n.overflow;
    var D = 32 - pt(v) - 1;
    v &= ~(1 << D), f += 1;
    var A = 32 - pt(l) + D;
    if (30 < A) {
      var z = D - D % 5;
      return A = (v & (1 << z) - 1).toString(32), v >>= z, D -= z, { id: 1 << 32 - pt(l) + D | f << D | v, overflow: A + n };
    }
    return { id: 1 << A | f << D | v, overflow: n };
  }
  var pt = Math.clz32 ? Math.clz32 : ut, Tt = Math.log, nt = Math.LN2;
  function ut(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Tt(n) / nt | 0) | 0;
  }
  function Bt(n, l) {
    return n === l && (n !== 0 || 1 / n === 1 / l) || n !== n && l !== l;
  }
  var Wt = typeof Object.is == "function" ? Object.is : Bt, ht = null, vt = null, mt = null, Le = null, lt = !1, rr = !1, qt = 0, fe = null, ot = 0;
  function Ct() {
    if (ht === null) throw Error(t(321));
    return ht;
  }
  function nr() {
    if (0 < ot) throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function At() {
    return Le === null ? mt === null ? (lt = !1, mt = Le = nr()) : (lt = !0, Le = mt) : Le.next === null ? (lt = !1, Le = Le.next = nr()) : (lt = !0, Le = Le.next), Le;
  }
  function Yt() {
    vt = ht = null, rr = !1, mt = null, ot = 0, Le = fe = null;
  }
  function ar(n, l) {
    return typeof l == "function" ? l(n) : l;
  }
  function mr(n, l, f) {
    if (ht = Ct(), Le = At(), lt) {
      var v = Le.queue;
      if (l = v.dispatch, fe !== null && (f = fe.get(v), f !== void 0)) {
        fe.delete(v), v = Le.memoizedState;
        do
          v = n(v, f.action), f = f.next;
        while (f !== null);
        return Le.memoizedState = v, [v, l];
      }
      return [Le.memoizedState, l];
    }
    return n = n === ar ? typeof l == "function" ? l() : l : f !== void 0 ? f(l) : l, Le.memoizedState = n, n = Le.queue = { last: null, dispatch: null }, n = n.dispatch = ct.bind(null, ht, n), [Le.memoizedState, n];
  }
  function at(n, l) {
    if (ht = Ct(), Le = At(), l = l === void 0 ? null : l, Le !== null) {
      var f = Le.memoizedState;
      if (f !== null && l !== null) {
        var v = f[1];
        e: if (v === null) v = !1;
        else {
          for (var D = 0; D < v.length && D < l.length; D++) if (!Wt(l[D], v[D])) {
            v = !1;
            break e;
          }
          v = !0;
        }
        if (v) return f[0];
      }
    }
    return n = n(), Le.memoizedState = [n, l], n;
  }
  function ct(n, l, f) {
    if (25 <= ot) throw Error(t(301));
    if (n === ht) if (rr = !0, n = { action: f, next: null }, fe === null && (fe = /* @__PURE__ */ new Map()), f = fe.get(l), f === void 0) fe.set(l, n);
    else {
      for (l = f; l.next !== null; ) l = l.next;
      l.next = n;
    }
  }
  function lr() {
    throw Error(t(394));
  }
  function Ft() {
  }
  var jt = { readContext: function(n) {
    return n._currentValue2;
  }, useContext: function(n) {
    return Ct(), n._currentValue2;
  }, useMemo: at, useReducer: mr, useRef: function(n) {
    ht = Ct(), Le = At();
    var l = Le.memoizedState;
    return l === null ? (n = { current: n }, Le.memoizedState = n) : l;
  }, useState: function(n) {
    return mr(ar, n);
  }, useInsertionEffect: Ft, useLayoutEffect: function() {
  }, useCallback: function(n, l) {
    return at(function() {
      return n;
    }, l);
  }, useImperativeHandle: Ft, useEffect: Ft, useDebugValue: Ft, useDeferredValue: function(n) {
    return Ct(), n;
  }, useTransition: function() {
    return Ct(), [
      !1,
      lr
    ];
  }, useId: function() {
    var n = vt.treeContext, l = n.overflow;
    n = n.id, n = (n & ~(1 << 32 - pt(n) - 1)).toString(32) + l;
    var f = Mt;
    if (f === null) throw Error(t(404));
    return l = qt++, n = ":" + f.idPrefix + "R" + n, 0 < l && (n += "H" + l.toString(32)), n + ":";
  }, useMutableSource: function(n, l) {
    return Ct(), l(n._source);
  }, useSyncExternalStore: function(n, l, f) {
    if (f === void 0) throw Error(t(407));
    return f();
  } }, Mt = null, Qe = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function cr(n) {
    return console.error(n), null;
  }
  function Ot() {
  }
  function ur(n, l, f, v, D, A, z, Z, pe) {
    var be = [], xe = /* @__PURE__ */ new Set();
    return l = { destination: null, responseState: l, progressiveChunkSize: v, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: xe, pingedTasks: be, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: D === void 0 ? cr : D, onAllReady: Ot, onShellReady: z === void 0 ? Ot : z, onShellError: Ot, onFatalError: Ot }, f = ir(l, 0, null, f, !1, !1), f.parentFlushed = !0, n = Gt(l, n, null, f, xe, ce, null, Ut), be.push(n), l;
  }
  function Gt(n, l, f, v, D, A, z, Z) {
    n.allPendingTasks++, f === null ? n.pendingRootTasks++ : f.pendingTasks++;
    var pe = { node: l, ping: function() {
      var be = n.pingedTasks;
      be.push(pe), be.length === 1 && Er(n);
    }, blockedBoundary: f, blockedSegment: v, abortSet: D, legacyContext: A, context: z, treeContext: Z };
    return D.add(pe), pe;
  }
  function ir(n, l, f, v, D, A) {
    return { status: 0, id: -1, index: l, parentFlushed: !1, chunks: [], children: [], formatContext: v, boundary: f, lastPushedText: D, textEmbedded: A };
  }
  function p(n, l) {
    if (n = n.onError(l), n != null && typeof n != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof n + '" instead');
    return n;
  }
  function m(n, l) {
    var f = n.onShellError;
    f(l), f = n.onFatalError, f(l), n.destination !== null ? (n.status = 2, n.destination.destroy(l)) : (n.status = 1, n.fatalError = l);
  }
  function T(n, l, f, v, D) {
    for (ht = {}, vt = l, qt = 0, n = f(v, D); rr; ) rr = !1, qt = 0, ot += 1, Le = null, n = f(v, D);
    return Yt(), n;
  }
  function V(n, l, f, v) {
    var D = f.render(), A = v.childContextTypes;
    if (A != null) {
      var z = l.legacyContext;
      if (typeof f.getChildContext != "function") v = z;
      else {
        f = f.getChildContext();
        for (var Z in f) if (!(Z in A)) throw Error(t(108, Ue(v) || "Unknown", Z));
        v = se({}, z, f);
      }
      l.legacyContext = v, Se(n, l, D), l.legacyContext = z;
    } else Se(n, l, D);
  }
  function ye(n, l) {
    if (n && n.defaultProps) {
      l = se({}, l), n = n.defaultProps;
      for (var f in n) l[f] === void 0 && (l[f] = n[f]);
      return l;
    }
    return l;
  }
  function ve(n, l, f, v, D) {
    if (typeof f == "function") if (f.prototype && f.prototype.isReactComponent) {
      D = it(f, l.legacyContext);
      var A = f.contextType;
      A = new f(v, typeof A == "object" && A !== null ? A._currentValue2 : D), tr(A, f, v, D), V(n, l, A, f);
    } else {
      A = it(f, l.legacyContext), D = T(n, l, f, v, A);
      var z = qt !== 0;
      if (typeof D == "object" && D !== null && typeof D.render == "function" && D.$$typeof === void 0) tr(D, f, v, A), V(n, l, D, f);
      else if (z) {
        v = l.treeContext, l.treeContext = Ht(v, 1, 0);
        try {
          Se(n, l, D);
        } finally {
          l.treeContext = v;
        }
      } else Se(n, l, D);
    }
    else if (typeof f == "string") {
      switch (D = l.blockedSegment, A = Re(D.chunks, f, v, n.responseState, D.formatContext), D.lastPushedText = !1, z = D.formatContext, D.formatContext = G(z, f, v), Xe(n, l, A), D.formatContext = z, f) {
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
          D.chunks.push("</", f, ">");
      }
      D.lastPushedText = !1;
    } else {
      switch (f) {
        case ge:
        case J:
        case L:
        case h:
        case F:
          Se(n, l, v.children);
          return;
        case te:
          Se(n, l, v.children);
          return;
        case de:
          throw Error(t(343));
        case Q:
          e: {
            f = l.blockedBoundary, D = l.blockedSegment, A = v.fallback, v = v.children, z = /* @__PURE__ */ new Set();
            var Z = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: z, errorDigest: null }, pe = ir(n, D.chunks.length, Z, D.formatContext, !1, !1);
            D.children.push(pe), D.lastPushedText = !1;
            var be = ir(n, 0, null, D.formatContext, !1, !1);
            be.parentFlushed = !0, l.blockedBoundary = Z, l.blockedSegment = be;
            try {
              if (Xe(
                n,
                l,
                v
              ), n.responseState.generateStaticMarkup || be.lastPushedText && be.textEmbedded && be.chunks.push("<!-- -->"), be.status = 1, He(Z, be), Z.pendingTasks === 0) break e;
            } catch (xe) {
              be.status = 4, Z.forceClientRender = !0, Z.errorDigest = p(n, xe);
            } finally {
              l.blockedBoundary = f, l.blockedSegment = D;
            }
            l = Gt(n, A, f, pe, z, l.legacyContext, l.context, l.treeContext), n.pingedTasks.push(l);
          }
          return;
      }
      if (typeof f == "object" && f !== null) switch (f.$$typeof) {
        case ie:
          if (v = T(n, l, f.render, v, D), qt !== 0) {
            f = l.treeContext, l.treeContext = Ht(f, 1, 0);
            try {
              Se(n, l, v);
            } finally {
              l.treeContext = f;
            }
          } else Se(n, l, v);
          return;
        case X:
          f = f.type, v = ye(f, v), ve(n, l, f, v, D);
          return;
        case ee:
          if (D = v.children, f = f._context, v = v.value, A = f._currentValue2, f._currentValue2 = v, z = We, We = v = { parent: z, depth: z === null ? 0 : z.depth + 1, context: f, parentValue: A, value: v }, l.context = v, Se(n, l, D), n = We, n === null) throw Error(t(403));
          v = n.parentValue, n.context._currentValue2 = v === re ? n.context._defaultValue : v, n = We = n.parent, l.context = n;
          return;
        case _:
          v = v.children, v = v(f._currentValue2), Se(n, l, v);
          return;
        case ne:
          D = f._init, f = D(f._payload), v = ye(f, v), ve(
            n,
            l,
            f,
            v,
            void 0
          );
          return;
      }
      throw Error(t(130, f == null ? f : typeof f, ""));
    }
  }
  function Se(n, l, f) {
    if (l.node = f, typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case j:
          ve(n, l, f.type, f.props, f.ref);
          return;
        case C:
          throw Error(t(257));
        case ne:
          var v = f._init;
          f = v(f._payload), Se(n, l, f);
          return;
      }
      if (Y(f)) {
        Me(n, l, f);
        return;
      }
      if (f === null || typeof f != "object" ? v = null : (v = le && f[le] || f["@@iterator"], v = typeof v == "function" ? v : null), v && (v = v.call(f))) {
        if (f = v.next(), !f.done) {
          var D = [];
          do
            D.push(f.value), f = v.next();
          while (!f.done);
          Me(n, l, D);
        }
        return;
      }
      throw n = Object.prototype.toString.call(f), Error(t(31, n === "[object Object]" ? "object with keys {" + Object.keys(f).join(", ") + "}" : n));
    }
    typeof f == "string" ? (v = l.blockedSegment, v.lastPushedText = tt(l.blockedSegment.chunks, f, n.responseState, v.lastPushedText)) : typeof f == "number" && (v = l.blockedSegment, v.lastPushedText = tt(l.blockedSegment.chunks, "" + f, n.responseState, v.lastPushedText));
  }
  function Me(n, l, f) {
    for (var v = f.length, D = 0; D < v; D++) {
      var A = l.treeContext;
      l.treeContext = Ht(A, v, D);
      try {
        Xe(n, l, f[D]);
      } finally {
        l.treeContext = A;
      }
    }
  }
  function Xe(n, l, f) {
    var v = l.blockedSegment.formatContext, D = l.legacyContext, A = l.context;
    try {
      return Se(n, l, f);
    } catch (pe) {
      if (Yt(), typeof pe == "object" && pe !== null && typeof pe.then == "function") {
        f = pe;
        var z = l.blockedSegment, Z = ir(n, z.chunks.length, null, z.formatContext, z.lastPushedText, !0);
        z.children.push(Z), z.lastPushedText = !1, n = Gt(n, l.node, l.blockedBoundary, Z, l.abortSet, l.legacyContext, l.context, l.treeContext).ping, f.then(n, n), l.blockedSegment.formatContext = v, l.legacyContext = D, l.context = A, Pe(A);
      } else throw l.blockedSegment.formatContext = v, l.legacyContext = D, l.context = A, Pe(A), pe;
    }
  }
  function gt(n) {
    var l = n.blockedBoundary;
    n = n.blockedSegment, n.status = 3, Rt(this, l, n);
  }
  function Je(n, l, f) {
    var v = n.blockedBoundary;
    n.blockedSegment.status = 3, v === null ? (l.allPendingTasks--, l.status !== 2 && (l.status = 2, l.destination !== null && l.destination.push(null))) : (v.pendingTasks--, v.forceClientRender || (v.forceClientRender = !0, n = f === void 0 ? Error(t(432)) : f, v.errorDigest = l.onError(n), v.parentFlushed && l.clientRenderedBoundaries.push(v)), v.fallbackAbortableTasks.forEach(function(D) {
      return Je(D, l, f);
    }), v.fallbackAbortableTasks.clear(), l.allPendingTasks--, l.allPendingTasks === 0 && (v = l.onAllReady, v()));
  }
  function He(n, l) {
    if (l.chunks.length === 0 && l.children.length === 1 && l.children[0].boundary === null) {
      var f = l.children[0];
      f.id = l.id, f.parentFlushed = !0, f.status === 1 && He(n, f);
    } else n.completedSegments.push(l);
  }
  function Rt(n, l, f) {
    if (l === null) {
      if (f.parentFlushed) {
        if (n.completedRootSegment !== null) throw Error(t(389));
        n.completedRootSegment = f;
      }
      n.pendingRootTasks--, n.pendingRootTasks === 0 && (n.onShellError = Ot, l = n.onShellReady, l());
    } else l.pendingTasks--, l.forceClientRender || (l.pendingTasks === 0 ? (f.parentFlushed && f.status === 1 && He(l, f), l.parentFlushed && n.completedBoundaries.push(l), l.fallbackAbortableTasks.forEach(gt, n), l.fallbackAbortableTasks.clear()) : f.parentFlushed && f.status === 1 && (He(l, f), l.completedSegments.length === 1 && l.parentFlushed && n.partialBoundaries.push(l)));
    n.allPendingTasks--, n.allPendingTasks === 0 && (n = n.onAllReady, n());
  }
  function Er(n) {
    if (n.status !== 2) {
      var l = We, f = Qe.current;
      Qe.current = jt;
      var v = Mt;
      Mt = n.responseState;
      try {
        var D = n.pingedTasks, A;
        for (A = 0; A < D.length; A++) {
          var z = D[A], Z = n, pe = z.blockedSegment;
          if (pe.status === 0) {
            Pe(z.context);
            try {
              Se(Z, z, z.node), Z.responseState.generateStaticMarkup || pe.lastPushedText && pe.textEmbedded && pe.chunks.push("<!-- -->"), z.abortSet.delete(z), pe.status = 1, Rt(Z, z.blockedBoundary, pe);
            } catch (It) {
              if (Yt(), typeof It == "object" && It !== null && typeof It.then == "function") {
                var be = z.ping;
                It.then(be, be);
              } else {
                z.abortSet.delete(z), pe.status = 4;
                var xe = z.blockedBoundary, rt = It, Vt = p(Z, rt);
                if (xe === null ? m(Z, rt) : (xe.pendingTasks--, xe.forceClientRender || (xe.forceClientRender = !0, xe.errorDigest = Vt, xe.parentFlushed && Z.clientRenderedBoundaries.push(xe))), Z.allPendingTasks--, Z.allPendingTasks === 0) {
                  var Xt = Z.onAllReady;
                  Xt();
                }
              }
            } finally {
            }
          }
        }
        D.splice(0, A), n.destination !== null && Dr(n, n.destination);
      } catch (It) {
        p(n, It), m(n, It);
      } finally {
        Mt = v, Qe.current = f, f === jt && Pe(l);
      }
    }
  }
  function _r(n, l, f) {
    switch (f.parentFlushed = !0, f.status) {
      case 0:
        var v = f.id = n.nextSegmentId++;
        return f.lastPushedText = !1, f.textEmbedded = !1, n = n.responseState, l.push('<template id="'), l.push(n.placeholderPrefix), n = v.toString(16), l.push(n), l.push('"></template>');
      case 1:
        f.status = 2;
        var D = !0;
        v = f.chunks;
        var A = 0;
        f = f.children;
        for (var z = 0; z < f.length; z++) {
          for (D = f[z]; A < D.index; A++) l.push(v[A]);
          D = Tr(n, l, D);
        }
        for (; A < v.length - 1; A++) l.push(v[A]);
        return A < v.length && (D = l.push(v[A])), D;
      default:
        throw Error(t(390));
    }
  }
  function Tr(n, l, f) {
    var v = f.boundary;
    if (v === null) return _r(n, l, f);
    if (v.parentFlushed = !0, v.forceClientRender) return n.responseState.generateStaticMarkup || (v = v.errorDigest, l.push("<!--$!-->"), l.push("<template"), v && (l.push(' data-dgst="'), v = E(v), l.push(v), l.push('"')), l.push("></template>")), _r(n, l, f), n = n.responseState.generateStaticMarkup ? !0 : l.push("<!--/$-->"), n;
    if (0 < v.pendingTasks) {
      v.rootSegmentID = n.nextSegmentId++, 0 < v.completedSegments.length && n.partialBoundaries.push(v);
      var D = n.responseState, A = D.nextSuspenseID++;
      return D = D.boundaryPrefix + A.toString(16), v = v.id = D, Ne(l, n.responseState, v), _r(n, l, f), l.push("<!--/$-->");
    }
    if (v.byteSize > n.progressiveChunkSize) return v.rootSegmentID = n.nextSegmentId++, n.completedBoundaries.push(v), Ne(l, n.responseState, v.id), _r(n, l, f), l.push("<!--/$-->");
    if (n.responseState.generateStaticMarkup || l.push("<!--$-->"), f = v.completedSegments, f.length !== 1) throw Error(t(391));
    return Tr(n, l, f[0]), n = n.responseState.generateStaticMarkup ? !0 : l.push("<!--/$-->"), n;
  }
  function $r(n, l, f) {
    return Te(l, n.responseState, f.formatContext, f.id), Tr(n, l, f), st(l, f.formatContext);
  }
  function Ur(n, l, f) {
    for (var v = f.completedSegments, D = 0; D < v.length; D++) Hr(n, l, f, v[D]);
    if (v.length = 0, n = n.responseState, v = f.id, f = f.rootSegmentID, l.push(n.startInlineScript), n.sentCompleteBoundaryFunction ? l.push('$RC("') : (n.sentCompleteBoundaryFunction = !0, l.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), v === null) throw Error(t(395));
    return f = f.toString(16), l.push(v), l.push('","'), l.push(n.segmentPrefix), l.push(f), l.push('")<\/script>');
  }
  function Hr(n, l, f, v) {
    if (v.status === 2) return !0;
    var D = v.id;
    if (D === -1) {
      if ((v.id = f.rootSegmentID) === -1) throw Error(t(392));
      return $r(n, l, v);
    }
    return $r(n, l, v), n = n.responseState, l.push(n.startInlineScript), n.sentCompleteSegmentFunction ? l.push('$RS("') : (n.sentCompleteSegmentFunction = !0, l.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), l.push(n.segmentPrefix), D = D.toString(16), l.push(D), l.push('","'), l.push(n.placeholderPrefix), l.push(D), l.push('")<\/script>');
  }
  function Dr(n, l) {
    try {
      var f = n.completedRootSegment;
      if (f !== null && n.pendingRootTasks === 0) {
        Tr(n, l, f), n.completedRootSegment = null;
        var v = n.responseState.bootstrapChunks;
        for (f = 0; f < v.length - 1; f++) l.push(v[f]);
        f < v.length && l.push(v[f]);
      }
      var D = n.clientRenderedBoundaries, A;
      for (A = 0; A < D.length; A++) {
        var z = D[A];
        v = l;
        var Z = n.responseState, pe = z.id, be = z.errorDigest, xe = z.errorMessage, rt = z.errorComponentStack;
        if (v.push(Z.startInlineScript), Z.sentClientRenderFunction ? v.push('$RX("') : (Z.sentClientRenderFunction = !0, v.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), pe === null) throw Error(t(395));
        if (v.push(pe), v.push('"'), be || xe || rt) {
          v.push(",");
          var Vt = Oe(be || "");
          v.push(Vt);
        }
        if (xe || rt) {
          v.push(",");
          var Xt = Oe(xe || "");
          v.push(Xt);
        }
        if (rt) {
          v.push(",");
          var It = Oe(rt);
          v.push(It);
        }
        if (!v.push(")<\/script>")) {
          n.destination = null, A++, D.splice(0, A);
          return;
        }
      }
      D.splice(0, A);
      var Cr = n.completedBoundaries;
      for (A = 0; A < Cr.length; A++) if (!Ur(n, l, Cr[A])) {
        n.destination = null, A++, Cr.splice(0, A);
        return;
      }
      Cr.splice(0, A);
      var dr = n.partialBoundaries;
      for (A = 0; A < dr.length; A++) {
        var Wr = dr[A];
        e: {
          D = n, z = l;
          var Ar = Wr.completedSegments;
          for (Z = 0; Z < Ar.length; Z++) if (!Hr(D, z, Wr, Ar[Z])) {
            Z++, Ar.splice(0, Z);
            var wn = !1;
            break e;
          }
          Ar.splice(0, Z), wn = !0;
        }
        if (!wn) {
          n.destination = null, A++, dr.splice(0, A);
          return;
        }
      }
      dr.splice(0, A);
      var gr = n.completedBoundaries;
      for (A = 0; A < gr.length; A++) if (!Ur(n, l, gr[A])) {
        n.destination = null, A++, gr.splice(0, A);
        return;
      }
      gr.splice(0, A);
    } finally {
      n.allPendingTasks === 0 && n.pingedTasks.length === 0 && n.clientRenderedBoundaries.length === 0 && n.completedBoundaries.length === 0 && l.push(null);
    }
  }
  function vn(n, l) {
    try {
      var f = n.abortableTasks;
      f.forEach(function(v) {
        return Je(v, n, l);
      }), f.clear(), n.destination !== null && Dr(n, n.destination);
    } catch (v) {
      p(n, v), m(n, v);
    }
  }
  function Sn() {
  }
  function Br(n, l, f, v) {
    var D = !1, A = null, z = "", Z = { push: function(be) {
      return be !== null && (z += be), !0;
    }, destroy: function(be) {
      D = !0, A = be;
    } }, pe = !1;
    if (n = ur(n, Be(f, l ? l.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, Sn, void 0, function() {
      pe = !0;
    }), Er(n), vn(n, v), n.status === 1) n.status = 2, Z.destroy(n.fatalError);
    else if (n.status !== 2 && n.destination === null) {
      n.destination = Z;
      try {
        Dr(n, Z);
      } catch (be) {
        p(n, be), m(n, be);
      }
    }
    if (D) throw A;
    if (!pe) throw Error(t(426));
    return z;
  }
  return Rr.renderToNodeStream = function() {
    throw Error(t(207));
  }, Rr.renderToStaticMarkup = function(n, l) {
    return Br(n, l, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Rr.renderToStaticNodeStream = function() {
    throw Error(t(208));
  }, Rr.renderToString = function(n, l) {
    return Br(n, l, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Rr.version = "18.3.1", Rr;
}
var zn = {}, ho;
function Sc() {
  if (ho) return zn;
  ho = 1;
  var e = ft;
  function t(a) {
    for (var s = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, d = 1; d < arguments.length; d++) s += "&args[]=" + encodeURIComponent(arguments[d]);
    return "Minified React error #" + a + "; visit " + s + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var r = null, i = 0;
  function c(a, s) {
    if (s.length !== 0) if (512 < s.length) 0 < i && (a.enqueue(new Uint8Array(r.buffer, 0, i)), r = new Uint8Array(512), i = 0), a.enqueue(s);
    else {
      var d = r.length - i;
      d < s.length && (d === 0 ? a.enqueue(r) : (r.set(s.subarray(0, d), i), a.enqueue(r), s = s.subarray(d)), r = new Uint8Array(512), i = 0), r.set(s, i), i += s.length;
    }
  }
  function u(a, s) {
    return c(a, s), !0;
  }
  function y(a) {
    r && 0 < i && (a.enqueue(new Uint8Array(r.buffer, 0, i)), r = null, i = 0);
  }
  var k = new TextEncoder();
  function w(a) {
    return k.encode(a);
  }
  function g(a) {
    return k.encode(a);
  }
  function I(a, s) {
    typeof a.error == "function" ? a.error(s) : a.close();
  }
  var R = Object.prototype.hasOwnProperty, M = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, q = {}, E = {};
  function S(a) {
    return R.call(E, a) ? !0 : R.call(q, a) ? !1 : M.test(a) ? E[a] = !0 : (q[a] = !0, !1);
  }
  function P(a, s, d, b, N, O, $) {
    this.acceptsBooleans = s === 2 || s === 3 || s === 4, this.attributeName = b, this.attributeNamespace = N, this.mustUseProperty = d, this.propertyName = a, this.type = s, this.sanitizeURL = O, this.removeEmptyString = $;
  }
  var Y = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
    Y[a] = new P(a, 0, !1, a, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
    var s = a[0];
    Y[s] = new P(s, 1, !1, a[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
    Y[a] = new P(a, 2, !1, a.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
    Y[a] = new P(a, 2, !1, a, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
    Y[a] = new P(a, 3, !1, a.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(a) {
    Y[a] = new P(a, 3, !0, a, null, !1, !1);
  }), ["capture", "download"].forEach(function(a) {
    Y[a] = new P(a, 4, !1, a, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(a) {
    Y[a] = new P(a, 6, !1, a, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(a) {
    Y[a] = new P(a, 5, !1, a.toLowerCase(), null, !1, !1);
  });
  var U = /[\-:]([a-z])/g;
  function G(a) {
    return a[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
    var s = a.replace(
      U,
      G
    );
    Y[s] = new P(s, 1, !1, a, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
    var s = a.replace(U, G);
    Y[s] = new P(s, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
    var s = a.replace(U, G);
    Y[s] = new P(s, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(a) {
    Y[a] = new P(a, 1, !1, a.toLowerCase(), null, !1, !1);
  }), Y.xlinkHref = new P("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(a) {
    Y[a] = new P(a, 1, !1, a.toLowerCase(), null, !0, !0);
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
  }, x = ["Webkit", "ms", "Moz", "O"];
  Object.keys(H).forEach(function(a) {
    x.forEach(function(s) {
      s = s + a.charAt(0).toUpperCase() + a.substring(1), H[s] = H[a];
    });
  });
  var ae = /["'&<>]/;
  function we(a) {
    if (typeof a == "boolean" || typeof a == "number") return "" + a;
    a = "" + a;
    var s = ae.exec(a);
    if (s) {
      var d = "", b, N = 0;
      for (b = s.index; b < a.length; b++) {
        switch (a.charCodeAt(b)) {
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
        N !== b && (d += a.substring(N, b)), N = b + 1, d += s;
      }
      a = N !== b ? d + a.substring(N, b) : d;
    }
    return a;
  }
  var Ie = /([A-Z])/g, Fe = /^ms-/, Ve = Array.isArray, ue = g("<script>"), me = g("<\/script>"), Re = g('<script src="'), Ne = g('<script type="module" src="'), Te = g('" async=""><\/script>'), st = /(<\/|<)(s)(cript)/gi;
  function je(a, s, d, b) {
    return "" + s + (d === "s" ? "\\u0073" : "\\u0053") + b;
  }
  function Oe(a, s, d, b, N) {
    a = a === void 0 ? "" : a, s = s === void 0 ? ue : g('<script nonce="' + we(s) + '">');
    var O = [];
    if (d !== void 0 && O.push(s, w(("" + d).replace(st, je)), me), b !== void 0) for (d = 0; d < b.length; d++) O.push(Re, w(we(b[d])), Te);
    if (N !== void 0) for (b = 0; b < N.length; b++) O.push(Ne, w(we(N[b])), Te);
    return { bootstrapChunks: O, startInlineScript: s, placeholderPrefix: g(a + "P:"), segmentPrefix: g(a + "S:"), boundaryPrefix: a + "B:", idPrefix: a, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function Be(a, s) {
    return { insertionMode: a, selectedValue: s };
  }
  function tt(a) {
    return Be(a === "http://www.w3.org/2000/svg" ? 2 : a === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function se(a, s, d) {
    switch (s) {
      case "select":
        return Be(1, d.value != null ? d.value : d.defaultValue);
      case "svg":
        return Be(2, null);
      case "math":
        return Be(3, null);
      case "foreignObject":
        return Be(1, null);
      case "table":
        return Be(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return Be(5, null);
      case "colgroup":
        return Be(7, null);
      case "tr":
        return Be(6, null);
    }
    return 4 <= a.insertionMode || a.insertionMode === 0 ? Be(1, null) : a;
  }
  var j = g("<!-- -->");
  function C(a, s, d, b) {
    return s === "" ? b : (b && a.push(j), a.push(w(we(s))), !0);
  }
  var F = /* @__PURE__ */ new Map(), L = g(' style="'), h = g(":"), ee = g(";");
  function _(a, s, d) {
    if (typeof d != "object") throw Error(t(62));
    s = !0;
    for (var b in d) if (R.call(d, b)) {
      var N = d[b];
      if (N != null && typeof N != "boolean" && N !== "") {
        if (b.indexOf("--") === 0) {
          var O = w(we(b));
          N = w(we(("" + N).trim()));
        } else {
          O = b;
          var $ = F.get(O);
          $ !== void 0 || ($ = g(we(O.replace(Ie, "-$1").toLowerCase().replace(Fe, "-ms-"))), F.set(O, $)), O = $, N = typeof N == "number" ? N === 0 || R.call(H, b) ? w("" + N) : w(N + "px") : w(we(("" + N).trim()));
        }
        s ? (s = !1, a.push(L, O, h, N)) : a.push(ee, O, h, N);
      }
    }
    s || a.push(te);
  }
  var ie = g(" "), Q = g('="'), te = g('"'), X = g('=""');
  function ne(a, s, d, b) {
    switch (d) {
      case "style":
        _(a, s, b);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < d.length) || d[0] !== "o" && d[0] !== "O" || d[1] !== "n" && d[1] !== "N") {
      if (s = Y.hasOwnProperty(d) ? Y[d] : null, s !== null) {
        switch (typeof b) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!s.acceptsBooleans) return;
        }
        switch (d = w(s.attributeName), s.type) {
          case 3:
            b && a.push(ie, d, X);
            break;
          case 4:
            b === !0 ? a.push(ie, d, X) : b !== !1 && a.push(ie, d, Q, w(we(b)), te);
            break;
          case 5:
            isNaN(b) || a.push(ie, d, Q, w(we(b)), te);
            break;
          case 6:
            !isNaN(b) && 1 <= b && a.push(ie, d, Q, w(we(b)), te);
            break;
          default:
            s.sanitizeURL && (b = "" + b), a.push(ie, d, Q, w(we(b)), te);
        }
      } else if (S(d)) {
        switch (typeof b) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (s = d.toLowerCase().slice(0, 5), s !== "data-" && s !== "aria-") return;
        }
        a.push(ie, w(d), Q, w(we(b)), te);
      }
    }
  }
  var de = g(">"), J = g("/>");
  function ge(a, s, d) {
    if (s != null) {
      if (d != null) throw Error(t(60));
      if (typeof s != "object" || !("__html" in s)) throw Error(t(61));
      s = s.__html, s != null && a.push(w("" + s));
    }
  }
  function re(a) {
    var s = "";
    return e.Children.forEach(a, function(d) {
      d != null && (s += d);
    }), s;
  }
  var le = g(' selected=""');
  function Ue(a, s, d, b) {
    a.push(ke(d));
    var N = d = null, O;
    for (O in s) if (R.call(s, O)) {
      var $ = s[O];
      if ($ != null) switch (O) {
        case "children":
          d = $;
          break;
        case "dangerouslySetInnerHTML":
          N = $;
          break;
        default:
          ne(a, b, O, $);
      }
    }
    return a.push(de), ge(a, N, d), typeof d == "string" ? (a.push(w(we(d))), null) : d;
  }
  var ce = g(`
`), it = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, We = /* @__PURE__ */ new Map();
  function ke(a) {
    var s = We.get(a);
    if (s === void 0) {
      if (!it.test(a)) throw Error(t(65, a));
      s = g("<" + a), We.set(a, s);
    }
    return s;
  }
  var W = g("<!DOCTYPE html>");
  function oe(a, s, d, b, N) {
    switch (s) {
      case "select":
        a.push(ke("select"));
        var O = null, $ = null;
        for (Ee in d) if (R.call(d, Ee)) {
          var K = d[Ee];
          if (K != null) switch (Ee) {
            case "children":
              O = K;
              break;
            case "dangerouslySetInnerHTML":
              $ = K;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              ne(a, b, Ee, K);
          }
        }
        return a.push(de), ge(a, $, O), O;
      case "option":
        $ = N.selectedValue, a.push(ke("option"));
        var he = K = null, _e = null, Ee = null;
        for (O in d) if (R.call(d, O)) {
          var et = d[O];
          if (et != null) switch (O) {
            case "children":
              K = et;
              break;
            case "selected":
              _e = et;
              break;
            case "dangerouslySetInnerHTML":
              Ee = et;
              break;
            case "value":
              he = et;
            default:
              ne(a, b, O, et);
          }
        }
        if ($ != null) if (d = he !== null ? "" + he : re(K), Ve($)) {
          for (b = 0; b < $.length; b++)
            if ("" + $[b] === d) {
              a.push(le);
              break;
            }
        } else "" + $ === d && a.push(le);
        else _e && a.push(le);
        return a.push(de), ge(a, Ee, K), K;
      case "textarea":
        a.push(ke("textarea")), Ee = $ = O = null;
        for (K in d) if (R.call(d, K) && (he = d[K], he != null)) switch (K) {
          case "children":
            Ee = he;
            break;
          case "value":
            O = he;
            break;
          case "defaultValue":
            $ = he;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(91));
          default:
            ne(a, b, K, he);
        }
        if (O === null && $ !== null && (O = $), a.push(de), Ee != null) {
          if (O != null) throw Error(t(92));
          if (Ve(Ee) && 1 < Ee.length) throw Error(t(93));
          O = "" + Ee;
        }
        return typeof O == "string" && O[0] === `
` && a.push(ce), O !== null && a.push(w(we("" + O))), null;
      case "input":
        a.push(ke("input")), he = Ee = K = O = null;
        for ($ in d) if (R.call(d, $) && (_e = d[$], _e != null)) switch ($) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, "input"));
          case "defaultChecked":
            he = _e;
            break;
          case "defaultValue":
            K = _e;
            break;
          case "checked":
            Ee = _e;
            break;
          case "value":
            O = _e;
            break;
          default:
            ne(a, b, $, _e);
        }
        return Ee !== null ? ne(
          a,
          b,
          "checked",
          Ee
        ) : he !== null && ne(a, b, "checked", he), O !== null ? ne(a, b, "value", O) : K !== null && ne(a, b, "value", K), a.push(J), null;
      case "menuitem":
        a.push(ke("menuitem"));
        for (var Dt in d) if (R.call(d, Dt) && (O = d[Dt], O != null)) switch (Dt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            ne(a, b, Dt, O);
        }
        return a.push(de), null;
      case "title":
        a.push(ke("title")), O = null;
        for (et in d) if (R.call(d, et) && ($ = d[et], $ != null)) switch (et) {
          case "children":
            O = $;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(434));
          default:
            ne(a, b, et, $);
        }
        return a.push(de), O;
      case "listing":
      case "pre":
        a.push(ke(s)), $ = O = null;
        for (he in d) if (R.call(d, he) && (K = d[he], K != null)) switch (he) {
          case "children":
            O = K;
            break;
          case "dangerouslySetInnerHTML":
            $ = K;
            break;
          default:
            ne(a, b, he, K);
        }
        if (a.push(de), $ != null) {
          if (O != null) throw Error(t(60));
          if (typeof $ != "object" || !("__html" in $)) throw Error(t(61));
          d = $.__html, d != null && (typeof d == "string" && 0 < d.length && d[0] === `
` ? a.push(ce, w(d)) : a.push(w("" + d)));
        }
        return typeof O == "string" && O[0] === `
` && a.push(ce), O;
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
        a.push(ke(s));
        for (var Kt in d) if (R.call(d, Kt) && (O = d[Kt], O != null)) switch (Kt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, s));
          default:
            ne(a, b, Kt, O);
        }
        return a.push(J), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return Ue(a, d, s, b);
      case "html":
        return N.insertionMode === 0 && a.push(W), Ue(a, d, s, b);
      default:
        if (s.indexOf("-") === -1 && typeof d.is != "string") return Ue(a, d, s, b);
        a.push(ke(s)), $ = O = null;
        for (_e in d) if (R.call(d, _e) && (K = d[_e], K != null)) switch (_e) {
          case "children":
            O = K;
            break;
          case "dangerouslySetInnerHTML":
            $ = K;
            break;
          case "style":
            _(a, b, K);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            S(_e) && typeof K != "function" && typeof K != "symbol" && a.push(ie, w(_e), Q, w(we(K)), te);
        }
        return a.push(de), ge(a, $, O), O;
    }
  }
  var Ke = g("</"), De = g(">"), Pe = g('<template id="'), er = g('"></template>'), tr = g("<!--$-->"), Ut = g('<!--$?--><template id="'), Ht = g('"></template>'), pt = g("<!--$!-->"), Tt = g("<!--/$-->"), nt = g("<template"), ut = g('"'), Bt = g(' data-dgst="');
  g(' data-msg="'), g(' data-stck="');
  var Wt = g("></template>");
  function ht(a, s, d) {
    if (c(a, Ut), d === null) throw Error(t(395));
    return c(a, d), u(a, Ht);
  }
  var vt = g('<div hidden id="'), mt = g('">'), Le = g("</div>"), lt = g('<svg aria-hidden="true" style="display:none" id="'), rr = g('">'), qt = g("</svg>"), fe = g('<math aria-hidden="true" style="display:none" id="'), ot = g('">'), Ct = g("</math>"), nr = g('<table hidden id="'), At = g('">'), Yt = g("</table>"), ar = g('<table hidden><tbody id="'), mr = g('">'), at = g("</tbody></table>"), ct = g('<table hidden><tr id="'), lr = g('">'), Ft = g("</tr></table>"), jt = g('<table hidden><colgroup id="'), Mt = g('">'), Qe = g("</colgroup></table>");
  function cr(a, s, d, b) {
    switch (d.insertionMode) {
      case 0:
      case 1:
        return c(a, vt), c(a, s.segmentPrefix), c(a, w(b.toString(16))), u(a, mt);
      case 2:
        return c(a, lt), c(a, s.segmentPrefix), c(a, w(b.toString(16))), u(a, rr);
      case 3:
        return c(a, fe), c(a, s.segmentPrefix), c(a, w(b.toString(16))), u(a, ot);
      case 4:
        return c(a, nr), c(a, s.segmentPrefix), c(a, w(b.toString(16))), u(a, At);
      case 5:
        return c(a, ar), c(a, s.segmentPrefix), c(a, w(b.toString(16))), u(a, mr);
      case 6:
        return c(a, ct), c(a, s.segmentPrefix), c(a, w(b.toString(16))), u(a, lr);
      case 7:
        return c(
          a,
          jt
        ), c(a, s.segmentPrefix), c(a, w(b.toString(16))), u(a, Mt);
      default:
        throw Error(t(397));
    }
  }
  function Ot(a, s) {
    switch (s.insertionMode) {
      case 0:
      case 1:
        return u(a, Le);
      case 2:
        return u(a, qt);
      case 3:
        return u(a, Ct);
      case 4:
        return u(a, Yt);
      case 5:
        return u(a, at);
      case 6:
        return u(a, Ft);
      case 7:
        return u(a, Qe);
      default:
        throw Error(t(397));
    }
  }
  var ur = g('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), Gt = g('$RS("'), ir = g('","'), p = g('")<\/script>'), m = g('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), T = g('$RC("'), V = g('","'), ye = g('")<\/script>'), ve = g('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), Se = g('$RX("'), Me = g('"'), Xe = g(")<\/script>"), gt = g(","), Je = /[<\u2028\u2029]/g;
  function He(a) {
    return JSON.stringify(a).replace(Je, function(s) {
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
  var Rt = Object.assign, Er = Symbol.for("react.element"), _r = Symbol.for("react.portal"), Tr = Symbol.for("react.fragment"), $r = Symbol.for("react.strict_mode"), Ur = Symbol.for("react.profiler"), Hr = Symbol.for("react.provider"), Dr = Symbol.for("react.context"), vn = Symbol.for("react.forward_ref"), Sn = Symbol.for("react.suspense"), Br = Symbol.for("react.suspense_list"), n = Symbol.for("react.memo"), l = Symbol.for("react.lazy"), f = Symbol.for("react.scope"), v = Symbol.for("react.debug_trace_mode"), D = Symbol.for("react.legacy_hidden"), A = Symbol.for("react.default_value"), z = Symbol.iterator;
  function Z(a) {
    if (a == null) return null;
    if (typeof a == "function") return a.displayName || a.name || null;
    if (typeof a == "string") return a;
    switch (a) {
      case Tr:
        return "Fragment";
      case _r:
        return "Portal";
      case Ur:
        return "Profiler";
      case $r:
        return "StrictMode";
      case Sn:
        return "Suspense";
      case Br:
        return "SuspenseList";
    }
    if (typeof a == "object") switch (a.$$typeof) {
      case Dr:
        return (a.displayName || "Context") + ".Consumer";
      case Hr:
        return (a._context.displayName || "Context") + ".Provider";
      case vn:
        var s = a.render;
        return a = a.displayName, a || (a = s.displayName || s.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
      case n:
        return s = a.displayName || null, s !== null ? s : Z(a.type) || "Memo";
      case l:
        s = a._payload, a = a._init;
        try {
          return Z(a(s));
        } catch {
        }
    }
    return null;
  }
  var pe = {};
  function be(a, s) {
    if (a = a.contextTypes, !a) return pe;
    var d = {}, b;
    for (b in a) d[b] = s[b];
    return d;
  }
  var xe = null;
  function rt(a, s) {
    if (a !== s) {
      a.context._currentValue = a.parentValue, a = a.parent;
      var d = s.parent;
      if (a === null) {
        if (d !== null) throw Error(t(401));
      } else {
        if (d === null) throw Error(t(401));
        rt(a, d);
      }
      s.context._currentValue = s.value;
    }
  }
  function Vt(a) {
    a.context._currentValue = a.parentValue, a = a.parent, a !== null && Vt(a);
  }
  function Xt(a) {
    var s = a.parent;
    s !== null && Xt(s), a.context._currentValue = a.value;
  }
  function It(a, s) {
    if (a.context._currentValue = a.parentValue, a = a.parent, a === null) throw Error(t(402));
    a.depth === s.depth ? rt(a, s) : It(a, s);
  }
  function Cr(a, s) {
    var d = s.parent;
    if (d === null) throw Error(t(402));
    a.depth === d.depth ? rt(a, d) : Cr(a, d), s.context._currentValue = s.value;
  }
  function dr(a) {
    var s = xe;
    s !== a && (s === null ? Xt(a) : a === null ? Vt(s) : s.depth === a.depth ? rt(s, a) : s.depth > a.depth ? It(s, a) : Cr(s, a), xe = a);
  }
  var Wr = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(a, s) {
    a = a._reactInternals, a.queue !== null && a.queue.push(s);
  }, enqueueReplaceState: function(a, s) {
    a = a._reactInternals, a.replace = !0, a.queue = [s];
  }, enqueueForceUpdate: function() {
  } };
  function Ar(a, s, d, b) {
    var N = a.state !== void 0 ? a.state : null;
    a.updater = Wr, a.props = d, a.state = N;
    var O = { queue: [], replace: !1 };
    a._reactInternals = O;
    var $ = s.contextType;
    if (a.context = typeof $ == "object" && $ !== null ? $._currentValue : b, $ = s.getDerivedStateFromProps, typeof $ == "function" && ($ = $(d, N), N = $ == null ? N : Rt({}, N, $), a.state = N), typeof s.getDerivedStateFromProps != "function" && typeof a.getSnapshotBeforeUpdate != "function" && (typeof a.UNSAFE_componentWillMount == "function" || typeof a.componentWillMount == "function")) if (s = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), s !== a.state && Wr.enqueueReplaceState(a, a.state, null), O.queue !== null && 0 < O.queue.length) if (s = O.queue, $ = O.replace, O.queue = null, O.replace = !1, $ && s.length === 1) a.state = s[0];
    else {
      for (O = $ ? s[0] : a.state, N = !0, $ = $ ? 1 : 0; $ < s.length; $++) {
        var K = s[$];
        K = typeof K == "function" ? K.call(a, O, d, b) : K, K != null && (N ? (N = !1, O = Rt({}, O, K)) : Rt(O, K));
      }
      a.state = O;
    }
    else O.queue = null;
  }
  var wn = { id: 1, overflow: "" };
  function gr(a, s, d) {
    var b = a.id;
    a = a.overflow;
    var N = 32 - kn(b) - 1;
    b &= ~(1 << N), d += 1;
    var O = 32 - kn(s) + N;
    if (30 < O) {
      var $ = N - N % 5;
      return O = (b & (1 << $) - 1).toString(32), b >>= $, N -= $, { id: 1 << 32 - kn(s) + N | d << N | b, overflow: O + a };
    }
    return { id: 1 << O | d << N | b, overflow: a };
  }
  var kn = Math.clz32 ? Math.clz32 : Zs, Ks = Math.log, Js = Math.LN2;
  function Zs(a) {
    return a >>>= 0, a === 0 ? 32 : 31 - (Ks(a) / Js | 0) | 0;
  }
  function Qs(a, s) {
    return a === s && (a !== 0 || 1 / a === 1 / s) || a !== a && s !== s;
  }
  var el = typeof Object.is == "function" ? Object.is : Qs, fr = null, la = null, xn = null, Ze = null, qr = !1, En = !1, Yr = 0, yr = null, _n = 0;
  function Or() {
    if (fr === null) throw Error(t(321));
    return fr;
  }
  function yi() {
    if (0 < _n) throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function ca() {
    return Ze === null ? xn === null ? (qr = !1, xn = Ze = yi()) : (qr = !0, Ze = xn) : Ze.next === null ? (qr = !1, Ze = Ze.next = yi()) : (qr = !0, Ze = Ze.next), Ze;
  }
  function ua() {
    la = fr = null, En = !1, xn = null, _n = 0, Ze = yr = null;
  }
  function bi(a, s) {
    return typeof s == "function" ? s(a) : s;
  }
  function vi(a, s, d) {
    if (fr = Or(), Ze = ca(), qr) {
      var b = Ze.queue;
      if (s = b.dispatch, yr !== null && (d = yr.get(b), d !== void 0)) {
        yr.delete(b), b = Ze.memoizedState;
        do
          b = a(b, d.action), d = d.next;
        while (d !== null);
        return Ze.memoizedState = b, [b, s];
      }
      return [Ze.memoizedState, s];
    }
    return a = a === bi ? typeof s == "function" ? s() : s : d !== void 0 ? d(s) : s, Ze.memoizedState = a, a = Ze.queue = { last: null, dispatch: null }, a = a.dispatch = tl.bind(null, fr, a), [Ze.memoizedState, a];
  }
  function Si(a, s) {
    if (fr = Or(), Ze = ca(), s = s === void 0 ? null : s, Ze !== null) {
      var d = Ze.memoizedState;
      if (d !== null && s !== null) {
        var b = d[1];
        e: if (b === null) b = !1;
        else {
          for (var N = 0; N < b.length && N < s.length; N++) if (!el(s[N], b[N])) {
            b = !1;
            break e;
          }
          b = !0;
        }
        if (b) return d[0];
      }
    }
    return a = a(), Ze.memoizedState = [a, s], a;
  }
  function tl(a, s, d) {
    if (25 <= _n) throw Error(t(301));
    if (a === fr) if (En = !0, a = { action: d, next: null }, yr === null && (yr = /* @__PURE__ */ new Map()), d = yr.get(s), d === void 0) yr.set(s, a);
    else {
      for (s = d; s.next !== null; ) s = s.next;
      s.next = a;
    }
  }
  function rl() {
    throw Error(t(394));
  }
  function Tn() {
  }
  var wi = { readContext: function(a) {
    return a._currentValue;
  }, useContext: function(a) {
    return Or(), a._currentValue;
  }, useMemo: Si, useReducer: vi, useRef: function(a) {
    fr = Or(), Ze = ca();
    var s = Ze.memoizedState;
    return s === null ? (a = { current: a }, Ze.memoizedState = a) : s;
  }, useState: function(a) {
    return vi(bi, a);
  }, useInsertionEffect: Tn, useLayoutEffect: function() {
  }, useCallback: function(a, s) {
    return Si(function() {
      return a;
    }, s);
  }, useImperativeHandle: Tn, useEffect: Tn, useDebugValue: Tn, useDeferredValue: function(a) {
    return Or(), a;
  }, useTransition: function() {
    return Or(), [!1, rl];
  }, useId: function() {
    var a = la.treeContext, s = a.overflow;
    a = a.id, a = (a & ~(1 << 32 - kn(a) - 1)).toString(32) + s;
    var d = Cn;
    if (d === null) throw Error(t(404));
    return s = Yr++, a = ":" + d.idPrefix + "R" + a, 0 < s && (a += "H" + s.toString(32)), a + ":";
  }, useMutableSource: function(a, s) {
    return Or(), s(a._source);
  }, useSyncExternalStore: function(a, s, d) {
    if (d === void 0) throw Error(t(407));
    return d();
  } }, Cn = null, da = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function nl(a) {
    return console.error(a), null;
  }
  function Gr() {
  }
  function al(a, s, d, b, N, O, $, K, he) {
    var _e = [], Ee = /* @__PURE__ */ new Set();
    return s = { destination: null, responseState: s, progressiveChunkSize: b === void 0 ? 12800 : b, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: Ee, pingedTasks: _e, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: N === void 0 ? nl : N, onAllReady: O === void 0 ? Gr : O, onShellReady: $ === void 0 ? Gr : $, onShellError: K === void 0 ? Gr : K, onFatalError: he === void 0 ? Gr : he }, d = An(s, 0, null, d, !1, !1), d.parentFlushed = !0, a = fa(s, a, null, d, Ee, pe, null, wn), _e.push(a), s;
  }
  function fa(a, s, d, b, N, O, $, K) {
    a.allPendingTasks++, d === null ? a.pendingRootTasks++ : d.pendingTasks++;
    var he = { node: s, ping: function() {
      var _e = a.pingedTasks;
      _e.push(he), _e.length === 1 && Ai(a);
    }, blockedBoundary: d, blockedSegment: b, abortSet: N, legacyContext: O, context: $, treeContext: K };
    return N.add(he), he;
  }
  function An(a, s, d, b, N, O) {
    return { status: 0, id: -1, index: s, parentFlushed: !1, chunks: [], children: [], formatContext: b, boundary: d, lastPushedText: N, textEmbedded: O };
  }
  function Vr(a, s) {
    if (a = a.onError(s), a != null && typeof a != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof a + '" instead');
    return a;
  }
  function On(a, s) {
    var d = a.onShellError;
    d(s), d = a.onFatalError, d(s), a.destination !== null ? (a.status = 2, I(a.destination, s)) : (a.status = 1, a.fatalError = s);
  }
  function ki(a, s, d, b, N) {
    for (fr = {}, la = s, Yr = 0, a = d(b, N); En; ) En = !1, Yr = 0, _n += 1, Ze = null, a = d(b, N);
    return ua(), a;
  }
  function xi(a, s, d, b) {
    var N = d.render(), O = b.childContextTypes;
    if (O != null) {
      var $ = s.legacyContext;
      if (typeof d.getChildContext != "function") b = $;
      else {
        d = d.getChildContext();
        for (var K in d) if (!(K in O)) throw Error(t(108, Z(b) || "Unknown", K));
        b = Rt({}, $, d);
      }
      s.legacyContext = b, Nt(a, s, N), s.legacyContext = $;
    } else Nt(a, s, N);
  }
  function Ei(a, s) {
    if (a && a.defaultProps) {
      s = Rt({}, s), a = a.defaultProps;
      for (var d in a) s[d] === void 0 && (s[d] = a[d]);
      return s;
    }
    return s;
  }
  function pa(a, s, d, b, N) {
    if (typeof d == "function") if (d.prototype && d.prototype.isReactComponent) {
      N = be(d, s.legacyContext);
      var O = d.contextType;
      O = new d(b, typeof O == "object" && O !== null ? O._currentValue : N), Ar(O, d, b, N), xi(a, s, O, d);
    } else {
      O = be(d, s.legacyContext), N = ki(a, s, d, b, O);
      var $ = Yr !== 0;
      if (typeof N == "object" && N !== null && typeof N.render == "function" && N.$$typeof === void 0) Ar(N, d, b, O), xi(a, s, N, d);
      else if ($) {
        b = s.treeContext, s.treeContext = gr(b, 1, 0);
        try {
          Nt(a, s, N);
        } finally {
          s.treeContext = b;
        }
      } else Nt(a, s, N);
    }
    else if (typeof d == "string") {
      switch (N = s.blockedSegment, O = oe(N.chunks, d, b, a.responseState, N.formatContext), N.lastPushedText = !1, $ = N.formatContext, N.formatContext = se($, d, b), ha(a, s, O), N.formatContext = $, d) {
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
          N.chunks.push(Ke, w(d), De);
      }
      N.lastPushedText = !1;
    } else {
      switch (d) {
        case D:
        case v:
        case $r:
        case Ur:
        case Tr:
          Nt(a, s, b.children);
          return;
        case Br:
          Nt(a, s, b.children);
          return;
        case f:
          throw Error(t(343));
        case Sn:
          e: {
            d = s.blockedBoundary, N = s.blockedSegment, O = b.fallback, b = b.children, $ = /* @__PURE__ */ new Set();
            var K = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: $, errorDigest: null }, he = An(a, N.chunks.length, K, N.formatContext, !1, !1);
            N.children.push(he), N.lastPushedText = !1;
            var _e = An(a, 0, null, N.formatContext, !1, !1);
            _e.parentFlushed = !0, s.blockedBoundary = K, s.blockedSegment = _e;
            try {
              if (ha(
                a,
                s,
                b
              ), _e.lastPushedText && _e.textEmbedded && _e.chunks.push(j), _e.status = 1, Rn(K, _e), K.pendingTasks === 0) break e;
            } catch (Ee) {
              _e.status = 4, K.forceClientRender = !0, K.errorDigest = Vr(a, Ee);
            } finally {
              s.blockedBoundary = d, s.blockedSegment = N;
            }
            s = fa(a, O, d, he, $, s.legacyContext, s.context, s.treeContext), a.pingedTasks.push(s);
          }
          return;
      }
      if (typeof d == "object" && d !== null) switch (d.$$typeof) {
        case vn:
          if (b = ki(a, s, d.render, b, N), Yr !== 0) {
            d = s.treeContext, s.treeContext = gr(d, 1, 0);
            try {
              Nt(a, s, b);
            } finally {
              s.treeContext = d;
            }
          } else Nt(a, s, b);
          return;
        case n:
          d = d.type, b = Ei(d, b), pa(a, s, d, b, N);
          return;
        case Hr:
          if (N = b.children, d = d._context, b = b.value, O = d._currentValue, d._currentValue = b, $ = xe, xe = b = { parent: $, depth: $ === null ? 0 : $.depth + 1, context: d, parentValue: O, value: b }, s.context = b, Nt(a, s, N), a = xe, a === null) throw Error(t(403));
          b = a.parentValue, a.context._currentValue = b === A ? a.context._defaultValue : b, a = xe = a.parent, s.context = a;
          return;
        case Dr:
          b = b.children, b = b(d._currentValue), Nt(a, s, b);
          return;
        case l:
          N = d._init, d = N(d._payload), b = Ei(d, b), pa(a, s, d, b, void 0);
          return;
      }
      throw Error(t(
        130,
        d == null ? d : typeof d,
        ""
      ));
    }
  }
  function Nt(a, s, d) {
    if (s.node = d, typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Er:
          pa(a, s, d.type, d.props, d.ref);
          return;
        case _r:
          throw Error(t(257));
        case l:
          var b = d._init;
          d = b(d._payload), Nt(a, s, d);
          return;
      }
      if (Ve(d)) {
        _i(a, s, d);
        return;
      }
      if (d === null || typeof d != "object" ? b = null : (b = z && d[z] || d["@@iterator"], b = typeof b == "function" ? b : null), b && (b = b.call(d))) {
        if (d = b.next(), !d.done) {
          var N = [];
          do
            N.push(d.value), d = b.next();
          while (!d.done);
          _i(a, s, N);
        }
        return;
      }
      throw a = Object.prototype.toString.call(d), Error(t(31, a === "[object Object]" ? "object with keys {" + Object.keys(d).join(", ") + "}" : a));
    }
    typeof d == "string" ? (b = s.blockedSegment, b.lastPushedText = C(s.blockedSegment.chunks, d, a.responseState, b.lastPushedText)) : typeof d == "number" && (b = s.blockedSegment, b.lastPushedText = C(s.blockedSegment.chunks, "" + d, a.responseState, b.lastPushedText));
  }
  function _i(a, s, d) {
    for (var b = d.length, N = 0; N < b; N++) {
      var O = s.treeContext;
      s.treeContext = gr(O, b, N);
      try {
        ha(a, s, d[N]);
      } finally {
        s.treeContext = O;
      }
    }
  }
  function ha(a, s, d) {
    var b = s.blockedSegment.formatContext, N = s.legacyContext, O = s.context;
    try {
      return Nt(a, s, d);
    } catch (he) {
      if (ua(), typeof he == "object" && he !== null && typeof he.then == "function") {
        d = he;
        var $ = s.blockedSegment, K = An(a, $.chunks.length, null, $.formatContext, $.lastPushedText, !0);
        $.children.push(K), $.lastPushedText = !1, a = fa(a, s.node, s.blockedBoundary, K, s.abortSet, s.legacyContext, s.context, s.treeContext).ping, d.then(a, a), s.blockedSegment.formatContext = b, s.legacyContext = N, s.context = O, dr(O);
      } else throw s.blockedSegment.formatContext = b, s.legacyContext = N, s.context = O, dr(O), he;
    }
  }
  function il(a) {
    var s = a.blockedBoundary;
    a = a.blockedSegment, a.status = 3, Ci(this, s, a);
  }
  function Ti(a, s, d) {
    var b = a.blockedBoundary;
    a.blockedSegment.status = 3, b === null ? (s.allPendingTasks--, s.status !== 2 && (s.status = 2, s.destination !== null && s.destination.close())) : (b.pendingTasks--, b.forceClientRender || (b.forceClientRender = !0, a = d === void 0 ? Error(t(432)) : d, b.errorDigest = s.onError(a), b.parentFlushed && s.clientRenderedBoundaries.push(b)), b.fallbackAbortableTasks.forEach(function(N) {
      return Ti(N, s, d);
    }), b.fallbackAbortableTasks.clear(), s.allPendingTasks--, s.allPendingTasks === 0 && (b = s.onAllReady, b()));
  }
  function Rn(a, s) {
    if (s.chunks.length === 0 && s.children.length === 1 && s.children[0].boundary === null) {
      var d = s.children[0];
      d.id = s.id, d.parentFlushed = !0, d.status === 1 && Rn(a, d);
    } else a.completedSegments.push(s);
  }
  function Ci(a, s, d) {
    if (s === null) {
      if (d.parentFlushed) {
        if (a.completedRootSegment !== null) throw Error(t(389));
        a.completedRootSegment = d;
      }
      a.pendingRootTasks--, a.pendingRootTasks === 0 && (a.onShellError = Gr, s = a.onShellReady, s());
    } else s.pendingTasks--, s.forceClientRender || (s.pendingTasks === 0 ? (d.parentFlushed && d.status === 1 && Rn(s, d), s.parentFlushed && a.completedBoundaries.push(s), s.fallbackAbortableTasks.forEach(il, a), s.fallbackAbortableTasks.clear()) : d.parentFlushed && d.status === 1 && (Rn(s, d), s.completedSegments.length === 1 && s.parentFlushed && a.partialBoundaries.push(s)));
    a.allPendingTasks--, a.allPendingTasks === 0 && (a = a.onAllReady, a());
  }
  function Ai(a) {
    if (a.status !== 2) {
      var s = xe, d = da.current;
      da.current = wi;
      var b = Cn;
      Cn = a.responseState;
      try {
        var N = a.pingedTasks, O;
        for (O = 0; O < N.length; O++) {
          var $ = N[O], K = a, he = $.blockedSegment;
          if (he.status === 0) {
            dr($.context);
            try {
              Nt(K, $, $.node), he.lastPushedText && he.textEmbedded && he.chunks.push(j), $.abortSet.delete($), he.status = 1, Ci(K, $.blockedBoundary, he);
            } catch (Jt) {
              if (ua(), typeof Jt == "object" && Jt !== null && typeof Jt.then == "function") {
                var _e = $.ping;
                Jt.then(_e, _e);
              } else {
                $.abortSet.delete($), he.status = 4;
                var Ee = $.blockedBoundary, et = Jt, Dt = Vr(K, et);
                if (Ee === null ? On(K, et) : (Ee.pendingTasks--, Ee.forceClientRender || (Ee.forceClientRender = !0, Ee.errorDigest = Dt, Ee.parentFlushed && K.clientRenderedBoundaries.push(Ee))), K.allPendingTasks--, K.allPendingTasks === 0) {
                  var Kt = K.onAllReady;
                  Kt();
                }
              }
            } finally {
            }
          }
        }
        N.splice(0, O), a.destination !== null && ma(a, a.destination);
      } catch (Jt) {
        Vr(a, Jt), On(a, Jt);
      } finally {
        Cn = b, da.current = d, d === wi && dr(s);
      }
    }
  }
  function In(a, s, d) {
    switch (d.parentFlushed = !0, d.status) {
      case 0:
        var b = d.id = a.nextSegmentId++;
        return d.lastPushedText = !1, d.textEmbedded = !1, a = a.responseState, c(s, Pe), c(s, a.placeholderPrefix), a = w(b.toString(16)), c(s, a), u(s, er);
      case 1:
        d.status = 2;
        var N = !0;
        b = d.chunks;
        var O = 0;
        d = d.children;
        for (var $ = 0; $ < d.length; $++) {
          for (N = d[$]; O < N.index; O++) c(s, b[O]);
          N = Nn(a, s, N);
        }
        for (; O < b.length - 1; O++) c(s, b[O]);
        return O < b.length && (N = u(s, b[O])), N;
      default:
        throw Error(t(390));
    }
  }
  function Nn(a, s, d) {
    var b = d.boundary;
    if (b === null) return In(a, s, d);
    if (b.parentFlushed = !0, b.forceClientRender) b = b.errorDigest, u(s, pt), c(s, nt), b && (c(s, Bt), c(s, w(we(b))), c(s, ut)), u(s, Wt), In(a, s, d);
    else if (0 < b.pendingTasks) {
      b.rootSegmentID = a.nextSegmentId++, 0 < b.completedSegments.length && a.partialBoundaries.push(b);
      var N = a.responseState, O = N.nextSuspenseID++;
      N = g(N.boundaryPrefix + O.toString(16)), b = b.id = N, ht(s, a.responseState, b), In(a, s, d);
    } else if (b.byteSize > a.progressiveChunkSize) b.rootSegmentID = a.nextSegmentId++, a.completedBoundaries.push(b), ht(s, a.responseState, b.id), In(a, s, d);
    else {
      if (u(s, tr), d = b.completedSegments, d.length !== 1) throw Error(t(391));
      Nn(a, s, d[0]);
    }
    return u(s, Tt);
  }
  function Oi(a, s, d) {
    return cr(s, a.responseState, d.formatContext, d.id), Nn(a, s, d), Ot(s, d.formatContext);
  }
  function Ri(a, s, d) {
    for (var b = d.completedSegments, N = 0; N < b.length; N++) Ii(a, s, d, b[N]);
    if (b.length = 0, a = a.responseState, b = d.id, d = d.rootSegmentID, c(s, a.startInlineScript), a.sentCompleteBoundaryFunction ? c(s, T) : (a.sentCompleteBoundaryFunction = !0, c(s, m)), b === null) throw Error(t(395));
    return d = w(d.toString(16)), c(s, b), c(s, V), c(s, a.segmentPrefix), c(s, d), u(s, ye);
  }
  function Ii(a, s, d, b) {
    if (b.status === 2) return !0;
    var N = b.id;
    if (N === -1) {
      if ((b.id = d.rootSegmentID) === -1) throw Error(t(392));
      return Oi(a, s, b);
    }
    return Oi(a, s, b), a = a.responseState, c(s, a.startInlineScript), a.sentCompleteSegmentFunction ? c(s, Gt) : (a.sentCompleteSegmentFunction = !0, c(s, ur)), c(s, a.segmentPrefix), N = w(N.toString(16)), c(s, N), c(s, ir), c(s, a.placeholderPrefix), c(s, N), u(s, p);
  }
  function ma(a, s) {
    r = new Uint8Array(512), i = 0;
    try {
      var d = a.completedRootSegment;
      if (d !== null && a.pendingRootTasks === 0) {
        Nn(a, s, d), a.completedRootSegment = null;
        var b = a.responseState.bootstrapChunks;
        for (d = 0; d < b.length - 1; d++) c(s, b[d]);
        d < b.length && u(s, b[d]);
      }
      var N = a.clientRenderedBoundaries, O;
      for (O = 0; O < N.length; O++) {
        var $ = N[O];
        b = s;
        var K = a.responseState, he = $.id, _e = $.errorDigest, Ee = $.errorMessage, et = $.errorComponentStack;
        if (c(b, K.startInlineScript), K.sentClientRenderFunction ? c(b, Se) : (K.sentClientRenderFunction = !0, c(
          b,
          ve
        )), he === null) throw Error(t(395));
        c(b, he), c(b, Me), (_e || Ee || et) && (c(b, gt), c(b, w(He(_e || "")))), (Ee || et) && (c(b, gt), c(b, w(He(Ee || "")))), et && (c(b, gt), c(b, w(He(et)))), u(b, Xe);
      }
      N.splice(0, O);
      var Dt = a.completedBoundaries;
      for (O = 0; O < Dt.length; O++) Ri(a, s, Dt[O]);
      Dt.splice(0, O), y(s), r = new Uint8Array(512), i = 0;
      var Kt = a.partialBoundaries;
      for (O = 0; O < Kt.length; O++) {
        var Jt = Kt[O];
        e: {
          N = a, $ = s;
          var Dn = Jt.completedSegments;
          for (K = 0; K < Dn.length; K++) if (!Ii(
            N,
            $,
            Jt,
            Dn[K]
          )) {
            K++, Dn.splice(0, K);
            var Di = !1;
            break e;
          }
          Dn.splice(0, K), Di = !0;
        }
        if (!Di) {
          a.destination = null, O++, Kt.splice(0, O);
          return;
        }
      }
      Kt.splice(0, O);
      var ga = a.completedBoundaries;
      for (O = 0; O < ga.length; O++) Ri(a, s, ga[O]);
      ga.splice(0, O);
    } finally {
      y(s), a.allPendingTasks === 0 && a.pingedTasks.length === 0 && a.clientRenderedBoundaries.length === 0 && a.completedBoundaries.length === 0 && s.close();
    }
  }
  function Ni(a, s) {
    try {
      var d = a.abortableTasks;
      d.forEach(function(b) {
        return Ti(b, a, s);
      }), d.clear(), a.destination !== null && ma(a, a.destination);
    } catch (b) {
      Vr(a, b), On(a, b);
    }
  }
  return zn.renderToReadableStream = function(a, s) {
    return new Promise(function(d, b) {
      var N, O, $ = new Promise(function(Ee, et) {
        O = Ee, N = et;
      }), K = al(a, Oe(s ? s.identifierPrefix : void 0, s ? s.nonce : void 0, s ? s.bootstrapScriptContent : void 0, s ? s.bootstrapScripts : void 0, s ? s.bootstrapModules : void 0), tt(s ? s.namespaceURI : void 0), s ? s.progressiveChunkSize : void 0, s ? s.onError : void 0, O, function() {
        var Ee = new ReadableStream({ type: "bytes", pull: function(et) {
          if (K.status === 1) K.status = 2, I(et, K.fatalError);
          else if (K.status !== 2 && K.destination === null) {
            K.destination = et;
            try {
              ma(K, et);
            } catch (Dt) {
              Vr(K, Dt), On(K, Dt);
            }
          }
        }, cancel: function() {
          Ni(K);
        } }, { highWaterMark: 0 });
        Ee.allReady = $, d(Ee);
      }, function(Ee) {
        $.catch(function() {
        }), b(Ee);
      }, N);
      if (s && s.signal) {
        var he = s.signal, _e = function() {
          Ni(K, he.reason), he.removeEventListener("abort", _e);
        };
        he.addEventListener("abort", _e);
      }
      Ai(K);
    });
  }, zn.version = "18.3.1", zn;
}
var mo;
function wc() {
  if (mo) return br;
  mo = 1;
  var e, t;
  return e = vc(), t = Sc(), br.version = e.version, br.renderToString = e.renderToString, br.renderToStaticMarkup = e.renderToStaticMarkup, br.renderToNodeStream = e.renderToNodeStream, br.renderToStaticNodeStream = e.renderToStaticNodeStream, br.renderToReadableStream = t.renderToReadableStream, br;
}
wc();
const kc = "staticMarkup";
function ms() {
  const e = ul().indexOf(kc) > -1 ? !0 : void 0;
  return {
    isBootstrap: e,
    isReact: e ? void 0 : !0
  };
}
const kr = ({ gaData: e, prefix: t = "", children: r }) => {
  const { isReact: i } = ms(), { onClick: c, ...u } = r.props;
  if (i)
    return ft.cloneElement(r, {
      ...u,
      onClick: (w) => (e && e.event && e.action && mc(e), c ? c(w) : !0)
    });
  let y = "";
  ["input", "header", "header-input"].includes(t) && (y = `-${t}`);
  const k = {
    [`data-ga${y}`]: e.text,
    [`data-ga${y}-name`]: e.name,
    [`data-ga${y}-event`]: e.event,
    [`data-ga${y}-action`]: e.action,
    [`data-ga${y}-type`]: e.type,
    [`data-ga${y}-region`]: e.region,
    [`data-ga${y}-section`]: e.section,
    [`data-ga${y}-component`]: e.component
  };
  return ft.cloneElement(r, {
    ...u,
    onClick: c,
    ...k
  });
}, xc = oi(
  ({
    id: e,
    parentId: t,
    /** @type {AccordionCard} */
    item: r,
    openCard: i,
    onClick: c,
    gaData: u
  }, y) => {
    var k, w, g, I, R, M;
    const q = e === i, E = q ? "open" : "close";
    return /* @__PURE__ */ B.jsxs(
      "div",
      {
        ref: y,
        className: Zt("accordion-item", "mt-3", {
          [`accordion-item-${r.color}`]: r.color,
          "accordion-header-icon": (k = r.content) == null ? void 0 : k.icon
        }),
        children: [
          /* @__PURE__ */ B.jsx("div", { className: "accordion-header", children: /* @__PURE__ */ B.jsx("h4", { children: /* @__PURE__ */ B.jsx(
            kr,
            {
              gaData: {
                ...u,
                action: E,
                text: r.content.header
              },
              children: /* @__PURE__ */ B.jsxs(
                "button",
                {
                  "data-testid": "accordion-opener",
                  className: Zt({ collapsed: !q }),
                  "data-bs-toggle": "collapse",
                  href: `#card-body-${e}`,
                  type: "button",
                  "aria-expanded": q,
                  "aria-controls": `card-body-${e}`,
                  onClick: (S) => c(S, e),
                  children: [
                    (w = r.content) != null && w.icon ? /* @__PURE__ */ B.jsxs("span", { className: "accordion-icon", children: [
                      /* @__PURE__ */ B.jsx(
                        "i",
                        {
                          className: `${(g = r.content.icon) == null ? void 0 : g[0]} fa-${(I = r.content.icon) == null ? void 0 : I[1]} me-2`
                        }
                      ),
                      r.content.header
                    ] }) : (R = r.content) == null ? void 0 : R.header,
                    /* @__PURE__ */ B.jsx("i", { className: "fas fa-chevron-up" })
                  ]
                }
              )
            }
          ) }) }),
          ((M = r.content) == null ? void 0 : M.body) && /* @__PURE__ */ B.jsx(
            "div",
            {
              "data-bs-parent": `#${t}`,
              id: `card-body-${e}`,
              className: Zt("collapse", { show: q }),
              children: /* @__PURE__ */ B.jsx(
                "div",
                {
                  className: "accordion-body",
                  dangerouslySetInnerHTML: Ir(
                    r.content.body
                  )
                }
              )
            }
          )
        ]
      }
    );
  }
);
xc.propTypes = {
  id: o.number,
  // @ts-ignore a technical type mismatch between PropTypes definition and your TypeScript
  item: hs,
  parentId: o.string,
  openCard: o.number,
  onClick: o.func,
  gaData: o.object
};
o.arrayOf(hs).isRequired, o.number;
const go = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, gs = ({
  label: e = "",
  cardTitle: t = "",
  gaData: r,
  ariaLabel: i,
  block: c,
  color: u = "gray",
  disabled: y,
  element: k = "button",
  href: w,
  icon: g,
  innerRef: I,
  onClick: R,
  size: M = "default",
  variant: q,
  classes: E,
  target: S = "_self",
  ...P
}) => {
  if (q) {
    const G = {
      borderless: "borderless",
      outline: "outline",
      filled: "filled"
    }, H = Zt("btn", G[q], {
      [`btn-${G[q]}-${u}`]: !0,
      "btn-medium": M === "medium",
      "btn-small": M === "small",
      "btn-large": M === "large" || M === "default",
      disabled: y
    });
    let x = k;
    return w && k === "button" && (x = "a"), /* @__PURE__ */ B.jsx(
      kr,
      {
        gaData: {
          ...go,
          section: t,
          ...r,
          text: e
        },
        children: /* @__PURE__ */ B.jsxs(
          x,
          {
            type: x === "button" && R ? "button" : void 0,
            ...P,
            className: Zt(E) || H,
            href: w,
            ref: I,
            onClick: R,
            "aria-label": i,
            target: x === "a" ? S : null,
            disabled: y,
            children: [
              g && /* @__PURE__ */ B.jsx("i", { className: `${g == null ? void 0 : g[0]} fa-${g == null ? void 0 : g[1]} me-1` }),
              e
            ]
          }
        )
      }
    );
  }
  const Y = Zt("btn", {
    [`btn-${u}`]: !0,
    "btn-md": M === "small",
    "btn-sm": M === "xsmall",
    "btn-block": c,
    disabled: y
  });
  let U = k;
  return w && k === "button" && (U = "a"), /* @__PURE__ */ B.jsx(
    kr,
    {
      gaData: {
        ...go,
        section: t,
        // @deprecated - remove at some point
        ...r,
        text: e
      },
      children: /* @__PURE__ */ B.jsxs(
        U,
        {
          type: U === "button" && R ? "button" : void 0,
          ...P,
          className: Zt(E) || Y,
          href: w,
          ref: I,
          onClick: R,
          "aria-label": i,
          target: U === "a" ? S : null,
          children: [
            g && /* @__PURE__ */ B.jsx("i", { className: `${g == null ? void 0 : g[0]} fa-${g == null ? void 0 : g[1]} me-1` }),
            e
          ]
        }
      )
    }
  );
};
gs.propTypes = {
  /**
   * Button label
   */
  label: o.string,
  /**
   * @deprecated
   * Card title, use `gaData.section` instead
   */
  cardTitle: o.string,
  /**
   * Google Analytics event data
   */
  gaData: li,
  /**
    ARIA label for accessibility
  */
  ariaLabel: o.string,
  /**
    Render button as a block-button?
  */
  block: o.bool,
  /**
    Button background color
  */
  color: o.oneOf(["gold", "maroon", "gray", "dark"]),
  /**
    Disable the button?
  */
  disabled: o.bool,
  /**
    Pass in a Component to override default button element.
    For example: react-router Link
  */
  element: o.oneOfType([
    o.func,
    o.string,
    o.shape({ $$typeof: o.symbol, render: o.func }),
    o.arrayOf(
      o.oneOfType([
        o.func,
        o.string,
        o.shape({ $$typeof: o.symbol, render: o.func })
      ])
    )
  ]),
  /**
    Link target url; will cause button to be rendered as `<a>` link
  */
  href: o.string,
  /**
    React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  */
  icon: o.arrayOf(o.string),
  /**
   * ref will only get you a reference to the Button component, use innerRef to
   * get a reference to the DOM element (for things like focus management).
   */
  innerRef: o.oneOfType([
    o.object,
    o.func,
    o.string
  ]),
  /**
    Event handler function for `<button>`
  */
  onClick: o.func,
  /**
    Button size. Legacy sizes (default, small, xsmall) or new sizes (large, medium, small) when used with variant prop.
  */
  size: o.oneOf(["default", "small", "xsmall", "large", "medium"]),
  /**
    Button style variant (borderless, outline, filled). When provided, uses new UDS button styles.
  */
  variant: o.oneOf(["borderless", "outline", "filled"]),
  /**
    Classes to add to button
  */
  classes: o.arrayOf(o.string),
  /**
   Link target type
   */
  target: o.oneOf(["_blank", "_self", "_top", "_parent"])
};
var yo = { exports: {} }, qe = {}, bo;
function Ec() {
  if (bo) return qe;
  bo = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), u = Symbol.for("react.consumer"), y = Symbol.for("react.context"), k = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), I = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), M = Symbol.for("react.offscreen"), q = Symbol.for("react.client.reference");
  function E(S) {
    if (typeof S == "object" && S !== null) {
      var P = S.$$typeof;
      switch (P) {
        case e:
          switch (S = S.type, S) {
            case r:
            case c:
            case i:
            case w:
            case g:
              return S;
            default:
              switch (S = S && S.$$typeof, S) {
                case y:
                case k:
                case R:
                case I:
                  return S;
                case u:
                  return S;
                default:
                  return P;
              }
          }
        case t:
          return P;
      }
    }
  }
  return qe.ContextConsumer = u, qe.ContextProvider = y, qe.Element = e, qe.ForwardRef = k, qe.Fragment = r, qe.Lazy = R, qe.Memo = I, qe.Portal = t, qe.Profiler = c, qe.StrictMode = i, qe.Suspense = w, qe.SuspenseList = g, qe.isContextConsumer = function(S) {
    return E(S) === u;
  }, qe.isContextProvider = function(S) {
    return E(S) === y;
  }, qe.isElement = function(S) {
    return typeof S == "object" && S !== null && S.$$typeof === e;
  }, qe.isForwardRef = function(S) {
    return E(S) === k;
  }, qe.isFragment = function(S) {
    return E(S) === r;
  }, qe.isLazy = function(S) {
    return E(S) === R;
  }, qe.isMemo = function(S) {
    return E(S) === I;
  }, qe.isPortal = function(S) {
    return E(S) === t;
  }, qe.isProfiler = function(S) {
    return E(S) === c;
  }, qe.isStrictMode = function(S) {
    return E(S) === i;
  }, qe.isSuspense = function(S) {
    return E(S) === w;
  }, qe.isSuspenseList = function(S) {
    return E(S) === g;
  }, qe.isValidElementType = function(S) {
    return typeof S == "string" || typeof S == "function" || S === r || S === c || S === i || S === w || S === g || S === M || typeof S == "object" && S !== null && (S.$$typeof === R || S.$$typeof === I || S.$$typeof === y || S.$$typeof === u || S.$$typeof === k || S.$$typeof === q || S.getModuleId !== void 0);
  }, qe.typeOf = E, qe;
}
var vo;
function _c() {
  return vo || (vo = 1, yo.exports = /* @__PURE__ */ Ec()), yo.exports;
}
var ys = /* @__PURE__ */ _c();
function Tc(e) {
  function t(j, C, F, L, h) {
    for (var ee = 0, _ = 0, ie = 0, Q = 0, te, X, ne = 0, de = 0, J, ge = J = te = 0, re = 0, le = 0, Ue = 0, ce = 0, it = F.length, We = it - 1, ke, W = "", oe = "", Ke = "", De = "", Pe; re < it; ) {
      if (X = F.charCodeAt(re), re === We && _ + Q + ie + ee !== 0 && (_ !== 0 && (X = _ === 47 ? 10 : 47), Q = ie = ee = 0, it++, We++), _ + Q + ie + ee === 0) {
        if (re === We && (0 < le && (W = W.replace(M, "")), 0 < W.trim().length)) {
          switch (X) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              W += F.charAt(re);
          }
          X = 59;
        }
        switch (X) {
          case 123:
            for (W = W.trim(), te = W.charCodeAt(0), J = 1, ce = ++re; re < it; ) {
              switch (X = F.charCodeAt(re)) {
                case 123:
                  J++;
                  break;
                case 125:
                  J--;
                  break;
                case 47:
                  switch (X = F.charCodeAt(re + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (ge = re + 1; ge < We; ++ge)
                          switch (F.charCodeAt(ge)) {
                            case 47:
                              if (X === 42 && F.charCodeAt(ge - 1) === 42 && re + 2 !== ge) {
                                re = ge + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (X === 47) {
                                re = ge + 1;
                                break e;
                              }
                          }
                        re = ge;
                      }
                  }
                  break;
                case 91:
                  X++;
                case 40:
                  X++;
                case 34:
                case 39:
                  for (; re++ < We && F.charCodeAt(re) !== X; )
                    ;
              }
              if (J === 0) break;
              re++;
            }
            switch (J = F.substring(ce, re), te === 0 && (te = (W = W.replace(R, "").trim()).charCodeAt(0)), te) {
              case 64:
                switch (0 < le && (W = W.replace(M, "")), X = W.charCodeAt(1), X) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    le = C;
                    break;
                  default:
                    le = st;
                }
                if (J = t(C, le, J, X, h + 1), ce = J.length, 0 < Oe && (le = r(st, W, Ue), Pe = k(3, J, le, C, Re, me, ce, X, h, L), W = le.join(""), Pe !== void 0 && (ce = (J = Pe.trim()).length) === 0 && (X = 0, J = "")), 0 < ce) switch (X) {
                  case 115:
                    W = W.replace(ae, y);
                  case 100:
                  case 109:
                  case 45:
                    J = W + "{" + J + "}";
                    break;
                  case 107:
                    W = W.replace(U, "$1 $2"), J = W + "{" + J + "}", J = Te === 1 || Te === 2 && u("@" + J, 3) ? "@-webkit-" + J + "@" + J : "@" + J;
                    break;
                  default:
                    J = W + J, L === 112 && (J = (oe += J, ""));
                }
                else J = "";
                break;
              default:
                J = t(C, r(C, W, Ue), J, L, h + 1);
            }
            Ke += J, J = Ue = le = ge = te = 0, W = "", X = F.charCodeAt(++re);
            break;
          case 125:
          case 59:
            if (W = (0 < le ? W.replace(M, "") : W).trim(), 1 < (ce = W.length)) switch (ge === 0 && (te = W.charCodeAt(0), te === 45 || 96 < te && 123 > te) && (ce = (W = W.replace(" ", ":")).length), 0 < Oe && (Pe = k(1, W, C, j, Re, me, oe.length, L, h, L)) !== void 0 && (ce = (W = Pe.trim()).length) === 0 && (W = "\0\0"), te = W.charCodeAt(0), X = W.charCodeAt(1), te) {
              case 0:
                break;
              case 64:
                if (X === 105 || X === 99) {
                  De += W + F.charAt(re);
                  break;
                }
              default:
                W.charCodeAt(ce - 1) !== 58 && (oe += c(W, te, X, W.charCodeAt(2)));
            }
            Ue = le = ge = te = 0, W = "", X = F.charCodeAt(++re);
        }
      }
      switch (X) {
        case 13:
        case 10:
          _ === 47 ? _ = 0 : 1 + te === 0 && L !== 107 && 0 < W.length && (le = 1, W += "\0"), 0 < Oe * tt && k(0, W, C, j, Re, me, oe.length, L, h, L), me = 1, Re++;
          break;
        case 59:
        case 125:
          if (_ + Q + ie + ee === 0) {
            me++;
            break;
          }
        default:
          switch (me++, ke = F.charAt(re), X) {
            case 9:
            case 32:
              if (Q + ee + _ === 0) switch (ne) {
                case 44:
                case 58:
                case 9:
                case 32:
                  ke = "";
                  break;
                default:
                  X !== 32 && (ke = " ");
              }
              break;
            case 0:
              ke = "\\0";
              break;
            case 12:
              ke = "\\f";
              break;
            case 11:
              ke = "\\v";
              break;
            case 38:
              Q + _ + ee === 0 && (le = Ue = 1, ke = "\f" + ke);
              break;
            case 108:
              if (Q + _ + ee + Ne === 0 && 0 < ge) switch (re - ge) {
                case 2:
                  ne === 112 && F.charCodeAt(re - 3) === 58 && (Ne = ne);
                case 8:
                  de === 111 && (Ne = de);
              }
              break;
            case 58:
              Q + _ + ee === 0 && (ge = re);
              break;
            case 44:
              _ + ie + Q + ee === 0 && (le = 1, ke += "\r");
              break;
            case 34:
            case 39:
              _ === 0 && (Q = Q === X ? 0 : Q === 0 ? X : Q);
              break;
            case 91:
              Q + _ + ie === 0 && ee++;
              break;
            case 93:
              Q + _ + ie === 0 && ee--;
              break;
            case 41:
              Q + _ + ee === 0 && ie--;
              break;
            case 40:
              if (Q + _ + ee === 0) {
                if (te === 0) switch (2 * ne + 3 * de) {
                  case 533:
                    break;
                  default:
                    te = 1;
                }
                ie++;
              }
              break;
            case 64:
              _ + ie + Q + ee + ge + J === 0 && (J = 1);
              break;
            case 42:
            case 47:
              if (!(0 < Q + ee + ie)) switch (_) {
                case 0:
                  switch (2 * X + 3 * F.charCodeAt(re + 1)) {
                    case 235:
                      _ = 47;
                      break;
                    case 220:
                      ce = re, _ = 42;
                  }
                  break;
                case 42:
                  X === 47 && ne === 42 && ce + 2 !== re && (F.charCodeAt(ce + 2) === 33 && (oe += F.substring(ce, re + 1)), ke = "", _ = 0);
              }
          }
          _ === 0 && (W += ke);
      }
      de = ne, ne = X, re++;
    }
    if (ce = oe.length, 0 < ce) {
      if (le = C, 0 < Oe && (Pe = k(2, oe, le, j, Re, me, ce, L, h, L), Pe !== void 0 && (oe = Pe).length === 0)) return De + oe + Ke;
      if (oe = le.join(",") + "{" + oe + "}", Te * Ne !== 0) {
        switch (Te !== 2 || u(oe, 2) || (Ne = 0), Ne) {
          case 111:
            oe = oe.replace(H, ":-moz-$1") + oe;
            break;
          case 112:
            oe = oe.replace(G, "::-webkit-input-$1") + oe.replace(G, "::-moz-$1") + oe.replace(G, ":-ms-input-$1") + oe;
        }
        Ne = 0;
      }
    }
    return De + oe + Ke;
  }
  function r(j, C, F) {
    var L = C.trim().split(P);
    C = L;
    var h = L.length, ee = j.length;
    switch (ee) {
      case 0:
      case 1:
        var _ = 0;
        for (j = ee === 0 ? "" : j[0] + " "; _ < h; ++_)
          C[_] = i(j, C[_], F).trim();
        break;
      default:
        var ie = _ = 0;
        for (C = []; _ < h; ++_)
          for (var Q = 0; Q < ee; ++Q)
            C[ie++] = i(j[Q] + " ", L[_], F).trim();
    }
    return C;
  }
  function i(j, C, F) {
    var L = C.charCodeAt(0);
    switch (33 > L && (L = (C = C.trim()).charCodeAt(0)), L) {
      case 38:
        return C.replace(Y, "$1" + j.trim());
      case 58:
        return j.trim() + C.replace(Y, "$1" + j.trim());
      default:
        if (0 < 1 * F && 0 < C.indexOf("\f")) return C.replace(Y, (j.charCodeAt(0) === 58 ? "" : "$1") + j.trim());
    }
    return j + C;
  }
  function c(j, C, F, L) {
    var h = j + ";", ee = 2 * C + 3 * F + 4 * L;
    if (ee === 944) {
      j = h.indexOf(":", 9) + 1;
      var _ = h.substring(j, h.length - 1).trim();
      return _ = h.substring(0, j).trim() + _ + ";", Te === 1 || Te === 2 && u(_, 1) ? "-webkit-" + _ + _ : _;
    }
    if (Te === 0 || Te === 2 && !u(h, 1)) return h;
    switch (ee) {
      case 1015:
        return h.charCodeAt(10) === 97 ? "-webkit-" + h + h : h;
      case 951:
        return h.charCodeAt(3) === 116 ? "-webkit-" + h + h : h;
      case 963:
        return h.charCodeAt(5) === 110 ? "-webkit-" + h + h : h;
      case 1009:
        if (h.charCodeAt(4) !== 100) break;
      case 969:
      case 942:
        return "-webkit-" + h + h;
      case 978:
        return "-webkit-" + h + "-moz-" + h + h;
      case 1019:
      case 983:
        return "-webkit-" + h + "-moz-" + h + "-ms-" + h + h;
      case 883:
        if (h.charCodeAt(8) === 45) return "-webkit-" + h + h;
        if (0 < h.indexOf("image-set(", 11)) return h.replace(ue, "$1-webkit-$2") + h;
        break;
      case 932:
        if (h.charCodeAt(4) === 45) switch (h.charCodeAt(5)) {
          case 103:
            return "-webkit-box-" + h.replace("-grow", "") + "-webkit-" + h + "-ms-" + h.replace("grow", "positive") + h;
          case 115:
            return "-webkit-" + h + "-ms-" + h.replace("shrink", "negative") + h;
          case 98:
            return "-webkit-" + h + "-ms-" + h.replace("basis", "preferred-size") + h;
        }
        return "-webkit-" + h + "-ms-" + h + h;
      case 964:
        return "-webkit-" + h + "-ms-flex-" + h + h;
      case 1023:
        if (h.charCodeAt(8) !== 99) break;
        return _ = h.substring(h.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + _ + "-webkit-" + h + "-ms-flex-pack" + _ + h;
      case 1005:
        return E.test(h) ? h.replace(q, ":-webkit-") + h.replace(q, ":-moz-") + h : h;
      case 1e3:
        switch (_ = h.substring(13).trim(), C = _.indexOf("-") + 1, _.charCodeAt(0) + _.charCodeAt(C)) {
          case 226:
            _ = h.replace(x, "tb");
            break;
          case 232:
            _ = h.replace(x, "tb-rl");
            break;
          case 220:
            _ = h.replace(x, "lr");
            break;
          default:
            return h;
        }
        return "-webkit-" + h + "-ms-" + _ + h;
      case 1017:
        if (h.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (C = (h = j).length - 10, _ = (h.charCodeAt(C) === 33 ? h.substring(0, C) : h).substring(j.indexOf(":", 7) + 1).trim(), ee = _.charCodeAt(0) + (_.charCodeAt(7) | 0)) {
          case 203:
            if (111 > _.charCodeAt(8)) break;
          case 115:
            h = h.replace(_, "-webkit-" + _) + ";" + h;
            break;
          case 207:
          case 102:
            h = h.replace(_, "-webkit-" + (102 < ee ? "inline-" : "") + "box") + ";" + h.replace(_, "-webkit-" + _) + ";" + h.replace(_, "-ms-" + _ + "box") + ";" + h;
        }
        return h + ";";
      case 938:
        if (h.charCodeAt(5) === 45) switch (h.charCodeAt(6)) {
          case 105:
            return _ = h.replace("-items", ""), "-webkit-" + h + "-webkit-box-" + _ + "-ms-flex-" + _ + h;
          case 115:
            return "-webkit-" + h + "-ms-flex-item-" + h.replace(Ie, "") + h;
          default:
            return "-webkit-" + h + "-ms-flex-line-pack" + h.replace("align-content", "").replace(Ie, "") + h;
        }
        break;
      case 973:
      case 989:
        if (h.charCodeAt(3) !== 45 || h.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (Ve.test(j) === !0) return (_ = j.substring(j.indexOf(":") + 1)).charCodeAt(0) === 115 ? c(j.replace("stretch", "fill-available"), C, F, L).replace(":fill-available", ":stretch") : h.replace(_, "-webkit-" + _) + h.replace(_, "-moz-" + _.replace("fill-", "")) + h;
        break;
      case 962:
        if (h = "-webkit-" + h + (h.charCodeAt(5) === 102 ? "-ms-" + h : "") + h, F + L === 211 && h.charCodeAt(13) === 105 && 0 < h.indexOf("transform", 10)) return h.substring(0, h.indexOf(";", 27) + 1).replace(S, "$1-webkit-$2") + h;
    }
    return h;
  }
  function u(j, C) {
    var F = j.indexOf(C === 1 ? ":" : "{"), L = j.substring(0, C !== 3 ? F : 10);
    return F = j.substring(F + 1, j.length - 1), Be(C !== 2 ? L : L.replace(Fe, "$1"), F, C);
  }
  function y(j, C) {
    var F = c(C, C.charCodeAt(0), C.charCodeAt(1), C.charCodeAt(2));
    return F !== C + ";" ? F.replace(we, " or ($1)").substring(4) : "(" + C + ")";
  }
  function k(j, C, F, L, h, ee, _, ie, Q, te) {
    for (var X = 0, ne = C, de; X < Oe; ++X)
      switch (de = je[X].call(I, j, ne, F, L, h, ee, _, ie, Q, te)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          ne = de;
      }
    if (ne !== C) return ne;
  }
  function w(j) {
    switch (j) {
      case void 0:
      case null:
        Oe = je.length = 0;
        break;
      default:
        if (typeof j == "function") je[Oe++] = j;
        else if (typeof j == "object") for (var C = 0, F = j.length; C < F; ++C)
          w(j[C]);
        else tt = !!j | 0;
    }
    return w;
  }
  function g(j) {
    return j = j.prefix, j !== void 0 && (Be = null, j ? typeof j != "function" ? Te = 1 : (Te = 2, Be = j) : Te = 0), g;
  }
  function I(j, C) {
    var F = j;
    if (33 > F.charCodeAt(0) && (F = F.trim()), se = F, F = [se], 0 < Oe) {
      var L = k(-1, C, F, F, Re, me, 0, 0, 0, 0);
      L !== void 0 && typeof L == "string" && (C = L);
    }
    var h = t(st, F, C, 0, 0);
    return 0 < Oe && (L = k(-2, h, F, F, Re, me, h.length, 0, 0, 0), L !== void 0 && (h = L)), se = "", Ne = 0, me = Re = 1, h;
  }
  var R = /^\0+/g, M = /[\0\r\f]/g, q = /: */g, E = /zoo|gra/, S = /([,: ])(transform)/g, P = /,\r+?/g, Y = /([\t\r\n ])*\f?&/g, U = /@(k\w+)\s*(\S*)\s*/, G = /::(place)/g, H = /:(read-only)/g, x = /[svh]\w+-[tblr]{2}/, ae = /\(\s*(.*)\s*\)/g, we = /([\s\S]*?);/g, Ie = /-self|flex-/g, Fe = /[^]*?(:[rp][el]a[\w-]+)[^]*/, Ve = /stretch|:\s*\w+\-(?:conte|avail)/, ue = /([^-])(image-set\()/, me = 1, Re = 1, Ne = 0, Te = 1, st = [], je = [], Oe = 0, Be = null, tt = 0, se = "";
  return I.use = w, I.set = g, e !== void 0 && g(e), I;
}
var Cc = {
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
function Ac(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Oc = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, So = /* @__PURE__ */ Ac(
  function(e) {
    return Oc.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), wo = { exports: {} }, ze = {}, ko;
function Rc() {
  if (ko) return ze;
  ko = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, i = e ? Symbol.for("react.fragment") : 60107, c = e ? Symbol.for("react.strict_mode") : 60108, u = e ? Symbol.for("react.profiler") : 60114, y = e ? Symbol.for("react.provider") : 60109, k = e ? Symbol.for("react.context") : 60110, w = e ? Symbol.for("react.async_mode") : 60111, g = e ? Symbol.for("react.concurrent_mode") : 60111, I = e ? Symbol.for("react.forward_ref") : 60112, R = e ? Symbol.for("react.suspense") : 60113, M = e ? Symbol.for("react.suspense_list") : 60120, q = e ? Symbol.for("react.memo") : 60115, E = e ? Symbol.for("react.lazy") : 60116, S = e ? Symbol.for("react.block") : 60121, P = e ? Symbol.for("react.fundamental") : 60117, Y = e ? Symbol.for("react.responder") : 60118, U = e ? Symbol.for("react.scope") : 60119;
  function G(x) {
    if (typeof x == "object" && x !== null) {
      var ae = x.$$typeof;
      switch (ae) {
        case t:
          switch (x = x.type, x) {
            case w:
            case g:
            case i:
            case u:
            case c:
            case R:
              return x;
            default:
              switch (x = x && x.$$typeof, x) {
                case k:
                case I:
                case E:
                case q:
                case y:
                  return x;
                default:
                  return ae;
              }
          }
        case r:
          return ae;
      }
    }
  }
  function H(x) {
    return G(x) === g;
  }
  return ze.AsyncMode = w, ze.ConcurrentMode = g, ze.ContextConsumer = k, ze.ContextProvider = y, ze.Element = t, ze.ForwardRef = I, ze.Fragment = i, ze.Lazy = E, ze.Memo = q, ze.Portal = r, ze.Profiler = u, ze.StrictMode = c, ze.Suspense = R, ze.isAsyncMode = function(x) {
    return H(x) || G(x) === w;
  }, ze.isConcurrentMode = H, ze.isContextConsumer = function(x) {
    return G(x) === k;
  }, ze.isContextProvider = function(x) {
    return G(x) === y;
  }, ze.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === t;
  }, ze.isForwardRef = function(x) {
    return G(x) === I;
  }, ze.isFragment = function(x) {
    return G(x) === i;
  }, ze.isLazy = function(x) {
    return G(x) === E;
  }, ze.isMemo = function(x) {
    return G(x) === q;
  }, ze.isPortal = function(x) {
    return G(x) === r;
  }, ze.isProfiler = function(x) {
    return G(x) === u;
  }, ze.isStrictMode = function(x) {
    return G(x) === c;
  }, ze.isSuspense = function(x) {
    return G(x) === R;
  }, ze.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === i || x === g || x === u || x === c || x === R || x === M || typeof x == "object" && x !== null && (x.$$typeof === E || x.$$typeof === q || x.$$typeof === y || x.$$typeof === k || x.$$typeof === I || x.$$typeof === P || x.$$typeof === Y || x.$$typeof === U || x.$$typeof === S);
  }, ze.typeOf = G, ze;
}
var xo;
function Ic() {
  return xo || (xo = 1, wo.exports = Rc()), wo.exports;
}
var ja, Eo;
function Nc() {
  if (Eo) return ja;
  Eo = 1;
  var e = Ic(), t = {
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
  }, r = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0
  }, i = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
  }, c = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
  }, u = {};
  u[e.ForwardRef] = i, u[e.Memo] = c;
  function y(E) {
    return e.isMemo(E) ? c : u[E.$$typeof] || t;
  }
  var k = Object.defineProperty, w = Object.getOwnPropertyNames, g = Object.getOwnPropertySymbols, I = Object.getOwnPropertyDescriptor, R = Object.getPrototypeOf, M = Object.prototype;
  function q(E, S, P) {
    if (typeof S != "string") {
      if (M) {
        var Y = R(S);
        Y && Y !== M && q(E, Y, P);
      }
      var U = w(S);
      g && (U = U.concat(g(S)));
      for (var G = y(E), H = y(S), x = 0; x < U.length; ++x) {
        var ae = U[x];
        if (!r[ae] && !(P && P[ae]) && !(H && H[ae]) && !(G && G[ae])) {
          var we = I(S, ae);
          try {
            k(E, ae, we);
          } catch {
          }
        }
      }
    }
    return E;
  }
  return ja = q, ja;
}
var Dc = Nc();
const Pc = /* @__PURE__ */ si(Dc);
var yt = { env: { NODE_ENV: "production" } };
function pr() {
  return (pr = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }).apply(this, arguments);
}
var _o = function(e, t) {
  for (var r = [e[0]], i = 0, c = t.length; i < c; i += 1) r.push(t[i], e[i + 1]);
  return r;
}, Xa = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !ys.typeOf(e);
}, Zn = Object.freeze([]), Sr = Object.freeze({});
function pn(e) {
  return typeof e == "function";
}
function To(e) {
  return e.displayName || e.name || "Component";
}
function ci(e) {
  return e && typeof e.styledComponentId == "string";
}
var Fr = typeof yt < "u" && yt.env !== void 0 && (yt.env.REACT_APP_SC_ATTR || yt.env.SC_ATTR) || "data-styled", ui = typeof window < "u" && "HTMLElement" in window, Lc = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof yt < "u" && yt.env !== void 0 && (yt.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && yt.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? yt.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && yt.env.REACT_APP_SC_DISABLE_SPEEDY : yt.env.SC_DISABLE_SPEEDY !== void 0 && yt.env.SC_DISABLE_SPEEDY !== "" ? yt.env.SC_DISABLE_SPEEDY !== "false" && yt.env.SC_DISABLE_SPEEDY : yt.env.NODE_ENV !== "production"));
function yn(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : ""));
}
var Fc = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(r) {
    for (var i = 0, c = 0; c < r; c++) i += this.groupSizes[c];
    return i;
  }, t.insertRules = function(r, i) {
    if (r >= this.groupSizes.length) {
      for (var c = this.groupSizes, u = c.length, y = u; r >= y; ) (y <<= 1) < 0 && yn(16, "" + r);
      this.groupSizes = new Uint32Array(y), this.groupSizes.set(c), this.length = y;
      for (var k = u; k < y; k++) this.groupSizes[k] = 0;
    }
    for (var w = this.indexOfGroup(r + 1), g = 0, I = i.length; g < I; g++) this.tag.insertRule(w, i[g]) && (this.groupSizes[r]++, w++);
  }, t.clearGroup = function(r) {
    if (r < this.length) {
      var i = this.groupSizes[r], c = this.indexOfGroup(r), u = c + i;
      this.groupSizes[r] = 0;
      for (var y = c; y < u; y++) this.tag.deleteRule(c);
    }
  }, t.getGroup = function(r) {
    var i = "";
    if (r >= this.length || this.groupSizes[r] === 0) return i;
    for (var c = this.groupSizes[r], u = this.indexOfGroup(r), y = u + c, k = u; k < y; k++) i += this.tag.getRule(k) + `/*!sc*/
`;
    return i;
  }, e;
}(), Kn = /* @__PURE__ */ new Map(), Qn = /* @__PURE__ */ new Map(), cn = 1, $n = function(e) {
  if (Kn.has(e)) return Kn.get(e);
  for (; Qn.has(cn); ) cn++;
  var t = cn++;
  return Kn.set(e, t), Qn.set(t, e), t;
}, jc = function(e) {
  return Qn.get(e);
}, Mc = function(e, t) {
  t >= cn && (cn = t + 1), Kn.set(e, t), Qn.set(t, e);
}, zc = "style[" + Fr + '][data-styled-version="5.3.11"]', $c = new RegExp("^" + Fr + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Uc = function(e, t, r) {
  for (var i, c = r.split(","), u = 0, y = c.length; u < y; u++) (i = c[u]) && e.registerName(t, i);
}, Hc = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), i = [], c = 0, u = r.length; c < u; c++) {
    var y = r[c].trim();
    if (y) {
      var k = y.match($c);
      if (k) {
        var w = 0 | parseInt(k[1], 10), g = k[2];
        w !== 0 && (Mc(g, w), Uc(e, g, k[3]), e.getTag().insertRules(w, i)), i.length = 0;
      } else i.push(y);
    }
  }
}, Bc = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, bs = function(e) {
  var t = document.head, r = e || t, i = document.createElement("style"), c = function(k) {
    for (var w = k.childNodes, g = w.length; g >= 0; g--) {
      var I = w[g];
      if (I && I.nodeType === 1 && I.hasAttribute(Fr)) return I;
    }
  }(r), u = c !== void 0 ? c.nextSibling : null;
  i.setAttribute(Fr, "active"), i.setAttribute("data-styled-version", "5.3.11");
  var y = Bc();
  return y && i.setAttribute("nonce", y), r.insertBefore(i, u), i;
}, Wc = function() {
  function e(r) {
    var i = this.element = bs(r);
    i.appendChild(document.createTextNode("")), this.sheet = function(c) {
      if (c.sheet) return c.sheet;
      for (var u = document.styleSheets, y = 0, k = u.length; y < k; y++) {
        var w = u[y];
        if (w.ownerNode === c) return w;
      }
      yn(17);
    }(i), this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, i) {
    try {
      return this.sheet.insertRule(i, r), this.length++, !0;
    } catch {
      return !1;
    }
  }, t.deleteRule = function(r) {
    this.sheet.deleteRule(r), this.length--;
  }, t.getRule = function(r) {
    var i = this.sheet.cssRules[r];
    return i !== void 0 && typeof i.cssText == "string" ? i.cssText : "";
  }, e;
}(), qc = function() {
  function e(r) {
    var i = this.element = bs(r);
    this.nodes = i.childNodes, this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, i) {
    if (r <= this.length && r >= 0) {
      var c = document.createTextNode(i), u = this.nodes[r];
      return this.element.insertBefore(c, u || null), this.length++, !0;
    }
    return !1;
  }, t.deleteRule = function(r) {
    this.element.removeChild(this.nodes[r]), this.length--;
  }, t.getRule = function(r) {
    return r < this.length ? this.nodes[r].textContent : "";
  }, e;
}(), Yc = function() {
  function e(r) {
    this.rules = [], this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, i) {
    return r <= this.length && (this.rules.splice(r, 0, i), this.length++, !0);
  }, t.deleteRule = function(r) {
    this.rules.splice(r, 1), this.length--;
  }, t.getRule = function(r) {
    return r < this.length ? this.rules[r] : "";
  }, e;
}(), Co = ui, Gc = { isServer: !ui, useCSSOMInjection: !Lc }, vs = function() {
  function e(r, i, c) {
    r === void 0 && (r = Sr), i === void 0 && (i = {}), this.options = pr({}, Gc, {}, r), this.gs = i, this.names = new Map(c), this.server = !!r.isServer, !this.server && ui && Co && (Co = !1, function(u) {
      for (var y = document.querySelectorAll(zc), k = 0, w = y.length; k < w; k++) {
        var g = y[k];
        g && g.getAttribute(Fr) !== "active" && (Hc(u, g), g.parentNode && g.parentNode.removeChild(g));
      }
    }(this));
  }
  e.registerId = function(r) {
    return $n(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, i) {
    return i === void 0 && (i = !0), new e(pr({}, this.options, {}, r), this.gs, i && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (c = (i = this.options).isServer, u = i.useCSSOMInjection, y = i.target, r = c ? new Yc(y) : u ? new Wc(y) : new qc(y), new Fc(r)));
    var r, i, c, u, y;
  }, t.hasNameForId = function(r, i) {
    return this.names.has(r) && this.names.get(r).has(i);
  }, t.registerName = function(r, i) {
    if ($n(r), this.names.has(r)) this.names.get(r).add(i);
    else {
      var c = /* @__PURE__ */ new Set();
      c.add(i), this.names.set(r, c);
    }
  }, t.insertRules = function(r, i, c) {
    this.registerName(r, i), this.getTag().insertRules($n(r), c);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup($n(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var i = r.getTag(), c = i.length, u = "", y = 0; y < c; y++) {
        var k = jc(y);
        if (k !== void 0) {
          var w = r.names.get(k), g = i.getGroup(y);
          if (w && g && w.size) {
            var I = Fr + ".g" + y + '[id="' + k + '"]', R = "";
            w !== void 0 && w.forEach(function(M) {
              M.length > 0 && (R += M + ",");
            }), u += "" + g + I + '{content:"' + R + `"}/*!sc*/
`;
          }
        }
      }
      return u;
    }(this);
  }, e;
}(), Vc = /(a)(d)/gi, Ao = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Ka(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = Ao(t % 52) + r;
  return (Ao(t % 52) + r).replace(Vc, "$1-$2");
}
var Pr = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, Ss = function(e) {
  return Pr(5381, e);
};
function Xc(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (pn(r) && !ci(r)) return !1;
  }
  return !0;
}
var Kc = Ss("5.3.11"), Jc = function() {
  function e(t, r, i) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (i === void 0 || i.isStatic) && Xc(t), this.componentId = r, this.baseHash = Pr(Kc, r), this.baseStyle = i, vs.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, i) {
    var c = this.componentId, u = [];
    if (this.baseStyle && u.push(this.baseStyle.generateAndInjectStyles(t, r, i)), this.isStatic && !i.hash) if (this.staticRulesId && r.hasNameForId(c, this.staticRulesId)) u.push(this.staticRulesId);
    else {
      var y = jr(this.rules, t, r, i).join(""), k = Ka(Pr(this.baseHash, y) >>> 0);
      if (!r.hasNameForId(c, k)) {
        var w = i(y, "." + k, void 0, c);
        r.insertRules(c, k, w);
      }
      u.push(k), this.staticRulesId = k;
    }
    else {
      for (var g = this.rules.length, I = Pr(this.baseHash, i.hash), R = "", M = 0; M < g; M++) {
        var q = this.rules[M];
        if (typeof q == "string") R += q;
        else if (q) {
          var E = jr(q, t, r, i), S = Array.isArray(E) ? E.join("") : E;
          I = Pr(I, S + M), R += S;
        }
      }
      if (R) {
        var P = Ka(I >>> 0);
        if (!r.hasNameForId(c, P)) {
          var Y = i(R, "." + P, void 0, c);
          r.insertRules(c, P, Y);
        }
        u.push(P);
      }
    }
    return u.join(" ");
  }, e;
}(), Zc = /^\s*\/\/.*$/gm, Qc = [":", "[", ".", "#"];
function eu(e) {
  var t, r, i, c, u = Sr, y = u.options, k = y === void 0 ? Sr : y, w = u.plugins, g = w === void 0 ? Zn : w, I = new Tc(k), R = [], M = /* @__PURE__ */ function(S) {
    function P(Y) {
      if (Y) try {
        S(Y + "}");
      } catch {
      }
    }
    return function(Y, U, G, H, x, ae, we, Ie, Fe, Ve) {
      switch (Y) {
        case 1:
          if (Fe === 0 && U.charCodeAt(0) === 64) return S(U + ";"), "";
          break;
        case 2:
          if (Ie === 0) return U + "/*|*/";
          break;
        case 3:
          switch (Ie) {
            case 102:
            case 112:
              return S(G[0] + U), "";
            default:
              return U + (Ve === 0 ? "/*|*/" : "");
          }
        case -2:
          U.split("/*|*/}").forEach(P);
      }
    };
  }(function(S) {
    R.push(S);
  }), q = function(S, P, Y) {
    return P === 0 && Qc.indexOf(Y[r.length]) !== -1 || Y.match(c) ? S : "." + t;
  };
  function E(S, P, Y, U) {
    U === void 0 && (U = "&");
    var G = S.replace(Zc, ""), H = P && Y ? Y + " " + P + " { " + G + " }" : G;
    return t = U, r = P, i = new RegExp("\\" + r + "\\b", "g"), c = new RegExp("(\\" + r + "\\b){2,}"), I(Y || !P ? "" : P, H);
  }
  return I.use([].concat(g, [function(S, P, Y) {
    S === 2 && Y.length && Y[0].lastIndexOf(r) > 0 && (Y[0] = Y[0].replace(i, q));
  }, M, function(S) {
    if (S === -2) {
      var P = R;
      return R = [], P;
    }
  }])), E.hash = g.length ? g.reduce(function(S, P) {
    return P.name || yn(15), Pr(S, P.name);
  }, 5381).toString() : "", E;
}
var ws = ft.createContext();
ws.Consumer;
var ks = ft.createContext(), tu = (ks.Consumer, new vs()), Ja = eu();
function ru() {
  return xr(ws) || tu;
}
function nu() {
  return xr(ks) || Ja;
}
var au = function() {
  function e(t, r) {
    var i = this;
    this.inject = function(c, u) {
      u === void 0 && (u = Ja);
      var y = i.name + u.hash;
      c.hasNameForId(i.id, y) || c.insertRules(i.id, y, u(i.rules, y, "@keyframes"));
    }, this.toString = function() {
      return yn(12, String(i.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Ja), this.name + t.hash;
  }, e;
}(), iu = /([A-Z])/, ou = /([A-Z])/g, su = /^ms-/, lu = function(e) {
  return "-" + e.toLowerCase();
};
function Oo(e) {
  return iu.test(e) ? e.replace(ou, lu).replace(su, "-ms-") : e;
}
var Ro = function(e) {
  return e == null || e === !1 || e === "";
};
function jr(e, t, r, i) {
  if (Array.isArray(e)) {
    for (var c, u = [], y = 0, k = e.length; y < k; y += 1) (c = jr(e[y], t, r, i)) !== "" && (Array.isArray(c) ? u.push.apply(u, c) : u.push(c));
    return u;
  }
  if (Ro(e)) return "";
  if (ci(e)) return "." + e.styledComponentId;
  if (pn(e)) {
    if (typeof (g = e) != "function" || g.prototype && g.prototype.isReactComponent || !t) return e;
    var w = e(t);
    return jr(w, t, r, i);
  }
  var g;
  return e instanceof au ? r ? (e.inject(r, i), e.getName(i)) : e : Xa(e) ? function I(R, M) {
    var q, E, S = [];
    for (var P in R) R.hasOwnProperty(P) && !Ro(R[P]) && (Array.isArray(R[P]) && R[P].isCss || pn(R[P]) ? S.push(Oo(P) + ":", R[P], ";") : Xa(R[P]) ? S.push.apply(S, I(R[P], P)) : S.push(Oo(P) + ": " + (q = P, (E = R[P]) == null || typeof E == "boolean" || E === "" ? "" : typeof E != "number" || E === 0 || q in Cc || q.startsWith("--") ? String(E).trim() : E + "px") + ";"));
    return M ? [M + " {"].concat(S, ["}"]) : S;
  }(e) : e.toString();
}
var Io = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function cu(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
  return pn(e) || Xa(e) ? Io(jr(_o(Zn, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Io(jr(_o(e, r)));
}
var uu = function(e, t, r) {
  return r === void 0 && (r = Sr), e.theme !== r.theme && e.theme || t || r.theme;
}, du = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, fu = /(^-|-$)/g;
function Ma(e) {
  return e.replace(du, "-").replace(fu, "");
}
var pu = function(e) {
  return Ka(Ss(e) >>> 0);
};
function Un(e) {
  return typeof e == "string" && yt.env.NODE_ENV === "production";
}
var Za = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, hu = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function mu(e, t, r) {
  var i = e[r];
  Za(t) && Za(i) ? xs(i, t) : e[r] = t;
}
function xs(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
  for (var c = 0, u = r; c < u.length; c++) {
    var y = u[c];
    if (Za(y)) for (var k in y) hu(k) && mu(e, y[k], k);
  }
  return e;
}
var Es = ft.createContext();
Es.Consumer;
var za = {};
function _s(e, t, r) {
  var i = ci(e), c = !Un(e), u = t.attrs, y = u === void 0 ? Zn : u, k = t.componentId, w = k === void 0 ? function(U, G) {
    var H = typeof U != "string" ? "sc" : Ma(U);
    za[H] = (za[H] || 0) + 1;
    var x = H + "-" + pu("5.3.11" + H + za[H]);
    return G ? G + "-" + x : x;
  }(t.displayName, t.parentComponentId) : k, g = t.displayName, I = g === void 0 ? function(U) {
    return Un(U) ? "styled." + U : "Styled(" + To(U) + ")";
  }(e) : g, R = t.displayName && t.componentId ? Ma(t.displayName) + "-" + t.componentId : t.componentId || w, M = i && e.attrs ? Array.prototype.concat(e.attrs, y).filter(Boolean) : y, q = t.shouldForwardProp;
  i && e.shouldForwardProp && (q = t.shouldForwardProp ? function(U, G, H) {
    return e.shouldForwardProp(U, G, H) && t.shouldForwardProp(U, G, H);
  } : e.shouldForwardProp);
  var E, S = new Jc(r, R, i ? e.componentStyle : void 0), P = S.isStatic && y.length === 0, Y = function(U, G) {
    return function(H, x, ae, we) {
      var Ie = H.attrs, Fe = H.componentStyle, Ve = H.defaultProps, ue = H.foldedComponentIds, me = H.shouldForwardProp, Re = H.styledComponentId, Ne = H.target, Te = function(L, h, ee) {
        L === void 0 && (L = Sr);
        var _ = pr({}, h, { theme: L }), ie = {};
        return ee.forEach(function(Q) {
          var te, X, ne, de = Q;
          for (te in pn(de) && (de = de(_)), de) _[te] = ie[te] = te === "className" ? (X = ie[te], ne = de[te], X && ne ? X + " " + ne : X || ne) : de[te];
        }), [_, ie];
      }(uu(x, xr(Es), Ve) || Sr, x, Ie), st = Te[0], je = Te[1], Oe = function(L, h, ee, _) {
        var ie = ru(), Q = nu(), te = h ? L.generateAndInjectStyles(Sr, ie, Q) : L.generateAndInjectStyles(ee, ie, Q);
        return te;
      }(Fe, we, st), Be = ae, tt = je.$as || x.$as || je.as || x.as || Ne, se = Un(tt), j = je !== x ? pr({}, x, {}, je) : x, C = {};
      for (var F in j) F[0] !== "$" && F !== "as" && (F === "forwardedAs" ? C.as = j[F] : (me ? me(F, So, tt) : !se || So(F)) && (C[F] = j[F]));
      return x.style && je.style !== x.style && (C.style = pr({}, x.style, {}, je.style)), C.className = Array.prototype.concat(ue, Re, Oe !== Re ? Oe : null, x.className, je.className).filter(Boolean).join(" "), C.ref = Be, es(tt, C);
    }(E, U, G, P);
  };
  return Y.displayName = I, (E = ft.forwardRef(Y)).attrs = M, E.componentStyle = S, E.displayName = I, E.shouldForwardProp = q, E.foldedComponentIds = i ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Zn, E.styledComponentId = R, E.target = i ? e.target : e, E.withComponent = function(U) {
    var G = t.componentId, H = function(ae, we) {
      if (ae == null) return {};
      var Ie, Fe, Ve = {}, ue = Object.keys(ae);
      for (Fe = 0; Fe < ue.length; Fe++) Ie = ue[Fe], we.indexOf(Ie) >= 0 || (Ve[Ie] = ae[Ie]);
      return Ve;
    }(t, ["componentId"]), x = G && G + "-" + (Un(U) ? U : Ma(To(U)));
    return _s(U, pr({}, H, { attrs: M, componentId: x }), r);
  }, Object.defineProperty(E, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(U) {
    this._foldedDefaultProps = i ? xs({}, e.defaultProps, U) : U;
  } }), Object.defineProperty(E, "toString", { value: function() {
    return "." + E.styledComponentId;
  } }), c && Pc(E, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), E;
}
var Qt = function(e) {
  return function t(r, i, c) {
    if (c === void 0 && (c = Sr), !ys.isValidElementType(i)) return yn(1, String(i));
    var u = function() {
      return r(i, c, cu.apply(void 0, arguments));
    };
    return u.withConfig = function(y) {
      return t(r, i, pr({}, c, {}, y));
    }, u.attrs = function(y) {
      return t(r, i, pr({}, c, { attrs: Array.prototype.concat(c.attrs, y).filter(Boolean) }));
    }, u;
  }(_s, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  Qt[e] = Qt(e);
});
Qt.div`
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
    h4,
    h2 {
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
o.arrayOf(
  o.shape({
    text: o.string.isRequired,
    targetIdName: o.string.isRequired,
    icon: o.arrayOf(o.string)
  })
).isRequired, o.string.isRequired, o.bool;
function oa(e) {
  var t = Object.entries(e).filter(function(r) {
    var i = r[1];
    return i != null;
  }).map(function(r) {
    var i = r[0], c = r[1];
    return "".concat(encodeURIComponent(i), "=").concat(encodeURIComponent(String(c)));
  });
  return t.length > 0 ? "?".concat(t.join("&")) : "";
}
var gu = /* @__PURE__ */ function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, c) {
      i.__proto__ = c;
    } || function(i, c) {
      for (var u in c) Object.prototype.hasOwnProperty.call(c, u) && (i[u] = c[u]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function i() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (i.prototype = r.prototype, new i());
  };
}(), Nr = function() {
  return Nr = Object.assign || function(e) {
    for (var t, r = 1, i = arguments.length; r < i; r++) {
      t = arguments[r];
      for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c]);
    }
    return e;
  }, Nr.apply(this, arguments);
}, yu = function(e, t, r, i) {
  function c(u) {
    return u instanceof r ? u : new r(function(y) {
      y(u);
    });
  }
  return new (r || (r = Promise))(function(u, y) {
    function k(I) {
      try {
        g(i.next(I));
      } catch (R) {
        y(R);
      }
    }
    function w(I) {
      try {
        g(i.throw(I));
      } catch (R) {
        y(R);
      }
    }
    function g(I) {
      I.done ? u(I.value) : c(I.value).then(k, w);
    }
    g((i = i.apply(e, [])).next());
  });
}, bu = function(e, t) {
  var r = { label: 0, sent: function() {
    if (u[0] & 1) throw u[1];
    return u[1];
  }, trys: [], ops: [] }, i, c, u, y;
  return y = { next: k(0), throw: k(1), return: k(2) }, typeof Symbol == "function" && (y[Symbol.iterator] = function() {
    return this;
  }), y;
  function k(g) {
    return function(I) {
      return w([g, I]);
    };
  }
  function w(g) {
    if (i) throw new TypeError("Generator is already executing.");
    for (; r; ) try {
      if (i = 1, c && (u = g[0] & 2 ? c.return : g[0] ? c.throw || ((u = c.return) && u.call(c), 0) : c.next) && !(u = u.call(c, g[1])).done) return u;
      switch (c = 0, u && (g = [g[0] & 2, u.value]), g[0]) {
        case 0:
        case 1:
          u = g;
          break;
        case 4:
          return r.label++, { value: g[1], done: !1 };
        case 5:
          r.label++, c = g[1], g = [0];
          continue;
        case 7:
          g = r.ops.pop(), r.trys.pop();
          continue;
        default:
          if (u = r.trys, !(u = u.length > 0 && u[u.length - 1]) && (g[0] === 6 || g[0] === 2)) {
            r = 0;
            continue;
          }
          if (g[0] === 3 && (!u || g[1] > u[0] && g[1] < u[3])) {
            r.label = g[1];
            break;
          }
          if (g[0] === 6 && r.label < u[1]) {
            r.label = u[1], u = g;
            break;
          }
          if (u && r.label < u[2]) {
            r.label = u[2], r.ops.push(g);
            break;
          }
          u[2] && r.ops.pop(), r.trys.pop();
          continue;
      }
      g = t.call(e, r);
    } catch (I) {
      g = [6, I], c = 0;
    } finally {
      i = u = 0;
    }
    if (g[0] & 5) throw g[1];
    return { value: g[0] ? g[1] : void 0, done: !0 };
  }
}, Ts = function(e, t) {
  var r = {};
  for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (r[i] = e[i]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var c = 0, i = Object.getOwnPropertySymbols(e); c < i.length; c++)
      t.indexOf(i[c]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[c]) && (r[i[c]] = e[i[c]]);
  return r;
}, vu = function(e) {
  return !!e && (typeof e == "object" || typeof e == "function") && typeof e.then == "function";
}, Su = function(e, t) {
  return {
    left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - e / 2,
    top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - t / 2
  };
}, wu = function(e, t) {
  return {
    top: (window.screen.height - t) / 2,
    left: (window.screen.width - e) / 2
  };
};
function ku(e, t, r) {
  var i = t.height, c = t.width, u = Ts(t, ["height", "width"]), y = Nr({ height: i, width: c, location: "no", toolbar: "no", status: "no", directories: "no", menubar: "no", scrollbars: "yes", resizable: "no", centerscreen: "yes", chrome: "yes" }, u), k = window.open(e, "", Object.keys(y).map(function(g) {
    return "".concat(g, "=").concat(y[g]);
  }).join(", "));
  if (r)
    var w = window.setInterval(function() {
      try {
        (k === null || k.closed) && (window.clearInterval(w), r(k));
      } catch (g) {
        console.error(g);
      }
    }, 1e3);
  return k;
}
var xu = (
  /** @class */
  function(e) {
    gu(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.openShareDialog = function(i) {
        var c = r.props, u = c.onShareWindowClose, y = c.windowHeight, k = y === void 0 ? 400 : y, w = c.windowPosition, g = w === void 0 ? "windowCenter" : w, I = c.windowWidth, R = I === void 0 ? 550 : I, M = Nr({ height: k, width: R }, g === "windowCenter" ? Su(R, k) : wu(R, k));
        ku(i, M, u);
      }, r.handleClick = function(i) {
        return yu(r, void 0, void 0, function() {
          var c, u, y, k, w, g, I, R, M, q;
          return bu(this, function(E) {
            switch (E.label) {
              case 0:
                return c = this.props, u = c.beforeOnClick, y = c.disabled, k = c.networkLink, w = c.onClick, g = c.url, I = c.openShareDialogOnClick, R = c.opts, M = k(g, R), y ? [
                  2
                  /*return*/
                ] : (i.preventDefault(), u ? (q = u(), vu(q) ? [4, q] : [3, 2]) : [3, 2]);
              case 1:
                E.sent(), E.label = 2;
              case 2:
                return I && this.openShareDialog(M), w && w(i, M), [
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
      var i = r.children, c = r.className, u = r.disabled, y = r.disabledStyle, k = r.forwardedRef;
      r.networkLink;
      var w = r.networkName;
      r.onShareWindowClose, r.openShareDialogOnClick, r.opts;
      var g = r.resetButtonStyle, I = r.style;
      r.url, r.windowHeight, r.windowPosition, r.windowWidth;
      var R = Ts(r, ["beforeOnClick", "children", "className", "disabled", "disabledStyle", "forwardedRef", "networkLink", "networkName", "onShareWindowClose", "openShareDialogOnClick", "opts", "resetButtonStyle", "style", "url", "windowHeight", "windowPosition", "windowWidth"]), M = Zt("react-share__ShareButton", {
        "react-share__ShareButton--disabled": !!u,
        disabled: !!u
      }, c), q = Nr(Nr(g ? { backgroundColor: "transparent", border: "none", padding: 0, font: "inherit", color: "inherit", cursor: "pointer" } : {}, I), u && y);
      return ft.createElement("button", Nr({}, R, { "aria-label": R["aria-label"] || w, className: M, onClick: this.handleClick, ref: k, style: q }), i);
    }, t.defaultProps = {
      disabledStyle: { opacity: 0.6 },
      openShareDialogOnClick: !0,
      resetButtonStyle: !0
    }, t;
  }(ol)
), ea = function() {
  return ea = Object.assign || function(e) {
    for (var t, r = 1, i = arguments.length; r < i; r++) {
      t = arguments[r];
      for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c]);
    }
    return e;
  }, ea.apply(this, arguments);
};
function sa(e, t, r, i) {
  function c(u, y) {
    var k = r(u), w = ea({}, u), g = Object.keys(k);
    return g.forEach(function(I) {
      delete w[I];
    }), ft.createElement(xu, ea({}, i, w, { forwardedRef: y, networkName: e, networkLink: t, opts: r(u) }));
  }
  return c.displayName = "ShareButton-".concat(e), oi(c);
}
function Eu(e, t) {
  var r = t.subject, i = t.body, c = t.separator;
  return "mailto:" + oa({ subject: r, body: i ? i + c + e : e });
}
sa("email", Eu, function(e) {
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
var _u = /* @__PURE__ */ function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, c) {
      i.__proto__ = c;
    } || function(i, c) {
      for (var u in c) Object.prototype.hasOwnProperty.call(c, u) && (i[u] = c[u]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function i() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (i.prototype = r.prototype, new i());
  };
}(), Tu = (
  /** @class */
  function(e) {
    _u(t, e);
    function t(r) {
      var i = e.call(this, r) || this;
      return i.name = "AssertionError", i;
    }
    return t;
  }(Error)
);
function un(e, t) {
  if (!e)
    throw new Tu(t);
}
function Cu(e, t) {
  var r = t.quote, i = t.hashtag;
  return un(e, "facebook.url"), "https://www.facebook.com/sharer/sharer.php" + oa({
    u: e,
    quote: r,
    hashtag: i
  });
}
sa("facebook", Cu, function(e) {
  return {
    quote: e.quote,
    hashtag: e.hashtag
  };
}, {
  windowWidth: 550,
  windowHeight: 400
});
function Au(e, t) {
  var r = t.title, i = t.summary, c = t.source;
  return un(e, "linkedin.url"), "https://linkedin.com/shareArticle" + oa({ url: e, mini: "true", title: r, summary: i, source: c });
}
sa("linkedin", Au, function(e) {
  var t = e.title, r = e.summary, i = e.source;
  return { title: t, summary: r, source: i };
}, {
  windowWidth: 750,
  windowHeight: 600
});
function Ou(e, t) {
  var r = t.title, i = t.via, c = t.hashtags, u = c === void 0 ? [] : c, y = t.related, k = y === void 0 ? [] : y;
  return un(e, "twitter.url"), un(Array.isArray(u), "twitter.hashtags is not an array"), un(Array.isArray(k), "twitter.related is not an array"), "https://twitter.com/share" + oa({
    url: e,
    text: r,
    via: i,
    hashtags: u.length > 0 ? u.join(",") : void 0,
    related: k.length > 0 ? k.join(",") : void 0
  });
}
sa("twitter", Ou, function(e) {
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
function Qa(e) {
  "@babel/helpers - typeof";
  return Qa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Qa(e);
}
var Ru = (typeof window > "u" ? "undefined" : Qa(window)) === "object" && window.Element || function() {
};
function Iu(e, t, r) {
  if (!(e[t] instanceof Ru))
    return new Error("Invalid prop `" + t + "` supplied to `" + r + "`. Expected prop to be an instance of Element. Validation failed.");
}
o.oneOfType([o.string, o.func, Iu, o.shape({
  current: o.any
})]);
o.oneOfType([o.func, o.string, o.shape({
  $$typeof: o.symbol,
  render: o.func
}), o.arrayOf(o.oneOfType([o.func, o.string, o.shape({
  $$typeof: o.symbol,
  render: o.func
})]))]);
o.string, o.node, o.string, o.object, o.string;
o.bool, o.string, o.object;
Qt.div`
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
Qt.div`
  border-top: 1px solid black;
  h4 {
    margin-top: 0;
  }
  .react-share__ShareButton {
    margin-right: 24px;
  }
`;
o.oneOf(["event", "news"]), o.string.isRequired, o.string.isRequired, o.string.isRequired, o.string.isRequired, o.string, o.string.isRequired, o.string, o.string, o.arrayOf(
  o.shape({
    title: o.string,
    url: o.string,
    active: o.bool
  })
), o.string, o.string, o.string, o.string, o.string, o.string;
o.oneOf(["white", "gray", "black"]), o.arrayOf(o.string), o.oneOfType([
  o.object,
  o.func,
  o.string
]), o.func, o.string, o.oneOf(["large", "small"]), o.string;
const Nu = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Cs = ({
  label: e = "",
  cardTitle: t = "",
  gaData: r,
  ariaLabel: i,
  color: c = "gray",
  disabled: u,
  element: y = "button",
  innerRef: k,
  href: w,
  onClick: g,
  ...I
}) => {
  const R = Zt("btn", "btn-tag", {
    "btn-tag-alt-white": c === "white",
    "btn-tag-alt-gray": c === "gray",
    "btn-tag-alt-dark": c === "dark",
    disabled: u
  });
  let M = y;
  return w && y === "button" && (M = "a"), /* @__PURE__ */ B.jsx(
    kr,
    {
      gaData: {
        ...Nu,
        section: t,
        // @deprecated - remove at some point
        ...r,
        text: e
      },
      children: /* @__PURE__ */ B.jsx(
        M,
        {
          type: M === "button" && g ? "button" : void 0,
          ...I,
          className: R,
          href: w,
          ref: k,
          onClick: g,
          "aria-label": i,
          children: e
        }
      )
    }
  );
};
Cs.propTypes = {
  /**
    Button tag label
  */
  label: o.string,
  /**
   * @deprecated
   * Card title, use `gaData.section` instead
   */
  cardTitle: o.string,
  /**
   * Google Analytics event data
   */
  gaData: li,
  /**
    ARIA label for accessibility
  */
  ariaLabel: o.string,
  /**
    Button background color
  */
  color: o.oneOf(["white", "gray", "dark"]),
  /**
    Disable the button?
  */
  disabled: o.bool,
  /**
    Pass in a Component to override default button element.
    For example: react-router Link
  */
  element: o.oneOfType([
    o.func,
    o.string,
    o.shape({ $$typeof: o.symbol, render: o.func }),
    o.arrayOf(
      o.oneOfType([
        o.func,
        o.string,
        o.shape({ $$typeof: o.symbol, render: o.func })
      ])
    )
  ]),
  /**
    Link target url; will cause button to be rendered as `<a>` link
  */
  href: o.string,
  /**
   * ref will only get you a reference to the Button component, use innerRef to
   * get a reference to the DOM element (for things like focus management).
   */
  innerRef: o.oneOfType([
    o.object,
    o.func,
    o.string
  ]),
  /**
    Event handler function for `<button>`
  */
  onClick: o.func
};
const As = ({
  src: e,
  alt: t,
  cssClasses: r,
  loading: i = "lazy",
  decoding: c = "async",
  dataTestId: u,
  fetchPriority: y = "auto",
  width: k,
  height: w,
  cardLink: g,
  title: I,
  caption: R,
  captionTitle: M,
  border: q,
  dropShadow: E
}) => {
  const S = {
    src: e,
    alt: t,
    loading: i,
    decoding: c,
    fetchpriority: y,
    // React attribute bug workaround
    ...(r == null ? void 0 : r.length) > 0 && { className: Yl(r) },
    ...u && { "data-testid": u },
    ...k && { width: k },
    ...w && { height: w }
  }, P = Zt("uds-img", {
    borderless: !q,
    "uds-img-drop-shadow": E
  }), Y = (G) => {
    const H = G ? `${S.className} ${G}` : S.className;
    return g ? /* @__PURE__ */ B.jsxs("a", { href: g, children: [
      /* @__PURE__ */ B.jsx("img", { ...S, className: H }),
      /* @__PURE__ */ B.jsx("span", { className: "visually-hidden", children: I })
    ] }) : /* @__PURE__ */ B.jsx("img", { ...S, className: H });
  }, U = () => /* @__PURE__ */ B.jsx("div", { className: P, children: /* @__PURE__ */ B.jsxs("figure", { className: "figure uds-figure", children: [
    Y(),
    R && /* @__PURE__ */ B.jsxs("figcaption", { className: "figure-caption uds-figure-caption", children: [
      M && /* @__PURE__ */ B.jsx("h3", { children: M }),
      /* @__PURE__ */ B.jsx(
        "span",
        {
          className: "uds-caption-text",
          dangerouslySetInnerHTML: Ir(R)
        }
      )
    ] })
  ] }) });
  return /* @__PURE__ */ B.jsx(B.Fragment, { children: R ? U() : Y(P) });
};
As.propTypes = {
  /**
   * Image source (We keep the same name as in the whole project)
   */
  src: o.string.isRequired,
  /**
   * Image alt text
   */
  alt: o.string.isRequired,
  /**
   * Array classes for the image
   */
  cssClasses: o.arrayOf(o.string),
  /**
   * Image loading mode
   */
  loading: o.oneOf(["lazy", "eager"]),
  /**
   * Image decoding mode
   */
  decoding: o.oneOf(["sync", "async", "auto"]),
  /**
   * Image fetch priority mode
   */
  fetchPriority: o.oneOf(["auto", "high", "low"]),
  /**
   * Width of the image
   */
  width: o.string,
  /**
   * Height of the image
   */
  height: o.string,
  dataTestId: o.string,
  cardLink: o.string,
  title: o.string,
  caption: o.string,
  captionTitle: o.string,
  border: o.bool,
  dropShadow: o.bool
};
const Du = Qt.div`
  &.cards-components a + &.cards-components a {
    margin-left: 5px;
  }
  .card-button {
    column-gap: 1rem;
  }
  .card-button .btn {
    margin: 0;
  }
`, Pu = (e) => /^[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e), Lu = (e) => !e.startsWith("https://") && !e.startsWith("http://") && Pu(e) ? `mailto:${e}` : e, No = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, ei = (e) => e === "event" || e === "news", vr = ({
  type: e = "default",
  width: t = "100%",
  horizontal: r = !1,
  image: i,
  imageAltText: c,
  title: u,
  icon: y,
  body: k,
  eventFormat: w = "stack",
  eventLocation: g,
  eventTime: I,
  buttons: R,
  linkLabel: M,
  linkUrl: q,
  tags: E,
  showBorders: S = !0,
  cardLink: P
}) => /* @__PURE__ */ B.jsx(
  Os,
  {
    type: e,
    width: t,
    horizontal: r,
    image: i,
    imageAltText: c,
    title: u,
    icon: y,
    body: k,
    eventFormat: w,
    eventLocation: g,
    eventTime: I,
    buttons: R,
    linkLabel: M,
    linkUrl: q,
    tags: E,
    showBorders: S,
    cardLink: P
  }
);
vr.propTypes = {
  /**
   * Type of card
   */
  type: o.oneOf(["default", "degree", "event", "news", "story"]),
  /**
   * Width of card
   */
  width: o.oneOf(["25%", "50%", "75%", "100%"]),
  /**
   * Enable horizontal mode
   */
  horizontal: o.bool,
  /**
   * Card title
   */
  title: o.string.isRequired,
  /**
    React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  */
  icon: o.arrayOf(o.string),
  /**
   * Card body content
   */
  body: o.string,
  /**
   * Event info format
   */
  eventFormat: o.oneOf(["stack", "inline"]),
  /**
   * Location
   */
  eventLocation: o.string,
  /**
   * Event start time
   */
  eventTime: o.string,
  /**
   * Card header image
   */
  image: o.string,
  /**
   * Card header image alt text
   */
  imageAltText: o.string,
  /**
   * Buttons
   */
  buttons: o.arrayOf(
    o.shape({
      ariaLabel: o.string,
      color: o.oneOf(["gold", "maroon", "gray", "dark"]),
      icon: o.arrayOf(o.string),
      href: o.string,
      label: o.string,
      onClick: o.func,
      size: o.oneOf(["default", "small", "xsmall"]),
      target: o.oneOf(["_blank", "_self", "_top", "_parent"])
    })
  ),
  linkLabel: o.string,
  linkUrl: o.string,
  /**
   * Tags
   */
  tags: o.arrayOf(
    o.shape({
      ariaLabel: o.string,
      color: o.oneOf(["white", "gray", "dark"]),
      href: o.string,
      label: o.string,
      onClick: o.func
    })
  ),
  /**
   * Remove card borders
   */
  showBorders: o.bool,
  /**
   * Card link
   */
  cardLink: o.string
};
const Os = ({
  type: e = "default",
  width: t = "100%",
  horizontal: r = !1,
  image: i = "",
  imageAltText: c = "",
  title: u,
  icon: y = void 0,
  body: k = "",
  eventFormat: w = "stack",
  eventLocation: g = "",
  eventTime: I = "",
  buttons: R = void 0,
  linkLabel: M = void 0,
  linkUrl: q = void 0,
  tags: E = void 0,
  showBorders: S = !0,
  cardLink: P
}) => {
  const Y = Zt("card", "cards-components", {
    "card-degree": e === "degree",
    "card-event": e === "event",
    "card-story": e === "story",
    [`w-${t.replace("%", "")}`]: t !== "100%",
    "card-horizontal": r,
    borderless: !S
  }), U = ei(e) ? !!i : !0, G = !ei(e);
  return /* @__PURE__ */ B.jsxs(Du, { className: Y, "data-testid": "card-container", children: [
    U && /* @__PURE__ */ B.jsx(
      As,
      {
        src: i,
        alt: c,
        dataTestId: "card-image",
        cssClasses: ["card-img-top"],
        title: u,
        cardLink: G ? P : void 0
      }
    ),
    !i && y && /* @__PURE__ */ B.jsx(
      "i",
      {
        className: `${y == null ? void 0 : y[0]} fa-${y == null ? void 0 : y[1]} fa-2x card-icon-top`,
        "data-testid": "card-icon"
      }
    ),
    /* @__PURE__ */ B.jsx("div", { className: r ? "card-content-wrapper" : void 0, children: /* @__PURE__ */ B.jsx(
      Rs,
      {
        type: e,
        body: k,
        eventFormat: w,
        eventLocation: g,
        eventTime: I,
        title: u,
        buttons: R,
        linkLabel: M,
        linkUrl: q,
        tags: E,
        cardLink: P
      }
    ) })
  ] });
};
Os.propTypes = {
  type: o.oneOf(["default", "degree", "event", "news", "story"]),
  width: o.oneOf(["25%", "50%", "75%", "100%"]),
  horizontal: o.bool,
  title: o.string.isRequired,
  icon: o.arrayOf(o.string),
  // React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  body: o.string,
  eventFormat: o.oneOf(["stack", "inline"]),
  eventLocation: o.string,
  eventTime: o.string,
  image: o.string,
  imageAltText: o.string,
  buttons: o.arrayOf(
    o.shape({
      ariaLabel: o.string,
      color: o.oneOf(["gold", "maroon", "gray", "dark"]),
      icon: o.arrayOf(o.string),
      href: o.string,
      label: o.string,
      onClick: o.func,
      size: o.oneOf(["default", "small", "xsmall"]),
      target: o.oneOf(["_blank", "_self", "_top", "_parent"])
    })
  ),
  linkLabel: o.string,
  linkUrl: o.string,
  tags: o.arrayOf(
    o.shape({
      ariaLabel: o.string,
      color: o.oneOf(["white", "gray", "dark"]),
      href: o.string,
      label: o.string,
      onClick: o.func
    })
  ),
  showBorders: o.bool,
  cardLink: o.string
};
const Rs = ({
  type: e = "default",
  body: t = "",
  eventFormat: r = "stack",
  eventLocation: i = "",
  eventTime: c = "",
  title: u,
  buttons: y = void 0,
  linkLabel: k = void 0,
  linkUrl: w = void 0,
  tags: g = void 0,
  cardLink: I
}) => {
  const R = ei(e), M = I && !R, q = R && I, E = e === "event" && (c || i);
  return /* @__PURE__ */ B.jsxs(B.Fragment, { children: [
    /* @__PURE__ */ B.jsx("div", { className: "card-header", "data-testid": "card-title", children: /* @__PURE__ */ B.jsx("h3", { className: "card-title", children: M ? /* @__PURE__ */ B.jsx("a", { href: I, children: u }) : u }) }),
    t && /* @__PURE__ */ B.jsx("div", { className: "card-body", "data-testid": "card-body", children: /* @__PURE__ */ B.jsx("div", { dangerouslySetInnerHTML: Ir(t) }) }),
    E && /* @__PURE__ */ B.jsx(
      Is,
      {
        eventFormat: r,
        eventTime: c,
        eventLocation: i
      }
    ),
    q ? /* @__PURE__ */ B.jsx("div", { className: "card-link", "data-testid": "card-link", children: /* @__PURE__ */ B.jsx(
      kr,
      {
        gaData: {
          ...No,
          text: u
        },
        children: /* @__PURE__ */ B.jsx("a", { href: I, className: "card-arrow-link", "aria-label": u, children: /* @__PURE__ */ B.jsx("i", { className: "fas fa-arrow-right", "aria-hidden": "true" }) })
      }
    ) }) : /* @__PURE__ */ B.jsxs(B.Fragment, { children: [
      y && /* @__PURE__ */ B.jsx("div", { className: "card-buttons", children: y.map((S) => /* @__PURE__ */ B.jsx(
        "div",
        {
          className: "card-button",
          "data-testid": "card-button",
          children: /* @__PURE__ */ B.jsx(
            gs,
            {
              ariaLabel: S.ariaLabel,
              color: S.color,
              icon: S.icon,
              href: S.href,
              label: S.label,
              onClick: S.onClick,
              size: S.size,
              target: S.target,
              cardTitle: u
            }
          )
        },
        `${S.label}-${S.href}`
      )) }),
      w && k && /* @__PURE__ */ B.jsx("div", { className: "card-link", "data-testid": "card-link", children: /* @__PURE__ */ B.jsx(
        kr,
        {
          gaData: {
            ...No,
            section: u,
            text: k
          },
          children: /* @__PURE__ */ B.jsx("a", { href: Lu(w), children: k })
        }
      ) })
    ] }),
    g && /* @__PURE__ */ B.jsx("div", { className: "card-tags", "data-testid": "card-tags", children: g.map((S) => (
      // @ts-ignore
      /* @__PURE__ */ B.jsx(
        Cs,
        {
          ariaLabel: S.ariaLabel,
          color: S.color,
          href: S.href,
          label: S.label,
          onClick: S.onClick,
          cardTitle: u
        },
        `${S.label}-${S.href}`
      )
    )) })
  ] });
};
Rs.propTypes = {
  type: o.oneOf(["default", "degree", "event", "news", "story"]),
  body: o.string,
  eventFormat: o.oneOf(["stack", "inline"]),
  eventLocation: o.string,
  eventTime: o.string,
  title: o.string.isRequired,
  buttons: o.arrayOf(
    o.shape({
      ariaLabel: o.string,
      color: o.oneOf(["gold", "maroon", "gray", "dark"]),
      icon: o.arrayOf(o.string),
      href: o.string,
      label: o.string,
      onClick: o.func,
      size: o.oneOf(["default", "small", "xsmall"]),
      target: o.oneOf(["_blank", "_self", "_top", "_parent"])
    })
  ),
  linkLabel: o.string,
  linkUrl: o.string,
  tags: o.arrayOf(
    o.shape({
      ariaLabel: o.string,
      color: o.oneOf(["white", "gray", "dark"]),
      href: o.string,
      label: o.string,
      onClick: o.func
    })
  ),
  cardLink: o.string
};
const Is = ({
  eventFormat: e = "stack",
  eventLocation: t = "",
  eventTime: r = ""
}) => e === "inline" ? /* @__PURE__ */ B.jsxs("div", { className: "card-event-details", children: [
  r && /* @__PURE__ */ B.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ B.jsx("div", { children: /* @__PURE__ */ B.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ B.jsx("div", { dangerouslySetInnerHTML: Ir(r) })
  ] }),
  t && /* @__PURE__ */ B.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ B.jsx("div", { children: /* @__PURE__ */ B.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ B.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Ir(t)
      }
    )
  ] })
] }) : /* @__PURE__ */ B.jsxs(B.Fragment, { children: [
  r && /* @__PURE__ */ B.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ B.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ B.jsx("div", { children: /* @__PURE__ */ B.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ B.jsx("div", { dangerouslySetInnerHTML: Ir(r) })
  ] }) }),
  t && /* @__PURE__ */ B.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ B.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ B.jsx("div", { children: /* @__PURE__ */ B.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ B.jsx("span", { children: /* @__PURE__ */ B.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Ir(t)
      }
    ) })
  ] }) })
] });
Is.propTypes = {
  eventFormat: o.oneOf(["stack", "inline"]),
  eventLocation: o.string,
  eventTime: o.string
};
o.oneOf(["small", "large"]), o.string.isRequired, o.string.isRequired, o.string;
o.oneOf(["small", "large"]).isRequired, o.string.isRequired, o.string.isRequired, o.string.isRequired, o.string.isRequired, o.string, o.string;
o.arrayOf(o.object).isRequired, o.oneOf(["card", "ranking", "image"]), o.oneOf([1, 2, 3, 4, "1", "2", "3", "4"]);
o.string.isRequired, o.oneOfType([
  o.string,
  o.arrayOf(o.string)
]), o.node.isRequired, o.string, o.string, o.shape({
  label: o.string.isRequired,
  href: o.string.isRequired,
  color: o.string
});
const Fu = Qt.div`
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
`, ju = () => /* @__PURE__ */ B.jsxs(Fu, { children: [
  /* @__PURE__ */ B.jsx("div", {}),
  /* @__PURE__ */ B.jsx("div", {}),
  /* @__PURE__ */ B.jsx("div", {}),
  /* @__PURE__ */ B.jsx("div", {})
] }), Mu = Qt.section``, di = sl(null), Ns = ({
  defaultProps: e,
  dataSource: t,
  noFeedText: r,
  renderHeader: i,
  renderBody: c,
  dataTransformer: u,
  dataFilter: y,
  maxItems: k
}) => {
  const [{ data: w, loading: g, error: I }, R] = ql(), [M, q] = ln([]), E = { ...e.dataSource, ...t };
  return fn(() => {
    R(E == null ? void 0 : E.url);
  }, [E == null ? void 0 : E.url]), fn(() => {
    const S = w == null ? void 0 : w.nodes.map(u), P = S == null ? void 0 : S.filter(
      (Y) => y(Y, t == null ? void 0 : t.filters)
    );
    q(k ? P == null ? void 0 : P.slice(0, k) : P);
  }, [w]), // Init the context to be used on its childrens
  /* @__PURE__ */ B.jsx(di.Provider, { value: { feeds: M }, children: /* @__PURE__ */ B.jsxs(Mu, { children: [
    i,
    I ? /* @__PURE__ */ B.jsx("span", { children: "Error, try again!" }) : /* @__PURE__ */ B.jsxs(B.Fragment, { children: [
      g && !(M != null && M.length) && /* @__PURE__ */ B.jsx("div", { className: "text-center mt-4", children: /* @__PURE__ */ B.jsx(ju, {}) }),
      M != null && M.length ? c : !g && /* @__PURE__ */ B.jsx("p", { className: "text-center", children: r })
    ] })
  ] }) });
};
Ns.propTypes = {
  renderHeader: o.element,
  renderBody: o.element,
  maxItems: o.number,
  dataTransformer: o.func,
  dataFilter: o.func,
  noFeedText: o.string
};
const fi = o.shape({
  color: o.oneOf(["white", "dark"]),
  text: o.string
}), pi = o.shape({
  color: o.oneOf(["gold", "maroon", "gray", "dark"]),
  text: o.string
});
o.shape({
  color: o.oneOf(["gold", "maroon", "gray", "dark"]),
  text: o.string,
  size: o.string
});
const Ds = o.shape({
  url: o.string,
  filters: o.string
}), zu = o.shape({
  header: fi,
  ctaButton: pi,
  dataSource: Ds,
  maxItems: o.number
}), $u = Qt.div`
  @media screen and (min-width: 768px) {
    & {
      display: inline-flex;
      justify-content: flex-end;
    }
  }
`, Ps = ({
  defaultProps: e,
  header: t,
  ctaButton: r
}) => {
  const i = { ...e.header, ...t }, c = { ...e.ctaButton, ...r }, u = i.tag || "h2", y = u !== "h2", k = `text-${i.color} ${y ? "h2" : ""}`.trim();
  return /* @__PURE__ */ B.jsxs(
    "div",
    {
      className: "row justify-content-between align-items-center pb-6",
      "data-testid": "feed-header",
      children: [
        /* @__PURE__ */ B.jsx("div", { className: "col-sm-12 col-md-9", children: /* @__PURE__ */ B.jsx(u, { className: k, children: i.text }) }),
        /* @__PURE__ */ B.jsx($u, { className: "col-sm-12 col-md-3", children: /* @__PURE__ */ B.jsx(
          kr,
          {
            gaData: {
              event: "link",
              action: "click",
              name: "onclick",
              type: "internal link",
              region: "main content",
              section: i.text,
              text: c.text
            },
            children: /* @__PURE__ */ B.jsx("a", { className: `btn btn-${c.color}`, href: c.url, children: c.text })
          }
        ) })
      ]
    }
  );
};
Ps.propTypes = {
  defaultProps: zu,
  header: fi,
  ctaButton: pi
};
const Ls = ({ children: e }) => /* @__PURE__ */ B.jsx("div", { className: "row", "data-testid": "feed-body", children: /* @__PURE__ */ B.jsx("div", { className: "col", children: e }) });
Ls.propTypes = {
  children: o.element
};
Qt.img`
  width: 100%;
`;
o.oneOf(["heading-hero", "story-hero"]), o.arrayOf(Fa), o.string;
o.bool, o.bool, o.bool, o.bool, o.string, o.func, o.node, o.bool, o.string, o.bool;
o.oneOf(["default", "bordered"]).isRequired, o.oneOf(["white", "gray1", "gray2", "gray7"]).isRequired, o.number, o.number, o.func.isRequired;
Qt.div`
  button {
    padding: 16px 0;
    border: none;
    outline: none;
  }
`;
o.object, o.bool, o.bool, o.func.isRequired;
const Uu = oi(function(e, t) {
  const {
    id: r,
    selected: i,
    title: c,
    selectTab: u,
    leftKeyPressed: y,
    rightKeyPressed: k,
    icon: w,
    gaData: g
  } = e, { isReact: I, isBootstrap: R } = ms(), M = ll(null);
  cl(t, () => ({
    focus() {
      M.current.focus();
    },
    scrollIntoView() {
      var E, S, P, Y, U, G, H;
      const x = ((E = M.current) == null ? void 0 : E.offsetWidth) / 2 + M.current.offsetLeft, ae = ((P = (S = M.current) == null ? void 0 : S.offsetParent) == null ? void 0 : P.scrollLeft) + ((U = (Y = M.current) == null ? void 0 : Y.offsetParent) == null ? void 0 : U.offsetWidth) / 2;
      (H = (G = M.current) == null ? void 0 : G.offsetParent) == null || H.scrollBy({
        left: x - ae
      });
    }
  }), []);
  const q = (E) => {
    E.keyCode === 37 ? (E.preventDefault(), y()) : E.keyCode === 39 && (E.preventDefault(), k());
  };
  return /* @__PURE__ */ B.jsx(kr, { gaData: { ...g, text: c }, children: /* @__PURE__ */ B.jsxs(
    "a",
    {
      ref: M,
      className: `nav-item nav-link ${i ? "active" : ""}`,
      id: r,
      href: `#nav-${r}`,
      role: "tab",
      "aria-controls": `nav-${r}`,
      "aria-selected": i,
      "data-bs-toggle": R && "tab",
      onClick: I && ((E) => u(E, r, c)),
      onKeyDown: I && q,
      tabIndex: i ? "" : "-1",
      children: [
        c,
        " ",
        w && /* @__PURE__ */ B.jsx("i", { className: `${w == null ? void 0 : w[0]} fa-${w == null ? void 0 : w[1]} me-1` })
      ]
    }
  ) });
});
Uu.propTypes = {
  gaData: o.object,
  id: o.string.isRequired,
  selected: o.bool.isRequired,
  title: o.string.isRequired,
  selectTab: o.func.isRequired,
  leftKeyPressed: o.func.isRequired,
  rightKeyPressed: o.func.isRequired,
  icon: o.arrayOf(o.string)
};
o.string.isRequired, o.string, o.bool, o.oneOfType([o.array, o.element]);
o.string, o.arrayOf(o.element).isRequired, o.string, o.func;
o.shape({
  title: o.string,
  content: o.string,
  cite: o.shape({
    name: o.string,
    description: o.string
  })
}).isRequired, o.string, o.string, o.shape({
  containerCssClass: o.arrayOf(o.string),
  titleCssClass: o.arrayOf(o.string),
  contentCssClass: o.arrayOf(o.string)
});
o.oneOf(["video", "youtube"]), o.string, o.string, o.string, o.string, o.string, o.bool;
o.oneOfType([
  o.element,
  o.arrayOf(o.element)
]).isRequired;
o.number.isRequired;
o.arrayOf(o.string).isRequired, o.func;
o.func;
o.func;
o.arrayOf(o.element);
o.element, o.func;
o.arrayOf(o.object);
var Hu = !1;
try {
  var Do = Object.defineProperty({}, "passive", {
    get: function() {
      Hu = !0;
    }
  });
  window.addEventListener("testPassive", null, Do), window.removeEventListener("testPassive", null, Do);
} catch {
}
o.number, o.string, o.string, o.arrayOf(o.object).isRequired, o.string, o.func, o.string, o.string, o.func, o.bool, o.bool, o.bool, o.bool, o.bool, o.bool, o.bool, o.bool;
o.string.isRequired, o.arrayOf(
  o.shape({
    title: o.string.isRequired,
    content: o.string,
    eventLocation: o.string,
    eventTime: o.string,
    image: o.string,
    imageAltText: o.string,
    buttons: vr.propTypes.buttons,
    linkLabel: o.string,
    linkUrl: o.string,
    tags: vr.propTypes.tags
  })
).isRequired, vr.propTypes.type, vr.propTypes.eventFormat, vr.propTypes.horizontal, o.string, o.string, o.bool;
o.number.isRequired, o.arrayOf(o.object).isRequired, o.string, o.string, o.bool;
const ta = {
  imageItems: o.arrayOf(
    o.shape({
      id: o.number,
      imageSource: o.string,
      thumbnailSource: o.string,
      imageAltText: o.string,
      content: o.oneOfType([o.string, o.element])
    })
  ),
  hasContent: o.bool
};
o.string, ta.imageItems, ta.hasContent;
ta.imageItems.isRequired, ta.hasContent, o.string, o.string, o.bool;
o.arrayOf(
  o.shape({
    title: o.string,
    content: o.string,
    cite: o.shape({
      name: o.string,
      description: o.string
    })
  })
).isRequired, o.shape({
  containerCssClass: o.arrayOf(o.string),
  titleCssClass: o.arrayOf(o.string),
  contentCssClass: o.arrayOf(o.string)
}), o.string, o.string, o.bool, o.bool, o.bool;
var Hn = {}, Po;
function Bu() {
  if (Po) return Hn;
  Po = 1;
  var e = ts;
  return Hn.createRoot = e.createRoot, Hn.hydrateRoot = e.hydrateRoot, Hn;
}
Bu();
(function() {
  var e = `@charset "UTF-8";.glide{position:relative;width:100%;box-sizing:border-box}.glide *{box-sizing:inherit}.glide__track{overflow:hidden}.glide__slides{position:relative;width:100%;list-style:none;backface-visibility:hidden;transform-style:preserve-3d;touch-action:pan-Y;overflow:hidden;margin:0;padding:0;white-space:nowrap;display:flex;flex-wrap:nowrap;will-change:transform}.glide__slides--dragging{-webkit-user-select:none;user-select:none}.glide__slide{width:100%;height:100%;flex-shrink:0;white-space:normal;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent}.glide__slide a{-webkit-user-select:none;user-select:none;-webkit-user-drag:none;-moz-user-select:none;-ms-user-select:none}.glide__arrows,.glide__bullets{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}.glide--rtl{direction:rtl}@media only screen and (min-width: 1260px){.container .aligned-carousel{margin-left:-124px!important}}.glide{display:flex;flex-direction:column;gap:32px;position:relative}[data-image-auto-size=true] .glide__slides .glide__slide{height:auto;position:relative;display:inline-flex;justify-content:center}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img{display:flex;width:100%;max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img{flex-grow:1;object-fit:cover}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img.uds-img{max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img figure.uds-figure{display:flex;justify-content:space-between;flex-direction:column}.glide .glide__track{position:relative}.glide .glide__track .glide__slides{margin-bottom:0;touch-action:auto}.glide .glide__track .glide__slides .glide__slide .card{width:100%}@media only screen and (min-width: 576px){.glide[data-has-shadow=true] .glide__track.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}}.glide__arrows{z-index:2;align-self:center}.glide__arrows .glide__arrow{color:#191919;width:4rem;height:4rem;margin:0 .5rem;background-color:#e8e8e8;border:1px solid #d0d0d0;border-radius:50%;font-size:1.3rem;text-shadow:0 .25em .5em rgba(0,0,0,.1);opacity:1;cursor:pointer;transition:opacity .15s ease,border .3s ease-in-out;line-height:1}.glide__arrows .glide__arrow.glide__arrow--disabled{color:#e8e8e8;background-color:#fafafa;border:1px solid #e8e8e8;opacity:1}.glide__arrows .glide__arrow:focus{outline:none}.glide__arrows .glide__arrow:hover{border-color:#fff}.glide__arrows .glide__arrow--left{left:2em}.glide__arrows .glide__arrow--right{right:2em}.glide__arrows .glide__arrow--disabled{opacity:.33}.glide__bullets{z-index:2;list-style:none;max-width:100%;display:flex;justify-content:center}.glide__bullet{transition:all .3s ease-in-out;background-color:#d0d0d0;width:1rem;height:1rem;padding:0;border-radius:50%;border:2px solid transparent;cursor:pointer;line-height:0;margin:.375rem}.glide__bullet:focus{outline:none}.glide__bullet:hover,.glide__bullet:focus{border:1px solid #d0d0d0;background-color:#191919}.glide__bullet--active{background-color:#191919}.glide.aligned-carousel{width:1448px;margin:auto}.glide.image-gallery{gap:0;overflow:hidden}.glide.image-gallery .glide__track{border:1px solid #d0d0d0}.glide.image-gallery .glide__track:after{content:none}.glide.image-gallery .glide__track .glide__slides{margin-bottom:0;height:100%}.glide.image-gallery .glide__track .glide__slides li.glide__slide{display:list-item}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img{height:100%}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img img{object-fit:cover;border:none}.glide.image-gallery .image-gallery-action-area{border:1px solid #d0d0d0;border-top:0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .image-navigator{border-bottom:1px solid #d0d0d0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text{padding:1rem 0;display:inline-block}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text>div{height:auto!important}.glide.image-gallery figcaption{padding:0 .75rem;font-size:.75rem}.glide.image-gallery figcaption h2{font-size:1.5rem;line-height:1.75rem;letter-spacing:-.0525rem}.glide.image-gallery .image-navigator{position:relative}.glide.image-gallery .image-navigator .image-navigator-images{min-height:64px;padding-top:1rem;padding-bottom:1rem;width:100%;margin:auto;overflow:hidden}.glide.image-gallery .image-navigator .image-navigator-images.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider{position:relative;left:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets{position:relative}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container{position:relative;margin:0 .5rem;height:48px;border:0;padding:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:first-child{margin-left:16rem}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container .bullet-image{flex-basis:auto;width:88px;height:100%;border-radius:0;border:0;z-index:2;object-fit:cover;margin:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:focus{box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .glide__bullet--active{background-color:transparent;border:5px solid #ffc627}.glide.image-gallery .image-navigator .glide__arrows{width:100%;display:flex;justify-content:space-between;align-items:center}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow{width:2.5rem;height:2.5rem;display:flex;align-items:center;justify-content:center;z-index:3;position:absolute;background-color:#fff}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow:hover{border-color:#d0d0d0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow .arrow-icon{font-size:1rem}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--prev{left:0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--next{right:0}@media only screen and (max-width: 576px){.glide{gap:21px}.glide:not(.glide.image-gallery) .glide__bullets{display:none}.glide.image-gallery{width:100%;margin:auto!important}.glide.image-gallery .image-navigator .image-navigator-images .glide__arrows .glide__arrow{display:none}}@media only screen and (max-width: 1260px){.glide.aligned-carousel{width:100%}}.glide--swipeable{cursor:grab;cursor:-moz-grab;cursor:-webkit-grab}.glide--dragging{cursor:grabbing;cursor:-moz-grabbing;cursor:-webkit-grabbing}.glide[data-remove-side-background=true]:after,.glide[data-remove-side-background=true]:before{content:none}.glide button:focus,.glide a:focus,.glide input:focus,.glide textarea:focus,.glide select:focus{outline:none!important;box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery,.glide.image-carousel{margin:auto}.glide.image-gallery[role=figure],.glide.image-gallery figure.uds-figure,.glide.image-carousel[role=figure],.glide.image-carousel figure.uds-figure{margin:0}.glide.image-gallery[role=figure] figcaption *,.glide.image-gallery[role=figure] .uds-caption-text,.glide.image-gallery figure.uds-figure figcaption *,.glide.image-gallery figure.uds-figure .uds-caption-text,.glide.image-carousel[role=figure] figcaption *,.glide.image-carousel[role=figure] .uds-caption-text,.glide.image-carousel figure.uds-figure figcaption *,.glide.image-carousel figure.uds-figure .uds-caption-text{color:#191919;max-width:100%}
`, t = document.createElement("style");
  t.type = "text/css", t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e)), document.head.appendChild(t);
})();
const Lo = {
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
}, Fo = [
  "eventTopics",
  "eventUnits",
  "interests",
  "audiences",
  "eventTypes",
  "collegeUnit"
], jo = (e) => e.toLowerCase().split(" ").join("_"), Wu = (e, t) => {
  if (!t) return !0;
  const r = t.split(",");
  for (let i = 0; i < r.length; i += 1) {
    const c = jo(r[i]);
    for (let u = 0; u < Fo.length; u += 1) {
      const y = Fo[u];
      if (jo(e[y] || "").includes(c)) return !0;
    }
  }
  return !1;
}, qu = (e) => ({
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
}), hi = ({ children: e, header: t, ctaButton: r, dataSource: i, maxItems: c }) => (
  // Calling the unity-react-core component to fetch the data, transform it and filter it
  // We provide in the renderBody the view specified before in the parent component, recieved as "children" in this component.
  // We provide in the renderHeader the unity-react-core header, if it is desired to be shown
  // We provide the maxItems prop to limit the items rendered
  // We provide the dataSource to read the url to fetch the data
  // We provide the defaultProps to use some needed default values in case they are not provided
  /* @__PURE__ */ dt.jsx(
    Ns,
    {
      renderHeader: t && r ? /* @__PURE__ */ dt.jsx(
        Ps,
        {
          header: t,
          ctaButton: r,
          defaultProps: Lo
        }
      ) : null,
      renderBody: /* @__PURE__ */ dt.jsx(Ls, { children: e }),
      dataTransformer: qu,
      dataFilter: Wu,
      dataSource: i,
      defaultProps: Lo,
      noFeedText: "No events to show.",
      maxItems: c
    }
  )
);
hi.propTypes = {
  header: fi,
  ctaButton: pi,
  dataSource: Ds,
  maxItems: Ge.number,
  children: Ge.element
};
const Yu = Ge.shape({
  color: Ge.oneOf(["white", "dark"]),
  text: Ge.string
}), Gu = Ge.shape({
  color: Ge.oneOf(["gold", "maroon", "gray", "dark"]),
  text: Ge.string,
  url: Ge.string
}), Vu = Ge.shape({
  url: Ge.string.isRequired,
  filters: Ge.string
}).isRequired, Fs = {
  header: Yu,
  ctaButton: Gu,
  dataSource: Vu,
  maxItems: Ge.number
}, Xu = (e) => e.toLocaleDateString("en-US", {
  timeZone: "UTC",
  weekday: "long",
  month: "long",
  day: "numeric"
}), Mo = (e) => e.toLocaleString("en-US", {
  timeZone: "UTC"
}), ti = (e) => {
  let t = e.split("T");
  return t = t.length > 1 ? t.join("T") : `${t[0].split(":")[0]}T00:00:00Z`, t;
}, zo = (e) => {
  let t = e.getHours(), r = e.getMinutes();
  const i = t >= 12 ? "p.m." : "a.m.";
  return t %= 12, t = t || 12, r = r < 10 ? `0${r}` : r, `${t}:${r} ${i}`;
}, js = (e, t) => {
  const r = ti(e);
  let i = Mo(new Date(r));
  if (i = zo(new Date(i)), !t || e === t)
    return i;
  const c = ti(t);
  let u = Mo(new Date(c));
  return u = zo(new Date(u)), `${i} to ${u}`;
}, ra = (e, t) => {
  const r = ti(e);
  return {
    ISO: r.split("T")[0],
    COMPLETE: Xu(new Date(r))
  }[t];
};
var $a = { exports: {} }, Ye = {};
var $o;
function Ku() {
  if ($o) return Ye;
  $o = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), u = Symbol.for("react.consumer"), y = Symbol.for("react.context"), k = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), I = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), M = Symbol.for("react.offscreen"), q = Symbol.for("react.client.reference");
  function E(S) {
    if (typeof S == "object" && S !== null) {
      var P = S.$$typeof;
      switch (P) {
        case e:
          switch (S = S.type, S) {
            case r:
            case c:
            case i:
            case w:
            case g:
              return S;
            default:
              switch (S = S && S.$$typeof, S) {
                case y:
                case k:
                case R:
                case I:
                  return S;
                case u:
                  return S;
                default:
                  return P;
              }
          }
        case t:
          return P;
      }
    }
  }
  return Ye.ContextConsumer = u, Ye.ContextProvider = y, Ye.Element = e, Ye.ForwardRef = k, Ye.Fragment = r, Ye.Lazy = R, Ye.Memo = I, Ye.Portal = t, Ye.Profiler = c, Ye.StrictMode = i, Ye.Suspense = w, Ye.SuspenseList = g, Ye.isContextConsumer = function(S) {
    return E(S) === u;
  }, Ye.isContextProvider = function(S) {
    return E(S) === y;
  }, Ye.isElement = function(S) {
    return typeof S == "object" && S !== null && S.$$typeof === e;
  }, Ye.isForwardRef = function(S) {
    return E(S) === k;
  }, Ye.isFragment = function(S) {
    return E(S) === r;
  }, Ye.isLazy = function(S) {
    return E(S) === R;
  }, Ye.isMemo = function(S) {
    return E(S) === I;
  }, Ye.isPortal = function(S) {
    return E(S) === t;
  }, Ye.isProfiler = function(S) {
    return E(S) === c;
  }, Ye.isStrictMode = function(S) {
    return E(S) === i;
  }, Ye.isSuspense = function(S) {
    return E(S) === w;
  }, Ye.isSuspenseList = function(S) {
    return E(S) === g;
  }, Ye.isValidElementType = function(S) {
    return typeof S == "string" || typeof S == "function" || S === r || S === c || S === i || S === w || S === g || S === M || typeof S == "object" && S !== null && (S.$$typeof === R || S.$$typeof === I || S.$$typeof === y || S.$$typeof === u || S.$$typeof === k || S.$$typeof === q || S.getModuleId !== void 0);
  }, Ye.typeOf = E, Ye;
}
var Uo;
function Ju() {
  return Uo || (Uo = 1, $a.exports = /* @__PURE__ */ Ku()), $a.exports;
}
var Ms = /* @__PURE__ */ Ju();
function Zu(e) {
  function t(j, C, F, L, h) {
    for (var ee = 0, _ = 0, ie = 0, Q = 0, te, X, ne = 0, de = 0, J, ge = J = te = 0, re = 0, le = 0, Ue = 0, ce = 0, it = F.length, We = it - 1, ke, W = "", oe = "", Ke = "", De = "", Pe; re < it; ) {
      if (X = F.charCodeAt(re), re === We && _ + Q + ie + ee !== 0 && (_ !== 0 && (X = _ === 47 ? 10 : 47), Q = ie = ee = 0, it++, We++), _ + Q + ie + ee === 0) {
        if (re === We && (0 < le && (W = W.replace(M, "")), 0 < W.trim().length)) {
          switch (X) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              W += F.charAt(re);
          }
          X = 59;
        }
        switch (X) {
          case 123:
            for (W = W.trim(), te = W.charCodeAt(0), J = 1, ce = ++re; re < it; ) {
              switch (X = F.charCodeAt(re)) {
                case 123:
                  J++;
                  break;
                case 125:
                  J--;
                  break;
                case 47:
                  switch (X = F.charCodeAt(re + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (ge = re + 1; ge < We; ++ge)
                          switch (F.charCodeAt(ge)) {
                            case 47:
                              if (X === 42 && F.charCodeAt(ge - 1) === 42 && re + 2 !== ge) {
                                re = ge + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (X === 47) {
                                re = ge + 1;
                                break e;
                              }
                          }
                        re = ge;
                      }
                  }
                  break;
                case 91:
                  X++;
                case 40:
                  X++;
                case 34:
                case 39:
                  for (; re++ < We && F.charCodeAt(re) !== X; )
                    ;
              }
              if (J === 0) break;
              re++;
            }
            switch (J = F.substring(ce, re), te === 0 && (te = (W = W.replace(R, "").trim()).charCodeAt(0)), te) {
              case 64:
                switch (0 < le && (W = W.replace(M, "")), X = W.charCodeAt(1), X) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    le = C;
                    break;
                  default:
                    le = st;
                }
                if (J = t(C, le, J, X, h + 1), ce = J.length, 0 < Oe && (le = r(st, W, Ue), Pe = k(3, J, le, C, Re, me, ce, X, h, L), W = le.join(""), Pe !== void 0 && (ce = (J = Pe.trim()).length) === 0 && (X = 0, J = "")), 0 < ce) switch (X) {
                  case 115:
                    W = W.replace(ae, y);
                  case 100:
                  case 109:
                  case 45:
                    J = W + "{" + J + "}";
                    break;
                  case 107:
                    W = W.replace(U, "$1 $2"), J = W + "{" + J + "}", J = Te === 1 || Te === 2 && u("@" + J, 3) ? "@-webkit-" + J + "@" + J : "@" + J;
                    break;
                  default:
                    J = W + J, L === 112 && (J = (oe += J, ""));
                }
                else J = "";
                break;
              default:
                J = t(C, r(C, W, Ue), J, L, h + 1);
            }
            Ke += J, J = Ue = le = ge = te = 0, W = "", X = F.charCodeAt(++re);
            break;
          case 125:
          case 59:
            if (W = (0 < le ? W.replace(M, "") : W).trim(), 1 < (ce = W.length)) switch (ge === 0 && (te = W.charCodeAt(0), te === 45 || 96 < te && 123 > te) && (ce = (W = W.replace(" ", ":")).length), 0 < Oe && (Pe = k(1, W, C, j, Re, me, oe.length, L, h, L)) !== void 0 && (ce = (W = Pe.trim()).length) === 0 && (W = "\0\0"), te = W.charCodeAt(0), X = W.charCodeAt(1), te) {
              case 0:
                break;
              case 64:
                if (X === 105 || X === 99) {
                  De += W + F.charAt(re);
                  break;
                }
              default:
                W.charCodeAt(ce - 1) !== 58 && (oe += c(W, te, X, W.charCodeAt(2)));
            }
            Ue = le = ge = te = 0, W = "", X = F.charCodeAt(++re);
        }
      }
      switch (X) {
        case 13:
        case 10:
          _ === 47 ? _ = 0 : 1 + te === 0 && L !== 107 && 0 < W.length && (le = 1, W += "\0"), 0 < Oe * tt && k(0, W, C, j, Re, me, oe.length, L, h, L), me = 1, Re++;
          break;
        case 59:
        case 125:
          if (_ + Q + ie + ee === 0) {
            me++;
            break;
          }
        default:
          switch (me++, ke = F.charAt(re), X) {
            case 9:
            case 32:
              if (Q + ee + _ === 0) switch (ne) {
                case 44:
                case 58:
                case 9:
                case 32:
                  ke = "";
                  break;
                default:
                  X !== 32 && (ke = " ");
              }
              break;
            case 0:
              ke = "\\0";
              break;
            case 12:
              ke = "\\f";
              break;
            case 11:
              ke = "\\v";
              break;
            case 38:
              Q + _ + ee === 0 && (le = Ue = 1, ke = "\f" + ke);
              break;
            case 108:
              if (Q + _ + ee + Ne === 0 && 0 < ge) switch (re - ge) {
                case 2:
                  ne === 112 && F.charCodeAt(re - 3) === 58 && (Ne = ne);
                case 8:
                  de === 111 && (Ne = de);
              }
              break;
            case 58:
              Q + _ + ee === 0 && (ge = re);
              break;
            case 44:
              _ + ie + Q + ee === 0 && (le = 1, ke += "\r");
              break;
            case 34:
            case 39:
              _ === 0 && (Q = Q === X ? 0 : Q === 0 ? X : Q);
              break;
            case 91:
              Q + _ + ie === 0 && ee++;
              break;
            case 93:
              Q + _ + ie === 0 && ee--;
              break;
            case 41:
              Q + _ + ee === 0 && ie--;
              break;
            case 40:
              if (Q + _ + ee === 0) {
                if (te === 0) switch (2 * ne + 3 * de) {
                  case 533:
                    break;
                  default:
                    te = 1;
                }
                ie++;
              }
              break;
            case 64:
              _ + ie + Q + ee + ge + J === 0 && (J = 1);
              break;
            case 42:
            case 47:
              if (!(0 < Q + ee + ie)) switch (_) {
                case 0:
                  switch (2 * X + 3 * F.charCodeAt(re + 1)) {
                    case 235:
                      _ = 47;
                      break;
                    case 220:
                      ce = re, _ = 42;
                  }
                  break;
                case 42:
                  X === 47 && ne === 42 && ce + 2 !== re && (F.charCodeAt(ce + 2) === 33 && (oe += F.substring(ce, re + 1)), ke = "", _ = 0);
              }
          }
          _ === 0 && (W += ke);
      }
      de = ne, ne = X, re++;
    }
    if (ce = oe.length, 0 < ce) {
      if (le = C, 0 < Oe && (Pe = k(2, oe, le, j, Re, me, ce, L, h, L), Pe !== void 0 && (oe = Pe).length === 0)) return De + oe + Ke;
      if (oe = le.join(",") + "{" + oe + "}", Te * Ne !== 0) {
        switch (Te !== 2 || u(oe, 2) || (Ne = 0), Ne) {
          case 111:
            oe = oe.replace(H, ":-moz-$1") + oe;
            break;
          case 112:
            oe = oe.replace(G, "::-webkit-input-$1") + oe.replace(G, "::-moz-$1") + oe.replace(G, ":-ms-input-$1") + oe;
        }
        Ne = 0;
      }
    }
    return De + oe + Ke;
  }
  function r(j, C, F) {
    var L = C.trim().split(P);
    C = L;
    var h = L.length, ee = j.length;
    switch (ee) {
      case 0:
      case 1:
        var _ = 0;
        for (j = ee === 0 ? "" : j[0] + " "; _ < h; ++_)
          C[_] = i(j, C[_], F).trim();
        break;
      default:
        var ie = _ = 0;
        for (C = []; _ < h; ++_)
          for (var Q = 0; Q < ee; ++Q)
            C[ie++] = i(j[Q] + " ", L[_], F).trim();
    }
    return C;
  }
  function i(j, C, F) {
    var L = C.charCodeAt(0);
    switch (33 > L && (L = (C = C.trim()).charCodeAt(0)), L) {
      case 38:
        return C.replace(Y, "$1" + j.trim());
      case 58:
        return j.trim() + C.replace(Y, "$1" + j.trim());
      default:
        if (0 < 1 * F && 0 < C.indexOf("\f")) return C.replace(Y, (j.charCodeAt(0) === 58 ? "" : "$1") + j.trim());
    }
    return j + C;
  }
  function c(j, C, F, L) {
    var h = j + ";", ee = 2 * C + 3 * F + 4 * L;
    if (ee === 944) {
      j = h.indexOf(":", 9) + 1;
      var _ = h.substring(j, h.length - 1).trim();
      return _ = h.substring(0, j).trim() + _ + ";", Te === 1 || Te === 2 && u(_, 1) ? "-webkit-" + _ + _ : _;
    }
    if (Te === 0 || Te === 2 && !u(h, 1)) return h;
    switch (ee) {
      case 1015:
        return h.charCodeAt(10) === 97 ? "-webkit-" + h + h : h;
      case 951:
        return h.charCodeAt(3) === 116 ? "-webkit-" + h + h : h;
      case 963:
        return h.charCodeAt(5) === 110 ? "-webkit-" + h + h : h;
      case 1009:
        if (h.charCodeAt(4) !== 100) break;
      case 969:
      case 942:
        return "-webkit-" + h + h;
      case 978:
        return "-webkit-" + h + "-moz-" + h + h;
      case 1019:
      case 983:
        return "-webkit-" + h + "-moz-" + h + "-ms-" + h + h;
      case 883:
        if (h.charCodeAt(8) === 45) return "-webkit-" + h + h;
        if (0 < h.indexOf("image-set(", 11)) return h.replace(ue, "$1-webkit-$2") + h;
        break;
      case 932:
        if (h.charCodeAt(4) === 45) switch (h.charCodeAt(5)) {
          case 103:
            return "-webkit-box-" + h.replace("-grow", "") + "-webkit-" + h + "-ms-" + h.replace("grow", "positive") + h;
          case 115:
            return "-webkit-" + h + "-ms-" + h.replace("shrink", "negative") + h;
          case 98:
            return "-webkit-" + h + "-ms-" + h.replace("basis", "preferred-size") + h;
        }
        return "-webkit-" + h + "-ms-" + h + h;
      case 964:
        return "-webkit-" + h + "-ms-flex-" + h + h;
      case 1023:
        if (h.charCodeAt(8) !== 99) break;
        return _ = h.substring(h.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + _ + "-webkit-" + h + "-ms-flex-pack" + _ + h;
      case 1005:
        return E.test(h) ? h.replace(q, ":-webkit-") + h.replace(q, ":-moz-") + h : h;
      case 1e3:
        switch (_ = h.substring(13).trim(), C = _.indexOf("-") + 1, _.charCodeAt(0) + _.charCodeAt(C)) {
          case 226:
            _ = h.replace(x, "tb");
            break;
          case 232:
            _ = h.replace(x, "tb-rl");
            break;
          case 220:
            _ = h.replace(x, "lr");
            break;
          default:
            return h;
        }
        return "-webkit-" + h + "-ms-" + _ + h;
      case 1017:
        if (h.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (C = (h = j).length - 10, _ = (h.charCodeAt(C) === 33 ? h.substring(0, C) : h).substring(j.indexOf(":", 7) + 1).trim(), ee = _.charCodeAt(0) + (_.charCodeAt(7) | 0)) {
          case 203:
            if (111 > _.charCodeAt(8)) break;
          case 115:
            h = h.replace(_, "-webkit-" + _) + ";" + h;
            break;
          case 207:
          case 102:
            h = h.replace(_, "-webkit-" + (102 < ee ? "inline-" : "") + "box") + ";" + h.replace(_, "-webkit-" + _) + ";" + h.replace(_, "-ms-" + _ + "box") + ";" + h;
        }
        return h + ";";
      case 938:
        if (h.charCodeAt(5) === 45) switch (h.charCodeAt(6)) {
          case 105:
            return _ = h.replace("-items", ""), "-webkit-" + h + "-webkit-box-" + _ + "-ms-flex-" + _ + h;
          case 115:
            return "-webkit-" + h + "-ms-flex-item-" + h.replace(Ie, "") + h;
          default:
            return "-webkit-" + h + "-ms-flex-line-pack" + h.replace("align-content", "").replace(Ie, "") + h;
        }
        break;
      case 973:
      case 989:
        if (h.charCodeAt(3) !== 45 || h.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (Ve.test(j) === !0) return (_ = j.substring(j.indexOf(":") + 1)).charCodeAt(0) === 115 ? c(j.replace("stretch", "fill-available"), C, F, L).replace(":fill-available", ":stretch") : h.replace(_, "-webkit-" + _) + h.replace(_, "-moz-" + _.replace("fill-", "")) + h;
        break;
      case 962:
        if (h = "-webkit-" + h + (h.charCodeAt(5) === 102 ? "-ms-" + h : "") + h, F + L === 211 && h.charCodeAt(13) === 105 && 0 < h.indexOf("transform", 10)) return h.substring(0, h.indexOf(";", 27) + 1).replace(S, "$1-webkit-$2") + h;
    }
    return h;
  }
  function u(j, C) {
    var F = j.indexOf(C === 1 ? ":" : "{"), L = j.substring(0, C !== 3 ? F : 10);
    return F = j.substring(F + 1, j.length - 1), Be(C !== 2 ? L : L.replace(Fe, "$1"), F, C);
  }
  function y(j, C) {
    var F = c(C, C.charCodeAt(0), C.charCodeAt(1), C.charCodeAt(2));
    return F !== C + ";" ? F.replace(we, " or ($1)").substring(4) : "(" + C + ")";
  }
  function k(j, C, F, L, h, ee, _, ie, Q, te) {
    for (var X = 0, ne = C, de; X < Oe; ++X)
      switch (de = je[X].call(I, j, ne, F, L, h, ee, _, ie, Q, te)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          ne = de;
      }
    if (ne !== C) return ne;
  }
  function w(j) {
    switch (j) {
      case void 0:
      case null:
        Oe = je.length = 0;
        break;
      default:
        if (typeof j == "function") je[Oe++] = j;
        else if (typeof j == "object") for (var C = 0, F = j.length; C < F; ++C)
          w(j[C]);
        else tt = !!j | 0;
    }
    return w;
  }
  function g(j) {
    return j = j.prefix, j !== void 0 && (Be = null, j ? typeof j != "function" ? Te = 1 : (Te = 2, Be = j) : Te = 0), g;
  }
  function I(j, C) {
    var F = j;
    if (33 > F.charCodeAt(0) && (F = F.trim()), se = F, F = [se], 0 < Oe) {
      var L = k(-1, C, F, F, Re, me, 0, 0, 0, 0);
      L !== void 0 && typeof L == "string" && (C = L);
    }
    var h = t(st, F, C, 0, 0);
    return 0 < Oe && (L = k(-2, h, F, F, Re, me, h.length, 0, 0, 0), L !== void 0 && (h = L)), se = "", Ne = 0, me = Re = 1, h;
  }
  var R = /^\0+/g, M = /[\0\r\f]/g, q = /: */g, E = /zoo|gra/, S = /([,: ])(transform)/g, P = /,\r+?/g, Y = /([\t\r\n ])*\f?&/g, U = /@(k\w+)\s*(\S*)\s*/, G = /::(place)/g, H = /:(read-only)/g, x = /[svh]\w+-[tblr]{2}/, ae = /\(\s*(.*)\s*\)/g, we = /([\s\S]*?);/g, Ie = /-self|flex-/g, Fe = /[^]*?(:[rp][el]a[\w-]+)[^]*/, Ve = /stretch|:\s*\w+\-(?:conte|avail)/, ue = /([^-])(image-set\()/, me = 1, Re = 1, Ne = 0, Te = 1, st = [], je = [], Oe = 0, Be = null, tt = 0, se = "";
  return I.use = w, I.set = g, e !== void 0 && g(e), I;
}
var Qu = {
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
function ed(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var td = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Ho = /* @__PURE__ */ ed(
  function(e) {
    return td.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Ua = { exports: {} }, $e = {};
var Bo;
function rd() {
  if (Bo) return $e;
  Bo = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, i = e ? Symbol.for("react.fragment") : 60107, c = e ? Symbol.for("react.strict_mode") : 60108, u = e ? Symbol.for("react.profiler") : 60114, y = e ? Symbol.for("react.provider") : 60109, k = e ? Symbol.for("react.context") : 60110, w = e ? Symbol.for("react.async_mode") : 60111, g = e ? Symbol.for("react.concurrent_mode") : 60111, I = e ? Symbol.for("react.forward_ref") : 60112, R = e ? Symbol.for("react.suspense") : 60113, M = e ? Symbol.for("react.suspense_list") : 60120, q = e ? Symbol.for("react.memo") : 60115, E = e ? Symbol.for("react.lazy") : 60116, S = e ? Symbol.for("react.block") : 60121, P = e ? Symbol.for("react.fundamental") : 60117, Y = e ? Symbol.for("react.responder") : 60118, U = e ? Symbol.for("react.scope") : 60119;
  function G(x) {
    if (typeof x == "object" && x !== null) {
      var ae = x.$$typeof;
      switch (ae) {
        case t:
          switch (x = x.type, x) {
            case w:
            case g:
            case i:
            case u:
            case c:
            case R:
              return x;
            default:
              switch (x = x && x.$$typeof, x) {
                case k:
                case I:
                case E:
                case q:
                case y:
                  return x;
                default:
                  return ae;
              }
          }
        case r:
          return ae;
      }
    }
  }
  function H(x) {
    return G(x) === g;
  }
  return $e.AsyncMode = w, $e.ConcurrentMode = g, $e.ContextConsumer = k, $e.ContextProvider = y, $e.Element = t, $e.ForwardRef = I, $e.Fragment = i, $e.Lazy = E, $e.Memo = q, $e.Portal = r, $e.Profiler = u, $e.StrictMode = c, $e.Suspense = R, $e.isAsyncMode = function(x) {
    return H(x) || G(x) === w;
  }, $e.isConcurrentMode = H, $e.isContextConsumer = function(x) {
    return G(x) === k;
  }, $e.isContextProvider = function(x) {
    return G(x) === y;
  }, $e.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === t;
  }, $e.isForwardRef = function(x) {
    return G(x) === I;
  }, $e.isFragment = function(x) {
    return G(x) === i;
  }, $e.isLazy = function(x) {
    return G(x) === E;
  }, $e.isMemo = function(x) {
    return G(x) === q;
  }, $e.isPortal = function(x) {
    return G(x) === r;
  }, $e.isProfiler = function(x) {
    return G(x) === u;
  }, $e.isStrictMode = function(x) {
    return G(x) === c;
  }, $e.isSuspense = function(x) {
    return G(x) === R;
  }, $e.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === i || x === g || x === u || x === c || x === R || x === M || typeof x == "object" && x !== null && (x.$$typeof === E || x.$$typeof === q || x.$$typeof === y || x.$$typeof === k || x.$$typeof === I || x.$$typeof === P || x.$$typeof === Y || x.$$typeof === U || x.$$typeof === S);
  }, $e.typeOf = G, $e;
}
var Wo;
function nd() {
  return Wo || (Wo = 1, Ua.exports = rd()), Ua.exports;
}
var Ha, qo;
function ad() {
  if (qo) return Ha;
  qo = 1;
  var e = nd(), t = {
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
  }, r = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0
  }, i = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
  }, c = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
  }, u = {};
  u[e.ForwardRef] = i, u[e.Memo] = c;
  function y(E) {
    return e.isMemo(E) ? c : u[E.$$typeof] || t;
  }
  var k = Object.defineProperty, w = Object.getOwnPropertyNames, g = Object.getOwnPropertySymbols, I = Object.getOwnPropertyDescriptor, R = Object.getPrototypeOf, M = Object.prototype;
  function q(E, S, P) {
    if (typeof S != "string") {
      if (M) {
        var Y = R(S);
        Y && Y !== M && q(E, Y, P);
      }
      var U = w(S);
      g && (U = U.concat(g(S)));
      for (var G = y(E), H = y(S), x = 0; x < U.length; ++x) {
        var ae = U[x];
        if (!r[ae] && !(P && P[ae]) && !(H && H[ae]) && !(G && G[ae])) {
          var we = I(S, ae);
          try {
            k(E, ae, we);
          } catch {
          }
        }
      }
    }
    return E;
  }
  return Ha = q, Ha;
}
var id = ad();
const od = /* @__PURE__ */ rs(id);
var bt = { env: { NODE_ENV: "production" } };
function hr() {
  return (hr = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }).apply(this, arguments);
}
var Yo = function(e, t) {
  for (var r = [e[0]], i = 0, c = t.length; i < c; i += 1) r.push(t[i], e[i + 1]);
  return r;
}, ri = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Ms.typeOf(e);
}, na = Object.freeze([]), wr = Object.freeze({});
function hn(e) {
  return typeof e == "function";
}
function Go(e) {
  return e.displayName || e.name || "Component";
}
function mi(e) {
  return e && typeof e.styledComponentId == "string";
}
var Mr = typeof bt < "u" && bt.env !== void 0 && (bt.env.REACT_APP_SC_ATTR || bt.env.SC_ATTR) || "data-styled", gi = typeof window < "u" && "HTMLElement" in window, sd = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof bt < "u" && bt.env !== void 0 && (bt.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && bt.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? bt.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && bt.env.REACT_APP_SC_DISABLE_SPEEDY : bt.env.SC_DISABLE_SPEEDY !== void 0 && bt.env.SC_DISABLE_SPEEDY !== "" ? bt.env.SC_DISABLE_SPEEDY !== "false" && bt.env.SC_DISABLE_SPEEDY : bt.env.NODE_ENV !== "production"));
function bn(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : ""));
}
var ld = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(r) {
    for (var i = 0, c = 0; c < r; c++) i += this.groupSizes[c];
    return i;
  }, t.insertRules = function(r, i) {
    if (r >= this.groupSizes.length) {
      for (var c = this.groupSizes, u = c.length, y = u; r >= y; ) (y <<= 1) < 0 && bn(16, "" + r);
      this.groupSizes = new Uint32Array(y), this.groupSizes.set(c), this.length = y;
      for (var k = u; k < y; k++) this.groupSizes[k] = 0;
    }
    for (var w = this.indexOfGroup(r + 1), g = 0, I = i.length; g < I; g++) this.tag.insertRule(w, i[g]) && (this.groupSizes[r]++, w++);
  }, t.clearGroup = function(r) {
    if (r < this.length) {
      var i = this.groupSizes[r], c = this.indexOfGroup(r), u = c + i;
      this.groupSizes[r] = 0;
      for (var y = c; y < u; y++) this.tag.deleteRule(c);
    }
  }, t.getGroup = function(r) {
    var i = "";
    if (r >= this.length || this.groupSizes[r] === 0) return i;
    for (var c = this.groupSizes[r], u = this.indexOfGroup(r), y = u + c, k = u; k < y; k++) i += this.tag.getRule(k) + `/*!sc*/
`;
    return i;
  }, e;
}(), Jn = /* @__PURE__ */ new Map(), aa = /* @__PURE__ */ new Map(), dn = 1, Bn = function(e) {
  if (Jn.has(e)) return Jn.get(e);
  for (; aa.has(dn); ) dn++;
  var t = dn++;
  return Jn.set(e, t), aa.set(t, e), t;
}, cd = function(e) {
  return aa.get(e);
}, ud = function(e, t) {
  t >= dn && (dn = t + 1), Jn.set(e, t), aa.set(t, e);
}, dd = "style[" + Mr + '][data-styled-version="5.3.11"]', fd = new RegExp("^" + Mr + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), pd = function(e, t, r) {
  for (var i, c = r.split(","), u = 0, y = c.length; u < y; u++) (i = c[u]) && e.registerName(t, i);
}, hd = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), i = [], c = 0, u = r.length; c < u; c++) {
    var y = r[c].trim();
    if (y) {
      var k = y.match(fd);
      if (k) {
        var w = 0 | parseInt(k[1], 10), g = k[2];
        w !== 0 && (ud(g, w), pd(e, g, k[3]), e.getTag().insertRules(w, i)), i.length = 0;
      } else i.push(y);
    }
  }
}, md = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, zs = function(e) {
  var t = document.head, r = e || t, i = document.createElement("style"), c = function(k) {
    for (var w = k.childNodes, g = w.length; g >= 0; g--) {
      var I = w[g];
      if (I && I.nodeType === 1 && I.hasAttribute(Mr)) return I;
    }
  }(r), u = c !== void 0 ? c.nextSibling : null;
  i.setAttribute(Mr, "active"), i.setAttribute("data-styled-version", "5.3.11");
  var y = md();
  return y && i.setAttribute("nonce", y), r.insertBefore(i, u), i;
}, gd = function() {
  function e(r) {
    var i = this.element = zs(r);
    i.appendChild(document.createTextNode("")), this.sheet = function(c) {
      if (c.sheet) return c.sheet;
      for (var u = document.styleSheets, y = 0, k = u.length; y < k; y++) {
        var w = u[y];
        if (w.ownerNode === c) return w;
      }
      bn(17);
    }(i), this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, i) {
    try {
      return this.sheet.insertRule(i, r), this.length++, !0;
    } catch {
      return !1;
    }
  }, t.deleteRule = function(r) {
    this.sheet.deleteRule(r), this.length--;
  }, t.getRule = function(r) {
    var i = this.sheet.cssRules[r];
    return i !== void 0 && typeof i.cssText == "string" ? i.cssText : "";
  }, e;
}(), yd = function() {
  function e(r) {
    var i = this.element = zs(r);
    this.nodes = i.childNodes, this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, i) {
    if (r <= this.length && r >= 0) {
      var c = document.createTextNode(i), u = this.nodes[r];
      return this.element.insertBefore(c, u || null), this.length++, !0;
    }
    return !1;
  }, t.deleteRule = function(r) {
    this.element.removeChild(this.nodes[r]), this.length--;
  }, t.getRule = function(r) {
    return r < this.length ? this.nodes[r].textContent : "";
  }, e;
}(), bd = function() {
  function e(r) {
    this.rules = [], this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, i) {
    return r <= this.length && (this.rules.splice(r, 0, i), this.length++, !0);
  }, t.deleteRule = function(r) {
    this.rules.splice(r, 1), this.length--;
  }, t.getRule = function(r) {
    return r < this.length ? this.rules[r] : "";
  }, e;
}(), Vo = gi, vd = { isServer: !gi, useCSSOMInjection: !sd }, $s = function() {
  function e(r, i, c) {
    r === void 0 && (r = wr), i === void 0 && (i = {}), this.options = hr({}, vd, {}, r), this.gs = i, this.names = new Map(c), this.server = !!r.isServer, !this.server && gi && Vo && (Vo = !1, function(u) {
      for (var y = document.querySelectorAll(dd), k = 0, w = y.length; k < w; k++) {
        var g = y[k];
        g && g.getAttribute(Mr) !== "active" && (hd(u, g), g.parentNode && g.parentNode.removeChild(g));
      }
    }(this));
  }
  e.registerId = function(r) {
    return Bn(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, i) {
    return i === void 0 && (i = !0), new e(hr({}, this.options, {}, r), this.gs, i && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (c = (i = this.options).isServer, u = i.useCSSOMInjection, y = i.target, r = c ? new bd(y) : u ? new gd(y) : new yd(y), new ld(r)));
    var r, i, c, u, y;
  }, t.hasNameForId = function(r, i) {
    return this.names.has(r) && this.names.get(r).has(i);
  }, t.registerName = function(r, i) {
    if (Bn(r), this.names.has(r)) this.names.get(r).add(i);
    else {
      var c = /* @__PURE__ */ new Set();
      c.add(i), this.names.set(r, c);
    }
  }, t.insertRules = function(r, i, c) {
    this.registerName(r, i), this.getTag().insertRules(Bn(r), c);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(Bn(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var i = r.getTag(), c = i.length, u = "", y = 0; y < c; y++) {
        var k = cd(y);
        if (k !== void 0) {
          var w = r.names.get(k), g = i.getGroup(y);
          if (w && g && w.size) {
            var I = Mr + ".g" + y + '[id="' + k + '"]', R = "";
            w !== void 0 && w.forEach(function(M) {
              M.length > 0 && (R += M + ",");
            }), u += "" + g + I + '{content:"' + R + `"}/*!sc*/
`;
          }
        }
      }
      return u;
    }(this);
  }, e;
}(), Sd = /(a)(d)/gi, Xo = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function ni(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = Xo(t % 52) + r;
  return (Xo(t % 52) + r).replace(Sd, "$1-$2");
}
var Lr = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, Us = function(e) {
  return Lr(5381, e);
};
function wd(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (hn(r) && !mi(r)) return !1;
  }
  return !0;
}
var kd = Us("5.3.11"), xd = function() {
  function e(t, r, i) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (i === void 0 || i.isStatic) && wd(t), this.componentId = r, this.baseHash = Lr(kd, r), this.baseStyle = i, $s.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, i) {
    var c = this.componentId, u = [];
    if (this.baseStyle && u.push(this.baseStyle.generateAndInjectStyles(t, r, i)), this.isStatic && !i.hash) if (this.staticRulesId && r.hasNameForId(c, this.staticRulesId)) u.push(this.staticRulesId);
    else {
      var y = zr(this.rules, t, r, i).join(""), k = ni(Lr(this.baseHash, y) >>> 0);
      if (!r.hasNameForId(c, k)) {
        var w = i(y, "." + k, void 0, c);
        r.insertRules(c, k, w);
      }
      u.push(k), this.staticRulesId = k;
    }
    else {
      for (var g = this.rules.length, I = Lr(this.baseHash, i.hash), R = "", M = 0; M < g; M++) {
        var q = this.rules[M];
        if (typeof q == "string") R += q;
        else if (q) {
          var E = zr(q, t, r, i), S = Array.isArray(E) ? E.join("") : E;
          I = Lr(I, S + M), R += S;
        }
      }
      if (R) {
        var P = ni(I >>> 0);
        if (!r.hasNameForId(c, P)) {
          var Y = i(R, "." + P, void 0, c);
          r.insertRules(c, P, Y);
        }
        u.push(P);
      }
    }
    return u.join(" ");
  }, e;
}(), Ed = /^\s*\/\/.*$/gm, _d = [":", "[", ".", "#"];
function Td(e) {
  var t, r, i, c, u = wr, y = u.options, k = y === void 0 ? wr : y, w = u.plugins, g = w === void 0 ? na : w, I = new Zu(k), R = [], M = /* @__PURE__ */ function(S) {
    function P(Y) {
      if (Y) try {
        S(Y + "}");
      } catch {
      }
    }
    return function(Y, U, G, H, x, ae, we, Ie, Fe, Ve) {
      switch (Y) {
        case 1:
          if (Fe === 0 && U.charCodeAt(0) === 64) return S(U + ";"), "";
          break;
        case 2:
          if (Ie === 0) return U + "/*|*/";
          break;
        case 3:
          switch (Ie) {
            case 102:
            case 112:
              return S(G[0] + U), "";
            default:
              return U + (Ve === 0 ? "/*|*/" : "");
          }
        case -2:
          U.split("/*|*/}").forEach(P);
      }
    };
  }(function(S) {
    R.push(S);
  }), q = function(S, P, Y) {
    return P === 0 && _d.indexOf(Y[r.length]) !== -1 || Y.match(c) ? S : "." + t;
  };
  function E(S, P, Y, U) {
    U === void 0 && (U = "&");
    var G = S.replace(Ed, ""), H = P && Y ? Y + " " + P + " { " + G + " }" : G;
    return t = U, r = P, i = new RegExp("\\" + r + "\\b", "g"), c = new RegExp("(\\" + r + "\\b){2,}"), I(Y || !P ? "" : P, H);
  }
  return I.use([].concat(g, [function(S, P, Y) {
    S === 2 && Y.length && Y[0].lastIndexOf(r) > 0 && (Y[0] = Y[0].replace(i, q));
  }, M, function(S) {
    if (S === -2) {
      var P = R;
      return R = [], P;
    }
  }])), E.hash = g.length ? g.reduce(function(S, P) {
    return P.name || bn(15), Lr(S, P.name);
  }, 5381).toString() : "", E;
}
var Hs = ft.createContext();
Hs.Consumer;
var Bs = ft.createContext(), Cd = (Bs.Consumer, new $s()), ai = Td();
function Ad() {
  return xr(Hs) || Cd;
}
function Od() {
  return xr(Bs) || ai;
}
var Rd = function() {
  function e(t, r) {
    var i = this;
    this.inject = function(c, u) {
      u === void 0 && (u = ai);
      var y = i.name + u.hash;
      c.hasNameForId(i.id, y) || c.insertRules(i.id, y, u(i.rules, y, "@keyframes"));
    }, this.toString = function() {
      return bn(12, String(i.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = ai), this.name + t.hash;
  }, e;
}(), Id = /([A-Z])/, Nd = /([A-Z])/g, Dd = /^ms-/, Pd = function(e) {
  return "-" + e.toLowerCase();
};
function Ko(e) {
  return Id.test(e) ? e.replace(Nd, Pd).replace(Dd, "-ms-") : e;
}
var Jo = function(e) {
  return e == null || e === !1 || e === "";
};
function zr(e, t, r, i) {
  if (Array.isArray(e)) {
    for (var c, u = [], y = 0, k = e.length; y < k; y += 1) (c = zr(e[y], t, r, i)) !== "" && (Array.isArray(c) ? u.push.apply(u, c) : u.push(c));
    return u;
  }
  if (Jo(e)) return "";
  if (mi(e)) return "." + e.styledComponentId;
  if (hn(e)) {
    if (typeof (g = e) != "function" || g.prototype && g.prototype.isReactComponent || !t) return e;
    var w = e(t);
    return zr(w, t, r, i);
  }
  var g;
  return e instanceof Rd ? r ? (e.inject(r, i), e.getName(i)) : e : ri(e) ? function I(R, M) {
    var q, E, S = [];
    for (var P in R) R.hasOwnProperty(P) && !Jo(R[P]) && (Array.isArray(R[P]) && R[P].isCss || hn(R[P]) ? S.push(Ko(P) + ":", R[P], ";") : ri(R[P]) ? S.push.apply(S, I(R[P], P)) : S.push(Ko(P) + ": " + (q = P, (E = R[P]) == null || typeof E == "boolean" || E === "" ? "" : typeof E != "number" || E === 0 || q in Qu || q.startsWith("--") ? String(E).trim() : E + "px") + ";"));
    return M ? [M + " {"].concat(S, ["}"]) : S;
  }(e) : e.toString();
}
var Zo = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Ld(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
  return hn(e) || ri(e) ? Zo(zr(Yo(na, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Zo(zr(Yo(e, r)));
}
var Fd = function(e, t, r) {
  return r === void 0 && (r = wr), e.theme !== r.theme && e.theme || t || r.theme;
}, jd = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Md = /(^-|-$)/g;
function Ba(e) {
  return e.replace(jd, "-").replace(Md, "");
}
var zd = function(e) {
  return ni(Us(e) >>> 0);
};
function Wn(e) {
  return typeof e == "string" && bt.env.NODE_ENV === "production";
}
var ii = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, $d = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Ud(e, t, r) {
  var i = e[r];
  ii(t) && ii(i) ? Ws(i, t) : e[r] = t;
}
function Ws(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
  for (var c = 0, u = r; c < u.length; c++) {
    var y = u[c];
    if (ii(y)) for (var k in y) $d(k) && Ud(e, y[k], k);
  }
  return e;
}
var qs = ft.createContext();
qs.Consumer;
var Wa = {};
function Ys(e, t, r) {
  var i = mi(e), c = !Wn(e), u = t.attrs, y = u === void 0 ? na : u, k = t.componentId, w = k === void 0 ? function(U, G) {
    var H = typeof U != "string" ? "sc" : Ba(U);
    Wa[H] = (Wa[H] || 0) + 1;
    var x = H + "-" + zd("5.3.11" + H + Wa[H]);
    return G ? G + "-" + x : x;
  }(t.displayName, t.parentComponentId) : k, g = t.displayName, I = g === void 0 ? function(U) {
    return Wn(U) ? "styled." + U : "Styled(" + Go(U) + ")";
  }(e) : g, R = t.displayName && t.componentId ? Ba(t.displayName) + "-" + t.componentId : t.componentId || w, M = i && e.attrs ? Array.prototype.concat(e.attrs, y).filter(Boolean) : y, q = t.shouldForwardProp;
  i && e.shouldForwardProp && (q = t.shouldForwardProp ? function(U, G, H) {
    return e.shouldForwardProp(U, G, H) && t.shouldForwardProp(U, G, H);
  } : e.shouldForwardProp);
  var E, S = new xd(r, R, i ? e.componentStyle : void 0), P = S.isStatic && y.length === 0, Y = function(U, G) {
    return function(H, x, ae, we) {
      var Ie = H.attrs, Fe = H.componentStyle, Ve = H.defaultProps, ue = H.foldedComponentIds, me = H.shouldForwardProp, Re = H.styledComponentId, Ne = H.target, Te = function(L, h, ee) {
        L === void 0 && (L = wr);
        var _ = hr({}, h, { theme: L }), ie = {};
        return ee.forEach(function(Q) {
          var te, X, ne, de = Q;
          for (te in hn(de) && (de = de(_)), de) _[te] = ie[te] = te === "className" ? (X = ie[te], ne = de[te], X && ne ? X + " " + ne : X || ne) : de[te];
        }), [_, ie];
      }(Fd(x, xr(qs), Ve) || wr, x, Ie), st = Te[0], je = Te[1], Oe = function(L, h, ee, _) {
        var ie = Ad(), Q = Od(), te = h ? L.generateAndInjectStyles(wr, ie, Q) : L.generateAndInjectStyles(ee, ie, Q);
        return te;
      }(Fe, we, st), Be = ae, tt = je.$as || x.$as || je.as || x.as || Ne, se = Wn(tt), j = je !== x ? hr({}, x, {}, je) : x, C = {};
      for (var F in j) F[0] !== "$" && F !== "as" && (F === "forwardedAs" ? C.as = j[F] : (me ? me(F, Ho, tt) : !se || Ho(F)) && (C[F] = j[F]));
      return x.style && je.style !== x.style && (C.style = hr({}, x.style, {}, je.style)), C.className = Array.prototype.concat(ue, Re, Oe !== Re ? Oe : null, x.className, je.className).filter(Boolean).join(" "), C.ref = Be, es(tt, C);
    }(E, U, G, P);
  };
  return Y.displayName = I, (E = ft.forwardRef(Y)).attrs = M, E.componentStyle = S, E.displayName = I, E.shouldForwardProp = q, E.foldedComponentIds = i ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : na, E.styledComponentId = R, E.target = i ? e.target : e, E.withComponent = function(U) {
    var G = t.componentId, H = function(ae, we) {
      if (ae == null) return {};
      var Ie, Fe, Ve = {}, ue = Object.keys(ae);
      for (Fe = 0; Fe < ue.length; Fe++) Ie = ue[Fe], we.indexOf(Ie) >= 0 || (Ve[Ie] = ae[Ie]);
      return Ve;
    }(t, ["componentId"]), x = G && G + "-" + (Wn(U) ? U : Ba(Go(U)));
    return Ys(U, hr({}, H, { attrs: M, componentId: x }), r);
  }, Object.defineProperty(E, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(U) {
    this._foldedDefaultProps = i ? Ws({}, e.defaultProps, U) : U;
  } }), Object.defineProperty(E, "toString", { value: function() {
    return "." + E.styledComponentId;
  } }), c && od(E, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), E;
}
var ia = function(e) {
  return function t(r, i, c) {
    if (c === void 0 && (c = wr), !Ms.isValidElementType(i)) return bn(1, String(i));
    var u = function() {
      return r(i, c, Ld.apply(void 0, arguments));
    };
    return u.withConfig = function(y) {
      return t(r, i, hr({}, c, {}, y));
    }, u.attrs = function(y) {
      return t(r, i, hr({}, c, { attrs: Array.prototype.concat(c.attrs, y).filter(Boolean) }));
    }, u;
  }(Ys, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  ia[e] = ia(e);
});
const Hd = ia.ul`
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
`, Bd = () => {
  const { feeds: e } = xr(di);
  return /* @__PURE__ */ dt.jsx(Hd, { "data-testid": "grid-view-container", children: e == null ? void 0 : e.map((t) => /* @__PURE__ */ dt.jsx("li", { children: /* @__PURE__ */ dt.jsx(
    vr,
    {
      type: "event",
      eventFormat: "inline",
      eventTime: `<span>
                ${ra(t.startDate, "COMPLETE")} <br /> ${js(
        t.startDate,
        t.endDate
      )}
              </span>`,
      eventLocation: t.location,
      clickable: !!t.alias,
      cardLink: `${t.alias}/?eventDate=${ra(
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
}, Gs = ({ header: e, ctaButton: t, dataSource: r, maxItems: i }) => (fn(() => {
  typeof window < "u" && ls({
    packageName: "component-events",
    component: "CardsGridEvents",
    type: "NA",
    configuration: {
      header: e,
      ctaButton: t,
      dataSource: r,
      maxItems: i
    }
  });
}, []), // Calling the high order component that fetch the data
/* @__PURE__ */ dt.jsx(hi, { header: e, ctaButton: t, dataSource: r, maxItems: i, children: /* @__PURE__ */ dt.jsx(Bd, {}) }));
Gs.propTypes = Fs;
const Wd = ia.ul`
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
`, qd = () => {
  const { feeds: e } = xr(di);
  return /* @__PURE__ */ dt.jsx(Wd, { "data-testid": "list-view-container", children: e == null ? void 0 : e.map((t) => /* @__PURE__ */ dt.jsx("li", { children: /* @__PURE__ */ dt.jsx(
    vr,
    {
      type: "event",
      eventFormat: "inline",
      horizontal: !0,
      eventTime: `<span>
                ${ra(t.startDate, "COMPLETE")} <br /> ${js(
        t.startDate,
        t.endDate
      )}
              </span>`,
      eventLocation: t.location,
      clickable: !!t.alias,
      cardLink: `${t.alias}/?eventDate=${ra(
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
}, Vs = ({ header: e, ctaButton: t, dataSource: r, maxItems: i }) => (fn(() => {
  typeof window < "u" && ls({
    packageName: "component-events",
    component: "CardsListEvents",
    type: "NA",
    configuration: {
      header: e,
      ctaButton: t,
      dataSource: r,
      maxItems: i
    }
  });
}, []), // Calling the high order component that fetch the data
/* @__PURE__ */ dt.jsx(hi, { header: e, ctaButton: t, dataSource: r, maxItems: i, children: /* @__PURE__ */ dt.jsx(qd, {}) }));
Vs.propTypes = Fs;
var qn = {}, Qo;
function Yd() {
  if (Qo) return qn;
  Qo = 1;
  var e = ts;
  return qn.createRoot = e.createRoot, qn.hydrateRoot = e.hydrateRoot, qn;
}
var Gd = Yd();
const Xs = (e, t, r) => {
  Gd.createRoot(r).render(ft.createElement(e, t));
}, Kd = ({ targetSelector: e, props: t }) => {
  Xs(Gs, t, document.querySelector(e));
}, Jd = ({ targetSelector: e, props: t }) => {
  Xs(Vs, t, document.querySelector(e));
};
export {
  Gs as CardsGridEvents,
  Vs as CardsListEvents,
  Kd as initCardsGridEventsComponent,
  Jd as initCardsListEventsComponent
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
/*! @license DOMPurify 3.3.2 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.2/LICENSE */
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
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
