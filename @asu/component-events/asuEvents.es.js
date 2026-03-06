import ft, { forwardRef as Ja, Component as rl, createContext as nl, useRef as al, useImperativeHandle as il, useId as ol, useContext as wr, createElement as Fo, useState as ln, useEffect as fn } from "react";
import Mo from "react-dom";
function jo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var zo = { exports: {} }, Zr = {};
var Oi;
function sl() {
  if (Oi) return Zr;
  Oi = 1;
  var e = ft, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, c = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(w, S, g) {
    var I, T = {}, $ = null, Y = null;
    g !== void 0 && ($ = "" + g), S.key !== void 0 && ($ = "" + S.key), S.ref !== void 0 && (Y = S.ref);
    for (I in S) i.call(S, I) && !u.hasOwnProperty(I) && (T[I] = S[I]);
    if (w && w.defaultProps) for (I in S = w.defaultProps, S) T[I] === void 0 && (T[I] = S[I]);
    return { $$typeof: t, type: w, key: $, ref: Y, props: T, _owner: c.current };
  }
  return Zr.Fragment = r, Zr.jsx = y, Zr.jsxs = y, Zr;
}
zo.exports = sl();
var dt = zo.exports;
const {
  entries: $o,
  setPrototypeOf: Ri,
  isFrozen: ll,
  getPrototypeOf: cl,
  getOwnPropertyDescriptor: ul
} = Object;
let {
  freeze: kt,
  seal: zt,
  create: Hn
} = Object, {
  apply: Fa,
  construct: Ma
} = typeof Reflect < "u" && Reflect;
kt || (kt = function(t) {
  return t;
});
zt || (zt = function(t) {
  return t;
});
Fa || (Fa = function(t, r) {
  for (var i = arguments.length, c = new Array(i > 2 ? i - 2 : 0), u = 2; u < i; u++)
    c[u - 2] = arguments[u];
  return t.apply(r, c);
});
Ma || (Ma = function(t) {
  for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), c = 1; c < r; c++)
    i[c - 1] = arguments[c];
  return new t(...i);
});
const Dn = xt(Array.prototype.forEach), dl = xt(Array.prototype.lastIndexOf), Pi = xt(Array.prototype.pop), Xr = xt(Array.prototype.push), fl = xt(Array.prototype.splice), Vn = xt(String.prototype.toLowerCase), ma = xt(String.prototype.toString), ga = xt(String.prototype.match), Jr = xt(String.prototype.replace), pl = xt(String.prototype.indexOf), hl = xt(String.prototype.trim), Dt = xt(Object.prototype.hasOwnProperty), St = xt(RegExp.prototype.test), Kr = ml(TypeError);
function xt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), c = 1; c < r; c++)
      i[c - 1] = arguments[c];
    return Fa(e, t, i);
  };
}
function ml(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++)
      r[i] = arguments[i];
    return Ma(e, r);
  };
}
function Ce(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Vn;
  Ri && Ri(e, null);
  let i = t.length;
  for (; i--; ) {
    let c = t[i];
    if (typeof c == "string") {
      const u = r(c);
      u !== c && (ll(t) || (t[i] = u), c = u);
    }
    e[c] = !0;
  }
  return e;
}
function gl(e) {
  for (let t = 0; t < e.length; t++)
    Dt(e, t) || (e[t] = null);
  return e;
}
function or(e) {
  const t = Hn(null);
  for (const [r, i] of $o(e))
    Dt(e, r) && (Array.isArray(i) ? t[r] = gl(i) : i && typeof i == "object" && i.constructor === Object ? t[r] = or(i) : t[r] = i);
  return t;
}
function Qr(e, t) {
  for (; e !== null; ) {
    const i = ul(e, t);
    if (i) {
      if (i.get)
        return xt(i.get);
      if (typeof i.value == "function")
        return xt(i.value);
    }
    e = cl(e);
  }
  function r() {
    return null;
  }
  return r;
}
const Ni = kt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ya = kt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ba = kt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), yl = kt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), va = kt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), bl = kt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Ii = kt(["#text"]), Di = kt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), Sa = kt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Li = kt(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Ln = kt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), vl = zt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Sl = zt(/<%[\w\W]*|[\w\W]*%>/gm), wl = zt(/\$\{[\w\W]*/gm), kl = zt(/^data-[\-\w.\u00B7-\uFFFF]+$/), xl = zt(/^aria-[\-\w]+$/), Uo = zt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), El = zt(/^(?:\w+script|data):/i), _l = zt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Bo = zt(/^html$/i), Tl = zt(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Fi = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: xl,
  ATTR_WHITESPACE: _l,
  CUSTOM_ELEMENT: Tl,
  DATA_ATTR: kl,
  DOCTYPE_NAME: Bo,
  ERB_EXPR: Sl,
  IS_ALLOWED_URI: Uo,
  IS_SCRIPT_OR_DATA: El,
  MUSTACHE_EXPR: vl,
  TMPLIT_EXPR: wl
});
const en = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, Cl = function() {
  return typeof window > "u" ? null : window;
}, Al = function(t, r) {
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
}, Mi = function() {
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
function Wo() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Cl();
  const t = (p) => Wo(p);
  if (t.version = "3.3.2", t.removed = [], !e || !e.document || e.document.nodeType !== en.document || !e.Element)
    return t.isSupported = !1, t;
  let {
    document: r
  } = e;
  const i = r, c = i.currentScript, {
    DocumentFragment: u,
    HTMLTemplateElement: y,
    Node: w,
    Element: S,
    NodeFilter: g,
    NamedNodeMap: I = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: T,
    DOMParser: $,
    trustedTypes: Y
  } = e, A = S.prototype, k = Qr(A, "cloneNode"), L = Qr(A, "remove"), G = Qr(A, "nextSibling"), H = Qr(A, "childNodes"), Z = Qr(A, "parentNode");
  if (typeof y == "function") {
    const p = r.createElement("template");
    p.content && p.content.ownerDocument && (r = p.content.ownerDocument);
  }
  let W, x = "";
  const {
    implementation: ce,
    createNodeIterator: Ee,
    createDocumentFragment: Ie,
    getElementsByTagName: Fe
  } = r, {
    importNode: Ge
  } = i;
  let ue = Mi();
  t.isSupported = typeof $o == "function" && typeof Z == "function" && ce && ce.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: me,
    ERB_EXPR: Re,
    TMPLIT_EXPR: Pe,
    DATA_ATTR: Te,
    ARIA_ATTR: st,
    IS_SCRIPT_OR_DATA: Me,
    ATTR_WHITESPACE: Oe,
    CUSTOM_ELEMENT: We
  } = Fi;
  let {
    IS_ALLOWED_URI: tt
  } = Fi, oe = null;
  const M = Ce({}, [...Ni, ...ya, ...ba, ...va, ...Ii]);
  let C = null;
  const F = Ce({}, [...Di, ...Sa, ...Li, ...Ln]);
  let D = Object.seal(Hn(null, {
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
  const E = Object.seal(Hn(null, {
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
  let ae = !0, Q = !0, te = !1, q = !0, ne = !1, de = !0, J = !1, ge = !1, re = !1, se = !1, Ue = !1, le = !1, it = !0, He = !1;
  const we = "user-content-";
  let B = !0, ie = !1, Xe = {}, Ne = null;
  const De = Ce({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let er = null;
  const tr = Ce({}, ["audio", "video", "img", "source", "image", "track"]);
  let Ut = null;
  const Bt = Ce({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), pt = "http://www.w3.org/1998/Math/MathML", Tt = "http://www.w3.org/2000/svg", nt = "http://www.w3.org/1999/xhtml";
  let ut = nt, Wt = !1, Ht = null;
  const ht = Ce({}, [pt, Tt, nt], ma);
  let vt = Ce({}, ["mi", "mo", "mn", "ms", "mtext"]), mt = Ce({}, ["annotation-xml"]);
  const Le = Ce({}, ["title", "style", "font", "a", "script"]);
  let lt = null;
  const rr = ["application/xhtml+xml", "text/html"], Vt = "text/html";
  let fe = null, ot = null;
  const Ct = r.createElement("form"), nr = function(m) {
    return m instanceof RegExp || m instanceof Function;
  }, At = function() {
    let m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(ot && ot === m)) {
      if ((!m || typeof m != "object") && (m = {}), m = or(m), lt = // eslint-disable-next-line unicorn/prefer-includes
      rr.indexOf(m.PARSER_MEDIA_TYPE) === -1 ? Vt : m.PARSER_MEDIA_TYPE, fe = lt === "application/xhtml+xml" ? ma : Vn, oe = Dt(m, "ALLOWED_TAGS") ? Ce({}, m.ALLOWED_TAGS, fe) : M, C = Dt(m, "ALLOWED_ATTR") ? Ce({}, m.ALLOWED_ATTR, fe) : F, Ht = Dt(m, "ALLOWED_NAMESPACES") ? Ce({}, m.ALLOWED_NAMESPACES, ma) : ht, Ut = Dt(m, "ADD_URI_SAFE_ATTR") ? Ce(or(Bt), m.ADD_URI_SAFE_ATTR, fe) : Bt, er = Dt(m, "ADD_DATA_URI_TAGS") ? Ce(or(tr), m.ADD_DATA_URI_TAGS, fe) : tr, Ne = Dt(m, "FORBID_CONTENTS") ? Ce({}, m.FORBID_CONTENTS, fe) : De, h = Dt(m, "FORBID_TAGS") ? Ce({}, m.FORBID_TAGS, fe) : or({}), ee = Dt(m, "FORBID_ATTR") ? Ce({}, m.FORBID_ATTR, fe) : or({}), Xe = Dt(m, "USE_PROFILES") ? m.USE_PROFILES : !1, ae = m.ALLOW_ARIA_ATTR !== !1, Q = m.ALLOW_DATA_ATTR !== !1, te = m.ALLOW_UNKNOWN_PROTOCOLS || !1, q = m.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ne = m.SAFE_FOR_TEMPLATES || !1, de = m.SAFE_FOR_XML !== !1, J = m.WHOLE_DOCUMENT || !1, se = m.RETURN_DOM || !1, Ue = m.RETURN_DOM_FRAGMENT || !1, le = m.RETURN_TRUSTED_TYPE || !1, re = m.FORCE_BODY || !1, it = m.SANITIZE_DOM !== !1, He = m.SANITIZE_NAMED_PROPS || !1, B = m.KEEP_CONTENT !== !1, ie = m.IN_PLACE || !1, tt = m.ALLOWED_URI_REGEXP || Uo, ut = m.NAMESPACE || nt, vt = m.MATHML_TEXT_INTEGRATION_POINTS || vt, mt = m.HTML_INTEGRATION_POINTS || mt, D = m.CUSTOM_ELEMENT_HANDLING || {}, m.CUSTOM_ELEMENT_HANDLING && nr(m.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (D.tagNameCheck = m.CUSTOM_ELEMENT_HANDLING.tagNameCheck), m.CUSTOM_ELEMENT_HANDLING && nr(m.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (D.attributeNameCheck = m.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), m.CUSTOM_ELEMENT_HANDLING && typeof m.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (D.allowCustomizedBuiltInElements = m.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), ne && (Q = !1), Ue && (se = !0), Xe && (oe = Ce({}, Ii), C = Hn(null), Xe.html === !0 && (Ce(oe, Ni), Ce(C, Di)), Xe.svg === !0 && (Ce(oe, ya), Ce(C, Sa), Ce(C, Ln)), Xe.svgFilters === !0 && (Ce(oe, ba), Ce(C, Sa), Ce(C, Ln)), Xe.mathMl === !0 && (Ce(oe, va), Ce(C, Li), Ce(C, Ln))), Dt(m, "ADD_TAGS") || (E.tagCheck = null), Dt(m, "ADD_ATTR") || (E.attributeCheck = null), m.ADD_TAGS && (typeof m.ADD_TAGS == "function" ? E.tagCheck = m.ADD_TAGS : (oe === M && (oe = or(oe)), Ce(oe, m.ADD_TAGS, fe))), m.ADD_ATTR && (typeof m.ADD_ATTR == "function" ? E.attributeCheck = m.ADD_ATTR : (C === F && (C = or(C)), Ce(C, m.ADD_ATTR, fe))), m.ADD_URI_SAFE_ATTR && Ce(Ut, m.ADD_URI_SAFE_ATTR, fe), m.FORBID_CONTENTS && (Ne === De && (Ne = or(Ne)), Ce(Ne, m.FORBID_CONTENTS, fe)), m.ADD_FORBID_CONTENTS && (Ne === De && (Ne = or(Ne)), Ce(Ne, m.ADD_FORBID_CONTENTS, fe)), B && (oe["#text"] = !0), J && Ce(oe, ["html", "head", "body"]), oe.table && (Ce(oe, ["tbody"]), delete h.tbody), m.TRUSTED_TYPES_POLICY) {
        if (typeof m.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Kr('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof m.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Kr('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        W = m.TRUSTED_TYPES_POLICY, x = W.createHTML("");
      } else
        W === void 0 && (W = Al(Y, c)), W !== null && typeof x == "string" && (x = W.createHTML(""));
      kt && kt(m), ot = m;
    }
  }, qt = Ce({}, [...ya, ...ba, ...yl]), ar = Ce({}, [...va, ...bl]), mr = function(m) {
    let _ = Z(m);
    (!_ || !_.tagName) && (_ = {
      namespaceURI: ut,
      tagName: "template"
    });
    const V = Vn(m.tagName), ye = Vn(_.tagName);
    return Ht[m.namespaceURI] ? m.namespaceURI === Tt ? _.namespaceURI === nt ? V === "svg" : _.namespaceURI === pt ? V === "svg" && (ye === "annotation-xml" || vt[ye]) : !!qt[V] : m.namespaceURI === pt ? _.namespaceURI === nt ? V === "math" : _.namespaceURI === Tt ? V === "math" && mt[ye] : !!ar[V] : m.namespaceURI === nt ? _.namespaceURI === Tt && !mt[ye] || _.namespaceURI === pt && !vt[ye] ? !1 : !ar[V] && (Le[V] || !qt[V]) : !!(lt === "application/xhtml+xml" && Ht[m.namespaceURI]) : !1;
  }, at = function(m) {
    Xr(t.removed, {
      element: m
    });
    try {
      Z(m).removeChild(m);
    } catch {
      L(m);
    }
  }, ct = function(m, _) {
    try {
      Xr(t.removed, {
        attribute: _.getAttributeNode(m),
        from: _
      });
    } catch {
      Xr(t.removed, {
        attribute: null,
        from: _
      });
    }
    if (_.removeAttribute(m), m === "is")
      if (se || Ue)
        try {
          at(_);
        } catch {
        }
      else
        try {
          _.setAttribute(m, "");
        } catch {
        }
  }, lr = function(m) {
    let _ = null, V = null;
    if (re)
      m = "<remove></remove>" + m;
    else {
      const Se = ga(m, /^[\r\n\t ]+/);
      V = Se && Se[0];
    }
    lt === "application/xhtml+xml" && ut === nt && (m = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + m + "</body></html>");
    const ye = W ? W.createHTML(m) : m;
    if (ut === nt)
      try {
        _ = new $().parseFromString(ye, lt);
      } catch {
      }
    if (!_ || !_.documentElement) {
      _ = ce.createDocument(ut, "template", null);
      try {
        _.documentElement.innerHTML = Wt ? x : ye;
      } catch {
      }
    }
    const ve = _.body || _.documentElement;
    return m && V && ve.insertBefore(r.createTextNode(V), ve.childNodes[0] || null), ut === nt ? Fe.call(_, J ? "html" : "body")[0] : J ? _.documentElement : ve;
  }, Ft = function(m) {
    return Ee.call(
      m.ownerDocument || m,
      m,
      // eslint-disable-next-line no-bitwise
      g.SHOW_ELEMENT | g.SHOW_COMMENT | g.SHOW_TEXT | g.SHOW_PROCESSING_INSTRUCTION | g.SHOW_CDATA_SECTION,
      null
    );
  }, Mt = function(m) {
    return m instanceof T && (typeof m.nodeName != "string" || typeof m.textContent != "string" || typeof m.removeChild != "function" || !(m.attributes instanceof I) || typeof m.removeAttribute != "function" || typeof m.setAttribute != "function" || typeof m.namespaceURI != "string" || typeof m.insertBefore != "function" || typeof m.hasChildNodes != "function");
  }, jt = function(m) {
    return typeof w == "function" && m instanceof w;
  };
  function Qe(p, m, _) {
    Dn(p, (V) => {
      V.call(t, m, _, ot);
    });
  }
  const cr = function(m) {
    let _ = null;
    if (Qe(ue.beforeSanitizeElements, m, null), Mt(m))
      return at(m), !0;
    const V = fe(m.nodeName);
    if (Qe(ue.uponSanitizeElement, m, {
      tagName: V,
      allowedTags: oe
    }), de && m.hasChildNodes() && !jt(m.firstElementChild) && St(/<[/\w!]/g, m.innerHTML) && St(/<[/\w!]/g, m.textContent) || m.nodeType === en.progressingInstruction || de && m.nodeType === en.comment && St(/<[/\w]/g, m.data))
      return at(m), !0;
    if (!(E.tagCheck instanceof Function && E.tagCheck(V)) && (!oe[V] || h[V])) {
      if (!h[V] && ur(V) && (D.tagNameCheck instanceof RegExp && St(D.tagNameCheck, V) || D.tagNameCheck instanceof Function && D.tagNameCheck(V)))
        return !1;
      if (B && !Ne[V]) {
        const ye = Z(m) || m.parentNode, ve = H(m) || m.childNodes;
        if (ve && ye) {
          const Se = ve.length;
          for (let je = Se - 1; je >= 0; --je) {
            const Ze = k(ve[je], !0);
            Ze.__removalCount = (m.__removalCount || 0) + 1, ye.insertBefore(Ze, G(m));
          }
        }
      }
      return at(m), !0;
    }
    return m instanceof S && !mr(m) || (V === "noscript" || V === "noembed" || V === "noframes") && St(/<\/no(script|embed|frames)/i, m.innerHTML) ? (at(m), !0) : (ne && m.nodeType === en.text && (_ = m.textContent, Dn([me, Re, Pe], (ye) => {
      _ = Jr(_, ye, " ");
    }), m.textContent !== _ && (Xr(t.removed, {
      element: m.cloneNode()
    }), m.textContent = _)), Qe(ue.afterSanitizeElements, m, null), !1);
  }, Ot = function(m, _, V) {
    if (ee[_] || it && (_ === "id" || _ === "name") && (V in r || V in Ct))
      return !1;
    if (!(Q && !ee[_] && St(Te, _))) {
      if (!(ae && St(st, _))) {
        if (!(E.attributeCheck instanceof Function && E.attributeCheck(_, m))) {
          if (!C[_] || ee[_]) {
            if (
              // First condition does a very basic check if a) it's basically a valid custom element tagname AND
              // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
              !(ur(m) && (D.tagNameCheck instanceof RegExp && St(D.tagNameCheck, m) || D.tagNameCheck instanceof Function && D.tagNameCheck(m)) && (D.attributeNameCheck instanceof RegExp && St(D.attributeNameCheck, _) || D.attributeNameCheck instanceof Function && D.attributeNameCheck(_, m)) || // Alternative, second condition checks if it's an `is`-attribute, AND
              // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              _ === "is" && D.allowCustomizedBuiltInElements && (D.tagNameCheck instanceof RegExp && St(D.tagNameCheck, V) || D.tagNameCheck instanceof Function && D.tagNameCheck(V)))
            ) return !1;
          } else if (!Ut[_]) {
            if (!St(tt, Jr(V, Oe, ""))) {
              if (!((_ === "src" || _ === "xlink:href" || _ === "href") && m !== "script" && pl(V, "data:") === 0 && er[m])) {
                if (!(te && !St(Me, Jr(V, Oe, "")))) {
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
    return m !== "annotation-xml" && ga(m, We);
  }, Yt = function(m) {
    Qe(ue.beforeSanitizeAttributes, m, null);
    const {
      attributes: _
    } = m;
    if (!_ || Mt(m))
      return;
    const V = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: C,
      forceKeepAttr: void 0
    };
    let ye = _.length;
    for (; ye--; ) {
      const ve = _[ye], {
        name: Se,
        namespaceURI: je,
        value: Ze
      } = ve, gt = fe(Se), Je = Ze;
      let Be = Se === "value" ? Je : hl(Je);
      if (V.attrName = gt, V.attrValue = Be, V.keepAttr = !0, V.forceKeepAttr = void 0, Qe(ue.uponSanitizeAttribute, m, V), Be = V.attrValue, He && (gt === "id" || gt === "name") && (ct(Se, m), Be = we + Be), de && St(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Be)) {
        ct(Se, m);
        continue;
      }
      if (gt === "attributename" && ga(Be, "href")) {
        ct(Se, m);
        continue;
      }
      if (V.forceKeepAttr)
        continue;
      if (!V.keepAttr) {
        ct(Se, m);
        continue;
      }
      if (!q && St(/\/>/i, Be)) {
        ct(Se, m);
        continue;
      }
      ne && Dn([me, Re, Pe], (kr) => {
        Be = Jr(Be, kr, " ");
      });
      const Rt = fe(m.nodeName);
      if (!Ot(Rt, gt, Be)) {
        ct(Se, m);
        continue;
      }
      if (W && typeof Y == "object" && typeof Y.getAttributeType == "function" && !je)
        switch (Y.getAttributeType(Rt, gt)) {
          case "TrustedHTML": {
            Be = W.createHTML(Be);
            break;
          }
          case "TrustedScriptURL": {
            Be = W.createScriptURL(Be);
            break;
          }
        }
      if (Be !== Je)
        try {
          je ? m.setAttributeNS(je, Se, Be) : m.setAttribute(Se, Be), Mt(m) ? at(m) : Pi(t.removed);
        } catch {
          ct(Se, m);
        }
    }
    Qe(ue.afterSanitizeAttributes, m, null);
  }, ir = function p(m) {
    let _ = null;
    const V = Ft(m);
    for (Qe(ue.beforeSanitizeShadowDOM, m, null); _ = V.nextNode(); )
      Qe(ue.uponSanitizeShadowNode, _, null), cr(_), Yt(_), _.content instanceof u && p(_.content);
    Qe(ue.afterSanitizeShadowDOM, m, null);
  };
  return t.sanitize = function(p) {
    let m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ = null, V = null, ye = null, ve = null;
    if (Wt = !p, Wt && (p = "<!-->"), typeof p != "string" && !jt(p))
      if (typeof p.toString == "function") {
        if (p = p.toString(), typeof p != "string")
          throw Kr("dirty is not a string, aborting");
      } else
        throw Kr("toString is not a function");
    if (!t.isSupported)
      return p;
    if (ge || At(m), t.removed = [], typeof p == "string" && (ie = !1), ie) {
      if (p.nodeName) {
        const Ze = fe(p.nodeName);
        if (!oe[Ze] || h[Ze])
          throw Kr("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (p instanceof w)
      _ = lr("<!---->"), V = _.ownerDocument.importNode(p, !0), V.nodeType === en.element && V.nodeName === "BODY" || V.nodeName === "HTML" ? _ = V : _.appendChild(V);
    else {
      if (!se && !ne && !J && // eslint-disable-next-line unicorn/prefer-includes
      p.indexOf("<") === -1)
        return W && le ? W.createHTML(p) : p;
      if (_ = lr(p), !_)
        return se ? null : le ? x : "";
    }
    _ && re && at(_.firstChild);
    const Se = Ft(ie ? p : _);
    for (; ye = Se.nextNode(); )
      cr(ye), Yt(ye), ye.content instanceof u && ir(ye.content);
    if (ie)
      return p;
    if (se) {
      if (Ue)
        for (ve = Ie.call(_.ownerDocument); _.firstChild; )
          ve.appendChild(_.firstChild);
      else
        ve = _;
      return (C.shadowroot || C.shadowrootmode) && (ve = Ge.call(i, ve, !0)), ve;
    }
    let je = J ? _.outerHTML : _.innerHTML;
    return J && oe["!doctype"] && _.ownerDocument && _.ownerDocument.doctype && _.ownerDocument.doctype.name && St(Bo, _.ownerDocument.doctype.name) && (je = "<!DOCTYPE " + _.ownerDocument.doctype.name + `>
` + je), ne && Dn([me, Re, Pe], (Ze) => {
      je = Jr(je, Ze, " ");
    }), W && le ? W.createHTML(je) : je;
  }, t.setConfig = function() {
    let p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    At(p), ge = !0;
  }, t.clearConfig = function() {
    ot = null, ge = !1;
  }, t.isValidAttribute = function(p, m, _) {
    ot || At({});
    const V = fe(p), ye = fe(m);
    return Ot(V, ye, _);
  }, t.addHook = function(p, m) {
    typeof m == "function" && Xr(ue[p], m);
  }, t.removeHook = function(p, m) {
    if (m !== void 0) {
      const _ = dl(ue[p], m);
      return _ === -1 ? void 0 : fl(ue[p], _, 1)[0];
    }
    return Pi(ue[p]);
  }, t.removeHooks = function(p) {
    ue[p] = [];
  }, t.removeAllHooks = function() {
    ue = Mi();
  }, t;
}
Wo();
var Ho = { exports: {} }, wa, ji;
function Ol() {
  if (ji) return wa;
  ji = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return wa = e, wa;
}
var ka, zi;
function Rl() {
  if (zi) return ka;
  zi = 1;
  var e = Ol();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, ka = function() {
    function i(y, w, S, g, I, T) {
      if (T !== e) {
        var $ = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw $.name = "Invariant Violation", $;
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
  }, ka;
}
Ho.exports = Rl()();
var Pl = Ho.exports;
const Ye = /* @__PURE__ */ jo(Pl);
Ye.shape({
  event: Ye.string,
  action: Ye.string,
  name: Ye.string,
  region: Ye.string,
  section: Ye.string,
  component: Ye.string,
  type: Ye.string,
  text: Ye.string
});
const mn = ({ children: e }) => /* @__PURE__ */ dt.jsx(dt.Fragment, { children: e });
mn.propTypes = {
  children: Ye.oneOfType([
    Ye.arrayOf(Ye.node),
    Ye.node,
    Ye.string
  ])
};
var Nl = { exports: {} };
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var u = "", y = 0; y < arguments.length; y++) {
        var w = arguments[y];
        w && (u = c(u, i(w)));
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
      for (var w in u)
        t.call(u, w) && u[w] && (y = c(y, w));
      return y;
    }
    function c(u, y) {
      return y ? u ? u + " " + y : u + y : u;
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(Nl);
({
  ...mn.propTypes
});
const Vo = ({ children: e, className: t = "container", ...r }) => /* @__PURE__ */ dt.jsx("div", { className: t, ...r, children: /* @__PURE__ */ dt.jsx("div", { className: "row", children: e }) });
Vo.propTypes = {
  children: mn.propTypes.children
};
({
  ...Vo.propTypes
});
mn.propTypes.children, Ye.oneOf(["0", "3", "4", "6", "8", "9", "12"]);
mn.propTypes.children;
function qo({
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
function Ka(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Yo = { exports: {} }, tn = {}, $i;
function Il() {
  if ($i) return tn;
  $i = 1;
  var e = ft, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, c = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(w, S, g) {
    var I, T = {}, $ = null, Y = null;
    g !== void 0 && ($ = "" + g), S.key !== void 0 && ($ = "" + S.key), S.ref !== void 0 && (Y = S.ref);
    for (I in S) i.call(S, I) && !u.hasOwnProperty(I) && (T[I] = S[I]);
    if (w && w.defaultProps) for (I in S = w.defaultProps, S) T[I] === void 0 && (T[I] = S[I]);
    return { $$typeof: t, type: w, key: $, ref: Y, props: T, _owner: c.current };
  }
  return tn.Fragment = r, tn.jsx = y, tn.jsxs = y, tn;
}
Yo.exports = Il();
var U = Yo.exports, Go = { exports: {} }, xa, Ui;
function Dl() {
  if (Ui) return xa;
  Ui = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return xa = e, xa;
}
var Ea, Bi;
function Ll() {
  if (Bi) return Ea;
  Bi = 1;
  var e = Dl();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Ea = function() {
    function i(y, w, S, g, I, T) {
      if (T !== e) {
        var $ = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw $.name = "Invariant Violation", $;
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
  }, Ea;
}
Go.exports = Ll()();
var Fl = Go.exports;
const o = /* @__PURE__ */ Ka(Fl), Ml = () => {
  const [e, t] = ln(null), [r, i] = ln(!1), [c, u] = ln(null), [y, w] = ln("");
  return fn(() => {
    y && (() => {
      u(null), i(!0);
      try {
        fetch(y).then((S) => S.json()).then((S) => {
          t(S), i(!1);
        }).catch((S) => {
          u(S), i(!1);
        });
      } catch (S) {
        u(S);
      }
    })();
  }, [y]), [{ data: e, loading: r, error: c }, w];
}, jl = (e) => (e || []).join(" "), {
  entries: Zo,
  setPrototypeOf: Wi,
  isFrozen: zl,
  getPrototypeOf: $l,
  getOwnPropertyDescriptor: Ul
} = Object;
let {
  freeze: Et,
  seal: $t,
  create: qn
} = Object, {
  apply: ja,
  construct: za
} = typeof Reflect < "u" && Reflect;
Et || (Et = function(e) {
  return e;
});
$t || ($t = function(e) {
  return e;
});
ja || (ja = function(e, t) {
  for (var r = arguments.length, i = new Array(r > 2 ? r - 2 : 0), c = 2; c < r; c++)
    i[c - 2] = arguments[c];
  return e.apply(t, i);
});
za || (za = function(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
    r[i - 1] = arguments[i];
  return new e(...r);
});
const Fn = _t(Array.prototype.forEach), Bl = _t(Array.prototype.lastIndexOf), Hi = _t(Array.prototype.pop), rn = _t(Array.prototype.push), Wl = _t(Array.prototype.splice), Yn = _t(String.prototype.toLowerCase), _a = _t(String.prototype.toString), Ta = _t(String.prototype.match), nn = _t(String.prototype.replace), Hl = _t(String.prototype.indexOf), Vl = _t(String.prototype.trim), Lt = _t(Object.prototype.hasOwnProperty), wt = _t(RegExp.prototype.test), an = ql(TypeError);
function _t(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), c = 1; c < r; c++)
      i[c - 1] = arguments[c];
    return ja(e, t, i);
  };
}
function ql(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++)
      r[i] = arguments[i];
    return za(e, r);
  };
}
function Ae(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Yn;
  Wi && Wi(e, null);
  let i = t.length;
  for (; i--; ) {
    let c = t[i];
    if (typeof c == "string") {
      const u = r(c);
      u !== c && (zl(t) || (t[i] = u), c = u);
    }
    e[c] = !0;
  }
  return e;
}
function Yl(e) {
  for (let t = 0; t < e.length; t++)
    Lt(e, t) || (e[t] = null);
  return e;
}
function sr(e) {
  const t = qn(null);
  for (const [r, i] of Zo(e))
    Lt(e, r) && (Array.isArray(i) ? t[r] = Yl(i) : i && typeof i == "object" && i.constructor === Object ? t[r] = sr(i) : t[r] = i);
  return t;
}
function on(e, t) {
  for (; e !== null; ) {
    const i = Ul(e, t);
    if (i) {
      if (i.get)
        return _t(i.get);
      if (typeof i.value == "function")
        return _t(i.value);
    }
    e = $l(e);
  }
  function r() {
    return null;
  }
  return r;
}
const Vi = Et(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Ca = Et(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Aa = Et(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Gl = Et(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Oa = Et(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Zl = Et(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), qi = Et(["#text"]), Yi = Et(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), Ra = Et(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Gi = Et(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Mn = Et(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Xl = $t(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Jl = $t(/<%[\w\W]*|[\w\W]*%>/gm), Kl = $t(/\$\{[\w\W]*/gm), Ql = $t(/^data-[\-\w.\u00B7-\uFFFF]+$/), ec = $t(/^aria-[\-\w]+$/), Xo = $t(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), tc = $t(/^(?:\w+script|data):/i), rc = $t(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Jo = $t(/^html$/i), nc = $t(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Zi = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: ec,
  ATTR_WHITESPACE: rc,
  CUSTOM_ELEMENT: nc,
  DATA_ATTR: Ql,
  DOCTYPE_NAME: Jo,
  ERB_EXPR: Jl,
  IS_ALLOWED_URI: Xo,
  IS_SCRIPT_OR_DATA: tc,
  MUSTACHE_EXPR: Xl,
  TMPLIT_EXPR: Kl
});
const sn = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, ac = function() {
  return typeof window > "u" ? null : window;
}, ic = function(e, t) {
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
}, Xi = function() {
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
function Ko() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ac();
  const t = (p) => Ko(p);
  if (t.version = "3.3.2", t.removed = [], !e || !e.document || e.document.nodeType !== sn.document || !e.Element)
    return t.isSupported = !1, t;
  let {
    document: r
  } = e;
  const i = r, c = i.currentScript, {
    DocumentFragment: u,
    HTMLTemplateElement: y,
    Node: w,
    Element: S,
    NodeFilter: g,
    NamedNodeMap: I = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: T,
    DOMParser: $,
    trustedTypes: Y
  } = e, A = S.prototype, k = on(A, "cloneNode"), L = on(A, "remove"), G = on(A, "nextSibling"), H = on(A, "childNodes"), Z = on(A, "parentNode");
  if (typeof y == "function") {
    const p = r.createElement("template");
    p.content && p.content.ownerDocument && (r = p.content.ownerDocument);
  }
  let W, x = "";
  const {
    implementation: ce,
    createNodeIterator: Ee,
    createDocumentFragment: Ie,
    getElementsByTagName: Fe
  } = r, {
    importNode: Ge
  } = i;
  let ue = Xi();
  t.isSupported = typeof Zo == "function" && typeof Z == "function" && ce && ce.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: me,
    ERB_EXPR: Re,
    TMPLIT_EXPR: Pe,
    DATA_ATTR: Te,
    ARIA_ATTR: st,
    IS_SCRIPT_OR_DATA: Me,
    ATTR_WHITESPACE: Oe,
    CUSTOM_ELEMENT: We
  } = Zi;
  let {
    IS_ALLOWED_URI: tt
  } = Zi, oe = null;
  const M = Ae({}, [...Vi, ...Ca, ...Aa, ...Oa, ...qi]);
  let C = null;
  const F = Ae({}, [...Yi, ...Ra, ...Gi, ...Mn]);
  let D = Object.seal(qn(null, {
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
  const E = Object.seal(qn(null, {
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
  let ae = !0, Q = !0, te = !1, q = !0, ne = !1, de = !0, J = !1, ge = !1, re = !1, se = !1, Ue = !1, le = !1, it = !0, He = !1;
  const we = "user-content-";
  let B = !0, ie = !1, Xe = {}, Ne = null;
  const De = Ae({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let er = null;
  const tr = Ae({}, ["audio", "video", "img", "source", "image", "track"]);
  let Ut = null;
  const Bt = Ae({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), pt = "http://www.w3.org/1998/Math/MathML", Tt = "http://www.w3.org/2000/svg", nt = "http://www.w3.org/1999/xhtml";
  let ut = nt, Wt = !1, Ht = null;
  const ht = Ae({}, [pt, Tt, nt], _a);
  let vt = Ae({}, ["mi", "mo", "mn", "ms", "mtext"]), mt = Ae({}, ["annotation-xml"]);
  const Le = Ae({}, ["title", "style", "font", "a", "script"]);
  let lt = null;
  const rr = ["application/xhtml+xml", "text/html"], Vt = "text/html";
  let fe = null, ot = null;
  const Ct = r.createElement("form"), nr = function(p) {
    return p instanceof RegExp || p instanceof Function;
  }, At = function() {
    let p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(ot && ot === p)) {
      if ((!p || typeof p != "object") && (p = {}), p = sr(p), lt = // eslint-disable-next-line unicorn/prefer-includes
      rr.indexOf(p.PARSER_MEDIA_TYPE) === -1 ? Vt : p.PARSER_MEDIA_TYPE, fe = lt === "application/xhtml+xml" ? _a : Yn, oe = Lt(p, "ALLOWED_TAGS") ? Ae({}, p.ALLOWED_TAGS, fe) : M, C = Lt(p, "ALLOWED_ATTR") ? Ae({}, p.ALLOWED_ATTR, fe) : F, Ht = Lt(p, "ALLOWED_NAMESPACES") ? Ae({}, p.ALLOWED_NAMESPACES, _a) : ht, Ut = Lt(p, "ADD_URI_SAFE_ATTR") ? Ae(sr(Bt), p.ADD_URI_SAFE_ATTR, fe) : Bt, er = Lt(p, "ADD_DATA_URI_TAGS") ? Ae(sr(tr), p.ADD_DATA_URI_TAGS, fe) : tr, Ne = Lt(p, "FORBID_CONTENTS") ? Ae({}, p.FORBID_CONTENTS, fe) : De, h = Lt(p, "FORBID_TAGS") ? Ae({}, p.FORBID_TAGS, fe) : sr({}), ee = Lt(p, "FORBID_ATTR") ? Ae({}, p.FORBID_ATTR, fe) : sr({}), Xe = Lt(p, "USE_PROFILES") ? p.USE_PROFILES : !1, ae = p.ALLOW_ARIA_ATTR !== !1, Q = p.ALLOW_DATA_ATTR !== !1, te = p.ALLOW_UNKNOWN_PROTOCOLS || !1, q = p.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ne = p.SAFE_FOR_TEMPLATES || !1, de = p.SAFE_FOR_XML !== !1, J = p.WHOLE_DOCUMENT || !1, se = p.RETURN_DOM || !1, Ue = p.RETURN_DOM_FRAGMENT || !1, le = p.RETURN_TRUSTED_TYPE || !1, re = p.FORCE_BODY || !1, it = p.SANITIZE_DOM !== !1, He = p.SANITIZE_NAMED_PROPS || !1, B = p.KEEP_CONTENT !== !1, ie = p.IN_PLACE || !1, tt = p.ALLOWED_URI_REGEXP || Xo, ut = p.NAMESPACE || nt, vt = p.MATHML_TEXT_INTEGRATION_POINTS || vt, mt = p.HTML_INTEGRATION_POINTS || mt, D = p.CUSTOM_ELEMENT_HANDLING || {}, p.CUSTOM_ELEMENT_HANDLING && nr(p.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (D.tagNameCheck = p.CUSTOM_ELEMENT_HANDLING.tagNameCheck), p.CUSTOM_ELEMENT_HANDLING && nr(p.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (D.attributeNameCheck = p.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), p.CUSTOM_ELEMENT_HANDLING && typeof p.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (D.allowCustomizedBuiltInElements = p.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), ne && (Q = !1), Ue && (se = !0), Xe && (oe = Ae({}, qi), C = qn(null), Xe.html === !0 && (Ae(oe, Vi), Ae(C, Yi)), Xe.svg === !0 && (Ae(oe, Ca), Ae(C, Ra), Ae(C, Mn)), Xe.svgFilters === !0 && (Ae(oe, Aa), Ae(C, Ra), Ae(C, Mn)), Xe.mathMl === !0 && (Ae(oe, Oa), Ae(C, Gi), Ae(C, Mn))), Lt(p, "ADD_TAGS") || (E.tagCheck = null), Lt(p, "ADD_ATTR") || (E.attributeCheck = null), p.ADD_TAGS && (typeof p.ADD_TAGS == "function" ? E.tagCheck = p.ADD_TAGS : (oe === M && (oe = sr(oe)), Ae(oe, p.ADD_TAGS, fe))), p.ADD_ATTR && (typeof p.ADD_ATTR == "function" ? E.attributeCheck = p.ADD_ATTR : (C === F && (C = sr(C)), Ae(C, p.ADD_ATTR, fe))), p.ADD_URI_SAFE_ATTR && Ae(Ut, p.ADD_URI_SAFE_ATTR, fe), p.FORBID_CONTENTS && (Ne === De && (Ne = sr(Ne)), Ae(Ne, p.FORBID_CONTENTS, fe)), p.ADD_FORBID_CONTENTS && (Ne === De && (Ne = sr(Ne)), Ae(Ne, p.ADD_FORBID_CONTENTS, fe)), B && (oe["#text"] = !0), J && Ae(oe, ["html", "head", "body"]), oe.table && (Ae(oe, ["tbody"]), delete h.tbody), p.TRUSTED_TYPES_POLICY) {
        if (typeof p.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw an('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof p.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw an('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        W = p.TRUSTED_TYPES_POLICY, x = W.createHTML("");
      } else
        W === void 0 && (W = ic(Y, c)), W !== null && typeof x == "string" && (x = W.createHTML(""));
      Et && Et(p), ot = p;
    }
  }, qt = Ae({}, [...Ca, ...Aa, ...Gl]), ar = Ae({}, [...Oa, ...Zl]), mr = function(p) {
    let m = Z(p);
    (!m || !m.tagName) && (m = {
      namespaceURI: ut,
      tagName: "template"
    });
    const _ = Yn(p.tagName), V = Yn(m.tagName);
    return Ht[p.namespaceURI] ? p.namespaceURI === Tt ? m.namespaceURI === nt ? _ === "svg" : m.namespaceURI === pt ? _ === "svg" && (V === "annotation-xml" || vt[V]) : !!qt[_] : p.namespaceURI === pt ? m.namespaceURI === nt ? _ === "math" : m.namespaceURI === Tt ? _ === "math" && mt[V] : !!ar[_] : p.namespaceURI === nt ? m.namespaceURI === Tt && !mt[V] || m.namespaceURI === pt && !vt[V] ? !1 : !ar[_] && (Le[_] || !qt[_]) : !!(lt === "application/xhtml+xml" && Ht[p.namespaceURI]) : !1;
  }, at = function(p) {
    rn(t.removed, {
      element: p
    });
    try {
      Z(p).removeChild(p);
    } catch {
      L(p);
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
      if (se || Ue)
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
    let m = null, _ = null;
    if (re)
      p = "<remove></remove>" + p;
    else {
      const ve = Ta(p, /^[\r\n\t ]+/);
      _ = ve && ve[0];
    }
    lt === "application/xhtml+xml" && ut === nt && (p = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + p + "</body></html>");
    const V = W ? W.createHTML(p) : p;
    if (ut === nt)
      try {
        m = new $().parseFromString(V, lt);
      } catch {
      }
    if (!m || !m.documentElement) {
      m = ce.createDocument(ut, "template", null);
      try {
        m.documentElement.innerHTML = Wt ? x : V;
      } catch {
      }
    }
    const ye = m.body || m.documentElement;
    return p && _ && ye.insertBefore(r.createTextNode(_), ye.childNodes[0] || null), ut === nt ? Fe.call(m, J ? "html" : "body")[0] : J ? m.documentElement : ye;
  }, Ft = function(p) {
    return Ee.call(
      p.ownerDocument || p,
      p,
      // eslint-disable-next-line no-bitwise
      g.SHOW_ELEMENT | g.SHOW_COMMENT | g.SHOW_TEXT | g.SHOW_PROCESSING_INSTRUCTION | g.SHOW_CDATA_SECTION,
      null
    );
  }, Mt = function(p) {
    return p instanceof T && (typeof p.nodeName != "string" || typeof p.textContent != "string" || typeof p.removeChild != "function" || !(p.attributes instanceof I) || typeof p.removeAttribute != "function" || typeof p.setAttribute != "function" || typeof p.namespaceURI != "string" || typeof p.insertBefore != "function" || typeof p.hasChildNodes != "function");
  }, jt = function(p) {
    return typeof w == "function" && p instanceof w;
  };
  function Qe(p, m, _) {
    Fn(p, (V) => {
      V.call(t, m, _, ot);
    });
  }
  const cr = function(p) {
    let m = null;
    if (Qe(ue.beforeSanitizeElements, p, null), Mt(p))
      return at(p), !0;
    const _ = fe(p.nodeName);
    if (Qe(ue.uponSanitizeElement, p, {
      tagName: _,
      allowedTags: oe
    }), de && p.hasChildNodes() && !jt(p.firstElementChild) && wt(/<[/\w!]/g, p.innerHTML) && wt(/<[/\w!]/g, p.textContent) || p.nodeType === sn.progressingInstruction || de && p.nodeType === sn.comment && wt(/<[/\w]/g, p.data))
      return at(p), !0;
    if (!(E.tagCheck instanceof Function && E.tagCheck(_)) && (!oe[_] || h[_])) {
      if (!h[_] && ur(_) && (D.tagNameCheck instanceof RegExp && wt(D.tagNameCheck, _) || D.tagNameCheck instanceof Function && D.tagNameCheck(_)))
        return !1;
      if (B && !Ne[_]) {
        const V = Z(p) || p.parentNode, ye = H(p) || p.childNodes;
        if (ye && V) {
          const ve = ye.length;
          for (let Se = ve - 1; Se >= 0; --Se) {
            const je = k(ye[Se], !0);
            je.__removalCount = (p.__removalCount || 0) + 1, V.insertBefore(je, G(p));
          }
        }
      }
      return at(p), !0;
    }
    return p instanceof S && !mr(p) || (_ === "noscript" || _ === "noembed" || _ === "noframes") && wt(/<\/no(script|embed|frames)/i, p.innerHTML) ? (at(p), !0) : (ne && p.nodeType === sn.text && (m = p.textContent, Fn([me, Re, Pe], (V) => {
      m = nn(m, V, " ");
    }), p.textContent !== m && (rn(t.removed, {
      element: p.cloneNode()
    }), p.textContent = m)), Qe(ue.afterSanitizeElements, p, null), !1);
  }, Ot = function(p, m, _) {
    if (ee[m] || it && (m === "id" || m === "name") && (_ in r || _ in Ct))
      return !1;
    if (!(Q && !ee[m] && wt(Te, m)) && !(ae && wt(st, m)) && !(E.attributeCheck instanceof Function && E.attributeCheck(m, p))) {
      if (!C[m] || ee[m]) {
        if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(ur(p) && (D.tagNameCheck instanceof RegExp && wt(D.tagNameCheck, p) || D.tagNameCheck instanceof Function && D.tagNameCheck(p)) && (D.attributeNameCheck instanceof RegExp && wt(D.attributeNameCheck, m) || D.attributeNameCheck instanceof Function && D.attributeNameCheck(m, p)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          m === "is" && D.allowCustomizedBuiltInElements && (D.tagNameCheck instanceof RegExp && wt(D.tagNameCheck, _) || D.tagNameCheck instanceof Function && D.tagNameCheck(_)))
        ) return !1;
      } else if (!Ut[m] && !wt(tt, nn(_, Oe, "")) && !((m === "src" || m === "xlink:href" || m === "href") && p !== "script" && Hl(_, "data:") === 0 && er[p]) && !(te && !wt(Me, nn(_, Oe, ""))) && _)
        return !1;
    }
    return !0;
  }, ur = function(p) {
    return p !== "annotation-xml" && Ta(p, We);
  }, Yt = function(p) {
    Qe(ue.beforeSanitizeAttributes, p, null);
    const {
      attributes: m
    } = p;
    if (!m || Mt(p))
      return;
    const _ = {
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
        value: je
      } = ye, Ze = fe(ve), gt = je;
      let Je = ve === "value" ? gt : Vl(gt);
      if (_.attrName = Ze, _.attrValue = Je, _.keepAttr = !0, _.forceKeepAttr = void 0, Qe(ue.uponSanitizeAttribute, p, _), Je = _.attrValue, He && (Ze === "id" || Ze === "name") && (ct(ve, p), Je = we + Je), de && wt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Je)) {
        ct(ve, p);
        continue;
      }
      if (Ze === "attributename" && Ta(Je, "href")) {
        ct(ve, p);
        continue;
      }
      if (_.forceKeepAttr)
        continue;
      if (!_.keepAttr) {
        ct(ve, p);
        continue;
      }
      if (!q && wt(/\/>/i, Je)) {
        ct(ve, p);
        continue;
      }
      ne && Fn([me, Re, Pe], (Rt) => {
        Je = nn(Je, Rt, " ");
      });
      const Be = fe(p.nodeName);
      if (!Ot(Be, Ze, Je)) {
        ct(ve, p);
        continue;
      }
      if (W && typeof Y == "object" && typeof Y.getAttributeType == "function" && !Se)
        switch (Y.getAttributeType(Be, Ze)) {
          case "TrustedHTML": {
            Je = W.createHTML(Je);
            break;
          }
          case "TrustedScriptURL": {
            Je = W.createScriptURL(Je);
            break;
          }
        }
      if (Je !== gt)
        try {
          Se ? p.setAttributeNS(Se, ve, Je) : p.setAttribute(ve, Je), Mt(p) ? at(p) : Hi(t.removed);
        } catch {
          ct(ve, p);
        }
    }
    Qe(ue.afterSanitizeAttributes, p, null);
  }, ir = function p(m) {
    let _ = null;
    const V = Ft(m);
    for (Qe(ue.beforeSanitizeShadowDOM, m, null); _ = V.nextNode(); )
      Qe(ue.uponSanitizeShadowNode, _, null), cr(_), Yt(_), _.content instanceof u && p(_.content);
    Qe(ue.afterSanitizeShadowDOM, m, null);
  };
  return t.sanitize = function(p) {
    let m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ = null, V = null, ye = null, ve = null;
    if (Wt = !p, Wt && (p = "<!-->"), typeof p != "string" && !jt(p))
      if (typeof p.toString == "function") {
        if (p = p.toString(), typeof p != "string")
          throw an("dirty is not a string, aborting");
      } else
        throw an("toString is not a function");
    if (!t.isSupported)
      return p;
    if (ge || At(m), t.removed = [], typeof p == "string" && (ie = !1), ie) {
      if (p.nodeName) {
        const Ze = fe(p.nodeName);
        if (!oe[Ze] || h[Ze])
          throw an("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (p instanceof w)
      _ = lr("<!---->"), V = _.ownerDocument.importNode(p, !0), V.nodeType === sn.element && V.nodeName === "BODY" || V.nodeName === "HTML" ? _ = V : _.appendChild(V);
    else {
      if (!se && !ne && !J && // eslint-disable-next-line unicorn/prefer-includes
      p.indexOf("<") === -1)
        return W && le ? W.createHTML(p) : p;
      if (_ = lr(p), !_)
        return se ? null : le ? x : "";
    }
    _ && re && at(_.firstChild);
    const Se = Ft(ie ? p : _);
    for (; ye = Se.nextNode(); )
      cr(ye), Yt(ye), ye.content instanceof u && ir(ye.content);
    if (ie)
      return p;
    if (se) {
      if (Ue)
        for (ve = Ie.call(_.ownerDocument); _.firstChild; )
          ve.appendChild(_.firstChild);
      else
        ve = _;
      return (C.shadowroot || C.shadowrootmode) && (ve = Ge.call(i, ve, !0)), ve;
    }
    let je = J ? _.outerHTML : _.innerHTML;
    return J && oe["!doctype"] && _.ownerDocument && _.ownerDocument.doctype && _.ownerDocument.doctype.name && wt(Jo, _.ownerDocument.doctype.name) && (je = "<!DOCTYPE " + _.ownerDocument.doctype.name + `>
` + je), ne && Fn([me, Re, Pe], (Ze) => {
      je = nn(je, Ze, " ");
    }), W && le ? W.createHTML(je) : je;
  }, t.setConfig = function() {
    let p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    At(p), ge = !0;
  }, t.clearConfig = function() {
    ot = null, ge = !1;
  }, t.isValidAttribute = function(p, m, _) {
    ot || At({});
    const V = fe(p), ye = fe(m);
    return Ot(V, ye, _);
  }, t.addHook = function(p, m) {
    typeof m == "function" && rn(ue[p], m);
  }, t.removeHook = function(p, m) {
    if (m !== void 0) {
      const _ = Bl(ue[p], m);
      return _ === -1 ? void 0 : Wl(ue[p], _, 1)[0];
    }
    return Hi(ue[p]);
  }, t.removeHooks = function(p) {
    ue[p] = [];
  }, t.removeAllHooks = function() {
    ue = Xi();
  }, t;
}
var Ji = Ko();
let jn = null;
function oc() {
  return jn || (typeof window < "u" ? jn = Ji(window) : jn = Ji), jn;
}
const Or = (e) => ({ __html: oc().sanitize(e) });
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
const sc = ({
  event: e = "",
  action: t = "",
  name: r = "",
  type: i = "",
  section: c = "",
  text: u = "",
  region: y = "",
  component: w = ""
}) => {
  const { dataLayer: S } = window, g = {
    event: e.toLowerCase(),
    action: t.toLowerCase(),
    name: r.toLowerCase(),
    type: i.toLowerCase(),
    region: y.toLowerCase(),
    section: c.toLowerCase(),
    text: u.toLowerCase(),
    component: w.toLowerCase()
  };
  S && S.push(g);
}, gn = ({ children: e }) => /* @__PURE__ */ U.jsx(U.Fragment, { children: e });
gn.propTypes = {
  children: o.oneOfType([
    o.arrayOf(o.node),
    o.node,
    o.string
  ])
};
var Qo = { exports: {} };
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var u = "", y = 0; y < arguments.length; y++) {
        var w = arguments[y];
        w && (u = c(u, i(w)));
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
      for (var w in u)
        t.call(u, w) && u[w] && (y = c(y, w));
      return y;
    }
    function c(u, y) {
      return y ? u ? u + " " + y : u + y : u;
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(Qo);
var lc = Qo.exports;
const Kt = /* @__PURE__ */ Ka(lc);
({
  ...gn.propTypes
});
const es = ({ children: e, className: t = "container", ...r }) => /* @__PURE__ */ U.jsx("div", { className: t, ...r, children: /* @__PURE__ */ U.jsx("div", { className: "row", children: e }) });
es.propTypes = {
  children: gn.propTypes.children
};
({
  ...es.propTypes
});
gn.propTypes.children, o.oneOf(["0", "3", "4", "6", "8", "9", "12"]);
gn.propTypes.children;
const cc = o.shape({
  url: o.string,
  altText: o.string,
  cssClass: o.arrayOf(o.string),
  size: o.oneOf(["small", "medium", "large"])
}), Pa = o.shape({
  text: o.string,
  maxWidth: o.string,
  cssClass: o.arrayOf(o.string),
  highlightColor: o.oneOf(["gold", "black"])
}), ts = o.shape({
  color: o.oneOf(["gold", "maroon", "gray", "dark"]),
  content: o.shape({
    icon: o.arrayOf(o.string),
    header: o.string,
    body: o.string
  })
}), Qa = o.shape({
  text: o.string,
  name: o.string,
  event: o.string,
  action: o.string,
  type: o.string,
  region: o.string,
  section: o.string,
  component: o.string
});
var Ar = {}, Ki;
function uc() {
  if (Ki) return Ar;
  Ki = 1;
  var e = ft;
  function t(n) {
    for (var l = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, f = 1; f < arguments.length; f++) l += "&args[]=" + encodeURIComponent(arguments[f]);
    return "Minified React error #" + n + "; visit " + l + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var r = Object.prototype.hasOwnProperty, i = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, c = {}, u = {};
  function y(n) {
    return r.call(u, n) ? !0 : r.call(c, n) ? !1 : i.test(n) ? u[n] = !0 : (c[n] = !0, !1);
  }
  function w(n, l, f, v, N, O, j) {
    this.acceptsBooleans = l === 2 || l === 3 || l === 4, this.attributeName = v, this.attributeNamespace = N, this.mustUseProperty = f, this.propertyName = n, this.type = l, this.sanitizeURL = O, this.removeEmptyString = j;
  }
  var S = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    S[n] = new w(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var l = n[0];
    S[l] = new w(l, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    S[n] = new w(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    S[n] = new w(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    S[n] = new w(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    S[n] = new w(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    S[n] = new w(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    S[n] = new w(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    S[n] = new w(n, 5, !1, n.toLowerCase(), null, !1, !1);
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
    S[l] = new w(l, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var l = n.replace(g, I);
    S[l] = new w(l, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var l = n.replace(g, I);
    S[l] = new w(l, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    S[n] = new w(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), S.xlinkHref = new w("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    S[n] = new w(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  var T = {
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
  }, $ = ["Webkit", "ms", "Moz", "O"];
  Object.keys(T).forEach(function(n) {
    $.forEach(function(l) {
      l = l + n.charAt(0).toUpperCase() + n.substring(1), T[l] = T[n];
    });
  });
  var Y = /["'&<>]/;
  function A(n) {
    if (typeof n == "boolean" || typeof n == "number") return "" + n;
    n = "" + n;
    var l = Y.exec(n);
    if (l) {
      var f = "", v, N = 0;
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
        N !== v && (f += n.substring(N, v)), N = v + 1, f += l;
      }
      n = N !== v ? f + n.substring(N, v) : f;
    }
    return n;
  }
  var k = /([A-Z])/g, L = /^ms-/, G = Array.isArray;
  function H(n, l) {
    return { insertionMode: n, selectedValue: l };
  }
  function Z(n, l, f) {
    switch (l) {
      case "select":
        return H(1, f.value != null ? f.value : f.defaultValue);
      case "svg":
        return H(2, null);
      case "math":
        return H(3, null);
      case "foreignObject":
        return H(1, null);
      case "table":
        return H(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return H(5, null);
      case "colgroup":
        return H(7, null);
      case "tr":
        return H(6, null);
    }
    return 4 <= n.insertionMode || n.insertionMode === 0 ? H(1, null) : n;
  }
  var W = /* @__PURE__ */ new Map();
  function x(n, l, f) {
    if (typeof f != "object") throw Error(t(62));
    l = !0;
    for (var v in f) if (r.call(f, v)) {
      var N = f[v];
      if (N != null && typeof N != "boolean" && N !== "") {
        if (v.indexOf("--") === 0) {
          var O = A(v);
          N = A(("" + N).trim());
        } else {
          O = v;
          var j = W.get(O);
          j !== void 0 || (j = A(O.replace(k, "-$1").toLowerCase().replace(L, "-ms-")), W.set(O, j)), O = j, N = typeof N == "number" ? N === 0 || r.call(T, v) ? "" + N : N + "px" : A(("" + N).trim());
        }
        l ? (l = !1, n.push(' style="', O, ":", N)) : n.push(";", O, ":", N);
      }
    }
    l || n.push('"');
  }
  function ce(n, l, f, v) {
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
      if (l = S.hasOwnProperty(f) ? S[f] : null, l !== null) {
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
            v === !0 ? n.push(" ", f, '=""') : v !== !1 && n.push(" ", f, '="', A(v), '"');
            break;
          case 5:
            isNaN(v) || n.push(" ", f, '="', A(v), '"');
            break;
          case 6:
            !isNaN(v) && 1 <= v && n.push(" ", f, '="', A(v), '"');
            break;
          default:
            l.sanitizeURL && (v = "" + v), n.push(" ", f, '="', A(v), '"');
        }
      } else if (y(f)) {
        switch (typeof v) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (l = f.toLowerCase().slice(0, 5), l !== "data-" && l !== "aria-") return;
        }
        n.push(" ", f, '="', A(v), '"');
      }
    }
  }
  function Ee(n, l, f) {
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
    var N = f = null, O;
    for (O in l) if (r.call(l, O)) {
      var j = l[O];
      if (j != null) switch (O) {
        case "children":
          f = j;
          break;
        case "dangerouslySetInnerHTML":
          N = j;
          break;
        default:
          ce(n, v, O, j);
      }
    }
    return n.push(">"), Ee(n, N, f), typeof f == "string" ? (n.push(A(f)), null) : f;
  }
  var Ge = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, ue = /* @__PURE__ */ new Map();
  function me(n) {
    var l = ue.get(n);
    if (l === void 0) {
      if (!Ge.test(n)) throw Error(t(65, n));
      l = "<" + n, ue.set(n, l);
    }
    return l;
  }
  function Re(n, l, f, v, N) {
    switch (l) {
      case "select":
        n.push(me("select"));
        var O = null, j = null;
        for (ke in f) if (r.call(f, ke)) {
          var K = f[ke];
          if (K != null) switch (ke) {
            case "children":
              O = K;
              break;
            case "dangerouslySetInnerHTML":
              j = K;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              ce(n, v, ke, K);
          }
        }
        return n.push(">"), Ee(n, j, O), O;
      case "option":
        j = N.selectedValue, n.push(me("option"));
        var pe = K = null, be = null, ke = null;
        for (O in f) if (r.call(f, O)) {
          var rt = f[O];
          if (rt != null) switch (O) {
            case "children":
              K = rt;
              break;
            case "selected":
              be = rt;
              break;
            case "dangerouslySetInnerHTML":
              ke = rt;
              break;
            case "value":
              pe = rt;
            default:
              ce(n, v, O, rt);
          }
        }
        if (j != null) if (f = pe !== null ? "" + pe : Ie(K), G(j)) {
          for (v = 0; v < j.length; v++)
            if ("" + j[v] === f) {
              n.push(' selected=""');
              break;
            }
        } else "" + j === f && n.push(' selected=""');
        else be && n.push(' selected=""');
        return n.push(">"), Ee(n, ke, K), K;
      case "textarea":
        n.push(me("textarea")), ke = j = O = null;
        for (K in f) if (r.call(f, K) && (pe = f[K], pe != null)) switch (K) {
          case "children":
            ke = pe;
            break;
          case "value":
            O = pe;
            break;
          case "defaultValue":
            j = pe;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(91));
          default:
            ce(
              n,
              v,
              K,
              pe
            );
        }
        if (O === null && j !== null && (O = j), n.push(">"), ke != null) {
          if (O != null) throw Error(t(92));
          if (G(ke) && 1 < ke.length) throw Error(t(93));
          O = "" + ke;
        }
        return typeof O == "string" && O[0] === `
` && n.push(`
`), O !== null && n.push(A("" + O)), null;
      case "input":
        n.push(me("input")), pe = ke = K = O = null;
        for (j in f) if (r.call(f, j) && (be = f[j], be != null)) switch (j) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, "input"));
          case "defaultChecked":
            pe = be;
            break;
          case "defaultValue":
            K = be;
            break;
          case "checked":
            ke = be;
            break;
          case "value":
            O = be;
            break;
          default:
            ce(n, v, j, be);
        }
        return ke !== null ? ce(n, v, "checked", ke) : pe !== null && ce(n, v, "checked", pe), O !== null ? ce(n, v, "value", O) : K !== null && ce(n, v, "value", K), n.push("/>"), null;
      case "menuitem":
        n.push(me("menuitem"));
        for (var Gt in f) if (r.call(f, Gt) && (O = f[Gt], O != null)) switch (Gt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            ce(n, v, Gt, O);
        }
        return n.push(">"), null;
      case "title":
        n.push(me("title")), O = null;
        for (rt in f) if (r.call(f, rt) && (j = f[rt], j != null)) switch (rt) {
          case "children":
            O = j;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(434));
          default:
            ce(n, v, rt, j);
        }
        return n.push(">"), O;
      case "listing":
      case "pre":
        n.push(me(l)), j = O = null;
        for (pe in f) if (r.call(f, pe) && (K = f[pe], K != null)) switch (pe) {
          case "children":
            O = K;
            break;
          case "dangerouslySetInnerHTML":
            j = K;
            break;
          default:
            ce(n, v, pe, K);
        }
        if (n.push(">"), j != null) {
          if (O != null) throw Error(t(60));
          if (typeof j != "object" || !("__html" in j)) throw Error(t(61));
          f = j.__html, f != null && (typeof f == "string" && 0 < f.length && f[0] === `
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
        for (var Zt in f) if (r.call(f, Zt) && (O = f[Zt], O != null)) switch (Zt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, l));
          default:
            ce(n, v, Zt, O);
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
        return N.insertionMode === 0 && n.push("<!DOCTYPE html>"), Fe(n, f, l, v);
      default:
        if (l.indexOf("-") === -1 && typeof f.is != "string") return Fe(n, f, l, v);
        n.push(me(l)), j = O = null;
        for (be in f) if (r.call(f, be) && (K = f[be], K != null)) switch (be) {
          case "children":
            O = K;
            break;
          case "dangerouslySetInnerHTML":
            j = K;
            break;
          case "style":
            x(n, v, K);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            y(be) && typeof K != "function" && typeof K != "symbol" && n.push(" ", be, '="', A(K), '"');
        }
        return n.push(">"), Ee(n, j, O), O;
    }
  }
  function Pe(n, l, f) {
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
  var Me = /[<\u2028\u2029]/g;
  function Oe(n) {
    return JSON.stringify(n).replace(Me, function(l) {
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
  function We(n, l) {
    return l = l === void 0 ? "" : l, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: l + "P:", segmentPrefix: l + "S:", boundaryPrefix: l + "B:", idPrefix: l, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: n };
  }
  function tt(n, l, f, v) {
    return f.generateStaticMarkup ? (n.push(A(l)), !1) : (l === "" ? n = v : (v && n.push("<!-- -->"), n.push(A(l)), n = !0), n);
  }
  var oe = Object.assign, M = Symbol.for("react.element"), C = Symbol.for("react.portal"), F = Symbol.for("react.fragment"), D = Symbol.for("react.strict_mode"), h = Symbol.for("react.profiler"), ee = Symbol.for("react.provider"), E = Symbol.for("react.context"), ae = Symbol.for("react.forward_ref"), Q = Symbol.for("react.suspense"), te = Symbol.for("react.suspense_list"), q = Symbol.for("react.memo"), ne = Symbol.for("react.lazy"), de = Symbol.for("react.scope"), J = Symbol.for("react.debug_trace_mode"), ge = Symbol.for("react.legacy_hidden"), re = Symbol.for("react.default_value"), se = Symbol.iterator;
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
      case D:
        return "StrictMode";
      case Q:
        return "Suspense";
      case te:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case E:
        return (n.displayName || "Context") + ".Consumer";
      case ee:
        return (n._context.displayName || "Context") + ".Provider";
      case ae:
        var l = n.render;
        return n = n.displayName, n || (n = l.displayName || l.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case q:
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
  var le = {};
  function it(n, l) {
    if (n = n.contextTypes, !n) return le;
    var f = {}, v;
    for (v in n) f[v] = l[v];
    return f;
  }
  var He = null;
  function we(n, l) {
    if (n !== l) {
      n.context._currentValue2 = n.parentValue, n = n.parent;
      var f = l.parent;
      if (n === null) {
        if (f !== null) throw Error(t(401));
      } else {
        if (f === null) throw Error(t(401));
        we(n, f);
      }
      l.context._currentValue2 = l.value;
    }
  }
  function B(n) {
    n.context._currentValue2 = n.parentValue, n = n.parent, n !== null && B(n);
  }
  function ie(n) {
    var l = n.parent;
    l !== null && ie(l), n.context._currentValue2 = n.value;
  }
  function Xe(n, l) {
    if (n.context._currentValue2 = n.parentValue, n = n.parent, n === null) throw Error(t(402));
    n.depth === l.depth ? we(n, l) : Xe(n, l);
  }
  function Ne(n, l) {
    var f = l.parent;
    if (f === null) throw Error(t(402));
    n.depth === f.depth ? we(n, f) : Ne(n, f), l.context._currentValue2 = l.value;
  }
  function De(n) {
    var l = He;
    l !== n && (l === null ? ie(n) : n === null ? B(l) : l.depth === n.depth ? we(l, n) : l.depth > n.depth ? Xe(l, n) : Ne(l, n), He = n);
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
    var N = n.state !== void 0 ? n.state : null;
    n.updater = er, n.props = f, n.state = N;
    var O = { queue: [], replace: !1 };
    n._reactInternals = O;
    var j = l.contextType;
    if (n.context = typeof j == "object" && j !== null ? j._currentValue2 : v, j = l.getDerivedStateFromProps, typeof j == "function" && (j = j(f, N), N = j == null ? N : oe({}, N, j), n.state = N), typeof l.getDerivedStateFromProps != "function" && typeof n.getSnapshotBeforeUpdate != "function" && (typeof n.UNSAFE_componentWillMount == "function" || typeof n.componentWillMount == "function")) if (l = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), l !== n.state && er.enqueueReplaceState(n, n.state, null), O.queue !== null && 0 < O.queue.length) if (l = O.queue, j = O.replace, O.queue = null, O.replace = !1, j && l.length === 1) n.state = l[0];
    else {
      for (O = j ? l[0] : n.state, N = !0, j = j ? 1 : 0; j < l.length; j++) {
        var K = l[j];
        K = typeof K == "function" ? K.call(n, O, f, v) : K, K != null && (N ? (N = !1, O = oe({}, O, K)) : oe(O, K));
      }
      n.state = O;
    }
    else O.queue = null;
  }
  var Ut = { id: 1, overflow: "" };
  function Bt(n, l, f) {
    var v = n.id;
    n = n.overflow;
    var N = 32 - pt(v) - 1;
    v &= ~(1 << N), f += 1;
    var O = 32 - pt(l) + N;
    if (30 < O) {
      var j = N - N % 5;
      return O = (v & (1 << j) - 1).toString(32), v >>= j, N -= j, { id: 1 << 32 - pt(l) + N | f << N | v, overflow: O + n };
    }
    return { id: 1 << O | f << N | v, overflow: n };
  }
  var pt = Math.clz32 ? Math.clz32 : ut, Tt = Math.log, nt = Math.LN2;
  function ut(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Tt(n) / nt | 0) | 0;
  }
  function Wt(n, l) {
    return n === l && (n !== 0 || 1 / n === 1 / l) || n !== n && l !== l;
  }
  var Ht = typeof Object.is == "function" ? Object.is : Wt, ht = null, vt = null, mt = null, Le = null, lt = !1, rr = !1, Vt = 0, fe = null, ot = 0;
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
  function qt() {
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
          for (var N = 0; N < v.length && N < l.length; N++) if (!Ht(l[N], v[N])) {
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
  var Mt = { readContext: function(n) {
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
    var f = jt;
    if (f === null) throw Error(t(404));
    return l = Vt++, n = ":" + f.idPrefix + "R" + n, 0 < l && (n += "H" + l.toString(32)), n + ":";
  }, useMutableSource: function(n, l) {
    return Ct(), l(n._source);
  }, useSyncExternalStore: function(n, l, f) {
    if (f === void 0) throw Error(t(407));
    return f();
  } }, jt = null, Qe = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function cr(n) {
    return console.error(n), null;
  }
  function Ot() {
  }
  function ur(n, l, f, v, N, O, j, K, pe) {
    var be = [], ke = /* @__PURE__ */ new Set();
    return l = { destination: null, responseState: l, progressiveChunkSize: v, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: ke, pingedTasks: be, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: N === void 0 ? cr : N, onAllReady: Ot, onShellReady: j === void 0 ? Ot : j, onShellError: Ot, onFatalError: Ot }, f = ir(l, 0, null, f, !1, !1), f.parentFlushed = !0, n = Yt(l, n, null, f, ke, le, null, Ut), be.push(n), l;
  }
  function Yt(n, l, f, v, N, O, j, K) {
    n.allPendingTasks++, f === null ? n.pendingRootTasks++ : f.pendingTasks++;
    var pe = { node: l, ping: function() {
      var be = n.pingedTasks;
      be.push(pe), be.length === 1 && kr(n);
    }, blockedBoundary: f, blockedSegment: v, abortSet: N, legacyContext: O, context: j, treeContext: K };
    return N.add(pe), pe;
  }
  function ir(n, l, f, v, N, O) {
    return { status: 0, id: -1, index: l, parentFlushed: !1, chunks: [], children: [], formatContext: v, boundary: f, lastPushedText: N, textEmbedded: O };
  }
  function p(n, l) {
    if (n = n.onError(l), n != null && typeof n != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof n + '" instead');
    return n;
  }
  function m(n, l) {
    var f = n.onShellError;
    f(l), f = n.onFatalError, f(l), n.destination !== null ? (n.status = 2, n.destination.destroy(l)) : (n.status = 1, n.fatalError = l);
  }
  function _(n, l, f, v, N) {
    for (ht = {}, vt = l, Vt = 0, n = f(v, N); rr; ) rr = !1, Vt = 0, ot += 1, Le = null, n = f(v, N);
    return qt(), n;
  }
  function V(n, l, f, v) {
    var N = f.render(), O = v.childContextTypes;
    if (O != null) {
      var j = l.legacyContext;
      if (typeof f.getChildContext != "function") v = j;
      else {
        f = f.getChildContext();
        for (var K in f) if (!(K in O)) throw Error(t(108, Ue(v) || "Unknown", K));
        v = oe({}, j, f);
      }
      l.legacyContext = v, Se(n, l, N), l.legacyContext = j;
    } else Se(n, l, N);
  }
  function ye(n, l) {
    if (n && n.defaultProps) {
      l = oe({}, l), n = n.defaultProps;
      for (var f in n) l[f] === void 0 && (l[f] = n[f]);
      return l;
    }
    return l;
  }
  function ve(n, l, f, v, N) {
    if (typeof f == "function") if (f.prototype && f.prototype.isReactComponent) {
      N = it(f, l.legacyContext);
      var O = f.contextType;
      O = new f(v, typeof O == "object" && O !== null ? O._currentValue2 : N), tr(O, f, v, N), V(n, l, O, f);
    } else {
      O = it(f, l.legacyContext), N = _(n, l, f, v, O);
      var j = Vt !== 0;
      if (typeof N == "object" && N !== null && typeof N.render == "function" && N.$$typeof === void 0) tr(N, f, v, O), V(n, l, N, f);
      else if (j) {
        v = l.treeContext, l.treeContext = Bt(v, 1, 0);
        try {
          Se(n, l, N);
        } finally {
          l.treeContext = v;
        }
      } else Se(n, l, N);
    }
    else if (typeof f == "string") {
      switch (N = l.blockedSegment, O = Re(N.chunks, f, v, n.responseState, N.formatContext), N.lastPushedText = !1, j = N.formatContext, N.formatContext = Z(j, f, v), Ze(n, l, O), N.formatContext = j, f) {
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
          N.chunks.push("</", f, ">");
      }
      N.lastPushedText = !1;
    } else {
      switch (f) {
        case ge:
        case J:
        case D:
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
            f = l.blockedBoundary, N = l.blockedSegment, O = v.fallback, v = v.children, j = /* @__PURE__ */ new Set();
            var K = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: j, errorDigest: null }, pe = ir(n, N.chunks.length, K, N.formatContext, !1, !1);
            N.children.push(pe), N.lastPushedText = !1;
            var be = ir(n, 0, null, N.formatContext, !1, !1);
            be.parentFlushed = !0, l.blockedBoundary = K, l.blockedSegment = be;
            try {
              if (Ze(
                n,
                l,
                v
              ), n.responseState.generateStaticMarkup || be.lastPushedText && be.textEmbedded && be.chunks.push("<!-- -->"), be.status = 1, Be(K, be), K.pendingTasks === 0) break e;
            } catch (ke) {
              be.status = 4, K.forceClientRender = !0, K.errorDigest = p(n, ke);
            } finally {
              l.blockedBoundary = f, l.blockedSegment = N;
            }
            l = Yt(n, O, f, pe, j, l.legacyContext, l.context, l.treeContext), n.pingedTasks.push(l);
          }
          return;
      }
      if (typeof f == "object" && f !== null) switch (f.$$typeof) {
        case ae:
          if (v = _(n, l, f.render, v, N), Vt !== 0) {
            f = l.treeContext, l.treeContext = Bt(f, 1, 0);
            try {
              Se(n, l, v);
            } finally {
              l.treeContext = f;
            }
          } else Se(n, l, v);
          return;
        case q:
          f = f.type, v = ye(f, v), ve(n, l, f, v, N);
          return;
        case ee:
          if (N = v.children, f = f._context, v = v.value, O = f._currentValue2, f._currentValue2 = v, j = He, He = v = { parent: j, depth: j === null ? 0 : j.depth + 1, context: f, parentValue: O, value: v }, l.context = v, Se(n, l, N), n = He, n === null) throw Error(t(403));
          v = n.parentValue, n.context._currentValue2 = v === re ? n.context._defaultValue : v, n = He = n.parent, l.context = n;
          return;
        case E:
          v = v.children, v = v(f._currentValue2), Se(n, l, v);
          return;
        case ne:
          N = f._init, f = N(f._payload), v = ye(f, v), ve(
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
        case M:
          ve(n, l, f.type, f.props, f.ref);
          return;
        case C:
          throw Error(t(257));
        case ne:
          var v = f._init;
          f = v(f._payload), Se(n, l, f);
          return;
      }
      if (G(f)) {
        je(n, l, f);
        return;
      }
      if (f === null || typeof f != "object" ? v = null : (v = se && f[se] || f["@@iterator"], v = typeof v == "function" ? v : null), v && (v = v.call(f))) {
        if (f = v.next(), !f.done) {
          var N = [];
          do
            N.push(f.value), f = v.next();
          while (!f.done);
          je(n, l, N);
        }
        return;
      }
      throw n = Object.prototype.toString.call(f), Error(t(31, n === "[object Object]" ? "object with keys {" + Object.keys(f).join(", ") + "}" : n));
    }
    typeof f == "string" ? (v = l.blockedSegment, v.lastPushedText = tt(l.blockedSegment.chunks, f, n.responseState, v.lastPushedText)) : typeof f == "number" && (v = l.blockedSegment, v.lastPushedText = tt(l.blockedSegment.chunks, "" + f, n.responseState, v.lastPushedText));
  }
  function je(n, l, f) {
    for (var v = f.length, N = 0; N < v; N++) {
      var O = l.treeContext;
      l.treeContext = Bt(O, v, N);
      try {
        Ze(n, l, f[N]);
      } finally {
        l.treeContext = O;
      }
    }
  }
  function Ze(n, l, f) {
    var v = l.blockedSegment.formatContext, N = l.legacyContext, O = l.context;
    try {
      return Se(n, l, f);
    } catch (pe) {
      if (qt(), typeof pe == "object" && pe !== null && typeof pe.then == "function") {
        f = pe;
        var j = l.blockedSegment, K = ir(n, j.chunks.length, null, j.formatContext, j.lastPushedText, !0);
        j.children.push(K), j.lastPushedText = !1, n = Yt(n, l.node, l.blockedBoundary, K, l.abortSet, l.legacyContext, l.context, l.treeContext).ping, f.then(n, n), l.blockedSegment.formatContext = v, l.legacyContext = N, l.context = O, De(O);
      } else throw l.blockedSegment.formatContext = v, l.legacyContext = N, l.context = O, De(O), pe;
    }
  }
  function gt(n) {
    var l = n.blockedBoundary;
    n = n.blockedSegment, n.status = 3, Rt(this, l, n);
  }
  function Je(n, l, f) {
    var v = n.blockedBoundary;
    n.blockedSegment.status = 3, v === null ? (l.allPendingTasks--, l.status !== 2 && (l.status = 2, l.destination !== null && l.destination.push(null))) : (v.pendingTasks--, v.forceClientRender || (v.forceClientRender = !0, n = f === void 0 ? Error(t(432)) : f, v.errorDigest = l.onError(n), v.parentFlushed && l.clientRenderedBoundaries.push(v)), v.fallbackAbortableTasks.forEach(function(N) {
      return Je(N, l, f);
    }), v.fallbackAbortableTasks.clear(), l.allPendingTasks--, l.allPendingTasks === 0 && (v = l.onAllReady, v()));
  }
  function Be(n, l) {
    if (l.chunks.length === 0 && l.children.length === 1 && l.children[0].boundary === null) {
      var f = l.children[0];
      f.id = l.id, f.parentFlushed = !0, f.status === 1 && Be(n, f);
    } else n.completedSegments.push(l);
  }
  function Rt(n, l, f) {
    if (l === null) {
      if (f.parentFlushed) {
        if (n.completedRootSegment !== null) throw Error(t(389));
        n.completedRootSegment = f;
      }
      n.pendingRootTasks--, n.pendingRootTasks === 0 && (n.onShellError = Ot, l = n.onShellReady, l());
    } else l.pendingTasks--, l.forceClientRender || (l.pendingTasks === 0 ? (f.parentFlushed && f.status === 1 && Be(l, f), l.parentFlushed && n.completedBoundaries.push(l), l.fallbackAbortableTasks.forEach(gt, n), l.fallbackAbortableTasks.clear()) : f.parentFlushed && f.status === 1 && (Be(l, f), l.completedSegments.length === 1 && l.parentFlushed && n.partialBoundaries.push(l)));
    n.allPendingTasks--, n.allPendingTasks === 0 && (n = n.onAllReady, n());
  }
  function kr(n) {
    if (n.status !== 2) {
      var l = He, f = Qe.current;
      Qe.current = Mt;
      var v = jt;
      jt = n.responseState;
      try {
        var N = n.pingedTasks, O;
        for (O = 0; O < N.length; O++) {
          var j = N[O], K = n, pe = j.blockedSegment;
          if (pe.status === 0) {
            De(j.context);
            try {
              Se(K, j, j.node), K.responseState.generateStaticMarkup || pe.lastPushedText && pe.textEmbedded && pe.chunks.push("<!-- -->"), j.abortSet.delete(j), pe.status = 1, Rt(K, j.blockedBoundary, pe);
            } catch (Pt) {
              if (qt(), typeof Pt == "object" && Pt !== null && typeof Pt.then == "function") {
                var be = j.ping;
                Pt.then(be, be);
              } else {
                j.abortSet.delete(j), pe.status = 4;
                var ke = j.blockedBoundary, rt = Pt, Gt = p(K, rt);
                if (ke === null ? m(K, rt) : (ke.pendingTasks--, ke.forceClientRender || (ke.forceClientRender = !0, ke.errorDigest = Gt, ke.parentFlushed && K.clientRenderedBoundaries.push(ke))), K.allPendingTasks--, K.allPendingTasks === 0) {
                  var Zt = K.onAllReady;
                  Zt();
                }
              }
            } finally {
            }
          }
        }
        N.splice(0, O), n.destination !== null && Nr(n, n.destination);
      } catch (Pt) {
        p(n, Pt), m(n, Pt);
      } finally {
        jt = v, Qe.current = f, f === Mt && De(l);
      }
    }
  }
  function xr(n, l, f) {
    switch (f.parentFlushed = !0, f.status) {
      case 0:
        var v = f.id = n.nextSegmentId++;
        return f.lastPushedText = !1, f.textEmbedded = !1, n = n.responseState, l.push('<template id="'), l.push(n.placeholderPrefix), n = v.toString(16), l.push(n), l.push('"></template>');
      case 1:
        f.status = 2;
        var N = !0;
        v = f.chunks;
        var O = 0;
        f = f.children;
        for (var j = 0; j < f.length; j++) {
          for (N = f[j]; O < N.index; O++) l.push(v[O]);
          N = Er(n, l, N);
        }
        for (; O < v.length - 1; O++) l.push(v[O]);
        return O < v.length && (N = l.push(v[O])), N;
      default:
        throw Error(t(390));
    }
  }
  function Er(n, l, f) {
    var v = f.boundary;
    if (v === null) return xr(n, l, f);
    if (v.parentFlushed = !0, v.forceClientRender) return n.responseState.generateStaticMarkup || (v = v.errorDigest, l.push("<!--$!-->"), l.push("<template"), v && (l.push(' data-dgst="'), v = A(v), l.push(v), l.push('"')), l.push("></template>")), xr(n, l, f), n = n.responseState.generateStaticMarkup ? !0 : l.push("<!--/$-->"), n;
    if (0 < v.pendingTasks) {
      v.rootSegmentID = n.nextSegmentId++, 0 < v.completedSegments.length && n.partialBoundaries.push(v);
      var N = n.responseState, O = N.nextSuspenseID++;
      return N = N.boundaryPrefix + O.toString(16), v = v.id = N, Pe(l, n.responseState, v), xr(n, l, f), l.push("<!--/$-->");
    }
    if (v.byteSize > n.progressiveChunkSize) return v.rootSegmentID = n.nextSegmentId++, n.completedBoundaries.push(v), Pe(l, n.responseState, v.id), xr(n, l, f), l.push("<!--/$-->");
    if (n.responseState.generateStaticMarkup || l.push("<!--$-->"), f = v.completedSegments, f.length !== 1) throw Error(t(391));
    return Er(n, l, f[0]), n = n.responseState.generateStaticMarkup ? !0 : l.push("<!--/$-->"), n;
  }
  function $r(n, l, f) {
    return Te(l, n.responseState, f.formatContext, f.id), Er(n, l, f), st(l, f.formatContext);
  }
  function Ur(n, l, f) {
    for (var v = f.completedSegments, N = 0; N < v.length; N++) Br(n, l, f, v[N]);
    if (v.length = 0, n = n.responseState, v = f.id, f = f.rootSegmentID, l.push(n.startInlineScript), n.sentCompleteBoundaryFunction ? l.push('$RC("') : (n.sentCompleteBoundaryFunction = !0, l.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), v === null) throw Error(t(395));
    return f = f.toString(16), l.push(v), l.push('","'), l.push(n.segmentPrefix), l.push(f), l.push('")<\/script>');
  }
  function Br(n, l, f, v) {
    if (v.status === 2) return !0;
    var N = v.id;
    if (N === -1) {
      if ((v.id = f.rootSegmentID) === -1) throw Error(t(392));
      return $r(n, l, v);
    }
    return $r(n, l, v), n = n.responseState, l.push(n.startInlineScript), n.sentCompleteSegmentFunction ? l.push('$RS("') : (n.sentCompleteSegmentFunction = !0, l.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), l.push(n.segmentPrefix), N = N.toString(16), l.push(N), l.push('","'), l.push(n.placeholderPrefix), l.push(N), l.push('")<\/script>');
  }
  function Nr(n, l) {
    try {
      var f = n.completedRootSegment;
      if (f !== null && n.pendingRootTasks === 0) {
        Er(n, l, f), n.completedRootSegment = null;
        var v = n.responseState.bootstrapChunks;
        for (f = 0; f < v.length - 1; f++) l.push(v[f]);
        f < v.length && l.push(v[f]);
      }
      var N = n.clientRenderedBoundaries, O;
      for (O = 0; O < N.length; O++) {
        var j = N[O];
        v = l;
        var K = n.responseState, pe = j.id, be = j.errorDigest, ke = j.errorMessage, rt = j.errorComponentStack;
        if (v.push(K.startInlineScript), K.sentClientRenderFunction ? v.push('$RX("') : (K.sentClientRenderFunction = !0, v.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), pe === null) throw Error(t(395));
        if (v.push(pe), v.push('"'), be || ke || rt) {
          v.push(",");
          var Gt = Oe(be || "");
          v.push(Gt);
        }
        if (ke || rt) {
          v.push(",");
          var Zt = Oe(ke || "");
          v.push(Zt);
        }
        if (rt) {
          v.push(",");
          var Pt = Oe(rt);
          v.push(Pt);
        }
        if (!v.push(")<\/script>")) {
          n.destination = null, O++, N.splice(0, O);
          return;
        }
      }
      N.splice(0, O);
      var _r = n.completedBoundaries;
      for (O = 0; O < _r.length; O++) if (!Ur(n, l, _r[O])) {
        n.destination = null, O++, _r.splice(0, O);
        return;
      }
      _r.splice(0, O);
      var dr = n.partialBoundaries;
      for (O = 0; O < dr.length; O++) {
        var Hr = dr[O];
        e: {
          N = n, j = l;
          var Tr = Hr.completedSegments;
          for (K = 0; K < Tr.length; K++) if (!Br(N, j, Hr, Tr[K])) {
            K++, Tr.splice(0, K);
            var wn = !1;
            break e;
          }
          Tr.splice(0, K), wn = !0;
        }
        if (!wn) {
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
      }), f.clear(), n.destination !== null && Nr(n, n.destination);
    } catch (v) {
      p(n, v), m(n, v);
    }
  }
  function Sn() {
  }
  function Wr(n, l, f, v) {
    var N = !1, O = null, j = "", K = { push: function(be) {
      return be !== null && (j += be), !0;
    }, destroy: function(be) {
      N = !0, O = be;
    } }, pe = !1;
    if (n = ur(n, We(f, l ? l.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, Sn, void 0, function() {
      pe = !0;
    }), kr(n), vn(n, v), n.status === 1) n.status = 2, K.destroy(n.fatalError);
    else if (n.status !== 2 && n.destination === null) {
      n.destination = K;
      try {
        Nr(n, K);
      } catch (be) {
        p(n, be), m(n, be);
      }
    }
    if (N) throw O;
    if (!pe) throw Error(t(426));
    return j;
  }
  return Ar.renderToNodeStream = function() {
    throw Error(t(207));
  }, Ar.renderToStaticMarkup = function(n, l) {
    return Wr(n, l, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Ar.renderToStaticNodeStream = function() {
    throw Error(t(208));
  }, Ar.renderToString = function(n, l) {
    return Wr(n, l, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Ar.version = "18.3.1", Ar;
}
var zn = {}, Qi;
function dc() {
  if (Qi) return zn;
  Qi = 1;
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
  var w = new TextEncoder();
  function S(a) {
    return w.encode(a);
  }
  function g(a) {
    return w.encode(a);
  }
  function I(a, s) {
    typeof a.error == "function" ? a.error(s) : a.close();
  }
  var T = Object.prototype.hasOwnProperty, $ = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Y = {}, A = {};
  function k(a) {
    return T.call(A, a) ? !0 : T.call(Y, a) ? !1 : $.test(a) ? A[a] = !0 : (Y[a] = !0, !1);
  }
  function L(a, s, d, b, P, R, z) {
    this.acceptsBooleans = s === 2 || s === 3 || s === 4, this.attributeName = b, this.attributeNamespace = P, this.mustUseProperty = d, this.propertyName = a, this.type = s, this.sanitizeURL = R, this.removeEmptyString = z;
  }
  var G = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
    G[a] = new L(a, 0, !1, a, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
    var s = a[0];
    G[s] = new L(s, 1, !1, a[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
    G[a] = new L(a, 2, !1, a.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
    G[a] = new L(a, 2, !1, a, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
    G[a] = new L(a, 3, !1, a.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(a) {
    G[a] = new L(a, 3, !0, a, null, !1, !1);
  }), ["capture", "download"].forEach(function(a) {
    G[a] = new L(a, 4, !1, a, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(a) {
    G[a] = new L(a, 6, !1, a, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(a) {
    G[a] = new L(a, 5, !1, a.toLowerCase(), null, !1, !1);
  });
  var H = /[\-:]([a-z])/g;
  function Z(a) {
    return a[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
    var s = a.replace(
      H,
      Z
    );
    G[s] = new L(s, 1, !1, a, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
    var s = a.replace(H, Z);
    G[s] = new L(s, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
    var s = a.replace(H, Z);
    G[s] = new L(s, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(a) {
    G[a] = new L(a, 1, !1, a.toLowerCase(), null, !1, !1);
  }), G.xlinkHref = new L("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(a) {
    G[a] = new L(a, 1, !1, a.toLowerCase(), null, !0, !0);
  });
  var W = {
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
  Object.keys(W).forEach(function(a) {
    x.forEach(function(s) {
      s = s + a.charAt(0).toUpperCase() + a.substring(1), W[s] = W[a];
    });
  });
  var ce = /["'&<>]/;
  function Ee(a) {
    if (typeof a == "boolean" || typeof a == "number") return "" + a;
    a = "" + a;
    var s = ce.exec(a);
    if (s) {
      var d = "", b, P = 0;
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
        P !== b && (d += a.substring(P, b)), P = b + 1, d += s;
      }
      a = P !== b ? d + a.substring(P, b) : d;
    }
    return a;
  }
  var Ie = /([A-Z])/g, Fe = /^ms-/, Ge = Array.isArray, ue = g("<script>"), me = g("<\/script>"), Re = g('<script src="'), Pe = g('<script type="module" src="'), Te = g('" async=""><\/script>'), st = /(<\/|<)(s)(cript)/gi;
  function Me(a, s, d, b) {
    return "" + s + (d === "s" ? "\\u0073" : "\\u0053") + b;
  }
  function Oe(a, s, d, b, P) {
    a = a === void 0 ? "" : a, s = s === void 0 ? ue : g('<script nonce="' + Ee(s) + '">');
    var R = [];
    if (d !== void 0 && R.push(s, S(("" + d).replace(st, Me)), me), b !== void 0) for (d = 0; d < b.length; d++) R.push(Re, S(Ee(b[d])), Te);
    if (P !== void 0) for (b = 0; b < P.length; b++) R.push(Pe, S(Ee(P[b])), Te);
    return { bootstrapChunks: R, startInlineScript: s, placeholderPrefix: g(a + "P:"), segmentPrefix: g(a + "S:"), boundaryPrefix: a + "B:", idPrefix: a, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function We(a, s) {
    return { insertionMode: a, selectedValue: s };
  }
  function tt(a) {
    return We(a === "http://www.w3.org/2000/svg" ? 2 : a === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function oe(a, s, d) {
    switch (s) {
      case "select":
        return We(1, d.value != null ? d.value : d.defaultValue);
      case "svg":
        return We(2, null);
      case "math":
        return We(3, null);
      case "foreignObject":
        return We(1, null);
      case "table":
        return We(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return We(5, null);
      case "colgroup":
        return We(7, null);
      case "tr":
        return We(6, null);
    }
    return 4 <= a.insertionMode || a.insertionMode === 0 ? We(1, null) : a;
  }
  var M = g("<!-- -->");
  function C(a, s, d, b) {
    return s === "" ? b : (b && a.push(M), a.push(S(Ee(s))), !0);
  }
  var F = /* @__PURE__ */ new Map(), D = g(' style="'), h = g(":"), ee = g(";");
  function E(a, s, d) {
    if (typeof d != "object") throw Error(t(62));
    s = !0;
    for (var b in d) if (T.call(d, b)) {
      var P = d[b];
      if (P != null && typeof P != "boolean" && P !== "") {
        if (b.indexOf("--") === 0) {
          var R = S(Ee(b));
          P = S(Ee(("" + P).trim()));
        } else {
          R = b;
          var z = F.get(R);
          z !== void 0 || (z = g(Ee(R.replace(Ie, "-$1").toLowerCase().replace(Fe, "-ms-"))), F.set(R, z)), R = z, P = typeof P == "number" ? P === 0 || T.call(W, b) ? S("" + P) : S(P + "px") : S(Ee(("" + P).trim()));
        }
        s ? (s = !1, a.push(D, R, h, P)) : a.push(ee, R, h, P);
      }
    }
    s || a.push(te);
  }
  var ae = g(" "), Q = g('="'), te = g('"'), q = g('=""');
  function ne(a, s, d, b) {
    switch (d) {
      case "style":
        E(a, s, b);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < d.length) || d[0] !== "o" && d[0] !== "O" || d[1] !== "n" && d[1] !== "N") {
      if (s = G.hasOwnProperty(d) ? G[d] : null, s !== null) {
        switch (typeof b) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!s.acceptsBooleans) return;
        }
        switch (d = S(s.attributeName), s.type) {
          case 3:
            b && a.push(ae, d, q);
            break;
          case 4:
            b === !0 ? a.push(ae, d, q) : b !== !1 && a.push(ae, d, Q, S(Ee(b)), te);
            break;
          case 5:
            isNaN(b) || a.push(ae, d, Q, S(Ee(b)), te);
            break;
          case 6:
            !isNaN(b) && 1 <= b && a.push(ae, d, Q, S(Ee(b)), te);
            break;
          default:
            s.sanitizeURL && (b = "" + b), a.push(ae, d, Q, S(Ee(b)), te);
        }
      } else if (k(d)) {
        switch (typeof b) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (s = d.toLowerCase().slice(0, 5), s !== "data-" && s !== "aria-") return;
        }
        a.push(ae, S(d), Q, S(Ee(b)), te);
      }
    }
  }
  var de = g(">"), J = g("/>");
  function ge(a, s, d) {
    if (s != null) {
      if (d != null) throw Error(t(60));
      if (typeof s != "object" || !("__html" in s)) throw Error(t(61));
      s = s.__html, s != null && a.push(S("" + s));
    }
  }
  function re(a) {
    var s = "";
    return e.Children.forEach(a, function(d) {
      d != null && (s += d);
    }), s;
  }
  var se = g(' selected=""');
  function Ue(a, s, d, b) {
    a.push(we(d));
    var P = d = null, R;
    for (R in s) if (T.call(s, R)) {
      var z = s[R];
      if (z != null) switch (R) {
        case "children":
          d = z;
          break;
        case "dangerouslySetInnerHTML":
          P = z;
          break;
        default:
          ne(a, b, R, z);
      }
    }
    return a.push(de), ge(a, P, d), typeof d == "string" ? (a.push(S(Ee(d))), null) : d;
  }
  var le = g(`
`), it = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, He = /* @__PURE__ */ new Map();
  function we(a) {
    var s = He.get(a);
    if (s === void 0) {
      if (!it.test(a)) throw Error(t(65, a));
      s = g("<" + a), He.set(a, s);
    }
    return s;
  }
  var B = g("<!DOCTYPE html>");
  function ie(a, s, d, b, P) {
    switch (s) {
      case "select":
        a.push(we("select"));
        var R = null, z = null;
        for (xe in d) if (T.call(d, xe)) {
          var X = d[xe];
          if (X != null) switch (xe) {
            case "children":
              R = X;
              break;
            case "dangerouslySetInnerHTML":
              z = X;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              ne(a, b, xe, X);
          }
        }
        return a.push(de), ge(a, z, R), R;
      case "option":
        z = P.selectedValue, a.push(we("option"));
        var he = X = null, _e = null, xe = null;
        for (R in d) if (T.call(d, R)) {
          var et = d[R];
          if (et != null) switch (R) {
            case "children":
              X = et;
              break;
            case "selected":
              _e = et;
              break;
            case "dangerouslySetInnerHTML":
              xe = et;
              break;
            case "value":
              he = et;
            default:
              ne(a, b, R, et);
          }
        }
        if (z != null) if (d = he !== null ? "" + he : re(X), Ge(z)) {
          for (b = 0; b < z.length; b++)
            if ("" + z[b] === d) {
              a.push(se);
              break;
            }
        } else "" + z === d && a.push(se);
        else _e && a.push(se);
        return a.push(de), ge(a, xe, X), X;
      case "textarea":
        a.push(we("textarea")), xe = z = R = null;
        for (X in d) if (T.call(d, X) && (he = d[X], he != null)) switch (X) {
          case "children":
            xe = he;
            break;
          case "value":
            R = he;
            break;
          case "defaultValue":
            z = he;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(91));
          default:
            ne(a, b, X, he);
        }
        if (R === null && z !== null && (R = z), a.push(de), xe != null) {
          if (R != null) throw Error(t(92));
          if (Ge(xe) && 1 < xe.length) throw Error(t(93));
          R = "" + xe;
        }
        return typeof R == "string" && R[0] === `
` && a.push(le), R !== null && a.push(S(Ee("" + R))), null;
      case "input":
        a.push(we("input")), he = xe = X = R = null;
        for (z in d) if (T.call(d, z) && (_e = d[z], _e != null)) switch (z) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, "input"));
          case "defaultChecked":
            he = _e;
            break;
          case "defaultValue":
            X = _e;
            break;
          case "checked":
            xe = _e;
            break;
          case "value":
            R = _e;
            break;
          default:
            ne(a, b, z, _e);
        }
        return xe !== null ? ne(
          a,
          b,
          "checked",
          xe
        ) : he !== null && ne(a, b, "checked", he), R !== null ? ne(a, b, "value", R) : X !== null && ne(a, b, "value", X), a.push(J), null;
      case "menuitem":
        a.push(we("menuitem"));
        for (var It in d) if (T.call(d, It) && (R = d[It], R != null)) switch (It) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            ne(a, b, It, R);
        }
        return a.push(de), null;
      case "title":
        a.push(we("title")), R = null;
        for (et in d) if (T.call(d, et) && (z = d[et], z != null)) switch (et) {
          case "children":
            R = z;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(434));
          default:
            ne(a, b, et, z);
        }
        return a.push(de), R;
      case "listing":
      case "pre":
        a.push(we(s)), z = R = null;
        for (he in d) if (T.call(d, he) && (X = d[he], X != null)) switch (he) {
          case "children":
            R = X;
            break;
          case "dangerouslySetInnerHTML":
            z = X;
            break;
          default:
            ne(a, b, he, X);
        }
        if (a.push(de), z != null) {
          if (R != null) throw Error(t(60));
          if (typeof z != "object" || !("__html" in z)) throw Error(t(61));
          d = z.__html, d != null && (typeof d == "string" && 0 < d.length && d[0] === `
` ? a.push(le, S(d)) : a.push(S("" + d)));
        }
        return typeof R == "string" && R[0] === `
` && a.push(le), R;
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
        a.push(we(s));
        for (var Xt in d) if (T.call(d, Xt) && (R = d[Xt], R != null)) switch (Xt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, s));
          default:
            ne(a, b, Xt, R);
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
        return P.insertionMode === 0 && a.push(B), Ue(a, d, s, b);
      default:
        if (s.indexOf("-") === -1 && typeof d.is != "string") return Ue(a, d, s, b);
        a.push(we(s)), z = R = null;
        for (_e in d) if (T.call(d, _e) && (X = d[_e], X != null)) switch (_e) {
          case "children":
            R = X;
            break;
          case "dangerouslySetInnerHTML":
            z = X;
            break;
          case "style":
            E(a, b, X);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            k(_e) && typeof X != "function" && typeof X != "symbol" && a.push(ae, S(_e), Q, S(Ee(X)), te);
        }
        return a.push(de), ge(a, z, R), R;
    }
  }
  var Xe = g("</"), Ne = g(">"), De = g('<template id="'), er = g('"></template>'), tr = g("<!--$-->"), Ut = g('<!--$?--><template id="'), Bt = g('"></template>'), pt = g("<!--$!-->"), Tt = g("<!--/$-->"), nt = g("<template"), ut = g('"'), Wt = g(' data-dgst="');
  g(' data-msg="'), g(' data-stck="');
  var Ht = g("></template>");
  function ht(a, s, d) {
    if (c(a, Ut), d === null) throw Error(t(395));
    return c(a, d), u(a, Bt);
  }
  var vt = g('<div hidden id="'), mt = g('">'), Le = g("</div>"), lt = g('<svg aria-hidden="true" style="display:none" id="'), rr = g('">'), Vt = g("</svg>"), fe = g('<math aria-hidden="true" style="display:none" id="'), ot = g('">'), Ct = g("</math>"), nr = g('<table hidden id="'), At = g('">'), qt = g("</table>"), ar = g('<table hidden><tbody id="'), mr = g('">'), at = g("</tbody></table>"), ct = g('<table hidden><tr id="'), lr = g('">'), Ft = g("</tr></table>"), Mt = g('<table hidden><colgroup id="'), jt = g('">'), Qe = g("</colgroup></table>");
  function cr(a, s, d, b) {
    switch (d.insertionMode) {
      case 0:
      case 1:
        return c(a, vt), c(a, s.segmentPrefix), c(a, S(b.toString(16))), u(a, mt);
      case 2:
        return c(a, lt), c(a, s.segmentPrefix), c(a, S(b.toString(16))), u(a, rr);
      case 3:
        return c(a, fe), c(a, s.segmentPrefix), c(a, S(b.toString(16))), u(a, ot);
      case 4:
        return c(a, nr), c(a, s.segmentPrefix), c(a, S(b.toString(16))), u(a, At);
      case 5:
        return c(a, ar), c(a, s.segmentPrefix), c(a, S(b.toString(16))), u(a, mr);
      case 6:
        return c(a, ct), c(a, s.segmentPrefix), c(a, S(b.toString(16))), u(a, lr);
      case 7:
        return c(
          a,
          Mt
        ), c(a, s.segmentPrefix), c(a, S(b.toString(16))), u(a, jt);
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
        return u(a, Vt);
      case 3:
        return u(a, Ct);
      case 4:
        return u(a, qt);
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
  var ur = g('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), Yt = g('$RS("'), ir = g('","'), p = g('")<\/script>'), m = g('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), _ = g('$RC("'), V = g('","'), ye = g('")<\/script>'), ve = g('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), Se = g('$RX("'), je = g('"'), Ze = g(")<\/script>"), gt = g(","), Je = /[<\u2028\u2029]/g;
  function Be(a) {
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
  var Rt = Object.assign, kr = Symbol.for("react.element"), xr = Symbol.for("react.portal"), Er = Symbol.for("react.fragment"), $r = Symbol.for("react.strict_mode"), Ur = Symbol.for("react.profiler"), Br = Symbol.for("react.provider"), Nr = Symbol.for("react.context"), vn = Symbol.for("react.forward_ref"), Sn = Symbol.for("react.suspense"), Wr = Symbol.for("react.suspense_list"), n = Symbol.for("react.memo"), l = Symbol.for("react.lazy"), f = Symbol.for("react.scope"), v = Symbol.for("react.debug_trace_mode"), N = Symbol.for("react.legacy_hidden"), O = Symbol.for("react.default_value"), j = Symbol.iterator;
  function K(a) {
    if (a == null) return null;
    if (typeof a == "function") return a.displayName || a.name || null;
    if (typeof a == "string") return a;
    switch (a) {
      case Er:
        return "Fragment";
      case xr:
        return "Portal";
      case Ur:
        return "Profiler";
      case $r:
        return "StrictMode";
      case Sn:
        return "Suspense";
      case Wr:
        return "SuspenseList";
    }
    if (typeof a == "object") switch (a.$$typeof) {
      case Nr:
        return (a.displayName || "Context") + ".Consumer";
      case Br:
        return (a._context.displayName || "Context") + ".Provider";
      case vn:
        var s = a.render;
        return a = a.displayName, a || (a = s.displayName || s.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
      case n:
        return s = a.displayName || null, s !== null ? s : K(a.type) || "Memo";
      case l:
        s = a._payload, a = a._init;
        try {
          return K(a(s));
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
  var ke = null;
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
  function Gt(a) {
    a.context._currentValue = a.parentValue, a = a.parent, a !== null && Gt(a);
  }
  function Zt(a) {
    var s = a.parent;
    s !== null && Zt(s), a.context._currentValue = a.value;
  }
  function Pt(a, s) {
    if (a.context._currentValue = a.parentValue, a = a.parent, a === null) throw Error(t(402));
    a.depth === s.depth ? rt(a, s) : Pt(a, s);
  }
  function _r(a, s) {
    var d = s.parent;
    if (d === null) throw Error(t(402));
    a.depth === d.depth ? rt(a, d) : _r(a, d), s.context._currentValue = s.value;
  }
  function dr(a) {
    var s = ke;
    s !== a && (s === null ? Zt(a) : a === null ? Gt(s) : s.depth === a.depth ? rt(s, a) : s.depth > a.depth ? Pt(s, a) : _r(s, a), ke = a);
  }
  var Hr = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(a, s) {
    a = a._reactInternals, a.queue !== null && a.queue.push(s);
  }, enqueueReplaceState: function(a, s) {
    a = a._reactInternals, a.replace = !0, a.queue = [s];
  }, enqueueForceUpdate: function() {
  } };
  function Tr(a, s, d, b) {
    var P = a.state !== void 0 ? a.state : null;
    a.updater = Hr, a.props = d, a.state = P;
    var R = { queue: [], replace: !1 };
    a._reactInternals = R;
    var z = s.contextType;
    if (a.context = typeof z == "object" && z !== null ? z._currentValue : b, z = s.getDerivedStateFromProps, typeof z == "function" && (z = z(d, P), P = z == null ? P : Rt({}, P, z), a.state = P), typeof s.getDerivedStateFromProps != "function" && typeof a.getSnapshotBeforeUpdate != "function" && (typeof a.UNSAFE_componentWillMount == "function" || typeof a.componentWillMount == "function")) if (s = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), s !== a.state && Hr.enqueueReplaceState(a, a.state, null), R.queue !== null && 0 < R.queue.length) if (s = R.queue, z = R.replace, R.queue = null, R.replace = !1, z && s.length === 1) a.state = s[0];
    else {
      for (R = z ? s[0] : a.state, P = !0, z = z ? 1 : 0; z < s.length; z++) {
        var X = s[z];
        X = typeof X == "function" ? X.call(a, R, d, b) : X, X != null && (P ? (P = !1, R = Rt({}, R, X)) : Rt(R, X));
      }
      a.state = R;
    }
    else R.queue = null;
  }
  var wn = { id: 1, overflow: "" };
  function gr(a, s, d) {
    var b = a.id;
    a = a.overflow;
    var P = 32 - kn(b) - 1;
    b &= ~(1 << P), d += 1;
    var R = 32 - kn(s) + P;
    if (30 < R) {
      var z = P - P % 5;
      return R = (b & (1 << z) - 1).toString(32), b >>= z, P -= z, { id: 1 << 32 - kn(s) + P | d << P | b, overflow: R + a };
    }
    return { id: 1 << R | d << P | b, overflow: a };
  }
  var kn = Math.clz32 ? Math.clz32 : Gs, qs = Math.log, Ys = Math.LN2;
  function Gs(a) {
    return a >>>= 0, a === 0 ? 32 : 31 - (qs(a) / Ys | 0) | 0;
  }
  function Zs(a, s) {
    return a === s && (a !== 0 || 1 / a === 1 / s) || a !== a && s !== s;
  }
  var Xs = typeof Object.is == "function" ? Object.is : Zs, fr = null, oa = null, xn = null, Ke = null, Vr = !1, En = !1, qr = 0, yr = null, _n = 0;
  function Cr() {
    if (fr === null) throw Error(t(321));
    return fr;
  }
  function fi() {
    if (0 < _n) throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function sa() {
    return Ke === null ? xn === null ? (Vr = !1, xn = Ke = fi()) : (Vr = !0, Ke = xn) : Ke.next === null ? (Vr = !1, Ke = Ke.next = fi()) : (Vr = !0, Ke = Ke.next), Ke;
  }
  function la() {
    oa = fr = null, En = !1, xn = null, _n = 0, Ke = yr = null;
  }
  function pi(a, s) {
    return typeof s == "function" ? s(a) : s;
  }
  function hi(a, s, d) {
    if (fr = Cr(), Ke = sa(), Vr) {
      var b = Ke.queue;
      if (s = b.dispatch, yr !== null && (d = yr.get(b), d !== void 0)) {
        yr.delete(b), b = Ke.memoizedState;
        do
          b = a(b, d.action), d = d.next;
        while (d !== null);
        return Ke.memoizedState = b, [b, s];
      }
      return [Ke.memoizedState, s];
    }
    return a = a === pi ? typeof s == "function" ? s() : s : d !== void 0 ? d(s) : s, Ke.memoizedState = a, a = Ke.queue = { last: null, dispatch: null }, a = a.dispatch = Js.bind(null, fr, a), [Ke.memoizedState, a];
  }
  function mi(a, s) {
    if (fr = Cr(), Ke = sa(), s = s === void 0 ? null : s, Ke !== null) {
      var d = Ke.memoizedState;
      if (d !== null && s !== null) {
        var b = d[1];
        e: if (b === null) b = !1;
        else {
          for (var P = 0; P < b.length && P < s.length; P++) if (!Xs(s[P], b[P])) {
            b = !1;
            break e;
          }
          b = !0;
        }
        if (b) return d[0];
      }
    }
    return a = a(), Ke.memoizedState = [a, s], a;
  }
  function Js(a, s, d) {
    if (25 <= _n) throw Error(t(301));
    if (a === fr) if (En = !0, a = { action: d, next: null }, yr === null && (yr = /* @__PURE__ */ new Map()), d = yr.get(s), d === void 0) yr.set(s, a);
    else {
      for (s = d; s.next !== null; ) s = s.next;
      s.next = a;
    }
  }
  function Ks() {
    throw Error(t(394));
  }
  function Tn() {
  }
  var gi = { readContext: function(a) {
    return a._currentValue;
  }, useContext: function(a) {
    return Cr(), a._currentValue;
  }, useMemo: mi, useReducer: hi, useRef: function(a) {
    fr = Cr(), Ke = sa();
    var s = Ke.memoizedState;
    return s === null ? (a = { current: a }, Ke.memoizedState = a) : s;
  }, useState: function(a) {
    return hi(pi, a);
  }, useInsertionEffect: Tn, useLayoutEffect: function() {
  }, useCallback: function(a, s) {
    return mi(function() {
      return a;
    }, s);
  }, useImperativeHandle: Tn, useEffect: Tn, useDebugValue: Tn, useDeferredValue: function(a) {
    return Cr(), a;
  }, useTransition: function() {
    return Cr(), [!1, Ks];
  }, useId: function() {
    var a = oa.treeContext, s = a.overflow;
    a = a.id, a = (a & ~(1 << 32 - kn(a) - 1)).toString(32) + s;
    var d = Cn;
    if (d === null) throw Error(t(404));
    return s = qr++, a = ":" + d.idPrefix + "R" + a, 0 < s && (a += "H" + s.toString(32)), a + ":";
  }, useMutableSource: function(a, s) {
    return Cr(), s(a._source);
  }, useSyncExternalStore: function(a, s, d) {
    if (d === void 0) throw Error(t(407));
    return d();
  } }, Cn = null, ca = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function Qs(a) {
    return console.error(a), null;
  }
  function Yr() {
  }
  function el(a, s, d, b, P, R, z, X, he) {
    var _e = [], xe = /* @__PURE__ */ new Set();
    return s = { destination: null, responseState: s, progressiveChunkSize: b === void 0 ? 12800 : b, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: xe, pingedTasks: _e, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: P === void 0 ? Qs : P, onAllReady: R === void 0 ? Yr : R, onShellReady: z === void 0 ? Yr : z, onShellError: X === void 0 ? Yr : X, onFatalError: he === void 0 ? Yr : he }, d = An(s, 0, null, d, !1, !1), d.parentFlushed = !0, a = ua(s, a, null, d, xe, pe, null, wn), _e.push(a), s;
  }
  function ua(a, s, d, b, P, R, z, X) {
    a.allPendingTasks++, d === null ? a.pendingRootTasks++ : d.pendingTasks++;
    var he = { node: s, ping: function() {
      var _e = a.pingedTasks;
      _e.push(he), _e.length === 1 && xi(a);
    }, blockedBoundary: d, blockedSegment: b, abortSet: P, legacyContext: R, context: z, treeContext: X };
    return P.add(he), he;
  }
  function An(a, s, d, b, P, R) {
    return { status: 0, id: -1, index: s, parentFlushed: !1, chunks: [], children: [], formatContext: b, boundary: d, lastPushedText: P, textEmbedded: R };
  }
  function Gr(a, s) {
    if (a = a.onError(s), a != null && typeof a != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof a + '" instead');
    return a;
  }
  function On(a, s) {
    var d = a.onShellError;
    d(s), d = a.onFatalError, d(s), a.destination !== null ? (a.status = 2, I(a.destination, s)) : (a.status = 1, a.fatalError = s);
  }
  function yi(a, s, d, b, P) {
    for (fr = {}, oa = s, qr = 0, a = d(b, P); En; ) En = !1, qr = 0, _n += 1, Ke = null, a = d(b, P);
    return la(), a;
  }
  function bi(a, s, d, b) {
    var P = d.render(), R = b.childContextTypes;
    if (R != null) {
      var z = s.legacyContext;
      if (typeof d.getChildContext != "function") b = z;
      else {
        d = d.getChildContext();
        for (var X in d) if (!(X in R)) throw Error(t(108, K(b) || "Unknown", X));
        b = Rt({}, z, d);
      }
      s.legacyContext = b, Nt(a, s, P), s.legacyContext = z;
    } else Nt(a, s, P);
  }
  function vi(a, s) {
    if (a && a.defaultProps) {
      s = Rt({}, s), a = a.defaultProps;
      for (var d in a) s[d] === void 0 && (s[d] = a[d]);
      return s;
    }
    return s;
  }
  function da(a, s, d, b, P) {
    if (typeof d == "function") if (d.prototype && d.prototype.isReactComponent) {
      P = be(d, s.legacyContext);
      var R = d.contextType;
      R = new d(b, typeof R == "object" && R !== null ? R._currentValue : P), Tr(R, d, b, P), bi(a, s, R, d);
    } else {
      R = be(d, s.legacyContext), P = yi(a, s, d, b, R);
      var z = qr !== 0;
      if (typeof P == "object" && P !== null && typeof P.render == "function" && P.$$typeof === void 0) Tr(P, d, b, R), bi(a, s, P, d);
      else if (z) {
        b = s.treeContext, s.treeContext = gr(b, 1, 0);
        try {
          Nt(a, s, P);
        } finally {
          s.treeContext = b;
        }
      } else Nt(a, s, P);
    }
    else if (typeof d == "string") {
      switch (P = s.blockedSegment, R = ie(P.chunks, d, b, a.responseState, P.formatContext), P.lastPushedText = !1, z = P.formatContext, P.formatContext = oe(z, d, b), fa(a, s, R), P.formatContext = z, d) {
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
          P.chunks.push(Xe, S(d), Ne);
      }
      P.lastPushedText = !1;
    } else {
      switch (d) {
        case N:
        case v:
        case $r:
        case Ur:
        case Er:
          Nt(a, s, b.children);
          return;
        case Wr:
          Nt(a, s, b.children);
          return;
        case f:
          throw Error(t(343));
        case Sn:
          e: {
            d = s.blockedBoundary, P = s.blockedSegment, R = b.fallback, b = b.children, z = /* @__PURE__ */ new Set();
            var X = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: z, errorDigest: null }, he = An(a, P.chunks.length, X, P.formatContext, !1, !1);
            P.children.push(he), P.lastPushedText = !1;
            var _e = An(a, 0, null, P.formatContext, !1, !1);
            _e.parentFlushed = !0, s.blockedBoundary = X, s.blockedSegment = _e;
            try {
              if (fa(
                a,
                s,
                b
              ), _e.lastPushedText && _e.textEmbedded && _e.chunks.push(M), _e.status = 1, Rn(X, _e), X.pendingTasks === 0) break e;
            } catch (xe) {
              _e.status = 4, X.forceClientRender = !0, X.errorDigest = Gr(a, xe);
            } finally {
              s.blockedBoundary = d, s.blockedSegment = P;
            }
            s = ua(a, R, d, he, z, s.legacyContext, s.context, s.treeContext), a.pingedTasks.push(s);
          }
          return;
      }
      if (typeof d == "object" && d !== null) switch (d.$$typeof) {
        case vn:
          if (b = yi(a, s, d.render, b, P), qr !== 0) {
            d = s.treeContext, s.treeContext = gr(d, 1, 0);
            try {
              Nt(a, s, b);
            } finally {
              s.treeContext = d;
            }
          } else Nt(a, s, b);
          return;
        case n:
          d = d.type, b = vi(d, b), da(a, s, d, b, P);
          return;
        case Br:
          if (P = b.children, d = d._context, b = b.value, R = d._currentValue, d._currentValue = b, z = ke, ke = b = { parent: z, depth: z === null ? 0 : z.depth + 1, context: d, parentValue: R, value: b }, s.context = b, Nt(a, s, P), a = ke, a === null) throw Error(t(403));
          b = a.parentValue, a.context._currentValue = b === O ? a.context._defaultValue : b, a = ke = a.parent, s.context = a;
          return;
        case Nr:
          b = b.children, b = b(d._currentValue), Nt(a, s, b);
          return;
        case l:
          P = d._init, d = P(d._payload), b = vi(d, b), da(a, s, d, b, void 0);
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
        case kr:
          da(a, s, d.type, d.props, d.ref);
          return;
        case xr:
          throw Error(t(257));
        case l:
          var b = d._init;
          d = b(d._payload), Nt(a, s, d);
          return;
      }
      if (Ge(d)) {
        Si(a, s, d);
        return;
      }
      if (d === null || typeof d != "object" ? b = null : (b = j && d[j] || d["@@iterator"], b = typeof b == "function" ? b : null), b && (b = b.call(d))) {
        if (d = b.next(), !d.done) {
          var P = [];
          do
            P.push(d.value), d = b.next();
          while (!d.done);
          Si(a, s, P);
        }
        return;
      }
      throw a = Object.prototype.toString.call(d), Error(t(31, a === "[object Object]" ? "object with keys {" + Object.keys(d).join(", ") + "}" : a));
    }
    typeof d == "string" ? (b = s.blockedSegment, b.lastPushedText = C(s.blockedSegment.chunks, d, a.responseState, b.lastPushedText)) : typeof d == "number" && (b = s.blockedSegment, b.lastPushedText = C(s.blockedSegment.chunks, "" + d, a.responseState, b.lastPushedText));
  }
  function Si(a, s, d) {
    for (var b = d.length, P = 0; P < b; P++) {
      var R = s.treeContext;
      s.treeContext = gr(R, b, P);
      try {
        fa(a, s, d[P]);
      } finally {
        s.treeContext = R;
      }
    }
  }
  function fa(a, s, d) {
    var b = s.blockedSegment.formatContext, P = s.legacyContext, R = s.context;
    try {
      return Nt(a, s, d);
    } catch (he) {
      if (la(), typeof he == "object" && he !== null && typeof he.then == "function") {
        d = he;
        var z = s.blockedSegment, X = An(a, z.chunks.length, null, z.formatContext, z.lastPushedText, !0);
        z.children.push(X), z.lastPushedText = !1, a = ua(a, s.node, s.blockedBoundary, X, s.abortSet, s.legacyContext, s.context, s.treeContext).ping, d.then(a, a), s.blockedSegment.formatContext = b, s.legacyContext = P, s.context = R, dr(R);
      } else throw s.blockedSegment.formatContext = b, s.legacyContext = P, s.context = R, dr(R), he;
    }
  }
  function tl(a) {
    var s = a.blockedBoundary;
    a = a.blockedSegment, a.status = 3, ki(this, s, a);
  }
  function wi(a, s, d) {
    var b = a.blockedBoundary;
    a.blockedSegment.status = 3, b === null ? (s.allPendingTasks--, s.status !== 2 && (s.status = 2, s.destination !== null && s.destination.close())) : (b.pendingTasks--, b.forceClientRender || (b.forceClientRender = !0, a = d === void 0 ? Error(t(432)) : d, b.errorDigest = s.onError(a), b.parentFlushed && s.clientRenderedBoundaries.push(b)), b.fallbackAbortableTasks.forEach(function(P) {
      return wi(P, s, d);
    }), b.fallbackAbortableTasks.clear(), s.allPendingTasks--, s.allPendingTasks === 0 && (b = s.onAllReady, b()));
  }
  function Rn(a, s) {
    if (s.chunks.length === 0 && s.children.length === 1 && s.children[0].boundary === null) {
      var d = s.children[0];
      d.id = s.id, d.parentFlushed = !0, d.status === 1 && Rn(a, d);
    } else a.completedSegments.push(s);
  }
  function ki(a, s, d) {
    if (s === null) {
      if (d.parentFlushed) {
        if (a.completedRootSegment !== null) throw Error(t(389));
        a.completedRootSegment = d;
      }
      a.pendingRootTasks--, a.pendingRootTasks === 0 && (a.onShellError = Yr, s = a.onShellReady, s());
    } else s.pendingTasks--, s.forceClientRender || (s.pendingTasks === 0 ? (d.parentFlushed && d.status === 1 && Rn(s, d), s.parentFlushed && a.completedBoundaries.push(s), s.fallbackAbortableTasks.forEach(tl, a), s.fallbackAbortableTasks.clear()) : d.parentFlushed && d.status === 1 && (Rn(s, d), s.completedSegments.length === 1 && s.parentFlushed && a.partialBoundaries.push(s)));
    a.allPendingTasks--, a.allPendingTasks === 0 && (a = a.onAllReady, a());
  }
  function xi(a) {
    if (a.status !== 2) {
      var s = ke, d = ca.current;
      ca.current = gi;
      var b = Cn;
      Cn = a.responseState;
      try {
        var P = a.pingedTasks, R;
        for (R = 0; R < P.length; R++) {
          var z = P[R], X = a, he = z.blockedSegment;
          if (he.status === 0) {
            dr(z.context);
            try {
              Nt(X, z, z.node), he.lastPushedText && he.textEmbedded && he.chunks.push(M), z.abortSet.delete(z), he.status = 1, ki(X, z.blockedBoundary, he);
            } catch (Jt) {
              if (la(), typeof Jt == "object" && Jt !== null && typeof Jt.then == "function") {
                var _e = z.ping;
                Jt.then(_e, _e);
              } else {
                z.abortSet.delete(z), he.status = 4;
                var xe = z.blockedBoundary, et = Jt, It = Gr(X, et);
                if (xe === null ? On(X, et) : (xe.pendingTasks--, xe.forceClientRender || (xe.forceClientRender = !0, xe.errorDigest = It, xe.parentFlushed && X.clientRenderedBoundaries.push(xe))), X.allPendingTasks--, X.allPendingTasks === 0) {
                  var Xt = X.onAllReady;
                  Xt();
                }
              }
            } finally {
            }
          }
        }
        P.splice(0, R), a.destination !== null && pa(a, a.destination);
      } catch (Jt) {
        Gr(a, Jt), On(a, Jt);
      } finally {
        Cn = b, ca.current = d, d === gi && dr(s);
      }
    }
  }
  function Pn(a, s, d) {
    switch (d.parentFlushed = !0, d.status) {
      case 0:
        var b = d.id = a.nextSegmentId++;
        return d.lastPushedText = !1, d.textEmbedded = !1, a = a.responseState, c(s, De), c(s, a.placeholderPrefix), a = S(b.toString(16)), c(s, a), u(s, er);
      case 1:
        d.status = 2;
        var P = !0;
        b = d.chunks;
        var R = 0;
        d = d.children;
        for (var z = 0; z < d.length; z++) {
          for (P = d[z]; R < P.index; R++) c(s, b[R]);
          P = Nn(a, s, P);
        }
        for (; R < b.length - 1; R++) c(s, b[R]);
        return R < b.length && (P = u(s, b[R])), P;
      default:
        throw Error(t(390));
    }
  }
  function Nn(a, s, d) {
    var b = d.boundary;
    if (b === null) return Pn(a, s, d);
    if (b.parentFlushed = !0, b.forceClientRender) b = b.errorDigest, u(s, pt), c(s, nt), b && (c(s, Wt), c(s, S(Ee(b))), c(s, ut)), u(s, Ht), Pn(a, s, d);
    else if (0 < b.pendingTasks) {
      b.rootSegmentID = a.nextSegmentId++, 0 < b.completedSegments.length && a.partialBoundaries.push(b);
      var P = a.responseState, R = P.nextSuspenseID++;
      P = g(P.boundaryPrefix + R.toString(16)), b = b.id = P, ht(s, a.responseState, b), Pn(a, s, d);
    } else if (b.byteSize > a.progressiveChunkSize) b.rootSegmentID = a.nextSegmentId++, a.completedBoundaries.push(b), ht(s, a.responseState, b.id), Pn(a, s, d);
    else {
      if (u(s, tr), d = b.completedSegments, d.length !== 1) throw Error(t(391));
      Nn(a, s, d[0]);
    }
    return u(s, Tt);
  }
  function Ei(a, s, d) {
    return cr(s, a.responseState, d.formatContext, d.id), Nn(a, s, d), Ot(s, d.formatContext);
  }
  function _i(a, s, d) {
    for (var b = d.completedSegments, P = 0; P < b.length; P++) Ti(a, s, d, b[P]);
    if (b.length = 0, a = a.responseState, b = d.id, d = d.rootSegmentID, c(s, a.startInlineScript), a.sentCompleteBoundaryFunction ? c(s, _) : (a.sentCompleteBoundaryFunction = !0, c(s, m)), b === null) throw Error(t(395));
    return d = S(d.toString(16)), c(s, b), c(s, V), c(s, a.segmentPrefix), c(s, d), u(s, ye);
  }
  function Ti(a, s, d, b) {
    if (b.status === 2) return !0;
    var P = b.id;
    if (P === -1) {
      if ((b.id = d.rootSegmentID) === -1) throw Error(t(392));
      return Ei(a, s, b);
    }
    return Ei(a, s, b), a = a.responseState, c(s, a.startInlineScript), a.sentCompleteSegmentFunction ? c(s, Yt) : (a.sentCompleteSegmentFunction = !0, c(s, ur)), c(s, a.segmentPrefix), P = S(P.toString(16)), c(s, P), c(s, ir), c(s, a.placeholderPrefix), c(s, P), u(s, p);
  }
  function pa(a, s) {
    r = new Uint8Array(512), i = 0;
    try {
      var d = a.completedRootSegment;
      if (d !== null && a.pendingRootTasks === 0) {
        Nn(a, s, d), a.completedRootSegment = null;
        var b = a.responseState.bootstrapChunks;
        for (d = 0; d < b.length - 1; d++) c(s, b[d]);
        d < b.length && u(s, b[d]);
      }
      var P = a.clientRenderedBoundaries, R;
      for (R = 0; R < P.length; R++) {
        var z = P[R];
        b = s;
        var X = a.responseState, he = z.id, _e = z.errorDigest, xe = z.errorMessage, et = z.errorComponentStack;
        if (c(b, X.startInlineScript), X.sentClientRenderFunction ? c(b, Se) : (X.sentClientRenderFunction = !0, c(
          b,
          ve
        )), he === null) throw Error(t(395));
        c(b, he), c(b, je), (_e || xe || et) && (c(b, gt), c(b, S(Be(_e || "")))), (xe || et) && (c(b, gt), c(b, S(Be(xe || "")))), et && (c(b, gt), c(b, S(Be(et)))), u(b, Ze);
      }
      P.splice(0, R);
      var It = a.completedBoundaries;
      for (R = 0; R < It.length; R++) _i(a, s, It[R]);
      It.splice(0, R), y(s), r = new Uint8Array(512), i = 0;
      var Xt = a.partialBoundaries;
      for (R = 0; R < Xt.length; R++) {
        var Jt = Xt[R];
        e: {
          P = a, z = s;
          var In = Jt.completedSegments;
          for (X = 0; X < In.length; X++) if (!Ti(
            P,
            z,
            Jt,
            In[X]
          )) {
            X++, In.splice(0, X);
            var Ai = !1;
            break e;
          }
          In.splice(0, X), Ai = !0;
        }
        if (!Ai) {
          a.destination = null, R++, Xt.splice(0, R);
          return;
        }
      }
      Xt.splice(0, R);
      var ha = a.completedBoundaries;
      for (R = 0; R < ha.length; R++) _i(a, s, ha[R]);
      ha.splice(0, R);
    } finally {
      y(s), a.allPendingTasks === 0 && a.pingedTasks.length === 0 && a.clientRenderedBoundaries.length === 0 && a.completedBoundaries.length === 0 && s.close();
    }
  }
  function Ci(a, s) {
    try {
      var d = a.abortableTasks;
      d.forEach(function(b) {
        return wi(b, a, s);
      }), d.clear(), a.destination !== null && pa(a, a.destination);
    } catch (b) {
      Gr(a, b), On(a, b);
    }
  }
  return zn.renderToReadableStream = function(a, s) {
    return new Promise(function(d, b) {
      var P, R, z = new Promise(function(xe, et) {
        R = xe, P = et;
      }), X = el(a, Oe(s ? s.identifierPrefix : void 0, s ? s.nonce : void 0, s ? s.bootstrapScriptContent : void 0, s ? s.bootstrapScripts : void 0, s ? s.bootstrapModules : void 0), tt(s ? s.namespaceURI : void 0), s ? s.progressiveChunkSize : void 0, s ? s.onError : void 0, R, function() {
        var xe = new ReadableStream({ type: "bytes", pull: function(et) {
          if (X.status === 1) X.status = 2, I(et, X.fatalError);
          else if (X.status !== 2 && X.destination === null) {
            X.destination = et;
            try {
              pa(X, et);
            } catch (It) {
              Gr(X, It), On(X, It);
            }
          }
        }, cancel: function() {
          Ci(X);
        } }, { highWaterMark: 0 });
        xe.allReady = z, d(xe);
      }, function(xe) {
        z.catch(function() {
        }), b(xe);
      }, P);
      if (s && s.signal) {
        var he = s.signal, _e = function() {
          Ci(X, he.reason), he.removeEventListener("abort", _e);
        };
        he.addEventListener("abort", _e);
      }
      xi(X);
    });
  }, zn.version = "18.3.1", zn;
}
var zr, rs;
zr = uc(), rs = dc();
zr.version;
zr.renderToString;
zr.renderToStaticMarkup;
zr.renderToNodeStream;
zr.renderToStaticNodeStream;
rs.renderToReadableStream;
const fc = "staticMarkup";
function ns() {
  const e = ol().indexOf(fc) > -1 ? !0 : void 0;
  return {
    isBootstrap: e,
    isReact: e ? void 0 : !0
  };
}
const Pr = ({ gaData: e, prefix: t = "", children: r }) => {
  const { isReact: i } = ns(), { onClick: c, ...u } = r.props;
  if (i)
    return ft.cloneElement(r, {
      ...u,
      onClick: (S) => (e && e.event && e.action && sc(e), c ? c(S) : !0)
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
  return ft.cloneElement(r, {
    ...u,
    onClick: c,
    ...w
  });
}, pc = Ja(
  ({
    id: e,
    parentId: t,
    /** @type {AccordionCard} */
    item: r,
    openCard: i,
    onClick: c,
    gaData: u
  }, y) => {
    var w, S, g, I, T, $;
    const Y = e === i, A = Y ? "open" : "close";
    return /* @__PURE__ */ U.jsxs(
      "div",
      {
        ref: y,
        className: Kt("accordion-item", "mt-3", {
          [`accordion-item-${r.color}`]: r.color,
          "accordion-header-icon": (w = r.content) == null ? void 0 : w.icon
        }),
        children: [
          /* @__PURE__ */ U.jsx("div", { className: "accordion-header", children: /* @__PURE__ */ U.jsx("h4", { children: /* @__PURE__ */ U.jsx(
            Pr,
            {
              gaData: {
                ...u,
                action: A,
                text: r.content.header
              },
              children: /* @__PURE__ */ U.jsxs(
                "button",
                {
                  "data-testid": "accordion-opener",
                  className: Kt({ collapsed: !Y }),
                  "data-bs-toggle": "collapse",
                  href: `#card-body-${e}`,
                  type: "button",
                  "aria-expanded": Y,
                  "aria-controls": `card-body-${e}`,
                  onClick: (k) => c(k, e),
                  children: [
                    (S = r.content) != null && S.icon ? /* @__PURE__ */ U.jsxs("span", { className: "accordion-icon", children: [
                      /* @__PURE__ */ U.jsx(
                        "i",
                        {
                          className: `${(g = r.content.icon) == null ? void 0 : g[0]} fa-${(I = r.content.icon) == null ? void 0 : I[1]} me-2`
                        }
                      ),
                      r.content.header
                    ] }) : (T = r.content) == null ? void 0 : T.header,
                    /* @__PURE__ */ U.jsx("i", { className: "fas fa-chevron-up" })
                  ]
                }
              )
            }
          ) }) }),
          (($ = r.content) == null ? void 0 : $.body) && /* @__PURE__ */ U.jsx(
            "div",
            {
              "data-bs-parent": `#${t}`,
              id: `card-body-${e}`,
              className: Kt("collapse", { show: Y }),
              children: /* @__PURE__ */ U.jsx(
                "div",
                {
                  className: "accordion-body",
                  dangerouslySetInnerHTML: Or(
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
pc.propTypes = {
  id: o.number,
  // @ts-ignore a technical type mismatch between PropTypes definition and your TypeScript
  item: ts,
  parentId: o.string,
  openCard: o.number,
  onClick: o.func,
  gaData: o.object
};
o.arrayOf(ts).isRequired, o.number;
const eo = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, as = ({
  label: e = "",
  cardTitle: t = "",
  gaData: r,
  ariaLabel: i,
  block: c,
  color: u = "gray",
  disabled: y,
  element: w = "button",
  href: S,
  icon: g,
  innerRef: I,
  onClick: T,
  size: $ = "default",
  variant: Y,
  classes: A,
  target: k = "_self",
  ...L
}) => {
  if (Y) {
    const Z = {
      borderless: "borderless",
      outline: "outline",
      filled: "filled"
    }, W = Kt("btn", Z[Y], {
      [`btn-${Z[Y]}-${u}`]: !0,
      "btn-medium": $ === "medium",
      "btn-small": $ === "small",
      "btn-large": $ === "large" || $ === "default",
      disabled: y
    });
    let x = w;
    return S && w === "button" && (x = "a"), /* @__PURE__ */ U.jsx(
      Pr,
      {
        gaData: {
          ...eo,
          section: t,
          ...r,
          text: e
        },
        children: /* @__PURE__ */ U.jsxs(
          x,
          {
            type: x === "button" && T ? "button" : void 0,
            ...L,
            className: Kt(A) || W,
            href: S,
            ref: I,
            onClick: T,
            "aria-label": i,
            target: x === "a" ? k : null,
            disabled: y,
            children: [
              g && /* @__PURE__ */ U.jsx("i", { className: `${g == null ? void 0 : g[0]} fa-${g == null ? void 0 : g[1]} me-1` }),
              e
            ]
          }
        )
      }
    );
  }
  const G = Kt("btn", {
    [`btn-${u}`]: !0,
    "btn-md": $ === "small",
    "btn-sm": $ === "xsmall",
    "btn-block": c,
    disabled: y
  });
  let H = w;
  return S && w === "button" && (H = "a"), /* @__PURE__ */ U.jsx(
    Pr,
    {
      gaData: {
        ...eo,
        section: t,
        // @deprecated - remove at some point
        ...r,
        text: e
      },
      children: /* @__PURE__ */ U.jsxs(
        H,
        {
          type: H === "button" && T ? "button" : void 0,
          ...L,
          className: Kt(A) || G,
          href: S,
          ref: I,
          onClick: T,
          "aria-label": i,
          target: H === "a" ? k : null,
          children: [
            g && /* @__PURE__ */ U.jsx("i", { className: `${g == null ? void 0 : g[0]} fa-${g == null ? void 0 : g[1]} me-1` }),
            e
          ]
        }
      )
    }
  );
};
as.propTypes = {
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
  gaData: Qa,
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
var is = { exports: {} }, Ve = {}, to;
function hc() {
  if (to) return Ve;
  to = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), u = Symbol.for("react.consumer"), y = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), I = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), Y = Symbol.for("react.client.reference");
  function A(k) {
    if (typeof k == "object" && k !== null) {
      var L = k.$$typeof;
      switch (L) {
        case e:
          switch (k = k.type, k) {
            case r:
            case c:
            case i:
            case S:
            case g:
              return k;
            default:
              switch (k = k && k.$$typeof, k) {
                case y:
                case w:
                case T:
                case I:
                  return k;
                case u:
                  return k;
                default:
                  return L;
              }
          }
        case t:
          return L;
      }
    }
  }
  return Ve.ContextConsumer = u, Ve.ContextProvider = y, Ve.Element = e, Ve.ForwardRef = w, Ve.Fragment = r, Ve.Lazy = T, Ve.Memo = I, Ve.Portal = t, Ve.Profiler = c, Ve.StrictMode = i, Ve.Suspense = S, Ve.SuspenseList = g, Ve.isContextConsumer = function(k) {
    return A(k) === u;
  }, Ve.isContextProvider = function(k) {
    return A(k) === y;
  }, Ve.isElement = function(k) {
    return typeof k == "object" && k !== null && k.$$typeof === e;
  }, Ve.isForwardRef = function(k) {
    return A(k) === w;
  }, Ve.isFragment = function(k) {
    return A(k) === r;
  }, Ve.isLazy = function(k) {
    return A(k) === T;
  }, Ve.isMemo = function(k) {
    return A(k) === I;
  }, Ve.isPortal = function(k) {
    return A(k) === t;
  }, Ve.isProfiler = function(k) {
    return A(k) === c;
  }, Ve.isStrictMode = function(k) {
    return A(k) === i;
  }, Ve.isSuspense = function(k) {
    return A(k) === S;
  }, Ve.isSuspenseList = function(k) {
    return A(k) === g;
  }, Ve.isValidElementType = function(k) {
    return typeof k == "string" || typeof k == "function" || k === r || k === c || k === i || k === S || k === g || k === $ || typeof k == "object" && k !== null && (k.$$typeof === T || k.$$typeof === I || k.$$typeof === y || k.$$typeof === u || k.$$typeof === w || k.$$typeof === Y || k.getModuleId !== void 0);
  }, Ve.typeOf = A, Ve;
}
is.exports = hc();
var os = is.exports;
function mc(e) {
  function t(M, C, F, D, h) {
    for (var ee = 0, E = 0, ae = 0, Q = 0, te, q, ne = 0, de = 0, J, ge = J = te = 0, re = 0, se = 0, Ue = 0, le = 0, it = F.length, He = it - 1, we, B = "", ie = "", Xe = "", Ne = "", De; re < it; ) {
      if (q = F.charCodeAt(re), re === He && E + Q + ae + ee !== 0 && (E !== 0 && (q = E === 47 ? 10 : 47), Q = ae = ee = 0, it++, He++), E + Q + ae + ee === 0) {
        if (re === He && (0 < se && (B = B.replace($, "")), 0 < B.trim().length)) {
          switch (q) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              B += F.charAt(re);
          }
          q = 59;
        }
        switch (q) {
          case 123:
            for (B = B.trim(), te = B.charCodeAt(0), J = 1, le = ++re; re < it; ) {
              switch (q = F.charCodeAt(re)) {
                case 123:
                  J++;
                  break;
                case 125:
                  J--;
                  break;
                case 47:
                  switch (q = F.charCodeAt(re + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (ge = re + 1; ge < He; ++ge)
                          switch (F.charCodeAt(ge)) {
                            case 47:
                              if (q === 42 && F.charCodeAt(ge - 1) === 42 && re + 2 !== ge) {
                                re = ge + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (q === 47) {
                                re = ge + 1;
                                break e;
                              }
                          }
                        re = ge;
                      }
                  }
                  break;
                case 91:
                  q++;
                case 40:
                  q++;
                case 34:
                case 39:
                  for (; re++ < He && F.charCodeAt(re) !== q; )
                    ;
              }
              if (J === 0) break;
              re++;
            }
            switch (J = F.substring(le, re), te === 0 && (te = (B = B.replace(T, "").trim()).charCodeAt(0)), te) {
              case 64:
                switch (0 < se && (B = B.replace($, "")), q = B.charCodeAt(1), q) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    se = C;
                    break;
                  default:
                    se = st;
                }
                if (J = t(C, se, J, q, h + 1), le = J.length, 0 < Oe && (se = r(st, B, Ue), De = w(3, J, se, C, Re, me, le, q, h, D), B = se.join(""), De !== void 0 && (le = (J = De.trim()).length) === 0 && (q = 0, J = "")), 0 < le) switch (q) {
                  case 115:
                    B = B.replace(ce, y);
                  case 100:
                  case 109:
                  case 45:
                    J = B + "{" + J + "}";
                    break;
                  case 107:
                    B = B.replace(H, "$1 $2"), J = B + "{" + J + "}", J = Te === 1 || Te === 2 && u("@" + J, 3) ? "@-webkit-" + J + "@" + J : "@" + J;
                    break;
                  default:
                    J = B + J, D === 112 && (J = (ie += J, ""));
                }
                else J = "";
                break;
              default:
                J = t(C, r(C, B, Ue), J, D, h + 1);
            }
            Xe += J, J = Ue = se = ge = te = 0, B = "", q = F.charCodeAt(++re);
            break;
          case 125:
          case 59:
            if (B = (0 < se ? B.replace($, "") : B).trim(), 1 < (le = B.length)) switch (ge === 0 && (te = B.charCodeAt(0), te === 45 || 96 < te && 123 > te) && (le = (B = B.replace(" ", ":")).length), 0 < Oe && (De = w(1, B, C, M, Re, me, ie.length, D, h, D)) !== void 0 && (le = (B = De.trim()).length) === 0 && (B = "\0\0"), te = B.charCodeAt(0), q = B.charCodeAt(1), te) {
              case 0:
                break;
              case 64:
                if (q === 105 || q === 99) {
                  Ne += B + F.charAt(re);
                  break;
                }
              default:
                B.charCodeAt(le - 1) !== 58 && (ie += c(B, te, q, B.charCodeAt(2)));
            }
            Ue = se = ge = te = 0, B = "", q = F.charCodeAt(++re);
        }
      }
      switch (q) {
        case 13:
        case 10:
          E === 47 ? E = 0 : 1 + te === 0 && D !== 107 && 0 < B.length && (se = 1, B += "\0"), 0 < Oe * tt && w(0, B, C, M, Re, me, ie.length, D, h, D), me = 1, Re++;
          break;
        case 59:
        case 125:
          if (E + Q + ae + ee === 0) {
            me++;
            break;
          }
        default:
          switch (me++, we = F.charAt(re), q) {
            case 9:
            case 32:
              if (Q + ee + E === 0) switch (ne) {
                case 44:
                case 58:
                case 9:
                case 32:
                  we = "";
                  break;
                default:
                  q !== 32 && (we = " ");
              }
              break;
            case 0:
              we = "\\0";
              break;
            case 12:
              we = "\\f";
              break;
            case 11:
              we = "\\v";
              break;
            case 38:
              Q + E + ee === 0 && (se = Ue = 1, we = "\f" + we);
              break;
            case 108:
              if (Q + E + ee + Pe === 0 && 0 < ge) switch (re - ge) {
                case 2:
                  ne === 112 && F.charCodeAt(re - 3) === 58 && (Pe = ne);
                case 8:
                  de === 111 && (Pe = de);
              }
              break;
            case 58:
              Q + E + ee === 0 && (ge = re);
              break;
            case 44:
              E + ae + Q + ee === 0 && (se = 1, we += "\r");
              break;
            case 34:
            case 39:
              E === 0 && (Q = Q === q ? 0 : Q === 0 ? q : Q);
              break;
            case 91:
              Q + E + ae === 0 && ee++;
              break;
            case 93:
              Q + E + ae === 0 && ee--;
              break;
            case 41:
              Q + E + ee === 0 && ae--;
              break;
            case 40:
              if (Q + E + ee === 0) {
                if (te === 0) switch (2 * ne + 3 * de) {
                  case 533:
                    break;
                  default:
                    te = 1;
                }
                ae++;
              }
              break;
            case 64:
              E + ae + Q + ee + ge + J === 0 && (J = 1);
              break;
            case 42:
            case 47:
              if (!(0 < Q + ee + ae)) switch (E) {
                case 0:
                  switch (2 * q + 3 * F.charCodeAt(re + 1)) {
                    case 235:
                      E = 47;
                      break;
                    case 220:
                      le = re, E = 42;
                  }
                  break;
                case 42:
                  q === 47 && ne === 42 && le + 2 !== re && (F.charCodeAt(le + 2) === 33 && (ie += F.substring(le, re + 1)), we = "", E = 0);
              }
          }
          E === 0 && (B += we);
      }
      de = ne, ne = q, re++;
    }
    if (le = ie.length, 0 < le) {
      if (se = C, 0 < Oe && (De = w(2, ie, se, M, Re, me, le, D, h, D), De !== void 0 && (ie = De).length === 0)) return Ne + ie + Xe;
      if (ie = se.join(",") + "{" + ie + "}", Te * Pe !== 0) {
        switch (Te !== 2 || u(ie, 2) || (Pe = 0), Pe) {
          case 111:
            ie = ie.replace(W, ":-moz-$1") + ie;
            break;
          case 112:
            ie = ie.replace(Z, "::-webkit-input-$1") + ie.replace(Z, "::-moz-$1") + ie.replace(Z, ":-ms-input-$1") + ie;
        }
        Pe = 0;
      }
    }
    return Ne + ie + Xe;
  }
  function r(M, C, F) {
    var D = C.trim().split(L);
    C = D;
    var h = D.length, ee = M.length;
    switch (ee) {
      case 0:
      case 1:
        var E = 0;
        for (M = ee === 0 ? "" : M[0] + " "; E < h; ++E)
          C[E] = i(M, C[E], F).trim();
        break;
      default:
        var ae = E = 0;
        for (C = []; E < h; ++E)
          for (var Q = 0; Q < ee; ++Q)
            C[ae++] = i(M[Q] + " ", D[E], F).trim();
    }
    return C;
  }
  function i(M, C, F) {
    var D = C.charCodeAt(0);
    switch (33 > D && (D = (C = C.trim()).charCodeAt(0)), D) {
      case 38:
        return C.replace(G, "$1" + M.trim());
      case 58:
        return M.trim() + C.replace(G, "$1" + M.trim());
      default:
        if (0 < 1 * F && 0 < C.indexOf("\f")) return C.replace(G, (M.charCodeAt(0) === 58 ? "" : "$1") + M.trim());
    }
    return M + C;
  }
  function c(M, C, F, D) {
    var h = M + ";", ee = 2 * C + 3 * F + 4 * D;
    if (ee === 944) {
      M = h.indexOf(":", 9) + 1;
      var E = h.substring(M, h.length - 1).trim();
      return E = h.substring(0, M).trim() + E + ";", Te === 1 || Te === 2 && u(E, 1) ? "-webkit-" + E + E : E;
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
        return E = h.substring(h.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + E + "-webkit-" + h + "-ms-flex-pack" + E + h;
      case 1005:
        return A.test(h) ? h.replace(Y, ":-webkit-") + h.replace(Y, ":-moz-") + h : h;
      case 1e3:
        switch (E = h.substring(13).trim(), C = E.indexOf("-") + 1, E.charCodeAt(0) + E.charCodeAt(C)) {
          case 226:
            E = h.replace(x, "tb");
            break;
          case 232:
            E = h.replace(x, "tb-rl");
            break;
          case 220:
            E = h.replace(x, "lr");
            break;
          default:
            return h;
        }
        return "-webkit-" + h + "-ms-" + E + h;
      case 1017:
        if (h.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (C = (h = M).length - 10, E = (h.charCodeAt(C) === 33 ? h.substring(0, C) : h).substring(M.indexOf(":", 7) + 1).trim(), ee = E.charCodeAt(0) + (E.charCodeAt(7) | 0)) {
          case 203:
            if (111 > E.charCodeAt(8)) break;
          case 115:
            h = h.replace(E, "-webkit-" + E) + ";" + h;
            break;
          case 207:
          case 102:
            h = h.replace(E, "-webkit-" + (102 < ee ? "inline-" : "") + "box") + ";" + h.replace(E, "-webkit-" + E) + ";" + h.replace(E, "-ms-" + E + "box") + ";" + h;
        }
        return h + ";";
      case 938:
        if (h.charCodeAt(5) === 45) switch (h.charCodeAt(6)) {
          case 105:
            return E = h.replace("-items", ""), "-webkit-" + h + "-webkit-box-" + E + "-ms-flex-" + E + h;
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
        if (Ge.test(M) === !0) return (E = M.substring(M.indexOf(":") + 1)).charCodeAt(0) === 115 ? c(M.replace("stretch", "fill-available"), C, F, D).replace(":fill-available", ":stretch") : h.replace(E, "-webkit-" + E) + h.replace(E, "-moz-" + E.replace("fill-", "")) + h;
        break;
      case 962:
        if (h = "-webkit-" + h + (h.charCodeAt(5) === 102 ? "-ms-" + h : "") + h, F + D === 211 && h.charCodeAt(13) === 105 && 0 < h.indexOf("transform", 10)) return h.substring(0, h.indexOf(";", 27) + 1).replace(k, "$1-webkit-$2") + h;
    }
    return h;
  }
  function u(M, C) {
    var F = M.indexOf(C === 1 ? ":" : "{"), D = M.substring(0, C !== 3 ? F : 10);
    return F = M.substring(F + 1, M.length - 1), We(C !== 2 ? D : D.replace(Fe, "$1"), F, C);
  }
  function y(M, C) {
    var F = c(C, C.charCodeAt(0), C.charCodeAt(1), C.charCodeAt(2));
    return F !== C + ";" ? F.replace(Ee, " or ($1)").substring(4) : "(" + C + ")";
  }
  function w(M, C, F, D, h, ee, E, ae, Q, te) {
    for (var q = 0, ne = C, de; q < Oe; ++q)
      switch (de = Me[q].call(I, M, ne, F, D, h, ee, E, ae, Q, te)) {
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
  function S(M) {
    switch (M) {
      case void 0:
      case null:
        Oe = Me.length = 0;
        break;
      default:
        if (typeof M == "function") Me[Oe++] = M;
        else if (typeof M == "object") for (var C = 0, F = M.length; C < F; ++C)
          S(M[C]);
        else tt = !!M | 0;
    }
    return S;
  }
  function g(M) {
    return M = M.prefix, M !== void 0 && (We = null, M ? typeof M != "function" ? Te = 1 : (Te = 2, We = M) : Te = 0), g;
  }
  function I(M, C) {
    var F = M;
    if (33 > F.charCodeAt(0) && (F = F.trim()), oe = F, F = [oe], 0 < Oe) {
      var D = w(-1, C, F, F, Re, me, 0, 0, 0, 0);
      D !== void 0 && typeof D == "string" && (C = D);
    }
    var h = t(st, F, C, 0, 0);
    return 0 < Oe && (D = w(-2, h, F, F, Re, me, h.length, 0, 0, 0), D !== void 0 && (h = D)), oe = "", Pe = 0, me = Re = 1, h;
  }
  var T = /^\0+/g, $ = /[\0\r\f]/g, Y = /: */g, A = /zoo|gra/, k = /([,: ])(transform)/g, L = /,\r+?/g, G = /([\t\r\n ])*\f?&/g, H = /@(k\w+)\s*(\S*)\s*/, Z = /::(place)/g, W = /:(read-only)/g, x = /[svh]\w+-[tblr]{2}/, ce = /\(\s*(.*)\s*\)/g, Ee = /([\s\S]*?);/g, Ie = /-self|flex-/g, Fe = /[^]*?(:[rp][el]a[\w-]+)[^]*/, Ge = /stretch|:\s*\w+\-(?:conte|avail)/, ue = /([^-])(image-set\()/, me = 1, Re = 1, Pe = 0, Te = 1, st = [], Me = [], Oe = 0, We = null, tt = 0, oe = "";
  return I.use = S, I.set = g, e !== void 0 && g(e), I;
}
var gc = {
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
function yc(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var bc = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, ro = /* @__PURE__ */ yc(
  function(e) {
    return bc.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), ss = { exports: {} }, ze = {}, no;
function vc() {
  if (no) return ze;
  no = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, i = e ? Symbol.for("react.fragment") : 60107, c = e ? Symbol.for("react.strict_mode") : 60108, u = e ? Symbol.for("react.profiler") : 60114, y = e ? Symbol.for("react.provider") : 60109, w = e ? Symbol.for("react.context") : 60110, S = e ? Symbol.for("react.async_mode") : 60111, g = e ? Symbol.for("react.concurrent_mode") : 60111, I = e ? Symbol.for("react.forward_ref") : 60112, T = e ? Symbol.for("react.suspense") : 60113, $ = e ? Symbol.for("react.suspense_list") : 60120, Y = e ? Symbol.for("react.memo") : 60115, A = e ? Symbol.for("react.lazy") : 60116, k = e ? Symbol.for("react.block") : 60121, L = e ? Symbol.for("react.fundamental") : 60117, G = e ? Symbol.for("react.responder") : 60118, H = e ? Symbol.for("react.scope") : 60119;
  function Z(x) {
    if (typeof x == "object" && x !== null) {
      var ce = x.$$typeof;
      switch (ce) {
        case t:
          switch (x = x.type, x) {
            case S:
            case g:
            case i:
            case u:
            case c:
            case T:
              return x;
            default:
              switch (x = x && x.$$typeof, x) {
                case w:
                case I:
                case A:
                case Y:
                case y:
                  return x;
                default:
                  return ce;
              }
          }
        case r:
          return ce;
      }
    }
  }
  function W(x) {
    return Z(x) === g;
  }
  return ze.AsyncMode = S, ze.ConcurrentMode = g, ze.ContextConsumer = w, ze.ContextProvider = y, ze.Element = t, ze.ForwardRef = I, ze.Fragment = i, ze.Lazy = A, ze.Memo = Y, ze.Portal = r, ze.Profiler = u, ze.StrictMode = c, ze.Suspense = T, ze.isAsyncMode = function(x) {
    return W(x) || Z(x) === S;
  }, ze.isConcurrentMode = W, ze.isContextConsumer = function(x) {
    return Z(x) === w;
  }, ze.isContextProvider = function(x) {
    return Z(x) === y;
  }, ze.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === t;
  }, ze.isForwardRef = function(x) {
    return Z(x) === I;
  }, ze.isFragment = function(x) {
    return Z(x) === i;
  }, ze.isLazy = function(x) {
    return Z(x) === A;
  }, ze.isMemo = function(x) {
    return Z(x) === Y;
  }, ze.isPortal = function(x) {
    return Z(x) === r;
  }, ze.isProfiler = function(x) {
    return Z(x) === u;
  }, ze.isStrictMode = function(x) {
    return Z(x) === c;
  }, ze.isSuspense = function(x) {
    return Z(x) === T;
  }, ze.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === i || x === g || x === u || x === c || x === T || x === $ || typeof x == "object" && x !== null && (x.$$typeof === A || x.$$typeof === Y || x.$$typeof === y || x.$$typeof === w || x.$$typeof === I || x.$$typeof === L || x.$$typeof === G || x.$$typeof === H || x.$$typeof === k);
  }, ze.typeOf = Z, ze;
}
ss.exports = vc();
var Sc = ss.exports, ei = Sc, wc = {
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
}, kc = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, xc = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, ls = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, ti = {};
ti[ei.ForwardRef] = xc;
ti[ei.Memo] = ls;
function ao(e) {
  return ei.isMemo(e) ? ls : ti[e.$$typeof] || wc;
}
var Ec = Object.defineProperty, _c = Object.getOwnPropertyNames, io = Object.getOwnPropertySymbols, Tc = Object.getOwnPropertyDescriptor, Cc = Object.getPrototypeOf, oo = Object.prototype;
function cs(e, t, r) {
  if (typeof t != "string") {
    if (oo) {
      var i = Cc(t);
      i && i !== oo && cs(e, i, r);
    }
    var c = _c(t);
    io && (c = c.concat(io(t)));
    for (var u = ao(e), y = ao(t), w = 0; w < c.length; ++w) {
      var S = c[w];
      if (!kc[S] && !(r && r[S]) && !(y && y[S]) && !(u && u[S])) {
        var g = Tc(t, S);
        try {
          Ec(e, S, g);
        } catch {
        }
      }
    }
  }
  return e;
}
var Ac = cs;
const Oc = /* @__PURE__ */ Ka(Ac);
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
var so = function(e, t) {
  for (var r = [e[0]], i = 0, c = t.length; i < c; i += 1) r.push(t[i], e[i + 1]);
  return r;
}, $a = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !os.typeOf(e);
}, Xn = Object.freeze([]), vr = Object.freeze({});
function pn(e) {
  return typeof e == "function";
}
function lo(e) {
  return e.displayName || e.name || "Component";
}
function ri(e) {
  return e && typeof e.styledComponentId == "string";
}
var Lr = typeof yt < "u" && yt.env !== void 0 && (yt.env.REACT_APP_SC_ATTR || yt.env.SC_ATTR) || "data-styled", ni = typeof window < "u" && "HTMLElement" in window, Rc = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof yt < "u" && yt.env !== void 0 && (yt.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && yt.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? yt.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && yt.env.REACT_APP_SC_DISABLE_SPEEDY : yt.env.SC_DISABLE_SPEEDY !== void 0 && yt.env.SC_DISABLE_SPEEDY !== "" ? yt.env.SC_DISABLE_SPEEDY !== "false" && yt.env.SC_DISABLE_SPEEDY : yt.env.NODE_ENV !== "production"));
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
      for (var w = u; w < y; w++) this.groupSizes[w] = 0;
    }
    for (var S = this.indexOfGroup(r + 1), g = 0, I = i.length; g < I; g++) this.tag.insertRule(S, i[g]) && (this.groupSizes[r]++, S++);
  }, t.clearGroup = function(r) {
    if (r < this.length) {
      var i = this.groupSizes[r], c = this.indexOfGroup(r), u = c + i;
      this.groupSizes[r] = 0;
      for (var y = c; y < u; y++) this.tag.deleteRule(c);
    }
  }, t.getGroup = function(r) {
    var i = "";
    if (r >= this.length || this.groupSizes[r] === 0) return i;
    for (var c = this.groupSizes[r], u = this.indexOfGroup(r), y = u + c, w = u; w < y; w++) i += this.tag.getRule(w) + `/*!sc*/
`;
    return i;
  }, e;
}(), Gn = /* @__PURE__ */ new Map(), Jn = /* @__PURE__ */ new Map(), cn = 1, $n = function(e) {
  if (Gn.has(e)) return Gn.get(e);
  for (; Jn.has(cn); ) cn++;
  var t = cn++;
  return Gn.set(e, t), Jn.set(t, e), t;
}, Nc = function(e) {
  return Jn.get(e);
}, Ic = function(e, t) {
  t >= cn && (cn = t + 1), Gn.set(e, t), Jn.set(t, e);
}, Dc = "style[" + Lr + '][data-styled-version="5.3.11"]', Lc = new RegExp("^" + Lr + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Fc = function(e, t, r) {
  for (var i, c = r.split(","), u = 0, y = c.length; u < y; u++) (i = c[u]) && e.registerName(t, i);
}, Mc = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), i = [], c = 0, u = r.length; c < u; c++) {
    var y = r[c].trim();
    if (y) {
      var w = y.match(Lc);
      if (w) {
        var S = 0 | parseInt(w[1], 10), g = w[2];
        S !== 0 && (Ic(g, S), Fc(e, g, w[3]), e.getTag().insertRules(S, i)), i.length = 0;
      } else i.push(y);
    }
  }
}, jc = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, us = function(e) {
  var t = document.head, r = e || t, i = document.createElement("style"), c = function(w) {
    for (var S = w.childNodes, g = S.length; g >= 0; g--) {
      var I = S[g];
      if (I && I.nodeType === 1 && I.hasAttribute(Lr)) return I;
    }
  }(r), u = c !== void 0 ? c.nextSibling : null;
  i.setAttribute(Lr, "active"), i.setAttribute("data-styled-version", "5.3.11");
  var y = jc();
  return y && i.setAttribute("nonce", y), r.insertBefore(i, u), i;
}, zc = function() {
  function e(r) {
    var i = this.element = us(r);
    i.appendChild(document.createTextNode("")), this.sheet = function(c) {
      if (c.sheet) return c.sheet;
      for (var u = document.styleSheets, y = 0, w = u.length; y < w; y++) {
        var S = u[y];
        if (S.ownerNode === c) return S;
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
}(), $c = function() {
  function e(r) {
    var i = this.element = us(r);
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
}(), Uc = function() {
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
}(), co = ni, Bc = { isServer: !ni, useCSSOMInjection: !Rc }, ds = function() {
  function e(r, i, c) {
    r === void 0 && (r = vr), i === void 0 && (i = {}), this.options = pr({}, Bc, {}, r), this.gs = i, this.names = new Map(c), this.server = !!r.isServer, !this.server && ni && co && (co = !1, function(u) {
      for (var y = document.querySelectorAll(Dc), w = 0, S = y.length; w < S; w++) {
        var g = y[w];
        g && g.getAttribute(Lr) !== "active" && (Mc(u, g), g.parentNode && g.parentNode.removeChild(g));
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
    return this.tag || (this.tag = (c = (i = this.options).isServer, u = i.useCSSOMInjection, y = i.target, r = c ? new Uc(y) : u ? new zc(y) : new $c(y), new Pc(r)));
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
        var w = Nc(y);
        if (w !== void 0) {
          var S = r.names.get(w), g = i.getGroup(y);
          if (S && g && S.size) {
            var I = Lr + ".g" + y + '[id="' + w + '"]', T = "";
            S !== void 0 && S.forEach(function($) {
              $.length > 0 && (T += $ + ",");
            }), u += "" + g + I + '{content:"' + T + `"}/*!sc*/
`;
          }
        }
      }
      return u;
    }(this);
  }, e;
}(), Wc = /(a)(d)/gi, uo = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Ua(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = uo(t % 52) + r;
  return (uo(t % 52) + r).replace(Wc, "$1-$2");
}
var Ir = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, fs = function(e) {
  return Ir(5381, e);
};
function Hc(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (pn(r) && !ri(r)) return !1;
  }
  return !0;
}
var Vc = fs("5.3.11"), qc = function() {
  function e(t, r, i) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (i === void 0 || i.isStatic) && Hc(t), this.componentId = r, this.baseHash = Ir(Vc, r), this.baseStyle = i, ds.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, i) {
    var c = this.componentId, u = [];
    if (this.baseStyle && u.push(this.baseStyle.generateAndInjectStyles(t, r, i)), this.isStatic && !i.hash) if (this.staticRulesId && r.hasNameForId(c, this.staticRulesId)) u.push(this.staticRulesId);
    else {
      var y = Fr(this.rules, t, r, i).join(""), w = Ua(Ir(this.baseHash, y) >>> 0);
      if (!r.hasNameForId(c, w)) {
        var S = i(y, "." + w, void 0, c);
        r.insertRules(c, w, S);
      }
      u.push(w), this.staticRulesId = w;
    }
    else {
      for (var g = this.rules.length, I = Ir(this.baseHash, i.hash), T = "", $ = 0; $ < g; $++) {
        var Y = this.rules[$];
        if (typeof Y == "string") T += Y;
        else if (Y) {
          var A = Fr(Y, t, r, i), k = Array.isArray(A) ? A.join("") : A;
          I = Ir(I, k + $), T += k;
        }
      }
      if (T) {
        var L = Ua(I >>> 0);
        if (!r.hasNameForId(c, L)) {
          var G = i(T, "." + L, void 0, c);
          r.insertRules(c, L, G);
        }
        u.push(L);
      }
    }
    return u.join(" ");
  }, e;
}(), Yc = /^\s*\/\/.*$/gm, Gc = [":", "[", ".", "#"];
function Zc(e) {
  var t, r, i, c, u = vr, y = u.options, w = y === void 0 ? vr : y, S = u.plugins, g = S === void 0 ? Xn : S, I = new mc(w), T = [], $ = /* @__PURE__ */ function(k) {
    function L(G) {
      if (G) try {
        k(G + "}");
      } catch {
      }
    }
    return function(G, H, Z, W, x, ce, Ee, Ie, Fe, Ge) {
      switch (G) {
        case 1:
          if (Fe === 0 && H.charCodeAt(0) === 64) return k(H + ";"), "";
          break;
        case 2:
          if (Ie === 0) return H + "/*|*/";
          break;
        case 3:
          switch (Ie) {
            case 102:
            case 112:
              return k(Z[0] + H), "";
            default:
              return H + (Ge === 0 ? "/*|*/" : "");
          }
        case -2:
          H.split("/*|*/}").forEach(L);
      }
    };
  }(function(k) {
    T.push(k);
  }), Y = function(k, L, G) {
    return L === 0 && Gc.indexOf(G[r.length]) !== -1 || G.match(c) ? k : "." + t;
  };
  function A(k, L, G, H) {
    H === void 0 && (H = "&");
    var Z = k.replace(Yc, ""), W = L && G ? G + " " + L + " { " + Z + " }" : Z;
    return t = H, r = L, i = new RegExp("\\" + r + "\\b", "g"), c = new RegExp("(\\" + r + "\\b){2,}"), I(G || !L ? "" : L, W);
  }
  return I.use([].concat(g, [function(k, L, G) {
    k === 2 && G.length && G[0].lastIndexOf(r) > 0 && (G[0] = G[0].replace(i, Y));
  }, $, function(k) {
    if (k === -2) {
      var L = T;
      return T = [], L;
    }
  }])), A.hash = g.length ? g.reduce(function(k, L) {
    return L.name || yn(15), Ir(k, L.name);
  }, 5381).toString() : "", A;
}
var ps = ft.createContext();
ps.Consumer;
var hs = ft.createContext(), Xc = (hs.Consumer, new ds()), Ba = Zc();
function Jc() {
  return wr(ps) || Xc;
}
function Kc() {
  return wr(hs) || Ba;
}
var Qc = function() {
  function e(t, r) {
    var i = this;
    this.inject = function(c, u) {
      u === void 0 && (u = Ba);
      var y = i.name + u.hash;
      c.hasNameForId(i.id, y) || c.insertRules(i.id, y, u(i.rules, y, "@keyframes"));
    }, this.toString = function() {
      return yn(12, String(i.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Ba), this.name + t.hash;
  }, e;
}(), eu = /([A-Z])/, tu = /([A-Z])/g, ru = /^ms-/, nu = function(e) {
  return "-" + e.toLowerCase();
};
function fo(e) {
  return eu.test(e) ? e.replace(tu, nu).replace(ru, "-ms-") : e;
}
var po = function(e) {
  return e == null || e === !1 || e === "";
};
function Fr(e, t, r, i) {
  if (Array.isArray(e)) {
    for (var c, u = [], y = 0, w = e.length; y < w; y += 1) (c = Fr(e[y], t, r, i)) !== "" && (Array.isArray(c) ? u.push.apply(u, c) : u.push(c));
    return u;
  }
  if (po(e)) return "";
  if (ri(e)) return "." + e.styledComponentId;
  if (pn(e)) {
    if (typeof (g = e) != "function" || g.prototype && g.prototype.isReactComponent || !t) return e;
    var S = e(t);
    return Fr(S, t, r, i);
  }
  var g;
  return e instanceof Qc ? r ? (e.inject(r, i), e.getName(i)) : e : $a(e) ? function I(T, $) {
    var Y, A, k = [];
    for (var L in T) T.hasOwnProperty(L) && !po(T[L]) && (Array.isArray(T[L]) && T[L].isCss || pn(T[L]) ? k.push(fo(L) + ":", T[L], ";") : $a(T[L]) ? k.push.apply(k, I(T[L], L)) : k.push(fo(L) + ": " + (Y = L, (A = T[L]) == null || typeof A == "boolean" || A === "" ? "" : typeof A != "number" || A === 0 || Y in gc || Y.startsWith("--") ? String(A).trim() : A + "px") + ";"));
    return $ ? [$ + " {"].concat(k, ["}"]) : k;
  }(e) : e.toString();
}
var ho = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function au(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
  return pn(e) || $a(e) ? ho(Fr(so(Xn, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : ho(Fr(so(e, r)));
}
var iu = function(e, t, r) {
  return r === void 0 && (r = vr), e.theme !== r.theme && e.theme || t || r.theme;
}, ou = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, su = /(^-|-$)/g;
function Na(e) {
  return e.replace(ou, "-").replace(su, "");
}
var lu = function(e) {
  return Ua(fs(e) >>> 0);
};
function Un(e) {
  return typeof e == "string" && yt.env.NODE_ENV === "production";
}
var Wa = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, cu = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function uu(e, t, r) {
  var i = e[r];
  Wa(t) && Wa(i) ? ms(i, t) : e[r] = t;
}
function ms(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
  for (var c = 0, u = r; c < u.length; c++) {
    var y = u[c];
    if (Wa(y)) for (var w in y) cu(w) && uu(e, y[w], w);
  }
  return e;
}
var gs = ft.createContext();
gs.Consumer;
var Ia = {};
function ys(e, t, r) {
  var i = ri(e), c = !Un(e), u = t.attrs, y = u === void 0 ? Xn : u, w = t.componentId, S = w === void 0 ? function(H, Z) {
    var W = typeof H != "string" ? "sc" : Na(H);
    Ia[W] = (Ia[W] || 0) + 1;
    var x = W + "-" + lu("5.3.11" + W + Ia[W]);
    return Z ? Z + "-" + x : x;
  }(t.displayName, t.parentComponentId) : w, g = t.displayName, I = g === void 0 ? function(H) {
    return Un(H) ? "styled." + H : "Styled(" + lo(H) + ")";
  }(e) : g, T = t.displayName && t.componentId ? Na(t.displayName) + "-" + t.componentId : t.componentId || S, $ = i && e.attrs ? Array.prototype.concat(e.attrs, y).filter(Boolean) : y, Y = t.shouldForwardProp;
  i && e.shouldForwardProp && (Y = t.shouldForwardProp ? function(H, Z, W) {
    return e.shouldForwardProp(H, Z, W) && t.shouldForwardProp(H, Z, W);
  } : e.shouldForwardProp);
  var A, k = new qc(r, T, i ? e.componentStyle : void 0), L = k.isStatic && y.length === 0, G = function(H, Z) {
    return function(W, x, ce, Ee) {
      var Ie = W.attrs, Fe = W.componentStyle, Ge = W.defaultProps, ue = W.foldedComponentIds, me = W.shouldForwardProp, Re = W.styledComponentId, Pe = W.target, Te = function(D, h, ee) {
        D === void 0 && (D = vr);
        var E = pr({}, h, { theme: D }), ae = {};
        return ee.forEach(function(Q) {
          var te, q, ne, de = Q;
          for (te in pn(de) && (de = de(E)), de) E[te] = ae[te] = te === "className" ? (q = ae[te], ne = de[te], q && ne ? q + " " + ne : q || ne) : de[te];
        }), [E, ae];
      }(iu(x, wr(gs), Ge) || vr, x, Ie), st = Te[0], Me = Te[1], Oe = function(D, h, ee, E) {
        var ae = Jc(), Q = Kc(), te = h ? D.generateAndInjectStyles(vr, ae, Q) : D.generateAndInjectStyles(ee, ae, Q);
        return te;
      }(Fe, Ee, st), We = ce, tt = Me.$as || x.$as || Me.as || x.as || Pe, oe = Un(tt), M = Me !== x ? pr({}, x, {}, Me) : x, C = {};
      for (var F in M) F[0] !== "$" && F !== "as" && (F === "forwardedAs" ? C.as = M[F] : (me ? me(F, ro, tt) : !oe || ro(F)) && (C[F] = M[F]));
      return x.style && Me.style !== x.style && (C.style = pr({}, x.style, {}, Me.style)), C.className = Array.prototype.concat(ue, Re, Oe !== Re ? Oe : null, x.className, Me.className).filter(Boolean).join(" "), C.ref = We, Fo(tt, C);
    }(A, H, Z, L);
  };
  return G.displayName = I, (A = ft.forwardRef(G)).attrs = $, A.componentStyle = k, A.displayName = I, A.shouldForwardProp = Y, A.foldedComponentIds = i ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Xn, A.styledComponentId = T, A.target = i ? e.target : e, A.withComponent = function(H) {
    var Z = t.componentId, W = function(ce, Ee) {
      if (ce == null) return {};
      var Ie, Fe, Ge = {}, ue = Object.keys(ce);
      for (Fe = 0; Fe < ue.length; Fe++) Ie = ue[Fe], Ee.indexOf(Ie) >= 0 || (Ge[Ie] = ce[Ie]);
      return Ge;
    }(t, ["componentId"]), x = Z && Z + "-" + (Un(H) ? H : Na(lo(H)));
    return ys(H, pr({}, W, { attrs: $, componentId: x }), r);
  }, Object.defineProperty(A, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(H) {
    this._foldedDefaultProps = i ? ms({}, e.defaultProps, H) : H;
  } }), Object.defineProperty(A, "toString", { value: function() {
    return "." + A.styledComponentId;
  } }), c && Oc(A, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), A;
}
var Qt = function(e) {
  return function t(r, i, c) {
    if (c === void 0 && (c = vr), !os.isValidElementType(i)) return yn(1, String(i));
    var u = function() {
      return r(i, c, au.apply(void 0, arguments));
    };
    return u.withConfig = function(y) {
      return t(r, i, pr({}, c, {}, y));
    }, u.attrs = function(y) {
      return t(r, i, pr({}, c, { attrs: Array.prototype.concat(c.attrs, y).filter(Boolean) }));
    }, u;
  }(ys, e);
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
o.arrayOf(
  o.shape({
    text: o.string.isRequired,
    targetIdName: o.string.isRequired,
    icon: o.arrayOf(o.string)
  })
).isRequired, o.string.isRequired, o.bool;
function aa(e) {
  var t = Object.entries(e).filter(function(r) {
    var i = r[1];
    return i != null;
  }).map(function(r) {
    var i = r[0], c = r[1];
    return "".concat(encodeURIComponent(i), "=").concat(encodeURIComponent(String(c)));
  });
  return t.length > 0 ? "?".concat(t.join("&")) : "";
}
var du = /* @__PURE__ */ function() {
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
}(), Rr = function() {
  return Rr = Object.assign || function(e) {
    for (var t, r = 1, i = arguments.length; r < i; r++) {
      t = arguments[r];
      for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c]);
    }
    return e;
  }, Rr.apply(this, arguments);
}, fu = function(e, t, r, i) {
  function c(u) {
    return u instanceof r ? u : new r(function(y) {
      y(u);
    });
  }
  return new (r || (r = Promise))(function(u, y) {
    function w(I) {
      try {
        g(i.next(I));
      } catch (T) {
        y(T);
      }
    }
    function S(I) {
      try {
        g(i.throw(I));
      } catch (T) {
        y(T);
      }
    }
    function g(I) {
      I.done ? u(I.value) : c(I.value).then(w, S);
    }
    g((i = i.apply(e, [])).next());
  });
}, pu = function(e, t) {
  var r = { label: 0, sent: function() {
    if (u[0] & 1) throw u[1];
    return u[1];
  }, trys: [], ops: [] }, i, c, u, y;
  return y = { next: w(0), throw: w(1), return: w(2) }, typeof Symbol == "function" && (y[Symbol.iterator] = function() {
    return this;
  }), y;
  function w(g) {
    return function(I) {
      return S([g, I]);
    };
  }
  function S(g) {
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
}, bs = function(e, t) {
  var r = {};
  for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (r[i] = e[i]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var c = 0, i = Object.getOwnPropertySymbols(e); c < i.length; c++)
      t.indexOf(i[c]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[c]) && (r[i[c]] = e[i[c]]);
  return r;
}, hu = function(e) {
  return !!e && (typeof e == "object" || typeof e == "function") && typeof e.then == "function";
}, mu = function(e, t) {
  return {
    left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - e / 2,
    top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - t / 2
  };
}, gu = function(e, t) {
  return {
    top: (window.screen.height - t) / 2,
    left: (window.screen.width - e) / 2
  };
};
function yu(e, t, r) {
  var i = t.height, c = t.width, u = bs(t, ["height", "width"]), y = Rr({ height: i, width: c, location: "no", toolbar: "no", status: "no", directories: "no", menubar: "no", scrollbars: "yes", resizable: "no", centerscreen: "yes", chrome: "yes" }, u), w = window.open(e, "", Object.keys(y).map(function(g) {
    return "".concat(g, "=").concat(y[g]);
  }).join(", "));
  if (r)
    var S = window.setInterval(function() {
      try {
        (w === null || w.closed) && (window.clearInterval(S), r(w));
      } catch (g) {
        console.error(g);
      }
    }, 1e3);
  return w;
}
var bu = (
  /** @class */
  function(e) {
    du(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.openShareDialog = function(i) {
        var c = r.props, u = c.onShareWindowClose, y = c.windowHeight, w = y === void 0 ? 400 : y, S = c.windowPosition, g = S === void 0 ? "windowCenter" : S, I = c.windowWidth, T = I === void 0 ? 550 : I, $ = Rr({ height: w, width: T }, g === "windowCenter" ? mu(T, w) : gu(T, w));
        yu(i, $, u);
      }, r.handleClick = function(i) {
        return fu(r, void 0, void 0, function() {
          var c, u, y, w, S, g, I, T, $, Y;
          return pu(this, function(A) {
            switch (A.label) {
              case 0:
                return c = this.props, u = c.beforeOnClick, y = c.disabled, w = c.networkLink, S = c.onClick, g = c.url, I = c.openShareDialogOnClick, T = c.opts, $ = w(g, T), y ? [
                  2
                  /*return*/
                ] : (i.preventDefault(), u ? (Y = u(), hu(Y) ? [4, Y] : [3, 2]) : [3, 2]);
              case 1:
                A.sent(), A.label = 2;
              case 2:
                return I && this.openShareDialog($), S && S(i, $), [
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
      var i = r.children, c = r.className, u = r.disabled, y = r.disabledStyle, w = r.forwardedRef;
      r.networkLink;
      var S = r.networkName;
      r.onShareWindowClose, r.openShareDialogOnClick, r.opts;
      var g = r.resetButtonStyle, I = r.style;
      r.url, r.windowHeight, r.windowPosition, r.windowWidth;
      var T = bs(r, ["beforeOnClick", "children", "className", "disabled", "disabledStyle", "forwardedRef", "networkLink", "networkName", "onShareWindowClose", "openShareDialogOnClick", "opts", "resetButtonStyle", "style", "url", "windowHeight", "windowPosition", "windowWidth"]), $ = Kt("react-share__ShareButton", {
        "react-share__ShareButton--disabled": !!u,
        disabled: !!u
      }, c), Y = Rr(Rr(g ? { backgroundColor: "transparent", border: "none", padding: 0, font: "inherit", color: "inherit", cursor: "pointer" } : {}, I), u && y);
      return ft.createElement("button", Rr({}, T, { "aria-label": T["aria-label"] || S, className: $, onClick: this.handleClick, ref: w, style: Y }), i);
    }, t.defaultProps = {
      disabledStyle: { opacity: 0.6 },
      openShareDialogOnClick: !0,
      resetButtonStyle: !0
    }, t;
  }(rl)
), Kn = function() {
  return Kn = Object.assign || function(e) {
    for (var t, r = 1, i = arguments.length; r < i; r++) {
      t = arguments[r];
      for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c]);
    }
    return e;
  }, Kn.apply(this, arguments);
};
function ia(e, t, r, i) {
  function c(u, y) {
    var w = r(u), S = Kn({}, u), g = Object.keys(w);
    return g.forEach(function(I) {
      delete S[I];
    }), ft.createElement(bu, Kn({}, i, S, { forwardedRef: y, networkName: e, networkLink: t, opts: r(u) }));
  }
  return c.displayName = "ShareButton-".concat(e), Ja(c);
}
function vu(e, t) {
  var r = t.subject, i = t.body, c = t.separator;
  return "mailto:" + aa({ subject: r, body: i ? i + c + e : e });
}
ia("email", vu, function(e) {
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
var Su = /* @__PURE__ */ function() {
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
}(), wu = (
  /** @class */
  function(e) {
    Su(t, e);
    function t(r) {
      var i = e.call(this, r) || this;
      return i.name = "AssertionError", i;
    }
    return t;
  }(Error)
);
function un(e, t) {
  if (!e)
    throw new wu(t);
}
function ku(e, t) {
  var r = t.quote, i = t.hashtag;
  return un(e, "facebook.url"), "https://www.facebook.com/sharer/sharer.php" + aa({
    u: e,
    quote: r,
    hashtag: i
  });
}
ia("facebook", ku, function(e) {
  return {
    quote: e.quote,
    hashtag: e.hashtag
  };
}, {
  windowWidth: 550,
  windowHeight: 400
});
function xu(e, t) {
  var r = t.title, i = t.summary, c = t.source;
  return un(e, "linkedin.url"), "https://linkedin.com/shareArticle" + aa({ url: e, mini: "true", title: r, summary: i, source: c });
}
ia("linkedin", xu, function(e) {
  var t = e.title, r = e.summary, i = e.source;
  return { title: t, summary: r, source: i };
}, {
  windowWidth: 750,
  windowHeight: 600
});
function Eu(e, t) {
  var r = t.title, i = t.via, c = t.hashtags, u = c === void 0 ? [] : c, y = t.related, w = y === void 0 ? [] : y;
  return un(e, "twitter.url"), un(Array.isArray(u), "twitter.hashtags is not an array"), un(Array.isArray(w), "twitter.related is not an array"), "https://twitter.com/share" + aa({
    url: e,
    text: r,
    via: i,
    hashtags: u.length > 0 ? u.join(",") : void 0,
    related: w.length > 0 ? w.join(",") : void 0
  });
}
ia("twitter", Eu, function(e) {
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
function Ha(e) {
  "@babel/helpers - typeof";
  return Ha = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ha(e);
}
var _u = (typeof window > "u" ? "undefined" : Ha(window)) === "object" && window.Element || function() {
};
function Tu(e, t, r) {
  if (!(e[t] instanceof _u))
    return new Error("Invalid prop `" + t + "` supplied to `" + r + "`. Expected prop to be an instance of Element. Validation failed.");
}
o.oneOfType([o.string, o.func, Tu, o.shape({
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
const Cu = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, vs = ({
  label: e = "",
  cardTitle: t = "",
  gaData: r,
  ariaLabel: i,
  color: c = "gray",
  disabled: u,
  element: y = "button",
  innerRef: w,
  href: S,
  onClick: g,
  ...I
}) => {
  const T = Kt("btn", "btn-tag", {
    "btn-tag-alt-white": c === "white",
    "btn-tag-alt-gray": c === "gray",
    "btn-tag-alt-dark": c === "dark",
    disabled: u
  });
  let $ = y;
  return S && y === "button" && ($ = "a"), /* @__PURE__ */ U.jsx(
    Pr,
    {
      gaData: {
        ...Cu,
        section: t,
        // @deprecated - remove at some point
        ...r,
        text: e
      },
      children: /* @__PURE__ */ U.jsx(
        $,
        {
          type: $ === "button" && g ? "button" : void 0,
          ...I,
          className: T,
          href: S,
          ref: w,
          onClick: g,
          "aria-label": i,
          children: e
        }
      )
    }
  );
};
vs.propTypes = {
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
  gaData: Qa,
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
const Ss = ({
  src: e,
  alt: t,
  cssClasses: r,
  loading: i = "lazy",
  decoding: c = "async",
  dataTestId: u,
  fetchPriority: y = "auto",
  width: w,
  height: S,
  cardLink: g,
  title: I,
  caption: T,
  captionTitle: $,
  border: Y,
  dropShadow: A
}) => {
  const k = {
    src: e,
    alt: t,
    loading: i,
    decoding: c,
    fetchpriority: y,
    // React attribute bug workaround
    ...(r == null ? void 0 : r.length) > 0 && { className: jl(r) },
    ...u && { "data-testid": u },
    ...w && { width: w },
    ...S && { height: S }
  }, L = Kt("uds-img", {
    borderless: !Y,
    "uds-img-drop-shadow": A
  }), G = (Z) => {
    const W = Z ? `${k.className} ${Z}` : k.className;
    return g ? /* @__PURE__ */ U.jsxs("a", { href: g, children: [
      /* @__PURE__ */ U.jsx("img", { ...k, className: W }),
      /* @__PURE__ */ U.jsx("span", { className: "visually-hidden", children: I })
    ] }) : /* @__PURE__ */ U.jsx("img", { ...k, className: W });
  }, H = () => /* @__PURE__ */ U.jsx("div", { className: L, children: /* @__PURE__ */ U.jsxs("figure", { className: "figure uds-figure", children: [
    G(),
    T && /* @__PURE__ */ U.jsxs("figcaption", { className: "figure-caption uds-figure-caption", children: [
      $ && /* @__PURE__ */ U.jsx("h3", { children: $ }),
      /* @__PURE__ */ U.jsx(
        "span",
        {
          className: "uds-caption-text",
          dangerouslySetInnerHTML: Or(T)
        }
      )
    ] })
  ] }) });
  return /* @__PURE__ */ U.jsx(U.Fragment, { children: T ? H() : G(L) });
};
Ss.propTypes = {
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
const Au = Qt.div`
  &.cards-components a + &.cards-components a {
    margin-left: 5px;
  }
  .card-button {
    column-gap: 1rem;
  }
  .card-button .btn {
    margin: 0;
  }
`, Ou = (e) => /^[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e), Ru = (e) => !e.startsWith("https://") && !e.startsWith("http://") && Ou(e) ? `mailto:${e}` : e, Pu = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, br = ({
  type: e = "default",
  width: t = "100%",
  horizontal: r = !1,
  image: i,
  imageAltText: c,
  title: u,
  icon: y,
  body: w,
  eventFormat: S = "stack",
  eventLocation: g,
  eventTime: I,
  buttons: T,
  linkLabel: $,
  linkUrl: Y,
  tags: A,
  showBorders: k = !0,
  cardLink: L
}) => /* @__PURE__ */ U.jsx(
  ws,
  {
    type: e,
    width: t,
    horizontal: r,
    image: i,
    imageAltText: c,
    title: u,
    icon: y,
    body: w,
    eventFormat: S,
    eventLocation: g,
    eventTime: I,
    buttons: T,
    linkLabel: $,
    linkUrl: Y,
    tags: A,
    showBorders: k,
    cardLink: L
  }
);
br.propTypes = {
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
const ws = ({
  type: e = "default",
  width: t = "100%",
  horizontal: r = !1,
  image: i = "",
  imageAltText: c = "",
  title: u,
  icon: y = void 0,
  body: w = "",
  eventFormat: S = "stack",
  eventLocation: g = "",
  eventTime: I = "",
  buttons: T = void 0,
  linkLabel: $ = void 0,
  linkUrl: Y = void 0,
  tags: A = void 0,
  showBorders: k = !0,
  cardLink: L
}) => {
  const G = Kt("card", "cards-components", {
    "card-degree": e === "degree",
    "card-event": e === "event",
    "card-story": e === "story",
    [`w-${t.replace("%", "")}`]: t !== "100%",
    "card-horizontal": r,
    borderless: !k
  });
  return /* @__PURE__ */ U.jsx(U.Fragment, { children: /* @__PURE__ */ U.jsxs(Au, { className: G, "data-testid": "card-container", children: [
    !!i && /* @__PURE__ */ U.jsx(
      Ss,
      {
        src: i,
        alt: c,
        dataTestId: "card-image",
        cssClasses: ["card-img-top"],
        cardLink: L,
        title: u
      }
    ),
    !i && y && /* @__PURE__ */ U.jsx(
      "i",
      {
        className: `${y == null ? void 0 : y[0]} fa-${y == null ? void 0 : y[1]} fa-2x card-icon-top`,
        "data-testid": "card-icon"
      }
    ),
    r ? /* @__PURE__ */ U.jsx("div", { className: "card-content-wrapper", children: /* @__PURE__ */ U.jsx(
      Va,
      {
        type: e,
        body: w,
        eventFormat: S,
        eventLocation: g,
        eventTime: I,
        title: u,
        buttons: T,
        linkLabel: $,
        linkUrl: Y,
        tags: A,
        cardLink: L
      }
    ) }) : /* @__PURE__ */ U.jsx(
      Va,
      {
        type: e,
        body: w,
        eventFormat: S,
        eventLocation: g,
        eventTime: I,
        title: u,
        buttons: T,
        linkLabel: $,
        linkUrl: Y,
        tags: A,
        cardLink: L
      }
    )
  ] }) });
};
ws.propTypes = {
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
const Va = ({
  type: e = "default",
  body: t = "",
  eventFormat: r = "stack",
  eventLocation: i = "",
  eventTime: c = "",
  title: u,
  buttons: y = void 0,
  linkLabel: w = void 0,
  linkUrl: S = void 0,
  tags: g = void 0,
  cardLink: I
}) => /* @__PURE__ */ U.jsxs(U.Fragment, { children: [
  !!u && /* @__PURE__ */ U.jsx("div", { className: "card-header", "data-testid": "card-title", children: /* @__PURE__ */ U.jsx("h3", { className: "card-title", children: I ? /* @__PURE__ */ U.jsx("a", { href: I, children: u }) : u }) }),
  !!t && /* @__PURE__ */ U.jsx("div", { className: "card-body", "data-testid": "card-body", children: /* @__PURE__ */ U.jsx("div", { dangerouslySetInnerHTML: Or(t) }) }),
  e === "event" && (c || i) && /* @__PURE__ */ U.jsx(
    ks,
    {
      eventFormat: r,
      eventTime: c,
      eventLocation: i
    }
  ),
  y && /* @__PURE__ */ U.jsx("div", { className: "card-buttons", children: y.map((T) => /* @__PURE__ */ U.jsx(
    "div",
    {
      className: "card-button",
      "data-testid": "card-button",
      children: /* @__PURE__ */ U.jsx(
        as,
        {
          ariaLabel: T.ariaLabel,
          color: T.color,
          icon: T.icon,
          href: T.href,
          label: T.label,
          onClick: T.onClick,
          size: T.size,
          target: T.target,
          cardTitle: u
        }
      )
    },
    `${T.label}-${T.href}`
  )) }),
  S && w && /* @__PURE__ */ U.jsx("div", { className: "card-link", "data-testid": "card-link", children: /* @__PURE__ */ U.jsx(
    Pr,
    {
      gaData: {
        ...Pu,
        section: u,
        text: w
      },
      children: /* @__PURE__ */ U.jsx("a", { href: Ru(S), children: w })
    }
  ) }),
  g && /* @__PURE__ */ U.jsx("div", { className: "card-tags", "data-testid": "card-tags", children: g.map((T) => (
    // @ts-ignore
    /* @__PURE__ */ U.jsx(
      vs,
      {
        ariaLabel: T.ariaLabel,
        color: T.color,
        href: T.href,
        label: T.label,
        onClick: T.onClick,
        cardTitle: u
      },
      `${T.label}-${T.href}`
    )
  )) })
] });
Va.propTypes = {
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
const ks = ({
  eventFormat: e = "stack",
  eventLocation: t = "",
  eventTime: r = ""
}) => e === "inline" ? /* @__PURE__ */ U.jsxs("div", { className: "card-event-details", children: [
  r && /* @__PURE__ */ U.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ U.jsx("div", { children: /* @__PURE__ */ U.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ U.jsx("div", { dangerouslySetInnerHTML: Or(r) })
  ] }),
  t && /* @__PURE__ */ U.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ U.jsx("div", { children: /* @__PURE__ */ U.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ U.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Or(t)
      }
    )
  ] })
] }) : /* @__PURE__ */ U.jsxs(U.Fragment, { children: [
  r && /* @__PURE__ */ U.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ U.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ U.jsx("div", { children: /* @__PURE__ */ U.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ U.jsx("div", { dangerouslySetInnerHTML: Or(r) })
  ] }) }),
  t && /* @__PURE__ */ U.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ U.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ U.jsx("div", { children: /* @__PURE__ */ U.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ U.jsx("span", { children: /* @__PURE__ */ U.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Or(t)
      }
    ) })
  ] }) })
] });
ks.propTypes = {
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
const Nu = Qt.div`
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
`, Iu = () => /* @__PURE__ */ U.jsxs(Nu, { children: [
  /* @__PURE__ */ U.jsx("div", {}),
  /* @__PURE__ */ U.jsx("div", {}),
  /* @__PURE__ */ U.jsx("div", {}),
  /* @__PURE__ */ U.jsx("div", {})
] }), Du = Qt.section``, ai = nl(null), xs = ({
  defaultProps: e,
  dataSource: t,
  noFeedText: r,
  renderHeader: i,
  renderBody: c,
  dataTransformer: u,
  dataFilter: y,
  maxItems: w
}) => {
  const [{ data: S, loading: g, error: I }, T] = Ml(), [$, Y] = ln([]), A = { ...e.dataSource, ...t };
  return fn(() => {
    T(A == null ? void 0 : A.url);
  }, [A == null ? void 0 : A.url]), fn(() => {
    const k = S == null ? void 0 : S.nodes.map(u), L = k == null ? void 0 : k.filter(
      (G) => y(G, t == null ? void 0 : t.filters)
    );
    Y(w ? L == null ? void 0 : L.slice(0, w) : L);
  }, [S]), // Init the context to be used on its childrens
  /* @__PURE__ */ U.jsx(ai.Provider, { value: { feeds: $ }, children: /* @__PURE__ */ U.jsxs(Du, { children: [
    i,
    I ? /* @__PURE__ */ U.jsx("span", { children: "Error, try again!" }) : /* @__PURE__ */ U.jsxs(U.Fragment, { children: [
      g && !($ != null && $.length) && /* @__PURE__ */ U.jsx("div", { className: "text-center mt-4", children: /* @__PURE__ */ U.jsx(Iu, {}) }),
      $ != null && $.length ? c : !g && /* @__PURE__ */ U.jsx("p", { className: "text-center", children: r })
    ] })
  ] }) });
};
xs.propTypes = {
  renderHeader: o.element,
  renderBody: o.element,
  maxItems: o.number,
  dataTransformer: o.func,
  dataFilter: o.func,
  noFeedText: o.string
};
const ii = o.shape({
  color: o.oneOf(["white", "dark"]),
  text: o.string
}), oi = o.shape({
  color: o.oneOf(["gold", "maroon", "gray", "dark"]),
  text: o.string
});
o.shape({
  color: o.oneOf(["gold", "maroon", "gray", "dark"]),
  text: o.string,
  size: o.string
});
const Es = o.shape({
  url: o.string,
  filters: o.string
}), Lu = o.shape({
  header: ii,
  ctaButton: oi,
  dataSource: Es,
  maxItems: o.number
}), Fu = Qt.div`
  @media screen and (min-width: 768px) {
    & {
      display: inline-flex;
      justify-content: flex-end;
    }
  }
`, _s = ({
  defaultProps: e,
  header: t,
  ctaButton: r
}) => {
  const i = { ...e.header, ...t }, c = { ...e.ctaButton, ...r }, u = i.tag || "h2", y = u !== "h2", w = `text-${i.color} ${y ? "h2" : ""}`.trim();
  return /* @__PURE__ */ U.jsxs(
    "div",
    {
      className: "row justify-content-between align-items-center pb-6",
      "data-testid": "feed-header",
      children: [
        /* @__PURE__ */ U.jsx("div", { className: "col-sm-12 col-md-9", children: /* @__PURE__ */ U.jsx(u, { className: w, children: i.text }) }),
        /* @__PURE__ */ U.jsx(Fu, { className: "col-sm-12 col-md-3", children: /* @__PURE__ */ U.jsx(
          Pr,
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
            children: /* @__PURE__ */ U.jsx("a", { className: `btn btn-${c.color}`, href: c.url, children: c.text })
          }
        ) })
      ]
    }
  );
};
_s.propTypes = {
  defaultProps: Lu,
  header: ii,
  ctaButton: oi
};
const Ts = ({ children: e }) => /* @__PURE__ */ U.jsx("div", { className: "row", "data-testid": "feed-body", children: /* @__PURE__ */ U.jsx("div", { className: "col", children: e }) });
Ts.propTypes = {
  children: o.element
};
Qt.img`
  width: 100%;
`;
o.oneOf(["heading-hero", "story-hero"]), o.arrayOf(Pa), o.string;
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
const Mu = Ja(function(e, t) {
  const {
    id: r,
    selected: i,
    title: c,
    selectTab: u,
    leftKeyPressed: y,
    rightKeyPressed: w,
    icon: S,
    gaData: g
  } = e, { isReact: I, isBootstrap: T } = ns(), $ = al(null);
  il(t, () => ({
    focus() {
      $.current.focus();
    },
    scrollIntoView() {
      var A, k, L, G, H, Z, W;
      const x = ((A = $.current) == null ? void 0 : A.offsetWidth) / 2 + $.current.offsetLeft, ce = ((L = (k = $.current) == null ? void 0 : k.offsetParent) == null ? void 0 : L.scrollLeft) + ((H = (G = $.current) == null ? void 0 : G.offsetParent) == null ? void 0 : H.offsetWidth) / 2;
      (W = (Z = $.current) == null ? void 0 : Z.offsetParent) == null || W.scrollBy({
        left: x - ce
      });
    }
  }), []);
  const Y = (A) => {
    A.keyCode === 37 ? (A.preventDefault(), y()) : A.keyCode === 39 && (A.preventDefault(), w());
  };
  return /* @__PURE__ */ U.jsx(Pr, { gaData: { ...g, text: c }, children: /* @__PURE__ */ U.jsxs(
    "a",
    {
      ref: $,
      className: `nav-item nav-link ${i ? "active" : ""}`,
      id: r,
      href: `#nav-${r}`,
      role: "tab",
      "aria-controls": `nav-${r}`,
      "aria-selected": i,
      "data-bs-toggle": T && "tab",
      onClick: I && ((A) => u(A, r, c)),
      onKeyDown: I && Y,
      tabIndex: i ? "" : "-1",
      children: [
        c,
        " ",
        S && /* @__PURE__ */ U.jsx("i", { className: `${S == null ? void 0 : S[0]} fa-${S == null ? void 0 : S[1]} me-1` })
      ]
    }
  ) });
});
Mu.propTypes = {
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
var ju = !1;
try {
  var mo = Object.defineProperty({}, "passive", {
    get: function() {
      ju = !0;
    }
  });
  window.addEventListener("testPassive", null, mo), window.removeEventListener("testPassive", null, mo);
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
    buttons: br.propTypes.buttons,
    linkLabel: o.string,
    linkUrl: o.string,
    tags: br.propTypes.tags
  })
).isRequired, br.propTypes.type, br.propTypes.eventFormat, br.propTypes.horizontal, o.string, o.string, o.bool;
o.number.isRequired, o.arrayOf(o.object).isRequired, o.string, o.string, o.bool;
const Qn = {
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
o.string, Qn.imageItems, Qn.hasContent;
Qn.imageItems.isRequired, Qn.hasContent, o.string, o.string, o.bool;
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
var go = Mo;
go.createRoot, go.hydrateRoot;
(function() {
  var e = `@charset "UTF-8";.glide{position:relative;width:100%;box-sizing:border-box}.glide *{box-sizing:inherit}.glide__track{overflow:hidden}.glide__slides{position:relative;width:100%;list-style:none;backface-visibility:hidden;transform-style:preserve-3d;touch-action:pan-Y;overflow:hidden;margin:0;padding:0;white-space:nowrap;display:flex;flex-wrap:nowrap;will-change:transform}.glide__slides--dragging{-webkit-user-select:none;user-select:none}.glide__slide{width:100%;height:100%;flex-shrink:0;white-space:normal;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent}.glide__slide a{-webkit-user-select:none;user-select:none;-webkit-user-drag:none;-moz-user-select:none;-ms-user-select:none}.glide__arrows,.glide__bullets{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}.glide--rtl{direction:rtl}@media only screen and (min-width: 1260px){.container .aligned-carousel{margin-left:-124px!important}}.glide{display:flex;flex-direction:column;gap:32px;position:relative}[data-image-auto-size=true] .glide__slides .glide__slide{height:auto;position:relative;display:inline-flex;justify-content:center}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img{display:flex;width:100%;max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img{flex-grow:1;object-fit:cover}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img.uds-img{max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img figure.uds-figure{display:flex;justify-content:space-between;flex-direction:column}.glide .glide__track{position:relative}.glide .glide__track .glide__slides{margin-bottom:0;touch-action:auto}.glide .glide__track .glide__slides .glide__slide .card{width:100%}@media only screen and (min-width: 576px){.glide[data-has-shadow=true] .glide__track.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}}.glide__arrows{z-index:2;align-self:center}.glide__arrows .glide__arrow{color:#191919;width:4rem;height:4rem;margin:0 .5rem;background-color:#e8e8e8;border:1px solid #d0d0d0;border-radius:50%;font-size:1.3rem;text-shadow:0 .25em .5em rgba(0,0,0,.1);opacity:1;cursor:pointer;transition:opacity .15s ease,border .3s ease-in-out;line-height:1}.glide__arrows .glide__arrow.glide__arrow--disabled{color:#e8e8e8;background-color:#fafafa;border:1px solid #e8e8e8;opacity:1}.glide__arrows .glide__arrow:focus{outline:none}.glide__arrows .glide__arrow:hover{border-color:#fff}.glide__arrows .glide__arrow--left{left:2em}.glide__arrows .glide__arrow--right{right:2em}.glide__arrows .glide__arrow--disabled{opacity:.33}.glide__bullets{z-index:2;list-style:none;max-width:100%;display:flex;justify-content:center}.glide__bullet{transition:all .3s ease-in-out;background-color:#d0d0d0;width:1rem;height:1rem;padding:0;border-radius:50%;border:2px solid transparent;cursor:pointer;line-height:0;margin:.375rem}.glide__bullet:focus{outline:none}.glide__bullet:hover,.glide__bullet:focus{border:1px solid #d0d0d0;background-color:#191919}.glide__bullet--active{background-color:#191919}.glide.aligned-carousel{width:1448px;margin:auto}.glide.image-gallery{gap:0;overflow:hidden}.glide.image-gallery .glide__track{border:1px solid #d0d0d0}.glide.image-gallery .glide__track:after{content:none}.glide.image-gallery .glide__track .glide__slides{margin-bottom:0;height:100%}.glide.image-gallery .glide__track .glide__slides li.glide__slide{display:list-item}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img{height:100%}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img img{object-fit:cover;border:none}.glide.image-gallery .image-gallery-action-area{border:1px solid #d0d0d0;border-top:0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .image-navigator{border-bottom:1px solid #d0d0d0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text{padding:1rem 0;display:inline-block}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text>div{height:auto!important}.glide.image-gallery figcaption{padding:0 .75rem;font-size:.75rem}.glide.image-gallery .image-navigator{position:relative}.glide.image-gallery .image-navigator .image-navigator-images{min-height:64px;padding-top:1rem;padding-bottom:1rem;width:100%;margin:auto;overflow:hidden}.glide.image-gallery .image-navigator .image-navigator-images.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider{position:relative;left:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets{position:relative}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container{position:relative;margin:0 .5rem;height:48px;border:0;padding:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:first-child{margin-left:16rem}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container .bullet-image{flex-basis:auto;width:88px;height:100%;border-radius:0;border:0;z-index:2;object-fit:cover;margin:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:focus{box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .glide__bullet--active{background-color:transparent;border:5px solid #ffc627}.glide.image-gallery .image-navigator .glide__arrows{width:100%;display:flex;justify-content:space-between;align-items:center}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow{width:2.5rem;height:2.5rem;display:flex;align-items:center;justify-content:center;z-index:3;position:absolute;background-color:#fff}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow:hover{border-color:#d0d0d0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow .arrow-icon{font-size:1rem}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--prev{left:0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--next{right:0}@media only screen and (max-width: 576px){.glide{gap:21px}.glide:not(.glide.image-gallery) .glide__bullets{display:none}.glide.image-gallery{width:100%;margin:auto!important}.glide.image-gallery .image-navigator .image-navigator-images .glide__arrows .glide__arrow{display:none}}@media only screen and (max-width: 1260px){.glide.aligned-carousel{width:100%}}.glide--swipeable{cursor:grab;cursor:-moz-grab;cursor:-webkit-grab}.glide--dragging{cursor:grabbing;cursor:-moz-grabbing;cursor:-webkit-grabbing}.glide[data-remove-side-background=true]:after,.glide[data-remove-side-background=true]:before{content:none}.glide button:focus,.glide a:focus,.glide input:focus,.glide textarea:focus,.glide select:focus{outline:none!important;box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery,.glide.image-carousel{margin:auto}.glide.image-gallery[role=figure],.glide.image-gallery figure.uds-figure,.glide.image-carousel[role=figure],.glide.image-carousel figure.uds-figure{margin:0}.glide.image-gallery[role=figure] figcaption *,.glide.image-gallery[role=figure] .uds-caption-text,.glide.image-gallery figure.uds-figure figcaption *,.glide.image-gallery figure.uds-figure .uds-caption-text,.glide.image-carousel[role=figure] figcaption *,.glide.image-carousel[role=figure] .uds-caption-text,.glide.image-carousel figure.uds-figure figcaption *,.glide.image-carousel figure.uds-figure .uds-caption-text{color:#191919;max-width:100%}
`, t = document.createElement("style");
  t.type = "text/css", t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e)), document.head.appendChild(t);
})();
const yo = {
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
}, bo = [
  "eventTopics",
  "eventUnits",
  "interests",
  "audiences",
  "eventTypes",
  "collegeUnit"
], vo = (e) => e.toLowerCase().split(" ").join("_"), zu = (e, t) => {
  if (!t) return !0;
  const r = t.split(",");
  for (let i = 0; i < r.length; i += 1) {
    const c = vo(r[i]);
    for (let u = 0; u < bo.length; u += 1) {
      const y = bo[u];
      if (vo(e[y] || "").includes(c)) return !0;
    }
  }
  return !1;
}, $u = (e) => ({
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
}), si = ({ children: e, header: t, ctaButton: r, dataSource: i, maxItems: c }) => (
  // Calling the unity-react-core component to fetch the data, transform it and filter it
  // We provide in the renderBody the view specified before in the parent component, recieved as "children" in this component.
  // We provide in the renderHeader the unity-react-core header, if it is desired to be shown
  // We provide the maxItems prop to limit the items rendered
  // We provide the dataSource to read the url to fetch the data
  // We provide the defaultProps to use some needed default values in case they are not provided
  /* @__PURE__ */ dt.jsx(
    xs,
    {
      renderHeader: t && r ? /* @__PURE__ */ dt.jsx(
        _s,
        {
          header: t,
          ctaButton: r,
          defaultProps: yo
        }
      ) : null,
      renderBody: /* @__PURE__ */ dt.jsx(Ts, { children: e }),
      dataTransformer: $u,
      dataFilter: zu,
      dataSource: i,
      defaultProps: yo,
      noFeedText: "No events to show.",
      maxItems: c
    }
  )
);
si.propTypes = {
  header: ii,
  ctaButton: oi,
  dataSource: Es,
  maxItems: Ye.number,
  children: Ye.element
};
const Uu = Ye.shape({
  color: Ye.oneOf(["white", "dark"]),
  text: Ye.string
}), Bu = Ye.shape({
  color: Ye.oneOf(["gold", "maroon", "gray", "dark"]),
  text: Ye.string,
  url: Ye.string
}), Wu = Ye.shape({
  url: Ye.string.isRequired,
  filters: Ye.string
}).isRequired, Cs = {
  header: Uu,
  ctaButton: Bu,
  dataSource: Wu,
  maxItems: Ye.number
}, Hu = (e) => e.toLocaleDateString("en-US", {
  timeZone: "UTC",
  weekday: "long",
  month: "long",
  day: "numeric"
}), So = (e) => e.toLocaleString("en-US", {
  timeZone: "UTC"
}), qa = (e) => {
  let t = e.split("T");
  return t = t.length > 1 ? t.join("T") : `${t[0].split(":")[0]}T00:00:00Z`, t;
}, wo = (e) => {
  let t = e.getHours(), r = e.getMinutes();
  const i = t >= 12 ? "p.m." : "a.m.";
  return t %= 12, t = t || 12, r = r < 10 ? `0${r}` : r, `${t}:${r} ${i}`;
}, As = (e, t) => {
  const r = qa(e);
  let i = So(new Date(r));
  if (i = wo(new Date(i)), !t || e === t)
    return i;
  const c = qa(t);
  let u = So(new Date(c));
  return u = wo(new Date(u)), `${i} to ${u}`;
}, ea = (e, t) => {
  const r = qa(e);
  return {
    ISO: r.split("T")[0],
    COMPLETE: Hu(new Date(r))
  }[t];
};
var Os = { exports: {} }, qe = {};
var ko;
function Vu() {
  if (ko) return qe;
  ko = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), u = Symbol.for("react.consumer"), y = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), I = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), Y = Symbol.for("react.client.reference");
  function A(k) {
    if (typeof k == "object" && k !== null) {
      var L = k.$$typeof;
      switch (L) {
        case e:
          switch (k = k.type, k) {
            case r:
            case c:
            case i:
            case S:
            case g:
              return k;
            default:
              switch (k = k && k.$$typeof, k) {
                case y:
                case w:
                case T:
                case I:
                  return k;
                case u:
                  return k;
                default:
                  return L;
              }
          }
        case t:
          return L;
      }
    }
  }
  return qe.ContextConsumer = u, qe.ContextProvider = y, qe.Element = e, qe.ForwardRef = w, qe.Fragment = r, qe.Lazy = T, qe.Memo = I, qe.Portal = t, qe.Profiler = c, qe.StrictMode = i, qe.Suspense = S, qe.SuspenseList = g, qe.isContextConsumer = function(k) {
    return A(k) === u;
  }, qe.isContextProvider = function(k) {
    return A(k) === y;
  }, qe.isElement = function(k) {
    return typeof k == "object" && k !== null && k.$$typeof === e;
  }, qe.isForwardRef = function(k) {
    return A(k) === w;
  }, qe.isFragment = function(k) {
    return A(k) === r;
  }, qe.isLazy = function(k) {
    return A(k) === T;
  }, qe.isMemo = function(k) {
    return A(k) === I;
  }, qe.isPortal = function(k) {
    return A(k) === t;
  }, qe.isProfiler = function(k) {
    return A(k) === c;
  }, qe.isStrictMode = function(k) {
    return A(k) === i;
  }, qe.isSuspense = function(k) {
    return A(k) === S;
  }, qe.isSuspenseList = function(k) {
    return A(k) === g;
  }, qe.isValidElementType = function(k) {
    return typeof k == "string" || typeof k == "function" || k === r || k === c || k === i || k === S || k === g || k === $ || typeof k == "object" && k !== null && (k.$$typeof === T || k.$$typeof === I || k.$$typeof === y || k.$$typeof === u || k.$$typeof === w || k.$$typeof === Y || k.getModuleId !== void 0);
  }, qe.typeOf = A, qe;
}
Os.exports = Vu();
var Rs = Os.exports;
function qu(e) {
  function t(M, C, F, D, h) {
    for (var ee = 0, E = 0, ae = 0, Q = 0, te, q, ne = 0, de = 0, J, ge = J = te = 0, re = 0, se = 0, Ue = 0, le = 0, it = F.length, He = it - 1, we, B = "", ie = "", Xe = "", Ne = "", De; re < it; ) {
      if (q = F.charCodeAt(re), re === He && E + Q + ae + ee !== 0 && (E !== 0 && (q = E === 47 ? 10 : 47), Q = ae = ee = 0, it++, He++), E + Q + ae + ee === 0) {
        if (re === He && (0 < se && (B = B.replace($, "")), 0 < B.trim().length)) {
          switch (q) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              B += F.charAt(re);
          }
          q = 59;
        }
        switch (q) {
          case 123:
            for (B = B.trim(), te = B.charCodeAt(0), J = 1, le = ++re; re < it; ) {
              switch (q = F.charCodeAt(re)) {
                case 123:
                  J++;
                  break;
                case 125:
                  J--;
                  break;
                case 47:
                  switch (q = F.charCodeAt(re + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (ge = re + 1; ge < He; ++ge)
                          switch (F.charCodeAt(ge)) {
                            case 47:
                              if (q === 42 && F.charCodeAt(ge - 1) === 42 && re + 2 !== ge) {
                                re = ge + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (q === 47) {
                                re = ge + 1;
                                break e;
                              }
                          }
                        re = ge;
                      }
                  }
                  break;
                case 91:
                  q++;
                case 40:
                  q++;
                case 34:
                case 39:
                  for (; re++ < He && F.charCodeAt(re) !== q; )
                    ;
              }
              if (J === 0) break;
              re++;
            }
            switch (J = F.substring(le, re), te === 0 && (te = (B = B.replace(T, "").trim()).charCodeAt(0)), te) {
              case 64:
                switch (0 < se && (B = B.replace($, "")), q = B.charCodeAt(1), q) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    se = C;
                    break;
                  default:
                    se = st;
                }
                if (J = t(C, se, J, q, h + 1), le = J.length, 0 < Oe && (se = r(st, B, Ue), De = w(3, J, se, C, Re, me, le, q, h, D), B = se.join(""), De !== void 0 && (le = (J = De.trim()).length) === 0 && (q = 0, J = "")), 0 < le) switch (q) {
                  case 115:
                    B = B.replace(ce, y);
                  case 100:
                  case 109:
                  case 45:
                    J = B + "{" + J + "}";
                    break;
                  case 107:
                    B = B.replace(H, "$1 $2"), J = B + "{" + J + "}", J = Te === 1 || Te === 2 && u("@" + J, 3) ? "@-webkit-" + J + "@" + J : "@" + J;
                    break;
                  default:
                    J = B + J, D === 112 && (J = (ie += J, ""));
                }
                else J = "";
                break;
              default:
                J = t(C, r(C, B, Ue), J, D, h + 1);
            }
            Xe += J, J = Ue = se = ge = te = 0, B = "", q = F.charCodeAt(++re);
            break;
          case 125:
          case 59:
            if (B = (0 < se ? B.replace($, "") : B).trim(), 1 < (le = B.length)) switch (ge === 0 && (te = B.charCodeAt(0), te === 45 || 96 < te && 123 > te) && (le = (B = B.replace(" ", ":")).length), 0 < Oe && (De = w(1, B, C, M, Re, me, ie.length, D, h, D)) !== void 0 && (le = (B = De.trim()).length) === 0 && (B = "\0\0"), te = B.charCodeAt(0), q = B.charCodeAt(1), te) {
              case 0:
                break;
              case 64:
                if (q === 105 || q === 99) {
                  Ne += B + F.charAt(re);
                  break;
                }
              default:
                B.charCodeAt(le - 1) !== 58 && (ie += c(B, te, q, B.charCodeAt(2)));
            }
            Ue = se = ge = te = 0, B = "", q = F.charCodeAt(++re);
        }
      }
      switch (q) {
        case 13:
        case 10:
          E === 47 ? E = 0 : 1 + te === 0 && D !== 107 && 0 < B.length && (se = 1, B += "\0"), 0 < Oe * tt && w(0, B, C, M, Re, me, ie.length, D, h, D), me = 1, Re++;
          break;
        case 59:
        case 125:
          if (E + Q + ae + ee === 0) {
            me++;
            break;
          }
        default:
          switch (me++, we = F.charAt(re), q) {
            case 9:
            case 32:
              if (Q + ee + E === 0) switch (ne) {
                case 44:
                case 58:
                case 9:
                case 32:
                  we = "";
                  break;
                default:
                  q !== 32 && (we = " ");
              }
              break;
            case 0:
              we = "\\0";
              break;
            case 12:
              we = "\\f";
              break;
            case 11:
              we = "\\v";
              break;
            case 38:
              Q + E + ee === 0 && (se = Ue = 1, we = "\f" + we);
              break;
            case 108:
              if (Q + E + ee + Pe === 0 && 0 < ge) switch (re - ge) {
                case 2:
                  ne === 112 && F.charCodeAt(re - 3) === 58 && (Pe = ne);
                case 8:
                  de === 111 && (Pe = de);
              }
              break;
            case 58:
              Q + E + ee === 0 && (ge = re);
              break;
            case 44:
              E + ae + Q + ee === 0 && (se = 1, we += "\r");
              break;
            case 34:
            case 39:
              E === 0 && (Q = Q === q ? 0 : Q === 0 ? q : Q);
              break;
            case 91:
              Q + E + ae === 0 && ee++;
              break;
            case 93:
              Q + E + ae === 0 && ee--;
              break;
            case 41:
              Q + E + ee === 0 && ae--;
              break;
            case 40:
              if (Q + E + ee === 0) {
                if (te === 0) switch (2 * ne + 3 * de) {
                  case 533:
                    break;
                  default:
                    te = 1;
                }
                ae++;
              }
              break;
            case 64:
              E + ae + Q + ee + ge + J === 0 && (J = 1);
              break;
            case 42:
            case 47:
              if (!(0 < Q + ee + ae)) switch (E) {
                case 0:
                  switch (2 * q + 3 * F.charCodeAt(re + 1)) {
                    case 235:
                      E = 47;
                      break;
                    case 220:
                      le = re, E = 42;
                  }
                  break;
                case 42:
                  q === 47 && ne === 42 && le + 2 !== re && (F.charCodeAt(le + 2) === 33 && (ie += F.substring(le, re + 1)), we = "", E = 0);
              }
          }
          E === 0 && (B += we);
      }
      de = ne, ne = q, re++;
    }
    if (le = ie.length, 0 < le) {
      if (se = C, 0 < Oe && (De = w(2, ie, se, M, Re, me, le, D, h, D), De !== void 0 && (ie = De).length === 0)) return Ne + ie + Xe;
      if (ie = se.join(",") + "{" + ie + "}", Te * Pe !== 0) {
        switch (Te !== 2 || u(ie, 2) || (Pe = 0), Pe) {
          case 111:
            ie = ie.replace(W, ":-moz-$1") + ie;
            break;
          case 112:
            ie = ie.replace(Z, "::-webkit-input-$1") + ie.replace(Z, "::-moz-$1") + ie.replace(Z, ":-ms-input-$1") + ie;
        }
        Pe = 0;
      }
    }
    return Ne + ie + Xe;
  }
  function r(M, C, F) {
    var D = C.trim().split(L);
    C = D;
    var h = D.length, ee = M.length;
    switch (ee) {
      case 0:
      case 1:
        var E = 0;
        for (M = ee === 0 ? "" : M[0] + " "; E < h; ++E)
          C[E] = i(M, C[E], F).trim();
        break;
      default:
        var ae = E = 0;
        for (C = []; E < h; ++E)
          for (var Q = 0; Q < ee; ++Q)
            C[ae++] = i(M[Q] + " ", D[E], F).trim();
    }
    return C;
  }
  function i(M, C, F) {
    var D = C.charCodeAt(0);
    switch (33 > D && (D = (C = C.trim()).charCodeAt(0)), D) {
      case 38:
        return C.replace(G, "$1" + M.trim());
      case 58:
        return M.trim() + C.replace(G, "$1" + M.trim());
      default:
        if (0 < 1 * F && 0 < C.indexOf("\f")) return C.replace(G, (M.charCodeAt(0) === 58 ? "" : "$1") + M.trim());
    }
    return M + C;
  }
  function c(M, C, F, D) {
    var h = M + ";", ee = 2 * C + 3 * F + 4 * D;
    if (ee === 944) {
      M = h.indexOf(":", 9) + 1;
      var E = h.substring(M, h.length - 1).trim();
      return E = h.substring(0, M).trim() + E + ";", Te === 1 || Te === 2 && u(E, 1) ? "-webkit-" + E + E : E;
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
        return E = h.substring(h.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + E + "-webkit-" + h + "-ms-flex-pack" + E + h;
      case 1005:
        return A.test(h) ? h.replace(Y, ":-webkit-") + h.replace(Y, ":-moz-") + h : h;
      case 1e3:
        switch (E = h.substring(13).trim(), C = E.indexOf("-") + 1, E.charCodeAt(0) + E.charCodeAt(C)) {
          case 226:
            E = h.replace(x, "tb");
            break;
          case 232:
            E = h.replace(x, "tb-rl");
            break;
          case 220:
            E = h.replace(x, "lr");
            break;
          default:
            return h;
        }
        return "-webkit-" + h + "-ms-" + E + h;
      case 1017:
        if (h.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (C = (h = M).length - 10, E = (h.charCodeAt(C) === 33 ? h.substring(0, C) : h).substring(M.indexOf(":", 7) + 1).trim(), ee = E.charCodeAt(0) + (E.charCodeAt(7) | 0)) {
          case 203:
            if (111 > E.charCodeAt(8)) break;
          case 115:
            h = h.replace(E, "-webkit-" + E) + ";" + h;
            break;
          case 207:
          case 102:
            h = h.replace(E, "-webkit-" + (102 < ee ? "inline-" : "") + "box") + ";" + h.replace(E, "-webkit-" + E) + ";" + h.replace(E, "-ms-" + E + "box") + ";" + h;
        }
        return h + ";";
      case 938:
        if (h.charCodeAt(5) === 45) switch (h.charCodeAt(6)) {
          case 105:
            return E = h.replace("-items", ""), "-webkit-" + h + "-webkit-box-" + E + "-ms-flex-" + E + h;
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
        if (Ge.test(M) === !0) return (E = M.substring(M.indexOf(":") + 1)).charCodeAt(0) === 115 ? c(M.replace("stretch", "fill-available"), C, F, D).replace(":fill-available", ":stretch") : h.replace(E, "-webkit-" + E) + h.replace(E, "-moz-" + E.replace("fill-", "")) + h;
        break;
      case 962:
        if (h = "-webkit-" + h + (h.charCodeAt(5) === 102 ? "-ms-" + h : "") + h, F + D === 211 && h.charCodeAt(13) === 105 && 0 < h.indexOf("transform", 10)) return h.substring(0, h.indexOf(";", 27) + 1).replace(k, "$1-webkit-$2") + h;
    }
    return h;
  }
  function u(M, C) {
    var F = M.indexOf(C === 1 ? ":" : "{"), D = M.substring(0, C !== 3 ? F : 10);
    return F = M.substring(F + 1, M.length - 1), We(C !== 2 ? D : D.replace(Fe, "$1"), F, C);
  }
  function y(M, C) {
    var F = c(C, C.charCodeAt(0), C.charCodeAt(1), C.charCodeAt(2));
    return F !== C + ";" ? F.replace(Ee, " or ($1)").substring(4) : "(" + C + ")";
  }
  function w(M, C, F, D, h, ee, E, ae, Q, te) {
    for (var q = 0, ne = C, de; q < Oe; ++q)
      switch (de = Me[q].call(I, M, ne, F, D, h, ee, E, ae, Q, te)) {
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
  function S(M) {
    switch (M) {
      case void 0:
      case null:
        Oe = Me.length = 0;
        break;
      default:
        if (typeof M == "function") Me[Oe++] = M;
        else if (typeof M == "object") for (var C = 0, F = M.length; C < F; ++C)
          S(M[C]);
        else tt = !!M | 0;
    }
    return S;
  }
  function g(M) {
    return M = M.prefix, M !== void 0 && (We = null, M ? typeof M != "function" ? Te = 1 : (Te = 2, We = M) : Te = 0), g;
  }
  function I(M, C) {
    var F = M;
    if (33 > F.charCodeAt(0) && (F = F.trim()), oe = F, F = [oe], 0 < Oe) {
      var D = w(-1, C, F, F, Re, me, 0, 0, 0, 0);
      D !== void 0 && typeof D == "string" && (C = D);
    }
    var h = t(st, F, C, 0, 0);
    return 0 < Oe && (D = w(-2, h, F, F, Re, me, h.length, 0, 0, 0), D !== void 0 && (h = D)), oe = "", Pe = 0, me = Re = 1, h;
  }
  var T = /^\0+/g, $ = /[\0\r\f]/g, Y = /: */g, A = /zoo|gra/, k = /([,: ])(transform)/g, L = /,\r+?/g, G = /([\t\r\n ])*\f?&/g, H = /@(k\w+)\s*(\S*)\s*/, Z = /::(place)/g, W = /:(read-only)/g, x = /[svh]\w+-[tblr]{2}/, ce = /\(\s*(.*)\s*\)/g, Ee = /([\s\S]*?);/g, Ie = /-self|flex-/g, Fe = /[^]*?(:[rp][el]a[\w-]+)[^]*/, Ge = /stretch|:\s*\w+\-(?:conte|avail)/, ue = /([^-])(image-set\()/, me = 1, Re = 1, Pe = 0, Te = 1, st = [], Me = [], Oe = 0, We = null, tt = 0, oe = "";
  return I.use = S, I.set = g, e !== void 0 && g(e), I;
}
var Yu = {
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
function Gu(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Zu = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, xo = /* @__PURE__ */ Gu(
  function(e) {
    return Zu.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Ps = { exports: {} }, $e = {};
var Eo;
function Xu() {
  if (Eo) return $e;
  Eo = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, i = e ? Symbol.for("react.fragment") : 60107, c = e ? Symbol.for("react.strict_mode") : 60108, u = e ? Symbol.for("react.profiler") : 60114, y = e ? Symbol.for("react.provider") : 60109, w = e ? Symbol.for("react.context") : 60110, S = e ? Symbol.for("react.async_mode") : 60111, g = e ? Symbol.for("react.concurrent_mode") : 60111, I = e ? Symbol.for("react.forward_ref") : 60112, T = e ? Symbol.for("react.suspense") : 60113, $ = e ? Symbol.for("react.suspense_list") : 60120, Y = e ? Symbol.for("react.memo") : 60115, A = e ? Symbol.for("react.lazy") : 60116, k = e ? Symbol.for("react.block") : 60121, L = e ? Symbol.for("react.fundamental") : 60117, G = e ? Symbol.for("react.responder") : 60118, H = e ? Symbol.for("react.scope") : 60119;
  function Z(x) {
    if (typeof x == "object" && x !== null) {
      var ce = x.$$typeof;
      switch (ce) {
        case t:
          switch (x = x.type, x) {
            case S:
            case g:
            case i:
            case u:
            case c:
            case T:
              return x;
            default:
              switch (x = x && x.$$typeof, x) {
                case w:
                case I:
                case A:
                case Y:
                case y:
                  return x;
                default:
                  return ce;
              }
          }
        case r:
          return ce;
      }
    }
  }
  function W(x) {
    return Z(x) === g;
  }
  return $e.AsyncMode = S, $e.ConcurrentMode = g, $e.ContextConsumer = w, $e.ContextProvider = y, $e.Element = t, $e.ForwardRef = I, $e.Fragment = i, $e.Lazy = A, $e.Memo = Y, $e.Portal = r, $e.Profiler = u, $e.StrictMode = c, $e.Suspense = T, $e.isAsyncMode = function(x) {
    return W(x) || Z(x) === S;
  }, $e.isConcurrentMode = W, $e.isContextConsumer = function(x) {
    return Z(x) === w;
  }, $e.isContextProvider = function(x) {
    return Z(x) === y;
  }, $e.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === t;
  }, $e.isForwardRef = function(x) {
    return Z(x) === I;
  }, $e.isFragment = function(x) {
    return Z(x) === i;
  }, $e.isLazy = function(x) {
    return Z(x) === A;
  }, $e.isMemo = function(x) {
    return Z(x) === Y;
  }, $e.isPortal = function(x) {
    return Z(x) === r;
  }, $e.isProfiler = function(x) {
    return Z(x) === u;
  }, $e.isStrictMode = function(x) {
    return Z(x) === c;
  }, $e.isSuspense = function(x) {
    return Z(x) === T;
  }, $e.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === i || x === g || x === u || x === c || x === T || x === $ || typeof x == "object" && x !== null && (x.$$typeof === A || x.$$typeof === Y || x.$$typeof === y || x.$$typeof === w || x.$$typeof === I || x.$$typeof === L || x.$$typeof === G || x.$$typeof === H || x.$$typeof === k);
  }, $e.typeOf = Z, $e;
}
Ps.exports = Xu();
var Ju = Ps.exports, li = Ju, Ku = {
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
}, Qu = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, ed = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Ns = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, ci = {};
ci[li.ForwardRef] = ed;
ci[li.Memo] = Ns;
function _o(e) {
  return li.isMemo(e) ? Ns : ci[e.$$typeof] || Ku;
}
var td = Object.defineProperty, rd = Object.getOwnPropertyNames, To = Object.getOwnPropertySymbols, nd = Object.getOwnPropertyDescriptor, ad = Object.getPrototypeOf, Co = Object.prototype;
function Is(e, t, r) {
  if (typeof t != "string") {
    if (Co) {
      var i = ad(t);
      i && i !== Co && Is(e, i, r);
    }
    var c = rd(t);
    To && (c = c.concat(To(t)));
    for (var u = _o(e), y = _o(t), w = 0; w < c.length; ++w) {
      var S = c[w];
      if (!Qu[S] && !(r && r[S]) && !(y && y[S]) && !(u && u[S])) {
        var g = nd(t, S);
        try {
          td(e, S, g);
        } catch {
        }
      }
    }
  }
  return e;
}
var id = Is;
const od = /* @__PURE__ */ jo(id);
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
var Ao = function(e, t) {
  for (var r = [e[0]], i = 0, c = t.length; i < c; i += 1) r.push(t[i], e[i + 1]);
  return r;
}, Ya = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Rs.typeOf(e);
}, ta = Object.freeze([]), Sr = Object.freeze({});
function hn(e) {
  return typeof e == "function";
}
function Oo(e) {
  return e.displayName || e.name || "Component";
}
function ui(e) {
  return e && typeof e.styledComponentId == "string";
}
var Mr = typeof bt < "u" && bt.env !== void 0 && (bt.env.REACT_APP_SC_ATTR || bt.env.SC_ATTR) || "data-styled", di = typeof window < "u" && "HTMLElement" in window, sd = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof bt < "u" && bt.env !== void 0 && (bt.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && bt.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? bt.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && bt.env.REACT_APP_SC_DISABLE_SPEEDY : bt.env.SC_DISABLE_SPEEDY !== void 0 && bt.env.SC_DISABLE_SPEEDY !== "" ? bt.env.SC_DISABLE_SPEEDY !== "false" && bt.env.SC_DISABLE_SPEEDY : bt.env.NODE_ENV !== "production"));
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
      for (var w = u; w < y; w++) this.groupSizes[w] = 0;
    }
    for (var S = this.indexOfGroup(r + 1), g = 0, I = i.length; g < I; g++) this.tag.insertRule(S, i[g]) && (this.groupSizes[r]++, S++);
  }, t.clearGroup = function(r) {
    if (r < this.length) {
      var i = this.groupSizes[r], c = this.indexOfGroup(r), u = c + i;
      this.groupSizes[r] = 0;
      for (var y = c; y < u; y++) this.tag.deleteRule(c);
    }
  }, t.getGroup = function(r) {
    var i = "";
    if (r >= this.length || this.groupSizes[r] === 0) return i;
    for (var c = this.groupSizes[r], u = this.indexOfGroup(r), y = u + c, w = u; w < y; w++) i += this.tag.getRule(w) + `/*!sc*/
`;
    return i;
  }, e;
}(), Zn = /* @__PURE__ */ new Map(), ra = /* @__PURE__ */ new Map(), dn = 1, Bn = function(e) {
  if (Zn.has(e)) return Zn.get(e);
  for (; ra.has(dn); ) dn++;
  var t = dn++;
  return Zn.set(e, t), ra.set(t, e), t;
}, cd = function(e) {
  return ra.get(e);
}, ud = function(e, t) {
  t >= dn && (dn = t + 1), Zn.set(e, t), ra.set(t, e);
}, dd = "style[" + Mr + '][data-styled-version="5.3.11"]', fd = new RegExp("^" + Mr + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), pd = function(e, t, r) {
  for (var i, c = r.split(","), u = 0, y = c.length; u < y; u++) (i = c[u]) && e.registerName(t, i);
}, hd = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), i = [], c = 0, u = r.length; c < u; c++) {
    var y = r[c].trim();
    if (y) {
      var w = y.match(fd);
      if (w) {
        var S = 0 | parseInt(w[1], 10), g = w[2];
        S !== 0 && (ud(g, S), pd(e, g, w[3]), e.getTag().insertRules(S, i)), i.length = 0;
      } else i.push(y);
    }
  }
}, md = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Ds = function(e) {
  var t = document.head, r = e || t, i = document.createElement("style"), c = function(w) {
    for (var S = w.childNodes, g = S.length; g >= 0; g--) {
      var I = S[g];
      if (I && I.nodeType === 1 && I.hasAttribute(Mr)) return I;
    }
  }(r), u = c !== void 0 ? c.nextSibling : null;
  i.setAttribute(Mr, "active"), i.setAttribute("data-styled-version", "5.3.11");
  var y = md();
  return y && i.setAttribute("nonce", y), r.insertBefore(i, u), i;
}, gd = function() {
  function e(r) {
    var i = this.element = Ds(r);
    i.appendChild(document.createTextNode("")), this.sheet = function(c) {
      if (c.sheet) return c.sheet;
      for (var u = document.styleSheets, y = 0, w = u.length; y < w; y++) {
        var S = u[y];
        if (S.ownerNode === c) return S;
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
    var i = this.element = Ds(r);
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
}(), Ro = di, vd = { isServer: !di, useCSSOMInjection: !sd }, Ls = function() {
  function e(r, i, c) {
    r === void 0 && (r = Sr), i === void 0 && (i = {}), this.options = hr({}, vd, {}, r), this.gs = i, this.names = new Map(c), this.server = !!r.isServer, !this.server && di && Ro && (Ro = !1, function(u) {
      for (var y = document.querySelectorAll(dd), w = 0, S = y.length; w < S; w++) {
        var g = y[w];
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
        var w = cd(y);
        if (w !== void 0) {
          var S = r.names.get(w), g = i.getGroup(y);
          if (S && g && S.size) {
            var I = Mr + ".g" + y + '[id="' + w + '"]', T = "";
            S !== void 0 && S.forEach(function($) {
              $.length > 0 && (T += $ + ",");
            }), u += "" + g + I + '{content:"' + T + `"}/*!sc*/
`;
          }
        }
      }
      return u;
    }(this);
  }, e;
}(), Sd = /(a)(d)/gi, Po = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Ga(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = Po(t % 52) + r;
  return (Po(t % 52) + r).replace(Sd, "$1-$2");
}
var Dr = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, Fs = function(e) {
  return Dr(5381, e);
};
function wd(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (hn(r) && !ui(r)) return !1;
  }
  return !0;
}
var kd = Fs("5.3.11"), xd = function() {
  function e(t, r, i) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (i === void 0 || i.isStatic) && wd(t), this.componentId = r, this.baseHash = Dr(kd, r), this.baseStyle = i, Ls.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, i) {
    var c = this.componentId, u = [];
    if (this.baseStyle && u.push(this.baseStyle.generateAndInjectStyles(t, r, i)), this.isStatic && !i.hash) if (this.staticRulesId && r.hasNameForId(c, this.staticRulesId)) u.push(this.staticRulesId);
    else {
      var y = jr(this.rules, t, r, i).join(""), w = Ga(Dr(this.baseHash, y) >>> 0);
      if (!r.hasNameForId(c, w)) {
        var S = i(y, "." + w, void 0, c);
        r.insertRules(c, w, S);
      }
      u.push(w), this.staticRulesId = w;
    }
    else {
      for (var g = this.rules.length, I = Dr(this.baseHash, i.hash), T = "", $ = 0; $ < g; $++) {
        var Y = this.rules[$];
        if (typeof Y == "string") T += Y;
        else if (Y) {
          var A = jr(Y, t, r, i), k = Array.isArray(A) ? A.join("") : A;
          I = Dr(I, k + $), T += k;
        }
      }
      if (T) {
        var L = Ga(I >>> 0);
        if (!r.hasNameForId(c, L)) {
          var G = i(T, "." + L, void 0, c);
          r.insertRules(c, L, G);
        }
        u.push(L);
      }
    }
    return u.join(" ");
  }, e;
}(), Ed = /^\s*\/\/.*$/gm, _d = [":", "[", ".", "#"];
function Td(e) {
  var t, r, i, c, u = Sr, y = u.options, w = y === void 0 ? Sr : y, S = u.plugins, g = S === void 0 ? ta : S, I = new qu(w), T = [], $ = /* @__PURE__ */ function(k) {
    function L(G) {
      if (G) try {
        k(G + "}");
      } catch {
      }
    }
    return function(G, H, Z, W, x, ce, Ee, Ie, Fe, Ge) {
      switch (G) {
        case 1:
          if (Fe === 0 && H.charCodeAt(0) === 64) return k(H + ";"), "";
          break;
        case 2:
          if (Ie === 0) return H + "/*|*/";
          break;
        case 3:
          switch (Ie) {
            case 102:
            case 112:
              return k(Z[0] + H), "";
            default:
              return H + (Ge === 0 ? "/*|*/" : "");
          }
        case -2:
          H.split("/*|*/}").forEach(L);
      }
    };
  }(function(k) {
    T.push(k);
  }), Y = function(k, L, G) {
    return L === 0 && _d.indexOf(G[r.length]) !== -1 || G.match(c) ? k : "." + t;
  };
  function A(k, L, G, H) {
    H === void 0 && (H = "&");
    var Z = k.replace(Ed, ""), W = L && G ? G + " " + L + " { " + Z + " }" : Z;
    return t = H, r = L, i = new RegExp("\\" + r + "\\b", "g"), c = new RegExp("(\\" + r + "\\b){2,}"), I(G || !L ? "" : L, W);
  }
  return I.use([].concat(g, [function(k, L, G) {
    k === 2 && G.length && G[0].lastIndexOf(r) > 0 && (G[0] = G[0].replace(i, Y));
  }, $, function(k) {
    if (k === -2) {
      var L = T;
      return T = [], L;
    }
  }])), A.hash = g.length ? g.reduce(function(k, L) {
    return L.name || bn(15), Dr(k, L.name);
  }, 5381).toString() : "", A;
}
var Ms = ft.createContext();
Ms.Consumer;
var js = ft.createContext(), Cd = (js.Consumer, new Ls()), Za = Td();
function Ad() {
  return wr(Ms) || Cd;
}
function Od() {
  return wr(js) || Za;
}
var Rd = function() {
  function e(t, r) {
    var i = this;
    this.inject = function(c, u) {
      u === void 0 && (u = Za);
      var y = i.name + u.hash;
      c.hasNameForId(i.id, y) || c.insertRules(i.id, y, u(i.rules, y, "@keyframes"));
    }, this.toString = function() {
      return bn(12, String(i.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Za), this.name + t.hash;
  }, e;
}(), Pd = /([A-Z])/, Nd = /([A-Z])/g, Id = /^ms-/, Dd = function(e) {
  return "-" + e.toLowerCase();
};
function No(e) {
  return Pd.test(e) ? e.replace(Nd, Dd).replace(Id, "-ms-") : e;
}
var Io = function(e) {
  return e == null || e === !1 || e === "";
};
function jr(e, t, r, i) {
  if (Array.isArray(e)) {
    for (var c, u = [], y = 0, w = e.length; y < w; y += 1) (c = jr(e[y], t, r, i)) !== "" && (Array.isArray(c) ? u.push.apply(u, c) : u.push(c));
    return u;
  }
  if (Io(e)) return "";
  if (ui(e)) return "." + e.styledComponentId;
  if (hn(e)) {
    if (typeof (g = e) != "function" || g.prototype && g.prototype.isReactComponent || !t) return e;
    var S = e(t);
    return jr(S, t, r, i);
  }
  var g;
  return e instanceof Rd ? r ? (e.inject(r, i), e.getName(i)) : e : Ya(e) ? function I(T, $) {
    var Y, A, k = [];
    for (var L in T) T.hasOwnProperty(L) && !Io(T[L]) && (Array.isArray(T[L]) && T[L].isCss || hn(T[L]) ? k.push(No(L) + ":", T[L], ";") : Ya(T[L]) ? k.push.apply(k, I(T[L], L)) : k.push(No(L) + ": " + (Y = L, (A = T[L]) == null || typeof A == "boolean" || A === "" ? "" : typeof A != "number" || A === 0 || Y in Yu || Y.startsWith("--") ? String(A).trim() : A + "px") + ";"));
    return $ ? [$ + " {"].concat(k, ["}"]) : k;
  }(e) : e.toString();
}
var Do = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Ld(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
  return hn(e) || Ya(e) ? Do(jr(Ao(ta, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Do(jr(Ao(e, r)));
}
var Fd = function(e, t, r) {
  return r === void 0 && (r = Sr), e.theme !== r.theme && e.theme || t || r.theme;
}, Md = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, jd = /(^-|-$)/g;
function Da(e) {
  return e.replace(Md, "-").replace(jd, "");
}
var zd = function(e) {
  return Ga(Fs(e) >>> 0);
};
function Wn(e) {
  return typeof e == "string" && bt.env.NODE_ENV === "production";
}
var Xa = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, $d = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Ud(e, t, r) {
  var i = e[r];
  Xa(t) && Xa(i) ? zs(i, t) : e[r] = t;
}
function zs(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
  for (var c = 0, u = r; c < u.length; c++) {
    var y = u[c];
    if (Xa(y)) for (var w in y) $d(w) && Ud(e, y[w], w);
  }
  return e;
}
var $s = ft.createContext();
$s.Consumer;
var La = {};
function Us(e, t, r) {
  var i = ui(e), c = !Wn(e), u = t.attrs, y = u === void 0 ? ta : u, w = t.componentId, S = w === void 0 ? function(H, Z) {
    var W = typeof H != "string" ? "sc" : Da(H);
    La[W] = (La[W] || 0) + 1;
    var x = W + "-" + zd("5.3.11" + W + La[W]);
    return Z ? Z + "-" + x : x;
  }(t.displayName, t.parentComponentId) : w, g = t.displayName, I = g === void 0 ? function(H) {
    return Wn(H) ? "styled." + H : "Styled(" + Oo(H) + ")";
  }(e) : g, T = t.displayName && t.componentId ? Da(t.displayName) + "-" + t.componentId : t.componentId || S, $ = i && e.attrs ? Array.prototype.concat(e.attrs, y).filter(Boolean) : y, Y = t.shouldForwardProp;
  i && e.shouldForwardProp && (Y = t.shouldForwardProp ? function(H, Z, W) {
    return e.shouldForwardProp(H, Z, W) && t.shouldForwardProp(H, Z, W);
  } : e.shouldForwardProp);
  var A, k = new xd(r, T, i ? e.componentStyle : void 0), L = k.isStatic && y.length === 0, G = function(H, Z) {
    return function(W, x, ce, Ee) {
      var Ie = W.attrs, Fe = W.componentStyle, Ge = W.defaultProps, ue = W.foldedComponentIds, me = W.shouldForwardProp, Re = W.styledComponentId, Pe = W.target, Te = function(D, h, ee) {
        D === void 0 && (D = Sr);
        var E = hr({}, h, { theme: D }), ae = {};
        return ee.forEach(function(Q) {
          var te, q, ne, de = Q;
          for (te in hn(de) && (de = de(E)), de) E[te] = ae[te] = te === "className" ? (q = ae[te], ne = de[te], q && ne ? q + " " + ne : q || ne) : de[te];
        }), [E, ae];
      }(Fd(x, wr($s), Ge) || Sr, x, Ie), st = Te[0], Me = Te[1], Oe = function(D, h, ee, E) {
        var ae = Ad(), Q = Od(), te = h ? D.generateAndInjectStyles(Sr, ae, Q) : D.generateAndInjectStyles(ee, ae, Q);
        return te;
      }(Fe, Ee, st), We = ce, tt = Me.$as || x.$as || Me.as || x.as || Pe, oe = Wn(tt), M = Me !== x ? hr({}, x, {}, Me) : x, C = {};
      for (var F in M) F[0] !== "$" && F !== "as" && (F === "forwardedAs" ? C.as = M[F] : (me ? me(F, xo, tt) : !oe || xo(F)) && (C[F] = M[F]));
      return x.style && Me.style !== x.style && (C.style = hr({}, x.style, {}, Me.style)), C.className = Array.prototype.concat(ue, Re, Oe !== Re ? Oe : null, x.className, Me.className).filter(Boolean).join(" "), C.ref = We, Fo(tt, C);
    }(A, H, Z, L);
  };
  return G.displayName = I, (A = ft.forwardRef(G)).attrs = $, A.componentStyle = k, A.displayName = I, A.shouldForwardProp = Y, A.foldedComponentIds = i ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : ta, A.styledComponentId = T, A.target = i ? e.target : e, A.withComponent = function(H) {
    var Z = t.componentId, W = function(ce, Ee) {
      if (ce == null) return {};
      var Ie, Fe, Ge = {}, ue = Object.keys(ce);
      for (Fe = 0; Fe < ue.length; Fe++) Ie = ue[Fe], Ee.indexOf(Ie) >= 0 || (Ge[Ie] = ce[Ie]);
      return Ge;
    }(t, ["componentId"]), x = Z && Z + "-" + (Wn(H) ? H : Da(Oo(H)));
    return Us(H, hr({}, W, { attrs: $, componentId: x }), r);
  }, Object.defineProperty(A, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(H) {
    this._foldedDefaultProps = i ? zs({}, e.defaultProps, H) : H;
  } }), Object.defineProperty(A, "toString", { value: function() {
    return "." + A.styledComponentId;
  } }), c && od(A, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), A;
}
var na = function(e) {
  return function t(r, i, c) {
    if (c === void 0 && (c = Sr), !Rs.isValidElementType(i)) return bn(1, String(i));
    var u = function() {
      return r(i, c, Ld.apply(void 0, arguments));
    };
    return u.withConfig = function(y) {
      return t(r, i, hr({}, c, {}, y));
    }, u.attrs = function(y) {
      return t(r, i, hr({}, c, { attrs: Array.prototype.concat(c.attrs, y).filter(Boolean) }));
    }, u;
  }(Us, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  na[e] = na(e);
});
const Bd = na.ul`
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
`, Wd = () => {
  const { feeds: e } = wr(ai);
  return /* @__PURE__ */ dt.jsx(Bd, { "data-testid": "grid-view-container", children: e == null ? void 0 : e.map((t) => /* @__PURE__ */ dt.jsx("li", { children: /* @__PURE__ */ dt.jsx(
    br,
    {
      type: "event",
      eventFormat: "inline",
      eventTime: `<span>
                ${ea(t.startDate, "COMPLETE")} <br /> ${As(
        t.startDate,
        t.endDate
      )}
              </span>`,
      eventLocation: t.location,
      clickable: !!t.alias,
      cardLink: `${t.alias}/?eventDate=${ea(
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
}, Bs = ({ header: e, ctaButton: t, dataSource: r, maxItems: i }) => (fn(() => {
  typeof window < "u" && qo({
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
/* @__PURE__ */ dt.jsx(si, { header: e, ctaButton: t, dataSource: r, maxItems: i, children: /* @__PURE__ */ dt.jsx(Wd, {}) }));
Bs.propTypes = Cs;
const Hd = na.ul`
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
`, Vd = () => {
  const { feeds: e } = wr(ai);
  return /* @__PURE__ */ dt.jsx(Hd, { "data-testid": "list-view-container", children: e == null ? void 0 : e.map((t) => /* @__PURE__ */ dt.jsx("li", { children: /* @__PURE__ */ dt.jsx(
    br,
    {
      type: "event",
      eventFormat: "inline",
      horizontal: !0,
      eventTime: `<span>
                ${ea(t.startDate, "COMPLETE")} <br /> ${As(
        t.startDate,
        t.endDate
      )}
              </span>`,
      eventLocation: t.location,
      clickable: !!t.alias,
      cardLink: `${t.alias}/?eventDate=${ea(
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
}, Ws = ({ header: e, ctaButton: t, dataSource: r, maxItems: i }) => (fn(() => {
  typeof window < "u" && qo({
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
/* @__PURE__ */ dt.jsx(si, { header: e, ctaButton: t, dataSource: r, maxItems: i, children: /* @__PURE__ */ dt.jsx(Vd, {}) }));
Ws.propTypes = Cs;
var Hs, Lo = Mo;
Hs = Lo.createRoot, Lo.hydrateRoot;
const Vs = (e, t, r) => {
  Hs(r).render(ft.createElement(e, t));
}, Gd = ({ targetSelector: e, props: t }) => {
  Vs(Bs, t, document.querySelector(e));
}, Zd = ({ targetSelector: e, props: t }) => {
  Vs(Ws, t, document.querySelector(e));
};
export {
  Bs as CardsGridEvents,
  Ws as CardsListEvents,
  Gd as initCardsGridEventsComponent,
  Zd as initCardsListEventsComponent
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
