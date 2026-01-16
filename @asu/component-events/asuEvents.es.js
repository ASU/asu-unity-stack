import dt, { forwardRef as Ga, Component as tl, createContext as rl, useRef as nl, useImperativeHandle as al, useId as ol, useContext as br, createElement as Ii, useState as sn, useEffect as dn } from "react";
import Pi from "react-dom";
function Di(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Fi = { exports: {} }, Yr = {};
var To;
function il() {
  if (To) return Yr;
  To = 1;
  var e = dt, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, c = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(S, w, m) {
    var I, T = {}, $ = null, Y = null;
    m !== void 0 && ($ = "" + m), w.key !== void 0 && ($ = "" + w.key), w.ref !== void 0 && (Y = w.ref);
    for (I in w) o.call(w, I) && !u.hasOwnProperty(I) && (T[I] = w[I]);
    if (S && S.defaultProps) for (I in w = S.defaultProps, w) T[I] === void 0 && (T[I] = w[I]);
    return { $$typeof: t, type: S, key: $, ref: Y, props: T, _owner: c.current };
  }
  return Yr.Fragment = r, Yr.jsx = g, Yr.jsxs = g, Yr;
}
Fi.exports = il();
var ut = Fi.exports;
const {
  entries: Mi,
  setPrototypeOf: Eo,
  isFrozen: sl,
  getPrototypeOf: ll,
  getOwnPropertyDescriptor: cl
} = Object;
let {
  freeze: wt,
  seal: Lt,
  create: ji
} = Object, {
  apply: La,
  construct: Ia
} = typeof Reflect < "u" && Reflect;
wt || (wt = function(t) {
  return t;
});
Lt || (Lt = function(t) {
  return t;
});
La || (La = function(t, r, o) {
  return t.apply(r, o);
});
Ia || (Ia = function(t, r) {
  return new t(...r);
});
const Pn = St(Array.prototype.forEach), ul = St(Array.prototype.lastIndexOf), Ao = St(Array.prototype.pop), Xr = St(Array.prototype.push), dl = St(Array.prototype.splice), Hn = St(String.prototype.toLowerCase), pa = St(String.prototype.toString), Oo = St(String.prototype.match), Jr = St(String.prototype.replace), fl = St(String.prototype.indexOf), pl = St(String.prototype.trim), Vt = St(Object.prototype.hasOwnProperty), bt = St(RegExp.prototype.test), Qr = hl(TypeError);
function St(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), c = 1; c < r; c++)
      o[c - 1] = arguments[c];
    return La(e, t, o);
  };
}
function hl(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++)
      r[o] = arguments[o];
    return Ia(e, r);
  };
}
function Oe(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Hn;
  Eo && Eo(e, null);
  let o = t.length;
  for (; o--; ) {
    let c = t[o];
    if (typeof c == "string") {
      const u = r(c);
      u !== c && (sl(t) || (t[o] = u), c = u);
    }
    e[c] = !0;
  }
  return e;
}
function ml(e) {
  for (let t = 0; t < e.length; t++)
    Vt(e, t) || (e[t] = null);
  return e;
}
function Tr(e) {
  const t = ji(null);
  for (const [r, o] of Mi(e))
    Vt(e, r) && (Array.isArray(o) ? t[r] = ml(o) : o && typeof o == "object" && o.constructor === Object ? t[r] = Tr(o) : t[r] = o);
  return t;
}
function Zr(e, t) {
  for (; e !== null; ) {
    const o = cl(e, t);
    if (o) {
      if (o.get)
        return St(o.get);
      if (typeof o.value == "function")
        return St(o.value);
    }
    e = ll(e);
  }
  function r() {
    return null;
  }
  return r;
}
const Ro = wt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ha = wt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ma = wt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), gl = wt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ga = wt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), yl = wt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), No = wt(["#text"]), Lo = wt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), ya = wt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Io = wt(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Dn = wt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), bl = Lt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), vl = Lt(/<%[\w\W]*|[\w\W]*%>/gm), wl = Lt(/\$\{[\w\W]*/gm), Sl = Lt(/^data-[\-\w.\u00B7-\uFFFF]+$/), kl = Lt(/^aria-[\-\w]+$/), zi = Lt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), xl = Lt(/^(?:\w+script|data):/i), _l = Lt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), $i = Lt(/^html$/i), Cl = Lt(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Po = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: kl,
  ATTR_WHITESPACE: _l,
  CUSTOM_ELEMENT: Cl,
  DATA_ATTR: Sl,
  DOCTYPE_NAME: $i,
  ERB_EXPR: vl,
  IS_ALLOWED_URI: zi,
  IS_SCRIPT_OR_DATA: xl,
  MUSTACHE_EXPR: bl,
  TMPLIT_EXPR: wl
});
const Kr = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, Tl = function() {
  return typeof window > "u" ? null : window;
}, El = function(t, r) {
  if (typeof t != "object" || typeof t.createPolicy != "function")
    return null;
  let o = null;
  const c = "data-tt-policy-suffix";
  r && r.hasAttribute(c) && (o = r.getAttribute(c));
  const u = "dompurify" + (o ? "#" + o : "");
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
}, Do = function() {
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
function Ui() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Tl();
  const t = (h) => Ui(h);
  if (t.version = "3.2.5", t.removed = [], !e || !e.document || e.document.nodeType !== Kr.document || !e.Element)
    return t.isSupported = !1, t;
  let {
    document: r
  } = e;
  const o = r, c = o.currentScript, {
    DocumentFragment: u,
    HTMLTemplateElement: g,
    Node: S,
    Element: w,
    NodeFilter: m,
    NamedNodeMap: I = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: T,
    DOMParser: $,
    trustedTypes: Y
  } = e, A = w.prototype, k = Zr(A, "cloneNode"), D = Zr(A, "remove"), V = Zr(A, "nextSibling"), G = Zr(A, "childNodes"), J = Zr(A, "parentNode");
  if (typeof g == "function") {
    const h = r.createElement("template");
    h.content && h.content.ownerDocument && (r = h.content.ownerDocument);
  }
  let H, x = "";
  const {
    implementation: ce,
    createNodeIterator: _e,
    createDocumentFragment: Ie,
    getElementsByTagName: De
  } = r, {
    importNode: Ve
  } = o;
  let ue = Do();
  t.isSupported = typeof Mi == "function" && typeof J == "function" && ce && ce.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: pe,
    ERB_EXPR: Ne,
    TMPLIT_EXPR: Le,
    DATA_ATTR: Ee,
    ARIA_ATTR: st,
    IS_SCRIPT_OR_DATA: Fe,
    ATTR_WHITESPACE: Ae,
    CUSTOM_ELEMENT: Ue
  } = Po;
  let {
    IS_ALLOWED_URI: Ke
  } = Po, ie = null;
  const M = Oe({}, [...Ro, ...ha, ...ma, ...ga, ...No]);
  let C = null;
  const F = Oe({}, [...Lo, ...ya, ...Io, ...Dn]);
  let P = Object.seal(ji(null, {
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
  })), p = null, re = null, E = !0, ne = !0, ee = !1, te = !0, B = !1, oe = !0, se = !1, K = !1, he = !1, Z = !1, le = !1, $e = !1, me = !0, it = !1;
  const Ge = "user-content-";
  let ge = !0, U = !1, ae = {}, Ye = null;
  const lt = Oe({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let Me = null;
  const Yt = Oe({}, ["audio", "video", "img", "source", "image", "track"]);
  let Rt = null;
  const Kt = Oe({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), mt = "http://www.w3.org/1998/Math/MathML", ft = "http://www.w3.org/2000/svg", nt = "http://www.w3.org/1999/xhtml";
  let ct = nt, Pt = !1, Dt = null;
  const vr = Oe({}, [mt, ft, nt], pa);
  let ot = Oe({}, ["mi", "mo", "mn", "ms", "mtext"]), gt = Oe({}, ["annotation-xml"]);
  const Xt = Oe({}, ["title", "style", "font", "a", "script"]);
  let Ce = null;
  const Ft = ["application/xhtml+xml", "text/html"], Jt = "text/html";
  let ve = null, et = null;
  const Qt = r.createElement("form"), yt = function(b) {
    return b instanceof RegExp || b instanceof Function;
  }, Nt = function() {
    let b = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(et && et === b)) {
      if ((!b || typeof b != "object") && (b = {}), b = Tr(b), Ce = // eslint-disable-next-line unicorn/prefer-includes
      Ft.indexOf(b.PARSER_MEDIA_TYPE) === -1 ? Jt : b.PARSER_MEDIA_TYPE, ve = Ce === "application/xhtml+xml" ? pa : Hn, ie = Vt(b, "ALLOWED_TAGS") ? Oe({}, b.ALLOWED_TAGS, ve) : M, C = Vt(b, "ALLOWED_ATTR") ? Oe({}, b.ALLOWED_ATTR, ve) : F, Dt = Vt(b, "ALLOWED_NAMESPACES") ? Oe({}, b.ALLOWED_NAMESPACES, pa) : vr, Rt = Vt(b, "ADD_URI_SAFE_ATTR") ? Oe(Tr(Kt), b.ADD_URI_SAFE_ATTR, ve) : Kt, Me = Vt(b, "ADD_DATA_URI_TAGS") ? Oe(Tr(Yt), b.ADD_DATA_URI_TAGS, ve) : Yt, Ye = Vt(b, "FORBID_CONTENTS") ? Oe({}, b.FORBID_CONTENTS, ve) : lt, p = Vt(b, "FORBID_TAGS") ? Oe({}, b.FORBID_TAGS, ve) : {}, re = Vt(b, "FORBID_ATTR") ? Oe({}, b.FORBID_ATTR, ve) : {}, ae = Vt(b, "USE_PROFILES") ? b.USE_PROFILES : !1, E = b.ALLOW_ARIA_ATTR !== !1, ne = b.ALLOW_DATA_ATTR !== !1, ee = b.ALLOW_UNKNOWN_PROTOCOLS || !1, te = b.ALLOW_SELF_CLOSE_IN_ATTR !== !1, B = b.SAFE_FOR_TEMPLATES || !1, oe = b.SAFE_FOR_XML !== !1, se = b.WHOLE_DOCUMENT || !1, Z = b.RETURN_DOM || !1, le = b.RETURN_DOM_FRAGMENT || !1, $e = b.RETURN_TRUSTED_TYPE || !1, he = b.FORCE_BODY || !1, me = b.SANITIZE_DOM !== !1, it = b.SANITIZE_NAMED_PROPS || !1, ge = b.KEEP_CONTENT !== !1, U = b.IN_PLACE || !1, Ke = b.ALLOWED_URI_REGEXP || zi, ct = b.NAMESPACE || nt, ot = b.MATHML_TEXT_INTEGRATION_POINTS || ot, gt = b.HTML_INTEGRATION_POINTS || gt, P = b.CUSTOM_ELEMENT_HANDLING || {}, b.CUSTOM_ELEMENT_HANDLING && yt(b.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (P.tagNameCheck = b.CUSTOM_ELEMENT_HANDLING.tagNameCheck), b.CUSTOM_ELEMENT_HANDLING && yt(b.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (P.attributeNameCheck = b.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), b.CUSTOM_ELEMENT_HANDLING && typeof b.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (P.allowCustomizedBuiltInElements = b.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), B && (ne = !1), le && (Z = !0), ae && (ie = Oe({}, No), C = [], ae.html === !0 && (Oe(ie, Ro), Oe(C, Lo)), ae.svg === !0 && (Oe(ie, ha), Oe(C, ya), Oe(C, Dn)), ae.svgFilters === !0 && (Oe(ie, ma), Oe(C, ya), Oe(C, Dn)), ae.mathMl === !0 && (Oe(ie, ga), Oe(C, Io), Oe(C, Dn))), b.ADD_TAGS && (ie === M && (ie = Tr(ie)), Oe(ie, b.ADD_TAGS, ve)), b.ADD_ATTR && (C === F && (C = Tr(C)), Oe(C, b.ADD_ATTR, ve)), b.ADD_URI_SAFE_ATTR && Oe(Rt, b.ADD_URI_SAFE_ATTR, ve), b.FORBID_CONTENTS && (Ye === lt && (Ye = Tr(Ye)), Oe(Ye, b.FORBID_CONTENTS, ve)), ge && (ie["#text"] = !0), se && Oe(ie, ["html", "head", "body"]), ie.table && (Oe(ie, ["tbody"]), delete p.tbody), b.TRUSTED_TYPES_POLICY) {
        if (typeof b.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Qr('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof b.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Qr('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        H = b.TRUSTED_TYPES_POLICY, x = H.createHTML("");
      } else
        H === void 0 && (H = El(Y, c)), H !== null && typeof x == "string" && (x = H.createHTML(""));
      wt && wt(b), et = b;
    }
  }, Mt = Oe({}, [...ha, ...ma, ...gl]), jt = Oe({}, [...ga, ...yl]), dr = function(b) {
    let _ = J(b);
    (!_ || !_.tagName) && (_ = {
      namespaceURI: ct,
      tagName: "template"
    });
    const q = Hn(b.tagName), ye = Hn(_.tagName);
    return Dt[b.namespaceURI] ? b.namespaceURI === ft ? _.namespaceURI === nt ? q === "svg" : _.namespaceURI === mt ? q === "svg" && (ye === "annotation-xml" || ot[ye]) : !!Mt[q] : b.namespaceURI === mt ? _.namespaceURI === nt ? q === "math" : _.namespaceURI === ft ? q === "math" && gt[ye] : !!jt[q] : b.namespaceURI === nt ? _.namespaceURI === ft && !gt[ye] || _.namespaceURI === mt && !ot[ye] ? !1 : !jt[q] && (Xt[q] || !Mt[q]) : !!(Ce === "application/xhtml+xml" && Dt[b.namespaceURI]) : !1;
  }, at = function(b) {
    Xr(t.removed, {
      element: b
    });
    try {
      J(b).removeChild(b);
    } catch {
      D(b);
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
  }, er = function(b) {
    let _ = null, q = null;
    if (he)
      b = "<remove></remove>" + b;
    else {
      const Pe = Oo(b, /^[\r\n\t ]+/);
      q = Pe && Pe[0];
    }
    Ce === "application/xhtml+xml" && ct === nt && (b = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + b + "</body></html>");
    const ye = H ? H.createHTML(b) : b;
    if (ct === nt)
      try {
        _ = new $().parseFromString(ye, Ce);
      } catch {
      }
    if (!_ || !_.documentElement) {
      _ = ce.createDocument(ct, "template", null);
      try {
        _.documentElement.innerHTML = Pt ? x : ye;
      } catch {
      }
    }
    const Se = _.body || _.documentElement;
    return b && q && Se.insertBefore(r.createTextNode(q), Se.childNodes[0] || null), ct === nt ? De.call(_, se ? "html" : "body")[0] : se ? _.documentElement : Se;
  }, tr = function(b) {
    return _e.call(
      b.ownerDocument || b,
      b,
      // eslint-disable-next-line no-bitwise
      m.SHOW_ELEMENT | m.SHOW_COMMENT | m.SHOW_TEXT | m.SHOW_PROCESSING_INSTRUCTION | m.SHOW_CDATA_SECTION,
      null
    );
  }, Ct = function(b) {
    return b instanceof T && (typeof b.nodeName != "string" || typeof b.textContent != "string" || typeof b.removeChild != "function" || !(b.attributes instanceof I) || typeof b.removeAttribute != "function" || typeof b.setAttribute != "function" || typeof b.namespaceURI != "string" || typeof b.insertBefore != "function" || typeof b.hasChildNodes != "function");
  }, Zt = function(b) {
    return typeof S == "function" && b instanceof S;
  };
  function Xe(h, b, _) {
    Pn(h, (q) => {
      q.call(t, b, _, et);
    });
  }
  const zt = function(b) {
    let _ = null;
    if (Xe(ue.beforeSanitizeElements, b, null), Ct(b))
      return at(b), !0;
    const q = ve(b.nodeName);
    if (Xe(ue.uponSanitizeElement, b, {
      tagName: q,
      allowedTags: ie
    }), b.hasChildNodes() && !Zt(b.firstElementChild) && bt(/<[/\w!]/g, b.innerHTML) && bt(/<[/\w!]/g, b.textContent) || b.nodeType === Kr.progressingInstruction || oe && b.nodeType === Kr.comment && bt(/<[/\w]/g, b.data))
      return at(b), !0;
    if (!ie[q] || p[q]) {
      if (!p[q] && Tt(q) && (P.tagNameCheck instanceof RegExp && bt(P.tagNameCheck, q) || P.tagNameCheck instanceof Function && P.tagNameCheck(q)))
        return !1;
      if (ge && !Ye[q]) {
        const ye = J(b) || b.parentNode, Se = G(b) || b.childNodes;
        if (Se && ye) {
          const Pe = Se.length;
          for (let we = Pe - 1; we >= 0; --we) {
            const Je = k(Se[we], !0);
            Je.__removalCount = (b.__removalCount || 0) + 1, ye.insertBefore(Je, V(b));
          }
        }
      }
      return at(b), !0;
    }
    return b instanceof w && !dr(b) || (q === "noscript" || q === "noembed" || q === "noframes") && bt(/<\/no(script|embed|frames)/i, b.innerHTML) ? (at(b), !0) : (B && b.nodeType === Kr.text && (_ = b.textContent, Pn([pe, Ne, Le], (ye) => {
      _ = Jr(_, ye, " ");
    }), b.textContent !== _ && (Xr(t.removed, {
      element: b.cloneNode()
    }), b.textContent = _)), Xe(ue.afterSanitizeElements, b, null), !1);
  }, rr = function(b, _, q) {
    if (me && (_ === "id" || _ === "name") && (q in r || q in Qt))
      return !1;
    if (!(ne && !re[_] && bt(Ee, _))) {
      if (!(E && bt(st, _))) {
        if (!C[_] || re[_]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(Tt(b) && (P.tagNameCheck instanceof RegExp && bt(P.tagNameCheck, b) || P.tagNameCheck instanceof Function && P.tagNameCheck(b)) && (P.attributeNameCheck instanceof RegExp && bt(P.attributeNameCheck, _) || P.attributeNameCheck instanceof Function && P.attributeNameCheck(_)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            _ === "is" && P.allowCustomizedBuiltInElements && (P.tagNameCheck instanceof RegExp && bt(P.tagNameCheck, q) || P.tagNameCheck instanceof Function && P.tagNameCheck(q)))
          ) return !1;
        } else if (!Rt[_]) {
          if (!bt(Ke, Jr(q, Ae, ""))) {
            if (!((_ === "src" || _ === "xlink:href" || _ === "href") && b !== "script" && fl(q, "data:") === 0 && Me[b])) {
              if (!(ee && !bt(Fe, Jr(q, Ae, "")))) {
                if (q)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, Tt = function(b) {
    return b !== "annotation-xml" && Oo(b, Ue);
  }, nr = function(b) {
    Xe(ue.beforeSanitizeAttributes, b, null);
    const {
      attributes: _
    } = b;
    if (!_ || Ct(b))
      return;
    const q = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: C,
      forceKeepAttr: void 0
    };
    let ye = _.length;
    for (; ye--; ) {
      const Se = _[ye], {
        name: Pe,
        namespaceURI: we,
        value: Je
      } = Se, qe = ve(Pe);
      let tt = Pe === "value" ? Je : pl(Je);
      if (q.attrName = qe, q.attrValue = tt, q.keepAttr = !0, q.forceKeepAttr = void 0, Xe(ue.uponSanitizeAttribute, b, q), tt = q.attrValue, it && (qe === "id" || qe === "name") && (_t(Pe, b), tt = Ge + tt), oe && bt(/((--!?|])>)|<\/(style|title)/i, tt)) {
        _t(Pe, b);
        continue;
      }
      if (q.forceKeepAttr || (_t(Pe, b), !q.keepAttr))
        continue;
      if (!te && bt(/\/>/i, tt)) {
        _t(Pe, b);
        continue;
      }
      B && Pn([pe, Ne, Le], ($t) => {
        tt = Jr(tt, $t, " ");
      });
      const or = ve(b.nodeName);
      if (rr(or, qe, tt)) {
        if (H && typeof Y == "object" && typeof Y.getAttributeType == "function" && !we)
          switch (Y.getAttributeType(or, qe)) {
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
          we ? b.setAttributeNS(we, Pe, tt) : b.setAttribute(Pe, tt), Ct(b) ? at(b) : Ao(t.removed);
        } catch {
        }
      }
    }
    Xe(ue.afterSanitizeAttributes, b, null);
  }, ar = function h(b) {
    let _ = null;
    const q = tr(b);
    for (Xe(ue.beforeSanitizeShadowDOM, b, null); _ = q.nextNode(); )
      Xe(ue.uponSanitizeShadowNode, _, null), zt(_), nr(_), _.content instanceof u && h(_.content);
    Xe(ue.afterSanitizeShadowDOM, b, null);
  };
  return t.sanitize = function(h) {
    let b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ = null, q = null, ye = null, Se = null;
    if (Pt = !h, Pt && (h = "<!-->"), typeof h != "string" && !Zt(h))
      if (typeof h.toString == "function") {
        if (h = h.toString(), typeof h != "string")
          throw Qr("dirty is not a string, aborting");
      } else
        throw Qr("toString is not a function");
    if (!t.isSupported)
      return h;
    if (K || Nt(b), t.removed = [], typeof h == "string" && (U = !1), U) {
      if (h.nodeName) {
        const Je = ve(h.nodeName);
        if (!ie[Je] || p[Je])
          throw Qr("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (h instanceof S)
      _ = er("<!---->"), q = _.ownerDocument.importNode(h, !0), q.nodeType === Kr.element && q.nodeName === "BODY" || q.nodeName === "HTML" ? _ = q : _.appendChild(q);
    else {
      if (!Z && !B && !se && // eslint-disable-next-line unicorn/prefer-includes
      h.indexOf("<") === -1)
        return H && $e ? H.createHTML(h) : h;
      if (_ = er(h), !_)
        return Z ? null : $e ? x : "";
    }
    _ && he && at(_.firstChild);
    const Pe = tr(U ? h : _);
    for (; ye = Pe.nextNode(); )
      zt(ye), nr(ye), ye.content instanceof u && ar(ye.content);
    if (U)
      return h;
    if (Z) {
      if (le)
        for (Se = Ie.call(_.ownerDocument); _.firstChild; )
          Se.appendChild(_.firstChild);
      else
        Se = _;
      return (C.shadowroot || C.shadowrootmode) && (Se = Ve.call(o, Se, !0)), Se;
    }
    let we = se ? _.outerHTML : _.innerHTML;
    return se && ie["!doctype"] && _.ownerDocument && _.ownerDocument.doctype && _.ownerDocument.doctype.name && bt($i, _.ownerDocument.doctype.name) && (we = "<!DOCTYPE " + _.ownerDocument.doctype.name + `>
` + we), B && Pn([pe, Ne, Le], (Je) => {
      we = Jr(we, Je, " ");
    }), H && $e ? H.createHTML(we) : we;
  }, t.setConfig = function() {
    let h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Nt(h), K = !0;
  }, t.clearConfig = function() {
    et = null, K = !1;
  }, t.isValidAttribute = function(h, b, _) {
    et || Nt({});
    const q = ve(h), ye = ve(b);
    return rr(q, ye, _);
  }, t.addHook = function(h, b) {
    typeof b == "function" && Xr(ue[h], b);
  }, t.removeHook = function(h, b) {
    if (b !== void 0) {
      const _ = ul(ue[h], b);
      return _ === -1 ? void 0 : dl(ue[h], _, 1)[0];
    }
    return Ao(ue[h]);
  }, t.removeHooks = function(h) {
    ue[h] = [];
  }, t.removeAllHooks = function() {
    ue = Do();
  }, t;
}
Ui();
var Bi = { exports: {} }, ba, Fo;
function Al() {
  if (Fo) return ba;
  Fo = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ba = e, ba;
}
var va, Mo;
function Ol() {
  if (Mo) return va;
  Mo = 1;
  var e = Al();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, va = function() {
    function o(g, S, w, m, I, T) {
      if (T !== e) {
        var $ = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw $.name = "Invariant Violation", $;
      }
    }
    o.isRequired = o;
    function c() {
      return o;
    }
    var u = {
      array: o,
      bigint: o,
      bool: o,
      func: o,
      number: o,
      object: o,
      string: o,
      symbol: o,
      any: o,
      arrayOf: c,
      element: o,
      elementType: o,
      instanceOf: c,
      node: o,
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
Bi.exports = Ol()();
var Rl = Bi.exports;
const He = /* @__PURE__ */ Di(Rl);
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
        S && (u = c(u, o(S)));
      }
      return u;
    }
    function o(u) {
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
const Wi = ({ children: e, className: t = "container", ...r }) => /* @__PURE__ */ ut.jsx("div", { className: t, ...r, children: /* @__PURE__ */ ut.jsx("div", { className: "row", children: e }) });
Wi.propTypes = {
  children: hn.propTypes.children
};
({
  ...Wi.propTypes
});
hn.propTypes.children, He.oneOf(["0", "3", "4", "6", "8", "9", "12"]);
hn.propTypes.children;
function Hi({
  packageName: e = "",
  component: t = "",
  type: r = "",
  configuration: o = {}
}) {
  if (!e || !t) {
    console.error("trackReactComponent: Missing required arguments.");
    return;
  }
  window.uds = window.uds || {}, window.uds.package = window.uds.package || {}, window.uds.package[e] = {
    component: t,
    type: r,
    configuration: o
  };
}
function Ya(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Vi = { exports: {} }, en = {}, jo;
function Ll() {
  if (jo) return en;
  jo = 1;
  var e = dt, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, c = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(S, w, m) {
    var I, T = {}, $ = null, Y = null;
    m !== void 0 && ($ = "" + m), w.key !== void 0 && ($ = "" + w.key), w.ref !== void 0 && (Y = w.ref);
    for (I in w) o.call(w, I) && !u.hasOwnProperty(I) && (T[I] = w[I]);
    if (S && S.defaultProps) for (I in w = S.defaultProps, w) T[I] === void 0 && (T[I] = w[I]);
    return { $$typeof: t, type: S, key: $, ref: Y, props: T, _owner: c.current };
  }
  return en.Fragment = r, en.jsx = g, en.jsxs = g, en;
}
Vi.exports = Ll();
var W = Vi.exports, qi = { exports: {} }, wa, zo;
function Il() {
  if (zo) return wa;
  zo = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return wa = e, wa;
}
var Sa, $o;
function Pl() {
  if ($o) return Sa;
  $o = 1;
  var e = Il();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Sa = function() {
    function o(g, S, w, m, I, T) {
      if (T !== e) {
        var $ = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw $.name = "Invariant Violation", $;
      }
    }
    o.isRequired = o;
    function c() {
      return o;
    }
    var u = {
      array: o,
      bigint: o,
      bool: o,
      func: o,
      number: o,
      object: o,
      string: o,
      symbol: o,
      any: o,
      arrayOf: c,
      element: o,
      elementType: o,
      instanceOf: c,
      node: o,
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
qi.exports = Pl()();
var Dl = qi.exports;
const i = /* @__PURE__ */ Ya(Dl), Fl = () => {
  const [e, t] = sn(null), [r, o] = sn(!1), [c, u] = sn(null), [g, S] = sn("");
  return dn(() => {
    g && (() => {
      u(null), o(!0);
      try {
        fetch(g).then((w) => w.json()).then((w) => {
          t(w), o(!1);
        }).catch((w) => {
          u(w), o(!1);
        });
      } catch (w) {
        u(w);
      }
    })();
  }, [g]), [{ data: e, loading: r, error: c }, S];
}, Ml = (e) => (e || []).join(" "), {
  entries: Gi,
  setPrototypeOf: Uo,
  isFrozen: jl,
  getPrototypeOf: zl,
  getOwnPropertyDescriptor: $l
} = Object;
let {
  freeze: kt,
  seal: It,
  create: Yi
} = Object, {
  apply: Pa,
  construct: Da
} = typeof Reflect < "u" && Reflect;
kt || (kt = function(e) {
  return e;
});
It || (It = function(e) {
  return e;
});
Pa || (Pa = function(e, t, r) {
  return e.apply(t, r);
});
Da || (Da = function(e, t) {
  return new e(...t);
});
const Fn = xt(Array.prototype.forEach), Ul = xt(Array.prototype.lastIndexOf), Bo = xt(Array.prototype.pop), tn = xt(Array.prototype.push), Bl = xt(Array.prototype.splice), Vn = xt(String.prototype.toLowerCase), ka = xt(String.prototype.toString), Wo = xt(String.prototype.match), rn = xt(String.prototype.replace), Wl = xt(String.prototype.indexOf), Hl = xt(String.prototype.trim), qt = xt(Object.prototype.hasOwnProperty), vt = xt(RegExp.prototype.test), nn = Vl(TypeError);
function xt(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), c = 1; c < r; c++)
      o[c - 1] = arguments[c];
    return Pa(e, t, o);
  };
}
function Vl(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++)
      r[o] = arguments[o];
    return Da(e, r);
  };
}
function Re(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Vn;
  Uo && Uo(e, null);
  let o = t.length;
  for (; o--; ) {
    let c = t[o];
    if (typeof c == "string") {
      const u = r(c);
      u !== c && (jl(t) || (t[o] = u), c = u);
    }
    e[c] = !0;
  }
  return e;
}
function ql(e) {
  for (let t = 0; t < e.length; t++)
    qt(e, t) || (e[t] = null);
  return e;
}
function Er(e) {
  const t = Yi(null);
  for (const [r, o] of Gi(e))
    qt(e, r) && (Array.isArray(o) ? t[r] = ql(o) : o && typeof o == "object" && o.constructor === Object ? t[r] = Er(o) : t[r] = o);
  return t;
}
function an(e, t) {
  for (; e !== null; ) {
    const o = $l(e, t);
    if (o) {
      if (o.get)
        return xt(o.get);
      if (typeof o.value == "function")
        return xt(o.value);
    }
    e = zl(e);
  }
  function r() {
    return null;
  }
  return r;
}
const Ho = kt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), xa = kt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), _a = kt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Gl = kt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Ca = kt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Yl = kt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Vo = kt(["#text"]), qo = kt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), Ta = kt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Go = kt(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Mn = kt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Xl = It(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Jl = It(/<%[\w\W]*|[\w\W]*%>/gm), Ql = It(/\$\{[\w\W]*/gm), Zl = It(/^data-[\-\w.\u00B7-\uFFFF]+$/), Kl = It(/^aria-[\-\w]+$/), Xi = It(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), ec = It(/^(?:\w+script|data):/i), tc = It(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Ji = It(/^html$/i), rc = It(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Yo = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: Kl,
  ATTR_WHITESPACE: tc,
  CUSTOM_ELEMENT: rc,
  DATA_ATTR: Zl,
  DOCTYPE_NAME: Ji,
  ERB_EXPR: Jl,
  IS_ALLOWED_URI: Xi,
  IS_SCRIPT_OR_DATA: ec,
  MUSTACHE_EXPR: Xl,
  TMPLIT_EXPR: Ql
});
const on = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, nc = function() {
  return typeof window > "u" ? null : window;
}, ac = function(e, t) {
  if (typeof e != "object" || typeof e.createPolicy != "function")
    return null;
  let r = null;
  const o = "data-tt-policy-suffix";
  t && t.hasAttribute(o) && (r = t.getAttribute(o));
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
}, Xo = function() {
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
function Qi() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : nc();
  const t = (h) => Qi(h);
  if (t.version = "3.2.5", t.removed = [], !e || !e.document || e.document.nodeType !== on.document || !e.Element)
    return t.isSupported = !1, t;
  let {
    document: r
  } = e;
  const o = r, c = o.currentScript, {
    DocumentFragment: u,
    HTMLTemplateElement: g,
    Node: S,
    Element: w,
    NodeFilter: m,
    NamedNodeMap: I = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: T,
    DOMParser: $,
    trustedTypes: Y
  } = e, A = w.prototype, k = an(A, "cloneNode"), D = an(A, "remove"), V = an(A, "nextSibling"), G = an(A, "childNodes"), J = an(A, "parentNode");
  if (typeof g == "function") {
    const h = r.createElement("template");
    h.content && h.content.ownerDocument && (r = h.content.ownerDocument);
  }
  let H, x = "";
  const {
    implementation: ce,
    createNodeIterator: _e,
    createDocumentFragment: Ie,
    getElementsByTagName: De
  } = r, {
    importNode: Ve
  } = o;
  let ue = Xo();
  t.isSupported = typeof Gi == "function" && typeof J == "function" && ce && ce.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: pe,
    ERB_EXPR: Ne,
    TMPLIT_EXPR: Le,
    DATA_ATTR: Ee,
    ARIA_ATTR: st,
    IS_SCRIPT_OR_DATA: Fe,
    ATTR_WHITESPACE: Ae,
    CUSTOM_ELEMENT: Ue
  } = Yo;
  let {
    IS_ALLOWED_URI: Ke
  } = Yo, ie = null;
  const M = Re({}, [...Ho, ...xa, ..._a, ...Ca, ...Vo]);
  let C = null;
  const F = Re({}, [...qo, ...Ta, ...Go, ...Mn]);
  let P = Object.seal(Yi(null, {
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
  })), p = null, re = null, E = !0, ne = !0, ee = !1, te = !0, B = !1, oe = !0, se = !1, K = !1, he = !1, Z = !1, le = !1, $e = !1, me = !0, it = !1;
  const Ge = "user-content-";
  let ge = !0, U = !1, ae = {}, Ye = null;
  const lt = Re({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let Me = null;
  const Yt = Re({}, ["audio", "video", "img", "source", "image", "track"]);
  let Rt = null;
  const Kt = Re({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), mt = "http://www.w3.org/1998/Math/MathML", ft = "http://www.w3.org/2000/svg", nt = "http://www.w3.org/1999/xhtml";
  let ct = nt, Pt = !1, Dt = null;
  const vr = Re({}, [mt, ft, nt], ka);
  let ot = Re({}, ["mi", "mo", "mn", "ms", "mtext"]), gt = Re({}, ["annotation-xml"]);
  const Xt = Re({}, ["title", "style", "font", "a", "script"]);
  let Ce = null;
  const Ft = ["application/xhtml+xml", "text/html"], Jt = "text/html";
  let ve = null, et = null;
  const Qt = r.createElement("form"), yt = function(h) {
    return h instanceof RegExp || h instanceof Function;
  }, Nt = function() {
    let h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(et && et === h)) {
      if ((!h || typeof h != "object") && (h = {}), h = Er(h), Ce = // eslint-disable-next-line unicorn/prefer-includes
      Ft.indexOf(h.PARSER_MEDIA_TYPE) === -1 ? Jt : h.PARSER_MEDIA_TYPE, ve = Ce === "application/xhtml+xml" ? ka : Vn, ie = qt(h, "ALLOWED_TAGS") ? Re({}, h.ALLOWED_TAGS, ve) : M, C = qt(h, "ALLOWED_ATTR") ? Re({}, h.ALLOWED_ATTR, ve) : F, Dt = qt(h, "ALLOWED_NAMESPACES") ? Re({}, h.ALLOWED_NAMESPACES, ka) : vr, Rt = qt(h, "ADD_URI_SAFE_ATTR") ? Re(Er(Kt), h.ADD_URI_SAFE_ATTR, ve) : Kt, Me = qt(h, "ADD_DATA_URI_TAGS") ? Re(Er(Yt), h.ADD_DATA_URI_TAGS, ve) : Yt, Ye = qt(h, "FORBID_CONTENTS") ? Re({}, h.FORBID_CONTENTS, ve) : lt, p = qt(h, "FORBID_TAGS") ? Re({}, h.FORBID_TAGS, ve) : {}, re = qt(h, "FORBID_ATTR") ? Re({}, h.FORBID_ATTR, ve) : {}, ae = qt(h, "USE_PROFILES") ? h.USE_PROFILES : !1, E = h.ALLOW_ARIA_ATTR !== !1, ne = h.ALLOW_DATA_ATTR !== !1, ee = h.ALLOW_UNKNOWN_PROTOCOLS || !1, te = h.ALLOW_SELF_CLOSE_IN_ATTR !== !1, B = h.SAFE_FOR_TEMPLATES || !1, oe = h.SAFE_FOR_XML !== !1, se = h.WHOLE_DOCUMENT || !1, Z = h.RETURN_DOM || !1, le = h.RETURN_DOM_FRAGMENT || !1, $e = h.RETURN_TRUSTED_TYPE || !1, he = h.FORCE_BODY || !1, me = h.SANITIZE_DOM !== !1, it = h.SANITIZE_NAMED_PROPS || !1, ge = h.KEEP_CONTENT !== !1, U = h.IN_PLACE || !1, Ke = h.ALLOWED_URI_REGEXP || Xi, ct = h.NAMESPACE || nt, ot = h.MATHML_TEXT_INTEGRATION_POINTS || ot, gt = h.HTML_INTEGRATION_POINTS || gt, P = h.CUSTOM_ELEMENT_HANDLING || {}, h.CUSTOM_ELEMENT_HANDLING && yt(h.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (P.tagNameCheck = h.CUSTOM_ELEMENT_HANDLING.tagNameCheck), h.CUSTOM_ELEMENT_HANDLING && yt(h.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (P.attributeNameCheck = h.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), h.CUSTOM_ELEMENT_HANDLING && typeof h.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (P.allowCustomizedBuiltInElements = h.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), B && (ne = !1), le && (Z = !0), ae && (ie = Re({}, Vo), C = [], ae.html === !0 && (Re(ie, Ho), Re(C, qo)), ae.svg === !0 && (Re(ie, xa), Re(C, Ta), Re(C, Mn)), ae.svgFilters === !0 && (Re(ie, _a), Re(C, Ta), Re(C, Mn)), ae.mathMl === !0 && (Re(ie, Ca), Re(C, Go), Re(C, Mn))), h.ADD_TAGS && (ie === M && (ie = Er(ie)), Re(ie, h.ADD_TAGS, ve)), h.ADD_ATTR && (C === F && (C = Er(C)), Re(C, h.ADD_ATTR, ve)), h.ADD_URI_SAFE_ATTR && Re(Rt, h.ADD_URI_SAFE_ATTR, ve), h.FORBID_CONTENTS && (Ye === lt && (Ye = Er(Ye)), Re(Ye, h.FORBID_CONTENTS, ve)), ge && (ie["#text"] = !0), se && Re(ie, ["html", "head", "body"]), ie.table && (Re(ie, ["tbody"]), delete p.tbody), h.TRUSTED_TYPES_POLICY) {
        if (typeof h.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw nn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof h.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw nn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        H = h.TRUSTED_TYPES_POLICY, x = H.createHTML("");
      } else
        H === void 0 && (H = ac(Y, c)), H !== null && typeof x == "string" && (x = H.createHTML(""));
      kt && kt(h), et = h;
    }
  }, Mt = Re({}, [...xa, ..._a, ...Gl]), jt = Re({}, [...Ca, ...Yl]), dr = function(h) {
    let b = J(h);
    (!b || !b.tagName) && (b = {
      namespaceURI: ct,
      tagName: "template"
    });
    const _ = Vn(h.tagName), q = Vn(b.tagName);
    return Dt[h.namespaceURI] ? h.namespaceURI === ft ? b.namespaceURI === nt ? _ === "svg" : b.namespaceURI === mt ? _ === "svg" && (q === "annotation-xml" || ot[q]) : !!Mt[_] : h.namespaceURI === mt ? b.namespaceURI === nt ? _ === "math" : b.namespaceURI === ft ? _ === "math" && gt[q] : !!jt[_] : h.namespaceURI === nt ? b.namespaceURI === ft && !gt[q] || b.namespaceURI === mt && !ot[q] ? !1 : !jt[_] && (Xt[_] || !Mt[_]) : !!(Ce === "application/xhtml+xml" && Dt[h.namespaceURI]) : !1;
  }, at = function(h) {
    tn(t.removed, {
      element: h
    });
    try {
      J(h).removeChild(h);
    } catch {
      D(h);
    }
  }, _t = function(h, b) {
    try {
      tn(t.removed, {
        attribute: b.getAttributeNode(h),
        from: b
      });
    } catch {
      tn(t.removed, {
        attribute: null,
        from: b
      });
    }
    if (b.removeAttribute(h), h === "is")
      if (Z || le)
        try {
          at(b);
        } catch {
        }
      else
        try {
          b.setAttribute(h, "");
        } catch {
        }
  }, er = function(h) {
    let b = null, _ = null;
    if (he)
      h = "<remove></remove>" + h;
    else {
      const Se = Wo(h, /^[\r\n\t ]+/);
      _ = Se && Se[0];
    }
    Ce === "application/xhtml+xml" && ct === nt && (h = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + h + "</body></html>");
    const q = H ? H.createHTML(h) : h;
    if (ct === nt)
      try {
        b = new $().parseFromString(q, Ce);
      } catch {
      }
    if (!b || !b.documentElement) {
      b = ce.createDocument(ct, "template", null);
      try {
        b.documentElement.innerHTML = Pt ? x : q;
      } catch {
      }
    }
    const ye = b.body || b.documentElement;
    return h && _ && ye.insertBefore(r.createTextNode(_), ye.childNodes[0] || null), ct === nt ? De.call(b, se ? "html" : "body")[0] : se ? b.documentElement : ye;
  }, tr = function(h) {
    return _e.call(
      h.ownerDocument || h,
      h,
      // eslint-disable-next-line no-bitwise
      m.SHOW_ELEMENT | m.SHOW_COMMENT | m.SHOW_TEXT | m.SHOW_PROCESSING_INSTRUCTION | m.SHOW_CDATA_SECTION,
      null
    );
  }, Ct = function(h) {
    return h instanceof T && (typeof h.nodeName != "string" || typeof h.textContent != "string" || typeof h.removeChild != "function" || !(h.attributes instanceof I) || typeof h.removeAttribute != "function" || typeof h.setAttribute != "function" || typeof h.namespaceURI != "string" || typeof h.insertBefore != "function" || typeof h.hasChildNodes != "function");
  }, Zt = function(h) {
    return typeof S == "function" && h instanceof S;
  };
  function Xe(h, b, _) {
    Fn(h, (q) => {
      q.call(t, b, _, et);
    });
  }
  const zt = function(h) {
    let b = null;
    if (Xe(ue.beforeSanitizeElements, h, null), Ct(h))
      return at(h), !0;
    const _ = ve(h.nodeName);
    if (Xe(ue.uponSanitizeElement, h, {
      tagName: _,
      allowedTags: ie
    }), h.hasChildNodes() && !Zt(h.firstElementChild) && vt(/<[/\w!]/g, h.innerHTML) && vt(/<[/\w!]/g, h.textContent) || h.nodeType === on.progressingInstruction || oe && h.nodeType === on.comment && vt(/<[/\w]/g, h.data))
      return at(h), !0;
    if (!ie[_] || p[_]) {
      if (!p[_] && Tt(_) && (P.tagNameCheck instanceof RegExp && vt(P.tagNameCheck, _) || P.tagNameCheck instanceof Function && P.tagNameCheck(_)))
        return !1;
      if (ge && !Ye[_]) {
        const q = J(h) || h.parentNode, ye = G(h) || h.childNodes;
        if (ye && q) {
          const Se = ye.length;
          for (let Pe = Se - 1; Pe >= 0; --Pe) {
            const we = k(ye[Pe], !0);
            we.__removalCount = (h.__removalCount || 0) + 1, q.insertBefore(we, V(h));
          }
        }
      }
      return at(h), !0;
    }
    return h instanceof w && !dr(h) || (_ === "noscript" || _ === "noembed" || _ === "noframes") && vt(/<\/no(script|embed|frames)/i, h.innerHTML) ? (at(h), !0) : (B && h.nodeType === on.text && (b = h.textContent, Fn([pe, Ne, Le], (q) => {
      b = rn(b, q, " ");
    }), h.textContent !== b && (tn(t.removed, {
      element: h.cloneNode()
    }), h.textContent = b)), Xe(ue.afterSanitizeElements, h, null), !1);
  }, rr = function(h, b, _) {
    if (me && (b === "id" || b === "name") && (_ in r || _ in Qt))
      return !1;
    if (!(ne && !re[b] && vt(Ee, b)) && !(E && vt(st, b))) {
      if (!C[b] || re[b]) {
        if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(Tt(h) && (P.tagNameCheck instanceof RegExp && vt(P.tagNameCheck, h) || P.tagNameCheck instanceof Function && P.tagNameCheck(h)) && (P.attributeNameCheck instanceof RegExp && vt(P.attributeNameCheck, b) || P.attributeNameCheck instanceof Function && P.attributeNameCheck(b)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          b === "is" && P.allowCustomizedBuiltInElements && (P.tagNameCheck instanceof RegExp && vt(P.tagNameCheck, _) || P.tagNameCheck instanceof Function && P.tagNameCheck(_)))
        ) return !1;
      } else if (!Rt[b] && !vt(Ke, rn(_, Ae, "")) && !((b === "src" || b === "xlink:href" || b === "href") && h !== "script" && Wl(_, "data:") === 0 && Me[h]) && !(ee && !vt(Fe, rn(_, Ae, ""))) && _)
        return !1;
    }
    return !0;
  }, Tt = function(h) {
    return h !== "annotation-xml" && Wo(h, Ue);
  }, nr = function(h) {
    Xe(ue.beforeSanitizeAttributes, h, null);
    const {
      attributes: b
    } = h;
    if (!b || Ct(h))
      return;
    const _ = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: C,
      forceKeepAttr: void 0
    };
    let q = b.length;
    for (; q--; ) {
      const ye = b[q], {
        name: Se,
        namespaceURI: Pe,
        value: we
      } = ye, Je = ve(Se);
      let qe = Se === "value" ? we : Hl(we);
      if (_.attrName = Je, _.attrValue = qe, _.keepAttr = !0, _.forceKeepAttr = void 0, Xe(ue.uponSanitizeAttribute, h, _), qe = _.attrValue, it && (Je === "id" || Je === "name") && (_t(Se, h), qe = Ge + qe), oe && vt(/((--!?|])>)|<\/(style|title)/i, qe)) {
        _t(Se, h);
        continue;
      }
      if (_.forceKeepAttr || (_t(Se, h), !_.keepAttr))
        continue;
      if (!te && vt(/\/>/i, qe)) {
        _t(Se, h);
        continue;
      }
      B && Fn([pe, Ne, Le], (or) => {
        qe = rn(qe, or, " ");
      });
      const tt = ve(h.nodeName);
      if (rr(tt, Je, qe)) {
        if (H && typeof Y == "object" && typeof Y.getAttributeType == "function" && !Pe)
          switch (Y.getAttributeType(tt, Je)) {
            case "TrustedHTML": {
              qe = H.createHTML(qe);
              break;
            }
            case "TrustedScriptURL": {
              qe = H.createScriptURL(qe);
              break;
            }
          }
        try {
          Pe ? h.setAttributeNS(Pe, Se, qe) : h.setAttribute(Se, qe), Ct(h) ? at(h) : Bo(t.removed);
        } catch {
        }
      }
    }
    Xe(ue.afterSanitizeAttributes, h, null);
  }, ar = function h(b) {
    let _ = null;
    const q = tr(b);
    for (Xe(ue.beforeSanitizeShadowDOM, b, null); _ = q.nextNode(); )
      Xe(ue.uponSanitizeShadowNode, _, null), zt(_), nr(_), _.content instanceof u && h(_.content);
    Xe(ue.afterSanitizeShadowDOM, b, null);
  };
  return t.sanitize = function(h) {
    let b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ = null, q = null, ye = null, Se = null;
    if (Pt = !h, Pt && (h = "<!-->"), typeof h != "string" && !Zt(h))
      if (typeof h.toString == "function") {
        if (h = h.toString(), typeof h != "string")
          throw nn("dirty is not a string, aborting");
      } else
        throw nn("toString is not a function");
    if (!t.isSupported)
      return h;
    if (K || Nt(b), t.removed = [], typeof h == "string" && (U = !1), U) {
      if (h.nodeName) {
        const Je = ve(h.nodeName);
        if (!ie[Je] || p[Je])
          throw nn("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (h instanceof S)
      _ = er("<!---->"), q = _.ownerDocument.importNode(h, !0), q.nodeType === on.element && q.nodeName === "BODY" || q.nodeName === "HTML" ? _ = q : _.appendChild(q);
    else {
      if (!Z && !B && !se && // eslint-disable-next-line unicorn/prefer-includes
      h.indexOf("<") === -1)
        return H && $e ? H.createHTML(h) : h;
      if (_ = er(h), !_)
        return Z ? null : $e ? x : "";
    }
    _ && he && at(_.firstChild);
    const Pe = tr(U ? h : _);
    for (; ye = Pe.nextNode(); )
      zt(ye), nr(ye), ye.content instanceof u && ar(ye.content);
    if (U)
      return h;
    if (Z) {
      if (le)
        for (Se = Ie.call(_.ownerDocument); _.firstChild; )
          Se.appendChild(_.firstChild);
      else
        Se = _;
      return (C.shadowroot || C.shadowrootmode) && (Se = Ve.call(o, Se, !0)), Se;
    }
    let we = se ? _.outerHTML : _.innerHTML;
    return se && ie["!doctype"] && _.ownerDocument && _.ownerDocument.doctype && _.ownerDocument.doctype.name && vt(Ji, _.ownerDocument.doctype.name) && (we = "<!DOCTYPE " + _.ownerDocument.doctype.name + `>
` + we), B && Fn([pe, Ne, Le], (Je) => {
      we = rn(we, Je, " ");
    }), H && $e ? H.createHTML(we) : we;
  }, t.setConfig = function() {
    let h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Nt(h), K = !0;
  }, t.clearConfig = function() {
    et = null, K = !1;
  }, t.isValidAttribute = function(h, b, _) {
    et || Nt({});
    const q = ve(h), ye = ve(b);
    return rr(q, ye, _);
  }, t.addHook = function(h, b) {
    typeof b == "function" && tn(ue[h], b);
  }, t.removeHook = function(h, b) {
    if (b !== void 0) {
      const _ = Ul(ue[h], b);
      return _ === -1 ? void 0 : Bl(ue[h], _, 1)[0];
    }
    return Bo(ue[h]);
  }, t.removeHooks = function(h) {
    ue[h] = [];
  }, t.removeAllHooks = function() {
    ue = Xo();
  }, t;
}
var Jo = Qi();
let jn = null;
function oc() {
  return jn || (typeof window < "u" ? jn = Jo(window) : jn = Jo), jn;
}
const Ar = (e) => ({ __html: oc().sanitize(e) });
i.shape({
  event: i.string,
  action: i.string,
  name: i.string,
  region: i.string,
  section: i.string,
  component: i.string,
  type: i.string,
  text: i.string
});
const ic = ({
  event: e = "",
  action: t = "",
  name: r = "",
  type: o = "",
  section: c = "",
  text: u = "",
  region: g = "",
  component: S = ""
}) => {
  const { dataLayer: w } = window, m = {
    event: e.toLowerCase(),
    action: t.toLowerCase(),
    name: r.toLowerCase(),
    type: o.toLowerCase(),
    region: g.toLowerCase(),
    section: c.toLowerCase(),
    text: u.toLowerCase(),
    component: S.toLowerCase()
  };
  w && w.push(m);
}, mn = ({ children: e }) => /* @__PURE__ */ W.jsx(W.Fragment, { children: e });
mn.propTypes = {
  children: i.oneOfType([
    i.arrayOf(i.node),
    i.node,
    i.string
  ])
};
var Zi = { exports: {} };
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var u = "", g = 0; g < arguments.length; g++) {
        var S = arguments[g];
        S && (u = c(u, o(S)));
      }
      return u;
    }
    function o(u) {
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
})(Zi);
var sc = Zi.exports;
const ur = /* @__PURE__ */ Ya(sc);
({
  ...mn.propTypes
});
const Ki = ({ children: e, className: t = "container", ...r }) => /* @__PURE__ */ W.jsx("div", { className: t, ...r, children: /* @__PURE__ */ W.jsx("div", { className: "row", children: e }) });
Ki.propTypes = {
  children: mn.propTypes.children
};
({
  ...Ki.propTypes
});
mn.propTypes.children, i.oneOf(["0", "3", "4", "6", "8", "9", "12"]);
mn.propTypes.children;
const lc = i.shape({
  url: i.string,
  altText: i.string,
  cssClass: i.arrayOf(i.string),
  size: i.oneOf(["small", "medium", "large"])
}), Ea = i.shape({
  text: i.string,
  maxWidth: i.string,
  cssClass: i.arrayOf(i.string),
  highlightColor: i.oneOf(["gold", "black"])
}), es = i.shape({
  color: i.oneOf(["gold", "maroon", "gray", "dark"]),
  content: i.shape({
    icon: i.arrayOf(i.string),
    header: i.string,
    body: i.string
  })
}), Xa = i.shape({
  text: i.string,
  name: i.string,
  event: i.string,
  action: i.string,
  type: i.string,
  region: i.string,
  section: i.string,
  component: i.string
});
var Cr = {}, Qo;
function cc() {
  if (Qo) return Cr;
  Qo = 1;
  var e = dt;
  function t(n) {
    for (var l = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, f = 1; f < arguments.length; f++) l += "&args[]=" + encodeURIComponent(arguments[f]);
    return "Minified React error #" + n + "; visit " + l + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var r = Object.prototype.hasOwnProperty, o = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, c = {}, u = {};
  function g(n) {
    return r.call(u, n) ? !0 : r.call(c, n) ? !1 : o.test(n) ? u[n] = !0 : (c[n] = !0, !1);
  }
  function S(n, l, f, v, L, O, j) {
    this.acceptsBooleans = l === 2 || l === 3 || l === 4, this.attributeName = v, this.attributeNamespace = L, this.mustUseProperty = f, this.propertyName = n, this.type = l, this.sanitizeURL = O, this.removeEmptyString = j;
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
  var m = /[\-:]([a-z])/g;
  function I(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var l = n.replace(
      m,
      I
    );
    w[l] = new S(l, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var l = n.replace(m, I);
    w[l] = new S(l, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var l = n.replace(m, I);
    w[l] = new S(l, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    w[n] = new S(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), w.xlinkHref = new S("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    w[n] = new S(n, 1, !1, n.toLowerCase(), null, !0, !0);
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
      var f = "", v, L = 0;
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
        L !== v && (f += n.substring(L, v)), L = v + 1, f += l;
      }
      n = L !== v ? f + n.substring(L, v) : f;
    }
    return n;
  }
  var k = /([A-Z])/g, D = /^ms-/, V = Array.isArray;
  function G(n, l) {
    return { insertionMode: n, selectedValue: l };
  }
  function J(n, l, f) {
    switch (l) {
      case "select":
        return G(1, f.value != null ? f.value : f.defaultValue);
      case "svg":
        return G(2, null);
      case "math":
        return G(3, null);
      case "foreignObject":
        return G(1, null);
      case "table":
        return G(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return G(5, null);
      case "colgroup":
        return G(7, null);
      case "tr":
        return G(6, null);
    }
    return 4 <= n.insertionMode || n.insertionMode === 0 ? G(1, null) : n;
  }
  var H = /* @__PURE__ */ new Map();
  function x(n, l, f) {
    if (typeof f != "object") throw Error(t(62));
    l = !0;
    for (var v in f) if (r.call(f, v)) {
      var L = f[v];
      if (L != null && typeof L != "boolean" && L !== "") {
        if (v.indexOf("--") === 0) {
          var O = A(v);
          L = A(("" + L).trim());
        } else {
          O = v;
          var j = H.get(O);
          j !== void 0 || (j = A(O.replace(k, "-$1").toLowerCase().replace(D, "-ms-")), H.set(O, j)), O = j, L = typeof L == "number" ? L === 0 || r.call(T, v) ? "" + L : L + "px" : A(("" + L).trim());
        }
        l ? (l = !1, n.push(' style="', O, ":", L)) : n.push(";", O, ":", L);
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
  function De(n, l, f, v) {
    n.push(pe(f));
    var L = f = null, O;
    for (O in l) if (r.call(l, O)) {
      var j = l[O];
      if (j != null) switch (O) {
        case "children":
          f = j;
          break;
        case "dangerouslySetInnerHTML":
          L = j;
          break;
        default:
          ce(n, v, O, j);
      }
    }
    return n.push(">"), _e(n, L, f), typeof f == "string" ? (n.push(A(f)), null) : f;
  }
  var Ve = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, ue = /* @__PURE__ */ new Map();
  function pe(n) {
    var l = ue.get(n);
    if (l === void 0) {
      if (!Ve.test(n)) throw Error(t(65, n));
      l = "<" + n, ue.set(n, l);
    }
    return l;
  }
  function Ne(n, l, f, v, L) {
    switch (l) {
      case "select":
        n.push(pe("select"));
        var O = null, j = null;
        for (ke in f) if (r.call(f, ke)) {
          var Q = f[ke];
          if (Q != null) switch (ke) {
            case "children":
              O = Q;
              break;
            case "dangerouslySetInnerHTML":
              j = Q;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              ce(n, v, ke, Q);
          }
        }
        return n.push(">"), _e(n, j, O), O;
      case "option":
        j = L.selectedValue, n.push(pe("option"));
        var de = Q = null, be = null, ke = null;
        for (O in f) if (r.call(f, O)) {
          var rt = f[O];
          if (rt != null) switch (O) {
            case "children":
              Q = rt;
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
        if (j != null) if (f = de !== null ? "" + de : Ie(Q), V(j)) {
          for (v = 0; v < j.length; v++)
            if ("" + j[v] === f) {
              n.push(' selected=""');
              break;
            }
        } else "" + j === f && n.push(' selected=""');
        else be && n.push(' selected=""');
        return n.push(">"), _e(n, ke, Q), Q;
      case "textarea":
        n.push(pe("textarea")), ke = j = O = null;
        for (Q in f) if (r.call(f, Q) && (de = f[Q], de != null)) switch (Q) {
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
              Q,
              de
            );
        }
        if (O === null && j !== null && (O = j), n.push(">"), ke != null) {
          if (O != null) throw Error(t(92));
          if (V(ke) && 1 < ke.length) throw Error(t(93));
          O = "" + ke;
        }
        return typeof O == "string" && O[0] === `
` && n.push(`
`), O !== null && n.push(A("" + O)), null;
      case "input":
        n.push(pe("input")), de = ke = Q = O = null;
        for (j in f) if (r.call(f, j) && (be = f[j], be != null)) switch (j) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, "input"));
          case "defaultChecked":
            de = be;
            break;
          case "defaultValue":
            Q = be;
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
        return ke !== null ? ce(n, v, "checked", ke) : de !== null && ce(n, v, "checked", de), O !== null ? ce(n, v, "value", O) : Q !== null && ce(n, v, "value", Q), n.push("/>"), null;
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
        for (de in f) if (r.call(f, de) && (Q = f[de], Q != null)) switch (de) {
          case "children":
            O = Q;
            break;
          case "dangerouslySetInnerHTML":
            j = Q;
            break;
          default:
            ce(n, v, de, Q);
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
        return De(
          n,
          f,
          l,
          v
        );
      case "html":
        return L.insertionMode === 0 && n.push("<!DOCTYPE html>"), De(n, f, l, v);
      default:
        if (l.indexOf("-") === -1 && typeof f.is != "string") return De(n, f, l, v);
        n.push(pe(l)), j = O = null;
        for (be in f) if (r.call(f, be) && (Q = f[be], Q != null)) switch (be) {
          case "children":
            O = Q;
            break;
          case "dangerouslySetInnerHTML":
            j = Q;
            break;
          case "style":
            x(n, v, Q);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            g(be) && typeof Q != "function" && typeof Q != "symbol" && n.push(" ", be, '="', A(Q), '"');
        }
        return n.push(">"), _e(n, j, O), O;
    }
  }
  function Le(n, l, f) {
    if (n.push('<!--$?--><template id="'), f === null) throw Error(t(395));
    return n.push(f), n.push('"></template>');
  }
  function Ee(n, l, f, v) {
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
  var Fe = /[<\u2028\u2029]/g;
  function Ae(n) {
    return JSON.stringify(n).replace(Fe, function(l) {
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
  var ie = Object.assign, M = Symbol.for("react.element"), C = Symbol.for("react.portal"), F = Symbol.for("react.fragment"), P = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), re = Symbol.for("react.provider"), E = Symbol.for("react.context"), ne = Symbol.for("react.forward_ref"), ee = Symbol.for("react.suspense"), te = Symbol.for("react.suspense_list"), B = Symbol.for("react.memo"), oe = Symbol.for("react.lazy"), se = Symbol.for("react.scope"), K = Symbol.for("react.debug_trace_mode"), he = Symbol.for("react.legacy_hidden"), Z = Symbol.for("react.default_value"), le = Symbol.iterator;
  function $e(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case F:
        return "Fragment";
      case C:
        return "Portal";
      case p:
        return "Profiler";
      case P:
        return "StrictMode";
      case ee:
        return "Suspense";
      case te:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case E:
        return (n.displayName || "Context") + ".Consumer";
      case re:
        return (n._context.displayName || "Context") + ".Provider";
      case ne:
        var l = n.render;
        return n = n.displayName, n || (n = l.displayName || l.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case B:
        return l = n.displayName || null, l !== null ? l : $e(n.type) || "Memo";
      case oe:
        l = n._payload, n = n._init;
        try {
          return $e(n(l));
        } catch {
        }
    }
    return null;
  }
  var me = {};
  function it(n, l) {
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
  var Yt = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(n, l) {
    n = n._reactInternals, n.queue !== null && n.queue.push(l);
  }, enqueueReplaceState: function(n, l) {
    n = n._reactInternals, n.replace = !0, n.queue = [l];
  }, enqueueForceUpdate: function() {
  } };
  function Rt(n, l, f, v) {
    var L = n.state !== void 0 ? n.state : null;
    n.updater = Yt, n.props = f, n.state = L;
    var O = { queue: [], replace: !1 };
    n._reactInternals = O;
    var j = l.contextType;
    if (n.context = typeof j == "object" && j !== null ? j._currentValue2 : v, j = l.getDerivedStateFromProps, typeof j == "function" && (j = j(f, L), L = j == null ? L : ie({}, L, j), n.state = L), typeof l.getDerivedStateFromProps != "function" && typeof n.getSnapshotBeforeUpdate != "function" && (typeof n.UNSAFE_componentWillMount == "function" || typeof n.componentWillMount == "function")) if (l = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), l !== n.state && Yt.enqueueReplaceState(n, n.state, null), O.queue !== null && 0 < O.queue.length) if (l = O.queue, j = O.replace, O.queue = null, O.replace = !1, j && l.length === 1) n.state = l[0];
    else {
      for (O = j ? l[0] : n.state, L = !0, j = j ? 1 : 0; j < l.length; j++) {
        var Q = l[j];
        Q = typeof Q == "function" ? Q.call(n, O, f, v) : Q, Q != null && (L ? (L = !1, O = ie({}, O, Q)) : ie(O, Q));
      }
      n.state = O;
    }
    else O.queue = null;
  }
  var Kt = { id: 1, overflow: "" };
  function mt(n, l, f) {
    var v = n.id;
    n = n.overflow;
    var L = 32 - ft(v) - 1;
    v &= ~(1 << L), f += 1;
    var O = 32 - ft(l) + L;
    if (30 < O) {
      var j = L - L % 5;
      return O = (v & (1 << j) - 1).toString(32), v >>= j, L -= j, { id: 1 << 32 - ft(l) + L | f << L | v, overflow: O + n };
    }
    return { id: 1 << O | f << L | v, overflow: n };
  }
  var ft = Math.clz32 ? Math.clz32 : Pt, nt = Math.log, ct = Math.LN2;
  function Pt(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (nt(n) / ct | 0) | 0;
  }
  function Dt(n, l) {
    return n === l && (n !== 0 || 1 / n === 1 / l) || n !== n && l !== l;
  }
  var vr = typeof Object.is == "function" ? Object.is : Dt, ot = null, gt = null, Xt = null, Ce = null, Ft = !1, Jt = !1, ve = 0, et = null, Qt = 0;
  function yt() {
    if (ot === null) throw Error(t(321));
    return ot;
  }
  function Nt() {
    if (0 < Qt) throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Mt() {
    return Ce === null ? Xt === null ? (Ft = !1, Xt = Ce = Nt()) : (Ft = !0, Ce = Xt) : Ce.next === null ? (Ft = !1, Ce = Ce.next = Nt()) : (Ft = !0, Ce = Ce.next), Ce;
  }
  function jt() {
    gt = ot = null, Jt = !1, Xt = null, Qt = 0, Ce = et = null;
  }
  function dr(n, l) {
    return typeof l == "function" ? l(n) : l;
  }
  function at(n, l, f) {
    if (ot = yt(), Ce = Mt(), Ft) {
      var v = Ce.queue;
      if (l = v.dispatch, et !== null && (f = et.get(v), f !== void 0)) {
        et.delete(v), v = Ce.memoizedState;
        do
          v = n(v, f.action), f = f.next;
        while (f !== null);
        return Ce.memoizedState = v, [v, l];
      }
      return [Ce.memoizedState, l];
    }
    return n = n === dr ? typeof l == "function" ? l() : l : f !== void 0 ? f(l) : l, Ce.memoizedState = n, n = Ce.queue = { last: null, dispatch: null }, n = n.dispatch = er.bind(null, ot, n), [Ce.memoizedState, n];
  }
  function _t(n, l) {
    if (ot = yt(), Ce = Mt(), l = l === void 0 ? null : l, Ce !== null) {
      var f = Ce.memoizedState;
      if (f !== null && l !== null) {
        var v = f[1];
        e: if (v === null) v = !1;
        else {
          for (var L = 0; L < v.length && L < l.length; L++) if (!vr(l[L], v[L])) {
            v = !1;
            break e;
          }
          v = !0;
        }
        if (v) return f[0];
      }
    }
    return n = n(), Ce.memoizedState = [n, l], n;
  }
  function er(n, l, f) {
    if (25 <= Qt) throw Error(t(301));
    if (n === ot) if (Jt = !0, n = { action: f, next: null }, et === null && (et = /* @__PURE__ */ new Map()), f = et.get(l), f === void 0) et.set(l, n);
    else {
      for (l = f; l.next !== null; ) l = l.next;
      l.next = n;
    }
  }
  function tr() {
    throw Error(t(394));
  }
  function Ct() {
  }
  var Zt = { readContext: function(n) {
    return n._currentValue2;
  }, useContext: function(n) {
    return yt(), n._currentValue2;
  }, useMemo: _t, useReducer: at, useRef: function(n) {
    ot = yt(), Ce = Mt();
    var l = Ce.memoizedState;
    return l === null ? (n = { current: n }, Ce.memoizedState = n) : l;
  }, useState: function(n) {
    return at(dr, n);
  }, useInsertionEffect: Ct, useLayoutEffect: function() {
  }, useCallback: function(n, l) {
    return _t(function() {
      return n;
    }, l);
  }, useImperativeHandle: Ct, useEffect: Ct, useDebugValue: Ct, useDeferredValue: function(n) {
    return yt(), n;
  }, useTransition: function() {
    return yt(), [
      !1,
      tr
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
  function rr(n) {
    return console.error(n), null;
  }
  function Tt() {
  }
  function nr(n, l, f, v, L, O, j, Q, de) {
    var be = [], ke = /* @__PURE__ */ new Set();
    return l = { destination: null, responseState: l, progressiveChunkSize: v, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: ke, pingedTasks: be, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: L === void 0 ? rr : L, onAllReady: Tt, onShellReady: j === void 0 ? Tt : j, onShellError: Tt, onFatalError: Tt }, f = h(l, 0, null, f, !1, !1), f.parentFlushed = !0, n = ar(l, n, null, f, ke, me, null, Kt), be.push(n), l;
  }
  function ar(n, l, f, v, L, O, j, Q) {
    n.allPendingTasks++, f === null ? n.pendingRootTasks++ : f.pendingTasks++;
    var de = { node: l, ping: function() {
      var be = n.pingedTasks;
      be.push(de), be.length === 1 && bn(n);
    }, blockedBoundary: f, blockedSegment: v, abortSet: L, legacyContext: O, context: j, treeContext: Q };
    return L.add(de), de;
  }
  function h(n, l, f, v, L, O) {
    return { status: 0, id: -1, index: l, parentFlushed: !1, chunks: [], children: [], formatContext: v, boundary: f, lastPushedText: L, textEmbedded: O };
  }
  function b(n, l) {
    if (n = n.onError(l), n != null && typeof n != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof n + '" instead');
    return n;
  }
  function _(n, l) {
    var f = n.onShellError;
    f(l), f = n.onFatalError, f(l), n.destination !== null ? (n.status = 2, n.destination.destroy(l)) : (n.status = 1, n.fatalError = l);
  }
  function q(n, l, f, v, L) {
    for (ot = {}, gt = l, ve = 0, n = f(v, L); Jt; ) Jt = !1, ve = 0, Qt += 1, Ce = null, n = f(v, L);
    return jt(), n;
  }
  function ye(n, l, f, v) {
    var L = f.render(), O = v.childContextTypes;
    if (O != null) {
      var j = l.legacyContext;
      if (typeof f.getChildContext != "function") v = j;
      else {
        f = f.getChildContext();
        for (var Q in f) if (!(Q in O)) throw Error(t(108, $e(v) || "Unknown", Q));
        v = ie({}, j, f);
      }
      l.legacyContext = v, we(n, l, L), l.legacyContext = j;
    } else we(n, l, L);
  }
  function Se(n, l) {
    if (n && n.defaultProps) {
      l = ie({}, l), n = n.defaultProps;
      for (var f in n) l[f] === void 0 && (l[f] = n[f]);
      return l;
    }
    return l;
  }
  function Pe(n, l, f, v, L) {
    if (typeof f == "function") if (f.prototype && f.prototype.isReactComponent) {
      L = it(f, l.legacyContext);
      var O = f.contextType;
      O = new f(v, typeof O == "object" && O !== null ? O._currentValue2 : L), Rt(O, f, v, L), ye(n, l, O, f);
    } else {
      O = it(f, l.legacyContext), L = q(n, l, f, v, O);
      var j = ve !== 0;
      if (typeof L == "object" && L !== null && typeof L.render == "function" && L.$$typeof === void 0) Rt(L, f, v, O), ye(n, l, L, f);
      else if (j) {
        v = l.treeContext, l.treeContext = mt(v, 1, 0);
        try {
          we(n, l, L);
        } finally {
          l.treeContext = v;
        }
      } else we(n, l, L);
    }
    else if (typeof f == "string") {
      switch (L = l.blockedSegment, O = Ne(L.chunks, f, v, n.responseState, L.formatContext), L.lastPushedText = !1, j = L.formatContext, L.formatContext = J(j, f, v), qe(n, l, O), L.formatContext = j, f) {
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
          L.chunks.push("</", f, ">");
      }
      L.lastPushedText = !1;
    } else {
      switch (f) {
        case he:
        case K:
        case P:
        case p:
        case F:
          we(n, l, v.children);
          return;
        case te:
          we(n, l, v.children);
          return;
        case se:
          throw Error(t(343));
        case ee:
          e: {
            f = l.blockedBoundary, L = l.blockedSegment, O = v.fallback, v = v.children, j = /* @__PURE__ */ new Set();
            var Q = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: j, errorDigest: null }, de = h(n, L.chunks.length, Q, L.formatContext, !1, !1);
            L.children.push(de), L.lastPushedText = !1;
            var be = h(n, 0, null, L.formatContext, !1, !1);
            be.parentFlushed = !0, l.blockedBoundary = Q, l.blockedSegment = be;
            try {
              if (qe(
                n,
                l,
                v
              ), n.responseState.generateStaticMarkup || be.lastPushedText && be.textEmbedded && be.chunks.push("<!-- -->"), be.status = 1, $t(Q, be), Q.pendingTasks === 0) break e;
            } catch (ke) {
              be.status = 4, Q.forceClientRender = !0, Q.errorDigest = b(n, ke);
            } finally {
              l.blockedBoundary = f, l.blockedSegment = L;
            }
            l = ar(n, O, f, de, j, l.legacyContext, l.context, l.treeContext), n.pingedTasks.push(l);
          }
          return;
      }
      if (typeof f == "object" && f !== null) switch (f.$$typeof) {
        case ne:
          if (v = q(n, l, f.render, v, L), ve !== 0) {
            f = l.treeContext, l.treeContext = mt(f, 1, 0);
            try {
              we(n, l, v);
            } finally {
              l.treeContext = f;
            }
          } else we(n, l, v);
          return;
        case B:
          f = f.type, v = Se(f, v), Pe(n, l, f, v, L);
          return;
        case re:
          if (L = v.children, f = f._context, v = v.value, O = f._currentValue2, f._currentValue2 = v, j = Ge, Ge = v = { parent: j, depth: j === null ? 0 : j.depth + 1, context: f, parentValue: O, value: v }, l.context = v, we(n, l, L), n = Ge, n === null) throw Error(t(403));
          v = n.parentValue, n.context._currentValue2 = v === Z ? n.context._defaultValue : v, n = Ge = n.parent, l.context = n;
          return;
        case E:
          v = v.children, v = v(f._currentValue2), we(n, l, v);
          return;
        case oe:
          L = f._init, f = L(f._payload), v = Se(f, v), Pe(
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
          Pe(n, l, f.type, f.props, f.ref);
          return;
        case C:
          throw Error(t(257));
        case oe:
          var v = f._init;
          f = v(f._payload), we(n, l, f);
          return;
      }
      if (V(f)) {
        Je(n, l, f);
        return;
      }
      if (f === null || typeof f != "object" ? v = null : (v = le && f[le] || f["@@iterator"], v = typeof v == "function" ? v : null), v && (v = v.call(f))) {
        if (f = v.next(), !f.done) {
          var L = [];
          do
            L.push(f.value), f = v.next();
          while (!f.done);
          Je(n, l, L);
        }
        return;
      }
      throw n = Object.prototype.toString.call(f), Error(t(31, n === "[object Object]" ? "object with keys {" + Object.keys(f).join(", ") + "}" : n));
    }
    typeof f == "string" ? (v = l.blockedSegment, v.lastPushedText = Ke(l.blockedSegment.chunks, f, n.responseState, v.lastPushedText)) : typeof f == "number" && (v = l.blockedSegment, v.lastPushedText = Ke(l.blockedSegment.chunks, "" + f, n.responseState, v.lastPushedText));
  }
  function Je(n, l, f) {
    for (var v = f.length, L = 0; L < v; L++) {
      var O = l.treeContext;
      l.treeContext = mt(O, v, L);
      try {
        qe(n, l, f[L]);
      } finally {
        l.treeContext = O;
      }
    }
  }
  function qe(n, l, f) {
    var v = l.blockedSegment.formatContext, L = l.legacyContext, O = l.context;
    try {
      return we(n, l, f);
    } catch (de) {
      if (jt(), typeof de == "object" && de !== null && typeof de.then == "function") {
        f = de;
        var j = l.blockedSegment, Q = h(n, j.chunks.length, null, j.formatContext, j.lastPushedText, !0);
        j.children.push(Q), j.lastPushedText = !1, n = ar(n, l.node, l.blockedBoundary, Q, l.abortSet, l.legacyContext, l.context, l.treeContext).ping, f.then(n, n), l.blockedSegment.formatContext = v, l.legacyContext = L, l.context = O, Me(O);
      } else throw l.blockedSegment.formatContext = v, l.legacyContext = L, l.context = O, Me(O), de;
    }
  }
  function tt(n) {
    var l = n.blockedBoundary;
    n = n.blockedSegment, n.status = 3, fr(this, l, n);
  }
  function or(n, l, f) {
    var v = n.blockedBoundary;
    n.blockedSegment.status = 3, v === null ? (l.allPendingTasks--, l.status !== 2 && (l.status = 2, l.destination !== null && l.destination.push(null))) : (v.pendingTasks--, v.forceClientRender || (v.forceClientRender = !0, n = f === void 0 ? Error(t(432)) : f, v.errorDigest = l.onError(n), v.parentFlushed && l.clientRenderedBoundaries.push(v)), v.fallbackAbortableTasks.forEach(function(L) {
      return or(L, l, f);
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
      zt.current = Zt;
      var v = Xe;
      Xe = n.responseState;
      try {
        var L = n.pingedTasks, O;
        for (O = 0; O < L.length; O++) {
          var j = L[O], Q = n, de = j.blockedSegment;
          if (de.status === 0) {
            Me(j.context);
            try {
              we(Q, j, j.node), Q.responseState.generateStaticMarkup || de.lastPushedText && de.textEmbedded && de.chunks.push("<!-- -->"), j.abortSet.delete(j), de.status = 1, fr(Q, j.blockedBoundary, de);
            } catch (Et) {
              if (jt(), typeof Et == "object" && Et !== null && typeof Et.then == "function") {
                var be = j.ping;
                Et.then(be, be);
              } else {
                j.abortSet.delete(j), de.status = 4;
                var ke = j.blockedBoundary, rt = Et, Ut = b(Q, rt);
                if (ke === null ? _(Q, rt) : (ke.pendingTasks--, ke.forceClientRender || (ke.forceClientRender = !0, ke.errorDigest = Ut, ke.parentFlushed && Q.clientRenderedBoundaries.push(ke))), Q.allPendingTasks--, Q.allPendingTasks === 0) {
                  var Bt = Q.onAllReady;
                  Bt();
                }
              }
            } finally {
            }
          }
        }
        L.splice(0, O), n.destination !== null && Rr(n, n.destination);
      } catch (Et) {
        b(n, Et), _(n, Et);
      } finally {
        Xe = v, zt.current = f, f === Zt && Me(l);
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
        var L = !0;
        v = f.chunks;
        var O = 0;
        f = f.children;
        for (var j = 0; j < f.length; j++) {
          for (L = f[j]; O < L.index; O++) l.push(v[O]);
          L = Sr(n, l, L);
        }
        for (; O < v.length - 1; O++) l.push(v[O]);
        return O < v.length && (L = l.push(v[O])), L;
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
      var L = n.responseState, O = L.nextSuspenseID++;
      return L = L.boundaryPrefix + O.toString(16), v = v.id = L, Le(l, n.responseState, v), wr(n, l, f), l.push("<!--/$-->");
    }
    if (v.byteSize > n.progressiveChunkSize) return v.rootSegmentID = n.nextSegmentId++, n.completedBoundaries.push(v), Le(l, n.responseState, v.id), wr(n, l, f), l.push("<!--/$-->");
    if (n.responseState.generateStaticMarkup || l.push("<!--$-->"), f = v.completedSegments, f.length !== 1) throw Error(t(391));
    return Sr(n, l, f[0]), n = n.responseState.generateStaticMarkup ? !0 : l.push("<!--/$-->"), n;
  }
  function zr(n, l, f) {
    return Ee(l, n.responseState, f.formatContext, f.id), Sr(n, l, f), st(l, f.formatContext);
  }
  function $r(n, l, f) {
    for (var v = f.completedSegments, L = 0; L < v.length; L++) Ur(n, l, f, v[L]);
    if (v.length = 0, n = n.responseState, v = f.id, f = f.rootSegmentID, l.push(n.startInlineScript), n.sentCompleteBoundaryFunction ? l.push('$RC("') : (n.sentCompleteBoundaryFunction = !0, l.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), v === null) throw Error(t(395));
    return f = f.toString(16), l.push(v), l.push('","'), l.push(n.segmentPrefix), l.push(f), l.push('")<\/script>');
  }
  function Ur(n, l, f, v) {
    if (v.status === 2) return !0;
    var L = v.id;
    if (L === -1) {
      if ((v.id = f.rootSegmentID) === -1) throw Error(t(392));
      return zr(n, l, v);
    }
    return zr(n, l, v), n = n.responseState, l.push(n.startInlineScript), n.sentCompleteSegmentFunction ? l.push('$RS("') : (n.sentCompleteSegmentFunction = !0, l.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), l.push(n.segmentPrefix), L = L.toString(16), l.push(L), l.push('","'), l.push(n.placeholderPrefix), l.push(L), l.push('")<\/script>');
  }
  function Rr(n, l) {
    try {
      var f = n.completedRootSegment;
      if (f !== null && n.pendingRootTasks === 0) {
        Sr(n, l, f), n.completedRootSegment = null;
        var v = n.responseState.bootstrapChunks;
        for (f = 0; f < v.length - 1; f++) l.push(v[f]);
        f < v.length && l.push(v[f]);
      }
      var L = n.clientRenderedBoundaries, O;
      for (O = 0; O < L.length; O++) {
        var j = L[O];
        v = l;
        var Q = n.responseState, de = j.id, be = j.errorDigest, ke = j.errorMessage, rt = j.errorComponentStack;
        if (v.push(Q.startInlineScript), Q.sentClientRenderFunction ? v.push('$RX("') : (Q.sentClientRenderFunction = !0, v.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), de === null) throw Error(t(395));
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
          var Et = Ae(rt);
          v.push(Et);
        }
        if (!v.push(")<\/script>")) {
          n.destination = null, O++, L.splice(0, O);
          return;
        }
      }
      L.splice(0, O);
      var kr = n.completedBoundaries;
      for (O = 0; O < kr.length; O++) if (!$r(n, l, kr[O])) {
        n.destination = null, O++, kr.splice(0, O);
        return;
      }
      kr.splice(0, O);
      var ir = n.partialBoundaries;
      for (O = 0; O < ir.length; O++) {
        var Wr = ir[O];
        e: {
          L = n, j = l;
          var xr = Wr.completedSegments;
          for (Q = 0; Q < xr.length; Q++) if (!Ur(L, j, Wr, xr[Q])) {
            Q++, xr.splice(0, Q);
            var Sn = !1;
            break e;
          }
          xr.splice(0, Q), Sn = !0;
        }
        if (!Sn) {
          n.destination = null, O++, ir.splice(0, O);
          return;
        }
      }
      ir.splice(0, O);
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
      }), f.clear(), n.destination !== null && Rr(n, n.destination);
    } catch (v) {
      b(n, v), _(n, v);
    }
  }
  function wn() {
  }
  function Br(n, l, f, v) {
    var L = !1, O = null, j = "", Q = { push: function(be) {
      return be !== null && (j += be), !0;
    }, destroy: function(be) {
      L = !0, O = be;
    } }, de = !1;
    if (n = nr(n, Ue(f, l ? l.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, wn, void 0, function() {
      de = !0;
    }), bn(n), vn(n, v), n.status === 1) n.status = 2, Q.destroy(n.fatalError);
    else if (n.status !== 2 && n.destination === null) {
      n.destination = Q;
      try {
        Rr(n, Q);
      } catch (be) {
        b(n, be), _(n, be);
      }
    }
    if (L) throw O;
    if (!de) throw Error(t(426));
    return j;
  }
  return Cr.renderToNodeStream = function() {
    throw Error(t(207));
  }, Cr.renderToStaticMarkup = function(n, l) {
    return Br(n, l, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Cr.renderToStaticNodeStream = function() {
    throw Error(t(208));
  }, Cr.renderToString = function(n, l) {
    return Br(n, l, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Cr.version = "18.3.1", Cr;
}
var zn = {}, Zo;
function uc() {
  if (Zo) return zn;
  Zo = 1;
  var e = dt;
  function t(a) {
    for (var s = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, d = 1; d < arguments.length; d++) s += "&args[]=" + encodeURIComponent(arguments[d]);
    return "Minified React error #" + a + "; visit " + s + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var r = null, o = 0;
  function c(a, s) {
    if (s.length !== 0) if (512 < s.length) 0 < o && (a.enqueue(new Uint8Array(r.buffer, 0, o)), r = new Uint8Array(512), o = 0), a.enqueue(s);
    else {
      var d = r.length - o;
      d < s.length && (d === 0 ? a.enqueue(r) : (r.set(s.subarray(0, d), o), a.enqueue(r), s = s.subarray(d)), r = new Uint8Array(512), o = 0), r.set(s, o), o += s.length;
    }
  }
  function u(a, s) {
    return c(a, s), !0;
  }
  function g(a) {
    r && 0 < o && (a.enqueue(new Uint8Array(r.buffer, 0, o)), r = null, o = 0);
  }
  var S = new TextEncoder();
  function w(a) {
    return S.encode(a);
  }
  function m(a) {
    return S.encode(a);
  }
  function I(a, s) {
    typeof a.error == "function" ? a.error(s) : a.close();
  }
  var T = Object.prototype.hasOwnProperty, $ = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Y = {}, A = {};
  function k(a) {
    return T.call(A, a) ? !0 : T.call(Y, a) ? !1 : $.test(a) ? A[a] = !0 : (Y[a] = !0, !1);
  }
  function D(a, s, d, y, N, R, z) {
    this.acceptsBooleans = s === 2 || s === 3 || s === 4, this.attributeName = y, this.attributeNamespace = N, this.mustUseProperty = d, this.propertyName = a, this.type = s, this.sanitizeURL = R, this.removeEmptyString = z;
  }
  var V = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
    V[a] = new D(a, 0, !1, a, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
    var s = a[0];
    V[s] = new D(s, 1, !1, a[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
    V[a] = new D(a, 2, !1, a.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
    V[a] = new D(a, 2, !1, a, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
    V[a] = new D(a, 3, !1, a.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(a) {
    V[a] = new D(a, 3, !0, a, null, !1, !1);
  }), ["capture", "download"].forEach(function(a) {
    V[a] = new D(a, 4, !1, a, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(a) {
    V[a] = new D(a, 6, !1, a, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(a) {
    V[a] = new D(a, 5, !1, a.toLowerCase(), null, !1, !1);
  });
  var G = /[\-:]([a-z])/g;
  function J(a) {
    return a[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
    var s = a.replace(
      G,
      J
    );
    V[s] = new D(s, 1, !1, a, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
    var s = a.replace(G, J);
    V[s] = new D(s, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
    var s = a.replace(G, J);
    V[s] = new D(s, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(a) {
    V[a] = new D(a, 1, !1, a.toLowerCase(), null, !1, !1);
  }), V.xlinkHref = new D("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(a) {
    V[a] = new D(a, 1, !1, a.toLowerCase(), null, !0, !0);
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
      var d = "", y, N = 0;
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
        N !== y && (d += a.substring(N, y)), N = y + 1, d += s;
      }
      a = N !== y ? d + a.substring(N, y) : d;
    }
    return a;
  }
  var Ie = /([A-Z])/g, De = /^ms-/, Ve = Array.isArray, ue = m("<script>"), pe = m("<\/script>"), Ne = m('<script src="'), Le = m('<script type="module" src="'), Ee = m('" async=""><\/script>'), st = /(<\/|<)(s)(cript)/gi;
  function Fe(a, s, d, y) {
    return "" + s + (d === "s" ? "\\u0073" : "\\u0053") + y;
  }
  function Ae(a, s, d, y, N) {
    a = a === void 0 ? "" : a, s = s === void 0 ? ue : m('<script nonce="' + _e(s) + '">');
    var R = [];
    if (d !== void 0 && R.push(s, w(("" + d).replace(st, Fe)), pe), y !== void 0) for (d = 0; d < y.length; d++) R.push(Ne, w(_e(y[d])), Ee);
    if (N !== void 0) for (y = 0; y < N.length; y++) R.push(Le, w(_e(N[y])), Ee);
    return { bootstrapChunks: R, startInlineScript: s, placeholderPrefix: m(a + "P:"), segmentPrefix: m(a + "S:"), boundaryPrefix: a + "B:", idPrefix: a, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function Ue(a, s) {
    return { insertionMode: a, selectedValue: s };
  }
  function Ke(a) {
    return Ue(a === "http://www.w3.org/2000/svg" ? 2 : a === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function ie(a, s, d) {
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
  var M = m("<!-- -->");
  function C(a, s, d, y) {
    return s === "" ? y : (y && a.push(M), a.push(w(_e(s))), !0);
  }
  var F = /* @__PURE__ */ new Map(), P = m(' style="'), p = m(":"), re = m(";");
  function E(a, s, d) {
    if (typeof d != "object") throw Error(t(62));
    s = !0;
    for (var y in d) if (T.call(d, y)) {
      var N = d[y];
      if (N != null && typeof N != "boolean" && N !== "") {
        if (y.indexOf("--") === 0) {
          var R = w(_e(y));
          N = w(_e(("" + N).trim()));
        } else {
          R = y;
          var z = F.get(R);
          z !== void 0 || (z = m(_e(R.replace(Ie, "-$1").toLowerCase().replace(De, "-ms-"))), F.set(R, z)), R = z, N = typeof N == "number" ? N === 0 || T.call(H, y) ? w("" + N) : w(N + "px") : w(_e(("" + N).trim()));
        }
        s ? (s = !1, a.push(P, R, p, N)) : a.push(re, R, p, N);
      }
    }
    s || a.push(te);
  }
  var ne = m(" "), ee = m('="'), te = m('"'), B = m('=""');
  function oe(a, s, d, y) {
    switch (d) {
      case "style":
        E(a, s, y);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < d.length) || d[0] !== "o" && d[0] !== "O" || d[1] !== "n" && d[1] !== "N") {
      if (s = V.hasOwnProperty(d) ? V[d] : null, s !== null) {
        switch (typeof y) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!s.acceptsBooleans) return;
        }
        switch (d = w(s.attributeName), s.type) {
          case 3:
            y && a.push(ne, d, B);
            break;
          case 4:
            y === !0 ? a.push(ne, d, B) : y !== !1 && a.push(ne, d, ee, w(_e(y)), te);
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
  var se = m(">"), K = m("/>");
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
  var le = m(' selected=""');
  function $e(a, s, d, y) {
    a.push(ge(d));
    var N = d = null, R;
    for (R in s) if (T.call(s, R)) {
      var z = s[R];
      if (z != null) switch (R) {
        case "children":
          d = z;
          break;
        case "dangerouslySetInnerHTML":
          N = z;
          break;
        default:
          oe(a, y, R, z);
      }
    }
    return a.push(se), he(a, N, d), typeof d == "string" ? (a.push(w(_e(d))), null) : d;
  }
  var me = m(`
`), it = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, Ge = /* @__PURE__ */ new Map();
  function ge(a) {
    var s = Ge.get(a);
    if (s === void 0) {
      if (!it.test(a)) throw Error(t(65, a));
      s = m("<" + a), Ge.set(a, s);
    }
    return s;
  }
  var U = m("<!DOCTYPE html>");
  function ae(a, s, d, y, N) {
    switch (s) {
      case "select":
        a.push(ge("select"));
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
              oe(a, y, xe, X);
          }
        }
        return a.push(se), he(a, z, R), R;
      case "option":
        z = N.selectedValue, a.push(ge("option"));
        var fe = X = null, Te = null, xe = null;
        for (R in d) if (T.call(d, R)) {
          var Ze = d[R];
          if (Ze != null) switch (R) {
            case "children":
              X = Ze;
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
              oe(a, y, R, Ze);
          }
        }
        if (z != null) if (d = fe !== null ? "" + fe : Z(X), Ve(z)) {
          for (y = 0; y < z.length; y++)
            if ("" + z[y] === d) {
              a.push(le);
              break;
            }
        } else "" + z === d && a.push(le);
        else Te && a.push(le);
        return a.push(se), he(a, xe, X), X;
      case "textarea":
        a.push(ge("textarea")), xe = z = R = null;
        for (X in d) if (T.call(d, X) && (fe = d[X], fe != null)) switch (X) {
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
            oe(a, y, X, fe);
        }
        if (R === null && z !== null && (R = z), a.push(se), xe != null) {
          if (R != null) throw Error(t(92));
          if (Ve(xe) && 1 < xe.length) throw Error(t(93));
          R = "" + xe;
        }
        return typeof R == "string" && R[0] === `
` && a.push(me), R !== null && a.push(w(_e("" + R))), null;
      case "input":
        a.push(ge("input")), fe = xe = X = R = null;
        for (z in d) if (T.call(d, z) && (Te = d[z], Te != null)) switch (z) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, "input"));
          case "defaultChecked":
            fe = Te;
            break;
          case "defaultValue":
            X = Te;
            break;
          case "checked":
            xe = Te;
            break;
          case "value":
            R = Te;
            break;
          default:
            oe(a, y, z, Te);
        }
        return xe !== null ? oe(
          a,
          y,
          "checked",
          xe
        ) : fe !== null && oe(a, y, "checked", fe), R !== null ? oe(a, y, "value", R) : X !== null && oe(a, y, "value", X), a.push(K), null;
      case "menuitem":
        a.push(ge("menuitem"));
        for (var Ot in d) if (T.call(d, Ot) && (R = d[Ot], R != null)) switch (Ot) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            oe(a, y, Ot, R);
        }
        return a.push(se), null;
      case "title":
        a.push(ge("title")), R = null;
        for (Ze in d) if (T.call(d, Ze) && (z = d[Ze], z != null)) switch (Ze) {
          case "children":
            R = z;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(434));
          default:
            oe(a, y, Ze, z);
        }
        return a.push(se), R;
      case "listing":
      case "pre":
        a.push(ge(s)), z = R = null;
        for (fe in d) if (T.call(d, fe) && (X = d[fe], X != null)) switch (fe) {
          case "children":
            R = X;
            break;
          case "dangerouslySetInnerHTML":
            z = X;
            break;
          default:
            oe(a, y, fe, X);
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
        for (var Wt in d) if (T.call(d, Wt) && (R = d[Wt], R != null)) switch (Wt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, s));
          default:
            oe(a, y, Wt, R);
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
        return N.insertionMode === 0 && a.push(U), $e(a, d, s, y);
      default:
        if (s.indexOf("-") === -1 && typeof d.is != "string") return $e(a, d, s, y);
        a.push(ge(s)), z = R = null;
        for (Te in d) if (T.call(d, Te) && (X = d[Te], X != null)) switch (Te) {
          case "children":
            R = X;
            break;
          case "dangerouslySetInnerHTML":
            z = X;
            break;
          case "style":
            E(a, y, X);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            k(Te) && typeof X != "function" && typeof X != "symbol" && a.push(ne, w(Te), ee, w(_e(X)), te);
        }
        return a.push(se), he(a, z, R), R;
    }
  }
  var Ye = m("</"), lt = m(">"), Me = m('<template id="'), Yt = m('"></template>'), Rt = m("<!--$-->"), Kt = m('<!--$?--><template id="'), mt = m('"></template>'), ft = m("<!--$!-->"), nt = m("<!--/$-->"), ct = m("<template"), Pt = m('"'), Dt = m(' data-dgst="');
  m(' data-msg="'), m(' data-stck="');
  var vr = m("></template>");
  function ot(a, s, d) {
    if (c(a, Kt), d === null) throw Error(t(395));
    return c(a, d), u(a, mt);
  }
  var gt = m('<div hidden id="'), Xt = m('">'), Ce = m("</div>"), Ft = m('<svg aria-hidden="true" style="display:none" id="'), Jt = m('">'), ve = m("</svg>"), et = m('<math aria-hidden="true" style="display:none" id="'), Qt = m('">'), yt = m("</math>"), Nt = m('<table hidden id="'), Mt = m('">'), jt = m("</table>"), dr = m('<table hidden><tbody id="'), at = m('">'), _t = m("</tbody></table>"), er = m('<table hidden><tr id="'), tr = m('">'), Ct = m("</tr></table>"), Zt = m('<table hidden><colgroup id="'), Xe = m('">'), zt = m("</colgroup></table>");
  function rr(a, s, d, y) {
    switch (d.insertionMode) {
      case 0:
      case 1:
        return c(a, gt), c(a, s.segmentPrefix), c(a, w(y.toString(16))), u(a, Xt);
      case 2:
        return c(a, Ft), c(a, s.segmentPrefix), c(a, w(y.toString(16))), u(a, Jt);
      case 3:
        return c(a, et), c(a, s.segmentPrefix), c(a, w(y.toString(16))), u(a, Qt);
      case 4:
        return c(a, Nt), c(a, s.segmentPrefix), c(a, w(y.toString(16))), u(a, Mt);
      case 5:
        return c(a, dr), c(a, s.segmentPrefix), c(a, w(y.toString(16))), u(a, at);
      case 6:
        return c(a, er), c(a, s.segmentPrefix), c(a, w(y.toString(16))), u(a, tr);
      case 7:
        return c(
          a,
          Zt
        ), c(a, s.segmentPrefix), c(a, w(y.toString(16))), u(a, Xe);
      default:
        throw Error(t(397));
    }
  }
  function Tt(a, s) {
    switch (s.insertionMode) {
      case 0:
      case 1:
        return u(a, Ce);
      case 2:
        return u(a, ve);
      case 3:
        return u(a, yt);
      case 4:
        return u(a, jt);
      case 5:
        return u(a, _t);
      case 6:
        return u(a, Ct);
      case 7:
        return u(a, zt);
      default:
        throw Error(t(397));
    }
  }
  var nr = m('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), ar = m('$RS("'), h = m('","'), b = m('")<\/script>'), _ = m('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), q = m('$RC("'), ye = m('","'), Se = m('")<\/script>'), Pe = m('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), we = m('$RX("'), Je = m('"'), qe = m(")<\/script>"), tt = m(","), or = /[<\u2028\u2029]/g;
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
  var fr = Object.assign, bn = Symbol.for("react.element"), wr = Symbol.for("react.portal"), Sr = Symbol.for("react.fragment"), zr = Symbol.for("react.strict_mode"), $r = Symbol.for("react.profiler"), Ur = Symbol.for("react.provider"), Rr = Symbol.for("react.context"), vn = Symbol.for("react.forward_ref"), wn = Symbol.for("react.suspense"), Br = Symbol.for("react.suspense_list"), n = Symbol.for("react.memo"), l = Symbol.for("react.lazy"), f = Symbol.for("react.scope"), v = Symbol.for("react.debug_trace_mode"), L = Symbol.for("react.legacy_hidden"), O = Symbol.for("react.default_value"), j = Symbol.iterator;
  function Q(a) {
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
      case Rr:
        return (a.displayName || "Context") + ".Consumer";
      case Ur:
        return (a._context.displayName || "Context") + ".Provider";
      case vn:
        var s = a.render;
        return a = a.displayName, a || (a = s.displayName || s.name || "", a = a !== "" ? "ForwardRef(" + a + ")" : "ForwardRef"), a;
      case n:
        return s = a.displayName || null, s !== null ? s : Q(a.type) || "Memo";
      case l:
        s = a._payload, a = a._init;
        try {
          return Q(a(s));
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
  function Et(a, s) {
    if (a.context._currentValue = a.parentValue, a = a.parent, a === null) throw Error(t(402));
    a.depth === s.depth ? rt(a, s) : Et(a, s);
  }
  function kr(a, s) {
    var d = s.parent;
    if (d === null) throw Error(t(402));
    a.depth === d.depth ? rt(a, d) : kr(a, d), s.context._currentValue = s.value;
  }
  function ir(a) {
    var s = ke;
    s !== a && (s === null ? Bt(a) : a === null ? Ut(s) : s.depth === a.depth ? rt(s, a) : s.depth > a.depth ? Et(s, a) : kr(s, a), ke = a);
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
    var N = a.state !== void 0 ? a.state : null;
    a.updater = Wr, a.props = d, a.state = N;
    var R = { queue: [], replace: !1 };
    a._reactInternals = R;
    var z = s.contextType;
    if (a.context = typeof z == "object" && z !== null ? z._currentValue : y, z = s.getDerivedStateFromProps, typeof z == "function" && (z = z(d, N), N = z == null ? N : fr({}, N, z), a.state = N), typeof s.getDerivedStateFromProps != "function" && typeof a.getSnapshotBeforeUpdate != "function" && (typeof a.UNSAFE_componentWillMount == "function" || typeof a.componentWillMount == "function")) if (s = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), s !== a.state && Wr.enqueueReplaceState(a, a.state, null), R.queue !== null && 0 < R.queue.length) if (s = R.queue, z = R.replace, R.queue = null, R.replace = !1, z && s.length === 1) a.state = s[0];
    else {
      for (R = z ? s[0] : a.state, N = !0, z = z ? 1 : 0; z < s.length; z++) {
        var X = s[z];
        X = typeof X == "function" ? X.call(a, R, d, y) : X, X != null && (N ? (N = !1, R = fr({}, R, X)) : fr(R, X));
      }
      a.state = R;
    }
    else R.queue = null;
  }
  var Sn = { id: 1, overflow: "" };
  function pr(a, s, d) {
    var y = a.id;
    a = a.overflow;
    var N = 32 - kn(y) - 1;
    y &= ~(1 << N), d += 1;
    var R = 32 - kn(s) + N;
    if (30 < R) {
      var z = N - N % 5;
      return R = (y & (1 << z) - 1).toString(32), y >>= z, N -= z, { id: 1 << 32 - kn(s) + N | d << N | y, overflow: R + a };
    }
    return { id: 1 << R | d << N | y, overflow: a };
  }
  var kn = Math.clz32 ? Math.clz32 : Gs, Vs = Math.log, qs = Math.LN2;
  function Gs(a) {
    return a >>>= 0, a === 0 ? 32 : 31 - (Vs(a) / qs | 0) | 0;
  }
  function Ys(a, s) {
    return a === s && (a !== 0 || 1 / a === 1 / s) || a !== a && s !== s;
  }
  var Xs = typeof Object.is == "function" ? Object.is : Ys, sr = null, aa = null, xn = null, Qe = null, Hr = !1, _n = !1, Vr = 0, hr = null, Cn = 0;
  function _r() {
    if (sr === null) throw Error(t(321));
    return sr;
  }
  function lo() {
    if (0 < Cn) throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function oa() {
    return Qe === null ? xn === null ? (Hr = !1, xn = Qe = lo()) : (Hr = !0, Qe = xn) : Qe.next === null ? (Hr = !1, Qe = Qe.next = lo()) : (Hr = !0, Qe = Qe.next), Qe;
  }
  function ia() {
    aa = sr = null, _n = !1, xn = null, Cn = 0, Qe = hr = null;
  }
  function co(a, s) {
    return typeof s == "function" ? s(a) : s;
  }
  function uo(a, s, d) {
    if (sr = _r(), Qe = oa(), Hr) {
      var y = Qe.queue;
      if (s = y.dispatch, hr !== null && (d = hr.get(y), d !== void 0)) {
        hr.delete(y), y = Qe.memoizedState;
        do
          y = a(y, d.action), d = d.next;
        while (d !== null);
        return Qe.memoizedState = y, [y, s];
      }
      return [Qe.memoizedState, s];
    }
    return a = a === co ? typeof s == "function" ? s() : s : d !== void 0 ? d(s) : s, Qe.memoizedState = a, a = Qe.queue = { last: null, dispatch: null }, a = a.dispatch = Js.bind(null, sr, a), [Qe.memoizedState, a];
  }
  function fo(a, s) {
    if (sr = _r(), Qe = oa(), s = s === void 0 ? null : s, Qe !== null) {
      var d = Qe.memoizedState;
      if (d !== null && s !== null) {
        var y = d[1];
        e: if (y === null) y = !1;
        else {
          for (var N = 0; N < y.length && N < s.length; N++) if (!Xs(s[N], y[N])) {
            y = !1;
            break e;
          }
          y = !0;
        }
        if (y) return d[0];
      }
    }
    return a = a(), Qe.memoizedState = [a, s], a;
  }
  function Js(a, s, d) {
    if (25 <= Cn) throw Error(t(301));
    if (a === sr) if (_n = !0, a = { action: d, next: null }, hr === null && (hr = /* @__PURE__ */ new Map()), d = hr.get(s), d === void 0) hr.set(s, a);
    else {
      for (s = d; s.next !== null; ) s = s.next;
      s.next = a;
    }
  }
  function Qs() {
    throw Error(t(394));
  }
  function Tn() {
  }
  var po = { readContext: function(a) {
    return a._currentValue;
  }, useContext: function(a) {
    return _r(), a._currentValue;
  }, useMemo: fo, useReducer: uo, useRef: function(a) {
    sr = _r(), Qe = oa();
    var s = Qe.memoizedState;
    return s === null ? (a = { current: a }, Qe.memoizedState = a) : s;
  }, useState: function(a) {
    return uo(co, a);
  }, useInsertionEffect: Tn, useLayoutEffect: function() {
  }, useCallback: function(a, s) {
    return fo(function() {
      return a;
    }, s);
  }, useImperativeHandle: Tn, useEffect: Tn, useDebugValue: Tn, useDeferredValue: function(a) {
    return _r(), a;
  }, useTransition: function() {
    return _r(), [!1, Qs];
  }, useId: function() {
    var a = aa.treeContext, s = a.overflow;
    a = a.id, a = (a & ~(1 << 32 - kn(a) - 1)).toString(32) + s;
    var d = En;
    if (d === null) throw Error(t(404));
    return s = Vr++, a = ":" + d.idPrefix + "R" + a, 0 < s && (a += "H" + s.toString(32)), a + ":";
  }, useMutableSource: function(a, s) {
    return _r(), s(a._source);
  }, useSyncExternalStore: function(a, s, d) {
    if (d === void 0) throw Error(t(407));
    return d();
  } }, En = null, sa = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function Zs(a) {
    return console.error(a), null;
  }
  function qr() {
  }
  function Ks(a, s, d, y, N, R, z, X, fe) {
    var Te = [], xe = /* @__PURE__ */ new Set();
    return s = { destination: null, responseState: s, progressiveChunkSize: y === void 0 ? 12800 : y, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: xe, pingedTasks: Te, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: N === void 0 ? Zs : N, onAllReady: R === void 0 ? qr : R, onShellReady: z === void 0 ? qr : z, onShellError: X === void 0 ? qr : X, onFatalError: fe === void 0 ? qr : fe }, d = An(s, 0, null, d, !1, !1), d.parentFlushed = !0, a = la(s, a, null, d, xe, de, null, Sn), Te.push(a), s;
  }
  function la(a, s, d, y, N, R, z, X) {
    a.allPendingTasks++, d === null ? a.pendingRootTasks++ : d.pendingTasks++;
    var fe = { node: s, ping: function() {
      var Te = a.pingedTasks;
      Te.push(fe), Te.length === 1 && wo(a);
    }, blockedBoundary: d, blockedSegment: y, abortSet: N, legacyContext: R, context: z, treeContext: X };
    return N.add(fe), fe;
  }
  function An(a, s, d, y, N, R) {
    return { status: 0, id: -1, index: s, parentFlushed: !1, chunks: [], children: [], formatContext: y, boundary: d, lastPushedText: N, textEmbedded: R };
  }
  function Gr(a, s) {
    if (a = a.onError(s), a != null && typeof a != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof a + '" instead');
    return a;
  }
  function On(a, s) {
    var d = a.onShellError;
    d(s), d = a.onFatalError, d(s), a.destination !== null ? (a.status = 2, I(a.destination, s)) : (a.status = 1, a.fatalError = s);
  }
  function ho(a, s, d, y, N) {
    for (sr = {}, aa = s, Vr = 0, a = d(y, N); _n; ) _n = !1, Vr = 0, Cn += 1, Qe = null, a = d(y, N);
    return ia(), a;
  }
  function mo(a, s, d, y) {
    var N = d.render(), R = y.childContextTypes;
    if (R != null) {
      var z = s.legacyContext;
      if (typeof d.getChildContext != "function") y = z;
      else {
        d = d.getChildContext();
        for (var X in d) if (!(X in R)) throw Error(t(108, Q(y) || "Unknown", X));
        y = fr({}, z, d);
      }
      s.legacyContext = y, At(a, s, N), s.legacyContext = z;
    } else At(a, s, N);
  }
  function go(a, s) {
    if (a && a.defaultProps) {
      s = fr({}, s), a = a.defaultProps;
      for (var d in a) s[d] === void 0 && (s[d] = a[d]);
      return s;
    }
    return s;
  }
  function ca(a, s, d, y, N) {
    if (typeof d == "function") if (d.prototype && d.prototype.isReactComponent) {
      N = be(d, s.legacyContext);
      var R = d.contextType;
      R = new d(y, typeof R == "object" && R !== null ? R._currentValue : N), xr(R, d, y, N), mo(a, s, R, d);
    } else {
      R = be(d, s.legacyContext), N = ho(a, s, d, y, R);
      var z = Vr !== 0;
      if (typeof N == "object" && N !== null && typeof N.render == "function" && N.$$typeof === void 0) xr(N, d, y, R), mo(a, s, N, d);
      else if (z) {
        y = s.treeContext, s.treeContext = pr(y, 1, 0);
        try {
          At(a, s, N);
        } finally {
          s.treeContext = y;
        }
      } else At(a, s, N);
    }
    else if (typeof d == "string") {
      switch (N = s.blockedSegment, R = ae(N.chunks, d, y, a.responseState, N.formatContext), N.lastPushedText = !1, z = N.formatContext, N.formatContext = ie(z, d, y), ua(a, s, R), N.formatContext = z, d) {
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
          N.chunks.push(Ye, w(d), lt);
      }
      N.lastPushedText = !1;
    } else {
      switch (d) {
        case L:
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
            d = s.blockedBoundary, N = s.blockedSegment, R = y.fallback, y = y.children, z = /* @__PURE__ */ new Set();
            var X = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: z, errorDigest: null }, fe = An(a, N.chunks.length, X, N.formatContext, !1, !1);
            N.children.push(fe), N.lastPushedText = !1;
            var Te = An(a, 0, null, N.formatContext, !1, !1);
            Te.parentFlushed = !0, s.blockedBoundary = X, s.blockedSegment = Te;
            try {
              if (ua(
                a,
                s,
                y
              ), Te.lastPushedText && Te.textEmbedded && Te.chunks.push(M), Te.status = 1, Rn(X, Te), X.pendingTasks === 0) break e;
            } catch (xe) {
              Te.status = 4, X.forceClientRender = !0, X.errorDigest = Gr(a, xe);
            } finally {
              s.blockedBoundary = d, s.blockedSegment = N;
            }
            s = la(a, R, d, fe, z, s.legacyContext, s.context, s.treeContext), a.pingedTasks.push(s);
          }
          return;
      }
      if (typeof d == "object" && d !== null) switch (d.$$typeof) {
        case vn:
          if (y = ho(a, s, d.render, y, N), Vr !== 0) {
            d = s.treeContext, s.treeContext = pr(d, 1, 0);
            try {
              At(a, s, y);
            } finally {
              s.treeContext = d;
            }
          } else At(a, s, y);
          return;
        case n:
          d = d.type, y = go(d, y), ca(a, s, d, y, N);
          return;
        case Ur:
          if (N = y.children, d = d._context, y = y.value, R = d._currentValue, d._currentValue = y, z = ke, ke = y = { parent: z, depth: z === null ? 0 : z.depth + 1, context: d, parentValue: R, value: y }, s.context = y, At(a, s, N), a = ke, a === null) throw Error(t(403));
          y = a.parentValue, a.context._currentValue = y === O ? a.context._defaultValue : y, a = ke = a.parent, s.context = a;
          return;
        case Rr:
          y = y.children, y = y(d._currentValue), At(a, s, y);
          return;
        case l:
          N = d._init, d = N(d._payload), y = go(d, y), ca(a, s, d, y, void 0);
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
      if (Ve(d)) {
        yo(a, s, d);
        return;
      }
      if (d === null || typeof d != "object" ? y = null : (y = j && d[j] || d["@@iterator"], y = typeof y == "function" ? y : null), y && (y = y.call(d))) {
        if (d = y.next(), !d.done) {
          var N = [];
          do
            N.push(d.value), d = y.next();
          while (!d.done);
          yo(a, s, N);
        }
        return;
      }
      throw a = Object.prototype.toString.call(d), Error(t(31, a === "[object Object]" ? "object with keys {" + Object.keys(d).join(", ") + "}" : a));
    }
    typeof d == "string" ? (y = s.blockedSegment, y.lastPushedText = C(s.blockedSegment.chunks, d, a.responseState, y.lastPushedText)) : typeof d == "number" && (y = s.blockedSegment, y.lastPushedText = C(s.blockedSegment.chunks, "" + d, a.responseState, y.lastPushedText));
  }
  function yo(a, s, d) {
    for (var y = d.length, N = 0; N < y; N++) {
      var R = s.treeContext;
      s.treeContext = pr(R, y, N);
      try {
        ua(a, s, d[N]);
      } finally {
        s.treeContext = R;
      }
    }
  }
  function ua(a, s, d) {
    var y = s.blockedSegment.formatContext, N = s.legacyContext, R = s.context;
    try {
      return At(a, s, d);
    } catch (fe) {
      if (ia(), typeof fe == "object" && fe !== null && typeof fe.then == "function") {
        d = fe;
        var z = s.blockedSegment, X = An(a, z.chunks.length, null, z.formatContext, z.lastPushedText, !0);
        z.children.push(X), z.lastPushedText = !1, a = la(a, s.node, s.blockedBoundary, X, s.abortSet, s.legacyContext, s.context, s.treeContext).ping, d.then(a, a), s.blockedSegment.formatContext = y, s.legacyContext = N, s.context = R, ir(R);
      } else throw s.blockedSegment.formatContext = y, s.legacyContext = N, s.context = R, ir(R), fe;
    }
  }
  function el(a) {
    var s = a.blockedBoundary;
    a = a.blockedSegment, a.status = 3, vo(this, s, a);
  }
  function bo(a, s, d) {
    var y = a.blockedBoundary;
    a.blockedSegment.status = 3, y === null ? (s.allPendingTasks--, s.status !== 2 && (s.status = 2, s.destination !== null && s.destination.close())) : (y.pendingTasks--, y.forceClientRender || (y.forceClientRender = !0, a = d === void 0 ? Error(t(432)) : d, y.errorDigest = s.onError(a), y.parentFlushed && s.clientRenderedBoundaries.push(y)), y.fallbackAbortableTasks.forEach(function(N) {
      return bo(N, s, d);
    }), y.fallbackAbortableTasks.clear(), s.allPendingTasks--, s.allPendingTasks === 0 && (y = s.onAllReady, y()));
  }
  function Rn(a, s) {
    if (s.chunks.length === 0 && s.children.length === 1 && s.children[0].boundary === null) {
      var d = s.children[0];
      d.id = s.id, d.parentFlushed = !0, d.status === 1 && Rn(a, d);
    } else a.completedSegments.push(s);
  }
  function vo(a, s, d) {
    if (s === null) {
      if (d.parentFlushed) {
        if (a.completedRootSegment !== null) throw Error(t(389));
        a.completedRootSegment = d;
      }
      a.pendingRootTasks--, a.pendingRootTasks === 0 && (a.onShellError = qr, s = a.onShellReady, s());
    } else s.pendingTasks--, s.forceClientRender || (s.pendingTasks === 0 ? (d.parentFlushed && d.status === 1 && Rn(s, d), s.parentFlushed && a.completedBoundaries.push(s), s.fallbackAbortableTasks.forEach(el, a), s.fallbackAbortableTasks.clear()) : d.parentFlushed && d.status === 1 && (Rn(s, d), s.completedSegments.length === 1 && s.parentFlushed && a.partialBoundaries.push(s)));
    a.allPendingTasks--, a.allPendingTasks === 0 && (a = a.onAllReady, a());
  }
  function wo(a) {
    if (a.status !== 2) {
      var s = ke, d = sa.current;
      sa.current = po;
      var y = En;
      En = a.responseState;
      try {
        var N = a.pingedTasks, R;
        for (R = 0; R < N.length; R++) {
          var z = N[R], X = a, fe = z.blockedSegment;
          if (fe.status === 0) {
            ir(z.context);
            try {
              At(X, z, z.node), fe.lastPushedText && fe.textEmbedded && fe.chunks.push(M), z.abortSet.delete(z), fe.status = 1, vo(X, z.blockedBoundary, fe);
            } catch (Ht) {
              if (ia(), typeof Ht == "object" && Ht !== null && typeof Ht.then == "function") {
                var Te = z.ping;
                Ht.then(Te, Te);
              } else {
                z.abortSet.delete(z), fe.status = 4;
                var xe = z.blockedBoundary, Ze = Ht, Ot = Gr(X, Ze);
                if (xe === null ? On(X, Ze) : (xe.pendingTasks--, xe.forceClientRender || (xe.forceClientRender = !0, xe.errorDigest = Ot, xe.parentFlushed && X.clientRenderedBoundaries.push(xe))), X.allPendingTasks--, X.allPendingTasks === 0) {
                  var Wt = X.onAllReady;
                  Wt();
                }
              }
            } finally {
            }
          }
        }
        N.splice(0, R), a.destination !== null && da(a, a.destination);
      } catch (Ht) {
        Gr(a, Ht), On(a, Ht);
      } finally {
        En = y, sa.current = d, d === po && ir(s);
      }
    }
  }
  function Nn(a, s, d) {
    switch (d.parentFlushed = !0, d.status) {
      case 0:
        var y = d.id = a.nextSegmentId++;
        return d.lastPushedText = !1, d.textEmbedded = !1, a = a.responseState, c(s, Me), c(s, a.placeholderPrefix), a = w(y.toString(16)), c(s, a), u(s, Yt);
      case 1:
        d.status = 2;
        var N = !0;
        y = d.chunks;
        var R = 0;
        d = d.children;
        for (var z = 0; z < d.length; z++) {
          for (N = d[z]; R < N.index; R++) c(s, y[R]);
          N = Ln(a, s, N);
        }
        for (; R < y.length - 1; R++) c(s, y[R]);
        return R < y.length && (N = u(s, y[R])), N;
      default:
        throw Error(t(390));
    }
  }
  function Ln(a, s, d) {
    var y = d.boundary;
    if (y === null) return Nn(a, s, d);
    if (y.parentFlushed = !0, y.forceClientRender) y = y.errorDigest, u(s, ft), c(s, ct), y && (c(s, Dt), c(s, w(_e(y))), c(s, Pt)), u(s, vr), Nn(a, s, d);
    else if (0 < y.pendingTasks) {
      y.rootSegmentID = a.nextSegmentId++, 0 < y.completedSegments.length && a.partialBoundaries.push(y);
      var N = a.responseState, R = N.nextSuspenseID++;
      N = m(N.boundaryPrefix + R.toString(16)), y = y.id = N, ot(s, a.responseState, y), Nn(a, s, d);
    } else if (y.byteSize > a.progressiveChunkSize) y.rootSegmentID = a.nextSegmentId++, a.completedBoundaries.push(y), ot(s, a.responseState, y.id), Nn(a, s, d);
    else {
      if (u(s, Rt), d = y.completedSegments, d.length !== 1) throw Error(t(391));
      Ln(a, s, d[0]);
    }
    return u(s, nt);
  }
  function So(a, s, d) {
    return rr(s, a.responseState, d.formatContext, d.id), Ln(a, s, d), Tt(s, d.formatContext);
  }
  function ko(a, s, d) {
    for (var y = d.completedSegments, N = 0; N < y.length; N++) xo(a, s, d, y[N]);
    if (y.length = 0, a = a.responseState, y = d.id, d = d.rootSegmentID, c(s, a.startInlineScript), a.sentCompleteBoundaryFunction ? c(s, q) : (a.sentCompleteBoundaryFunction = !0, c(s, _)), y === null) throw Error(t(395));
    return d = w(d.toString(16)), c(s, y), c(s, ye), c(s, a.segmentPrefix), c(s, d), u(s, Se);
  }
  function xo(a, s, d, y) {
    if (y.status === 2) return !0;
    var N = y.id;
    if (N === -1) {
      if ((y.id = d.rootSegmentID) === -1) throw Error(t(392));
      return So(a, s, y);
    }
    return So(a, s, y), a = a.responseState, c(s, a.startInlineScript), a.sentCompleteSegmentFunction ? c(s, ar) : (a.sentCompleteSegmentFunction = !0, c(s, nr)), c(s, a.segmentPrefix), N = w(N.toString(16)), c(s, N), c(s, h), c(s, a.placeholderPrefix), c(s, N), u(s, b);
  }
  function da(a, s) {
    r = new Uint8Array(512), o = 0;
    try {
      var d = a.completedRootSegment;
      if (d !== null && a.pendingRootTasks === 0) {
        Ln(a, s, d), a.completedRootSegment = null;
        var y = a.responseState.bootstrapChunks;
        for (d = 0; d < y.length - 1; d++) c(s, y[d]);
        d < y.length && u(s, y[d]);
      }
      var N = a.clientRenderedBoundaries, R;
      for (R = 0; R < N.length; R++) {
        var z = N[R];
        y = s;
        var X = a.responseState, fe = z.id, Te = z.errorDigest, xe = z.errorMessage, Ze = z.errorComponentStack;
        if (c(y, X.startInlineScript), X.sentClientRenderFunction ? c(y, we) : (X.sentClientRenderFunction = !0, c(
          y,
          Pe
        )), fe === null) throw Error(t(395));
        c(y, fe), c(y, Je), (Te || xe || Ze) && (c(y, tt), c(y, w($t(Te || "")))), (xe || Ze) && (c(y, tt), c(y, w($t(xe || "")))), Ze && (c(y, tt), c(y, w($t(Ze)))), u(y, qe);
      }
      N.splice(0, R);
      var Ot = a.completedBoundaries;
      for (R = 0; R < Ot.length; R++) ko(a, s, Ot[R]);
      Ot.splice(0, R), g(s), r = new Uint8Array(512), o = 0;
      var Wt = a.partialBoundaries;
      for (R = 0; R < Wt.length; R++) {
        var Ht = Wt[R];
        e: {
          N = a, z = s;
          var In = Ht.completedSegments;
          for (X = 0; X < In.length; X++) if (!xo(
            N,
            z,
            Ht,
            In[X]
          )) {
            X++, In.splice(0, X);
            var Co = !1;
            break e;
          }
          In.splice(0, X), Co = !0;
        }
        if (!Co) {
          a.destination = null, R++, Wt.splice(0, R);
          return;
        }
      }
      Wt.splice(0, R);
      var fa = a.completedBoundaries;
      for (R = 0; R < fa.length; R++) ko(a, s, fa[R]);
      fa.splice(0, R);
    } finally {
      g(s), a.allPendingTasks === 0 && a.pingedTasks.length === 0 && a.clientRenderedBoundaries.length === 0 && a.completedBoundaries.length === 0 && s.close();
    }
  }
  function _o(a, s) {
    try {
      var d = a.abortableTasks;
      d.forEach(function(y) {
        return bo(y, a, s);
      }), d.clear(), a.destination !== null && da(a, a.destination);
    } catch (y) {
      Gr(a, y), On(a, y);
    }
  }
  return zn.renderToReadableStream = function(a, s) {
    return new Promise(function(d, y) {
      var N, R, z = new Promise(function(xe, Ze) {
        R = xe, N = Ze;
      }), X = Ks(a, Ae(s ? s.identifierPrefix : void 0, s ? s.nonce : void 0, s ? s.bootstrapScriptContent : void 0, s ? s.bootstrapScripts : void 0, s ? s.bootstrapModules : void 0), Ke(s ? s.namespaceURI : void 0), s ? s.progressiveChunkSize : void 0, s ? s.onError : void 0, R, function() {
        var xe = new ReadableStream({ type: "bytes", pull: function(Ze) {
          if (X.status === 1) X.status = 2, I(Ze, X.fatalError);
          else if (X.status !== 2 && X.destination === null) {
            X.destination = Ze;
            try {
              da(X, Ze);
            } catch (Ot) {
              Gr(X, Ot), On(X, Ot);
            }
          }
        }, cancel: function() {
          _o(X);
        } }, { highWaterMark: 0 });
        xe.allReady = z, d(xe);
      }, function(xe) {
        z.catch(function() {
        }), y(xe);
      }, N);
      if (s && s.signal) {
        var fe = s.signal, Te = function() {
          _o(X, fe.reason), fe.removeEventListener("abort", Te);
        };
        fe.addEventListener("abort", Te);
      }
      wo(X);
    });
  }, zn.version = "18.3.1", zn;
}
var Mr, ts;
Mr = cc(), ts = uc();
Mr.version;
Mr.renderToString;
Mr.renderToStaticMarkup;
Mr.renderToNodeStream;
Mr.renderToStaticNodeStream;
ts.renderToReadableStream;
const dc = "staticMarkup";
function rs() {
  const e = ol().indexOf(dc) > -1 ? !0 : void 0;
  return {
    isBootstrap: e,
    isReact: e ? void 0 : !0
  };
}
const jr = ({ gaData: e, prefix: t = "", children: r }) => {
  const { isReact: o } = rs(), { onClick: c, ...u } = r.props;
  if (o)
    return dt.cloneElement(r, {
      ...u,
      onClick: (w) => (ic(e), c ? c(w) : !0)
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
}, fc = Ga(
  ({
    id: e,
    parentId: t,
    /** @type {AccordionCard} */
    item: r,
    openCard: o,
    onClick: c,
    gaData: u
  }, g) => {
    var S, w, m, I, T, $;
    const Y = e === o, A = Y ? "open" : "close";
    return /* @__PURE__ */ W.jsxs(
      "div",
      {
        ref: g,
        className: ur("accordion-item", "mt-3", {
          [`accordion-item-${r.color}`]: r.color,
          "accordion-header-icon": (S = r.content) == null ? void 0 : S.icon
        }),
        children: [
          /* @__PURE__ */ W.jsx("div", { className: "accordion-header", children: /* @__PURE__ */ W.jsx("h4", { children: /* @__PURE__ */ W.jsx(
            jr,
            {
              gaData: {
                ...u,
                action: A,
                text: r.content.header
              },
              children: /* @__PURE__ */ W.jsxs(
                "button",
                {
                  "data-testid": "accordion-opener",
                  className: ur({ collapsed: !Y }),
                  "data-bs-toggle": "collapse",
                  href: `#card-body-${e}`,
                  type: "button",
                  "aria-expanded": Y,
                  "aria-controls": `card-body-${e}`,
                  onClick: (k) => c(k, e),
                  children: [
                    (w = r.content) != null && w.icon ? /* @__PURE__ */ W.jsxs("span", { className: "accordion-icon", children: [
                      /* @__PURE__ */ W.jsx(
                        "i",
                        {
                          className: `${(m = r.content.icon) == null ? void 0 : m[0]} fa-${(I = r.content.icon) == null ? void 0 : I[1]} me-2`
                        }
                      ),
                      r.content.header
                    ] }) : (T = r.content) == null ? void 0 : T.header,
                    /* @__PURE__ */ W.jsx("i", { className: "fas fa-chevron-up" })
                  ]
                }
              )
            }
          ) }) }),
          (($ = r.content) == null ? void 0 : $.body) && /* @__PURE__ */ W.jsx(
            "div",
            {
              "data-bs-parent": `#${t}`,
              id: `card-body-${e}`,
              className: ur("collapse", { show: Y }),
              children: /* @__PURE__ */ W.jsx(
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
fc.propTypes = {
  id: i.number,
  // @ts-ignore a technical type mismatch between PropTypes definition and your TypeScript
  item: es,
  parentId: i.string,
  openCard: i.number,
  onClick: i.func,
  gaData: i.object
};
i.arrayOf(es).isRequired, i.number;
const pc = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, ns = ({
  label: e = "",
  cardTitle: t = "",
  gaData: r,
  ariaLabel: o,
  block: c,
  color: u = "gray",
  disabled: g,
  element: S = "button",
  href: w,
  icon: m,
  innerRef: I,
  onClick: T,
  size: $ = "default",
  classes: Y,
  target: A = "_self",
  ...k
}) => {
  const D = ur("btn", {
    [`btn-${u}`]: !0,
    "btn-md": $ === "small",
    "btn-sm": $ === "xsmall",
    "btn-block": c,
    disabled: g
  });
  let V = S;
  return w && S === "button" && (V = "a"), /* @__PURE__ */ W.jsx(
    jr,
    {
      gaData: {
        ...pc,
        section: t,
        // @deprecated - remove at some point
        ...r,
        text: e
      },
      children: /* @__PURE__ */ W.jsxs(
        V,
        {
          type: V === "button" && T ? "button" : void 0,
          ...k,
          className: ur(Y) || D,
          href: w,
          ref: I,
          onClick: T,
          "aria-label": o,
          target: V === "a" ? A : null,
          children: [
            m && /* @__PURE__ */ W.jsx("i", { className: `${m == null ? void 0 : m[0]} fa-${m == null ? void 0 : m[1]} me-1` }),
            e
          ]
        }
      )
    }
  );
};
ns.propTypes = {
  /**
   * Button label
   */
  label: i.string,
  /**
   * @deprecated
   * Card title, use `gaData.section` instead
   */
  cardTitle: i.string,
  /**
   * Google Analytics event data
   */
  gaData: Xa,
  /**
    ARIA label for accessibility
  */
  ariaLabel: i.string,
  /**
    Render button as a block-button?
  */
  block: i.bool,
  /**
    Button background color
  */
  color: i.oneOf(["gold", "maroon", "gray", "dark"]),
  /**
    Disable the button?
  */
  disabled: i.bool,
  /**
    Pass in a Component to override default button element.
    For example: react-router Link
  */
  element: i.oneOfType([
    i.func,
    i.string,
    i.shape({ $$typeof: i.symbol, render: i.func }),
    i.arrayOf(
      i.oneOfType([
        i.func,
        i.string,
        i.shape({ $$typeof: i.symbol, render: i.func })
      ])
    )
  ]),
  /**
    Link target url; will cause button to be rendered as `<a>` link
  */
  href: i.string,
  /**
    React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  */
  icon: i.arrayOf(i.string),
  /**
   * ref will only get you a reference to the Button component, use innerRef to
   * get a reference to the DOM element (for things like focus management).
   */
  innerRef: i.oneOfType([
    i.object,
    i.func,
    i.string
  ]),
  /**
    Event handler function for `<button>`
  */
  onClick: i.func,
  /**
    Button size
  */
  size: i.oneOf(["default", "small", "xsmall"]),
  /**
    Classes to add to button
  */
  classes: i.arrayOf(i.string),
  /**
   Link target type
   */
  target: i.oneOf(["_blank", "_self", "_top", "_parent"])
};
var as = { exports: {} }, Be = {}, Ko;
function hc() {
  if (Ko) return Be;
  Ko = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), u = Symbol.for("react.consumer"), g = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), I = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), Y = Symbol.for("react.client.reference");
  function A(k) {
    if (typeof k == "object" && k !== null) {
      var D = k.$$typeof;
      switch (D) {
        case e:
          switch (k = k.type, k) {
            case r:
            case c:
            case o:
            case w:
            case m:
              return k;
            default:
              switch (k = k && k.$$typeof, k) {
                case g:
                case S:
                case T:
                case I:
                  return k;
                case u:
                  return k;
                default:
                  return D;
              }
          }
        case t:
          return D;
      }
    }
  }
  return Be.ContextConsumer = u, Be.ContextProvider = g, Be.Element = e, Be.ForwardRef = S, Be.Fragment = r, Be.Lazy = T, Be.Memo = I, Be.Portal = t, Be.Profiler = c, Be.StrictMode = o, Be.Suspense = w, Be.SuspenseList = m, Be.isContextConsumer = function(k) {
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
    return A(k) === T;
  }, Be.isMemo = function(k) {
    return A(k) === I;
  }, Be.isPortal = function(k) {
    return A(k) === t;
  }, Be.isProfiler = function(k) {
    return A(k) === c;
  }, Be.isStrictMode = function(k) {
    return A(k) === o;
  }, Be.isSuspense = function(k) {
    return A(k) === w;
  }, Be.isSuspenseList = function(k) {
    return A(k) === m;
  }, Be.isValidElementType = function(k) {
    return typeof k == "string" || typeof k == "function" || k === r || k === c || k === o || k === w || k === m || k === $ || typeof k == "object" && k !== null && (k.$$typeof === T || k.$$typeof === I || k.$$typeof === g || k.$$typeof === u || k.$$typeof === S || k.$$typeof === Y || k.getModuleId !== void 0);
  }, Be.typeOf = A, Be;
}
as.exports = hc();
var os = as.exports;
function mc(e) {
  function t(M, C, F, P, p) {
    for (var re = 0, E = 0, ne = 0, ee = 0, te, B, oe = 0, se = 0, K, he = K = te = 0, Z = 0, le = 0, $e = 0, me = 0, it = F.length, Ge = it - 1, ge, U = "", ae = "", Ye = "", lt = "", Me; Z < it; ) {
      if (B = F.charCodeAt(Z), Z === Ge && E + ee + ne + re !== 0 && (E !== 0 && (B = E === 47 ? 10 : 47), ee = ne = re = 0, it++, Ge++), E + ee + ne + re === 0) {
        if (Z === Ge && (0 < le && (U = U.replace($, "")), 0 < U.trim().length)) {
          switch (B) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              U += F.charAt(Z);
          }
          B = 59;
        }
        switch (B) {
          case 123:
            for (U = U.trim(), te = U.charCodeAt(0), K = 1, me = ++Z; Z < it; ) {
              switch (B = F.charCodeAt(Z)) {
                case 123:
                  K++;
                  break;
                case 125:
                  K--;
                  break;
                case 47:
                  switch (B = F.charCodeAt(Z + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (he = Z + 1; he < Ge; ++he)
                          switch (F.charCodeAt(he)) {
                            case 47:
                              if (B === 42 && F.charCodeAt(he - 1) === 42 && Z + 2 !== he) {
                                Z = he + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (B === 47) {
                                Z = he + 1;
                                break e;
                              }
                          }
                        Z = he;
                      }
                  }
                  break;
                case 91:
                  B++;
                case 40:
                  B++;
                case 34:
                case 39:
                  for (; Z++ < Ge && F.charCodeAt(Z) !== B; )
                    ;
              }
              if (K === 0) break;
              Z++;
            }
            switch (K = F.substring(me, Z), te === 0 && (te = (U = U.replace(T, "").trim()).charCodeAt(0)), te) {
              case 64:
                switch (0 < le && (U = U.replace($, "")), B = U.charCodeAt(1), B) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    le = C;
                    break;
                  default:
                    le = st;
                }
                if (K = t(C, le, K, B, p + 1), me = K.length, 0 < Ae && (le = r(st, U, $e), Me = S(3, K, le, C, Ne, pe, me, B, p, P), U = le.join(""), Me !== void 0 && (me = (K = Me.trim()).length) === 0 && (B = 0, K = "")), 0 < me) switch (B) {
                  case 115:
                    U = U.replace(ce, g);
                  case 100:
                  case 109:
                  case 45:
                    K = U + "{" + K + "}";
                    break;
                  case 107:
                    U = U.replace(G, "$1 $2"), K = U + "{" + K + "}", K = Ee === 1 || Ee === 2 && u("@" + K, 3) ? "@-webkit-" + K + "@" + K : "@" + K;
                    break;
                  default:
                    K = U + K, P === 112 && (K = (ae += K, ""));
                }
                else K = "";
                break;
              default:
                K = t(C, r(C, U, $e), K, P, p + 1);
            }
            Ye += K, K = $e = le = he = te = 0, U = "", B = F.charCodeAt(++Z);
            break;
          case 125:
          case 59:
            if (U = (0 < le ? U.replace($, "") : U).trim(), 1 < (me = U.length)) switch (he === 0 && (te = U.charCodeAt(0), te === 45 || 96 < te && 123 > te) && (me = (U = U.replace(" ", ":")).length), 0 < Ae && (Me = S(1, U, C, M, Ne, pe, ae.length, P, p, P)) !== void 0 && (me = (U = Me.trim()).length) === 0 && (U = "\0\0"), te = U.charCodeAt(0), B = U.charCodeAt(1), te) {
              case 0:
                break;
              case 64:
                if (B === 105 || B === 99) {
                  lt += U + F.charAt(Z);
                  break;
                }
              default:
                U.charCodeAt(me - 1) !== 58 && (ae += c(U, te, B, U.charCodeAt(2)));
            }
            $e = le = he = te = 0, U = "", B = F.charCodeAt(++Z);
        }
      }
      switch (B) {
        case 13:
        case 10:
          E === 47 ? E = 0 : 1 + te === 0 && P !== 107 && 0 < U.length && (le = 1, U += "\0"), 0 < Ae * Ke && S(0, U, C, M, Ne, pe, ae.length, P, p, P), pe = 1, Ne++;
          break;
        case 59:
        case 125:
          if (E + ee + ne + re === 0) {
            pe++;
            break;
          }
        default:
          switch (pe++, ge = F.charAt(Z), B) {
            case 9:
            case 32:
              if (ee + re + E === 0) switch (oe) {
                case 44:
                case 58:
                case 9:
                case 32:
                  ge = "";
                  break;
                default:
                  B !== 32 && (ge = " ");
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
              ee + E + re === 0 && (le = $e = 1, ge = "\f" + ge);
              break;
            case 108:
              if (ee + E + re + Le === 0 && 0 < he) switch (Z - he) {
                case 2:
                  oe === 112 && F.charCodeAt(Z - 3) === 58 && (Le = oe);
                case 8:
                  se === 111 && (Le = se);
              }
              break;
            case 58:
              ee + E + re === 0 && (he = Z);
              break;
            case 44:
              E + ne + ee + re === 0 && (le = 1, ge += "\r");
              break;
            case 34:
            case 39:
              E === 0 && (ee = ee === B ? 0 : ee === 0 ? B : ee);
              break;
            case 91:
              ee + E + ne === 0 && re++;
              break;
            case 93:
              ee + E + ne === 0 && re--;
              break;
            case 41:
              ee + E + re === 0 && ne--;
              break;
            case 40:
              if (ee + E + re === 0) {
                if (te === 0) switch (2 * oe + 3 * se) {
                  case 533:
                    break;
                  default:
                    te = 1;
                }
                ne++;
              }
              break;
            case 64:
              E + ne + ee + re + he + K === 0 && (K = 1);
              break;
            case 42:
            case 47:
              if (!(0 < ee + re + ne)) switch (E) {
                case 0:
                  switch (2 * B + 3 * F.charCodeAt(Z + 1)) {
                    case 235:
                      E = 47;
                      break;
                    case 220:
                      me = Z, E = 42;
                  }
                  break;
                case 42:
                  B === 47 && oe === 42 && me + 2 !== Z && (F.charCodeAt(me + 2) === 33 && (ae += F.substring(me, Z + 1)), ge = "", E = 0);
              }
          }
          E === 0 && (U += ge);
      }
      se = oe, oe = B, Z++;
    }
    if (me = ae.length, 0 < me) {
      if (le = C, 0 < Ae && (Me = S(2, ae, le, M, Ne, pe, me, P, p, P), Me !== void 0 && (ae = Me).length === 0)) return lt + ae + Ye;
      if (ae = le.join(",") + "{" + ae + "}", Ee * Le !== 0) {
        switch (Ee !== 2 || u(ae, 2) || (Le = 0), Le) {
          case 111:
            ae = ae.replace(H, ":-moz-$1") + ae;
            break;
          case 112:
            ae = ae.replace(J, "::-webkit-input-$1") + ae.replace(J, "::-moz-$1") + ae.replace(J, ":-ms-input-$1") + ae;
        }
        Le = 0;
      }
    }
    return lt + ae + Ye;
  }
  function r(M, C, F) {
    var P = C.trim().split(D);
    C = P;
    var p = P.length, re = M.length;
    switch (re) {
      case 0:
      case 1:
        var E = 0;
        for (M = re === 0 ? "" : M[0] + " "; E < p; ++E)
          C[E] = o(M, C[E], F).trim();
        break;
      default:
        var ne = E = 0;
        for (C = []; E < p; ++E)
          for (var ee = 0; ee < re; ++ee)
            C[ne++] = o(M[ee] + " ", P[E], F).trim();
    }
    return C;
  }
  function o(M, C, F) {
    var P = C.charCodeAt(0);
    switch (33 > P && (P = (C = C.trim()).charCodeAt(0)), P) {
      case 38:
        return C.replace(V, "$1" + M.trim());
      case 58:
        return M.trim() + C.replace(V, "$1" + M.trim());
      default:
        if (0 < 1 * F && 0 < C.indexOf("\f")) return C.replace(V, (M.charCodeAt(0) === 58 ? "" : "$1") + M.trim());
    }
    return M + C;
  }
  function c(M, C, F, P) {
    var p = M + ";", re = 2 * C + 3 * F + 4 * P;
    if (re === 944) {
      M = p.indexOf(":", 9) + 1;
      var E = p.substring(M, p.length - 1).trim();
      return E = p.substring(0, M).trim() + E + ";", Ee === 1 || Ee === 2 && u(E, 1) ? "-webkit-" + E + E : E;
    }
    if (Ee === 0 || Ee === 2 && !u(p, 1)) return p;
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
        return E = p.substring(p.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + E + "-webkit-" + p + "-ms-flex-pack" + E + p;
      case 1005:
        return A.test(p) ? p.replace(Y, ":-webkit-") + p.replace(Y, ":-moz-") + p : p;
      case 1e3:
        switch (E = p.substring(13).trim(), C = E.indexOf("-") + 1, E.charCodeAt(0) + E.charCodeAt(C)) {
          case 226:
            E = p.replace(x, "tb");
            break;
          case 232:
            E = p.replace(x, "tb-rl");
            break;
          case 220:
            E = p.replace(x, "lr");
            break;
          default:
            return p;
        }
        return "-webkit-" + p + "-ms-" + E + p;
      case 1017:
        if (p.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (C = (p = M).length - 10, E = (p.charCodeAt(C) === 33 ? p.substring(0, C) : p).substring(M.indexOf(":", 7) + 1).trim(), re = E.charCodeAt(0) + (E.charCodeAt(7) | 0)) {
          case 203:
            if (111 > E.charCodeAt(8)) break;
          case 115:
            p = p.replace(E, "-webkit-" + E) + ";" + p;
            break;
          case 207:
          case 102:
            p = p.replace(E, "-webkit-" + (102 < re ? "inline-" : "") + "box") + ";" + p.replace(E, "-webkit-" + E) + ";" + p.replace(E, "-ms-" + E + "box") + ";" + p;
        }
        return p + ";";
      case 938:
        if (p.charCodeAt(5) === 45) switch (p.charCodeAt(6)) {
          case 105:
            return E = p.replace("-items", ""), "-webkit-" + p + "-webkit-box-" + E + "-ms-flex-" + E + p;
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
        if (Ve.test(M) === !0) return (E = M.substring(M.indexOf(":") + 1)).charCodeAt(0) === 115 ? c(M.replace("stretch", "fill-available"), C, F, P).replace(":fill-available", ":stretch") : p.replace(E, "-webkit-" + E) + p.replace(E, "-moz-" + E.replace("fill-", "")) + p;
        break;
      case 962:
        if (p = "-webkit-" + p + (p.charCodeAt(5) === 102 ? "-ms-" + p : "") + p, F + P === 211 && p.charCodeAt(13) === 105 && 0 < p.indexOf("transform", 10)) return p.substring(0, p.indexOf(";", 27) + 1).replace(k, "$1-webkit-$2") + p;
    }
    return p;
  }
  function u(M, C) {
    var F = M.indexOf(C === 1 ? ":" : "{"), P = M.substring(0, C !== 3 ? F : 10);
    return F = M.substring(F + 1, M.length - 1), Ue(C !== 2 ? P : P.replace(De, "$1"), F, C);
  }
  function g(M, C) {
    var F = c(C, C.charCodeAt(0), C.charCodeAt(1), C.charCodeAt(2));
    return F !== C + ";" ? F.replace(_e, " or ($1)").substring(4) : "(" + C + ")";
  }
  function S(M, C, F, P, p, re, E, ne, ee, te) {
    for (var B = 0, oe = C, se; B < Ae; ++B)
      switch (se = Fe[B].call(I, M, oe, F, P, p, re, E, ne, ee, te)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          oe = se;
      }
    if (oe !== C) return oe;
  }
  function w(M) {
    switch (M) {
      case void 0:
      case null:
        Ae = Fe.length = 0;
        break;
      default:
        if (typeof M == "function") Fe[Ae++] = M;
        else if (typeof M == "object") for (var C = 0, F = M.length; C < F; ++C)
          w(M[C]);
        else Ke = !!M | 0;
    }
    return w;
  }
  function m(M) {
    return M = M.prefix, M !== void 0 && (Ue = null, M ? typeof M != "function" ? Ee = 1 : (Ee = 2, Ue = M) : Ee = 0), m;
  }
  function I(M, C) {
    var F = M;
    if (33 > F.charCodeAt(0) && (F = F.trim()), ie = F, F = [ie], 0 < Ae) {
      var P = S(-1, C, F, F, Ne, pe, 0, 0, 0, 0);
      P !== void 0 && typeof P == "string" && (C = P);
    }
    var p = t(st, F, C, 0, 0);
    return 0 < Ae && (P = S(-2, p, F, F, Ne, pe, p.length, 0, 0, 0), P !== void 0 && (p = P)), ie = "", Le = 0, pe = Ne = 1, p;
  }
  var T = /^\0+/g, $ = /[\0\r\f]/g, Y = /: */g, A = /zoo|gra/, k = /([,: ])(transform)/g, D = /,\r+?/g, V = /([\t\r\n ])*\f?&/g, G = /@(k\w+)\s*(\S*)\s*/, J = /::(place)/g, H = /:(read-only)/g, x = /[svh]\w+-[tblr]{2}/, ce = /\(\s*(.*)\s*\)/g, _e = /([\s\S]*?);/g, Ie = /-self|flex-/g, De = /[^]*?(:[rp][el]a[\w-]+)[^]*/, Ve = /stretch|:\s*\w+\-(?:conte|avail)/, ue = /([^-])(image-set\()/, pe = 1, Ne = 1, Le = 0, Ee = 1, st = [], Fe = [], Ae = 0, Ue = null, Ke = 0, ie = "";
  return I.use = w, I.set = m, e !== void 0 && m(e), I;
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
var bc = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, ei = /* @__PURE__ */ yc(
  function(e) {
    return bc.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), is = { exports: {} }, je = {}, ti;
function vc() {
  if (ti) return je;
  ti = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, c = e ? Symbol.for("react.strict_mode") : 60108, u = e ? Symbol.for("react.profiler") : 60114, g = e ? Symbol.for("react.provider") : 60109, S = e ? Symbol.for("react.context") : 60110, w = e ? Symbol.for("react.async_mode") : 60111, m = e ? Symbol.for("react.concurrent_mode") : 60111, I = e ? Symbol.for("react.forward_ref") : 60112, T = e ? Symbol.for("react.suspense") : 60113, $ = e ? Symbol.for("react.suspense_list") : 60120, Y = e ? Symbol.for("react.memo") : 60115, A = e ? Symbol.for("react.lazy") : 60116, k = e ? Symbol.for("react.block") : 60121, D = e ? Symbol.for("react.fundamental") : 60117, V = e ? Symbol.for("react.responder") : 60118, G = e ? Symbol.for("react.scope") : 60119;
  function J(x) {
    if (typeof x == "object" && x !== null) {
      var ce = x.$$typeof;
      switch (ce) {
        case t:
          switch (x = x.type, x) {
            case w:
            case m:
            case o:
            case u:
            case c:
            case T:
              return x;
            default:
              switch (x = x && x.$$typeof, x) {
                case S:
                case I:
                case A:
                case Y:
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
    return J(x) === m;
  }
  return je.AsyncMode = w, je.ConcurrentMode = m, je.ContextConsumer = S, je.ContextProvider = g, je.Element = t, je.ForwardRef = I, je.Fragment = o, je.Lazy = A, je.Memo = Y, je.Portal = r, je.Profiler = u, je.StrictMode = c, je.Suspense = T, je.isAsyncMode = function(x) {
    return H(x) || J(x) === w;
  }, je.isConcurrentMode = H, je.isContextConsumer = function(x) {
    return J(x) === S;
  }, je.isContextProvider = function(x) {
    return J(x) === g;
  }, je.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === t;
  }, je.isForwardRef = function(x) {
    return J(x) === I;
  }, je.isFragment = function(x) {
    return J(x) === o;
  }, je.isLazy = function(x) {
    return J(x) === A;
  }, je.isMemo = function(x) {
    return J(x) === Y;
  }, je.isPortal = function(x) {
    return J(x) === r;
  }, je.isProfiler = function(x) {
    return J(x) === u;
  }, je.isStrictMode = function(x) {
    return J(x) === c;
  }, je.isSuspense = function(x) {
    return J(x) === T;
  }, je.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === o || x === m || x === u || x === c || x === T || x === $ || typeof x == "object" && x !== null && (x.$$typeof === A || x.$$typeof === Y || x.$$typeof === g || x.$$typeof === S || x.$$typeof === I || x.$$typeof === D || x.$$typeof === V || x.$$typeof === G || x.$$typeof === k);
  }, je.typeOf = J, je;
}
is.exports = vc();
var wc = is.exports, Ja = wc, Sc = {
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
}, ss = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Qa = {};
Qa[Ja.ForwardRef] = xc;
Qa[Ja.Memo] = ss;
function ri(e) {
  return Ja.isMemo(e) ? ss : Qa[e.$$typeof] || Sc;
}
var _c = Object.defineProperty, Cc = Object.getOwnPropertyNames, ni = Object.getOwnPropertySymbols, Tc = Object.getOwnPropertyDescriptor, Ec = Object.getPrototypeOf, ai = Object.prototype;
function ls(e, t, r) {
  if (typeof t != "string") {
    if (ai) {
      var o = Ec(t);
      o && o !== ai && ls(e, o, r);
    }
    var c = Cc(t);
    ni && (c = c.concat(ni(t)));
    for (var u = ri(e), g = ri(t), S = 0; S < c.length; ++S) {
      var w = c[S];
      if (!kc[w] && !(r && r[w]) && !(g && g[w]) && !(u && u[w])) {
        var m = Tc(t, w);
        try {
          _c(e, w, m);
        } catch {
        }
      }
    }
  }
  return e;
}
var Ac = ls;
const Oc = /* @__PURE__ */ Ya(Ac);
var pt = { env: { NODE_ENV: "production" } };
function lr() {
  return (lr = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }).apply(this, arguments);
}
var oi = function(e, t) {
  for (var r = [e[0]], o = 0, c = t.length; o < c; o += 1) r.push(t[o], e[o + 1]);
  return r;
}, Fa = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !os.typeOf(e);
}, Yn = Object.freeze([]), gr = Object.freeze({});
function fn(e) {
  return typeof e == "function";
}
function ii(e) {
  return e.displayName || e.name || "Component";
}
function Za(e) {
  return e && typeof e.styledComponentId == "string";
}
var Ir = typeof pt < "u" && pt.env !== void 0 && (pt.env.REACT_APP_SC_ATTR || pt.env.SC_ATTR) || "data-styled", Ka = typeof window < "u" && "HTMLElement" in window, Rc = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof pt < "u" && pt.env !== void 0 && (pt.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && pt.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? pt.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && pt.env.REACT_APP_SC_DISABLE_SPEEDY : pt.env.SC_DISABLE_SPEEDY !== void 0 && pt.env.SC_DISABLE_SPEEDY !== "" ? pt.env.SC_DISABLE_SPEEDY !== "false" && pt.env.SC_DISABLE_SPEEDY : pt.env.NODE_ENV !== "production"));
function gn(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) r[o - 1] = arguments[o];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : ""));
}
var Nc = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(r) {
    for (var o = 0, c = 0; c < r; c++) o += this.groupSizes[c];
    return o;
  }, t.insertRules = function(r, o) {
    if (r >= this.groupSizes.length) {
      for (var c = this.groupSizes, u = c.length, g = u; r >= g; ) (g <<= 1) < 0 && gn(16, "" + r);
      this.groupSizes = new Uint32Array(g), this.groupSizes.set(c), this.length = g;
      for (var S = u; S < g; S++) this.groupSizes[S] = 0;
    }
    for (var w = this.indexOfGroup(r + 1), m = 0, I = o.length; m < I; m++) this.tag.insertRule(w, o[m]) && (this.groupSizes[r]++, w++);
  }, t.clearGroup = function(r) {
    if (r < this.length) {
      var o = this.groupSizes[r], c = this.indexOfGroup(r), u = c + o;
      this.groupSizes[r] = 0;
      for (var g = c; g < u; g++) this.tag.deleteRule(c);
    }
  }, t.getGroup = function(r) {
    var o = "";
    if (r >= this.length || this.groupSizes[r] === 0) return o;
    for (var c = this.groupSizes[r], u = this.indexOfGroup(r), g = u + c, S = u; S < g; S++) o += this.tag.getRule(S) + `/*!sc*/
`;
    return o;
  }, e;
}(), qn = /* @__PURE__ */ new Map(), Xn = /* @__PURE__ */ new Map(), ln = 1, $n = function(e) {
  if (qn.has(e)) return qn.get(e);
  for (; Xn.has(ln); ) ln++;
  var t = ln++;
  return qn.set(e, t), Xn.set(t, e), t;
}, Lc = function(e) {
  return Xn.get(e);
}, Ic = function(e, t) {
  t >= ln && (ln = t + 1), qn.set(e, t), Xn.set(t, e);
}, Pc = "style[" + Ir + '][data-styled-version="5.3.11"]', Dc = new RegExp("^" + Ir + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Fc = function(e, t, r) {
  for (var o, c = r.split(","), u = 0, g = c.length; u < g; u++) (o = c[u]) && e.registerName(t, o);
}, Mc = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), o = [], c = 0, u = r.length; c < u; c++) {
    var g = r[c].trim();
    if (g) {
      var S = g.match(Dc);
      if (S) {
        var w = 0 | parseInt(S[1], 10), m = S[2];
        w !== 0 && (Ic(m, w), Fc(e, m, S[3]), e.getTag().insertRules(w, o)), o.length = 0;
      } else o.push(g);
    }
  }
}, jc = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, cs = function(e) {
  var t = document.head, r = e || t, o = document.createElement("style"), c = function(S) {
    for (var w = S.childNodes, m = w.length; m >= 0; m--) {
      var I = w[m];
      if (I && I.nodeType === 1 && I.hasAttribute(Ir)) return I;
    }
  }(r), u = c !== void 0 ? c.nextSibling : null;
  o.setAttribute(Ir, "active"), o.setAttribute("data-styled-version", "5.3.11");
  var g = jc();
  return g && o.setAttribute("nonce", g), r.insertBefore(o, u), o;
}, zc = function() {
  function e(r) {
    var o = this.element = cs(r);
    o.appendChild(document.createTextNode("")), this.sheet = function(c) {
      if (c.sheet) return c.sheet;
      for (var u = document.styleSheets, g = 0, S = u.length; g < S; g++) {
        var w = u[g];
        if (w.ownerNode === c) return w;
      }
      gn(17);
    }(o), this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, o) {
    try {
      return this.sheet.insertRule(o, r), this.length++, !0;
    } catch {
      return !1;
    }
  }, t.deleteRule = function(r) {
    this.sheet.deleteRule(r), this.length--;
  }, t.getRule = function(r) {
    var o = this.sheet.cssRules[r];
    return o !== void 0 && typeof o.cssText == "string" ? o.cssText : "";
  }, e;
}(), $c = function() {
  function e(r) {
    var o = this.element = cs(r);
    this.nodes = o.childNodes, this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, o) {
    if (r <= this.length && r >= 0) {
      var c = document.createTextNode(o), u = this.nodes[r];
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
  return t.insertRule = function(r, o) {
    return r <= this.length && (this.rules.splice(r, 0, o), this.length++, !0);
  }, t.deleteRule = function(r) {
    this.rules.splice(r, 1), this.length--;
  }, t.getRule = function(r) {
    return r < this.length ? this.rules[r] : "";
  }, e;
}(), si = Ka, Bc = { isServer: !Ka, useCSSOMInjection: !Rc }, us = function() {
  function e(r, o, c) {
    r === void 0 && (r = gr), o === void 0 && (o = {}), this.options = lr({}, Bc, {}, r), this.gs = o, this.names = new Map(c), this.server = !!r.isServer, !this.server && Ka && si && (si = !1, function(u) {
      for (var g = document.querySelectorAll(Pc), S = 0, w = g.length; S < w; S++) {
        var m = g[S];
        m && m.getAttribute(Ir) !== "active" && (Mc(u, m), m.parentNode && m.parentNode.removeChild(m));
      }
    }(this));
  }
  e.registerId = function(r) {
    return $n(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, o) {
    return o === void 0 && (o = !0), new e(lr({}, this.options, {}, r), this.gs, o && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (c = (o = this.options).isServer, u = o.useCSSOMInjection, g = o.target, r = c ? new Uc(g) : u ? new zc(g) : new $c(g), new Nc(r)));
    var r, o, c, u, g;
  }, t.hasNameForId = function(r, o) {
    return this.names.has(r) && this.names.get(r).has(o);
  }, t.registerName = function(r, o) {
    if ($n(r), this.names.has(r)) this.names.get(r).add(o);
    else {
      var c = /* @__PURE__ */ new Set();
      c.add(o), this.names.set(r, c);
    }
  }, t.insertRules = function(r, o, c) {
    this.registerName(r, o), this.getTag().insertRules($n(r), c);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup($n(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var o = r.getTag(), c = o.length, u = "", g = 0; g < c; g++) {
        var S = Lc(g);
        if (S !== void 0) {
          var w = r.names.get(S), m = o.getGroup(g);
          if (w && m && w.size) {
            var I = Ir + ".g" + g + '[id="' + S + '"]', T = "";
            w !== void 0 && w.forEach(function($) {
              $.length > 0 && (T += $ + ",");
            }), u += "" + m + I + '{content:"' + T + `"}/*!sc*/
`;
          }
        }
      }
      return u;
    }(this);
  }, e;
}(), Wc = /(a)(d)/gi, li = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Ma(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = li(t % 52) + r;
  return (li(t % 52) + r).replace(Wc, "$1-$2");
}
var Nr = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, ds = function(e) {
  return Nr(5381, e);
};
function Hc(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (fn(r) && !Za(r)) return !1;
  }
  return !0;
}
var Vc = ds("5.3.11"), qc = function() {
  function e(t, r, o) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (o === void 0 || o.isStatic) && Hc(t), this.componentId = r, this.baseHash = Nr(Vc, r), this.baseStyle = o, us.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, o) {
    var c = this.componentId, u = [];
    if (this.baseStyle && u.push(this.baseStyle.generateAndInjectStyles(t, r, o)), this.isStatic && !o.hash) if (this.staticRulesId && r.hasNameForId(c, this.staticRulesId)) u.push(this.staticRulesId);
    else {
      var g = Pr(this.rules, t, r, o).join(""), S = Ma(Nr(this.baseHash, g) >>> 0);
      if (!r.hasNameForId(c, S)) {
        var w = o(g, "." + S, void 0, c);
        r.insertRules(c, S, w);
      }
      u.push(S), this.staticRulesId = S;
    }
    else {
      for (var m = this.rules.length, I = Nr(this.baseHash, o.hash), T = "", $ = 0; $ < m; $++) {
        var Y = this.rules[$];
        if (typeof Y == "string") T += Y;
        else if (Y) {
          var A = Pr(Y, t, r, o), k = Array.isArray(A) ? A.join("") : A;
          I = Nr(I, k + $), T += k;
        }
      }
      if (T) {
        var D = Ma(I >>> 0);
        if (!r.hasNameForId(c, D)) {
          var V = o(T, "." + D, void 0, c);
          r.insertRules(c, D, V);
        }
        u.push(D);
      }
    }
    return u.join(" ");
  }, e;
}(), Gc = /^\s*\/\/.*$/gm, Yc = [":", "[", ".", "#"];
function Xc(e) {
  var t, r, o, c, u = gr, g = u.options, S = g === void 0 ? gr : g, w = u.plugins, m = w === void 0 ? Yn : w, I = new mc(S), T = [], $ = /* @__PURE__ */ function(k) {
    function D(V) {
      if (V) try {
        k(V + "}");
      } catch {
      }
    }
    return function(V, G, J, H, x, ce, _e, Ie, De, Ve) {
      switch (V) {
        case 1:
          if (De === 0 && G.charCodeAt(0) === 64) return k(G + ";"), "";
          break;
        case 2:
          if (Ie === 0) return G + "/*|*/";
          break;
        case 3:
          switch (Ie) {
            case 102:
            case 112:
              return k(J[0] + G), "";
            default:
              return G + (Ve === 0 ? "/*|*/" : "");
          }
        case -2:
          G.split("/*|*/}").forEach(D);
      }
    };
  }(function(k) {
    T.push(k);
  }), Y = function(k, D, V) {
    return D === 0 && Yc.indexOf(V[r.length]) !== -1 || V.match(c) ? k : "." + t;
  };
  function A(k, D, V, G) {
    G === void 0 && (G = "&");
    var J = k.replace(Gc, ""), H = D && V ? V + " " + D + " { " + J + " }" : J;
    return t = G, r = D, o = new RegExp("\\" + r + "\\b", "g"), c = new RegExp("(\\" + r + "\\b){2,}"), I(V || !D ? "" : D, H);
  }
  return I.use([].concat(m, [function(k, D, V) {
    k === 2 && V.length && V[0].lastIndexOf(r) > 0 && (V[0] = V[0].replace(o, Y));
  }, $, function(k) {
    if (k === -2) {
      var D = T;
      return T = [], D;
    }
  }])), A.hash = m.length ? m.reduce(function(k, D) {
    return D.name || gn(15), Nr(k, D.name);
  }, 5381).toString() : "", A;
}
var fs = dt.createContext();
fs.Consumer;
var ps = dt.createContext(), Jc = (ps.Consumer, new us()), ja = Xc();
function Qc() {
  return br(fs) || Jc;
}
function Zc() {
  return br(ps) || ja;
}
var Kc = function() {
  function e(t, r) {
    var o = this;
    this.inject = function(c, u) {
      u === void 0 && (u = ja);
      var g = o.name + u.hash;
      c.hasNameForId(o.id, g) || c.insertRules(o.id, g, u(o.rules, g, "@keyframes"));
    }, this.toString = function() {
      return gn(12, String(o.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = ja), this.name + t.hash;
  }, e;
}(), eu = /([A-Z])/, tu = /([A-Z])/g, ru = /^ms-/, nu = function(e) {
  return "-" + e.toLowerCase();
};
function ci(e) {
  return eu.test(e) ? e.replace(tu, nu).replace(ru, "-ms-") : e;
}
var ui = function(e) {
  return e == null || e === !1 || e === "";
};
function Pr(e, t, r, o) {
  if (Array.isArray(e)) {
    for (var c, u = [], g = 0, S = e.length; g < S; g += 1) (c = Pr(e[g], t, r, o)) !== "" && (Array.isArray(c) ? u.push.apply(u, c) : u.push(c));
    return u;
  }
  if (ui(e)) return "";
  if (Za(e)) return "." + e.styledComponentId;
  if (fn(e)) {
    if (typeof (m = e) != "function" || m.prototype && m.prototype.isReactComponent || !t) return e;
    var w = e(t);
    return Pr(w, t, r, o);
  }
  var m;
  return e instanceof Kc ? r ? (e.inject(r, o), e.getName(o)) : e : Fa(e) ? function I(T, $) {
    var Y, A, k = [];
    for (var D in T) T.hasOwnProperty(D) && !ui(T[D]) && (Array.isArray(T[D]) && T[D].isCss || fn(T[D]) ? k.push(ci(D) + ":", T[D], ";") : Fa(T[D]) ? k.push.apply(k, I(T[D], D)) : k.push(ci(D) + ": " + (Y = D, (A = T[D]) == null || typeof A == "boolean" || A === "" ? "" : typeof A != "number" || A === 0 || Y in gc || Y.startsWith("--") ? String(A).trim() : A + "px") + ";"));
    return $ ? [$ + " {"].concat(k, ["}"]) : k;
  }(e) : e.toString();
}
var di = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function au(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) r[o - 1] = arguments[o];
  return fn(e) || Fa(e) ? di(Pr(oi(Yn, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : di(Pr(oi(e, r)));
}
var ou = function(e, t, r) {
  return r === void 0 && (r = gr), e.theme !== r.theme && e.theme || t || r.theme;
}, iu = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, su = /(^-|-$)/g;
function Aa(e) {
  return e.replace(iu, "-").replace(su, "");
}
var lu = function(e) {
  return Ma(ds(e) >>> 0);
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
  var o = e[r];
  za(t) && za(o) ? hs(o, t) : e[r] = t;
}
function hs(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) r[o - 1] = arguments[o];
  for (var c = 0, u = r; c < u.length; c++) {
    var g = u[c];
    if (za(g)) for (var S in g) cu(S) && uu(e, g[S], S);
  }
  return e;
}
var ms = dt.createContext();
ms.Consumer;
var Oa = {};
function gs(e, t, r) {
  var o = Za(e), c = !Un(e), u = t.attrs, g = u === void 0 ? Yn : u, S = t.componentId, w = S === void 0 ? function(G, J) {
    var H = typeof G != "string" ? "sc" : Aa(G);
    Oa[H] = (Oa[H] || 0) + 1;
    var x = H + "-" + lu("5.3.11" + H + Oa[H]);
    return J ? J + "-" + x : x;
  }(t.displayName, t.parentComponentId) : S, m = t.displayName, I = m === void 0 ? function(G) {
    return Un(G) ? "styled." + G : "Styled(" + ii(G) + ")";
  }(e) : m, T = t.displayName && t.componentId ? Aa(t.displayName) + "-" + t.componentId : t.componentId || w, $ = o && e.attrs ? Array.prototype.concat(e.attrs, g).filter(Boolean) : g, Y = t.shouldForwardProp;
  o && e.shouldForwardProp && (Y = t.shouldForwardProp ? function(G, J, H) {
    return e.shouldForwardProp(G, J, H) && t.shouldForwardProp(G, J, H);
  } : e.shouldForwardProp);
  var A, k = new qc(r, T, o ? e.componentStyle : void 0), D = k.isStatic && g.length === 0, V = function(G, J) {
    return function(H, x, ce, _e) {
      var Ie = H.attrs, De = H.componentStyle, Ve = H.defaultProps, ue = H.foldedComponentIds, pe = H.shouldForwardProp, Ne = H.styledComponentId, Le = H.target, Ee = function(P, p, re) {
        P === void 0 && (P = gr);
        var E = lr({}, p, { theme: P }), ne = {};
        return re.forEach(function(ee) {
          var te, B, oe, se = ee;
          for (te in fn(se) && (se = se(E)), se) E[te] = ne[te] = te === "className" ? (B = ne[te], oe = se[te], B && oe ? B + " " + oe : B || oe) : se[te];
        }), [E, ne];
      }(ou(x, br(ms), Ve) || gr, x, Ie), st = Ee[0], Fe = Ee[1], Ae = function(P, p, re, E) {
        var ne = Qc(), ee = Zc(), te = p ? P.generateAndInjectStyles(gr, ne, ee) : P.generateAndInjectStyles(re, ne, ee);
        return te;
      }(De, _e, st), Ue = ce, Ke = Fe.$as || x.$as || Fe.as || x.as || Le, ie = Un(Ke), M = Fe !== x ? lr({}, x, {}, Fe) : x, C = {};
      for (var F in M) F[0] !== "$" && F !== "as" && (F === "forwardedAs" ? C.as = M[F] : (pe ? pe(F, ei, Ke) : !ie || ei(F)) && (C[F] = M[F]));
      return x.style && Fe.style !== x.style && (C.style = lr({}, x.style, {}, Fe.style)), C.className = Array.prototype.concat(ue, Ne, Ae !== Ne ? Ae : null, x.className, Fe.className).filter(Boolean).join(" "), C.ref = Ue, Ii(Ke, C);
    }(A, G, J, D);
  };
  return V.displayName = I, (A = dt.forwardRef(V)).attrs = $, A.componentStyle = k, A.displayName = I, A.shouldForwardProp = Y, A.foldedComponentIds = o ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Yn, A.styledComponentId = T, A.target = o ? e.target : e, A.withComponent = function(G) {
    var J = t.componentId, H = function(ce, _e) {
      if (ce == null) return {};
      var Ie, De, Ve = {}, ue = Object.keys(ce);
      for (De = 0; De < ue.length; De++) Ie = ue[De], _e.indexOf(Ie) >= 0 || (Ve[Ie] = ce[Ie]);
      return Ve;
    }(t, ["componentId"]), x = J && J + "-" + (Un(G) ? G : Aa(ii(G)));
    return gs(G, lr({}, H, { attrs: $, componentId: x }), r);
  }, Object.defineProperty(A, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(G) {
    this._foldedDefaultProps = o ? hs({}, e.defaultProps, G) : G;
  } }), Object.defineProperty(A, "toString", { value: function() {
    return "." + A.styledComponentId;
  } }), c && Oc(A, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), A;
}
var Gt = function(e) {
  return function t(r, o, c) {
    if (c === void 0 && (c = gr), !os.isValidElementType(o)) return gn(1, String(o));
    var u = function() {
      return r(o, c, au.apply(void 0, arguments));
    };
    return u.withConfig = function(g) {
      return t(r, o, lr({}, c, {}, g));
    }, u.attrs = function(g) {
      return t(r, o, lr({}, c, { attrs: Array.prototype.concat(c.attrs, g).filter(Boolean) }));
    }, u;
  }(gs, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  Gt[e] = Gt(e);
});
Gt.div`
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
i.arrayOf(
  i.shape({
    text: i.string.isRequired,
    targetIdName: i.string.isRequired,
    icon: i.arrayOf(i.string)
  })
).isRequired, i.string.isRequired, i.bool;
function ra(e) {
  var t = Object.entries(e).filter(function(r) {
    var o = r[1];
    return o != null;
  }).map(function(r) {
    var o = r[0], c = r[1];
    return "".concat(encodeURIComponent(o), "=").concat(encodeURIComponent(String(c)));
  });
  return t.length > 0 ? "?".concat(t.join("&")) : "";
}
var du = /* @__PURE__ */ function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, c) {
      o.__proto__ = c;
    } || function(o, c) {
      for (var u in c) Object.prototype.hasOwnProperty.call(c, u) && (o[u] = c[u]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function o() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (o.prototype = r.prototype, new o());
  };
}(), Or = function() {
  return Or = Object.assign || function(e) {
    for (var t, r = 1, o = arguments.length; r < o; r++) {
      t = arguments[r];
      for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c]);
    }
    return e;
  }, Or.apply(this, arguments);
}, fu = function(e, t, r, o) {
  function c(u) {
    return u instanceof r ? u : new r(function(g) {
      g(u);
    });
  }
  return new (r || (r = Promise))(function(u, g) {
    function S(I) {
      try {
        m(o.next(I));
      } catch (T) {
        g(T);
      }
    }
    function w(I) {
      try {
        m(o.throw(I));
      } catch (T) {
        g(T);
      }
    }
    function m(I) {
      I.done ? u(I.value) : c(I.value).then(S, w);
    }
    m((o = o.apply(e, [])).next());
  });
}, pu = function(e, t) {
  var r = { label: 0, sent: function() {
    if (u[0] & 1) throw u[1];
    return u[1];
  }, trys: [], ops: [] }, o, c, u, g;
  return g = { next: S(0), throw: S(1), return: S(2) }, typeof Symbol == "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function S(m) {
    return function(I) {
      return w([m, I]);
    };
  }
  function w(m) {
    if (o) throw new TypeError("Generator is already executing.");
    for (; r; ) try {
      if (o = 1, c && (u = m[0] & 2 ? c.return : m[0] ? c.throw || ((u = c.return) && u.call(c), 0) : c.next) && !(u = u.call(c, m[1])).done) return u;
      switch (c = 0, u && (m = [m[0] & 2, u.value]), m[0]) {
        case 0:
        case 1:
          u = m;
          break;
        case 4:
          return r.label++, { value: m[1], done: !1 };
        case 5:
          r.label++, c = m[1], m = [0];
          continue;
        case 7:
          m = r.ops.pop(), r.trys.pop();
          continue;
        default:
          if (u = r.trys, !(u = u.length > 0 && u[u.length - 1]) && (m[0] === 6 || m[0] === 2)) {
            r = 0;
            continue;
          }
          if (m[0] === 3 && (!u || m[1] > u[0] && m[1] < u[3])) {
            r.label = m[1];
            break;
          }
          if (m[0] === 6 && r.label < u[1]) {
            r.label = u[1], u = m;
            break;
          }
          if (u && r.label < u[2]) {
            r.label = u[2], r.ops.push(m);
            break;
          }
          u[2] && r.ops.pop(), r.trys.pop();
          continue;
      }
      m = t.call(e, r);
    } catch (I) {
      m = [6, I], c = 0;
    } finally {
      o = u = 0;
    }
    if (m[0] & 5) throw m[1];
    return { value: m[0] ? m[1] : void 0, done: !0 };
  }
}, ys = function(e, t) {
  var r = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var c = 0, o = Object.getOwnPropertySymbols(e); c < o.length; c++)
      t.indexOf(o[c]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[c]) && (r[o[c]] = e[o[c]]);
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
  var o = t.height, c = t.width, u = ys(t, ["height", "width"]), g = Or({ height: o, width: c, location: "no", toolbar: "no", status: "no", directories: "no", menubar: "no", scrollbars: "yes", resizable: "no", centerscreen: "yes", chrome: "yes" }, u), S = window.open(e, "", Object.keys(g).map(function(m) {
    return "".concat(m, "=").concat(g[m]);
  }).join(", "));
  if (r)
    var w = window.setInterval(function() {
      try {
        (S === null || S.closed) && (window.clearInterval(w), r(S));
      } catch (m) {
        console.error(m);
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
      return r.openShareDialog = function(o) {
        var c = r.props, u = c.onShareWindowClose, g = c.windowHeight, S = g === void 0 ? 400 : g, w = c.windowPosition, m = w === void 0 ? "windowCenter" : w, I = c.windowWidth, T = I === void 0 ? 550 : I, $ = Or({ height: S, width: T }, m === "windowCenter" ? mu(T, S) : gu(T, S));
        yu(o, $, u);
      }, r.handleClick = function(o) {
        return fu(r, void 0, void 0, function() {
          var c, u, g, S, w, m, I, T, $, Y;
          return pu(this, function(A) {
            switch (A.label) {
              case 0:
                return c = this.props, u = c.beforeOnClick, g = c.disabled, S = c.networkLink, w = c.onClick, m = c.url, I = c.openShareDialogOnClick, T = c.opts, $ = S(m, T), g ? [
                  2
                  /*return*/
                ] : (o.preventDefault(), u ? (Y = u(), hu(Y) ? [4, Y] : [3, 2]) : [3, 2]);
              case 1:
                A.sent(), A.label = 2;
              case 2:
                return I && this.openShareDialog($), w && w(o, $), [
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
      var o = r.children, c = r.className, u = r.disabled, g = r.disabledStyle, S = r.forwardedRef;
      r.networkLink;
      var w = r.networkName;
      r.onShareWindowClose, r.openShareDialogOnClick, r.opts;
      var m = r.resetButtonStyle, I = r.style;
      r.url, r.windowHeight, r.windowPosition, r.windowWidth;
      var T = ys(r, ["beforeOnClick", "children", "className", "disabled", "disabledStyle", "forwardedRef", "networkLink", "networkName", "onShareWindowClose", "openShareDialogOnClick", "opts", "resetButtonStyle", "style", "url", "windowHeight", "windowPosition", "windowWidth"]), $ = ur("react-share__ShareButton", {
        "react-share__ShareButton--disabled": !!u,
        disabled: !!u
      }, c), Y = Or(Or(m ? { backgroundColor: "transparent", border: "none", padding: 0, font: "inherit", color: "inherit", cursor: "pointer" } : {}, I), u && g);
      return dt.createElement("button", Or({}, T, { "aria-label": T["aria-label"] || w, className: $, onClick: this.handleClick, ref: S, style: Y }), o);
    }, t.defaultProps = {
      disabledStyle: { opacity: 0.6 },
      openShareDialogOnClick: !0,
      resetButtonStyle: !0
    }, t;
  }(tl)
), Jn = function() {
  return Jn = Object.assign || function(e) {
    for (var t, r = 1, o = arguments.length; r < o; r++) {
      t = arguments[r];
      for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c]);
    }
    return e;
  }, Jn.apply(this, arguments);
};
function na(e, t, r, o) {
  function c(u, g) {
    var S = r(u), w = Jn({}, u), m = Object.keys(S);
    return m.forEach(function(I) {
      delete w[I];
    }), dt.createElement(bu, Jn({}, o, w, { forwardedRef: g, networkName: e, networkLink: t, opts: r(u) }));
  }
  return c.displayName = "ShareButton-".concat(e), Ga(c);
}
function vu(e, t) {
  var r = t.subject, o = t.body, c = t.separator;
  return "mailto:" + ra({ subject: r, body: o ? o + c + e : e });
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
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, c) {
      o.__proto__ = c;
    } || function(o, c) {
      for (var u in c) Object.prototype.hasOwnProperty.call(c, u) && (o[u] = c[u]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function o() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (o.prototype = r.prototype, new o());
  };
}(), Su = (
  /** @class */
  function(e) {
    wu(t, e);
    function t(r) {
      var o = e.call(this, r) || this;
      return o.name = "AssertionError", o;
    }
    return t;
  }(Error)
);
function cn(e, t) {
  if (!e)
    throw new Su(t);
}
function ku(e, t) {
  var r = t.quote, o = t.hashtag;
  return cn(e, "facebook.url"), "https://www.facebook.com/sharer/sharer.php" + ra({
    u: e,
    quote: r,
    hashtag: o
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
  var r = t.title, o = t.summary, c = t.source;
  return cn(e, "linkedin.url"), "https://linkedin.com/shareArticle" + ra({ url: e, mini: "true", title: r, summary: o, source: c });
}
na("linkedin", xu, function(e) {
  var t = e.title, r = e.summary, o = e.source;
  return { title: t, summary: r, source: o };
}, {
  windowWidth: 750,
  windowHeight: 600
});
function _u(e, t) {
  var r = t.title, o = t.via, c = t.hashtags, u = c === void 0 ? [] : c, g = t.related, S = g === void 0 ? [] : g;
  return cn(e, "twitter.url"), cn(Array.isArray(u), "twitter.hashtags is not an array"), cn(Array.isArray(S), "twitter.related is not an array"), "https://twitter.com/share" + ra({
    url: e,
    text: r,
    via: o,
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
var Cu = (typeof window > "u" ? "undefined" : $a(window)) === "object" && window.Element || function() {
};
function Tu(e, t, r) {
  if (!(e[t] instanceof Cu))
    return new Error("Invalid prop `" + t + "` supplied to `" + r + "`. Expected prop to be an instance of Element. Validation failed.");
}
i.oneOfType([i.string, i.func, Tu, i.shape({
  current: i.any
})]);
i.oneOfType([i.func, i.string, i.shape({
  $$typeof: i.symbol,
  render: i.func
}), i.arrayOf(i.oneOfType([i.func, i.string, i.shape({
  $$typeof: i.symbol,
  render: i.func
})]))]);
i.string, i.node, i.string, i.object, i.string;
i.bool, i.string, i.object;
Gt.div`
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
Gt.div`
  border-top: 1px solid black;
  h4 {
    margin-top: 0;
  }
  .react-share__ShareButton {
    margin-right: 24px;
  }
`;
i.oneOf(["event", "news"]), i.string.isRequired, i.string.isRequired, i.string.isRequired, i.string.isRequired, i.string, i.string.isRequired, i.string, i.string, i.arrayOf(
  i.shape({
    title: i.string,
    url: i.string,
    active: i.bool
  })
), i.string, i.string, i.string, i.string, i.string, i.string;
i.oneOf(["white", "gray", "black"]), i.arrayOf(i.string), i.oneOfType([
  i.object,
  i.func,
  i.string
]), i.func, i.string, i.oneOf(["large", "small"]), i.string;
const Eu = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, bs = ({
  label: e = "",
  cardTitle: t = "",
  gaData: r,
  ariaLabel: o,
  color: c = "gray",
  disabled: u,
  element: g = "button",
  innerRef: S,
  href: w,
  onClick: m,
  ...I
}) => {
  const T = ur("btn", "btn-tag", {
    "btn-tag-alt-white": c === "white",
    "btn-tag-alt-gray": c === "gray",
    "btn-tag-alt-dark": c === "dark",
    disabled: u
  });
  let $ = g;
  return w && g === "button" && ($ = "a"), /* @__PURE__ */ W.jsx(
    jr,
    {
      gaData: {
        ...Eu,
        section: t,
        // @deprecated - remove at some point
        ...r,
        text: e
      },
      children: /* @__PURE__ */ W.jsx(
        $,
        {
          type: $ === "button" && m ? "button" : void 0,
          ...I,
          className: T,
          href: w,
          ref: S,
          onClick: m,
          "aria-label": o,
          children: e
        }
      )
    }
  );
};
bs.propTypes = {
  /**
    Button tag label
  */
  label: i.string,
  /**
   * @deprecated
   * Card title, use `gaData.section` instead
   */
  cardTitle: i.string,
  /**
   * Google Analytics event data
   */
  gaData: Xa,
  /**
    ARIA label for accessibility
  */
  ariaLabel: i.string,
  /**
    Button background color
  */
  color: i.oneOf(["white", "gray", "dark"]),
  /**
    Disable the button?
  */
  disabled: i.bool,
  /**
    Pass in a Component to override default button element.
    For example: react-router Link
  */
  element: i.oneOfType([
    i.func,
    i.string,
    i.shape({ $$typeof: i.symbol, render: i.func }),
    i.arrayOf(
      i.oneOfType([
        i.func,
        i.string,
        i.shape({ $$typeof: i.symbol, render: i.func })
      ])
    )
  ]),
  /**
    Link target url; will cause button to be rendered as `<a>` link
  */
  href: i.string,
  /**
   * ref will only get you a reference to the Button component, use innerRef to
   * get a reference to the DOM element (for things like focus management).
   */
  innerRef: i.oneOfType([
    i.object,
    i.func,
    i.string
  ]),
  /**
    Event handler function for `<button>`
  */
  onClick: i.func
};
const vs = ({
  src: e,
  alt: t,
  cssClasses: r,
  loading: o = "lazy",
  decoding: c = "async",
  dataTestId: u,
  fetchPriority: g = "auto",
  width: S,
  height: w,
  cardLink: m,
  title: I,
  caption: T,
  captionTitle: $,
  border: Y,
  dropShadow: A
}) => {
  const k = {
    src: e,
    alt: t,
    loading: o,
    decoding: c,
    fetchpriority: g,
    // React attribute bug workaround
    ...(r == null ? void 0 : r.length) > 0 && { className: Ml(r) },
    ...u && { "data-testid": u },
    ...S && { width: S },
    ...w && { height: w }
  }, D = ur("uds-img", {
    borderless: !Y,
    "uds-img-drop-shadow": A
  }), V = (J) => {
    const H = J ? `${k.className} ${J}` : k.className;
    return m ? /* @__PURE__ */ W.jsxs("a", { href: m, children: [
      /* @__PURE__ */ W.jsx("img", { ...k, className: H }),
      /* @__PURE__ */ W.jsx("span", { className: "visually-hidden", children: I })
    ] }) : /* @__PURE__ */ W.jsx("img", { ...k, className: H });
  }, G = () => /* @__PURE__ */ W.jsx("div", { className: D, children: /* @__PURE__ */ W.jsxs("figure", { className: "figure uds-figure", children: [
    V(),
    T && /* @__PURE__ */ W.jsxs("figcaption", { className: "figure-caption uds-figure-caption", children: [
      $ && /* @__PURE__ */ W.jsx("h3", { children: $ }),
      /* @__PURE__ */ W.jsx(
        "span",
        {
          className: "uds-caption-text",
          dangerouslySetInnerHTML: Ar(T)
        }
      )
    ] })
  ] }) });
  return /* @__PURE__ */ W.jsx(W.Fragment, { children: T ? G() : V(D) });
};
vs.propTypes = {
  /**
   * Image source (We keep the same name as in the whole project)
   */
  src: i.string.isRequired,
  /**
   * Image alt text
   */
  alt: i.string.isRequired,
  /**
   * Array classes for the image
   */
  cssClasses: i.arrayOf(i.string),
  /**
   * Image loading mode
   */
  loading: i.oneOf(["lazy", "eager"]),
  /**
   * Image decoding mode
   */
  decoding: i.oneOf(["sync", "async", "auto"]),
  /**
   * Image fetch priority mode
   */
  fetchPriority: i.oneOf(["auto", "high", "low"]),
  /**
   * Width of the image
   */
  width: i.string,
  /**
   * Height of the image
   */
  height: i.string,
  dataTestId: i.string,
  cardLink: i.string,
  title: i.string,
  caption: i.string,
  captionTitle: i.string,
  border: i.bool,
  dropShadow: i.bool
};
const Au = Gt.div`
  &.cards-components a + &.cards-components a {
    margin-left: 5px;
  }
  .card-button {
    column-gap: 1rem;
  }
  .card-button .btn {
    margin: 0;
  }
`, Ou = (e) => /^[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e), Ru = (e) => !e.startsWith("https://") && !e.startsWith("http://") && Ou(e) ? `mailto:${e}` : e, Nu = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, mr = ({
  type: e = "default",
  width: t = "100%",
  horizontal: r = !1,
  image: o,
  imageAltText: c,
  title: u,
  icon: g,
  body: S,
  eventFormat: w = "stack",
  eventLocation: m,
  eventTime: I,
  buttons: T,
  linkLabel: $,
  linkUrl: Y,
  tags: A,
  showBorders: k = !0,
  cardLink: D
}) => /* @__PURE__ */ W.jsx(
  ws,
  {
    type: e,
    width: t,
    horizontal: r,
    image: o,
    imageAltText: c,
    title: u,
    icon: g,
    body: S,
    eventFormat: w,
    eventLocation: m,
    eventTime: I,
    buttons: T,
    linkLabel: $,
    linkUrl: Y,
    tags: A,
    showBorders: k,
    cardLink: D
  }
);
mr.propTypes = {
  /**
   * Type of card
   */
  type: i.oneOf(["default", "degree", "event", "news", "story"]),
  /**
   * Width of card
   */
  width: i.oneOf(["25%", "50%", "75%", "100%"]),
  /**
   * Enable horizontal mode
   */
  horizontal: i.bool,
  /**
   * Card title
   */
  title: i.string.isRequired,
  /**
    React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  */
  icon: i.arrayOf(i.string),
  /**
   * Card body content
   */
  body: i.string,
  /**
   * Event info format
   */
  eventFormat: i.oneOf(["stack", "inline"]),
  /**
   * Location
   */
  eventLocation: i.string,
  /**
   * Event start time
   */
  eventTime: i.string,
  /**
   * Card header image
   */
  image: i.string,
  /**
   * Card header image alt text
   */
  imageAltText: i.string,
  /**
   * Buttons
   */
  buttons: i.arrayOf(
    i.shape({
      ariaLabel: i.string,
      color: i.oneOf(["gold", "maroon", "gray", "dark"]),
      icon: i.arrayOf(i.string),
      href: i.string,
      label: i.string,
      onClick: i.func,
      size: i.oneOf(["default", "small", "xsmall"]),
      target: i.oneOf(["_blank", "_self", "_top", "_parent"])
    })
  ),
  linkLabel: i.string,
  linkUrl: i.string,
  /**
   * Tags
   */
  tags: i.arrayOf(
    i.shape({
      ariaLabel: i.string,
      color: i.oneOf(["white", "gray", "dark"]),
      href: i.string,
      label: i.string,
      onClick: i.func
    })
  ),
  /**
   * Remove card borders
   */
  showBorders: i.bool,
  /**
   * Card link
   */
  cardLink: i.string
};
const ws = ({
  type: e = "default",
  width: t = "100%",
  horizontal: r = !1,
  image: o = "",
  imageAltText: c = "",
  title: u,
  icon: g = void 0,
  body: S = "",
  eventFormat: w = "stack",
  eventLocation: m = "",
  eventTime: I = "",
  buttons: T = void 0,
  linkLabel: $ = void 0,
  linkUrl: Y = void 0,
  tags: A = void 0,
  showBorders: k = !0,
  cardLink: D
}) => {
  const V = ur("card", "cards-components", {
    "card-degree": e === "degree",
    "card-event": e === "event",
    "card-story": e === "story",
    [`w-${t.replace("%", "")}`]: t !== "100%",
    "card-horizontal": r,
    borderless: !k
  });
  return /* @__PURE__ */ W.jsx(W.Fragment, { children: /* @__PURE__ */ W.jsxs(Au, { className: V, "data-testid": "card-container", children: [
    !!o && /* @__PURE__ */ W.jsx(
      vs,
      {
        src: o,
        alt: c,
        dataTestId: "card-image",
        cssClasses: ["card-img-top"],
        cardLink: D,
        title: u
      }
    ),
    !o && g && /* @__PURE__ */ W.jsx(
      "i",
      {
        className: `${g == null ? void 0 : g[0]} fa-${g == null ? void 0 : g[1]} fa-2x card-icon-top`,
        "data-testid": "card-icon"
      }
    ),
    r ? /* @__PURE__ */ W.jsx("div", { className: "card-content-wrapper", children: /* @__PURE__ */ W.jsx(
      Ua,
      {
        type: e,
        body: S,
        eventFormat: w,
        eventLocation: m,
        eventTime: I,
        title: u,
        buttons: T,
        linkLabel: $,
        linkUrl: Y,
        tags: A,
        cardLink: D
      }
    ) }) : /* @__PURE__ */ W.jsx(
      Ua,
      {
        type: e,
        body: S,
        eventFormat: w,
        eventLocation: m,
        eventTime: I,
        title: u,
        buttons: T,
        linkLabel: $,
        linkUrl: Y,
        tags: A,
        cardLink: D
      }
    )
  ] }) });
};
ws.propTypes = {
  type: i.oneOf(["default", "degree", "event", "news", "story"]),
  width: i.oneOf(["25%", "50%", "75%", "100%"]),
  horizontal: i.bool,
  title: i.string.isRequired,
  icon: i.arrayOf(i.string),
  // React Font Awesome icon prefix and name string to be rendered in button label. Ex: ['fab', 'drupal']
  body: i.string,
  eventFormat: i.oneOf(["stack", "inline"]),
  eventLocation: i.string,
  eventTime: i.string,
  image: i.string,
  imageAltText: i.string,
  buttons: i.arrayOf(
    i.shape({
      ariaLabel: i.string,
      color: i.oneOf(["gold", "maroon", "gray", "dark"]),
      icon: i.arrayOf(i.string),
      href: i.string,
      label: i.string,
      onClick: i.func,
      size: i.oneOf(["default", "small", "xsmall"]),
      target: i.oneOf(["_blank", "_self", "_top", "_parent"])
    })
  ),
  linkLabel: i.string,
  linkUrl: i.string,
  tags: i.arrayOf(
    i.shape({
      ariaLabel: i.string,
      color: i.oneOf(["white", "gray", "dark"]),
      href: i.string,
      label: i.string,
      onClick: i.func
    })
  ),
  showBorders: i.bool,
  cardLink: i.string
};
const Ua = ({
  type: e = "default",
  body: t = "",
  eventFormat: r = "stack",
  eventLocation: o = "",
  eventTime: c = "",
  title: u,
  buttons: g = void 0,
  linkLabel: S = void 0,
  linkUrl: w = void 0,
  tags: m = void 0,
  cardLink: I
}) => /* @__PURE__ */ W.jsxs(W.Fragment, { children: [
  !!u && /* @__PURE__ */ W.jsx("div", { className: "card-header", "data-testid": "card-title", children: /* @__PURE__ */ W.jsx("h3", { className: "card-title", children: I ? /* @__PURE__ */ W.jsx("a", { href: I, children: u }) : u }) }),
  !!t && /* @__PURE__ */ W.jsx("div", { className: "card-body", "data-testid": "card-body", children: /* @__PURE__ */ W.jsx("div", { dangerouslySetInnerHTML: Ar(t) }) }),
  e === "event" && (c || o) && /* @__PURE__ */ W.jsx(
    Ss,
    {
      eventFormat: r,
      eventTime: c,
      eventLocation: o
    }
  ),
  g && /* @__PURE__ */ W.jsx("div", { className: "card-buttons", children: g.map((T) => /* @__PURE__ */ W.jsx(
    "div",
    {
      className: "card-button",
      "data-testid": "card-button",
      children: /* @__PURE__ */ W.jsx(
        ns,
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
  w && S && /* @__PURE__ */ W.jsx("div", { className: "card-link", "data-testid": "card-link", children: /* @__PURE__ */ W.jsx(
    jr,
    {
      gaData: {
        ...Nu,
        section: u,
        text: S
      },
      children: /* @__PURE__ */ W.jsx("a", { href: Ru(w), children: S })
    }
  ) }),
  m && /* @__PURE__ */ W.jsx("div", { className: "card-tags", "data-testid": "card-tags", children: m.map((T) => (
    // @ts-ignore
    /* @__PURE__ */ W.jsx(
      bs,
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
Ua.propTypes = {
  type: i.oneOf(["default", "degree", "event", "news", "story"]),
  body: i.string,
  eventFormat: i.oneOf(["stack", "inline"]),
  eventLocation: i.string,
  eventTime: i.string,
  title: i.string.isRequired,
  buttons: i.arrayOf(
    i.shape({
      ariaLabel: i.string,
      color: i.oneOf(["gold", "maroon", "gray", "dark"]),
      icon: i.arrayOf(i.string),
      href: i.string,
      label: i.string,
      onClick: i.func,
      size: i.oneOf(["default", "small", "xsmall"]),
      target: i.oneOf(["_blank", "_self", "_top", "_parent"])
    })
  ),
  linkLabel: i.string,
  linkUrl: i.string,
  tags: i.arrayOf(
    i.shape({
      ariaLabel: i.string,
      color: i.oneOf(["white", "gray", "dark"]),
      href: i.string,
      label: i.string,
      onClick: i.func
    })
  ),
  cardLink: i.string
};
const Ss = ({
  eventFormat: e = "stack",
  eventLocation: t = "",
  eventTime: r = ""
}) => e === "inline" ? /* @__PURE__ */ W.jsxs("div", { className: "card-event-details", children: [
  r && /* @__PURE__ */ W.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ W.jsx("div", { children: /* @__PURE__ */ W.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ W.jsx("div", { dangerouslySetInnerHTML: Ar(r) })
  ] }),
  t && /* @__PURE__ */ W.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ W.jsx("div", { children: /* @__PURE__ */ W.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ W.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Ar(t)
      }
    )
  ] })
] }) : /* @__PURE__ */ W.jsxs(W.Fragment, { children: [
  r && /* @__PURE__ */ W.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ W.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ W.jsx("div", { children: /* @__PURE__ */ W.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ W.jsx("div", { dangerouslySetInnerHTML: Ar(r) })
  ] }) }),
  t && /* @__PURE__ */ W.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ W.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ W.jsx("div", { children: /* @__PURE__ */ W.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ W.jsx("span", { children: /* @__PURE__ */ W.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Ar(t)
      }
    ) })
  ] }) })
] });
Ss.propTypes = {
  eventFormat: i.oneOf(["stack", "inline"]),
  eventLocation: i.string,
  eventTime: i.string
};
i.oneOf(["small", "large"]), i.string.isRequired, i.string.isRequired, i.string;
i.oneOf(["small", "large"]).isRequired, i.string.isRequired, i.string.isRequired, i.string.isRequired, i.string.isRequired, i.string, i.string;
i.arrayOf(i.object).isRequired, i.oneOf(["card", "ranking"]), i.oneOf([1, 2, 3, 4, "1", "2", "3", "4"]);
const Lu = Gt.div`
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
`, Iu = () => /* @__PURE__ */ W.jsxs(Lu, { children: [
  /* @__PURE__ */ W.jsx("div", {}),
  /* @__PURE__ */ W.jsx("div", {}),
  /* @__PURE__ */ W.jsx("div", {}),
  /* @__PURE__ */ W.jsx("div", {})
] }), Pu = Gt.section``, eo = rl(null), ks = ({
  defaultProps: e,
  dataSource: t,
  noFeedText: r,
  renderHeader: o,
  renderBody: c,
  dataTransformer: u,
  dataFilter: g,
  maxItems: S
}) => {
  const [{ data: w, loading: m, error: I }, T] = Fl(), [$, Y] = sn([]), A = { ...e.dataSource, ...t };
  return dn(() => {
    T(A == null ? void 0 : A.url);
  }, [A == null ? void 0 : A.url]), dn(() => {
    const k = w == null ? void 0 : w.nodes.map(u), D = k == null ? void 0 : k.filter(
      (V) => g(V, t == null ? void 0 : t.filters)
    );
    Y(S ? D == null ? void 0 : D.slice(0, S) : D);
  }, [w]), // Init the context to be used on its childrens
  /* @__PURE__ */ W.jsx(eo.Provider, { value: { feeds: $ }, children: /* @__PURE__ */ W.jsxs(Pu, { children: [
    o,
    I ? /* @__PURE__ */ W.jsx("span", { children: "Error, try again!" }) : /* @__PURE__ */ W.jsxs(W.Fragment, { children: [
      m && !($ != null && $.length) && /* @__PURE__ */ W.jsx("div", { className: "text-center mt-4", children: /* @__PURE__ */ W.jsx(Iu, {}) }),
      $ != null && $.length ? c : !m && /* @__PURE__ */ W.jsx("p", { className: "text-center", children: r })
    ] })
  ] }) });
};
ks.propTypes = {
  renderHeader: i.element,
  renderBody: i.element,
  maxItems: i.number,
  dataTransformer: i.func,
  dataFilter: i.func,
  noFeedText: i.string
};
const to = i.shape({
  color: i.oneOf(["white", "dark"]),
  text: i.string
}), ro = i.shape({
  color: i.oneOf(["gold", "maroon", "gray", "dark"]),
  text: i.string
});
i.shape({
  color: i.oneOf(["gold", "maroon", "gray", "dark"]),
  text: i.string,
  size: i.string
});
const xs = i.shape({
  url: i.string,
  filters: i.string
}), Du = i.shape({
  header: to,
  ctaButton: ro,
  dataSource: xs,
  maxItems: i.number
}), Fu = Gt.div`
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
  const o = { ...e.header, ...t }, c = { ...e.ctaButton, ...r }, u = o.tag || "h2", g = u !== "h2", S = `text-${o.color} ${g ? "h2" : ""}`.trim();
  return /* @__PURE__ */ W.jsxs(
    "div",
    {
      className: "row justify-content-between align-items-center pb-6",
      "data-testid": "feed-header",
      children: [
        /* @__PURE__ */ W.jsx("div", { className: "col-sm-12 col-md-9", children: /* @__PURE__ */ W.jsx(u, { className: S, children: o.text }) }),
        /* @__PURE__ */ W.jsx(Fu, { className: "col-sm-12 col-md-3", children: /* @__PURE__ */ W.jsx(
          jr,
          {
            gaData: {
              event: "link",
              action: "click",
              name: "onclick",
              type: "internal link",
              region: "main content",
              section: o.text,
              text: c.text
            },
            children: /* @__PURE__ */ W.jsx("a", { className: `btn btn-${c.color}`, href: c.url, children: c.text })
          }
        ) })
      ]
    }
  );
};
_s.propTypes = {
  defaultProps: Du,
  header: to,
  ctaButton: ro
};
const Cs = ({ children: e }) => /* @__PURE__ */ W.jsx("div", { className: "row", "data-testid": "feed-body", children: /* @__PURE__ */ W.jsx("div", { className: "col", children: e }) });
Cs.propTypes = {
  children: i.element
};
Gt.img`
  width: 100%;
`;
i.oneOf(["heading-hero", "story-hero"]), i.arrayOf(Ea), i.string;
i.bool, i.bool, i.bool, i.bool, i.string, i.func, i.node, i.bool, i.string, i.bool;
i.oneOf(["default", "bordered"]).isRequired, i.oneOf(["white", "gray1", "gray2", "gray7"]).isRequired, i.number, i.number, i.func.isRequired;
Gt.div`
  button {
    padding: 16px 0;
    border: none;
    outline: none;
  }
`;
i.object, i.bool, i.bool, i.func.isRequired;
const Mu = Ga(function(e, t) {
  const {
    id: r,
    selected: o,
    title: c,
    selectTab: u,
    leftKeyPressed: g,
    rightKeyPressed: S,
    icon: w,
    gaData: m
  } = e, { isReact: I, isBootstrap: T } = rs(), $ = nl(null);
  al(t, () => ({
    focus() {
      $.current.focus();
    },
    scrollIntoView() {
      var A, k, D, V, G, J, H;
      const x = ((A = $.current) == null ? void 0 : A.offsetWidth) / 2 + $.current.offsetLeft, ce = ((D = (k = $.current) == null ? void 0 : k.offsetParent) == null ? void 0 : D.scrollLeft) + ((G = (V = $.current) == null ? void 0 : V.offsetParent) == null ? void 0 : G.offsetWidth) / 2;
      (H = (J = $.current) == null ? void 0 : J.offsetParent) == null || H.scrollBy({
        left: x - ce
      });
    }
  }), []);
  const Y = (A) => {
    A.keyCode === 37 ? (A.preventDefault(), g()) : A.keyCode === 39 && (A.preventDefault(), S());
  };
  return /* @__PURE__ */ W.jsx(jr, { gaData: { ...m, text: c }, children: /* @__PURE__ */ W.jsxs(
    "a",
    {
      ref: $,
      className: `nav-item nav-link ${o ? "active" : ""}`,
      id: r,
      href: `#nav-${r}`,
      role: "tab",
      "aria-controls": `nav-${r}`,
      "aria-selected": o,
      "data-bs-toggle": T && "tab",
      onClick: I && ((A) => u(A, r, c)),
      onKeyDown: I && Y,
      tabIndex: o ? "" : "-1",
      children: [
        c,
        " ",
        w && /* @__PURE__ */ W.jsx("i", { className: `${w == null ? void 0 : w[0]} fa-${w == null ? void 0 : w[1]} me-1` })
      ]
    }
  ) });
});
Mu.propTypes = {
  gaData: i.object,
  id: i.string.isRequired,
  selected: i.bool.isRequired,
  title: i.string.isRequired,
  selectTab: i.func.isRequired,
  leftKeyPressed: i.func.isRequired,
  rightKeyPressed: i.func.isRequired,
  icon: i.arrayOf(i.string)
};
i.string.isRequired, i.string, i.bool, i.oneOfType([i.array, i.element]);
i.string, i.arrayOf(i.element).isRequired, i.string, i.func;
i.shape({
  title: i.string,
  content: i.string,
  cite: i.shape({
    name: i.string,
    description: i.string
  })
}).isRequired, i.string, i.string, i.shape({
  containerCssClass: i.arrayOf(i.string),
  titleCssClass: i.arrayOf(i.string),
  contentCssClass: i.arrayOf(i.string)
});
i.oneOf(["video", "youtube"]), i.string, i.string, i.string, i.string, i.string, i.bool;
i.oneOfType([
  i.element,
  i.arrayOf(i.element)
]).isRequired;
i.number.isRequired;
i.arrayOf(i.string).isRequired, i.func;
i.func;
i.func;
i.arrayOf(i.element);
i.element, i.func;
i.arrayOf(i.object);
var ju = !1;
try {
  var fi = Object.defineProperty({}, "passive", {
    get: function() {
      ju = !0;
    }
  });
  window.addEventListener("testPassive", null, fi), window.removeEventListener("testPassive", null, fi);
} catch {
}
i.number, i.string, i.string, i.arrayOf(i.object).isRequired, i.string, i.func, i.string, i.string, i.func, i.bool, i.bool, i.bool, i.bool, i.bool, i.bool, i.bool, i.bool;
i.string.isRequired, i.arrayOf(
  i.shape({
    title: i.string.isRequired,
    content: i.string,
    eventLocation: i.string,
    eventTime: i.string,
    image: i.string,
    imageAltText: i.string,
    buttons: mr.propTypes.buttons,
    linkLabel: i.string,
    linkUrl: i.string,
    tags: mr.propTypes.tags
  })
).isRequired, mr.propTypes.type, mr.propTypes.eventFormat, mr.propTypes.horizontal, i.string, i.string, i.bool;
i.number.isRequired, i.arrayOf(i.object).isRequired, i.string, i.string, i.bool;
const Qn = {
  imageItems: i.arrayOf(
    i.shape({
      id: i.number,
      imageSource: i.string,
      thumbnailSource: i.string,
      imageAltText: i.string,
      content: i.oneOfType([i.string, i.element])
    })
  ),
  hasContent: i.bool
};
i.string, Qn.imageItems, Qn.hasContent;
Qn.imageItems.isRequired, Qn.hasContent, i.string, i.string, i.bool;
i.arrayOf(
  i.shape({
    title: i.string,
    content: i.string,
    cite: i.shape({
      name: i.string,
      description: i.string
    })
  })
).isRequired, i.shape({
  containerCssClass: i.arrayOf(i.string),
  titleCssClass: i.arrayOf(i.string),
  contentCssClass: i.arrayOf(i.string)
}), i.string, i.string, i.bool, i.bool, i.bool;
var pi = Pi;
pi.createRoot, pi.hydrateRoot;
(function() {
  var e = `@charset "UTF-8";.glide{position:relative;width:100%;box-sizing:border-box}.glide *{box-sizing:inherit}.glide__track{overflow:hidden}.glide__slides{position:relative;width:100%;list-style:none;backface-visibility:hidden;transform-style:preserve-3d;touch-action:pan-Y;overflow:hidden;margin:0;padding:0;white-space:nowrap;display:flex;flex-wrap:nowrap;will-change:transform}.glide__slides--dragging{-webkit-user-select:none;user-select:none}.glide__slide{width:100%;height:100%;flex-shrink:0;white-space:normal;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent}.glide__slide a{-webkit-user-select:none;user-select:none;-webkit-user-drag:none;-moz-user-select:none;-ms-user-select:none}.glide__arrows,.glide__bullets{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}.glide--rtl{direction:rtl}@media only screen and (min-width: 1260px){.container .aligned-carousel{margin-left:-124px!important}}.glide{display:flex;flex-direction:column;gap:32px;position:relative}[data-image-auto-size=true] .glide__slides .glide__slide{height:auto;position:relative;display:inline-flex;justify-content:center}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img{display:flex;width:100%;max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img{flex-grow:1;object-fit:cover}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img.uds-img{max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img figure.uds-figure{display:flex;justify-content:space-between;flex-direction:column}.glide .glide__track{position:relative}.glide .glide__track .glide__slides{margin-bottom:0;touch-action:auto}.glide .glide__track .glide__slides .glide__slide .card{width:100%}@media only screen and (min-width: 576px){.glide[data-has-shadow=true] .glide__track.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}}.glide__arrows{z-index:2;align-self:center}.glide__arrows .glide__arrow{color:#191919;width:4rem;height:4rem;margin:0 .5rem;background-color:#e8e8e8;border:1px solid #d0d0d0;border-radius:50%;font-size:1.3rem;text-shadow:0 .25em .5em rgba(0,0,0,.1);opacity:1;cursor:pointer;transition:opacity .15s ease,border .3s ease-in-out;line-height:1}.glide__arrows .glide__arrow.glide__arrow--disabled{color:#e8e8e8;background-color:#fafafa;border:1px solid #e8e8e8;opacity:1}.glide__arrows .glide__arrow:focus{outline:none}.glide__arrows .glide__arrow:hover{border-color:#fff}.glide__arrows .glide__arrow--left{left:2em}.glide__arrows .glide__arrow--right{right:2em}.glide__arrows .glide__arrow--disabled{opacity:.33}.glide__bullets{z-index:2;list-style:none;max-width:100%;display:flex;justify-content:center}.glide__bullet{transition:all .3s ease-in-out;background-color:#d0d0d0;width:1rem;height:1rem;padding:0;border-radius:50%;border:2px solid transparent;cursor:pointer;line-height:0;margin:.375rem}.glide__bullet:focus{outline:none}.glide__bullet:hover,.glide__bullet:focus{border:1px solid #d0d0d0;background-color:#191919}.glide__bullet--active{background-color:#191919}.glide.aligned-carousel{width:1448px;margin:auto}.glide.image-gallery{gap:0;overflow:hidden}.glide.image-gallery .glide__track{border:1px solid #d0d0d0}.glide.image-gallery .glide__track:after{content:none}.glide.image-gallery .glide__track .glide__slides{margin-bottom:0;height:100%}.glide.image-gallery .glide__track .glide__slides li.glide__slide{display:list-item}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img{height:100%}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img img{object-fit:cover;border:none}.glide.image-gallery .image-gallery-action-area{border:1px solid #d0d0d0;border-top:0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .image-navigator{border-bottom:1px solid #d0d0d0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text{padding:1rem 0;display:inline-block}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text>div{height:auto!important}.glide.image-gallery figcaption{padding:0 .75rem;font-size:.75rem}.glide.image-gallery .image-navigator{position:relative}.glide.image-gallery .image-navigator .image-navigator-images{min-height:64px;padding-top:1rem;padding-bottom:1rem;width:100%;margin:auto;overflow:hidden}.glide.image-gallery .image-navigator .image-navigator-images.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider{position:relative;left:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets{position:relative}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container{position:relative;margin:0 .5rem;height:48px;border:0;padding:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:first-child{margin-left:16rem}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container .bullet-image{flex-basis:auto;width:88px;height:100%;border-radius:0;border:0;z-index:2;object-fit:cover;margin:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:focus{box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .glide__bullet--active{background-color:transparent;border:5px solid #ffc627}.glide.image-gallery .image-navigator .glide__arrows{width:100%;display:flex;justify-content:space-between;align-items:center}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow{width:2.5rem;height:2.5rem;display:flex;align-items:center;justify-content:center;z-index:3;position:absolute;background-color:#fff}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow:hover{border-color:#d0d0d0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow .arrow-icon{font-size:1rem}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--prev{left:0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--next{right:0}@media only screen and (max-width: 576px){.glide{gap:21px}.glide:not(.glide.image-gallery) .glide__bullets{display:none}.glide.image-gallery{width:100%;margin:auto!important}.glide.image-gallery .image-navigator .image-navigator-images .glide__arrows .glide__arrow{display:none}}@media only screen and (max-width: 1260px){.glide.aligned-carousel{width:100%}}.glide--swipeable{cursor:grab;cursor:-moz-grab;cursor:-webkit-grab}.glide--dragging{cursor:grabbing;cursor:-moz-grabbing;cursor:-webkit-grabbing}.glide[data-remove-side-background=true]:after,.glide[data-remove-side-background=true]:before{content:none}.glide button:focus,.glide a:focus,.glide input:focus,.glide textarea:focus,.glide select:focus{outline:none!important;box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery,.glide.image-carousel{margin:auto}.glide.image-gallery[role=figure],.glide.image-gallery figure.uds-figure,.glide.image-carousel[role=figure],.glide.image-carousel figure.uds-figure{margin:0}.glide.image-gallery[role=figure] figcaption *,.glide.image-gallery[role=figure] .uds-caption-text,.glide.image-gallery figure.uds-figure figcaption *,.glide.image-gallery figure.uds-figure .uds-caption-text,.glide.image-carousel[role=figure] figcaption *,.glide.image-carousel[role=figure] .uds-caption-text,.glide.image-carousel figure.uds-figure figcaption *,.glide.image-carousel figure.uds-figure .uds-caption-text{color:#191919;max-width:100%}
`, t = document.createElement("style");
  t.type = "text/css", t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e)), document.head.appendChild(t);
})();
const hi = {
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
}, mi = [
  "eventTopics",
  "eventUnits",
  "interests",
  "audiences",
  "eventTypes",
  "collegeUnit"
], gi = (e) => e.toLowerCase().split(" ").join("_"), zu = (e, t) => {
  if (!t) return !0;
  const r = t.split(",");
  for (let o = 0; o < r.length; o += 1) {
    const c = gi(r[o]);
    for (let u = 0; u < mi.length; u += 1) {
      const g = mi[u];
      if (gi(e[g] || "").includes(c)) return !0;
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
}), no = ({ children: e, header: t, ctaButton: r, dataSource: o, maxItems: c }) => (
  // Calling the unity-react-core component to fetch the data, transform it and filter it
  // We provide in the renderBody the view specified before in the parent component, recieved as "children" in this component.
  // We provide in the renderHeader the unity-react-core header, if it is desired to be shown
  // We provide the maxItems prop to limit the items rendered
  // We provide the dataSource to read the url to fetch the data
  // We provide the defaultProps to use some needed default values in case they are not provided
  /* @__PURE__ */ ut.jsx(
    ks,
    {
      renderHeader: t && r ? /* @__PURE__ */ ut.jsx(
        _s,
        {
          header: t,
          ctaButton: r,
          defaultProps: hi
        }
      ) : null,
      renderBody: /* @__PURE__ */ ut.jsx(Cs, { children: e }),
      dataTransformer: $u,
      dataFilter: zu,
      dataSource: o,
      defaultProps: hi,
      noFeedText: "No events to show.",
      maxItems: c
    }
  )
);
no.propTypes = {
  header: to,
  ctaButton: ro,
  dataSource: xs,
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
}).isRequired, Ts = {
  header: Uu,
  ctaButton: Bu,
  dataSource: Wu,
  maxItems: He.number
}, Hu = (e) => e.toLocaleDateString("en-US", {
  timeZone: "UTC",
  weekday: "long",
  month: "long",
  day: "numeric"
}), yi = (e) => e.toLocaleString("en-US", {
  timeZone: "UTC"
}), Ba = (e) => {
  let t = e.split("T");
  return t = t.length > 1 ? t.join("T") : `${t[0].split(":")[0]}T00:00:00Z`, t;
}, bi = (e) => {
  let t = e.getHours(), r = e.getMinutes();
  const o = t >= 12 ? "p.m." : "a.m.";
  return t %= 12, t = t || 12, r = r < 10 ? `0${r}` : r, `${t}:${r} ${o}`;
}, Es = (e, t) => {
  const r = Ba(e);
  let o = yi(new Date(r));
  if (o = bi(new Date(o)), !t || e === t)
    return o;
  const c = Ba(t);
  let u = yi(new Date(c));
  return u = bi(new Date(u)), `${o} to ${u}`;
}, Zn = (e, t) => {
  const r = Ba(e);
  return {
    ISO: r.split("T")[0],
    COMPLETE: Hu(new Date(r))
  }[t];
};
var As = { exports: {} }, We = {};
var vi;
function Vu() {
  if (vi) return We;
  vi = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), u = Symbol.for("react.consumer"), g = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), I = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), Y = Symbol.for("react.client.reference");
  function A(k) {
    if (typeof k == "object" && k !== null) {
      var D = k.$$typeof;
      switch (D) {
        case e:
          switch (k = k.type, k) {
            case r:
            case c:
            case o:
            case w:
            case m:
              return k;
            default:
              switch (k = k && k.$$typeof, k) {
                case g:
                case S:
                case T:
                case I:
                  return k;
                case u:
                  return k;
                default:
                  return D;
              }
          }
        case t:
          return D;
      }
    }
  }
  return We.ContextConsumer = u, We.ContextProvider = g, We.Element = e, We.ForwardRef = S, We.Fragment = r, We.Lazy = T, We.Memo = I, We.Portal = t, We.Profiler = c, We.StrictMode = o, We.Suspense = w, We.SuspenseList = m, We.isContextConsumer = function(k) {
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
    return A(k) === T;
  }, We.isMemo = function(k) {
    return A(k) === I;
  }, We.isPortal = function(k) {
    return A(k) === t;
  }, We.isProfiler = function(k) {
    return A(k) === c;
  }, We.isStrictMode = function(k) {
    return A(k) === o;
  }, We.isSuspense = function(k) {
    return A(k) === w;
  }, We.isSuspenseList = function(k) {
    return A(k) === m;
  }, We.isValidElementType = function(k) {
    return typeof k == "string" || typeof k == "function" || k === r || k === c || k === o || k === w || k === m || k === $ || typeof k == "object" && k !== null && (k.$$typeof === T || k.$$typeof === I || k.$$typeof === g || k.$$typeof === u || k.$$typeof === S || k.$$typeof === Y || k.getModuleId !== void 0);
  }, We.typeOf = A, We;
}
As.exports = Vu();
var Os = As.exports;
function qu(e) {
  function t(M, C, F, P, p) {
    for (var re = 0, E = 0, ne = 0, ee = 0, te, B, oe = 0, se = 0, K, he = K = te = 0, Z = 0, le = 0, $e = 0, me = 0, it = F.length, Ge = it - 1, ge, U = "", ae = "", Ye = "", lt = "", Me; Z < it; ) {
      if (B = F.charCodeAt(Z), Z === Ge && E + ee + ne + re !== 0 && (E !== 0 && (B = E === 47 ? 10 : 47), ee = ne = re = 0, it++, Ge++), E + ee + ne + re === 0) {
        if (Z === Ge && (0 < le && (U = U.replace($, "")), 0 < U.trim().length)) {
          switch (B) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              U += F.charAt(Z);
          }
          B = 59;
        }
        switch (B) {
          case 123:
            for (U = U.trim(), te = U.charCodeAt(0), K = 1, me = ++Z; Z < it; ) {
              switch (B = F.charCodeAt(Z)) {
                case 123:
                  K++;
                  break;
                case 125:
                  K--;
                  break;
                case 47:
                  switch (B = F.charCodeAt(Z + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (he = Z + 1; he < Ge; ++he)
                          switch (F.charCodeAt(he)) {
                            case 47:
                              if (B === 42 && F.charCodeAt(he - 1) === 42 && Z + 2 !== he) {
                                Z = he + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (B === 47) {
                                Z = he + 1;
                                break e;
                              }
                          }
                        Z = he;
                      }
                  }
                  break;
                case 91:
                  B++;
                case 40:
                  B++;
                case 34:
                case 39:
                  for (; Z++ < Ge && F.charCodeAt(Z) !== B; )
                    ;
              }
              if (K === 0) break;
              Z++;
            }
            switch (K = F.substring(me, Z), te === 0 && (te = (U = U.replace(T, "").trim()).charCodeAt(0)), te) {
              case 64:
                switch (0 < le && (U = U.replace($, "")), B = U.charCodeAt(1), B) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    le = C;
                    break;
                  default:
                    le = st;
                }
                if (K = t(C, le, K, B, p + 1), me = K.length, 0 < Ae && (le = r(st, U, $e), Me = S(3, K, le, C, Ne, pe, me, B, p, P), U = le.join(""), Me !== void 0 && (me = (K = Me.trim()).length) === 0 && (B = 0, K = "")), 0 < me) switch (B) {
                  case 115:
                    U = U.replace(ce, g);
                  case 100:
                  case 109:
                  case 45:
                    K = U + "{" + K + "}";
                    break;
                  case 107:
                    U = U.replace(G, "$1 $2"), K = U + "{" + K + "}", K = Ee === 1 || Ee === 2 && u("@" + K, 3) ? "@-webkit-" + K + "@" + K : "@" + K;
                    break;
                  default:
                    K = U + K, P === 112 && (K = (ae += K, ""));
                }
                else K = "";
                break;
              default:
                K = t(C, r(C, U, $e), K, P, p + 1);
            }
            Ye += K, K = $e = le = he = te = 0, U = "", B = F.charCodeAt(++Z);
            break;
          case 125:
          case 59:
            if (U = (0 < le ? U.replace($, "") : U).trim(), 1 < (me = U.length)) switch (he === 0 && (te = U.charCodeAt(0), te === 45 || 96 < te && 123 > te) && (me = (U = U.replace(" ", ":")).length), 0 < Ae && (Me = S(1, U, C, M, Ne, pe, ae.length, P, p, P)) !== void 0 && (me = (U = Me.trim()).length) === 0 && (U = "\0\0"), te = U.charCodeAt(0), B = U.charCodeAt(1), te) {
              case 0:
                break;
              case 64:
                if (B === 105 || B === 99) {
                  lt += U + F.charAt(Z);
                  break;
                }
              default:
                U.charCodeAt(me - 1) !== 58 && (ae += c(U, te, B, U.charCodeAt(2)));
            }
            $e = le = he = te = 0, U = "", B = F.charCodeAt(++Z);
        }
      }
      switch (B) {
        case 13:
        case 10:
          E === 47 ? E = 0 : 1 + te === 0 && P !== 107 && 0 < U.length && (le = 1, U += "\0"), 0 < Ae * Ke && S(0, U, C, M, Ne, pe, ae.length, P, p, P), pe = 1, Ne++;
          break;
        case 59:
        case 125:
          if (E + ee + ne + re === 0) {
            pe++;
            break;
          }
        default:
          switch (pe++, ge = F.charAt(Z), B) {
            case 9:
            case 32:
              if (ee + re + E === 0) switch (oe) {
                case 44:
                case 58:
                case 9:
                case 32:
                  ge = "";
                  break;
                default:
                  B !== 32 && (ge = " ");
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
              ee + E + re === 0 && (le = $e = 1, ge = "\f" + ge);
              break;
            case 108:
              if (ee + E + re + Le === 0 && 0 < he) switch (Z - he) {
                case 2:
                  oe === 112 && F.charCodeAt(Z - 3) === 58 && (Le = oe);
                case 8:
                  se === 111 && (Le = se);
              }
              break;
            case 58:
              ee + E + re === 0 && (he = Z);
              break;
            case 44:
              E + ne + ee + re === 0 && (le = 1, ge += "\r");
              break;
            case 34:
            case 39:
              E === 0 && (ee = ee === B ? 0 : ee === 0 ? B : ee);
              break;
            case 91:
              ee + E + ne === 0 && re++;
              break;
            case 93:
              ee + E + ne === 0 && re--;
              break;
            case 41:
              ee + E + re === 0 && ne--;
              break;
            case 40:
              if (ee + E + re === 0) {
                if (te === 0) switch (2 * oe + 3 * se) {
                  case 533:
                    break;
                  default:
                    te = 1;
                }
                ne++;
              }
              break;
            case 64:
              E + ne + ee + re + he + K === 0 && (K = 1);
              break;
            case 42:
            case 47:
              if (!(0 < ee + re + ne)) switch (E) {
                case 0:
                  switch (2 * B + 3 * F.charCodeAt(Z + 1)) {
                    case 235:
                      E = 47;
                      break;
                    case 220:
                      me = Z, E = 42;
                  }
                  break;
                case 42:
                  B === 47 && oe === 42 && me + 2 !== Z && (F.charCodeAt(me + 2) === 33 && (ae += F.substring(me, Z + 1)), ge = "", E = 0);
              }
          }
          E === 0 && (U += ge);
      }
      se = oe, oe = B, Z++;
    }
    if (me = ae.length, 0 < me) {
      if (le = C, 0 < Ae && (Me = S(2, ae, le, M, Ne, pe, me, P, p, P), Me !== void 0 && (ae = Me).length === 0)) return lt + ae + Ye;
      if (ae = le.join(",") + "{" + ae + "}", Ee * Le !== 0) {
        switch (Ee !== 2 || u(ae, 2) || (Le = 0), Le) {
          case 111:
            ae = ae.replace(H, ":-moz-$1") + ae;
            break;
          case 112:
            ae = ae.replace(J, "::-webkit-input-$1") + ae.replace(J, "::-moz-$1") + ae.replace(J, ":-ms-input-$1") + ae;
        }
        Le = 0;
      }
    }
    return lt + ae + Ye;
  }
  function r(M, C, F) {
    var P = C.trim().split(D);
    C = P;
    var p = P.length, re = M.length;
    switch (re) {
      case 0:
      case 1:
        var E = 0;
        for (M = re === 0 ? "" : M[0] + " "; E < p; ++E)
          C[E] = o(M, C[E], F).trim();
        break;
      default:
        var ne = E = 0;
        for (C = []; E < p; ++E)
          for (var ee = 0; ee < re; ++ee)
            C[ne++] = o(M[ee] + " ", P[E], F).trim();
    }
    return C;
  }
  function o(M, C, F) {
    var P = C.charCodeAt(0);
    switch (33 > P && (P = (C = C.trim()).charCodeAt(0)), P) {
      case 38:
        return C.replace(V, "$1" + M.trim());
      case 58:
        return M.trim() + C.replace(V, "$1" + M.trim());
      default:
        if (0 < 1 * F && 0 < C.indexOf("\f")) return C.replace(V, (M.charCodeAt(0) === 58 ? "" : "$1") + M.trim());
    }
    return M + C;
  }
  function c(M, C, F, P) {
    var p = M + ";", re = 2 * C + 3 * F + 4 * P;
    if (re === 944) {
      M = p.indexOf(":", 9) + 1;
      var E = p.substring(M, p.length - 1).trim();
      return E = p.substring(0, M).trim() + E + ";", Ee === 1 || Ee === 2 && u(E, 1) ? "-webkit-" + E + E : E;
    }
    if (Ee === 0 || Ee === 2 && !u(p, 1)) return p;
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
        return E = p.substring(p.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + E + "-webkit-" + p + "-ms-flex-pack" + E + p;
      case 1005:
        return A.test(p) ? p.replace(Y, ":-webkit-") + p.replace(Y, ":-moz-") + p : p;
      case 1e3:
        switch (E = p.substring(13).trim(), C = E.indexOf("-") + 1, E.charCodeAt(0) + E.charCodeAt(C)) {
          case 226:
            E = p.replace(x, "tb");
            break;
          case 232:
            E = p.replace(x, "tb-rl");
            break;
          case 220:
            E = p.replace(x, "lr");
            break;
          default:
            return p;
        }
        return "-webkit-" + p + "-ms-" + E + p;
      case 1017:
        if (p.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (C = (p = M).length - 10, E = (p.charCodeAt(C) === 33 ? p.substring(0, C) : p).substring(M.indexOf(":", 7) + 1).trim(), re = E.charCodeAt(0) + (E.charCodeAt(7) | 0)) {
          case 203:
            if (111 > E.charCodeAt(8)) break;
          case 115:
            p = p.replace(E, "-webkit-" + E) + ";" + p;
            break;
          case 207:
          case 102:
            p = p.replace(E, "-webkit-" + (102 < re ? "inline-" : "") + "box") + ";" + p.replace(E, "-webkit-" + E) + ";" + p.replace(E, "-ms-" + E + "box") + ";" + p;
        }
        return p + ";";
      case 938:
        if (p.charCodeAt(5) === 45) switch (p.charCodeAt(6)) {
          case 105:
            return E = p.replace("-items", ""), "-webkit-" + p + "-webkit-box-" + E + "-ms-flex-" + E + p;
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
        if (Ve.test(M) === !0) return (E = M.substring(M.indexOf(":") + 1)).charCodeAt(0) === 115 ? c(M.replace("stretch", "fill-available"), C, F, P).replace(":fill-available", ":stretch") : p.replace(E, "-webkit-" + E) + p.replace(E, "-moz-" + E.replace("fill-", "")) + p;
        break;
      case 962:
        if (p = "-webkit-" + p + (p.charCodeAt(5) === 102 ? "-ms-" + p : "") + p, F + P === 211 && p.charCodeAt(13) === 105 && 0 < p.indexOf("transform", 10)) return p.substring(0, p.indexOf(";", 27) + 1).replace(k, "$1-webkit-$2") + p;
    }
    return p;
  }
  function u(M, C) {
    var F = M.indexOf(C === 1 ? ":" : "{"), P = M.substring(0, C !== 3 ? F : 10);
    return F = M.substring(F + 1, M.length - 1), Ue(C !== 2 ? P : P.replace(De, "$1"), F, C);
  }
  function g(M, C) {
    var F = c(C, C.charCodeAt(0), C.charCodeAt(1), C.charCodeAt(2));
    return F !== C + ";" ? F.replace(_e, " or ($1)").substring(4) : "(" + C + ")";
  }
  function S(M, C, F, P, p, re, E, ne, ee, te) {
    for (var B = 0, oe = C, se; B < Ae; ++B)
      switch (se = Fe[B].call(I, M, oe, F, P, p, re, E, ne, ee, te)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          oe = se;
      }
    if (oe !== C) return oe;
  }
  function w(M) {
    switch (M) {
      case void 0:
      case null:
        Ae = Fe.length = 0;
        break;
      default:
        if (typeof M == "function") Fe[Ae++] = M;
        else if (typeof M == "object") for (var C = 0, F = M.length; C < F; ++C)
          w(M[C]);
        else Ke = !!M | 0;
    }
    return w;
  }
  function m(M) {
    return M = M.prefix, M !== void 0 && (Ue = null, M ? typeof M != "function" ? Ee = 1 : (Ee = 2, Ue = M) : Ee = 0), m;
  }
  function I(M, C) {
    var F = M;
    if (33 > F.charCodeAt(0) && (F = F.trim()), ie = F, F = [ie], 0 < Ae) {
      var P = S(-1, C, F, F, Ne, pe, 0, 0, 0, 0);
      P !== void 0 && typeof P == "string" && (C = P);
    }
    var p = t(st, F, C, 0, 0);
    return 0 < Ae && (P = S(-2, p, F, F, Ne, pe, p.length, 0, 0, 0), P !== void 0 && (p = P)), ie = "", Le = 0, pe = Ne = 1, p;
  }
  var T = /^\0+/g, $ = /[\0\r\f]/g, Y = /: */g, A = /zoo|gra/, k = /([,: ])(transform)/g, D = /,\r+?/g, V = /([\t\r\n ])*\f?&/g, G = /@(k\w+)\s*(\S*)\s*/, J = /::(place)/g, H = /:(read-only)/g, x = /[svh]\w+-[tblr]{2}/, ce = /\(\s*(.*)\s*\)/g, _e = /([\s\S]*?);/g, Ie = /-self|flex-/g, De = /[^]*?(:[rp][el]a[\w-]+)[^]*/, Ve = /stretch|:\s*\w+\-(?:conte|avail)/, ue = /([^-])(image-set\()/, pe = 1, Ne = 1, Le = 0, Ee = 1, st = [], Fe = [], Ae = 0, Ue = null, Ke = 0, ie = "";
  return I.use = w, I.set = m, e !== void 0 && m(e), I;
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
var Xu = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, wi = /* @__PURE__ */ Yu(
  function(e) {
    return Xu.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Rs = { exports: {} }, ze = {};
var Si;
function Ju() {
  if (Si) return ze;
  Si = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, c = e ? Symbol.for("react.strict_mode") : 60108, u = e ? Symbol.for("react.profiler") : 60114, g = e ? Symbol.for("react.provider") : 60109, S = e ? Symbol.for("react.context") : 60110, w = e ? Symbol.for("react.async_mode") : 60111, m = e ? Symbol.for("react.concurrent_mode") : 60111, I = e ? Symbol.for("react.forward_ref") : 60112, T = e ? Symbol.for("react.suspense") : 60113, $ = e ? Symbol.for("react.suspense_list") : 60120, Y = e ? Symbol.for("react.memo") : 60115, A = e ? Symbol.for("react.lazy") : 60116, k = e ? Symbol.for("react.block") : 60121, D = e ? Symbol.for("react.fundamental") : 60117, V = e ? Symbol.for("react.responder") : 60118, G = e ? Symbol.for("react.scope") : 60119;
  function J(x) {
    if (typeof x == "object" && x !== null) {
      var ce = x.$$typeof;
      switch (ce) {
        case t:
          switch (x = x.type, x) {
            case w:
            case m:
            case o:
            case u:
            case c:
            case T:
              return x;
            default:
              switch (x = x && x.$$typeof, x) {
                case S:
                case I:
                case A:
                case Y:
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
    return J(x) === m;
  }
  return ze.AsyncMode = w, ze.ConcurrentMode = m, ze.ContextConsumer = S, ze.ContextProvider = g, ze.Element = t, ze.ForwardRef = I, ze.Fragment = o, ze.Lazy = A, ze.Memo = Y, ze.Portal = r, ze.Profiler = u, ze.StrictMode = c, ze.Suspense = T, ze.isAsyncMode = function(x) {
    return H(x) || J(x) === w;
  }, ze.isConcurrentMode = H, ze.isContextConsumer = function(x) {
    return J(x) === S;
  }, ze.isContextProvider = function(x) {
    return J(x) === g;
  }, ze.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === t;
  }, ze.isForwardRef = function(x) {
    return J(x) === I;
  }, ze.isFragment = function(x) {
    return J(x) === o;
  }, ze.isLazy = function(x) {
    return J(x) === A;
  }, ze.isMemo = function(x) {
    return J(x) === Y;
  }, ze.isPortal = function(x) {
    return J(x) === r;
  }, ze.isProfiler = function(x) {
    return J(x) === u;
  }, ze.isStrictMode = function(x) {
    return J(x) === c;
  }, ze.isSuspense = function(x) {
    return J(x) === T;
  }, ze.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === o || x === m || x === u || x === c || x === T || x === $ || typeof x == "object" && x !== null && (x.$$typeof === A || x.$$typeof === Y || x.$$typeof === g || x.$$typeof === S || x.$$typeof === I || x.$$typeof === D || x.$$typeof === V || x.$$typeof === G || x.$$typeof === k);
  }, ze.typeOf = J, ze;
}
Rs.exports = Ju();
var Qu = Rs.exports, ao = Qu, Zu = {
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
}, oo = {};
oo[ao.ForwardRef] = ed;
oo[ao.Memo] = Ns;
function ki(e) {
  return ao.isMemo(e) ? Ns : oo[e.$$typeof] || Zu;
}
var td = Object.defineProperty, rd = Object.getOwnPropertyNames, xi = Object.getOwnPropertySymbols, nd = Object.getOwnPropertyDescriptor, ad = Object.getPrototypeOf, _i = Object.prototype;
function Ls(e, t, r) {
  if (typeof t != "string") {
    if (_i) {
      var o = ad(t);
      o && o !== _i && Ls(e, o, r);
    }
    var c = rd(t);
    xi && (c = c.concat(xi(t)));
    for (var u = ki(e), g = ki(t), S = 0; S < c.length; ++S) {
      var w = c[S];
      if (!Ku[w] && !(r && r[w]) && !(g && g[w]) && !(u && u[w])) {
        var m = nd(t, w);
        try {
          td(e, w, m);
        } catch {
        }
      }
    }
  }
  return e;
}
var od = Ls;
const id = /* @__PURE__ */ Di(od);
var ht = { env: { NODE_ENV: "production" } };
function cr() {
  return (cr = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }).apply(this, arguments);
}
var Ci = function(e, t) {
  for (var r = [e[0]], o = 0, c = t.length; o < c; o += 1) r.push(t[o], e[o + 1]);
  return r;
}, Wa = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Os.typeOf(e);
}, Kn = Object.freeze([]), yr = Object.freeze({});
function pn(e) {
  return typeof e == "function";
}
function Ti(e) {
  return e.displayName || e.name || "Component";
}
function io(e) {
  return e && typeof e.styledComponentId == "string";
}
var Dr = typeof ht < "u" && ht.env !== void 0 && (ht.env.REACT_APP_SC_ATTR || ht.env.SC_ATTR) || "data-styled", so = typeof window < "u" && "HTMLElement" in window, sd = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof ht < "u" && ht.env !== void 0 && (ht.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && ht.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? ht.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && ht.env.REACT_APP_SC_DISABLE_SPEEDY : ht.env.SC_DISABLE_SPEEDY !== void 0 && ht.env.SC_DISABLE_SPEEDY !== "" ? ht.env.SC_DISABLE_SPEEDY !== "false" && ht.env.SC_DISABLE_SPEEDY : ht.env.NODE_ENV !== "production"));
function yn(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) r[o - 1] = arguments[o];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : ""));
}
var ld = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(r) {
    for (var o = 0, c = 0; c < r; c++) o += this.groupSizes[c];
    return o;
  }, t.insertRules = function(r, o) {
    if (r >= this.groupSizes.length) {
      for (var c = this.groupSizes, u = c.length, g = u; r >= g; ) (g <<= 1) < 0 && yn(16, "" + r);
      this.groupSizes = new Uint32Array(g), this.groupSizes.set(c), this.length = g;
      for (var S = u; S < g; S++) this.groupSizes[S] = 0;
    }
    for (var w = this.indexOfGroup(r + 1), m = 0, I = o.length; m < I; m++) this.tag.insertRule(w, o[m]) && (this.groupSizes[r]++, w++);
  }, t.clearGroup = function(r) {
    if (r < this.length) {
      var o = this.groupSizes[r], c = this.indexOfGroup(r), u = c + o;
      this.groupSizes[r] = 0;
      for (var g = c; g < u; g++) this.tag.deleteRule(c);
    }
  }, t.getGroup = function(r) {
    var o = "";
    if (r >= this.length || this.groupSizes[r] === 0) return o;
    for (var c = this.groupSizes[r], u = this.indexOfGroup(r), g = u + c, S = u; S < g; S++) o += this.tag.getRule(S) + `/*!sc*/
`;
    return o;
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
}, dd = "style[" + Dr + '][data-styled-version="5.3.11"]', fd = new RegExp("^" + Dr + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), pd = function(e, t, r) {
  for (var o, c = r.split(","), u = 0, g = c.length; u < g; u++) (o = c[u]) && e.registerName(t, o);
}, hd = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), o = [], c = 0, u = r.length; c < u; c++) {
    var g = r[c].trim();
    if (g) {
      var S = g.match(fd);
      if (S) {
        var w = 0 | parseInt(S[1], 10), m = S[2];
        w !== 0 && (ud(m, w), pd(e, m, S[3]), e.getTag().insertRules(w, o)), o.length = 0;
      } else o.push(g);
    }
  }
}, md = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Is = function(e) {
  var t = document.head, r = e || t, o = document.createElement("style"), c = function(S) {
    for (var w = S.childNodes, m = w.length; m >= 0; m--) {
      var I = w[m];
      if (I && I.nodeType === 1 && I.hasAttribute(Dr)) return I;
    }
  }(r), u = c !== void 0 ? c.nextSibling : null;
  o.setAttribute(Dr, "active"), o.setAttribute("data-styled-version", "5.3.11");
  var g = md();
  return g && o.setAttribute("nonce", g), r.insertBefore(o, u), o;
}, gd = function() {
  function e(r) {
    var o = this.element = Is(r);
    o.appendChild(document.createTextNode("")), this.sheet = function(c) {
      if (c.sheet) return c.sheet;
      for (var u = document.styleSheets, g = 0, S = u.length; g < S; g++) {
        var w = u[g];
        if (w.ownerNode === c) return w;
      }
      yn(17);
    }(o), this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, o) {
    try {
      return this.sheet.insertRule(o, r), this.length++, !0;
    } catch {
      return !1;
    }
  }, t.deleteRule = function(r) {
    this.sheet.deleteRule(r), this.length--;
  }, t.getRule = function(r) {
    var o = this.sheet.cssRules[r];
    return o !== void 0 && typeof o.cssText == "string" ? o.cssText : "";
  }, e;
}(), yd = function() {
  function e(r) {
    var o = this.element = Is(r);
    this.nodes = o.childNodes, this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, o) {
    if (r <= this.length && r >= 0) {
      var c = document.createTextNode(o), u = this.nodes[r];
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
  return t.insertRule = function(r, o) {
    return r <= this.length && (this.rules.splice(r, 0, o), this.length++, !0);
  }, t.deleteRule = function(r) {
    this.rules.splice(r, 1), this.length--;
  }, t.getRule = function(r) {
    return r < this.length ? this.rules[r] : "";
  }, e;
}(), Ei = so, vd = { isServer: !so, useCSSOMInjection: !sd }, Ps = function() {
  function e(r, o, c) {
    r === void 0 && (r = yr), o === void 0 && (o = {}), this.options = cr({}, vd, {}, r), this.gs = o, this.names = new Map(c), this.server = !!r.isServer, !this.server && so && Ei && (Ei = !1, function(u) {
      for (var g = document.querySelectorAll(dd), S = 0, w = g.length; S < w; S++) {
        var m = g[S];
        m && m.getAttribute(Dr) !== "active" && (hd(u, m), m.parentNode && m.parentNode.removeChild(m));
      }
    }(this));
  }
  e.registerId = function(r) {
    return Bn(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, o) {
    return o === void 0 && (o = !0), new e(cr({}, this.options, {}, r), this.gs, o && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (c = (o = this.options).isServer, u = o.useCSSOMInjection, g = o.target, r = c ? new bd(g) : u ? new gd(g) : new yd(g), new ld(r)));
    var r, o, c, u, g;
  }, t.hasNameForId = function(r, o) {
    return this.names.has(r) && this.names.get(r).has(o);
  }, t.registerName = function(r, o) {
    if (Bn(r), this.names.has(r)) this.names.get(r).add(o);
    else {
      var c = /* @__PURE__ */ new Set();
      c.add(o), this.names.set(r, c);
    }
  }, t.insertRules = function(r, o, c) {
    this.registerName(r, o), this.getTag().insertRules(Bn(r), c);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(Bn(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var o = r.getTag(), c = o.length, u = "", g = 0; g < c; g++) {
        var S = cd(g);
        if (S !== void 0) {
          var w = r.names.get(S), m = o.getGroup(g);
          if (w && m && w.size) {
            var I = Dr + ".g" + g + '[id="' + S + '"]', T = "";
            w !== void 0 && w.forEach(function($) {
              $.length > 0 && (T += $ + ",");
            }), u += "" + m + I + '{content:"' + T + `"}/*!sc*/
`;
          }
        }
      }
      return u;
    }(this);
  }, e;
}(), wd = /(a)(d)/gi, Ai = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Ha(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = Ai(t % 52) + r;
  return (Ai(t % 52) + r).replace(wd, "$1-$2");
}
var Lr = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, Ds = function(e) {
  return Lr(5381, e);
};
function Sd(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (pn(r) && !io(r)) return !1;
  }
  return !0;
}
var kd = Ds("5.3.11"), xd = function() {
  function e(t, r, o) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (o === void 0 || o.isStatic) && Sd(t), this.componentId = r, this.baseHash = Lr(kd, r), this.baseStyle = o, Ps.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, o) {
    var c = this.componentId, u = [];
    if (this.baseStyle && u.push(this.baseStyle.generateAndInjectStyles(t, r, o)), this.isStatic && !o.hash) if (this.staticRulesId && r.hasNameForId(c, this.staticRulesId)) u.push(this.staticRulesId);
    else {
      var g = Fr(this.rules, t, r, o).join(""), S = Ha(Lr(this.baseHash, g) >>> 0);
      if (!r.hasNameForId(c, S)) {
        var w = o(g, "." + S, void 0, c);
        r.insertRules(c, S, w);
      }
      u.push(S), this.staticRulesId = S;
    }
    else {
      for (var m = this.rules.length, I = Lr(this.baseHash, o.hash), T = "", $ = 0; $ < m; $++) {
        var Y = this.rules[$];
        if (typeof Y == "string") T += Y;
        else if (Y) {
          var A = Fr(Y, t, r, o), k = Array.isArray(A) ? A.join("") : A;
          I = Lr(I, k + $), T += k;
        }
      }
      if (T) {
        var D = Ha(I >>> 0);
        if (!r.hasNameForId(c, D)) {
          var V = o(T, "." + D, void 0, c);
          r.insertRules(c, D, V);
        }
        u.push(D);
      }
    }
    return u.join(" ");
  }, e;
}(), _d = /^\s*\/\/.*$/gm, Cd = [":", "[", ".", "#"];
function Td(e) {
  var t, r, o, c, u = yr, g = u.options, S = g === void 0 ? yr : g, w = u.plugins, m = w === void 0 ? Kn : w, I = new qu(S), T = [], $ = /* @__PURE__ */ function(k) {
    function D(V) {
      if (V) try {
        k(V + "}");
      } catch {
      }
    }
    return function(V, G, J, H, x, ce, _e, Ie, De, Ve) {
      switch (V) {
        case 1:
          if (De === 0 && G.charCodeAt(0) === 64) return k(G + ";"), "";
          break;
        case 2:
          if (Ie === 0) return G + "/*|*/";
          break;
        case 3:
          switch (Ie) {
            case 102:
            case 112:
              return k(J[0] + G), "";
            default:
              return G + (Ve === 0 ? "/*|*/" : "");
          }
        case -2:
          G.split("/*|*/}").forEach(D);
      }
    };
  }(function(k) {
    T.push(k);
  }), Y = function(k, D, V) {
    return D === 0 && Cd.indexOf(V[r.length]) !== -1 || V.match(c) ? k : "." + t;
  };
  function A(k, D, V, G) {
    G === void 0 && (G = "&");
    var J = k.replace(_d, ""), H = D && V ? V + " " + D + " { " + J + " }" : J;
    return t = G, r = D, o = new RegExp("\\" + r + "\\b", "g"), c = new RegExp("(\\" + r + "\\b){2,}"), I(V || !D ? "" : D, H);
  }
  return I.use([].concat(m, [function(k, D, V) {
    k === 2 && V.length && V[0].lastIndexOf(r) > 0 && (V[0] = V[0].replace(o, Y));
  }, $, function(k) {
    if (k === -2) {
      var D = T;
      return T = [], D;
    }
  }])), A.hash = m.length ? m.reduce(function(k, D) {
    return D.name || yn(15), Lr(k, D.name);
  }, 5381).toString() : "", A;
}
var Fs = dt.createContext();
Fs.Consumer;
var Ms = dt.createContext(), Ed = (Ms.Consumer, new Ps()), Va = Td();
function Ad() {
  return br(Fs) || Ed;
}
function Od() {
  return br(Ms) || Va;
}
var Rd = function() {
  function e(t, r) {
    var o = this;
    this.inject = function(c, u) {
      u === void 0 && (u = Va);
      var g = o.name + u.hash;
      c.hasNameForId(o.id, g) || c.insertRules(o.id, g, u(o.rules, g, "@keyframes"));
    }, this.toString = function() {
      return yn(12, String(o.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Va), this.name + t.hash;
  }, e;
}(), Nd = /([A-Z])/, Ld = /([A-Z])/g, Id = /^ms-/, Pd = function(e) {
  return "-" + e.toLowerCase();
};
function Oi(e) {
  return Nd.test(e) ? e.replace(Ld, Pd).replace(Id, "-ms-") : e;
}
var Ri = function(e) {
  return e == null || e === !1 || e === "";
};
function Fr(e, t, r, o) {
  if (Array.isArray(e)) {
    for (var c, u = [], g = 0, S = e.length; g < S; g += 1) (c = Fr(e[g], t, r, o)) !== "" && (Array.isArray(c) ? u.push.apply(u, c) : u.push(c));
    return u;
  }
  if (Ri(e)) return "";
  if (io(e)) return "." + e.styledComponentId;
  if (pn(e)) {
    if (typeof (m = e) != "function" || m.prototype && m.prototype.isReactComponent || !t) return e;
    var w = e(t);
    return Fr(w, t, r, o);
  }
  var m;
  return e instanceof Rd ? r ? (e.inject(r, o), e.getName(o)) : e : Wa(e) ? function I(T, $) {
    var Y, A, k = [];
    for (var D in T) T.hasOwnProperty(D) && !Ri(T[D]) && (Array.isArray(T[D]) && T[D].isCss || pn(T[D]) ? k.push(Oi(D) + ":", T[D], ";") : Wa(T[D]) ? k.push.apply(k, I(T[D], D)) : k.push(Oi(D) + ": " + (Y = D, (A = T[D]) == null || typeof A == "boolean" || A === "" ? "" : typeof A != "number" || A === 0 || Y in Gu || Y.startsWith("--") ? String(A).trim() : A + "px") + ";"));
    return $ ? [$ + " {"].concat(k, ["}"]) : k;
  }(e) : e.toString();
}
var Ni = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Dd(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) r[o - 1] = arguments[o];
  return pn(e) || Wa(e) ? Ni(Fr(Ci(Kn, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Ni(Fr(Ci(e, r)));
}
var Fd = function(e, t, r) {
  return r === void 0 && (r = yr), e.theme !== r.theme && e.theme || t || r.theme;
}, Md = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, jd = /(^-|-$)/g;
function Ra(e) {
  return e.replace(Md, "-").replace(jd, "");
}
var zd = function(e) {
  return Ha(Ds(e) >>> 0);
};
function Wn(e) {
  return typeof e == "string" && ht.env.NODE_ENV === "production";
}
var qa = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, $d = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Ud(e, t, r) {
  var o = e[r];
  qa(t) && qa(o) ? js(o, t) : e[r] = t;
}
function js(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) r[o - 1] = arguments[o];
  for (var c = 0, u = r; c < u.length; c++) {
    var g = u[c];
    if (qa(g)) for (var S in g) $d(S) && Ud(e, g[S], S);
  }
  return e;
}
var zs = dt.createContext();
zs.Consumer;
var Na = {};
function $s(e, t, r) {
  var o = io(e), c = !Wn(e), u = t.attrs, g = u === void 0 ? Kn : u, S = t.componentId, w = S === void 0 ? function(G, J) {
    var H = typeof G != "string" ? "sc" : Ra(G);
    Na[H] = (Na[H] || 0) + 1;
    var x = H + "-" + zd("5.3.11" + H + Na[H]);
    return J ? J + "-" + x : x;
  }(t.displayName, t.parentComponentId) : S, m = t.displayName, I = m === void 0 ? function(G) {
    return Wn(G) ? "styled." + G : "Styled(" + Ti(G) + ")";
  }(e) : m, T = t.displayName && t.componentId ? Ra(t.displayName) + "-" + t.componentId : t.componentId || w, $ = o && e.attrs ? Array.prototype.concat(e.attrs, g).filter(Boolean) : g, Y = t.shouldForwardProp;
  o && e.shouldForwardProp && (Y = t.shouldForwardProp ? function(G, J, H) {
    return e.shouldForwardProp(G, J, H) && t.shouldForwardProp(G, J, H);
  } : e.shouldForwardProp);
  var A, k = new xd(r, T, o ? e.componentStyle : void 0), D = k.isStatic && g.length === 0, V = function(G, J) {
    return function(H, x, ce, _e) {
      var Ie = H.attrs, De = H.componentStyle, Ve = H.defaultProps, ue = H.foldedComponentIds, pe = H.shouldForwardProp, Ne = H.styledComponentId, Le = H.target, Ee = function(P, p, re) {
        P === void 0 && (P = yr);
        var E = cr({}, p, { theme: P }), ne = {};
        return re.forEach(function(ee) {
          var te, B, oe, se = ee;
          for (te in pn(se) && (se = se(E)), se) E[te] = ne[te] = te === "className" ? (B = ne[te], oe = se[te], B && oe ? B + " " + oe : B || oe) : se[te];
        }), [E, ne];
      }(Fd(x, br(zs), Ve) || yr, x, Ie), st = Ee[0], Fe = Ee[1], Ae = function(P, p, re, E) {
        var ne = Ad(), ee = Od(), te = p ? P.generateAndInjectStyles(yr, ne, ee) : P.generateAndInjectStyles(re, ne, ee);
        return te;
      }(De, _e, st), Ue = ce, Ke = Fe.$as || x.$as || Fe.as || x.as || Le, ie = Wn(Ke), M = Fe !== x ? cr({}, x, {}, Fe) : x, C = {};
      for (var F in M) F[0] !== "$" && F !== "as" && (F === "forwardedAs" ? C.as = M[F] : (pe ? pe(F, wi, Ke) : !ie || wi(F)) && (C[F] = M[F]));
      return x.style && Fe.style !== x.style && (C.style = cr({}, x.style, {}, Fe.style)), C.className = Array.prototype.concat(ue, Ne, Ae !== Ne ? Ae : null, x.className, Fe.className).filter(Boolean).join(" "), C.ref = Ue, Ii(Ke, C);
    }(A, G, J, D);
  };
  return V.displayName = I, (A = dt.forwardRef(V)).attrs = $, A.componentStyle = k, A.displayName = I, A.shouldForwardProp = Y, A.foldedComponentIds = o ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Kn, A.styledComponentId = T, A.target = o ? e.target : e, A.withComponent = function(G) {
    var J = t.componentId, H = function(ce, _e) {
      if (ce == null) return {};
      var Ie, De, Ve = {}, ue = Object.keys(ce);
      for (De = 0; De < ue.length; De++) Ie = ue[De], _e.indexOf(Ie) >= 0 || (Ve[Ie] = ce[Ie]);
      return Ve;
    }(t, ["componentId"]), x = J && J + "-" + (Wn(G) ? G : Ra(Ti(G)));
    return $s(G, cr({}, H, { attrs: $, componentId: x }), r);
  }, Object.defineProperty(A, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(G) {
    this._foldedDefaultProps = o ? js({}, e.defaultProps, G) : G;
  } }), Object.defineProperty(A, "toString", { value: function() {
    return "." + A.styledComponentId;
  } }), c && id(A, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), A;
}
var ta = function(e) {
  return function t(r, o, c) {
    if (c === void 0 && (c = yr), !Os.isValidElementType(o)) return yn(1, String(o));
    var u = function() {
      return r(o, c, Dd.apply(void 0, arguments));
    };
    return u.withConfig = function(g) {
      return t(r, o, cr({}, c, {}, g));
    }, u.attrs = function(g) {
      return t(r, o, cr({}, c, { attrs: Array.prototype.concat(c.attrs, g).filter(Boolean) }));
    }, u;
  }($s, e);
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
  const { feeds: e } = br(eo);
  return /* @__PURE__ */ ut.jsx(Bd, { "data-testid": "grid-view-container", children: e == null ? void 0 : e.map((t) => /* @__PURE__ */ ut.jsx("li", { children: /* @__PURE__ */ ut.jsx(
    mr,
    {
      type: "event",
      eventFormat: "inline",
      eventTime: `<span>
                ${Zn(t.startDate, "COMPLETE")} <br /> ${Es(
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
}, Us = ({ header: e, ctaButton: t, dataSource: r, maxItems: o }) => (dn(() => {
  typeof window < "u" && Hi({
    packageName: "component-events",
    component: "CardsGridEvents",
    type: "NA",
    configuration: {
      header: e,
      ctaButton: t,
      dataSource: r,
      maxItems: o
    }
  });
}, []), // Calling the high order component that fetch the data
/* @__PURE__ */ ut.jsx(no, { header: e, ctaButton: t, dataSource: r, maxItems: o, children: /* @__PURE__ */ ut.jsx(Wd, {}) }));
Us.propTypes = Ts;
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
`, Vd = () => {
  const { feeds: e } = br(eo);
  return /* @__PURE__ */ ut.jsx(Hd, { "data-testid": "list-view-container", children: e == null ? void 0 : e.map((t) => /* @__PURE__ */ ut.jsx("li", { children: /* @__PURE__ */ ut.jsx(
    mr,
    {
      type: "event",
      eventFormat: "inline",
      horizontal: !0,
      eventTime: `<span>
                ${Zn(t.startDate, "COMPLETE")} <br /> ${Es(
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
}, Bs = ({ header: e, ctaButton: t, dataSource: r, maxItems: o }) => (dn(() => {
  typeof window < "u" && Hi({
    packageName: "component-events",
    component: "CardsListEvents",
    type: "NA",
    configuration: {
      header: e,
      ctaButton: t,
      dataSource: r,
      maxItems: o
    }
  });
}, []), // Calling the high order component that fetch the data
/* @__PURE__ */ ut.jsx(no, { header: e, ctaButton: t, dataSource: r, maxItems: o, children: /* @__PURE__ */ ut.jsx(Vd, {}) }));
Bs.propTypes = Ts;
var Ws, Li = Pi;
Ws = Li.createRoot, Li.hydrateRoot;
const Hs = (e, t, r) => {
  Ws(r).render(dt.createElement(e, t));
}, Yd = ({ targetSelector: e, props: t }) => {
  Hs(Us, t, document.querySelector(e));
}, Xd = ({ targetSelector: e, props: t }) => {
  Hs(Bs, t, document.querySelector(e));
};
export {
  Us as CardsGridEvents,
  Bs as CardsListEvents,
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
