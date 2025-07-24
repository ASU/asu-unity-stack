import dt, { Component as Ks, createContext as el, forwardRef as Ri, useRef as tl, useImperativeHandle as rl, useId as nl, useContext as yr, createElement as Ni, useState as on, useEffect as un } from "react";
import Li from "react-dom";
function Ii(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Pi = { exports: {} }, Gr = {};
var _o;
function al() {
  if (_o) return Gr;
  _o = 1;
  var e = dt, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, c = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(S, w, m) {
    var I, E = {}, U = null, J = null;
    m !== void 0 && (U = "" + m), w.key !== void 0 && (U = "" + w.key), w.ref !== void 0 && (J = w.ref);
    for (I in w) o.call(w, I) && !u.hasOwnProperty(I) && (E[I] = w[I]);
    if (S && S.defaultProps) for (I in w = S.defaultProps, w) E[I] === void 0 && (E[I] = w[I]);
    return { $$typeof: t, type: S, key: U, ref: J, props: E, _owner: c.current };
  }
  return Gr.Fragment = r, Gr.jsx = y, Gr.jsxs = y, Gr;
}
Pi.exports = al();
var ut = Pi.exports;
const {
  entries: Di,
  setPrototypeOf: Co,
  isFrozen: ol,
  getPrototypeOf: il,
  getOwnPropertyDescriptor: sl
} = Object;
let {
  freeze: wt,
  seal: Lt,
  create: Fi
} = Object, {
  apply: Na,
  construct: La
} = typeof Reflect < "u" && Reflect;
wt || (wt = function(t) {
  return t;
});
Lt || (Lt = function(t) {
  return t;
});
Na || (Na = function(t, r, o) {
  return t.apply(r, o);
});
La || (La = function(t, r) {
  return new t(...r);
});
const Pn = St(Array.prototype.forEach), ll = St(Array.prototype.lastIndexOf), To = St(Array.prototype.pop), Yr = St(Array.prototype.push), cl = St(Array.prototype.splice), Wn = St(String.prototype.toLowerCase), fa = St(String.prototype.toString), Eo = St(String.prototype.match), Xr = St(String.prototype.replace), ul = St(String.prototype.indexOf), dl = St(String.prototype.trim), Vt = St(Object.prototype.hasOwnProperty), bt = St(RegExp.prototype.test), Jr = fl(TypeError);
function St(e) {
  return function(t) {
    for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), c = 1; c < r; c++)
      o[c - 1] = arguments[c];
    return Na(e, t, o);
  };
}
function fl(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++)
      r[o] = arguments[o];
    return La(e, r);
  };
}
function Oe(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Wn;
  Co && Co(e, null);
  let o = t.length;
  for (; o--; ) {
    let c = t[o];
    if (typeof c == "string") {
      const u = r(c);
      u !== c && (ol(t) || (t[o] = u), c = u);
    }
    e[c] = !0;
  }
  return e;
}
function pl(e) {
  for (let t = 0; t < e.length; t++)
    Vt(e, t) || (e[t] = null);
  return e;
}
function Cr(e) {
  const t = Fi(null);
  for (const [r, o] of Di(e))
    Vt(e, r) && (Array.isArray(o) ? t[r] = pl(o) : o && typeof o == "object" && o.constructor === Object ? t[r] = Cr(o) : t[r] = o);
  return t;
}
function Qr(e, t) {
  for (; e !== null; ) {
    const o = sl(e, t);
    if (o) {
      if (o.get)
        return St(o.get);
      if (typeof o.value == "function")
        return St(o.value);
    }
    e = il(e);
  }
  function r() {
    return null;
  }
  return r;
}
const Ao = wt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), pa = wt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ha = wt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), hl = wt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ma = wt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), ml = wt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Oo = wt(["#text"]), Ro = wt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), ga = wt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), No = wt(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Dn = wt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), gl = Lt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), yl = Lt(/<%[\w\W]*|[\w\W]*%>/gm), bl = Lt(/\$\{[\w\W]*/gm), vl = Lt(/^data-[\-\w.\u00B7-\uFFFF]+$/), wl = Lt(/^aria-[\-\w]+$/), Mi = Lt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Sl = Lt(/^(?:\w+script|data):/i), kl = Lt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), ji = Lt(/^html$/i), xl = Lt(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Lo = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: wl,
  ATTR_WHITESPACE: kl,
  CUSTOM_ELEMENT: xl,
  DATA_ATTR: vl,
  DOCTYPE_NAME: ji,
  ERB_EXPR: yl,
  IS_ALLOWED_URI: Mi,
  IS_SCRIPT_OR_DATA: Sl,
  MUSTACHE_EXPR: gl,
  TMPLIT_EXPR: bl
});
const Zr = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, _l = function() {
  return typeof window > "u" ? null : window;
}, Cl = function(t, r) {
  if (typeof t != "object" || typeof t.createPolicy != "function")
    return null;
  let o = null;
  const c = "data-tt-policy-suffix";
  r && r.hasAttribute(c) && (o = r.getAttribute(c));
  const u = "dompurify" + (o ? "#" + o : "");
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
}, Io = function() {
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
function zi() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _l();
  const t = (h) => zi(h);
  if (t.version = "3.2.4", t.removed = [], !e || !e.document || e.document.nodeType !== Zr.document || !e.Element)
    return t.isSupported = !1, t;
  let {
    document: r
  } = e;
  const o = r, c = o.currentScript, {
    DocumentFragment: u,
    HTMLTemplateElement: y,
    Node: S,
    Element: w,
    NodeFilter: m,
    NamedNodeMap: I = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: E,
    DOMParser: U,
    trustedTypes: J
  } = e, R = w.prototype, k = Qr(R, "cloneNode"), D = Qr(R, "remove"), H = Qr(R, "nextSibling"), q = Qr(R, "childNodes"), X = Qr(R, "parentNode");
  if (typeof y == "function") {
    const h = r.createElement("template");
    h.content && h.content.ownerDocument && (r = h.content.ownerDocument);
  }
  let W, x = "";
  const {
    implementation: ce,
    createNodeIterator: _e,
    createDocumentFragment: Ie,
    getElementsByTagName: De
  } = r, {
    importNode: Ve
  } = o;
  let ue = Io();
  t.isSupported = typeof Di == "function" && typeof X == "function" && ce && ce.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: pe,
    ERB_EXPR: Ne,
    TMPLIT_EXPR: Le,
    DATA_ATTR: Ee,
    ARIA_ATTR: st,
    IS_SCRIPT_OR_DATA: Fe,
    ATTR_WHITESPACE: Ae,
    CUSTOM_ELEMENT: $e
  } = Lo;
  let {
    IS_ALLOWED_URI: Ke
  } = Lo, ie = null;
  const M = Oe({}, [...Ao, ...pa, ...ha, ...ma, ...Oo]);
  let C = null;
  const F = Oe({}, [...Ro, ...ga, ...No, ...Dn]);
  let P = Object.seal(Fi(null, {
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
  })), p = null, re = null, T = !0, ne = !0, ee = !1, te = !0, B = !1, oe = !0, se = !1, K = !1, he = !1, Z = !1, le = !1, Ue = !1, me = !0, it = !1;
  const Ge = "user-content-";
  let ge = !0, $ = !1, ae = {}, Ye = null;
  const lt = Oe({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let Me = null;
  const Yt = Oe({}, ["audio", "video", "img", "source", "image", "track"]);
  let Rt = null;
  const Kt = Oe({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), mt = "http://www.w3.org/1998/Math/MathML", ft = "http://www.w3.org/2000/svg", nt = "http://www.w3.org/1999/xhtml";
  let ct = nt, Pt = !1, Dt = null;
  const br = Oe({}, [mt, ft, nt], fa);
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
      if ((!b || typeof b != "object") && (b = {}), b = Cr(b), Ce = // eslint-disable-next-line unicorn/prefer-includes
      Ft.indexOf(b.PARSER_MEDIA_TYPE) === -1 ? Jt : b.PARSER_MEDIA_TYPE, ve = Ce === "application/xhtml+xml" ? fa : Wn, ie = Vt(b, "ALLOWED_TAGS") ? Oe({}, b.ALLOWED_TAGS, ve) : M, C = Vt(b, "ALLOWED_ATTR") ? Oe({}, b.ALLOWED_ATTR, ve) : F, Dt = Vt(b, "ALLOWED_NAMESPACES") ? Oe({}, b.ALLOWED_NAMESPACES, fa) : br, Rt = Vt(b, "ADD_URI_SAFE_ATTR") ? Oe(Cr(Kt), b.ADD_URI_SAFE_ATTR, ve) : Kt, Me = Vt(b, "ADD_DATA_URI_TAGS") ? Oe(Cr(Yt), b.ADD_DATA_URI_TAGS, ve) : Yt, Ye = Vt(b, "FORBID_CONTENTS") ? Oe({}, b.FORBID_CONTENTS, ve) : lt, p = Vt(b, "FORBID_TAGS") ? Oe({}, b.FORBID_TAGS, ve) : {}, re = Vt(b, "FORBID_ATTR") ? Oe({}, b.FORBID_ATTR, ve) : {}, ae = Vt(b, "USE_PROFILES") ? b.USE_PROFILES : !1, T = b.ALLOW_ARIA_ATTR !== !1, ne = b.ALLOW_DATA_ATTR !== !1, ee = b.ALLOW_UNKNOWN_PROTOCOLS || !1, te = b.ALLOW_SELF_CLOSE_IN_ATTR !== !1, B = b.SAFE_FOR_TEMPLATES || !1, oe = b.SAFE_FOR_XML !== !1, se = b.WHOLE_DOCUMENT || !1, Z = b.RETURN_DOM || !1, le = b.RETURN_DOM_FRAGMENT || !1, Ue = b.RETURN_TRUSTED_TYPE || !1, he = b.FORCE_BODY || !1, me = b.SANITIZE_DOM !== !1, it = b.SANITIZE_NAMED_PROPS || !1, ge = b.KEEP_CONTENT !== !1, $ = b.IN_PLACE || !1, Ke = b.ALLOWED_URI_REGEXP || Mi, ct = b.NAMESPACE || nt, ot = b.MATHML_TEXT_INTEGRATION_POINTS || ot, gt = b.HTML_INTEGRATION_POINTS || gt, P = b.CUSTOM_ELEMENT_HANDLING || {}, b.CUSTOM_ELEMENT_HANDLING && yt(b.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (P.tagNameCheck = b.CUSTOM_ELEMENT_HANDLING.tagNameCheck), b.CUSTOM_ELEMENT_HANDLING && yt(b.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (P.attributeNameCheck = b.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), b.CUSTOM_ELEMENT_HANDLING && typeof b.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (P.allowCustomizedBuiltInElements = b.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), B && (ne = !1), le && (Z = !0), ae && (ie = Oe({}, Oo), C = [], ae.html === !0 && (Oe(ie, Ao), Oe(C, Ro)), ae.svg === !0 && (Oe(ie, pa), Oe(C, ga), Oe(C, Dn)), ae.svgFilters === !0 && (Oe(ie, ha), Oe(C, ga), Oe(C, Dn)), ae.mathMl === !0 && (Oe(ie, ma), Oe(C, No), Oe(C, Dn))), b.ADD_TAGS && (ie === M && (ie = Cr(ie)), Oe(ie, b.ADD_TAGS, ve)), b.ADD_ATTR && (C === F && (C = Cr(C)), Oe(C, b.ADD_ATTR, ve)), b.ADD_URI_SAFE_ATTR && Oe(Rt, b.ADD_URI_SAFE_ATTR, ve), b.FORBID_CONTENTS && (Ye === lt && (Ye = Cr(Ye)), Oe(Ye, b.FORBID_CONTENTS, ve)), ge && (ie["#text"] = !0), se && Oe(ie, ["html", "head", "body"]), ie.table && (Oe(ie, ["tbody"]), delete p.tbody), b.TRUSTED_TYPES_POLICY) {
        if (typeof b.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Jr('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof b.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Jr('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        W = b.TRUSTED_TYPES_POLICY, x = W.createHTML("");
      } else
        W === void 0 && (W = Cl(J, c)), W !== null && typeof x == "string" && (x = W.createHTML(""));
      wt && wt(b), et = b;
    }
  }, Mt = Oe({}, [...pa, ...ha, ...hl]), jt = Oe({}, [...ma, ...ml]), ur = function(b) {
    let _ = X(b);
    (!_ || !_.tagName) && (_ = {
      namespaceURI: ct,
      tagName: "template"
    });
    const V = Wn(b.tagName), ye = Wn(_.tagName);
    return Dt[b.namespaceURI] ? b.namespaceURI === ft ? _.namespaceURI === nt ? V === "svg" : _.namespaceURI === mt ? V === "svg" && (ye === "annotation-xml" || ot[ye]) : !!Mt[V] : b.namespaceURI === mt ? _.namespaceURI === nt ? V === "math" : _.namespaceURI === ft ? V === "math" && gt[ye] : !!jt[V] : b.namespaceURI === nt ? _.namespaceURI === ft && !gt[ye] || _.namespaceURI === mt && !ot[ye] ? !1 : !jt[V] && (Xt[V] || !Mt[V]) : !!(Ce === "application/xhtml+xml" && Dt[b.namespaceURI]) : !1;
  }, at = function(b) {
    Yr(t.removed, {
      element: b
    });
    try {
      X(b).removeChild(b);
    } catch {
      D(b);
    }
  }, _t = function(b, _) {
    try {
      Yr(t.removed, {
        attribute: _.getAttributeNode(b),
        from: _
      });
    } catch {
      Yr(t.removed, {
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
    let _ = null, V = null;
    if (he)
      b = "<remove></remove>" + b;
    else {
      const Pe = Eo(b, /^[\r\n\t ]+/);
      V = Pe && Pe[0];
    }
    Ce === "application/xhtml+xml" && ct === nt && (b = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + b + "</body></html>");
    const ye = W ? W.createHTML(b) : b;
    if (ct === nt)
      try {
        _ = new U().parseFromString(ye, Ce);
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
    return b && V && Se.insertBefore(r.createTextNode(V), Se.childNodes[0] || null), ct === nt ? De.call(_, se ? "html" : "body")[0] : se ? _.documentElement : Se;
  }, tr = function(b) {
    return _e.call(
      b.ownerDocument || b,
      b,
      // eslint-disable-next-line no-bitwise
      m.SHOW_ELEMENT | m.SHOW_COMMENT | m.SHOW_TEXT | m.SHOW_PROCESSING_INSTRUCTION | m.SHOW_CDATA_SECTION,
      null
    );
  }, Ct = function(b) {
    return b instanceof E && (typeof b.nodeName != "string" || typeof b.textContent != "string" || typeof b.removeChild != "function" || !(b.attributes instanceof I) || typeof b.removeAttribute != "function" || typeof b.setAttribute != "function" || typeof b.namespaceURI != "string" || typeof b.insertBefore != "function" || typeof b.hasChildNodes != "function");
  }, Zt = function(b) {
    return typeof S == "function" && b instanceof S;
  };
  function Xe(h, b, _) {
    Pn(h, (V) => {
      V.call(t, b, _, et);
    });
  }
  const zt = function(b) {
    let _ = null;
    if (Xe(ue.beforeSanitizeElements, b, null), Ct(b))
      return at(b), !0;
    const V = ve(b.nodeName);
    if (Xe(ue.uponSanitizeElement, b, {
      tagName: V,
      allowedTags: ie
    }), b.hasChildNodes() && !Zt(b.firstElementChild) && bt(/<[/\w]/g, b.innerHTML) && bt(/<[/\w]/g, b.textContent) || b.nodeType === Zr.progressingInstruction || oe && b.nodeType === Zr.comment && bt(/<[/\w]/g, b.data))
      return at(b), !0;
    if (!ie[V] || p[V]) {
      if (!p[V] && Tt(V) && (P.tagNameCheck instanceof RegExp && bt(P.tagNameCheck, V) || P.tagNameCheck instanceof Function && P.tagNameCheck(V)))
        return !1;
      if (ge && !Ye[V]) {
        const ye = X(b) || b.parentNode, Se = q(b) || b.childNodes;
        if (Se && ye) {
          const Pe = Se.length;
          for (let we = Pe - 1; we >= 0; --we) {
            const Je = k(Se[we], !0);
            Je.__removalCount = (b.__removalCount || 0) + 1, ye.insertBefore(Je, H(b));
          }
        }
      }
      return at(b), !0;
    }
    return b instanceof w && !ur(b) || (V === "noscript" || V === "noembed" || V === "noframes") && bt(/<\/no(script|embed|frames)/i, b.innerHTML) ? (at(b), !0) : (B && b.nodeType === Zr.text && (_ = b.textContent, Pn([pe, Ne, Le], (ye) => {
      _ = Xr(_, ye, " ");
    }), b.textContent !== _ && (Yr(t.removed, {
      element: b.cloneNode()
    }), b.textContent = _)), Xe(ue.afterSanitizeElements, b, null), !1);
  }, rr = function(b, _, V) {
    if (me && (_ === "id" || _ === "name") && (V in r || V in Qt))
      return !1;
    if (!(ne && !re[_] && bt(Ee, _))) {
      if (!(T && bt(st, _))) {
        if (!C[_] || re[_]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(Tt(b) && (P.tagNameCheck instanceof RegExp && bt(P.tagNameCheck, b) || P.tagNameCheck instanceof Function && P.tagNameCheck(b)) && (P.attributeNameCheck instanceof RegExp && bt(P.attributeNameCheck, _) || P.attributeNameCheck instanceof Function && P.attributeNameCheck(_)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            _ === "is" && P.allowCustomizedBuiltInElements && (P.tagNameCheck instanceof RegExp && bt(P.tagNameCheck, V) || P.tagNameCheck instanceof Function && P.tagNameCheck(V)))
          ) return !1;
        } else if (!Rt[_]) {
          if (!bt(Ke, Xr(V, Ae, ""))) {
            if (!((_ === "src" || _ === "xlink:href" || _ === "href") && b !== "script" && ul(V, "data:") === 0 && Me[b])) {
              if (!(ee && !bt(Fe, Xr(V, Ae, "")))) {
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
    return b !== "annotation-xml" && Eo(b, $e);
  }, nr = function(b) {
    Xe(ue.beforeSanitizeAttributes, b, null);
    const {
      attributes: _
    } = b;
    if (!_ || Ct(b))
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
      const Se = _[ye], {
        name: Pe,
        namespaceURI: we,
        value: Je
      } = Se, qe = ve(Pe);
      let tt = Pe === "value" ? Je : dl(Je);
      if (V.attrName = qe, V.attrValue = tt, V.keepAttr = !0, V.forceKeepAttr = void 0, Xe(ue.uponSanitizeAttribute, b, V), tt = V.attrValue, it && (qe === "id" || qe === "name") && (_t(Pe, b), tt = Ge + tt), oe && bt(/((--!?|])>)|<\/(style|title)/i, tt)) {
        _t(Pe, b);
        continue;
      }
      if (V.forceKeepAttr || (_t(Pe, b), !V.keepAttr))
        continue;
      if (!te && bt(/\/>/i, tt)) {
        _t(Pe, b);
        continue;
      }
      B && Pn([pe, Ne, Le], (Ut) => {
        tt = Xr(tt, Ut, " ");
      });
      const or = ve(b.nodeName);
      if (rr(or, qe, tt)) {
        if (W && typeof J == "object" && typeof J.getAttributeType == "function" && !we)
          switch (J.getAttributeType(or, qe)) {
            case "TrustedHTML": {
              tt = W.createHTML(tt);
              break;
            }
            case "TrustedScriptURL": {
              tt = W.createScriptURL(tt);
              break;
            }
          }
        try {
          we ? b.setAttributeNS(we, Pe, tt) : b.setAttribute(Pe, tt), Ct(b) ? at(b) : To(t.removed);
        } catch {
        }
      }
    }
    Xe(ue.afterSanitizeAttributes, b, null);
  }, ar = function h(b) {
    let _ = null;
    const V = tr(b);
    for (Xe(ue.beforeSanitizeShadowDOM, b, null); _ = V.nextNode(); )
      Xe(ue.uponSanitizeShadowNode, _, null), zt(_), nr(_), _.content instanceof u && h(_.content);
    Xe(ue.afterSanitizeShadowDOM, b, null);
  };
  return t.sanitize = function(h) {
    let b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ = null, V = null, ye = null, Se = null;
    if (Pt = !h, Pt && (h = "<!-->"), typeof h != "string" && !Zt(h))
      if (typeof h.toString == "function") {
        if (h = h.toString(), typeof h != "string")
          throw Jr("dirty is not a string, aborting");
      } else
        throw Jr("toString is not a function");
    if (!t.isSupported)
      return h;
    if (K || Nt(b), t.removed = [], typeof h == "string" && ($ = !1), $) {
      if (h.nodeName) {
        const Je = ve(h.nodeName);
        if (!ie[Je] || p[Je])
          throw Jr("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (h instanceof S)
      _ = er("<!---->"), V = _.ownerDocument.importNode(h, !0), V.nodeType === Zr.element && V.nodeName === "BODY" || V.nodeName === "HTML" ? _ = V : _.appendChild(V);
    else {
      if (!Z && !B && !se && // eslint-disable-next-line unicorn/prefer-includes
      h.indexOf("<") === -1)
        return W && Ue ? W.createHTML(h) : h;
      if (_ = er(h), !_)
        return Z ? null : Ue ? x : "";
    }
    _ && he && at(_.firstChild);
    const Pe = tr($ ? h : _);
    for (; ye = Pe.nextNode(); )
      zt(ye), nr(ye), ye.content instanceof u && ar(ye.content);
    if ($)
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
    return se && ie["!doctype"] && _.ownerDocument && _.ownerDocument.doctype && _.ownerDocument.doctype.name && bt(ji, _.ownerDocument.doctype.name) && (we = "<!DOCTYPE " + _.ownerDocument.doctype.name + `>
` + we), B && Pn([pe, Ne, Le], (Je) => {
      we = Xr(we, Je, " ");
    }), W && Ue ? W.createHTML(we) : we;
  }, t.setConfig = function() {
    let h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Nt(h), K = !0;
  }, t.clearConfig = function() {
    et = null, K = !1;
  }, t.isValidAttribute = function(h, b, _) {
    et || Nt({});
    const V = ve(h), ye = ve(b);
    return rr(V, ye, _);
  }, t.addHook = function(h, b) {
    typeof b == "function" && Yr(ue[h], b);
  }, t.removeHook = function(h, b) {
    if (b !== void 0) {
      const _ = ll(ue[h], b);
      return _ === -1 ? void 0 : cl(ue[h], _, 1)[0];
    }
    return To(ue[h]);
  }, t.removeHooks = function(h) {
    ue[h] = [];
  }, t.removeAllHooks = function() {
    ue = Io();
  }, t;
}
zi();
var Ui = { exports: {} }, ya, Po;
function Tl() {
  if (Po) return ya;
  Po = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ya = e, ya;
}
var ba, Do;
function El() {
  if (Do) return ba;
  Do = 1;
  var e = Tl();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, ba = function() {
    function o(y, S, w, m, I, E) {
      if (E !== e) {
        var U = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw U.name = "Invariant Violation", U;
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
  }, ba;
}
Ui.exports = El()();
var Al = Ui.exports;
const He = /* @__PURE__ */ Ii(Al);
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
const pn = ({ children: e }) => /* @__PURE__ */ ut.jsx(ut.Fragment, { children: e });
pn.propTypes = {
  children: He.oneOfType([
    He.arrayOf(He.node),
    He.node,
    He.string
  ])
};
var Ol = { exports: {} };
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var u = "", y = 0; y < arguments.length; y++) {
        var S = arguments[y];
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
})(Ol);
({
  ...pn.propTypes
});
const $i = ({ children: e, className: t = "container", ...r }) => /* @__PURE__ */ ut.jsx("div", { className: t, ...r, children: /* @__PURE__ */ ut.jsx("div", { className: "row", children: e }) });
$i.propTypes = {
  children: pn.propTypes.children
};
({
  ...$i.propTypes
});
pn.propTypes.children, He.oneOf(["0", "3", "4", "6", "8", "9", "12"]);
pn.propTypes.children;
function Bi({
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
function qa(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Wi = { exports: {} }, Kr = {}, Fo;
function Rl() {
  if (Fo) return Kr;
  Fo = 1;
  var e = dt, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, c = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(S, w, m) {
    var I, E = {}, U = null, J = null;
    m !== void 0 && (U = "" + m), w.key !== void 0 && (U = "" + w.key), w.ref !== void 0 && (J = w.ref);
    for (I in w) o.call(w, I) && !u.hasOwnProperty(I) && (E[I] = w[I]);
    if (S && S.defaultProps) for (I in w = S.defaultProps, w) E[I] === void 0 && (E[I] = w[I]);
    return { $$typeof: t, type: S, key: U, ref: J, props: E, _owner: c.current };
  }
  return Kr.Fragment = r, Kr.jsx = y, Kr.jsxs = y, Kr;
}
Wi.exports = Rl();
var G = Wi.exports, Hi = { exports: {} }, va, Mo;
function Nl() {
  if (Mo) return va;
  Mo = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return va = e, va;
}
var wa, jo;
function Ll() {
  if (jo) return wa;
  jo = 1;
  var e = Nl();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, wa = function() {
    function o(y, S, w, m, I, E) {
      if (E !== e) {
        var U = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw U.name = "Invariant Violation", U;
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
  }, wa;
}
Hi.exports = Ll()();
var Il = Hi.exports;
const i = /* @__PURE__ */ qa(Il), Pl = i.shape({
  url: i.string,
  altText: i.string,
  cssClass: i.arrayOf(i.string),
  size: i.oneOf(["small", "medium", "large"])
}), Sa = i.shape({
  text: i.string,
  maxWidth: i.string,
  cssClass: i.arrayOf(i.string),
  highlightColor: i.oneOf(["gold", "black"])
}), Vi = i.shape({
  color: i.oneOf(["gold", "maroon", "gray", "dark"]),
  content: i.shape({
    icon: i.arrayOf(i.string),
    header: i.string,
    body: i.string
  })
}), Ga = i.shape({
  text: i.string,
  name: i.string,
  event: i.string,
  action: i.string,
  type: i.string,
  region: i.string,
  section: i.string,
  component: i.string
}), Dl = () => {
  const [e, t] = on(null), [r, o] = on(!1), [c, u] = on(null), [y, S] = on("");
  return un(() => {
    y && (() => {
      u(null), o(!0);
      try {
        fetch(y).then((w) => w.json()).then((w) => {
          t(w), o(!1);
        }).catch((w) => {
          u(w), o(!1);
        });
      } catch (w) {
        u(w);
      }
    })();
  }, [y]), [{ data: e, loading: r, error: c }, S];
}, Fl = (e) => (e || []).join(" "), {
  entries: qi,
  setPrototypeOf: zo,
  isFrozen: Ml,
  getPrototypeOf: jl,
  getOwnPropertyDescriptor: zl
} = Object;
let {
  freeze: kt,
  seal: It,
  create: Gi
} = Object, {
  apply: Ia,
  construct: Pa
} = typeof Reflect < "u" && Reflect;
kt || (kt = function(e) {
  return e;
});
It || (It = function(e) {
  return e;
});
Ia || (Ia = function(e, t, r) {
  return e.apply(t, r);
});
Pa || (Pa = function(e, t) {
  return new e(...t);
});
const Fn = xt(Array.prototype.forEach), Ul = xt(Array.prototype.lastIndexOf), Uo = xt(Array.prototype.pop), en = xt(Array.prototype.push), $l = xt(Array.prototype.splice), Hn = xt(String.prototype.toLowerCase), ka = xt(String.prototype.toString), $o = xt(String.prototype.match), tn = xt(String.prototype.replace), Bl = xt(String.prototype.indexOf), Wl = xt(String.prototype.trim), qt = xt(Object.prototype.hasOwnProperty), vt = xt(RegExp.prototype.test), rn = Hl(TypeError);
function xt(e) {
  return function(t) {
    for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), c = 1; c < r; c++)
      o[c - 1] = arguments[c];
    return Ia(e, t, o);
  };
}
function Hl(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++)
      r[o] = arguments[o];
    return Pa(e, r);
  };
}
function Re(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Hn;
  zo && zo(e, null);
  let o = t.length;
  for (; o--; ) {
    let c = t[o];
    if (typeof c == "string") {
      const u = r(c);
      u !== c && (Ml(t) || (t[o] = u), c = u);
    }
    e[c] = !0;
  }
  return e;
}
function Vl(e) {
  for (let t = 0; t < e.length; t++)
    qt(e, t) || (e[t] = null);
  return e;
}
function Tr(e) {
  const t = Gi(null);
  for (const [r, o] of qi(e))
    qt(e, r) && (Array.isArray(o) ? t[r] = Vl(o) : o && typeof o == "object" && o.constructor === Object ? t[r] = Tr(o) : t[r] = o);
  return t;
}
function nn(e, t) {
  for (; e !== null; ) {
    const o = zl(e, t);
    if (o) {
      if (o.get)
        return xt(o.get);
      if (typeof o.value == "function")
        return xt(o.value);
    }
    e = jl(e);
  }
  function r() {
    return null;
  }
  return r;
}
const Bo = kt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), xa = kt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), _a = kt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), ql = kt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Ca = kt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Gl = kt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Wo = kt(["#text"]), Ho = kt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), Ta = kt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Vo = kt(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Mn = kt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Yl = It(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Xl = It(/<%[\w\W]*|[\w\W]*%>/gm), Jl = It(/\$\{[\w\W]*/gm), Ql = It(/^data-[\-\w.\u00B7-\uFFFF]+$/), Zl = It(/^aria-[\-\w]+$/), Yi = It(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Kl = It(/^(?:\w+script|data):/i), ec = It(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), Xi = It(/^html$/i), tc = It(/^[a-z][.\w]*(-[.\w]+)+$/i);
var qo = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: Zl,
  ATTR_WHITESPACE: ec,
  CUSTOM_ELEMENT: tc,
  DATA_ATTR: Ql,
  DOCTYPE_NAME: Xi,
  ERB_EXPR: Xl,
  IS_ALLOWED_URI: Yi,
  IS_SCRIPT_OR_DATA: Kl,
  MUSTACHE_EXPR: Yl,
  TMPLIT_EXPR: Jl
});
const an = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, rc = function() {
  return typeof window > "u" ? null : window;
}, nc = function(e, t) {
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
}, Go = function() {
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
function Ji() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : rc();
  const t = (h) => Ji(h);
  if (t.version = "3.2.4", t.removed = [], !e || !e.document || e.document.nodeType !== an.document || !e.Element)
    return t.isSupported = !1, t;
  let {
    document: r
  } = e;
  const o = r, c = o.currentScript, {
    DocumentFragment: u,
    HTMLTemplateElement: y,
    Node: S,
    Element: w,
    NodeFilter: m,
    NamedNodeMap: I = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: E,
    DOMParser: U,
    trustedTypes: J
  } = e, R = w.prototype, k = nn(R, "cloneNode"), D = nn(R, "remove"), H = nn(R, "nextSibling"), q = nn(R, "childNodes"), X = nn(R, "parentNode");
  if (typeof y == "function") {
    const h = r.createElement("template");
    h.content && h.content.ownerDocument && (r = h.content.ownerDocument);
  }
  let W, x = "";
  const {
    implementation: ce,
    createNodeIterator: _e,
    createDocumentFragment: Ie,
    getElementsByTagName: De
  } = r, {
    importNode: Ve
  } = o;
  let ue = Go();
  t.isSupported = typeof qi == "function" && typeof X == "function" && ce && ce.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: pe,
    ERB_EXPR: Ne,
    TMPLIT_EXPR: Le,
    DATA_ATTR: Ee,
    ARIA_ATTR: st,
    IS_SCRIPT_OR_DATA: Fe,
    ATTR_WHITESPACE: Ae,
    CUSTOM_ELEMENT: $e
  } = qo;
  let {
    IS_ALLOWED_URI: Ke
  } = qo, ie = null;
  const M = Re({}, [...Bo, ...xa, ..._a, ...Ca, ...Wo]);
  let C = null;
  const F = Re({}, [...Ho, ...Ta, ...Vo, ...Mn]);
  let P = Object.seal(Gi(null, {
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
  })), p = null, re = null, T = !0, ne = !0, ee = !1, te = !0, B = !1, oe = !0, se = !1, K = !1, he = !1, Z = !1, le = !1, Ue = !1, me = !0, it = !1;
  const Ge = "user-content-";
  let ge = !0, $ = !1, ae = {}, Ye = null;
  const lt = Re({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let Me = null;
  const Yt = Re({}, ["audio", "video", "img", "source", "image", "track"]);
  let Rt = null;
  const Kt = Re({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), mt = "http://www.w3.org/1998/Math/MathML", ft = "http://www.w3.org/2000/svg", nt = "http://www.w3.org/1999/xhtml";
  let ct = nt, Pt = !1, Dt = null;
  const br = Re({}, [mt, ft, nt], ka);
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
      if ((!h || typeof h != "object") && (h = {}), h = Tr(h), Ce = // eslint-disable-next-line unicorn/prefer-includes
      Ft.indexOf(h.PARSER_MEDIA_TYPE) === -1 ? Jt : h.PARSER_MEDIA_TYPE, ve = Ce === "application/xhtml+xml" ? ka : Hn, ie = qt(h, "ALLOWED_TAGS") ? Re({}, h.ALLOWED_TAGS, ve) : M, C = qt(h, "ALLOWED_ATTR") ? Re({}, h.ALLOWED_ATTR, ve) : F, Dt = qt(h, "ALLOWED_NAMESPACES") ? Re({}, h.ALLOWED_NAMESPACES, ka) : br, Rt = qt(h, "ADD_URI_SAFE_ATTR") ? Re(Tr(Kt), h.ADD_URI_SAFE_ATTR, ve) : Kt, Me = qt(h, "ADD_DATA_URI_TAGS") ? Re(Tr(Yt), h.ADD_DATA_URI_TAGS, ve) : Yt, Ye = qt(h, "FORBID_CONTENTS") ? Re({}, h.FORBID_CONTENTS, ve) : lt, p = qt(h, "FORBID_TAGS") ? Re({}, h.FORBID_TAGS, ve) : {}, re = qt(h, "FORBID_ATTR") ? Re({}, h.FORBID_ATTR, ve) : {}, ae = qt(h, "USE_PROFILES") ? h.USE_PROFILES : !1, T = h.ALLOW_ARIA_ATTR !== !1, ne = h.ALLOW_DATA_ATTR !== !1, ee = h.ALLOW_UNKNOWN_PROTOCOLS || !1, te = h.ALLOW_SELF_CLOSE_IN_ATTR !== !1, B = h.SAFE_FOR_TEMPLATES || !1, oe = h.SAFE_FOR_XML !== !1, se = h.WHOLE_DOCUMENT || !1, Z = h.RETURN_DOM || !1, le = h.RETURN_DOM_FRAGMENT || !1, Ue = h.RETURN_TRUSTED_TYPE || !1, he = h.FORCE_BODY || !1, me = h.SANITIZE_DOM !== !1, it = h.SANITIZE_NAMED_PROPS || !1, ge = h.KEEP_CONTENT !== !1, $ = h.IN_PLACE || !1, Ke = h.ALLOWED_URI_REGEXP || Yi, ct = h.NAMESPACE || nt, ot = h.MATHML_TEXT_INTEGRATION_POINTS || ot, gt = h.HTML_INTEGRATION_POINTS || gt, P = h.CUSTOM_ELEMENT_HANDLING || {}, h.CUSTOM_ELEMENT_HANDLING && yt(h.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (P.tagNameCheck = h.CUSTOM_ELEMENT_HANDLING.tagNameCheck), h.CUSTOM_ELEMENT_HANDLING && yt(h.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (P.attributeNameCheck = h.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), h.CUSTOM_ELEMENT_HANDLING && typeof h.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (P.allowCustomizedBuiltInElements = h.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), B && (ne = !1), le && (Z = !0), ae && (ie = Re({}, Wo), C = [], ae.html === !0 && (Re(ie, Bo), Re(C, Ho)), ae.svg === !0 && (Re(ie, xa), Re(C, Ta), Re(C, Mn)), ae.svgFilters === !0 && (Re(ie, _a), Re(C, Ta), Re(C, Mn)), ae.mathMl === !0 && (Re(ie, Ca), Re(C, Vo), Re(C, Mn))), h.ADD_TAGS && (ie === M && (ie = Tr(ie)), Re(ie, h.ADD_TAGS, ve)), h.ADD_ATTR && (C === F && (C = Tr(C)), Re(C, h.ADD_ATTR, ve)), h.ADD_URI_SAFE_ATTR && Re(Rt, h.ADD_URI_SAFE_ATTR, ve), h.FORBID_CONTENTS && (Ye === lt && (Ye = Tr(Ye)), Re(Ye, h.FORBID_CONTENTS, ve)), ge && (ie["#text"] = !0), se && Re(ie, ["html", "head", "body"]), ie.table && (Re(ie, ["tbody"]), delete p.tbody), h.TRUSTED_TYPES_POLICY) {
        if (typeof h.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw rn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof h.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw rn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        W = h.TRUSTED_TYPES_POLICY, x = W.createHTML("");
      } else
        W === void 0 && (W = nc(J, c)), W !== null && typeof x == "string" && (x = W.createHTML(""));
      kt && kt(h), et = h;
    }
  }, Mt = Re({}, [...xa, ..._a, ...ql]), jt = Re({}, [...Ca, ...Gl]), ur = function(h) {
    let b = X(h);
    (!b || !b.tagName) && (b = {
      namespaceURI: ct,
      tagName: "template"
    });
    const _ = Hn(h.tagName), V = Hn(b.tagName);
    return Dt[h.namespaceURI] ? h.namespaceURI === ft ? b.namespaceURI === nt ? _ === "svg" : b.namespaceURI === mt ? _ === "svg" && (V === "annotation-xml" || ot[V]) : !!Mt[_] : h.namespaceURI === mt ? b.namespaceURI === nt ? _ === "math" : b.namespaceURI === ft ? _ === "math" && gt[V] : !!jt[_] : h.namespaceURI === nt ? b.namespaceURI === ft && !gt[V] || b.namespaceURI === mt && !ot[V] ? !1 : !jt[_] && (Xt[_] || !Mt[_]) : !!(Ce === "application/xhtml+xml" && Dt[h.namespaceURI]) : !1;
  }, at = function(h) {
    en(t.removed, {
      element: h
    });
    try {
      X(h).removeChild(h);
    } catch {
      D(h);
    }
  }, _t = function(h, b) {
    try {
      en(t.removed, {
        attribute: b.getAttributeNode(h),
        from: b
      });
    } catch {
      en(t.removed, {
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
      const Se = $o(h, /^[\r\n\t ]+/);
      _ = Se && Se[0];
    }
    Ce === "application/xhtml+xml" && ct === nt && (h = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + h + "</body></html>");
    const V = W ? W.createHTML(h) : h;
    if (ct === nt)
      try {
        b = new U().parseFromString(V, Ce);
      } catch {
      }
    if (!b || !b.documentElement) {
      b = ce.createDocument(ct, "template", null);
      try {
        b.documentElement.innerHTML = Pt ? x : V;
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
    return h instanceof E && (typeof h.nodeName != "string" || typeof h.textContent != "string" || typeof h.removeChild != "function" || !(h.attributes instanceof I) || typeof h.removeAttribute != "function" || typeof h.setAttribute != "function" || typeof h.namespaceURI != "string" || typeof h.insertBefore != "function" || typeof h.hasChildNodes != "function");
  }, Zt = function(h) {
    return typeof S == "function" && h instanceof S;
  };
  function Xe(h, b, _) {
    Fn(h, (V) => {
      V.call(t, b, _, et);
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
    }), h.hasChildNodes() && !Zt(h.firstElementChild) && vt(/<[/\w]/g, h.innerHTML) && vt(/<[/\w]/g, h.textContent) || h.nodeType === an.progressingInstruction || oe && h.nodeType === an.comment && vt(/<[/\w]/g, h.data))
      return at(h), !0;
    if (!ie[_] || p[_]) {
      if (!p[_] && Tt(_) && (P.tagNameCheck instanceof RegExp && vt(P.tagNameCheck, _) || P.tagNameCheck instanceof Function && P.tagNameCheck(_)))
        return !1;
      if (ge && !Ye[_]) {
        const V = X(h) || h.parentNode, ye = q(h) || h.childNodes;
        if (ye && V) {
          const Se = ye.length;
          for (let Pe = Se - 1; Pe >= 0; --Pe) {
            const we = k(ye[Pe], !0);
            we.__removalCount = (h.__removalCount || 0) + 1, V.insertBefore(we, H(h));
          }
        }
      }
      return at(h), !0;
    }
    return h instanceof w && !ur(h) || (_ === "noscript" || _ === "noembed" || _ === "noframes") && vt(/<\/no(script|embed|frames)/i, h.innerHTML) ? (at(h), !0) : (B && h.nodeType === an.text && (b = h.textContent, Fn([pe, Ne, Le], (V) => {
      b = tn(b, V, " ");
    }), h.textContent !== b && (en(t.removed, {
      element: h.cloneNode()
    }), h.textContent = b)), Xe(ue.afterSanitizeElements, h, null), !1);
  }, rr = function(h, b, _) {
    if (me && (b === "id" || b === "name") && (_ in r || _ in Qt))
      return !1;
    if (!(ne && !re[b] && vt(Ee, b)) && !(T && vt(st, b))) {
      if (!C[b] || re[b]) {
        if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(Tt(h) && (P.tagNameCheck instanceof RegExp && vt(P.tagNameCheck, h) || P.tagNameCheck instanceof Function && P.tagNameCheck(h)) && (P.attributeNameCheck instanceof RegExp && vt(P.attributeNameCheck, b) || P.attributeNameCheck instanceof Function && P.attributeNameCheck(b)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          b === "is" && P.allowCustomizedBuiltInElements && (P.tagNameCheck instanceof RegExp && vt(P.tagNameCheck, _) || P.tagNameCheck instanceof Function && P.tagNameCheck(_)))
        ) return !1;
      } else if (!Rt[b] && !vt(Ke, tn(_, Ae, "")) && !((b === "src" || b === "xlink:href" || b === "href") && h !== "script" && Bl(_, "data:") === 0 && Me[h]) && !(ee && !vt(Fe, tn(_, Ae, ""))) && _)
        return !1;
    }
    return !0;
  }, Tt = function(h) {
    return h !== "annotation-xml" && $o(h, $e);
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
    let V = b.length;
    for (; V--; ) {
      const ye = b[V], {
        name: Se,
        namespaceURI: Pe,
        value: we
      } = ye, Je = ve(Se);
      let qe = Se === "value" ? we : Wl(we);
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
        qe = tn(qe, or, " ");
      });
      const tt = ve(h.nodeName);
      if (rr(tt, Je, qe)) {
        if (W && typeof J == "object" && typeof J.getAttributeType == "function" && !Pe)
          switch (J.getAttributeType(tt, Je)) {
            case "TrustedHTML": {
              qe = W.createHTML(qe);
              break;
            }
            case "TrustedScriptURL": {
              qe = W.createScriptURL(qe);
              break;
            }
          }
        try {
          Pe ? h.setAttributeNS(Pe, Se, qe) : h.setAttribute(Se, qe), Ct(h) ? at(h) : Uo(t.removed);
        } catch {
        }
      }
    }
    Xe(ue.afterSanitizeAttributes, h, null);
  }, ar = function h(b) {
    let _ = null;
    const V = tr(b);
    for (Xe(ue.beforeSanitizeShadowDOM, b, null); _ = V.nextNode(); )
      Xe(ue.uponSanitizeShadowNode, _, null), zt(_), nr(_), _.content instanceof u && h(_.content);
    Xe(ue.afterSanitizeShadowDOM, b, null);
  };
  return t.sanitize = function(h) {
    let b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ = null, V = null, ye = null, Se = null;
    if (Pt = !h, Pt && (h = "<!-->"), typeof h != "string" && !Zt(h))
      if (typeof h.toString == "function") {
        if (h = h.toString(), typeof h != "string")
          throw rn("dirty is not a string, aborting");
      } else
        throw rn("toString is not a function");
    if (!t.isSupported)
      return h;
    if (K || Nt(b), t.removed = [], typeof h == "string" && ($ = !1), $) {
      if (h.nodeName) {
        const Je = ve(h.nodeName);
        if (!ie[Je] || p[Je])
          throw rn("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (h instanceof S)
      _ = er("<!---->"), V = _.ownerDocument.importNode(h, !0), V.nodeType === an.element && V.nodeName === "BODY" || V.nodeName === "HTML" ? _ = V : _.appendChild(V);
    else {
      if (!Z && !B && !se && // eslint-disable-next-line unicorn/prefer-includes
      h.indexOf("<") === -1)
        return W && Ue ? W.createHTML(h) : h;
      if (_ = er(h), !_)
        return Z ? null : Ue ? x : "";
    }
    _ && he && at(_.firstChild);
    const Pe = tr($ ? h : _);
    for (; ye = Pe.nextNode(); )
      zt(ye), nr(ye), ye.content instanceof u && ar(ye.content);
    if ($)
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
    return se && ie["!doctype"] && _.ownerDocument && _.ownerDocument.doctype && _.ownerDocument.doctype.name && vt(Xi, _.ownerDocument.doctype.name) && (we = "<!DOCTYPE " + _.ownerDocument.doctype.name + `>
` + we), B && Fn([pe, Ne, Le], (Je) => {
      we = tn(we, Je, " ");
    }), W && Ue ? W.createHTML(we) : we;
  }, t.setConfig = function() {
    let h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Nt(h), K = !0;
  }, t.clearConfig = function() {
    et = null, K = !1;
  }, t.isValidAttribute = function(h, b, _) {
    et || Nt({});
    const V = ve(h), ye = ve(b);
    return rr(V, ye, _);
  }, t.addHook = function(h, b) {
    typeof b == "function" && en(ue[h], b);
  }, t.removeHook = function(h, b) {
    if (b !== void 0) {
      const _ = Ul(ue[h], b);
      return _ === -1 ? void 0 : $l(ue[h], _, 1)[0];
    }
    return Uo(ue[h]);
  }, t.removeHooks = function(h) {
    ue[h] = [];
  }, t.removeAllHooks = function() {
    ue = Go();
  }, t;
}
var ac = Ji();
const Or = (e) => ({ __html: ac.sanitize(e) });
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
const oc = ({
  event: e = "",
  action: t = "",
  name: r = "",
  type: o = "",
  section: c = "",
  text: u = "",
  region: y = "",
  component: S = ""
}) => {
  const { dataLayer: w } = window, m = {
    event: e.toLowerCase(),
    action: t.toLowerCase(),
    name: r.toLowerCase(),
    type: o.toLowerCase(),
    region: y.toLowerCase(),
    section: c.toLowerCase(),
    text: u.toLowerCase(),
    component: S.toLowerCase()
  };
  w && w.push(m);
}, hn = ({ children: e }) => /* @__PURE__ */ G.jsx(G.Fragment, { children: e });
hn.propTypes = {
  children: i.oneOfType([
    i.arrayOf(i.node),
    i.node,
    i.string
  ])
};
var Qi = { exports: {} };
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function r() {
      for (var u = "", y = 0; y < arguments.length; y++) {
        var S = arguments[y];
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
})(Qi);
var ic = Qi.exports;
const Lr = /* @__PURE__ */ qa(ic);
({
  ...hn.propTypes
});
const Zi = ({ children: e, className: t = "container", ...r }) => /* @__PURE__ */ G.jsx("div", { className: t, ...r, children: /* @__PURE__ */ G.jsx("div", { className: "row", children: e }) });
Zi.propTypes = {
  children: hn.propTypes.children
};
({
  ...Zi.propTypes
});
hn.propTypes.children, i.oneOf(["0", "3", "4", "6", "8", "9", "12"]);
hn.propTypes.children;
var _r = {}, Yo;
function sc() {
  if (Yo) return _r;
  Yo = 1;
  var e = dt;
  function t(n) {
    for (var l = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, f = 1; f < arguments.length; f++) l += "&args[]=" + encodeURIComponent(arguments[f]);
    return "Minified React error #" + n + "; visit " + l + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var r = Object.prototype.hasOwnProperty, o = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, c = {}, u = {};
  function y(n) {
    return r.call(u, n) ? !0 : r.call(c, n) ? !1 : o.test(n) ? u[n] = !0 : (c[n] = !0, !1);
  }
  function S(n, l, f, v, L, A, j) {
    this.acceptsBooleans = l === 2 || l === 3 || l === 4, this.attributeName = v, this.attributeNamespace = L, this.mustUseProperty = f, this.propertyName = n, this.type = l, this.sanitizeURL = A, this.removeEmptyString = j;
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
  }, U = ["Webkit", "ms", "Moz", "O"];
  Object.keys(E).forEach(function(n) {
    U.forEach(function(l) {
      l = l + n.charAt(0).toUpperCase() + n.substring(1), E[l] = E[n];
    });
  });
  var J = /["'&<>]/;
  function R(n) {
    if (typeof n == "boolean" || typeof n == "number") return "" + n;
    n = "" + n;
    var l = J.exec(n);
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
  var k = /([A-Z])/g, D = /^ms-/, H = Array.isArray;
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
  var W = /* @__PURE__ */ new Map();
  function x(n, l, f) {
    if (typeof f != "object") throw Error(t(62));
    l = !0;
    for (var v in f) if (r.call(f, v)) {
      var L = f[v];
      if (L != null && typeof L != "boolean" && L !== "") {
        if (v.indexOf("--") === 0) {
          var A = R(v);
          L = R(("" + L).trim());
        } else {
          A = v;
          var j = W.get(A);
          j !== void 0 || (j = R(A.replace(k, "-$1").toLowerCase().replace(D, "-ms-")), W.set(A, j)), A = j, L = typeof L == "number" ? L === 0 || r.call(E, v) ? "" + L : L + "px" : R(("" + L).trim());
        }
        l ? (l = !1, n.push(' style="', A, ":", L)) : n.push(";", A, ":", L);
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
            v === !0 ? n.push(" ", f, '=""') : v !== !1 && n.push(" ", f, '="', R(v), '"');
            break;
          case 5:
            isNaN(v) || n.push(" ", f, '="', R(v), '"');
            break;
          case 6:
            !isNaN(v) && 1 <= v && n.push(" ", f, '="', R(v), '"');
            break;
          default:
            l.sanitizeURL && (v = "" + v), n.push(" ", f, '="', R(v), '"');
        }
      } else if (y(f)) {
        switch (typeof v) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (l = f.toLowerCase().slice(0, 5), l !== "data-" && l !== "aria-") return;
        }
        n.push(" ", f, '="', R(v), '"');
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
    var L = f = null, A;
    for (A in l) if (r.call(l, A)) {
      var j = l[A];
      if (j != null) switch (A) {
        case "children":
          f = j;
          break;
        case "dangerouslySetInnerHTML":
          L = j;
          break;
        default:
          ce(n, v, A, j);
      }
    }
    return n.push(">"), _e(n, L, f), typeof f == "string" ? (n.push(R(f)), null) : f;
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
        var A = null, j = null;
        for (ke in f) if (r.call(f, ke)) {
          var Q = f[ke];
          if (Q != null) switch (ke) {
            case "children":
              A = Q;
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
        return n.push(">"), _e(n, j, A), A;
      case "option":
        j = L.selectedValue, n.push(pe("option"));
        var de = Q = null, be = null, ke = null;
        for (A in f) if (r.call(f, A)) {
          var rt = f[A];
          if (rt != null) switch (A) {
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
              ce(n, v, A, rt);
          }
        }
        if (j != null) if (f = de !== null ? "" + de : Ie(Q), H(j)) {
          for (v = 0; v < j.length; v++)
            if ("" + j[v] === f) {
              n.push(' selected=""');
              break;
            }
        } else "" + j === f && n.push(' selected=""');
        else be && n.push(' selected=""');
        return n.push(">"), _e(n, ke, Q), Q;
      case "textarea":
        n.push(pe("textarea")), ke = j = A = null;
        for (Q in f) if (r.call(f, Q) && (de = f[Q], de != null)) switch (Q) {
          case "children":
            ke = de;
            break;
          case "value":
            A = de;
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
        if (A === null && j !== null && (A = j), n.push(">"), ke != null) {
          if (A != null) throw Error(t(92));
          if (H(ke) && 1 < ke.length) throw Error(t(93));
          A = "" + ke;
        }
        return typeof A == "string" && A[0] === `
` && n.push(`
`), A !== null && n.push(R("" + A)), null;
      case "input":
        n.push(pe("input")), de = ke = Q = A = null;
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
            A = be;
            break;
          default:
            ce(n, v, j, be);
        }
        return ke !== null ? ce(n, v, "checked", ke) : de !== null && ce(n, v, "checked", de), A !== null ? ce(n, v, "value", A) : Q !== null && ce(n, v, "value", Q), n.push("/>"), null;
      case "menuitem":
        n.push(pe("menuitem"));
        for (var $t in f) if (r.call(f, $t) && (A = f[$t], A != null)) switch ($t) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            ce(n, v, $t, A);
        }
        return n.push(">"), null;
      case "title":
        n.push(pe("title")), A = null;
        for (rt in f) if (r.call(f, rt) && (j = f[rt], j != null)) switch (rt) {
          case "children":
            A = j;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(434));
          default:
            ce(n, v, rt, j);
        }
        return n.push(">"), A;
      case "listing":
      case "pre":
        n.push(pe(l)), j = A = null;
        for (de in f) if (r.call(f, de) && (Q = f[de], Q != null)) switch (de) {
          case "children":
            A = Q;
            break;
          case "dangerouslySetInnerHTML":
            j = Q;
            break;
          default:
            ce(n, v, de, Q);
        }
        if (n.push(">"), j != null) {
          if (A != null) throw Error(t(60));
          if (typeof j != "object" || !("__html" in j)) throw Error(t(61));
          f = j.__html, f != null && (typeof f == "string" && 0 < f.length && f[0] === `
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
        n.push(pe(l));
        for (var Bt in f) if (r.call(f, Bt) && (A = f[Bt], A != null)) switch (Bt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, l));
          default:
            ce(n, v, Bt, A);
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
        n.push(pe(l)), j = A = null;
        for (be in f) if (r.call(f, be) && (Q = f[be], Q != null)) switch (be) {
          case "children":
            A = Q;
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
            y(be) && typeof Q != "function" && typeof Q != "symbol" && n.push(" ", be, '="', R(Q), '"');
        }
        return n.push(">"), _e(n, j, A), A;
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
  function $e(n, l) {
    return l = l === void 0 ? "" : l, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: l + "P:", segmentPrefix: l + "S:", boundaryPrefix: l + "B:", idPrefix: l, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: n };
  }
  function Ke(n, l, f, v) {
    return f.generateStaticMarkup ? (n.push(R(l)), !1) : (l === "" ? n = v : (v && n.push("<!-- -->"), n.push(R(l)), n = !0), n);
  }
  var ie = Object.assign, M = Symbol.for("react.element"), C = Symbol.for("react.portal"), F = Symbol.for("react.fragment"), P = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), re = Symbol.for("react.provider"), T = Symbol.for("react.context"), ne = Symbol.for("react.forward_ref"), ee = Symbol.for("react.suspense"), te = Symbol.for("react.suspense_list"), B = Symbol.for("react.memo"), oe = Symbol.for("react.lazy"), se = Symbol.for("react.scope"), K = Symbol.for("react.debug_trace_mode"), he = Symbol.for("react.legacy_hidden"), Z = Symbol.for("react.default_value"), le = Symbol.iterator;
  function Ue(n) {
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
      case T:
        return (n.displayName || "Context") + ".Consumer";
      case re:
        return (n._context.displayName || "Context") + ".Provider";
      case ne:
        var l = n.render;
        return n = n.displayName, n || (n = l.displayName || l.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case B:
        return l = n.displayName || null, l !== null ? l : Ue(n.type) || "Memo";
      case oe:
        l = n._payload, n = n._init;
        try {
          return Ue(n(l));
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
  function $(n) {
    n.context._currentValue2 = n.parentValue, n = n.parent, n !== null && $(n);
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
    l !== n && (l === null ? ae(n) : n === null ? $(l) : l.depth === n.depth ? ge(l, n) : l.depth > n.depth ? Ye(l, n) : lt(l, n), Ge = n);
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
    var A = { queue: [], replace: !1 };
    n._reactInternals = A;
    var j = l.contextType;
    if (n.context = typeof j == "object" && j !== null ? j._currentValue2 : v, j = l.getDerivedStateFromProps, typeof j == "function" && (j = j(f, L), L = j == null ? L : ie({}, L, j), n.state = L), typeof l.getDerivedStateFromProps != "function" && typeof n.getSnapshotBeforeUpdate != "function" && (typeof n.UNSAFE_componentWillMount == "function" || typeof n.componentWillMount == "function")) if (l = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), l !== n.state && Yt.enqueueReplaceState(n, n.state, null), A.queue !== null && 0 < A.queue.length) if (l = A.queue, j = A.replace, A.queue = null, A.replace = !1, j && l.length === 1) n.state = l[0];
    else {
      for (A = j ? l[0] : n.state, L = !0, j = j ? 1 : 0; j < l.length; j++) {
        var Q = l[j];
        Q = typeof Q == "function" ? Q.call(n, A, f, v) : Q, Q != null && (L ? (L = !1, A = ie({}, A, Q)) : ie(A, Q));
      }
      n.state = A;
    }
    else A.queue = null;
  }
  var Kt = { id: 1, overflow: "" };
  function mt(n, l, f) {
    var v = n.id;
    n = n.overflow;
    var L = 32 - ft(v) - 1;
    v &= ~(1 << L), f += 1;
    var A = 32 - ft(l) + L;
    if (30 < A) {
      var j = L - L % 5;
      return A = (v & (1 << j) - 1).toString(32), v >>= j, L -= j, { id: 1 << 32 - ft(l) + L | f << L | v, overflow: A + n };
    }
    return { id: 1 << A | f << L | v, overflow: n };
  }
  var ft = Math.clz32 ? Math.clz32 : Pt, nt = Math.log, ct = Math.LN2;
  function Pt(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (nt(n) / ct | 0) | 0;
  }
  function Dt(n, l) {
    return n === l && (n !== 0 || 1 / n === 1 / l) || n !== n && l !== l;
  }
  var br = typeof Object.is == "function" ? Object.is : Dt, ot = null, gt = null, Xt = null, Ce = null, Ft = !1, Jt = !1, ve = 0, et = null, Qt = 0;
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
  function ur(n, l) {
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
    return n = n === ur ? typeof l == "function" ? l() : l : f !== void 0 ? f(l) : l, Ce.memoizedState = n, n = Ce.queue = { last: null, dispatch: null }, n = n.dispatch = er.bind(null, ot, n), [Ce.memoizedState, n];
  }
  function _t(n, l) {
    if (ot = yt(), Ce = Mt(), l = l === void 0 ? null : l, Ce !== null) {
      var f = Ce.memoizedState;
      if (f !== null && l !== null) {
        var v = f[1];
        e: if (v === null) v = !1;
        else {
          for (var L = 0; L < v.length && L < l.length; L++) if (!br(l[L], v[L])) {
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
    return at(ur, n);
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
  function nr(n, l, f, v, L, A, j, Q, de) {
    var be = [], ke = /* @__PURE__ */ new Set();
    return l = { destination: null, responseState: l, progressiveChunkSize: v, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: ke, pingedTasks: be, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: L === void 0 ? rr : L, onAllReady: Tt, onShellReady: j === void 0 ? Tt : j, onShellError: Tt, onFatalError: Tt }, f = h(l, 0, null, f, !1, !1), f.parentFlushed = !0, n = ar(l, n, null, f, ke, me, null, Kt), be.push(n), l;
  }
  function ar(n, l, f, v, L, A, j, Q) {
    n.allPendingTasks++, f === null ? n.pendingRootTasks++ : f.pendingTasks++;
    var de = { node: l, ping: function() {
      var be = n.pingedTasks;
      be.push(de), be.length === 1 && bn(n);
    }, blockedBoundary: f, blockedSegment: v, abortSet: L, legacyContext: A, context: j, treeContext: Q };
    return L.add(de), de;
  }
  function h(n, l, f, v, L, A) {
    return { status: 0, id: -1, index: l, parentFlushed: !1, chunks: [], children: [], formatContext: v, boundary: f, lastPushedText: L, textEmbedded: A };
  }
  function b(n, l) {
    if (n = n.onError(l), n != null && typeof n != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof n + '" instead');
    return n;
  }
  function _(n, l) {
    var f = n.onShellError;
    f(l), f = n.onFatalError, f(l), n.destination !== null ? (n.status = 2, n.destination.destroy(l)) : (n.status = 1, n.fatalError = l);
  }
  function V(n, l, f, v, L) {
    for (ot = {}, gt = l, ve = 0, n = f(v, L); Jt; ) Jt = !1, ve = 0, Qt += 1, Ce = null, n = f(v, L);
    return jt(), n;
  }
  function ye(n, l, f, v) {
    var L = f.render(), A = v.childContextTypes;
    if (A != null) {
      var j = l.legacyContext;
      if (typeof f.getChildContext != "function") v = j;
      else {
        f = f.getChildContext();
        for (var Q in f) if (!(Q in A)) throw Error(t(108, Ue(v) || "Unknown", Q));
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
      var A = f.contextType;
      A = new f(v, typeof A == "object" && A !== null ? A._currentValue2 : L), Rt(A, f, v, L), ye(n, l, A, f);
    } else {
      A = it(f, l.legacyContext), L = V(n, l, f, v, A);
      var j = ve !== 0;
      if (typeof L == "object" && L !== null && typeof L.render == "function" && L.$$typeof === void 0) Rt(L, f, v, A), ye(n, l, L, f);
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
      switch (L = l.blockedSegment, A = Ne(L.chunks, f, v, n.responseState, L.formatContext), L.lastPushedText = !1, j = L.formatContext, L.formatContext = X(j, f, v), qe(n, l, A), L.formatContext = j, f) {
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
            f = l.blockedBoundary, L = l.blockedSegment, A = v.fallback, v = v.children, j = /* @__PURE__ */ new Set();
            var Q = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: j, errorDigest: null }, de = h(n, L.chunks.length, Q, L.formatContext, !1, !1);
            L.children.push(de), L.lastPushedText = !1;
            var be = h(n, 0, null, L.formatContext, !1, !1);
            be.parentFlushed = !0, l.blockedBoundary = Q, l.blockedSegment = be;
            try {
              if (qe(
                n,
                l,
                v
              ), n.responseState.generateStaticMarkup || be.lastPushedText && be.textEmbedded && be.chunks.push("<!-- -->"), be.status = 1, Ut(Q, be), Q.pendingTasks === 0) break e;
            } catch (ke) {
              be.status = 4, Q.forceClientRender = !0, Q.errorDigest = b(n, ke);
            } finally {
              l.blockedBoundary = f, l.blockedSegment = L;
            }
            l = ar(n, A, f, de, j, l.legacyContext, l.context, l.treeContext), n.pingedTasks.push(l);
          }
          return;
      }
      if (typeof f == "object" && f !== null) switch (f.$$typeof) {
        case ne:
          if (v = V(n, l, f.render, v, L), ve !== 0) {
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
          if (L = v.children, f = f._context, v = v.value, A = f._currentValue2, f._currentValue2 = v, j = Ge, Ge = v = { parent: j, depth: j === null ? 0 : j.depth + 1, context: f, parentValue: A, value: v }, l.context = v, we(n, l, L), n = Ge, n === null) throw Error(t(403));
          v = n.parentValue, n.context._currentValue2 = v === Z ? n.context._defaultValue : v, n = Ge = n.parent, l.context = n;
          return;
        case T:
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
      if (H(f)) {
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
      var A = l.treeContext;
      l.treeContext = mt(A, v, L);
      try {
        qe(n, l, f[L]);
      } finally {
        l.treeContext = A;
      }
    }
  }
  function qe(n, l, f) {
    var v = l.blockedSegment.formatContext, L = l.legacyContext, A = l.context;
    try {
      return we(n, l, f);
    } catch (de) {
      if (jt(), typeof de == "object" && de !== null && typeof de.then == "function") {
        f = de;
        var j = l.blockedSegment, Q = h(n, j.chunks.length, null, j.formatContext, j.lastPushedText, !0);
        j.children.push(Q), j.lastPushedText = !1, n = ar(n, l.node, l.blockedBoundary, Q, l.abortSet, l.legacyContext, l.context, l.treeContext).ping, f.then(n, n), l.blockedSegment.formatContext = v, l.legacyContext = L, l.context = A, Me(A);
      } else throw l.blockedSegment.formatContext = v, l.legacyContext = L, l.context = A, Me(A), de;
    }
  }
  function tt(n) {
    var l = n.blockedBoundary;
    n = n.blockedSegment, n.status = 3, dr(this, l, n);
  }
  function or(n, l, f) {
    var v = n.blockedBoundary;
    n.blockedSegment.status = 3, v === null ? (l.allPendingTasks--, l.status !== 2 && (l.status = 2, l.destination !== null && l.destination.push(null))) : (v.pendingTasks--, v.forceClientRender || (v.forceClientRender = !0, n = f === void 0 ? Error(t(432)) : f, v.errorDigest = l.onError(n), v.parentFlushed && l.clientRenderedBoundaries.push(v)), v.fallbackAbortableTasks.forEach(function(L) {
      return or(L, l, f);
    }), v.fallbackAbortableTasks.clear(), l.allPendingTasks--, l.allPendingTasks === 0 && (v = l.onAllReady, v()));
  }
  function Ut(n, l) {
    if (l.chunks.length === 0 && l.children.length === 1 && l.children[0].boundary === null) {
      var f = l.children[0];
      f.id = l.id, f.parentFlushed = !0, f.status === 1 && Ut(n, f);
    } else n.completedSegments.push(l);
  }
  function dr(n, l, f) {
    if (l === null) {
      if (f.parentFlushed) {
        if (n.completedRootSegment !== null) throw Error(t(389));
        n.completedRootSegment = f;
      }
      n.pendingRootTasks--, n.pendingRootTasks === 0 && (n.onShellError = Tt, l = n.onShellReady, l());
    } else l.pendingTasks--, l.forceClientRender || (l.pendingTasks === 0 ? (f.parentFlushed && f.status === 1 && Ut(l, f), l.parentFlushed && n.completedBoundaries.push(l), l.fallbackAbortableTasks.forEach(tt, n), l.fallbackAbortableTasks.clear()) : f.parentFlushed && f.status === 1 && (Ut(l, f), l.completedSegments.length === 1 && l.parentFlushed && n.partialBoundaries.push(l)));
    n.allPendingTasks--, n.allPendingTasks === 0 && (n = n.onAllReady, n());
  }
  function bn(n) {
    if (n.status !== 2) {
      var l = Ge, f = zt.current;
      zt.current = Zt;
      var v = Xe;
      Xe = n.responseState;
      try {
        var L = n.pingedTasks, A;
        for (A = 0; A < L.length; A++) {
          var j = L[A], Q = n, de = j.blockedSegment;
          if (de.status === 0) {
            Me(j.context);
            try {
              we(Q, j, j.node), Q.responseState.generateStaticMarkup || de.lastPushedText && de.textEmbedded && de.chunks.push("<!-- -->"), j.abortSet.delete(j), de.status = 1, dr(Q, j.blockedBoundary, de);
            } catch (Et) {
              if (jt(), typeof Et == "object" && Et !== null && typeof Et.then == "function") {
                var be = j.ping;
                Et.then(be, be);
              } else {
                j.abortSet.delete(j), de.status = 4;
                var ke = j.blockedBoundary, rt = Et, $t = b(Q, rt);
                if (ke === null ? _(Q, rt) : (ke.pendingTasks--, ke.forceClientRender || (ke.forceClientRender = !0, ke.errorDigest = $t, ke.parentFlushed && Q.clientRenderedBoundaries.push(ke))), Q.allPendingTasks--, Q.allPendingTasks === 0) {
                  var Bt = Q.onAllReady;
                  Bt();
                }
              }
            } finally {
            }
          }
        }
        L.splice(0, A), n.destination !== null && Ar(n, n.destination);
      } catch (Et) {
        b(n, Et), _(n, Et);
      } finally {
        Xe = v, zt.current = f, f === Zt && Me(l);
      }
    }
  }
  function vr(n, l, f) {
    switch (f.parentFlushed = !0, f.status) {
      case 0:
        var v = f.id = n.nextSegmentId++;
        return f.lastPushedText = !1, f.textEmbedded = !1, n = n.responseState, l.push('<template id="'), l.push(n.placeholderPrefix), n = v.toString(16), l.push(n), l.push('"></template>');
      case 1:
        f.status = 2;
        var L = !0;
        v = f.chunks;
        var A = 0;
        f = f.children;
        for (var j = 0; j < f.length; j++) {
          for (L = f[j]; A < L.index; A++) l.push(v[A]);
          L = wr(n, l, L);
        }
        for (; A < v.length - 1; A++) l.push(v[A]);
        return A < v.length && (L = l.push(v[A])), L;
      default:
        throw Error(t(390));
    }
  }
  function wr(n, l, f) {
    var v = f.boundary;
    if (v === null) return vr(n, l, f);
    if (v.parentFlushed = !0, v.forceClientRender) return n.responseState.generateStaticMarkup || (v = v.errorDigest, l.push("<!--$!-->"), l.push("<template"), v && (l.push(' data-dgst="'), v = R(v), l.push(v), l.push('"')), l.push("></template>")), vr(n, l, f), n = n.responseState.generateStaticMarkup ? !0 : l.push("<!--/$-->"), n;
    if (0 < v.pendingTasks) {
      v.rootSegmentID = n.nextSegmentId++, 0 < v.completedSegments.length && n.partialBoundaries.push(v);
      var L = n.responseState, A = L.nextSuspenseID++;
      return L = L.boundaryPrefix + A.toString(16), v = v.id = L, Le(l, n.responseState, v), vr(n, l, f), l.push("<!--/$-->");
    }
    if (v.byteSize > n.progressiveChunkSize) return v.rootSegmentID = n.nextSegmentId++, n.completedBoundaries.push(v), Le(l, n.responseState, v.id), vr(n, l, f), l.push("<!--/$-->");
    if (n.responseState.generateStaticMarkup || l.push("<!--$-->"), f = v.completedSegments, f.length !== 1) throw Error(t(391));
    return wr(n, l, f[0]), n = n.responseState.generateStaticMarkup ? !0 : l.push("<!--/$-->"), n;
  }
  function jr(n, l, f) {
    return Ee(l, n.responseState, f.formatContext, f.id), wr(n, l, f), st(l, f.formatContext);
  }
  function zr(n, l, f) {
    for (var v = f.completedSegments, L = 0; L < v.length; L++) Ur(n, l, f, v[L]);
    if (v.length = 0, n = n.responseState, v = f.id, f = f.rootSegmentID, l.push(n.startInlineScript), n.sentCompleteBoundaryFunction ? l.push('$RC("') : (n.sentCompleteBoundaryFunction = !0, l.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), v === null) throw Error(t(395));
    return f = f.toString(16), l.push(v), l.push('","'), l.push(n.segmentPrefix), l.push(f), l.push('")<\/script>');
  }
  function Ur(n, l, f, v) {
    if (v.status === 2) return !0;
    var L = v.id;
    if (L === -1) {
      if ((v.id = f.rootSegmentID) === -1) throw Error(t(392));
      return jr(n, l, v);
    }
    return jr(n, l, v), n = n.responseState, l.push(n.startInlineScript), n.sentCompleteSegmentFunction ? l.push('$RS("') : (n.sentCompleteSegmentFunction = !0, l.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), l.push(n.segmentPrefix), L = L.toString(16), l.push(L), l.push('","'), l.push(n.placeholderPrefix), l.push(L), l.push('")<\/script>');
  }
  function Ar(n, l) {
    try {
      var f = n.completedRootSegment;
      if (f !== null && n.pendingRootTasks === 0) {
        wr(n, l, f), n.completedRootSegment = null;
        var v = n.responseState.bootstrapChunks;
        for (f = 0; f < v.length - 1; f++) l.push(v[f]);
        f < v.length && l.push(v[f]);
      }
      var L = n.clientRenderedBoundaries, A;
      for (A = 0; A < L.length; A++) {
        var j = L[A];
        v = l;
        var Q = n.responseState, de = j.id, be = j.errorDigest, ke = j.errorMessage, rt = j.errorComponentStack;
        if (v.push(Q.startInlineScript), Q.sentClientRenderFunction ? v.push('$RX("') : (Q.sentClientRenderFunction = !0, v.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), de === null) throw Error(t(395));
        if (v.push(de), v.push('"'), be || ke || rt) {
          v.push(",");
          var $t = Ae(be || "");
          v.push($t);
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
          n.destination = null, A++, L.splice(0, A);
          return;
        }
      }
      L.splice(0, A);
      var Sr = n.completedBoundaries;
      for (A = 0; A < Sr.length; A++) if (!zr(n, l, Sr[A])) {
        n.destination = null, A++, Sr.splice(0, A);
        return;
      }
      Sr.splice(0, A);
      var ir = n.partialBoundaries;
      for (A = 0; A < ir.length; A++) {
        var Br = ir[A];
        e: {
          L = n, j = l;
          var kr = Br.completedSegments;
          for (Q = 0; Q < kr.length; Q++) if (!Ur(L, j, Br, kr[Q])) {
            Q++, kr.splice(0, Q);
            var Sn = !1;
            break e;
          }
          kr.splice(0, Q), Sn = !0;
        }
        if (!Sn) {
          n.destination = null, A++, ir.splice(0, A);
          return;
        }
      }
      ir.splice(0, A);
      var fr = n.completedBoundaries;
      for (A = 0; A < fr.length; A++) if (!zr(n, l, fr[A])) {
        n.destination = null, A++, fr.splice(0, A);
        return;
      }
      fr.splice(0, A);
    } finally {
      n.allPendingTasks === 0 && n.pingedTasks.length === 0 && n.clientRenderedBoundaries.length === 0 && n.completedBoundaries.length === 0 && l.push(null);
    }
  }
  function vn(n, l) {
    try {
      var f = n.abortableTasks;
      f.forEach(function(v) {
        return or(v, n, l);
      }), f.clear(), n.destination !== null && Ar(n, n.destination);
    } catch (v) {
      b(n, v), _(n, v);
    }
  }
  function wn() {
  }
  function $r(n, l, f, v) {
    var L = !1, A = null, j = "", Q = { push: function(be) {
      return be !== null && (j += be), !0;
    }, destroy: function(be) {
      L = !0, A = be;
    } }, de = !1;
    if (n = nr(n, $e(f, l ? l.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, wn, void 0, function() {
      de = !0;
    }), bn(n), vn(n, v), n.status === 1) n.status = 2, Q.destroy(n.fatalError);
    else if (n.status !== 2 && n.destination === null) {
      n.destination = Q;
      try {
        Ar(n, Q);
      } catch (be) {
        b(n, be), _(n, be);
      }
    }
    if (L) throw A;
    if (!de) throw Error(t(426));
    return j;
  }
  return _r.renderToNodeStream = function() {
    throw Error(t(207));
  }, _r.renderToStaticMarkup = function(n, l) {
    return $r(n, l, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, _r.renderToStaticNodeStream = function() {
    throw Error(t(208));
  }, _r.renderToString = function(n, l) {
    return $r(n, l, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, _r.version = "18.3.1", _r;
}
var jn = {}, Xo;
function lc() {
  if (Xo) return jn;
  Xo = 1;
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
  function y(a) {
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
  var E = Object.prototype.hasOwnProperty, U = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, J = {}, R = {};
  function k(a) {
    return E.call(R, a) ? !0 : E.call(J, a) ? !1 : U.test(a) ? R[a] = !0 : (J[a] = !0, !1);
  }
  function D(a, s, d, g, N, O, z) {
    this.acceptsBooleans = s === 2 || s === 3 || s === 4, this.attributeName = g, this.attributeNamespace = N, this.mustUseProperty = d, this.propertyName = a, this.type = s, this.sanitizeURL = O, this.removeEmptyString = z;
  }
  var H = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
    H[a] = new D(a, 0, !1, a, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
    var s = a[0];
    H[s] = new D(s, 1, !1, a[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
    H[a] = new D(a, 2, !1, a.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
    H[a] = new D(a, 2, !1, a, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
    H[a] = new D(a, 3, !1, a.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(a) {
    H[a] = new D(a, 3, !0, a, null, !1, !1);
  }), ["capture", "download"].forEach(function(a) {
    H[a] = new D(a, 4, !1, a, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(a) {
    H[a] = new D(a, 6, !1, a, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(a) {
    H[a] = new D(a, 5, !1, a.toLowerCase(), null, !1, !1);
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
    H[s] = new D(s, 1, !1, a, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
    var s = a.replace(q, X);
    H[s] = new D(s, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
    var s = a.replace(q, X);
    H[s] = new D(s, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(a) {
    H[a] = new D(a, 1, !1, a.toLowerCase(), null, !1, !1);
  }), H.xlinkHref = new D("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(a) {
    H[a] = new D(a, 1, !1, a.toLowerCase(), null, !0, !0);
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
  function _e(a) {
    if (typeof a == "boolean" || typeof a == "number") return "" + a;
    a = "" + a;
    var s = ce.exec(a);
    if (s) {
      var d = "", g, N = 0;
      for (g = s.index; g < a.length; g++) {
        switch (a.charCodeAt(g)) {
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
        N !== g && (d += a.substring(N, g)), N = g + 1, d += s;
      }
      a = N !== g ? d + a.substring(N, g) : d;
    }
    return a;
  }
  var Ie = /([A-Z])/g, De = /^ms-/, Ve = Array.isArray, ue = m("<script>"), pe = m("<\/script>"), Ne = m('<script src="'), Le = m('<script type="module" src="'), Ee = m('" async=""><\/script>'), st = /(<\/|<)(s)(cript)/gi;
  function Fe(a, s, d, g) {
    return "" + s + (d === "s" ? "\\u0073" : "\\u0053") + g;
  }
  function Ae(a, s, d, g, N) {
    a = a === void 0 ? "" : a, s = s === void 0 ? ue : m('<script nonce="' + _e(s) + '">');
    var O = [];
    if (d !== void 0 && O.push(s, w(("" + d).replace(st, Fe)), pe), g !== void 0) for (d = 0; d < g.length; d++) O.push(Ne, w(_e(g[d])), Ee);
    if (N !== void 0) for (g = 0; g < N.length; g++) O.push(Le, w(_e(N[g])), Ee);
    return { bootstrapChunks: O, startInlineScript: s, placeholderPrefix: m(a + "P:"), segmentPrefix: m(a + "S:"), boundaryPrefix: a + "B:", idPrefix: a, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function $e(a, s) {
    return { insertionMode: a, selectedValue: s };
  }
  function Ke(a) {
    return $e(a === "http://www.w3.org/2000/svg" ? 2 : a === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function ie(a, s, d) {
    switch (s) {
      case "select":
        return $e(1, d.value != null ? d.value : d.defaultValue);
      case "svg":
        return $e(2, null);
      case "math":
        return $e(3, null);
      case "foreignObject":
        return $e(1, null);
      case "table":
        return $e(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return $e(5, null);
      case "colgroup":
        return $e(7, null);
      case "tr":
        return $e(6, null);
    }
    return 4 <= a.insertionMode || a.insertionMode === 0 ? $e(1, null) : a;
  }
  var M = m("<!-- -->");
  function C(a, s, d, g) {
    return s === "" ? g : (g && a.push(M), a.push(w(_e(s))), !0);
  }
  var F = /* @__PURE__ */ new Map(), P = m(' style="'), p = m(":"), re = m(";");
  function T(a, s, d) {
    if (typeof d != "object") throw Error(t(62));
    s = !0;
    for (var g in d) if (E.call(d, g)) {
      var N = d[g];
      if (N != null && typeof N != "boolean" && N !== "") {
        if (g.indexOf("--") === 0) {
          var O = w(_e(g));
          N = w(_e(("" + N).trim()));
        } else {
          O = g;
          var z = F.get(O);
          z !== void 0 || (z = m(_e(O.replace(Ie, "-$1").toLowerCase().replace(De, "-ms-"))), F.set(O, z)), O = z, N = typeof N == "number" ? N === 0 || E.call(W, g) ? w("" + N) : w(N + "px") : w(_e(("" + N).trim()));
        }
        s ? (s = !1, a.push(P, O, p, N)) : a.push(re, O, p, N);
      }
    }
    s || a.push(te);
  }
  var ne = m(" "), ee = m('="'), te = m('"'), B = m('=""');
  function oe(a, s, d, g) {
    switch (d) {
      case "style":
        T(a, s, g);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < d.length) || d[0] !== "o" && d[0] !== "O" || d[1] !== "n" && d[1] !== "N") {
      if (s = H.hasOwnProperty(d) ? H[d] : null, s !== null) {
        switch (typeof g) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!s.acceptsBooleans) return;
        }
        switch (d = w(s.attributeName), s.type) {
          case 3:
            g && a.push(ne, d, B);
            break;
          case 4:
            g === !0 ? a.push(ne, d, B) : g !== !1 && a.push(ne, d, ee, w(_e(g)), te);
            break;
          case 5:
            isNaN(g) || a.push(ne, d, ee, w(_e(g)), te);
            break;
          case 6:
            !isNaN(g) && 1 <= g && a.push(ne, d, ee, w(_e(g)), te);
            break;
          default:
            s.sanitizeURL && (g = "" + g), a.push(ne, d, ee, w(_e(g)), te);
        }
      } else if (k(d)) {
        switch (typeof g) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (s = d.toLowerCase().slice(0, 5), s !== "data-" && s !== "aria-") return;
        }
        a.push(ne, w(d), ee, w(_e(g)), te);
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
  function Ue(a, s, d, g) {
    a.push(ge(d));
    var N = d = null, O;
    for (O in s) if (E.call(s, O)) {
      var z = s[O];
      if (z != null) switch (O) {
        case "children":
          d = z;
          break;
        case "dangerouslySetInnerHTML":
          N = z;
          break;
        default:
          oe(a, g, O, z);
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
  var $ = m("<!DOCTYPE html>");
  function ae(a, s, d, g, N) {
    switch (s) {
      case "select":
        a.push(ge("select"));
        var O = null, z = null;
        for (xe in d) if (E.call(d, xe)) {
          var Y = d[xe];
          if (Y != null) switch (xe) {
            case "children":
              O = Y;
              break;
            case "dangerouslySetInnerHTML":
              z = Y;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              oe(a, g, xe, Y);
          }
        }
        return a.push(se), he(a, z, O), O;
      case "option":
        z = N.selectedValue, a.push(ge("option"));
        var fe = Y = null, Te = null, xe = null;
        for (O in d) if (E.call(d, O)) {
          var Ze = d[O];
          if (Ze != null) switch (O) {
            case "children":
              Y = Ze;
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
              oe(a, g, O, Ze);
          }
        }
        if (z != null) if (d = fe !== null ? "" + fe : Z(Y), Ve(z)) {
          for (g = 0; g < z.length; g++)
            if ("" + z[g] === d) {
              a.push(le);
              break;
            }
        } else "" + z === d && a.push(le);
        else Te && a.push(le);
        return a.push(se), he(a, xe, Y), Y;
      case "textarea":
        a.push(ge("textarea")), xe = z = O = null;
        for (Y in d) if (E.call(d, Y) && (fe = d[Y], fe != null)) switch (Y) {
          case "children":
            xe = fe;
            break;
          case "value":
            O = fe;
            break;
          case "defaultValue":
            z = fe;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(91));
          default:
            oe(a, g, Y, fe);
        }
        if (O === null && z !== null && (O = z), a.push(se), xe != null) {
          if (O != null) throw Error(t(92));
          if (Ve(xe) && 1 < xe.length) throw Error(t(93));
          O = "" + xe;
        }
        return typeof O == "string" && O[0] === `
` && a.push(me), O !== null && a.push(w(_e("" + O))), null;
      case "input":
        a.push(ge("input")), fe = xe = Y = O = null;
        for (z in d) if (E.call(d, z) && (Te = d[z], Te != null)) switch (z) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, "input"));
          case "defaultChecked":
            fe = Te;
            break;
          case "defaultValue":
            Y = Te;
            break;
          case "checked":
            xe = Te;
            break;
          case "value":
            O = Te;
            break;
          default:
            oe(a, g, z, Te);
        }
        return xe !== null ? oe(
          a,
          g,
          "checked",
          xe
        ) : fe !== null && oe(a, g, "checked", fe), O !== null ? oe(a, g, "value", O) : Y !== null && oe(a, g, "value", Y), a.push(K), null;
      case "menuitem":
        a.push(ge("menuitem"));
        for (var Ot in d) if (E.call(d, Ot) && (O = d[Ot], O != null)) switch (Ot) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            oe(a, g, Ot, O);
        }
        return a.push(se), null;
      case "title":
        a.push(ge("title")), O = null;
        for (Ze in d) if (E.call(d, Ze) && (z = d[Ze], z != null)) switch (Ze) {
          case "children":
            O = z;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(434));
          default:
            oe(a, g, Ze, z);
        }
        return a.push(se), O;
      case "listing":
      case "pre":
        a.push(ge(s)), z = O = null;
        for (fe in d) if (E.call(d, fe) && (Y = d[fe], Y != null)) switch (fe) {
          case "children":
            O = Y;
            break;
          case "dangerouslySetInnerHTML":
            z = Y;
            break;
          default:
            oe(a, g, fe, Y);
        }
        if (a.push(se), z != null) {
          if (O != null) throw Error(t(60));
          if (typeof z != "object" || !("__html" in z)) throw Error(t(61));
          d = z.__html, d != null && (typeof d == "string" && 0 < d.length && d[0] === `
` ? a.push(me, w(d)) : a.push(w("" + d)));
        }
        return typeof O == "string" && O[0] === `
` && a.push(me), O;
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
        for (var Wt in d) if (E.call(d, Wt) && (O = d[Wt], O != null)) switch (Wt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, s));
          default:
            oe(a, g, Wt, O);
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
        return Ue(a, d, s, g);
      case "html":
        return N.insertionMode === 0 && a.push($), Ue(a, d, s, g);
      default:
        if (s.indexOf("-") === -1 && typeof d.is != "string") return Ue(a, d, s, g);
        a.push(ge(s)), z = O = null;
        for (Te in d) if (E.call(d, Te) && (Y = d[Te], Y != null)) switch (Te) {
          case "children":
            O = Y;
            break;
          case "dangerouslySetInnerHTML":
            z = Y;
            break;
          case "style":
            T(a, g, Y);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            k(Te) && typeof Y != "function" && typeof Y != "symbol" && a.push(ne, w(Te), ee, w(_e(Y)), te);
        }
        return a.push(se), he(a, z, O), O;
    }
  }
  var Ye = m("</"), lt = m(">"), Me = m('<template id="'), Yt = m('"></template>'), Rt = m("<!--$-->"), Kt = m('<!--$?--><template id="'), mt = m('"></template>'), ft = m("<!--$!-->"), nt = m("<!--/$-->"), ct = m("<template"), Pt = m('"'), Dt = m(' data-dgst="');
  m(' data-msg="'), m(' data-stck="');
  var br = m("></template>");
  function ot(a, s, d) {
    if (c(a, Kt), d === null) throw Error(t(395));
    return c(a, d), u(a, mt);
  }
  var gt = m('<div hidden id="'), Xt = m('">'), Ce = m("</div>"), Ft = m('<svg aria-hidden="true" style="display:none" id="'), Jt = m('">'), ve = m("</svg>"), et = m('<math aria-hidden="true" style="display:none" id="'), Qt = m('">'), yt = m("</math>"), Nt = m('<table hidden id="'), Mt = m('">'), jt = m("</table>"), ur = m('<table hidden><tbody id="'), at = m('">'), _t = m("</tbody></table>"), er = m('<table hidden><tr id="'), tr = m('">'), Ct = m("</tr></table>"), Zt = m('<table hidden><colgroup id="'), Xe = m('">'), zt = m("</colgroup></table>");
  function rr(a, s, d, g) {
    switch (d.insertionMode) {
      case 0:
      case 1:
        return c(a, gt), c(a, s.segmentPrefix), c(a, w(g.toString(16))), u(a, Xt);
      case 2:
        return c(a, Ft), c(a, s.segmentPrefix), c(a, w(g.toString(16))), u(a, Jt);
      case 3:
        return c(a, et), c(a, s.segmentPrefix), c(a, w(g.toString(16))), u(a, Qt);
      case 4:
        return c(a, Nt), c(a, s.segmentPrefix), c(a, w(g.toString(16))), u(a, Mt);
      case 5:
        return c(a, ur), c(a, s.segmentPrefix), c(a, w(g.toString(16))), u(a, at);
      case 6:
        return c(a, er), c(a, s.segmentPrefix), c(a, w(g.toString(16))), u(a, tr);
      case 7:
        return c(
          a,
          Zt
        ), c(a, s.segmentPrefix), c(a, w(g.toString(16))), u(a, Xe);
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
  var nr = m('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), ar = m('$RS("'), h = m('","'), b = m('")<\/script>'), _ = m('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), V = m('$RC("'), ye = m('","'), Se = m('")<\/script>'), Pe = m('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), we = m('$RX("'), Je = m('"'), qe = m(")<\/script>"), tt = m(","), or = /[<\u2028\u2029]/g;
  function Ut(a) {
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
  var dr = Object.assign, bn = Symbol.for("react.element"), vr = Symbol.for("react.portal"), wr = Symbol.for("react.fragment"), jr = Symbol.for("react.strict_mode"), zr = Symbol.for("react.profiler"), Ur = Symbol.for("react.provider"), Ar = Symbol.for("react.context"), vn = Symbol.for("react.forward_ref"), wn = Symbol.for("react.suspense"), $r = Symbol.for("react.suspense_list"), n = Symbol.for("react.memo"), l = Symbol.for("react.lazy"), f = Symbol.for("react.scope"), v = Symbol.for("react.debug_trace_mode"), L = Symbol.for("react.legacy_hidden"), A = Symbol.for("react.default_value"), j = Symbol.iterator;
  function Q(a) {
    if (a == null) return null;
    if (typeof a == "function") return a.displayName || a.name || null;
    if (typeof a == "string") return a;
    switch (a) {
      case wr:
        return "Fragment";
      case vr:
        return "Portal";
      case zr:
        return "Profiler";
      case jr:
        return "StrictMode";
      case wn:
        return "Suspense";
      case $r:
        return "SuspenseList";
    }
    if (typeof a == "object") switch (a.$$typeof) {
      case Ar:
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
    var d = {}, g;
    for (g in a) d[g] = s[g];
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
  function $t(a) {
    a.context._currentValue = a.parentValue, a = a.parent, a !== null && $t(a);
  }
  function Bt(a) {
    var s = a.parent;
    s !== null && Bt(s), a.context._currentValue = a.value;
  }
  function Et(a, s) {
    if (a.context._currentValue = a.parentValue, a = a.parent, a === null) throw Error(t(402));
    a.depth === s.depth ? rt(a, s) : Et(a, s);
  }
  function Sr(a, s) {
    var d = s.parent;
    if (d === null) throw Error(t(402));
    a.depth === d.depth ? rt(a, d) : Sr(a, d), s.context._currentValue = s.value;
  }
  function ir(a) {
    var s = ke;
    s !== a && (s === null ? Bt(a) : a === null ? $t(s) : s.depth === a.depth ? rt(s, a) : s.depth > a.depth ? Et(s, a) : Sr(s, a), ke = a);
  }
  var Br = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(a, s) {
    a = a._reactInternals, a.queue !== null && a.queue.push(s);
  }, enqueueReplaceState: function(a, s) {
    a = a._reactInternals, a.replace = !0, a.queue = [s];
  }, enqueueForceUpdate: function() {
  } };
  function kr(a, s, d, g) {
    var N = a.state !== void 0 ? a.state : null;
    a.updater = Br, a.props = d, a.state = N;
    var O = { queue: [], replace: !1 };
    a._reactInternals = O;
    var z = s.contextType;
    if (a.context = typeof z == "object" && z !== null ? z._currentValue : g, z = s.getDerivedStateFromProps, typeof z == "function" && (z = z(d, N), N = z == null ? N : dr({}, N, z), a.state = N), typeof s.getDerivedStateFromProps != "function" && typeof a.getSnapshotBeforeUpdate != "function" && (typeof a.UNSAFE_componentWillMount == "function" || typeof a.componentWillMount == "function")) if (s = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), s !== a.state && Br.enqueueReplaceState(a, a.state, null), O.queue !== null && 0 < O.queue.length) if (s = O.queue, z = O.replace, O.queue = null, O.replace = !1, z && s.length === 1) a.state = s[0];
    else {
      for (O = z ? s[0] : a.state, N = !0, z = z ? 1 : 0; z < s.length; z++) {
        var Y = s[z];
        Y = typeof Y == "function" ? Y.call(a, O, d, g) : Y, Y != null && (N ? (N = !1, O = dr({}, O, Y)) : dr(O, Y));
      }
      a.state = O;
    }
    else O.queue = null;
  }
  var Sn = { id: 1, overflow: "" };
  function fr(a, s, d) {
    var g = a.id;
    a = a.overflow;
    var N = 32 - kn(g) - 1;
    g &= ~(1 << N), d += 1;
    var O = 32 - kn(s) + N;
    if (30 < O) {
      var z = N - N % 5;
      return O = (g & (1 << z) - 1).toString(32), g >>= z, N -= z, { id: 1 << 32 - kn(s) + N | d << N | g, overflow: O + a };
    }
    return { id: 1 << O | d << N | g, overflow: a };
  }
  var kn = Math.clz32 ? Math.clz32 : Vs, Ws = Math.log, Hs = Math.LN2;
  function Vs(a) {
    return a >>>= 0, a === 0 ? 32 : 31 - (Ws(a) / Hs | 0) | 0;
  }
  function qs(a, s) {
    return a === s && (a !== 0 || 1 / a === 1 / s) || a !== a && s !== s;
  }
  var Gs = typeof Object.is == "function" ? Object.is : qs, sr = null, na = null, xn = null, Qe = null, Wr = !1, _n = !1, Hr = 0, pr = null, Cn = 0;
  function xr() {
    if (sr === null) throw Error(t(321));
    return sr;
  }
  function io() {
    if (0 < Cn) throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function aa() {
    return Qe === null ? xn === null ? (Wr = !1, xn = Qe = io()) : (Wr = !0, Qe = xn) : Qe.next === null ? (Wr = !1, Qe = Qe.next = io()) : (Wr = !0, Qe = Qe.next), Qe;
  }
  function oa() {
    na = sr = null, _n = !1, xn = null, Cn = 0, Qe = pr = null;
  }
  function so(a, s) {
    return typeof s == "function" ? s(a) : s;
  }
  function lo(a, s, d) {
    if (sr = xr(), Qe = aa(), Wr) {
      var g = Qe.queue;
      if (s = g.dispatch, pr !== null && (d = pr.get(g), d !== void 0)) {
        pr.delete(g), g = Qe.memoizedState;
        do
          g = a(g, d.action), d = d.next;
        while (d !== null);
        return Qe.memoizedState = g, [g, s];
      }
      return [Qe.memoizedState, s];
    }
    return a = a === so ? typeof s == "function" ? s() : s : d !== void 0 ? d(s) : s, Qe.memoizedState = a, a = Qe.queue = { last: null, dispatch: null }, a = a.dispatch = Ys.bind(null, sr, a), [Qe.memoizedState, a];
  }
  function co(a, s) {
    if (sr = xr(), Qe = aa(), s = s === void 0 ? null : s, Qe !== null) {
      var d = Qe.memoizedState;
      if (d !== null && s !== null) {
        var g = d[1];
        e: if (g === null) g = !1;
        else {
          for (var N = 0; N < g.length && N < s.length; N++) if (!Gs(s[N], g[N])) {
            g = !1;
            break e;
          }
          g = !0;
        }
        if (g) return d[0];
      }
    }
    return a = a(), Qe.memoizedState = [a, s], a;
  }
  function Ys(a, s, d) {
    if (25 <= Cn) throw Error(t(301));
    if (a === sr) if (_n = !0, a = { action: d, next: null }, pr === null && (pr = /* @__PURE__ */ new Map()), d = pr.get(s), d === void 0) pr.set(s, a);
    else {
      for (s = d; s.next !== null; ) s = s.next;
      s.next = a;
    }
  }
  function Xs() {
    throw Error(t(394));
  }
  function Tn() {
  }
  var uo = { readContext: function(a) {
    return a._currentValue;
  }, useContext: function(a) {
    return xr(), a._currentValue;
  }, useMemo: co, useReducer: lo, useRef: function(a) {
    sr = xr(), Qe = aa();
    var s = Qe.memoizedState;
    return s === null ? (a = { current: a }, Qe.memoizedState = a) : s;
  }, useState: function(a) {
    return lo(so, a);
  }, useInsertionEffect: Tn, useLayoutEffect: function() {
  }, useCallback: function(a, s) {
    return co(function() {
      return a;
    }, s);
  }, useImperativeHandle: Tn, useEffect: Tn, useDebugValue: Tn, useDeferredValue: function(a) {
    return xr(), a;
  }, useTransition: function() {
    return xr(), [!1, Xs];
  }, useId: function() {
    var a = na.treeContext, s = a.overflow;
    a = a.id, a = (a & ~(1 << 32 - kn(a) - 1)).toString(32) + s;
    var d = En;
    if (d === null) throw Error(t(404));
    return s = Hr++, a = ":" + d.idPrefix + "R" + a, 0 < s && (a += "H" + s.toString(32)), a + ":";
  }, useMutableSource: function(a, s) {
    return xr(), s(a._source);
  }, useSyncExternalStore: function(a, s, d) {
    if (d === void 0) throw Error(t(407));
    return d();
  } }, En = null, ia = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function Js(a) {
    return console.error(a), null;
  }
  function Vr() {
  }
  function Qs(a, s, d, g, N, O, z, Y, fe) {
    var Te = [], xe = /* @__PURE__ */ new Set();
    return s = { destination: null, responseState: s, progressiveChunkSize: g === void 0 ? 12800 : g, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: xe, pingedTasks: Te, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: N === void 0 ? Js : N, onAllReady: O === void 0 ? Vr : O, onShellReady: z === void 0 ? Vr : z, onShellError: Y === void 0 ? Vr : Y, onFatalError: fe === void 0 ? Vr : fe }, d = An(s, 0, null, d, !1, !1), d.parentFlushed = !0, a = sa(s, a, null, d, xe, de, null, Sn), Te.push(a), s;
  }
  function sa(a, s, d, g, N, O, z, Y) {
    a.allPendingTasks++, d === null ? a.pendingRootTasks++ : d.pendingTasks++;
    var fe = { node: s, ping: function() {
      var Te = a.pingedTasks;
      Te.push(fe), Te.length === 1 && bo(a);
    }, blockedBoundary: d, blockedSegment: g, abortSet: N, legacyContext: O, context: z, treeContext: Y };
    return N.add(fe), fe;
  }
  function An(a, s, d, g, N, O) {
    return { status: 0, id: -1, index: s, parentFlushed: !1, chunks: [], children: [], formatContext: g, boundary: d, lastPushedText: N, textEmbedded: O };
  }
  function qr(a, s) {
    if (a = a.onError(s), a != null && typeof a != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof a + '" instead');
    return a;
  }
  function On(a, s) {
    var d = a.onShellError;
    d(s), d = a.onFatalError, d(s), a.destination !== null ? (a.status = 2, I(a.destination, s)) : (a.status = 1, a.fatalError = s);
  }
  function fo(a, s, d, g, N) {
    for (sr = {}, na = s, Hr = 0, a = d(g, N); _n; ) _n = !1, Hr = 0, Cn += 1, Qe = null, a = d(g, N);
    return oa(), a;
  }
  function po(a, s, d, g) {
    var N = d.render(), O = g.childContextTypes;
    if (O != null) {
      var z = s.legacyContext;
      if (typeof d.getChildContext != "function") g = z;
      else {
        d = d.getChildContext();
        for (var Y in d) if (!(Y in O)) throw Error(t(108, Q(g) || "Unknown", Y));
        g = dr({}, z, d);
      }
      s.legacyContext = g, At(a, s, N), s.legacyContext = z;
    } else At(a, s, N);
  }
  function ho(a, s) {
    if (a && a.defaultProps) {
      s = dr({}, s), a = a.defaultProps;
      for (var d in a) s[d] === void 0 && (s[d] = a[d]);
      return s;
    }
    return s;
  }
  function la(a, s, d, g, N) {
    if (typeof d == "function") if (d.prototype && d.prototype.isReactComponent) {
      N = be(d, s.legacyContext);
      var O = d.contextType;
      O = new d(g, typeof O == "object" && O !== null ? O._currentValue : N), kr(O, d, g, N), po(a, s, O, d);
    } else {
      O = be(d, s.legacyContext), N = fo(a, s, d, g, O);
      var z = Hr !== 0;
      if (typeof N == "object" && N !== null && typeof N.render == "function" && N.$$typeof === void 0) kr(N, d, g, O), po(a, s, N, d);
      else if (z) {
        g = s.treeContext, s.treeContext = fr(g, 1, 0);
        try {
          At(a, s, N);
        } finally {
          s.treeContext = g;
        }
      } else At(a, s, N);
    }
    else if (typeof d == "string") {
      switch (N = s.blockedSegment, O = ae(N.chunks, d, g, a.responseState, N.formatContext), N.lastPushedText = !1, z = N.formatContext, N.formatContext = ie(z, d, g), ca(a, s, O), N.formatContext = z, d) {
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
        case jr:
        case zr:
        case wr:
          At(a, s, g.children);
          return;
        case $r:
          At(a, s, g.children);
          return;
        case f:
          throw Error(t(343));
        case wn:
          e: {
            d = s.blockedBoundary, N = s.blockedSegment, O = g.fallback, g = g.children, z = /* @__PURE__ */ new Set();
            var Y = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: z, errorDigest: null }, fe = An(a, N.chunks.length, Y, N.formatContext, !1, !1);
            N.children.push(fe), N.lastPushedText = !1;
            var Te = An(a, 0, null, N.formatContext, !1, !1);
            Te.parentFlushed = !0, s.blockedBoundary = Y, s.blockedSegment = Te;
            try {
              if (ca(
                a,
                s,
                g
              ), Te.lastPushedText && Te.textEmbedded && Te.chunks.push(M), Te.status = 1, Rn(Y, Te), Y.pendingTasks === 0) break e;
            } catch (xe) {
              Te.status = 4, Y.forceClientRender = !0, Y.errorDigest = qr(a, xe);
            } finally {
              s.blockedBoundary = d, s.blockedSegment = N;
            }
            s = sa(a, O, d, fe, z, s.legacyContext, s.context, s.treeContext), a.pingedTasks.push(s);
          }
          return;
      }
      if (typeof d == "object" && d !== null) switch (d.$$typeof) {
        case vn:
          if (g = fo(a, s, d.render, g, N), Hr !== 0) {
            d = s.treeContext, s.treeContext = fr(d, 1, 0);
            try {
              At(a, s, g);
            } finally {
              s.treeContext = d;
            }
          } else At(a, s, g);
          return;
        case n:
          d = d.type, g = ho(d, g), la(a, s, d, g, N);
          return;
        case Ur:
          if (N = g.children, d = d._context, g = g.value, O = d._currentValue, d._currentValue = g, z = ke, ke = g = { parent: z, depth: z === null ? 0 : z.depth + 1, context: d, parentValue: O, value: g }, s.context = g, At(a, s, N), a = ke, a === null) throw Error(t(403));
          g = a.parentValue, a.context._currentValue = g === A ? a.context._defaultValue : g, a = ke = a.parent, s.context = a;
          return;
        case Ar:
          g = g.children, g = g(d._currentValue), At(a, s, g);
          return;
        case l:
          N = d._init, d = N(d._payload), g = ho(d, g), la(a, s, d, g, void 0);
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
          la(a, s, d.type, d.props, d.ref);
          return;
        case vr:
          throw Error(t(257));
        case l:
          var g = d._init;
          d = g(d._payload), At(a, s, d);
          return;
      }
      if (Ve(d)) {
        mo(a, s, d);
        return;
      }
      if (d === null || typeof d != "object" ? g = null : (g = j && d[j] || d["@@iterator"], g = typeof g == "function" ? g : null), g && (g = g.call(d))) {
        if (d = g.next(), !d.done) {
          var N = [];
          do
            N.push(d.value), d = g.next();
          while (!d.done);
          mo(a, s, N);
        }
        return;
      }
      throw a = Object.prototype.toString.call(d), Error(t(31, a === "[object Object]" ? "object with keys {" + Object.keys(d).join(", ") + "}" : a));
    }
    typeof d == "string" ? (g = s.blockedSegment, g.lastPushedText = C(s.blockedSegment.chunks, d, a.responseState, g.lastPushedText)) : typeof d == "number" && (g = s.blockedSegment, g.lastPushedText = C(s.blockedSegment.chunks, "" + d, a.responseState, g.lastPushedText));
  }
  function mo(a, s, d) {
    for (var g = d.length, N = 0; N < g; N++) {
      var O = s.treeContext;
      s.treeContext = fr(O, g, N);
      try {
        ca(a, s, d[N]);
      } finally {
        s.treeContext = O;
      }
    }
  }
  function ca(a, s, d) {
    var g = s.blockedSegment.formatContext, N = s.legacyContext, O = s.context;
    try {
      return At(a, s, d);
    } catch (fe) {
      if (oa(), typeof fe == "object" && fe !== null && typeof fe.then == "function") {
        d = fe;
        var z = s.blockedSegment, Y = An(a, z.chunks.length, null, z.formatContext, z.lastPushedText, !0);
        z.children.push(Y), z.lastPushedText = !1, a = sa(a, s.node, s.blockedBoundary, Y, s.abortSet, s.legacyContext, s.context, s.treeContext).ping, d.then(a, a), s.blockedSegment.formatContext = g, s.legacyContext = N, s.context = O, ir(O);
      } else throw s.blockedSegment.formatContext = g, s.legacyContext = N, s.context = O, ir(O), fe;
    }
  }
  function Zs(a) {
    var s = a.blockedBoundary;
    a = a.blockedSegment, a.status = 3, yo(this, s, a);
  }
  function go(a, s, d) {
    var g = a.blockedBoundary;
    a.blockedSegment.status = 3, g === null ? (s.allPendingTasks--, s.status !== 2 && (s.status = 2, s.destination !== null && s.destination.close())) : (g.pendingTasks--, g.forceClientRender || (g.forceClientRender = !0, a = d === void 0 ? Error(t(432)) : d, g.errorDigest = s.onError(a), g.parentFlushed && s.clientRenderedBoundaries.push(g)), g.fallbackAbortableTasks.forEach(function(N) {
      return go(N, s, d);
    }), g.fallbackAbortableTasks.clear(), s.allPendingTasks--, s.allPendingTasks === 0 && (g = s.onAllReady, g()));
  }
  function Rn(a, s) {
    if (s.chunks.length === 0 && s.children.length === 1 && s.children[0].boundary === null) {
      var d = s.children[0];
      d.id = s.id, d.parentFlushed = !0, d.status === 1 && Rn(a, d);
    } else a.completedSegments.push(s);
  }
  function yo(a, s, d) {
    if (s === null) {
      if (d.parentFlushed) {
        if (a.completedRootSegment !== null) throw Error(t(389));
        a.completedRootSegment = d;
      }
      a.pendingRootTasks--, a.pendingRootTasks === 0 && (a.onShellError = Vr, s = a.onShellReady, s());
    } else s.pendingTasks--, s.forceClientRender || (s.pendingTasks === 0 ? (d.parentFlushed && d.status === 1 && Rn(s, d), s.parentFlushed && a.completedBoundaries.push(s), s.fallbackAbortableTasks.forEach(Zs, a), s.fallbackAbortableTasks.clear()) : d.parentFlushed && d.status === 1 && (Rn(s, d), s.completedSegments.length === 1 && s.parentFlushed && a.partialBoundaries.push(s)));
    a.allPendingTasks--, a.allPendingTasks === 0 && (a = a.onAllReady, a());
  }
  function bo(a) {
    if (a.status !== 2) {
      var s = ke, d = ia.current;
      ia.current = uo;
      var g = En;
      En = a.responseState;
      try {
        var N = a.pingedTasks, O;
        for (O = 0; O < N.length; O++) {
          var z = N[O], Y = a, fe = z.blockedSegment;
          if (fe.status === 0) {
            ir(z.context);
            try {
              At(Y, z, z.node), fe.lastPushedText && fe.textEmbedded && fe.chunks.push(M), z.abortSet.delete(z), fe.status = 1, yo(Y, z.blockedBoundary, fe);
            } catch (Ht) {
              if (oa(), typeof Ht == "object" && Ht !== null && typeof Ht.then == "function") {
                var Te = z.ping;
                Ht.then(Te, Te);
              } else {
                z.abortSet.delete(z), fe.status = 4;
                var xe = z.blockedBoundary, Ze = Ht, Ot = qr(Y, Ze);
                if (xe === null ? On(Y, Ze) : (xe.pendingTasks--, xe.forceClientRender || (xe.forceClientRender = !0, xe.errorDigest = Ot, xe.parentFlushed && Y.clientRenderedBoundaries.push(xe))), Y.allPendingTasks--, Y.allPendingTasks === 0) {
                  var Wt = Y.onAllReady;
                  Wt();
                }
              }
            } finally {
            }
          }
        }
        N.splice(0, O), a.destination !== null && ua(a, a.destination);
      } catch (Ht) {
        qr(a, Ht), On(a, Ht);
      } finally {
        En = g, ia.current = d, d === uo && ir(s);
      }
    }
  }
  function Nn(a, s, d) {
    switch (d.parentFlushed = !0, d.status) {
      case 0:
        var g = d.id = a.nextSegmentId++;
        return d.lastPushedText = !1, d.textEmbedded = !1, a = a.responseState, c(s, Me), c(s, a.placeholderPrefix), a = w(g.toString(16)), c(s, a), u(s, Yt);
      case 1:
        d.status = 2;
        var N = !0;
        g = d.chunks;
        var O = 0;
        d = d.children;
        for (var z = 0; z < d.length; z++) {
          for (N = d[z]; O < N.index; O++) c(s, g[O]);
          N = Ln(a, s, N);
        }
        for (; O < g.length - 1; O++) c(s, g[O]);
        return O < g.length && (N = u(s, g[O])), N;
      default:
        throw Error(t(390));
    }
  }
  function Ln(a, s, d) {
    var g = d.boundary;
    if (g === null) return Nn(a, s, d);
    if (g.parentFlushed = !0, g.forceClientRender) g = g.errorDigest, u(s, ft), c(s, ct), g && (c(s, Dt), c(s, w(_e(g))), c(s, Pt)), u(s, br), Nn(a, s, d);
    else if (0 < g.pendingTasks) {
      g.rootSegmentID = a.nextSegmentId++, 0 < g.completedSegments.length && a.partialBoundaries.push(g);
      var N = a.responseState, O = N.nextSuspenseID++;
      N = m(N.boundaryPrefix + O.toString(16)), g = g.id = N, ot(s, a.responseState, g), Nn(a, s, d);
    } else if (g.byteSize > a.progressiveChunkSize) g.rootSegmentID = a.nextSegmentId++, a.completedBoundaries.push(g), ot(s, a.responseState, g.id), Nn(a, s, d);
    else {
      if (u(s, Rt), d = g.completedSegments, d.length !== 1) throw Error(t(391));
      Ln(a, s, d[0]);
    }
    return u(s, nt);
  }
  function vo(a, s, d) {
    return rr(s, a.responseState, d.formatContext, d.id), Ln(a, s, d), Tt(s, d.formatContext);
  }
  function wo(a, s, d) {
    for (var g = d.completedSegments, N = 0; N < g.length; N++) So(a, s, d, g[N]);
    if (g.length = 0, a = a.responseState, g = d.id, d = d.rootSegmentID, c(s, a.startInlineScript), a.sentCompleteBoundaryFunction ? c(s, V) : (a.sentCompleteBoundaryFunction = !0, c(s, _)), g === null) throw Error(t(395));
    return d = w(d.toString(16)), c(s, g), c(s, ye), c(s, a.segmentPrefix), c(s, d), u(s, Se);
  }
  function So(a, s, d, g) {
    if (g.status === 2) return !0;
    var N = g.id;
    if (N === -1) {
      if ((g.id = d.rootSegmentID) === -1) throw Error(t(392));
      return vo(a, s, g);
    }
    return vo(a, s, g), a = a.responseState, c(s, a.startInlineScript), a.sentCompleteSegmentFunction ? c(s, ar) : (a.sentCompleteSegmentFunction = !0, c(s, nr)), c(s, a.segmentPrefix), N = w(N.toString(16)), c(s, N), c(s, h), c(s, a.placeholderPrefix), c(s, N), u(s, b);
  }
  function ua(a, s) {
    r = new Uint8Array(512), o = 0;
    try {
      var d = a.completedRootSegment;
      if (d !== null && a.pendingRootTasks === 0) {
        Ln(a, s, d), a.completedRootSegment = null;
        var g = a.responseState.bootstrapChunks;
        for (d = 0; d < g.length - 1; d++) c(s, g[d]);
        d < g.length && u(s, g[d]);
      }
      var N = a.clientRenderedBoundaries, O;
      for (O = 0; O < N.length; O++) {
        var z = N[O];
        g = s;
        var Y = a.responseState, fe = z.id, Te = z.errorDigest, xe = z.errorMessage, Ze = z.errorComponentStack;
        if (c(g, Y.startInlineScript), Y.sentClientRenderFunction ? c(g, we) : (Y.sentClientRenderFunction = !0, c(
          g,
          Pe
        )), fe === null) throw Error(t(395));
        c(g, fe), c(g, Je), (Te || xe || Ze) && (c(g, tt), c(g, w(Ut(Te || "")))), (xe || Ze) && (c(g, tt), c(g, w(Ut(xe || "")))), Ze && (c(g, tt), c(g, w(Ut(Ze)))), u(g, qe);
      }
      N.splice(0, O);
      var Ot = a.completedBoundaries;
      for (O = 0; O < Ot.length; O++) wo(a, s, Ot[O]);
      Ot.splice(0, O), y(s), r = new Uint8Array(512), o = 0;
      var Wt = a.partialBoundaries;
      for (O = 0; O < Wt.length; O++) {
        var Ht = Wt[O];
        e: {
          N = a, z = s;
          var In = Ht.completedSegments;
          for (Y = 0; Y < In.length; Y++) if (!So(
            N,
            z,
            Ht,
            In[Y]
          )) {
            Y++, In.splice(0, Y);
            var xo = !1;
            break e;
          }
          In.splice(0, Y), xo = !0;
        }
        if (!xo) {
          a.destination = null, O++, Wt.splice(0, O);
          return;
        }
      }
      Wt.splice(0, O);
      var da = a.completedBoundaries;
      for (O = 0; O < da.length; O++) wo(a, s, da[O]);
      da.splice(0, O);
    } finally {
      y(s), a.allPendingTasks === 0 && a.pingedTasks.length === 0 && a.clientRenderedBoundaries.length === 0 && a.completedBoundaries.length === 0 && s.close();
    }
  }
  function ko(a, s) {
    try {
      var d = a.abortableTasks;
      d.forEach(function(g) {
        return go(g, a, s);
      }), d.clear(), a.destination !== null && ua(a, a.destination);
    } catch (g) {
      qr(a, g), On(a, g);
    }
  }
  return jn.renderToReadableStream = function(a, s) {
    return new Promise(function(d, g) {
      var N, O, z = new Promise(function(xe, Ze) {
        O = xe, N = Ze;
      }), Y = Qs(a, Ae(s ? s.identifierPrefix : void 0, s ? s.nonce : void 0, s ? s.bootstrapScriptContent : void 0, s ? s.bootstrapScripts : void 0, s ? s.bootstrapModules : void 0), Ke(s ? s.namespaceURI : void 0), s ? s.progressiveChunkSize : void 0, s ? s.onError : void 0, O, function() {
        var xe = new ReadableStream({ type: "bytes", pull: function(Ze) {
          if (Y.status === 1) Y.status = 2, I(Ze, Y.fatalError);
          else if (Y.status !== 2 && Y.destination === null) {
            Y.destination = Ze;
            try {
              ua(Y, Ze);
            } catch (Ot) {
              qr(Y, Ot), On(Y, Ot);
            }
          }
        }, cancel: function() {
          ko(Y);
        } }, { highWaterMark: 0 });
        xe.allReady = z, d(xe);
      }, function(xe) {
        z.catch(function() {
        }), g(xe);
      }, N);
      if (s && s.signal) {
        var fe = s.signal, Te = function() {
          ko(Y, fe.reason), fe.removeEventListener("abort", Te);
        };
        fe.addEventListener("abort", Te);
      }
      bo(Y);
    });
  }, jn.version = "18.3.1", jn;
}
var Mr, Ki;
Mr = sc(), Ki = lc();
Mr.version;
Mr.renderToString;
Mr.renderToStaticMarkup;
Mr.renderToNodeStream;
Mr.renderToStaticNodeStream;
Ki.renderToReadableStream;
const cc = "staticMarkup";
function es() {
  const e = nl().indexOf(cc) > -1 ? !0 : void 0;
  return {
    isBootstrap: e,
    isReact: e ? void 0 : !0
  };
}
const mn = ({ gaData: e, prefix: t = "", children: r }) => {
  const { isReact: o } = es(), { onClick: c, ...u } = r.props;
  if (o)
    return dt.cloneElement(r, {
      ...u,
      onClick: (w) => (oc(e), c ? c(w) : !0)
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
  return dt.cloneElement(r, {
    ...u,
    onClick: c,
    ...S
  });
};
i.number, i.number, i.func, i.object;
i.arrayOf(Vi).isRequired, i.number;
const uc = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, ts = ({
  label: e = "",
  cardTitle: t = "",
  gaData: r,
  ariaLabel: o,
  block: c,
  color: u = "gray",
  disabled: y,
  element: S = "button",
  href: w,
  icon: m,
  innerRef: I,
  onClick: E,
  size: U = "default",
  classes: J,
  target: R = "_self",
  ...k
}) => {
  const D = Lr("btn", {
    [`btn-${u}`]: !0,
    "btn-md": U === "small",
    "btn-sm": U === "xsmall",
    "btn-block": c,
    disabled: y
  });
  let H = S;
  return w && S === "button" && (H = "a"), /* @__PURE__ */ G.jsx(
    mn,
    {
      gaData: {
        ...uc,
        section: t,
        // @deprecated - remove at some point
        ...r,
        text: e
      },
      children: /* @__PURE__ */ G.jsxs(
        H,
        {
          type: H === "button" && E ? "button" : void 0,
          ...k,
          className: Lr(J) || D,
          href: w,
          ref: I,
          onClick: E,
          "aria-label": o,
          target: H === "a" ? R : null,
          children: [
            m && /* @__PURE__ */ G.jsx("i", { className: `${m == null ? void 0 : m[0]} fa-${m == null ? void 0 : m[1]} me-1` }),
            e
          ]
        }
      )
    }
  );
};
ts.propTypes = {
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
  gaData: Ga,
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
var rs = { exports: {} }, Be = {}, Jo;
function dc() {
  if (Jo) return Be;
  Jo = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), u = Symbol.for("react.consumer"), y = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), I = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), U = Symbol.for("react.offscreen"), J = Symbol.for("react.client.reference");
  function R(k) {
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
                case y:
                case S:
                case E:
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
  return Be.ContextConsumer = u, Be.ContextProvider = y, Be.Element = e, Be.ForwardRef = S, Be.Fragment = r, Be.Lazy = E, Be.Memo = I, Be.Portal = t, Be.Profiler = c, Be.StrictMode = o, Be.Suspense = w, Be.SuspenseList = m, Be.isContextConsumer = function(k) {
    return R(k) === u;
  }, Be.isContextProvider = function(k) {
    return R(k) === y;
  }, Be.isElement = function(k) {
    return typeof k == "object" && k !== null && k.$$typeof === e;
  }, Be.isForwardRef = function(k) {
    return R(k) === S;
  }, Be.isFragment = function(k) {
    return R(k) === r;
  }, Be.isLazy = function(k) {
    return R(k) === E;
  }, Be.isMemo = function(k) {
    return R(k) === I;
  }, Be.isPortal = function(k) {
    return R(k) === t;
  }, Be.isProfiler = function(k) {
    return R(k) === c;
  }, Be.isStrictMode = function(k) {
    return R(k) === o;
  }, Be.isSuspense = function(k) {
    return R(k) === w;
  }, Be.isSuspenseList = function(k) {
    return R(k) === m;
  }, Be.isValidElementType = function(k) {
    return typeof k == "string" || typeof k == "function" || k === r || k === c || k === o || k === w || k === m || k === U || typeof k == "object" && k !== null && (k.$$typeof === E || k.$$typeof === I || k.$$typeof === y || k.$$typeof === u || k.$$typeof === S || k.$$typeof === J || k.getModuleId !== void 0);
  }, Be.typeOf = R, Be;
}
rs.exports = dc();
var ns = rs.exports;
function fc(e) {
  function t(M, C, F, P, p) {
    for (var re = 0, T = 0, ne = 0, ee = 0, te, B, oe = 0, se = 0, K, he = K = te = 0, Z = 0, le = 0, Ue = 0, me = 0, it = F.length, Ge = it - 1, ge, $ = "", ae = "", Ye = "", lt = "", Me; Z < it; ) {
      if (B = F.charCodeAt(Z), Z === Ge && T + ee + ne + re !== 0 && (T !== 0 && (B = T === 47 ? 10 : 47), ee = ne = re = 0, it++, Ge++), T + ee + ne + re === 0) {
        if (Z === Ge && (0 < le && ($ = $.replace(U, "")), 0 < $.trim().length)) {
          switch (B) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              $ += F.charAt(Z);
          }
          B = 59;
        }
        switch (B) {
          case 123:
            for ($ = $.trim(), te = $.charCodeAt(0), K = 1, me = ++Z; Z < it; ) {
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
            switch (K = F.substring(me, Z), te === 0 && (te = ($ = $.replace(E, "").trim()).charCodeAt(0)), te) {
              case 64:
                switch (0 < le && ($ = $.replace(U, "")), B = $.charCodeAt(1), B) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    le = C;
                    break;
                  default:
                    le = st;
                }
                if (K = t(C, le, K, B, p + 1), me = K.length, 0 < Ae && (le = r(st, $, Ue), Me = S(3, K, le, C, Ne, pe, me, B, p, P), $ = le.join(""), Me !== void 0 && (me = (K = Me.trim()).length) === 0 && (B = 0, K = "")), 0 < me) switch (B) {
                  case 115:
                    $ = $.replace(ce, y);
                  case 100:
                  case 109:
                  case 45:
                    K = $ + "{" + K + "}";
                    break;
                  case 107:
                    $ = $.replace(q, "$1 $2"), K = $ + "{" + K + "}", K = Ee === 1 || Ee === 2 && u("@" + K, 3) ? "@-webkit-" + K + "@" + K : "@" + K;
                    break;
                  default:
                    K = $ + K, P === 112 && (K = (ae += K, ""));
                }
                else K = "";
                break;
              default:
                K = t(C, r(C, $, Ue), K, P, p + 1);
            }
            Ye += K, K = Ue = le = he = te = 0, $ = "", B = F.charCodeAt(++Z);
            break;
          case 125:
          case 59:
            if ($ = (0 < le ? $.replace(U, "") : $).trim(), 1 < (me = $.length)) switch (he === 0 && (te = $.charCodeAt(0), te === 45 || 96 < te && 123 > te) && (me = ($ = $.replace(" ", ":")).length), 0 < Ae && (Me = S(1, $, C, M, Ne, pe, ae.length, P, p, P)) !== void 0 && (me = ($ = Me.trim()).length) === 0 && ($ = "\0\0"), te = $.charCodeAt(0), B = $.charCodeAt(1), te) {
              case 0:
                break;
              case 64:
                if (B === 105 || B === 99) {
                  lt += $ + F.charAt(Z);
                  break;
                }
              default:
                $.charCodeAt(me - 1) !== 58 && (ae += c($, te, B, $.charCodeAt(2)));
            }
            Ue = le = he = te = 0, $ = "", B = F.charCodeAt(++Z);
        }
      }
      switch (B) {
        case 13:
        case 10:
          T === 47 ? T = 0 : 1 + te === 0 && P !== 107 && 0 < $.length && (le = 1, $ += "\0"), 0 < Ae * Ke && S(0, $, C, M, Ne, pe, ae.length, P, p, P), pe = 1, Ne++;
          break;
        case 59:
        case 125:
          if (T + ee + ne + re === 0) {
            pe++;
            break;
          }
        default:
          switch (pe++, ge = F.charAt(Z), B) {
            case 9:
            case 32:
              if (ee + re + T === 0) switch (oe) {
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
              ee + T + re === 0 && (le = Ue = 1, ge = "\f" + ge);
              break;
            case 108:
              if (ee + T + re + Le === 0 && 0 < he) switch (Z - he) {
                case 2:
                  oe === 112 && F.charCodeAt(Z - 3) === 58 && (Le = oe);
                case 8:
                  se === 111 && (Le = se);
              }
              break;
            case 58:
              ee + T + re === 0 && (he = Z);
              break;
            case 44:
              T + ne + ee + re === 0 && (le = 1, ge += "\r");
              break;
            case 34:
            case 39:
              T === 0 && (ee = ee === B ? 0 : ee === 0 ? B : ee);
              break;
            case 91:
              ee + T + ne === 0 && re++;
              break;
            case 93:
              ee + T + ne === 0 && re--;
              break;
            case 41:
              ee + T + re === 0 && ne--;
              break;
            case 40:
              if (ee + T + re === 0) {
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
              T + ne + ee + re + he + K === 0 && (K = 1);
              break;
            case 42:
            case 47:
              if (!(0 < ee + re + ne)) switch (T) {
                case 0:
                  switch (2 * B + 3 * F.charCodeAt(Z + 1)) {
                    case 235:
                      T = 47;
                      break;
                    case 220:
                      me = Z, T = 42;
                  }
                  break;
                case 42:
                  B === 47 && oe === 42 && me + 2 !== Z && (F.charCodeAt(me + 2) === 33 && (ae += F.substring(me, Z + 1)), ge = "", T = 0);
              }
          }
          T === 0 && ($ += ge);
      }
      se = oe, oe = B, Z++;
    }
    if (me = ae.length, 0 < me) {
      if (le = C, 0 < Ae && (Me = S(2, ae, le, M, Ne, pe, me, P, p, P), Me !== void 0 && (ae = Me).length === 0)) return lt + ae + Ye;
      if (ae = le.join(",") + "{" + ae + "}", Ee * Le !== 0) {
        switch (Ee !== 2 || u(ae, 2) || (Le = 0), Le) {
          case 111:
            ae = ae.replace(W, ":-moz-$1") + ae;
            break;
          case 112:
            ae = ae.replace(X, "::-webkit-input-$1") + ae.replace(X, "::-moz-$1") + ae.replace(X, ":-ms-input-$1") + ae;
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
        var T = 0;
        for (M = re === 0 ? "" : M[0] + " "; T < p; ++T)
          C[T] = o(M, C[T], F).trim();
        break;
      default:
        var ne = T = 0;
        for (C = []; T < p; ++T)
          for (var ee = 0; ee < re; ++ee)
            C[ne++] = o(M[ee] + " ", P[T], F).trim();
    }
    return C;
  }
  function o(M, C, F) {
    var P = C.charCodeAt(0);
    switch (33 > P && (P = (C = C.trim()).charCodeAt(0)), P) {
      case 38:
        return C.replace(H, "$1" + M.trim());
      case 58:
        return M.trim() + C.replace(H, "$1" + M.trim());
      default:
        if (0 < 1 * F && 0 < C.indexOf("\f")) return C.replace(H, (M.charCodeAt(0) === 58 ? "" : "$1") + M.trim());
    }
    return M + C;
  }
  function c(M, C, F, P) {
    var p = M + ";", re = 2 * C + 3 * F + 4 * P;
    if (re === 944) {
      M = p.indexOf(":", 9) + 1;
      var T = p.substring(M, p.length - 1).trim();
      return T = p.substring(0, M).trim() + T + ";", Ee === 1 || Ee === 2 && u(T, 1) ? "-webkit-" + T + T : T;
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
        return T = p.substring(p.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + T + "-webkit-" + p + "-ms-flex-pack" + T + p;
      case 1005:
        return R.test(p) ? p.replace(J, ":-webkit-") + p.replace(J, ":-moz-") + p : p;
      case 1e3:
        switch (T = p.substring(13).trim(), C = T.indexOf("-") + 1, T.charCodeAt(0) + T.charCodeAt(C)) {
          case 226:
            T = p.replace(x, "tb");
            break;
          case 232:
            T = p.replace(x, "tb-rl");
            break;
          case 220:
            T = p.replace(x, "lr");
            break;
          default:
            return p;
        }
        return "-webkit-" + p + "-ms-" + T + p;
      case 1017:
        if (p.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (C = (p = M).length - 10, T = (p.charCodeAt(C) === 33 ? p.substring(0, C) : p).substring(M.indexOf(":", 7) + 1).trim(), re = T.charCodeAt(0) + (T.charCodeAt(7) | 0)) {
          case 203:
            if (111 > T.charCodeAt(8)) break;
          case 115:
            p = p.replace(T, "-webkit-" + T) + ";" + p;
            break;
          case 207:
          case 102:
            p = p.replace(T, "-webkit-" + (102 < re ? "inline-" : "") + "box") + ";" + p.replace(T, "-webkit-" + T) + ";" + p.replace(T, "-ms-" + T + "box") + ";" + p;
        }
        return p + ";";
      case 938:
        if (p.charCodeAt(5) === 45) switch (p.charCodeAt(6)) {
          case 105:
            return T = p.replace("-items", ""), "-webkit-" + p + "-webkit-box-" + T + "-ms-flex-" + T + p;
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
        if (Ve.test(M) === !0) return (T = M.substring(M.indexOf(":") + 1)).charCodeAt(0) === 115 ? c(M.replace("stretch", "fill-available"), C, F, P).replace(":fill-available", ":stretch") : p.replace(T, "-webkit-" + T) + p.replace(T, "-moz-" + T.replace("fill-", "")) + p;
        break;
      case 962:
        if (p = "-webkit-" + p + (p.charCodeAt(5) === 102 ? "-ms-" + p : "") + p, F + P === 211 && p.charCodeAt(13) === 105 && 0 < p.indexOf("transform", 10)) return p.substring(0, p.indexOf(";", 27) + 1).replace(k, "$1-webkit-$2") + p;
    }
    return p;
  }
  function u(M, C) {
    var F = M.indexOf(C === 1 ? ":" : "{"), P = M.substring(0, C !== 3 ? F : 10);
    return F = M.substring(F + 1, M.length - 1), $e(C !== 2 ? P : P.replace(De, "$1"), F, C);
  }
  function y(M, C) {
    var F = c(C, C.charCodeAt(0), C.charCodeAt(1), C.charCodeAt(2));
    return F !== C + ";" ? F.replace(_e, " or ($1)").substring(4) : "(" + C + ")";
  }
  function S(M, C, F, P, p, re, T, ne, ee, te) {
    for (var B = 0, oe = C, se; B < Ae; ++B)
      switch (se = Fe[B].call(I, M, oe, F, P, p, re, T, ne, ee, te)) {
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
    return M = M.prefix, M !== void 0 && ($e = null, M ? typeof M != "function" ? Ee = 1 : (Ee = 2, $e = M) : Ee = 0), m;
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
  var E = /^\0+/g, U = /[\0\r\f]/g, J = /: */g, R = /zoo|gra/, k = /([,: ])(transform)/g, D = /,\r+?/g, H = /([\t\r\n ])*\f?&/g, q = /@(k\w+)\s*(\S*)\s*/, X = /::(place)/g, W = /:(read-only)/g, x = /[svh]\w+-[tblr]{2}/, ce = /\(\s*(.*)\s*\)/g, _e = /([\s\S]*?);/g, Ie = /-self|flex-/g, De = /[^]*?(:[rp][el]a[\w-]+)[^]*/, Ve = /stretch|:\s*\w+\-(?:conte|avail)/, ue = /([^-])(image-set\()/, pe = 1, Ne = 1, Le = 0, Ee = 1, st = [], Fe = [], Ae = 0, $e = null, Ke = 0, ie = "";
  return I.use = w, I.set = m, e !== void 0 && m(e), I;
}
var pc = {
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
function hc(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var mc = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Qo = /* @__PURE__ */ hc(
  function(e) {
    return mc.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), as = { exports: {} }, je = {}, Zo;
function gc() {
  if (Zo) return je;
  Zo = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, c = e ? Symbol.for("react.strict_mode") : 60108, u = e ? Symbol.for("react.profiler") : 60114, y = e ? Symbol.for("react.provider") : 60109, S = e ? Symbol.for("react.context") : 60110, w = e ? Symbol.for("react.async_mode") : 60111, m = e ? Symbol.for("react.concurrent_mode") : 60111, I = e ? Symbol.for("react.forward_ref") : 60112, E = e ? Symbol.for("react.suspense") : 60113, U = e ? Symbol.for("react.suspense_list") : 60120, J = e ? Symbol.for("react.memo") : 60115, R = e ? Symbol.for("react.lazy") : 60116, k = e ? Symbol.for("react.block") : 60121, D = e ? Symbol.for("react.fundamental") : 60117, H = e ? Symbol.for("react.responder") : 60118, q = e ? Symbol.for("react.scope") : 60119;
  function X(x) {
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
            case E:
              return x;
            default:
              switch (x = x && x.$$typeof, x) {
                case S:
                case I:
                case R:
                case J:
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
    return X(x) === m;
  }
  return je.AsyncMode = w, je.ConcurrentMode = m, je.ContextConsumer = S, je.ContextProvider = y, je.Element = t, je.ForwardRef = I, je.Fragment = o, je.Lazy = R, je.Memo = J, je.Portal = r, je.Profiler = u, je.StrictMode = c, je.Suspense = E, je.isAsyncMode = function(x) {
    return W(x) || X(x) === w;
  }, je.isConcurrentMode = W, je.isContextConsumer = function(x) {
    return X(x) === S;
  }, je.isContextProvider = function(x) {
    return X(x) === y;
  }, je.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === t;
  }, je.isForwardRef = function(x) {
    return X(x) === I;
  }, je.isFragment = function(x) {
    return X(x) === o;
  }, je.isLazy = function(x) {
    return X(x) === R;
  }, je.isMemo = function(x) {
    return X(x) === J;
  }, je.isPortal = function(x) {
    return X(x) === r;
  }, je.isProfiler = function(x) {
    return X(x) === u;
  }, je.isStrictMode = function(x) {
    return X(x) === c;
  }, je.isSuspense = function(x) {
    return X(x) === E;
  }, je.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === o || x === m || x === u || x === c || x === E || x === U || typeof x == "object" && x !== null && (x.$$typeof === R || x.$$typeof === J || x.$$typeof === y || x.$$typeof === S || x.$$typeof === I || x.$$typeof === D || x.$$typeof === H || x.$$typeof === q || x.$$typeof === k);
  }, je.typeOf = X, je;
}
as.exports = gc();
var yc = as.exports, Ya = yc, bc = {
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
}, vc = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, wc = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, os = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Xa = {};
Xa[Ya.ForwardRef] = wc;
Xa[Ya.Memo] = os;
function Ko(e) {
  return Ya.isMemo(e) ? os : Xa[e.$$typeof] || bc;
}
var Sc = Object.defineProperty, kc = Object.getOwnPropertyNames, ei = Object.getOwnPropertySymbols, xc = Object.getOwnPropertyDescriptor, _c = Object.getPrototypeOf, ti = Object.prototype;
function is(e, t, r) {
  if (typeof t != "string") {
    if (ti) {
      var o = _c(t);
      o && o !== ti && is(e, o, r);
    }
    var c = kc(t);
    ei && (c = c.concat(ei(t)));
    for (var u = Ko(e), y = Ko(t), S = 0; S < c.length; ++S) {
      var w = c[S];
      if (!vc[w] && !(r && r[w]) && !(y && y[w]) && !(u && u[w])) {
        var m = xc(t, w);
        try {
          Sc(e, w, m);
        } catch {
        }
      }
    }
  }
  return e;
}
var Cc = is;
const Tc = /* @__PURE__ */ qa(Cc);
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
var ri = function(e, t) {
  for (var r = [e[0]], o = 0, c = t.length; o < c; o += 1) r.push(t[o], e[o + 1]);
  return r;
}, Da = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !ns.typeOf(e);
}, Gn = Object.freeze([]), mr = Object.freeze({});
function dn(e) {
  return typeof e == "function";
}
function ni(e) {
  return e.displayName || e.name || "Component";
}
function Ja(e) {
  return e && typeof e.styledComponentId == "string";
}
var Ir = typeof pt < "u" && pt.env !== void 0 && (pt.env.REACT_APP_SC_ATTR || pt.env.SC_ATTR) || "data-styled", Qa = typeof window < "u" && "HTMLElement" in window, Ec = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof pt < "u" && pt.env !== void 0 && (pt.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && pt.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? pt.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && pt.env.REACT_APP_SC_DISABLE_SPEEDY : pt.env.SC_DISABLE_SPEEDY !== void 0 && pt.env.SC_DISABLE_SPEEDY !== "" ? pt.env.SC_DISABLE_SPEEDY !== "false" && pt.env.SC_DISABLE_SPEEDY : pt.env.NODE_ENV !== "production"));
function gn(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) r[o - 1] = arguments[o];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : ""));
}
var Ac = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(r) {
    for (var o = 0, c = 0; c < r; c++) o += this.groupSizes[c];
    return o;
  }, t.insertRules = function(r, o) {
    if (r >= this.groupSizes.length) {
      for (var c = this.groupSizes, u = c.length, y = u; r >= y; ) (y <<= 1) < 0 && gn(16, "" + r);
      this.groupSizes = new Uint32Array(y), this.groupSizes.set(c), this.length = y;
      for (var S = u; S < y; S++) this.groupSizes[S] = 0;
    }
    for (var w = this.indexOfGroup(r + 1), m = 0, I = o.length; m < I; m++) this.tag.insertRule(w, o[m]) && (this.groupSizes[r]++, w++);
  }, t.clearGroup = function(r) {
    if (r < this.length) {
      var o = this.groupSizes[r], c = this.indexOfGroup(r), u = c + o;
      this.groupSizes[r] = 0;
      for (var y = c; y < u; y++) this.tag.deleteRule(c);
    }
  }, t.getGroup = function(r) {
    var o = "";
    if (r >= this.length || this.groupSizes[r] === 0) return o;
    for (var c = this.groupSizes[r], u = this.indexOfGroup(r), y = u + c, S = u; S < y; S++) o += this.tag.getRule(S) + `/*!sc*/
`;
    return o;
  }, e;
}(), Vn = /* @__PURE__ */ new Map(), Yn = /* @__PURE__ */ new Map(), sn = 1, zn = function(e) {
  if (Vn.has(e)) return Vn.get(e);
  for (; Yn.has(sn); ) sn++;
  var t = sn++;
  return Vn.set(e, t), Yn.set(t, e), t;
}, Oc = function(e) {
  return Yn.get(e);
}, Rc = function(e, t) {
  t >= sn && (sn = t + 1), Vn.set(e, t), Yn.set(t, e);
}, Nc = "style[" + Ir + '][data-styled-version="5.3.11"]', Lc = new RegExp("^" + Ir + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Ic = function(e, t, r) {
  for (var o, c = r.split(","), u = 0, y = c.length; u < y; u++) (o = c[u]) && e.registerName(t, o);
}, Pc = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), o = [], c = 0, u = r.length; c < u; c++) {
    var y = r[c].trim();
    if (y) {
      var S = y.match(Lc);
      if (S) {
        var w = 0 | parseInt(S[1], 10), m = S[2];
        w !== 0 && (Rc(m, w), Ic(e, m, S[3]), e.getTag().insertRules(w, o)), o.length = 0;
      } else o.push(y);
    }
  }
}, Dc = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, ss = function(e) {
  var t = document.head, r = e || t, o = document.createElement("style"), c = function(S) {
    for (var w = S.childNodes, m = w.length; m >= 0; m--) {
      var I = w[m];
      if (I && I.nodeType === 1 && I.hasAttribute(Ir)) return I;
    }
  }(r), u = c !== void 0 ? c.nextSibling : null;
  o.setAttribute(Ir, "active"), o.setAttribute("data-styled-version", "5.3.11");
  var y = Dc();
  return y && o.setAttribute("nonce", y), r.insertBefore(o, u), o;
}, Fc = function() {
  function e(r) {
    var o = this.element = ss(r);
    o.appendChild(document.createTextNode("")), this.sheet = function(c) {
      if (c.sheet) return c.sheet;
      for (var u = document.styleSheets, y = 0, S = u.length; y < S; y++) {
        var w = u[y];
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
}(), Mc = function() {
  function e(r) {
    var o = this.element = ss(r);
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
}(), jc = function() {
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
}(), ai = Qa, zc = { isServer: !Qa, useCSSOMInjection: !Ec }, ls = function() {
  function e(r, o, c) {
    r === void 0 && (r = mr), o === void 0 && (o = {}), this.options = lr({}, zc, {}, r), this.gs = o, this.names = new Map(c), this.server = !!r.isServer, !this.server && Qa && ai && (ai = !1, function(u) {
      for (var y = document.querySelectorAll(Nc), S = 0, w = y.length; S < w; S++) {
        var m = y[S];
        m && m.getAttribute(Ir) !== "active" && (Pc(u, m), m.parentNode && m.parentNode.removeChild(m));
      }
    }(this));
  }
  e.registerId = function(r) {
    return zn(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, o) {
    return o === void 0 && (o = !0), new e(lr({}, this.options, {}, r), this.gs, o && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (c = (o = this.options).isServer, u = o.useCSSOMInjection, y = o.target, r = c ? new jc(y) : u ? new Fc(y) : new Mc(y), new Ac(r)));
    var r, o, c, u, y;
  }, t.hasNameForId = function(r, o) {
    return this.names.has(r) && this.names.get(r).has(o);
  }, t.registerName = function(r, o) {
    if (zn(r), this.names.has(r)) this.names.get(r).add(o);
    else {
      var c = /* @__PURE__ */ new Set();
      c.add(o), this.names.set(r, c);
    }
  }, t.insertRules = function(r, o, c) {
    this.registerName(r, o), this.getTag().insertRules(zn(r), c);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(zn(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var o = r.getTag(), c = o.length, u = "", y = 0; y < c; y++) {
        var S = Oc(y);
        if (S !== void 0) {
          var w = r.names.get(S), m = o.getGroup(y);
          if (w && m && w.size) {
            var I = Ir + ".g" + y + '[id="' + S + '"]', E = "";
            w !== void 0 && w.forEach(function(U) {
              U.length > 0 && (E += U + ",");
            }), u += "" + m + I + '{content:"' + E + `"}/*!sc*/
`;
          }
        }
      }
      return u;
    }(this);
  }, e;
}(), Uc = /(a)(d)/gi, oi = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Fa(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = oi(t % 52) + r;
  return (oi(t % 52) + r).replace(Uc, "$1-$2");
}
var Rr = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, cs = function(e) {
  return Rr(5381, e);
};
function $c(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (dn(r) && !Ja(r)) return !1;
  }
  return !0;
}
var Bc = cs("5.3.11"), Wc = function() {
  function e(t, r, o) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (o === void 0 || o.isStatic) && $c(t), this.componentId = r, this.baseHash = Rr(Bc, r), this.baseStyle = o, ls.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, o) {
    var c = this.componentId, u = [];
    if (this.baseStyle && u.push(this.baseStyle.generateAndInjectStyles(t, r, o)), this.isStatic && !o.hash) if (this.staticRulesId && r.hasNameForId(c, this.staticRulesId)) u.push(this.staticRulesId);
    else {
      var y = Pr(this.rules, t, r, o).join(""), S = Fa(Rr(this.baseHash, y) >>> 0);
      if (!r.hasNameForId(c, S)) {
        var w = o(y, "." + S, void 0, c);
        r.insertRules(c, S, w);
      }
      u.push(S), this.staticRulesId = S;
    }
    else {
      for (var m = this.rules.length, I = Rr(this.baseHash, o.hash), E = "", U = 0; U < m; U++) {
        var J = this.rules[U];
        if (typeof J == "string") E += J;
        else if (J) {
          var R = Pr(J, t, r, o), k = Array.isArray(R) ? R.join("") : R;
          I = Rr(I, k + U), E += k;
        }
      }
      if (E) {
        var D = Fa(I >>> 0);
        if (!r.hasNameForId(c, D)) {
          var H = o(E, "." + D, void 0, c);
          r.insertRules(c, D, H);
        }
        u.push(D);
      }
    }
    return u.join(" ");
  }, e;
}(), Hc = /^\s*\/\/.*$/gm, Vc = [":", "[", ".", "#"];
function qc(e) {
  var t, r, o, c, u = mr, y = u.options, S = y === void 0 ? mr : y, w = u.plugins, m = w === void 0 ? Gn : w, I = new fc(S), E = [], U = /* @__PURE__ */ function(k) {
    function D(H) {
      if (H) try {
        k(H + "}");
      } catch {
      }
    }
    return function(H, q, X, W, x, ce, _e, Ie, De, Ve) {
      switch (H) {
        case 1:
          if (De === 0 && q.charCodeAt(0) === 64) return k(q + ";"), "";
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
              return q + (Ve === 0 ? "/*|*/" : "");
          }
        case -2:
          q.split("/*|*/}").forEach(D);
      }
    };
  }(function(k) {
    E.push(k);
  }), J = function(k, D, H) {
    return D === 0 && Vc.indexOf(H[r.length]) !== -1 || H.match(c) ? k : "." + t;
  };
  function R(k, D, H, q) {
    q === void 0 && (q = "&");
    var X = k.replace(Hc, ""), W = D && H ? H + " " + D + " { " + X + " }" : X;
    return t = q, r = D, o = new RegExp("\\" + r + "\\b", "g"), c = new RegExp("(\\" + r + "\\b){2,}"), I(H || !D ? "" : D, W);
  }
  return I.use([].concat(m, [function(k, D, H) {
    k === 2 && H.length && H[0].lastIndexOf(r) > 0 && (H[0] = H[0].replace(o, J));
  }, U, function(k) {
    if (k === -2) {
      var D = E;
      return E = [], D;
    }
  }])), R.hash = m.length ? m.reduce(function(k, D) {
    return D.name || gn(15), Rr(k, D.name);
  }, 5381).toString() : "", R;
}
var us = dt.createContext();
us.Consumer;
var ds = dt.createContext(), Gc = (ds.Consumer, new ls()), Ma = qc();
function Yc() {
  return yr(us) || Gc;
}
function Xc() {
  return yr(ds) || Ma;
}
var Jc = function() {
  function e(t, r) {
    var o = this;
    this.inject = function(c, u) {
      u === void 0 && (u = Ma);
      var y = o.name + u.hash;
      c.hasNameForId(o.id, y) || c.insertRules(o.id, y, u(o.rules, y, "@keyframes"));
    }, this.toString = function() {
      return gn(12, String(o.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Ma), this.name + t.hash;
  }, e;
}(), Qc = /([A-Z])/, Zc = /([A-Z])/g, Kc = /^ms-/, eu = function(e) {
  return "-" + e.toLowerCase();
};
function ii(e) {
  return Qc.test(e) ? e.replace(Zc, eu).replace(Kc, "-ms-") : e;
}
var si = function(e) {
  return e == null || e === !1 || e === "";
};
function Pr(e, t, r, o) {
  if (Array.isArray(e)) {
    for (var c, u = [], y = 0, S = e.length; y < S; y += 1) (c = Pr(e[y], t, r, o)) !== "" && (Array.isArray(c) ? u.push.apply(u, c) : u.push(c));
    return u;
  }
  if (si(e)) return "";
  if (Ja(e)) return "." + e.styledComponentId;
  if (dn(e)) {
    if (typeof (m = e) != "function" || m.prototype && m.prototype.isReactComponent || !t) return e;
    var w = e(t);
    return Pr(w, t, r, o);
  }
  var m;
  return e instanceof Jc ? r ? (e.inject(r, o), e.getName(o)) : e : Da(e) ? function I(E, U) {
    var J, R, k = [];
    for (var D in E) E.hasOwnProperty(D) && !si(E[D]) && (Array.isArray(E[D]) && E[D].isCss || dn(E[D]) ? k.push(ii(D) + ":", E[D], ";") : Da(E[D]) ? k.push.apply(k, I(E[D], D)) : k.push(ii(D) + ": " + (J = D, (R = E[D]) == null || typeof R == "boolean" || R === "" ? "" : typeof R != "number" || R === 0 || J in pc || J.startsWith("--") ? String(R).trim() : R + "px") + ";"));
    return U ? [U + " {"].concat(k, ["}"]) : k;
  }(e) : e.toString();
}
var li = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function tu(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) r[o - 1] = arguments[o];
  return dn(e) || Da(e) ? li(Pr(ri(Gn, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : li(Pr(ri(e, r)));
}
var ru = function(e, t, r) {
  return r === void 0 && (r = mr), e.theme !== r.theme && e.theme || t || r.theme;
}, nu = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, au = /(^-|-$)/g;
function Ea(e) {
  return e.replace(nu, "-").replace(au, "");
}
var ou = function(e) {
  return Fa(cs(e) >>> 0);
};
function Un(e) {
  return typeof e == "string" && pt.env.NODE_ENV === "production";
}
var ja = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, iu = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function su(e, t, r) {
  var o = e[r];
  ja(t) && ja(o) ? fs(o, t) : e[r] = t;
}
function fs(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) r[o - 1] = arguments[o];
  for (var c = 0, u = r; c < u.length; c++) {
    var y = u[c];
    if (ja(y)) for (var S in y) iu(S) && su(e, y[S], S);
  }
  return e;
}
var ps = dt.createContext();
ps.Consumer;
var Aa = {};
function hs(e, t, r) {
  var o = Ja(e), c = !Un(e), u = t.attrs, y = u === void 0 ? Gn : u, S = t.componentId, w = S === void 0 ? function(q, X) {
    var W = typeof q != "string" ? "sc" : Ea(q);
    Aa[W] = (Aa[W] || 0) + 1;
    var x = W + "-" + ou("5.3.11" + W + Aa[W]);
    return X ? X + "-" + x : x;
  }(t.displayName, t.parentComponentId) : S, m = t.displayName, I = m === void 0 ? function(q) {
    return Un(q) ? "styled." + q : "Styled(" + ni(q) + ")";
  }(e) : m, E = t.displayName && t.componentId ? Ea(t.displayName) + "-" + t.componentId : t.componentId || w, U = o && e.attrs ? Array.prototype.concat(e.attrs, y).filter(Boolean) : y, J = t.shouldForwardProp;
  o && e.shouldForwardProp && (J = t.shouldForwardProp ? function(q, X, W) {
    return e.shouldForwardProp(q, X, W) && t.shouldForwardProp(q, X, W);
  } : e.shouldForwardProp);
  var R, k = new Wc(r, E, o ? e.componentStyle : void 0), D = k.isStatic && y.length === 0, H = function(q, X) {
    return function(W, x, ce, _e) {
      var Ie = W.attrs, De = W.componentStyle, Ve = W.defaultProps, ue = W.foldedComponentIds, pe = W.shouldForwardProp, Ne = W.styledComponentId, Le = W.target, Ee = function(P, p, re) {
        P === void 0 && (P = mr);
        var T = lr({}, p, { theme: P }), ne = {};
        return re.forEach(function(ee) {
          var te, B, oe, se = ee;
          for (te in dn(se) && (se = se(T)), se) T[te] = ne[te] = te === "className" ? (B = ne[te], oe = se[te], B && oe ? B + " " + oe : B || oe) : se[te];
        }), [T, ne];
      }(ru(x, yr(ps), Ve) || mr, x, Ie), st = Ee[0], Fe = Ee[1], Ae = function(P, p, re, T) {
        var ne = Yc(), ee = Xc(), te = p ? P.generateAndInjectStyles(mr, ne, ee) : P.generateAndInjectStyles(re, ne, ee);
        return te;
      }(De, _e, st), $e = ce, Ke = Fe.$as || x.$as || Fe.as || x.as || Le, ie = Un(Ke), M = Fe !== x ? lr({}, x, {}, Fe) : x, C = {};
      for (var F in M) F[0] !== "$" && F !== "as" && (F === "forwardedAs" ? C.as = M[F] : (pe ? pe(F, Qo, Ke) : !ie || Qo(F)) && (C[F] = M[F]));
      return x.style && Fe.style !== x.style && (C.style = lr({}, x.style, {}, Fe.style)), C.className = Array.prototype.concat(ue, Ne, Ae !== Ne ? Ae : null, x.className, Fe.className).filter(Boolean).join(" "), C.ref = $e, Ni(Ke, C);
    }(R, q, X, D);
  };
  return H.displayName = I, (R = dt.forwardRef(H)).attrs = U, R.componentStyle = k, R.displayName = I, R.shouldForwardProp = J, R.foldedComponentIds = o ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Gn, R.styledComponentId = E, R.target = o ? e.target : e, R.withComponent = function(q) {
    var X = t.componentId, W = function(ce, _e) {
      if (ce == null) return {};
      var Ie, De, Ve = {}, ue = Object.keys(ce);
      for (De = 0; De < ue.length; De++) Ie = ue[De], _e.indexOf(Ie) >= 0 || (Ve[Ie] = ce[Ie]);
      return Ve;
    }(t, ["componentId"]), x = X && X + "-" + (Un(q) ? q : Ea(ni(q)));
    return hs(q, lr({}, W, { attrs: U, componentId: x }), r);
  }, Object.defineProperty(R, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(q) {
    this._foldedDefaultProps = o ? fs({}, e.defaultProps, q) : q;
  } }), Object.defineProperty(R, "toString", { value: function() {
    return "." + R.styledComponentId;
  } }), c && Tc(R, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), R;
}
var Gt = function(e) {
  return function t(r, o, c) {
    if (c === void 0 && (c = mr), !ns.isValidElementType(o)) return gn(1, String(o));
    var u = function() {
      return r(o, c, tu.apply(void 0, arguments));
    };
    return u.withConfig = function(y) {
      return t(r, o, lr({}, c, {}, y));
    }, u.attrs = function(y) {
      return t(r, o, lr({}, c, { attrs: Array.prototype.concat(c.attrs, y).filter(Boolean) }));
    }, u;
  }(hs, e);
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
function ta(e) {
  var t = Object.entries(e).filter(function(r) {
    var o = r[1];
    return o != null;
  }).map(function(r) {
    var o = r[0], c = r[1];
    return "".concat(encodeURIComponent(o), "=").concat(encodeURIComponent(String(c)));
  });
  return t.length > 0 ? "?".concat(t.join("&")) : "";
}
var lu = /* @__PURE__ */ function() {
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
}(), Er = function() {
  return Er = Object.assign || function(e) {
    for (var t, r = 1, o = arguments.length; r < o; r++) {
      t = arguments[r];
      for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c]);
    }
    return e;
  }, Er.apply(this, arguments);
}, cu = function(e, t, r, o) {
  function c(u) {
    return u instanceof r ? u : new r(function(y) {
      y(u);
    });
  }
  return new (r || (r = Promise))(function(u, y) {
    function S(I) {
      try {
        m(o.next(I));
      } catch (E) {
        y(E);
      }
    }
    function w(I) {
      try {
        m(o.throw(I));
      } catch (E) {
        y(E);
      }
    }
    function m(I) {
      I.done ? u(I.value) : c(I.value).then(S, w);
    }
    m((o = o.apply(e, [])).next());
  });
}, uu = function(e, t) {
  var r = { label: 0, sent: function() {
    if (u[0] & 1) throw u[1];
    return u[1];
  }, trys: [], ops: [] }, o, c, u, y;
  return y = { next: S(0), throw: S(1), return: S(2) }, typeof Symbol == "function" && (y[Symbol.iterator] = function() {
    return this;
  }), y;
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
}, ms = function(e, t) {
  var r = {};
  for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var c = 0, o = Object.getOwnPropertySymbols(e); c < o.length; c++)
      t.indexOf(o[c]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[c]) && (r[o[c]] = e[o[c]]);
  return r;
}, du = function(e) {
  return !!e && (typeof e == "object" || typeof e == "function") && typeof e.then == "function";
}, fu = function(e, t) {
  return {
    left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - e / 2,
    top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - t / 2
  };
}, pu = function(e, t) {
  return {
    top: (window.screen.height - t) / 2,
    left: (window.screen.width - e) / 2
  };
};
function hu(e, t, r) {
  var o = t.height, c = t.width, u = ms(t, ["height", "width"]), y = Er({ height: o, width: c, location: "no", toolbar: "no", status: "no", directories: "no", menubar: "no", scrollbars: "yes", resizable: "no", centerscreen: "yes", chrome: "yes" }, u), S = window.open(e, "", Object.keys(y).map(function(m) {
    return "".concat(m, "=").concat(y[m]);
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
var mu = (
  /** @class */
  function(e) {
    lu(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.openShareDialog = function(o) {
        var c = r.props, u = c.onShareWindowClose, y = c.windowHeight, S = y === void 0 ? 400 : y, w = c.windowPosition, m = w === void 0 ? "windowCenter" : w, I = c.windowWidth, E = I === void 0 ? 550 : I, U = Er({ height: S, width: E }, m === "windowCenter" ? fu(E, S) : pu(E, S));
        hu(o, U, u);
      }, r.handleClick = function(o) {
        return cu(r, void 0, void 0, function() {
          var c, u, y, S, w, m, I, E, U, J;
          return uu(this, function(R) {
            switch (R.label) {
              case 0:
                return c = this.props, u = c.beforeOnClick, y = c.disabled, S = c.networkLink, w = c.onClick, m = c.url, I = c.openShareDialogOnClick, E = c.opts, U = S(m, E), y ? [
                  2
                  /*return*/
                ] : (o.preventDefault(), u ? (J = u(), du(J) ? [4, J] : [3, 2]) : [3, 2]);
              case 1:
                R.sent(), R.label = 2;
              case 2:
                return I && this.openShareDialog(U), w && w(o, U), [
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
      var o = r.children, c = r.className, u = r.disabled, y = r.disabledStyle, S = r.forwardedRef;
      r.networkLink;
      var w = r.networkName;
      r.onShareWindowClose, r.openShareDialogOnClick, r.opts;
      var m = r.resetButtonStyle, I = r.style;
      r.url, r.windowHeight, r.windowPosition, r.windowWidth;
      var E = ms(r, ["beforeOnClick", "children", "className", "disabled", "disabledStyle", "forwardedRef", "networkLink", "networkName", "onShareWindowClose", "openShareDialogOnClick", "opts", "resetButtonStyle", "style", "url", "windowHeight", "windowPosition", "windowWidth"]), U = Lr("react-share__ShareButton", {
        "react-share__ShareButton--disabled": !!u,
        disabled: !!u
      }, c), J = Er(Er(m ? { backgroundColor: "transparent", border: "none", padding: 0, font: "inherit", color: "inherit", cursor: "pointer" } : {}, I), u && y);
      return dt.createElement("button", Er({}, E, { "aria-label": E["aria-label"] || w, className: U, onClick: this.handleClick, ref: S, style: J }), o);
    }, t.defaultProps = {
      disabledStyle: { opacity: 0.6 },
      openShareDialogOnClick: !0,
      resetButtonStyle: !0
    }, t;
  }(Ks)
), Xn = function() {
  return Xn = Object.assign || function(e) {
    for (var t, r = 1, o = arguments.length; r < o; r++) {
      t = arguments[r];
      for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && (e[c] = t[c]);
    }
    return e;
  }, Xn.apply(this, arguments);
};
function ra(e, t, r, o) {
  function c(u, y) {
    var S = r(u), w = Xn({}, u), m = Object.keys(S);
    return m.forEach(function(I) {
      delete w[I];
    }), dt.createElement(mu, Xn({}, o, w, { forwardedRef: y, networkName: e, networkLink: t, opts: r(u) }));
  }
  return c.displayName = "ShareButton-".concat(e), Ri(c);
}
function gu(e, t) {
  var r = t.subject, o = t.body, c = t.separator;
  return "mailto:" + ta({ subject: r, body: o ? o + c + e : e });
}
ra("email", gu, function(e) {
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
var yu = /* @__PURE__ */ function() {
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
}(), bu = (
  /** @class */
  function(e) {
    yu(t, e);
    function t(r) {
      var o = e.call(this, r) || this;
      return o.name = "AssertionError", o;
    }
    return t;
  }(Error)
);
function ln(e, t) {
  if (!e)
    throw new bu(t);
}
function vu(e, t) {
  var r = t.quote, o = t.hashtag;
  return ln(e, "facebook.url"), "https://www.facebook.com/sharer/sharer.php" + ta({
    u: e,
    quote: r,
    hashtag: o
  });
}
ra("facebook", vu, function(e) {
  return {
    quote: e.quote,
    hashtag: e.hashtag
  };
}, {
  windowWidth: 550,
  windowHeight: 400
});
function wu(e, t) {
  var r = t.title, o = t.summary, c = t.source;
  return ln(e, "linkedin.url"), "https://linkedin.com/shareArticle" + ta({ url: e, mini: "true", title: r, summary: o, source: c });
}
ra("linkedin", wu, function(e) {
  var t = e.title, r = e.summary, o = e.source;
  return { title: t, summary: r, source: o };
}, {
  windowWidth: 750,
  windowHeight: 600
});
function Su(e, t) {
  var r = t.title, o = t.via, c = t.hashtags, u = c === void 0 ? [] : c, y = t.related, S = y === void 0 ? [] : y;
  return ln(e, "twitter.url"), ln(Array.isArray(u), "twitter.hashtags is not an array"), ln(Array.isArray(S), "twitter.related is not an array"), "https://twitter.com/share" + ta({
    url: e,
    text: r,
    via: o,
    hashtags: u.length > 0 ? u.join(",") : void 0,
    related: S.length > 0 ? S.join(",") : void 0
  });
}
ra("twitter", Su, function(e) {
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
function za(e) {
  "@babel/helpers - typeof";
  return za = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, za(e);
}
var ku = (typeof window > "u" ? "undefined" : za(window)) === "object" && window.Element || function() {
};
function xu(e, t, r) {
  if (!(e[t] instanceof ku))
    return new Error("Invalid prop `" + t + "` supplied to `" + r + "`. Expected prop to be an instance of Element. Validation failed.");
}
i.oneOfType([i.string, i.func, xu, i.shape({
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
const _u = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, gs = ({
  label: e = "",
  cardTitle: t = "",
  gaData: r,
  ariaLabel: o,
  color: c = "gray",
  disabled: u,
  element: y = "button",
  innerRef: S,
  href: w,
  onClick: m,
  ...I
}) => {
  const E = Lr("btn", "btn-tag", {
    "btn-tag-alt-white": c === "white",
    "btn-tag-alt-gray": c === "gray",
    "btn-tag-alt-dark": c === "dark",
    disabled: u
  });
  let U = y;
  return w && y === "button" && (U = "a"), /* @__PURE__ */ G.jsx(
    mn,
    {
      gaData: {
        ..._u,
        section: t,
        // @deprecated - remove at some point
        ...r,
        text: e
      },
      children: /* @__PURE__ */ G.jsx(
        U,
        {
          type: U === "button" && m ? "button" : void 0,
          ...I,
          className: E,
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
gs.propTypes = {
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
  gaData: Ga,
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
const ys = ({
  src: e,
  alt: t,
  cssClasses: r,
  loading: o = "lazy",
  decoding: c = "async",
  dataTestId: u,
  fetchPriority: y = "auto",
  width: S,
  height: w,
  cardLink: m,
  title: I,
  caption: E,
  captionTitle: U,
  border: J,
  dropShadow: R
}) => {
  const k = {
    src: e,
    alt: t,
    loading: o,
    decoding: c,
    fetchpriority: y,
    // React attribute bug workaround
    ...(r == null ? void 0 : r.length) > 0 && { className: Fl(r) },
    ...u && { "data-testid": u },
    ...S && { width: S },
    ...w && { height: w }
  }, D = Lr("uds-img", {
    borderless: !J,
    "uds-img-drop-shadow": R
  }), H = (X) => {
    const W = X ? `${k.className} ${X}` : k.className;
    return m ? /* @__PURE__ */ G.jsxs("a", { href: m, children: [
      /* @__PURE__ */ G.jsx("img", { ...k, className: W }),
      /* @__PURE__ */ G.jsx("span", { className: "visually-hidden", children: I })
    ] }) : /* @__PURE__ */ G.jsx("img", { ...k, className: W });
  }, q = () => /* @__PURE__ */ G.jsx("div", { className: D, children: /* @__PURE__ */ G.jsxs("figure", { className: "figure uds-figure", children: [
    H(),
    E && /* @__PURE__ */ G.jsxs("figcaption", { className: "figure-caption uds-figure-caption", children: [
      U && /* @__PURE__ */ G.jsx("h3", { children: U }),
      /* @__PURE__ */ G.jsx(
        "span",
        {
          className: "uds-caption-text",
          dangerouslySetInnerHTML: Or(E)
        }
      )
    ] })
  ] }) });
  return /* @__PURE__ */ G.jsx(G.Fragment, { children: E ? q() : H(D) });
};
ys.propTypes = {
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
const Cu = Gt.div`
  &.cards-components a + &.cards-components a {
    margin-left: 5px;
  }
  .card-button {
    column-gap: 1rem;
  }
  .card-button .btn {
    margin: 0;
  }
`, Tu = (e) => /^[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e), Eu = (e) => !e.startsWith("https://") && !e.startsWith("http://") && Tu(e) ? `mailto:${e}` : e, Au = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, hr = ({
  type: e = "default",
  width: t = "100%",
  horizontal: r = !1,
  image: o,
  imageAltText: c,
  title: u,
  icon: y,
  body: S,
  eventFormat: w = "stack",
  eventLocation: m,
  eventTime: I,
  buttons: E,
  linkLabel: U,
  linkUrl: J,
  tags: R,
  showBorders: k = !0,
  cardLink: D
}) => /* @__PURE__ */ G.jsx(
  bs,
  {
    type: e,
    width: t,
    horizontal: r,
    image: o,
    imageAltText: c,
    title: u,
    icon: y,
    body: S,
    eventFormat: w,
    eventLocation: m,
    eventTime: I,
    buttons: E,
    linkLabel: U,
    linkUrl: J,
    tags: R,
    showBorders: k,
    cardLink: D
  }
);
hr.propTypes = {
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
const bs = ({
  type: e = "default",
  width: t = "100%",
  horizontal: r = !1,
  image: o = "",
  imageAltText: c = "",
  title: u,
  icon: y = void 0,
  body: S = "",
  eventFormat: w = "stack",
  eventLocation: m = "",
  eventTime: I = "",
  buttons: E = void 0,
  linkLabel: U = void 0,
  linkUrl: J = void 0,
  tags: R = void 0,
  showBorders: k = !0,
  cardLink: D
}) => {
  const H = Lr("card", "cards-components", {
    "card-degree": e === "degree",
    "card-event": e === "event",
    "card-story": e === "story",
    [`w-${t.replace("%", "")}`]: t !== "100%",
    "card-horizontal": r,
    borderless: !k
  });
  return /* @__PURE__ */ G.jsx(G.Fragment, { children: /* @__PURE__ */ G.jsxs(Cu, { className: H, "data-testid": "card-container", children: [
    !!o && /* @__PURE__ */ G.jsx(
      ys,
      {
        src: o,
        alt: c,
        dataTestId: "card-image",
        cssClasses: ["card-img-top"],
        cardLink: D,
        title: u
      }
    ),
    !o && y && /* @__PURE__ */ G.jsx(
      "i",
      {
        className: `${y == null ? void 0 : y[0]} fa-${y == null ? void 0 : y[1]} fa-2x card-icon-top`,
        "data-testid": "card-icon"
      }
    ),
    r ? /* @__PURE__ */ G.jsx("div", { className: "card-content-wrapper", children: /* @__PURE__ */ G.jsx(
      Ua,
      {
        type: e,
        body: S,
        eventFormat: w,
        eventLocation: m,
        eventTime: I,
        title: u,
        buttons: E,
        linkLabel: U,
        linkUrl: J,
        tags: R,
        cardLink: D
      }
    ) }) : /* @__PURE__ */ G.jsx(
      Ua,
      {
        type: e,
        body: S,
        eventFormat: w,
        eventLocation: m,
        eventTime: I,
        title: u,
        buttons: E,
        linkLabel: U,
        linkUrl: J,
        tags: R,
        cardLink: D
      }
    )
  ] }) });
};
bs.propTypes = {
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
  buttons: y = void 0,
  linkLabel: S = void 0,
  linkUrl: w = void 0,
  tags: m = void 0,
  cardLink: I
}) => /* @__PURE__ */ G.jsxs(G.Fragment, { children: [
  !!u && /* @__PURE__ */ G.jsx("div", { className: "card-header", "data-testid": "card-title", children: /* @__PURE__ */ G.jsx("h3", { className: "card-title", children: I ? /* @__PURE__ */ G.jsx("a", { href: I, children: u }) : u }) }),
  !!t && /* @__PURE__ */ G.jsx("div", { className: "card-body", "data-testid": "card-body", children: /* @__PURE__ */ G.jsx("div", { dangerouslySetInnerHTML: Or(t) }) }),
  e === "event" && (c || o) && /* @__PURE__ */ G.jsx(
    vs,
    {
      eventFormat: r,
      eventTime: c,
      eventLocation: o
    }
  ),
  y && /* @__PURE__ */ G.jsx("div", { className: "card-buttons", children: y.map((E) => /* @__PURE__ */ G.jsx(
    "div",
    {
      className: "card-button",
      "data-testid": "card-button",
      children: /* @__PURE__ */ G.jsx(
        ts,
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
  w && S && /* @__PURE__ */ G.jsx("div", { className: "card-link", "data-testid": "card-link", children: /* @__PURE__ */ G.jsx(
    mn,
    {
      gaData: {
        ...Au,
        section: u,
        text: S
      },
      children: /* @__PURE__ */ G.jsx("a", { href: Eu(w), children: S })
    }
  ) }),
  m && /* @__PURE__ */ G.jsx("div", { className: "card-tags", "data-testid": "card-tags", children: m.map((E) => (
    // @ts-ignore
    /* @__PURE__ */ G.jsx(
      gs,
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
const vs = ({
  eventFormat: e = "stack",
  eventLocation: t = "",
  eventTime: r = ""
}) => e === "inline" ? /* @__PURE__ */ G.jsxs("div", { className: "card-event-details", children: [
  r && /* @__PURE__ */ G.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ G.jsx("div", { children: /* @__PURE__ */ G.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ G.jsx("div", { dangerouslySetInnerHTML: Or(r) })
  ] }),
  t && /* @__PURE__ */ G.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ G.jsx("div", { children: /* @__PURE__ */ G.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ G.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Or(t)
      }
    )
  ] })
] }) : /* @__PURE__ */ G.jsxs(G.Fragment, { children: [
  r && /* @__PURE__ */ G.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ G.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ G.jsx("div", { children: /* @__PURE__ */ G.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ G.jsx("div", { dangerouslySetInnerHTML: Or(r) })
  ] }) }),
  t && /* @__PURE__ */ G.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ G.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ G.jsx("div", { children: /* @__PURE__ */ G.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ G.jsx("span", { children: /* @__PURE__ */ G.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Or(t)
      }
    ) })
  ] }) })
] });
vs.propTypes = {
  eventFormat: i.oneOf(["stack", "inline"]),
  eventLocation: i.string,
  eventTime: i.string
};
const Ou = Gt.div`
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
`, Ru = () => /* @__PURE__ */ G.jsxs(Ou, { children: [
  /* @__PURE__ */ G.jsx("div", {}),
  /* @__PURE__ */ G.jsx("div", {}),
  /* @__PURE__ */ G.jsx("div", {}),
  /* @__PURE__ */ G.jsx("div", {})
] }), Nu = Gt.section``, Za = el(null), ws = ({
  defaultProps: e,
  dataSource: t,
  noFeedText: r,
  renderHeader: o,
  renderBody: c,
  dataTransformer: u,
  dataFilter: y,
  maxItems: S
}) => {
  const [{ data: w, loading: m, error: I }, E] = Dl(), [U, J] = on([]), R = { ...e.dataSource, ...t };
  return un(() => {
    E(R == null ? void 0 : R.url);
  }, [R == null ? void 0 : R.url]), un(() => {
    const k = w == null ? void 0 : w.nodes.map(u), D = k == null ? void 0 : k.filter(
      (H) => y(H, t == null ? void 0 : t.filters)
    );
    J(S ? D == null ? void 0 : D.slice(0, S) : D);
  }, [w]), // Init the context to be used on its childrens
  /* @__PURE__ */ G.jsx(Za.Provider, { value: { feeds: U }, children: /* @__PURE__ */ G.jsxs(Nu, { children: [
    o,
    I ? /* @__PURE__ */ G.jsx("span", { children: "Error, try again!" }) : /* @__PURE__ */ G.jsxs(G.Fragment, { children: [
      m && !(U != null && U.length) && /* @__PURE__ */ G.jsx("div", { className: "text-center mt-4", children: /* @__PURE__ */ G.jsx(Ru, {}) }),
      U != null && U.length ? c : !m && /* @__PURE__ */ G.jsx("p", { className: "text-center", children: r })
    ] })
  ] }) });
};
ws.propTypes = {
  renderHeader: i.element,
  renderBody: i.element,
  maxItems: i.number,
  dataTransformer: i.func,
  dataFilter: i.func,
  noFeedText: i.string
};
const Ka = i.shape({
  color: i.oneOf(["white", "dark"]),
  text: i.string
}), eo = i.shape({
  color: i.oneOf(["gold", "maroon", "gray", "dark"]),
  text: i.string
});
i.shape({
  color: i.oneOf(["gold", "maroon", "gray", "dark"]),
  text: i.string,
  size: i.string
});
const Ss = i.shape({
  url: i.string,
  filters: i.string
}), Lu = i.shape({
  header: Ka,
  ctaButton: eo,
  dataSource: Ss,
  maxItems: i.number
}), Iu = Gt.div`
  @media screen and (min-width: 768px) {
    & {
      display: inline-flex;
      justify-content: flex-end;
    }
  }
`, ks = ({
  defaultProps: e,
  header: t,
  ctaButton: r
}) => {
  const o = { ...e.header, ...t }, c = { ...e.ctaButton, ...r };
  return /* @__PURE__ */ G.jsxs(
    "div",
    {
      className: "row justify-content-between align-items-center pb-6",
      "data-testid": "feed-header",
      children: [
        /* @__PURE__ */ G.jsx("div", { className: "col-sm-12 col-md-9", children: /* @__PURE__ */ G.jsx("h2", { className: `text-${o.color}`, children: o.text }) }),
        /* @__PURE__ */ G.jsx(Iu, { className: "col-sm-12 col-md-3", children: /* @__PURE__ */ G.jsx(
          mn,
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
            children: /* @__PURE__ */ G.jsx("a", { className: `btn btn-${c.color}`, href: c.url, children: c.text })
          }
        ) })
      ]
    }
  );
};
ks.propTypes = {
  defaultProps: Lu,
  header: Ka,
  ctaButton: eo
};
const xs = ({ children: e }) => /* @__PURE__ */ G.jsx("div", { className: "row", "data-testid": "feed-body", children: /* @__PURE__ */ G.jsx("div", { className: "col", children: e }) });
xs.propTypes = {
  children: i.element
};
Gt.img`
  width: 100%;
`;
i.oneOf(["heading-hero", "story-hero"]), i.arrayOf(Sa), i.string;
i.bool, i.bool, i.bool, i.bool, i.string, i.func, i.node, i.bool, i.string, i.bool;
i.oneOf(["default", "bordered"]).isRequired, i.oneOf(["white", "gray1", "gray2", "gray7"]).isRequired, i.number, i.number, i.func.isRequired;
i.oneOf(["small", "large"]), i.string.isRequired, i.string.isRequired, i.string;
i.oneOf(["small", "large"]).isRequired, i.string.isRequired, i.string.isRequired, i.string.isRequired, i.string.isRequired, i.string, i.string;
Gt.div`
  button {
    padding: 16px 0;
    border: none;
    outline: none;
  }
`;
i.object, i.bool, i.bool, i.func.isRequired;
const Pu = Ri(function(e, t) {
  const {
    id: r,
    selected: o,
    title: c,
    selectTab: u,
    leftKeyPressed: y,
    rightKeyPressed: S,
    icon: w,
    gaData: m
  } = e, { isReact: I, isBootstrap: E } = es(), U = tl(null);
  rl(t, () => ({
    focus() {
      U.current.focus();
    },
    scrollIntoView() {
      var R, k, D, H, q, X, W;
      const x = ((R = U.current) == null ? void 0 : R.offsetWidth) / 2 + U.current.offsetLeft, ce = ((D = (k = U.current) == null ? void 0 : k.offsetParent) == null ? void 0 : D.scrollLeft) + ((q = (H = U.current) == null ? void 0 : H.offsetParent) == null ? void 0 : q.offsetWidth) / 2;
      (W = (X = U.current) == null ? void 0 : X.offsetParent) == null || W.scrollBy({
        left: x - ce
      });
    }
  }), []);
  const J = (R) => {
    R.keyCode === 37 ? (R.preventDefault(), y()) : R.keyCode === 39 && (R.preventDefault(), S());
  };
  return /* @__PURE__ */ G.jsx(mn, { gaData: { ...m, text: c }, children: /* @__PURE__ */ G.jsxs(
    "a",
    {
      ref: U,
      className: `nav-item nav-link ${o ? "active" : ""}`,
      id: r,
      href: `#nav-${r}`,
      role: "tab",
      "aria-controls": `nav-${r}`,
      "aria-selected": o,
      "data-bs-toggle": E && "tab",
      onClick: I && ((R) => u(R, r, c)),
      onKeyDown: I && J,
      tabIndex: o ? "" : "-1",
      children: [
        c,
        " ",
        w && /* @__PURE__ */ G.jsx("i", { className: `${w == null ? void 0 : w[0]} fa-${w == null ? void 0 : w[1]} me-1` })
      ]
    }
  ) });
});
Pu.propTypes = {
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
var Du = !1;
try {
  var ci = Object.defineProperty({}, "passive", {
    get: function() {
      Du = !0;
    }
  });
  window.addEventListener("testPassive", null, ci), window.removeEventListener("testPassive", null, ci);
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
    buttons: hr.propTypes.buttons,
    linkLabel: i.string,
    linkUrl: i.string,
    tags: hr.propTypes.tags
  })
).isRequired, hr.propTypes.type, hr.propTypes.eventFormat, hr.propTypes.horizontal, i.string, i.string, i.bool;
i.number.isRequired, i.arrayOf(i.object).isRequired, i.string, i.string, i.bool;
const Jn = {
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
i.string, Jn.imageItems, Jn.hasContent;
Jn.imageItems.isRequired, Jn.hasContent, i.string, i.string, i.bool;
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
var ui = Li;
ui.createRoot, ui.hydrateRoot;
(function() {
  var e = `@charset "UTF-8";.glide{position:relative;width:100%;box-sizing:border-box}.glide *{box-sizing:inherit}.glide__track{overflow:hidden}.glide__slides{position:relative;width:100%;list-style:none;backface-visibility:hidden;transform-style:preserve-3d;touch-action:pan-Y;overflow:hidden;margin:0;padding:0;white-space:nowrap;display:flex;flex-wrap:nowrap;will-change:transform}.glide__slides--dragging{-webkit-user-select:none;user-select:none}.glide__slide{width:100%;height:100%;flex-shrink:0;white-space:normal;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent}.glide__slide a{-webkit-user-select:none;user-select:none;-webkit-user-drag:none;-moz-user-select:none;-ms-user-select:none}.glide__arrows,.glide__bullets{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}.glide--rtl{direction:rtl}@media only screen and (min-width: 1260px){.container .aligned-carousel{margin-left:-124px!important}}.glide{display:flex;flex-direction:column;gap:32px;position:relative}[data-image-auto-size=true] .glide__slides .glide__slide{height:auto;position:relative;display:inline-flex;justify-content:center}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img{display:flex;width:100%;max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img{flex-grow:1;object-fit:cover}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img img.uds-img{max-width:100%}[data-image-auto-size=true] .glide__slides .glide__slide>div.uds-img figure.uds-figure{display:flex;justify-content:space-between;flex-direction:column}.glide .glide__track{position:relative}.glide .glide__track .glide__slides{margin-bottom:0;touch-action:auto}.glide .glide__track .glide__slides .glide__slide .card{width:100%}@media only screen and (min-width: 576px){.glide[data-has-shadow=true] .glide__track.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide[data-has-shadow=true] .glide__track.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}}.glide__arrows{z-index:2;align-self:center}.glide__arrows .glide__arrow{color:#191919;width:4rem;height:4rem;margin:0 .5rem;background-color:#e8e8e8;border:1px solid #d0d0d0;border-radius:50%;font-size:1.3rem;text-shadow:0 .25em .5em rgba(0,0,0,.1);opacity:1;cursor:pointer;transition:opacity .15s ease,border .3s ease-in-out;line-height:1}.glide__arrows .glide__arrow.glide__arrow--disabled{color:#e8e8e8;background-color:#fafafa;border:1px solid #e8e8e8;opacity:1}.glide__arrows .glide__arrow:focus{outline:none}.glide__arrows .glide__arrow:hover{border-color:#fff}.glide__arrows .glide__arrow--left{left:2em}.glide__arrows .glide__arrow--right{right:2em}.glide__arrows .glide__arrow--disabled{opacity:.33}.glide__bullets{z-index:2;list-style:none;max-width:100%;display:flex;justify-content:center}.glide__bullet{transition:all .3s ease-in-out;background-color:#d0d0d0;width:1rem;height:1rem;padding:0;border-radius:50%;border:2px solid transparent;cursor:pointer;line-height:0;margin:.375rem}.glide__bullet:focus{outline:none}.glide__bullet:hover,.glide__bullet:focus{border:1px solid #d0d0d0;background-color:#191919}.glide__bullet--active{background-color:#191919}.glide.aligned-carousel{width:1448px;margin:auto}.glide.image-gallery{gap:0;overflow:hidden}.glide.image-gallery .glide__track{border:1px solid #d0d0d0}.glide.image-gallery .glide__track:after{content:none}.glide.image-gallery .glide__track .glide__slides{margin-bottom:0;height:100%}.glide.image-gallery .glide__track .glide__slides li.glide__slide{display:list-item}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img{height:100%}.glide.image-gallery .glide__track .glide__slides .glide__slide>div.uds-img img{object-fit:cover;border:none}.glide.image-gallery .image-gallery-action-area{border:1px solid #d0d0d0;border-top:0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .image-navigator{border-bottom:1px solid #d0d0d0}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text{padding:1rem 0;display:inline-block}.glide.image-gallery .image-gallery-action-area[data-has-content=true] .uds-caption-text>div{height:auto!important}.glide.image-gallery figcaption{padding:0 .75rem;font-size:.75rem}.glide.image-gallery .image-navigator{position:relative}.glide.image-gallery .image-navigator .image-navigator-images{min-height:64px;padding-top:1rem;padding-bottom:1rem;width:100%;margin:auto;overflow:hidden}.glide.image-gallery .image-navigator .image-navigator-images.slider-start:after{background:linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-mid:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px),linear-gradient(to left,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images.slider-end:after{background:linear-gradient(to right,#19191933,48px,#fff0 96px);content:" ";height:100%;position:absolute;pointer-events:none;width:100%;top:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider{position:relative;left:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets{position:relative}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container{position:relative;margin:0 .5rem;height:48px;border:0;padding:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:first-child{margin-left:16rem}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container .bullet-image{flex-basis:auto;width:88px;height:100%;border-radius:0;border:0;z-index:2;object-fit:cover;margin:0}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .bullet-image-container:focus{box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery .image-navigator .image-navigator-images .navigation-slider .glide__bullets .glide__bullet--active{background-color:transparent;border:5px solid #ffc627}.glide.image-gallery .image-navigator .glide__arrows{width:100%;display:flex;justify-content:space-between;align-items:center}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow{width:2.5rem;height:2.5rem;display:flex;align-items:center;justify-content:center;z-index:3;position:absolute;background-color:#fff}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow:hover{border-color:#d0d0d0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow .arrow-icon{font-size:1rem}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--prev{left:0}.glide.image-gallery .image-navigator .glide__arrows .glide__arrow.glide__arrow--next{right:0}@media only screen and (max-width: 576px){.glide{gap:21px}.glide:not(.glide.image-gallery) .glide__bullets{display:none}.glide.image-gallery{width:100%;margin:auto!important}.glide.image-gallery .image-navigator .image-navigator-images .glide__arrows .glide__arrow{display:none}}@media only screen and (max-width: 1260px){.glide.aligned-carousel{width:100%}}.glide--swipeable{cursor:grab;cursor:-moz-grab;cursor:-webkit-grab}.glide--dragging{cursor:grabbing;cursor:-moz-grabbing;cursor:-webkit-grabbing}.glide[data-remove-side-background=true]:after,.glide[data-remove-side-background=true]:before{content:none}.glide button:focus,.glide a:focus,.glide input:focus,.glide textarea:focus,.glide select:focus{outline:none!important;box-shadow:0 0 0 2px #fff,0 0 0 4px #191919!important}.glide.image-gallery,.glide.image-carousel{margin:auto}.glide.image-gallery[role=figure],.glide.image-gallery figure.uds-figure,.glide.image-carousel[role=figure],.glide.image-carousel figure.uds-figure{margin:0}.glide.image-gallery[role=figure] figcaption *,.glide.image-gallery[role=figure] .uds-caption-text,.glide.image-gallery figure.uds-figure figcaption *,.glide.image-gallery figure.uds-figure .uds-caption-text,.glide.image-carousel[role=figure] figcaption *,.glide.image-carousel[role=figure] .uds-caption-text,.glide.image-carousel figure.uds-figure figcaption *,.glide.image-carousel figure.uds-figure .uds-caption-text{color:#191919;max-width:100%}
`, t = document.createElement("style");
  t.type = "text/css", t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e)), document.head.appendChild(t);
})();
const di = {
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
}, fi = [
  "eventTopics",
  "eventUnits",
  "interests",
  "audiences",
  "eventTypes",
  "collegeUnit"
], pi = (e) => e.toLowerCase().split(" ").join("_"), Fu = (e, t) => {
  if (!t) return !0;
  const r = t.split(",");
  for (let o = 0; o < r.length; o += 1) {
    const c = pi(r[o]);
    for (let u = 0; u < fi.length; u += 1) {
      const y = fi[u];
      if (pi(e[y] || "").includes(c)) return !0;
    }
  }
  return !1;
}, Mu = (e) => ({
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
}), to = ({ children: e, header: t, ctaButton: r, dataSource: o, maxItems: c }) => (
  // Calling the unity-react-core component to fetch the data, transform it and filter it
  // We provide in the renderBody the view specified before in the parent component, recieved as "children" in this component.
  // We provide in the renderHeader the unity-react-core header, if it is desired to be shown
  // We provide the maxItems prop to limit the items rendered
  // We provide the dataSource to read the url to fetch the data
  // We provide the defaultProps to use some needed default values in case they are not provided
  /* @__PURE__ */ ut.jsx(
    ws,
    {
      renderHeader: t && r ? /* @__PURE__ */ ut.jsx(
        ks,
        {
          header: t,
          ctaButton: r,
          defaultProps: di
        }
      ) : null,
      renderBody: /* @__PURE__ */ ut.jsx(xs, { children: e }),
      dataTransformer: Mu,
      dataFilter: Fu,
      dataSource: o,
      defaultProps: di,
      noFeedText: "No events to show.",
      maxItems: c
    }
  )
);
to.propTypes = {
  header: Ka,
  ctaButton: eo,
  dataSource: Ss,
  maxItems: He.number,
  children: He.element
};
const ju = He.shape({
  color: He.oneOf(["white", "dark"]),
  text: He.string
}), zu = He.shape({
  color: He.oneOf(["gold", "maroon", "gray", "dark"]),
  text: He.string,
  url: He.string
}), Uu = He.shape({
  url: He.string.isRequired,
  filters: He.string
}).isRequired, _s = {
  header: ju,
  ctaButton: zu,
  dataSource: Uu,
  maxItems: He.number
}, $u = (e) => e.toLocaleDateString("en-US", {
  timeZone: "UTC",
  weekday: "long",
  month: "long",
  day: "numeric"
}), hi = (e) => e.toLocaleString("en-US", {
  timeZone: "UTC"
}), $a = (e) => {
  let t = e.split("T");
  return t = t.length > 1 ? t.join("T") : `${t[0].split(":")[0]}T00:00:00Z`, t;
}, mi = (e) => {
  let t = e.getHours(), r = e.getMinutes();
  const o = t >= 12 ? "p.m." : "a.m.";
  return t %= 12, t = t || 12, r = r < 10 ? `0${r}` : r, `${t}:${r} ${o}`;
}, Cs = (e, t) => {
  const r = $a(e);
  let o = hi(new Date(r));
  if (o = mi(new Date(o)), !t || e === t)
    return o;
  const c = $a(t);
  let u = hi(new Date(c));
  return u = mi(new Date(u)), `${o} to ${u}`;
}, Qn = (e, t) => {
  const r = $a(e);
  return {
    ISO: r.split("T")[0],
    COMPLETE: $u(new Date(r))
  }[t];
};
var Ts = { exports: {} }, We = {};
var gi;
function Bu() {
  if (gi) return We;
  gi = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), u = Symbol.for("react.consumer"), y = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), I = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), U = Symbol.for("react.offscreen"), J = Symbol.for("react.client.reference");
  function R(k) {
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
                case y:
                case S:
                case E:
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
  return We.ContextConsumer = u, We.ContextProvider = y, We.Element = e, We.ForwardRef = S, We.Fragment = r, We.Lazy = E, We.Memo = I, We.Portal = t, We.Profiler = c, We.StrictMode = o, We.Suspense = w, We.SuspenseList = m, We.isContextConsumer = function(k) {
    return R(k) === u;
  }, We.isContextProvider = function(k) {
    return R(k) === y;
  }, We.isElement = function(k) {
    return typeof k == "object" && k !== null && k.$$typeof === e;
  }, We.isForwardRef = function(k) {
    return R(k) === S;
  }, We.isFragment = function(k) {
    return R(k) === r;
  }, We.isLazy = function(k) {
    return R(k) === E;
  }, We.isMemo = function(k) {
    return R(k) === I;
  }, We.isPortal = function(k) {
    return R(k) === t;
  }, We.isProfiler = function(k) {
    return R(k) === c;
  }, We.isStrictMode = function(k) {
    return R(k) === o;
  }, We.isSuspense = function(k) {
    return R(k) === w;
  }, We.isSuspenseList = function(k) {
    return R(k) === m;
  }, We.isValidElementType = function(k) {
    return typeof k == "string" || typeof k == "function" || k === r || k === c || k === o || k === w || k === m || k === U || typeof k == "object" && k !== null && (k.$$typeof === E || k.$$typeof === I || k.$$typeof === y || k.$$typeof === u || k.$$typeof === S || k.$$typeof === J || k.getModuleId !== void 0);
  }, We.typeOf = R, We;
}
Ts.exports = Bu();
var Es = Ts.exports;
function Wu(e) {
  function t(M, C, F, P, p) {
    for (var re = 0, T = 0, ne = 0, ee = 0, te, B, oe = 0, se = 0, K, he = K = te = 0, Z = 0, le = 0, Ue = 0, me = 0, it = F.length, Ge = it - 1, ge, $ = "", ae = "", Ye = "", lt = "", Me; Z < it; ) {
      if (B = F.charCodeAt(Z), Z === Ge && T + ee + ne + re !== 0 && (T !== 0 && (B = T === 47 ? 10 : 47), ee = ne = re = 0, it++, Ge++), T + ee + ne + re === 0) {
        if (Z === Ge && (0 < le && ($ = $.replace(U, "")), 0 < $.trim().length)) {
          switch (B) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              $ += F.charAt(Z);
          }
          B = 59;
        }
        switch (B) {
          case 123:
            for ($ = $.trim(), te = $.charCodeAt(0), K = 1, me = ++Z; Z < it; ) {
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
            switch (K = F.substring(me, Z), te === 0 && (te = ($ = $.replace(E, "").trim()).charCodeAt(0)), te) {
              case 64:
                switch (0 < le && ($ = $.replace(U, "")), B = $.charCodeAt(1), B) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    le = C;
                    break;
                  default:
                    le = st;
                }
                if (K = t(C, le, K, B, p + 1), me = K.length, 0 < Ae && (le = r(st, $, Ue), Me = S(3, K, le, C, Ne, pe, me, B, p, P), $ = le.join(""), Me !== void 0 && (me = (K = Me.trim()).length) === 0 && (B = 0, K = "")), 0 < me) switch (B) {
                  case 115:
                    $ = $.replace(ce, y);
                  case 100:
                  case 109:
                  case 45:
                    K = $ + "{" + K + "}";
                    break;
                  case 107:
                    $ = $.replace(q, "$1 $2"), K = $ + "{" + K + "}", K = Ee === 1 || Ee === 2 && u("@" + K, 3) ? "@-webkit-" + K + "@" + K : "@" + K;
                    break;
                  default:
                    K = $ + K, P === 112 && (K = (ae += K, ""));
                }
                else K = "";
                break;
              default:
                K = t(C, r(C, $, Ue), K, P, p + 1);
            }
            Ye += K, K = Ue = le = he = te = 0, $ = "", B = F.charCodeAt(++Z);
            break;
          case 125:
          case 59:
            if ($ = (0 < le ? $.replace(U, "") : $).trim(), 1 < (me = $.length)) switch (he === 0 && (te = $.charCodeAt(0), te === 45 || 96 < te && 123 > te) && (me = ($ = $.replace(" ", ":")).length), 0 < Ae && (Me = S(1, $, C, M, Ne, pe, ae.length, P, p, P)) !== void 0 && (me = ($ = Me.trim()).length) === 0 && ($ = "\0\0"), te = $.charCodeAt(0), B = $.charCodeAt(1), te) {
              case 0:
                break;
              case 64:
                if (B === 105 || B === 99) {
                  lt += $ + F.charAt(Z);
                  break;
                }
              default:
                $.charCodeAt(me - 1) !== 58 && (ae += c($, te, B, $.charCodeAt(2)));
            }
            Ue = le = he = te = 0, $ = "", B = F.charCodeAt(++Z);
        }
      }
      switch (B) {
        case 13:
        case 10:
          T === 47 ? T = 0 : 1 + te === 0 && P !== 107 && 0 < $.length && (le = 1, $ += "\0"), 0 < Ae * Ke && S(0, $, C, M, Ne, pe, ae.length, P, p, P), pe = 1, Ne++;
          break;
        case 59:
        case 125:
          if (T + ee + ne + re === 0) {
            pe++;
            break;
          }
        default:
          switch (pe++, ge = F.charAt(Z), B) {
            case 9:
            case 32:
              if (ee + re + T === 0) switch (oe) {
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
              ee + T + re === 0 && (le = Ue = 1, ge = "\f" + ge);
              break;
            case 108:
              if (ee + T + re + Le === 0 && 0 < he) switch (Z - he) {
                case 2:
                  oe === 112 && F.charCodeAt(Z - 3) === 58 && (Le = oe);
                case 8:
                  se === 111 && (Le = se);
              }
              break;
            case 58:
              ee + T + re === 0 && (he = Z);
              break;
            case 44:
              T + ne + ee + re === 0 && (le = 1, ge += "\r");
              break;
            case 34:
            case 39:
              T === 0 && (ee = ee === B ? 0 : ee === 0 ? B : ee);
              break;
            case 91:
              ee + T + ne === 0 && re++;
              break;
            case 93:
              ee + T + ne === 0 && re--;
              break;
            case 41:
              ee + T + re === 0 && ne--;
              break;
            case 40:
              if (ee + T + re === 0) {
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
              T + ne + ee + re + he + K === 0 && (K = 1);
              break;
            case 42:
            case 47:
              if (!(0 < ee + re + ne)) switch (T) {
                case 0:
                  switch (2 * B + 3 * F.charCodeAt(Z + 1)) {
                    case 235:
                      T = 47;
                      break;
                    case 220:
                      me = Z, T = 42;
                  }
                  break;
                case 42:
                  B === 47 && oe === 42 && me + 2 !== Z && (F.charCodeAt(me + 2) === 33 && (ae += F.substring(me, Z + 1)), ge = "", T = 0);
              }
          }
          T === 0 && ($ += ge);
      }
      se = oe, oe = B, Z++;
    }
    if (me = ae.length, 0 < me) {
      if (le = C, 0 < Ae && (Me = S(2, ae, le, M, Ne, pe, me, P, p, P), Me !== void 0 && (ae = Me).length === 0)) return lt + ae + Ye;
      if (ae = le.join(",") + "{" + ae + "}", Ee * Le !== 0) {
        switch (Ee !== 2 || u(ae, 2) || (Le = 0), Le) {
          case 111:
            ae = ae.replace(W, ":-moz-$1") + ae;
            break;
          case 112:
            ae = ae.replace(X, "::-webkit-input-$1") + ae.replace(X, "::-moz-$1") + ae.replace(X, ":-ms-input-$1") + ae;
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
        var T = 0;
        for (M = re === 0 ? "" : M[0] + " "; T < p; ++T)
          C[T] = o(M, C[T], F).trim();
        break;
      default:
        var ne = T = 0;
        for (C = []; T < p; ++T)
          for (var ee = 0; ee < re; ++ee)
            C[ne++] = o(M[ee] + " ", P[T], F).trim();
    }
    return C;
  }
  function o(M, C, F) {
    var P = C.charCodeAt(0);
    switch (33 > P && (P = (C = C.trim()).charCodeAt(0)), P) {
      case 38:
        return C.replace(H, "$1" + M.trim());
      case 58:
        return M.trim() + C.replace(H, "$1" + M.trim());
      default:
        if (0 < 1 * F && 0 < C.indexOf("\f")) return C.replace(H, (M.charCodeAt(0) === 58 ? "" : "$1") + M.trim());
    }
    return M + C;
  }
  function c(M, C, F, P) {
    var p = M + ";", re = 2 * C + 3 * F + 4 * P;
    if (re === 944) {
      M = p.indexOf(":", 9) + 1;
      var T = p.substring(M, p.length - 1).trim();
      return T = p.substring(0, M).trim() + T + ";", Ee === 1 || Ee === 2 && u(T, 1) ? "-webkit-" + T + T : T;
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
        return T = p.substring(p.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + T + "-webkit-" + p + "-ms-flex-pack" + T + p;
      case 1005:
        return R.test(p) ? p.replace(J, ":-webkit-") + p.replace(J, ":-moz-") + p : p;
      case 1e3:
        switch (T = p.substring(13).trim(), C = T.indexOf("-") + 1, T.charCodeAt(0) + T.charCodeAt(C)) {
          case 226:
            T = p.replace(x, "tb");
            break;
          case 232:
            T = p.replace(x, "tb-rl");
            break;
          case 220:
            T = p.replace(x, "lr");
            break;
          default:
            return p;
        }
        return "-webkit-" + p + "-ms-" + T + p;
      case 1017:
        if (p.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (C = (p = M).length - 10, T = (p.charCodeAt(C) === 33 ? p.substring(0, C) : p).substring(M.indexOf(":", 7) + 1).trim(), re = T.charCodeAt(0) + (T.charCodeAt(7) | 0)) {
          case 203:
            if (111 > T.charCodeAt(8)) break;
          case 115:
            p = p.replace(T, "-webkit-" + T) + ";" + p;
            break;
          case 207:
          case 102:
            p = p.replace(T, "-webkit-" + (102 < re ? "inline-" : "") + "box") + ";" + p.replace(T, "-webkit-" + T) + ";" + p.replace(T, "-ms-" + T + "box") + ";" + p;
        }
        return p + ";";
      case 938:
        if (p.charCodeAt(5) === 45) switch (p.charCodeAt(6)) {
          case 105:
            return T = p.replace("-items", ""), "-webkit-" + p + "-webkit-box-" + T + "-ms-flex-" + T + p;
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
        if (Ve.test(M) === !0) return (T = M.substring(M.indexOf(":") + 1)).charCodeAt(0) === 115 ? c(M.replace("stretch", "fill-available"), C, F, P).replace(":fill-available", ":stretch") : p.replace(T, "-webkit-" + T) + p.replace(T, "-moz-" + T.replace("fill-", "")) + p;
        break;
      case 962:
        if (p = "-webkit-" + p + (p.charCodeAt(5) === 102 ? "-ms-" + p : "") + p, F + P === 211 && p.charCodeAt(13) === 105 && 0 < p.indexOf("transform", 10)) return p.substring(0, p.indexOf(";", 27) + 1).replace(k, "$1-webkit-$2") + p;
    }
    return p;
  }
  function u(M, C) {
    var F = M.indexOf(C === 1 ? ":" : "{"), P = M.substring(0, C !== 3 ? F : 10);
    return F = M.substring(F + 1, M.length - 1), $e(C !== 2 ? P : P.replace(De, "$1"), F, C);
  }
  function y(M, C) {
    var F = c(C, C.charCodeAt(0), C.charCodeAt(1), C.charCodeAt(2));
    return F !== C + ";" ? F.replace(_e, " or ($1)").substring(4) : "(" + C + ")";
  }
  function S(M, C, F, P, p, re, T, ne, ee, te) {
    for (var B = 0, oe = C, se; B < Ae; ++B)
      switch (se = Fe[B].call(I, M, oe, F, P, p, re, T, ne, ee, te)) {
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
    return M = M.prefix, M !== void 0 && ($e = null, M ? typeof M != "function" ? Ee = 1 : (Ee = 2, $e = M) : Ee = 0), m;
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
  var E = /^\0+/g, U = /[\0\r\f]/g, J = /: */g, R = /zoo|gra/, k = /([,: ])(transform)/g, D = /,\r+?/g, H = /([\t\r\n ])*\f?&/g, q = /@(k\w+)\s*(\S*)\s*/, X = /::(place)/g, W = /:(read-only)/g, x = /[svh]\w+-[tblr]{2}/, ce = /\(\s*(.*)\s*\)/g, _e = /([\s\S]*?);/g, Ie = /-self|flex-/g, De = /[^]*?(:[rp][el]a[\w-]+)[^]*/, Ve = /stretch|:\s*\w+\-(?:conte|avail)/, ue = /([^-])(image-set\()/, pe = 1, Ne = 1, Le = 0, Ee = 1, st = [], Fe = [], Ae = 0, $e = null, Ke = 0, ie = "";
  return I.use = w, I.set = m, e !== void 0 && m(e), I;
}
var Hu = {
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
function Vu(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var qu = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, yi = /* @__PURE__ */ Vu(
  function(e) {
    return qu.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), As = { exports: {} }, ze = {};
var bi;
function Gu() {
  if (bi) return ze;
  bi = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, c = e ? Symbol.for("react.strict_mode") : 60108, u = e ? Symbol.for("react.profiler") : 60114, y = e ? Symbol.for("react.provider") : 60109, S = e ? Symbol.for("react.context") : 60110, w = e ? Symbol.for("react.async_mode") : 60111, m = e ? Symbol.for("react.concurrent_mode") : 60111, I = e ? Symbol.for("react.forward_ref") : 60112, E = e ? Symbol.for("react.suspense") : 60113, U = e ? Symbol.for("react.suspense_list") : 60120, J = e ? Symbol.for("react.memo") : 60115, R = e ? Symbol.for("react.lazy") : 60116, k = e ? Symbol.for("react.block") : 60121, D = e ? Symbol.for("react.fundamental") : 60117, H = e ? Symbol.for("react.responder") : 60118, q = e ? Symbol.for("react.scope") : 60119;
  function X(x) {
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
            case E:
              return x;
            default:
              switch (x = x && x.$$typeof, x) {
                case S:
                case I:
                case R:
                case J:
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
    return X(x) === m;
  }
  return ze.AsyncMode = w, ze.ConcurrentMode = m, ze.ContextConsumer = S, ze.ContextProvider = y, ze.Element = t, ze.ForwardRef = I, ze.Fragment = o, ze.Lazy = R, ze.Memo = J, ze.Portal = r, ze.Profiler = u, ze.StrictMode = c, ze.Suspense = E, ze.isAsyncMode = function(x) {
    return W(x) || X(x) === w;
  }, ze.isConcurrentMode = W, ze.isContextConsumer = function(x) {
    return X(x) === S;
  }, ze.isContextProvider = function(x) {
    return X(x) === y;
  }, ze.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === t;
  }, ze.isForwardRef = function(x) {
    return X(x) === I;
  }, ze.isFragment = function(x) {
    return X(x) === o;
  }, ze.isLazy = function(x) {
    return X(x) === R;
  }, ze.isMemo = function(x) {
    return X(x) === J;
  }, ze.isPortal = function(x) {
    return X(x) === r;
  }, ze.isProfiler = function(x) {
    return X(x) === u;
  }, ze.isStrictMode = function(x) {
    return X(x) === c;
  }, ze.isSuspense = function(x) {
    return X(x) === E;
  }, ze.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === o || x === m || x === u || x === c || x === E || x === U || typeof x == "object" && x !== null && (x.$$typeof === R || x.$$typeof === J || x.$$typeof === y || x.$$typeof === S || x.$$typeof === I || x.$$typeof === D || x.$$typeof === H || x.$$typeof === q || x.$$typeof === k);
  }, ze.typeOf = X, ze;
}
As.exports = Gu();
var Yu = As.exports, ro = Yu, Xu = {
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
}, Ju = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, Qu = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Os = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, no = {};
no[ro.ForwardRef] = Qu;
no[ro.Memo] = Os;
function vi(e) {
  return ro.isMemo(e) ? Os : no[e.$$typeof] || Xu;
}
var Zu = Object.defineProperty, Ku = Object.getOwnPropertyNames, wi = Object.getOwnPropertySymbols, ed = Object.getOwnPropertyDescriptor, td = Object.getPrototypeOf, Si = Object.prototype;
function Rs(e, t, r) {
  if (typeof t != "string") {
    if (Si) {
      var o = td(t);
      o && o !== Si && Rs(e, o, r);
    }
    var c = Ku(t);
    wi && (c = c.concat(wi(t)));
    for (var u = vi(e), y = vi(t), S = 0; S < c.length; ++S) {
      var w = c[S];
      if (!Ju[w] && !(r && r[w]) && !(y && y[w]) && !(u && u[w])) {
        var m = ed(t, w);
        try {
          Zu(e, w, m);
        } catch {
        }
      }
    }
  }
  return e;
}
var rd = Rs;
const nd = /* @__PURE__ */ Ii(rd);
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
var ki = function(e, t) {
  for (var r = [e[0]], o = 0, c = t.length; o < c; o += 1) r.push(t[o], e[o + 1]);
  return r;
}, Ba = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !Es.typeOf(e);
}, Zn = Object.freeze([]), gr = Object.freeze({});
function fn(e) {
  return typeof e == "function";
}
function xi(e) {
  return e.displayName || e.name || "Component";
}
function ao(e) {
  return e && typeof e.styledComponentId == "string";
}
var Dr = typeof ht < "u" && ht.env !== void 0 && (ht.env.REACT_APP_SC_ATTR || ht.env.SC_ATTR) || "data-styled", oo = typeof window < "u" && "HTMLElement" in window, ad = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof ht < "u" && ht.env !== void 0 && (ht.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && ht.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? ht.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && ht.env.REACT_APP_SC_DISABLE_SPEEDY : ht.env.SC_DISABLE_SPEEDY !== void 0 && ht.env.SC_DISABLE_SPEEDY !== "" ? ht.env.SC_DISABLE_SPEEDY !== "false" && ht.env.SC_DISABLE_SPEEDY : ht.env.NODE_ENV !== "production"));
function yn(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) r[o - 1] = arguments[o];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : ""));
}
var od = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(r) {
    for (var o = 0, c = 0; c < r; c++) o += this.groupSizes[c];
    return o;
  }, t.insertRules = function(r, o) {
    if (r >= this.groupSizes.length) {
      for (var c = this.groupSizes, u = c.length, y = u; r >= y; ) (y <<= 1) < 0 && yn(16, "" + r);
      this.groupSizes = new Uint32Array(y), this.groupSizes.set(c), this.length = y;
      for (var S = u; S < y; S++) this.groupSizes[S] = 0;
    }
    for (var w = this.indexOfGroup(r + 1), m = 0, I = o.length; m < I; m++) this.tag.insertRule(w, o[m]) && (this.groupSizes[r]++, w++);
  }, t.clearGroup = function(r) {
    if (r < this.length) {
      var o = this.groupSizes[r], c = this.indexOfGroup(r), u = c + o;
      this.groupSizes[r] = 0;
      for (var y = c; y < u; y++) this.tag.deleteRule(c);
    }
  }, t.getGroup = function(r) {
    var o = "";
    if (r >= this.length || this.groupSizes[r] === 0) return o;
    for (var c = this.groupSizes[r], u = this.indexOfGroup(r), y = u + c, S = u; S < y; S++) o += this.tag.getRule(S) + `/*!sc*/
`;
    return o;
  }, e;
}(), qn = /* @__PURE__ */ new Map(), Kn = /* @__PURE__ */ new Map(), cn = 1, $n = function(e) {
  if (qn.has(e)) return qn.get(e);
  for (; Kn.has(cn); ) cn++;
  var t = cn++;
  return qn.set(e, t), Kn.set(t, e), t;
}, id = function(e) {
  return Kn.get(e);
}, sd = function(e, t) {
  t >= cn && (cn = t + 1), qn.set(e, t), Kn.set(t, e);
}, ld = "style[" + Dr + '][data-styled-version="5.3.11"]', cd = new RegExp("^" + Dr + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), ud = function(e, t, r) {
  for (var o, c = r.split(","), u = 0, y = c.length; u < y; u++) (o = c[u]) && e.registerName(t, o);
}, dd = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), o = [], c = 0, u = r.length; c < u; c++) {
    var y = r[c].trim();
    if (y) {
      var S = y.match(cd);
      if (S) {
        var w = 0 | parseInt(S[1], 10), m = S[2];
        w !== 0 && (sd(m, w), ud(e, m, S[3]), e.getTag().insertRules(w, o)), o.length = 0;
      } else o.push(y);
    }
  }
}, fd = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Ns = function(e) {
  var t = document.head, r = e || t, o = document.createElement("style"), c = function(S) {
    for (var w = S.childNodes, m = w.length; m >= 0; m--) {
      var I = w[m];
      if (I && I.nodeType === 1 && I.hasAttribute(Dr)) return I;
    }
  }(r), u = c !== void 0 ? c.nextSibling : null;
  o.setAttribute(Dr, "active"), o.setAttribute("data-styled-version", "5.3.11");
  var y = fd();
  return y && o.setAttribute("nonce", y), r.insertBefore(o, u), o;
}, pd = function() {
  function e(r) {
    var o = this.element = Ns(r);
    o.appendChild(document.createTextNode("")), this.sheet = function(c) {
      if (c.sheet) return c.sheet;
      for (var u = document.styleSheets, y = 0, S = u.length; y < S; y++) {
        var w = u[y];
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
}(), hd = function() {
  function e(r) {
    var o = this.element = Ns(r);
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
}(), md = function() {
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
}(), _i = oo, gd = { isServer: !oo, useCSSOMInjection: !ad }, Ls = function() {
  function e(r, o, c) {
    r === void 0 && (r = gr), o === void 0 && (o = {}), this.options = cr({}, gd, {}, r), this.gs = o, this.names = new Map(c), this.server = !!r.isServer, !this.server && oo && _i && (_i = !1, function(u) {
      for (var y = document.querySelectorAll(ld), S = 0, w = y.length; S < w; S++) {
        var m = y[S];
        m && m.getAttribute(Dr) !== "active" && (dd(u, m), m.parentNode && m.parentNode.removeChild(m));
      }
    }(this));
  }
  e.registerId = function(r) {
    return $n(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, o) {
    return o === void 0 && (o = !0), new e(cr({}, this.options, {}, r), this.gs, o && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (c = (o = this.options).isServer, u = o.useCSSOMInjection, y = o.target, r = c ? new md(y) : u ? new pd(y) : new hd(y), new od(r)));
    var r, o, c, u, y;
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
      for (var o = r.getTag(), c = o.length, u = "", y = 0; y < c; y++) {
        var S = id(y);
        if (S !== void 0) {
          var w = r.names.get(S), m = o.getGroup(y);
          if (w && m && w.size) {
            var I = Dr + ".g" + y + '[id="' + S + '"]', E = "";
            w !== void 0 && w.forEach(function(U) {
              U.length > 0 && (E += U + ",");
            }), u += "" + m + I + '{content:"' + E + `"}/*!sc*/
`;
          }
        }
      }
      return u;
    }(this);
  }, e;
}(), yd = /(a)(d)/gi, Ci = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Wa(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = Ci(t % 52) + r;
  return (Ci(t % 52) + r).replace(yd, "$1-$2");
}
var Nr = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, Is = function(e) {
  return Nr(5381, e);
};
function bd(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (fn(r) && !ao(r)) return !1;
  }
  return !0;
}
var vd = Is("5.3.11"), wd = function() {
  function e(t, r, o) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (o === void 0 || o.isStatic) && bd(t), this.componentId = r, this.baseHash = Nr(vd, r), this.baseStyle = o, Ls.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, o) {
    var c = this.componentId, u = [];
    if (this.baseStyle && u.push(this.baseStyle.generateAndInjectStyles(t, r, o)), this.isStatic && !o.hash) if (this.staticRulesId && r.hasNameForId(c, this.staticRulesId)) u.push(this.staticRulesId);
    else {
      var y = Fr(this.rules, t, r, o).join(""), S = Wa(Nr(this.baseHash, y) >>> 0);
      if (!r.hasNameForId(c, S)) {
        var w = o(y, "." + S, void 0, c);
        r.insertRules(c, S, w);
      }
      u.push(S), this.staticRulesId = S;
    }
    else {
      for (var m = this.rules.length, I = Nr(this.baseHash, o.hash), E = "", U = 0; U < m; U++) {
        var J = this.rules[U];
        if (typeof J == "string") E += J;
        else if (J) {
          var R = Fr(J, t, r, o), k = Array.isArray(R) ? R.join("") : R;
          I = Nr(I, k + U), E += k;
        }
      }
      if (E) {
        var D = Wa(I >>> 0);
        if (!r.hasNameForId(c, D)) {
          var H = o(E, "." + D, void 0, c);
          r.insertRules(c, D, H);
        }
        u.push(D);
      }
    }
    return u.join(" ");
  }, e;
}(), Sd = /^\s*\/\/.*$/gm, kd = [":", "[", ".", "#"];
function xd(e) {
  var t, r, o, c, u = gr, y = u.options, S = y === void 0 ? gr : y, w = u.plugins, m = w === void 0 ? Zn : w, I = new Wu(S), E = [], U = /* @__PURE__ */ function(k) {
    function D(H) {
      if (H) try {
        k(H + "}");
      } catch {
      }
    }
    return function(H, q, X, W, x, ce, _e, Ie, De, Ve) {
      switch (H) {
        case 1:
          if (De === 0 && q.charCodeAt(0) === 64) return k(q + ";"), "";
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
              return q + (Ve === 0 ? "/*|*/" : "");
          }
        case -2:
          q.split("/*|*/}").forEach(D);
      }
    };
  }(function(k) {
    E.push(k);
  }), J = function(k, D, H) {
    return D === 0 && kd.indexOf(H[r.length]) !== -1 || H.match(c) ? k : "." + t;
  };
  function R(k, D, H, q) {
    q === void 0 && (q = "&");
    var X = k.replace(Sd, ""), W = D && H ? H + " " + D + " { " + X + " }" : X;
    return t = q, r = D, o = new RegExp("\\" + r + "\\b", "g"), c = new RegExp("(\\" + r + "\\b){2,}"), I(H || !D ? "" : D, W);
  }
  return I.use([].concat(m, [function(k, D, H) {
    k === 2 && H.length && H[0].lastIndexOf(r) > 0 && (H[0] = H[0].replace(o, J));
  }, U, function(k) {
    if (k === -2) {
      var D = E;
      return E = [], D;
    }
  }])), R.hash = m.length ? m.reduce(function(k, D) {
    return D.name || yn(15), Nr(k, D.name);
  }, 5381).toString() : "", R;
}
var Ps = dt.createContext();
Ps.Consumer;
var Ds = dt.createContext(), _d = (Ds.Consumer, new Ls()), Ha = xd();
function Cd() {
  return yr(Ps) || _d;
}
function Td() {
  return yr(Ds) || Ha;
}
var Ed = function() {
  function e(t, r) {
    var o = this;
    this.inject = function(c, u) {
      u === void 0 && (u = Ha);
      var y = o.name + u.hash;
      c.hasNameForId(o.id, y) || c.insertRules(o.id, y, u(o.rules, y, "@keyframes"));
    }, this.toString = function() {
      return yn(12, String(o.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Ha), this.name + t.hash;
  }, e;
}(), Ad = /([A-Z])/, Od = /([A-Z])/g, Rd = /^ms-/, Nd = function(e) {
  return "-" + e.toLowerCase();
};
function Ti(e) {
  return Ad.test(e) ? e.replace(Od, Nd).replace(Rd, "-ms-") : e;
}
var Ei = function(e) {
  return e == null || e === !1 || e === "";
};
function Fr(e, t, r, o) {
  if (Array.isArray(e)) {
    for (var c, u = [], y = 0, S = e.length; y < S; y += 1) (c = Fr(e[y], t, r, o)) !== "" && (Array.isArray(c) ? u.push.apply(u, c) : u.push(c));
    return u;
  }
  if (Ei(e)) return "";
  if (ao(e)) return "." + e.styledComponentId;
  if (fn(e)) {
    if (typeof (m = e) != "function" || m.prototype && m.prototype.isReactComponent || !t) return e;
    var w = e(t);
    return Fr(w, t, r, o);
  }
  var m;
  return e instanceof Ed ? r ? (e.inject(r, o), e.getName(o)) : e : Ba(e) ? function I(E, U) {
    var J, R, k = [];
    for (var D in E) E.hasOwnProperty(D) && !Ei(E[D]) && (Array.isArray(E[D]) && E[D].isCss || fn(E[D]) ? k.push(Ti(D) + ":", E[D], ";") : Ba(E[D]) ? k.push.apply(k, I(E[D], D)) : k.push(Ti(D) + ": " + (J = D, (R = E[D]) == null || typeof R == "boolean" || R === "" ? "" : typeof R != "number" || R === 0 || J in Hu || J.startsWith("--") ? String(R).trim() : R + "px") + ";"));
    return U ? [U + " {"].concat(k, ["}"]) : k;
  }(e) : e.toString();
}
var Ai = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Ld(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) r[o - 1] = arguments[o];
  return fn(e) || Ba(e) ? Ai(Fr(ki(Zn, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Ai(Fr(ki(e, r)));
}
var Id = function(e, t, r) {
  return r === void 0 && (r = gr), e.theme !== r.theme && e.theme || t || r.theme;
}, Pd = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Dd = /(^-|-$)/g;
function Oa(e) {
  return e.replace(Pd, "-").replace(Dd, "");
}
var Fd = function(e) {
  return Wa(Is(e) >>> 0);
};
function Bn(e) {
  return typeof e == "string" && ht.env.NODE_ENV === "production";
}
var Va = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Md = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function jd(e, t, r) {
  var o = e[r];
  Va(t) && Va(o) ? Fs(o, t) : e[r] = t;
}
function Fs(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) r[o - 1] = arguments[o];
  for (var c = 0, u = r; c < u.length; c++) {
    var y = u[c];
    if (Va(y)) for (var S in y) Md(S) && jd(e, y[S], S);
  }
  return e;
}
var Ms = dt.createContext();
Ms.Consumer;
var Ra = {};
function js(e, t, r) {
  var o = ao(e), c = !Bn(e), u = t.attrs, y = u === void 0 ? Zn : u, S = t.componentId, w = S === void 0 ? function(q, X) {
    var W = typeof q != "string" ? "sc" : Oa(q);
    Ra[W] = (Ra[W] || 0) + 1;
    var x = W + "-" + Fd("5.3.11" + W + Ra[W]);
    return X ? X + "-" + x : x;
  }(t.displayName, t.parentComponentId) : S, m = t.displayName, I = m === void 0 ? function(q) {
    return Bn(q) ? "styled." + q : "Styled(" + xi(q) + ")";
  }(e) : m, E = t.displayName && t.componentId ? Oa(t.displayName) + "-" + t.componentId : t.componentId || w, U = o && e.attrs ? Array.prototype.concat(e.attrs, y).filter(Boolean) : y, J = t.shouldForwardProp;
  o && e.shouldForwardProp && (J = t.shouldForwardProp ? function(q, X, W) {
    return e.shouldForwardProp(q, X, W) && t.shouldForwardProp(q, X, W);
  } : e.shouldForwardProp);
  var R, k = new wd(r, E, o ? e.componentStyle : void 0), D = k.isStatic && y.length === 0, H = function(q, X) {
    return function(W, x, ce, _e) {
      var Ie = W.attrs, De = W.componentStyle, Ve = W.defaultProps, ue = W.foldedComponentIds, pe = W.shouldForwardProp, Ne = W.styledComponentId, Le = W.target, Ee = function(P, p, re) {
        P === void 0 && (P = gr);
        var T = cr({}, p, { theme: P }), ne = {};
        return re.forEach(function(ee) {
          var te, B, oe, se = ee;
          for (te in fn(se) && (se = se(T)), se) T[te] = ne[te] = te === "className" ? (B = ne[te], oe = se[te], B && oe ? B + " " + oe : B || oe) : se[te];
        }), [T, ne];
      }(Id(x, yr(Ms), Ve) || gr, x, Ie), st = Ee[0], Fe = Ee[1], Ae = function(P, p, re, T) {
        var ne = Cd(), ee = Td(), te = p ? P.generateAndInjectStyles(gr, ne, ee) : P.generateAndInjectStyles(re, ne, ee);
        return te;
      }(De, _e, st), $e = ce, Ke = Fe.$as || x.$as || Fe.as || x.as || Le, ie = Bn(Ke), M = Fe !== x ? cr({}, x, {}, Fe) : x, C = {};
      for (var F in M) F[0] !== "$" && F !== "as" && (F === "forwardedAs" ? C.as = M[F] : (pe ? pe(F, yi, Ke) : !ie || yi(F)) && (C[F] = M[F]));
      return x.style && Fe.style !== x.style && (C.style = cr({}, x.style, {}, Fe.style)), C.className = Array.prototype.concat(ue, Ne, Ae !== Ne ? Ae : null, x.className, Fe.className).filter(Boolean).join(" "), C.ref = $e, Ni(Ke, C);
    }(R, q, X, D);
  };
  return H.displayName = I, (R = dt.forwardRef(H)).attrs = U, R.componentStyle = k, R.displayName = I, R.shouldForwardProp = J, R.foldedComponentIds = o ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Zn, R.styledComponentId = E, R.target = o ? e.target : e, R.withComponent = function(q) {
    var X = t.componentId, W = function(ce, _e) {
      if (ce == null) return {};
      var Ie, De, Ve = {}, ue = Object.keys(ce);
      for (De = 0; De < ue.length; De++) Ie = ue[De], _e.indexOf(Ie) >= 0 || (Ve[Ie] = ce[Ie]);
      return Ve;
    }(t, ["componentId"]), x = X && X + "-" + (Bn(q) ? q : Oa(xi(q)));
    return js(q, cr({}, W, { attrs: U, componentId: x }), r);
  }, Object.defineProperty(R, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(q) {
    this._foldedDefaultProps = o ? Fs({}, e.defaultProps, q) : q;
  } }), Object.defineProperty(R, "toString", { value: function() {
    return "." + R.styledComponentId;
  } }), c && nd(R, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), R;
}
var ea = function(e) {
  return function t(r, o, c) {
    if (c === void 0 && (c = gr), !Es.isValidElementType(o)) return yn(1, String(o));
    var u = function() {
      return r(o, c, Ld.apply(void 0, arguments));
    };
    return u.withConfig = function(y) {
      return t(r, o, cr({}, c, {}, y));
    }, u.attrs = function(y) {
      return t(r, o, cr({}, c, { attrs: Array.prototype.concat(c.attrs, y).filter(Boolean) }));
    }, u;
  }(js, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  ea[e] = ea(e);
});
const zd = ea.ul`
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
`, Ud = () => {
  const { feeds: e } = yr(Za);
  return /* @__PURE__ */ ut.jsx(zd, { "data-testid": "grid-view-container", children: e == null ? void 0 : e.map((t) => /* @__PURE__ */ ut.jsx("li", { children: /* @__PURE__ */ ut.jsx(
    hr,
    {
      type: "event",
      eventFormat: "inline",
      eventTime: `<span>
                ${Qn(t.startDate, "COMPLETE")} <br /> ${Cs(
        t.startDate,
        t.endDate
      )}
              </span>`,
      eventLocation: t.location,
      clickable: !!t.alias,
      cardLink: `${t.alias}/?eventDate=${Qn(
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
}, zs = ({ header: e, ctaButton: t, dataSource: r, maxItems: o }) => (un(() => {
  typeof window < "u" && Bi({
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
/* @__PURE__ */ ut.jsx(to, { header: e, ctaButton: t, dataSource: r, maxItems: o, children: /* @__PURE__ */ ut.jsx(Ud, {}) }));
zs.propTypes = _s;
const $d = ea.ul`
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
`, Bd = () => {
  const { feeds: e } = yr(Za);
  return /* @__PURE__ */ ut.jsx($d, { "data-testid": "list-view-container", children: e == null ? void 0 : e.map((t) => /* @__PURE__ */ ut.jsx("li", { children: /* @__PURE__ */ ut.jsx(
    hr,
    {
      type: "event",
      eventFormat: "inline",
      horizontal: !0,
      eventTime: `<span>
                ${Qn(t.startDate, "COMPLETE")} <br /> ${Cs(
        t.startDate,
        t.endDate
      )}
              </span>`,
      eventLocation: t.location,
      clickable: !!t.alias,
      cardLink: `${t.alias}/?eventDate=${Qn(
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
}, Us = ({ header: e, ctaButton: t, dataSource: r, maxItems: o }) => (un(() => {
  typeof window < "u" && Bi({
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
/* @__PURE__ */ ut.jsx(to, { header: e, ctaButton: t, dataSource: r, maxItems: o, children: /* @__PURE__ */ ut.jsx(Bd, {}) }));
Us.propTypes = _s;
var $s, Oi = Li;
$s = Oi.createRoot, Oi.hydrateRoot;
const Bs = (e, t, r) => {
  $s(r).render(dt.createElement(e, t));
}, Vd = ({ targetSelector: e, props: t }) => {
  Bs(zs, t, document.querySelector(e));
}, qd = ({ targetSelector: e, props: t }) => {
  Bs(Us, t, document.querySelector(e));
};
export {
  zs as CardsGridEvents,
  Us as CardsListEvents,
  Vd as initCardsGridEventsComponent,
  qd as initCardsListEventsComponent
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
/*! @license DOMPurify 3.2.4 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.4/LICENSE */
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
