import ft, { forwardRef as oi, Component as al, createContext as il, useRef as ol, useImperativeHandle as sl, useId as ll, useContext as kr, createElement as Qo, useState as ln, useEffect as fn } from "react";
import es from "react-dom";
function ts(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ya = { exports: {} }, Xr = {};
var Pi;
function cl() {
  if (Pi) return Xr;
  Pi = 1;
  var e = ft, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, c = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(S, w, h) {
    var I, C = {}, z = null, Y = null;
    h !== void 0 && (z = "" + h), w.key !== void 0 && (z = "" + w.key), w.ref !== void 0 && (Y = w.ref);
    for (I in w) i.call(w, I) && !u.hasOwnProperty(I) && (C[I] = w[I]);
    if (S && S.defaultProps) for (I in w = S.defaultProps, w) C[I] === void 0 && (C[I] = w[I]);
    return { $$typeof: t, type: S, key: z, ref: Y, props: C, _owner: c.current };
  }
  return Xr.Fragment = r, Xr.jsx = y, Xr.jsxs = y, Xr;
}
var Li;
function ul() {
  return Li || (Li = 1, ya.exports = cl()), ya.exports;
}
var dt = ul();
const {
  entries: rs,
  setPrototypeOf: Fi,
  isFrozen: dl,
  getPrototypeOf: fl,
  getOwnPropertyDescriptor: pl
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
const Pn = xt(Array.prototype.forEach), hl = xt(Array.prototype.lastIndexOf), ji = xt(Array.prototype.pop), Kr = xt(Array.prototype.push), ml = xt(Array.prototype.splice), Gn = xt(String.prototype.toLowerCase), ba = xt(String.prototype.toString), va = xt(String.prototype.match), Jr = xt(String.prototype.replace), gl = xt(String.prototype.indexOf), yl = xt(String.prototype.trim), Pt = xt(Object.prototype.hasOwnProperty), wt = xt(RegExp.prototype.test), Zr = bl(TypeError);
function xt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), c = 1; c < r; c++)
      i[c - 1] = arguments[c];
    return qa(e, t, i);
  };
}
function bl(e) {
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
      u !== c && (dl(t) || (t[i] = u), c = u);
    }
    e[c] = !0;
  }
  return e;
}
function vl(e) {
  for (let t = 0; t < e.length; t++)
    Pt(e, t) || (e[t] = null);
  return e;
}
function or(e) {
  const t = Yn(null);
  for (const [r, i] of rs(e))
    Pt(e, r) && (Array.isArray(i) ? t[r] = vl(i) : i && typeof i == "object" && i.constructor === Object ? t[r] = or(i) : t[r] = i);
  return t;
}
function Qr(e, t) {
  for (; e !== null; ) {
    const i = pl(e, t);
    if (i) {
      if (i.get)
        return xt(i.get);
      if (typeof i.value == "function")
        return xt(i.value);
    }
    e = fl(e);
  }
  function r() {
    return null;
  }
  return r;
}
const Mi = kt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), wa = kt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Sa = kt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), wl = kt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ka = kt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Sl = kt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), zi = kt(["#text"]), $i = kt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), xa = kt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Ui = kt(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Ln = kt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), kl = zt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), xl = zt(/<%[\w\W]*|[\w\W]*%>/gm), El = zt(/\$\{[\w\W]*/gm), _l = zt(/^data-[\-\w.\u00B7-\uFFFF]+$/), Tl = zt(/^aria-[\-\w]+$/), ns = zt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Cl = zt(/^(?:\w+script|data):/i), Al = zt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), as = zt(/^html$/i), Ol = zt(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Hi = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: Tl,
  ATTR_WHITESPACE: Al,
  CUSTOM_ELEMENT: Ol,
  DATA_ATTR: _l,
  DOCTYPE_NAME: as,
  ERB_EXPR: xl,
  IS_ALLOWED_URI: ns,
  IS_SCRIPT_OR_DATA: Cl,
  MUSTACHE_EXPR: kl,
  TMPLIT_EXPR: El
});
const en = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, Rl = function() {
  return typeof window > "u" ? null : window;
}, Il = function(t, r) {
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
function is() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Rl();
  const t = (p) => is(p);
  if (t.version = "3.3.2", t.removed = [], !e || !e.document || e.document.nodeType !== en.document || !e.Element)
    return t.isSupported = !1, t;
  let {
    document: r
  } = e;
  const i = r, c = i.currentScript, {
    DocumentFragment: u,
    HTMLTemplateElement: y,
    Node: S,
    Element: w,
    NodeFilter: h,
    NamedNodeMap: I = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: C,
    DOMParser: z,
    trustedTypes: Y
  } = e, E = w.prototype, k = Qr(E, "cloneNode"), P = Qr(E, "remove"), q = Qr(E, "nextSibling"), U = Qr(E, "childNodes"), G = Qr(E, "parentNode");
  if (typeof y == "function") {
    const p = r.createElement("template");
    p.content && p.content.ownerDocument && (r = p.content.ownerDocument);
  }
  let H, x = "";
  const {
    implementation: ae,
    createNodeIterator: Se,
    createDocumentFragment: Ie,
    getElementsByTagName: Fe
  } = r, {
    importNode: Ve
  } = i;
  let ue = Bi();
  t.isSupported = typeof rs == "function" && typeof G == "function" && ae && ae.createHTMLDocument !== void 0;
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
  const j = Ce({}, [...Mi, ...wa, ...Sa, ...ka, ...zi]);
  let A = null;
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
  })), m = null, ee = null;
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
  const Ct = r.createElement("form"), nr = function(g) {
    return g instanceof RegExp || g instanceof Function;
  }, At = function() {
    let g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(ot && ot === g)) {
      if ((!g || typeof g != "object") && (g = {}), g = or(g), lt = // eslint-disable-next-line unicorn/prefer-includes
      rr.indexOf(g.PARSER_MEDIA_TYPE) === -1 ? qt : g.PARSER_MEDIA_TYPE, fe = lt === "application/xhtml+xml" ? ba : Gn, se = Pt(g, "ALLOWED_TAGS") ? Ce({}, g.ALLOWED_TAGS, fe) : j, A = Pt(g, "ALLOWED_ATTR") ? Ce({}, g.ALLOWED_ATTR, fe) : F, Wt = Pt(g, "ALLOWED_NAMESPACES") ? Ce({}, g.ALLOWED_NAMESPACES, ba) : ht, Ut = Pt(g, "ADD_URI_SAFE_ATTR") ? Ce(or(Ht), g.ADD_URI_SAFE_ATTR, fe) : Ht, er = Pt(g, "ADD_DATA_URI_TAGS") ? Ce(or(tr), g.ADD_DATA_URI_TAGS, fe) : tr, De = Pt(g, "FORBID_CONTENTS") ? Ce({}, g.FORBID_CONTENTS, fe) : Pe, m = Pt(g, "FORBID_TAGS") ? Ce({}, g.FORBID_TAGS, fe) : or({}), ee = Pt(g, "FORBID_ATTR") ? Ce({}, g.FORBID_ATTR, fe) : or({}), Ke = Pt(g, "USE_PROFILES") ? g.USE_PROFILES : !1, ie = g.ALLOW_ARIA_ATTR !== !1, Q = g.ALLOW_DATA_ATTR !== !1, te = g.ALLOW_UNKNOWN_PROTOCOLS || !1, X = g.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ne = g.SAFE_FOR_TEMPLATES || !1, de = g.SAFE_FOR_XML !== !1, J = g.WHOLE_DOCUMENT || !1, le = g.RETURN_DOM || !1, Ue = g.RETURN_DOM_FRAGMENT || !1, ce = g.RETURN_TRUSTED_TYPE || !1, re = g.FORCE_BODY || !1, it = g.SANITIZE_DOM !== !1, We = g.SANITIZE_NAMED_PROPS || !1, W = g.KEEP_CONTENT !== !1, oe = g.IN_PLACE || !1, tt = g.ALLOWED_URI_REGEXP || ns, ut = g.NAMESPACE || nt, vt = g.MATHML_TEXT_INTEGRATION_POINTS || vt, mt = g.HTML_INTEGRATION_POINTS || mt, L = g.CUSTOM_ELEMENT_HANDLING || {}, g.CUSTOM_ELEMENT_HANDLING && nr(g.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (L.tagNameCheck = g.CUSTOM_ELEMENT_HANDLING.tagNameCheck), g.CUSTOM_ELEMENT_HANDLING && nr(g.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (L.attributeNameCheck = g.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), g.CUSTOM_ELEMENT_HANDLING && typeof g.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (L.allowCustomizedBuiltInElements = g.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), ne && (Q = !1), Ue && (le = !0), Ke && (se = Ce({}, zi), A = Yn(null), Ke.html === !0 && (Ce(se, Mi), Ce(A, $i)), Ke.svg === !0 && (Ce(se, wa), Ce(A, xa), Ce(A, Ln)), Ke.svgFilters === !0 && (Ce(se, Sa), Ce(A, xa), Ce(A, Ln)), Ke.mathMl === !0 && (Ce(se, ka), Ce(A, Ui), Ce(A, Ln))), Pt(g, "ADD_TAGS") || (_.tagCheck = null), Pt(g, "ADD_ATTR") || (_.attributeCheck = null), g.ADD_TAGS && (typeof g.ADD_TAGS == "function" ? _.tagCheck = g.ADD_TAGS : (se === j && (se = or(se)), Ce(se, g.ADD_TAGS, fe))), g.ADD_ATTR && (typeof g.ADD_ATTR == "function" ? _.attributeCheck = g.ADD_ATTR : (A === F && (A = or(A)), Ce(A, g.ADD_ATTR, fe))), g.ADD_URI_SAFE_ATTR && Ce(Ut, g.ADD_URI_SAFE_ATTR, fe), g.FORBID_CONTENTS && (De === Pe && (De = or(De)), Ce(De, g.FORBID_CONTENTS, fe)), g.ADD_FORBID_CONTENTS && (De === Pe && (De = or(De)), Ce(De, g.ADD_FORBID_CONTENTS, fe)), W && (se["#text"] = !0), J && Ce(se, ["html", "head", "body"]), se.table && (Ce(se, ["tbody"]), delete m.tbody), g.TRUSTED_TYPES_POLICY) {
        if (typeof g.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Zr('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof g.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Zr('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        H = g.TRUSTED_TYPES_POLICY, x = H.createHTML("");
      } else
        H === void 0 && (H = Il(Y, c)), H !== null && typeof x == "string" && (x = H.createHTML(""));
      kt && kt(g), ot = g;
    }
  }, Yt = Ce({}, [...wa, ...Sa, ...wl]), ar = Ce({}, [...ka, ...Sl]), mr = function(g) {
    let T = G(g);
    (!T || !T.tagName) && (T = {
      namespaceURI: ut,
      tagName: "template"
    });
    const V = Gn(g.tagName), ye = Gn(T.tagName);
    return Wt[g.namespaceURI] ? g.namespaceURI === Tt ? T.namespaceURI === nt ? V === "svg" : T.namespaceURI === pt ? V === "svg" && (ye === "annotation-xml" || vt[ye]) : !!Yt[V] : g.namespaceURI === pt ? T.namespaceURI === nt ? V === "math" : T.namespaceURI === Tt ? V === "math" && mt[ye] : !!ar[V] : g.namespaceURI === nt ? T.namespaceURI === Tt && !mt[ye] || T.namespaceURI === pt && !vt[ye] ? !1 : !ar[V] && (Le[V] || !Yt[V]) : !!(lt === "application/xhtml+xml" && Wt[g.namespaceURI]) : !1;
  }, at = function(g) {
    Kr(t.removed, {
      element: g
    });
    try {
      G(g).removeChild(g);
    } catch {
      P(g);
    }
  }, ct = function(g, T) {
    try {
      Kr(t.removed, {
        attribute: T.getAttributeNode(g),
        from: T
      });
    } catch {
      Kr(t.removed, {
        attribute: null,
        from: T
      });
    }
    if (T.removeAttribute(g), g === "is")
      if (le || Ue)
        try {
          at(T);
        } catch {
        }
      else
        try {
          T.setAttribute(g, "");
        } catch {
        }
  }, lr = function(g) {
    let T = null, V = null;
    if (re)
      g = "<remove></remove>" + g;
    else {
      const we = va(g, /^[\r\n\t ]+/);
      V = we && we[0];
    }
    lt === "application/xhtml+xml" && ut === nt && (g = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + g + "</body></html>");
    const ye = H ? H.createHTML(g) : g;
    if (ut === nt)
      try {
        T = new z().parseFromString(ye, lt);
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
    return g && V && ve.insertBefore(r.createTextNode(V), ve.childNodes[0] || null), ut === nt ? Fe.call(T, J ? "html" : "body")[0] : J ? T.documentElement : ve;
  }, Ft = function(g) {
    return Se.call(
      g.ownerDocument || g,
      g,
      // eslint-disable-next-line no-bitwise
      h.SHOW_ELEMENT | h.SHOW_COMMENT | h.SHOW_TEXT | h.SHOW_PROCESSING_INSTRUCTION | h.SHOW_CDATA_SECTION,
      null
    );
  }, jt = function(g) {
    return g instanceof C && (typeof g.nodeName != "string" || typeof g.textContent != "string" || typeof g.removeChild != "function" || !(g.attributes instanceof I) || typeof g.removeAttribute != "function" || typeof g.setAttribute != "function" || typeof g.namespaceURI != "string" || typeof g.insertBefore != "function" || typeof g.hasChildNodes != "function");
  }, Mt = function(g) {
    return typeof S == "function" && g instanceof S;
  };
  function Qe(p, g, T) {
    Pn(p, (V) => {
      V.call(t, g, T, ot);
    });
  }
  const cr = function(g) {
    let T = null;
    if (Qe(ue.beforeSanitizeElements, g, null), jt(g))
      return at(g), !0;
    const V = fe(g.nodeName);
    if (Qe(ue.uponSanitizeElement, g, {
      tagName: V,
      allowedTags: se
    }), de && g.hasChildNodes() && !Mt(g.firstElementChild) && wt(/<[/\w!]/g, g.innerHTML) && wt(/<[/\w!]/g, g.textContent) || g.nodeType === en.progressingInstruction || de && g.nodeType === en.comment && wt(/<[/\w]/g, g.data))
      return at(g), !0;
    if (!(_.tagCheck instanceof Function && _.tagCheck(V)) && (!se[V] || m[V])) {
      if (!m[V] && ur(V) && (L.tagNameCheck instanceof RegExp && wt(L.tagNameCheck, V) || L.tagNameCheck instanceof Function && L.tagNameCheck(V)))
        return !1;
      if (W && !De[V]) {
        const ye = G(g) || g.parentNode, ve = U(g) || g.childNodes;
        if (ve && ye) {
          const we = ve.length;
          for (let Me = we - 1; Me >= 0; --Me) {
            const Xe = k(ve[Me], !0);
            Xe.__removalCount = (g.__removalCount || 0) + 1, ye.insertBefore(Xe, q(g));
          }
        }
      }
      return at(g), !0;
    }
    return g instanceof w && !mr(g) || (V === "noscript" || V === "noembed" || V === "noframes") && wt(/<\/no(script|embed|frames)/i, g.innerHTML) ? (at(g), !0) : (ne && g.nodeType === en.text && (T = g.textContent, Pn([me, Re, Ne], (ye) => {
      T = Jr(T, ye, " ");
    }), g.textContent !== T && (Kr(t.removed, {
      element: g.cloneNode()
    }), g.textContent = T)), Qe(ue.afterSanitizeElements, g, null), !1);
  }, Ot = function(g, T, V) {
    if (ee[T] || it && (T === "id" || T === "name") && (V in r || V in Ct))
      return !1;
    if (!(Q && !ee[T] && wt(Te, T))) {
      if (!(ie && wt(st, T))) {
        if (!(_.attributeCheck instanceof Function && _.attributeCheck(T, g))) {
          if (!A[T] || ee[T]) {
            if (
              // First condition does a very basic check if a) it's basically a valid custom element tagname AND
              // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
              !(ur(g) && (L.tagNameCheck instanceof RegExp && wt(L.tagNameCheck, g) || L.tagNameCheck instanceof Function && L.tagNameCheck(g)) && (L.attributeNameCheck instanceof RegExp && wt(L.attributeNameCheck, T) || L.attributeNameCheck instanceof Function && L.attributeNameCheck(T, g)) || // Alternative, second condition checks if it's an `is`-attribute, AND
              // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              T === "is" && L.allowCustomizedBuiltInElements && (L.tagNameCheck instanceof RegExp && wt(L.tagNameCheck, V) || L.tagNameCheck instanceof Function && L.tagNameCheck(V)))
            ) return !1;
          } else if (!Ut[T]) {
            if (!wt(tt, Jr(V, Oe, ""))) {
              if (!((T === "src" || T === "xlink:href" || T === "href") && g !== "script" && gl(V, "data:") === 0 && er[g])) {
                if (!(te && !wt(je, Jr(V, Oe, "")))) {
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
  }, ur = function(g) {
    return g !== "annotation-xml" && va(g, Be);
  }, Gt = function(g) {
    Qe(ue.beforeSanitizeAttributes, g, null);
    const {
      attributes: T
    } = g;
    if (!T || jt(g))
      return;
    const V = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: A,
      forceKeepAttr: void 0
    };
    let ye = T.length;
    for (; ye--; ) {
      const ve = T[ye], {
        name: we,
        namespaceURI: Me,
        value: Xe
      } = ve, gt = fe(we), Je = Xe;
      let He = we === "value" ? Je : yl(Je);
      if (V.attrName = gt, V.attrValue = He, V.keepAttr = !0, V.forceKeepAttr = void 0, Qe(ue.uponSanitizeAttribute, g, V), He = V.attrValue, We && (gt === "id" || gt === "name") && (ct(we, g), He = ke + He), de && wt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, He)) {
        ct(we, g);
        continue;
      }
      if (gt === "attributename" && va(He, "href")) {
        ct(we, g);
        continue;
      }
      if (V.forceKeepAttr)
        continue;
      if (!V.keepAttr) {
        ct(we, g);
        continue;
      }
      if (!X && wt(/\/>/i, He)) {
        ct(we, g);
        continue;
      }
      ne && Pn([me, Re, Ne], (xr) => {
        He = Jr(He, xr, " ");
      });
      const Rt = fe(g.nodeName);
      if (!Ot(Rt, gt, He)) {
        ct(we, g);
        continue;
      }
      if (H && typeof Y == "object" && typeof Y.getAttributeType == "function" && !Me)
        switch (Y.getAttributeType(Rt, gt)) {
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
          Me ? g.setAttributeNS(Me, we, He) : g.setAttribute(we, He), jt(g) ? at(g) : ji(t.removed);
        } catch {
          ct(we, g);
        }
    }
    Qe(ue.afterSanitizeAttributes, g, null);
  }, ir = function p(g) {
    let T = null;
    const V = Ft(g);
    for (Qe(ue.beforeSanitizeShadowDOM, g, null); T = V.nextNode(); )
      Qe(ue.uponSanitizeShadowNode, T, null), cr(T), Gt(T), T.content instanceof u && p(T.content);
    Qe(ue.afterSanitizeShadowDOM, g, null);
  };
  return t.sanitize = function(p) {
    let g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, T = null, V = null, ye = null, ve = null;
    if (Bt = !p, Bt && (p = "<!-->"), typeof p != "string" && !Mt(p))
      if (typeof p.toString == "function") {
        if (p = p.toString(), typeof p != "string")
          throw Zr("dirty is not a string, aborting");
      } else
        throw Zr("toString is not a function");
    if (!t.isSupported)
      return p;
    if (ge || At(g), t.removed = [], typeof p == "string" && (oe = !1), oe) {
      if (p.nodeName) {
        const Xe = fe(p.nodeName);
        if (!se[Xe] || m[Xe])
          throw Zr("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (p instanceof S)
      T = lr("<!---->"), V = T.ownerDocument.importNode(p, !0), V.nodeType === en.element && V.nodeName === "BODY" || V.nodeName === "HTML" ? T = V : T.appendChild(V);
    else {
      if (!le && !ne && !J && // eslint-disable-next-line unicorn/prefer-includes
      p.indexOf("<") === -1)
        return H && ce ? H.createHTML(p) : p;
      if (T = lr(p), !T)
        return le ? null : ce ? x : "";
    }
    T && re && at(T.firstChild);
    const we = Ft(oe ? p : T);
    for (; ye = we.nextNode(); )
      cr(ye), Gt(ye), ye.content instanceof u && ir(ye.content);
    if (oe)
      return p;
    if (le) {
      if (Ue)
        for (ve = Ie.call(T.ownerDocument); T.firstChild; )
          ve.appendChild(T.firstChild);
      else
        ve = T;
      return (A.shadowroot || A.shadowrootmode) && (ve = Ve.call(i, ve, !0)), ve;
    }
    let Me = J ? T.outerHTML : T.innerHTML;
    return J && se["!doctype"] && T.ownerDocument && T.ownerDocument.doctype && T.ownerDocument.doctype.name && wt(as, T.ownerDocument.doctype.name) && (Me = "<!DOCTYPE " + T.ownerDocument.doctype.name + `>
` + Me), ne && Pn([me, Re, Ne], (Xe) => {
      Me = Jr(Me, Xe, " ");
    }), H && ce ? H.createHTML(Me) : Me;
  }, t.setConfig = function() {
    let p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    At(p), ge = !0;
  }, t.clearConfig = function() {
    ot = null, ge = !1;
  }, t.isValidAttribute = function(p, g, T) {
    ot || At({});
    const V = fe(p), ye = fe(g);
    return Ot(V, ye, T);
  }, t.addHook = function(p, g) {
    typeof g == "function" && Kr(ue[p], g);
  }, t.removeHook = function(p, g) {
    if (g !== void 0) {
      const T = hl(ue[p], g);
      return T === -1 ? void 0 : ml(ue[p], T, 1)[0];
    }
    return ji(ue[p]);
  }, t.removeHooks = function(p) {
    ue[p] = [];
  }, t.removeAllHooks = function() {
    ue = Bi();
  }, t;
}
is();
var Ea = { exports: {} }, _a, Wi;
function Nl() {
  if (Wi) return _a;
  Wi = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return _a = e, _a;
}
var Ta, qi;
function Dl() {
  if (qi) return Ta;
  qi = 1;
  var e = /* @__PURE__ */ Nl();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Ta = function() {
    function i(y, S, w, h, I, C) {
      if (C !== e) {
        var z = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw z.name = "Invariant Violation", z;
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
function Pl() {
  return Yi || (Yi = 1, Ea.exports = /* @__PURE__ */ Dl()()), Ea.exports;
}
var Ll = /* @__PURE__ */ Pl();
const Ge = /* @__PURE__ */ ts(Ll);
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
function Fl() {
  return Gi || (Gi = 1, function(e) {
    (function() {
      var t = {}.hasOwnProperty;
      function r() {
        for (var u = "", y = 0; y < arguments.length; y++) {
          var S = arguments[y];
          S && (u = c(u, i(S)));
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
        for (var S in u)
          t.call(u, S) && u[S] && (y = c(y, S));
        return y;
      }
      function c(u, y) {
        return y ? u ? u + " " + y : u + y : u;
      }
      e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
    })();
  }(Ca)), Ca.exports;
}
Fl();
({
  ...mn.propTypes
});
const os = ({ children: e, className: t = "container", ...r }) => /* @__PURE__ */ dt.jsx("div", { className: t, ...r, children: /* @__PURE__ */ dt.jsx("div", { className: "row", children: e }) });
os.propTypes = {
  children: mn.propTypes.children
};
({
  ...os.propTypes
});
mn.propTypes.children, Ge.oneOf(["0", "3", "4", "6", "8", "9", "12"]);
mn.propTypes.children;
function ss({
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
function jl() {
  if (Xi) return tn;
  Xi = 1;
  var e = ft, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, c = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(S, w, h) {
    var I, C = {}, z = null, Y = null;
    h !== void 0 && (z = "" + h), w.key !== void 0 && (z = "" + w.key), w.ref !== void 0 && (Y = w.ref);
    for (I in w) i.call(w, I) && !u.hasOwnProperty(I) && (C[I] = w[I]);
    if (S && S.defaultProps) for (I in w = S.defaultProps, w) C[I] === void 0 && (C[I] = w[I]);
    return { $$typeof: t, type: S, key: z, ref: Y, props: C, _owner: c.current };
  }
  return tn.Fragment = r, tn.jsx = y, tn.jsxs = y, tn;
}
var Ki;
function Ml() {
  return Ki || (Ki = 1, Vi.exports = jl()), Vi.exports;
}
var B = Ml(), Ji = { exports: {} }, Aa, Zi;
function zl() {
  if (Zi) return Aa;
  Zi = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Aa = e, Aa;
}
var Oa, Qi;
function $l() {
  if (Qi) return Oa;
  Qi = 1;
  var e = /* @__PURE__ */ zl();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Oa = function() {
    function i(y, S, w, h, I, C) {
      if (C !== e) {
        var z = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw z.name = "Invariant Violation", z;
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
function Ul() {
  return eo || (eo = 1, Ji.exports = /* @__PURE__ */ $l()()), Ji.exports;
}
var Hl = /* @__PURE__ */ Ul();
const o = /* @__PURE__ */ si(Hl), Bl = () => {
  const [e, t] = ln(null), [r, i] = ln(!1), [c, u] = ln(null), [y, S] = ln("");
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
  }, [y]), [{ data: e, loading: r, error: c }, S];
}, Wl = (e) => (e || []).join(" "), {
  entries: ls,
  setPrototypeOf: to,
  isFrozen: ql,
  getPrototypeOf: Yl,
  getOwnPropertyDescriptor: Gl
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
const Fn = _t(Array.prototype.forEach), Vl = _t(Array.prototype.lastIndexOf), ro = _t(Array.prototype.pop), rn = _t(Array.prototype.push), Xl = _t(Array.prototype.splice), Xn = _t(String.prototype.toLowerCase), Ra = _t(String.prototype.toString), Ia = _t(String.prototype.match), nn = _t(String.prototype.replace), Kl = _t(String.prototype.indexOf), Jl = _t(String.prototype.trim), Lt = _t(Object.prototype.hasOwnProperty), St = _t(RegExp.prototype.test), an = Zl(TypeError);
function _t(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), c = 1; c < r; c++)
      i[c - 1] = arguments[c];
    return Ga(e, t, i);
  };
}
function Zl(e) {
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
      u !== c && (ql(t) || (t[i] = u), c = u);
    }
    e[c] = !0;
  }
  return e;
}
function Ql(e) {
  for (let t = 0; t < e.length; t++)
    Lt(e, t) || (e[t] = null);
  return e;
}
function sr(e) {
  const t = Vn(null);
  for (const [r, i] of ls(e))
    Lt(e, r) && (Array.isArray(i) ? t[r] = Ql(i) : i && typeof i == "object" && i.constructor === Object ? t[r] = sr(i) : t[r] = i);
  return t;
}
function on(e, t) {
  for (; e !== null; ) {
    const i = Gl(e, t);
    if (i) {
      if (i.get)
        return _t(i.get);
      if (typeof i.value == "function")
        return _t(i.value);
    }
    e = Yl(e);
  }
  function r() {
    return null;
  }
  return r;
}
const no = Et(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Na = Et(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Da = Et(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), ec = Et(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Pa = Et(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), tc = Et(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), ao = Et(["#text"]), io = Et(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), La = Et(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), oo = Et(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), jn = Et(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), rc = $t(/\{\{[\w\W]*|[\w\W]*\}\}/gm), nc = $t(/<%[\w\W]*|[\w\W]*%>/gm), ac = $t(/\$\{[\w\W]*/gm), ic = $t(/^data-[\-\w.\u00B7-\uFFFF]+$/), oc = $t(/^aria-[\-\w]+$/), cs = $t(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), sc = $t(/^(?:\w+script|data):/i), lc = $t(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), us = $t(/^html$/i), cc = $t(/^[a-z][.\w]*(-[.\w]+)+$/i);
var so = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: oc,
  ATTR_WHITESPACE: lc,
  CUSTOM_ELEMENT: cc,
  DATA_ATTR: ic,
  DOCTYPE_NAME: us,
  ERB_EXPR: nc,
  IS_ALLOWED_URI: cs,
  IS_SCRIPT_OR_DATA: sc,
  MUSTACHE_EXPR: rc,
  TMPLIT_EXPR: ac
});
const sn = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, uc = function() {
  return typeof window > "u" ? null : window;
}, dc = function(e, t) {
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
function ds() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : uc();
  const t = (p) => ds(p);
  if (t.version = "3.3.2", t.removed = [], !e || !e.document || e.document.nodeType !== sn.document || !e.Element)
    return t.isSupported = !1, t;
  let {
    document: r
  } = e;
  const i = r, c = i.currentScript, {
    DocumentFragment: u,
    HTMLTemplateElement: y,
    Node: S,
    Element: w,
    NodeFilter: h,
    NamedNodeMap: I = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: C,
    DOMParser: z,
    trustedTypes: Y
  } = e, E = w.prototype, k = on(E, "cloneNode"), P = on(E, "remove"), q = on(E, "nextSibling"), U = on(E, "childNodes"), G = on(E, "parentNode");
  if (typeof y == "function") {
    const p = r.createElement("template");
    p.content && p.content.ownerDocument && (r = p.content.ownerDocument);
  }
  let H, x = "";
  const {
    implementation: ae,
    createNodeIterator: Se,
    createDocumentFragment: Ie,
    getElementsByTagName: Fe
  } = r, {
    importNode: Ve
  } = i;
  let ue = lo();
  t.isSupported = typeof ls == "function" && typeof G == "function" && ae && ae.createHTMLDocument !== void 0;
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
  let A = null;
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
  })), m = null, ee = null;
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
      rr.indexOf(p.PARSER_MEDIA_TYPE) === -1 ? qt : p.PARSER_MEDIA_TYPE, fe = lt === "application/xhtml+xml" ? Ra : Xn, se = Lt(p, "ALLOWED_TAGS") ? Ae({}, p.ALLOWED_TAGS, fe) : j, A = Lt(p, "ALLOWED_ATTR") ? Ae({}, p.ALLOWED_ATTR, fe) : F, Wt = Lt(p, "ALLOWED_NAMESPACES") ? Ae({}, p.ALLOWED_NAMESPACES, Ra) : ht, Ut = Lt(p, "ADD_URI_SAFE_ATTR") ? Ae(sr(Ht), p.ADD_URI_SAFE_ATTR, fe) : Ht, er = Lt(p, "ADD_DATA_URI_TAGS") ? Ae(sr(tr), p.ADD_DATA_URI_TAGS, fe) : tr, De = Lt(p, "FORBID_CONTENTS") ? Ae({}, p.FORBID_CONTENTS, fe) : Pe, m = Lt(p, "FORBID_TAGS") ? Ae({}, p.FORBID_TAGS, fe) : sr({}), ee = Lt(p, "FORBID_ATTR") ? Ae({}, p.FORBID_ATTR, fe) : sr({}), Ke = Lt(p, "USE_PROFILES") ? p.USE_PROFILES : !1, ie = p.ALLOW_ARIA_ATTR !== !1, Q = p.ALLOW_DATA_ATTR !== !1, te = p.ALLOW_UNKNOWN_PROTOCOLS || !1, X = p.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ne = p.SAFE_FOR_TEMPLATES || !1, de = p.SAFE_FOR_XML !== !1, J = p.WHOLE_DOCUMENT || !1, le = p.RETURN_DOM || !1, Ue = p.RETURN_DOM_FRAGMENT || !1, ce = p.RETURN_TRUSTED_TYPE || !1, re = p.FORCE_BODY || !1, it = p.SANITIZE_DOM !== !1, We = p.SANITIZE_NAMED_PROPS || !1, W = p.KEEP_CONTENT !== !1, oe = p.IN_PLACE || !1, tt = p.ALLOWED_URI_REGEXP || cs, ut = p.NAMESPACE || nt, vt = p.MATHML_TEXT_INTEGRATION_POINTS || vt, mt = p.HTML_INTEGRATION_POINTS || mt, L = p.CUSTOM_ELEMENT_HANDLING || {}, p.CUSTOM_ELEMENT_HANDLING && nr(p.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (L.tagNameCheck = p.CUSTOM_ELEMENT_HANDLING.tagNameCheck), p.CUSTOM_ELEMENT_HANDLING && nr(p.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (L.attributeNameCheck = p.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), p.CUSTOM_ELEMENT_HANDLING && typeof p.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (L.allowCustomizedBuiltInElements = p.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), ne && (Q = !1), Ue && (le = !0), Ke && (se = Ae({}, ao), A = Vn(null), Ke.html === !0 && (Ae(se, no), Ae(A, io)), Ke.svg === !0 && (Ae(se, Na), Ae(A, La), Ae(A, jn)), Ke.svgFilters === !0 && (Ae(se, Da), Ae(A, La), Ae(A, jn)), Ke.mathMl === !0 && (Ae(se, Pa), Ae(A, oo), Ae(A, jn))), Lt(p, "ADD_TAGS") || (_.tagCheck = null), Lt(p, "ADD_ATTR") || (_.attributeCheck = null), p.ADD_TAGS && (typeof p.ADD_TAGS == "function" ? _.tagCheck = p.ADD_TAGS : (se === j && (se = sr(se)), Ae(se, p.ADD_TAGS, fe))), p.ADD_ATTR && (typeof p.ADD_ATTR == "function" ? _.attributeCheck = p.ADD_ATTR : (A === F && (A = sr(A)), Ae(A, p.ADD_ATTR, fe))), p.ADD_URI_SAFE_ATTR && Ae(Ut, p.ADD_URI_SAFE_ATTR, fe), p.FORBID_CONTENTS && (De === Pe && (De = sr(De)), Ae(De, p.FORBID_CONTENTS, fe)), p.ADD_FORBID_CONTENTS && (De === Pe && (De = sr(De)), Ae(De, p.ADD_FORBID_CONTENTS, fe)), W && (se["#text"] = !0), J && Ae(se, ["html", "head", "body"]), se.table && (Ae(se, ["tbody"]), delete m.tbody), p.TRUSTED_TYPES_POLICY) {
        if (typeof p.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw an('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof p.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw an('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        H = p.TRUSTED_TYPES_POLICY, x = H.createHTML("");
      } else
        H === void 0 && (H = dc(Y, c)), H !== null && typeof x == "string" && (x = H.createHTML(""));
      Et && Et(p), ot = p;
    }
  }, Yt = Ae({}, [...Na, ...Da, ...ec]), ar = Ae({}, [...Pa, ...tc]), mr = function(p) {
    let g = G(p);
    (!g || !g.tagName) && (g = {
      namespaceURI: ut,
      tagName: "template"
    });
    const T = Xn(p.tagName), V = Xn(g.tagName);
    return Wt[p.namespaceURI] ? p.namespaceURI === Tt ? g.namespaceURI === nt ? T === "svg" : g.namespaceURI === pt ? T === "svg" && (V === "annotation-xml" || vt[V]) : !!Yt[T] : p.namespaceURI === pt ? g.namespaceURI === nt ? T === "math" : g.namespaceURI === Tt ? T === "math" && mt[V] : !!ar[T] : p.namespaceURI === nt ? g.namespaceURI === Tt && !mt[V] || g.namespaceURI === pt && !vt[V] ? !1 : !ar[T] && (Le[T] || !Yt[T]) : !!(lt === "application/xhtml+xml" && Wt[p.namespaceURI]) : !1;
  }, at = function(p) {
    rn(t.removed, {
      element: p
    });
    try {
      G(p).removeChild(p);
    } catch {
      P(p);
    }
  }, ct = function(p, g) {
    try {
      rn(t.removed, {
        attribute: g.getAttributeNode(p),
        from: g
      });
    } catch {
      rn(t.removed, {
        attribute: null,
        from: g
      });
    }
    if (g.removeAttribute(p), p === "is")
      if (le || Ue)
        try {
          at(g);
        } catch {
        }
      else
        try {
          g.setAttribute(p, "");
        } catch {
        }
  }, lr = function(p) {
    let g = null, T = null;
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
        g = new z().parseFromString(V, lt);
      } catch {
      }
    if (!g || !g.documentElement) {
      g = ae.createDocument(ut, "template", null);
      try {
        g.documentElement.innerHTML = Bt ? x : V;
      } catch {
      }
    }
    const ye = g.body || g.documentElement;
    return p && T && ye.insertBefore(r.createTextNode(T), ye.childNodes[0] || null), ut === nt ? Fe.call(g, J ? "html" : "body")[0] : J ? g.documentElement : ye;
  }, Ft = function(p) {
    return Se.call(
      p.ownerDocument || p,
      p,
      // eslint-disable-next-line no-bitwise
      h.SHOW_ELEMENT | h.SHOW_COMMENT | h.SHOW_TEXT | h.SHOW_PROCESSING_INSTRUCTION | h.SHOW_CDATA_SECTION,
      null
    );
  }, jt = function(p) {
    return p instanceof C && (typeof p.nodeName != "string" || typeof p.textContent != "string" || typeof p.removeChild != "function" || !(p.attributes instanceof I) || typeof p.removeAttribute != "function" || typeof p.setAttribute != "function" || typeof p.namespaceURI != "string" || typeof p.insertBefore != "function" || typeof p.hasChildNodes != "function");
  }, Mt = function(p) {
    return typeof S == "function" && p instanceof S;
  };
  function Qe(p, g, T) {
    Fn(p, (V) => {
      V.call(t, g, T, ot);
    });
  }
  const cr = function(p) {
    let g = null;
    if (Qe(ue.beforeSanitizeElements, p, null), jt(p))
      return at(p), !0;
    const T = fe(p.nodeName);
    if (Qe(ue.uponSanitizeElement, p, {
      tagName: T,
      allowedTags: se
    }), de && p.hasChildNodes() && !Mt(p.firstElementChild) && St(/<[/\w!]/g, p.innerHTML) && St(/<[/\w!]/g, p.textContent) || p.nodeType === sn.progressingInstruction || de && p.nodeType === sn.comment && St(/<[/\w]/g, p.data))
      return at(p), !0;
    if (!(_.tagCheck instanceof Function && _.tagCheck(T)) && (!se[T] || m[T])) {
      if (!m[T] && ur(T) && (L.tagNameCheck instanceof RegExp && St(L.tagNameCheck, T) || L.tagNameCheck instanceof Function && L.tagNameCheck(T)))
        return !1;
      if (W && !De[T]) {
        const V = G(p) || p.parentNode, ye = U(p) || p.childNodes;
        if (ye && V) {
          const ve = ye.length;
          for (let we = ve - 1; we >= 0; --we) {
            const Me = k(ye[we], !0);
            Me.__removalCount = (p.__removalCount || 0) + 1, V.insertBefore(Me, q(p));
          }
        }
      }
      return at(p), !0;
    }
    return p instanceof w && !mr(p) || (T === "noscript" || T === "noembed" || T === "noframes") && St(/<\/no(script|embed|frames)/i, p.innerHTML) ? (at(p), !0) : (ne && p.nodeType === sn.text && (g = p.textContent, Fn([me, Re, Ne], (V) => {
      g = nn(g, V, " ");
    }), p.textContent !== g && (rn(t.removed, {
      element: p.cloneNode()
    }), p.textContent = g)), Qe(ue.afterSanitizeElements, p, null), !1);
  }, Ot = function(p, g, T) {
    if (ee[g] || it && (g === "id" || g === "name") && (T in r || T in Ct))
      return !1;
    if (!(Q && !ee[g] && St(Te, g)) && !(ie && St(st, g)) && !(_.attributeCheck instanceof Function && _.attributeCheck(g, p))) {
      if (!A[g] || ee[g]) {
        if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(ur(p) && (L.tagNameCheck instanceof RegExp && St(L.tagNameCheck, p) || L.tagNameCheck instanceof Function && L.tagNameCheck(p)) && (L.attributeNameCheck instanceof RegExp && St(L.attributeNameCheck, g) || L.attributeNameCheck instanceof Function && L.attributeNameCheck(g, p)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          g === "is" && L.allowCustomizedBuiltInElements && (L.tagNameCheck instanceof RegExp && St(L.tagNameCheck, T) || L.tagNameCheck instanceof Function && L.tagNameCheck(T)))
        ) return !1;
      } else if (!Ut[g] && !St(tt, nn(T, Oe, "")) && !((g === "src" || g === "xlink:href" || g === "href") && p !== "script" && Kl(T, "data:") === 0 && er[p]) && !(te && !St(je, nn(T, Oe, ""))) && T)
        return !1;
    }
    return !0;
  }, ur = function(p) {
    return p !== "annotation-xml" && Ia(p, Be);
  }, Gt = function(p) {
    Qe(ue.beforeSanitizeAttributes, p, null);
    const {
      attributes: g
    } = p;
    if (!g || jt(p))
      return;
    const T = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: A,
      forceKeepAttr: void 0
    };
    let V = g.length;
    for (; V--; ) {
      const ye = g[V], {
        name: ve,
        namespaceURI: we,
        value: Me
      } = ye, Xe = fe(ve), gt = Me;
      let Je = ve === "value" ? gt : Jl(gt);
      if (T.attrName = Xe, T.attrValue = Je, T.keepAttr = !0, T.forceKeepAttr = void 0, Qe(ue.uponSanitizeAttribute, p, T), Je = T.attrValue, We && (Xe === "id" || Xe === "name") && (ct(ve, p), Je = ke + Je), de && St(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Je)) {
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
      if (!X && St(/\/>/i, Je)) {
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
      if (H && typeof Y == "object" && typeof Y.getAttributeType == "function" && !we)
        switch (Y.getAttributeType(He, Xe)) {
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
          we ? p.setAttributeNS(we, ve, Je) : p.setAttribute(ve, Je), jt(p) ? at(p) : ro(t.removed);
        } catch {
          ct(ve, p);
        }
    }
    Qe(ue.afterSanitizeAttributes, p, null);
  }, ir = function p(g) {
    let T = null;
    const V = Ft(g);
    for (Qe(ue.beforeSanitizeShadowDOM, g, null); T = V.nextNode(); )
      Qe(ue.uponSanitizeShadowNode, T, null), cr(T), Gt(T), T.content instanceof u && p(T.content);
    Qe(ue.afterSanitizeShadowDOM, g, null);
  };
  return t.sanitize = function(p) {
    let g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, T = null, V = null, ye = null, ve = null;
    if (Bt = !p, Bt && (p = "<!-->"), typeof p != "string" && !Mt(p))
      if (typeof p.toString == "function") {
        if (p = p.toString(), typeof p != "string")
          throw an("dirty is not a string, aborting");
      } else
        throw an("toString is not a function");
    if (!t.isSupported)
      return p;
    if (ge || At(g), t.removed = [], typeof p == "string" && (oe = !1), oe) {
      if (p.nodeName) {
        const Xe = fe(p.nodeName);
        if (!se[Xe] || m[Xe])
          throw an("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (p instanceof S)
      T = lr("<!---->"), V = T.ownerDocument.importNode(p, !0), V.nodeType === sn.element && V.nodeName === "BODY" || V.nodeName === "HTML" ? T = V : T.appendChild(V);
    else {
      if (!le && !ne && !J && // eslint-disable-next-line unicorn/prefer-includes
      p.indexOf("<") === -1)
        return H && ce ? H.createHTML(p) : p;
      if (T = lr(p), !T)
        return le ? null : ce ? x : "";
    }
    T && re && at(T.firstChild);
    const we = Ft(oe ? p : T);
    for (; ye = we.nextNode(); )
      cr(ye), Gt(ye), ye.content instanceof u && ir(ye.content);
    if (oe)
      return p;
    if (le) {
      if (Ue)
        for (ve = Ie.call(T.ownerDocument); T.firstChild; )
          ve.appendChild(T.firstChild);
      else
        ve = T;
      return (A.shadowroot || A.shadowrootmode) && (ve = Ve.call(i, ve, !0)), ve;
    }
    let Me = J ? T.outerHTML : T.innerHTML;
    return J && se["!doctype"] && T.ownerDocument && T.ownerDocument.doctype && T.ownerDocument.doctype.name && St(us, T.ownerDocument.doctype.name) && (Me = "<!DOCTYPE " + T.ownerDocument.doctype.name + `>
` + Me), ne && Fn([me, Re, Ne], (Xe) => {
      Me = nn(Me, Xe, " ");
    }), H && ce ? H.createHTML(Me) : Me;
  }, t.setConfig = function() {
    let p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    At(p), ge = !0;
  }, t.clearConfig = function() {
    ot = null, ge = !1;
  }, t.isValidAttribute = function(p, g, T) {
    ot || At({});
    const V = fe(p), ye = fe(g);
    return Ot(V, ye, T);
  }, t.addHook = function(p, g) {
    typeof g == "function" && rn(ue[p], g);
  }, t.removeHook = function(p, g) {
    if (g !== void 0) {
      const T = Vl(ue[p], g);
      return T === -1 ? void 0 : Xl(ue[p], T, 1)[0];
    }
    return ro(ue[p]);
  }, t.removeHooks = function(p) {
    ue[p] = [];
  }, t.removeAllHooks = function() {
    ue = lo();
  }, t;
}
var co = ds();
let Mn = null;
function fc() {
  return Mn || (typeof window < "u" ? Mn = co(window) : Mn = co), Mn;
}
const Rr = (e) => ({ __html: fc().sanitize(e) });
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
const pc = ({
  event: e = "",
  action: t = "",
  name: r = "",
  type: i = "",
  section: c = "",
  text: u = "",
  region: y = "",
  component: S = ""
}) => {
  const { dataLayer: w } = window, h = {
    event: e.toLowerCase(),
    action: t.toLowerCase(),
    name: r.toLowerCase(),
    type: i.toLowerCase(),
    region: y.toLowerCase(),
    section: c.toLowerCase(),
    text: u.toLowerCase(),
    component: S.toLowerCase()
  };
  w && w.push(h);
}, gn = ({ children: e }) => /* @__PURE__ */ B.jsx(B.Fragment, { children: e });
gn.propTypes = {
  children: o.oneOfType([
    o.arrayOf(o.node),
    o.node,
    o.string
  ])
};
var uo = { exports: {} }, fo;
function hc() {
  return fo || (fo = 1, function(e) {
    (function() {
      var t = {}.hasOwnProperty;
      function r() {
        for (var u = "", y = 0; y < arguments.length; y++) {
          var S = arguments[y];
          S && (u = c(u, i(S)));
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
        for (var S in u)
          t.call(u, S) && u[S] && (y = c(y, S));
        return y;
      }
      function c(u, y) {
        return y ? u ? u + " " + y : u + y : u;
      }
      e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
    })();
  }(uo)), uo.exports;
}
var mc = hc();
const Zt = /* @__PURE__ */ si(mc);
({
  ...gn.propTypes
});
const fs = ({ children: e, className: t = "container", ...r }) => /* @__PURE__ */ B.jsx("div", { className: t, ...r, children: /* @__PURE__ */ B.jsx("div", { className: "row", children: e }) });
fs.propTypes = {
  children: gn.propTypes.children
};
({
  ...fs.propTypes
});
gn.propTypes.children, o.oneOf(["0", "3", "4", "6", "8", "9", "12"]);
gn.propTypes.children;
const gc = o.shape({
  url: o.string,
  altText: o.string,
  cssClass: o.arrayOf(o.string),
  size: o.oneOf(["small", "medium", "large"])
}), Fa = o.shape({
  text: o.string,
  maxWidth: o.string,
  cssClass: o.arrayOf(o.string),
  highlightColor: o.oneOf(["gold", "black"])
}), ps = o.shape({
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
var br = {}, Or = {}, po;
function yc() {
  if (po) return Or;
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
  function S(n, l, f, v, D, O, M) {
    this.acceptsBooleans = l === 2 || l === 3 || l === 4, this.attributeName = v, this.attributeNamespace = D, this.mustUseProperty = f, this.propertyName = n, this.type = l, this.sanitizeURL = O, this.removeEmptyString = M;
  }
  var w = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    w[n] = new S(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var l = n[0];
    w[l] = new S(l, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    w[n] = new S(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    w[n] = new S(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    w[n] = new S(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    w[n] = new S(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    w[n] = new S(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    w[n] = new S(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    w[n] = new S(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var h = /[\-:]([a-z])/g;
  function I(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var l = n.replace(
      h,
      I
    );
    w[l] = new S(l, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var l = n.replace(h, I);
    w[l] = new S(l, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var l = n.replace(h, I);
    w[l] = new S(l, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    w[n] = new S(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), w.xlinkHref = new S("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    w[n] = new S(n, 1, !1, n.toLowerCase(), null, !0, !0);
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
  }, z = ["Webkit", "ms", "Moz", "O"];
  Object.keys(C).forEach(function(n) {
    z.forEach(function(l) {
      l = l + n.charAt(0).toUpperCase() + n.substring(1), C[l] = C[n];
    });
  });
  var Y = /["'&<>]/;
  function E(n) {
    if (typeof n == "boolean" || typeof n == "number") return "" + n;
    n = "" + n;
    var l = Y.exec(n);
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
  var k = /([A-Z])/g, P = /^ms-/, q = Array.isArray;
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
          var O = E(v);
          D = E(("" + D).trim());
        } else {
          O = v;
          var M = H.get(O);
          M !== void 0 || (M = E(O.replace(k, "-$1").toLowerCase().replace(P, "-ms-")), H.set(O, M)), O = M, D = typeof D == "number" ? D === 0 || r.call(C, v) ? "" + D : D + "px" : E(("" + D).trim());
        }
        l ? (l = !1, n.push(' style="', O, ":", D)) : n.push(";", O, ":", D);
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
  function Se(n, l, f) {
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
    var D = f = null, O;
    for (O in l) if (r.call(l, O)) {
      var M = l[O];
      if (M != null) switch (O) {
        case "children":
          f = M;
          break;
        case "dangerouslySetInnerHTML":
          D = M;
          break;
        default:
          ae(n, v, O, M);
      }
    }
    return n.push(">"), Se(n, D, f), typeof f == "string" ? (n.push(E(f)), null) : f;
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
        var O = null, M = null;
        for (xe in f) if (r.call(f, xe)) {
          var Z = f[xe];
          if (Z != null) switch (xe) {
            case "children":
              O = Z;
              break;
            case "dangerouslySetInnerHTML":
              M = Z;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              ae(n, v, xe, Z);
          }
        }
        return n.push(">"), Se(n, M, O), O;
      case "option":
        M = D.selectedValue, n.push(me("option"));
        var pe = Z = null, be = null, xe = null;
        for (O in f) if (r.call(f, O)) {
          var rt = f[O];
          if (rt != null) switch (O) {
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
              ae(n, v, O, rt);
          }
        }
        if (M != null) if (f = pe !== null ? "" + pe : Ie(Z), q(M)) {
          for (v = 0; v < M.length; v++)
            if ("" + M[v] === f) {
              n.push(' selected=""');
              break;
            }
        } else "" + M === f && n.push(' selected=""');
        else be && n.push(' selected=""');
        return n.push(">"), Se(n, xe, Z), Z;
      case "textarea":
        n.push(me("textarea")), xe = M = O = null;
        for (Z in f) if (r.call(f, Z) && (pe = f[Z], pe != null)) switch (Z) {
          case "children":
            xe = pe;
            break;
          case "value":
            O = pe;
            break;
          case "defaultValue":
            M = pe;
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
        if (O === null && M !== null && (O = M), n.push(">"), xe != null) {
          if (O != null) throw Error(t(92));
          if (q(xe) && 1 < xe.length) throw Error(t(93));
          O = "" + xe;
        }
        return typeof O == "string" && O[0] === `
` && n.push(`
`), O !== null && n.push(E("" + O)), null;
      case "input":
        n.push(me("input")), pe = xe = Z = O = null;
        for (M in f) if (r.call(f, M) && (be = f[M], be != null)) switch (M) {
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
            O = be;
            break;
          default:
            ae(n, v, M, be);
        }
        return xe !== null ? ae(n, v, "checked", xe) : pe !== null && ae(n, v, "checked", pe), O !== null ? ae(n, v, "value", O) : Z !== null && ae(n, v, "value", Z), n.push("/>"), null;
      case "menuitem":
        n.push(me("menuitem"));
        for (var Vt in f) if (r.call(f, Vt) && (O = f[Vt], O != null)) switch (Vt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            ae(n, v, Vt, O);
        }
        return n.push(">"), null;
      case "title":
        n.push(me("title")), O = null;
        for (rt in f) if (r.call(f, rt) && (M = f[rt], M != null)) switch (rt) {
          case "children":
            O = M;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(434));
          default:
            ae(n, v, rt, M);
        }
        return n.push(">"), O;
      case "listing":
      case "pre":
        n.push(me(l)), M = O = null;
        for (pe in f) if (r.call(f, pe) && (Z = f[pe], Z != null)) switch (pe) {
          case "children":
            O = Z;
            break;
          case "dangerouslySetInnerHTML":
            M = Z;
            break;
          default:
            ae(n, v, pe, Z);
        }
        if (n.push(">"), M != null) {
          if (O != null) throw Error(t(60));
          if (typeof M != "object" || !("__html" in M)) throw Error(t(61));
          f = M.__html, f != null && (typeof f == "string" && 0 < f.length && f[0] === `
` ? n.push(`
`, f) : n.push("" + f));
        }
        return typeof O == "string" && O[0] === `
` && n.push(`
`), O;
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
        for (var Xt in f) if (r.call(f, Xt) && (O = f[Xt], O != null)) switch (Xt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, l));
          default:
            ae(n, v, Xt, O);
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
        n.push(me(l)), M = O = null;
        for (be in f) if (r.call(f, be) && (Z = f[be], Z != null)) switch (be) {
          case "children":
            O = Z;
            break;
          case "dangerouslySetInnerHTML":
            M = Z;
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
        return n.push(">"), Se(n, M, O), O;
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
  var se = Object.assign, j = Symbol.for("react.element"), A = Symbol.for("react.portal"), F = Symbol.for("react.fragment"), L = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), ee = Symbol.for("react.provider"), _ = Symbol.for("react.context"), ie = Symbol.for("react.forward_ref"), Q = Symbol.for("react.suspense"), te = Symbol.for("react.suspense_list"), X = Symbol.for("react.memo"), ne = Symbol.for("react.lazy"), de = Symbol.for("react.scope"), J = Symbol.for("react.debug_trace_mode"), ge = Symbol.for("react.legacy_hidden"), re = Symbol.for("react.default_value"), le = Symbol.iterator;
  function Ue(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case F:
        return "Fragment";
      case A:
        return "Portal";
      case m:
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
    var O = { queue: [], replace: !1 };
    n._reactInternals = O;
    var M = l.contextType;
    if (n.context = typeof M == "object" && M !== null ? M._currentValue2 : v, M = l.getDerivedStateFromProps, typeof M == "function" && (M = M(f, D), D = M == null ? D : se({}, D, M), n.state = D), typeof l.getDerivedStateFromProps != "function" && typeof n.getSnapshotBeforeUpdate != "function" && (typeof n.UNSAFE_componentWillMount == "function" || typeof n.componentWillMount == "function")) if (l = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), l !== n.state && er.enqueueReplaceState(n, n.state, null), O.queue !== null && 0 < O.queue.length) if (l = O.queue, M = O.replace, O.queue = null, O.replace = !1, M && l.length === 1) n.state = l[0];
    else {
      for (O = M ? l[0] : n.state, D = !0, M = M ? 1 : 0; M < l.length; M++) {
        var Z = l[M];
        Z = typeof Z == "function" ? Z.call(n, O, f, v) : Z, Z != null && (D ? (D = !1, O = se({}, O, Z)) : se(O, Z));
      }
      n.state = O;
    }
    else O.queue = null;
  }
  var Ut = { id: 1, overflow: "" };
  function Ht(n, l, f) {
    var v = n.id;
    n = n.overflow;
    var D = 32 - pt(v) - 1;
    v &= ~(1 << D), f += 1;
    var O = 32 - pt(l) + D;
    if (30 < O) {
      var M = D - D % 5;
      return O = (v & (1 << M) - 1).toString(32), v >>= M, D -= M, { id: 1 << 32 - pt(l) + D | f << D | v, overflow: O + n };
    }
    return { id: 1 << O | f << D | v, overflow: n };
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
  function ur(n, l, f, v, D, O, M, Z, pe) {
    var be = [], xe = /* @__PURE__ */ new Set();
    return l = { destination: null, responseState: l, progressiveChunkSize: v, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: xe, pingedTasks: be, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: D === void 0 ? cr : D, onAllReady: Ot, onShellReady: M === void 0 ? Ot : M, onShellError: Ot, onFatalError: Ot }, f = ir(l, 0, null, f, !1, !1), f.parentFlushed = !0, n = Gt(l, n, null, f, xe, ce, null, Ut), be.push(n), l;
  }
  function Gt(n, l, f, v, D, O, M, Z) {
    n.allPendingTasks++, f === null ? n.pendingRootTasks++ : f.pendingTasks++;
    var pe = { node: l, ping: function() {
      var be = n.pingedTasks;
      be.push(pe), be.length === 1 && xr(n);
    }, blockedBoundary: f, blockedSegment: v, abortSet: D, legacyContext: O, context: M, treeContext: Z };
    return D.add(pe), pe;
  }
  function ir(n, l, f, v, D, O) {
    return { status: 0, id: -1, index: l, parentFlushed: !1, chunks: [], children: [], formatContext: v, boundary: f, lastPushedText: D, textEmbedded: O };
  }
  function p(n, l) {
    if (n = n.onError(l), n != null && typeof n != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof n + '" instead');
    return n;
  }
  function g(n, l) {
    var f = n.onShellError;
    f(l), f = n.onFatalError, f(l), n.destination !== null ? (n.status = 2, n.destination.destroy(l)) : (n.status = 1, n.fatalError = l);
  }
  function T(n, l, f, v, D) {
    for (ht = {}, vt = l, qt = 0, n = f(v, D); rr; ) rr = !1, qt = 0, ot += 1, Le = null, n = f(v, D);
    return Yt(), n;
  }
  function V(n, l, f, v) {
    var D = f.render(), O = v.childContextTypes;
    if (O != null) {
      var M = l.legacyContext;
      if (typeof f.getChildContext != "function") v = M;
      else {
        f = f.getChildContext();
        for (var Z in f) if (!(Z in O)) throw Error(t(108, Ue(v) || "Unknown", Z));
        v = se({}, M, f);
      }
      l.legacyContext = v, we(n, l, D), l.legacyContext = M;
    } else we(n, l, D);
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
      var O = f.contextType;
      O = new f(v, typeof O == "object" && O !== null ? O._currentValue2 : D), tr(O, f, v, D), V(n, l, O, f);
    } else {
      O = it(f, l.legacyContext), D = T(n, l, f, v, O);
      var M = qt !== 0;
      if (typeof D == "object" && D !== null && typeof D.render == "function" && D.$$typeof === void 0) tr(D, f, v, O), V(n, l, D, f);
      else if (M) {
        v = l.treeContext, l.treeContext = Ht(v, 1, 0);
        try {
          we(n, l, D);
        } finally {
          l.treeContext = v;
        }
      } else we(n, l, D);
    }
    else if (typeof f == "string") {
      switch (D = l.blockedSegment, O = Re(D.chunks, f, v, n.responseState, D.formatContext), D.lastPushedText = !1, M = D.formatContext, D.formatContext = G(M, f, v), Xe(n, l, O), D.formatContext = M, f) {
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
        case m:
        case F:
          we(n, l, v.children);
          return;
        case te:
          we(n, l, v.children);
          return;
        case de:
          throw Error(t(343));
        case Q:
          e: {
            f = l.blockedBoundary, D = l.blockedSegment, O = v.fallback, v = v.children, M = /* @__PURE__ */ new Set();
            var Z = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: M, errorDigest: null }, pe = ir(n, D.chunks.length, Z, D.formatContext, !1, !1);
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
            l = Gt(n, O, f, pe, M, l.legacyContext, l.context, l.treeContext), n.pingedTasks.push(l);
          }
          return;
      }
      if (typeof f == "object" && f !== null) switch (f.$$typeof) {
        case ie:
          if (v = T(n, l, f.render, v, D), qt !== 0) {
            f = l.treeContext, l.treeContext = Ht(f, 1, 0);
            try {
              we(n, l, v);
            } finally {
              l.treeContext = f;
            }
          } else we(n, l, v);
          return;
        case X:
          f = f.type, v = ye(f, v), ve(n, l, f, v, D);
          return;
        case ee:
          if (D = v.children, f = f._context, v = v.value, O = f._currentValue2, f._currentValue2 = v, M = We, We = v = { parent: M, depth: M === null ? 0 : M.depth + 1, context: f, parentValue: O, value: v }, l.context = v, we(n, l, D), n = We, n === null) throw Error(t(403));
          v = n.parentValue, n.context._currentValue2 = v === re ? n.context._defaultValue : v, n = We = n.parent, l.context = n;
          return;
        case _:
          v = v.children, v = v(f._currentValue2), we(n, l, v);
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
  function we(n, l, f) {
    if (l.node = f, typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case j:
          ve(n, l, f.type, f.props, f.ref);
          return;
        case A:
          throw Error(t(257));
        case ne:
          var v = f._init;
          f = v(f._payload), we(n, l, f);
          return;
      }
      if (q(f)) {
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
      var O = l.treeContext;
      l.treeContext = Ht(O, v, D);
      try {
        Xe(n, l, f[D]);
      } finally {
        l.treeContext = O;
      }
    }
  }
  function Xe(n, l, f) {
    var v = l.blockedSegment.formatContext, D = l.legacyContext, O = l.context;
    try {
      return we(n, l, f);
    } catch (pe) {
      if (Yt(), typeof pe == "object" && pe !== null && typeof pe.then == "function") {
        f = pe;
        var M = l.blockedSegment, Z = ir(n, M.chunks.length, null, M.formatContext, M.lastPushedText, !0);
        M.children.push(Z), M.lastPushedText = !1, n = Gt(n, l.node, l.blockedBoundary, Z, l.abortSet, l.legacyContext, l.context, l.treeContext).ping, f.then(n, n), l.blockedSegment.formatContext = v, l.legacyContext = D, l.context = O, Pe(O);
      } else throw l.blockedSegment.formatContext = v, l.legacyContext = D, l.context = O, Pe(O), pe;
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
  function xr(n) {
    if (n.status !== 2) {
      var l = We, f = Qe.current;
      Qe.current = jt;
      var v = Mt;
      Mt = n.responseState;
      try {
        var D = n.pingedTasks, O;
        for (O = 0; O < D.length; O++) {
          var M = D[O], Z = n, pe = M.blockedSegment;
          if (pe.status === 0) {
            Pe(M.context);
            try {
              we(Z, M, M.node), Z.responseState.generateStaticMarkup || pe.lastPushedText && pe.textEmbedded && pe.chunks.push("<!-- -->"), M.abortSet.delete(M), pe.status = 1, Rt(Z, M.blockedBoundary, pe);
            } catch (It) {
              if (Yt(), typeof It == "object" && It !== null && typeof It.then == "function") {
                var be = M.ping;
                It.then(be, be);
              } else {
                M.abortSet.delete(M), pe.status = 4;
                var xe = M.blockedBoundary, rt = It, Vt = p(Z, rt);
                if (xe === null ? g(Z, rt) : (xe.pendingTasks--, xe.forceClientRender || (xe.forceClientRender = !0, xe.errorDigest = Vt, xe.parentFlushed && Z.clientRenderedBoundaries.push(xe))), Z.allPendingTasks--, Z.allPendingTasks === 0) {
                  var Xt = Z.onAllReady;
                  Xt();
                }
              }
            } finally {
            }
          }
        }
        D.splice(0, O), n.destination !== null && Dr(n, n.destination);
      } catch (It) {
        p(n, It), g(n, It);
      } finally {
        Mt = v, Qe.current = f, f === jt && Pe(l);
      }
    }
  }
  function Er(n, l, f) {
    switch (f.parentFlushed = !0, f.status) {
      case 0:
        var v = f.id = n.nextSegmentId++;
        return f.lastPushedText = !1, f.textEmbedded = !1, n = n.responseState, l.push('<template id="'), l.push(n.placeholderPrefix), n = v.toString(16), l.push(n), l.push('"></template>');
      case 1:
        f.status = 2;
        var D = !0;
        v = f.chunks;
        var O = 0;
        f = f.children;
        for (var M = 0; M < f.length; M++) {
          for (D = f[M]; O < D.index; O++) l.push(v[O]);
          D = _r(n, l, D);
        }
        for (; O < v.length - 1; O++) l.push(v[O]);
        return O < v.length && (D = l.push(v[O])), D;
      default:
        throw Error(t(390));
    }
  }
  function _r(n, l, f) {
    var v = f.boundary;
    if (v === null) return Er(n, l, f);
    if (v.parentFlushed = !0, v.forceClientRender) return n.responseState.generateStaticMarkup || (v = v.errorDigest, l.push("<!--$!-->"), l.push("<template"), v && (l.push(' data-dgst="'), v = E(v), l.push(v), l.push('"')), l.push("></template>")), Er(n, l, f), n = n.responseState.generateStaticMarkup ? !0 : l.push("<!--/$-->"), n;
    if (0 < v.pendingTasks) {
      v.rootSegmentID = n.nextSegmentId++, 0 < v.completedSegments.length && n.partialBoundaries.push(v);
      var D = n.responseState, O = D.nextSuspenseID++;
      return D = D.boundaryPrefix + O.toString(16), v = v.id = D, Ne(l, n.responseState, v), Er(n, l, f), l.push("<!--/$-->");
    }
    if (v.byteSize > n.progressiveChunkSize) return v.rootSegmentID = n.nextSegmentId++, n.completedBoundaries.push(v), Ne(l, n.responseState, v.id), Er(n, l, f), l.push("<!--/$-->");
    if (n.responseState.generateStaticMarkup || l.push("<!--$-->"), f = v.completedSegments, f.length !== 1) throw Error(t(391));
    return _r(n, l, f[0]), n = n.responseState.generateStaticMarkup ? !0 : l.push("<!--/$-->"), n;
  }
  function $r(n, l, f) {
    return Te(l, n.responseState, f.formatContext, f.id), _r(n, l, f), st(l, f.formatContext);
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
        _r(n, l, f), n.completedRootSegment = null;
        var v = n.responseState.bootstrapChunks;
        for (f = 0; f < v.length - 1; f++) l.push(v[f]);
        f < v.length && l.push(v[f]);
      }
      var D = n.clientRenderedBoundaries, O;
      for (O = 0; O < D.length; O++) {
        var M = D[O];
        v = l;
        var Z = n.responseState, pe = M.id, be = M.errorDigest, xe = M.errorMessage, rt = M.errorComponentStack;
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
          n.destination = null, O++, D.splice(0, O);
          return;
        }
      }
      D.splice(0, O);
      var Tr = n.completedBoundaries;
      for (O = 0; O < Tr.length; O++) if (!Ur(n, l, Tr[O])) {
        n.destination = null, O++, Tr.splice(0, O);
        return;
      }
      Tr.splice(0, O);
      var dr = n.partialBoundaries;
      for (O = 0; O < dr.length; O++) {
        var Wr = dr[O];
        e: {
          D = n, M = l;
          var Cr = Wr.completedSegments;
          for (Z = 0; Z < Cr.length; Z++) if (!Hr(D, M, Wr, Cr[Z])) {
            Z++, Cr.splice(0, Z);
            var Sn = !1;
            break e;
          }
          Cr.splice(0, Z), Sn = !0;
        }
        if (!Sn) {
          n.destination = null, O++, dr.splice(0, O);
          return;
        }
      }
      dr.splice(0, O);
      var gr = n.completedBoundaries;
      for (O = 0; O < gr.length; O++) if (!Ur(n, l, gr[O])) {
        n.destination = null, O++, gr.splice(0, O);
        return;
      }
      gr.splice(0, O);
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
      p(n, v), g(n, v);
    }
  }
  function wn() {
  }
  function Br(n, l, f, v) {
    var D = !1, O = null, M = "", Z = { push: function(be) {
      return be !== null && (M += be), !0;
    }, destroy: function(be) {
      D = !0, O = be;
    } }, pe = !1;
    if (n = ur(n, Be(f, l ? l.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, wn, void 0, function() {
      pe = !0;
    }), xr(n), vn(n, v), n.status === 1) n.status = 2, Z.destroy(n.fatalError);
    else if (n.status !== 2 && n.destination === null) {
      n.destination = Z;
      try {
        Dr(n, Z);
      } catch (be) {
        p(n, be), g(n, be);
      }
    }
    if (D) throw O;
    if (!pe) throw Error(t(426));
    return M;
  }
  return Or.renderToNodeStream = function() {
    throw Error(t(207));
  }, Or.renderToStaticMarkup = function(n, l) {
    return Br(n, l, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Or.renderToStaticNodeStream = function() {
    throw Error(t(208));
  }, Or.renderToString = function(n, l) {
    return Br(n, l, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Or.version = "18.3.1", Or;
}
var zn = {}, ho;
function bc() {
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
  var S = new TextEncoder();
  function w(a) {
    return S.encode(a);
  }
  function h(a) {
    return S.encode(a);
  }
  function I(a, s) {
    typeof a.error == "function" ? a.error(s) : a.close();
  }
  var C = Object.prototype.hasOwnProperty, z = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Y = {}, E = {};
  function k(a) {
    return C.call(E, a) ? !0 : C.call(Y, a) ? !1 : z.test(a) ? E[a] = !0 : (Y[a] = !0, !1);
  }
  function P(a, s, d, b, N, R, $) {
    this.acceptsBooleans = s === 2 || s === 3 || s === 4, this.attributeName = b, this.attributeNamespace = N, this.mustUseProperty = d, this.propertyName = a, this.type = s, this.sanitizeURL = R, this.removeEmptyString = $;
  }
  var q = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
    q[a] = new P(a, 0, !1, a, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
    var s = a[0];
    q[s] = new P(s, 1, !1, a[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
    q[a] = new P(a, 2, !1, a.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
    q[a] = new P(a, 2, !1, a, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
    q[a] = new P(a, 3, !1, a.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(a) {
    q[a] = new P(a, 3, !0, a, null, !1, !1);
  }), ["capture", "download"].forEach(function(a) {
    q[a] = new P(a, 4, !1, a, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(a) {
    q[a] = new P(a, 6, !1, a, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(a) {
    q[a] = new P(a, 5, !1, a.toLowerCase(), null, !1, !1);
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
    q[s] = new P(s, 1, !1, a, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
    var s = a.replace(U, G);
    q[s] = new P(s, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
    var s = a.replace(U, G);
    q[s] = new P(s, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(a) {
    q[a] = new P(a, 1, !1, a.toLowerCase(), null, !1, !1);
  }), q.xlinkHref = new P("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(a) {
    q[a] = new P(a, 1, !1, a.toLowerCase(), null, !0, !0);
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
  function Se(a) {
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
  var Ie = /([A-Z])/g, Fe = /^ms-/, Ve = Array.isArray, ue = h("<script>"), me = h("<\/script>"), Re = h('<script src="'), Ne = h('<script type="module" src="'), Te = h('" async=""><\/script>'), st = /(<\/|<)(s)(cript)/gi;
  function je(a, s, d, b) {
    return "" + s + (d === "s" ? "\\u0073" : "\\u0053") + b;
  }
  function Oe(a, s, d, b, N) {
    a = a === void 0 ? "" : a, s = s === void 0 ? ue : h('<script nonce="' + Se(s) + '">');
    var R = [];
    if (d !== void 0 && R.push(s, w(("" + d).replace(st, je)), me), b !== void 0) for (d = 0; d < b.length; d++) R.push(Re, w(Se(b[d])), Te);
    if (N !== void 0) for (b = 0; b < N.length; b++) R.push(Ne, w(Se(N[b])), Te);
    return { bootstrapChunks: R, startInlineScript: s, placeholderPrefix: h(a + "P:"), segmentPrefix: h(a + "S:"), boundaryPrefix: a + "B:", idPrefix: a, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
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
  var j = h("<!-- -->");
  function A(a, s, d, b) {
    return s === "" ? b : (b && a.push(j), a.push(w(Se(s))), !0);
  }
  var F = /* @__PURE__ */ new Map(), L = h(' style="'), m = h(":"), ee = h(";");
  function _(a, s, d) {
    if (typeof d != "object") throw Error(t(62));
    s = !0;
    for (var b in d) if (C.call(d, b)) {
      var N = d[b];
      if (N != null && typeof N != "boolean" && N !== "") {
        if (b.indexOf("--") === 0) {
          var R = w(Se(b));
          N = w(Se(("" + N).trim()));
        } else {
          R = b;
          var $ = F.get(R);
          $ !== void 0 || ($ = h(Se(R.replace(Ie, "-$1").toLowerCase().replace(Fe, "-ms-"))), F.set(R, $)), R = $, N = typeof N == "number" ? N === 0 || C.call(H, b) ? w("" + N) : w(N + "px") : w(Se(("" + N).trim()));
        }
        s ? (s = !1, a.push(L, R, m, N)) : a.push(ee, R, m, N);
      }
    }
    s || a.push(te);
  }
  var ie = h(" "), Q = h('="'), te = h('"'), X = h('=""');
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
      if (s = q.hasOwnProperty(d) ? q[d] : null, s !== null) {
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
            b === !0 ? a.push(ie, d, X) : b !== !1 && a.push(ie, d, Q, w(Se(b)), te);
            break;
          case 5:
            isNaN(b) || a.push(ie, d, Q, w(Se(b)), te);
            break;
          case 6:
            !isNaN(b) && 1 <= b && a.push(ie, d, Q, w(Se(b)), te);
            break;
          default:
            s.sanitizeURL && (b = "" + b), a.push(ie, d, Q, w(Se(b)), te);
        }
      } else if (k(d)) {
        switch (typeof b) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (s = d.toLowerCase().slice(0, 5), s !== "data-" && s !== "aria-") return;
        }
        a.push(ie, w(d), Q, w(Se(b)), te);
      }
    }
  }
  var de = h(">"), J = h("/>");
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
  var le = h(' selected=""');
  function Ue(a, s, d, b) {
    a.push(ke(d));
    var N = d = null, R;
    for (R in s) if (C.call(s, R)) {
      var $ = s[R];
      if ($ != null) switch (R) {
        case "children":
          d = $;
          break;
        case "dangerouslySetInnerHTML":
          N = $;
          break;
        default:
          ne(a, b, R, $);
      }
    }
    return a.push(de), ge(a, N, d), typeof d == "string" ? (a.push(w(Se(d))), null) : d;
  }
  var ce = h(`
`), it = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, We = /* @__PURE__ */ new Map();
  function ke(a) {
    var s = We.get(a);
    if (s === void 0) {
      if (!it.test(a)) throw Error(t(65, a));
      s = h("<" + a), We.set(a, s);
    }
    return s;
  }
  var W = h("<!DOCTYPE html>");
  function oe(a, s, d, b, N) {
    switch (s) {
      case "select":
        a.push(ke("select"));
        var R = null, $ = null;
        for (Ee in d) if (C.call(d, Ee)) {
          var K = d[Ee];
          if (K != null) switch (Ee) {
            case "children":
              R = K;
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
        return a.push(de), ge(a, $, R), R;
      case "option":
        $ = N.selectedValue, a.push(ke("option"));
        var he = K = null, _e = null, Ee = null;
        for (R in d) if (C.call(d, R)) {
          var et = d[R];
          if (et != null) switch (R) {
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
              ne(a, b, R, et);
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
        a.push(ke("textarea")), Ee = $ = R = null;
        for (K in d) if (C.call(d, K) && (he = d[K], he != null)) switch (K) {
          case "children":
            Ee = he;
            break;
          case "value":
            R = he;
            break;
          case "defaultValue":
            $ = he;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(91));
          default:
            ne(a, b, K, he);
        }
        if (R === null && $ !== null && (R = $), a.push(de), Ee != null) {
          if (R != null) throw Error(t(92));
          if (Ve(Ee) && 1 < Ee.length) throw Error(t(93));
          R = "" + Ee;
        }
        return typeof R == "string" && R[0] === `
` && a.push(ce), R !== null && a.push(w(Se("" + R))), null;
      case "input":
        a.push(ke("input")), he = Ee = K = R = null;
        for ($ in d) if (C.call(d, $) && (_e = d[$], _e != null)) switch ($) {
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
            R = _e;
            break;
          default:
            ne(a, b, $, _e);
        }
        return Ee !== null ? ne(
          a,
          b,
          "checked",
          Ee
        ) : he !== null && ne(a, b, "checked", he), R !== null ? ne(a, b, "value", R) : K !== null && ne(a, b, "value", K), a.push(J), null;
      case "menuitem":
        a.push(ke("menuitem"));
        for (var Dt in d) if (C.call(d, Dt) && (R = d[Dt], R != null)) switch (Dt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            ne(a, b, Dt, R);
        }
        return a.push(de), null;
      case "title":
        a.push(ke("title")), R = null;
        for (et in d) if (C.call(d, et) && ($ = d[et], $ != null)) switch (et) {
          case "children":
            R = $;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(434));
          default:
            ne(a, b, et, $);
        }
        return a.push(de), R;
      case "listing":
      case "pre":
        a.push(ke(s)), $ = R = null;
        for (he in d) if (C.call(d, he) && (K = d[he], K != null)) switch (he) {
          case "children":
            R = K;
            break;
          case "dangerouslySetInnerHTML":
            $ = K;
            break;
          default:
            ne(a, b, he, K);
        }
        if (a.push(de), $ != null) {
          if (R != null) throw Error(t(60));
          if (typeof $ != "object" || !("__html" in $)) throw Error(t(61));
          d = $.__html, d != null && (typeof d == "string" && 0 < d.length && d[0] === `
` ? a.push(ce, w(d)) : a.push(w("" + d)));
        }
        return typeof R == "string" && R[0] === `
` && a.push(ce), R;
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
        for (var Kt in d) if (C.call(d, Kt) && (R = d[Kt], R != null)) switch (Kt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, s));
          default:
            ne(a, b, Kt, R);
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
        a.push(ke(s)), $ = R = null;
        for (_e in d) if (C.call(d, _e) && (K = d[_e], K != null)) switch (_e) {
          case "children":
            R = K;
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
            k(_e) && typeof K != "function" && typeof K != "symbol" && a.push(ie, w(_e), Q, w(Se(K)), te);
        }
        return a.push(de), ge(a, $, R), R;
    }
  }
  var Ke = h("</"), De = h(">"), Pe = h('<template id="'), er = h('"></template>'), tr = h("<!--$-->"), Ut = h('<!--$?--><template id="'), Ht = h('"></template>'), pt = h("<!--$!-->"), Tt = h("<!--/$-->"), nt = h("<template"), ut = h('"'), Bt = h(' data-dgst="');
  h(' data-msg="'), h(' data-stck="');
  var Wt = h("></template>");
  function ht(a, s, d) {
    if (c(a, Ut), d === null) throw Error(t(395));
    return c(a, d), u(a, Ht);
  }
  var vt = h('<div hidden id="'), mt = h('">'), Le = h("</div>"), lt = h('<svg aria-hidden="true" style="display:none" id="'), rr = h('">'), qt = h("</svg>"), fe = h('<math aria-hidden="true" style="display:none" id="'), ot = h('">'), Ct = h("</math>"), nr = h('<table hidden id="'), At = h('">'), Yt = h("</table>"), ar = h('<table hidden><tbody id="'), mr = h('">'), at = h("</tbody></table>"), ct = h('<table hidden><tr id="'), lr = h('">'), Ft = h("</tr></table>"), jt = h('<table hidden><colgroup id="'), Mt = h('">'), Qe = h("</colgroup></table>");
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
  var ur = h('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), Gt = h('$RS("'), ir = h('","'), p = h('")<\/script>'), g = h('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), T = h('$RC("'), V = h('","'), ye = h('")<\/script>'), ve = h('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), we = h('$RX("'), Me = h('"'), Xe = h(")<\/script>"), gt = h(","), Je = /[<\u2028\u2029]/g;
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
  var Rt = Object.assign, xr = Symbol.for("react.element"), Er = Symbol.for("react.portal"), _r = Symbol.for("react.fragment"), $r = Symbol.for("react.strict_mode"), Ur = Symbol.for("react.profiler"), Hr = Symbol.for("react.provider"), Dr = Symbol.for("react.context"), vn = Symbol.for("react.forward_ref"), wn = Symbol.for("react.suspense"), Br = Symbol.for("react.suspense_list"), n = Symbol.for("react.memo"), l = Symbol.for("react.lazy"), f = Symbol.for("react.scope"), v = Symbol.for("react.debug_trace_mode"), D = Symbol.for("react.legacy_hidden"), O = Symbol.for("react.default_value"), M = Symbol.iterator;
  function Z(a) {
    if (a == null) return null;
    if (typeof a == "function") return a.displayName || a.name || null;
    if (typeof a == "string") return a;
    switch (a) {
      case _r:
        return "Fragment";
      case Er:
        return "Portal";
      case Ur:
        return "Profiler";
      case $r:
        return "StrictMode";
      case wn:
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
  function Tr(a, s) {
    var d = s.parent;
    if (d === null) throw Error(t(402));
    a.depth === d.depth ? rt(a, d) : Tr(a, d), s.context._currentValue = s.value;
  }
  function dr(a) {
    var s = xe;
    s !== a && (s === null ? Xt(a) : a === null ? Vt(s) : s.depth === a.depth ? rt(s, a) : s.depth > a.depth ? It(s, a) : Tr(s, a), xe = a);
  }
  var Wr = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(a, s) {
    a = a._reactInternals, a.queue !== null && a.queue.push(s);
  }, enqueueReplaceState: function(a, s) {
    a = a._reactInternals, a.replace = !0, a.queue = [s];
  }, enqueueForceUpdate: function() {
  } };
  function Cr(a, s, d, b) {
    var N = a.state !== void 0 ? a.state : null;
    a.updater = Wr, a.props = d, a.state = N;
    var R = { queue: [], replace: !1 };
    a._reactInternals = R;
    var $ = s.contextType;
    if (a.context = typeof $ == "object" && $ !== null ? $._currentValue : b, $ = s.getDerivedStateFromProps, typeof $ == "function" && ($ = $(d, N), N = $ == null ? N : Rt({}, N, $), a.state = N), typeof s.getDerivedStateFromProps != "function" && typeof a.getSnapshotBeforeUpdate != "function" && (typeof a.UNSAFE_componentWillMount == "function" || typeof a.componentWillMount == "function")) if (s = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), s !== a.state && Wr.enqueueReplaceState(a, a.state, null), R.queue !== null && 0 < R.queue.length) if (s = R.queue, $ = R.replace, R.queue = null, R.replace = !1, $ && s.length === 1) a.state = s[0];
    else {
      for (R = $ ? s[0] : a.state, N = !0, $ = $ ? 1 : 0; $ < s.length; $++) {
        var K = s[$];
        K = typeof K == "function" ? K.call(a, R, d, b) : K, K != null && (N ? (N = !1, R = Rt({}, R, K)) : Rt(R, K));
      }
      a.state = R;
    }
    else R.queue = null;
  }
  var Sn = { id: 1, overflow: "" };
  function gr(a, s, d) {
    var b = a.id;
    a = a.overflow;
    var N = 32 - kn(b) - 1;
    b &= ~(1 << N), d += 1;
    var R = 32 - kn(s) + N;
    if (30 < R) {
      var $ = N - N % 5;
      return R = (b & (1 << $) - 1).toString(32), b >>= $, N -= $, { id: 1 << 32 - kn(s) + N | d << N | b, overflow: R + a };
    }
    return { id: 1 << R | d << N | b, overflow: a };
  }
  var kn = Math.clz32 ? Math.clz32 : Ks, Vs = Math.log, Xs = Math.LN2;
  function Ks(a) {
    return a >>>= 0, a === 0 ? 32 : 31 - (Vs(a) / Xs | 0) | 0;
  }
  function Js(a, s) {
    return a === s && (a !== 0 || 1 / a === 1 / s) || a !== a && s !== s;
  }
  var Zs = typeof Object.is == "function" ? Object.is : Js, fr = null, la = null, xn = null, Ze = null, qr = !1, En = !1, Yr = 0, yr = null, _n = 0;
  function Ar() {
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
    if (fr = Ar(), Ze = ca(), qr) {
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
    return a = a === bi ? typeof s == "function" ? s() : s : d !== void 0 ? d(s) : s, Ze.memoizedState = a, a = Ze.queue = { last: null, dispatch: null }, a = a.dispatch = Qs.bind(null, fr, a), [Ze.memoizedState, a];
  }
  function wi(a, s) {
    if (fr = Ar(), Ze = ca(), s = s === void 0 ? null : s, Ze !== null) {
      var d = Ze.memoizedState;
      if (d !== null && s !== null) {
        var b = d[1];
        e: if (b === null) b = !1;
        else {
          for (var N = 0; N < b.length && N < s.length; N++) if (!Zs(s[N], b[N])) {
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
  function Qs(a, s, d) {
    if (25 <= _n) throw Error(t(301));
    if (a === fr) if (En = !0, a = { action: d, next: null }, yr === null && (yr = /* @__PURE__ */ new Map()), d = yr.get(s), d === void 0) yr.set(s, a);
    else {
      for (s = d; s.next !== null; ) s = s.next;
      s.next = a;
    }
  }
  function el() {
    throw Error(t(394));
  }
  function Tn() {
  }
  var Si = { readContext: function(a) {
    return a._currentValue;
  }, useContext: function(a) {
    return Ar(), a._currentValue;
  }, useMemo: wi, useReducer: vi, useRef: function(a) {
    fr = Ar(), Ze = ca();
    var s = Ze.memoizedState;
    return s === null ? (a = { current: a }, Ze.memoizedState = a) : s;
  }, useState: function(a) {
    return vi(bi, a);
  }, useInsertionEffect: Tn, useLayoutEffect: function() {
  }, useCallback: function(a, s) {
    return wi(function() {
      return a;
    }, s);
  }, useImperativeHandle: Tn, useEffect: Tn, useDebugValue: Tn, useDeferredValue: function(a) {
    return Ar(), a;
  }, useTransition: function() {
    return Ar(), [!1, el];
  }, useId: function() {
    var a = la.treeContext, s = a.overflow;
    a = a.id, a = (a & ~(1 << 32 - kn(a) - 1)).toString(32) + s;
    var d = Cn;
    if (d === null) throw Error(t(404));
    return s = Yr++, a = ":" + d.idPrefix + "R" + a, 0 < s && (a += "H" + s.toString(32)), a + ":";
  }, useMutableSource: function(a, s) {
    return Ar(), s(a._source);
  }, useSyncExternalStore: function(a, s, d) {
    if (d === void 0) throw Error(t(407));
    return d();
  } }, Cn = null, da = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function tl(a) {
    return console.error(a), null;
  }
  function Gr() {
  }
  function rl(a, s, d, b, N, R, $, K, he) {
    var _e = [], Ee = /* @__PURE__ */ new Set();
    return s = { destination: null, responseState: s, progressiveChunkSize: b === void 0 ? 12800 : b, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: Ee, pingedTasks: _e, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: N === void 0 ? tl : N, onAllReady: R === void 0 ? Gr : R, onShellReady: $ === void 0 ? Gr : $, onShellError: K === void 0 ? Gr : K, onFatalError: he === void 0 ? Gr : he }, d = An(s, 0, null, d, !1, !1), d.parentFlushed = !0, a = fa(s, a, null, d, Ee, pe, null, Sn), _e.push(a), s;
  }
  function fa(a, s, d, b, N, R, $, K) {
    a.allPendingTasks++, d === null ? a.pendingRootTasks++ : d.pendingTasks++;
    var he = { node: s, ping: function() {
      var _e = a.pingedTasks;
      _e.push(he), _e.length === 1 && Ai(a);
    }, blockedBoundary: d, blockedSegment: b, abortSet: N, legacyContext: R, context: $, treeContext: K };
    return N.add(he), he;
  }
  function An(a, s, d, b, N, R) {
    return { status: 0, id: -1, index: s, parentFlushed: !1, chunks: [], children: [], formatContext: b, boundary: d, lastPushedText: N, textEmbedded: R };
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
    var N = d.render(), R = b.childContextTypes;
    if (R != null) {
      var $ = s.legacyContext;
      if (typeof d.getChildContext != "function") b = $;
      else {
        d = d.getChildContext();
        for (var K in d) if (!(K in R)) throw Error(t(108, Z(b) || "Unknown", K));
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
      var R = d.contextType;
      R = new d(b, typeof R == "object" && R !== null ? R._currentValue : N), Cr(R, d, b, N), xi(a, s, R, d);
    } else {
      R = be(d, s.legacyContext), N = ki(a, s, d, b, R);
      var $ = Yr !== 0;
      if (typeof N == "object" && N !== null && typeof N.render == "function" && N.$$typeof === void 0) Cr(N, d, b, R), xi(a, s, N, d);
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
      switch (N = s.blockedSegment, R = oe(N.chunks, d, b, a.responseState, N.formatContext), N.lastPushedText = !1, $ = N.formatContext, N.formatContext = se($, d, b), ha(a, s, R), N.formatContext = $, d) {
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
        case _r:
          Nt(a, s, b.children);
          return;
        case Br:
          Nt(a, s, b.children);
          return;
        case f:
          throw Error(t(343));
        case wn:
          e: {
            d = s.blockedBoundary, N = s.blockedSegment, R = b.fallback, b = b.children, $ = /* @__PURE__ */ new Set();
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
            s = fa(a, R, d, he, $, s.legacyContext, s.context, s.treeContext), a.pingedTasks.push(s);
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
          if (N = b.children, d = d._context, b = b.value, R = d._currentValue, d._currentValue = b, $ = xe, xe = b = { parent: $, depth: $ === null ? 0 : $.depth + 1, context: d, parentValue: R, value: b }, s.context = b, Nt(a, s, N), a = xe, a === null) throw Error(t(403));
          b = a.parentValue, a.context._currentValue = b === O ? a.context._defaultValue : b, a = xe = a.parent, s.context = a;
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
        case xr:
          pa(a, s, d.type, d.props, d.ref);
          return;
        case Er:
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
      if (d === null || typeof d != "object" ? b = null : (b = M && d[M] || d["@@iterator"], b = typeof b == "function" ? b : null), b && (b = b.call(d))) {
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
    typeof d == "string" ? (b = s.blockedSegment, b.lastPushedText = A(s.blockedSegment.chunks, d, a.responseState, b.lastPushedText)) : typeof d == "number" && (b = s.blockedSegment, b.lastPushedText = A(s.blockedSegment.chunks, "" + d, a.responseState, b.lastPushedText));
  }
  function _i(a, s, d) {
    for (var b = d.length, N = 0; N < b; N++) {
      var R = s.treeContext;
      s.treeContext = gr(R, b, N);
      try {
        ha(a, s, d[N]);
      } finally {
        s.treeContext = R;
      }
    }
  }
  function ha(a, s, d) {
    var b = s.blockedSegment.formatContext, N = s.legacyContext, R = s.context;
    try {
      return Nt(a, s, d);
    } catch (he) {
      if (ua(), typeof he == "object" && he !== null && typeof he.then == "function") {
        d = he;
        var $ = s.blockedSegment, K = An(a, $.chunks.length, null, $.formatContext, $.lastPushedText, !0);
        $.children.push(K), $.lastPushedText = !1, a = fa(a, s.node, s.blockedBoundary, K, s.abortSet, s.legacyContext, s.context, s.treeContext).ping, d.then(a, a), s.blockedSegment.formatContext = b, s.legacyContext = N, s.context = R, dr(R);
      } else throw s.blockedSegment.formatContext = b, s.legacyContext = N, s.context = R, dr(R), he;
    }
  }
  function nl(a) {
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
    } else s.pendingTasks--, s.forceClientRender || (s.pendingTasks === 0 ? (d.parentFlushed && d.status === 1 && Rn(s, d), s.parentFlushed && a.completedBoundaries.push(s), s.fallbackAbortableTasks.forEach(nl, a), s.fallbackAbortableTasks.clear()) : d.parentFlushed && d.status === 1 && (Rn(s, d), s.completedSegments.length === 1 && s.parentFlushed && a.partialBoundaries.push(s)));
    a.allPendingTasks--, a.allPendingTasks === 0 && (a = a.onAllReady, a());
  }
  function Ai(a) {
    if (a.status !== 2) {
      var s = xe, d = da.current;
      da.current = Si;
      var b = Cn;
      Cn = a.responseState;
      try {
        var N = a.pingedTasks, R;
        for (R = 0; R < N.length; R++) {
          var $ = N[R], K = a, he = $.blockedSegment;
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
        N.splice(0, R), a.destination !== null && ma(a, a.destination);
      } catch (Jt) {
        Vr(a, Jt), On(a, Jt);
      } finally {
        Cn = b, da.current = d, d === Si && dr(s);
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
        var R = 0;
        d = d.children;
        for (var $ = 0; $ < d.length; $++) {
          for (N = d[$]; R < N.index; R++) c(s, b[R]);
          N = Nn(a, s, N);
        }
        for (; R < b.length - 1; R++) c(s, b[R]);
        return R < b.length && (N = u(s, b[R])), N;
      default:
        throw Error(t(390));
    }
  }
  function Nn(a, s, d) {
    var b = d.boundary;
    if (b === null) return In(a, s, d);
    if (b.parentFlushed = !0, b.forceClientRender) b = b.errorDigest, u(s, pt), c(s, nt), b && (c(s, Bt), c(s, w(Se(b))), c(s, ut)), u(s, Wt), In(a, s, d);
    else if (0 < b.pendingTasks) {
      b.rootSegmentID = a.nextSegmentId++, 0 < b.completedSegments.length && a.partialBoundaries.push(b);
      var N = a.responseState, R = N.nextSuspenseID++;
      N = h(N.boundaryPrefix + R.toString(16)), b = b.id = N, ht(s, a.responseState, b), In(a, s, d);
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
    if (b.length = 0, a = a.responseState, b = d.id, d = d.rootSegmentID, c(s, a.startInlineScript), a.sentCompleteBoundaryFunction ? c(s, T) : (a.sentCompleteBoundaryFunction = !0, c(s, g)), b === null) throw Error(t(395));
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
      var N = a.clientRenderedBoundaries, R;
      for (R = 0; R < N.length; R++) {
        var $ = N[R];
        b = s;
        var K = a.responseState, he = $.id, _e = $.errorDigest, Ee = $.errorMessage, et = $.errorComponentStack;
        if (c(b, K.startInlineScript), K.sentClientRenderFunction ? c(b, we) : (K.sentClientRenderFunction = !0, c(
          b,
          ve
        )), he === null) throw Error(t(395));
        c(b, he), c(b, Me), (_e || Ee || et) && (c(b, gt), c(b, w(He(_e || "")))), (Ee || et) && (c(b, gt), c(b, w(He(Ee || "")))), et && (c(b, gt), c(b, w(He(et)))), u(b, Xe);
      }
      N.splice(0, R);
      var Dt = a.completedBoundaries;
      for (R = 0; R < Dt.length; R++) Ri(a, s, Dt[R]);
      Dt.splice(0, R), y(s), r = new Uint8Array(512), i = 0;
      var Kt = a.partialBoundaries;
      for (R = 0; R < Kt.length; R++) {
        var Jt = Kt[R];
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
          a.destination = null, R++, Kt.splice(0, R);
          return;
        }
      }
      Kt.splice(0, R);
      var ga = a.completedBoundaries;
      for (R = 0; R < ga.length; R++) Ri(a, s, ga[R]);
      ga.splice(0, R);
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
      var N, R, $ = new Promise(function(Ee, et) {
        R = Ee, N = et;
      }), K = rl(a, Oe(s ? s.identifierPrefix : void 0, s ? s.nonce : void 0, s ? s.bootstrapScriptContent : void 0, s ? s.bootstrapScripts : void 0, s ? s.bootstrapModules : void 0), tt(s ? s.namespaceURI : void 0), s ? s.progressiveChunkSize : void 0, s ? s.onError : void 0, R, function() {
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
function vc() {
  if (mo) return br;
  mo = 1;
  var e, t;
  return e = yc(), t = bc(), br.version = e.version, br.renderToString = e.renderToString, br.renderToStaticMarkup = e.renderToStaticMarkup, br.renderToNodeStream = e.renderToNodeStream, br.renderToStaticNodeStream = e.renderToStaticNodeStream, br.renderToReadableStream = t.renderToReadableStream, br;
}
vc();
const wc = "staticMarkup";
function hs() {
  const e = ll().indexOf(wc) > -1 ? !0 : void 0;
  return {
    isBootstrap: e,
    isReact: e ? void 0 : !0
  };
}
const Nr = ({ gaData: e, prefix: t = "", children: r }) => {
  const { isReact: i } = hs(), { onClick: c, ...u } = r.props;
  if (i)
    return ft.cloneElement(r, {
      ...u,
      onClick: (w) => (e && e.event && e.action && pc(e), c ? c(w) : !0)
    });
  let y = "";
  ["input", "header", "header-input"].includes(t) && (y = `-${t}`);
  const S = {
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
    ...S
  });
}, Sc = oi(
  ({
    id: e,
    parentId: t,
    /** @type {AccordionCard} */
    item: r,
    openCard: i,
    onClick: c,
    gaData: u
  }, y) => {
    var S, w, h, I, C, z;
    const Y = e === i, E = Y ? "open" : "close";
    return /* @__PURE__ */ B.jsxs(
      "div",
      {
        ref: y,
        className: Zt("accordion-item", "mt-3", {
          [`accordion-item-${r.color}`]: r.color,
          "accordion-header-icon": (S = r.content) == null ? void 0 : S.icon
        }),
        children: [
          /* @__PURE__ */ B.jsx("div", { className: "accordion-header", children: /* @__PURE__ */ B.jsx("h4", { children: /* @__PURE__ */ B.jsx(
            Nr,
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
                  className: Zt({ collapsed: !Y }),
                  "data-bs-toggle": "collapse",
                  href: `#card-body-${e}`,
                  type: "button",
                  "aria-expanded": Y,
                  "aria-controls": `card-body-${e}`,
                  onClick: (k) => c(k, e),
                  children: [
                    (w = r.content) != null && w.icon ? /* @__PURE__ */ B.jsxs("span", { className: "accordion-icon", children: [
                      /* @__PURE__ */ B.jsx(
                        "i",
                        {
                          className: `${(h = r.content.icon) == null ? void 0 : h[0]} fa-${(I = r.content.icon) == null ? void 0 : I[1]} me-2`
                        }
                      ),
                      r.content.header
                    ] }) : (C = r.content) == null ? void 0 : C.header,
                    /* @__PURE__ */ B.jsx("i", { className: "fas fa-chevron-up" })
                  ]
                }
              )
            }
          ) }) }),
          ((z = r.content) == null ? void 0 : z.body) && /* @__PURE__ */ B.jsx(
            "div",
            {
              "data-bs-parent": `#${t}`,
              id: `card-body-${e}`,
              className: Zt("collapse", { show: Y }),
              children: /* @__PURE__ */ B.jsx(
                "div",
                {
                  className: "accordion-body",
                  dangerouslySetInnerHTML: Rr(
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
Sc.propTypes = {
  id: o.number,
  // @ts-ignore a technical type mismatch between PropTypes definition and your TypeScript
  item: ps,
  parentId: o.string,
  openCard: o.number,
  onClick: o.func,
  gaData: o.object
};
o.arrayOf(ps).isRequired, o.number;
const go = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, ms = ({
  label: e = "",
  cardTitle: t = "",
  gaData: r,
  ariaLabel: i,
  block: c,
  color: u = "gray",
  disabled: y,
  element: S = "button",
  href: w,
  icon: h,
  innerRef: I,
  onClick: C,
  size: z = "default",
  variant: Y,
  classes: E,
  target: k = "_self",
  ...P
}) => {
  if (Y) {
    const G = {
      borderless: "borderless",
      outline: "outline",
      filled: "filled"
    }, H = Zt("btn", G[Y], {
      [`btn-${G[Y]}-${u}`]: !0,
      "btn-medium": z === "medium",
      "btn-small": z === "small",
      "btn-large": z === "large" || z === "default",
      disabled: y
    });
    let x = S;
    return w && S === "button" && (x = "a"), /* @__PURE__ */ B.jsx(
      Nr,
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
            type: x === "button" && C ? "button" : void 0,
            ...P,
            className: Zt(E) || H,
            href: w,
            ref: I,
            onClick: C,
            "aria-label": i,
            target: x === "a" ? k : null,
            disabled: y,
            children: [
              h && /* @__PURE__ */ B.jsx("i", { className: `${h == null ? void 0 : h[0]} fa-${h == null ? void 0 : h[1]} me-1` }),
              e
            ]
          }
        )
      }
    );
  }
  const q = Zt("btn", {
    [`btn-${u}`]: !0,
    "btn-md": z === "small",
    "btn-sm": z === "xsmall",
    "btn-block": c,
    disabled: y
  });
  let U = S;
  return w && S === "button" && (U = "a"), /* @__PURE__ */ B.jsx(
    Nr,
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
          type: U === "button" && C ? "button" : void 0,
          ...P,
          className: Zt(E) || q,
          href: w,
          ref: I,
          onClick: C,
          "aria-label": i,
          target: U === "a" ? k : null,
          children: [
            h && /* @__PURE__ */ B.jsx("i", { className: `${h == null ? void 0 : h[0]} fa-${h == null ? void 0 : h[1]} me-1` }),
            e
          ]
        }
      )
    }
  );
};
ms.propTypes = {
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
function kc() {
  if (bo) return qe;
  bo = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), u = Symbol.for("react.consumer"), y = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), I = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), z = Symbol.for("react.offscreen"), Y = Symbol.for("react.client.reference");
  function E(k) {
    if (typeof k == "object" && k !== null) {
      var P = k.$$typeof;
      switch (P) {
        case e:
          switch (k = k.type, k) {
            case r:
            case c:
            case i:
            case w:
            case h:
              return k;
            default:
              switch (k = k && k.$$typeof, k) {
                case y:
                case S:
                case C:
                case I:
                  return k;
                case u:
                  return k;
                default:
                  return P;
              }
          }
        case t:
          return P;
      }
    }
  }
  return qe.ContextConsumer = u, qe.ContextProvider = y, qe.Element = e, qe.ForwardRef = S, qe.Fragment = r, qe.Lazy = C, qe.Memo = I, qe.Portal = t, qe.Profiler = c, qe.StrictMode = i, qe.Suspense = w, qe.SuspenseList = h, qe.isContextConsumer = function(k) {
    return E(k) === u;
  }, qe.isContextProvider = function(k) {
    return E(k) === y;
  }, qe.isElement = function(k) {
    return typeof k == "object" && k !== null && k.$$typeof === e;
  }, qe.isForwardRef = function(k) {
    return E(k) === S;
  }, qe.isFragment = function(k) {
    return E(k) === r;
  }, qe.isLazy = function(k) {
    return E(k) === C;
  }, qe.isMemo = function(k) {
    return E(k) === I;
  }, qe.isPortal = function(k) {
    return E(k) === t;
  }, qe.isProfiler = function(k) {
    return E(k) === c;
  }, qe.isStrictMode = function(k) {
    return E(k) === i;
  }, qe.isSuspense = function(k) {
    return E(k) === w;
  }, qe.isSuspenseList = function(k) {
    return E(k) === h;
  }, qe.isValidElementType = function(k) {
    return typeof k == "string" || typeof k == "function" || k === r || k === c || k === i || k === w || k === h || k === z || typeof k == "object" && k !== null && (k.$$typeof === C || k.$$typeof === I || k.$$typeof === y || k.$$typeof === u || k.$$typeof === S || k.$$typeof === Y || k.getModuleId !== void 0);
  }, qe.typeOf = E, qe;
}
var vo;
function xc() {
  return vo || (vo = 1, yo.exports = /* @__PURE__ */ kc()), yo.exports;
}
var gs = /* @__PURE__ */ xc();
function Ec(e) {
  function t(j, A, F, L, m) {
    for (var ee = 0, _ = 0, ie = 0, Q = 0, te, X, ne = 0, de = 0, J, ge = J = te = 0, re = 0, le = 0, Ue = 0, ce = 0, it = F.length, We = it - 1, ke, W = "", oe = "", Ke = "", De = "", Pe; re < it; ) {
      if (X = F.charCodeAt(re), re === We && _ + Q + ie + ee !== 0 && (_ !== 0 && (X = _ === 47 ? 10 : 47), Q = ie = ee = 0, it++, We++), _ + Q + ie + ee === 0) {
        if (re === We && (0 < le && (W = W.replace(z, "")), 0 < W.trim().length)) {
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
            switch (J = F.substring(ce, re), te === 0 && (te = (W = W.replace(C, "").trim()).charCodeAt(0)), te) {
              case 64:
                switch (0 < le && (W = W.replace(z, "")), X = W.charCodeAt(1), X) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    le = A;
                    break;
                  default:
                    le = st;
                }
                if (J = t(A, le, J, X, m + 1), ce = J.length, 0 < Oe && (le = r(st, W, Ue), Pe = S(3, J, le, A, Re, me, ce, X, m, L), W = le.join(""), Pe !== void 0 && (ce = (J = Pe.trim()).length) === 0 && (X = 0, J = "")), 0 < ce) switch (X) {
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
                J = t(A, r(A, W, Ue), J, L, m + 1);
            }
            Ke += J, J = Ue = le = ge = te = 0, W = "", X = F.charCodeAt(++re);
            break;
          case 125:
          case 59:
            if (W = (0 < le ? W.replace(z, "") : W).trim(), 1 < (ce = W.length)) switch (ge === 0 && (te = W.charCodeAt(0), te === 45 || 96 < te && 123 > te) && (ce = (W = W.replace(" ", ":")).length), 0 < Oe && (Pe = S(1, W, A, j, Re, me, oe.length, L, m, L)) !== void 0 && (ce = (W = Pe.trim()).length) === 0 && (W = "\0\0"), te = W.charCodeAt(0), X = W.charCodeAt(1), te) {
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
          _ === 47 ? _ = 0 : 1 + te === 0 && L !== 107 && 0 < W.length && (le = 1, W += "\0"), 0 < Oe * tt && S(0, W, A, j, Re, me, oe.length, L, m, L), me = 1, Re++;
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
      if (le = A, 0 < Oe && (Pe = S(2, oe, le, j, Re, me, ce, L, m, L), Pe !== void 0 && (oe = Pe).length === 0)) return De + oe + Ke;
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
  function r(j, A, F) {
    var L = A.trim().split(P);
    A = L;
    var m = L.length, ee = j.length;
    switch (ee) {
      case 0:
      case 1:
        var _ = 0;
        for (j = ee === 0 ? "" : j[0] + " "; _ < m; ++_)
          A[_] = i(j, A[_], F).trim();
        break;
      default:
        var ie = _ = 0;
        for (A = []; _ < m; ++_)
          for (var Q = 0; Q < ee; ++Q)
            A[ie++] = i(j[Q] + " ", L[_], F).trim();
    }
    return A;
  }
  function i(j, A, F) {
    var L = A.charCodeAt(0);
    switch (33 > L && (L = (A = A.trim()).charCodeAt(0)), L) {
      case 38:
        return A.replace(q, "$1" + j.trim());
      case 58:
        return j.trim() + A.replace(q, "$1" + j.trim());
      default:
        if (0 < 1 * F && 0 < A.indexOf("\f")) return A.replace(q, (j.charCodeAt(0) === 58 ? "" : "$1") + j.trim());
    }
    return j + A;
  }
  function c(j, A, F, L) {
    var m = j + ";", ee = 2 * A + 3 * F + 4 * L;
    if (ee === 944) {
      j = m.indexOf(":", 9) + 1;
      var _ = m.substring(j, m.length - 1).trim();
      return _ = m.substring(0, j).trim() + _ + ";", Te === 1 || Te === 2 && u(_, 1) ? "-webkit-" + _ + _ : _;
    }
    if (Te === 0 || Te === 2 && !u(m, 1)) return m;
    switch (ee) {
      case 1015:
        return m.charCodeAt(10) === 97 ? "-webkit-" + m + m : m;
      case 951:
        return m.charCodeAt(3) === 116 ? "-webkit-" + m + m : m;
      case 963:
        return m.charCodeAt(5) === 110 ? "-webkit-" + m + m : m;
      case 1009:
        if (m.charCodeAt(4) !== 100) break;
      case 969:
      case 942:
        return "-webkit-" + m + m;
      case 978:
        return "-webkit-" + m + "-moz-" + m + m;
      case 1019:
      case 983:
        return "-webkit-" + m + "-moz-" + m + "-ms-" + m + m;
      case 883:
        if (m.charCodeAt(8) === 45) return "-webkit-" + m + m;
        if (0 < m.indexOf("image-set(", 11)) return m.replace(ue, "$1-webkit-$2") + m;
        break;
      case 932:
        if (m.charCodeAt(4) === 45) switch (m.charCodeAt(5)) {
          case 103:
            return "-webkit-box-" + m.replace("-grow", "") + "-webkit-" + m + "-ms-" + m.replace("grow", "positive") + m;
          case 115:
            return "-webkit-" + m + "-ms-" + m.replace("shrink", "negative") + m;
          case 98:
            return "-webkit-" + m + "-ms-" + m.replace("basis", "preferred-size") + m;
        }
        return "-webkit-" + m + "-ms-" + m + m;
      case 964:
        return "-webkit-" + m + "-ms-flex-" + m + m;
      case 1023:
        if (m.charCodeAt(8) !== 99) break;
        return _ = m.substring(m.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + _ + "-webkit-" + m + "-ms-flex-pack" + _ + m;
      case 1005:
        return E.test(m) ? m.replace(Y, ":-webkit-") + m.replace(Y, ":-moz-") + m : m;
      case 1e3:
        switch (_ = m.substring(13).trim(), A = _.indexOf("-") + 1, _.charCodeAt(0) + _.charCodeAt(A)) {
          case 226:
            _ = m.replace(x, "tb");
            break;
          case 232:
            _ = m.replace(x, "tb-rl");
            break;
          case 220:
            _ = m.replace(x, "lr");
            break;
          default:
            return m;
        }
        return "-webkit-" + m + "-ms-" + _ + m;
      case 1017:
        if (m.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (A = (m = j).length - 10, _ = (m.charCodeAt(A) === 33 ? m.substring(0, A) : m).substring(j.indexOf(":", 7) + 1).trim(), ee = _.charCodeAt(0) + (_.charCodeAt(7) | 0)) {
          case 203:
            if (111 > _.charCodeAt(8)) break;
          case 115:
            m = m.replace(_, "-webkit-" + _) + ";" + m;
            break;
          case 207:
          case 102:
            m = m.replace(_, "-webkit-" + (102 < ee ? "inline-" : "") + "box") + ";" + m.replace(_, "-webkit-" + _) + ";" + m.replace(_, "-ms-" + _ + "box") + ";" + m;
        }
        return m + ";";
      case 938:
        if (m.charCodeAt(5) === 45) switch (m.charCodeAt(6)) {
          case 105:
            return _ = m.replace("-items", ""), "-webkit-" + m + "-webkit-box-" + _ + "-ms-flex-" + _ + m;
          case 115:
            return "-webkit-" + m + "-ms-flex-item-" + m.replace(Ie, "") + m;
          default:
            return "-webkit-" + m + "-ms-flex-line-pack" + m.replace("align-content", "").replace(Ie, "") + m;
        }
        break;
      case 973:
      case 989:
        if (m.charCodeAt(3) !== 45 || m.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (Ve.test(j) === !0) return (_ = j.substring(j.indexOf(":") + 1)).charCodeAt(0) === 115 ? c(j.replace("stretch", "fill-available"), A, F, L).replace(":fill-available", ":stretch") : m.replace(_, "-webkit-" + _) + m.replace(_, "-moz-" + _.replace("fill-", "")) + m;
        break;
      case 962:
        if (m = "-webkit-" + m + (m.charCodeAt(5) === 102 ? "-ms-" + m : "") + m, F + L === 211 && m.charCodeAt(13) === 105 && 0 < m.indexOf("transform", 10)) return m.substring(0, m.indexOf(";", 27) + 1).replace(k, "$1-webkit-$2") + m;
    }
    return m;
  }
  function u(j, A) {
    var F = j.indexOf(A === 1 ? ":" : "{"), L = j.substring(0, A !== 3 ? F : 10);
    return F = j.substring(F + 1, j.length - 1), Be(A !== 2 ? L : L.replace(Fe, "$1"), F, A);
  }
  function y(j, A) {
    var F = c(A, A.charCodeAt(0), A.charCodeAt(1), A.charCodeAt(2));
    return F !== A + ";" ? F.replace(Se, " or ($1)").substring(4) : "(" + A + ")";
  }
  function S(j, A, F, L, m, ee, _, ie, Q, te) {
    for (var X = 0, ne = A, de; X < Oe; ++X)
      switch (de = je[X].call(I, j, ne, F, L, m, ee, _, ie, Q, te)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          ne = de;
      }
    if (ne !== A) return ne;
  }
  function w(j) {
    switch (j) {
      case void 0:
      case null:
        Oe = je.length = 0;
        break;
      default:
        if (typeof j == "function") je[Oe++] = j;
        else if (typeof j == "object") for (var A = 0, F = j.length; A < F; ++A)
          w(j[A]);
        else tt = !!j | 0;
    }
    return w;
  }
  function h(j) {
    return j = j.prefix, j !== void 0 && (Be = null, j ? typeof j != "function" ? Te = 1 : (Te = 2, Be = j) : Te = 0), h;
  }
  function I(j, A) {
    var F = j;
    if (33 > F.charCodeAt(0) && (F = F.trim()), se = F, F = [se], 0 < Oe) {
      var L = S(-1, A, F, F, Re, me, 0, 0, 0, 0);
      L !== void 0 && typeof L == "string" && (A = L);
    }
    var m = t(st, F, A, 0, 0);
    return 0 < Oe && (L = S(-2, m, F, F, Re, me, m.length, 0, 0, 0), L !== void 0 && (m = L)), se = "", Ne = 0, me = Re = 1, m;
  }
  var C = /^\0+/g, z = /[\0\r\f]/g, Y = /: */g, E = /zoo|gra/, k = /([,: ])(transform)/g, P = /,\r+?/g, q = /([\t\r\n ])*\f?&/g, U = /@(k\w+)\s*(\S*)\s*/, G = /::(place)/g, H = /:(read-only)/g, x = /[svh]\w+-[tblr]{2}/, ae = /\(\s*(.*)\s*\)/g, Se = /([\s\S]*?);/g, Ie = /-self|flex-/g, Fe = /[^]*?(:[rp][el]a[\w-]+)[^]*/, Ve = /stretch|:\s*\w+\-(?:conte|avail)/, ue = /([^-])(image-set\()/, me = 1, Re = 1, Ne = 0, Te = 1, st = [], je = [], Oe = 0, Be = null, tt = 0, se = "";
  return I.use = w, I.set = h, e !== void 0 && h(e), I;
}
var _c = {
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
function Tc(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Cc = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, wo = /* @__PURE__ */ Tc(
  function(e) {
    return Cc.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), So = { exports: {} }, ze = {}, ko;
function Ac() {
  if (ko) return ze;
  ko = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, i = e ? Symbol.for("react.fragment") : 60107, c = e ? Symbol.for("react.strict_mode") : 60108, u = e ? Symbol.for("react.profiler") : 60114, y = e ? Symbol.for("react.provider") : 60109, S = e ? Symbol.for("react.context") : 60110, w = e ? Symbol.for("react.async_mode") : 60111, h = e ? Symbol.for("react.concurrent_mode") : 60111, I = e ? Symbol.for("react.forward_ref") : 60112, C = e ? Symbol.for("react.suspense") : 60113, z = e ? Symbol.for("react.suspense_list") : 60120, Y = e ? Symbol.for("react.memo") : 60115, E = e ? Symbol.for("react.lazy") : 60116, k = e ? Symbol.for("react.block") : 60121, P = e ? Symbol.for("react.fundamental") : 60117, q = e ? Symbol.for("react.responder") : 60118, U = e ? Symbol.for("react.scope") : 60119;
  function G(x) {
    if (typeof x == "object" && x !== null) {
      var ae = x.$$typeof;
      switch (ae) {
        case t:
          switch (x = x.type, x) {
            case w:
            case h:
            case i:
            case u:
            case c:
            case C:
              return x;
            default:
              switch (x = x && x.$$typeof, x) {
                case S:
                case I:
                case E:
                case Y:
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
    return G(x) === h;
  }
  return ze.AsyncMode = w, ze.ConcurrentMode = h, ze.ContextConsumer = S, ze.ContextProvider = y, ze.Element = t, ze.ForwardRef = I, ze.Fragment = i, ze.Lazy = E, ze.Memo = Y, ze.Portal = r, ze.Profiler = u, ze.StrictMode = c, ze.Suspense = C, ze.isAsyncMode = function(x) {
    return H(x) || G(x) === w;
  }, ze.isConcurrentMode = H, ze.isContextConsumer = function(x) {
    return G(x) === S;
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
    return G(x) === Y;
  }, ze.isPortal = function(x) {
    return G(x) === r;
  }, ze.isProfiler = function(x) {
    return G(x) === u;
  }, ze.isStrictMode = function(x) {
    return G(x) === c;
  }, ze.isSuspense = function(x) {
    return G(x) === C;
  }, ze.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === i || x === h || x === u || x === c || x === C || x === z || typeof x == "object" && x !== null && (x.$$typeof === E || x.$$typeof === Y || x.$$typeof === y || x.$$typeof === S || x.$$typeof === I || x.$$typeof === P || x.$$typeof === q || x.$$typeof === U || x.$$typeof === k);
  }, ze.typeOf = G, ze;
}
var xo;
function Oc() {
  return xo || (xo = 1, So.exports = Ac()), So.exports;
}
var ja, Eo;
function Rc() {
  if (Eo) return ja;
  Eo = 1;
  var e = Oc(), t = {
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
  var S = Object.defineProperty, w = Object.getOwnPropertyNames, h = Object.getOwnPropertySymbols, I = Object.getOwnPropertyDescriptor, C = Object.getPrototypeOf, z = Object.prototype;
  function Y(E, k, P) {
    if (typeof k != "string") {
      if (z) {
        var q = C(k);
        q && q !== z && Y(E, q, P);
      }
      var U = w(k);
      h && (U = U.concat(h(k)));
      for (var G = y(E), H = y(k), x = 0; x < U.length; ++x) {
        var ae = U[x];
        if (!r[ae] && !(P && P[ae]) && !(H && H[ae]) && !(G && G[ae])) {
          var Se = I(k, ae);
          try {
            S(E, ae, Se);
          } catch {
          }
        }
      }
    }
    return E;
  }
  return ja = Y, ja;
}
var Ic = Rc();
const Nc = /* @__PURE__ */ si(Ic);
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
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !gs.typeOf(e);
}, Zn = Object.freeze([]), wr = Object.freeze({});
function pn(e) {
  return typeof e == "function";
}
function To(e) {
  return e.displayName || e.name || "Component";
}
function ci(e) {
  return e && typeof e.styledComponentId == "string";
}
var Fr = typeof yt < "u" && yt.env !== void 0 && (yt.env.REACT_APP_SC_ATTR || yt.env.SC_ATTR) || "data-styled", ui = typeof window < "u" && "HTMLElement" in window, Dc = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof yt < "u" && yt.env !== void 0 && (yt.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && yt.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? yt.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && yt.env.REACT_APP_SC_DISABLE_SPEEDY : yt.env.SC_DISABLE_SPEEDY !== void 0 && yt.env.SC_DISABLE_SPEEDY !== "" ? yt.env.SC_DISABLE_SPEEDY !== "false" && yt.env.SC_DISABLE_SPEEDY : yt.env.NODE_ENV !== "production"));
function yn(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : ""));
}
var Pc = function() {
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
      for (var S = u; S < y; S++) this.groupSizes[S] = 0;
    }
    for (var w = this.indexOfGroup(r + 1), h = 0, I = i.length; h < I; h++) this.tag.insertRule(w, i[h]) && (this.groupSizes[r]++, w++);
  }, t.clearGroup = function(r) {
    if (r < this.length) {
      var i = this.groupSizes[r], c = this.indexOfGroup(r), u = c + i;
      this.groupSizes[r] = 0;
      for (var y = c; y < u; y++) this.tag.deleteRule(c);
    }
  }, t.getGroup = function(r) {
    var i = "";
    if (r >= this.length || this.groupSizes[r] === 0) return i;
    for (var c = this.groupSizes[r], u = this.indexOfGroup(r), y = u + c, S = u; S < y; S++) i += this.tag.getRule(S) + `/*!sc*/
`;
    return i;
  }, e;
}(), Kn = /* @__PURE__ */ new Map(), Qn = /* @__PURE__ */ new Map(), cn = 1, $n = function(e) {
  if (Kn.has(e)) return Kn.get(e);
  for (; Qn.has(cn); ) cn++;
  var t = cn++;
  return Kn.set(e, t), Qn.set(t, e), t;
}, Lc = function(e) {
  return Qn.get(e);
}, Fc = function(e, t) {
  t >= cn && (cn = t + 1), Kn.set(e, t), Qn.set(t, e);
}, jc = "style[" + Fr + '][data-styled-version="5.3.11"]', Mc = new RegExp("^" + Fr + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), zc = function(e, t, r) {
  for (var i, c = r.split(","), u = 0, y = c.length; u < y; u++) (i = c[u]) && e.registerName(t, i);
}, $c = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), i = [], c = 0, u = r.length; c < u; c++) {
    var y = r[c].trim();
    if (y) {
      var S = y.match(Mc);
      if (S) {
        var w = 0 | parseInt(S[1], 10), h = S[2];
        w !== 0 && (Fc(h, w), zc(e, h, S[3]), e.getTag().insertRules(w, i)), i.length = 0;
      } else i.push(y);
    }
  }
}, Uc = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, ys = function(e) {
  var t = document.head, r = e || t, i = document.createElement("style"), c = function(S) {
    for (var w = S.childNodes, h = w.length; h >= 0; h--) {
      var I = w[h];
      if (I && I.nodeType === 1 && I.hasAttribute(Fr)) return I;
    }
  }(r), u = c !== void 0 ? c.nextSibling : null;
  i.setAttribute(Fr, "active"), i.setAttribute("data-styled-version", "5.3.11");
  var y = Uc();
  return y && i.setAttribute("nonce", y), r.insertBefore(i, u), i;
}, Hc = function() {
  function e(r) {
    var i = this.element = ys(r);
    i.appendChild(document.createTextNode("")), this.sheet = function(c) {
      if (c.sheet) return c.sheet;
      for (var u = document.styleSheets, y = 0, S = u.length; y < S; y++) {
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
}(), Bc = function() {
  function e(r) {
    var i = this.element = ys(r);
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
}(), Wc = function() {
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
}(), Co = ui, qc = { isServer: !ui, useCSSOMInjection: !Dc }, bs = function() {
  function e(r, i, c) {
    r === void 0 && (r = wr), i === void 0 && (i = {}), this.options = pr({}, qc, {}, r), this.gs = i, this.names = new Map(c), this.server = !!r.isServer, !this.server && ui && Co && (Co = !1, function(u) {
      for (var y = document.querySelectorAll(jc), S = 0, w = y.length; S < w; S++) {
        var h = y[S];
        h && h.getAttribute(Fr) !== "active" && ($c(u, h), h.parentNode && h.parentNode.removeChild(h));
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
    return this.tag || (this.tag = (c = (i = this.options).isServer, u = i.useCSSOMInjection, y = i.target, r = c ? new Wc(y) : u ? new Hc(y) : new Bc(y), new Pc(r)));
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
        var S = Lc(y);
        if (S !== void 0) {
          var w = r.names.get(S), h = i.getGroup(y);
          if (w && h && w.size) {
            var I = Fr + ".g" + y + '[id="' + S + '"]', C = "";
            w !== void 0 && w.forEach(function(z) {
              z.length > 0 && (C += z + ",");
            }), u += "" + h + I + '{content:"' + C + `"}/*!sc*/
`;
          }
        }
      }
      return u;
    }(this);
  }, e;
}(), Yc = /(a)(d)/gi, Ao = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Ka(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = Ao(t % 52) + r;
  return (Ao(t % 52) + r).replace(Yc, "$1-$2");
}
var Pr = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, vs = function(e) {
  return Pr(5381, e);
};
function Gc(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (pn(r) && !ci(r)) return !1;
  }
  return !0;
}
var Vc = vs("5.3.11"), Xc = function() {
  function e(t, r, i) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (i === void 0 || i.isStatic) && Gc(t), this.componentId = r, this.baseHash = Pr(Vc, r), this.baseStyle = i, bs.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, i) {
    var c = this.componentId, u = [];
    if (this.baseStyle && u.push(this.baseStyle.generateAndInjectStyles(t, r, i)), this.isStatic && !i.hash) if (this.staticRulesId && r.hasNameForId(c, this.staticRulesId)) u.push(this.staticRulesId);
    else {
      var y = jr(this.rules, t, r, i).join(""), S = Ka(Pr(this.baseHash, y) >>> 0);
      if (!r.hasNameForId(c, S)) {
        var w = i(y, "." + S, void 0, c);
        r.insertRules(c, S, w);
      }
      u.push(S), this.staticRulesId = S;
    }
    else {
      for (var h = this.rules.length, I = Pr(this.baseHash, i.hash), C = "", z = 0; z < h; z++) {
        var Y = this.rules[z];
        if (typeof Y == "string") C += Y;
        else if (Y) {
          var E = jr(Y, t, r, i), k = Array.isArray(E) ? E.join("") : E;
          I = Pr(I, k + z), C += k;
        }
      }
      if (C) {
        var P = Ka(I >>> 0);
        if (!r.hasNameForId(c, P)) {
          var q = i(C, "." + P, void 0, c);
          r.insertRules(c, P, q);
        }
        u.push(P);
      }
    }
    return u.join(" ");
  }, e;
}(), Kc = /^\s*\/\/.*$/gm, Jc = [":", "[", ".", "#"];
function Zc(e) {
  var t, r, i, c, u = wr, y = u.options, S = y === void 0 ? wr : y, w = u.plugins, h = w === void 0 ? Zn : w, I = new Ec(S), C = [], z = /* @__PURE__ */ function(k) {
    function P(q) {
      if (q) try {
        k(q + "}");
      } catch {
      }
    }
    return function(q, U, G, H, x, ae, Se, Ie, Fe, Ve) {
      switch (q) {
        case 1:
          if (Fe === 0 && U.charCodeAt(0) === 64) return k(U + ";"), "";
          break;
        case 2:
          if (Ie === 0) return U + "/*|*/";
          break;
        case 3:
          switch (Ie) {
            case 102:
            case 112:
              return k(G[0] + U), "";
            default:
              return U + (Ve === 0 ? "/*|*/" : "");
          }
        case -2:
          U.split("/*|*/}").forEach(P);
      }
    };
  }(function(k) {
    C.push(k);
  }), Y = function(k, P, q) {
    return P === 0 && Jc.indexOf(q[r.length]) !== -1 || q.match(c) ? k : "." + t;
  };
  function E(k, P, q, U) {
    U === void 0 && (U = "&");
    var G = k.replace(Kc, ""), H = P && q ? q + " " + P + " { " + G + " }" : G;
    return t = U, r = P, i = new RegExp("\\" + r + "\\b", "g"), c = new RegExp("(\\" + r + "\\b){2,}"), I(q || !P ? "" : P, H);
  }
  return I.use([].concat(h, [function(k, P, q) {
    k === 2 && q.length && q[0].lastIndexOf(r) > 0 && (q[0] = q[0].replace(i, Y));
  }, z, function(k) {
    if (k === -2) {
      var P = C;
      return C = [], P;
    }
  }])), E.hash = h.length ? h.reduce(function(k, P) {
    return P.name || yn(15), Pr(k, P.name);
  }, 5381).toString() : "", E;
}
var ws = ft.createContext();
ws.Consumer;
var Ss = ft.createContext(), Qc = (Ss.Consumer, new bs()), Ja = Zc();
function eu() {
  return kr(ws) || Qc;
}
function tu() {
  return kr(Ss) || Ja;
}
var ru = function() {
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
}(), nu = /([A-Z])/, au = /([A-Z])/g, iu = /^ms-/, ou = function(e) {
  return "-" + e.toLowerCase();
};
function Oo(e) {
  return nu.test(e) ? e.replace(au, ou).replace(iu, "-ms-") : e;
}
var Ro = function(e) {
  return e == null || e === !1 || e === "";
};
function jr(e, t, r, i) {
  if (Array.isArray(e)) {
    for (var c, u = [], y = 0, S = e.length; y < S; y += 1) (c = jr(e[y], t, r, i)) !== "" && (Array.isArray(c) ? u.push.apply(u, c) : u.push(c));
    return u;
  }
  if (Ro(e)) return "";
  if (ci(e)) return "." + e.styledComponentId;
  if (pn(e)) {
    if (typeof (h = e) != "function" || h.prototype && h.prototype.isReactComponent || !t) return e;
    var w = e(t);
    return jr(w, t, r, i);
  }
  var h;
  return e instanceof ru ? r ? (e.inject(r, i), e.getName(i)) : e : Xa(e) ? function I(C, z) {
    var Y, E, k = [];
    for (var P in C) C.hasOwnProperty(P) && !Ro(C[P]) && (Array.isArray(C[P]) && C[P].isCss || pn(C[P]) ? k.push(Oo(P) + ":", C[P], ";") : Xa(C[P]) ? k.push.apply(k, I(C[P], P)) : k.push(Oo(P) + ": " + (Y = P, (E = C[P]) == null || typeof E == "boolean" || E === "" ? "" : typeof E != "number" || E === 0 || Y in _c || Y.startsWith("--") ? String(E).trim() : E + "px") + ";"));
    return z ? [z + " {"].concat(k, ["}"]) : k;
  }(e) : e.toString();
}
var Io = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function su(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
  return pn(e) || Xa(e) ? Io(jr(_o(Zn, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Io(jr(_o(e, r)));
}
var lu = function(e, t, r) {
  return r === void 0 && (r = wr), e.theme !== r.theme && e.theme || t || r.theme;
}, cu = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, uu = /(^-|-$)/g;
function Ma(e) {
  return e.replace(cu, "-").replace(uu, "");
}
var du = function(e) {
  return Ka(vs(e) >>> 0);
};
function Un(e) {
  return typeof e == "string" && yt.env.NODE_ENV === "production";
}
var Za = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, fu = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function pu(e, t, r) {
  var i = e[r];
  Za(t) && Za(i) ? ks(i, t) : e[r] = t;
}
function ks(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
  for (var c = 0, u = r; c < u.length; c++) {
    var y = u[c];
    if (Za(y)) for (var S in y) fu(S) && pu(e, y[S], S);
  }
  return e;
}
var xs = ft.createContext();
xs.Consumer;
var za = {};
function Es(e, t, r) {
  var i = ci(e), c = !Un(e), u = t.attrs, y = u === void 0 ? Zn : u, S = t.componentId, w = S === void 0 ? function(U, G) {
    var H = typeof U != "string" ? "sc" : Ma(U);
    za[H] = (za[H] || 0) + 1;
    var x = H + "-" + du("5.3.11" + H + za[H]);
    return G ? G + "-" + x : x;
  }(t.displayName, t.parentComponentId) : S, h = t.displayName, I = h === void 0 ? function(U) {
    return Un(U) ? "styled." + U : "Styled(" + To(U) + ")";
  }(e) : h, C = t.displayName && t.componentId ? Ma(t.displayName) + "-" + t.componentId : t.componentId || w, z = i && e.attrs ? Array.prototype.concat(e.attrs, y).filter(Boolean) : y, Y = t.shouldForwardProp;
  i && e.shouldForwardProp && (Y = t.shouldForwardProp ? function(U, G, H) {
    return e.shouldForwardProp(U, G, H) && t.shouldForwardProp(U, G, H);
  } : e.shouldForwardProp);
  var E, k = new Xc(r, C, i ? e.componentStyle : void 0), P = k.isStatic && y.length === 0, q = function(U, G) {
    return function(H, x, ae, Se) {
      var Ie = H.attrs, Fe = H.componentStyle, Ve = H.defaultProps, ue = H.foldedComponentIds, me = H.shouldForwardProp, Re = H.styledComponentId, Ne = H.target, Te = function(L, m, ee) {
        L === void 0 && (L = wr);
        var _ = pr({}, m, { theme: L }), ie = {};
        return ee.forEach(function(Q) {
          var te, X, ne, de = Q;
          for (te in pn(de) && (de = de(_)), de) _[te] = ie[te] = te === "className" ? (X = ie[te], ne = de[te], X && ne ? X + " " + ne : X || ne) : de[te];
        }), [_, ie];
      }(lu(x, kr(xs), Ve) || wr, x, Ie), st = Te[0], je = Te[1], Oe = function(L, m, ee, _) {
        var ie = eu(), Q = tu(), te = m ? L.generateAndInjectStyles(wr, ie, Q) : L.generateAndInjectStyles(ee, ie, Q);
        return te;
      }(Fe, Se, st), Be = ae, tt = je.$as || x.$as || je.as || x.as || Ne, se = Un(tt), j = je !== x ? pr({}, x, {}, je) : x, A = {};
      for (var F in j) F[0] !== "$" && F !== "as" && (F === "forwardedAs" ? A.as = j[F] : (me ? me(F, wo, tt) : !se || wo(F)) && (A[F] = j[F]));
      return x.style && je.style !== x.style && (A.style = pr({}, x.style, {}, je.style)), A.className = Array.prototype.concat(ue, Re, Oe !== Re ? Oe : null, x.className, je.className).filter(Boolean).join(" "), A.ref = Be, Qo(tt, A);
    }(E, U, G, P);
  };
  return q.displayName = I, (E = ft.forwardRef(q)).attrs = z, E.componentStyle = k, E.displayName = I, E.shouldForwardProp = Y, E.foldedComponentIds = i ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Zn, E.styledComponentId = C, E.target = i ? e.target : e, E.withComponent = function(U) {
    var G = t.componentId, H = function(ae, Se) {
      if (ae == null) return {};
      var Ie, Fe, Ve = {}, ue = Object.keys(ae);
      for (Fe = 0; Fe < ue.length; Fe++) Ie = ue[Fe], Se.indexOf(Ie) >= 0 || (Ve[Ie] = ae[Ie]);
      return Ve;
    }(t, ["componentId"]), x = G && G + "-" + (Un(U) ? U : Ma(To(U)));
    return Es(U, pr({}, H, { attrs: z, componentId: x }), r);
  }, Object.defineProperty(E, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(U) {
    this._foldedDefaultProps = i ? ks({}, e.defaultProps, U) : U;
  } }), Object.defineProperty(E, "toString", { value: function() {
    return "." + E.styledComponentId;
  } }), c && Nc(E, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), E;
}
var Qt = function(e) {
  return function t(r, i, c) {
    if (c === void 0 && (c = wr), !gs.isValidElementType(i)) return yn(1, String(i));
    var u = function() {
      return r(i, c, su.apply(void 0, arguments));
    };
    return u.withConfig = function(y) {
      return t(r, i, pr({}, c, {}, y));
    }, u.attrs = function(y) {
      return t(r, i, pr({}, c, { attrs: Array.prototype.concat(c.attrs, y).filter(Boolean) }));
    }, u;
  }(Es, e);
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
var hu = /* @__PURE__ */ function() {
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
}(), Ir = function() {
  return Ir = Object.assign || function(e) {
    for (var t, r = 1, i = arguments.length; r < i; r++) {
      t = arguments[r];
      for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c]);
    }
    return e;
  }, Ir.apply(this, arguments);
}, mu = function(e, t, r, i) {
  function c(u) {
    return u instanceof r ? u : new r(function(y) {
      y(u);
    });
  }
  return new (r || (r = Promise))(function(u, y) {
    function S(I) {
      try {
        h(i.next(I));
      } catch (C) {
        y(C);
      }
    }
    function w(I) {
      try {
        h(i.throw(I));
      } catch (C) {
        y(C);
      }
    }
    function h(I) {
      I.done ? u(I.value) : c(I.value).then(S, w);
    }
    h((i = i.apply(e, [])).next());
  });
}, gu = function(e, t) {
  var r = { label: 0, sent: function() {
    if (u[0] & 1) throw u[1];
    return u[1];
  }, trys: [], ops: [] }, i, c, u, y;
  return y = { next: S(0), throw: S(1), return: S(2) }, typeof Symbol == "function" && (y[Symbol.iterator] = function() {
    return this;
  }), y;
  function S(h) {
    return function(I) {
      return w([h, I]);
    };
  }
  function w(h) {
    if (i) throw new TypeError("Generator is already executing.");
    for (; r; ) try {
      if (i = 1, c && (u = h[0] & 2 ? c.return : h[0] ? c.throw || ((u = c.return) && u.call(c), 0) : c.next) && !(u = u.call(c, h[1])).done) return u;
      switch (c = 0, u && (h = [h[0] & 2, u.value]), h[0]) {
        case 0:
        case 1:
          u = h;
          break;
        case 4:
          return r.label++, { value: h[1], done: !1 };
        case 5:
          r.label++, c = h[1], h = [0];
          continue;
        case 7:
          h = r.ops.pop(), r.trys.pop();
          continue;
        default:
          if (u = r.trys, !(u = u.length > 0 && u[u.length - 1]) && (h[0] === 6 || h[0] === 2)) {
            r = 0;
            continue;
          }
          if (h[0] === 3 && (!u || h[1] > u[0] && h[1] < u[3])) {
            r.label = h[1];
            break;
          }
          if (h[0] === 6 && r.label < u[1]) {
            r.label = u[1], u = h;
            break;
          }
          if (u && r.label < u[2]) {
            r.label = u[2], r.ops.push(h);
            break;
          }
          u[2] && r.ops.pop(), r.trys.pop();
          continue;
      }
      h = t.call(e, r);
    } catch (I) {
      h = [6, I], c = 0;
    } finally {
      i = u = 0;
    }
    if (h[0] & 5) throw h[1];
    return { value: h[0] ? h[1] : void 0, done: !0 };
  }
}, _s = function(e, t) {
  var r = {};
  for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (r[i] = e[i]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var c = 0, i = Object.getOwnPropertySymbols(e); c < i.length; c++)
      t.indexOf(i[c]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[c]) && (r[i[c]] = e[i[c]]);
  return r;
}, yu = function(e) {
  return !!e && (typeof e == "object" || typeof e == "function") && typeof e.then == "function";
}, bu = function(e, t) {
  return {
    left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - e / 2,
    top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - t / 2
  };
}, vu = function(e, t) {
  return {
    top: (window.screen.height - t) / 2,
    left: (window.screen.width - e) / 2
  };
};
function wu(e, t, r) {
  var i = t.height, c = t.width, u = _s(t, ["height", "width"]), y = Ir({ height: i, width: c, location: "no", toolbar: "no", status: "no", directories: "no", menubar: "no", scrollbars: "yes", resizable: "no", centerscreen: "yes", chrome: "yes" }, u), S = window.open(e, "", Object.keys(y).map(function(h) {
    return "".concat(h, "=").concat(y[h]);
  }).join(", "));
  if (r)
    var w = window.setInterval(function() {
      try {
        (S === null || S.closed) && (window.clearInterval(w), r(S));
      } catch (h) {
        console.error(h);
      }
    }, 1e3);
  return S;
}
var Su = (
  /** @class */
  function(e) {
    hu(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.openShareDialog = function(i) {
        var c = r.props, u = c.onShareWindowClose, y = c.windowHeight, S = y === void 0 ? 400 : y, w = c.windowPosition, h = w === void 0 ? "windowCenter" : w, I = c.windowWidth, C = I === void 0 ? 550 : I, z = Ir({ height: S, width: C }, h === "windowCenter" ? bu(C, S) : vu(C, S));
        wu(i, z, u);
      }, r.handleClick = function(i) {
        return mu(r, void 0, void 0, function() {
          var c, u, y, S, w, h, I, C, z, Y;
          return gu(this, function(E) {
            switch (E.label) {
              case 0:
                return c = this.props, u = c.beforeOnClick, y = c.disabled, S = c.networkLink, w = c.onClick, h = c.url, I = c.openShareDialogOnClick, C = c.opts, z = S(h, C), y ? [
                  2
                  /*return*/
                ] : (i.preventDefault(), u ? (Y = u(), yu(Y) ? [4, Y] : [3, 2]) : [3, 2]);
              case 1:
                E.sent(), E.label = 2;
              case 2:
                return I && this.openShareDialog(z), w && w(i, z), [
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
      var i = r.children, c = r.className, u = r.disabled, y = r.disabledStyle, S = r.forwardedRef;
      r.networkLink;
      var w = r.networkName;
      r.onShareWindowClose, r.openShareDialogOnClick, r.opts;
      var h = r.resetButtonStyle, I = r.style;
      r.url, r.windowHeight, r.windowPosition, r.windowWidth;
      var C = _s(r, ["beforeOnClick", "children", "className", "disabled", "disabledStyle", "forwardedRef", "networkLink", "networkName", "onShareWindowClose", "openShareDialogOnClick", "opts", "resetButtonStyle", "style", "url", "windowHeight", "windowPosition", "windowWidth"]), z = Zt("react-share__ShareButton", {
        "react-share__ShareButton--disabled": !!u,
        disabled: !!u
      }, c), Y = Ir(Ir(h ? { backgroundColor: "transparent", border: "none", padding: 0, font: "inherit", color: "inherit", cursor: "pointer" } : {}, I), u && y);
      return ft.createElement("button", Ir({}, C, { "aria-label": C["aria-label"] || w, className: z, onClick: this.handleClick, ref: S, style: Y }), i);
    }, t.defaultProps = {
      disabledStyle: { opacity: 0.6 },
      openShareDialogOnClick: !0,
      resetButtonStyle: !0
    }, t;
  }(al)
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
    var S = r(u), w = ea({}, u), h = Object.keys(S);
    return h.forEach(function(I) {
      delete w[I];
    }), ft.createElement(Su, ea({}, i, w, { forwardedRef: y, networkName: e, networkLink: t, opts: r(u) }));
  }
  return c.displayName = "ShareButton-".concat(e), oi(c);
}
function ku(e, t) {
  var r = t.subject, i = t.body, c = t.separator;
  return "mailto:" + oa({ subject: r, body: i ? i + c + e : e });
}
sa("email", ku, function(e) {
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
var xu = /* @__PURE__ */ function() {
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
}(), Eu = (
  /** @class */
  function(e) {
    xu(t, e);
    function t(r) {
      var i = e.call(this, r) || this;
      return i.name = "AssertionError", i;
    }
    return t;
  }(Error)
);
function un(e, t) {
  if (!e)
    throw new Eu(t);
}
function _u(e, t) {
  var r = t.quote, i = t.hashtag;
  return un(e, "facebook.url"), "https://www.facebook.com/sharer/sharer.php" + oa({
    u: e,
    quote: r,
    hashtag: i
  });
}
sa("facebook", _u, function(e) {
  return {
    quote: e.quote,
    hashtag: e.hashtag
  };
}, {
  windowWidth: 550,
  windowHeight: 400
});
function Tu(e, t) {
  var r = t.title, i = t.summary, c = t.source;
  return un(e, "linkedin.url"), "https://linkedin.com/shareArticle" + oa({ url: e, mini: "true", title: r, summary: i, source: c });
}
sa("linkedin", Tu, function(e) {
  var t = e.title, r = e.summary, i = e.source;
  return { title: t, summary: r, source: i };
}, {
  windowWidth: 750,
  windowHeight: 600
});
function Cu(e, t) {
  var r = t.title, i = t.via, c = t.hashtags, u = c === void 0 ? [] : c, y = t.related, S = y === void 0 ? [] : y;
  return un(e, "twitter.url"), un(Array.isArray(u), "twitter.hashtags is not an array"), un(Array.isArray(S), "twitter.related is not an array"), "https://twitter.com/share" + oa({
    url: e,
    text: r,
    via: i,
    hashtags: u.length > 0 ? u.join(",") : void 0,
    related: S.length > 0 ? S.join(",") : void 0
  });
}
sa("twitter", Cu, function(e) {
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
var Au = (typeof window > "u" ? "undefined" : Qa(window)) === "object" && window.Element || function() {
};
function Ou(e, t, r) {
  if (!(e[t] instanceof Au))
    return new Error("Invalid prop `" + t + "` supplied to `" + r + "`. Expected prop to be an instance of Element. Validation failed.");
}
o.oneOfType([o.string, o.func, Ou, o.shape({
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
const Ru = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, Ts = ({
  label: e = "",
  cardTitle: t = "",
  gaData: r,
  ariaLabel: i,
  color: c = "gray",
  disabled: u,
  element: y = "button",
  innerRef: S,
  href: w,
  onClick: h,
  ...I
}) => {
  const C = Zt("btn", "btn-tag", {
    "btn-tag-alt-white": c === "white",
    "btn-tag-alt-gray": c === "gray",
    "btn-tag-alt-dark": c === "dark",
    disabled: u
  });
  let z = y;
  return w && y === "button" && (z = "a"), /* @__PURE__ */ B.jsx(
    Nr,
    {
      gaData: {
        ...Ru,
        section: t,
        // @deprecated - remove at some point
        ...r,
        text: e
      },
      children: /* @__PURE__ */ B.jsx(
        z,
        {
          type: z === "button" && h ? "button" : void 0,
          ...I,
          className: C,
          href: w,
          ref: S,
          onClick: h,
          "aria-label": i,
          children: e
        }
      )
    }
  );
};
Ts.propTypes = {
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
const Cs = ({
  src: e,
  alt: t,
  cssClasses: r,
  loading: i = "lazy",
  decoding: c = "async",
  dataTestId: u,
  fetchPriority: y = "auto",
  width: S,
  height: w,
  cardLink: h,
  title: I,
  caption: C,
  captionTitle: z,
  border: Y,
  dropShadow: E
}) => {
  const k = {
    src: e,
    alt: t,
    loading: i,
    decoding: c,
    fetchpriority: y,
    // React attribute bug workaround
    ...(r == null ? void 0 : r.length) > 0 && { className: Wl(r) },
    ...u && { "data-testid": u },
    ...S && { width: S },
    ...w && { height: w }
  }, P = Zt("uds-img", {
    borderless: !Y,
    "uds-img-drop-shadow": E
  }), q = (G) => {
    const H = G ? `${k.className} ${G}` : k.className;
    return h ? /* @__PURE__ */ B.jsxs("a", { href: h, children: [
      /* @__PURE__ */ B.jsx("img", { ...k, className: H }),
      /* @__PURE__ */ B.jsx("span", { className: "visually-hidden", children: I })
    ] }) : /* @__PURE__ */ B.jsx("img", { ...k, className: H });
  }, U = () => /* @__PURE__ */ B.jsx("div", { className: P, children: /* @__PURE__ */ B.jsxs("figure", { className: "figure uds-figure", children: [
    q(),
    C && /* @__PURE__ */ B.jsxs("figcaption", { className: "figure-caption uds-figure-caption", children: [
      z && /* @__PURE__ */ B.jsx("h3", { children: z }),
      /* @__PURE__ */ B.jsx(
        "span",
        {
          className: "uds-caption-text",
          dangerouslySetInnerHTML: Rr(C)
        }
      )
    ] })
  ] }) });
  return /* @__PURE__ */ B.jsx(B.Fragment, { children: C ? U() : q(P) });
};
Cs.propTypes = {
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
const Iu = Qt.div`
  &.cards-components a + &.cards-components a {
    margin-left: 5px;
  }
  .card-button {
    column-gap: 1rem;
  }
  .card-button .btn {
    margin: 0;
  }
`, Nu = (e) => /^[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e), Du = (e) => !e.startsWith("https://") && !e.startsWith("http://") && Nu(e) ? `mailto:${e}` : e, Pu = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, vr = ({
  type: e = "default",
  width: t = "100%",
  horizontal: r = !1,
  image: i,
  imageAltText: c,
  title: u,
  icon: y,
  body: S,
  eventFormat: w = "stack",
  eventLocation: h,
  eventTime: I,
  buttons: C,
  linkLabel: z,
  linkUrl: Y,
  tags: E,
  showBorders: k = !0,
  cardLink: P
}) => /* @__PURE__ */ B.jsx(
  As,
  {
    type: e,
    width: t,
    horizontal: r,
    image: i,
    imageAltText: c,
    title: u,
    icon: y,
    body: S,
    eventFormat: w,
    eventLocation: h,
    eventTime: I,
    buttons: C,
    linkLabel: z,
    linkUrl: Y,
    tags: E,
    showBorders: k,
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
const As = ({
  type: e = "default",
  width: t = "100%",
  horizontal: r = !1,
  image: i = "",
  imageAltText: c = "",
  title: u,
  icon: y = void 0,
  body: S = "",
  eventFormat: w = "stack",
  eventLocation: h = "",
  eventTime: I = "",
  buttons: C = void 0,
  linkLabel: z = void 0,
  linkUrl: Y = void 0,
  tags: E = void 0,
  showBorders: k = !0,
  cardLink: P
}) => {
  const q = Zt("card", "cards-components", {
    "card-degree": e === "degree",
    "card-event": e === "event",
    "card-story": e === "story",
    [`w-${t.replace("%", "")}`]: t !== "100%",
    "card-horizontal": r,
    borderless: !k
  });
  return /* @__PURE__ */ B.jsx(B.Fragment, { children: /* @__PURE__ */ B.jsxs(Iu, { className: q, "data-testid": "card-container", children: [
    !!i && /* @__PURE__ */ B.jsx(
      Cs,
      {
        src: i,
        alt: c,
        dataTestId: "card-image",
        cssClasses: ["card-img-top"],
        cardLink: P,
        title: u
      }
    ),
    !i && y && /* @__PURE__ */ B.jsx(
      "i",
      {
        className: `${y == null ? void 0 : y[0]} fa-${y == null ? void 0 : y[1]} fa-2x card-icon-top`,
        "data-testid": "card-icon"
      }
    ),
    r ? /* @__PURE__ */ B.jsx("div", { className: "card-content-wrapper", children: /* @__PURE__ */ B.jsx(
      ei,
      {
        type: e,
        body: S,
        eventFormat: w,
        eventLocation: h,
        eventTime: I,
        title: u,
        buttons: C,
        linkLabel: z,
        linkUrl: Y,
        tags: E,
        cardLink: P
      }
    ) }) : /* @__PURE__ */ B.jsx(
      ei,
      {
        type: e,
        body: S,
        eventFormat: w,
        eventLocation: h,
        eventTime: I,
        title: u,
        buttons: C,
        linkLabel: z,
        linkUrl: Y,
        tags: E,
        cardLink: P
      }
    )
  ] }) });
};
As.propTypes = {
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
const ei = ({
  type: e = "default",
  body: t = "",
  eventFormat: r = "stack",
  eventLocation: i = "",
  eventTime: c = "",
  title: u,
  buttons: y = void 0,
  linkLabel: S = void 0,
  linkUrl: w = void 0,
  tags: h = void 0,
  cardLink: I
}) => /* @__PURE__ */ B.jsxs(B.Fragment, { children: [
  !!u && /* @__PURE__ */ B.jsx("div", { className: "card-header", "data-testid": "card-title", children: /* @__PURE__ */ B.jsx("h3", { className: "card-title", children: I ? /* @__PURE__ */ B.jsx("a", { href: I, children: u }) : u }) }),
  !!t && /* @__PURE__ */ B.jsx("div", { className: "card-body", "data-testid": "card-body", children: /* @__PURE__ */ B.jsx("div", { dangerouslySetInnerHTML: Rr(t) }) }),
  e === "event" && (c || i) && /* @__PURE__ */ B.jsx(
    Os,
    {
      eventFormat: r,
      eventTime: c,
      eventLocation: i
    }
  ),
  y && /* @__PURE__ */ B.jsx("div", { className: "card-buttons", children: y.map((C) => /* @__PURE__ */ B.jsx(
    "div",
    {
      className: "card-button",
      "data-testid": "card-button",
      children: /* @__PURE__ */ B.jsx(
        ms,
        {
          ariaLabel: C.ariaLabel,
          color: C.color,
          icon: C.icon,
          href: C.href,
          label: C.label,
          onClick: C.onClick,
          size: C.size,
          target: C.target,
          cardTitle: u
        }
      )
    },
    `${C.label}-${C.href}`
  )) }),
  w && S && /* @__PURE__ */ B.jsx("div", { className: "card-link", "data-testid": "card-link", children: /* @__PURE__ */ B.jsx(
    Nr,
    {
      gaData: {
        ...Pu,
        section: u,
        text: S
      },
      children: /* @__PURE__ */ B.jsx("a", { href: Du(w), children: S })
    }
  ) }),
  h && /* @__PURE__ */ B.jsx("div", { className: "card-tags", "data-testid": "card-tags", children: h.map((C) => (
    // @ts-ignore
    /* @__PURE__ */ B.jsx(
      Ts,
      {
        ariaLabel: C.ariaLabel,
        color: C.color,
        href: C.href,
        label: C.label,
        onClick: C.onClick,
        cardTitle: u
      },
      `${C.label}-${C.href}`
    )
  )) })
] });
ei.propTypes = {
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
const Os = ({
  eventFormat: e = "stack",
  eventLocation: t = "",
  eventTime: r = ""
}) => e === "inline" ? /* @__PURE__ */ B.jsxs("div", { className: "card-event-details", children: [
  r && /* @__PURE__ */ B.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ B.jsx("div", { children: /* @__PURE__ */ B.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ B.jsx("div", { dangerouslySetInnerHTML: Rr(r) })
  ] }),
  t && /* @__PURE__ */ B.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ B.jsx("div", { children: /* @__PURE__ */ B.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ B.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Rr(t)
      }
    )
  ] })
] }) : /* @__PURE__ */ B.jsxs(B.Fragment, { children: [
  r && /* @__PURE__ */ B.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ B.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ B.jsx("div", { children: /* @__PURE__ */ B.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ B.jsx("div", { dangerouslySetInnerHTML: Rr(r) })
  ] }) }),
  t && /* @__PURE__ */ B.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ B.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ B.jsx("div", { children: /* @__PURE__ */ B.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ B.jsx("span", { children: /* @__PURE__ */ B.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Rr(t)
      }
    ) })
  ] }) })
] });
Os.propTypes = {
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
const Lu = Qt.div`
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
`, Fu = () => /* @__PURE__ */ B.jsxs(Lu, { children: [
  /* @__PURE__ */ B.jsx("div", {}),
  /* @__PURE__ */ B.jsx("div", {}),
  /* @__PURE__ */ B.jsx("div", {}),
  /* @__PURE__ */ B.jsx("div", {})
] }), ju = Qt.section``, di = il(null), Rs = ({
  defaultProps: e,
  dataSource: t,
  noFeedText: r,
  renderHeader: i,
  renderBody: c,
  dataTransformer: u,
  dataFilter: y,
  maxItems: S
}) => {
  const [{ data: w, loading: h, error: I }, C] = Bl(), [z, Y] = ln([]), E = { ...e.dataSource, ...t };
  return fn(() => {
    C(E == null ? void 0 : E.url);
  }, [E == null ? void 0 : E.url]), fn(() => {
    const k = w == null ? void 0 : w.nodes.map(u), P = k == null ? void 0 : k.filter(
      (q) => y(q, t == null ? void 0 : t.filters)
    );
    Y(S ? P == null ? void 0 : P.slice(0, S) : P);
  }, [w]), // Init the context to be used on its childrens
  /* @__PURE__ */ B.jsx(di.Provider, { value: { feeds: z }, children: /* @__PURE__ */ B.jsxs(ju, { children: [
    i,
    I ? /* @__PURE__ */ B.jsx("span", { children: "Error, try again!" }) : /* @__PURE__ */ B.jsxs(B.Fragment, { children: [
      h && !(z != null && z.length) && /* @__PURE__ */ B.jsx("div", { className: "text-center mt-4", children: /* @__PURE__ */ B.jsx(Fu, {}) }),
      z != null && z.length ? c : !h && /* @__PURE__ */ B.jsx("p", { className: "text-center", children: r })
    ] })
  ] }) });
};
Rs.propTypes = {
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
const Is = o.shape({
  url: o.string,
  filters: o.string
}), Mu = o.shape({
  header: fi,
  ctaButton: pi,
  dataSource: Is,
  maxItems: o.number
}), zu = Qt.div`
  @media screen and (min-width: 768px) {
    & {
      display: inline-flex;
      justify-content: flex-end;
    }
  }
`, Ns = ({
  defaultProps: e,
  header: t,
  ctaButton: r
}) => {
  const i = { ...e.header, ...t }, c = { ...e.ctaButton, ...r }, u = i.tag || "h2", y = u !== "h2", S = `text-${i.color} ${y ? "h2" : ""}`.trim();
  return /* @__PURE__ */ B.jsxs(
    "div",
    {
      className: "row justify-content-between align-items-center pb-6",
      "data-testid": "feed-header",
      children: [
        /* @__PURE__ */ B.jsx("div", { className: "col-sm-12 col-md-9", children: /* @__PURE__ */ B.jsx(u, { className: S, children: i.text }) }),
        /* @__PURE__ */ B.jsx(zu, { className: "col-sm-12 col-md-3", children: /* @__PURE__ */ B.jsx(
          Nr,
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
Ns.propTypes = {
  defaultProps: Mu,
  header: fi,
  ctaButton: pi
};
const Ds = ({ children: e }) => /* @__PURE__ */ B.jsx("div", { className: "row", "data-testid": "feed-body", children: /* @__PURE__ */ B.jsx("div", { className: "col", children: e }) });
Ds.propTypes = {
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
const $u = oi(function(e, t) {
  const {
    id: r,
    selected: i,
    title: c,
    selectTab: u,
    leftKeyPressed: y,
    rightKeyPressed: S,
    icon: w,
    gaData: h
  } = e, { isReact: I, isBootstrap: C } = hs(), z = ol(null);
  sl(t, () => ({
    focus() {
      z.current.focus();
    },
    scrollIntoView() {
      var E, k, P, q, U, G, H;
      const x = ((E = z.current) == null ? void 0 : E.offsetWidth) / 2 + z.current.offsetLeft, ae = ((P = (k = z.current) == null ? void 0 : k.offsetParent) == null ? void 0 : P.scrollLeft) + ((U = (q = z.current) == null ? void 0 : q.offsetParent) == null ? void 0 : U.offsetWidth) / 2;
      (H = (G = z.current) == null ? void 0 : G.offsetParent) == null || H.scrollBy({
        left: x - ae
      });
    }
  }), []);
  const Y = (E) => {
    E.keyCode === 37 ? (E.preventDefault(), y()) : E.keyCode === 39 && (E.preventDefault(), S());
  };
  return /* @__PURE__ */ B.jsx(Nr, { gaData: { ...h, text: c }, children: /* @__PURE__ */ B.jsxs(
    "a",
    {
      ref: z,
      className: `nav-item nav-link ${i ? "active" : ""}`,
      id: r,
      href: `#nav-${r}`,
      role: "tab",
      "aria-controls": `nav-${r}`,
      "aria-selected": i,
      "data-bs-toggle": C && "tab",
      onClick: I && ((E) => u(E, r, c)),
      onKeyDown: I && Y,
      tabIndex: i ? "" : "-1",
      children: [
        c,
        " ",
        w && /* @__PURE__ */ B.jsx("i", { className: `${w == null ? void 0 : w[0]} fa-${w == null ? void 0 : w[1]} me-1` })
      ]
    }
  ) });
});
$u.propTypes = {
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
var Uu = !1;
try {
  var No = Object.defineProperty({}, "passive", {
    get: function() {
      Uu = !0;
    }
  });
  window.addEventListener("testPassive", null, No), window.removeEventListener("testPassive", null, No);
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
var Hn = {}, Do;
function Hu() {
  if (Do) return Hn;
  Do = 1;
  var e = es;
  return Hn.createRoot = e.createRoot, Hn.hydrateRoot = e.hydrateRoot, Hn;
}
Hu();
(function() {
  var e = `@charset "UTF-8";.glide{position:relative;width:100%;box-sizing:border-box}.glide *{box-sizing:inherit}.glide__track{overflow:hidden}.glide__slides{position:relative;width:100%;list-style:none;backface-visibility:hidden;transform-style:preserve-3d;touch-action:pan-Y;overflow:hidden;margin:0;padding:0;white-space:nowrap;display:flex;flex-wrap:nowrap;will-change:transform}.glide__slides--dragging{-webkit-user-select:none;user-select:none}.glide__slide{width:100%;height:100%;flex-shrink:0;white-space:normal;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent}.glide__slide a{-webkit-user-select:none;user-select:none;-webkit-user-drag:none;-moz-user-select:none;-ms-user-select:none}.glide__arrows,.glide__bullets{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}.glide--rtl{direction:rtl}@media only screen and (min-width: 1260px){.container .aligned-carousel{margin-left:-124px!important}}.glide{display:flex;flex-direction:column;gap:32px;position:relative}[data-image-auto-size=true] .glide__slides .glide__slide{height:auto;position:relative;display:inline-flex;justify-content:center}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img{display:flex;width:100%;max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img{flex-grow:1;object-fit:cover}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img.uds-img{max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img figure.uds-figure{display:flex;justify-content:space-between;flex-direction:column}.glide .glide__track{position:relative}.glide .glide__track .glide__slides{margin-bottom:0;touch-action:auto}.glide .glide__track .glide__slides .glide__slide .card{width:100%}@media only screen and (min-width: 576px){.glide[data-has-shadow=true] .glide__track.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}}.glide__arrows{z-index:2;align-self:center}.glide__arrows .glide__arrow{color:#191919;width:4rem;height:4rem;margin:0 .5rem;background-color:#e8e8e8;border:1px solid #d0d0d0;border-radius:50%;font-size:1.3rem;text-shadow:0 .25em .5em rgba(0,0,0,.1);opacity:1;cursor:pointer;transition:opacity .15s ease,border .3s ease-in-out;line-height:1}.glide__arrows .glide__arrow.glide__arrow--disabled{color:#e8e8e8;background-color:#fafafa;border:1px solid #e8e8e8;opacity:1}.glide__arrows .glide__arrow:focus{outline:none}.glide__arrows .glide__arrow:hover{border-color:#fff}.glide__arrows .glide__arrow--left{left:2em}.glide__arrows .glide__arrow--right{right:2em}.glide__arrows .glide__arrow--disabled{opacity:.33}.glide__bullets{z-index:2;list-style:none;max-width:100%;display:flex;justify-content:center}.glide__bullet{transition:all .3s ease-in-out;background-color:#d0d0d0;width:1rem;height:1rem;padding:0;border-radius:50%;border:2px solid transparent;cursor:pointer;line-height:0;margin:.375rem}.glide__bullet:focus{outline:none}.glide__bullet:hover,.glide__bullet:focus{border:1px solid #d0d0d0;background-color:#191919}.glide__bullet--active{background-color:#191919}.glide.aligned-carousel{width:1448px;margin:auto}.glide.image-gallery{gap:0;overflow:hidden}.glide.image-gallery .glide__track{border:1px solid #d0d0d0}.glide.image-gallery .glide__track:after{content:none}.glide.image-gallery .glide__track .glide__slides{margin-bottom:0;height:100%}.glide.image-gallery .glide__track .glide__slides li.glide__slide{display:list-item}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img{height:100%}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img img{object-fit:cover;border:none}.glide.image-gallery .image-gallery-action-area{border:1px solid #d0d0d0;border-top:0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .image-navigator{border-bottom:1px solid #d0d0d0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text{padding:1rem 0;display:inline-block}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text>div{height:auto!important}.glide.image-gallery figcaption{padding:0 .75rem;font-size:.75rem}.glide.image-gallery figcaption h2{font-size:1.5rem;line-height:1.75rem;letter-spacing:-.0525rem}.glide.image-gallery .image-navigator{position:relative}.glide.image-gallery .image-navigator .image-navigator-images{min-height:64px;padding-top:1rem;padding-bottom:1rem;width:100%;margin:auto;overflow:hidden}.glide.image-gallery .image-navigator .image-navigator-images.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider{position:relative;left:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets{position:relative}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container{position:relative;margin:0 .5rem;height:48px;border:0;padding:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:first-child{margin-left:16rem}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container .bullet-image{flex-basis:auto;width:88px;height:100%;border-radius:0;border:0;z-index:2;object-fit:cover;margin:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:focus{box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .glide__bullet--active{background-color:transparent;border:5px solid #ffc627}.glide.image-gallery .image-navigator .glide__arrows{width:100%;display:flex;justify-content:space-between;align-items:center}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow{width:2.5rem;height:2.5rem;display:flex;align-items:center;justify-content:center;z-index:3;position:absolute;background-color:#fff}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow:hover{border-color:#d0d0d0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow .arrow-icon{font-size:1rem}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--prev{left:0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--next{right:0}@media only screen and (max-width: 576px){.glide{gap:21px}.glide:not(.glide.image-gallery) .glide__bullets{display:none}.glide.image-gallery{width:100%;margin:auto!important}.glide.image-gallery .image-navigator .image-navigator-images .glide__arrows .glide__arrow{display:none}}@media only screen and (max-width: 1260px){.glide.aligned-carousel{width:100%}}.glide--swipeable{cursor:grab;cursor:-moz-grab;cursor:-webkit-grab}.glide--dragging{cursor:grabbing;cursor:-moz-grabbing;cursor:-webkit-grabbing}.glide[data-remove-side-background=true]:after,.glide[data-remove-side-background=true]:before{content:none}.glide button:focus,.glide a:focus,.glide input:focus,.glide textarea:focus,.glide select:focus{outline:none!important;box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery,.glide.image-carousel{margin:auto}.glide.image-gallery[role=figure],.glide.image-gallery figure.uds-figure,.glide.image-carousel[role=figure],.glide.image-carousel figure.uds-figure{margin:0}.glide.image-gallery[role=figure] figcaption *,.glide.image-gallery[role=figure] .uds-caption-text,.glide.image-gallery figure.uds-figure figcaption *,.glide.image-gallery figure.uds-figure .uds-caption-text,.glide.image-carousel[role=figure] figcaption *,.glide.image-carousel[role=figure] .uds-caption-text,.glide.image-carousel figure.uds-figure figcaption *,.glide.image-carousel figure.uds-figure .uds-caption-text{color:#191919;max-width:100%}
`, t = document.createElement("style");
  t.type = "text/css", t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e)), document.head.appendChild(t);
})();
const Po = {
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
}, Lo = [
  "eventTopics",
  "eventUnits",
  "interests",
  "audiences",
  "eventTypes",
  "collegeUnit"
], Fo = (e) => e.toLowerCase().split(" ").join("_"), Bu = (e, t) => {
  if (!t) return !0;
  const r = t.split(",");
  for (let i = 0; i < r.length; i += 1) {
    const c = Fo(r[i]);
    for (let u = 0; u < Lo.length; u += 1) {
      const y = Lo[u];
      if (Fo(e[y] || "").includes(c)) return !0;
    }
  }
  return !1;
}, Wu = (e) => ({
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
    Rs,
    {
      renderHeader: t && r ? /* @__PURE__ */ dt.jsx(
        Ns,
        {
          header: t,
          ctaButton: r,
          defaultProps: Po
        }
      ) : null,
      renderBody: /* @__PURE__ */ dt.jsx(Ds, { children: e }),
      dataTransformer: Wu,
      dataFilter: Bu,
      dataSource: i,
      defaultProps: Po,
      noFeedText: "No events to show.",
      maxItems: c
    }
  )
);
hi.propTypes = {
  header: fi,
  ctaButton: pi,
  dataSource: Is,
  maxItems: Ge.number,
  children: Ge.element
};
const qu = Ge.shape({
  color: Ge.oneOf(["white", "dark"]),
  text: Ge.string
}), Yu = Ge.shape({
  color: Ge.oneOf(["gold", "maroon", "gray", "dark"]),
  text: Ge.string,
  url: Ge.string
}), Gu = Ge.shape({
  url: Ge.string.isRequired,
  filters: Ge.string
}).isRequired, Ps = {
  header: qu,
  ctaButton: Yu,
  dataSource: Gu,
  maxItems: Ge.number
}, Vu = (e) => e.toLocaleDateString("en-US", {
  timeZone: "UTC",
  weekday: "long",
  month: "long",
  day: "numeric"
}), jo = (e) => e.toLocaleString("en-US", {
  timeZone: "UTC"
}), ti = (e) => {
  let t = e.split("T");
  return t = t.length > 1 ? t.join("T") : `${t[0].split(":")[0]}T00:00:00Z`, t;
}, Mo = (e) => {
  let t = e.getHours(), r = e.getMinutes();
  const i = t >= 12 ? "p.m." : "a.m.";
  return t %= 12, t = t || 12, r = r < 10 ? `0${r}` : r, `${t}:${r} ${i}`;
}, Ls = (e, t) => {
  const r = ti(e);
  let i = jo(new Date(r));
  if (i = Mo(new Date(i)), !t || e === t)
    return i;
  const c = ti(t);
  let u = jo(new Date(c));
  return u = Mo(new Date(u)), `${i} to ${u}`;
}, ra = (e, t) => {
  const r = ti(e);
  return {
    ISO: r.split("T")[0],
    COMPLETE: Vu(new Date(r))
  }[t];
};
var $a = { exports: {} }, Ye = {};
var zo;
function Xu() {
  if (zo) return Ye;
  zo = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), u = Symbol.for("react.consumer"), y = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), I = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), z = Symbol.for("react.offscreen"), Y = Symbol.for("react.client.reference");
  function E(k) {
    if (typeof k == "object" && k !== null) {
      var P = k.$$typeof;
      switch (P) {
        case e:
          switch (k = k.type, k) {
            case r:
            case c:
            case i:
            case w:
            case h:
              return k;
            default:
              switch (k = k && k.$$typeof, k) {
                case y:
                case S:
                case C:
                case I:
                  return k;
                case u:
                  return k;
                default:
                  return P;
              }
          }
        case t:
          return P;
      }
    }
  }
  return Ye.ContextConsumer = u, Ye.ContextProvider = y, Ye.Element = e, Ye.ForwardRef = S, Ye.Fragment = r, Ye.Lazy = C, Ye.Memo = I, Ye.Portal = t, Ye.Profiler = c, Ye.StrictMode = i, Ye.Suspense = w, Ye.SuspenseList = h, Ye.isContextConsumer = function(k) {
    return E(k) === u;
  }, Ye.isContextProvider = function(k) {
    return E(k) === y;
  }, Ye.isElement = function(k) {
    return typeof k == "object" && k !== null && k.$$typeof === e;
  }, Ye.isForwardRef = function(k) {
    return E(k) === S;
  }, Ye.isFragment = function(k) {
    return E(k) === r;
  }, Ye.isLazy = function(k) {
    return E(k) === C;
  }, Ye.isMemo = function(k) {
    return E(k) === I;
  }, Ye.isPortal = function(k) {
    return E(k) === t;
  }, Ye.isProfiler = function(k) {
    return E(k) === c;
  }, Ye.isStrictMode = function(k) {
    return E(k) === i;
  }, Ye.isSuspense = function(k) {
    return E(k) === w;
  }, Ye.isSuspenseList = function(k) {
    return E(k) === h;
  }, Ye.isValidElementType = function(k) {
    return typeof k == "string" || typeof k == "function" || k === r || k === c || k === i || k === w || k === h || k === z || typeof k == "object" && k !== null && (k.$$typeof === C || k.$$typeof === I || k.$$typeof === y || k.$$typeof === u || k.$$typeof === S || k.$$typeof === Y || k.getModuleId !== void 0);
  }, Ye.typeOf = E, Ye;
}
var $o;
function Ku() {
  return $o || ($o = 1, $a.exports = /* @__PURE__ */ Xu()), $a.exports;
}
var Fs = /* @__PURE__ */ Ku();
function Ju(e) {
  function t(j, A, F, L, m) {
    for (var ee = 0, _ = 0, ie = 0, Q = 0, te, X, ne = 0, de = 0, J, ge = J = te = 0, re = 0, le = 0, Ue = 0, ce = 0, it = F.length, We = it - 1, ke, W = "", oe = "", Ke = "", De = "", Pe; re < it; ) {
      if (X = F.charCodeAt(re), re === We && _ + Q + ie + ee !== 0 && (_ !== 0 && (X = _ === 47 ? 10 : 47), Q = ie = ee = 0, it++, We++), _ + Q + ie + ee === 0) {
        if (re === We && (0 < le && (W = W.replace(z, "")), 0 < W.trim().length)) {
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
            switch (J = F.substring(ce, re), te === 0 && (te = (W = W.replace(C, "").trim()).charCodeAt(0)), te) {
              case 64:
                switch (0 < le && (W = W.replace(z, "")), X = W.charCodeAt(1), X) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    le = A;
                    break;
                  default:
                    le = st;
                }
                if (J = t(A, le, J, X, m + 1), ce = J.length, 0 < Oe && (le = r(st, W, Ue), Pe = S(3, J, le, A, Re, me, ce, X, m, L), W = le.join(""), Pe !== void 0 && (ce = (J = Pe.trim()).length) === 0 && (X = 0, J = "")), 0 < ce) switch (X) {
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
                J = t(A, r(A, W, Ue), J, L, m + 1);
            }
            Ke += J, J = Ue = le = ge = te = 0, W = "", X = F.charCodeAt(++re);
            break;
          case 125:
          case 59:
            if (W = (0 < le ? W.replace(z, "") : W).trim(), 1 < (ce = W.length)) switch (ge === 0 && (te = W.charCodeAt(0), te === 45 || 96 < te && 123 > te) && (ce = (W = W.replace(" ", ":")).length), 0 < Oe && (Pe = S(1, W, A, j, Re, me, oe.length, L, m, L)) !== void 0 && (ce = (W = Pe.trim()).length) === 0 && (W = "\0\0"), te = W.charCodeAt(0), X = W.charCodeAt(1), te) {
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
          _ === 47 ? _ = 0 : 1 + te === 0 && L !== 107 && 0 < W.length && (le = 1, W += "\0"), 0 < Oe * tt && S(0, W, A, j, Re, me, oe.length, L, m, L), me = 1, Re++;
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
      if (le = A, 0 < Oe && (Pe = S(2, oe, le, j, Re, me, ce, L, m, L), Pe !== void 0 && (oe = Pe).length === 0)) return De + oe + Ke;
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
  function r(j, A, F) {
    var L = A.trim().split(P);
    A = L;
    var m = L.length, ee = j.length;
    switch (ee) {
      case 0:
      case 1:
        var _ = 0;
        for (j = ee === 0 ? "" : j[0] + " "; _ < m; ++_)
          A[_] = i(j, A[_], F).trim();
        break;
      default:
        var ie = _ = 0;
        for (A = []; _ < m; ++_)
          for (var Q = 0; Q < ee; ++Q)
            A[ie++] = i(j[Q] + " ", L[_], F).trim();
    }
    return A;
  }
  function i(j, A, F) {
    var L = A.charCodeAt(0);
    switch (33 > L && (L = (A = A.trim()).charCodeAt(0)), L) {
      case 38:
        return A.replace(q, "$1" + j.trim());
      case 58:
        return j.trim() + A.replace(q, "$1" + j.trim());
      default:
        if (0 < 1 * F && 0 < A.indexOf("\f")) return A.replace(q, (j.charCodeAt(0) === 58 ? "" : "$1") + j.trim());
    }
    return j + A;
  }
  function c(j, A, F, L) {
    var m = j + ";", ee = 2 * A + 3 * F + 4 * L;
    if (ee === 944) {
      j = m.indexOf(":", 9) + 1;
      var _ = m.substring(j, m.length - 1).trim();
      return _ = m.substring(0, j).trim() + _ + ";", Te === 1 || Te === 2 && u(_, 1) ? "-webkit-" + _ + _ : _;
    }
    if (Te === 0 || Te === 2 && !u(m, 1)) return m;
    switch (ee) {
      case 1015:
        return m.charCodeAt(10) === 97 ? "-webkit-" + m + m : m;
      case 951:
        return m.charCodeAt(3) === 116 ? "-webkit-" + m + m : m;
      case 963:
        return m.charCodeAt(5) === 110 ? "-webkit-" + m + m : m;
      case 1009:
        if (m.charCodeAt(4) !== 100) break;
      case 969:
      case 942:
        return "-webkit-" + m + m;
      case 978:
        return "-webkit-" + m + "-moz-" + m + m;
      case 1019:
      case 983:
        return "-webkit-" + m + "-moz-" + m + "-ms-" + m + m;
      case 883:
        if (m.charCodeAt(8) === 45) return "-webkit-" + m + m;
        if (0 < m.indexOf("image-set(", 11)) return m.replace(ue, "$1-webkit-$2") + m;
        break;
      case 932:
        if (m.charCodeAt(4) === 45) switch (m.charCodeAt(5)) {
          case 103:
            return "-webkit-box-" + m.replace("-grow", "") + "-webkit-" + m + "-ms-" + m.replace("grow", "positive") + m;
          case 115:
            return "-webkit-" + m + "-ms-" + m.replace("shrink", "negative") + m;
          case 98:
            return "-webkit-" + m + "-ms-" + m.replace("basis", "preferred-size") + m;
        }
        return "-webkit-" + m + "-ms-" + m + m;
      case 964:
        return "-webkit-" + m + "-ms-flex-" + m + m;
      case 1023:
        if (m.charCodeAt(8) !== 99) break;
        return _ = m.substring(m.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + _ + "-webkit-" + m + "-ms-flex-pack" + _ + m;
      case 1005:
        return E.test(m) ? m.replace(Y, ":-webkit-") + m.replace(Y, ":-moz-") + m : m;
      case 1e3:
        switch (_ = m.substring(13).trim(), A = _.indexOf("-") + 1, _.charCodeAt(0) + _.charCodeAt(A)) {
          case 226:
            _ = m.replace(x, "tb");
            break;
          case 232:
            _ = m.replace(x, "tb-rl");
            break;
          case 220:
            _ = m.replace(x, "lr");
            break;
          default:
            return m;
        }
        return "-webkit-" + m + "-ms-" + _ + m;
      case 1017:
        if (m.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (A = (m = j).length - 10, _ = (m.charCodeAt(A) === 33 ? m.substring(0, A) : m).substring(j.indexOf(":", 7) + 1).trim(), ee = _.charCodeAt(0) + (_.charCodeAt(7) | 0)) {
          case 203:
            if (111 > _.charCodeAt(8)) break;
          case 115:
            m = m.replace(_, "-webkit-" + _) + ";" + m;
            break;
          case 207:
          case 102:
            m = m.replace(_, "-webkit-" + (102 < ee ? "inline-" : "") + "box") + ";" + m.replace(_, "-webkit-" + _) + ";" + m.replace(_, "-ms-" + _ + "box") + ";" + m;
        }
        return m + ";";
      case 938:
        if (m.charCodeAt(5) === 45) switch (m.charCodeAt(6)) {
          case 105:
            return _ = m.replace("-items", ""), "-webkit-" + m + "-webkit-box-" + _ + "-ms-flex-" + _ + m;
          case 115:
            return "-webkit-" + m + "-ms-flex-item-" + m.replace(Ie, "") + m;
          default:
            return "-webkit-" + m + "-ms-flex-line-pack" + m.replace("align-content", "").replace(Ie, "") + m;
        }
        break;
      case 973:
      case 989:
        if (m.charCodeAt(3) !== 45 || m.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (Ve.test(j) === !0) return (_ = j.substring(j.indexOf(":") + 1)).charCodeAt(0) === 115 ? c(j.replace("stretch", "fill-available"), A, F, L).replace(":fill-available", ":stretch") : m.replace(_, "-webkit-" + _) + m.replace(_, "-moz-" + _.replace("fill-", "")) + m;
        break;
      case 962:
        if (m = "-webkit-" + m + (m.charCodeAt(5) === 102 ? "-ms-" + m : "") + m, F + L === 211 && m.charCodeAt(13) === 105 && 0 < m.indexOf("transform", 10)) return m.substring(0, m.indexOf(";", 27) + 1).replace(k, "$1-webkit-$2") + m;
    }
    return m;
  }
  function u(j, A) {
    var F = j.indexOf(A === 1 ? ":" : "{"), L = j.substring(0, A !== 3 ? F : 10);
    return F = j.substring(F + 1, j.length - 1), Be(A !== 2 ? L : L.replace(Fe, "$1"), F, A);
  }
  function y(j, A) {
    var F = c(A, A.charCodeAt(0), A.charCodeAt(1), A.charCodeAt(2));
    return F !== A + ";" ? F.replace(Se, " or ($1)").substring(4) : "(" + A + ")";
  }
  function S(j, A, F, L, m, ee, _, ie, Q, te) {
    for (var X = 0, ne = A, de; X < Oe; ++X)
      switch (de = je[X].call(I, j, ne, F, L, m, ee, _, ie, Q, te)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          ne = de;
      }
    if (ne !== A) return ne;
  }
  function w(j) {
    switch (j) {
      case void 0:
      case null:
        Oe = je.length = 0;
        break;
      default:
        if (typeof j == "function") je[Oe++] = j;
        else if (typeof j == "object") for (var A = 0, F = j.length; A < F; ++A)
          w(j[A]);
        else tt = !!j | 0;
    }
    return w;
  }
  function h(j) {
    return j = j.prefix, j !== void 0 && (Be = null, j ? typeof j != "function" ? Te = 1 : (Te = 2, Be = j) : Te = 0), h;
  }
  function I(j, A) {
    var F = j;
    if (33 > F.charCodeAt(0) && (F = F.trim()), se = F, F = [se], 0 < Oe) {
      var L = S(-1, A, F, F, Re, me, 0, 0, 0, 0);
      L !== void 0 && typeof L == "string" && (A = L);
    }
    var m = t(st, F, A, 0, 0);
    return 0 < Oe && (L = S(-2, m, F, F, Re, me, m.length, 0, 0, 0), L !== void 0 && (m = L)), se = "", Ne = 0, me = Re = 1, m;
  }
  var C = /^\0+/g, z = /[\0\r\f]/g, Y = /: */g, E = /zoo|gra/, k = /([,: ])(transform)/g, P = /,\r+?/g, q = /([\t\r\n ])*\f?&/g, U = /@(k\w+)\s*(\S*)\s*/, G = /::(place)/g, H = /:(read-only)/g, x = /[svh]\w+-[tblr]{2}/, ae = /\(\s*(.*)\s*\)/g, Se = /([\s\S]*?);/g, Ie = /-self|flex-/g, Fe = /[^]*?(:[rp][el]a[\w-]+)[^]*/, Ve = /stretch|:\s*\w+\-(?:conte|avail)/, ue = /([^-])(image-set\()/, me = 1, Re = 1, Ne = 0, Te = 1, st = [], je = [], Oe = 0, Be = null, tt = 0, se = "";
  return I.use = w, I.set = h, e !== void 0 && h(e), I;
}
var Zu = {
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
function Qu(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var ed = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Uo = /* @__PURE__ */ Qu(
  function(e) {
    return ed.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Ua = { exports: {} }, $e = {};
var Ho;
function td() {
  if (Ho) return $e;
  Ho = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, i = e ? Symbol.for("react.fragment") : 60107, c = e ? Symbol.for("react.strict_mode") : 60108, u = e ? Symbol.for("react.profiler") : 60114, y = e ? Symbol.for("react.provider") : 60109, S = e ? Symbol.for("react.context") : 60110, w = e ? Symbol.for("react.async_mode") : 60111, h = e ? Symbol.for("react.concurrent_mode") : 60111, I = e ? Symbol.for("react.forward_ref") : 60112, C = e ? Symbol.for("react.suspense") : 60113, z = e ? Symbol.for("react.suspense_list") : 60120, Y = e ? Symbol.for("react.memo") : 60115, E = e ? Symbol.for("react.lazy") : 60116, k = e ? Symbol.for("react.block") : 60121, P = e ? Symbol.for("react.fundamental") : 60117, q = e ? Symbol.for("react.responder") : 60118, U = e ? Symbol.for("react.scope") : 60119;
  function G(x) {
    if (typeof x == "object" && x !== null) {
      var ae = x.$$typeof;
      switch (ae) {
        case t:
          switch (x = x.type, x) {
            case w:
            case h:
            case i:
            case u:
            case c:
            case C:
              return x;
            default:
              switch (x = x && x.$$typeof, x) {
                case S:
                case I:
                case E:
                case Y:
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
    return G(x) === h;
  }
  return $e.AsyncMode = w, $e.ConcurrentMode = h, $e.ContextConsumer = S, $e.ContextProvider = y, $e.Element = t, $e.ForwardRef = I, $e.Fragment = i, $e.Lazy = E, $e.Memo = Y, $e.Portal = r, $e.Profiler = u, $e.StrictMode = c, $e.Suspense = C, $e.isAsyncMode = function(x) {
    return H(x) || G(x) === w;
  }, $e.isConcurrentMode = H, $e.isContextConsumer = function(x) {
    return G(x) === S;
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
    return G(x) === Y;
  }, $e.isPortal = function(x) {
    return G(x) === r;
  }, $e.isProfiler = function(x) {
    return G(x) === u;
  }, $e.isStrictMode = function(x) {
    return G(x) === c;
  }, $e.isSuspense = function(x) {
    return G(x) === C;
  }, $e.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === i || x === h || x === u || x === c || x === C || x === z || typeof x == "object" && x !== null && (x.$$typeof === E || x.$$typeof === Y || x.$$typeof === y || x.$$typeof === S || x.$$typeof === I || x.$$typeof === P || x.$$typeof === q || x.$$typeof === U || x.$$typeof === k);
  }, $e.typeOf = G, $e;
}
var Bo;
function rd() {
  return Bo || (Bo = 1, Ua.exports = td()), Ua.exports;
}
var Ha, Wo;
function nd() {
  if (Wo) return Ha;
  Wo = 1;
  var e = rd(), t = {
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
  var S = Object.defineProperty, w = Object.getOwnPropertyNames, h = Object.getOwnPropertySymbols, I = Object.getOwnPropertyDescriptor, C = Object.getPrototypeOf, z = Object.prototype;
  function Y(E, k, P) {
    if (typeof k != "string") {
      if (z) {
        var q = C(k);
        q && q !== z && Y(E, q, P);
      }
      var U = w(k);
      h && (U = U.concat(h(k)));
      for (var G = y(E), H = y(k), x = 0; x < U.length; ++x) {
        var ae = U[x];
        if (!r[ae] && !(P && P[ae]) && !(H && H[ae]) && !(G && G[ae])) {
          var Se = I(k, ae);
          try {
            S(E, ae, Se);
          } catch {
          }
        }
      }
    }
    return E;
  }
  return Ha = Y, Ha;
}
var ad = nd();
const id = /* @__PURE__ */ ts(ad);
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
var qo = function(e, t) {
  for (var r = [e[0]], i = 0, c = t.length; i < c; i += 1) r.push(t[i], e[i + 1]);
  return r;
}, ri = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Fs.typeOf(e);
}, na = Object.freeze([]), Sr = Object.freeze({});
function hn(e) {
  return typeof e == "function";
}
function Yo(e) {
  return e.displayName || e.name || "Component";
}
function mi(e) {
  return e && typeof e.styledComponentId == "string";
}
var Mr = typeof bt < "u" && bt.env !== void 0 && (bt.env.REACT_APP_SC_ATTR || bt.env.SC_ATTR) || "data-styled", gi = typeof window < "u" && "HTMLElement" in window, od = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof bt < "u" && bt.env !== void 0 && (bt.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && bt.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? bt.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && bt.env.REACT_APP_SC_DISABLE_SPEEDY : bt.env.SC_DISABLE_SPEEDY !== void 0 && bt.env.SC_DISABLE_SPEEDY !== "" ? bt.env.SC_DISABLE_SPEEDY !== "false" && bt.env.SC_DISABLE_SPEEDY : bt.env.NODE_ENV !== "production"));
function bn(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : ""));
}
var sd = function() {
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
      for (var S = u; S < y; S++) this.groupSizes[S] = 0;
    }
    for (var w = this.indexOfGroup(r + 1), h = 0, I = i.length; h < I; h++) this.tag.insertRule(w, i[h]) && (this.groupSizes[r]++, w++);
  }, t.clearGroup = function(r) {
    if (r < this.length) {
      var i = this.groupSizes[r], c = this.indexOfGroup(r), u = c + i;
      this.groupSizes[r] = 0;
      for (var y = c; y < u; y++) this.tag.deleteRule(c);
    }
  }, t.getGroup = function(r) {
    var i = "";
    if (r >= this.length || this.groupSizes[r] === 0) return i;
    for (var c = this.groupSizes[r], u = this.indexOfGroup(r), y = u + c, S = u; S < y; S++) i += this.tag.getRule(S) + `/*!sc*/
`;
    return i;
  }, e;
}(), Jn = /* @__PURE__ */ new Map(), aa = /* @__PURE__ */ new Map(), dn = 1, Bn = function(e) {
  if (Jn.has(e)) return Jn.get(e);
  for (; aa.has(dn); ) dn++;
  var t = dn++;
  return Jn.set(e, t), aa.set(t, e), t;
}, ld = function(e) {
  return aa.get(e);
}, cd = function(e, t) {
  t >= dn && (dn = t + 1), Jn.set(e, t), aa.set(t, e);
}, ud = "style[" + Mr + '][data-styled-version="5.3.11"]', dd = new RegExp("^" + Mr + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), fd = function(e, t, r) {
  for (var i, c = r.split(","), u = 0, y = c.length; u < y; u++) (i = c[u]) && e.registerName(t, i);
}, pd = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), i = [], c = 0, u = r.length; c < u; c++) {
    var y = r[c].trim();
    if (y) {
      var S = y.match(dd);
      if (S) {
        var w = 0 | parseInt(S[1], 10), h = S[2];
        w !== 0 && (cd(h, w), fd(e, h, S[3]), e.getTag().insertRules(w, i)), i.length = 0;
      } else i.push(y);
    }
  }
}, hd = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, js = function(e) {
  var t = document.head, r = e || t, i = document.createElement("style"), c = function(S) {
    for (var w = S.childNodes, h = w.length; h >= 0; h--) {
      var I = w[h];
      if (I && I.nodeType === 1 && I.hasAttribute(Mr)) return I;
    }
  }(r), u = c !== void 0 ? c.nextSibling : null;
  i.setAttribute(Mr, "active"), i.setAttribute("data-styled-version", "5.3.11");
  var y = hd();
  return y && i.setAttribute("nonce", y), r.insertBefore(i, u), i;
}, md = function() {
  function e(r) {
    var i = this.element = js(r);
    i.appendChild(document.createTextNode("")), this.sheet = function(c) {
      if (c.sheet) return c.sheet;
      for (var u = document.styleSheets, y = 0, S = u.length; y < S; y++) {
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
}(), gd = function() {
  function e(r) {
    var i = this.element = js(r);
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
}(), yd = function() {
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
}(), Go = gi, bd = { isServer: !gi, useCSSOMInjection: !od }, Ms = function() {
  function e(r, i, c) {
    r === void 0 && (r = Sr), i === void 0 && (i = {}), this.options = hr({}, bd, {}, r), this.gs = i, this.names = new Map(c), this.server = !!r.isServer, !this.server && gi && Go && (Go = !1, function(u) {
      for (var y = document.querySelectorAll(ud), S = 0, w = y.length; S < w; S++) {
        var h = y[S];
        h && h.getAttribute(Mr) !== "active" && (pd(u, h), h.parentNode && h.parentNode.removeChild(h));
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
    return this.tag || (this.tag = (c = (i = this.options).isServer, u = i.useCSSOMInjection, y = i.target, r = c ? new yd(y) : u ? new md(y) : new gd(y), new sd(r)));
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
        var S = ld(y);
        if (S !== void 0) {
          var w = r.names.get(S), h = i.getGroup(y);
          if (w && h && w.size) {
            var I = Mr + ".g" + y + '[id="' + S + '"]', C = "";
            w !== void 0 && w.forEach(function(z) {
              z.length > 0 && (C += z + ",");
            }), u += "" + h + I + '{content:"' + C + `"}/*!sc*/
`;
          }
        }
      }
      return u;
    }(this);
  }, e;
}(), vd = /(a)(d)/gi, Vo = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function ni(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = Vo(t % 52) + r;
  return (Vo(t % 52) + r).replace(vd, "$1-$2");
}
var Lr = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, zs = function(e) {
  return Lr(5381, e);
};
function wd(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (hn(r) && !mi(r)) return !1;
  }
  return !0;
}
var Sd = zs("5.3.11"), kd = function() {
  function e(t, r, i) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (i === void 0 || i.isStatic) && wd(t), this.componentId = r, this.baseHash = Lr(Sd, r), this.baseStyle = i, Ms.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, i) {
    var c = this.componentId, u = [];
    if (this.baseStyle && u.push(this.baseStyle.generateAndInjectStyles(t, r, i)), this.isStatic && !i.hash) if (this.staticRulesId && r.hasNameForId(c, this.staticRulesId)) u.push(this.staticRulesId);
    else {
      var y = zr(this.rules, t, r, i).join(""), S = ni(Lr(this.baseHash, y) >>> 0);
      if (!r.hasNameForId(c, S)) {
        var w = i(y, "." + S, void 0, c);
        r.insertRules(c, S, w);
      }
      u.push(S), this.staticRulesId = S;
    }
    else {
      for (var h = this.rules.length, I = Lr(this.baseHash, i.hash), C = "", z = 0; z < h; z++) {
        var Y = this.rules[z];
        if (typeof Y == "string") C += Y;
        else if (Y) {
          var E = zr(Y, t, r, i), k = Array.isArray(E) ? E.join("") : E;
          I = Lr(I, k + z), C += k;
        }
      }
      if (C) {
        var P = ni(I >>> 0);
        if (!r.hasNameForId(c, P)) {
          var q = i(C, "." + P, void 0, c);
          r.insertRules(c, P, q);
        }
        u.push(P);
      }
    }
    return u.join(" ");
  }, e;
}(), xd = /^\s*\/\/.*$/gm, Ed = [":", "[", ".", "#"];
function _d(e) {
  var t, r, i, c, u = Sr, y = u.options, S = y === void 0 ? Sr : y, w = u.plugins, h = w === void 0 ? na : w, I = new Ju(S), C = [], z = /* @__PURE__ */ function(k) {
    function P(q) {
      if (q) try {
        k(q + "}");
      } catch {
      }
    }
    return function(q, U, G, H, x, ae, Se, Ie, Fe, Ve) {
      switch (q) {
        case 1:
          if (Fe === 0 && U.charCodeAt(0) === 64) return k(U + ";"), "";
          break;
        case 2:
          if (Ie === 0) return U + "/*|*/";
          break;
        case 3:
          switch (Ie) {
            case 102:
            case 112:
              return k(G[0] + U), "";
            default:
              return U + (Ve === 0 ? "/*|*/" : "");
          }
        case -2:
          U.split("/*|*/}").forEach(P);
      }
    };
  }(function(k) {
    C.push(k);
  }), Y = function(k, P, q) {
    return P === 0 && Ed.indexOf(q[r.length]) !== -1 || q.match(c) ? k : "." + t;
  };
  function E(k, P, q, U) {
    U === void 0 && (U = "&");
    var G = k.replace(xd, ""), H = P && q ? q + " " + P + " { " + G + " }" : G;
    return t = U, r = P, i = new RegExp("\\" + r + "\\b", "g"), c = new RegExp("(\\" + r + "\\b){2,}"), I(q || !P ? "" : P, H);
  }
  return I.use([].concat(h, [function(k, P, q) {
    k === 2 && q.length && q[0].lastIndexOf(r) > 0 && (q[0] = q[0].replace(i, Y));
  }, z, function(k) {
    if (k === -2) {
      var P = C;
      return C = [], P;
    }
  }])), E.hash = h.length ? h.reduce(function(k, P) {
    return P.name || bn(15), Lr(k, P.name);
  }, 5381).toString() : "", E;
}
var $s = ft.createContext();
$s.Consumer;
var Us = ft.createContext(), Td = (Us.Consumer, new Ms()), ai = _d();
function Cd() {
  return kr($s) || Td;
}
function Ad() {
  return kr(Us) || ai;
}
var Od = function() {
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
}(), Rd = /([A-Z])/, Id = /([A-Z])/g, Nd = /^ms-/, Dd = function(e) {
  return "-" + e.toLowerCase();
};
function Xo(e) {
  return Rd.test(e) ? e.replace(Id, Dd).replace(Nd, "-ms-") : e;
}
var Ko = function(e) {
  return e == null || e === !1 || e === "";
};
function zr(e, t, r, i) {
  if (Array.isArray(e)) {
    for (var c, u = [], y = 0, S = e.length; y < S; y += 1) (c = zr(e[y], t, r, i)) !== "" && (Array.isArray(c) ? u.push.apply(u, c) : u.push(c));
    return u;
  }
  if (Ko(e)) return "";
  if (mi(e)) return "." + e.styledComponentId;
  if (hn(e)) {
    if (typeof (h = e) != "function" || h.prototype && h.prototype.isReactComponent || !t) return e;
    var w = e(t);
    return zr(w, t, r, i);
  }
  var h;
  return e instanceof Od ? r ? (e.inject(r, i), e.getName(i)) : e : ri(e) ? function I(C, z) {
    var Y, E, k = [];
    for (var P in C) C.hasOwnProperty(P) && !Ko(C[P]) && (Array.isArray(C[P]) && C[P].isCss || hn(C[P]) ? k.push(Xo(P) + ":", C[P], ";") : ri(C[P]) ? k.push.apply(k, I(C[P], P)) : k.push(Xo(P) + ": " + (Y = P, (E = C[P]) == null || typeof E == "boolean" || E === "" ? "" : typeof E != "number" || E === 0 || Y in Zu || Y.startsWith("--") ? String(E).trim() : E + "px") + ";"));
    return z ? [z + " {"].concat(k, ["}"]) : k;
  }(e) : e.toString();
}
var Jo = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Pd(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
  return hn(e) || ri(e) ? Jo(zr(qo(na, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Jo(zr(qo(e, r)));
}
var Ld = function(e, t, r) {
  return r === void 0 && (r = Sr), e.theme !== r.theme && e.theme || t || r.theme;
}, Fd = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, jd = /(^-|-$)/g;
function Ba(e) {
  return e.replace(Fd, "-").replace(jd, "");
}
var Md = function(e) {
  return ni(zs(e) >>> 0);
};
function Wn(e) {
  return typeof e == "string" && bt.env.NODE_ENV === "production";
}
var ii = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, zd = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function $d(e, t, r) {
  var i = e[r];
  ii(t) && ii(i) ? Hs(i, t) : e[r] = t;
}
function Hs(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
  for (var c = 0, u = r; c < u.length; c++) {
    var y = u[c];
    if (ii(y)) for (var S in y) zd(S) && $d(e, y[S], S);
  }
  return e;
}
var Bs = ft.createContext();
Bs.Consumer;
var Wa = {};
function Ws(e, t, r) {
  var i = mi(e), c = !Wn(e), u = t.attrs, y = u === void 0 ? na : u, S = t.componentId, w = S === void 0 ? function(U, G) {
    var H = typeof U != "string" ? "sc" : Ba(U);
    Wa[H] = (Wa[H] || 0) + 1;
    var x = H + "-" + Md("5.3.11" + H + Wa[H]);
    return G ? G + "-" + x : x;
  }(t.displayName, t.parentComponentId) : S, h = t.displayName, I = h === void 0 ? function(U) {
    return Wn(U) ? "styled." + U : "Styled(" + Yo(U) + ")";
  }(e) : h, C = t.displayName && t.componentId ? Ba(t.displayName) + "-" + t.componentId : t.componentId || w, z = i && e.attrs ? Array.prototype.concat(e.attrs, y).filter(Boolean) : y, Y = t.shouldForwardProp;
  i && e.shouldForwardProp && (Y = t.shouldForwardProp ? function(U, G, H) {
    return e.shouldForwardProp(U, G, H) && t.shouldForwardProp(U, G, H);
  } : e.shouldForwardProp);
  var E, k = new kd(r, C, i ? e.componentStyle : void 0), P = k.isStatic && y.length === 0, q = function(U, G) {
    return function(H, x, ae, Se) {
      var Ie = H.attrs, Fe = H.componentStyle, Ve = H.defaultProps, ue = H.foldedComponentIds, me = H.shouldForwardProp, Re = H.styledComponentId, Ne = H.target, Te = function(L, m, ee) {
        L === void 0 && (L = Sr);
        var _ = hr({}, m, { theme: L }), ie = {};
        return ee.forEach(function(Q) {
          var te, X, ne, de = Q;
          for (te in hn(de) && (de = de(_)), de) _[te] = ie[te] = te === "className" ? (X = ie[te], ne = de[te], X && ne ? X + " " + ne : X || ne) : de[te];
        }), [_, ie];
      }(Ld(x, kr(Bs), Ve) || Sr, x, Ie), st = Te[0], je = Te[1], Oe = function(L, m, ee, _) {
        var ie = Cd(), Q = Ad(), te = m ? L.generateAndInjectStyles(Sr, ie, Q) : L.generateAndInjectStyles(ee, ie, Q);
        return te;
      }(Fe, Se, st), Be = ae, tt = je.$as || x.$as || je.as || x.as || Ne, se = Wn(tt), j = je !== x ? hr({}, x, {}, je) : x, A = {};
      for (var F in j) F[0] !== "$" && F !== "as" && (F === "forwardedAs" ? A.as = j[F] : (me ? me(F, Uo, tt) : !se || Uo(F)) && (A[F] = j[F]));
      return x.style && je.style !== x.style && (A.style = hr({}, x.style, {}, je.style)), A.className = Array.prototype.concat(ue, Re, Oe !== Re ? Oe : null, x.className, je.className).filter(Boolean).join(" "), A.ref = Be, Qo(tt, A);
    }(E, U, G, P);
  };
  return q.displayName = I, (E = ft.forwardRef(q)).attrs = z, E.componentStyle = k, E.displayName = I, E.shouldForwardProp = Y, E.foldedComponentIds = i ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : na, E.styledComponentId = C, E.target = i ? e.target : e, E.withComponent = function(U) {
    var G = t.componentId, H = function(ae, Se) {
      if (ae == null) return {};
      var Ie, Fe, Ve = {}, ue = Object.keys(ae);
      for (Fe = 0; Fe < ue.length; Fe++) Ie = ue[Fe], Se.indexOf(Ie) >= 0 || (Ve[Ie] = ae[Ie]);
      return Ve;
    }(t, ["componentId"]), x = G && G + "-" + (Wn(U) ? U : Ba(Yo(U)));
    return Ws(U, hr({}, H, { attrs: z, componentId: x }), r);
  }, Object.defineProperty(E, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(U) {
    this._foldedDefaultProps = i ? Hs({}, e.defaultProps, U) : U;
  } }), Object.defineProperty(E, "toString", { value: function() {
    return "." + E.styledComponentId;
  } }), c && id(E, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), E;
}
var ia = function(e) {
  return function t(r, i, c) {
    if (c === void 0 && (c = Sr), !Fs.isValidElementType(i)) return bn(1, String(i));
    var u = function() {
      return r(i, c, Pd.apply(void 0, arguments));
    };
    return u.withConfig = function(y) {
      return t(r, i, hr({}, c, {}, y));
    }, u.attrs = function(y) {
      return t(r, i, hr({}, c, { attrs: Array.prototype.concat(c.attrs, y).filter(Boolean) }));
    }, u;
  }(Ws, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  ia[e] = ia(e);
});
const Ud = ia.ul`
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
`, Hd = () => {
  const { feeds: e } = kr(di);
  return /* @__PURE__ */ dt.jsx(Ud, { "data-testid": "grid-view-container", children: e == null ? void 0 : e.map((t) => /* @__PURE__ */ dt.jsx("li", { children: /* @__PURE__ */ dt.jsx(
    vr,
    {
      type: "event",
      eventFormat: "inline",
      eventTime: `<span>
                ${ra(t.startDate, "COMPLETE")} <br /> ${Ls(
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
}, qs = ({ header: e, ctaButton: t, dataSource: r, maxItems: i }) => (fn(() => {
  typeof window < "u" && ss({
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
/* @__PURE__ */ dt.jsx(hi, { header: e, ctaButton: t, dataSource: r, maxItems: i, children: /* @__PURE__ */ dt.jsx(Hd, {}) }));
qs.propTypes = Ps;
const Bd = ia.ul`
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
`, Wd = () => {
  const { feeds: e } = kr(di);
  return /* @__PURE__ */ dt.jsx(Bd, { "data-testid": "list-view-container", children: e == null ? void 0 : e.map((t) => /* @__PURE__ */ dt.jsx("li", { children: /* @__PURE__ */ dt.jsx(
    vr,
    {
      type: "event",
      eventFormat: "inline",
      horizontal: !0,
      eventTime: `<span>
                ${ra(t.startDate, "COMPLETE")} <br /> ${Ls(
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
}, Ys = ({ header: e, ctaButton: t, dataSource: r, maxItems: i }) => (fn(() => {
  typeof window < "u" && ss({
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
/* @__PURE__ */ dt.jsx(hi, { header: e, ctaButton: t, dataSource: r, maxItems: i, children: /* @__PURE__ */ dt.jsx(Wd, {}) }));
Ys.propTypes = Ps;
var qn = {}, Zo;
function qd() {
  if (Zo) return qn;
  Zo = 1;
  var e = es;
  return qn.createRoot = e.createRoot, qn.hydrateRoot = e.hydrateRoot, qn;
}
var Yd = qd();
const Gs = (e, t, r) => {
  Yd.createRoot(r).render(ft.createElement(e, t));
}, Xd = ({ targetSelector: e, props: t }) => {
  Gs(qs, t, document.querySelector(e));
}, Kd = ({ targetSelector: e, props: t }) => {
  Gs(Ys, t, document.querySelector(e));
};
export {
  qs as CardsGridEvents,
  Ys as CardsListEvents,
  Xd as initCardsGridEventsComponent,
  Kd as initCardsListEventsComponent
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
