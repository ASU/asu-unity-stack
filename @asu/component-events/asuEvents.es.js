import dt, { forwardRef as Ga, Component as rl, createContext as nl, useRef as al, useImperativeHandle as il, useId as ol, useContext as br, createElement as Do, useState as sn, useEffect as dn } from "react";
import Fo from "react-dom";
function Lo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Mo = { exports: {} }, Yr = {};
var Ei;
function sl() {
  if (Ei) return Yr;
  Ei = 1;
  var e = dt, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, c = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(S, w, h) {
    var I, E = {}, $ = null, G = null;
    h !== void 0 && ($ = "" + h), w.key !== void 0 && ($ = "" + w.key), w.ref !== void 0 && (G = w.ref);
    for (I in w) i.call(w, I) && !u.hasOwnProperty(I) && (E[I] = w[I]);
    if (S && S.defaultProps) for (I in w = S.defaultProps, w) E[I] === void 0 && (E[I] = w[I]);
    return { $$typeof: t, type: S, key: $, ref: G, props: E, _owner: c.current };
  }
  return Yr.Fragment = r, Yr.jsx = g, Yr.jsxs = g, Yr;
}
Mo.exports = sl();
var ut = Mo.exports;
const {
  entries: jo,
  setPrototypeOf: Ti,
  isFrozen: ll,
  getPrototypeOf: cl,
  getOwnPropertyDescriptor: ul
} = Object;
let {
  freeze: wt,
  seal: Nt,
  create: zo
} = Object, {
  apply: Na,
  construct: Ia
} = typeof Reflect < "u" && Reflect;
wt || (wt = function(t) {
  return t;
});
Nt || (Nt = function(t) {
  return t;
});
Na || (Na = function(t, r, i) {
  return t.apply(r, i);
});
Ia || (Ia = function(t, r) {
  return new t(...r);
});
const Dn = St(Array.prototype.forEach), dl = St(Array.prototype.lastIndexOf), Ci = St(Array.prototype.pop), Xr = St(Array.prototype.push), fl = St(Array.prototype.splice), Hn = St(String.prototype.toLowerCase), pa = St(String.prototype.toString), Ai = St(String.prototype.match), Qr = St(String.prototype.replace), pl = St(String.prototype.indexOf), hl = St(String.prototype.trim), qt = St(Object.prototype.hasOwnProperty), bt = St(RegExp.prototype.test), Jr = ml(TypeError);
function St(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), c = 1; c < r; c++)
      i[c - 1] = arguments[c];
    return Na(e, t, i);
  };
}
function ml(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++)
      r[i] = arguments[i];
    return Ia(e, r);
  };
}
function Oe(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Hn;
  Ti && Ti(e, null);
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
    qt(e, t) || (e[t] = null);
  return e;
}
function Tr(e) {
  const t = zo(null);
  for (const [r, i] of jo(e))
    qt(e, r) && (Array.isArray(i) ? t[r] = gl(i) : i && typeof i == "object" && i.constructor === Object ? t[r] = Tr(i) : t[r] = i);
  return t;
}
function Zr(e, t) {
  for (; e !== null; ) {
    const i = ul(e, t);
    if (i) {
      if (i.get)
        return St(i.get);
      if (typeof i.value == "function")
        return St(i.value);
    }
    e = cl(e);
  }
  function r() {
    return null;
  }
  return r;
}
const Oi = wt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ha = wt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ma = wt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), yl = wt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ga = wt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), bl = wt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Ri = wt(["#text"]), Pi = wt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), ya = wt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Ni = wt(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Fn = wt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), vl = Nt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), wl = Nt(/<%[\w\W]*|[\w\W]*%>/gm), Sl = Nt(/\$\{[\w\W]*/gm), kl = Nt(/^data-[\-\w.\u00B7-\uFFFF]+$/), xl = Nt(/^aria-[\-\w]+$/), $o = Nt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), _l = Nt(/^(?:\w+script|data):/i), El = Nt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Uo = Nt(/^html$/i), Tl = Nt(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Ii = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: xl,
  ATTR_WHITESPACE: El,
  CUSTOM_ELEMENT: Tl,
  DATA_ATTR: kl,
  DOCTYPE_NAME: Uo,
  ERB_EXPR: wl,
  IS_ALLOWED_URI: $o,
  IS_SCRIPT_OR_DATA: _l,
  MUSTACHE_EXPR: vl,
  TMPLIT_EXPR: Sl
});
const Kr = {
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
      createHTML(g) {
        return g;
      },
      createScriptURL(g) {
        return g;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + u + " could not be created."), null;
  }
}, Di = function() {
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
function Bo() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Cl();
  const t = (m) => Bo(m);
  if (t.version = "3.2.5", t.removed = [], !e || !e.document || e.document.nodeType !== Kr.document || !e.Element)
    return t.isSupported = !1, t;
  let {
    document: r
  } = e;
  const i = r, c = i.currentScript, {
    DocumentFragment: u,
    HTMLTemplateElement: g,
    Node: S,
    Element: w,
    NodeFilter: h,
    NamedNodeMap: I = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: E,
    DOMParser: $,
    trustedTypes: G
  } = e, A = w.prototype, k = Zr(A, "cloneNode"), F = Zr(A, "remove"), Y = Zr(A, "nextSibling"), q = Zr(A, "childNodes"), X = Zr(A, "parentNode");
  if (typeof g == "function") {
    const m = r.createElement("template");
    m.content && m.content.ownerDocument && (r = m.content.ownerDocument);
  }
  let H, x = "";
  const {
    implementation: ce,
    createNodeIterator: _e,
    createDocumentFragment: Ie,
    getElementsByTagName: Fe
  } = r, {
    importNode: qe
  } = i;
  let ue = Di();
  t.isSupported = typeof jo == "function" && typeof X == "function" && ce && ce.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: pe,
    ERB_EXPR: Pe,
    TMPLIT_EXPR: Ne,
    DATA_ATTR: Ce,
    ARIA_ATTR: st,
    IS_SCRIPT_OR_DATA: Le,
    ATTR_WHITESPACE: Ae,
    CUSTOM_ELEMENT: Ue
  } = Ii;
  let {
    IS_ALLOWED_URI: Ke
  } = Ii, oe = null;
  const M = Oe({}, [...Oi, ...ha, ...ma, ...ga, ...Ri]);
  let T = null;
  const L = Oe({}, [...Pi, ...ya, ...Ni, ...Fn]);
  let D = Object.seal(zo(null, {
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
  })), p = null, re = null, C = !0, ne = !0, ee = !1, te = !0, W = !1, ie = !0, se = !1, K = !1, he = !1, Z = !1, le = !1, $e = !1, me = !0, ot = !1;
  const Ge = "user-content-";
  let ge = !0, U = !1, ae = {}, Ye = null;
  const lt = Oe({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let Me = null;
  const Xt = Oe({}, ["audio", "video", "img", "source", "image", "track"]);
  let Rt = null;
  const er = Oe({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), mt = "http://www.w3.org/1998/Math/MathML", ft = "http://www.w3.org/2000/svg", nt = "http://www.w3.org/1999/xhtml";
  let ct = nt, Dt = !1, Ft = null;
  const vr = Oe({}, [mt, ft, nt], pa);
  let it = Oe({}, ["mi", "mo", "mn", "ms", "mtext"]), gt = Oe({}, ["annotation-xml"]);
  const Qt = Oe({}, ["title", "style", "font", "a", "script"]);
  let Ee = null;
  const Lt = ["application/xhtml+xml", "text/html"], Jt = "text/html";
  let ve = null, et = null;
  const Zt = r.createElement("form"), yt = function(b) {
    return b instanceof RegExp || b instanceof Function;
  }, Pt = function() {
    let b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(et && et === b)) {
      if ((!b || typeof b != "object") && (b = {}), b = Tr(b), Ee = // eslint-disable-next-line unicorn/prefer-includes
      Lt.indexOf(b.PARSER_MEDIA_TYPE) === -1 ? Jt : b.PARSER_MEDIA_TYPE, ve = Ee === "application/xhtml+xml" ? pa : Hn, oe = qt(b, "ALLOWED_TAGS") ? Oe({}, b.ALLOWED_TAGS, ve) : M, T = qt(b, "ALLOWED_ATTR") ? Oe({}, b.ALLOWED_ATTR, ve) : L, Ft = qt(b, "ALLOWED_NAMESPACES") ? Oe({}, b.ALLOWED_NAMESPACES, pa) : vr, Rt = qt(b, "ADD_URI_SAFE_ATTR") ? Oe(Tr(er), b.ADD_URI_SAFE_ATTR, ve) : er, Me = qt(b, "ADD_DATA_URI_TAGS") ? Oe(Tr(Xt), b.ADD_DATA_URI_TAGS, ve) : Xt, Ye = qt(b, "FORBID_CONTENTS") ? Oe({}, b.FORBID_CONTENTS, ve) : lt, p = qt(b, "FORBID_TAGS") ? Oe({}, b.FORBID_TAGS, ve) : {}, re = qt(b, "FORBID_ATTR") ? Oe({}, b.FORBID_ATTR, ve) : {}, ae = qt(b, "USE_PROFILES") ? b.USE_PROFILES : !1, C = b.ALLOW_ARIA_ATTR !== !1, ne = b.ALLOW_DATA_ATTR !== !1, ee = b.ALLOW_UNKNOWN_PROTOCOLS || !1, te = b.ALLOW_SELF_CLOSE_IN_ATTR !== !1, W = b.SAFE_FOR_TEMPLATES || !1, ie = b.SAFE_FOR_XML !== !1, se = b.WHOLE_DOCUMENT || !1, Z = b.RETURN_DOM || !1, le = b.RETURN_DOM_FRAGMENT || !1, $e = b.RETURN_TRUSTED_TYPE || !1, he = b.FORCE_BODY || !1, me = b.SANITIZE_DOM !== !1, ot = b.SANITIZE_NAMED_PROPS || !1, ge = b.KEEP_CONTENT !== !1, U = b.IN_PLACE || !1, Ke = b.ALLOWED_URI_REGEXP || $o, ct = b.NAMESPACE || nt, it = b.MATHML_TEXT_INTEGRATION_POINTS || it, gt = b.HTML_INTEGRATION_POINTS || gt, D = b.CUSTOM_ELEMENT_HANDLING || {}, b.CUSTOM_ELEMENT_HANDLING && yt(b.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (D.tagNameCheck = b.CUSTOM_ELEMENT_HANDLING.tagNameCheck), b.CUSTOM_ELEMENT_HANDLING && yt(b.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (D.attributeNameCheck = b.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), b.CUSTOM_ELEMENT_HANDLING && typeof b.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (D.allowCustomizedBuiltInElements = b.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), W && (ne = !1), le && (Z = !0), ae && (oe = Oe({}, Ri), T = [], ae.html === !0 && (Oe(oe, Oi), Oe(T, Pi)), ae.svg === !0 && (Oe(oe, ha), Oe(T, ya), Oe(T, Fn)), ae.svgFilters === !0 && (Oe(oe, ma), Oe(T, ya), Oe(T, Fn)), ae.mathMl === !0 && (Oe(oe, ga), Oe(T, Ni), Oe(T, Fn))), b.ADD_TAGS && (oe === M && (oe = Tr(oe)), Oe(oe, b.ADD_TAGS, ve)), b.ADD_ATTR && (T === L && (T = Tr(T)), Oe(T, b.ADD_ATTR, ve)), b.ADD_URI_SAFE_ATTR && Oe(Rt, b.ADD_URI_SAFE_ATTR, ve), b.FORBID_CONTENTS && (Ye === lt && (Ye = Tr(Ye)), Oe(Ye, b.FORBID_CONTENTS, ve)), ge && (oe["#text"] = !0), se && Oe(oe, ["html", "head", "body"]), oe.table && (Oe(oe, ["tbody"]), delete p.tbody), b.TRUSTED_TYPES_POLICY) {
        if (typeof b.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Jr('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof b.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Jr('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        H = b.TRUSTED_TYPES_POLICY, x = H.createHTML("");
      } else
        H === void 0 && (H = Al(G, c)), H !== null && typeof x == "string" && (x = H.createHTML(""));
      wt && wt(b), et = b;
    }
  }, Mt = Oe({}, [...ha, ...ma, ...yl]), jt = Oe({}, [...ga, ...bl]), dr = function(b) {
    let _ = X(b);
    (!_ || !_.tagName) && (_ = {
      namespaceURI: ct,
      tagName: "template"
    });
    const V = Hn(b.tagName), ye = Hn(_.tagName);
    return Ft[b.namespaceURI] ? b.namespaceURI === ft ? _.namespaceURI === nt ? V === "svg" : _.namespaceURI === mt ? V === "svg" && (ye === "annotation-xml" || it[ye]) : !!Mt[V] : b.namespaceURI === mt ? _.namespaceURI === nt ? V === "math" : _.namespaceURI === ft ? V === "math" && gt[ye] : !!jt[V] : b.namespaceURI === nt ? _.namespaceURI === ft && !gt[ye] || _.namespaceURI === mt && !it[ye] ? !1 : !jt[V] && (Qt[V] || !Mt[V]) : !!(Ee === "application/xhtml+xml" && Ft[b.namespaceURI]) : !1;
  }, at = function(b) {
    Xr(t.removed, {
      element: b
    });
    try {
      X(b).removeChild(b);
    } catch {
      F(b);
    }
  }, _t = function(b, _) {
    try {
      Xr(t.removed, {
        attribute: _.getAttributeNode(b),
        from: _
      });
    } catch {
      Xr(t.removed, {
        attribute: null,
        from: _
      });
    }
    if (_.removeAttribute(b), b === "is")
      if (Z || le)
        try {
          at(_);
        } catch {
        }
      else
        try {
          _.setAttribute(b, "");
        } catch {
        }
  }, tr = function(b) {
    let _ = null, V = null;
    if (he)
      b = "<remove></remove>" + b;
    else {
      const De = Ai(b, /^[\r\n\t ]+/);
      V = De && De[0];
    }
    Ee === "application/xhtml+xml" && ct === nt && (b = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + b + "</body></html>");
    const ye = H ? H.createHTML(b) : b;
    if (ct === nt)
      try {
        _ = new $().parseFromString(ye, Ee);
      } catch {
      }
    if (!_ || !_.documentElement) {
      _ = ce.createDocument(ct, "template", null);
      try {
        _.documentElement.innerHTML = Dt ? x : ye;
      } catch {
      }
    }
    const Se = _.body || _.documentElement;
    return b && V && Se.insertBefore(r.createTextNode(V), Se.childNodes[0] || null), ct === nt ? Fe.call(_, se ? "html" : "body")[0] : se ? _.documentElement : Se;
  }, rr = function(b) {
    return _e.call(
      b.ownerDocument || b,
      b,
      // eslint-disable-next-line no-bitwise
      h.SHOW_ELEMENT | h.SHOW_COMMENT | h.SHOW_TEXT | h.SHOW_PROCESSING_INSTRUCTION | h.SHOW_CDATA_SECTION,
      null
    );
  }, Et = function(b) {
    return b instanceof E && (typeof b.nodeName != "string" || typeof b.textContent != "string" || typeof b.removeChild != "function" || !(b.attributes instanceof I) || typeof b.removeAttribute != "function" || typeof b.setAttribute != "function" || typeof b.namespaceURI != "string" || typeof b.insertBefore != "function" || typeof b.hasChildNodes != "function");
  }, Kt = function(b) {
    return typeof S == "function" && b instanceof S;
  };
  function Xe(m, b, _) {
    Dn(m, (V) => {
      V.call(t, b, _, et);
    });
  }
  const zt = function(b) {
    let _ = null;
    if (Xe(ue.beforeSanitizeElements, b, null), Et(b))
      return at(b), !0;
    const V = ve(b.nodeName);
    if (Xe(ue.uponSanitizeElement, b, {
      tagName: V,
      allowedTags: oe
    }), b.hasChildNodes() && !Kt(b.firstElementChild) && bt(/<[/\w!]/g, b.innerHTML) && bt(/<[/\w!]/g, b.textContent) || b.nodeType === Kr.progressingInstruction || ie && b.nodeType === Kr.comment && bt(/<[/\w]/g, b.data))
      return at(b), !0;
    if (!oe[V] || p[V]) {
      if (!p[V] && Tt(V) && (D.tagNameCheck instanceof RegExp && bt(D.tagNameCheck, V) || D.tagNameCheck instanceof Function && D.tagNameCheck(V)))
        return !1;
      if (ge && !Ye[V]) {
        const ye = X(b) || b.parentNode, Se = q(b) || b.childNodes;
        if (Se && ye) {
          const De = Se.length;
          for (let we = De - 1; we >= 0; --we) {
            const Qe = k(Se[we], !0);
            Qe.__removalCount = (b.__removalCount || 0) + 1, ye.insertBefore(Qe, Y(b));
          }
        }
      }
      return at(b), !0;
    }
    return b instanceof w && !dr(b) || (V === "noscript" || V === "noembed" || V === "noframes") && bt(/<\/no(script|embed|frames)/i, b.innerHTML) ? (at(b), !0) : (W && b.nodeType === Kr.text && (_ = b.textContent, Dn([pe, Pe, Ne], (ye) => {
      _ = Qr(_, ye, " ");
    }), b.textContent !== _ && (Xr(t.removed, {
      element: b.cloneNode()
    }), b.textContent = _)), Xe(ue.afterSanitizeElements, b, null), !1);
  }, nr = function(b, _, V) {
    if (me && (_ === "id" || _ === "name") && (V in r || V in Zt))
      return !1;
    if (!(ne && !re[_] && bt(Ce, _))) {
      if (!(C && bt(st, _))) {
        if (!T[_] || re[_]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(Tt(b) && (D.tagNameCheck instanceof RegExp && bt(D.tagNameCheck, b) || D.tagNameCheck instanceof Function && D.tagNameCheck(b)) && (D.attributeNameCheck instanceof RegExp && bt(D.attributeNameCheck, _) || D.attributeNameCheck instanceof Function && D.attributeNameCheck(_)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            _ === "is" && D.allowCustomizedBuiltInElements && (D.tagNameCheck instanceof RegExp && bt(D.tagNameCheck, V) || D.tagNameCheck instanceof Function && D.tagNameCheck(V)))
          ) return !1;
        } else if (!Rt[_]) {
          if (!bt(Ke, Qr(V, Ae, ""))) {
            if (!((_ === "src" || _ === "xlink:href" || _ === "href") && b !== "script" && pl(V, "data:") === 0 && Me[b])) {
              if (!(ee && !bt(Le, Qr(V, Ae, "")))) {
                if (V)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, Tt = function(b) {
    return b !== "annotation-xml" && Ai(b, Ue);
  }, ar = function(b) {
    Xe(ue.beforeSanitizeAttributes, b, null);
    const {
      attributes: _
    } = b;
    if (!_ || Et(b))
      return;
    const V = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: T,
      forceKeepAttr: void 0
    };
    let ye = _.length;
    for (; ye--; ) {
      const Se = _[ye], {
        name: De,
        namespaceURI: we,
        value: Qe
      } = Se, Ve = ve(De);
      let tt = De === "value" ? Qe : hl(Qe);
      if (V.attrName = Ve, V.attrValue = tt, V.keepAttr = !0, V.forceKeepAttr = void 0, Xe(ue.uponSanitizeAttribute, b, V), tt = V.attrValue, ot && (Ve === "id" || Ve === "name") && (_t(De, b), tt = Ge + tt), ie && bt(/((--!?|])>)|<\/(style|title)/i, tt)) {
        _t(De, b);
        continue;
      }
      if (V.forceKeepAttr || (_t(De, b), !V.keepAttr))
        continue;
      if (!te && bt(/\/>/i, tt)) {
        _t(De, b);
        continue;
      }
      W && Dn([pe, Pe, Ne], ($t) => {
        tt = Qr(tt, $t, " ");
      });
      const or = ve(b.nodeName);
      if (nr(or, Ve, tt)) {
        if (H && typeof G == "object" && typeof G.getAttributeType == "function" && !we)
          switch (G.getAttributeType(or, Ve)) {
            case "TrustedHTML": {
              tt = H.createHTML(tt);
              break;
            }
            case "TrustedScriptURL": {
              tt = H.createScriptURL(tt);
              break;
            }
          }
        try {
          we ? b.setAttributeNS(we, De, tt) : b.setAttribute(De, tt), Et(b) ? at(b) : Ci(t.removed);
        } catch {
        }
      }
    }
    Xe(ue.afterSanitizeAttributes, b, null);
  }, ir = function m(b) {
    let _ = null;
    const V = rr(b);
    for (Xe(ue.beforeSanitizeShadowDOM, b, null); _ = V.nextNode(); )
      Xe(ue.uponSanitizeShadowNode, _, null), zt(_), ar(_), _.content instanceof u && m(_.content);
    Xe(ue.afterSanitizeShadowDOM, b, null);
  };
  return t.sanitize = function(m) {
    let b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ = null, V = null, ye = null, Se = null;
    if (Dt = !m, Dt && (m = "<!-->"), typeof m != "string" && !Kt(m))
      if (typeof m.toString == "function") {
        if (m = m.toString(), typeof m != "string")
          throw Jr("dirty is not a string, aborting");
      } else
        throw Jr("toString is not a function");
    if (!t.isSupported)
      return m;
    if (K || Pt(b), t.removed = [], typeof m == "string" && (U = !1), U) {
      if (m.nodeName) {
        const Qe = ve(m.nodeName);
        if (!oe[Qe] || p[Qe])
          throw Jr("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (m instanceof S)
      _ = tr("<!---->"), V = _.ownerDocument.importNode(m, !0), V.nodeType === Kr.element && V.nodeName === "BODY" || V.nodeName === "HTML" ? _ = V : _.appendChild(V);
    else {
      if (!Z && !W && !se && // eslint-disable-next-line unicorn/prefer-includes
      m.indexOf("<") === -1)
        return H && $e ? H.createHTML(m) : m;
      if (_ = tr(m), !_)
        return Z ? null : $e ? x : "";
    }
    _ && he && at(_.firstChild);
    const De = rr(U ? m : _);
    for (; ye = De.nextNode(); )
      zt(ye), ar(ye), ye.content instanceof u && ir(ye.content);
    if (U)
      return m;
    if (Z) {
      if (le)
        for (Se = Ie.call(_.ownerDocument); _.firstChild; )
          Se.appendChild(_.firstChild);
      else
        Se = _;
      return (T.shadowroot || T.shadowrootmode) && (Se = qe.call(i, Se, !0)), Se;
    }
    let we = se ? _.outerHTML : _.innerHTML;
    return se && oe["!doctype"] && _.ownerDocument && _.ownerDocument.doctype && _.ownerDocument.doctype.name && bt(Uo, _.ownerDocument.doctype.name) && (we = "<!DOCTYPE " + _.ownerDocument.doctype.name + `>
` + we), W && Dn([pe, Pe, Ne], (Qe) => {
      we = Qr(we, Qe, " ");
    }), H && $e ? H.createHTML(we) : we;
  }, t.setConfig = function() {
    let m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Pt(m), K = !0;
  }, t.clearConfig = function() {
    et = null, K = !1;
  }, t.isValidAttribute = function(m, b, _) {
    et || Pt({});
    const V = ve(m), ye = ve(b);
    return nr(V, ye, _);
  }, t.addHook = function(m, b) {
    typeof b == "function" && Xr(ue[m], b);
  }, t.removeHook = function(m, b) {
    if (b !== void 0) {
      const _ = dl(ue[m], b);
      return _ === -1 ? void 0 : fl(ue[m], _, 1)[0];
    }
    return Ci(ue[m]);
  }, t.removeHooks = function(m) {
    ue[m] = [];
  }, t.removeAllHooks = function() {
    ue = Di();
  }, t;
}
Bo();
var Wo = { exports: {} }, ba, Fi;
function Ol() {
  if (Fi) return ba;
  Fi = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ba = e, ba;
}
var va, Li;
function Rl() {
  if (Li) return va;
  Li = 1;
  var e = Ol();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, va = function() {
    function i(g, S, w, h, I, E) {
      if (E !== e) {
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
  }, va;
}
Wo.exports = Rl()();
var Pl = Wo.exports;
const He = /* @__PURE__ */ Lo(Pl);
He.shape({
  event: He.string,
  action: He.string,
  name: He.string,
  region: He.string,
  section: He.string,
  component: He.string,
  type: He.string,
  text: He.string
});
const hn = ({ children: e }) => /* @__PURE__ */ ut.jsx(ut.Fragment, { children: e });
hn.propTypes = {
  children: He.oneOfType([
    He.arrayOf(He.node),
    He.node,
    He.string
  ])
};
var Nl = { exports: {} };
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var u = "", g = 0; g < arguments.length; g++) {
        var S = arguments[g];
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
      var g = "";
      for (var S in u)
        t.call(u, S) && u[S] && (g = c(g, S));
      return g;
    }
    function c(u, g) {
      return g ? u ? u + " " + g : u + g : u;
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(Nl);
({
  ...hn.propTypes
});
const Ho = ({ children: e, className: t = "container", ...r }) => /* @__PURE__ */ ut.jsx("div", { className: t, ...r, children: /* @__PURE__ */ ut.jsx("div", { className: "row", children: e }) });
Ho.propTypes = {
  children: hn.propTypes.children
};
({
  ...Ho.propTypes
});
hn.propTypes.children, He.oneOf(["0", "3", "4", "6", "8", "9", "12"]);
hn.propTypes.children;
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
function Ya(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Vo = { exports: {} }, en = {}, Mi;
function Il() {
  if (Mi) return en;
  Mi = 1;
  var e = dt, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, c = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(S, w, h) {
    var I, E = {}, $ = null, G = null;
    h !== void 0 && ($ = "" + h), w.key !== void 0 && ($ = "" + w.key), w.ref !== void 0 && (G = w.ref);
    for (I in w) i.call(w, I) && !u.hasOwnProperty(I) && (E[I] = w[I]);
    if (S && S.defaultProps) for (I in w = S.defaultProps, w) E[I] === void 0 && (E[I] = w[I]);
    return { $$typeof: t, type: S, key: $, ref: G, props: E, _owner: c.current };
  }
  return en.Fragment = r, en.jsx = g, en.jsxs = g, en;
}
Vo.exports = Il();
var B = Vo.exports, Go = { exports: {} }, wa, ji;
function Dl() {
  if (ji) return wa;
  ji = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return wa = e, wa;
}
var Sa, zi;
function Fl() {
  if (zi) return Sa;
  zi = 1;
  var e = Dl();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Sa = function() {
    function i(g, S, w, h, I, E) {
      if (E !== e) {
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
  }, Sa;
}
Go.exports = Fl()();
var Ll = Go.exports;
const o = /* @__PURE__ */ Ya(Ll), Ml = () => {
  const [e, t] = sn(null), [r, i] = sn(!1), [c, u] = sn(null), [g, S] = sn("");
  return dn(() => {
    g && (() => {
      u(null), i(!0);
      try {
        fetch(g).then((w) => w.json()).then((w) => {
          t(w), i(!1);
        }).catch((w) => {
          u(w), i(!1);
        });
      } catch (w) {
        u(w);
      }
    })();
  }, [g]), [{ data: e, loading: r, error: c }, S];
}, jl = (e) => (e || []).join(" "), {
  entries: Yo,
  setPrototypeOf: $i,
  isFrozen: zl,
  getPrototypeOf: $l,
  getOwnPropertyDescriptor: Ul
} = Object;
let {
  freeze: kt,
  seal: It,
  create: Xo
} = Object, {
  apply: Da,
  construct: Fa
} = typeof Reflect < "u" && Reflect;
kt || (kt = function(e) {
  return e;
});
It || (It = function(e) {
  return e;
});
Da || (Da = function(e, t, r) {
  return e.apply(t, r);
});
Fa || (Fa = function(e, t) {
  return new e(...t);
});
const Ln = xt(Array.prototype.forEach), Bl = xt(Array.prototype.lastIndexOf), Ui = xt(Array.prototype.pop), tn = xt(Array.prototype.push), Wl = xt(Array.prototype.splice), qn = xt(String.prototype.toLowerCase), ka = xt(String.prototype.toString), Bi = xt(String.prototype.match), rn = xt(String.prototype.replace), Hl = xt(String.prototype.indexOf), ql = xt(String.prototype.trim), Vt = xt(Object.prototype.hasOwnProperty), vt = xt(RegExp.prototype.test), nn = Vl(TypeError);
function xt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), c = 1; c < r; c++)
      i[c - 1] = arguments[c];
    return Da(e, t, i);
  };
}
function Vl(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++)
      r[i] = arguments[i];
    return Fa(e, r);
  };
}
function Re(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : qn;
  $i && $i(e, null);
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
function Gl(e) {
  for (let t = 0; t < e.length; t++)
    Vt(e, t) || (e[t] = null);
  return e;
}
function Cr(e) {
  const t = Xo(null);
  for (const [r, i] of Yo(e))
    Vt(e, r) && (Array.isArray(i) ? t[r] = Gl(i) : i && typeof i == "object" && i.constructor === Object ? t[r] = Cr(i) : t[r] = i);
  return t;
}
function an(e, t) {
  for (; e !== null; ) {
    const i = Ul(e, t);
    if (i) {
      if (i.get)
        return xt(i.get);
      if (typeof i.value == "function")
        return xt(i.value);
    }
    e = $l(e);
  }
  function r() {
    return null;
  }
  return r;
}
const Wi = kt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), xa = kt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), _a = kt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Yl = kt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Ea = kt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Xl = kt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Hi = kt(["#text"]), qi = kt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), Ta = kt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Vi = kt(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Mn = kt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Ql = It(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Jl = It(/<%[\w\W]*|[\w\W]*%>/gm), Zl = It(/\$\{[\w\W]*/gm), Kl = It(/^data-[\-\w.\u00B7-\uFFFF]+$/), ec = It(/^aria-[\-\w]+$/), Qo = It(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), tc = It(/^(?:\w+script|data):/i), rc = It(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Jo = It(/^html$/i), nc = It(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Gi = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: ec,
  ATTR_WHITESPACE: rc,
  CUSTOM_ELEMENT: nc,
  DATA_ATTR: Kl,
  DOCTYPE_NAME: Jo,
  ERB_EXPR: Jl,
  IS_ALLOWED_URI: Qo,
  IS_SCRIPT_OR_DATA: tc,
  MUSTACHE_EXPR: Ql,
  TMPLIT_EXPR: Zl
});
const on = {
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
}, Yi = function() {
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
function Zo() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ac();
  const t = (m) => Zo(m);
  if (t.version = "3.2.5", t.removed = [], !e || !e.document || e.document.nodeType !== on.document || !e.Element)
    return t.isSupported = !1, t;
  let {
    document: r
  } = e;
  const i = r, c = i.currentScript, {
    DocumentFragment: u,
    HTMLTemplateElement: g,
    Node: S,
    Element: w,
    NodeFilter: h,
    NamedNodeMap: I = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: E,
    DOMParser: $,
    trustedTypes: G
  } = e, A = w.prototype, k = an(A, "cloneNode"), F = an(A, "remove"), Y = an(A, "nextSibling"), q = an(A, "childNodes"), X = an(A, "parentNode");
  if (typeof g == "function") {
    const m = r.createElement("template");
    m.content && m.content.ownerDocument && (r = m.content.ownerDocument);
  }
  let H, x = "";
  const {
    implementation: ce,
    createNodeIterator: _e,
    createDocumentFragment: Ie,
    getElementsByTagName: Fe
  } = r, {
    importNode: qe
  } = i;
  let ue = Yi();
  t.isSupported = typeof Yo == "function" && typeof X == "function" && ce && ce.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: pe,
    ERB_EXPR: Pe,
    TMPLIT_EXPR: Ne,
    DATA_ATTR: Ce,
    ARIA_ATTR: st,
    IS_SCRIPT_OR_DATA: Le,
    ATTR_WHITESPACE: Ae,
    CUSTOM_ELEMENT: Ue
  } = Gi;
  let {
    IS_ALLOWED_URI: Ke
  } = Gi, oe = null;
  const M = Re({}, [...Wi, ...xa, ..._a, ...Ea, ...Hi]);
  let T = null;
  const L = Re({}, [...qi, ...Ta, ...Vi, ...Mn]);
  let D = Object.seal(Xo(null, {
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
  })), p = null, re = null, C = !0, ne = !0, ee = !1, te = !0, W = !1, ie = !0, se = !1, K = !1, he = !1, Z = !1, le = !1, $e = !1, me = !0, ot = !1;
  const Ge = "user-content-";
  let ge = !0, U = !1, ae = {}, Ye = null;
  const lt = Re({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let Me = null;
  const Xt = Re({}, ["audio", "video", "img", "source", "image", "track"]);
  let Rt = null;
  const er = Re({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), mt = "http://www.w3.org/1998/Math/MathML", ft = "http://www.w3.org/2000/svg", nt = "http://www.w3.org/1999/xhtml";
  let ct = nt, Dt = !1, Ft = null;
  const vr = Re({}, [mt, ft, nt], ka);
  let it = Re({}, ["mi", "mo", "mn", "ms", "mtext"]), gt = Re({}, ["annotation-xml"]);
  const Qt = Re({}, ["title", "style", "font", "a", "script"]);
  let Ee = null;
  const Lt = ["application/xhtml+xml", "text/html"], Jt = "text/html";
  let ve = null, et = null;
  const Zt = r.createElement("form"), yt = function(m) {
    return m instanceof RegExp || m instanceof Function;
  }, Pt = function() {
    let m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(et && et === m)) {
      if ((!m || typeof m != "object") && (m = {}), m = Cr(m), Ee = // eslint-disable-next-line unicorn/prefer-includes
      Lt.indexOf(m.PARSER_MEDIA_TYPE) === -1 ? Jt : m.PARSER_MEDIA_TYPE, ve = Ee === "application/xhtml+xml" ? ka : qn, oe = Vt(m, "ALLOWED_TAGS") ? Re({}, m.ALLOWED_TAGS, ve) : M, T = Vt(m, "ALLOWED_ATTR") ? Re({}, m.ALLOWED_ATTR, ve) : L, Ft = Vt(m, "ALLOWED_NAMESPACES") ? Re({}, m.ALLOWED_NAMESPACES, ka) : vr, Rt = Vt(m, "ADD_URI_SAFE_ATTR") ? Re(Cr(er), m.ADD_URI_SAFE_ATTR, ve) : er, Me = Vt(m, "ADD_DATA_URI_TAGS") ? Re(Cr(Xt), m.ADD_DATA_URI_TAGS, ve) : Xt, Ye = Vt(m, "FORBID_CONTENTS") ? Re({}, m.FORBID_CONTENTS, ve) : lt, p = Vt(m, "FORBID_TAGS") ? Re({}, m.FORBID_TAGS, ve) : {}, re = Vt(m, "FORBID_ATTR") ? Re({}, m.FORBID_ATTR, ve) : {}, ae = Vt(m, "USE_PROFILES") ? m.USE_PROFILES : !1, C = m.ALLOW_ARIA_ATTR !== !1, ne = m.ALLOW_DATA_ATTR !== !1, ee = m.ALLOW_UNKNOWN_PROTOCOLS || !1, te = m.ALLOW_SELF_CLOSE_IN_ATTR !== !1, W = m.SAFE_FOR_TEMPLATES || !1, ie = m.SAFE_FOR_XML !== !1, se = m.WHOLE_DOCUMENT || !1, Z = m.RETURN_DOM || !1, le = m.RETURN_DOM_FRAGMENT || !1, $e = m.RETURN_TRUSTED_TYPE || !1, he = m.FORCE_BODY || !1, me = m.SANITIZE_DOM !== !1, ot = m.SANITIZE_NAMED_PROPS || !1, ge = m.KEEP_CONTENT !== !1, U = m.IN_PLACE || !1, Ke = m.ALLOWED_URI_REGEXP || Qo, ct = m.NAMESPACE || nt, it = m.MATHML_TEXT_INTEGRATION_POINTS || it, gt = m.HTML_INTEGRATION_POINTS || gt, D = m.CUSTOM_ELEMENT_HANDLING || {}, m.CUSTOM_ELEMENT_HANDLING && yt(m.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (D.tagNameCheck = m.CUSTOM_ELEMENT_HANDLING.tagNameCheck), m.CUSTOM_ELEMENT_HANDLING && yt(m.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (D.attributeNameCheck = m.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), m.CUSTOM_ELEMENT_HANDLING && typeof m.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (D.allowCustomizedBuiltInElements = m.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), W && (ne = !1), le && (Z = !0), ae && (oe = Re({}, Hi), T = [], ae.html === !0 && (Re(oe, Wi), Re(T, qi)), ae.svg === !0 && (Re(oe, xa), Re(T, Ta), Re(T, Mn)), ae.svgFilters === !0 && (Re(oe, _a), Re(T, Ta), Re(T, Mn)), ae.mathMl === !0 && (Re(oe, Ea), Re(T, Vi), Re(T, Mn))), m.ADD_TAGS && (oe === M && (oe = Cr(oe)), Re(oe, m.ADD_TAGS, ve)), m.ADD_ATTR && (T === L && (T = Cr(T)), Re(T, m.ADD_ATTR, ve)), m.ADD_URI_SAFE_ATTR && Re(Rt, m.ADD_URI_SAFE_ATTR, ve), m.FORBID_CONTENTS && (Ye === lt && (Ye = Cr(Ye)), Re(Ye, m.FORBID_CONTENTS, ve)), ge && (oe["#text"] = !0), se && Re(oe, ["html", "head", "body"]), oe.table && (Re(oe, ["tbody"]), delete p.tbody), m.TRUSTED_TYPES_POLICY) {
        if (typeof m.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw nn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof m.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw nn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        H = m.TRUSTED_TYPES_POLICY, x = H.createHTML("");
      } else
        H === void 0 && (H = ic(G, c)), H !== null && typeof x == "string" && (x = H.createHTML(""));
      kt && kt(m), et = m;
    }
  }, Mt = Re({}, [...xa, ..._a, ...Yl]), jt = Re({}, [...Ea, ...Xl]), dr = function(m) {
    let b = X(m);
    (!b || !b.tagName) && (b = {
      namespaceURI: ct,
      tagName: "template"
    });
    const _ = qn(m.tagName), V = qn(b.tagName);
    return Ft[m.namespaceURI] ? m.namespaceURI === ft ? b.namespaceURI === nt ? _ === "svg" : b.namespaceURI === mt ? _ === "svg" && (V === "annotation-xml" || it[V]) : !!Mt[_] : m.namespaceURI === mt ? b.namespaceURI === nt ? _ === "math" : b.namespaceURI === ft ? _ === "math" && gt[V] : !!jt[_] : m.namespaceURI === nt ? b.namespaceURI === ft && !gt[V] || b.namespaceURI === mt && !it[V] ? !1 : !jt[_] && (Qt[_] || !Mt[_]) : !!(Ee === "application/xhtml+xml" && Ft[m.namespaceURI]) : !1;
  }, at = function(m) {
    tn(t.removed, {
      element: m
    });
    try {
      X(m).removeChild(m);
    } catch {
      F(m);
    }
  }, _t = function(m, b) {
    try {
      tn(t.removed, {
        attribute: b.getAttributeNode(m),
        from: b
      });
    } catch {
      tn(t.removed, {
        attribute: null,
        from: b
      });
    }
    if (b.removeAttribute(m), m === "is")
      if (Z || le)
        try {
          at(b);
        } catch {
        }
      else
        try {
          b.setAttribute(m, "");
        } catch {
        }
  }, tr = function(m) {
    let b = null, _ = null;
    if (he)
      m = "<remove></remove>" + m;
    else {
      const Se = Bi(m, /^[\r\n\t ]+/);
      _ = Se && Se[0];
    }
    Ee === "application/xhtml+xml" && ct === nt && (m = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + m + "</body></html>");
    const V = H ? H.createHTML(m) : m;
    if (ct === nt)
      try {
        b = new $().parseFromString(V, Ee);
      } catch {
      }
    if (!b || !b.documentElement) {
      b = ce.createDocument(ct, "template", null);
      try {
        b.documentElement.innerHTML = Dt ? x : V;
      } catch {
      }
    }
    const ye = b.body || b.documentElement;
    return m && _ && ye.insertBefore(r.createTextNode(_), ye.childNodes[0] || null), ct === nt ? Fe.call(b, se ? "html" : "body")[0] : se ? b.documentElement : ye;
  }, rr = function(m) {
    return _e.call(
      m.ownerDocument || m,
      m,
      // eslint-disable-next-line no-bitwise
      h.SHOW_ELEMENT | h.SHOW_COMMENT | h.SHOW_TEXT | h.SHOW_PROCESSING_INSTRUCTION | h.SHOW_CDATA_SECTION,
      null
    );
  }, Et = function(m) {
    return m instanceof E && (typeof m.nodeName != "string" || typeof m.textContent != "string" || typeof m.removeChild != "function" || !(m.attributes instanceof I) || typeof m.removeAttribute != "function" || typeof m.setAttribute != "function" || typeof m.namespaceURI != "string" || typeof m.insertBefore != "function" || typeof m.hasChildNodes != "function");
  }, Kt = function(m) {
    return typeof S == "function" && m instanceof S;
  };
  function Xe(m, b, _) {
    Ln(m, (V) => {
      V.call(t, b, _, et);
    });
  }
  const zt = function(m) {
    let b = null;
    if (Xe(ue.beforeSanitizeElements, m, null), Et(m))
      return at(m), !0;
    const _ = ve(m.nodeName);
    if (Xe(ue.uponSanitizeElement, m, {
      tagName: _,
      allowedTags: oe
    }), m.hasChildNodes() && !Kt(m.firstElementChild) && vt(/<[/\w!]/g, m.innerHTML) && vt(/<[/\w!]/g, m.textContent) || m.nodeType === on.progressingInstruction || ie && m.nodeType === on.comment && vt(/<[/\w]/g, m.data))
      return at(m), !0;
    if (!oe[_] || p[_]) {
      if (!p[_] && Tt(_) && (D.tagNameCheck instanceof RegExp && vt(D.tagNameCheck, _) || D.tagNameCheck instanceof Function && D.tagNameCheck(_)))
        return !1;
      if (ge && !Ye[_]) {
        const V = X(m) || m.parentNode, ye = q(m) || m.childNodes;
        if (ye && V) {
          const Se = ye.length;
          for (let De = Se - 1; De >= 0; --De) {
            const we = k(ye[De], !0);
            we.__removalCount = (m.__removalCount || 0) + 1, V.insertBefore(we, Y(m));
          }
        }
      }
      return at(m), !0;
    }
    return m instanceof w && !dr(m) || (_ === "noscript" || _ === "noembed" || _ === "noframes") && vt(/<\/no(script|embed|frames)/i, m.innerHTML) ? (at(m), !0) : (W && m.nodeType === on.text && (b = m.textContent, Ln([pe, Pe, Ne], (V) => {
      b = rn(b, V, " ");
    }), m.textContent !== b && (tn(t.removed, {
      element: m.cloneNode()
    }), m.textContent = b)), Xe(ue.afterSanitizeElements, m, null), !1);
  }, nr = function(m, b, _) {
    if (me && (b === "id" || b === "name") && (_ in r || _ in Zt))
      return !1;
    if (!(ne && !re[b] && vt(Ce, b)) && !(C && vt(st, b))) {
      if (!T[b] || re[b]) {
        if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(Tt(m) && (D.tagNameCheck instanceof RegExp && vt(D.tagNameCheck, m) || D.tagNameCheck instanceof Function && D.tagNameCheck(m)) && (D.attributeNameCheck instanceof RegExp && vt(D.attributeNameCheck, b) || D.attributeNameCheck instanceof Function && D.attributeNameCheck(b)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          b === "is" && D.allowCustomizedBuiltInElements && (D.tagNameCheck instanceof RegExp && vt(D.tagNameCheck, _) || D.tagNameCheck instanceof Function && D.tagNameCheck(_)))
        ) return !1;
      } else if (!Rt[b] && !vt(Ke, rn(_, Ae, "")) && !((b === "src" || b === "xlink:href" || b === "href") && m !== "script" && Hl(_, "data:") === 0 && Me[m]) && !(ee && !vt(Le, rn(_, Ae, ""))) && _)
        return !1;
    }
    return !0;
  }, Tt = function(m) {
    return m !== "annotation-xml" && Bi(m, Ue);
  }, ar = function(m) {
    Xe(ue.beforeSanitizeAttributes, m, null);
    const {
      attributes: b
    } = m;
    if (!b || Et(m))
      return;
    const _ = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: T,
      forceKeepAttr: void 0
    };
    let V = b.length;
    for (; V--; ) {
      const ye = b[V], {
        name: Se,
        namespaceURI: De,
        value: we
      } = ye, Qe = ve(Se);
      let Ve = Se === "value" ? we : ql(we);
      if (_.attrName = Qe, _.attrValue = Ve, _.keepAttr = !0, _.forceKeepAttr = void 0, Xe(ue.uponSanitizeAttribute, m, _), Ve = _.attrValue, ot && (Qe === "id" || Qe === "name") && (_t(Se, m), Ve = Ge + Ve), ie && vt(/((--!?|])>)|<\/(style|title)/i, Ve)) {
        _t(Se, m);
        continue;
      }
      if (_.forceKeepAttr || (_t(Se, m), !_.keepAttr))
        continue;
      if (!te && vt(/\/>/i, Ve)) {
        _t(Se, m);
        continue;
      }
      W && Ln([pe, Pe, Ne], (or) => {
        Ve = rn(Ve, or, " ");
      });
      const tt = ve(m.nodeName);
      if (nr(tt, Qe, Ve)) {
        if (H && typeof G == "object" && typeof G.getAttributeType == "function" && !De)
          switch (G.getAttributeType(tt, Qe)) {
            case "TrustedHTML": {
              Ve = H.createHTML(Ve);
              break;
            }
            case "TrustedScriptURL": {
              Ve = H.createScriptURL(Ve);
              break;
            }
          }
        try {
          De ? m.setAttributeNS(De, Se, Ve) : m.setAttribute(Se, Ve), Et(m) ? at(m) : Ui(t.removed);
        } catch {
        }
      }
    }
    Xe(ue.afterSanitizeAttributes, m, null);
  }, ir = function m(b) {
    let _ = null;
    const V = rr(b);
    for (Xe(ue.beforeSanitizeShadowDOM, b, null); _ = V.nextNode(); )
      Xe(ue.uponSanitizeShadowNode, _, null), zt(_), ar(_), _.content instanceof u && m(_.content);
    Xe(ue.afterSanitizeShadowDOM, b, null);
  };
  return t.sanitize = function(m) {
    let b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ = null, V = null, ye = null, Se = null;
    if (Dt = !m, Dt && (m = "<!-->"), typeof m != "string" && !Kt(m))
      if (typeof m.toString == "function") {
        if (m = m.toString(), typeof m != "string")
          throw nn("dirty is not a string, aborting");
      } else
        throw nn("toString is not a function");
    if (!t.isSupported)
      return m;
    if (K || Pt(b), t.removed = [], typeof m == "string" && (U = !1), U) {
      if (m.nodeName) {
        const Qe = ve(m.nodeName);
        if (!oe[Qe] || p[Qe])
          throw nn("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (m instanceof S)
      _ = tr("<!---->"), V = _.ownerDocument.importNode(m, !0), V.nodeType === on.element && V.nodeName === "BODY" || V.nodeName === "HTML" ? _ = V : _.appendChild(V);
    else {
      if (!Z && !W && !se && // eslint-disable-next-line unicorn/prefer-includes
      m.indexOf("<") === -1)
        return H && $e ? H.createHTML(m) : m;
      if (_ = tr(m), !_)
        return Z ? null : $e ? x : "";
    }
    _ && he && at(_.firstChild);
    const De = rr(U ? m : _);
    for (; ye = De.nextNode(); )
      zt(ye), ar(ye), ye.content instanceof u && ir(ye.content);
    if (U)
      return m;
    if (Z) {
      if (le)
        for (Se = Ie.call(_.ownerDocument); _.firstChild; )
          Se.appendChild(_.firstChild);
      else
        Se = _;
      return (T.shadowroot || T.shadowrootmode) && (Se = qe.call(i, Se, !0)), Se;
    }
    let we = se ? _.outerHTML : _.innerHTML;
    return se && oe["!doctype"] && _.ownerDocument && _.ownerDocument.doctype && _.ownerDocument.doctype.name && vt(Jo, _.ownerDocument.doctype.name) && (we = "<!DOCTYPE " + _.ownerDocument.doctype.name + `>
` + we), W && Ln([pe, Pe, Ne], (Qe) => {
      we = rn(we, Qe, " ");
    }), H && $e ? H.createHTML(we) : we;
  }, t.setConfig = function() {
    let m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Pt(m), K = !0;
  }, t.clearConfig = function() {
    et = null, K = !1;
  }, t.isValidAttribute = function(m, b, _) {
    et || Pt({});
    const V = ve(m), ye = ve(b);
    return nr(V, ye, _);
  }, t.addHook = function(m, b) {
    typeof b == "function" && tn(ue[m], b);
  }, t.removeHook = function(m, b) {
    if (b !== void 0) {
      const _ = Bl(ue[m], b);
      return _ === -1 ? void 0 : Wl(ue[m], _, 1)[0];
    }
    return Ui(ue[m]);
  }, t.removeHooks = function(m) {
    ue[m] = [];
  }, t.removeAllHooks = function() {
    ue = Yi();
  }, t;
}
var Xi = Zo();
let jn = null;
function oc() {
  return jn || (typeof window < "u" ? jn = Xi(window) : jn = Xi), jn;
}
const Ar = (e) => ({ __html: oc().sanitize(e) });
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
  region: g = "",
  component: S = ""
}) => {
  const { dataLayer: w } = window, h = {
    event: e.toLowerCase(),
    action: t.toLowerCase(),
    name: r.toLowerCase(),
    type: i.toLowerCase(),
    region: g.toLowerCase(),
    section: c.toLowerCase(),
    text: u.toLowerCase(),
    component: S.toLowerCase()
  };
  w && w.push(h);
}, mn = ({ children: e }) => /* @__PURE__ */ B.jsx(B.Fragment, { children: e });
mn.propTypes = {
  children: o.oneOfType([
    o.arrayOf(o.node),
    o.node,
    o.string
  ])
};
var Ko = { exports: {} };
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var u = "", g = 0; g < arguments.length; g++) {
        var S = arguments[g];
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
      var g = "";
      for (var S in u)
        t.call(u, S) && u[S] && (g = c(g, S));
      return g;
    }
    function c(u, g) {
      return g ? u ? u + " " + g : u + g : u;
    }
    e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
  })();
})(Ko);
var lc = Ko.exports;
const Gt = /* @__PURE__ */ Ya(lc);
({
  ...mn.propTypes
});
const es = ({ children: e, className: t = "container", ...r }) => /* @__PURE__ */ B.jsx("div", { className: t, ...r, children: /* @__PURE__ */ B.jsx("div", { className: "row", children: e }) });
es.propTypes = {
  children: mn.propTypes.children
};
({
  ...es.propTypes
});
mn.propTypes.children, o.oneOf(["0", "3", "4", "6", "8", "9", "12"]);
mn.propTypes.children;
const cc = o.shape({
  url: o.string,
  altText: o.string,
  cssClass: o.arrayOf(o.string),
  size: o.oneOf(["small", "medium", "large"])
}), Ca = o.shape({
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
}), Xa = o.shape({
  text: o.string,
  name: o.string,
  event: o.string,
  action: o.string,
  type: o.string,
  region: o.string,
  section: o.string,
  component: o.string
});
var Er = {}, Qi;
function uc() {
  if (Qi) return Er;
  Qi = 1;
  var e = dt;
  function t(n) {
    for (var l = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, f = 1; f < arguments.length; f++) l += "&args[]=" + encodeURIComponent(arguments[f]);
    return "Minified React error #" + n + "; visit " + l + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var r = Object.prototype.hasOwnProperty, i = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, c = {}, u = {};
  function g(n) {
    return r.call(u, n) ? !0 : r.call(c, n) ? !1 : i.test(n) ? u[n] = !0 : (c[n] = !0, !1);
  }
  function S(n, l, f, v, N, O, j) {
    this.acceptsBooleans = l === 2 || l === 3 || l === 4, this.attributeName = v, this.attributeNamespace = N, this.mustUseProperty = f, this.propertyName = n, this.type = l, this.sanitizeURL = O, this.removeEmptyString = j;
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
  var E = {
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
  Object.keys(E).forEach(function(n) {
    $.forEach(function(l) {
      l = l + n.charAt(0).toUpperCase() + n.substring(1), E[l] = E[n];
    });
  });
  var G = /["'&<>]/;
  function A(n) {
    if (typeof n == "boolean" || typeof n == "number") return "" + n;
    n = "" + n;
    var l = G.exec(n);
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
  var k = /([A-Z])/g, F = /^ms-/, Y = Array.isArray;
  function q(n, l) {
    return { insertionMode: n, selectedValue: l };
  }
  function X(n, l, f) {
    switch (l) {
      case "select":
        return q(1, f.value != null ? f.value : f.defaultValue);
      case "svg":
        return q(2, null);
      case "math":
        return q(3, null);
      case "foreignObject":
        return q(1, null);
      case "table":
        return q(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return q(5, null);
      case "colgroup":
        return q(7, null);
      case "tr":
        return q(6, null);
    }
    return 4 <= n.insertionMode || n.insertionMode === 0 ? q(1, null) : n;
  }
  var H = /* @__PURE__ */ new Map();
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
          var j = H.get(O);
          j !== void 0 || (j = A(O.replace(k, "-$1").toLowerCase().replace(F, "-ms-")), H.set(O, j)), O = j, N = typeof N == "number" ? N === 0 || r.call(E, v) ? "" + N : N + "px" : A(("" + N).trim());
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
      } else if (g(f)) {
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
  function _e(n, l, f) {
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
    n.push(pe(f));
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
    return n.push(">"), _e(n, N, f), typeof f == "string" ? (n.push(A(f)), null) : f;
  }
  var qe = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, ue = /* @__PURE__ */ new Map();
  function pe(n) {
    var l = ue.get(n);
    if (l === void 0) {
      if (!qe.test(n)) throw Error(t(65, n));
      l = "<" + n, ue.set(n, l);
    }
    return l;
  }
  function Pe(n, l, f, v, N) {
    switch (l) {
      case "select":
        n.push(pe("select"));
        var O = null, j = null;
        for (ke in f) if (r.call(f, ke)) {
          var J = f[ke];
          if (J != null) switch (ke) {
            case "children":
              O = J;
              break;
            case "dangerouslySetInnerHTML":
              j = J;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              ce(n, v, ke, J);
          }
        }
        return n.push(">"), _e(n, j, O), O;
      case "option":
        j = N.selectedValue, n.push(pe("option"));
        var de = J = null, be = null, ke = null;
        for (O in f) if (r.call(f, O)) {
          var rt = f[O];
          if (rt != null) switch (O) {
            case "children":
              J = rt;
              break;
            case "selected":
              be = rt;
              break;
            case "dangerouslySetInnerHTML":
              ke = rt;
              break;
            case "value":
              de = rt;
            default:
              ce(n, v, O, rt);
          }
        }
        if (j != null) if (f = de !== null ? "" + de : Ie(J), Y(j)) {
          for (v = 0; v < j.length; v++)
            if ("" + j[v] === f) {
              n.push(' selected=""');
              break;
            }
        } else "" + j === f && n.push(' selected=""');
        else be && n.push(' selected=""');
        return n.push(">"), _e(n, ke, J), J;
      case "textarea":
        n.push(pe("textarea")), ke = j = O = null;
        for (J in f) if (r.call(f, J) && (de = f[J], de != null)) switch (J) {
          case "children":
            ke = de;
            break;
          case "value":
            O = de;
            break;
          case "defaultValue":
            j = de;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(91));
          default:
            ce(
              n,
              v,
              J,
              de
            );
        }
        if (O === null && j !== null && (O = j), n.push(">"), ke != null) {
          if (O != null) throw Error(t(92));
          if (Y(ke) && 1 < ke.length) throw Error(t(93));
          O = "" + ke;
        }
        return typeof O == "string" && O[0] === `
` && n.push(`
`), O !== null && n.push(A("" + O)), null;
      case "input":
        n.push(pe("input")), de = ke = J = O = null;
        for (j in f) if (r.call(f, j) && (be = f[j], be != null)) switch (j) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, "input"));
          case "defaultChecked":
            de = be;
            break;
          case "defaultValue":
            J = be;
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
        return ke !== null ? ce(n, v, "checked", ke) : de !== null && ce(n, v, "checked", de), O !== null ? ce(n, v, "value", O) : J !== null && ce(n, v, "value", J), n.push("/>"), null;
      case "menuitem":
        n.push(pe("menuitem"));
        for (var Ut in f) if (r.call(f, Ut) && (O = f[Ut], O != null)) switch (Ut) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            ce(n, v, Ut, O);
        }
        return n.push(">"), null;
      case "title":
        n.push(pe("title")), O = null;
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
        n.push(pe(l)), j = O = null;
        for (de in f) if (r.call(f, de) && (J = f[de], J != null)) switch (de) {
          case "children":
            O = J;
            break;
          case "dangerouslySetInnerHTML":
            j = J;
            break;
          default:
            ce(n, v, de, J);
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
        n.push(pe(l));
        for (var Bt in f) if (r.call(f, Bt) && (O = f[Bt], O != null)) switch (Bt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, l));
          default:
            ce(n, v, Bt, O);
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
        n.push(pe(l)), j = O = null;
        for (be in f) if (r.call(f, be) && (J = f[be], J != null)) switch (be) {
          case "children":
            O = J;
            break;
          case "dangerouslySetInnerHTML":
            j = J;
            break;
          case "style":
            x(n, v, J);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            g(be) && typeof J != "function" && typeof J != "symbol" && n.push(" ", be, '="', A(J), '"');
        }
        return n.push(">"), _e(n, j, O), O;
    }
  }
  function Ne(n, l, f) {
    if (n.push('<!--$?--><template id="'), f === null) throw Error(t(395));
    return n.push(f), n.push('"></template>');
  }
  function Ce(n, l, f, v) {
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
  var Le = /[<\u2028\u2029]/g;
  function Ae(n) {
    return JSON.stringify(n).replace(Le, function(l) {
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
  function Ue(n, l) {
    return l = l === void 0 ? "" : l, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: l + "P:", segmentPrefix: l + "S:", boundaryPrefix: l + "B:", idPrefix: l, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: n };
  }
  function Ke(n, l, f, v) {
    return f.generateStaticMarkup ? (n.push(A(l)), !1) : (l === "" ? n = v : (v && n.push("<!-- -->"), n.push(A(l)), n = !0), n);
  }
  var oe = Object.assign, M = Symbol.for("react.element"), T = Symbol.for("react.portal"), L = Symbol.for("react.fragment"), D = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), re = Symbol.for("react.provider"), C = Symbol.for("react.context"), ne = Symbol.for("react.forward_ref"), ee = Symbol.for("react.suspense"), te = Symbol.for("react.suspense_list"), W = Symbol.for("react.memo"), ie = Symbol.for("react.lazy"), se = Symbol.for("react.scope"), K = Symbol.for("react.debug_trace_mode"), he = Symbol.for("react.legacy_hidden"), Z = Symbol.for("react.default_value"), le = Symbol.iterator;
  function $e(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case L:
        return "Fragment";
      case T:
        return "Portal";
      case p:
        return "Profiler";
      case D:
        return "StrictMode";
      case ee:
        return "Suspense";
      case te:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case C:
        return (n.displayName || "Context") + ".Consumer";
      case re:
        return (n._context.displayName || "Context") + ".Provider";
      case ne:
        var l = n.render;
        return n = n.displayName, n || (n = l.displayName || l.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case W:
        return l = n.displayName || null, l !== null ? l : $e(n.type) || "Memo";
      case ie:
        l = n._payload, n = n._init;
        try {
          return $e(n(l));
        } catch {
        }
    }
    return null;
  }
  var me = {};
  function ot(n, l) {
    if (n = n.contextTypes, !n) return me;
    var f = {}, v;
    for (v in n) f[v] = l[v];
    return f;
  }
  var Ge = null;
  function ge(n, l) {
    if (n !== l) {
      n.context._currentValue2 = n.parentValue, n = n.parent;
      var f = l.parent;
      if (n === null) {
        if (f !== null) throw Error(t(401));
      } else {
        if (f === null) throw Error(t(401));
        ge(n, f);
      }
      l.context._currentValue2 = l.value;
    }
  }
  function U(n) {
    n.context._currentValue2 = n.parentValue, n = n.parent, n !== null && U(n);
  }
  function ae(n) {
    var l = n.parent;
    l !== null && ae(l), n.context._currentValue2 = n.value;
  }
  function Ye(n, l) {
    if (n.context._currentValue2 = n.parentValue, n = n.parent, n === null) throw Error(t(402));
    n.depth === l.depth ? ge(n, l) : Ye(n, l);
  }
  function lt(n, l) {
    var f = l.parent;
    if (f === null) throw Error(t(402));
    n.depth === f.depth ? ge(n, f) : lt(n, f), l.context._currentValue2 = l.value;
  }
  function Me(n) {
    var l = Ge;
    l !== n && (l === null ? ae(n) : n === null ? U(l) : l.depth === n.depth ? ge(l, n) : l.depth > n.depth ? Ye(l, n) : lt(l, n), Ge = n);
  }
  var Xt = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(n, l) {
    n = n._reactInternals, n.queue !== null && n.queue.push(l);
  }, enqueueReplaceState: function(n, l) {
    n = n._reactInternals, n.replace = !0, n.queue = [l];
  }, enqueueForceUpdate: function() {
  } };
  function Rt(n, l, f, v) {
    var N = n.state !== void 0 ? n.state : null;
    n.updater = Xt, n.props = f, n.state = N;
    var O = { queue: [], replace: !1 };
    n._reactInternals = O;
    var j = l.contextType;
    if (n.context = typeof j == "object" && j !== null ? j._currentValue2 : v, j = l.getDerivedStateFromProps, typeof j == "function" && (j = j(f, N), N = j == null ? N : oe({}, N, j), n.state = N), typeof l.getDerivedStateFromProps != "function" && typeof n.getSnapshotBeforeUpdate != "function" && (typeof n.UNSAFE_componentWillMount == "function" || typeof n.componentWillMount == "function")) if (l = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), l !== n.state && Xt.enqueueReplaceState(n, n.state, null), O.queue !== null && 0 < O.queue.length) if (l = O.queue, j = O.replace, O.queue = null, O.replace = !1, j && l.length === 1) n.state = l[0];
    else {
      for (O = j ? l[0] : n.state, N = !0, j = j ? 1 : 0; j < l.length; j++) {
        var J = l[j];
        J = typeof J == "function" ? J.call(n, O, f, v) : J, J != null && (N ? (N = !1, O = oe({}, O, J)) : oe(O, J));
      }
      n.state = O;
    }
    else O.queue = null;
  }
  var er = { id: 1, overflow: "" };
  function mt(n, l, f) {
    var v = n.id;
    n = n.overflow;
    var N = 32 - ft(v) - 1;
    v &= ~(1 << N), f += 1;
    var O = 32 - ft(l) + N;
    if (30 < O) {
      var j = N - N % 5;
      return O = (v & (1 << j) - 1).toString(32), v >>= j, N -= j, { id: 1 << 32 - ft(l) + N | f << N | v, overflow: O + n };
    }
    return { id: 1 << O | f << N | v, overflow: n };
  }
  var ft = Math.clz32 ? Math.clz32 : Dt, nt = Math.log, ct = Math.LN2;
  function Dt(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (nt(n) / ct | 0) | 0;
  }
  function Ft(n, l) {
    return n === l && (n !== 0 || 1 / n === 1 / l) || n !== n && l !== l;
  }
  var vr = typeof Object.is == "function" ? Object.is : Ft, it = null, gt = null, Qt = null, Ee = null, Lt = !1, Jt = !1, ve = 0, et = null, Zt = 0;
  function yt() {
    if (it === null) throw Error(t(321));
    return it;
  }
  function Pt() {
    if (0 < Zt) throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Mt() {
    return Ee === null ? Qt === null ? (Lt = !1, Qt = Ee = Pt()) : (Lt = !0, Ee = Qt) : Ee.next === null ? (Lt = !1, Ee = Ee.next = Pt()) : (Lt = !0, Ee = Ee.next), Ee;
  }
  function jt() {
    gt = it = null, Jt = !1, Qt = null, Zt = 0, Ee = et = null;
  }
  function dr(n, l) {
    return typeof l == "function" ? l(n) : l;
  }
  function at(n, l, f) {
    if (it = yt(), Ee = Mt(), Lt) {
      var v = Ee.queue;
      if (l = v.dispatch, et !== null && (f = et.get(v), f !== void 0)) {
        et.delete(v), v = Ee.memoizedState;
        do
          v = n(v, f.action), f = f.next;
        while (f !== null);
        return Ee.memoizedState = v, [v, l];
      }
      return [Ee.memoizedState, l];
    }
    return n = n === dr ? typeof l == "function" ? l() : l : f !== void 0 ? f(l) : l, Ee.memoizedState = n, n = Ee.queue = { last: null, dispatch: null }, n = n.dispatch = tr.bind(null, it, n), [Ee.memoizedState, n];
  }
  function _t(n, l) {
    if (it = yt(), Ee = Mt(), l = l === void 0 ? null : l, Ee !== null) {
      var f = Ee.memoizedState;
      if (f !== null && l !== null) {
        var v = f[1];
        e: if (v === null) v = !1;
        else {
          for (var N = 0; N < v.length && N < l.length; N++) if (!vr(l[N], v[N])) {
            v = !1;
            break e;
          }
          v = !0;
        }
        if (v) return f[0];
      }
    }
    return n = n(), Ee.memoizedState = [n, l], n;
  }
  function tr(n, l, f) {
    if (25 <= Zt) throw Error(t(301));
    if (n === it) if (Jt = !0, n = { action: f, next: null }, et === null && (et = /* @__PURE__ */ new Map()), f = et.get(l), f === void 0) et.set(l, n);
    else {
      for (l = f; l.next !== null; ) l = l.next;
      l.next = n;
    }
  }
  function rr() {
    throw Error(t(394));
  }
  function Et() {
  }
  var Kt = { readContext: function(n) {
    return n._currentValue2;
  }, useContext: function(n) {
    return yt(), n._currentValue2;
  }, useMemo: _t, useReducer: at, useRef: function(n) {
    it = yt(), Ee = Mt();
    var l = Ee.memoizedState;
    return l === null ? (n = { current: n }, Ee.memoizedState = n) : l;
  }, useState: function(n) {
    return at(dr, n);
  }, useInsertionEffect: Et, useLayoutEffect: function() {
  }, useCallback: function(n, l) {
    return _t(function() {
      return n;
    }, l);
  }, useImperativeHandle: Et, useEffect: Et, useDebugValue: Et, useDeferredValue: function(n) {
    return yt(), n;
  }, useTransition: function() {
    return yt(), [
      !1,
      rr
    ];
  }, useId: function() {
    var n = gt.treeContext, l = n.overflow;
    n = n.id, n = (n & ~(1 << 32 - ft(n) - 1)).toString(32) + l;
    var f = Xe;
    if (f === null) throw Error(t(404));
    return l = ve++, n = ":" + f.idPrefix + "R" + n, 0 < l && (n += "H" + l.toString(32)), n + ":";
  }, useMutableSource: function(n, l) {
    return yt(), l(n._source);
  }, useSyncExternalStore: function(n, l, f) {
    if (f === void 0) throw Error(t(407));
    return f();
  } }, Xe = null, zt = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function nr(n) {
    return console.error(n), null;
  }
  function Tt() {
  }
  function ar(n, l, f, v, N, O, j, J, de) {
    var be = [], ke = /* @__PURE__ */ new Set();
    return l = { destination: null, responseState: l, progressiveChunkSize: v, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: ke, pingedTasks: be, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: N === void 0 ? nr : N, onAllReady: Tt, onShellReady: j === void 0 ? Tt : j, onShellError: Tt, onFatalError: Tt }, f = m(l, 0, null, f, !1, !1), f.parentFlushed = !0, n = ir(l, n, null, f, ke, me, null, er), be.push(n), l;
  }
  function ir(n, l, f, v, N, O, j, J) {
    n.allPendingTasks++, f === null ? n.pendingRootTasks++ : f.pendingTasks++;
    var de = { node: l, ping: function() {
      var be = n.pingedTasks;
      be.push(de), be.length === 1 && bn(n);
    }, blockedBoundary: f, blockedSegment: v, abortSet: N, legacyContext: O, context: j, treeContext: J };
    return N.add(de), de;
  }
  function m(n, l, f, v, N, O) {
    return { status: 0, id: -1, index: l, parentFlushed: !1, chunks: [], children: [], formatContext: v, boundary: f, lastPushedText: N, textEmbedded: O };
  }
  function b(n, l) {
    if (n = n.onError(l), n != null && typeof n != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof n + '" instead');
    return n;
  }
  function _(n, l) {
    var f = n.onShellError;
    f(l), f = n.onFatalError, f(l), n.destination !== null ? (n.status = 2, n.destination.destroy(l)) : (n.status = 1, n.fatalError = l);
  }
  function V(n, l, f, v, N) {
    for (it = {}, gt = l, ve = 0, n = f(v, N); Jt; ) Jt = !1, ve = 0, Zt += 1, Ee = null, n = f(v, N);
    return jt(), n;
  }
  function ye(n, l, f, v) {
    var N = f.render(), O = v.childContextTypes;
    if (O != null) {
      var j = l.legacyContext;
      if (typeof f.getChildContext != "function") v = j;
      else {
        f = f.getChildContext();
        for (var J in f) if (!(J in O)) throw Error(t(108, $e(v) || "Unknown", J));
        v = oe({}, j, f);
      }
      l.legacyContext = v, we(n, l, N), l.legacyContext = j;
    } else we(n, l, N);
  }
  function Se(n, l) {
    if (n && n.defaultProps) {
      l = oe({}, l), n = n.defaultProps;
      for (var f in n) l[f] === void 0 && (l[f] = n[f]);
      return l;
    }
    return l;
  }
  function De(n, l, f, v, N) {
    if (typeof f == "function") if (f.prototype && f.prototype.isReactComponent) {
      N = ot(f, l.legacyContext);
      var O = f.contextType;
      O = new f(v, typeof O == "object" && O !== null ? O._currentValue2 : N), Rt(O, f, v, N), ye(n, l, O, f);
    } else {
      O = ot(f, l.legacyContext), N = V(n, l, f, v, O);
      var j = ve !== 0;
      if (typeof N == "object" && N !== null && typeof N.render == "function" && N.$$typeof === void 0) Rt(N, f, v, O), ye(n, l, N, f);
      else if (j) {
        v = l.treeContext, l.treeContext = mt(v, 1, 0);
        try {
          we(n, l, N);
        } finally {
          l.treeContext = v;
        }
      } else we(n, l, N);
    }
    else if (typeof f == "string") {
      switch (N = l.blockedSegment, O = Pe(N.chunks, f, v, n.responseState, N.formatContext), N.lastPushedText = !1, j = N.formatContext, N.formatContext = X(j, f, v), Ve(n, l, O), N.formatContext = j, f) {
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
        case he:
        case K:
        case D:
        case p:
        case L:
          we(n, l, v.children);
          return;
        case te:
          we(n, l, v.children);
          return;
        case se:
          throw Error(t(343));
        case ee:
          e: {
            f = l.blockedBoundary, N = l.blockedSegment, O = v.fallback, v = v.children, j = /* @__PURE__ */ new Set();
            var J = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: j, errorDigest: null }, de = m(n, N.chunks.length, J, N.formatContext, !1, !1);
            N.children.push(de), N.lastPushedText = !1;
            var be = m(n, 0, null, N.formatContext, !1, !1);
            be.parentFlushed = !0, l.blockedBoundary = J, l.blockedSegment = be;
            try {
              if (Ve(
                n,
                l,
                v
              ), n.responseState.generateStaticMarkup || be.lastPushedText && be.textEmbedded && be.chunks.push("<!-- -->"), be.status = 1, $t(J, be), J.pendingTasks === 0) break e;
            } catch (ke) {
              be.status = 4, J.forceClientRender = !0, J.errorDigest = b(n, ke);
            } finally {
              l.blockedBoundary = f, l.blockedSegment = N;
            }
            l = ir(n, O, f, de, j, l.legacyContext, l.context, l.treeContext), n.pingedTasks.push(l);
          }
          return;
      }
      if (typeof f == "object" && f !== null) switch (f.$$typeof) {
        case ne:
          if (v = V(n, l, f.render, v, N), ve !== 0) {
            f = l.treeContext, l.treeContext = mt(f, 1, 0);
            try {
              we(n, l, v);
            } finally {
              l.treeContext = f;
            }
          } else we(n, l, v);
          return;
        case W:
          f = f.type, v = Se(f, v), De(n, l, f, v, N);
          return;
        case re:
          if (N = v.children, f = f._context, v = v.value, O = f._currentValue2, f._currentValue2 = v, j = Ge, Ge = v = { parent: j, depth: j === null ? 0 : j.depth + 1, context: f, parentValue: O, value: v }, l.context = v, we(n, l, N), n = Ge, n === null) throw Error(t(403));
          v = n.parentValue, n.context._currentValue2 = v === Z ? n.context._defaultValue : v, n = Ge = n.parent, l.context = n;
          return;
        case C:
          v = v.children, v = v(f._currentValue2), we(n, l, v);
          return;
        case ie:
          N = f._init, f = N(f._payload), v = Se(f, v), De(
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
        case M:
          De(n, l, f.type, f.props, f.ref);
          return;
        case T:
          throw Error(t(257));
        case ie:
          var v = f._init;
          f = v(f._payload), we(n, l, f);
          return;
      }
      if (Y(f)) {
        Qe(n, l, f);
        return;
      }
      if (f === null || typeof f != "object" ? v = null : (v = le && f[le] || f["@@iterator"], v = typeof v == "function" ? v : null), v && (v = v.call(f))) {
        if (f = v.next(), !f.done) {
          var N = [];
          do
            N.push(f.value), f = v.next();
          while (!f.done);
          Qe(n, l, N);
        }
        return;
      }
      throw n = Object.prototype.toString.call(f), Error(t(31, n === "[object Object]" ? "object with keys {" + Object.keys(f).join(", ") + "}" : n));
    }
    typeof f == "string" ? (v = l.blockedSegment, v.lastPushedText = Ke(l.blockedSegment.chunks, f, n.responseState, v.lastPushedText)) : typeof f == "number" && (v = l.blockedSegment, v.lastPushedText = Ke(l.blockedSegment.chunks, "" + f, n.responseState, v.lastPushedText));
  }
  function Qe(n, l, f) {
    for (var v = f.length, N = 0; N < v; N++) {
      var O = l.treeContext;
      l.treeContext = mt(O, v, N);
      try {
        Ve(n, l, f[N]);
      } finally {
        l.treeContext = O;
      }
    }
  }
  function Ve(n, l, f) {
    var v = l.blockedSegment.formatContext, N = l.legacyContext, O = l.context;
    try {
      return we(n, l, f);
    } catch (de) {
      if (jt(), typeof de == "object" && de !== null && typeof de.then == "function") {
        f = de;
        var j = l.blockedSegment, J = m(n, j.chunks.length, null, j.formatContext, j.lastPushedText, !0);
        j.children.push(J), j.lastPushedText = !1, n = ir(n, l.node, l.blockedBoundary, J, l.abortSet, l.legacyContext, l.context, l.treeContext).ping, f.then(n, n), l.blockedSegment.formatContext = v, l.legacyContext = N, l.context = O, Me(O);
      } else throw l.blockedSegment.formatContext = v, l.legacyContext = N, l.context = O, Me(O), de;
    }
  }
  function tt(n) {
    var l = n.blockedBoundary;
    n = n.blockedSegment, n.status = 3, fr(this, l, n);
  }
  function or(n, l, f) {
    var v = n.blockedBoundary;
    n.blockedSegment.status = 3, v === null ? (l.allPendingTasks--, l.status !== 2 && (l.status = 2, l.destination !== null && l.destination.push(null))) : (v.pendingTasks--, v.forceClientRender || (v.forceClientRender = !0, n = f === void 0 ? Error(t(432)) : f, v.errorDigest = l.onError(n), v.parentFlushed && l.clientRenderedBoundaries.push(v)), v.fallbackAbortableTasks.forEach(function(N) {
      return or(N, l, f);
    }), v.fallbackAbortableTasks.clear(), l.allPendingTasks--, l.allPendingTasks === 0 && (v = l.onAllReady, v()));
  }
  function $t(n, l) {
    if (l.chunks.length === 0 && l.children.length === 1 && l.children[0].boundary === null) {
      var f = l.children[0];
      f.id = l.id, f.parentFlushed = !0, f.status === 1 && $t(n, f);
    } else n.completedSegments.push(l);
  }
  function fr(n, l, f) {
    if (l === null) {
      if (f.parentFlushed) {
        if (n.completedRootSegment !== null) throw Error(t(389));
        n.completedRootSegment = f;
      }
      n.pendingRootTasks--, n.pendingRootTasks === 0 && (n.onShellError = Tt, l = n.onShellReady, l());
    } else l.pendingTasks--, l.forceClientRender || (l.pendingTasks === 0 ? (f.parentFlushed && f.status === 1 && $t(l, f), l.parentFlushed && n.completedBoundaries.push(l), l.fallbackAbortableTasks.forEach(tt, n), l.fallbackAbortableTasks.clear()) : f.parentFlushed && f.status === 1 && ($t(l, f), l.completedSegments.length === 1 && l.parentFlushed && n.partialBoundaries.push(l)));
    n.allPendingTasks--, n.allPendingTasks === 0 && (n = n.onAllReady, n());
  }
  function bn(n) {
    if (n.status !== 2) {
      var l = Ge, f = zt.current;
      zt.current = Kt;
      var v = Xe;
      Xe = n.responseState;
      try {
        var N = n.pingedTasks, O;
        for (O = 0; O < N.length; O++) {
          var j = N[O], J = n, de = j.blockedSegment;
          if (de.status === 0) {
            Me(j.context);
            try {
              we(J, j, j.node), J.responseState.generateStaticMarkup || de.lastPushedText && de.textEmbedded && de.chunks.push("<!-- -->"), j.abortSet.delete(j), de.status = 1, fr(J, j.blockedBoundary, de);
            } catch (Ct) {
              if (jt(), typeof Ct == "object" && Ct !== null && typeof Ct.then == "function") {
                var be = j.ping;
                Ct.then(be, be);
              } else {
                j.abortSet.delete(j), de.status = 4;
                var ke = j.blockedBoundary, rt = Ct, Ut = b(J, rt);
                if (ke === null ? _(J, rt) : (ke.pendingTasks--, ke.forceClientRender || (ke.forceClientRender = !0, ke.errorDigest = Ut, ke.parentFlushed && J.clientRenderedBoundaries.push(ke))), J.allPendingTasks--, J.allPendingTasks === 0) {
                  var Bt = J.onAllReady;
                  Bt();
                }
              }
            } finally {
            }
          }
        }
        N.splice(0, O), n.destination !== null && Pr(n, n.destination);
      } catch (Ct) {
        b(n, Ct), _(n, Ct);
      } finally {
        Xe = v, zt.current = f, f === Kt && Me(l);
      }
    }
  }
  function wr(n, l, f) {
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
          N = Sr(n, l, N);
        }
        for (; O < v.length - 1; O++) l.push(v[O]);
        return O < v.length && (N = l.push(v[O])), N;
      default:
        throw Error(t(390));
    }
  }
  function Sr(n, l, f) {
    var v = f.boundary;
    if (v === null) return wr(n, l, f);
    if (v.parentFlushed = !0, v.forceClientRender) return n.responseState.generateStaticMarkup || (v = v.errorDigest, l.push("<!--$!-->"), l.push("<template"), v && (l.push(' data-dgst="'), v = A(v), l.push(v), l.push('"')), l.push("></template>")), wr(n, l, f), n = n.responseState.generateStaticMarkup ? !0 : l.push("<!--/$-->"), n;
    if (0 < v.pendingTasks) {
      v.rootSegmentID = n.nextSegmentId++, 0 < v.completedSegments.length && n.partialBoundaries.push(v);
      var N = n.responseState, O = N.nextSuspenseID++;
      return N = N.boundaryPrefix + O.toString(16), v = v.id = N, Ne(l, n.responseState, v), wr(n, l, f), l.push("<!--/$-->");
    }
    if (v.byteSize > n.progressiveChunkSize) return v.rootSegmentID = n.nextSegmentId++, n.completedBoundaries.push(v), Ne(l, n.responseState, v.id), wr(n, l, f), l.push("<!--/$-->");
    if (n.responseState.generateStaticMarkup || l.push("<!--$-->"), f = v.completedSegments, f.length !== 1) throw Error(t(391));
    return Sr(n, l, f[0]), n = n.responseState.generateStaticMarkup ? !0 : l.push("<!--/$-->"), n;
  }
  function zr(n, l, f) {
    return Ce(l, n.responseState, f.formatContext, f.id), Sr(n, l, f), st(l, f.formatContext);
  }
  function $r(n, l, f) {
    for (var v = f.completedSegments, N = 0; N < v.length; N++) Ur(n, l, f, v[N]);
    if (v.length = 0, n = n.responseState, v = f.id, f = f.rootSegmentID, l.push(n.startInlineScript), n.sentCompleteBoundaryFunction ? l.push('$RC("') : (n.sentCompleteBoundaryFunction = !0, l.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), v === null) throw Error(t(395));
    return f = f.toString(16), l.push(v), l.push('","'), l.push(n.segmentPrefix), l.push(f), l.push('")<\/script>');
  }
  function Ur(n, l, f, v) {
    if (v.status === 2) return !0;
    var N = v.id;
    if (N === -1) {
      if ((v.id = f.rootSegmentID) === -1) throw Error(t(392));
      return zr(n, l, v);
    }
    return zr(n, l, v), n = n.responseState, l.push(n.startInlineScript), n.sentCompleteSegmentFunction ? l.push('$RS("') : (n.sentCompleteSegmentFunction = !0, l.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), l.push(n.segmentPrefix), N = N.toString(16), l.push(N), l.push('","'), l.push(n.placeholderPrefix), l.push(N), l.push('")<\/script>');
  }
  function Pr(n, l) {
    try {
      var f = n.completedRootSegment;
      if (f !== null && n.pendingRootTasks === 0) {
        Sr(n, l, f), n.completedRootSegment = null;
        var v = n.responseState.bootstrapChunks;
        for (f = 0; f < v.length - 1; f++) l.push(v[f]);
        f < v.length && l.push(v[f]);
      }
      var N = n.clientRenderedBoundaries, O;
      for (O = 0; O < N.length; O++) {
        var j = N[O];
        v = l;
        var J = n.responseState, de = j.id, be = j.errorDigest, ke = j.errorMessage, rt = j.errorComponentStack;
        if (v.push(J.startInlineScript), J.sentClientRenderFunction ? v.push('$RX("') : (J.sentClientRenderFunction = !0, v.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), de === null) throw Error(t(395));
        if (v.push(de), v.push('"'), be || ke || rt) {
          v.push(",");
          var Ut = Ae(be || "");
          v.push(Ut);
        }
        if (ke || rt) {
          v.push(",");
          var Bt = Ae(ke || "");
          v.push(Bt);
        }
        if (rt) {
          v.push(",");
          var Ct = Ae(rt);
          v.push(Ct);
        }
        if (!v.push(")<\/script>")) {
          n.destination = null, O++, N.splice(0, O);
          return;
        }
      }
      N.splice(0, O);
      var kr = n.completedBoundaries;
      for (O = 0; O < kr.length; O++) if (!$r(n, l, kr[O])) {
        n.destination = null, O++, kr.splice(0, O);
        return;
      }
      kr.splice(0, O);
      var sr = n.partialBoundaries;
      for (O = 0; O < sr.length; O++) {
        var Wr = sr[O];
        e: {
          N = n, j = l;
          var xr = Wr.completedSegments;
          for (J = 0; J < xr.length; J++) if (!Ur(N, j, Wr, xr[J])) {
            J++, xr.splice(0, J);
            var Sn = !1;
            break e;
          }
          xr.splice(0, J), Sn = !0;
        }
        if (!Sn) {
          n.destination = null, O++, sr.splice(0, O);
          return;
        }
      }
      sr.splice(0, O);
      var pr = n.completedBoundaries;
      for (O = 0; O < pr.length; O++) if (!$r(n, l, pr[O])) {
        n.destination = null, O++, pr.splice(0, O);
        return;
      }
      pr.splice(0, O);
    } finally {
      n.allPendingTasks === 0 && n.pingedTasks.length === 0 && n.clientRenderedBoundaries.length === 0 && n.completedBoundaries.length === 0 && l.push(null);
    }
  }
  function vn(n, l) {
    try {
      var f = n.abortableTasks;
      f.forEach(function(v) {
        return or(v, n, l);
      }), f.clear(), n.destination !== null && Pr(n, n.destination);
    } catch (v) {
      b(n, v), _(n, v);
    }
  }
  function wn() {
  }
  function Br(n, l, f, v) {
    var N = !1, O = null, j = "", J = { push: function(be) {
      return be !== null && (j += be), !0;
    }, destroy: function(be) {
      N = !0, O = be;
    } }, de = !1;
    if (n = ar(n, Ue(f, l ? l.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, wn, void 0, function() {
      de = !0;
    }), bn(n), vn(n, v), n.status === 1) n.status = 2, J.destroy(n.fatalError);
    else if (n.status !== 2 && n.destination === null) {
      n.destination = J;
      try {
        Pr(n, J);
      } catch (be) {
        b(n, be), _(n, be);
      }
    }
    if (N) throw O;
    if (!de) throw Error(t(426));
    return j;
  }
  return Er.renderToNodeStream = function() {
    throw Error(t(207));
  }, Er.renderToStaticMarkup = function(n, l) {
    return Br(n, l, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Er.renderToStaticNodeStream = function() {
    throw Error(t(208));
  }, Er.renderToString = function(n, l) {
    return Br(n, l, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Er.version = "18.3.1", Er;
}
var zn = {}, Ji;
function dc() {
  if (Ji) return zn;
  Ji = 1;
  var e = dt;
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
  function g(a) {
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
  var E = Object.prototype.hasOwnProperty, $ = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, G = {}, A = {};
  function k(a) {
    return E.call(A, a) ? !0 : E.call(G, a) ? !1 : $.test(a) ? A[a] = !0 : (G[a] = !0, !1);
  }
  function F(a, s, d, y, P, R, z) {
    this.acceptsBooleans = s === 2 || s === 3 || s === 4, this.attributeName = y, this.attributeNamespace = P, this.mustUseProperty = d, this.propertyName = a, this.type = s, this.sanitizeURL = R, this.removeEmptyString = z;
  }
  var Y = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
    Y[a] = new F(a, 0, !1, a, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
    var s = a[0];
    Y[s] = new F(s, 1, !1, a[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
    Y[a] = new F(a, 2, !1, a.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
    Y[a] = new F(a, 2, !1, a, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
    Y[a] = new F(a, 3, !1, a.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(a) {
    Y[a] = new F(a, 3, !0, a, null, !1, !1);
  }), ["capture", "download"].forEach(function(a) {
    Y[a] = new F(a, 4, !1, a, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(a) {
    Y[a] = new F(a, 6, !1, a, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(a) {
    Y[a] = new F(a, 5, !1, a.toLowerCase(), null, !1, !1);
  });
  var q = /[\-:]([a-z])/g;
  function X(a) {
    return a[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
    var s = a.replace(
      q,
      X
    );
    Y[s] = new F(s, 1, !1, a, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
    var s = a.replace(q, X);
    Y[s] = new F(s, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
    var s = a.replace(q, X);
    Y[s] = new F(s, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(a) {
    Y[a] = new F(a, 1, !1, a.toLowerCase(), null, !1, !1);
  }), Y.xlinkHref = new F("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(a) {
    Y[a] = new F(a, 1, !1, a.toLowerCase(), null, !0, !0);
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
  var ce = /["'&<>]/;
  function _e(a) {
    if (typeof a == "boolean" || typeof a == "number") return "" + a;
    a = "" + a;
    var s = ce.exec(a);
    if (s) {
      var d = "", y, P = 0;
      for (y = s.index; y < a.length; y++) {
        switch (a.charCodeAt(y)) {
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
        P !== y && (d += a.substring(P, y)), P = y + 1, d += s;
      }
      a = P !== y ? d + a.substring(P, y) : d;
    }
    return a;
  }
  var Ie = /([A-Z])/g, Fe = /^ms-/, qe = Array.isArray, ue = h("<script>"), pe = h("<\/script>"), Pe = h('<script src="'), Ne = h('<script type="module" src="'), Ce = h('" async=""><\/script>'), st = /(<\/|<)(s)(cript)/gi;
  function Le(a, s, d, y) {
    return "" + s + (d === "s" ? "\\u0073" : "\\u0053") + y;
  }
  function Ae(a, s, d, y, P) {
    a = a === void 0 ? "" : a, s = s === void 0 ? ue : h('<script nonce="' + _e(s) + '">');
    var R = [];
    if (d !== void 0 && R.push(s, w(("" + d).replace(st, Le)), pe), y !== void 0) for (d = 0; d < y.length; d++) R.push(Pe, w(_e(y[d])), Ce);
    if (P !== void 0) for (y = 0; y < P.length; y++) R.push(Ne, w(_e(P[y])), Ce);
    return { bootstrapChunks: R, startInlineScript: s, placeholderPrefix: h(a + "P:"), segmentPrefix: h(a + "S:"), boundaryPrefix: a + "B:", idPrefix: a, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function Ue(a, s) {
    return { insertionMode: a, selectedValue: s };
  }
  function Ke(a) {
    return Ue(a === "http://www.w3.org/2000/svg" ? 2 : a === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function oe(a, s, d) {
    switch (s) {
      case "select":
        return Ue(1, d.value != null ? d.value : d.defaultValue);
      case "svg":
        return Ue(2, null);
      case "math":
        return Ue(3, null);
      case "foreignObject":
        return Ue(1, null);
      case "table":
        return Ue(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return Ue(5, null);
      case "colgroup":
        return Ue(7, null);
      case "tr":
        return Ue(6, null);
    }
    return 4 <= a.insertionMode || a.insertionMode === 0 ? Ue(1, null) : a;
  }
  var M = h("<!-- -->");
  function T(a, s, d, y) {
    return s === "" ? y : (y && a.push(M), a.push(w(_e(s))), !0);
  }
  var L = /* @__PURE__ */ new Map(), D = h(' style="'), p = h(":"), re = h(";");
  function C(a, s, d) {
    if (typeof d != "object") throw Error(t(62));
    s = !0;
    for (var y in d) if (E.call(d, y)) {
      var P = d[y];
      if (P != null && typeof P != "boolean" && P !== "") {
        if (y.indexOf("--") === 0) {
          var R = w(_e(y));
          P = w(_e(("" + P).trim()));
        } else {
          R = y;
          var z = L.get(R);
          z !== void 0 || (z = h(_e(R.replace(Ie, "-$1").toLowerCase().replace(Fe, "-ms-"))), L.set(R, z)), R = z, P = typeof P == "number" ? P === 0 || E.call(H, y) ? w("" + P) : w(P + "px") : w(_e(("" + P).trim()));
        }
        s ? (s = !1, a.push(D, R, p, P)) : a.push(re, R, p, P);
      }
    }
    s || a.push(te);
  }
  var ne = h(" "), ee = h('="'), te = h('"'), W = h('=""');
  function ie(a, s, d, y) {
    switch (d) {
      case "style":
        C(a, s, y);
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
        switch (typeof y) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!s.acceptsBooleans) return;
        }
        switch (d = w(s.attributeName), s.type) {
          case 3:
            y && a.push(ne, d, W);
            break;
          case 4:
            y === !0 ? a.push(ne, d, W) : y !== !1 && a.push(ne, d, ee, w(_e(y)), te);
            break;
          case 5:
            isNaN(y) || a.push(ne, d, ee, w(_e(y)), te);
            break;
          case 6:
            !isNaN(y) && 1 <= y && a.push(ne, d, ee, w(_e(y)), te);
            break;
          default:
            s.sanitizeURL && (y = "" + y), a.push(ne, d, ee, w(_e(y)), te);
        }
      } else if (k(d)) {
        switch (typeof y) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (s = d.toLowerCase().slice(0, 5), s !== "data-" && s !== "aria-") return;
        }
        a.push(ne, w(d), ee, w(_e(y)), te);
      }
    }
  }
  var se = h(">"), K = h("/>");
  function he(a, s, d) {
    if (s != null) {
      if (d != null) throw Error(t(60));
      if (typeof s != "object" || !("__html" in s)) throw Error(t(61));
      s = s.__html, s != null && a.push(w("" + s));
    }
  }
  function Z(a) {
    var s = "";
    return e.Children.forEach(a, function(d) {
      d != null && (s += d);
    }), s;
  }
  var le = h(' selected=""');
  function $e(a, s, d, y) {
    a.push(ge(d));
    var P = d = null, R;
    for (R in s) if (E.call(s, R)) {
      var z = s[R];
      if (z != null) switch (R) {
        case "children":
          d = z;
          break;
        case "dangerouslySetInnerHTML":
          P = z;
          break;
        default:
          ie(a, y, R, z);
      }
    }
    return a.push(se), he(a, P, d), typeof d == "string" ? (a.push(w(_e(d))), null) : d;
  }
  var me = h(`
`), ot = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Ge = /* @__PURE__ */ new Map();
  function ge(a) {
    var s = Ge.get(a);
    if (s === void 0) {
      if (!ot.test(a)) throw Error(t(65, a));
      s = h("<" + a), Ge.set(a, s);
    }
    return s;
  }
  var U = h("<!DOCTYPE html>");
  function ae(a, s, d, y, P) {
    switch (s) {
      case "select":
        a.push(ge("select"));
        var R = null, z = null;
        for (xe in d) if (E.call(d, xe)) {
          var Q = d[xe];
          if (Q != null) switch (xe) {
            case "children":
              R = Q;
              break;
            case "dangerouslySetInnerHTML":
              z = Q;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              ie(a, y, xe, Q);
          }
        }
        return a.push(se), he(a, z, R), R;
      case "option":
        z = P.selectedValue, a.push(ge("option"));
        var fe = Q = null, Te = null, xe = null;
        for (R in d) if (E.call(d, R)) {
          var Ze = d[R];
          if (Ze != null) switch (R) {
            case "children":
              Q = Ze;
              break;
            case "selected":
              Te = Ze;
              break;
            case "dangerouslySetInnerHTML":
              xe = Ze;
              break;
            case "value":
              fe = Ze;
            default:
              ie(a, y, R, Ze);
          }
        }
        if (z != null) if (d = fe !== null ? "" + fe : Z(Q), qe(z)) {
          for (y = 0; y < z.length; y++)
            if ("" + z[y] === d) {
              a.push(le);
              break;
            }
        } else "" + z === d && a.push(le);
        else Te && a.push(le);
        return a.push(se), he(a, xe, Q), Q;
      case "textarea":
        a.push(ge("textarea")), xe = z = R = null;
        for (Q in d) if (E.call(d, Q) && (fe = d[Q], fe != null)) switch (Q) {
          case "children":
            xe = fe;
            break;
          case "value":
            R = fe;
            break;
          case "defaultValue":
            z = fe;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(91));
          default:
            ie(a, y, Q, fe);
        }
        if (R === null && z !== null && (R = z), a.push(se), xe != null) {
          if (R != null) throw Error(t(92));
          if (qe(xe) && 1 < xe.length) throw Error(t(93));
          R = "" + xe;
        }
        return typeof R == "string" && R[0] === `
` && a.push(me), R !== null && a.push(w(_e("" + R))), null;
      case "input":
        a.push(ge("input")), fe = xe = Q = R = null;
        for (z in d) if (E.call(d, z) && (Te = d[z], Te != null)) switch (z) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, "input"));
          case "defaultChecked":
            fe = Te;
            break;
          case "defaultValue":
            Q = Te;
            break;
          case "checked":
            xe = Te;
            break;
          case "value":
            R = Te;
            break;
          default:
            ie(a, y, z, Te);
        }
        return xe !== null ? ie(
          a,
          y,
          "checked",
          xe
        ) : fe !== null && ie(a, y, "checked", fe), R !== null ? ie(a, y, "value", R) : Q !== null && ie(a, y, "value", Q), a.push(K), null;
      case "menuitem":
        a.push(ge("menuitem"));
        for (var Ot in d) if (E.call(d, Ot) && (R = d[Ot], R != null)) switch (Ot) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            ie(a, y, Ot, R);
        }
        return a.push(se), null;
      case "title":
        a.push(ge("title")), R = null;
        for (Ze in d) if (E.call(d, Ze) && (z = d[Ze], z != null)) switch (Ze) {
          case "children":
            R = z;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(434));
          default:
            ie(a, y, Ze, z);
        }
        return a.push(se), R;
      case "listing":
      case "pre":
        a.push(ge(s)), z = R = null;
        for (fe in d) if (E.call(d, fe) && (Q = d[fe], Q != null)) switch (fe) {
          case "children":
            R = Q;
            break;
          case "dangerouslySetInnerHTML":
            z = Q;
            break;
          default:
            ie(a, y, fe, Q);
        }
        if (a.push(se), z != null) {
          if (R != null) throw Error(t(60));
          if (typeof z != "object" || !("__html" in z)) throw Error(t(61));
          d = z.__html, d != null && (typeof d == "string" && 0 < d.length && d[0] === `
` ? a.push(me, w(d)) : a.push(w("" + d)));
        }
        return typeof R == "string" && R[0] === `
` && a.push(me), R;
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
        a.push(ge(s));
        for (var Wt in d) if (E.call(d, Wt) && (R = d[Wt], R != null)) switch (Wt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, s));
          default:
            ie(a, y, Wt, R);
        }
        return a.push(K), null;
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return $e(a, d, s, y);
      case "html":
        return P.insertionMode === 0 && a.push(U), $e(a, d, s, y);
      default:
        if (s.indexOf("-") === -1 && typeof d.is != "string") return $e(a, d, s, y);
        a.push(ge(s)), z = R = null;
        for (Te in d) if (E.call(d, Te) && (Q = d[Te], Q != null)) switch (Te) {
          case "children":
            R = Q;
            break;
          case "dangerouslySetInnerHTML":
            z = Q;
            break;
          case "style":
            C(a, y, Q);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            k(Te) && typeof Q != "function" && typeof Q != "symbol" && a.push(ne, w(Te), ee, w(_e(Q)), te);
        }
        return a.push(se), he(a, z, R), R;
    }
  }
  var Ye = h("</"), lt = h(">"), Me = h('<template id="'), Xt = h('"></template>'), Rt = h("<!--$-->"), er = h('<!--$?--><template id="'), mt = h('"></template>'), ft = h("<!--$!-->"), nt = h("<!--/$-->"), ct = h("<template"), Dt = h('"'), Ft = h(' data-dgst="');
  h(' data-msg="'), h(' data-stck="');
  var vr = h("></template>");
  function it(a, s, d) {
    if (c(a, er), d === null) throw Error(t(395));
    return c(a, d), u(a, mt);
  }
  var gt = h('<div hidden id="'), Qt = h('">'), Ee = h("</div>"), Lt = h('<svg aria-hidden="true" style="display:none" id="'), Jt = h('">'), ve = h("</svg>"), et = h('<math aria-hidden="true" style="display:none" id="'), Zt = h('">'), yt = h("</math>"), Pt = h('<table hidden id="'), Mt = h('">'), jt = h("</table>"), dr = h('<table hidden><tbody id="'), at = h('">'), _t = h("</tbody></table>"), tr = h('<table hidden><tr id="'), rr = h('">'), Et = h("</tr></table>"), Kt = h('<table hidden><colgroup id="'), Xe = h('">'), zt = h("</colgroup></table>");
  function nr(a, s, d, y) {
    switch (d.insertionMode) {
      case 0:
      case 1:
        return c(a, gt), c(a, s.segmentPrefix), c(a, w(y.toString(16))), u(a, Qt);
      case 2:
        return c(a, Lt), c(a, s.segmentPrefix), c(a, w(y.toString(16))), u(a, Jt);
      case 3:
        return c(a, et), c(a, s.segmentPrefix), c(a, w(y.toString(16))), u(a, Zt);
      case 4:
        return c(a, Pt), c(a, s.segmentPrefix), c(a, w(y.toString(16))), u(a, Mt);
      case 5:
        return c(a, dr), c(a, s.segmentPrefix), c(a, w(y.toString(16))), u(a, at);
      case 6:
        return c(a, tr), c(a, s.segmentPrefix), c(a, w(y.toString(16))), u(a, rr);
      case 7:
        return c(
          a,
          Kt
        ), c(a, s.segmentPrefix), c(a, w(y.toString(16))), u(a, Xe);
      default:
        throw Error(t(397));
    }
  }
  function Tt(a, s) {
    switch (s.insertionMode) {
      case 0:
      case 1:
        return u(a, Ee);
      case 2:
        return u(a, ve);
      case 3:
        return u(a, yt);
      case 4:
        return u(a, jt);
      case 5:
        return u(a, _t);
      case 6:
        return u(a, Et);
      case 7:
        return u(a, zt);
      default:
        throw Error(t(397));
    }
  }
  var ar = h('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), ir = h('$RS("'), m = h('","'), b = h('")<\/script>'), _ = h('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), V = h('$RC("'), ye = h('","'), Se = h('")<\/script>'), De = h('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), we = h('$RX("'), Qe = h('"'), Ve = h(")<\/script>"), tt = h(","), or = /[<\u2028\u2029]/g;
  function $t(a) {
    return JSON.stringify(a).replace(or, function(s) {
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
  var fr = Object.assign, bn = Symbol.for("react.element"), wr = Symbol.for("react.portal"), Sr = Symbol.for("react.fragment"), zr = Symbol.for("react.strict_mode"), $r = Symbol.for("react.profiler"), Ur = Symbol.for("react.provider"), Pr = Symbol.for("react.context"), vn = Symbol.for("react.forward_ref"), wn = Symbol.for("react.suspense"), Br = Symbol.for("react.suspense_list"), n = Symbol.for("react.memo"), l = Symbol.for("react.lazy"), f = Symbol.for("react.scope"), v = Symbol.for("react.debug_trace_mode"), N = Symbol.for("react.legacy_hidden"), O = Symbol.for("react.default_value"), j = Symbol.iterator;
  function J(a) {
    if (a == null) return null;
    if (typeof a == "function") return a.displayName || a.name || null;
    if (typeof a == "string") return a;
    switch (a) {
      case Sr:
        return "Fragment";
      case wr:
        return "Portal";
      case $r:
        return "Profiler";
      case zr:
        return "StrictMode";
      case wn:
        return "Suspense";
      case Br:
        return "SuspenseList";
    }
    if (typeof a == "object") switch (a.$$typeof) {
      case Pr:
        return (a.displayName || "Context") + ".Consumer";
      case Ur:
        return (a._context.displayName || "Context") + ".Provider";
      case vn:
        var s = a.render;
        return a = a.displayName, a || (a = s.displayName || s.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
      case n:
        return s = a.displayName || null, s !== null ? s : J(a.type) || "Memo";
      case l:
        s = a._payload, a = a._init;
        try {
          return J(a(s));
        } catch {
        }
    }
    return null;
  }
  var de = {};
  function be(a, s) {
    if (a = a.contextTypes, !a) return de;
    var d = {}, y;
    for (y in a) d[y] = s[y];
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
  function Ut(a) {
    a.context._currentValue = a.parentValue, a = a.parent, a !== null && Ut(a);
  }
  function Bt(a) {
    var s = a.parent;
    s !== null && Bt(s), a.context._currentValue = a.value;
  }
  function Ct(a, s) {
    if (a.context._currentValue = a.parentValue, a = a.parent, a === null) throw Error(t(402));
    a.depth === s.depth ? rt(a, s) : Ct(a, s);
  }
  function kr(a, s) {
    var d = s.parent;
    if (d === null) throw Error(t(402));
    a.depth === d.depth ? rt(a, d) : kr(a, d), s.context._currentValue = s.value;
  }
  function sr(a) {
    var s = ke;
    s !== a && (s === null ? Bt(a) : a === null ? Ut(s) : s.depth === a.depth ? rt(s, a) : s.depth > a.depth ? Ct(s, a) : kr(s, a), ke = a);
  }
  var Wr = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(a, s) {
    a = a._reactInternals, a.queue !== null && a.queue.push(s);
  }, enqueueReplaceState: function(a, s) {
    a = a._reactInternals, a.replace = !0, a.queue = [s];
  }, enqueueForceUpdate: function() {
  } };
  function xr(a, s, d, y) {
    var P = a.state !== void 0 ? a.state : null;
    a.updater = Wr, a.props = d, a.state = P;
    var R = { queue: [], replace: !1 };
    a._reactInternals = R;
    var z = s.contextType;
    if (a.context = typeof z == "object" && z !== null ? z._currentValue : y, z = s.getDerivedStateFromProps, typeof z == "function" && (z = z(d, P), P = z == null ? P : fr({}, P, z), a.state = P), typeof s.getDerivedStateFromProps != "function" && typeof a.getSnapshotBeforeUpdate != "function" && (typeof a.UNSAFE_componentWillMount == "function" || typeof a.componentWillMount == "function")) if (s = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), s !== a.state && Wr.enqueueReplaceState(a, a.state, null), R.queue !== null && 0 < R.queue.length) if (s = R.queue, z = R.replace, R.queue = null, R.replace = !1, z && s.length === 1) a.state = s[0];
    else {
      for (R = z ? s[0] : a.state, P = !0, z = z ? 1 : 0; z < s.length; z++) {
        var Q = s[z];
        Q = typeof Q == "function" ? Q.call(a, R, d, y) : Q, Q != null && (P ? (P = !1, R = fr({}, R, Q)) : fr(R, Q));
      }
      a.state = R;
    }
    else R.queue = null;
  }
  var Sn = { id: 1, overflow: "" };
  function pr(a, s, d) {
    var y = a.id;
    a = a.overflow;
    var P = 32 - kn(y) - 1;
    y &= ~(1 << P), d += 1;
    var R = 32 - kn(s) + P;
    if (30 < R) {
      var z = P - P % 5;
      return R = (y & (1 << z) - 1).toString(32), y >>= z, P -= z, { id: 1 << 32 - kn(s) + P | d << P | y, overflow: R + a };
    }
    return { id: 1 << R | d << P | y, overflow: a };
  }
  var kn = Math.clz32 ? Math.clz32 : Ys, Vs = Math.log, Gs = Math.LN2;
  function Ys(a) {
    return a >>>= 0, a === 0 ? 32 : 31 - (Vs(a) / Gs | 0) | 0;
  }
  function Xs(a, s) {
    return a === s && (a !== 0 || 1 / a === 1 / s) || a !== a && s !== s;
  }
  var Qs = typeof Object.is == "function" ? Object.is : Xs, lr = null, aa = null, xn = null, Je = null, Hr = !1, _n = !1, qr = 0, hr = null, En = 0;
  function _r() {
    if (lr === null) throw Error(t(321));
    return lr;
  }
  function li() {
    if (0 < En) throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function ia() {
    return Je === null ? xn === null ? (Hr = !1, xn = Je = li()) : (Hr = !0, Je = xn) : Je.next === null ? (Hr = !1, Je = Je.next = li()) : (Hr = !0, Je = Je.next), Je;
  }
  function oa() {
    aa = lr = null, _n = !1, xn = null, En = 0, Je = hr = null;
  }
  function ci(a, s) {
    return typeof s == "function" ? s(a) : s;
  }
  function ui(a, s, d) {
    if (lr = _r(), Je = ia(), Hr) {
      var y = Je.queue;
      if (s = y.dispatch, hr !== null && (d = hr.get(y), d !== void 0)) {
        hr.delete(y), y = Je.memoizedState;
        do
          y = a(y, d.action), d = d.next;
        while (d !== null);
        return Je.memoizedState = y, [y, s];
      }
      return [Je.memoizedState, s];
    }
    return a = a === ci ? typeof s == "function" ? s() : s : d !== void 0 ? d(s) : s, Je.memoizedState = a, a = Je.queue = { last: null, dispatch: null }, a = a.dispatch = Js.bind(null, lr, a), [Je.memoizedState, a];
  }
  function di(a, s) {
    if (lr = _r(), Je = ia(), s = s === void 0 ? null : s, Je !== null) {
      var d = Je.memoizedState;
      if (d !== null && s !== null) {
        var y = d[1];
        e: if (y === null) y = !1;
        else {
          for (var P = 0; P < y.length && P < s.length; P++) if (!Qs(s[P], y[P])) {
            y = !1;
            break e;
          }
          y = !0;
        }
        if (y) return d[0];
      }
    }
    return a = a(), Je.memoizedState = [a, s], a;
  }
  function Js(a, s, d) {
    if (25 <= En) throw Error(t(301));
    if (a === lr) if (_n = !0, a = { action: d, next: null }, hr === null && (hr = /* @__PURE__ */ new Map()), d = hr.get(s), d === void 0) hr.set(s, a);
    else {
      for (s = d; s.next !== null; ) s = s.next;
      s.next = a;
    }
  }
  function Zs() {
    throw Error(t(394));
  }
  function Tn() {
  }
  var fi = { readContext: function(a) {
    return a._currentValue;
  }, useContext: function(a) {
    return _r(), a._currentValue;
  }, useMemo: di, useReducer: ui, useRef: function(a) {
    lr = _r(), Je = ia();
    var s = Je.memoizedState;
    return s === null ? (a = { current: a }, Je.memoizedState = a) : s;
  }, useState: function(a) {
    return ui(ci, a);
  }, useInsertionEffect: Tn, useLayoutEffect: function() {
  }, useCallback: function(a, s) {
    return di(function() {
      return a;
    }, s);
  }, useImperativeHandle: Tn, useEffect: Tn, useDebugValue: Tn, useDeferredValue: function(a) {
    return _r(), a;
  }, useTransition: function() {
    return _r(), [!1, Zs];
  }, useId: function() {
    var a = aa.treeContext, s = a.overflow;
    a = a.id, a = (a & ~(1 << 32 - kn(a) - 1)).toString(32) + s;
    var d = Cn;
    if (d === null) throw Error(t(404));
    return s = qr++, a = ":" + d.idPrefix + "R" + a, 0 < s && (a += "H" + s.toString(32)), a + ":";
  }, useMutableSource: function(a, s) {
    return _r(), s(a._source);
  }, useSyncExternalStore: function(a, s, d) {
    if (d === void 0) throw Error(t(407));
    return d();
  } }, Cn = null, sa = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function Ks(a) {
    return console.error(a), null;
  }
  function Vr() {
  }
  function el(a, s, d, y, P, R, z, Q, fe) {
    var Te = [], xe = /* @__PURE__ */ new Set();
    return s = { destination: null, responseState: s, progressiveChunkSize: y === void 0 ? 12800 : y, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: xe, pingedTasks: Te, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: P === void 0 ? Ks : P, onAllReady: R === void 0 ? Vr : R, onShellReady: z === void 0 ? Vr : z, onShellError: Q === void 0 ? Vr : Q, onFatalError: fe === void 0 ? Vr : fe }, d = An(s, 0, null, d, !1, !1), d.parentFlushed = !0, a = la(s, a, null, d, xe, de, null, Sn), Te.push(a), s;
  }
  function la(a, s, d, y, P, R, z, Q) {
    a.allPendingTasks++, d === null ? a.pendingRootTasks++ : d.pendingTasks++;
    var fe = { node: s, ping: function() {
      var Te = a.pingedTasks;
      Te.push(fe), Te.length === 1 && vi(a);
    }, blockedBoundary: d, blockedSegment: y, abortSet: P, legacyContext: R, context: z, treeContext: Q };
    return P.add(fe), fe;
  }
  function An(a, s, d, y, P, R) {
    return { status: 0, id: -1, index: s, parentFlushed: !1, chunks: [], children: [], formatContext: y, boundary: d, lastPushedText: P, textEmbedded: R };
  }
  function Gr(a, s) {
    if (a = a.onError(s), a != null && typeof a != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof a + '" instead');
    return a;
  }
  function On(a, s) {
    var d = a.onShellError;
    d(s), d = a.onFatalError, d(s), a.destination !== null ? (a.status = 2, I(a.destination, s)) : (a.status = 1, a.fatalError = s);
  }
  function pi(a, s, d, y, P) {
    for (lr = {}, aa = s, qr = 0, a = d(y, P); _n; ) _n = !1, qr = 0, En += 1, Je = null, a = d(y, P);
    return oa(), a;
  }
  function hi(a, s, d, y) {
    var P = d.render(), R = y.childContextTypes;
    if (R != null) {
      var z = s.legacyContext;
      if (typeof d.getChildContext != "function") y = z;
      else {
        d = d.getChildContext();
        for (var Q in d) if (!(Q in R)) throw Error(t(108, J(y) || "Unknown", Q));
        y = fr({}, z, d);
      }
      s.legacyContext = y, At(a, s, P), s.legacyContext = z;
    } else At(a, s, P);
  }
  function mi(a, s) {
    if (a && a.defaultProps) {
      s = fr({}, s), a = a.defaultProps;
      for (var d in a) s[d] === void 0 && (s[d] = a[d]);
      return s;
    }
    return s;
  }
  function ca(a, s, d, y, P) {
    if (typeof d == "function") if (d.prototype && d.prototype.isReactComponent) {
      P = be(d, s.legacyContext);
      var R = d.contextType;
      R = new d(y, typeof R == "object" && R !== null ? R._currentValue : P), xr(R, d, y, P), hi(a, s, R, d);
    } else {
      R = be(d, s.legacyContext), P = pi(a, s, d, y, R);
      var z = qr !== 0;
      if (typeof P == "object" && P !== null && typeof P.render == "function" && P.$$typeof === void 0) xr(P, d, y, R), hi(a, s, P, d);
      else if (z) {
        y = s.treeContext, s.treeContext = pr(y, 1, 0);
        try {
          At(a, s, P);
        } finally {
          s.treeContext = y;
        }
      } else At(a, s, P);
    }
    else if (typeof d == "string") {
      switch (P = s.blockedSegment, R = ae(P.chunks, d, y, a.responseState, P.formatContext), P.lastPushedText = !1, z = P.formatContext, P.formatContext = oe(z, d, y), ua(a, s, R), P.formatContext = z, d) {
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
          P.chunks.push(Ye, w(d), lt);
      }
      P.lastPushedText = !1;
    } else {
      switch (d) {
        case N:
        case v:
        case zr:
        case $r:
        case Sr:
          At(a, s, y.children);
          return;
        case Br:
          At(a, s, y.children);
          return;
        case f:
          throw Error(t(343));
        case wn:
          e: {
            d = s.blockedBoundary, P = s.blockedSegment, R = y.fallback, y = y.children, z = /* @__PURE__ */ new Set();
            var Q = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: z, errorDigest: null }, fe = An(a, P.chunks.length, Q, P.formatContext, !1, !1);
            P.children.push(fe), P.lastPushedText = !1;
            var Te = An(a, 0, null, P.formatContext, !1, !1);
            Te.parentFlushed = !0, s.blockedBoundary = Q, s.blockedSegment = Te;
            try {
              if (ua(
                a,
                s,
                y
              ), Te.lastPushedText && Te.textEmbedded && Te.chunks.push(M), Te.status = 1, Rn(Q, Te), Q.pendingTasks === 0) break e;
            } catch (xe) {
              Te.status = 4, Q.forceClientRender = !0, Q.errorDigest = Gr(a, xe);
            } finally {
              s.blockedBoundary = d, s.blockedSegment = P;
            }
            s = la(a, R, d, fe, z, s.legacyContext, s.context, s.treeContext), a.pingedTasks.push(s);
          }
          return;
      }
      if (typeof d == "object" && d !== null) switch (d.$$typeof) {
        case vn:
          if (y = pi(a, s, d.render, y, P), qr !== 0) {
            d = s.treeContext, s.treeContext = pr(d, 1, 0);
            try {
              At(a, s, y);
            } finally {
              s.treeContext = d;
            }
          } else At(a, s, y);
          return;
        case n:
          d = d.type, y = mi(d, y), ca(a, s, d, y, P);
          return;
        case Ur:
          if (P = y.children, d = d._context, y = y.value, R = d._currentValue, d._currentValue = y, z = ke, ke = y = { parent: z, depth: z === null ? 0 : z.depth + 1, context: d, parentValue: R, value: y }, s.context = y, At(a, s, P), a = ke, a === null) throw Error(t(403));
          y = a.parentValue, a.context._currentValue = y === O ? a.context._defaultValue : y, a = ke = a.parent, s.context = a;
          return;
        case Pr:
          y = y.children, y = y(d._currentValue), At(a, s, y);
          return;
        case l:
          P = d._init, d = P(d._payload), y = mi(d, y), ca(a, s, d, y, void 0);
          return;
      }
      throw Error(t(
        130,
        d == null ? d : typeof d,
        ""
      ));
    }
  }
  function At(a, s, d) {
    if (s.node = d, typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case bn:
          ca(a, s, d.type, d.props, d.ref);
          return;
        case wr:
          throw Error(t(257));
        case l:
          var y = d._init;
          d = y(d._payload), At(a, s, d);
          return;
      }
      if (qe(d)) {
        gi(a, s, d);
        return;
      }
      if (d === null || typeof d != "object" ? y = null : (y = j && d[j] || d["@@iterator"], y = typeof y == "function" ? y : null), y && (y = y.call(d))) {
        if (d = y.next(), !d.done) {
          var P = [];
          do
            P.push(d.value), d = y.next();
          while (!d.done);
          gi(a, s, P);
        }
        return;
      }
      throw a = Object.prototype.toString.call(d), Error(t(31, a === "[object Object]" ? "object with keys {" + Object.keys(d).join(", ") + "}" : a));
    }
    typeof d == "string" ? (y = s.blockedSegment, y.lastPushedText = T(s.blockedSegment.chunks, d, a.responseState, y.lastPushedText)) : typeof d == "number" && (y = s.blockedSegment, y.lastPushedText = T(s.blockedSegment.chunks, "" + d, a.responseState, y.lastPushedText));
  }
  function gi(a, s, d) {
    for (var y = d.length, P = 0; P < y; P++) {
      var R = s.treeContext;
      s.treeContext = pr(R, y, P);
      try {
        ua(a, s, d[P]);
      } finally {
        s.treeContext = R;
      }
    }
  }
  function ua(a, s, d) {
    var y = s.blockedSegment.formatContext, P = s.legacyContext, R = s.context;
    try {
      return At(a, s, d);
    } catch (fe) {
      if (oa(), typeof fe == "object" && fe !== null && typeof fe.then == "function") {
        d = fe;
        var z = s.blockedSegment, Q = An(a, z.chunks.length, null, z.formatContext, z.lastPushedText, !0);
        z.children.push(Q), z.lastPushedText = !1, a = la(a, s.node, s.blockedBoundary, Q, s.abortSet, s.legacyContext, s.context, s.treeContext).ping, d.then(a, a), s.blockedSegment.formatContext = y, s.legacyContext = P, s.context = R, sr(R);
      } else throw s.blockedSegment.formatContext = y, s.legacyContext = P, s.context = R, sr(R), fe;
    }
  }
  function tl(a) {
    var s = a.blockedBoundary;
    a = a.blockedSegment, a.status = 3, bi(this, s, a);
  }
  function yi(a, s, d) {
    var y = a.blockedBoundary;
    a.blockedSegment.status = 3, y === null ? (s.allPendingTasks--, s.status !== 2 && (s.status = 2, s.destination !== null && s.destination.close())) : (y.pendingTasks--, y.forceClientRender || (y.forceClientRender = !0, a = d === void 0 ? Error(t(432)) : d, y.errorDigest = s.onError(a), y.parentFlushed && s.clientRenderedBoundaries.push(y)), y.fallbackAbortableTasks.forEach(function(P) {
      return yi(P, s, d);
    }), y.fallbackAbortableTasks.clear(), s.allPendingTasks--, s.allPendingTasks === 0 && (y = s.onAllReady, y()));
  }
  function Rn(a, s) {
    if (s.chunks.length === 0 && s.children.length === 1 && s.children[0].boundary === null) {
      var d = s.children[0];
      d.id = s.id, d.parentFlushed = !0, d.status === 1 && Rn(a, d);
    } else a.completedSegments.push(s);
  }
  function bi(a, s, d) {
    if (s === null) {
      if (d.parentFlushed) {
        if (a.completedRootSegment !== null) throw Error(t(389));
        a.completedRootSegment = d;
      }
      a.pendingRootTasks--, a.pendingRootTasks === 0 && (a.onShellError = Vr, s = a.onShellReady, s());
    } else s.pendingTasks--, s.forceClientRender || (s.pendingTasks === 0 ? (d.parentFlushed && d.status === 1 && Rn(s, d), s.parentFlushed && a.completedBoundaries.push(s), s.fallbackAbortableTasks.forEach(tl, a), s.fallbackAbortableTasks.clear()) : d.parentFlushed && d.status === 1 && (Rn(s, d), s.completedSegments.length === 1 && s.parentFlushed && a.partialBoundaries.push(s)));
    a.allPendingTasks--, a.allPendingTasks === 0 && (a = a.onAllReady, a());
  }
  function vi(a) {
    if (a.status !== 2) {
      var s = ke, d = sa.current;
      sa.current = fi;
      var y = Cn;
      Cn = a.responseState;
      try {
        var P = a.pingedTasks, R;
        for (R = 0; R < P.length; R++) {
          var z = P[R], Q = a, fe = z.blockedSegment;
          if (fe.status === 0) {
            sr(z.context);
            try {
              At(Q, z, z.node), fe.lastPushedText && fe.textEmbedded && fe.chunks.push(M), z.abortSet.delete(z), fe.status = 1, bi(Q, z.blockedBoundary, fe);
            } catch (Ht) {
              if (oa(), typeof Ht == "object" && Ht !== null && typeof Ht.then == "function") {
                var Te = z.ping;
                Ht.then(Te, Te);
              } else {
                z.abortSet.delete(z), fe.status = 4;
                var xe = z.blockedBoundary, Ze = Ht, Ot = Gr(Q, Ze);
                if (xe === null ? On(Q, Ze) : (xe.pendingTasks--, xe.forceClientRender || (xe.forceClientRender = !0, xe.errorDigest = Ot, xe.parentFlushed && Q.clientRenderedBoundaries.push(xe))), Q.allPendingTasks--, Q.allPendingTasks === 0) {
                  var Wt = Q.onAllReady;
                  Wt();
                }
              }
            } finally {
            }
          }
        }
        P.splice(0, R), a.destination !== null && da(a, a.destination);
      } catch (Ht) {
        Gr(a, Ht), On(a, Ht);
      } finally {
        Cn = y, sa.current = d, d === fi && sr(s);
      }
    }
  }
  function Pn(a, s, d) {
    switch (d.parentFlushed = !0, d.status) {
      case 0:
        var y = d.id = a.nextSegmentId++;
        return d.lastPushedText = !1, d.textEmbedded = !1, a = a.responseState, c(s, Me), c(s, a.placeholderPrefix), a = w(y.toString(16)), c(s, a), u(s, Xt);
      case 1:
        d.status = 2;
        var P = !0;
        y = d.chunks;
        var R = 0;
        d = d.children;
        for (var z = 0; z < d.length; z++) {
          for (P = d[z]; R < P.index; R++) c(s, y[R]);
          P = Nn(a, s, P);
        }
        for (; R < y.length - 1; R++) c(s, y[R]);
        return R < y.length && (P = u(s, y[R])), P;
      default:
        throw Error(t(390));
    }
  }
  function Nn(a, s, d) {
    var y = d.boundary;
    if (y === null) return Pn(a, s, d);
    if (y.parentFlushed = !0, y.forceClientRender) y = y.errorDigest, u(s, ft), c(s, ct), y && (c(s, Ft), c(s, w(_e(y))), c(s, Dt)), u(s, vr), Pn(a, s, d);
    else if (0 < y.pendingTasks) {
      y.rootSegmentID = a.nextSegmentId++, 0 < y.completedSegments.length && a.partialBoundaries.push(y);
      var P = a.responseState, R = P.nextSuspenseID++;
      P = h(P.boundaryPrefix + R.toString(16)), y = y.id = P, it(s, a.responseState, y), Pn(a, s, d);
    } else if (y.byteSize > a.progressiveChunkSize) y.rootSegmentID = a.nextSegmentId++, a.completedBoundaries.push(y), it(s, a.responseState, y.id), Pn(a, s, d);
    else {
      if (u(s, Rt), d = y.completedSegments, d.length !== 1) throw Error(t(391));
      Nn(a, s, d[0]);
    }
    return u(s, nt);
  }
  function wi(a, s, d) {
    return nr(s, a.responseState, d.formatContext, d.id), Nn(a, s, d), Tt(s, d.formatContext);
  }
  function Si(a, s, d) {
    for (var y = d.completedSegments, P = 0; P < y.length; P++) ki(a, s, d, y[P]);
    if (y.length = 0, a = a.responseState, y = d.id, d = d.rootSegmentID, c(s, a.startInlineScript), a.sentCompleteBoundaryFunction ? c(s, V) : (a.sentCompleteBoundaryFunction = !0, c(s, _)), y === null) throw Error(t(395));
    return d = w(d.toString(16)), c(s, y), c(s, ye), c(s, a.segmentPrefix), c(s, d), u(s, Se);
  }
  function ki(a, s, d, y) {
    if (y.status === 2) return !0;
    var P = y.id;
    if (P === -1) {
      if ((y.id = d.rootSegmentID) === -1) throw Error(t(392));
      return wi(a, s, y);
    }
    return wi(a, s, y), a = a.responseState, c(s, a.startInlineScript), a.sentCompleteSegmentFunction ? c(s, ir) : (a.sentCompleteSegmentFunction = !0, c(s, ar)), c(s, a.segmentPrefix), P = w(P.toString(16)), c(s, P), c(s, m), c(s, a.placeholderPrefix), c(s, P), u(s, b);
  }
  function da(a, s) {
    r = new Uint8Array(512), i = 0;
    try {
      var d = a.completedRootSegment;
      if (d !== null && a.pendingRootTasks === 0) {
        Nn(a, s, d), a.completedRootSegment = null;
        var y = a.responseState.bootstrapChunks;
        for (d = 0; d < y.length - 1; d++) c(s, y[d]);
        d < y.length && u(s, y[d]);
      }
      var P = a.clientRenderedBoundaries, R;
      for (R = 0; R < P.length; R++) {
        var z = P[R];
        y = s;
        var Q = a.responseState, fe = z.id, Te = z.errorDigest, xe = z.errorMessage, Ze = z.errorComponentStack;
        if (c(y, Q.startInlineScript), Q.sentClientRenderFunction ? c(y, we) : (Q.sentClientRenderFunction = !0, c(
          y,
          De
        )), fe === null) throw Error(t(395));
        c(y, fe), c(y, Qe), (Te || xe || Ze) && (c(y, tt), c(y, w($t(Te || "")))), (xe || Ze) && (c(y, tt), c(y, w($t(xe || "")))), Ze && (c(y, tt), c(y, w($t(Ze)))), u(y, Ve);
      }
      P.splice(0, R);
      var Ot = a.completedBoundaries;
      for (R = 0; R < Ot.length; R++) Si(a, s, Ot[R]);
      Ot.splice(0, R), g(s), r = new Uint8Array(512), i = 0;
      var Wt = a.partialBoundaries;
      for (R = 0; R < Wt.length; R++) {
        var Ht = Wt[R];
        e: {
          P = a, z = s;
          var In = Ht.completedSegments;
          for (Q = 0; Q < In.length; Q++) if (!ki(
            P,
            z,
            Ht,
            In[Q]
          )) {
            Q++, In.splice(0, Q);
            var _i = !1;
            break e;
          }
          In.splice(0, Q), _i = !0;
        }
        if (!_i) {
          a.destination = null, R++, Wt.splice(0, R);
          return;
        }
      }
      Wt.splice(0, R);
      var fa = a.completedBoundaries;
      for (R = 0; R < fa.length; R++) Si(a, s, fa[R]);
      fa.splice(0, R);
    } finally {
      g(s), a.allPendingTasks === 0 && a.pingedTasks.length === 0 && a.clientRenderedBoundaries.length === 0 && a.completedBoundaries.length === 0 && s.close();
    }
  }
  function xi(a, s) {
    try {
      var d = a.abortableTasks;
      d.forEach(function(y) {
        return yi(y, a, s);
      }), d.clear(), a.destination !== null && da(a, a.destination);
    } catch (y) {
      Gr(a, y), On(a, y);
    }
  }
  return zn.renderToReadableStream = function(a, s) {
    return new Promise(function(d, y) {
      var P, R, z = new Promise(function(xe, Ze) {
        R = xe, P = Ze;
      }), Q = el(a, Ae(s ? s.identifierPrefix : void 0, s ? s.nonce : void 0, s ? s.bootstrapScriptContent : void 0, s ? s.bootstrapScripts : void 0, s ? s.bootstrapModules : void 0), Ke(s ? s.namespaceURI : void 0), s ? s.progressiveChunkSize : void 0, s ? s.onError : void 0, R, function() {
        var xe = new ReadableStream({ type: "bytes", pull: function(Ze) {
          if (Q.status === 1) Q.status = 2, I(Ze, Q.fatalError);
          else if (Q.status !== 2 && Q.destination === null) {
            Q.destination = Ze;
            try {
              da(Q, Ze);
            } catch (Ot) {
              Gr(Q, Ot), On(Q, Ot);
            }
          }
        }, cancel: function() {
          xi(Q);
        } }, { highWaterMark: 0 });
        xe.allReady = z, d(xe);
      }, function(xe) {
        z.catch(function() {
        }), y(xe);
      }, P);
      if (s && s.signal) {
        var fe = s.signal, Te = function() {
          xi(Q, fe.reason), fe.removeEventListener("abort", Te);
        };
        fe.addEventListener("abort", Te);
      }
      vi(Q);
    });
  }, zn.version = "18.3.1", zn;
}
var jr, rs;
jr = uc(), rs = dc();
jr.version;
jr.renderToString;
jr.renderToStaticMarkup;
jr.renderToNodeStream;
jr.renderToStaticNodeStream;
rs.renderToReadableStream;
const fc = "staticMarkup";
function ns() {
  const e = ol().indexOf(fc) > -1 ? !0 : void 0;
  return {
    isBootstrap: e,
    isReact: e ? void 0 : !0
  };
}
const Rr = ({ gaData: e, prefix: t = "", children: r }) => {
  const { isReact: i } = ns(), { onClick: c, ...u } = r.props;
  if (i)
    return dt.cloneElement(r, {
      ...u,
      onClick: (w) => (e && e.event && e.action && sc(e), c ? c(w) : !0)
    });
  let g = "";
  ["input", "header", "header-input"].includes(t) && (g = `-${t}`);
  const S = {
    [`data-ga${g}`]: e.text,
    [`data-ga${g}-name`]: e.name,
    [`data-ga${g}-event`]: e.event,
    [`data-ga${g}-action`]: e.action,
    [`data-ga${g}-type`]: e.type,
    [`data-ga${g}-region`]: e.region,
    [`data-ga${g}-section`]: e.section,
    [`data-ga${g}-component`]: e.component
  };
  return dt.cloneElement(r, {
    ...u,
    onClick: c,
    ...S
  });
}, pc = Ga(
  ({
    id: e,
    parentId: t,
    /** @type {AccordionCard} */
    item: r,
    openCard: i,
    onClick: c,
    gaData: u
  }, g) => {
    var S, w, h, I, E, $;
    const G = e === i, A = G ? "open" : "close";
    return /* @__PURE__ */ B.jsxs(
      "div",
      {
        ref: g,
        className: Gt("accordion-item", "mt-3", {
          [`accordion-item-${r.color}`]: r.color,
          "accordion-header-icon": (S = r.content) == null ? void 0 : S.icon
        }),
        children: [
          /* @__PURE__ */ B.jsx("div", { className: "accordion-header", children: /* @__PURE__ */ B.jsx("h4", { children: /* @__PURE__ */ B.jsx(
            Rr,
            {
              gaData: {
                ...u,
                action: A,
                text: r.content.header
              },
              children: /* @__PURE__ */ B.jsxs(
                "button",
                {
                  "data-testid": "accordion-opener",
                  className: Gt({ collapsed: !G }),
                  "data-bs-toggle": "collapse",
                  href: `#card-body-${e}`,
                  type: "button",
                  "aria-expanded": G,
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
                    ] }) : (E = r.content) == null ? void 0 : E.header,
                    /* @__PURE__ */ B.jsx("i", { className: "fas fa-chevron-up" })
                  ]
                }
              )
            }
          ) }) }),
          (($ = r.content) == null ? void 0 : $.body) && /* @__PURE__ */ B.jsx(
            "div",
            {
              "data-bs-parent": `#${t}`,
              id: `card-body-${e}`,
              className: Gt("collapse", { show: G }),
              children: /* @__PURE__ */ B.jsx(
                "div",
                {
                  className: "accordion-body",
                  dangerouslySetInnerHTML: Ar(
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
const Zi = {
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
  disabled: g,
  element: S = "button",
  href: w,
  icon: h,
  innerRef: I,
  onClick: E,
  size: $ = "default",
  variant: G,
  classes: A,
  target: k = "_self",
  ...F
}) => {
  if (G) {
    const X = {
      borderless: "borderless",
      outline: "outline",
      filled: "filled"
    }, H = Gt("btn", X[G], {
      [`btn-${X[G]}-${u}`]: !0,
      "btn-medium": $ === "medium",
      "btn-small": $ === "small",
      "btn-large": $ === "large" || $ === "default",
      disabled: g
    });
    let x = S;
    return w && S === "button" && (x = "a"), /* @__PURE__ */ B.jsx(
      Rr,
      {
        gaData: {
          ...Zi,
          section: t,
          ...r,
          text: e
        },
        children: /* @__PURE__ */ B.jsxs(
          x,
          {
            type: x === "button" && E ? "button" : void 0,
            ...F,
            className: Gt(A) || H,
            href: w,
            ref: I,
            onClick: E,
            "aria-label": i,
            target: x === "a" ? k : null,
            disabled: g,
            children: [
              h && /* @__PURE__ */ B.jsx("i", { className: `${h == null ? void 0 : h[0]} fa-${h == null ? void 0 : h[1]} me-1` }),
              e
            ]
          }
        )
      }
    );
  }
  const Y = Gt("btn", {
    [`btn-${u}`]: !0,
    "btn-md": $ === "small",
    "btn-sm": $ === "xsmall",
    "btn-block": c,
    disabled: g
  });
  let q = S;
  return w && S === "button" && (q = "a"), /* @__PURE__ */ B.jsx(
    Rr,
    {
      gaData: {
        ...Zi,
        section: t,
        // @deprecated - remove at some point
        ...r,
        text: e
      },
      children: /* @__PURE__ */ B.jsxs(
        q,
        {
          type: q === "button" && E ? "button" : void 0,
          ...F,
          className: Gt(A) || Y,
          href: w,
          ref: I,
          onClick: E,
          "aria-label": i,
          target: q === "a" ? k : null,
          children: [
            h && /* @__PURE__ */ B.jsx("i", { className: `${h == null ? void 0 : h[0]} fa-${h == null ? void 0 : h[1]} me-1` }),
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
  gaData: Xa,
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
var is = { exports: {} }, Be = {}, Ki;
function hc() {
  if (Ki) return Be;
  Ki = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), u = Symbol.for("react.consumer"), g = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), I = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), G = Symbol.for("react.client.reference");
  function A(k) {
    if (typeof k == "object" && k !== null) {
      var F = k.$$typeof;
      switch (F) {
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
                case g:
                case S:
                case E:
                case I:
                  return k;
                case u:
                  return k;
                default:
                  return F;
              }
          }
        case t:
          return F;
      }
    }
  }
  return Be.ContextConsumer = u, Be.ContextProvider = g, Be.Element = e, Be.ForwardRef = S, Be.Fragment = r, Be.Lazy = E, Be.Memo = I, Be.Portal = t, Be.Profiler = c, Be.StrictMode = i, Be.Suspense = w, Be.SuspenseList = h, Be.isContextConsumer = function(k) {
    return A(k) === u;
  }, Be.isContextProvider = function(k) {
    return A(k) === g;
  }, Be.isElement = function(k) {
    return typeof k == "object" && k !== null && k.$$typeof === e;
  }, Be.isForwardRef = function(k) {
    return A(k) === S;
  }, Be.isFragment = function(k) {
    return A(k) === r;
  }, Be.isLazy = function(k) {
    return A(k) === E;
  }, Be.isMemo = function(k) {
    return A(k) === I;
  }, Be.isPortal = function(k) {
    return A(k) === t;
  }, Be.isProfiler = function(k) {
    return A(k) === c;
  }, Be.isStrictMode = function(k) {
    return A(k) === i;
  }, Be.isSuspense = function(k) {
    return A(k) === w;
  }, Be.isSuspenseList = function(k) {
    return A(k) === h;
  }, Be.isValidElementType = function(k) {
    return typeof k == "string" || typeof k == "function" || k === r || k === c || k === i || k === w || k === h || k === $ || typeof k == "object" && k !== null && (k.$$typeof === E || k.$$typeof === I || k.$$typeof === g || k.$$typeof === u || k.$$typeof === S || k.$$typeof === G || k.getModuleId !== void 0);
  }, Be.typeOf = A, Be;
}
is.exports = hc();
var os = is.exports;
function mc(e) {
  function t(M, T, L, D, p) {
    for (var re = 0, C = 0, ne = 0, ee = 0, te, W, ie = 0, se = 0, K, he = K = te = 0, Z = 0, le = 0, $e = 0, me = 0, ot = L.length, Ge = ot - 1, ge, U = "", ae = "", Ye = "", lt = "", Me; Z < ot; ) {
      if (W = L.charCodeAt(Z), Z === Ge && C + ee + ne + re !== 0 && (C !== 0 && (W = C === 47 ? 10 : 47), ee = ne = re = 0, ot++, Ge++), C + ee + ne + re === 0) {
        if (Z === Ge && (0 < le && (U = U.replace($, "")), 0 < U.trim().length)) {
          switch (W) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              U += L.charAt(Z);
          }
          W = 59;
        }
        switch (W) {
          case 123:
            for (U = U.trim(), te = U.charCodeAt(0), K = 1, me = ++Z; Z < ot; ) {
              switch (W = L.charCodeAt(Z)) {
                case 123:
                  K++;
                  break;
                case 125:
                  K--;
                  break;
                case 47:
                  switch (W = L.charCodeAt(Z + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (he = Z + 1; he < Ge; ++he)
                          switch (L.charCodeAt(he)) {
                            case 47:
                              if (W === 42 && L.charCodeAt(he - 1) === 42 && Z + 2 !== he) {
                                Z = he + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (W === 47) {
                                Z = he + 1;
                                break e;
                              }
                          }
                        Z = he;
                      }
                  }
                  break;
                case 91:
                  W++;
                case 40:
                  W++;
                case 34:
                case 39:
                  for (; Z++ < Ge && L.charCodeAt(Z) !== W; )
                    ;
              }
              if (K === 0) break;
              Z++;
            }
            switch (K = L.substring(me, Z), te === 0 && (te = (U = U.replace(E, "").trim()).charCodeAt(0)), te) {
              case 64:
                switch (0 < le && (U = U.replace($, "")), W = U.charCodeAt(1), W) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    le = T;
                    break;
                  default:
                    le = st;
                }
                if (K = t(T, le, K, W, p + 1), me = K.length, 0 < Ae && (le = r(st, U, $e), Me = S(3, K, le, T, Pe, pe, me, W, p, D), U = le.join(""), Me !== void 0 && (me = (K = Me.trim()).length) === 0 && (W = 0, K = "")), 0 < me) switch (W) {
                  case 115:
                    U = U.replace(ce, g);
                  case 100:
                  case 109:
                  case 45:
                    K = U + "{" + K + "}";
                    break;
                  case 107:
                    U = U.replace(q, "$1 $2"), K = U + "{" + K + "}", K = Ce === 1 || Ce === 2 && u("@" + K, 3) ? "@-webkit-" + K + "@" + K : "@" + K;
                    break;
                  default:
                    K = U + K, D === 112 && (K = (ae += K, ""));
                }
                else K = "";
                break;
              default:
                K = t(T, r(T, U, $e), K, D, p + 1);
            }
            Ye += K, K = $e = le = he = te = 0, U = "", W = L.charCodeAt(++Z);
            break;
          case 125:
          case 59:
            if (U = (0 < le ? U.replace($, "") : U).trim(), 1 < (me = U.length)) switch (he === 0 && (te = U.charCodeAt(0), te === 45 || 96 < te && 123 > te) && (me = (U = U.replace(" ", ":")).length), 0 < Ae && (Me = S(1, U, T, M, Pe, pe, ae.length, D, p, D)) !== void 0 && (me = (U = Me.trim()).length) === 0 && (U = "\0\0"), te = U.charCodeAt(0), W = U.charCodeAt(1), te) {
              case 0:
                break;
              case 64:
                if (W === 105 || W === 99) {
                  lt += U + L.charAt(Z);
                  break;
                }
              default:
                U.charCodeAt(me - 1) !== 58 && (ae += c(U, te, W, U.charCodeAt(2)));
            }
            $e = le = he = te = 0, U = "", W = L.charCodeAt(++Z);
        }
      }
      switch (W) {
        case 13:
        case 10:
          C === 47 ? C = 0 : 1 + te === 0 && D !== 107 && 0 < U.length && (le = 1, U += "\0"), 0 < Ae * Ke && S(0, U, T, M, Pe, pe, ae.length, D, p, D), pe = 1, Pe++;
          break;
        case 59:
        case 125:
          if (C + ee + ne + re === 0) {
            pe++;
            break;
          }
        default:
          switch (pe++, ge = L.charAt(Z), W) {
            case 9:
            case 32:
              if (ee + re + C === 0) switch (ie) {
                case 44:
                case 58:
                case 9:
                case 32:
                  ge = "";
                  break;
                default:
                  W !== 32 && (ge = " ");
              }
              break;
            case 0:
              ge = "\\0";
              break;
            case 12:
              ge = "\\f";
              break;
            case 11:
              ge = "\\v";
              break;
            case 38:
              ee + C + re === 0 && (le = $e = 1, ge = "\f" + ge);
              break;
            case 108:
              if (ee + C + re + Ne === 0 && 0 < he) switch (Z - he) {
                case 2:
                  ie === 112 && L.charCodeAt(Z - 3) === 58 && (Ne = ie);
                case 8:
                  se === 111 && (Ne = se);
              }
              break;
            case 58:
              ee + C + re === 0 && (he = Z);
              break;
            case 44:
              C + ne + ee + re === 0 && (le = 1, ge += "\r");
              break;
            case 34:
            case 39:
              C === 0 && (ee = ee === W ? 0 : ee === 0 ? W : ee);
              break;
            case 91:
              ee + C + ne === 0 && re++;
              break;
            case 93:
              ee + C + ne === 0 && re--;
              break;
            case 41:
              ee + C + re === 0 && ne--;
              break;
            case 40:
              if (ee + C + re === 0) {
                if (te === 0) switch (2 * ie + 3 * se) {
                  case 533:
                    break;
                  default:
                    te = 1;
                }
                ne++;
              }
              break;
            case 64:
              C + ne + ee + re + he + K === 0 && (K = 1);
              break;
            case 42:
            case 47:
              if (!(0 < ee + re + ne)) switch (C) {
                case 0:
                  switch (2 * W + 3 * L.charCodeAt(Z + 1)) {
                    case 235:
                      C = 47;
                      break;
                    case 220:
                      me = Z, C = 42;
                  }
                  break;
                case 42:
                  W === 47 && ie === 42 && me + 2 !== Z && (L.charCodeAt(me + 2) === 33 && (ae += L.substring(me, Z + 1)), ge = "", C = 0);
              }
          }
          C === 0 && (U += ge);
      }
      se = ie, ie = W, Z++;
    }
    if (me = ae.length, 0 < me) {
      if (le = T, 0 < Ae && (Me = S(2, ae, le, M, Pe, pe, me, D, p, D), Me !== void 0 && (ae = Me).length === 0)) return lt + ae + Ye;
      if (ae = le.join(",") + "{" + ae + "}", Ce * Ne !== 0) {
        switch (Ce !== 2 || u(ae, 2) || (Ne = 0), Ne) {
          case 111:
            ae = ae.replace(H, ":-moz-$1") + ae;
            break;
          case 112:
            ae = ae.replace(X, "::-webkit-input-$1") + ae.replace(X, "::-moz-$1") + ae.replace(X, ":-ms-input-$1") + ae;
        }
        Ne = 0;
      }
    }
    return lt + ae + Ye;
  }
  function r(M, T, L) {
    var D = T.trim().split(F);
    T = D;
    var p = D.length, re = M.length;
    switch (re) {
      case 0:
      case 1:
        var C = 0;
        for (M = re === 0 ? "" : M[0] + " "; C < p; ++C)
          T[C] = i(M, T[C], L).trim();
        break;
      default:
        var ne = C = 0;
        for (T = []; C < p; ++C)
          for (var ee = 0; ee < re; ++ee)
            T[ne++] = i(M[ee] + " ", D[C], L).trim();
    }
    return T;
  }
  function i(M, T, L) {
    var D = T.charCodeAt(0);
    switch (33 > D && (D = (T = T.trim()).charCodeAt(0)), D) {
      case 38:
        return T.replace(Y, "$1" + M.trim());
      case 58:
        return M.trim() + T.replace(Y, "$1" + M.trim());
      default:
        if (0 < 1 * L && 0 < T.indexOf("\f")) return T.replace(Y, (M.charCodeAt(0) === 58 ? "" : "$1") + M.trim());
    }
    return M + T;
  }
  function c(M, T, L, D) {
    var p = M + ";", re = 2 * T + 3 * L + 4 * D;
    if (re === 944) {
      M = p.indexOf(":", 9) + 1;
      var C = p.substring(M, p.length - 1).trim();
      return C = p.substring(0, M).trim() + C + ";", Ce === 1 || Ce === 2 && u(C, 1) ? "-webkit-" + C + C : C;
    }
    if (Ce === 0 || Ce === 2 && !u(p, 1)) return p;
    switch (re) {
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
        if (0 < p.indexOf("image-set(", 11)) return p.replace(ue, "$1-webkit-$2") + p;
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
        return C = p.substring(p.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + C + "-webkit-" + p + "-ms-flex-pack" + C + p;
      case 1005:
        return A.test(p) ? p.replace(G, ":-webkit-") + p.replace(G, ":-moz-") + p : p;
      case 1e3:
        switch (C = p.substring(13).trim(), T = C.indexOf("-") + 1, C.charCodeAt(0) + C.charCodeAt(T)) {
          case 226:
            C = p.replace(x, "tb");
            break;
          case 232:
            C = p.replace(x, "tb-rl");
            break;
          case 220:
            C = p.replace(x, "lr");
            break;
          default:
            return p;
        }
        return "-webkit-" + p + "-ms-" + C + p;
      case 1017:
        if (p.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (T = (p = M).length - 10, C = (p.charCodeAt(T) === 33 ? p.substring(0, T) : p).substring(M.indexOf(":", 7) + 1).trim(), re = C.charCodeAt(0) + (C.charCodeAt(7) | 0)) {
          case 203:
            if (111 > C.charCodeAt(8)) break;
          case 115:
            p = p.replace(C, "-webkit-" + C) + ";" + p;
            break;
          case 207:
          case 102:
            p = p.replace(C, "-webkit-" + (102 < re ? "inline-" : "") + "box") + ";" + p.replace(C, "-webkit-" + C) + ";" + p.replace(C, "-ms-" + C + "box") + ";" + p;
        }
        return p + ";";
      case 938:
        if (p.charCodeAt(5) === 45) switch (p.charCodeAt(6)) {
          case 105:
            return C = p.replace("-items", ""), "-webkit-" + p + "-webkit-box-" + C + "-ms-flex-" + C + p;
          case 115:
            return "-webkit-" + p + "-ms-flex-item-" + p.replace(Ie, "") + p;
          default:
            return "-webkit-" + p + "-ms-flex-line-pack" + p.replace("align-content", "").replace(Ie, "") + p;
        }
        break;
      case 973:
      case 989:
        if (p.charCodeAt(3) !== 45 || p.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (qe.test(M) === !0) return (C = M.substring(M.indexOf(":") + 1)).charCodeAt(0) === 115 ? c(M.replace("stretch", "fill-available"), T, L, D).replace(":fill-available", ":stretch") : p.replace(C, "-webkit-" + C) + p.replace(C, "-moz-" + C.replace("fill-", "")) + p;
        break;
      case 962:
        if (p = "-webkit-" + p + (p.charCodeAt(5) === 102 ? "-ms-" + p : "") + p, L + D === 211 && p.charCodeAt(13) === 105 && 0 < p.indexOf("transform", 10)) return p.substring(0, p.indexOf(";", 27) + 1).replace(k, "$1-webkit-$2") + p;
    }
    return p;
  }
  function u(M, T) {
    var L = M.indexOf(T === 1 ? ":" : "{"), D = M.substring(0, T !== 3 ? L : 10);
    return L = M.substring(L + 1, M.length - 1), Ue(T !== 2 ? D : D.replace(Fe, "$1"), L, T);
  }
  function g(M, T) {
    var L = c(T, T.charCodeAt(0), T.charCodeAt(1), T.charCodeAt(2));
    return L !== T + ";" ? L.replace(_e, " or ($1)").substring(4) : "(" + T + ")";
  }
  function S(M, T, L, D, p, re, C, ne, ee, te) {
    for (var W = 0, ie = T, se; W < Ae; ++W)
      switch (se = Le[W].call(I, M, ie, L, D, p, re, C, ne, ee, te)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          ie = se;
      }
    if (ie !== T) return ie;
  }
  function w(M) {
    switch (M) {
      case void 0:
      case null:
        Ae = Le.length = 0;
        break;
      default:
        if (typeof M == "function") Le[Ae++] = M;
        else if (typeof M == "object") for (var T = 0, L = M.length; T < L; ++T)
          w(M[T]);
        else Ke = !!M | 0;
    }
    return w;
  }
  function h(M) {
    return M = M.prefix, M !== void 0 && (Ue = null, M ? typeof M != "function" ? Ce = 1 : (Ce = 2, Ue = M) : Ce = 0), h;
  }
  function I(M, T) {
    var L = M;
    if (33 > L.charCodeAt(0) && (L = L.trim()), oe = L, L = [oe], 0 < Ae) {
      var D = S(-1, T, L, L, Pe, pe, 0, 0, 0, 0);
      D !== void 0 && typeof D == "string" && (T = D);
    }
    var p = t(st, L, T, 0, 0);
    return 0 < Ae && (D = S(-2, p, L, L, Pe, pe, p.length, 0, 0, 0), D !== void 0 && (p = D)), oe = "", Ne = 0, pe = Pe = 1, p;
  }
  var E = /^\0+/g, $ = /[\0\r\f]/g, G = /: */g, A = /zoo|gra/, k = /([,: ])(transform)/g, F = /,\r+?/g, Y = /([\t\r\n ])*\f?&/g, q = /@(k\w+)\s*(\S*)\s*/, X = /::(place)/g, H = /:(read-only)/g, x = /[svh]\w+-[tblr]{2}/, ce = /\(\s*(.*)\s*\)/g, _e = /([\s\S]*?);/g, Ie = /-self|flex-/g, Fe = /[^]*?(:[rp][el]a[\w-]+)[^]*/, qe = /stretch|:\s*\w+\-(?:conte|avail)/, ue = /([^-])(image-set\()/, pe = 1, Pe = 1, Ne = 0, Ce = 1, st = [], Le = [], Ae = 0, Ue = null, Ke = 0, oe = "";
  return I.use = w, I.set = h, e !== void 0 && h(e), I;
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
var bc = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, eo = /* @__PURE__ */ yc(
  function(e) {
    return bc.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), ss = { exports: {} }, je = {}, to;
function vc() {
  if (to) return je;
  to = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, i = e ? Symbol.for("react.fragment") : 60107, c = e ? Symbol.for("react.strict_mode") : 60108, u = e ? Symbol.for("react.profiler") : 60114, g = e ? Symbol.for("react.provider") : 60109, S = e ? Symbol.for("react.context") : 60110, w = e ? Symbol.for("react.async_mode") : 60111, h = e ? Symbol.for("react.concurrent_mode") : 60111, I = e ? Symbol.for("react.forward_ref") : 60112, E = e ? Symbol.for("react.suspense") : 60113, $ = e ? Symbol.for("react.suspense_list") : 60120, G = e ? Symbol.for("react.memo") : 60115, A = e ? Symbol.for("react.lazy") : 60116, k = e ? Symbol.for("react.block") : 60121, F = e ? Symbol.for("react.fundamental") : 60117, Y = e ? Symbol.for("react.responder") : 60118, q = e ? Symbol.for("react.scope") : 60119;
  function X(x) {
    if (typeof x == "object" && x !== null) {
      var ce = x.$$typeof;
      switch (ce) {
        case t:
          switch (x = x.type, x) {
            case w:
            case h:
            case i:
            case u:
            case c:
            case E:
              return x;
            default:
              switch (x = x && x.$$typeof, x) {
                case S:
                case I:
                case A:
                case G:
                case g:
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
  function H(x) {
    return X(x) === h;
  }
  return je.AsyncMode = w, je.ConcurrentMode = h, je.ContextConsumer = S, je.ContextProvider = g, je.Element = t, je.ForwardRef = I, je.Fragment = i, je.Lazy = A, je.Memo = G, je.Portal = r, je.Profiler = u, je.StrictMode = c, je.Suspense = E, je.isAsyncMode = function(x) {
    return H(x) || X(x) === w;
  }, je.isConcurrentMode = H, je.isContextConsumer = function(x) {
    return X(x) === S;
  }, je.isContextProvider = function(x) {
    return X(x) === g;
  }, je.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === t;
  }, je.isForwardRef = function(x) {
    return X(x) === I;
  }, je.isFragment = function(x) {
    return X(x) === i;
  }, je.isLazy = function(x) {
    return X(x) === A;
  }, je.isMemo = function(x) {
    return X(x) === G;
  }, je.isPortal = function(x) {
    return X(x) === r;
  }, je.isProfiler = function(x) {
    return X(x) === u;
  }, je.isStrictMode = function(x) {
    return X(x) === c;
  }, je.isSuspense = function(x) {
    return X(x) === E;
  }, je.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === i || x === h || x === u || x === c || x === E || x === $ || typeof x == "object" && x !== null && (x.$$typeof === A || x.$$typeof === G || x.$$typeof === g || x.$$typeof === S || x.$$typeof === I || x.$$typeof === F || x.$$typeof === Y || x.$$typeof === q || x.$$typeof === k);
  }, je.typeOf = X, je;
}
ss.exports = vc();
var wc = ss.exports, Qa = wc, Sc = {
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
}, Ja = {};
Ja[Qa.ForwardRef] = xc;
Ja[Qa.Memo] = ls;
function ro(e) {
  return Qa.isMemo(e) ? ls : Ja[e.$$typeof] || Sc;
}
var _c = Object.defineProperty, Ec = Object.getOwnPropertyNames, no = Object.getOwnPropertySymbols, Tc = Object.getOwnPropertyDescriptor, Cc = Object.getPrototypeOf, ao = Object.prototype;
function cs(e, t, r) {
  if (typeof t != "string") {
    if (ao) {
      var i = Cc(t);
      i && i !== ao && cs(e, i, r);
    }
    var c = Ec(t);
    no && (c = c.concat(no(t)));
    for (var u = ro(e), g = ro(t), S = 0; S < c.length; ++S) {
      var w = c[S];
      if (!kc[w] && !(r && r[w]) && !(g && g[w]) && !(u && u[w])) {
        var h = Tc(t, w);
        try {
          _c(e, w, h);
        } catch {
        }
      }
    }
  }
  return e;
}
var Ac = cs;
const Oc = /* @__PURE__ */ Ya(Ac);
var pt = { env: { NODE_ENV: "production" } };
function cr() {
  return (cr = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }).apply(this, arguments);
}
var io = function(e, t) {
  for (var r = [e[0]], i = 0, c = t.length; i < c; i += 1) r.push(t[i], e[i + 1]);
  return r;
}, La = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !os.typeOf(e);
}, Yn = Object.freeze([]), gr = Object.freeze({});
function fn(e) {
  return typeof e == "function";
}
function oo(e) {
  return e.displayName || e.name || "Component";
}
function Za(e) {
  return e && typeof e.styledComponentId == "string";
}
var Dr = typeof pt < "u" && pt.env !== void 0 && (pt.env.REACT_APP_SC_ATTR || pt.env.SC_ATTR) || "data-styled", Ka = typeof window < "u" && "HTMLElement" in window, Rc = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof pt < "u" && pt.env !== void 0 && (pt.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && pt.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? pt.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && pt.env.REACT_APP_SC_DISABLE_SPEEDY : pt.env.SC_DISABLE_SPEEDY !== void 0 && pt.env.SC_DISABLE_SPEEDY !== "" ? pt.env.SC_DISABLE_SPEEDY !== "false" && pt.env.SC_DISABLE_SPEEDY : pt.env.NODE_ENV !== "production"));
function gn(e) {
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
      for (var c = this.groupSizes, u = c.length, g = u; r >= g; ) (g <<= 1) < 0 && gn(16, "" + r);
      this.groupSizes = new Uint32Array(g), this.groupSizes.set(c), this.length = g;
      for (var S = u; S < g; S++) this.groupSizes[S] = 0;
    }
    for (var w = this.indexOfGroup(r + 1), h = 0, I = i.length; h < I; h++) this.tag.insertRule(w, i[h]) && (this.groupSizes[r]++, w++);
  }, t.clearGroup = function(r) {
    if (r < this.length) {
      var i = this.groupSizes[r], c = this.indexOfGroup(r), u = c + i;
      this.groupSizes[r] = 0;
      for (var g = c; g < u; g++) this.tag.deleteRule(c);
    }
  }, t.getGroup = function(r) {
    var i = "";
    if (r >= this.length || this.groupSizes[r] === 0) return i;
    for (var c = this.groupSizes[r], u = this.indexOfGroup(r), g = u + c, S = u; S < g; S++) i += this.tag.getRule(S) + `/*!sc*/
`;
    return i;
  }, e;
}(), Vn = /* @__PURE__ */ new Map(), Xn = /* @__PURE__ */ new Map(), ln = 1, $n = function(e) {
  if (Vn.has(e)) return Vn.get(e);
  for (; Xn.has(ln); ) ln++;
  var t = ln++;
  return Vn.set(e, t), Xn.set(t, e), t;
}, Nc = function(e) {
  return Xn.get(e);
}, Ic = function(e, t) {
  t >= ln && (ln = t + 1), Vn.set(e, t), Xn.set(t, e);
}, Dc = "style[" + Dr + '][data-styled-version="5.3.11"]', Fc = new RegExp("^" + Dr + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Lc = function(e, t, r) {
  for (var i, c = r.split(","), u = 0, g = c.length; u < g; u++) (i = c[u]) && e.registerName(t, i);
}, Mc = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), i = [], c = 0, u = r.length; c < u; c++) {
    var g = r[c].trim();
    if (g) {
      var S = g.match(Fc);
      if (S) {
        var w = 0 | parseInt(S[1], 10), h = S[2];
        w !== 0 && (Ic(h, w), Lc(e, h, S[3]), e.getTag().insertRules(w, i)), i.length = 0;
      } else i.push(g);
    }
  }
}, jc = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, us = function(e) {
  var t = document.head, r = e || t, i = document.createElement("style"), c = function(S) {
    for (var w = S.childNodes, h = w.length; h >= 0; h--) {
      var I = w[h];
      if (I && I.nodeType === 1 && I.hasAttribute(Dr)) return I;
    }
  }(r), u = c !== void 0 ? c.nextSibling : null;
  i.setAttribute(Dr, "active"), i.setAttribute("data-styled-version", "5.3.11");
  var g = jc();
  return g && i.setAttribute("nonce", g), r.insertBefore(i, u), i;
}, zc = function() {
  function e(r) {
    var i = this.element = us(r);
    i.appendChild(document.createTextNode("")), this.sheet = function(c) {
      if (c.sheet) return c.sheet;
      for (var u = document.styleSheets, g = 0, S = u.length; g < S; g++) {
        var w = u[g];
        if (w.ownerNode === c) return w;
      }
      gn(17);
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
}(), so = Ka, Bc = { isServer: !Ka, useCSSOMInjection: !Rc }, ds = function() {
  function e(r, i, c) {
    r === void 0 && (r = gr), i === void 0 && (i = {}), this.options = cr({}, Bc, {}, r), this.gs = i, this.names = new Map(c), this.server = !!r.isServer, !this.server && Ka && so && (so = !1, function(u) {
      for (var g = document.querySelectorAll(Dc), S = 0, w = g.length; S < w; S++) {
        var h = g[S];
        h && h.getAttribute(Dr) !== "active" && (Mc(u, h), h.parentNode && h.parentNode.removeChild(h));
      }
    }(this));
  }
  e.registerId = function(r) {
    return $n(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, i) {
    return i === void 0 && (i = !0), new e(cr({}, this.options, {}, r), this.gs, i && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (c = (i = this.options).isServer, u = i.useCSSOMInjection, g = i.target, r = c ? new Uc(g) : u ? new zc(g) : new $c(g), new Pc(r)));
    var r, i, c, u, g;
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
      for (var i = r.getTag(), c = i.length, u = "", g = 0; g < c; g++) {
        var S = Nc(g);
        if (S !== void 0) {
          var w = r.names.get(S), h = i.getGroup(g);
          if (w && h && w.size) {
            var I = Dr + ".g" + g + '[id="' + S + '"]', E = "";
            w !== void 0 && w.forEach(function($) {
              $.length > 0 && (E += $ + ",");
            }), u += "" + h + I + '{content:"' + E + `"}/*!sc*/
`;
          }
        }
      }
      return u;
    }(this);
  }, e;
}(), Wc = /(a)(d)/gi, lo = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Ma(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = lo(t % 52) + r;
  return (lo(t % 52) + r).replace(Wc, "$1-$2");
}
var Nr = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, fs = function(e) {
  return Nr(5381, e);
};
function Hc(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (fn(r) && !Za(r)) return !1;
  }
  return !0;
}
var qc = fs("5.3.11"), Vc = function() {
  function e(t, r, i) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (i === void 0 || i.isStatic) && Hc(t), this.componentId = r, this.baseHash = Nr(qc, r), this.baseStyle = i, ds.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, i) {
    var c = this.componentId, u = [];
    if (this.baseStyle && u.push(this.baseStyle.generateAndInjectStyles(t, r, i)), this.isStatic && !i.hash) if (this.staticRulesId && r.hasNameForId(c, this.staticRulesId)) u.push(this.staticRulesId);
    else {
      var g = Fr(this.rules, t, r, i).join(""), S = Ma(Nr(this.baseHash, g) >>> 0);
      if (!r.hasNameForId(c, S)) {
        var w = i(g, "." + S, void 0, c);
        r.insertRules(c, S, w);
      }
      u.push(S), this.staticRulesId = S;
    }
    else {
      for (var h = this.rules.length, I = Nr(this.baseHash, i.hash), E = "", $ = 0; $ < h; $++) {
        var G = this.rules[$];
        if (typeof G == "string") E += G;
        else if (G) {
          var A = Fr(G, t, r, i), k = Array.isArray(A) ? A.join("") : A;
          I = Nr(I, k + $), E += k;
        }
      }
      if (E) {
        var F = Ma(I >>> 0);
        if (!r.hasNameForId(c, F)) {
          var Y = i(E, "." + F, void 0, c);
          r.insertRules(c, F, Y);
        }
        u.push(F);
      }
    }
    return u.join(" ");
  }, e;
}(), Gc = /^\s*\/\/.*$/gm, Yc = [":", "[", ".", "#"];
function Xc(e) {
  var t, r, i, c, u = gr, g = u.options, S = g === void 0 ? gr : g, w = u.plugins, h = w === void 0 ? Yn : w, I = new mc(S), E = [], $ = /* @__PURE__ */ function(k) {
    function F(Y) {
      if (Y) try {
        k(Y + "}");
      } catch {
      }
    }
    return function(Y, q, X, H, x, ce, _e, Ie, Fe, qe) {
      switch (Y) {
        case 1:
          if (Fe === 0 && q.charCodeAt(0) === 64) return k(q + ";"), "";
          break;
        case 2:
          if (Ie === 0) return q + "/*|*/";
          break;
        case 3:
          switch (Ie) {
            case 102:
            case 112:
              return k(X[0] + q), "";
            default:
              return q + (qe === 0 ? "/*|*/" : "");
          }
        case -2:
          q.split("/*|*/}").forEach(F);
      }
    };
  }(function(k) {
    E.push(k);
  }), G = function(k, F, Y) {
    return F === 0 && Yc.indexOf(Y[r.length]) !== -1 || Y.match(c) ? k : "." + t;
  };
  function A(k, F, Y, q) {
    q === void 0 && (q = "&");
    var X = k.replace(Gc, ""), H = F && Y ? Y + " " + F + " { " + X + " }" : X;
    return t = q, r = F, i = new RegExp("\\" + r + "\\b", "g"), c = new RegExp("(\\" + r + "\\b){2,}"), I(Y || !F ? "" : F, H);
  }
  return I.use([].concat(h, [function(k, F, Y) {
    k === 2 && Y.length && Y[0].lastIndexOf(r) > 0 && (Y[0] = Y[0].replace(i, G));
  }, $, function(k) {
    if (k === -2) {
      var F = E;
      return E = [], F;
    }
  }])), A.hash = h.length ? h.reduce(function(k, F) {
    return F.name || gn(15), Nr(k, F.name);
  }, 5381).toString() : "", A;
}
var ps = dt.createContext();
ps.Consumer;
var hs = dt.createContext(), Qc = (hs.Consumer, new ds()), ja = Xc();
function Jc() {
  return br(ps) || Qc;
}
function Zc() {
  return br(hs) || ja;
}
var Kc = function() {
  function e(t, r) {
    var i = this;
    this.inject = function(c, u) {
      u === void 0 && (u = ja);
      var g = i.name + u.hash;
      c.hasNameForId(i.id, g) || c.insertRules(i.id, g, u(i.rules, g, "@keyframes"));
    }, this.toString = function() {
      return gn(12, String(i.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = ja), this.name + t.hash;
  }, e;
}(), eu = /([A-Z])/, tu = /([A-Z])/g, ru = /^ms-/, nu = function(e) {
  return "-" + e.toLowerCase();
};
function co(e) {
  return eu.test(e) ? e.replace(tu, nu).replace(ru, "-ms-") : e;
}
var uo = function(e) {
  return e == null || e === !1 || e === "";
};
function Fr(e, t, r, i) {
  if (Array.isArray(e)) {
    for (var c, u = [], g = 0, S = e.length; g < S; g += 1) (c = Fr(e[g], t, r, i)) !== "" && (Array.isArray(c) ? u.push.apply(u, c) : u.push(c));
    return u;
  }
  if (uo(e)) return "";
  if (Za(e)) return "." + e.styledComponentId;
  if (fn(e)) {
    if (typeof (h = e) != "function" || h.prototype && h.prototype.isReactComponent || !t) return e;
    var w = e(t);
    return Fr(w, t, r, i);
  }
  var h;
  return e instanceof Kc ? r ? (e.inject(r, i), e.getName(i)) : e : La(e) ? function I(E, $) {
    var G, A, k = [];
    for (var F in E) E.hasOwnProperty(F) && !uo(E[F]) && (Array.isArray(E[F]) && E[F].isCss || fn(E[F]) ? k.push(co(F) + ":", E[F], ";") : La(E[F]) ? k.push.apply(k, I(E[F], F)) : k.push(co(F) + ": " + (G = F, (A = E[F]) == null || typeof A == "boolean" || A === "" ? "" : typeof A != "number" || A === 0 || G in gc || G.startsWith("--") ? String(A).trim() : A + "px") + ";"));
    return $ ? [$ + " {"].concat(k, ["}"]) : k;
  }(e) : e.toString();
}
var fo = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function au(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
  return fn(e) || La(e) ? fo(Fr(io(Yn, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : fo(Fr(io(e, r)));
}
var iu = function(e, t, r) {
  return r === void 0 && (r = gr), e.theme !== r.theme && e.theme || t || r.theme;
}, ou = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, su = /(^-|-$)/g;
function Aa(e) {
  return e.replace(ou, "-").replace(su, "");
}
var lu = function(e) {
  return Ma(fs(e) >>> 0);
};
function Un(e) {
  return typeof e == "string" && pt.env.NODE_ENV === "production";
}
var za = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, cu = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function uu(e, t, r) {
  var i = e[r];
  za(t) && za(i) ? ms(i, t) : e[r] = t;
}
function ms(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
  for (var c = 0, u = r; c < u.length; c++) {
    var g = u[c];
    if (za(g)) for (var S in g) cu(S) && uu(e, g[S], S);
  }
  return e;
}
var gs = dt.createContext();
gs.Consumer;
var Oa = {};
function ys(e, t, r) {
  var i = Za(e), c = !Un(e), u = t.attrs, g = u === void 0 ? Yn : u, S = t.componentId, w = S === void 0 ? function(q, X) {
    var H = typeof q != "string" ? "sc" : Aa(q);
    Oa[H] = (Oa[H] || 0) + 1;
    var x = H + "-" + lu("5.3.11" + H + Oa[H]);
    return X ? X + "-" + x : x;
  }(t.displayName, t.parentComponentId) : S, h = t.displayName, I = h === void 0 ? function(q) {
    return Un(q) ? "styled." + q : "Styled(" + oo(q) + ")";
  }(e) : h, E = t.displayName && t.componentId ? Aa(t.displayName) + "-" + t.componentId : t.componentId || w, $ = i && e.attrs ? Array.prototype.concat(e.attrs, g).filter(Boolean) : g, G = t.shouldForwardProp;
  i && e.shouldForwardProp && (G = t.shouldForwardProp ? function(q, X, H) {
    return e.shouldForwardProp(q, X, H) && t.shouldForwardProp(q, X, H);
  } : e.shouldForwardProp);
  var A, k = new Vc(r, E, i ? e.componentStyle : void 0), F = k.isStatic && g.length === 0, Y = function(q, X) {
    return function(H, x, ce, _e) {
      var Ie = H.attrs, Fe = H.componentStyle, qe = H.defaultProps, ue = H.foldedComponentIds, pe = H.shouldForwardProp, Pe = H.styledComponentId, Ne = H.target, Ce = function(D, p, re) {
        D === void 0 && (D = gr);
        var C = cr({}, p, { theme: D }), ne = {};
        return re.forEach(function(ee) {
          var te, W, ie, se = ee;
          for (te in fn(se) && (se = se(C)), se) C[te] = ne[te] = te === "className" ? (W = ne[te], ie = se[te], W && ie ? W + " " + ie : W || ie) : se[te];
        }), [C, ne];
      }(iu(x, br(gs), qe) || gr, x, Ie), st = Ce[0], Le = Ce[1], Ae = function(D, p, re, C) {
        var ne = Jc(), ee = Zc(), te = p ? D.generateAndInjectStyles(gr, ne, ee) : D.generateAndInjectStyles(re, ne, ee);
        return te;
      }(Fe, _e, st), Ue = ce, Ke = Le.$as || x.$as || Le.as || x.as || Ne, oe = Un(Ke), M = Le !== x ? cr({}, x, {}, Le) : x, T = {};
      for (var L in M) L[0] !== "$" && L !== "as" && (L === "forwardedAs" ? T.as = M[L] : (pe ? pe(L, eo, Ke) : !oe || eo(L)) && (T[L] = M[L]));
      return x.style && Le.style !== x.style && (T.style = cr({}, x.style, {}, Le.style)), T.className = Array.prototype.concat(ue, Pe, Ae !== Pe ? Ae : null, x.className, Le.className).filter(Boolean).join(" "), T.ref = Ue, Do(Ke, T);
    }(A, q, X, F);
  };
  return Y.displayName = I, (A = dt.forwardRef(Y)).attrs = $, A.componentStyle = k, A.displayName = I, A.shouldForwardProp = G, A.foldedComponentIds = i ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Yn, A.styledComponentId = E, A.target = i ? e.target : e, A.withComponent = function(q) {
    var X = t.componentId, H = function(ce, _e) {
      if (ce == null) return {};
      var Ie, Fe, qe = {}, ue = Object.keys(ce);
      for (Fe = 0; Fe < ue.length; Fe++) Ie = ue[Fe], _e.indexOf(Ie) >= 0 || (qe[Ie] = ce[Ie]);
      return qe;
    }(t, ["componentId"]), x = X && X + "-" + (Un(q) ? q : Aa(oo(q)));
    return ys(q, cr({}, H, { attrs: $, componentId: x }), r);
  }, Object.defineProperty(A, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(q) {
    this._foldedDefaultProps = i ? ms({}, e.defaultProps, q) : q;
  } }), Object.defineProperty(A, "toString", { value: function() {
    return "." + A.styledComponentId;
  } }), c && Oc(A, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), A;
}
var Yt = function(e) {
  return function t(r, i, c) {
    if (c === void 0 && (c = gr), !os.isValidElementType(i)) return gn(1, String(i));
    var u = function() {
      return r(i, c, au.apply(void 0, arguments));
    };
    return u.withConfig = function(g) {
      return t(r, i, cr({}, c, {}, g));
    }, u.attrs = function(g) {
      return t(r, i, cr({}, c, { attrs: Array.prototype.concat(c.attrs, g).filter(Boolean) }));
    }, u;
  }(ys, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  Yt[e] = Yt(e);
});
Yt.div`
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
function ra(e) {
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
}(), Or = function() {
  return Or = Object.assign || function(e) {
    for (var t, r = 1, i = arguments.length; r < i; r++) {
      t = arguments[r];
      for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c]);
    }
    return e;
  }, Or.apply(this, arguments);
}, fu = function(e, t, r, i) {
  function c(u) {
    return u instanceof r ? u : new r(function(g) {
      g(u);
    });
  }
  return new (r || (r = Promise))(function(u, g) {
    function S(I) {
      try {
        h(i.next(I));
      } catch (E) {
        g(E);
      }
    }
    function w(I) {
      try {
        h(i.throw(I));
      } catch (E) {
        g(E);
      }
    }
    function h(I) {
      I.done ? u(I.value) : c(I.value).then(S, w);
    }
    h((i = i.apply(e, [])).next());
  });
}, pu = function(e, t) {
  var r = { label: 0, sent: function() {
    if (u[0] & 1) throw u[1];
    return u[1];
  }, trys: [], ops: [] }, i, c, u, g;
  return g = { next: S(0), throw: S(1), return: S(2) }, typeof Symbol == "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
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
  var i = t.height, c = t.width, u = bs(t, ["height", "width"]), g = Or({ height: i, width: c, location: "no", toolbar: "no", status: "no", directories: "no", menubar: "no", scrollbars: "yes", resizable: "no", centerscreen: "yes", chrome: "yes" }, u), S = window.open(e, "", Object.keys(g).map(function(h) {
    return "".concat(h, "=").concat(g[h]);
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
var bu = (
  /** @class */
  function(e) {
    du(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.openShareDialog = function(i) {
        var c = r.props, u = c.onShareWindowClose, g = c.windowHeight, S = g === void 0 ? 400 : g, w = c.windowPosition, h = w === void 0 ? "windowCenter" : w, I = c.windowWidth, E = I === void 0 ? 550 : I, $ = Or({ height: S, width: E }, h === "windowCenter" ? mu(E, S) : gu(E, S));
        yu(i, $, u);
      }, r.handleClick = function(i) {
        return fu(r, void 0, void 0, function() {
          var c, u, g, S, w, h, I, E, $, G;
          return pu(this, function(A) {
            switch (A.label) {
              case 0:
                return c = this.props, u = c.beforeOnClick, g = c.disabled, S = c.networkLink, w = c.onClick, h = c.url, I = c.openShareDialogOnClick, E = c.opts, $ = S(h, E), g ? [
                  2
                  /*return*/
                ] : (i.preventDefault(), u ? (G = u(), hu(G) ? [4, G] : [3, 2]) : [3, 2]);
              case 1:
                A.sent(), A.label = 2;
              case 2:
                return I && this.openShareDialog($), w && w(i, $), [
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
      var i = r.children, c = r.className, u = r.disabled, g = r.disabledStyle, S = r.forwardedRef;
      r.networkLink;
      var w = r.networkName;
      r.onShareWindowClose, r.openShareDialogOnClick, r.opts;
      var h = r.resetButtonStyle, I = r.style;
      r.url, r.windowHeight, r.windowPosition, r.windowWidth;
      var E = bs(r, ["beforeOnClick", "children", "className", "disabled", "disabledStyle", "forwardedRef", "networkLink", "networkName", "onShareWindowClose", "openShareDialogOnClick", "opts", "resetButtonStyle", "style", "url", "windowHeight", "windowPosition", "windowWidth"]), $ = Gt("react-share__ShareButton", {
        "react-share__ShareButton--disabled": !!u,
        disabled: !!u
      }, c), G = Or(Or(h ? { backgroundColor: "transparent", border: "none", padding: 0, font: "inherit", color: "inherit", cursor: "pointer" } : {}, I), u && g);
      return dt.createElement("button", Or({}, E, { "aria-label": E["aria-label"] || w, className: $, onClick: this.handleClick, ref: S, style: G }), i);
    }, t.defaultProps = {
      disabledStyle: { opacity: 0.6 },
      openShareDialogOnClick: !0,
      resetButtonStyle: !0
    }, t;
  }(rl)
), Qn = function() {
  return Qn = Object.assign || function(e) {
    for (var t, r = 1, i = arguments.length; r < i; r++) {
      t = arguments[r];
      for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c]);
    }
    return e;
  }, Qn.apply(this, arguments);
};
function na(e, t, r, i) {
  function c(u, g) {
    var S = r(u), w = Qn({}, u), h = Object.keys(S);
    return h.forEach(function(I) {
      delete w[I];
    }), dt.createElement(bu, Qn({}, i, w, { forwardedRef: g, networkName: e, networkLink: t, opts: r(u) }));
  }
  return c.displayName = "ShareButton-".concat(e), Ga(c);
}
function vu(e, t) {
  var r = t.subject, i = t.body, c = t.separator;
  return "mailto:" + ra({ subject: r, body: i ? i + c + e : e });
}
na("email", vu, function(e) {
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
var wu = /* @__PURE__ */ function() {
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
}(), Su = (
  /** @class */
  function(e) {
    wu(t, e);
    function t(r) {
      var i = e.call(this, r) || this;
      return i.name = "AssertionError", i;
    }
    return t;
  }(Error)
);
function cn(e, t) {
  if (!e)
    throw new Su(t);
}
function ku(e, t) {
  var r = t.quote, i = t.hashtag;
  return cn(e, "facebook.url"), "https://www.facebook.com/sharer/sharer.php" + ra({
    u: e,
    quote: r,
    hashtag: i
  });
}
na("facebook", ku, function(e) {
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
  return cn(e, "linkedin.url"), "https://linkedin.com/shareArticle" + ra({ url: e, mini: "true", title: r, summary: i, source: c });
}
na("linkedin", xu, function(e) {
  var t = e.title, r = e.summary, i = e.source;
  return { title: t, summary: r, source: i };
}, {
  windowWidth: 750,
  windowHeight: 600
});
function _u(e, t) {
  var r = t.title, i = t.via, c = t.hashtags, u = c === void 0 ? [] : c, g = t.related, S = g === void 0 ? [] : g;
  return cn(e, "twitter.url"), cn(Array.isArray(u), "twitter.hashtags is not an array"), cn(Array.isArray(S), "twitter.related is not an array"), "https://twitter.com/share" + ra({
    url: e,
    text: r,
    via: i,
    hashtags: u.length > 0 ? u.join(",") : void 0,
    related: S.length > 0 ? S.join(",") : void 0
  });
}
na("twitter", _u, function(e) {
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
function $a(e) {
  "@babel/helpers - typeof";
  return $a = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $a(e);
}
var Eu = (typeof window > "u" ? "undefined" : $a(window)) === "object" && window.Element || function() {
};
function Tu(e, t, r) {
  if (!(e[t] instanceof Eu))
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
Yt.div`
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
Yt.div`
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
  element: g = "button",
  innerRef: S,
  href: w,
  onClick: h,
  ...I
}) => {
  const E = Gt("btn", "btn-tag", {
    "btn-tag-alt-white": c === "white",
    "btn-tag-alt-gray": c === "gray",
    "btn-tag-alt-dark": c === "dark",
    disabled: u
  });
  let $ = g;
  return w && g === "button" && ($ = "a"), /* @__PURE__ */ B.jsx(
    Rr,
    {
      gaData: {
        ...Cu,
        section: t,
        // @deprecated - remove at some point
        ...r,
        text: e
      },
      children: /* @__PURE__ */ B.jsx(
        $,
        {
          type: $ === "button" && h ? "button" : void 0,
          ...I,
          className: E,
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
  gaData: Xa,
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
const ws = ({
  src: e,
  alt: t,
  cssClasses: r,
  loading: i = "lazy",
  decoding: c = "async",
  dataTestId: u,
  fetchPriority: g = "auto",
  width: S,
  height: w,
  cardLink: h,
  title: I,
  caption: E,
  captionTitle: $,
  border: G,
  dropShadow: A
}) => {
  const k = {
    src: e,
    alt: t,
    loading: i,
    decoding: c,
    fetchpriority: g,
    // React attribute bug workaround
    ...(r == null ? void 0 : r.length) > 0 && { className: jl(r) },
    ...u && { "data-testid": u },
    ...S && { width: S },
    ...w && { height: w }
  }, F = Gt("uds-img", {
    borderless: !G,
    "uds-img-drop-shadow": A
  }), Y = (X) => {
    const H = X ? `${k.className} ${X}` : k.className;
    return h ? /* @__PURE__ */ B.jsxs("a", { href: h, children: [
      /* @__PURE__ */ B.jsx("img", { ...k, className: H }),
      /* @__PURE__ */ B.jsx("span", { className: "visually-hidden", children: I })
    ] }) : /* @__PURE__ */ B.jsx("img", { ...k, className: H });
  }, q = () => /* @__PURE__ */ B.jsx("div", { className: F, children: /* @__PURE__ */ B.jsxs("figure", { className: "figure uds-figure", children: [
    Y(),
    E && /* @__PURE__ */ B.jsxs("figcaption", { className: "figure-caption uds-figure-caption", children: [
      $ && /* @__PURE__ */ B.jsx("h3", { children: $ }),
      /* @__PURE__ */ B.jsx(
        "span",
        {
          className: "uds-caption-text",
          dangerouslySetInnerHTML: Ar(E)
        }
      )
    ] })
  ] }) });
  return /* @__PURE__ */ B.jsx(B.Fragment, { children: E ? q() : Y(F) });
};
ws.propTypes = {
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
const Au = Yt.div`
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
}, mr = ({
  type: e = "default",
  width: t = "100%",
  horizontal: r = !1,
  image: i,
  imageAltText: c,
  title: u,
  icon: g,
  body: S,
  eventFormat: w = "stack",
  eventLocation: h,
  eventTime: I,
  buttons: E,
  linkLabel: $,
  linkUrl: G,
  tags: A,
  showBorders: k = !0,
  cardLink: F
}) => /* @__PURE__ */ B.jsx(
  Ss,
  {
    type: e,
    width: t,
    horizontal: r,
    image: i,
    imageAltText: c,
    title: u,
    icon: g,
    body: S,
    eventFormat: w,
    eventLocation: h,
    eventTime: I,
    buttons: E,
    linkLabel: $,
    linkUrl: G,
    tags: A,
    showBorders: k,
    cardLink: F
  }
);
mr.propTypes = {
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
const Ss = ({
  type: e = "default",
  width: t = "100%",
  horizontal: r = !1,
  image: i = "",
  imageAltText: c = "",
  title: u,
  icon: g = void 0,
  body: S = "",
  eventFormat: w = "stack",
  eventLocation: h = "",
  eventTime: I = "",
  buttons: E = void 0,
  linkLabel: $ = void 0,
  linkUrl: G = void 0,
  tags: A = void 0,
  showBorders: k = !0,
  cardLink: F
}) => {
  const Y = Gt("card", "cards-components", {
    "card-degree": e === "degree",
    "card-event": e === "event",
    "card-story": e === "story",
    [`w-${t.replace("%", "")}`]: t !== "100%",
    "card-horizontal": r,
    borderless: !k
  });
  return /* @__PURE__ */ B.jsx(B.Fragment, { children: /* @__PURE__ */ B.jsxs(Au, { className: Y, "data-testid": "card-container", children: [
    !!i && /* @__PURE__ */ B.jsx(
      ws,
      {
        src: i,
        alt: c,
        dataTestId: "card-image",
        cssClasses: ["card-img-top"],
        cardLink: F,
        title: u
      }
    ),
    !i && g && /* @__PURE__ */ B.jsx(
      "i",
      {
        className: `${g == null ? void 0 : g[0]} fa-${g == null ? void 0 : g[1]} fa-2x card-icon-top`,
        "data-testid": "card-icon"
      }
    ),
    r ? /* @__PURE__ */ B.jsx("div", { className: "card-content-wrapper", children: /* @__PURE__ */ B.jsx(
      Ua,
      {
        type: e,
        body: S,
        eventFormat: w,
        eventLocation: h,
        eventTime: I,
        title: u,
        buttons: E,
        linkLabel: $,
        linkUrl: G,
        tags: A,
        cardLink: F
      }
    ) }) : /* @__PURE__ */ B.jsx(
      Ua,
      {
        type: e,
        body: S,
        eventFormat: w,
        eventLocation: h,
        eventTime: I,
        title: u,
        buttons: E,
        linkLabel: $,
        linkUrl: G,
        tags: A,
        cardLink: F
      }
    )
  ] }) });
};
Ss.propTypes = {
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
const Ua = ({
  type: e = "default",
  body: t = "",
  eventFormat: r = "stack",
  eventLocation: i = "",
  eventTime: c = "",
  title: u,
  buttons: g = void 0,
  linkLabel: S = void 0,
  linkUrl: w = void 0,
  tags: h = void 0,
  cardLink: I
}) => /* @__PURE__ */ B.jsxs(B.Fragment, { children: [
  !!u && /* @__PURE__ */ B.jsx("div", { className: "card-header", "data-testid": "card-title", children: /* @__PURE__ */ B.jsx("h3", { className: "card-title", children: I ? /* @__PURE__ */ B.jsx("a", { href: I, children: u }) : u }) }),
  !!t && /* @__PURE__ */ B.jsx("div", { className: "card-body", "data-testid": "card-body", children: /* @__PURE__ */ B.jsx("div", { dangerouslySetInnerHTML: Ar(t) }) }),
  e === "event" && (c || i) && /* @__PURE__ */ B.jsx(
    ks,
    {
      eventFormat: r,
      eventTime: c,
      eventLocation: i
    }
  ),
  g && /* @__PURE__ */ B.jsx("div", { className: "card-buttons", children: g.map((E) => /* @__PURE__ */ B.jsx(
    "div",
    {
      className: "card-button",
      "data-testid": "card-button",
      children: /* @__PURE__ */ B.jsx(
        as,
        {
          ariaLabel: E.ariaLabel,
          color: E.color,
          icon: E.icon,
          href: E.href,
          label: E.label,
          onClick: E.onClick,
          size: E.size,
          target: E.target,
          cardTitle: u
        }
      )
    },
    `${E.label}-${E.href}`
  )) }),
  w && S && /* @__PURE__ */ B.jsx("div", { className: "card-link", "data-testid": "card-link", children: /* @__PURE__ */ B.jsx(
    Rr,
    {
      gaData: {
        ...Pu,
        section: u,
        text: S
      },
      children: /* @__PURE__ */ B.jsx("a", { href: Ru(w), children: S })
    }
  ) }),
  h && /* @__PURE__ */ B.jsx("div", { className: "card-tags", "data-testid": "card-tags", children: h.map((E) => (
    // @ts-ignore
    /* @__PURE__ */ B.jsx(
      vs,
      {
        ariaLabel: E.ariaLabel,
        color: E.color,
        href: E.href,
        label: E.label,
        onClick: E.onClick,
        cardTitle: u
      },
      `${E.label}-${E.href}`
    )
  )) })
] });
Ua.propTypes = {
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
}) => e === "inline" ? /* @__PURE__ */ B.jsxs("div", { className: "card-event-details", children: [
  r && /* @__PURE__ */ B.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ B.jsx("div", { children: /* @__PURE__ */ B.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ B.jsx("div", { dangerouslySetInnerHTML: Ar(r) })
  ] }),
  t && /* @__PURE__ */ B.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ B.jsx("div", { children: /* @__PURE__ */ B.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ B.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Ar(t)
      }
    )
  ] })
] }) : /* @__PURE__ */ B.jsxs(B.Fragment, { children: [
  r && /* @__PURE__ */ B.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ B.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ B.jsx("div", { children: /* @__PURE__ */ B.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ B.jsx("div", { dangerouslySetInnerHTML: Ar(r) })
  ] }) }),
  t && /* @__PURE__ */ B.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ B.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ B.jsx("div", { children: /* @__PURE__ */ B.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ B.jsx("span", { children: /* @__PURE__ */ B.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Ar(t)
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
const Nu = Yt.div`
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
`, Iu = () => /* @__PURE__ */ B.jsxs(Nu, { children: [
  /* @__PURE__ */ B.jsx("div", {}),
  /* @__PURE__ */ B.jsx("div", {}),
  /* @__PURE__ */ B.jsx("div", {}),
  /* @__PURE__ */ B.jsx("div", {})
] }), Du = Yt.section``, ei = nl(null), xs = ({
  defaultProps: e,
  dataSource: t,
  noFeedText: r,
  renderHeader: i,
  renderBody: c,
  dataTransformer: u,
  dataFilter: g,
  maxItems: S
}) => {
  const [{ data: w, loading: h, error: I }, E] = Ml(), [$, G] = sn([]), A = { ...e.dataSource, ...t };
  return dn(() => {
    E(A == null ? void 0 : A.url);
  }, [A == null ? void 0 : A.url]), dn(() => {
    const k = w == null ? void 0 : w.nodes.map(u), F = k == null ? void 0 : k.filter(
      (Y) => g(Y, t == null ? void 0 : t.filters)
    );
    G(S ? F == null ? void 0 : F.slice(0, S) : F);
  }, [w]), // Init the context to be used on its childrens
  /* @__PURE__ */ B.jsx(ei.Provider, { value: { feeds: $ }, children: /* @__PURE__ */ B.jsxs(Du, { children: [
    i,
    I ? /* @__PURE__ */ B.jsx("span", { children: "Error, try again!" }) : /* @__PURE__ */ B.jsxs(B.Fragment, { children: [
      h && !($ != null && $.length) && /* @__PURE__ */ B.jsx("div", { className: "text-center mt-4", children: /* @__PURE__ */ B.jsx(Iu, {}) }),
      $ != null && $.length ? c : !h && /* @__PURE__ */ B.jsx("p", { className: "text-center", children: r })
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
const ti = o.shape({
  color: o.oneOf(["white", "dark"]),
  text: o.string
}), ri = o.shape({
  color: o.oneOf(["gold", "maroon", "gray", "dark"]),
  text: o.string
});
o.shape({
  color: o.oneOf(["gold", "maroon", "gray", "dark"]),
  text: o.string,
  size: o.string
});
const _s = o.shape({
  url: o.string,
  filters: o.string
}), Fu = o.shape({
  header: ti,
  ctaButton: ri,
  dataSource: _s,
  maxItems: o.number
}), Lu = Yt.div`
  @media screen and (min-width: 768px) {
    & {
      display: inline-flex;
      justify-content: flex-end;
    }
  }
`, Es = ({
  defaultProps: e,
  header: t,
  ctaButton: r
}) => {
  const i = { ...e.header, ...t }, c = { ...e.ctaButton, ...r }, u = i.tag || "h2", g = u !== "h2", S = `text-${i.color} ${g ? "h2" : ""}`.trim();
  return /* @__PURE__ */ B.jsxs(
    "div",
    {
      className: "row justify-content-between align-items-center pb-6",
      "data-testid": "feed-header",
      children: [
        /* @__PURE__ */ B.jsx("div", { className: "col-sm-12 col-md-9", children: /* @__PURE__ */ B.jsx(u, { className: S, children: i.text }) }),
        /* @__PURE__ */ B.jsx(Lu, { className: "col-sm-12 col-md-3", children: /* @__PURE__ */ B.jsx(
          Rr,
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
Es.propTypes = {
  defaultProps: Fu,
  header: ti,
  ctaButton: ri
};
const Ts = ({ children: e }) => /* @__PURE__ */ B.jsx("div", { className: "row", "data-testid": "feed-body", children: /* @__PURE__ */ B.jsx("div", { className: "col", children: e }) });
Ts.propTypes = {
  children: o.element
};
Yt.img`
  width: 100%;
`;
o.oneOf(["heading-hero", "story-hero"]), o.arrayOf(Ca), o.string;
o.bool, o.bool, o.bool, o.bool, o.string, o.func, o.node, o.bool, o.string, o.bool;
o.oneOf(["default", "bordered"]).isRequired, o.oneOf(["white", "gray1", "gray2", "gray7"]).isRequired, o.number, o.number, o.func.isRequired;
Yt.div`
  button {
    padding: 16px 0;
    border: none;
    outline: none;
  }
`;
o.object, o.bool, o.bool, o.func.isRequired;
const Mu = Ga(function(e, t) {
  const {
    id: r,
    selected: i,
    title: c,
    selectTab: u,
    leftKeyPressed: g,
    rightKeyPressed: S,
    icon: w,
    gaData: h
  } = e, { isReact: I, isBootstrap: E } = ns(), $ = al(null);
  il(t, () => ({
    focus() {
      $.current.focus();
    },
    scrollIntoView() {
      var A, k, F, Y, q, X, H;
      const x = ((A = $.current) == null ? void 0 : A.offsetWidth) / 2 + $.current.offsetLeft, ce = ((F = (k = $.current) == null ? void 0 : k.offsetParent) == null ? void 0 : F.scrollLeft) + ((q = (Y = $.current) == null ? void 0 : Y.offsetParent) == null ? void 0 : q.offsetWidth) / 2;
      (H = (X = $.current) == null ? void 0 : X.offsetParent) == null || H.scrollBy({
        left: x - ce
      });
    }
  }), []);
  const G = (A) => {
    A.keyCode === 37 ? (A.preventDefault(), g()) : A.keyCode === 39 && (A.preventDefault(), S());
  };
  return /* @__PURE__ */ B.jsx(Rr, { gaData: { ...h, text: c }, children: /* @__PURE__ */ B.jsxs(
    "a",
    {
      ref: $,
      className: `nav-item nav-link ${i ? "active" : ""}`,
      id: r,
      href: `#nav-${r}`,
      role: "tab",
      "aria-controls": `nav-${r}`,
      "aria-selected": i,
      "data-bs-toggle": E && "tab",
      onClick: I && ((A) => u(A, r, c)),
      onKeyDown: I && G,
      tabIndex: i ? "" : "-1",
      children: [
        c,
        " ",
        w && /* @__PURE__ */ B.jsx("i", { className: `${w == null ? void 0 : w[0]} fa-${w == null ? void 0 : w[1]} me-1` })
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
  var po = Object.defineProperty({}, "passive", {
    get: function() {
      ju = !0;
    }
  });
  window.addEventListener("testPassive", null, po), window.removeEventListener("testPassive", null, po);
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
    buttons: mr.propTypes.buttons,
    linkLabel: o.string,
    linkUrl: o.string,
    tags: mr.propTypes.tags
  })
).isRequired, mr.propTypes.type, mr.propTypes.eventFormat, mr.propTypes.horizontal, o.string, o.string, o.bool;
o.number.isRequired, o.arrayOf(o.object).isRequired, o.string, o.string, o.bool;
const Jn = {
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
o.string, Jn.imageItems, Jn.hasContent;
Jn.imageItems.isRequired, Jn.hasContent, o.string, o.string, o.bool;
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
var ho = Fo;
ho.createRoot, ho.hydrateRoot;
(function() {
  var e = `@charset "UTF-8";.glide{position:relative;width:100%;box-sizing:border-box}.glide *{box-sizing:inherit}.glide__track{overflow:hidden}.glide__slides{position:relative;width:100%;list-style:none;backface-visibility:hidden;transform-style:preserve-3d;touch-action:pan-Y;overflow:hidden;margin:0;padding:0;white-space:nowrap;display:flex;flex-wrap:nowrap;will-change:transform}.glide__slides--dragging{-webkit-user-select:none;user-select:none}.glide__slide{width:100%;height:100%;flex-shrink:0;white-space:normal;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent}.glide__slide a{-webkit-user-select:none;user-select:none;-webkit-user-drag:none;-moz-user-select:none;-ms-user-select:none}.glide__arrows,.glide__bullets{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}.glide--rtl{direction:rtl}@media only screen and (min-width: 1260px){.container .aligned-carousel{margin-left:-124px!important}}.glide{display:flex;flex-direction:column;gap:32px;position:relative}[data-image-auto-size=true] .glide__slides .glide__slide{height:auto;position:relative;display:inline-flex;justify-content:center}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img{display:flex;width:100%;max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img{flex-grow:1;object-fit:cover}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img.uds-img{max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img figure.uds-figure{display:flex;justify-content:space-between;flex-direction:column}.glide .glide__track{position:relative}.glide .glide__track .glide__slides{margin-bottom:0;touch-action:auto}.glide .glide__track .glide__slides .glide__slide .card{width:100%}@media only screen and (min-width: 576px){.glide[data-has-shadow=true] .glide__track.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}}.glide__arrows{z-index:2;align-self:center}.glide__arrows .glide__arrow{color:#191919;width:4rem;height:4rem;margin:0 .5rem;background-color:#e8e8e8;border:1px solid #d0d0d0;border-radius:50%;font-size:1.3rem;text-shadow:0 .25em .5em rgba(0,0,0,.1);opacity:1;cursor:pointer;transition:opacity .15s ease,border .3s ease-in-out;line-height:1}.glide__arrows .glide__arrow.glide__arrow--disabled{color:#e8e8e8;background-color:#fafafa;border:1px solid #e8e8e8;opacity:1}.glide__arrows .glide__arrow:focus{outline:none}.glide__arrows .glide__arrow:hover{border-color:#fff}.glide__arrows .glide__arrow--left{left:2em}.glide__arrows .glide__arrow--right{right:2em}.glide__arrows .glide__arrow--disabled{opacity:.33}.glide__bullets{z-index:2;list-style:none;max-width:100%;display:flex;justify-content:center}.glide__bullet{transition:all .3s ease-in-out;background-color:#d0d0d0;width:1rem;height:1rem;padding:0;border-radius:50%;border:2px solid transparent;cursor:pointer;line-height:0;margin:.375rem}.glide__bullet:focus{outline:none}.glide__bullet:hover,.glide__bullet:focus{border:1px solid #d0d0d0;background-color:#191919}.glide__bullet--active{background-color:#191919}.glide.aligned-carousel{width:1448px;margin:auto}.glide.image-gallery{gap:0;overflow:hidden}.glide.image-gallery .glide__track{border:1px solid #d0d0d0}.glide.image-gallery .glide__track:after{content:none}.glide.image-gallery .glide__track .glide__slides{margin-bottom:0;height:100%}.glide.image-gallery .glide__track .glide__slides li.glide__slide{display:list-item}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img{height:100%}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img img{object-fit:cover;border:none}.glide.image-gallery .image-gallery-action-area{border:1px solid #d0d0d0;border-top:0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .image-navigator{border-bottom:1px solid #d0d0d0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text{padding:1rem 0;display:inline-block}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text>div{height:auto!important}.glide.image-gallery figcaption{padding:0 .75rem;font-size:.75rem}.glide.image-gallery .image-navigator{position:relative}.glide.image-gallery .image-navigator .image-navigator-images{min-height:64px;padding-top:1rem;padding-bottom:1rem;width:100%;margin:auto;overflow:hidden}.glide.image-gallery .image-navigator .image-navigator-images.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider{position:relative;left:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets{position:relative}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container{position:relative;margin:0 .5rem;height:48px;border:0;padding:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:first-child{margin-left:16rem}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container .bullet-image{flex-basis:auto;width:88px;height:100%;border-radius:0;border:0;z-index:2;object-fit:cover;margin:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:focus{box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .glide__bullet--active{background-color:transparent;border:5px solid #ffc627}.glide.image-gallery .image-navigator .glide__arrows{width:100%;display:flex;justify-content:space-between;align-items:center}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow{width:2.5rem;height:2.5rem;display:flex;align-items:center;justify-content:center;z-index:3;position:absolute;background-color:#fff}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow:hover{border-color:#d0d0d0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow .arrow-icon{font-size:1rem}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--prev{left:0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--next{right:0}@media only screen and (max-width: 576px){.glide{gap:21px}.glide:not(.glide.image-gallery) .glide__bullets{display:none}.glide.image-gallery{width:100%;margin:auto!important}.glide.image-gallery .image-navigator .image-navigator-images .glide__arrows .glide__arrow{display:none}}@media only screen and (max-width: 1260px){.glide.aligned-carousel{width:100%}}.glide--swipeable{cursor:grab;cursor:-moz-grab;cursor:-webkit-grab}.glide--dragging{cursor:grabbing;cursor:-moz-grabbing;cursor:-webkit-grabbing}.glide[data-remove-side-background=true]:after,.glide[data-remove-side-background=true]:before{content:none}.glide button:focus,.glide a:focus,.glide input:focus,.glide textarea:focus,.glide select:focus{outline:none!important;box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery,.glide.image-carousel{margin:auto}.glide.image-gallery[role=figure],.glide.image-gallery figure.uds-figure,.glide.image-carousel[role=figure],.glide.image-carousel figure.uds-figure{margin:0}.glide.image-gallery[role=figure] figcaption *,.glide.image-gallery[role=figure] .uds-caption-text,.glide.image-gallery figure.uds-figure figcaption *,.glide.image-gallery figure.uds-figure .uds-caption-text,.glide.image-carousel[role=figure] figcaption *,.glide.image-carousel[role=figure] .uds-caption-text,.glide.image-carousel figure.uds-figure figcaption *,.glide.image-carousel figure.uds-figure .uds-caption-text{color:#191919;max-width:100%}
`, t = document.createElement("style");
  t.type = "text/css", t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e)), document.head.appendChild(t);
})();
const mo = {
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
}, go = [
  "eventTopics",
  "eventUnits",
  "interests",
  "audiences",
  "eventTypes",
  "collegeUnit"
], yo = (e) => e.toLowerCase().split(" ").join("_"), zu = (e, t) => {
  if (!t) return !0;
  const r = t.split(",");
  for (let i = 0; i < r.length; i += 1) {
    const c = yo(r[i]);
    for (let u = 0; u < go.length; u += 1) {
      const g = go[u];
      if (yo(e[g] || "").includes(c)) return !0;
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
}), ni = ({ children: e, header: t, ctaButton: r, dataSource: i, maxItems: c }) => (
  // Calling the unity-react-core component to fetch the data, transform it and filter it
  // We provide in the renderBody the view specified before in the parent component, recieved as "children" in this component.
  // We provide in the renderHeader the unity-react-core header, if it is desired to be shown
  // We provide the maxItems prop to limit the items rendered
  // We provide the dataSource to read the url to fetch the data
  // We provide the defaultProps to use some needed default values in case they are not provided
  /* @__PURE__ */ ut.jsx(
    xs,
    {
      renderHeader: t && r ? /* @__PURE__ */ ut.jsx(
        Es,
        {
          header: t,
          ctaButton: r,
          defaultProps: mo
        }
      ) : null,
      renderBody: /* @__PURE__ */ ut.jsx(Ts, { children: e }),
      dataTransformer: $u,
      dataFilter: zu,
      dataSource: i,
      defaultProps: mo,
      noFeedText: "No events to show.",
      maxItems: c
    }
  )
);
ni.propTypes = {
  header: ti,
  ctaButton: ri,
  dataSource: _s,
  maxItems: He.number,
  children: He.element
};
const Uu = He.shape({
  color: He.oneOf(["white", "dark"]),
  text: He.string
}), Bu = He.shape({
  color: He.oneOf(["gold", "maroon", "gray", "dark"]),
  text: He.string,
  url: He.string
}), Wu = He.shape({
  url: He.string.isRequired,
  filters: He.string
}).isRequired, Cs = {
  header: Uu,
  ctaButton: Bu,
  dataSource: Wu,
  maxItems: He.number
}, Hu = (e) => e.toLocaleDateString("en-US", {
  timeZone: "UTC",
  weekday: "long",
  month: "long",
  day: "numeric"
}), bo = (e) => e.toLocaleString("en-US", {
  timeZone: "UTC"
}), Ba = (e) => {
  let t = e.split("T");
  return t = t.length > 1 ? t.join("T") : `${t[0].split(":")[0]}T00:00:00Z`, t;
}, vo = (e) => {
  let t = e.getHours(), r = e.getMinutes();
  const i = t >= 12 ? "p.m." : "a.m.";
  return t %= 12, t = t || 12, r = r < 10 ? `0${r}` : r, `${t}:${r} ${i}`;
}, As = (e, t) => {
  const r = Ba(e);
  let i = bo(new Date(r));
  if (i = vo(new Date(i)), !t || e === t)
    return i;
  const c = Ba(t);
  let u = bo(new Date(c));
  return u = vo(new Date(u)), `${i} to ${u}`;
}, Zn = (e, t) => {
  const r = Ba(e);
  return {
    ISO: r.split("T")[0],
    COMPLETE: Hu(new Date(r))
  }[t];
};
var Os = { exports: {} }, We = {};
var wo;
function qu() {
  if (wo) return We;
  wo = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), u = Symbol.for("react.consumer"), g = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), I = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), G = Symbol.for("react.client.reference");
  function A(k) {
    if (typeof k == "object" && k !== null) {
      var F = k.$$typeof;
      switch (F) {
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
                case g:
                case S:
                case E:
                case I:
                  return k;
                case u:
                  return k;
                default:
                  return F;
              }
          }
        case t:
          return F;
      }
    }
  }
  return We.ContextConsumer = u, We.ContextProvider = g, We.Element = e, We.ForwardRef = S, We.Fragment = r, We.Lazy = E, We.Memo = I, We.Portal = t, We.Profiler = c, We.StrictMode = i, We.Suspense = w, We.SuspenseList = h, We.isContextConsumer = function(k) {
    return A(k) === u;
  }, We.isContextProvider = function(k) {
    return A(k) === g;
  }, We.isElement = function(k) {
    return typeof k == "object" && k !== null && k.$$typeof === e;
  }, We.isForwardRef = function(k) {
    return A(k) === S;
  }, We.isFragment = function(k) {
    return A(k) === r;
  }, We.isLazy = function(k) {
    return A(k) === E;
  }, We.isMemo = function(k) {
    return A(k) === I;
  }, We.isPortal = function(k) {
    return A(k) === t;
  }, We.isProfiler = function(k) {
    return A(k) === c;
  }, We.isStrictMode = function(k) {
    return A(k) === i;
  }, We.isSuspense = function(k) {
    return A(k) === w;
  }, We.isSuspenseList = function(k) {
    return A(k) === h;
  }, We.isValidElementType = function(k) {
    return typeof k == "string" || typeof k == "function" || k === r || k === c || k === i || k === w || k === h || k === $ || typeof k == "object" && k !== null && (k.$$typeof === E || k.$$typeof === I || k.$$typeof === g || k.$$typeof === u || k.$$typeof === S || k.$$typeof === G || k.getModuleId !== void 0);
  }, We.typeOf = A, We;
}
Os.exports = qu();
var Rs = Os.exports;
function Vu(e) {
  function t(M, T, L, D, p) {
    for (var re = 0, C = 0, ne = 0, ee = 0, te, W, ie = 0, se = 0, K, he = K = te = 0, Z = 0, le = 0, $e = 0, me = 0, ot = L.length, Ge = ot - 1, ge, U = "", ae = "", Ye = "", lt = "", Me; Z < ot; ) {
      if (W = L.charCodeAt(Z), Z === Ge && C + ee + ne + re !== 0 && (C !== 0 && (W = C === 47 ? 10 : 47), ee = ne = re = 0, ot++, Ge++), C + ee + ne + re === 0) {
        if (Z === Ge && (0 < le && (U = U.replace($, "")), 0 < U.trim().length)) {
          switch (W) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              U += L.charAt(Z);
          }
          W = 59;
        }
        switch (W) {
          case 123:
            for (U = U.trim(), te = U.charCodeAt(0), K = 1, me = ++Z; Z < ot; ) {
              switch (W = L.charCodeAt(Z)) {
                case 123:
                  K++;
                  break;
                case 125:
                  K--;
                  break;
                case 47:
                  switch (W = L.charCodeAt(Z + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (he = Z + 1; he < Ge; ++he)
                          switch (L.charCodeAt(he)) {
                            case 47:
                              if (W === 42 && L.charCodeAt(he - 1) === 42 && Z + 2 !== he) {
                                Z = he + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (W === 47) {
                                Z = he + 1;
                                break e;
                              }
                          }
                        Z = he;
                      }
                  }
                  break;
                case 91:
                  W++;
                case 40:
                  W++;
                case 34:
                case 39:
                  for (; Z++ < Ge && L.charCodeAt(Z) !== W; )
                    ;
              }
              if (K === 0) break;
              Z++;
            }
            switch (K = L.substring(me, Z), te === 0 && (te = (U = U.replace(E, "").trim()).charCodeAt(0)), te) {
              case 64:
                switch (0 < le && (U = U.replace($, "")), W = U.charCodeAt(1), W) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    le = T;
                    break;
                  default:
                    le = st;
                }
                if (K = t(T, le, K, W, p + 1), me = K.length, 0 < Ae && (le = r(st, U, $e), Me = S(3, K, le, T, Pe, pe, me, W, p, D), U = le.join(""), Me !== void 0 && (me = (K = Me.trim()).length) === 0 && (W = 0, K = "")), 0 < me) switch (W) {
                  case 115:
                    U = U.replace(ce, g);
                  case 100:
                  case 109:
                  case 45:
                    K = U + "{" + K + "}";
                    break;
                  case 107:
                    U = U.replace(q, "$1 $2"), K = U + "{" + K + "}", K = Ce === 1 || Ce === 2 && u("@" + K, 3) ? "@-webkit-" + K + "@" + K : "@" + K;
                    break;
                  default:
                    K = U + K, D === 112 && (K = (ae += K, ""));
                }
                else K = "";
                break;
              default:
                K = t(T, r(T, U, $e), K, D, p + 1);
            }
            Ye += K, K = $e = le = he = te = 0, U = "", W = L.charCodeAt(++Z);
            break;
          case 125:
          case 59:
            if (U = (0 < le ? U.replace($, "") : U).trim(), 1 < (me = U.length)) switch (he === 0 && (te = U.charCodeAt(0), te === 45 || 96 < te && 123 > te) && (me = (U = U.replace(" ", ":")).length), 0 < Ae && (Me = S(1, U, T, M, Pe, pe, ae.length, D, p, D)) !== void 0 && (me = (U = Me.trim()).length) === 0 && (U = "\0\0"), te = U.charCodeAt(0), W = U.charCodeAt(1), te) {
              case 0:
                break;
              case 64:
                if (W === 105 || W === 99) {
                  lt += U + L.charAt(Z);
                  break;
                }
              default:
                U.charCodeAt(me - 1) !== 58 && (ae += c(U, te, W, U.charCodeAt(2)));
            }
            $e = le = he = te = 0, U = "", W = L.charCodeAt(++Z);
        }
      }
      switch (W) {
        case 13:
        case 10:
          C === 47 ? C = 0 : 1 + te === 0 && D !== 107 && 0 < U.length && (le = 1, U += "\0"), 0 < Ae * Ke && S(0, U, T, M, Pe, pe, ae.length, D, p, D), pe = 1, Pe++;
          break;
        case 59:
        case 125:
          if (C + ee + ne + re === 0) {
            pe++;
            break;
          }
        default:
          switch (pe++, ge = L.charAt(Z), W) {
            case 9:
            case 32:
              if (ee + re + C === 0) switch (ie) {
                case 44:
                case 58:
                case 9:
                case 32:
                  ge = "";
                  break;
                default:
                  W !== 32 && (ge = " ");
              }
              break;
            case 0:
              ge = "\\0";
              break;
            case 12:
              ge = "\\f";
              break;
            case 11:
              ge = "\\v";
              break;
            case 38:
              ee + C + re === 0 && (le = $e = 1, ge = "\f" + ge);
              break;
            case 108:
              if (ee + C + re + Ne === 0 && 0 < he) switch (Z - he) {
                case 2:
                  ie === 112 && L.charCodeAt(Z - 3) === 58 && (Ne = ie);
                case 8:
                  se === 111 && (Ne = se);
              }
              break;
            case 58:
              ee + C + re === 0 && (he = Z);
              break;
            case 44:
              C + ne + ee + re === 0 && (le = 1, ge += "\r");
              break;
            case 34:
            case 39:
              C === 0 && (ee = ee === W ? 0 : ee === 0 ? W : ee);
              break;
            case 91:
              ee + C + ne === 0 && re++;
              break;
            case 93:
              ee + C + ne === 0 && re--;
              break;
            case 41:
              ee + C + re === 0 && ne--;
              break;
            case 40:
              if (ee + C + re === 0) {
                if (te === 0) switch (2 * ie + 3 * se) {
                  case 533:
                    break;
                  default:
                    te = 1;
                }
                ne++;
              }
              break;
            case 64:
              C + ne + ee + re + he + K === 0 && (K = 1);
              break;
            case 42:
            case 47:
              if (!(0 < ee + re + ne)) switch (C) {
                case 0:
                  switch (2 * W + 3 * L.charCodeAt(Z + 1)) {
                    case 235:
                      C = 47;
                      break;
                    case 220:
                      me = Z, C = 42;
                  }
                  break;
                case 42:
                  W === 47 && ie === 42 && me + 2 !== Z && (L.charCodeAt(me + 2) === 33 && (ae += L.substring(me, Z + 1)), ge = "", C = 0);
              }
          }
          C === 0 && (U += ge);
      }
      se = ie, ie = W, Z++;
    }
    if (me = ae.length, 0 < me) {
      if (le = T, 0 < Ae && (Me = S(2, ae, le, M, Pe, pe, me, D, p, D), Me !== void 0 && (ae = Me).length === 0)) return lt + ae + Ye;
      if (ae = le.join(",") + "{" + ae + "}", Ce * Ne !== 0) {
        switch (Ce !== 2 || u(ae, 2) || (Ne = 0), Ne) {
          case 111:
            ae = ae.replace(H, ":-moz-$1") + ae;
            break;
          case 112:
            ae = ae.replace(X, "::-webkit-input-$1") + ae.replace(X, "::-moz-$1") + ae.replace(X, ":-ms-input-$1") + ae;
        }
        Ne = 0;
      }
    }
    return lt + ae + Ye;
  }
  function r(M, T, L) {
    var D = T.trim().split(F);
    T = D;
    var p = D.length, re = M.length;
    switch (re) {
      case 0:
      case 1:
        var C = 0;
        for (M = re === 0 ? "" : M[0] + " "; C < p; ++C)
          T[C] = i(M, T[C], L).trim();
        break;
      default:
        var ne = C = 0;
        for (T = []; C < p; ++C)
          for (var ee = 0; ee < re; ++ee)
            T[ne++] = i(M[ee] + " ", D[C], L).trim();
    }
    return T;
  }
  function i(M, T, L) {
    var D = T.charCodeAt(0);
    switch (33 > D && (D = (T = T.trim()).charCodeAt(0)), D) {
      case 38:
        return T.replace(Y, "$1" + M.trim());
      case 58:
        return M.trim() + T.replace(Y, "$1" + M.trim());
      default:
        if (0 < 1 * L && 0 < T.indexOf("\f")) return T.replace(Y, (M.charCodeAt(0) === 58 ? "" : "$1") + M.trim());
    }
    return M + T;
  }
  function c(M, T, L, D) {
    var p = M + ";", re = 2 * T + 3 * L + 4 * D;
    if (re === 944) {
      M = p.indexOf(":", 9) + 1;
      var C = p.substring(M, p.length - 1).trim();
      return C = p.substring(0, M).trim() + C + ";", Ce === 1 || Ce === 2 && u(C, 1) ? "-webkit-" + C + C : C;
    }
    if (Ce === 0 || Ce === 2 && !u(p, 1)) return p;
    switch (re) {
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
        if (0 < p.indexOf("image-set(", 11)) return p.replace(ue, "$1-webkit-$2") + p;
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
        return C = p.substring(p.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + C + "-webkit-" + p + "-ms-flex-pack" + C + p;
      case 1005:
        return A.test(p) ? p.replace(G, ":-webkit-") + p.replace(G, ":-moz-") + p : p;
      case 1e3:
        switch (C = p.substring(13).trim(), T = C.indexOf("-") + 1, C.charCodeAt(0) + C.charCodeAt(T)) {
          case 226:
            C = p.replace(x, "tb");
            break;
          case 232:
            C = p.replace(x, "tb-rl");
            break;
          case 220:
            C = p.replace(x, "lr");
            break;
          default:
            return p;
        }
        return "-webkit-" + p + "-ms-" + C + p;
      case 1017:
        if (p.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (T = (p = M).length - 10, C = (p.charCodeAt(T) === 33 ? p.substring(0, T) : p).substring(M.indexOf(":", 7) + 1).trim(), re = C.charCodeAt(0) + (C.charCodeAt(7) | 0)) {
          case 203:
            if (111 > C.charCodeAt(8)) break;
          case 115:
            p = p.replace(C, "-webkit-" + C) + ";" + p;
            break;
          case 207:
          case 102:
            p = p.replace(C, "-webkit-" + (102 < re ? "inline-" : "") + "box") + ";" + p.replace(C, "-webkit-" + C) + ";" + p.replace(C, "-ms-" + C + "box") + ";" + p;
        }
        return p + ";";
      case 938:
        if (p.charCodeAt(5) === 45) switch (p.charCodeAt(6)) {
          case 105:
            return C = p.replace("-items", ""), "-webkit-" + p + "-webkit-box-" + C + "-ms-flex-" + C + p;
          case 115:
            return "-webkit-" + p + "-ms-flex-item-" + p.replace(Ie, "") + p;
          default:
            return "-webkit-" + p + "-ms-flex-line-pack" + p.replace("align-content", "").replace(Ie, "") + p;
        }
        break;
      case 973:
      case 989:
        if (p.charCodeAt(3) !== 45 || p.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (qe.test(M) === !0) return (C = M.substring(M.indexOf(":") + 1)).charCodeAt(0) === 115 ? c(M.replace("stretch", "fill-available"), T, L, D).replace(":fill-available", ":stretch") : p.replace(C, "-webkit-" + C) + p.replace(C, "-moz-" + C.replace("fill-", "")) + p;
        break;
      case 962:
        if (p = "-webkit-" + p + (p.charCodeAt(5) === 102 ? "-ms-" + p : "") + p, L + D === 211 && p.charCodeAt(13) === 105 && 0 < p.indexOf("transform", 10)) return p.substring(0, p.indexOf(";", 27) + 1).replace(k, "$1-webkit-$2") + p;
    }
    return p;
  }
  function u(M, T) {
    var L = M.indexOf(T === 1 ? ":" : "{"), D = M.substring(0, T !== 3 ? L : 10);
    return L = M.substring(L + 1, M.length - 1), Ue(T !== 2 ? D : D.replace(Fe, "$1"), L, T);
  }
  function g(M, T) {
    var L = c(T, T.charCodeAt(0), T.charCodeAt(1), T.charCodeAt(2));
    return L !== T + ";" ? L.replace(_e, " or ($1)").substring(4) : "(" + T + ")";
  }
  function S(M, T, L, D, p, re, C, ne, ee, te) {
    for (var W = 0, ie = T, se; W < Ae; ++W)
      switch (se = Le[W].call(I, M, ie, L, D, p, re, C, ne, ee, te)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          ie = se;
      }
    if (ie !== T) return ie;
  }
  function w(M) {
    switch (M) {
      case void 0:
      case null:
        Ae = Le.length = 0;
        break;
      default:
        if (typeof M == "function") Le[Ae++] = M;
        else if (typeof M == "object") for (var T = 0, L = M.length; T < L; ++T)
          w(M[T]);
        else Ke = !!M | 0;
    }
    return w;
  }
  function h(M) {
    return M = M.prefix, M !== void 0 && (Ue = null, M ? typeof M != "function" ? Ce = 1 : (Ce = 2, Ue = M) : Ce = 0), h;
  }
  function I(M, T) {
    var L = M;
    if (33 > L.charCodeAt(0) && (L = L.trim()), oe = L, L = [oe], 0 < Ae) {
      var D = S(-1, T, L, L, Pe, pe, 0, 0, 0, 0);
      D !== void 0 && typeof D == "string" && (T = D);
    }
    var p = t(st, L, T, 0, 0);
    return 0 < Ae && (D = S(-2, p, L, L, Pe, pe, p.length, 0, 0, 0), D !== void 0 && (p = D)), oe = "", Ne = 0, pe = Pe = 1, p;
  }
  var E = /^\0+/g, $ = /[\0\r\f]/g, G = /: */g, A = /zoo|gra/, k = /([,: ])(transform)/g, F = /,\r+?/g, Y = /([\t\r\n ])*\f?&/g, q = /@(k\w+)\s*(\S*)\s*/, X = /::(place)/g, H = /:(read-only)/g, x = /[svh]\w+-[tblr]{2}/, ce = /\(\s*(.*)\s*\)/g, _e = /([\s\S]*?);/g, Ie = /-self|flex-/g, Fe = /[^]*?(:[rp][el]a[\w-]+)[^]*/, qe = /stretch|:\s*\w+\-(?:conte|avail)/, ue = /([^-])(image-set\()/, pe = 1, Pe = 1, Ne = 0, Ce = 1, st = [], Le = [], Ae = 0, Ue = null, Ke = 0, oe = "";
  return I.use = w, I.set = h, e !== void 0 && h(e), I;
}
var Gu = {
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
function Yu(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Xu = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, So = /* @__PURE__ */ Yu(
  function(e) {
    return Xu.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Ps = { exports: {} }, ze = {};
var ko;
function Qu() {
  if (ko) return ze;
  ko = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, i = e ? Symbol.for("react.fragment") : 60107, c = e ? Symbol.for("react.strict_mode") : 60108, u = e ? Symbol.for("react.profiler") : 60114, g = e ? Symbol.for("react.provider") : 60109, S = e ? Symbol.for("react.context") : 60110, w = e ? Symbol.for("react.async_mode") : 60111, h = e ? Symbol.for("react.concurrent_mode") : 60111, I = e ? Symbol.for("react.forward_ref") : 60112, E = e ? Symbol.for("react.suspense") : 60113, $ = e ? Symbol.for("react.suspense_list") : 60120, G = e ? Symbol.for("react.memo") : 60115, A = e ? Symbol.for("react.lazy") : 60116, k = e ? Symbol.for("react.block") : 60121, F = e ? Symbol.for("react.fundamental") : 60117, Y = e ? Symbol.for("react.responder") : 60118, q = e ? Symbol.for("react.scope") : 60119;
  function X(x) {
    if (typeof x == "object" && x !== null) {
      var ce = x.$$typeof;
      switch (ce) {
        case t:
          switch (x = x.type, x) {
            case w:
            case h:
            case i:
            case u:
            case c:
            case E:
              return x;
            default:
              switch (x = x && x.$$typeof, x) {
                case S:
                case I:
                case A:
                case G:
                case g:
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
  function H(x) {
    return X(x) === h;
  }
  return ze.AsyncMode = w, ze.ConcurrentMode = h, ze.ContextConsumer = S, ze.ContextProvider = g, ze.Element = t, ze.ForwardRef = I, ze.Fragment = i, ze.Lazy = A, ze.Memo = G, ze.Portal = r, ze.Profiler = u, ze.StrictMode = c, ze.Suspense = E, ze.isAsyncMode = function(x) {
    return H(x) || X(x) === w;
  }, ze.isConcurrentMode = H, ze.isContextConsumer = function(x) {
    return X(x) === S;
  }, ze.isContextProvider = function(x) {
    return X(x) === g;
  }, ze.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === t;
  }, ze.isForwardRef = function(x) {
    return X(x) === I;
  }, ze.isFragment = function(x) {
    return X(x) === i;
  }, ze.isLazy = function(x) {
    return X(x) === A;
  }, ze.isMemo = function(x) {
    return X(x) === G;
  }, ze.isPortal = function(x) {
    return X(x) === r;
  }, ze.isProfiler = function(x) {
    return X(x) === u;
  }, ze.isStrictMode = function(x) {
    return X(x) === c;
  }, ze.isSuspense = function(x) {
    return X(x) === E;
  }, ze.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === i || x === h || x === u || x === c || x === E || x === $ || typeof x == "object" && x !== null && (x.$$typeof === A || x.$$typeof === G || x.$$typeof === g || x.$$typeof === S || x.$$typeof === I || x.$$typeof === F || x.$$typeof === Y || x.$$typeof === q || x.$$typeof === k);
  }, ze.typeOf = X, ze;
}
Ps.exports = Qu();
var Ju = Ps.exports, ai = Ju, Zu = {
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
}, Ku = {
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
}, ii = {};
ii[ai.ForwardRef] = ed;
ii[ai.Memo] = Ns;
function xo(e) {
  return ai.isMemo(e) ? Ns : ii[e.$$typeof] || Zu;
}
var td = Object.defineProperty, rd = Object.getOwnPropertyNames, _o = Object.getOwnPropertySymbols, nd = Object.getOwnPropertyDescriptor, ad = Object.getPrototypeOf, Eo = Object.prototype;
function Is(e, t, r) {
  if (typeof t != "string") {
    if (Eo) {
      var i = ad(t);
      i && i !== Eo && Is(e, i, r);
    }
    var c = rd(t);
    _o && (c = c.concat(_o(t)));
    for (var u = xo(e), g = xo(t), S = 0; S < c.length; ++S) {
      var w = c[S];
      if (!Ku[w] && !(r && r[w]) && !(g && g[w]) && !(u && u[w])) {
        var h = nd(t, w);
        try {
          td(e, w, h);
        } catch {
        }
      }
    }
  }
  return e;
}
var id = Is;
const od = /* @__PURE__ */ Lo(id);
var ht = { env: { NODE_ENV: "production" } };
function ur() {
  return (ur = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }).apply(this, arguments);
}
var To = function(e, t) {
  for (var r = [e[0]], i = 0, c = t.length; i < c; i += 1) r.push(t[i], e[i + 1]);
  return r;
}, Wa = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Rs.typeOf(e);
}, Kn = Object.freeze([]), yr = Object.freeze({});
function pn(e) {
  return typeof e == "function";
}
function Co(e) {
  return e.displayName || e.name || "Component";
}
function oi(e) {
  return e && typeof e.styledComponentId == "string";
}
var Lr = typeof ht < "u" && ht.env !== void 0 && (ht.env.REACT_APP_SC_ATTR || ht.env.SC_ATTR) || "data-styled", si = typeof window < "u" && "HTMLElement" in window, sd = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof ht < "u" && ht.env !== void 0 && (ht.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && ht.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? ht.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && ht.env.REACT_APP_SC_DISABLE_SPEEDY : ht.env.SC_DISABLE_SPEEDY !== void 0 && ht.env.SC_DISABLE_SPEEDY !== "" ? ht.env.SC_DISABLE_SPEEDY !== "false" && ht.env.SC_DISABLE_SPEEDY : ht.env.NODE_ENV !== "production"));
function yn(e) {
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
      for (var c = this.groupSizes, u = c.length, g = u; r >= g; ) (g <<= 1) < 0 && yn(16, "" + r);
      this.groupSizes = new Uint32Array(g), this.groupSizes.set(c), this.length = g;
      for (var S = u; S < g; S++) this.groupSizes[S] = 0;
    }
    for (var w = this.indexOfGroup(r + 1), h = 0, I = i.length; h < I; h++) this.tag.insertRule(w, i[h]) && (this.groupSizes[r]++, w++);
  }, t.clearGroup = function(r) {
    if (r < this.length) {
      var i = this.groupSizes[r], c = this.indexOfGroup(r), u = c + i;
      this.groupSizes[r] = 0;
      for (var g = c; g < u; g++) this.tag.deleteRule(c);
    }
  }, t.getGroup = function(r) {
    var i = "";
    if (r >= this.length || this.groupSizes[r] === 0) return i;
    for (var c = this.groupSizes[r], u = this.indexOfGroup(r), g = u + c, S = u; S < g; S++) i += this.tag.getRule(S) + `/*!sc*/
`;
    return i;
  }, e;
}(), Gn = /* @__PURE__ */ new Map(), ea = /* @__PURE__ */ new Map(), un = 1, Bn = function(e) {
  if (Gn.has(e)) return Gn.get(e);
  for (; ea.has(un); ) un++;
  var t = un++;
  return Gn.set(e, t), ea.set(t, e), t;
}, cd = function(e) {
  return ea.get(e);
}, ud = function(e, t) {
  t >= un && (un = t + 1), Gn.set(e, t), ea.set(t, e);
}, dd = "style[" + Lr + '][data-styled-version="5.3.11"]', fd = new RegExp("^" + Lr + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), pd = function(e, t, r) {
  for (var i, c = r.split(","), u = 0, g = c.length; u < g; u++) (i = c[u]) && e.registerName(t, i);
}, hd = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), i = [], c = 0, u = r.length; c < u; c++) {
    var g = r[c].trim();
    if (g) {
      var S = g.match(fd);
      if (S) {
        var w = 0 | parseInt(S[1], 10), h = S[2];
        w !== 0 && (ud(h, w), pd(e, h, S[3]), e.getTag().insertRules(w, i)), i.length = 0;
      } else i.push(g);
    }
  }
}, md = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Ds = function(e) {
  var t = document.head, r = e || t, i = document.createElement("style"), c = function(S) {
    for (var w = S.childNodes, h = w.length; h >= 0; h--) {
      var I = w[h];
      if (I && I.nodeType === 1 && I.hasAttribute(Lr)) return I;
    }
  }(r), u = c !== void 0 ? c.nextSibling : null;
  i.setAttribute(Lr, "active"), i.setAttribute("data-styled-version", "5.3.11");
  var g = md();
  return g && i.setAttribute("nonce", g), r.insertBefore(i, u), i;
}, gd = function() {
  function e(r) {
    var i = this.element = Ds(r);
    i.appendChild(document.createTextNode("")), this.sheet = function(c) {
      if (c.sheet) return c.sheet;
      for (var u = document.styleSheets, g = 0, S = u.length; g < S; g++) {
        var w = u[g];
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
}(), Ao = si, vd = { isServer: !si, useCSSOMInjection: !sd }, Fs = function() {
  function e(r, i, c) {
    r === void 0 && (r = yr), i === void 0 && (i = {}), this.options = ur({}, vd, {}, r), this.gs = i, this.names = new Map(c), this.server = !!r.isServer, !this.server && si && Ao && (Ao = !1, function(u) {
      for (var g = document.querySelectorAll(dd), S = 0, w = g.length; S < w; S++) {
        var h = g[S];
        h && h.getAttribute(Lr) !== "active" && (hd(u, h), h.parentNode && h.parentNode.removeChild(h));
      }
    }(this));
  }
  e.registerId = function(r) {
    return Bn(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, i) {
    return i === void 0 && (i = !0), new e(ur({}, this.options, {}, r), this.gs, i && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (c = (i = this.options).isServer, u = i.useCSSOMInjection, g = i.target, r = c ? new bd(g) : u ? new gd(g) : new yd(g), new ld(r)));
    var r, i, c, u, g;
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
      for (var i = r.getTag(), c = i.length, u = "", g = 0; g < c; g++) {
        var S = cd(g);
        if (S !== void 0) {
          var w = r.names.get(S), h = i.getGroup(g);
          if (w && h && w.size) {
            var I = Lr + ".g" + g + '[id="' + S + '"]', E = "";
            w !== void 0 && w.forEach(function($) {
              $.length > 0 && (E += $ + ",");
            }), u += "" + h + I + '{content:"' + E + `"}/*!sc*/
`;
          }
        }
      }
      return u;
    }(this);
  }, e;
}(), wd = /(a)(d)/gi, Oo = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Ha(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = Oo(t % 52) + r;
  return (Oo(t % 52) + r).replace(wd, "$1-$2");
}
var Ir = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, Ls = function(e) {
  return Ir(5381, e);
};
function Sd(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (pn(r) && !oi(r)) return !1;
  }
  return !0;
}
var kd = Ls("5.3.11"), xd = function() {
  function e(t, r, i) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (i === void 0 || i.isStatic) && Sd(t), this.componentId = r, this.baseHash = Ir(kd, r), this.baseStyle = i, Fs.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, i) {
    var c = this.componentId, u = [];
    if (this.baseStyle && u.push(this.baseStyle.generateAndInjectStyles(t, r, i)), this.isStatic && !i.hash) if (this.staticRulesId && r.hasNameForId(c, this.staticRulesId)) u.push(this.staticRulesId);
    else {
      var g = Mr(this.rules, t, r, i).join(""), S = Ha(Ir(this.baseHash, g) >>> 0);
      if (!r.hasNameForId(c, S)) {
        var w = i(g, "." + S, void 0, c);
        r.insertRules(c, S, w);
      }
      u.push(S), this.staticRulesId = S;
    }
    else {
      for (var h = this.rules.length, I = Ir(this.baseHash, i.hash), E = "", $ = 0; $ < h; $++) {
        var G = this.rules[$];
        if (typeof G == "string") E += G;
        else if (G) {
          var A = Mr(G, t, r, i), k = Array.isArray(A) ? A.join("") : A;
          I = Ir(I, k + $), E += k;
        }
      }
      if (E) {
        var F = Ha(I >>> 0);
        if (!r.hasNameForId(c, F)) {
          var Y = i(E, "." + F, void 0, c);
          r.insertRules(c, F, Y);
        }
        u.push(F);
      }
    }
    return u.join(" ");
  }, e;
}(), _d = /^\s*\/\/.*$/gm, Ed = [":", "[", ".", "#"];
function Td(e) {
  var t, r, i, c, u = yr, g = u.options, S = g === void 0 ? yr : g, w = u.plugins, h = w === void 0 ? Kn : w, I = new Vu(S), E = [], $ = /* @__PURE__ */ function(k) {
    function F(Y) {
      if (Y) try {
        k(Y + "}");
      } catch {
      }
    }
    return function(Y, q, X, H, x, ce, _e, Ie, Fe, qe) {
      switch (Y) {
        case 1:
          if (Fe === 0 && q.charCodeAt(0) === 64) return k(q + ";"), "";
          break;
        case 2:
          if (Ie === 0) return q + "/*|*/";
          break;
        case 3:
          switch (Ie) {
            case 102:
            case 112:
              return k(X[0] + q), "";
            default:
              return q + (qe === 0 ? "/*|*/" : "");
          }
        case -2:
          q.split("/*|*/}").forEach(F);
      }
    };
  }(function(k) {
    E.push(k);
  }), G = function(k, F, Y) {
    return F === 0 && Ed.indexOf(Y[r.length]) !== -1 || Y.match(c) ? k : "." + t;
  };
  function A(k, F, Y, q) {
    q === void 0 && (q = "&");
    var X = k.replace(_d, ""), H = F && Y ? Y + " " + F + " { " + X + " }" : X;
    return t = q, r = F, i = new RegExp("\\" + r + "\\b", "g"), c = new RegExp("(\\" + r + "\\b){2,}"), I(Y || !F ? "" : F, H);
  }
  return I.use([].concat(h, [function(k, F, Y) {
    k === 2 && Y.length && Y[0].lastIndexOf(r) > 0 && (Y[0] = Y[0].replace(i, G));
  }, $, function(k) {
    if (k === -2) {
      var F = E;
      return E = [], F;
    }
  }])), A.hash = h.length ? h.reduce(function(k, F) {
    return F.name || yn(15), Ir(k, F.name);
  }, 5381).toString() : "", A;
}
var Ms = dt.createContext();
Ms.Consumer;
var js = dt.createContext(), Cd = (js.Consumer, new Fs()), qa = Td();
function Ad() {
  return br(Ms) || Cd;
}
function Od() {
  return br(js) || qa;
}
var Rd = function() {
  function e(t, r) {
    var i = this;
    this.inject = function(c, u) {
      u === void 0 && (u = qa);
      var g = i.name + u.hash;
      c.hasNameForId(i.id, g) || c.insertRules(i.id, g, u(i.rules, g, "@keyframes"));
    }, this.toString = function() {
      return yn(12, String(i.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = qa), this.name + t.hash;
  }, e;
}(), Pd = /([A-Z])/, Nd = /([A-Z])/g, Id = /^ms-/, Dd = function(e) {
  return "-" + e.toLowerCase();
};
function Ro(e) {
  return Pd.test(e) ? e.replace(Nd, Dd).replace(Id, "-ms-") : e;
}
var Po = function(e) {
  return e == null || e === !1 || e === "";
};
function Mr(e, t, r, i) {
  if (Array.isArray(e)) {
    for (var c, u = [], g = 0, S = e.length; g < S; g += 1) (c = Mr(e[g], t, r, i)) !== "" && (Array.isArray(c) ? u.push.apply(u, c) : u.push(c));
    return u;
  }
  if (Po(e)) return "";
  if (oi(e)) return "." + e.styledComponentId;
  if (pn(e)) {
    if (typeof (h = e) != "function" || h.prototype && h.prototype.isReactComponent || !t) return e;
    var w = e(t);
    return Mr(w, t, r, i);
  }
  var h;
  return e instanceof Rd ? r ? (e.inject(r, i), e.getName(i)) : e : Wa(e) ? function I(E, $) {
    var G, A, k = [];
    for (var F in E) E.hasOwnProperty(F) && !Po(E[F]) && (Array.isArray(E[F]) && E[F].isCss || pn(E[F]) ? k.push(Ro(F) + ":", E[F], ";") : Wa(E[F]) ? k.push.apply(k, I(E[F], F)) : k.push(Ro(F) + ": " + (G = F, (A = E[F]) == null || typeof A == "boolean" || A === "" ? "" : typeof A != "number" || A === 0 || G in Gu || G.startsWith("--") ? String(A).trim() : A + "px") + ";"));
    return $ ? [$ + " {"].concat(k, ["}"]) : k;
  }(e) : e.toString();
}
var No = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Fd(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
  return pn(e) || Wa(e) ? No(Mr(To(Kn, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : No(Mr(To(e, r)));
}
var Ld = function(e, t, r) {
  return r === void 0 && (r = yr), e.theme !== r.theme && e.theme || t || r.theme;
}, Md = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, jd = /(^-|-$)/g;
function Ra(e) {
  return e.replace(Md, "-").replace(jd, "");
}
var zd = function(e) {
  return Ha(Ls(e) >>> 0);
};
function Wn(e) {
  return typeof e == "string" && ht.env.NODE_ENV === "production";
}
var Va = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, $d = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Ud(e, t, r) {
  var i = e[r];
  Va(t) && Va(i) ? zs(i, t) : e[r] = t;
}
function zs(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
  for (var c = 0, u = r; c < u.length; c++) {
    var g = u[c];
    if (Va(g)) for (var S in g) $d(S) && Ud(e, g[S], S);
  }
  return e;
}
var $s = dt.createContext();
$s.Consumer;
var Pa = {};
function Us(e, t, r) {
  var i = oi(e), c = !Wn(e), u = t.attrs, g = u === void 0 ? Kn : u, S = t.componentId, w = S === void 0 ? function(q, X) {
    var H = typeof q != "string" ? "sc" : Ra(q);
    Pa[H] = (Pa[H] || 0) + 1;
    var x = H + "-" + zd("5.3.11" + H + Pa[H]);
    return X ? X + "-" + x : x;
  }(t.displayName, t.parentComponentId) : S, h = t.displayName, I = h === void 0 ? function(q) {
    return Wn(q) ? "styled." + q : "Styled(" + Co(q) + ")";
  }(e) : h, E = t.displayName && t.componentId ? Ra(t.displayName) + "-" + t.componentId : t.componentId || w, $ = i && e.attrs ? Array.prototype.concat(e.attrs, g).filter(Boolean) : g, G = t.shouldForwardProp;
  i && e.shouldForwardProp && (G = t.shouldForwardProp ? function(q, X, H) {
    return e.shouldForwardProp(q, X, H) && t.shouldForwardProp(q, X, H);
  } : e.shouldForwardProp);
  var A, k = new xd(r, E, i ? e.componentStyle : void 0), F = k.isStatic && g.length === 0, Y = function(q, X) {
    return function(H, x, ce, _e) {
      var Ie = H.attrs, Fe = H.componentStyle, qe = H.defaultProps, ue = H.foldedComponentIds, pe = H.shouldForwardProp, Pe = H.styledComponentId, Ne = H.target, Ce = function(D, p, re) {
        D === void 0 && (D = yr);
        var C = ur({}, p, { theme: D }), ne = {};
        return re.forEach(function(ee) {
          var te, W, ie, se = ee;
          for (te in pn(se) && (se = se(C)), se) C[te] = ne[te] = te === "className" ? (W = ne[te], ie = se[te], W && ie ? W + " " + ie : W || ie) : se[te];
        }), [C, ne];
      }(Ld(x, br($s), qe) || yr, x, Ie), st = Ce[0], Le = Ce[1], Ae = function(D, p, re, C) {
        var ne = Ad(), ee = Od(), te = p ? D.generateAndInjectStyles(yr, ne, ee) : D.generateAndInjectStyles(re, ne, ee);
        return te;
      }(Fe, _e, st), Ue = ce, Ke = Le.$as || x.$as || Le.as || x.as || Ne, oe = Wn(Ke), M = Le !== x ? ur({}, x, {}, Le) : x, T = {};
      for (var L in M) L[0] !== "$" && L !== "as" && (L === "forwardedAs" ? T.as = M[L] : (pe ? pe(L, So, Ke) : !oe || So(L)) && (T[L] = M[L]));
      return x.style && Le.style !== x.style && (T.style = ur({}, x.style, {}, Le.style)), T.className = Array.prototype.concat(ue, Pe, Ae !== Pe ? Ae : null, x.className, Le.className).filter(Boolean).join(" "), T.ref = Ue, Do(Ke, T);
    }(A, q, X, F);
  };
  return Y.displayName = I, (A = dt.forwardRef(Y)).attrs = $, A.componentStyle = k, A.displayName = I, A.shouldForwardProp = G, A.foldedComponentIds = i ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Kn, A.styledComponentId = E, A.target = i ? e.target : e, A.withComponent = function(q) {
    var X = t.componentId, H = function(ce, _e) {
      if (ce == null) return {};
      var Ie, Fe, qe = {}, ue = Object.keys(ce);
      for (Fe = 0; Fe < ue.length; Fe++) Ie = ue[Fe], _e.indexOf(Ie) >= 0 || (qe[Ie] = ce[Ie]);
      return qe;
    }(t, ["componentId"]), x = X && X + "-" + (Wn(q) ? q : Ra(Co(q)));
    return Us(q, ur({}, H, { attrs: $, componentId: x }), r);
  }, Object.defineProperty(A, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(q) {
    this._foldedDefaultProps = i ? zs({}, e.defaultProps, q) : q;
  } }), Object.defineProperty(A, "toString", { value: function() {
    return "." + A.styledComponentId;
  } }), c && od(A, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), A;
}
var ta = function(e) {
  return function t(r, i, c) {
    if (c === void 0 && (c = yr), !Rs.isValidElementType(i)) return yn(1, String(i));
    var u = function() {
      return r(i, c, Fd.apply(void 0, arguments));
    };
    return u.withConfig = function(g) {
      return t(r, i, ur({}, c, {}, g));
    }, u.attrs = function(g) {
      return t(r, i, ur({}, c, { attrs: Array.prototype.concat(c.attrs, g).filter(Boolean) }));
    }, u;
  }(Us, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  ta[e] = ta(e);
});
const Bd = ta.ul`
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
  const { feeds: e } = br(ei);
  return /* @__PURE__ */ ut.jsx(Bd, { "data-testid": "grid-view-container", children: e == null ? void 0 : e.map((t) => /* @__PURE__ */ ut.jsx("li", { children: /* @__PURE__ */ ut.jsx(
    mr,
    {
      type: "event",
      eventFormat: "inline",
      eventTime: `<span>
                ${Zn(t.startDate, "COMPLETE")} <br /> ${As(
        t.startDate,
        t.endDate
      )}
              </span>`,
      eventLocation: t.location,
      clickable: !!t.alias,
      cardLink: `${t.alias}/?eventDate=${Zn(
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
}, Bs = ({ header: e, ctaButton: t, dataSource: r, maxItems: i }) => (dn(() => {
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
/* @__PURE__ */ ut.jsx(ni, { header: e, ctaButton: t, dataSource: r, maxItems: i, children: /* @__PURE__ */ ut.jsx(Wd, {}) }));
Bs.propTypes = Cs;
const Hd = ta.ul`
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
  const { feeds: e } = br(ei);
  return /* @__PURE__ */ ut.jsx(Hd, { "data-testid": "list-view-container", children: e == null ? void 0 : e.map((t) => /* @__PURE__ */ ut.jsx("li", { children: /* @__PURE__ */ ut.jsx(
    mr,
    {
      type: "event",
      eventFormat: "inline",
      horizontal: !0,
      eventTime: `<span>
                ${Zn(t.startDate, "COMPLETE")} <br /> ${As(
        t.startDate,
        t.endDate
      )}
              </span>`,
      eventLocation: t.location,
      clickable: !!t.alias,
      cardLink: `${t.alias}/?eventDate=${Zn(
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
}, Ws = ({ header: e, ctaButton: t, dataSource: r, maxItems: i }) => (dn(() => {
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
/* @__PURE__ */ ut.jsx(ni, { header: e, ctaButton: t, dataSource: r, maxItems: i, children: /* @__PURE__ */ ut.jsx(qd, {}) }));
Ws.propTypes = Cs;
var Hs, Io = Fo;
Hs = Io.createRoot, Io.hydrateRoot;
const qs = (e, t, r) => {
  Hs(r).render(dt.createElement(e, t));
}, Yd = ({ targetSelector: e, props: t }) => {
  qs(Bs, t, document.querySelector(e));
}, Xd = ({ targetSelector: e, props: t }) => {
  qs(Ws, t, document.querySelector(e));
};
export {
  Bs as CardsGridEvents,
  Ws as CardsListEvents,
  Yd as initCardsGridEventsComponent,
  Xd as initCardsListEventsComponent
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
/*! @license DOMPurify 3.2.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.5/LICENSE */
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
