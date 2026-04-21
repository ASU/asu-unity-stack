import ft, { forwardRef as ii, Component as ol, createContext as sl, useRef as ll, useImperativeHandle as cl, useId as ul, useContext as _r, createElement as Jo, useState as ln, useEffect as fn } from "react";
import es from "react-dom";
function ts(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ya = { exports: {} }, Zr = {};
var Di;
function dl() {
  if (Di) return Zr;
  Di = 1;
  var e = ft, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, c = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(S, k, g) {
    var I, O = {}, j = null, q = null;
    g !== void 0 && (j = "" + g), k.key !== void 0 && (j = "" + k.key), k.ref !== void 0 && (q = k.ref);
    for (I in k) i.call(k, I) && !u.hasOwnProperty(I) && (O[I] = k[I]);
    if (S && S.defaultProps) for (I in k = S.defaultProps, k) O[I] === void 0 && (O[I] = k[I]);
    return { $$typeof: t, type: S, key: j, ref: q, props: O, _owner: c.current };
  }
  return Zr.Fragment = r, Zr.jsx = y, Zr.jsxs = y, Zr;
}
var Pi;
function fl() {
  return Pi || (Pi = 1, ya.exports = dl()), ya.exports;
}
var dt = fl();
const {
  entries: rs,
  setPrototypeOf: Mi,
  isFrozen: pl,
  getPrototypeOf: hl,
  getOwnPropertyDescriptor: ml
} = Object;
let {
  freeze: St,
  seal: zt,
  create: Vn
} = Object, {
  apply: qa,
  construct: Va
} = typeof Reflect < "u" && Reflect;
St || (St = function(t) {
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
Va || (Va = function(t) {
  for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), c = 1; c < r; c++)
    i[c - 1] = arguments[c];
  return new t(...i);
});
const Pn = _t(Array.prototype.forEach), gl = _t(Array.prototype.lastIndexOf), Li = _t(Array.prototype.pop), Xr = _t(Array.prototype.push), yl = _t(Array.prototype.splice), Yn = _t(String.prototype.toLowerCase), ba = _t(String.prototype.toString), va = _t(String.prototype.match), Kr = _t(String.prototype.replace), bl = _t(String.prototype.indexOf), vl = _t(String.prototype.trim), Pt = _t(Object.prototype.hasOwnProperty), wt = _t(RegExp.prototype.test), Qr = wl(TypeError);
function _t(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), c = 1; c < r; c++)
      i[c - 1] = arguments[c];
    return qa(e, t, i);
  };
}
function wl(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++)
      r[i] = arguments[i];
    return Va(e, r);
  };
}
function Ee(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Yn;
  Mi && Mi(e, null);
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
function kl(e) {
  for (let t = 0; t < e.length; t++)
    Pt(e, t) || (e[t] = null);
  return e;
}
function or(e) {
  const t = Vn(null);
  for (const [r, i] of rs(e))
    Pt(e, r) && (Array.isArray(i) ? t[r] = kl(i) : i && typeof i == "object" && i.constructor === Object ? t[r] = or(i) : t[r] = i);
  return t;
}
function Jr(e, t) {
  for (; e !== null; ) {
    const i = ml(e, t);
    if (i) {
      if (i.get)
        return _t(i.get);
      if (typeof i.value == "function")
        return _t(i.value);
    }
    e = hl(e);
  }
  function r() {
    return null;
  }
  return r;
}
const Fi = St(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), wa = St(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ka = St(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Sl = St(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Sa = St(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), _l = St(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), ji = St(["#text"]), zi = St(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), _a = St(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Ui = St(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Mn = St(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), xl = zt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Cl = zt(/<%[\w\W]*|[\w\W]*%>/gm), Tl = zt(/\$\{[\w\W]*/gm), El = zt(/^data-[\-\w.\u00B7-\uFFFF]+$/), Al = zt(/^aria-[\-\w]+$/), ns = zt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Rl = zt(/^(?:\w+script|data):/i), Ol = zt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), as = zt(/^html$/i), Il = zt(/^[a-z][.\w]*(-[.\w]+)+$/i);
var $i = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: Al,
  ATTR_WHITESPACE: Ol,
  CUSTOM_ELEMENT: Il,
  DATA_ATTR: El,
  DOCTYPE_NAME: as,
  ERB_EXPR: Cl,
  IS_ALLOWED_URI: ns,
  IS_SCRIPT_OR_DATA: Rl,
  MUSTACHE_EXPR: xl,
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
function is() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Nl();
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
    Element: k,
    NodeFilter: g,
    NamedNodeMap: I = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: O,
    DOMParser: j,
    trustedTypes: q
  } = e, x = k.prototype, w = Jr(x, "cloneNode"), P = Jr(x, "remove"), V = Jr(x, "nextSibling"), $ = Jr(x, "childNodes"), Y = Jr(x, "parentNode");
  if (typeof y == "function") {
    const p = r.createElement("template");
    p.content && p.content.ownerDocument && (r = p.content.ownerDocument);
  }
  let B, _ = "";
  const {
    implementation: ae,
    createNodeIterator: ke,
    createDocumentFragment: Ie,
    getElementsByTagName: Le
  } = r, {
    importNode: Ge
  } = i;
  let ue = Bi();
  t.isSupported = typeof rs == "function" && typeof Y == "function" && ae && ae.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: me,
    ERB_EXPR: Oe,
    TMPLIT_EXPR: Ne,
    DATA_ATTR: Te,
    ARIA_ATTR: st,
    IS_SCRIPT_OR_DATA: Fe,
    ATTR_WHITESPACE: Re,
    CUSTOM_ELEMENT: We
  } = $i;
  let {
    IS_ALLOWED_URI: tt
  } = $i, se = null;
  const F = Ee({}, [...Fi, ...wa, ...ka, ...Sa, ...ji]);
  let E = null;
  const L = Ee({}, [...zi, ..._a, ...Ui, ...Mn]);
  let M = Object.seal(Vn(null, {
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
  const C = Object.seal(Vn(null, {
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
  let ie = !0, J = !0, te = !1, Z = !0, ne = !1, de = !0, K = !1, ge = !1, re = !1, le = !1, $e = !1, ce = !1, it = !0, He = !1;
  const Se = "user-content-";
  let H = !0, oe = !1, Xe = {}, De = null;
  const Pe = Ee({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let er = null;
  const tr = Ee({}, ["audio", "video", "img", "source", "image", "track"]);
  let $t = null;
  const Bt = Ee({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), pt = "http://www.w3.org/1998/Math/MathML", Tt = "http://www.w3.org/2000/svg", nt = "http://www.w3.org/1999/xhtml";
  let ut = nt, Wt = !1, Ht = null;
  const ht = Ee({}, [pt, Tt, nt], ba);
  let vt = Ee({}, ["mi", "mo", "mn", "ms", "mtext"]), mt = Ee({}, ["annotation-xml"]);
  const Me = Ee({}, ["title", "style", "font", "a", "script"]);
  let lt = null;
  const rr = ["application/xhtml+xml", "text/html"], qt = "text/html";
  let fe = null, ot = null;
  const Et = r.createElement("form"), nr = function(m) {
    return m instanceof RegExp || m instanceof Function;
  }, At = function() {
    let m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(ot && ot === m)) {
      if ((!m || typeof m != "object") && (m = {}), m = or(m), lt = // eslint-disable-next-line unicorn/prefer-includes
      rr.indexOf(m.PARSER_MEDIA_TYPE) === -1 ? qt : m.PARSER_MEDIA_TYPE, fe = lt === "application/xhtml+xml" ? ba : Yn, se = Pt(m, "ALLOWED_TAGS") ? Ee({}, m.ALLOWED_TAGS, fe) : F, E = Pt(m, "ALLOWED_ATTR") ? Ee({}, m.ALLOWED_ATTR, fe) : L, Ht = Pt(m, "ALLOWED_NAMESPACES") ? Ee({}, m.ALLOWED_NAMESPACES, ba) : ht, $t = Pt(m, "ADD_URI_SAFE_ATTR") ? Ee(or(Bt), m.ADD_URI_SAFE_ATTR, fe) : Bt, er = Pt(m, "ADD_DATA_URI_TAGS") ? Ee(or(tr), m.ADD_DATA_URI_TAGS, fe) : tr, De = Pt(m, "FORBID_CONTENTS") ? Ee({}, m.FORBID_CONTENTS, fe) : Pe, h = Pt(m, "FORBID_TAGS") ? Ee({}, m.FORBID_TAGS, fe) : or({}), ee = Pt(m, "FORBID_ATTR") ? Ee({}, m.FORBID_ATTR, fe) : or({}), Xe = Pt(m, "USE_PROFILES") ? m.USE_PROFILES : !1, ie = m.ALLOW_ARIA_ATTR !== !1, J = m.ALLOW_DATA_ATTR !== !1, te = m.ALLOW_UNKNOWN_PROTOCOLS || !1, Z = m.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ne = m.SAFE_FOR_TEMPLATES || !1, de = m.SAFE_FOR_XML !== !1, K = m.WHOLE_DOCUMENT || !1, le = m.RETURN_DOM || !1, $e = m.RETURN_DOM_FRAGMENT || !1, ce = m.RETURN_TRUSTED_TYPE || !1, re = m.FORCE_BODY || !1, it = m.SANITIZE_DOM !== !1, He = m.SANITIZE_NAMED_PROPS || !1, H = m.KEEP_CONTENT !== !1, oe = m.IN_PLACE || !1, tt = m.ALLOWED_URI_REGEXP || ns, ut = m.NAMESPACE || nt, vt = m.MATHML_TEXT_INTEGRATION_POINTS || vt, mt = m.HTML_INTEGRATION_POINTS || mt, M = m.CUSTOM_ELEMENT_HANDLING || {}, m.CUSTOM_ELEMENT_HANDLING && nr(m.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (M.tagNameCheck = m.CUSTOM_ELEMENT_HANDLING.tagNameCheck), m.CUSTOM_ELEMENT_HANDLING && nr(m.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (M.attributeNameCheck = m.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), m.CUSTOM_ELEMENT_HANDLING && typeof m.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (M.allowCustomizedBuiltInElements = m.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), ne && (J = !1), $e && (le = !0), Xe && (se = Ee({}, ji), E = Vn(null), Xe.html === !0 && (Ee(se, Fi), Ee(E, zi)), Xe.svg === !0 && (Ee(se, wa), Ee(E, _a), Ee(E, Mn)), Xe.svgFilters === !0 && (Ee(se, ka), Ee(E, _a), Ee(E, Mn)), Xe.mathMl === !0 && (Ee(se, Sa), Ee(E, Ui), Ee(E, Mn))), Pt(m, "ADD_TAGS") || (C.tagCheck = null), Pt(m, "ADD_ATTR") || (C.attributeCheck = null), m.ADD_TAGS && (typeof m.ADD_TAGS == "function" ? C.tagCheck = m.ADD_TAGS : (se === F && (se = or(se)), Ee(se, m.ADD_TAGS, fe))), m.ADD_ATTR && (typeof m.ADD_ATTR == "function" ? C.attributeCheck = m.ADD_ATTR : (E === L && (E = or(E)), Ee(E, m.ADD_ATTR, fe))), m.ADD_URI_SAFE_ATTR && Ee($t, m.ADD_URI_SAFE_ATTR, fe), m.FORBID_CONTENTS && (De === Pe && (De = or(De)), Ee(De, m.FORBID_CONTENTS, fe)), m.ADD_FORBID_CONTENTS && (De === Pe && (De = or(De)), Ee(De, m.ADD_FORBID_CONTENTS, fe)), H && (se["#text"] = !0), K && Ee(se, ["html", "head", "body"]), se.table && (Ee(se, ["tbody"]), delete h.tbody), m.TRUSTED_TYPES_POLICY) {
        if (typeof m.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Qr('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof m.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Qr('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        B = m.TRUSTED_TYPES_POLICY, _ = B.createHTML("");
      } else
        B === void 0 && (B = Dl(q, c)), B !== null && typeof _ == "string" && (_ = B.createHTML(""));
      St && St(m), ot = m;
    }
  }, Vt = Ee({}, [...wa, ...ka, ...Sl]), ar = Ee({}, [...Sa, ..._l]), mr = function(m) {
    let T = Y(m);
    (!T || !T.tagName) && (T = {
      namespaceURI: ut,
      tagName: "template"
    });
    const G = Yn(m.tagName), ye = Yn(T.tagName);
    return Ht[m.namespaceURI] ? m.namespaceURI === Tt ? T.namespaceURI === nt ? G === "svg" : T.namespaceURI === pt ? G === "svg" && (ye === "annotation-xml" || vt[ye]) : !!Vt[G] : m.namespaceURI === pt ? T.namespaceURI === nt ? G === "math" : T.namespaceURI === Tt ? G === "math" && mt[ye] : !!ar[G] : m.namespaceURI === nt ? T.namespaceURI === Tt && !mt[ye] || T.namespaceURI === pt && !vt[ye] ? !1 : !ar[G] && (Me[G] || !Vt[G]) : !!(lt === "application/xhtml+xml" && Ht[m.namespaceURI]) : !1;
  }, at = function(m) {
    Xr(t.removed, {
      element: m
    });
    try {
      Y(m).removeChild(m);
    } catch {
      P(m);
    }
  }, ct = function(m, T) {
    try {
      Xr(t.removed, {
        attribute: T.getAttributeNode(m),
        from: T
      });
    } catch {
      Xr(t.removed, {
        attribute: null,
        from: T
      });
    }
    if (T.removeAttribute(m), m === "is")
      if (le || $e)
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
    let T = null, G = null;
    if (re)
      m = "<remove></remove>" + m;
    else {
      const we = va(m, /^[\r\n\t ]+/);
      G = we && we[0];
    }
    lt === "application/xhtml+xml" && ut === nt && (m = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + m + "</body></html>");
    const ye = B ? B.createHTML(m) : m;
    if (ut === nt)
      try {
        T = new j().parseFromString(ye, lt);
      } catch {
      }
    if (!T || !T.documentElement) {
      T = ae.createDocument(ut, "template", null);
      try {
        T.documentElement.innerHTML = Wt ? _ : ye;
      } catch {
      }
    }
    const ve = T.body || T.documentElement;
    return m && G && ve.insertBefore(r.createTextNode(G), ve.childNodes[0] || null), ut === nt ? Le.call(T, K ? "html" : "body")[0] : K ? T.documentElement : ve;
  }, Lt = function(m) {
    return ke.call(
      m.ownerDocument || m,
      m,
      // eslint-disable-next-line no-bitwise
      g.SHOW_ELEMENT | g.SHOW_COMMENT | g.SHOW_TEXT | g.SHOW_PROCESSING_INSTRUCTION | g.SHOW_CDATA_SECTION,
      null
    );
  }, Ft = function(m) {
    return m instanceof O && (typeof m.nodeName != "string" || typeof m.textContent != "string" || typeof m.removeChild != "function" || !(m.attributes instanceof I) || typeof m.removeAttribute != "function" || typeof m.setAttribute != "function" || typeof m.namespaceURI != "string" || typeof m.insertBefore != "function" || typeof m.hasChildNodes != "function");
  }, jt = function(m) {
    return typeof S == "function" && m instanceof S;
  };
  function Je(p, m, T) {
    Pn(p, (G) => {
      G.call(t, m, T, ot);
    });
  }
  const cr = function(m) {
    let T = null;
    if (Je(ue.beforeSanitizeElements, m, null), Ft(m))
      return at(m), !0;
    const G = fe(m.nodeName);
    if (Je(ue.uponSanitizeElement, m, {
      tagName: G,
      allowedTags: se
    }), de && m.hasChildNodes() && !jt(m.firstElementChild) && wt(/<[/\w!]/g, m.innerHTML) && wt(/<[/\w!]/g, m.textContent) || m.nodeType === en.progressingInstruction || de && m.nodeType === en.comment && wt(/<[/\w]/g, m.data))
      return at(m), !0;
    if (!(C.tagCheck instanceof Function && C.tagCheck(G)) && (!se[G] || h[G])) {
      if (!h[G] && ur(G) && (M.tagNameCheck instanceof RegExp && wt(M.tagNameCheck, G) || M.tagNameCheck instanceof Function && M.tagNameCheck(G)))
        return !1;
      if (H && !De[G]) {
        const ye = Y(m) || m.parentNode, ve = $(m) || m.childNodes;
        if (ve && ye) {
          const we = ve.length;
          for (let je = we - 1; je >= 0; --je) {
            const Ze = w(ve[je], !0);
            Ze.__removalCount = (m.__removalCount || 0) + 1, ye.insertBefore(Ze, V(m));
          }
        }
      }
      return at(m), !0;
    }
    return m instanceof k && !mr(m) || (G === "noscript" || G === "noembed" || G === "noframes") && wt(/<\/no(script|embed|frames)/i, m.innerHTML) ? (at(m), !0) : (ne && m.nodeType === en.text && (T = m.textContent, Pn([me, Oe, Ne], (ye) => {
      T = Kr(T, ye, " ");
    }), m.textContent !== T && (Xr(t.removed, {
      element: m.cloneNode()
    }), m.textContent = T)), Je(ue.afterSanitizeElements, m, null), !1);
  }, Rt = function(m, T, G) {
    if (ee[T] || it && (T === "id" || T === "name") && (G in r || G in Et))
      return !1;
    if (!(J && !ee[T] && wt(Te, T))) {
      if (!(ie && wt(st, T))) {
        if (!(C.attributeCheck instanceof Function && C.attributeCheck(T, m))) {
          if (!E[T] || ee[T]) {
            if (
              // First condition does a very basic check if a) it's basically a valid custom element tagname AND
              // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
              !(ur(m) && (M.tagNameCheck instanceof RegExp && wt(M.tagNameCheck, m) || M.tagNameCheck instanceof Function && M.tagNameCheck(m)) && (M.attributeNameCheck instanceof RegExp && wt(M.attributeNameCheck, T) || M.attributeNameCheck instanceof Function && M.attributeNameCheck(T, m)) || // Alternative, second condition checks if it's an `is`-attribute, AND
              // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              T === "is" && M.allowCustomizedBuiltInElements && (M.tagNameCheck instanceof RegExp && wt(M.tagNameCheck, G) || M.tagNameCheck instanceof Function && M.tagNameCheck(G)))
            ) return !1;
          } else if (!$t[T]) {
            if (!wt(tt, Kr(G, Re, ""))) {
              if (!((T === "src" || T === "xlink:href" || T === "href") && m !== "script" && bl(G, "data:") === 0 && er[m])) {
                if (!(te && !wt(Fe, Kr(G, Re, "")))) {
                  if (G)
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
    return m !== "annotation-xml" && va(m, We);
  }, Yt = function(m) {
    Je(ue.beforeSanitizeAttributes, m, null);
    const {
      attributes: T
    } = m;
    if (!T || Ft(m))
      return;
    const G = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: E,
      forceKeepAttr: void 0
    };
    let ye = T.length;
    for (; ye--; ) {
      const ve = T[ye], {
        name: we,
        namespaceURI: je,
        value: Ze
      } = ve, gt = fe(we), Ke = Ze;
      let Be = we === "value" ? Ke : vl(Ke);
      if (G.attrName = gt, G.attrValue = Be, G.keepAttr = !0, G.forceKeepAttr = void 0, Je(ue.uponSanitizeAttribute, m, G), Be = G.attrValue, He && (gt === "id" || gt === "name") && (ct(we, m), Be = Se + Be), de && wt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Be)) {
        ct(we, m);
        continue;
      }
      if (gt === "attributename" && va(Be, "href")) {
        ct(we, m);
        continue;
      }
      if (G.forceKeepAttr)
        continue;
      if (!G.keepAttr) {
        ct(we, m);
        continue;
      }
      if (!Z && wt(/\/>/i, Be)) {
        ct(we, m);
        continue;
      }
      ne && Pn([me, Oe, Ne], (xr) => {
        Be = Kr(Be, xr, " ");
      });
      const Ot = fe(m.nodeName);
      if (!Rt(Ot, gt, Be)) {
        ct(we, m);
        continue;
      }
      if (B && typeof q == "object" && typeof q.getAttributeType == "function" && !je)
        switch (q.getAttributeType(Ot, gt)) {
          case "TrustedHTML": {
            Be = B.createHTML(Be);
            break;
          }
          case "TrustedScriptURL": {
            Be = B.createScriptURL(Be);
            break;
          }
        }
      if (Be !== Ke)
        try {
          je ? m.setAttributeNS(je, we, Be) : m.setAttribute(we, Be), Ft(m) ? at(m) : Li(t.removed);
        } catch {
          ct(we, m);
        }
    }
    Je(ue.afterSanitizeAttributes, m, null);
  }, ir = function p(m) {
    let T = null;
    const G = Lt(m);
    for (Je(ue.beforeSanitizeShadowDOM, m, null); T = G.nextNode(); )
      Je(ue.uponSanitizeShadowNode, T, null), cr(T), Yt(T), T.content instanceof u && p(T.content);
    Je(ue.afterSanitizeShadowDOM, m, null);
  };
  return t.sanitize = function(p) {
    let m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, T = null, G = null, ye = null, ve = null;
    if (Wt = !p, Wt && (p = "<!-->"), typeof p != "string" && !jt(p))
      if (typeof p.toString == "function") {
        if (p = p.toString(), typeof p != "string")
          throw Qr("dirty is not a string, aborting");
      } else
        throw Qr("toString is not a function");
    if (!t.isSupported)
      return p;
    if (ge || At(m), t.removed = [], typeof p == "string" && (oe = !1), oe) {
      if (p.nodeName) {
        const Ze = fe(p.nodeName);
        if (!se[Ze] || h[Ze])
          throw Qr("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (p instanceof S)
      T = lr("<!---->"), G = T.ownerDocument.importNode(p, !0), G.nodeType === en.element && G.nodeName === "BODY" || G.nodeName === "HTML" ? T = G : T.appendChild(G);
    else {
      if (!le && !ne && !K && // eslint-disable-next-line unicorn/prefer-includes
      p.indexOf("<") === -1)
        return B && ce ? B.createHTML(p) : p;
      if (T = lr(p), !T)
        return le ? null : ce ? _ : "";
    }
    T && re && at(T.firstChild);
    const we = Lt(oe ? p : T);
    for (; ye = we.nextNode(); )
      cr(ye), Yt(ye), ye.content instanceof u && ir(ye.content);
    if (oe)
      return p;
    if (le) {
      if ($e)
        for (ve = Ie.call(T.ownerDocument); T.firstChild; )
          ve.appendChild(T.firstChild);
      else
        ve = T;
      return (E.shadowroot || E.shadowrootmode) && (ve = Ge.call(i, ve, !0)), ve;
    }
    let je = K ? T.outerHTML : T.innerHTML;
    return K && se["!doctype"] && T.ownerDocument && T.ownerDocument.doctype && T.ownerDocument.doctype.name && wt(as, T.ownerDocument.doctype.name) && (je = "<!DOCTYPE " + T.ownerDocument.doctype.name + `>
` + je), ne && Pn([me, Oe, Ne], (Ze) => {
      je = Kr(je, Ze, " ");
    }), B && ce ? B.createHTML(je) : je;
  }, t.setConfig = function() {
    let p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    At(p), ge = !0;
  }, t.clearConfig = function() {
    ot = null, ge = !1;
  }, t.isValidAttribute = function(p, m, T) {
    ot || At({});
    const G = fe(p), ye = fe(m);
    return Rt(G, ye, T);
  }, t.addHook = function(p, m) {
    typeof m == "function" && Xr(ue[p], m);
  }, t.removeHook = function(p, m) {
    if (m !== void 0) {
      const T = gl(ue[p], m);
      return T === -1 ? void 0 : yl(ue[p], T, 1)[0];
    }
    return Li(ue[p]);
  }, t.removeHooks = function(p) {
    ue[p] = [];
  }, t.removeAllHooks = function() {
    ue = Bi();
  }, t;
}
is();
var xa = { exports: {} }, Ca, Wi;
function Pl() {
  if (Wi) return Ca;
  Wi = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ca = e, Ca;
}
var Ta, Hi;
function Ml() {
  if (Hi) return Ta;
  Hi = 1;
  var e = /* @__PURE__ */ Pl();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Ta = function() {
    function i(y, S, k, g, I, O) {
      if (O !== e) {
        var j = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw j.name = "Invariant Violation", j;
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
var qi;
function Ll() {
  return qi || (qi = 1, xa.exports = /* @__PURE__ */ Ml()()), xa.exports;
}
var Fl = /* @__PURE__ */ Ll();
const Ye = /* @__PURE__ */ ts(Fl);
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
var Ea = { exports: {} };
var Vi;
function jl() {
  return Vi || (Vi = 1, function(e) {
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
  }(Ea)), Ea.exports;
}
jl();
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
mn.propTypes.children, Ye.oneOf(["0", "3", "4", "6", "8", "9", "12"]);
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
function oi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Yi = { exports: {} }, tn = {}, Gi;
function zl() {
  if (Gi) return tn;
  Gi = 1;
  var e = ft, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, c = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(S, k, g) {
    var I, O = {}, j = null, q = null;
    g !== void 0 && (j = "" + g), k.key !== void 0 && (j = "" + k.key), k.ref !== void 0 && (q = k.ref);
    for (I in k) i.call(k, I) && !u.hasOwnProperty(I) && (O[I] = k[I]);
    if (S && S.defaultProps) for (I in k = S.defaultProps, k) O[I] === void 0 && (O[I] = k[I]);
    return { $$typeof: t, type: S, key: j, ref: q, props: O, _owner: c.current };
  }
  return tn.Fragment = r, tn.jsx = y, tn.jsxs = y, tn;
}
var Zi;
function Ul() {
  return Zi || (Zi = 1, Yi.exports = zl()), Yi.exports;
}
var W = Ul(), Xi = { exports: {} }, Aa, Ki;
function $l() {
  if (Ki) return Aa;
  Ki = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Aa = e, Aa;
}
var Ra, Qi;
function Bl() {
  if (Qi) return Ra;
  Qi = 1;
  var e = /* @__PURE__ */ $l();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Ra = function() {
    function i(y, S, k, g, I, O) {
      if (O !== e) {
        var j = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw j.name = "Invariant Violation", j;
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
  }, Ra;
}
var Ji;
function Wl() {
  return Ji || (Ji = 1, Xi.exports = /* @__PURE__ */ Bl()()), Xi.exports;
}
var Hl = /* @__PURE__ */ Wl();
const o = /* @__PURE__ */ oi(Hl), ql = () => {
  const [e, t] = ln(null), [r, i] = ln(!1), [c, u] = ln(null), [y, S] = ln("");
  return fn(() => {
    y && (() => {
      u(null), i(!0);
      try {
        fetch(y).then((k) => k.json()).then((k) => {
          t(k), i(!1);
        }).catch((k) => {
          u(k), i(!1);
        });
      } catch (k) {
        u(k);
      }
    })();
  }, [y]), [{ data: e, loading: r, error: c }, S];
}, Vl = (e) => (e || []).join(" "), {
  entries: ls,
  setPrototypeOf: eo,
  isFrozen: Yl,
  getPrototypeOf: Gl,
  getOwnPropertyDescriptor: Zl
} = Object;
let {
  freeze: xt,
  seal: Ut,
  create: Gn
} = Object, {
  apply: Ya,
  construct: Ga
} = typeof Reflect < "u" && Reflect;
xt || (xt = function(e) {
  return e;
});
Ut || (Ut = function(e) {
  return e;
});
Ya || (Ya = function(e, t) {
  for (var r = arguments.length, i = new Array(r > 2 ? r - 2 : 0), c = 2; c < r; c++)
    i[c - 2] = arguments[c];
  return e.apply(t, i);
});
Ga || (Ga = function(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
    r[i - 1] = arguments[i];
  return new e(...r);
});
const Ln = Ct(Array.prototype.forEach), Xl = Ct(Array.prototype.lastIndexOf), to = Ct(Array.prototype.pop), rn = Ct(Array.prototype.push), Kl = Ct(Array.prototype.splice), Zn = Ct(String.prototype.toLowerCase), Oa = Ct(String.prototype.toString), Ia = Ct(String.prototype.match), nn = Ct(String.prototype.replace), Ql = Ct(String.prototype.indexOf), Jl = Ct(String.prototype.trim), Mt = Ct(Object.prototype.hasOwnProperty), kt = Ct(RegExp.prototype.test), an = ec(TypeError);
function Ct(e) {
  return function(t) {
    t instanceof RegExp && (t.lastIndex = 0);
    for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), c = 1; c < r; c++)
      i[c - 1] = arguments[c];
    return Ya(e, t, i);
  };
}
function ec(e) {
  return function() {
    for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++)
      r[i] = arguments[i];
    return Ga(e, r);
  };
}
function Ae(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Zn;
  eo && eo(e, null);
  let i = t.length;
  for (; i--; ) {
    let c = t[i];
    if (typeof c == "string") {
      const u = r(c);
      u !== c && (Yl(t) || (t[i] = u), c = u);
    }
    e[c] = !0;
  }
  return e;
}
function tc(e) {
  for (let t = 0; t < e.length; t++)
    Mt(e, t) || (e[t] = null);
  return e;
}
function sr(e) {
  const t = Gn(null);
  for (const [r, i] of ls(e))
    Mt(e, r) && (Array.isArray(i) ? t[r] = tc(i) : i && typeof i == "object" && i.constructor === Object ? t[r] = sr(i) : t[r] = i);
  return t;
}
function on(e, t) {
  for (; e !== null; ) {
    const i = Zl(e, t);
    if (i) {
      if (i.get)
        return Ct(i.get);
      if (typeof i.value == "function")
        return Ct(i.value);
    }
    e = Gl(e);
  }
  function r() {
    return null;
  }
  return r;
}
const ro = xt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Na = xt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Da = xt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), rc = xt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Pa = xt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), nc = xt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), no = xt(["#text"]), ao = xt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), Ma = xt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), io = xt(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Fn = xt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), ac = Ut(/\{\{[\w\W]*|[\w\W]*\}\}/gm), ic = Ut(/<%[\w\W]*|[\w\W]*%>/gm), oc = Ut(/\$\{[\w\W]*/gm), sc = Ut(/^data-[\-\w.\u00B7-\uFFFF]+$/), lc = Ut(/^aria-[\-\w]+$/), cs = Ut(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), cc = Ut(/^(?:\w+script|data):/i), uc = Ut(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), us = Ut(/^html$/i), dc = Ut(/^[a-z][.\w]*(-[.\w]+)+$/i);
var oo = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: lc,
  ATTR_WHITESPACE: uc,
  CUSTOM_ELEMENT: dc,
  DATA_ATTR: sc,
  DOCTYPE_NAME: us,
  ERB_EXPR: ic,
  IS_ALLOWED_URI: cs,
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
}, so = function() {
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
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : fc();
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
    Element: k,
    NodeFilter: g,
    NamedNodeMap: I = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: O,
    DOMParser: j,
    trustedTypes: q
  } = e, x = k.prototype, w = on(x, "cloneNode"), P = on(x, "remove"), V = on(x, "nextSibling"), $ = on(x, "childNodes"), Y = on(x, "parentNode");
  if (typeof y == "function") {
    const p = r.createElement("template");
    p.content && p.content.ownerDocument && (r = p.content.ownerDocument);
  }
  let B, _ = "";
  const {
    implementation: ae,
    createNodeIterator: ke,
    createDocumentFragment: Ie,
    getElementsByTagName: Le
  } = r, {
    importNode: Ge
  } = i;
  let ue = so();
  t.isSupported = typeof ls == "function" && typeof Y == "function" && ae && ae.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: me,
    ERB_EXPR: Oe,
    TMPLIT_EXPR: Ne,
    DATA_ATTR: Te,
    ARIA_ATTR: st,
    IS_SCRIPT_OR_DATA: Fe,
    ATTR_WHITESPACE: Re,
    CUSTOM_ELEMENT: We
  } = oo;
  let {
    IS_ALLOWED_URI: tt
  } = oo, se = null;
  const F = Ae({}, [...ro, ...Na, ...Da, ...Pa, ...no]);
  let E = null;
  const L = Ae({}, [...ao, ...Ma, ...io, ...Fn]);
  let M = Object.seal(Gn(null, {
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
  const C = Object.seal(Gn(null, {
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
  let ie = !0, J = !0, te = !1, Z = !0, ne = !1, de = !0, K = !1, ge = !1, re = !1, le = !1, $e = !1, ce = !1, it = !0, He = !1;
  const Se = "user-content-";
  let H = !0, oe = !1, Xe = {}, De = null;
  const Pe = Ae({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let er = null;
  const tr = Ae({}, ["audio", "video", "img", "source", "image", "track"]);
  let $t = null;
  const Bt = Ae({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), pt = "http://www.w3.org/1998/Math/MathML", Tt = "http://www.w3.org/2000/svg", nt = "http://www.w3.org/1999/xhtml";
  let ut = nt, Wt = !1, Ht = null;
  const ht = Ae({}, [pt, Tt, nt], Oa);
  let vt = Ae({}, ["mi", "mo", "mn", "ms", "mtext"]), mt = Ae({}, ["annotation-xml"]);
  const Me = Ae({}, ["title", "style", "font", "a", "script"]);
  let lt = null;
  const rr = ["application/xhtml+xml", "text/html"], qt = "text/html";
  let fe = null, ot = null;
  const Et = r.createElement("form"), nr = function(p) {
    return p instanceof RegExp || p instanceof Function;
  }, At = function() {
    let p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(ot && ot === p)) {
      if ((!p || typeof p != "object") && (p = {}), p = sr(p), lt = // eslint-disable-next-line unicorn/prefer-includes
      rr.indexOf(p.PARSER_MEDIA_TYPE) === -1 ? qt : p.PARSER_MEDIA_TYPE, fe = lt === "application/xhtml+xml" ? Oa : Zn, se = Mt(p, "ALLOWED_TAGS") ? Ae({}, p.ALLOWED_TAGS, fe) : F, E = Mt(p, "ALLOWED_ATTR") ? Ae({}, p.ALLOWED_ATTR, fe) : L, Ht = Mt(p, "ALLOWED_NAMESPACES") ? Ae({}, p.ALLOWED_NAMESPACES, Oa) : ht, $t = Mt(p, "ADD_URI_SAFE_ATTR") ? Ae(sr(Bt), p.ADD_URI_SAFE_ATTR, fe) : Bt, er = Mt(p, "ADD_DATA_URI_TAGS") ? Ae(sr(tr), p.ADD_DATA_URI_TAGS, fe) : tr, De = Mt(p, "FORBID_CONTENTS") ? Ae({}, p.FORBID_CONTENTS, fe) : Pe, h = Mt(p, "FORBID_TAGS") ? Ae({}, p.FORBID_TAGS, fe) : sr({}), ee = Mt(p, "FORBID_ATTR") ? Ae({}, p.FORBID_ATTR, fe) : sr({}), Xe = Mt(p, "USE_PROFILES") ? p.USE_PROFILES : !1, ie = p.ALLOW_ARIA_ATTR !== !1, J = p.ALLOW_DATA_ATTR !== !1, te = p.ALLOW_UNKNOWN_PROTOCOLS || !1, Z = p.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ne = p.SAFE_FOR_TEMPLATES || !1, de = p.SAFE_FOR_XML !== !1, K = p.WHOLE_DOCUMENT || !1, le = p.RETURN_DOM || !1, $e = p.RETURN_DOM_FRAGMENT || !1, ce = p.RETURN_TRUSTED_TYPE || !1, re = p.FORCE_BODY || !1, it = p.SANITIZE_DOM !== !1, He = p.SANITIZE_NAMED_PROPS || !1, H = p.KEEP_CONTENT !== !1, oe = p.IN_PLACE || !1, tt = p.ALLOWED_URI_REGEXP || cs, ut = p.NAMESPACE || nt, vt = p.MATHML_TEXT_INTEGRATION_POINTS || vt, mt = p.HTML_INTEGRATION_POINTS || mt, M = p.CUSTOM_ELEMENT_HANDLING || {}, p.CUSTOM_ELEMENT_HANDLING && nr(p.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (M.tagNameCheck = p.CUSTOM_ELEMENT_HANDLING.tagNameCheck), p.CUSTOM_ELEMENT_HANDLING && nr(p.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (M.attributeNameCheck = p.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), p.CUSTOM_ELEMENT_HANDLING && typeof p.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (M.allowCustomizedBuiltInElements = p.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), ne && (J = !1), $e && (le = !0), Xe && (se = Ae({}, no), E = Gn(null), Xe.html === !0 && (Ae(se, ro), Ae(E, ao)), Xe.svg === !0 && (Ae(se, Na), Ae(E, Ma), Ae(E, Fn)), Xe.svgFilters === !0 && (Ae(se, Da), Ae(E, Ma), Ae(E, Fn)), Xe.mathMl === !0 && (Ae(se, Pa), Ae(E, io), Ae(E, Fn))), Mt(p, "ADD_TAGS") || (C.tagCheck = null), Mt(p, "ADD_ATTR") || (C.attributeCheck = null), p.ADD_TAGS && (typeof p.ADD_TAGS == "function" ? C.tagCheck = p.ADD_TAGS : (se === F && (se = sr(se)), Ae(se, p.ADD_TAGS, fe))), p.ADD_ATTR && (typeof p.ADD_ATTR == "function" ? C.attributeCheck = p.ADD_ATTR : (E === L && (E = sr(E)), Ae(E, p.ADD_ATTR, fe))), p.ADD_URI_SAFE_ATTR && Ae($t, p.ADD_URI_SAFE_ATTR, fe), p.FORBID_CONTENTS && (De === Pe && (De = sr(De)), Ae(De, p.FORBID_CONTENTS, fe)), p.ADD_FORBID_CONTENTS && (De === Pe && (De = sr(De)), Ae(De, p.ADD_FORBID_CONTENTS, fe)), H && (se["#text"] = !0), K && Ae(se, ["html", "head", "body"]), se.table && (Ae(se, ["tbody"]), delete h.tbody), p.TRUSTED_TYPES_POLICY) {
        if (typeof p.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw an('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof p.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw an('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        B = p.TRUSTED_TYPES_POLICY, _ = B.createHTML("");
      } else
        B === void 0 && (B = pc(q, c)), B !== null && typeof _ == "string" && (_ = B.createHTML(""));
      xt && xt(p), ot = p;
    }
  }, Vt = Ae({}, [...Na, ...Da, ...rc]), ar = Ae({}, [...Pa, ...nc]), mr = function(p) {
    let m = Y(p);
    (!m || !m.tagName) && (m = {
      namespaceURI: ut,
      tagName: "template"
    });
    const T = Zn(p.tagName), G = Zn(m.tagName);
    return Ht[p.namespaceURI] ? p.namespaceURI === Tt ? m.namespaceURI === nt ? T === "svg" : m.namespaceURI === pt ? T === "svg" && (G === "annotation-xml" || vt[G]) : !!Vt[T] : p.namespaceURI === pt ? m.namespaceURI === nt ? T === "math" : m.namespaceURI === Tt ? T === "math" && mt[G] : !!ar[T] : p.namespaceURI === nt ? m.namespaceURI === Tt && !mt[G] || m.namespaceURI === pt && !vt[G] ? !1 : !ar[T] && (Me[T] || !Vt[T]) : !!(lt === "application/xhtml+xml" && Ht[p.namespaceURI]) : !1;
  }, at = function(p) {
    rn(t.removed, {
      element: p
    });
    try {
      Y(p).removeChild(p);
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
      if (le || $e)
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
    const G = B ? B.createHTML(p) : p;
    if (ut === nt)
      try {
        m = new j().parseFromString(G, lt);
      } catch {
      }
    if (!m || !m.documentElement) {
      m = ae.createDocument(ut, "template", null);
      try {
        m.documentElement.innerHTML = Wt ? _ : G;
      } catch {
      }
    }
    const ye = m.body || m.documentElement;
    return p && T && ye.insertBefore(r.createTextNode(T), ye.childNodes[0] || null), ut === nt ? Le.call(m, K ? "html" : "body")[0] : K ? m.documentElement : ye;
  }, Lt = function(p) {
    return ke.call(
      p.ownerDocument || p,
      p,
      // eslint-disable-next-line no-bitwise
      g.SHOW_ELEMENT | g.SHOW_COMMENT | g.SHOW_TEXT | g.SHOW_PROCESSING_INSTRUCTION | g.SHOW_CDATA_SECTION,
      null
    );
  }, Ft = function(p) {
    return p instanceof O && (typeof p.nodeName != "string" || typeof p.textContent != "string" || typeof p.removeChild != "function" || !(p.attributes instanceof I) || typeof p.removeAttribute != "function" || typeof p.setAttribute != "function" || typeof p.namespaceURI != "string" || typeof p.insertBefore != "function" || typeof p.hasChildNodes != "function");
  }, jt = function(p) {
    return typeof S == "function" && p instanceof S;
  };
  function Je(p, m, T) {
    Ln(p, (G) => {
      G.call(t, m, T, ot);
    });
  }
  const cr = function(p) {
    let m = null;
    if (Je(ue.beforeSanitizeElements, p, null), Ft(p))
      return at(p), !0;
    const T = fe(p.nodeName);
    if (Je(ue.uponSanitizeElement, p, {
      tagName: T,
      allowedTags: se
    }), de && p.hasChildNodes() && !jt(p.firstElementChild) && kt(/<[/\w!]/g, p.innerHTML) && kt(/<[/\w!]/g, p.textContent) || p.nodeType === sn.progressingInstruction || de && p.nodeType === sn.comment && kt(/<[/\w]/g, p.data))
      return at(p), !0;
    if (!(C.tagCheck instanceof Function && C.tagCheck(T)) && (!se[T] || h[T])) {
      if (!h[T] && ur(T) && (M.tagNameCheck instanceof RegExp && kt(M.tagNameCheck, T) || M.tagNameCheck instanceof Function && M.tagNameCheck(T)))
        return !1;
      if (H && !De[T]) {
        const G = Y(p) || p.parentNode, ye = $(p) || p.childNodes;
        if (ye && G) {
          const ve = ye.length;
          for (let we = ve - 1; we >= 0; --we) {
            const je = w(ye[we], !0);
            je.__removalCount = (p.__removalCount || 0) + 1, G.insertBefore(je, V(p));
          }
        }
      }
      return at(p), !0;
    }
    return p instanceof k && !mr(p) || (T === "noscript" || T === "noembed" || T === "noframes") && kt(/<\/no(script|embed|frames)/i, p.innerHTML) ? (at(p), !0) : (ne && p.nodeType === sn.text && (m = p.textContent, Ln([me, Oe, Ne], (G) => {
      m = nn(m, G, " ");
    }), p.textContent !== m && (rn(t.removed, {
      element: p.cloneNode()
    }), p.textContent = m)), Je(ue.afterSanitizeElements, p, null), !1);
  }, Rt = function(p, m, T) {
    if (ee[m] || it && (m === "id" || m === "name") && (T in r || T in Et))
      return !1;
    if (!(J && !ee[m] && kt(Te, m)) && !(ie && kt(st, m)) && !(C.attributeCheck instanceof Function && C.attributeCheck(m, p))) {
      if (!E[m] || ee[m]) {
        if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(ur(p) && (M.tagNameCheck instanceof RegExp && kt(M.tagNameCheck, p) || M.tagNameCheck instanceof Function && M.tagNameCheck(p)) && (M.attributeNameCheck instanceof RegExp && kt(M.attributeNameCheck, m) || M.attributeNameCheck instanceof Function && M.attributeNameCheck(m, p)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          m === "is" && M.allowCustomizedBuiltInElements && (M.tagNameCheck instanceof RegExp && kt(M.tagNameCheck, T) || M.tagNameCheck instanceof Function && M.tagNameCheck(T)))
        ) return !1;
      } else if (!$t[m] && !kt(tt, nn(T, Re, "")) && !((m === "src" || m === "xlink:href" || m === "href") && p !== "script" && Ql(T, "data:") === 0 && er[p]) && !(te && !kt(Fe, nn(T, Re, ""))) && T)
        return !1;
    }
    return !0;
  }, ur = function(p) {
    return p !== "annotation-xml" && Ia(p, We);
  }, Yt = function(p) {
    Je(ue.beforeSanitizeAttributes, p, null);
    const {
      attributes: m
    } = p;
    if (!m || Ft(p))
      return;
    const T = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: E,
      forceKeepAttr: void 0
    };
    let G = m.length;
    for (; G--; ) {
      const ye = m[G], {
        name: ve,
        namespaceURI: we,
        value: je
      } = ye, Ze = fe(ve), gt = je;
      let Ke = ve === "value" ? gt : Jl(gt);
      if (T.attrName = Ze, T.attrValue = Ke, T.keepAttr = !0, T.forceKeepAttr = void 0, Je(ue.uponSanitizeAttribute, p, T), Ke = T.attrValue, He && (Ze === "id" || Ze === "name") && (ct(ve, p), Ke = Se + Ke), de && kt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Ke)) {
        ct(ve, p);
        continue;
      }
      if (Ze === "attributename" && Ia(Ke, "href")) {
        ct(ve, p);
        continue;
      }
      if (T.forceKeepAttr)
        continue;
      if (!T.keepAttr) {
        ct(ve, p);
        continue;
      }
      if (!Z && kt(/\/>/i, Ke)) {
        ct(ve, p);
        continue;
      }
      ne && Ln([me, Oe, Ne], (Ot) => {
        Ke = nn(Ke, Ot, " ");
      });
      const Be = fe(p.nodeName);
      if (!Rt(Be, Ze, Ke)) {
        ct(ve, p);
        continue;
      }
      if (B && typeof q == "object" && typeof q.getAttributeType == "function" && !we)
        switch (q.getAttributeType(Be, Ze)) {
          case "TrustedHTML": {
            Ke = B.createHTML(Ke);
            break;
          }
          case "TrustedScriptURL": {
            Ke = B.createScriptURL(Ke);
            break;
          }
        }
      if (Ke !== gt)
        try {
          we ? p.setAttributeNS(we, ve, Ke) : p.setAttribute(ve, Ke), Ft(p) ? at(p) : to(t.removed);
        } catch {
          ct(ve, p);
        }
    }
    Je(ue.afterSanitizeAttributes, p, null);
  }, ir = function p(m) {
    let T = null;
    const G = Lt(m);
    for (Je(ue.beforeSanitizeShadowDOM, m, null); T = G.nextNode(); )
      Je(ue.uponSanitizeShadowNode, T, null), cr(T), Yt(T), T.content instanceof u && p(T.content);
    Je(ue.afterSanitizeShadowDOM, m, null);
  };
  return t.sanitize = function(p) {
    let m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, T = null, G = null, ye = null, ve = null;
    if (Wt = !p, Wt && (p = "<!-->"), typeof p != "string" && !jt(p))
      if (typeof p.toString == "function") {
        if (p = p.toString(), typeof p != "string")
          throw an("dirty is not a string, aborting");
      } else
        throw an("toString is not a function");
    if (!t.isSupported)
      return p;
    if (ge || At(m), t.removed = [], typeof p == "string" && (oe = !1), oe) {
      if (p.nodeName) {
        const Ze = fe(p.nodeName);
        if (!se[Ze] || h[Ze])
          throw an("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (p instanceof S)
      T = lr("<!---->"), G = T.ownerDocument.importNode(p, !0), G.nodeType === sn.element && G.nodeName === "BODY" || G.nodeName === "HTML" ? T = G : T.appendChild(G);
    else {
      if (!le && !ne && !K && // eslint-disable-next-line unicorn/prefer-includes
      p.indexOf("<") === -1)
        return B && ce ? B.createHTML(p) : p;
      if (T = lr(p), !T)
        return le ? null : ce ? _ : "";
    }
    T && re && at(T.firstChild);
    const we = Lt(oe ? p : T);
    for (; ye = we.nextNode(); )
      cr(ye), Yt(ye), ye.content instanceof u && ir(ye.content);
    if (oe)
      return p;
    if (le) {
      if ($e)
        for (ve = Ie.call(T.ownerDocument); T.firstChild; )
          ve.appendChild(T.firstChild);
      else
        ve = T;
      return (E.shadowroot || E.shadowrootmode) && (ve = Ge.call(i, ve, !0)), ve;
    }
    let je = K ? T.outerHTML : T.innerHTML;
    return K && se["!doctype"] && T.ownerDocument && T.ownerDocument.doctype && T.ownerDocument.doctype.name && kt(us, T.ownerDocument.doctype.name) && (je = "<!DOCTYPE " + T.ownerDocument.doctype.name + `>
` + je), ne && Ln([me, Oe, Ne], (Ze) => {
      je = nn(je, Ze, " ");
    }), B && ce ? B.createHTML(je) : je;
  }, t.setConfig = function() {
    let p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    At(p), ge = !0;
  }, t.clearConfig = function() {
    ot = null, ge = !1;
  }, t.isValidAttribute = function(p, m, T) {
    ot || At({});
    const G = fe(p), ye = fe(m);
    return Rt(G, ye, T);
  }, t.addHook = function(p, m) {
    typeof m == "function" && rn(ue[p], m);
  }, t.removeHook = function(p, m) {
    if (m !== void 0) {
      const T = Xl(ue[p], m);
      return T === -1 ? void 0 : Kl(ue[p], T, 1)[0];
    }
    return to(ue[p]);
  }, t.removeHooks = function(p) {
    ue[p] = [];
  }, t.removeAllHooks = function() {
    ue = so();
  }, t;
}
var lo = ds();
let jn = null;
function hc() {
  return jn || (typeof window < "u" ? jn = lo(window) : jn = lo), jn;
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
  component: S = ""
}) => {
  const { dataLayer: k } = window, g = {
    event: e.toLowerCase(),
    action: t.toLowerCase(),
    name: r.toLowerCase(),
    type: i.toLowerCase(),
    region: y.toLowerCase(),
    section: c.toLowerCase(),
    text: u.toLowerCase(),
    component: S.toLowerCase()
  };
  k && k.push(g);
}, gn = ({ children: e }) => /* @__PURE__ */ W.jsx(W.Fragment, { children: e });
gn.propTypes = {
  children: o.oneOfType([
    o.arrayOf(o.node),
    o.node,
    o.string
  ])
};
var co = { exports: {} }, uo;
function gc() {
  return uo || (uo = 1, function(e) {
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
  }(co)), co.exports;
}
var yc = gc();
const Qt = /* @__PURE__ */ oi(yc);
({
  ...gn.propTypes
});
const fs = ({ children: e, className: t = "container", ...r }) => /* @__PURE__ */ W.jsx("div", { className: t, ...r, children: /* @__PURE__ */ W.jsx("div", { className: "row", children: e }) });
fs.propTypes = {
  children: gn.propTypes.children
};
({
  ...fs.propTypes
});
gn.propTypes.children, o.oneOf(["0", "3", "4", "6", "8", "9", "12"]);
gn.propTypes.children;
const bc = o.shape({
  url: o.string,
  altText: o.string,
  cssClass: o.arrayOf(o.string),
  size: o.oneOf(["small", "medium", "large"])
}), La = o.shape({
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
}), si = o.shape({
  text: o.string,
  name: o.string,
  event: o.string,
  action: o.string,
  type: o.string,
  region: o.string,
  section: o.string,
  component: o.string
});
var br = {}, Or = {}, fo;
function vc() {
  if (fo) return Or;
  fo = 1;
  var e = ft;
  function t(n) {
    for (var l = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, f = 1; f < arguments.length; f++) l += "&args[]=" + encodeURIComponent(arguments[f]);
    return "Minified React error #" + n + "; visit " + l + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var r = Object.prototype.hasOwnProperty, i = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, c = {}, u = {};
  function y(n) {
    return r.call(u, n) ? !0 : r.call(c, n) ? !1 : i.test(n) ? u[n] = !0 : (c[n] = !0, !1);
  }
  function S(n, l, f, v, D, A, z) {
    this.acceptsBooleans = l === 2 || l === 3 || l === 4, this.attributeName = v, this.attributeNamespace = D, this.mustUseProperty = f, this.propertyName = n, this.type = l, this.sanitizeURL = A, this.removeEmptyString = z;
  }
  var k = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    k[n] = new S(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var l = n[0];
    k[l] = new S(l, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    k[n] = new S(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    k[n] = new S(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    k[n] = new S(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    k[n] = new S(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    k[n] = new S(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    k[n] = new S(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    k[n] = new S(n, 5, !1, n.toLowerCase(), null, !1, !1);
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
    k[l] = new S(l, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var l = n.replace(g, I);
    k[l] = new S(l, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var l = n.replace(g, I);
    k[l] = new S(l, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    k[n] = new S(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), k.xlinkHref = new S("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    k[n] = new S(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  var O = {
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
  }, j = ["Webkit", "ms", "Moz", "O"];
  Object.keys(O).forEach(function(n) {
    j.forEach(function(l) {
      l = l + n.charAt(0).toUpperCase() + n.substring(1), O[l] = O[n];
    });
  });
  var q = /["'&<>]/;
  function x(n) {
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
  var w = /([A-Z])/g, P = /^ms-/, V = Array.isArray;
  function $(n, l) {
    return { insertionMode: n, selectedValue: l };
  }
  function Y(n, l, f) {
    switch (l) {
      case "select":
        return $(1, f.value != null ? f.value : f.defaultValue);
      case "svg":
        return $(2, null);
      case "math":
        return $(3, null);
      case "foreignObject":
        return $(1, null);
      case "table":
        return $(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return $(5, null);
      case "colgroup":
        return $(7, null);
      case "tr":
        return $(6, null);
    }
    return 4 <= n.insertionMode || n.insertionMode === 0 ? $(1, null) : n;
  }
  var B = /* @__PURE__ */ new Map();
  function _(n, l, f) {
    if (typeof f != "object") throw Error(t(62));
    l = !0;
    for (var v in f) if (r.call(f, v)) {
      var D = f[v];
      if (D != null && typeof D != "boolean" && D !== "") {
        if (v.indexOf("--") === 0) {
          var A = x(v);
          D = x(("" + D).trim());
        } else {
          A = v;
          var z = B.get(A);
          z !== void 0 || (z = x(A.replace(w, "-$1").toLowerCase().replace(P, "-ms-")), B.set(A, z)), A = z, D = typeof D == "number" ? D === 0 || r.call(O, v) ? "" + D : D + "px" : x(("" + D).trim());
        }
        l ? (l = !1, n.push(' style="', A, ":", D)) : n.push(";", A, ":", D);
      }
    }
    l || n.push('"');
  }
  function ae(n, l, f, v) {
    switch (f) {
      case "style":
        _(n, l, v);
        return;
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
        return;
    }
    if (!(2 < f.length) || f[0] !== "o" && f[0] !== "O" || f[1] !== "n" && f[1] !== "N") {
      if (l = k.hasOwnProperty(f) ? k[f] : null, l !== null) {
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
            v === !0 ? n.push(" ", f, '=""') : v !== !1 && n.push(" ", f, '="', x(v), '"');
            break;
          case 5:
            isNaN(v) || n.push(" ", f, '="', x(v), '"');
            break;
          case 6:
            !isNaN(v) && 1 <= v && n.push(" ", f, '="', x(v), '"');
            break;
          default:
            l.sanitizeURL && (v = "" + v), n.push(" ", f, '="', x(v), '"');
        }
      } else if (y(f)) {
        switch (typeof v) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (l = f.toLowerCase().slice(0, 5), l !== "data-" && l !== "aria-") return;
        }
        n.push(" ", f, '="', x(v), '"');
      }
    }
  }
  function ke(n, l, f) {
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
  function Le(n, l, f, v) {
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
    return n.push(">"), ke(n, D, f), typeof f == "string" ? (n.push(x(f)), null) : f;
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
  function Oe(n, l, f, v, D) {
    switch (l) {
      case "select":
        n.push(me("select"));
        var A = null, z = null;
        for (_e in f) if (r.call(f, _e)) {
          var Q = f[_e];
          if (Q != null) switch (_e) {
            case "children":
              A = Q;
              break;
            case "dangerouslySetInnerHTML":
              z = Q;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              ae(n, v, _e, Q);
          }
        }
        return n.push(">"), ke(n, z, A), A;
      case "option":
        z = D.selectedValue, n.push(me("option"));
        var pe = Q = null, be = null, _e = null;
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
              _e = rt;
              break;
            case "value":
              pe = rt;
            default:
              ae(n, v, A, rt);
          }
        }
        if (z != null) if (f = pe !== null ? "" + pe : Ie(Q), V(z)) {
          for (v = 0; v < z.length; v++)
            if ("" + z[v] === f) {
              n.push(' selected=""');
              break;
            }
        } else "" + z === f && n.push(' selected=""');
        else be && n.push(' selected=""');
        return n.push(">"), ke(n, _e, Q), Q;
      case "textarea":
        n.push(me("textarea")), _e = z = A = null;
        for (Q in f) if (r.call(f, Q) && (pe = f[Q], pe != null)) switch (Q) {
          case "children":
            _e = pe;
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
              Q,
              pe
            );
        }
        if (A === null && z !== null && (A = z), n.push(">"), _e != null) {
          if (A != null) throw Error(t(92));
          if (V(_e) && 1 < _e.length) throw Error(t(93));
          A = "" + _e;
        }
        return typeof A == "string" && A[0] === `
` && n.push(`
`), A !== null && n.push(x("" + A)), null;
      case "input":
        n.push(me("input")), pe = _e = Q = A = null;
        for (z in f) if (r.call(f, z) && (be = f[z], be != null)) switch (z) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, "input"));
          case "defaultChecked":
            pe = be;
            break;
          case "defaultValue":
            Q = be;
            break;
          case "checked":
            _e = be;
            break;
          case "value":
            A = be;
            break;
          default:
            ae(n, v, z, be);
        }
        return _e !== null ? ae(n, v, "checked", _e) : pe !== null && ae(n, v, "checked", pe), A !== null ? ae(n, v, "value", A) : Q !== null && ae(n, v, "value", Q), n.push("/>"), null;
      case "menuitem":
        n.push(me("menuitem"));
        for (var Gt in f) if (r.call(f, Gt) && (A = f[Gt], A != null)) switch (Gt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            ae(n, v, Gt, A);
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
        for (pe in f) if (r.call(f, pe) && (Q = f[pe], Q != null)) switch (pe) {
          case "children":
            A = Q;
            break;
          case "dangerouslySetInnerHTML":
            z = Q;
            break;
          default:
            ae(n, v, pe, Q);
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
        for (var Zt in f) if (r.call(f, Zt) && (A = f[Zt], A != null)) switch (Zt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, l));
          default:
            ae(n, v, Zt, A);
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
        return Le(
          n,
          f,
          l,
          v
        );
      case "html":
        return D.insertionMode === 0 && n.push("<!DOCTYPE html>"), Le(n, f, l, v);
      default:
        if (l.indexOf("-") === -1 && typeof f.is != "string") return Le(n, f, l, v);
        n.push(me(l)), z = A = null;
        for (be in f) if (r.call(f, be) && (Q = f[be], Q != null)) switch (be) {
          case "children":
            A = Q;
            break;
          case "dangerouslySetInnerHTML":
            z = Q;
            break;
          case "style":
            _(n, v, Q);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            y(be) && typeof Q != "function" && typeof Q != "symbol" && n.push(" ", be, '="', x(Q), '"');
        }
        return n.push(">"), ke(n, z, A), A;
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
  var Fe = /[<\u2028\u2029]/g;
  function Re(n) {
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
  function We(n, l) {
    return l = l === void 0 ? "" : l, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: l + "P:", segmentPrefix: l + "S:", boundaryPrefix: l + "B:", idPrefix: l, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: n };
  }
  function tt(n, l, f, v) {
    return f.generateStaticMarkup ? (n.push(x(l)), !1) : (l === "" ? n = v : (v && n.push("<!-- -->"), n.push(x(l)), n = !0), n);
  }
  var se = Object.assign, F = Symbol.for("react.element"), E = Symbol.for("react.portal"), L = Symbol.for("react.fragment"), M = Symbol.for("react.strict_mode"), h = Symbol.for("react.profiler"), ee = Symbol.for("react.provider"), C = Symbol.for("react.context"), ie = Symbol.for("react.forward_ref"), J = Symbol.for("react.suspense"), te = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), ne = Symbol.for("react.lazy"), de = Symbol.for("react.scope"), K = Symbol.for("react.debug_trace_mode"), ge = Symbol.for("react.legacy_hidden"), re = Symbol.for("react.default_value"), le = Symbol.iterator;
  function $e(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case L:
        return "Fragment";
      case E:
        return "Portal";
      case h:
        return "Profiler";
      case M:
        return "StrictMode";
      case J:
        return "Suspense";
      case te:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case C:
        return (n.displayName || "Context") + ".Consumer";
      case ee:
        return (n._context.displayName || "Context") + ".Provider";
      case ie:
        var l = n.render;
        return n = n.displayName, n || (n = l.displayName || l.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case Z:
        return l = n.displayName || null, l !== null ? l : $e(n.type) || "Memo";
      case ne:
        l = n._payload, n = n._init;
        try {
          return $e(n(l));
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
  var He = null;
  function Se(n, l) {
    if (n !== l) {
      n.context._currentValue2 = n.parentValue, n = n.parent;
      var f = l.parent;
      if (n === null) {
        if (f !== null) throw Error(t(401));
      } else {
        if (f === null) throw Error(t(401));
        Se(n, f);
      }
      l.context._currentValue2 = l.value;
    }
  }
  function H(n) {
    n.context._currentValue2 = n.parentValue, n = n.parent, n !== null && H(n);
  }
  function oe(n) {
    var l = n.parent;
    l !== null && oe(l), n.context._currentValue2 = n.value;
  }
  function Xe(n, l) {
    if (n.context._currentValue2 = n.parentValue, n = n.parent, n === null) throw Error(t(402));
    n.depth === l.depth ? Se(n, l) : Xe(n, l);
  }
  function De(n, l) {
    var f = l.parent;
    if (f === null) throw Error(t(402));
    n.depth === f.depth ? Se(n, f) : De(n, f), l.context._currentValue2 = l.value;
  }
  function Pe(n) {
    var l = He;
    l !== n && (l === null ? oe(n) : n === null ? H(l) : l.depth === n.depth ? Se(l, n) : l.depth > n.depth ? Xe(l, n) : De(l, n), He = n);
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
        var Q = l[z];
        Q = typeof Q == "function" ? Q.call(n, A, f, v) : Q, Q != null && (D ? (D = !1, A = se({}, A, Q)) : se(A, Q));
      }
      n.state = A;
    }
    else A.queue = null;
  }
  var $t = { id: 1, overflow: "" };
  function Bt(n, l, f) {
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
  function Wt(n, l) {
    return n === l && (n !== 0 || 1 / n === 1 / l) || n !== n && l !== l;
  }
  var Ht = typeof Object.is == "function" ? Object.is : Wt, ht = null, vt = null, mt = null, Me = null, lt = !1, rr = !1, qt = 0, fe = null, ot = 0;
  function Et() {
    if (ht === null) throw Error(t(321));
    return ht;
  }
  function nr() {
    if (0 < ot) throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function At() {
    return Me === null ? mt === null ? (lt = !1, mt = Me = nr()) : (lt = !0, Me = mt) : Me.next === null ? (lt = !1, Me = Me.next = nr()) : (lt = !0, Me = Me.next), Me;
  }
  function Vt() {
    vt = ht = null, rr = !1, mt = null, ot = 0, Me = fe = null;
  }
  function ar(n, l) {
    return typeof l == "function" ? l(n) : l;
  }
  function mr(n, l, f) {
    if (ht = Et(), Me = At(), lt) {
      var v = Me.queue;
      if (l = v.dispatch, fe !== null && (f = fe.get(v), f !== void 0)) {
        fe.delete(v), v = Me.memoizedState;
        do
          v = n(v, f.action), f = f.next;
        while (f !== null);
        return Me.memoizedState = v, [v, l];
      }
      return [Me.memoizedState, l];
    }
    return n = n === ar ? typeof l == "function" ? l() : l : f !== void 0 ? f(l) : l, Me.memoizedState = n, n = Me.queue = { last: null, dispatch: null }, n = n.dispatch = ct.bind(null, ht, n), [Me.memoizedState, n];
  }
  function at(n, l) {
    if (ht = Et(), Me = At(), l = l === void 0 ? null : l, Me !== null) {
      var f = Me.memoizedState;
      if (f !== null && l !== null) {
        var v = f[1];
        e: if (v === null) v = !1;
        else {
          for (var D = 0; D < v.length && D < l.length; D++) if (!Ht(l[D], v[D])) {
            v = !1;
            break e;
          }
          v = !0;
        }
        if (v) return f[0];
      }
    }
    return n = n(), Me.memoizedState = [n, l], n;
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
  function Lt() {
  }
  var Ft = { readContext: function(n) {
    return n._currentValue2;
  }, useContext: function(n) {
    return Et(), n._currentValue2;
  }, useMemo: at, useReducer: mr, useRef: function(n) {
    ht = Et(), Me = At();
    var l = Me.memoizedState;
    return l === null ? (n = { current: n }, Me.memoizedState = n) : l;
  }, useState: function(n) {
    return mr(ar, n);
  }, useInsertionEffect: Lt, useLayoutEffect: function() {
  }, useCallback: function(n, l) {
    return at(function() {
      return n;
    }, l);
  }, useImperativeHandle: Lt, useEffect: Lt, useDebugValue: Lt, useDeferredValue: function(n) {
    return Et(), n;
  }, useTransition: function() {
    return Et(), [
      !1,
      lr
    ];
  }, useId: function() {
    var n = vt.treeContext, l = n.overflow;
    n = n.id, n = (n & ~(1 << 32 - pt(n) - 1)).toString(32) + l;
    var f = jt;
    if (f === null) throw Error(t(404));
    return l = qt++, n = ":" + f.idPrefix + "R" + n, 0 < l && (n += "H" + l.toString(32)), n + ":";
  }, useMutableSource: function(n, l) {
    return Et(), l(n._source);
  }, useSyncExternalStore: function(n, l, f) {
    if (f === void 0) throw Error(t(407));
    return f();
  } }, jt = null, Je = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function cr(n) {
    return console.error(n), null;
  }
  function Rt() {
  }
  function ur(n, l, f, v, D, A, z, Q, pe) {
    var be = [], _e = /* @__PURE__ */ new Set();
    return l = { destination: null, responseState: l, progressiveChunkSize: v, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: _e, pingedTasks: be, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: D === void 0 ? cr : D, onAllReady: Rt, onShellReady: z === void 0 ? Rt : z, onShellError: Rt, onFatalError: Rt }, f = ir(l, 0, null, f, !1, !1), f.parentFlushed = !0, n = Yt(l, n, null, f, _e, ce, null, $t), be.push(n), l;
  }
  function Yt(n, l, f, v, D, A, z, Q) {
    n.allPendingTasks++, f === null ? n.pendingRootTasks++ : f.pendingTasks++;
    var pe = { node: l, ping: function() {
      var be = n.pingedTasks;
      be.push(pe), be.length === 1 && xr(n);
    }, blockedBoundary: f, blockedSegment: v, abortSet: D, legacyContext: A, context: z, treeContext: Q };
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
    for (ht = {}, vt = l, qt = 0, n = f(v, D); rr; ) rr = !1, qt = 0, ot += 1, Me = null, n = f(v, D);
    return Vt(), n;
  }
  function G(n, l, f, v) {
    var D = f.render(), A = v.childContextTypes;
    if (A != null) {
      var z = l.legacyContext;
      if (typeof f.getChildContext != "function") v = z;
      else {
        f = f.getChildContext();
        for (var Q in f) if (!(Q in A)) throw Error(t(108, $e(v) || "Unknown", Q));
        v = se({}, z, f);
      }
      l.legacyContext = v, we(n, l, D), l.legacyContext = z;
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
      var A = f.contextType;
      A = new f(v, typeof A == "object" && A !== null ? A._currentValue2 : D), tr(A, f, v, D), G(n, l, A, f);
    } else {
      A = it(f, l.legacyContext), D = T(n, l, f, v, A);
      var z = qt !== 0;
      if (typeof D == "object" && D !== null && typeof D.render == "function" && D.$$typeof === void 0) tr(D, f, v, A), G(n, l, D, f);
      else if (z) {
        v = l.treeContext, l.treeContext = Bt(v, 1, 0);
        try {
          we(n, l, D);
        } finally {
          l.treeContext = v;
        }
      } else we(n, l, D);
    }
    else if (typeof f == "string") {
      switch (D = l.blockedSegment, A = Oe(D.chunks, f, v, n.responseState, D.formatContext), D.lastPushedText = !1, z = D.formatContext, D.formatContext = Y(z, f, v), Ze(n, l, A), D.formatContext = z, f) {
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
        case K:
        case M:
        case h:
        case L:
          we(n, l, v.children);
          return;
        case te:
          we(n, l, v.children);
          return;
        case de:
          throw Error(t(343));
        case J:
          e: {
            f = l.blockedBoundary, D = l.blockedSegment, A = v.fallback, v = v.children, z = /* @__PURE__ */ new Set();
            var Q = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: z, errorDigest: null }, pe = ir(n, D.chunks.length, Q, D.formatContext, !1, !1);
            D.children.push(pe), D.lastPushedText = !1;
            var be = ir(n, 0, null, D.formatContext, !1, !1);
            be.parentFlushed = !0, l.blockedBoundary = Q, l.blockedSegment = be;
            try {
              if (Ze(
                n,
                l,
                v
              ), n.responseState.generateStaticMarkup || be.lastPushedText && be.textEmbedded && be.chunks.push("<!-- -->"), be.status = 1, Be(Q, be), Q.pendingTasks === 0) break e;
            } catch (_e) {
              be.status = 4, Q.forceClientRender = !0, Q.errorDigest = p(n, _e);
            } finally {
              l.blockedBoundary = f, l.blockedSegment = D;
            }
            l = Yt(n, A, f, pe, z, l.legacyContext, l.context, l.treeContext), n.pingedTasks.push(l);
          }
          return;
      }
      if (typeof f == "object" && f !== null) switch (f.$$typeof) {
        case ie:
          if (v = T(n, l, f.render, v, D), qt !== 0) {
            f = l.treeContext, l.treeContext = Bt(f, 1, 0);
            try {
              we(n, l, v);
            } finally {
              l.treeContext = f;
            }
          } else we(n, l, v);
          return;
        case Z:
          f = f.type, v = ye(f, v), ve(n, l, f, v, D);
          return;
        case ee:
          if (D = v.children, f = f._context, v = v.value, A = f._currentValue2, f._currentValue2 = v, z = He, He = v = { parent: z, depth: z === null ? 0 : z.depth + 1, context: f, parentValue: A, value: v }, l.context = v, we(n, l, D), n = He, n === null) throw Error(t(403));
          v = n.parentValue, n.context._currentValue2 = v === re ? n.context._defaultValue : v, n = He = n.parent, l.context = n;
          return;
        case C:
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
        case F:
          ve(n, l, f.type, f.props, f.ref);
          return;
        case E:
          throw Error(t(257));
        case ne:
          var v = f._init;
          f = v(f._payload), we(n, l, f);
          return;
      }
      if (V(f)) {
        je(n, l, f);
        return;
      }
      if (f === null || typeof f != "object" ? v = null : (v = le && f[le] || f["@@iterator"], v = typeof v == "function" ? v : null), v && (v = v.call(f))) {
        if (f = v.next(), !f.done) {
          var D = [];
          do
            D.push(f.value), f = v.next();
          while (!f.done);
          je(n, l, D);
        }
        return;
      }
      throw n = Object.prototype.toString.call(f), Error(t(31, n === "[object Object]" ? "object with keys {" + Object.keys(f).join(", ") + "}" : n));
    }
    typeof f == "string" ? (v = l.blockedSegment, v.lastPushedText = tt(l.blockedSegment.chunks, f, n.responseState, v.lastPushedText)) : typeof f == "number" && (v = l.blockedSegment, v.lastPushedText = tt(l.blockedSegment.chunks, "" + f, n.responseState, v.lastPushedText));
  }
  function je(n, l, f) {
    for (var v = f.length, D = 0; D < v; D++) {
      var A = l.treeContext;
      l.treeContext = Bt(A, v, D);
      try {
        Ze(n, l, f[D]);
      } finally {
        l.treeContext = A;
      }
    }
  }
  function Ze(n, l, f) {
    var v = l.blockedSegment.formatContext, D = l.legacyContext, A = l.context;
    try {
      return we(n, l, f);
    } catch (pe) {
      if (Vt(), typeof pe == "object" && pe !== null && typeof pe.then == "function") {
        f = pe;
        var z = l.blockedSegment, Q = ir(n, z.chunks.length, null, z.formatContext, z.lastPushedText, !0);
        z.children.push(Q), z.lastPushedText = !1, n = Yt(n, l.node, l.blockedBoundary, Q, l.abortSet, l.legacyContext, l.context, l.treeContext).ping, f.then(n, n), l.blockedSegment.formatContext = v, l.legacyContext = D, l.context = A, Pe(A);
      } else throw l.blockedSegment.formatContext = v, l.legacyContext = D, l.context = A, Pe(A), pe;
    }
  }
  function gt(n) {
    var l = n.blockedBoundary;
    n = n.blockedSegment, n.status = 3, Ot(this, l, n);
  }
  function Ke(n, l, f) {
    var v = n.blockedBoundary;
    n.blockedSegment.status = 3, v === null ? (l.allPendingTasks--, l.status !== 2 && (l.status = 2, l.destination !== null && l.destination.push(null))) : (v.pendingTasks--, v.forceClientRender || (v.forceClientRender = !0, n = f === void 0 ? Error(t(432)) : f, v.errorDigest = l.onError(n), v.parentFlushed && l.clientRenderedBoundaries.push(v)), v.fallbackAbortableTasks.forEach(function(D) {
      return Ke(D, l, f);
    }), v.fallbackAbortableTasks.clear(), l.allPendingTasks--, l.allPendingTasks === 0 && (v = l.onAllReady, v()));
  }
  function Be(n, l) {
    if (l.chunks.length === 0 && l.children.length === 1 && l.children[0].boundary === null) {
      var f = l.children[0];
      f.id = l.id, f.parentFlushed = !0, f.status === 1 && Be(n, f);
    } else n.completedSegments.push(l);
  }
  function Ot(n, l, f) {
    if (l === null) {
      if (f.parentFlushed) {
        if (n.completedRootSegment !== null) throw Error(t(389));
        n.completedRootSegment = f;
      }
      n.pendingRootTasks--, n.pendingRootTasks === 0 && (n.onShellError = Rt, l = n.onShellReady, l());
    } else l.pendingTasks--, l.forceClientRender || (l.pendingTasks === 0 ? (f.parentFlushed && f.status === 1 && Be(l, f), l.parentFlushed && n.completedBoundaries.push(l), l.fallbackAbortableTasks.forEach(gt, n), l.fallbackAbortableTasks.clear()) : f.parentFlushed && f.status === 1 && (Be(l, f), l.completedSegments.length === 1 && l.parentFlushed && n.partialBoundaries.push(l)));
    n.allPendingTasks--, n.allPendingTasks === 0 && (n = n.onAllReady, n());
  }
  function xr(n) {
    if (n.status !== 2) {
      var l = He, f = Je.current;
      Je.current = Ft;
      var v = jt;
      jt = n.responseState;
      try {
        var D = n.pingedTasks, A;
        for (A = 0; A < D.length; A++) {
          var z = D[A], Q = n, pe = z.blockedSegment;
          if (pe.status === 0) {
            Pe(z.context);
            try {
              we(Q, z, z.node), Q.responseState.generateStaticMarkup || pe.lastPushedText && pe.textEmbedded && pe.chunks.push("<!-- -->"), z.abortSet.delete(z), pe.status = 1, Ot(Q, z.blockedBoundary, pe);
            } catch (It) {
              if (Vt(), typeof It == "object" && It !== null && typeof It.then == "function") {
                var be = z.ping;
                It.then(be, be);
              } else {
                z.abortSet.delete(z), pe.status = 4;
                var _e = z.blockedBoundary, rt = It, Gt = p(Q, rt);
                if (_e === null ? m(Q, rt) : (_e.pendingTasks--, _e.forceClientRender || (_e.forceClientRender = !0, _e.errorDigest = Gt, _e.parentFlushed && Q.clientRenderedBoundaries.push(_e))), Q.allPendingTasks--, Q.allPendingTasks === 0) {
                  var Zt = Q.onAllReady;
                  Zt();
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
        jt = v, Je.current = f, f === Ft && Pe(l);
      }
    }
  }
  function Cr(n, l, f) {
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
    if (v === null) return Cr(n, l, f);
    if (v.parentFlushed = !0, v.forceClientRender) return n.responseState.generateStaticMarkup || (v = v.errorDigest, l.push("<!--$!-->"), l.push("<template"), v && (l.push(' data-dgst="'), v = x(v), l.push(v), l.push('"')), l.push("></template>")), Cr(n, l, f), n = n.responseState.generateStaticMarkup ? !0 : l.push("<!--/$-->"), n;
    if (0 < v.pendingTasks) {
      v.rootSegmentID = n.nextSegmentId++, 0 < v.completedSegments.length && n.partialBoundaries.push(v);
      var D = n.responseState, A = D.nextSuspenseID++;
      return D = D.boundaryPrefix + A.toString(16), v = v.id = D, Ne(l, n.responseState, v), Cr(n, l, f), l.push("<!--/$-->");
    }
    if (v.byteSize > n.progressiveChunkSize) return v.rootSegmentID = n.nextSegmentId++, n.completedBoundaries.push(v), Ne(l, n.responseState, v.id), Cr(n, l, f), l.push("<!--/$-->");
    if (n.responseState.generateStaticMarkup || l.push("<!--$-->"), f = v.completedSegments, f.length !== 1) throw Error(t(391));
    return Tr(n, l, f[0]), n = n.responseState.generateStaticMarkup ? !0 : l.push("<!--/$-->"), n;
  }
  function Ur(n, l, f) {
    return Te(l, n.responseState, f.formatContext, f.id), Tr(n, l, f), st(l, f.formatContext);
  }
  function $r(n, l, f) {
    for (var v = f.completedSegments, D = 0; D < v.length; D++) Br(n, l, f, v[D]);
    if (v.length = 0, n = n.responseState, v = f.id, f = f.rootSegmentID, l.push(n.startInlineScript), n.sentCompleteBoundaryFunction ? l.push('$RC("') : (n.sentCompleteBoundaryFunction = !0, l.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), v === null) throw Error(t(395));
    return f = f.toString(16), l.push(v), l.push('","'), l.push(n.segmentPrefix), l.push(f), l.push('")<\/script>');
  }
  function Br(n, l, f, v) {
    if (v.status === 2) return !0;
    var D = v.id;
    if (D === -1) {
      if ((v.id = f.rootSegmentID) === -1) throw Error(t(392));
      return Ur(n, l, v);
    }
    return Ur(n, l, v), n = n.responseState, l.push(n.startInlineScript), n.sentCompleteSegmentFunction ? l.push('$RS("') : (n.sentCompleteSegmentFunction = !0, l.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), l.push(n.segmentPrefix), D = D.toString(16), l.push(D), l.push('","'), l.push(n.placeholderPrefix), l.push(D), l.push('")<\/script>');
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
        var Q = n.responseState, pe = z.id, be = z.errorDigest, _e = z.errorMessage, rt = z.errorComponentStack;
        if (v.push(Q.startInlineScript), Q.sentClientRenderFunction ? v.push('$RX("') : (Q.sentClientRenderFunction = !0, v.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), pe === null) throw Error(t(395));
        if (v.push(pe), v.push('"'), be || _e || rt) {
          v.push(",");
          var Gt = Re(be || "");
          v.push(Gt);
        }
        if (_e || rt) {
          v.push(",");
          var Zt = Re(_e || "");
          v.push(Zt);
        }
        if (rt) {
          v.push(",");
          var It = Re(rt);
          v.push(It);
        }
        if (!v.push(")<\/script>")) {
          n.destination = null, A++, D.splice(0, A);
          return;
        }
      }
      D.splice(0, A);
      var Er = n.completedBoundaries;
      for (A = 0; A < Er.length; A++) if (!$r(n, l, Er[A])) {
        n.destination = null, A++, Er.splice(0, A);
        return;
      }
      Er.splice(0, A);
      var dr = n.partialBoundaries;
      for (A = 0; A < dr.length; A++) {
        var Hr = dr[A];
        e: {
          D = n, z = l;
          var Ar = Hr.completedSegments;
          for (Q = 0; Q < Ar.length; Q++) if (!Br(D, z, Hr, Ar[Q])) {
            Q++, Ar.splice(0, Q);
            var kn = !1;
            break e;
          }
          Ar.splice(0, Q), kn = !0;
        }
        if (!kn) {
          n.destination = null, A++, dr.splice(0, A);
          return;
        }
      }
      dr.splice(0, A);
      var gr = n.completedBoundaries;
      for (A = 0; A < gr.length; A++) if (!$r(n, l, gr[A])) {
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
        return Ke(v, n, l);
      }), f.clear(), n.destination !== null && Dr(n, n.destination);
    } catch (v) {
      p(n, v), m(n, v);
    }
  }
  function wn() {
  }
  function Wr(n, l, f, v) {
    var D = !1, A = null, z = "", Q = { push: function(be) {
      return be !== null && (z += be), !0;
    }, destroy: function(be) {
      D = !0, A = be;
    } }, pe = !1;
    if (n = ur(n, We(f, l ? l.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, wn, void 0, function() {
      pe = !0;
    }), xr(n), vn(n, v), n.status === 1) n.status = 2, Q.destroy(n.fatalError);
    else if (n.status !== 2 && n.destination === null) {
      n.destination = Q;
      try {
        Dr(n, Q);
      } catch (be) {
        p(n, be), m(n, be);
      }
    }
    if (D) throw A;
    if (!pe) throw Error(t(426));
    return z;
  }
  return Or.renderToNodeStream = function() {
    throw Error(t(207));
  }, Or.renderToStaticMarkup = function(n, l) {
    return Wr(n, l, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Or.renderToStaticNodeStream = function() {
    throw Error(t(208));
  }, Or.renderToString = function(n, l) {
    return Wr(n, l, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Or.version = "18.3.1", Or;
}
var zn = {}, po;
function wc() {
  if (po) return zn;
  po = 1;
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
  function k(a) {
    return S.encode(a);
  }
  function g(a) {
    return S.encode(a);
  }
  function I(a, s) {
    typeof a.error == "function" ? a.error(s) : a.close();
  }
  var O = Object.prototype.hasOwnProperty, j = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, q = {}, x = {};
  function w(a) {
    return O.call(x, a) ? !0 : O.call(q, a) ? !1 : j.test(a) ? x[a] = !0 : (q[a] = !0, !1);
  }
  function P(a, s, d, b, N, R, U) {
    this.acceptsBooleans = s === 2 || s === 3 || s === 4, this.attributeName = b, this.attributeNamespace = N, this.mustUseProperty = d, this.propertyName = a, this.type = s, this.sanitizeURL = R, this.removeEmptyString = U;
  }
  var V = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
    V[a] = new P(a, 0, !1, a, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
    var s = a[0];
    V[s] = new P(s, 1, !1, a[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
    V[a] = new P(a, 2, !1, a.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
    V[a] = new P(a, 2, !1, a, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
    V[a] = new P(a, 3, !1, a.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(a) {
    V[a] = new P(a, 3, !0, a, null, !1, !1);
  }), ["capture", "download"].forEach(function(a) {
    V[a] = new P(a, 4, !1, a, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(a) {
    V[a] = new P(a, 6, !1, a, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(a) {
    V[a] = new P(a, 5, !1, a.toLowerCase(), null, !1, !1);
  });
  var $ = /[\-:]([a-z])/g;
  function Y(a) {
    return a[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
    var s = a.replace(
      $,
      Y
    );
    V[s] = new P(s, 1, !1, a, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
    var s = a.replace($, Y);
    V[s] = new P(s, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
    var s = a.replace($, Y);
    V[s] = new P(s, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(a) {
    V[a] = new P(a, 1, !1, a.toLowerCase(), null, !1, !1);
  }), V.xlinkHref = new P("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(a) {
    V[a] = new P(a, 1, !1, a.toLowerCase(), null, !0, !0);
  });
  var B = {
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
  }, _ = ["Webkit", "ms", "Moz", "O"];
  Object.keys(B).forEach(function(a) {
    _.forEach(function(s) {
      s = s + a.charAt(0).toUpperCase() + a.substring(1), B[s] = B[a];
    });
  });
  var ae = /["'&<>]/;
  function ke(a) {
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
  var Ie = /([A-Z])/g, Le = /^ms-/, Ge = Array.isArray, ue = g("<script>"), me = g("<\/script>"), Oe = g('<script src="'), Ne = g('<script type="module" src="'), Te = g('" async=""><\/script>'), st = /(<\/|<)(s)(cript)/gi;
  function Fe(a, s, d, b) {
    return "" + s + (d === "s" ? "\\u0073" : "\\u0053") + b;
  }
  function Re(a, s, d, b, N) {
    a = a === void 0 ? "" : a, s = s === void 0 ? ue : g('<script nonce="' + ke(s) + '">');
    var R = [];
    if (d !== void 0 && R.push(s, k(("" + d).replace(st, Fe)), me), b !== void 0) for (d = 0; d < b.length; d++) R.push(Oe, k(ke(b[d])), Te);
    if (N !== void 0) for (b = 0; b < N.length; b++) R.push(Ne, k(ke(N[b])), Te);
    return { bootstrapChunks: R, startInlineScript: s, placeholderPrefix: g(a + "P:"), segmentPrefix: g(a + "S:"), boundaryPrefix: a + "B:", idPrefix: a, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function We(a, s) {
    return { insertionMode: a, selectedValue: s };
  }
  function tt(a) {
    return We(a === "http://www.w3.org/2000/svg" ? 2 : a === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function se(a, s, d) {
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
  var F = g("<!-- -->");
  function E(a, s, d, b) {
    return s === "" ? b : (b && a.push(F), a.push(k(ke(s))), !0);
  }
  var L = /* @__PURE__ */ new Map(), M = g(' style="'), h = g(":"), ee = g(";");
  function C(a, s, d) {
    if (typeof d != "object") throw Error(t(62));
    s = !0;
    for (var b in d) if (O.call(d, b)) {
      var N = d[b];
      if (N != null && typeof N != "boolean" && N !== "") {
        if (b.indexOf("--") === 0) {
          var R = k(ke(b));
          N = k(ke(("" + N).trim()));
        } else {
          R = b;
          var U = L.get(R);
          U !== void 0 || (U = g(ke(R.replace(Ie, "-$1").toLowerCase().replace(Le, "-ms-"))), L.set(R, U)), R = U, N = typeof N == "number" ? N === 0 || O.call(B, b) ? k("" + N) : k(N + "px") : k(ke(("" + N).trim()));
        }
        s ? (s = !1, a.push(M, R, h, N)) : a.push(ee, R, h, N);
      }
    }
    s || a.push(te);
  }
  var ie = g(" "), J = g('="'), te = g('"'), Z = g('=""');
  function ne(a, s, d, b) {
    switch (d) {
      case "style":
        C(a, s, b);
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
        switch (typeof b) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (!s.acceptsBooleans) return;
        }
        switch (d = k(s.attributeName), s.type) {
          case 3:
            b && a.push(ie, d, Z);
            break;
          case 4:
            b === !0 ? a.push(ie, d, Z) : b !== !1 && a.push(ie, d, J, k(ke(b)), te);
            break;
          case 5:
            isNaN(b) || a.push(ie, d, J, k(ke(b)), te);
            break;
          case 6:
            !isNaN(b) && 1 <= b && a.push(ie, d, J, k(ke(b)), te);
            break;
          default:
            s.sanitizeURL && (b = "" + b), a.push(ie, d, J, k(ke(b)), te);
        }
      } else if (w(d)) {
        switch (typeof b) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (s = d.toLowerCase().slice(0, 5), s !== "data-" && s !== "aria-") return;
        }
        a.push(ie, k(d), J, k(ke(b)), te);
      }
    }
  }
  var de = g(">"), K = g("/>");
  function ge(a, s, d) {
    if (s != null) {
      if (d != null) throw Error(t(60));
      if (typeof s != "object" || !("__html" in s)) throw Error(t(61));
      s = s.__html, s != null && a.push(k("" + s));
    }
  }
  function re(a) {
    var s = "";
    return e.Children.forEach(a, function(d) {
      d != null && (s += d);
    }), s;
  }
  var le = g(' selected=""');
  function $e(a, s, d, b) {
    a.push(Se(d));
    var N = d = null, R;
    for (R in s) if (O.call(s, R)) {
      var U = s[R];
      if (U != null) switch (R) {
        case "children":
          d = U;
          break;
        case "dangerouslySetInnerHTML":
          N = U;
          break;
        default:
          ne(a, b, R, U);
      }
    }
    return a.push(de), ge(a, N, d), typeof d == "string" ? (a.push(k(ke(d))), null) : d;
  }
  var ce = g(`
`), it = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, He = /* @__PURE__ */ new Map();
  function Se(a) {
    var s = He.get(a);
    if (s === void 0) {
      if (!it.test(a)) throw Error(t(65, a));
      s = g("<" + a), He.set(a, s);
    }
    return s;
  }
  var H = g("<!DOCTYPE html>");
  function oe(a, s, d, b, N) {
    switch (s) {
      case "select":
        a.push(Se("select"));
        var R = null, U = null;
        for (xe in d) if (O.call(d, xe)) {
          var X = d[xe];
          if (X != null) switch (xe) {
            case "children":
              R = X;
              break;
            case "dangerouslySetInnerHTML":
              U = X;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              ne(a, b, xe, X);
          }
        }
        return a.push(de), ge(a, U, R), R;
      case "option":
        U = N.selectedValue, a.push(Se("option"));
        var he = X = null, Ce = null, xe = null;
        for (R in d) if (O.call(d, R)) {
          var et = d[R];
          if (et != null) switch (R) {
            case "children":
              X = et;
              break;
            case "selected":
              Ce = et;
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
        if (U != null) if (d = he !== null ? "" + he : re(X), Ge(U)) {
          for (b = 0; b < U.length; b++)
            if ("" + U[b] === d) {
              a.push(le);
              break;
            }
        } else "" + U === d && a.push(le);
        else Ce && a.push(le);
        return a.push(de), ge(a, xe, X), X;
      case "textarea":
        a.push(Se("textarea")), xe = U = R = null;
        for (X in d) if (O.call(d, X) && (he = d[X], he != null)) switch (X) {
          case "children":
            xe = he;
            break;
          case "value":
            R = he;
            break;
          case "defaultValue":
            U = he;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(91));
          default:
            ne(a, b, X, he);
        }
        if (R === null && U !== null && (R = U), a.push(de), xe != null) {
          if (R != null) throw Error(t(92));
          if (Ge(xe) && 1 < xe.length) throw Error(t(93));
          R = "" + xe;
        }
        return typeof R == "string" && R[0] === `
` && a.push(ce), R !== null && a.push(k(ke("" + R))), null;
      case "input":
        a.push(Se("input")), he = xe = X = R = null;
        for (U in d) if (O.call(d, U) && (Ce = d[U], Ce != null)) switch (U) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, "input"));
          case "defaultChecked":
            he = Ce;
            break;
          case "defaultValue":
            X = Ce;
            break;
          case "checked":
            xe = Ce;
            break;
          case "value":
            R = Ce;
            break;
          default:
            ne(a, b, U, Ce);
        }
        return xe !== null ? ne(
          a,
          b,
          "checked",
          xe
        ) : he !== null && ne(a, b, "checked", he), R !== null ? ne(a, b, "value", R) : X !== null && ne(a, b, "value", X), a.push(K), null;
      case "menuitem":
        a.push(Se("menuitem"));
        for (var Dt in d) if (O.call(d, Dt) && (R = d[Dt], R != null)) switch (Dt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            ne(a, b, Dt, R);
        }
        return a.push(de), null;
      case "title":
        a.push(Se("title")), R = null;
        for (et in d) if (O.call(d, et) && (U = d[et], U != null)) switch (et) {
          case "children":
            R = U;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(434));
          default:
            ne(a, b, et, U);
        }
        return a.push(de), R;
      case "listing":
      case "pre":
        a.push(Se(s)), U = R = null;
        for (he in d) if (O.call(d, he) && (X = d[he], X != null)) switch (he) {
          case "children":
            R = X;
            break;
          case "dangerouslySetInnerHTML":
            U = X;
            break;
          default:
            ne(a, b, he, X);
        }
        if (a.push(de), U != null) {
          if (R != null) throw Error(t(60));
          if (typeof U != "object" || !("__html" in U)) throw Error(t(61));
          d = U.__html, d != null && (typeof d == "string" && 0 < d.length && d[0] === `
` ? a.push(ce, k(d)) : a.push(k("" + d)));
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
        a.push(Se(s));
        for (var Xt in d) if (O.call(d, Xt) && (R = d[Xt], R != null)) switch (Xt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, s));
          default:
            ne(a, b, Xt, R);
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
        return $e(a, d, s, b);
      case "html":
        return N.insertionMode === 0 && a.push(H), $e(a, d, s, b);
      default:
        if (s.indexOf("-") === -1 && typeof d.is != "string") return $e(a, d, s, b);
        a.push(Se(s)), U = R = null;
        for (Ce in d) if (O.call(d, Ce) && (X = d[Ce], X != null)) switch (Ce) {
          case "children":
            R = X;
            break;
          case "dangerouslySetInnerHTML":
            U = X;
            break;
          case "style":
            C(a, b, X);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            w(Ce) && typeof X != "function" && typeof X != "symbol" && a.push(ie, k(Ce), J, k(ke(X)), te);
        }
        return a.push(de), ge(a, U, R), R;
    }
  }
  var Xe = g("</"), De = g(">"), Pe = g('<template id="'), er = g('"></template>'), tr = g("<!--$-->"), $t = g('<!--$?--><template id="'), Bt = g('"></template>'), pt = g("<!--$!-->"), Tt = g("<!--/$-->"), nt = g("<template"), ut = g('"'), Wt = g(' data-dgst="');
  g(' data-msg="'), g(' data-stck="');
  var Ht = g("></template>");
  function ht(a, s, d) {
    if (c(a, $t), d === null) throw Error(t(395));
    return c(a, d), u(a, Bt);
  }
  var vt = g('<div hidden id="'), mt = g('">'), Me = g("</div>"), lt = g('<svg aria-hidden="true" style="display:none" id="'), rr = g('">'), qt = g("</svg>"), fe = g('<math aria-hidden="true" style="display:none" id="'), ot = g('">'), Et = g("</math>"), nr = g('<table hidden id="'), At = g('">'), Vt = g("</table>"), ar = g('<table hidden><tbody id="'), mr = g('">'), at = g("</tbody></table>"), ct = g('<table hidden><tr id="'), lr = g('">'), Lt = g("</tr></table>"), Ft = g('<table hidden><colgroup id="'), jt = g('">'), Je = g("</colgroup></table>");
  function cr(a, s, d, b) {
    switch (d.insertionMode) {
      case 0:
      case 1:
        return c(a, vt), c(a, s.segmentPrefix), c(a, k(b.toString(16))), u(a, mt);
      case 2:
        return c(a, lt), c(a, s.segmentPrefix), c(a, k(b.toString(16))), u(a, rr);
      case 3:
        return c(a, fe), c(a, s.segmentPrefix), c(a, k(b.toString(16))), u(a, ot);
      case 4:
        return c(a, nr), c(a, s.segmentPrefix), c(a, k(b.toString(16))), u(a, At);
      case 5:
        return c(a, ar), c(a, s.segmentPrefix), c(a, k(b.toString(16))), u(a, mr);
      case 6:
        return c(a, ct), c(a, s.segmentPrefix), c(a, k(b.toString(16))), u(a, lr);
      case 7:
        return c(
          a,
          Ft
        ), c(a, s.segmentPrefix), c(a, k(b.toString(16))), u(a, jt);
      default:
        throw Error(t(397));
    }
  }
  function Rt(a, s) {
    switch (s.insertionMode) {
      case 0:
      case 1:
        return u(a, Me);
      case 2:
        return u(a, qt);
      case 3:
        return u(a, Et);
      case 4:
        return u(a, Vt);
      case 5:
        return u(a, at);
      case 6:
        return u(a, Lt);
      case 7:
        return u(a, Je);
      default:
        throw Error(t(397));
    }
  }
  var ur = g('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), Yt = g('$RS("'), ir = g('","'), p = g('")<\/script>'), m = g('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), T = g('$RC("'), G = g('","'), ye = g('")<\/script>'), ve = g('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), we = g('$RX("'), je = g('"'), Ze = g(")<\/script>"), gt = g(","), Ke = /[<\u2028\u2029]/g;
  function Be(a) {
    return JSON.stringify(a).replace(Ke, function(s) {
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
  var Ot = Object.assign, xr = Symbol.for("react.element"), Cr = Symbol.for("react.portal"), Tr = Symbol.for("react.fragment"), Ur = Symbol.for("react.strict_mode"), $r = Symbol.for("react.profiler"), Br = Symbol.for("react.provider"), Dr = Symbol.for("react.context"), vn = Symbol.for("react.forward_ref"), wn = Symbol.for("react.suspense"), Wr = Symbol.for("react.suspense_list"), n = Symbol.for("react.memo"), l = Symbol.for("react.lazy"), f = Symbol.for("react.scope"), v = Symbol.for("react.debug_trace_mode"), D = Symbol.for("react.legacy_hidden"), A = Symbol.for("react.default_value"), z = Symbol.iterator;
  function Q(a) {
    if (a == null) return null;
    if (typeof a == "function") return a.displayName || a.name || null;
    if (typeof a == "string") return a;
    switch (a) {
      case Tr:
        return "Fragment";
      case Cr:
        return "Portal";
      case $r:
        return "Profiler";
      case Ur:
        return "StrictMode";
      case wn:
        return "Suspense";
      case Wr:
        return "SuspenseList";
    }
    if (typeof a == "object") switch (a.$$typeof) {
      case Dr:
        return (a.displayName || "Context") + ".Consumer";
      case Br:
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
  var pe = {};
  function be(a, s) {
    if (a = a.contextTypes, !a) return pe;
    var d = {}, b;
    for (b in a) d[b] = s[b];
    return d;
  }
  var _e = null;
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
  function It(a, s) {
    if (a.context._currentValue = a.parentValue, a = a.parent, a === null) throw Error(t(402));
    a.depth === s.depth ? rt(a, s) : It(a, s);
  }
  function Er(a, s) {
    var d = s.parent;
    if (d === null) throw Error(t(402));
    a.depth === d.depth ? rt(a, d) : Er(a, d), s.context._currentValue = s.value;
  }
  function dr(a) {
    var s = _e;
    s !== a && (s === null ? Zt(a) : a === null ? Gt(s) : s.depth === a.depth ? rt(s, a) : s.depth > a.depth ? It(s, a) : Er(s, a), _e = a);
  }
  var Hr = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(a, s) {
    a = a._reactInternals, a.queue !== null && a.queue.push(s);
  }, enqueueReplaceState: function(a, s) {
    a = a._reactInternals, a.replace = !0, a.queue = [s];
  }, enqueueForceUpdate: function() {
  } };
  function Ar(a, s, d, b) {
    var N = a.state !== void 0 ? a.state : null;
    a.updater = Hr, a.props = d, a.state = N;
    var R = { queue: [], replace: !1 };
    a._reactInternals = R;
    var U = s.contextType;
    if (a.context = typeof U == "object" && U !== null ? U._currentValue : b, U = s.getDerivedStateFromProps, typeof U == "function" && (U = U(d, N), N = U == null ? N : Ot({}, N, U), a.state = N), typeof s.getDerivedStateFromProps != "function" && typeof a.getSnapshotBeforeUpdate != "function" && (typeof a.UNSAFE_componentWillMount == "function" || typeof a.componentWillMount == "function")) if (s = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), s !== a.state && Hr.enqueueReplaceState(a, a.state, null), R.queue !== null && 0 < R.queue.length) if (s = R.queue, U = R.replace, R.queue = null, R.replace = !1, U && s.length === 1) a.state = s[0];
    else {
      for (R = U ? s[0] : a.state, N = !0, U = U ? 1 : 0; U < s.length; U++) {
        var X = s[U];
        X = typeof X == "function" ? X.call(a, R, d, b) : X, X != null && (N ? (N = !1, R = Ot({}, R, X)) : Ot(R, X));
      }
      a.state = R;
    }
    else R.queue = null;
  }
  var kn = { id: 1, overflow: "" };
  function gr(a, s, d) {
    var b = a.id;
    a = a.overflow;
    var N = 32 - Sn(b) - 1;
    b &= ~(1 << N), d += 1;
    var R = 32 - Sn(s) + N;
    if (30 < R) {
      var U = N - N % 5;
      return R = (b & (1 << U) - 1).toString(32), b >>= U, N -= U, { id: 1 << 32 - Sn(s) + N | d << N | b, overflow: R + a };
    }
    return { id: 1 << R | d << N | b, overflow: a };
  }
  var Sn = Math.clz32 ? Math.clz32 : Qs, Xs = Math.log, Ks = Math.LN2;
  function Qs(a) {
    return a >>>= 0, a === 0 ? 32 : 31 - (Xs(a) / Ks | 0) | 0;
  }
  function Js(a, s) {
    return a === s && (a !== 0 || 1 / a === 1 / s) || a !== a && s !== s;
  }
  var el = typeof Object.is == "function" ? Object.is : Js, fr = null, la = null, _n = null, Qe = null, qr = !1, xn = !1, Vr = 0, yr = null, Cn = 0;
  function Rr() {
    if (fr === null) throw Error(t(321));
    return fr;
  }
  function gi() {
    if (0 < Cn) throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function ca() {
    return Qe === null ? _n === null ? (qr = !1, _n = Qe = gi()) : (qr = !0, Qe = _n) : Qe.next === null ? (qr = !1, Qe = Qe.next = gi()) : (qr = !0, Qe = Qe.next), Qe;
  }
  function ua() {
    la = fr = null, xn = !1, _n = null, Cn = 0, Qe = yr = null;
  }
  function yi(a, s) {
    return typeof s == "function" ? s(a) : s;
  }
  function bi(a, s, d) {
    if (fr = Rr(), Qe = ca(), qr) {
      var b = Qe.queue;
      if (s = b.dispatch, yr !== null && (d = yr.get(b), d !== void 0)) {
        yr.delete(b), b = Qe.memoizedState;
        do
          b = a(b, d.action), d = d.next;
        while (d !== null);
        return Qe.memoizedState = b, [b, s];
      }
      return [Qe.memoizedState, s];
    }
    return a = a === yi ? typeof s == "function" ? s() : s : d !== void 0 ? d(s) : s, Qe.memoizedState = a, a = Qe.queue = { last: null, dispatch: null }, a = a.dispatch = tl.bind(null, fr, a), [Qe.memoizedState, a];
  }
  function vi(a, s) {
    if (fr = Rr(), Qe = ca(), s = s === void 0 ? null : s, Qe !== null) {
      var d = Qe.memoizedState;
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
    return a = a(), Qe.memoizedState = [a, s], a;
  }
  function tl(a, s, d) {
    if (25 <= Cn) throw Error(t(301));
    if (a === fr) if (xn = !0, a = { action: d, next: null }, yr === null && (yr = /* @__PURE__ */ new Map()), d = yr.get(s), d === void 0) yr.set(s, a);
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
    return Rr(), a._currentValue;
  }, useMemo: vi, useReducer: bi, useRef: function(a) {
    fr = Rr(), Qe = ca();
    var s = Qe.memoizedState;
    return s === null ? (a = { current: a }, Qe.memoizedState = a) : s;
  }, useState: function(a) {
    return bi(yi, a);
  }, useInsertionEffect: Tn, useLayoutEffect: function() {
  }, useCallback: function(a, s) {
    return vi(function() {
      return a;
    }, s);
  }, useImperativeHandle: Tn, useEffect: Tn, useDebugValue: Tn, useDeferredValue: function(a) {
    return Rr(), a;
  }, useTransition: function() {
    return Rr(), [!1, rl];
  }, useId: function() {
    var a = la.treeContext, s = a.overflow;
    a = a.id, a = (a & ~(1 << 32 - Sn(a) - 1)).toString(32) + s;
    var d = En;
    if (d === null) throw Error(t(404));
    return s = Vr++, a = ":" + d.idPrefix + "R" + a, 0 < s && (a += "H" + s.toString(32)), a + ":";
  }, useMutableSource: function(a, s) {
    return Rr(), s(a._source);
  }, useSyncExternalStore: function(a, s, d) {
    if (d === void 0) throw Error(t(407));
    return d();
  } }, En = null, da = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function nl(a) {
    return console.error(a), null;
  }
  function Yr() {
  }
  function al(a, s, d, b, N, R, U, X, he) {
    var Ce = [], xe = /* @__PURE__ */ new Set();
    return s = { destination: null, responseState: s, progressiveChunkSize: b === void 0 ? 12800 : b, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: xe, pingedTasks: Ce, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: N === void 0 ? nl : N, onAllReady: R === void 0 ? Yr : R, onShellReady: U === void 0 ? Yr : U, onShellError: X === void 0 ? Yr : X, onFatalError: he === void 0 ? Yr : he }, d = An(s, 0, null, d, !1, !1), d.parentFlushed = !0, a = fa(s, a, null, d, xe, pe, null, kn), Ce.push(a), s;
  }
  function fa(a, s, d, b, N, R, U, X) {
    a.allPendingTasks++, d === null ? a.pendingRootTasks++ : d.pendingTasks++;
    var he = { node: s, ping: function() {
      var Ce = a.pingedTasks;
      Ce.push(he), Ce.length === 1 && Ei(a);
    }, blockedBoundary: d, blockedSegment: b, abortSet: N, legacyContext: R, context: U, treeContext: X };
    return N.add(he), he;
  }
  function An(a, s, d, b, N, R) {
    return { status: 0, id: -1, index: s, parentFlushed: !1, chunks: [], children: [], formatContext: b, boundary: d, lastPushedText: N, textEmbedded: R };
  }
  function Gr(a, s) {
    if (a = a.onError(s), a != null && typeof a != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof a + '" instead');
    return a;
  }
  function Rn(a, s) {
    var d = a.onShellError;
    d(s), d = a.onFatalError, d(s), a.destination !== null ? (a.status = 2, I(a.destination, s)) : (a.status = 1, a.fatalError = s);
  }
  function ki(a, s, d, b, N) {
    for (fr = {}, la = s, Vr = 0, a = d(b, N); xn; ) xn = !1, Vr = 0, Cn += 1, Qe = null, a = d(b, N);
    return ua(), a;
  }
  function Si(a, s, d, b) {
    var N = d.render(), R = b.childContextTypes;
    if (R != null) {
      var U = s.legacyContext;
      if (typeof d.getChildContext != "function") b = U;
      else {
        d = d.getChildContext();
        for (var X in d) if (!(X in R)) throw Error(t(108, Q(b) || "Unknown", X));
        b = Ot({}, U, d);
      }
      s.legacyContext = b, Nt(a, s, N), s.legacyContext = U;
    } else Nt(a, s, N);
  }
  function _i(a, s) {
    if (a && a.defaultProps) {
      s = Ot({}, s), a = a.defaultProps;
      for (var d in a) s[d] === void 0 && (s[d] = a[d]);
      return s;
    }
    return s;
  }
  function pa(a, s, d, b, N) {
    if (typeof d == "function") if (d.prototype && d.prototype.isReactComponent) {
      N = be(d, s.legacyContext);
      var R = d.contextType;
      R = new d(b, typeof R == "object" && R !== null ? R._currentValue : N), Ar(R, d, b, N), Si(a, s, R, d);
    } else {
      R = be(d, s.legacyContext), N = ki(a, s, d, b, R);
      var U = Vr !== 0;
      if (typeof N == "object" && N !== null && typeof N.render == "function" && N.$$typeof === void 0) Ar(N, d, b, R), Si(a, s, N, d);
      else if (U) {
        b = s.treeContext, s.treeContext = gr(b, 1, 0);
        try {
          Nt(a, s, N);
        } finally {
          s.treeContext = b;
        }
      } else Nt(a, s, N);
    }
    else if (typeof d == "string") {
      switch (N = s.blockedSegment, R = oe(N.chunks, d, b, a.responseState, N.formatContext), N.lastPushedText = !1, U = N.formatContext, N.formatContext = se(U, d, b), ha(a, s, R), N.formatContext = U, d) {
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
          N.chunks.push(Xe, k(d), De);
      }
      N.lastPushedText = !1;
    } else {
      switch (d) {
        case D:
        case v:
        case Ur:
        case $r:
        case Tr:
          Nt(a, s, b.children);
          return;
        case Wr:
          Nt(a, s, b.children);
          return;
        case f:
          throw Error(t(343));
        case wn:
          e: {
            d = s.blockedBoundary, N = s.blockedSegment, R = b.fallback, b = b.children, U = /* @__PURE__ */ new Set();
            var X = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: U, errorDigest: null }, he = An(a, N.chunks.length, X, N.formatContext, !1, !1);
            N.children.push(he), N.lastPushedText = !1;
            var Ce = An(a, 0, null, N.formatContext, !1, !1);
            Ce.parentFlushed = !0, s.blockedBoundary = X, s.blockedSegment = Ce;
            try {
              if (ha(
                a,
                s,
                b
              ), Ce.lastPushedText && Ce.textEmbedded && Ce.chunks.push(F), Ce.status = 1, On(X, Ce), X.pendingTasks === 0) break e;
            } catch (xe) {
              Ce.status = 4, X.forceClientRender = !0, X.errorDigest = Gr(a, xe);
            } finally {
              s.blockedBoundary = d, s.blockedSegment = N;
            }
            s = fa(a, R, d, he, U, s.legacyContext, s.context, s.treeContext), a.pingedTasks.push(s);
          }
          return;
      }
      if (typeof d == "object" && d !== null) switch (d.$$typeof) {
        case vn:
          if (b = ki(a, s, d.render, b, N), Vr !== 0) {
            d = s.treeContext, s.treeContext = gr(d, 1, 0);
            try {
              Nt(a, s, b);
            } finally {
              s.treeContext = d;
            }
          } else Nt(a, s, b);
          return;
        case n:
          d = d.type, b = _i(d, b), pa(a, s, d, b, N);
          return;
        case Br:
          if (N = b.children, d = d._context, b = b.value, R = d._currentValue, d._currentValue = b, U = _e, _e = b = { parent: U, depth: U === null ? 0 : U.depth + 1, context: d, parentValue: R, value: b }, s.context = b, Nt(a, s, N), a = _e, a === null) throw Error(t(403));
          b = a.parentValue, a.context._currentValue = b === A ? a.context._defaultValue : b, a = _e = a.parent, s.context = a;
          return;
        case Dr:
          b = b.children, b = b(d._currentValue), Nt(a, s, b);
          return;
        case l:
          N = d._init, d = N(d._payload), b = _i(d, b), pa(a, s, d, b, void 0);
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
        case Cr:
          throw Error(t(257));
        case l:
          var b = d._init;
          d = b(d._payload), Nt(a, s, d);
          return;
      }
      if (Ge(d)) {
        xi(a, s, d);
        return;
      }
      if (d === null || typeof d != "object" ? b = null : (b = z && d[z] || d["@@iterator"], b = typeof b == "function" ? b : null), b && (b = b.call(d))) {
        if (d = b.next(), !d.done) {
          var N = [];
          do
            N.push(d.value), d = b.next();
          while (!d.done);
          xi(a, s, N);
        }
        return;
      }
      throw a = Object.prototype.toString.call(d), Error(t(31, a === "[object Object]" ? "object with keys {" + Object.keys(d).join(", ") + "}" : a));
    }
    typeof d == "string" ? (b = s.blockedSegment, b.lastPushedText = E(s.blockedSegment.chunks, d, a.responseState, b.lastPushedText)) : typeof d == "number" && (b = s.blockedSegment, b.lastPushedText = E(s.blockedSegment.chunks, "" + d, a.responseState, b.lastPushedText));
  }
  function xi(a, s, d) {
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
        var U = s.blockedSegment, X = An(a, U.chunks.length, null, U.formatContext, U.lastPushedText, !0);
        U.children.push(X), U.lastPushedText = !1, a = fa(a, s.node, s.blockedBoundary, X, s.abortSet, s.legacyContext, s.context, s.treeContext).ping, d.then(a, a), s.blockedSegment.formatContext = b, s.legacyContext = N, s.context = R, dr(R);
      } else throw s.blockedSegment.formatContext = b, s.legacyContext = N, s.context = R, dr(R), he;
    }
  }
  function il(a) {
    var s = a.blockedBoundary;
    a = a.blockedSegment, a.status = 3, Ti(this, s, a);
  }
  function Ci(a, s, d) {
    var b = a.blockedBoundary;
    a.blockedSegment.status = 3, b === null ? (s.allPendingTasks--, s.status !== 2 && (s.status = 2, s.destination !== null && s.destination.close())) : (b.pendingTasks--, b.forceClientRender || (b.forceClientRender = !0, a = d === void 0 ? Error(t(432)) : d, b.errorDigest = s.onError(a), b.parentFlushed && s.clientRenderedBoundaries.push(b)), b.fallbackAbortableTasks.forEach(function(N) {
      return Ci(N, s, d);
    }), b.fallbackAbortableTasks.clear(), s.allPendingTasks--, s.allPendingTasks === 0 && (b = s.onAllReady, b()));
  }
  function On(a, s) {
    if (s.chunks.length === 0 && s.children.length === 1 && s.children[0].boundary === null) {
      var d = s.children[0];
      d.id = s.id, d.parentFlushed = !0, d.status === 1 && On(a, d);
    } else a.completedSegments.push(s);
  }
  function Ti(a, s, d) {
    if (s === null) {
      if (d.parentFlushed) {
        if (a.completedRootSegment !== null) throw Error(t(389));
        a.completedRootSegment = d;
      }
      a.pendingRootTasks--, a.pendingRootTasks === 0 && (a.onShellError = Yr, s = a.onShellReady, s());
    } else s.pendingTasks--, s.forceClientRender || (s.pendingTasks === 0 ? (d.parentFlushed && d.status === 1 && On(s, d), s.parentFlushed && a.completedBoundaries.push(s), s.fallbackAbortableTasks.forEach(il, a), s.fallbackAbortableTasks.clear()) : d.parentFlushed && d.status === 1 && (On(s, d), s.completedSegments.length === 1 && s.parentFlushed && a.partialBoundaries.push(s)));
    a.allPendingTasks--, a.allPendingTasks === 0 && (a = a.onAllReady, a());
  }
  function Ei(a) {
    if (a.status !== 2) {
      var s = _e, d = da.current;
      da.current = wi;
      var b = En;
      En = a.responseState;
      try {
        var N = a.pingedTasks, R;
        for (R = 0; R < N.length; R++) {
          var U = N[R], X = a, he = U.blockedSegment;
          if (he.status === 0) {
            dr(U.context);
            try {
              Nt(X, U, U.node), he.lastPushedText && he.textEmbedded && he.chunks.push(F), U.abortSet.delete(U), he.status = 1, Ti(X, U.blockedBoundary, he);
            } catch (Kt) {
              if (ua(), typeof Kt == "object" && Kt !== null && typeof Kt.then == "function") {
                var Ce = U.ping;
                Kt.then(Ce, Ce);
              } else {
                U.abortSet.delete(U), he.status = 4;
                var xe = U.blockedBoundary, et = Kt, Dt = Gr(X, et);
                if (xe === null ? Rn(X, et) : (xe.pendingTasks--, xe.forceClientRender || (xe.forceClientRender = !0, xe.errorDigest = Dt, xe.parentFlushed && X.clientRenderedBoundaries.push(xe))), X.allPendingTasks--, X.allPendingTasks === 0) {
                  var Xt = X.onAllReady;
                  Xt();
                }
              }
            } finally {
            }
          }
        }
        N.splice(0, R), a.destination !== null && ma(a, a.destination);
      } catch (Kt) {
        Gr(a, Kt), Rn(a, Kt);
      } finally {
        En = b, da.current = d, d === wi && dr(s);
      }
    }
  }
  function In(a, s, d) {
    switch (d.parentFlushed = !0, d.status) {
      case 0:
        var b = d.id = a.nextSegmentId++;
        return d.lastPushedText = !1, d.textEmbedded = !1, a = a.responseState, c(s, Pe), c(s, a.placeholderPrefix), a = k(b.toString(16)), c(s, a), u(s, er);
      case 1:
        d.status = 2;
        var N = !0;
        b = d.chunks;
        var R = 0;
        d = d.children;
        for (var U = 0; U < d.length; U++) {
          for (N = d[U]; R < N.index; R++) c(s, b[R]);
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
    if (b.parentFlushed = !0, b.forceClientRender) b = b.errorDigest, u(s, pt), c(s, nt), b && (c(s, Wt), c(s, k(ke(b))), c(s, ut)), u(s, Ht), In(a, s, d);
    else if (0 < b.pendingTasks) {
      b.rootSegmentID = a.nextSegmentId++, 0 < b.completedSegments.length && a.partialBoundaries.push(b);
      var N = a.responseState, R = N.nextSuspenseID++;
      N = g(N.boundaryPrefix + R.toString(16)), b = b.id = N, ht(s, a.responseState, b), In(a, s, d);
    } else if (b.byteSize > a.progressiveChunkSize) b.rootSegmentID = a.nextSegmentId++, a.completedBoundaries.push(b), ht(s, a.responseState, b.id), In(a, s, d);
    else {
      if (u(s, tr), d = b.completedSegments, d.length !== 1) throw Error(t(391));
      Nn(a, s, d[0]);
    }
    return u(s, Tt);
  }
  function Ai(a, s, d) {
    return cr(s, a.responseState, d.formatContext, d.id), Nn(a, s, d), Rt(s, d.formatContext);
  }
  function Ri(a, s, d) {
    for (var b = d.completedSegments, N = 0; N < b.length; N++) Oi(a, s, d, b[N]);
    if (b.length = 0, a = a.responseState, b = d.id, d = d.rootSegmentID, c(s, a.startInlineScript), a.sentCompleteBoundaryFunction ? c(s, T) : (a.sentCompleteBoundaryFunction = !0, c(s, m)), b === null) throw Error(t(395));
    return d = k(d.toString(16)), c(s, b), c(s, G), c(s, a.segmentPrefix), c(s, d), u(s, ye);
  }
  function Oi(a, s, d, b) {
    if (b.status === 2) return !0;
    var N = b.id;
    if (N === -1) {
      if ((b.id = d.rootSegmentID) === -1) throw Error(t(392));
      return Ai(a, s, b);
    }
    return Ai(a, s, b), a = a.responseState, c(s, a.startInlineScript), a.sentCompleteSegmentFunction ? c(s, Yt) : (a.sentCompleteSegmentFunction = !0, c(s, ur)), c(s, a.segmentPrefix), N = k(N.toString(16)), c(s, N), c(s, ir), c(s, a.placeholderPrefix), c(s, N), u(s, p);
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
        var U = N[R];
        b = s;
        var X = a.responseState, he = U.id, Ce = U.errorDigest, xe = U.errorMessage, et = U.errorComponentStack;
        if (c(b, X.startInlineScript), X.sentClientRenderFunction ? c(b, we) : (X.sentClientRenderFunction = !0, c(
          b,
          ve
        )), he === null) throw Error(t(395));
        c(b, he), c(b, je), (Ce || xe || et) && (c(b, gt), c(b, k(Be(Ce || "")))), (xe || et) && (c(b, gt), c(b, k(Be(xe || "")))), et && (c(b, gt), c(b, k(Be(et)))), u(b, Ze);
      }
      N.splice(0, R);
      var Dt = a.completedBoundaries;
      for (R = 0; R < Dt.length; R++) Ri(a, s, Dt[R]);
      Dt.splice(0, R), y(s), r = new Uint8Array(512), i = 0;
      var Xt = a.partialBoundaries;
      for (R = 0; R < Xt.length; R++) {
        var Kt = Xt[R];
        e: {
          N = a, U = s;
          var Dn = Kt.completedSegments;
          for (X = 0; X < Dn.length; X++) if (!Oi(
            N,
            U,
            Kt,
            Dn[X]
          )) {
            X++, Dn.splice(0, X);
            var Ni = !1;
            break e;
          }
          Dn.splice(0, X), Ni = !0;
        }
        if (!Ni) {
          a.destination = null, R++, Xt.splice(0, R);
          return;
        }
      }
      Xt.splice(0, R);
      var ga = a.completedBoundaries;
      for (R = 0; R < ga.length; R++) Ri(a, s, ga[R]);
      ga.splice(0, R);
    } finally {
      y(s), a.allPendingTasks === 0 && a.pingedTasks.length === 0 && a.clientRenderedBoundaries.length === 0 && a.completedBoundaries.length === 0 && s.close();
    }
  }
  function Ii(a, s) {
    try {
      var d = a.abortableTasks;
      d.forEach(function(b) {
        return Ci(b, a, s);
      }), d.clear(), a.destination !== null && ma(a, a.destination);
    } catch (b) {
      Gr(a, b), Rn(a, b);
    }
  }
  return zn.renderToReadableStream = function(a, s) {
    return new Promise(function(d, b) {
      var N, R, U = new Promise(function(xe, et) {
        R = xe, N = et;
      }), X = al(a, Re(s ? s.identifierPrefix : void 0, s ? s.nonce : void 0, s ? s.bootstrapScriptContent : void 0, s ? s.bootstrapScripts : void 0, s ? s.bootstrapModules : void 0), tt(s ? s.namespaceURI : void 0), s ? s.progressiveChunkSize : void 0, s ? s.onError : void 0, R, function() {
        var xe = new ReadableStream({ type: "bytes", pull: function(et) {
          if (X.status === 1) X.status = 2, I(et, X.fatalError);
          else if (X.status !== 2 && X.destination === null) {
            X.destination = et;
            try {
              ma(X, et);
            } catch (Dt) {
              Gr(X, Dt), Rn(X, Dt);
            }
          }
        }, cancel: function() {
          Ii(X);
        } }, { highWaterMark: 0 });
        xe.allReady = U, d(xe);
      }, function(xe) {
        U.catch(function() {
        }), b(xe);
      }, N);
      if (s && s.signal) {
        var he = s.signal, Ce = function() {
          Ii(X, he.reason), he.removeEventListener("abort", Ce);
        };
        he.addEventListener("abort", Ce);
      }
      Ei(X);
    });
  }, zn.version = "18.3.1", zn;
}
var ho;
function kc() {
  if (ho) return br;
  ho = 1;
  var e, t;
  return e = vc(), t = wc(), br.version = e.version, br.renderToString = e.renderToString, br.renderToStaticMarkup = e.renderToStaticMarkup, br.renderToNodeStream = e.renderToNodeStream, br.renderToStaticNodeStream = e.renderToStaticNodeStream, br.renderToReadableStream = t.renderToReadableStream, br;
}
kc();
const Sc = "staticMarkup";
function hs() {
  const e = ul().indexOf(Sc) > -1 ? !0 : void 0;
  return {
    isBootstrap: e,
    isReact: e ? void 0 : !0
  };
}
const Sr = ({ gaData: e, prefix: t = "", children: r }) => {
  const { isReact: i } = hs(), { onClick: c, ...u } = r.props;
  if (i)
    return ft.cloneElement(r, {
      ...u,
      onClick: (k) => (e && e.event && e.action && mc(e), c ? c(k) : !0)
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
}, _c = ii(
  ({
    id: e,
    parentId: t,
    /** @type {AccordionCard} */
    item: r,
    openCard: i,
    onClick: c,
    gaData: u
  }, y) => {
    var S, k, g, I, O, j;
    const q = e === i, x = q ? "open" : "close";
    return /* @__PURE__ */ W.jsxs(
      "div",
      {
        ref: y,
        className: Qt("accordion-item", "mt-3", {
          [`accordion-item-${r.color}`]: r.color,
          "accordion-header-icon": (S = r.content) == null ? void 0 : S.icon
        }),
        children: [
          /* @__PURE__ */ W.jsx("div", { className: "accordion-header", children: /* @__PURE__ */ W.jsx("h4", { children: /* @__PURE__ */ W.jsx(
            Sr,
            {
              gaData: {
                ...u,
                action: x,
                text: r.content.header
              },
              children: /* @__PURE__ */ W.jsxs(
                "button",
                {
                  "data-testid": "accordion-opener",
                  className: Qt({ collapsed: !q }),
                  "data-bs-toggle": "collapse",
                  href: `#card-body-${e}`,
                  type: "button",
                  "aria-expanded": q,
                  "aria-controls": `card-body-${e}`,
                  onClick: (w) => c(w, e),
                  children: [
                    (k = r.content) != null && k.icon ? /* @__PURE__ */ W.jsxs("span", { className: "accordion-icon", children: [
                      /* @__PURE__ */ W.jsx(
                        "i",
                        {
                          className: `${(g = r.content.icon) == null ? void 0 : g[0]} fa-${(I = r.content.icon) == null ? void 0 : I[1]} me-2`
                        }
                      ),
                      r.content.header
                    ] }) : (O = r.content) == null ? void 0 : O.header,
                    /* @__PURE__ */ W.jsx("i", { className: "fas fa-chevron-up" })
                  ]
                }
              )
            }
          ) }) }),
          ((j = r.content) == null ? void 0 : j.body) && /* @__PURE__ */ W.jsx(
            "div",
            {
              "data-bs-parent": `#${t}`,
              id: `card-body-${e}`,
              className: Qt("collapse", { show: q }),
              children: /* @__PURE__ */ W.jsx(
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
_c.propTypes = {
  id: o.number,
  // @ts-ignore a technical type mismatch between PropTypes definition and your TypeScript
  item: ps,
  parentId: o.string,
  openCard: o.number,
  onClick: o.func,
  gaData: o.object
};
o.arrayOf(ps).isRequired, o.number;
const mo = {
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
  href: k,
  icon: g,
  innerRef: I,
  onClick: O,
  size: j = "default",
  variant: q,
  classes: x,
  target: w = "_self",
  ...P
}) => {
  if (q) {
    const Y = {
      borderless: "borderless",
      outline: "outline",
      filled: "filled"
    }, B = Qt("btn", Y[q], {
      [`btn-${Y[q]}-${u}`]: !0,
      "btn-medium": j === "medium",
      "btn-small": j === "small",
      "btn-large": j === "large" || j === "default",
      disabled: y
    });
    let _ = S;
    return k && S === "button" && (_ = "a"), /* @__PURE__ */ W.jsx(
      Sr,
      {
        gaData: {
          ...mo,
          section: t,
          ...r,
          text: e
        },
        children: /* @__PURE__ */ W.jsxs(
          _,
          {
            type: _ === "button" && O ? "button" : void 0,
            ...P,
            className: Qt(x) || B,
            href: k,
            ref: I,
            onClick: O,
            "aria-label": i,
            target: _ === "a" ? w : null,
            disabled: y,
            children: [
              g && /* @__PURE__ */ W.jsx("i", { className: `${g == null ? void 0 : g[0]} fa-${g == null ? void 0 : g[1]} me-1` }),
              e
            ]
          }
        )
      }
    );
  }
  const V = Qt("btn", {
    [`btn-${u}`]: !0,
    "btn-md": j === "small",
    "btn-sm": j === "xsmall",
    "btn-block": c,
    disabled: y
  });
  let $ = S;
  return k && S === "button" && ($ = "a"), /* @__PURE__ */ W.jsx(
    Sr,
    {
      gaData: {
        ...mo,
        section: t,
        // @deprecated - remove at some point
        ...r,
        text: e
      },
      children: /* @__PURE__ */ W.jsxs(
        $,
        {
          type: $ === "button" && O ? "button" : void 0,
          ...P,
          className: Qt(x) || V,
          href: k,
          ref: I,
          onClick: O,
          "aria-label": i,
          target: $ === "a" ? w : null,
          children: [
            g && /* @__PURE__ */ W.jsx("i", { className: `${g == null ? void 0 : g[0]} fa-${g == null ? void 0 : g[1]} me-1` }),
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
  gaData: si,
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
var go = { exports: {} }, qe = {}, yo;
function xc() {
  if (yo) return qe;
  yo = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), u = Symbol.for("react.consumer"), y = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), I = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), j = Symbol.for("react.offscreen"), q = Symbol.for("react.client.reference");
  function x(w) {
    if (typeof w == "object" && w !== null) {
      var P = w.$$typeof;
      switch (P) {
        case e:
          switch (w = w.type, w) {
            case r:
            case c:
            case i:
            case k:
            case g:
              return w;
            default:
              switch (w = w && w.$$typeof, w) {
                case y:
                case S:
                case O:
                case I:
                  return w;
                case u:
                  return w;
                default:
                  return P;
              }
          }
        case t:
          return P;
      }
    }
  }
  return qe.ContextConsumer = u, qe.ContextProvider = y, qe.Element = e, qe.ForwardRef = S, qe.Fragment = r, qe.Lazy = O, qe.Memo = I, qe.Portal = t, qe.Profiler = c, qe.StrictMode = i, qe.Suspense = k, qe.SuspenseList = g, qe.isContextConsumer = function(w) {
    return x(w) === u;
  }, qe.isContextProvider = function(w) {
    return x(w) === y;
  }, qe.isElement = function(w) {
    return typeof w == "object" && w !== null && w.$$typeof === e;
  }, qe.isForwardRef = function(w) {
    return x(w) === S;
  }, qe.isFragment = function(w) {
    return x(w) === r;
  }, qe.isLazy = function(w) {
    return x(w) === O;
  }, qe.isMemo = function(w) {
    return x(w) === I;
  }, qe.isPortal = function(w) {
    return x(w) === t;
  }, qe.isProfiler = function(w) {
    return x(w) === c;
  }, qe.isStrictMode = function(w) {
    return x(w) === i;
  }, qe.isSuspense = function(w) {
    return x(w) === k;
  }, qe.isSuspenseList = function(w) {
    return x(w) === g;
  }, qe.isValidElementType = function(w) {
    return typeof w == "string" || typeof w == "function" || w === r || w === c || w === i || w === k || w === g || w === j || typeof w == "object" && w !== null && (w.$$typeof === O || w.$$typeof === I || w.$$typeof === y || w.$$typeof === u || w.$$typeof === S || w.$$typeof === q || w.getModuleId !== void 0);
  }, qe.typeOf = x, qe;
}
var bo;
function Cc() {
  return bo || (bo = 1, go.exports = /* @__PURE__ */ xc()), go.exports;
}
var gs = /* @__PURE__ */ Cc();
function Tc(e) {
  function t(F, E, L, M, h) {
    for (var ee = 0, C = 0, ie = 0, J = 0, te, Z, ne = 0, de = 0, K, ge = K = te = 0, re = 0, le = 0, $e = 0, ce = 0, it = L.length, He = it - 1, Se, H = "", oe = "", Xe = "", De = "", Pe; re < it; ) {
      if (Z = L.charCodeAt(re), re === He && C + J + ie + ee !== 0 && (C !== 0 && (Z = C === 47 ? 10 : 47), J = ie = ee = 0, it++, He++), C + J + ie + ee === 0) {
        if (re === He && (0 < le && (H = H.replace(j, "")), 0 < H.trim().length)) {
          switch (Z) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              H += L.charAt(re);
          }
          Z = 59;
        }
        switch (Z) {
          case 123:
            for (H = H.trim(), te = H.charCodeAt(0), K = 1, ce = ++re; re < it; ) {
              switch (Z = L.charCodeAt(re)) {
                case 123:
                  K++;
                  break;
                case 125:
                  K--;
                  break;
                case 47:
                  switch (Z = L.charCodeAt(re + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (ge = re + 1; ge < He; ++ge)
                          switch (L.charCodeAt(ge)) {
                            case 47:
                              if (Z === 42 && L.charCodeAt(ge - 1) === 42 && re + 2 !== ge) {
                                re = ge + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (Z === 47) {
                                re = ge + 1;
                                break e;
                              }
                          }
                        re = ge;
                      }
                  }
                  break;
                case 91:
                  Z++;
                case 40:
                  Z++;
                case 34:
                case 39:
                  for (; re++ < He && L.charCodeAt(re) !== Z; )
                    ;
              }
              if (K === 0) break;
              re++;
            }
            switch (K = L.substring(ce, re), te === 0 && (te = (H = H.replace(O, "").trim()).charCodeAt(0)), te) {
              case 64:
                switch (0 < le && (H = H.replace(j, "")), Z = H.charCodeAt(1), Z) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    le = E;
                    break;
                  default:
                    le = st;
                }
                if (K = t(E, le, K, Z, h + 1), ce = K.length, 0 < Re && (le = r(st, H, $e), Pe = S(3, K, le, E, Oe, me, ce, Z, h, M), H = le.join(""), Pe !== void 0 && (ce = (K = Pe.trim()).length) === 0 && (Z = 0, K = "")), 0 < ce) switch (Z) {
                  case 115:
                    H = H.replace(ae, y);
                  case 100:
                  case 109:
                  case 45:
                    K = H + "{" + K + "}";
                    break;
                  case 107:
                    H = H.replace($, "$1 $2"), K = H + "{" + K + "}", K = Te === 1 || Te === 2 && u("@" + K, 3) ? "@-webkit-" + K + "@" + K : "@" + K;
                    break;
                  default:
                    K = H + K, M === 112 && (K = (oe += K, ""));
                }
                else K = "";
                break;
              default:
                K = t(E, r(E, H, $e), K, M, h + 1);
            }
            Xe += K, K = $e = le = ge = te = 0, H = "", Z = L.charCodeAt(++re);
            break;
          case 125:
          case 59:
            if (H = (0 < le ? H.replace(j, "") : H).trim(), 1 < (ce = H.length)) switch (ge === 0 && (te = H.charCodeAt(0), te === 45 || 96 < te && 123 > te) && (ce = (H = H.replace(" ", ":")).length), 0 < Re && (Pe = S(1, H, E, F, Oe, me, oe.length, M, h, M)) !== void 0 && (ce = (H = Pe.trim()).length) === 0 && (H = "\0\0"), te = H.charCodeAt(0), Z = H.charCodeAt(1), te) {
              case 0:
                break;
              case 64:
                if (Z === 105 || Z === 99) {
                  De += H + L.charAt(re);
                  break;
                }
              default:
                H.charCodeAt(ce - 1) !== 58 && (oe += c(H, te, Z, H.charCodeAt(2)));
            }
            $e = le = ge = te = 0, H = "", Z = L.charCodeAt(++re);
        }
      }
      switch (Z) {
        case 13:
        case 10:
          C === 47 ? C = 0 : 1 + te === 0 && M !== 107 && 0 < H.length && (le = 1, H += "\0"), 0 < Re * tt && S(0, H, E, F, Oe, me, oe.length, M, h, M), me = 1, Oe++;
          break;
        case 59:
        case 125:
          if (C + J + ie + ee === 0) {
            me++;
            break;
          }
        default:
          switch (me++, Se = L.charAt(re), Z) {
            case 9:
            case 32:
              if (J + ee + C === 0) switch (ne) {
                case 44:
                case 58:
                case 9:
                case 32:
                  Se = "";
                  break;
                default:
                  Z !== 32 && (Se = " ");
              }
              break;
            case 0:
              Se = "\\0";
              break;
            case 12:
              Se = "\\f";
              break;
            case 11:
              Se = "\\v";
              break;
            case 38:
              J + C + ee === 0 && (le = $e = 1, Se = "\f" + Se);
              break;
            case 108:
              if (J + C + ee + Ne === 0 && 0 < ge) switch (re - ge) {
                case 2:
                  ne === 112 && L.charCodeAt(re - 3) === 58 && (Ne = ne);
                case 8:
                  de === 111 && (Ne = de);
              }
              break;
            case 58:
              J + C + ee === 0 && (ge = re);
              break;
            case 44:
              C + ie + J + ee === 0 && (le = 1, Se += "\r");
              break;
            case 34:
            case 39:
              C === 0 && (J = J === Z ? 0 : J === 0 ? Z : J);
              break;
            case 91:
              J + C + ie === 0 && ee++;
              break;
            case 93:
              J + C + ie === 0 && ee--;
              break;
            case 41:
              J + C + ee === 0 && ie--;
              break;
            case 40:
              if (J + C + ee === 0) {
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
              C + ie + J + ee + ge + K === 0 && (K = 1);
              break;
            case 42:
            case 47:
              if (!(0 < J + ee + ie)) switch (C) {
                case 0:
                  switch (2 * Z + 3 * L.charCodeAt(re + 1)) {
                    case 235:
                      C = 47;
                      break;
                    case 220:
                      ce = re, C = 42;
                  }
                  break;
                case 42:
                  Z === 47 && ne === 42 && ce + 2 !== re && (L.charCodeAt(ce + 2) === 33 && (oe += L.substring(ce, re + 1)), Se = "", C = 0);
              }
          }
          C === 0 && (H += Se);
      }
      de = ne, ne = Z, re++;
    }
    if (ce = oe.length, 0 < ce) {
      if (le = E, 0 < Re && (Pe = S(2, oe, le, F, Oe, me, ce, M, h, M), Pe !== void 0 && (oe = Pe).length === 0)) return De + oe + Xe;
      if (oe = le.join(",") + "{" + oe + "}", Te * Ne !== 0) {
        switch (Te !== 2 || u(oe, 2) || (Ne = 0), Ne) {
          case 111:
            oe = oe.replace(B, ":-moz-$1") + oe;
            break;
          case 112:
            oe = oe.replace(Y, "::-webkit-input-$1") + oe.replace(Y, "::-moz-$1") + oe.replace(Y, ":-ms-input-$1") + oe;
        }
        Ne = 0;
      }
    }
    return De + oe + Xe;
  }
  function r(F, E, L) {
    var M = E.trim().split(P);
    E = M;
    var h = M.length, ee = F.length;
    switch (ee) {
      case 0:
      case 1:
        var C = 0;
        for (F = ee === 0 ? "" : F[0] + " "; C < h; ++C)
          E[C] = i(F, E[C], L).trim();
        break;
      default:
        var ie = C = 0;
        for (E = []; C < h; ++C)
          for (var J = 0; J < ee; ++J)
            E[ie++] = i(F[J] + " ", M[C], L).trim();
    }
    return E;
  }
  function i(F, E, L) {
    var M = E.charCodeAt(0);
    switch (33 > M && (M = (E = E.trim()).charCodeAt(0)), M) {
      case 38:
        return E.replace(V, "$1" + F.trim());
      case 58:
        return F.trim() + E.replace(V, "$1" + F.trim());
      default:
        if (0 < 1 * L && 0 < E.indexOf("\f")) return E.replace(V, (F.charCodeAt(0) === 58 ? "" : "$1") + F.trim());
    }
    return F + E;
  }
  function c(F, E, L, M) {
    var h = F + ";", ee = 2 * E + 3 * L + 4 * M;
    if (ee === 944) {
      F = h.indexOf(":", 9) + 1;
      var C = h.substring(F, h.length - 1).trim();
      return C = h.substring(0, F).trim() + C + ";", Te === 1 || Te === 2 && u(C, 1) ? "-webkit-" + C + C : C;
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
        return C = h.substring(h.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + C + "-webkit-" + h + "-ms-flex-pack" + C + h;
      case 1005:
        return x.test(h) ? h.replace(q, ":-webkit-") + h.replace(q, ":-moz-") + h : h;
      case 1e3:
        switch (C = h.substring(13).trim(), E = C.indexOf("-") + 1, C.charCodeAt(0) + C.charCodeAt(E)) {
          case 226:
            C = h.replace(_, "tb");
            break;
          case 232:
            C = h.replace(_, "tb-rl");
            break;
          case 220:
            C = h.replace(_, "lr");
            break;
          default:
            return h;
        }
        return "-webkit-" + h + "-ms-" + C + h;
      case 1017:
        if (h.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (E = (h = F).length - 10, C = (h.charCodeAt(E) === 33 ? h.substring(0, E) : h).substring(F.indexOf(":", 7) + 1).trim(), ee = C.charCodeAt(0) + (C.charCodeAt(7) | 0)) {
          case 203:
            if (111 > C.charCodeAt(8)) break;
          case 115:
            h = h.replace(C, "-webkit-" + C) + ";" + h;
            break;
          case 207:
          case 102:
            h = h.replace(C, "-webkit-" + (102 < ee ? "inline-" : "") + "box") + ";" + h.replace(C, "-webkit-" + C) + ";" + h.replace(C, "-ms-" + C + "box") + ";" + h;
        }
        return h + ";";
      case 938:
        if (h.charCodeAt(5) === 45) switch (h.charCodeAt(6)) {
          case 105:
            return C = h.replace("-items", ""), "-webkit-" + h + "-webkit-box-" + C + "-ms-flex-" + C + h;
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
        if (Ge.test(F) === !0) return (C = F.substring(F.indexOf(":") + 1)).charCodeAt(0) === 115 ? c(F.replace("stretch", "fill-available"), E, L, M).replace(":fill-available", ":stretch") : h.replace(C, "-webkit-" + C) + h.replace(C, "-moz-" + C.replace("fill-", "")) + h;
        break;
      case 962:
        if (h = "-webkit-" + h + (h.charCodeAt(5) === 102 ? "-ms-" + h : "") + h, L + M === 211 && h.charCodeAt(13) === 105 && 0 < h.indexOf("transform", 10)) return h.substring(0, h.indexOf(";", 27) + 1).replace(w, "$1-webkit-$2") + h;
    }
    return h;
  }
  function u(F, E) {
    var L = F.indexOf(E === 1 ? ":" : "{"), M = F.substring(0, E !== 3 ? L : 10);
    return L = F.substring(L + 1, F.length - 1), We(E !== 2 ? M : M.replace(Le, "$1"), L, E);
  }
  function y(F, E) {
    var L = c(E, E.charCodeAt(0), E.charCodeAt(1), E.charCodeAt(2));
    return L !== E + ";" ? L.replace(ke, " or ($1)").substring(4) : "(" + E + ")";
  }
  function S(F, E, L, M, h, ee, C, ie, J, te) {
    for (var Z = 0, ne = E, de; Z < Re; ++Z)
      switch (de = Fe[Z].call(I, F, ne, L, M, h, ee, C, ie, J, te)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          ne = de;
      }
    if (ne !== E) return ne;
  }
  function k(F) {
    switch (F) {
      case void 0:
      case null:
        Re = Fe.length = 0;
        break;
      default:
        if (typeof F == "function") Fe[Re++] = F;
        else if (typeof F == "object") for (var E = 0, L = F.length; E < L; ++E)
          k(F[E]);
        else tt = !!F | 0;
    }
    return k;
  }
  function g(F) {
    return F = F.prefix, F !== void 0 && (We = null, F ? typeof F != "function" ? Te = 1 : (Te = 2, We = F) : Te = 0), g;
  }
  function I(F, E) {
    var L = F;
    if (33 > L.charCodeAt(0) && (L = L.trim()), se = L, L = [se], 0 < Re) {
      var M = S(-1, E, L, L, Oe, me, 0, 0, 0, 0);
      M !== void 0 && typeof M == "string" && (E = M);
    }
    var h = t(st, L, E, 0, 0);
    return 0 < Re && (M = S(-2, h, L, L, Oe, me, h.length, 0, 0, 0), M !== void 0 && (h = M)), se = "", Ne = 0, me = Oe = 1, h;
  }
  var O = /^\0+/g, j = /[\0\r\f]/g, q = /: */g, x = /zoo|gra/, w = /([,: ])(transform)/g, P = /,\r+?/g, V = /([\t\r\n ])*\f?&/g, $ = /@(k\w+)\s*(\S*)\s*/, Y = /::(place)/g, B = /:(read-only)/g, _ = /[svh]\w+-[tblr]{2}/, ae = /\(\s*(.*)\s*\)/g, ke = /([\s\S]*?);/g, Ie = /-self|flex-/g, Le = /[^]*?(:[rp][el]a[\w-]+)[^]*/, Ge = /stretch|:\s*\w+\-(?:conte|avail)/, ue = /([^-])(image-set\()/, me = 1, Oe = 1, Ne = 0, Te = 1, st = [], Fe = [], Re = 0, We = null, tt = 0, se = "";
  return I.use = k, I.set = g, e !== void 0 && g(e), I;
}
var Ec = {
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
var Rc = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, vo = /* @__PURE__ */ Ac(
  function(e) {
    return Rc.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), wo = { exports: {} }, ze = {}, ko;
function Oc() {
  if (ko) return ze;
  ko = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, i = e ? Symbol.for("react.fragment") : 60107, c = e ? Symbol.for("react.strict_mode") : 60108, u = e ? Symbol.for("react.profiler") : 60114, y = e ? Symbol.for("react.provider") : 60109, S = e ? Symbol.for("react.context") : 60110, k = e ? Symbol.for("react.async_mode") : 60111, g = e ? Symbol.for("react.concurrent_mode") : 60111, I = e ? Symbol.for("react.forward_ref") : 60112, O = e ? Symbol.for("react.suspense") : 60113, j = e ? Symbol.for("react.suspense_list") : 60120, q = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, w = e ? Symbol.for("react.block") : 60121, P = e ? Symbol.for("react.fundamental") : 60117, V = e ? Symbol.for("react.responder") : 60118, $ = e ? Symbol.for("react.scope") : 60119;
  function Y(_) {
    if (typeof _ == "object" && _ !== null) {
      var ae = _.$$typeof;
      switch (ae) {
        case t:
          switch (_ = _.type, _) {
            case k:
            case g:
            case i:
            case u:
            case c:
            case O:
              return _;
            default:
              switch (_ = _ && _.$$typeof, _) {
                case S:
                case I:
                case x:
                case q:
                case y:
                  return _;
                default:
                  return ae;
              }
          }
        case r:
          return ae;
      }
    }
  }
  function B(_) {
    return Y(_) === g;
  }
  return ze.AsyncMode = k, ze.ConcurrentMode = g, ze.ContextConsumer = S, ze.ContextProvider = y, ze.Element = t, ze.ForwardRef = I, ze.Fragment = i, ze.Lazy = x, ze.Memo = q, ze.Portal = r, ze.Profiler = u, ze.StrictMode = c, ze.Suspense = O, ze.isAsyncMode = function(_) {
    return B(_) || Y(_) === k;
  }, ze.isConcurrentMode = B, ze.isContextConsumer = function(_) {
    return Y(_) === S;
  }, ze.isContextProvider = function(_) {
    return Y(_) === y;
  }, ze.isElement = function(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === t;
  }, ze.isForwardRef = function(_) {
    return Y(_) === I;
  }, ze.isFragment = function(_) {
    return Y(_) === i;
  }, ze.isLazy = function(_) {
    return Y(_) === x;
  }, ze.isMemo = function(_) {
    return Y(_) === q;
  }, ze.isPortal = function(_) {
    return Y(_) === r;
  }, ze.isProfiler = function(_) {
    return Y(_) === u;
  }, ze.isStrictMode = function(_) {
    return Y(_) === c;
  }, ze.isSuspense = function(_) {
    return Y(_) === O;
  }, ze.isValidElementType = function(_) {
    return typeof _ == "string" || typeof _ == "function" || _ === i || _ === g || _ === u || _ === c || _ === O || _ === j || typeof _ == "object" && _ !== null && (_.$$typeof === x || _.$$typeof === q || _.$$typeof === y || _.$$typeof === S || _.$$typeof === I || _.$$typeof === P || _.$$typeof === V || _.$$typeof === $ || _.$$typeof === w);
  }, ze.typeOf = Y, ze;
}
var So;
function Ic() {
  return So || (So = 1, wo.exports = Oc()), wo.exports;
}
var Fa, _o;
function Nc() {
  if (_o) return Fa;
  _o = 1;
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
  function y(x) {
    return e.isMemo(x) ? c : u[x.$$typeof] || t;
  }
  var S = Object.defineProperty, k = Object.getOwnPropertyNames, g = Object.getOwnPropertySymbols, I = Object.getOwnPropertyDescriptor, O = Object.getPrototypeOf, j = Object.prototype;
  function q(x, w, P) {
    if (typeof w != "string") {
      if (j) {
        var V = O(w);
        V && V !== j && q(x, V, P);
      }
      var $ = k(w);
      g && ($ = $.concat(g(w)));
      for (var Y = y(x), B = y(w), _ = 0; _ < $.length; ++_) {
        var ae = $[_];
        if (!r[ae] && !(P && P[ae]) && !(B && B[ae]) && !(Y && Y[ae])) {
          var ke = I(w, ae);
          try {
            S(x, ae, ke);
          } catch {
          }
        }
      }
    }
    return x;
  }
  return Fa = q, Fa;
}
var Dc = Nc();
const Pc = /* @__PURE__ */ oi(Dc);
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
var xo = function(e, t) {
  for (var r = [e[0]], i = 0, c = t.length; i < c; i += 1) r.push(t[i], e[i + 1]);
  return r;
}, Za = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !gs.typeOf(e);
}, Qn = Object.freeze([]), wr = Object.freeze({});
function pn(e) {
  return typeof e == "function";
}
function Co(e) {
  return e.displayName || e.name || "Component";
}
function li(e) {
  return e && typeof e.styledComponentId == "string";
}
var Lr = typeof yt < "u" && yt.env !== void 0 && (yt.env.REACT_APP_SC_ATTR || yt.env.SC_ATTR) || "data-styled", ci = typeof window < "u" && "HTMLElement" in window, Mc = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof yt < "u" && yt.env !== void 0 && (yt.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && yt.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? yt.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && yt.env.REACT_APP_SC_DISABLE_SPEEDY : yt.env.SC_DISABLE_SPEEDY !== void 0 && yt.env.SC_DISABLE_SPEEDY !== "" ? yt.env.SC_DISABLE_SPEEDY !== "false" && yt.env.SC_DISABLE_SPEEDY : yt.env.NODE_ENV !== "production"));
function yn(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : ""));
}
var Lc = function() {
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
    for (var k = this.indexOfGroup(r + 1), g = 0, I = i.length; g < I; g++) this.tag.insertRule(k, i[g]) && (this.groupSizes[r]++, k++);
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
}(), Xn = /* @__PURE__ */ new Map(), Jn = /* @__PURE__ */ new Map(), cn = 1, Un = function(e) {
  if (Xn.has(e)) return Xn.get(e);
  for (; Jn.has(cn); ) cn++;
  var t = cn++;
  return Xn.set(e, t), Jn.set(t, e), t;
}, Fc = function(e) {
  return Jn.get(e);
}, jc = function(e, t) {
  t >= cn && (cn = t + 1), Xn.set(e, t), Jn.set(t, e);
}, zc = "style[" + Lr + '][data-styled-version="5.3.11"]', Uc = new RegExp("^" + Lr + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), $c = function(e, t, r) {
  for (var i, c = r.split(","), u = 0, y = c.length; u < y; u++) (i = c[u]) && e.registerName(t, i);
}, Bc = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), i = [], c = 0, u = r.length; c < u; c++) {
    var y = r[c].trim();
    if (y) {
      var S = y.match(Uc);
      if (S) {
        var k = 0 | parseInt(S[1], 10), g = S[2];
        k !== 0 && (jc(g, k), $c(e, g, S[3]), e.getTag().insertRules(k, i)), i.length = 0;
      } else i.push(y);
    }
  }
}, Wc = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, ys = function(e) {
  var t = document.head, r = e || t, i = document.createElement("style"), c = function(S) {
    for (var k = S.childNodes, g = k.length; g >= 0; g--) {
      var I = k[g];
      if (I && I.nodeType === 1 && I.hasAttribute(Lr)) return I;
    }
  }(r), u = c !== void 0 ? c.nextSibling : null;
  i.setAttribute(Lr, "active"), i.setAttribute("data-styled-version", "5.3.11");
  var y = Wc();
  return y && i.setAttribute("nonce", y), r.insertBefore(i, u), i;
}, Hc = function() {
  function e(r) {
    var i = this.element = ys(r);
    i.appendChild(document.createTextNode("")), this.sheet = function(c) {
      if (c.sheet) return c.sheet;
      for (var u = document.styleSheets, y = 0, S = u.length; y < S; y++) {
        var k = u[y];
        if (k.ownerNode === c) return k;
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
}(), Vc = function() {
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
}(), To = ci, Yc = { isServer: !ci, useCSSOMInjection: !Mc }, bs = function() {
  function e(r, i, c) {
    r === void 0 && (r = wr), i === void 0 && (i = {}), this.options = pr({}, Yc, {}, r), this.gs = i, this.names = new Map(c), this.server = !!r.isServer, !this.server && ci && To && (To = !1, function(u) {
      for (var y = document.querySelectorAll(zc), S = 0, k = y.length; S < k; S++) {
        var g = y[S];
        g && g.getAttribute(Lr) !== "active" && (Bc(u, g), g.parentNode && g.parentNode.removeChild(g));
      }
    }(this));
  }
  e.registerId = function(r) {
    return Un(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, i) {
    return i === void 0 && (i = !0), new e(pr({}, this.options, {}, r), this.gs, i && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (c = (i = this.options).isServer, u = i.useCSSOMInjection, y = i.target, r = c ? new Vc(y) : u ? new Hc(y) : new qc(y), new Lc(r)));
    var r, i, c, u, y;
  }, t.hasNameForId = function(r, i) {
    return this.names.has(r) && this.names.get(r).has(i);
  }, t.registerName = function(r, i) {
    if (Un(r), this.names.has(r)) this.names.get(r).add(i);
    else {
      var c = /* @__PURE__ */ new Set();
      c.add(i), this.names.set(r, c);
    }
  }, t.insertRules = function(r, i, c) {
    this.registerName(r, i), this.getTag().insertRules(Un(r), c);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(Un(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var i = r.getTag(), c = i.length, u = "", y = 0; y < c; y++) {
        var S = Fc(y);
        if (S !== void 0) {
          var k = r.names.get(S), g = i.getGroup(y);
          if (k && g && k.size) {
            var I = Lr + ".g" + y + '[id="' + S + '"]', O = "";
            k !== void 0 && k.forEach(function(j) {
              j.length > 0 && (O += j + ",");
            }), u += "" + g + I + '{content:"' + O + `"}/*!sc*/
`;
          }
        }
      }
      return u;
    }(this);
  }, e;
}(), Gc = /(a)(d)/gi, Eo = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Xa(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = Eo(t % 52) + r;
  return (Eo(t % 52) + r).replace(Gc, "$1-$2");
}
var Pr = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, vs = function(e) {
  return Pr(5381, e);
};
function Zc(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (pn(r) && !li(r)) return !1;
  }
  return !0;
}
var Xc = vs("5.3.11"), Kc = function() {
  function e(t, r, i) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (i === void 0 || i.isStatic) && Zc(t), this.componentId = r, this.baseHash = Pr(Xc, r), this.baseStyle = i, bs.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, i) {
    var c = this.componentId, u = [];
    if (this.baseStyle && u.push(this.baseStyle.generateAndInjectStyles(t, r, i)), this.isStatic && !i.hash) if (this.staticRulesId && r.hasNameForId(c, this.staticRulesId)) u.push(this.staticRulesId);
    else {
      var y = Fr(this.rules, t, r, i).join(""), S = Xa(Pr(this.baseHash, y) >>> 0);
      if (!r.hasNameForId(c, S)) {
        var k = i(y, "." + S, void 0, c);
        r.insertRules(c, S, k);
      }
      u.push(S), this.staticRulesId = S;
    }
    else {
      for (var g = this.rules.length, I = Pr(this.baseHash, i.hash), O = "", j = 0; j < g; j++) {
        var q = this.rules[j];
        if (typeof q == "string") O += q;
        else if (q) {
          var x = Fr(q, t, r, i), w = Array.isArray(x) ? x.join("") : x;
          I = Pr(I, w + j), O += w;
        }
      }
      if (O) {
        var P = Xa(I >>> 0);
        if (!r.hasNameForId(c, P)) {
          var V = i(O, "." + P, void 0, c);
          r.insertRules(c, P, V);
        }
        u.push(P);
      }
    }
    return u.join(" ");
  }, e;
}(), Qc = /^\s*\/\/.*$/gm, Jc = [":", "[", ".", "#"];
function eu(e) {
  var t, r, i, c, u = wr, y = u.options, S = y === void 0 ? wr : y, k = u.plugins, g = k === void 0 ? Qn : k, I = new Tc(S), O = [], j = /* @__PURE__ */ function(w) {
    function P(V) {
      if (V) try {
        w(V + "}");
      } catch {
      }
    }
    return function(V, $, Y, B, _, ae, ke, Ie, Le, Ge) {
      switch (V) {
        case 1:
          if (Le === 0 && $.charCodeAt(0) === 64) return w($ + ";"), "";
          break;
        case 2:
          if (Ie === 0) return $ + "/*|*/";
          break;
        case 3:
          switch (Ie) {
            case 102:
            case 112:
              return w(Y[0] + $), "";
            default:
              return $ + (Ge === 0 ? "/*|*/" : "");
          }
        case -2:
          $.split("/*|*/}").forEach(P);
      }
    };
  }(function(w) {
    O.push(w);
  }), q = function(w, P, V) {
    return P === 0 && Jc.indexOf(V[r.length]) !== -1 || V.match(c) ? w : "." + t;
  };
  function x(w, P, V, $) {
    $ === void 0 && ($ = "&");
    var Y = w.replace(Qc, ""), B = P && V ? V + " " + P + " { " + Y + " }" : Y;
    return t = $, r = P, i = new RegExp("\\" + r + "\\b", "g"), c = new RegExp("(\\" + r + "\\b){2,}"), I(V || !P ? "" : P, B);
  }
  return I.use([].concat(g, [function(w, P, V) {
    w === 2 && V.length && V[0].lastIndexOf(r) > 0 && (V[0] = V[0].replace(i, q));
  }, j, function(w) {
    if (w === -2) {
      var P = O;
      return O = [], P;
    }
  }])), x.hash = g.length ? g.reduce(function(w, P) {
    return P.name || yn(15), Pr(w, P.name);
  }, 5381).toString() : "", x;
}
var ws = ft.createContext();
ws.Consumer;
var ks = ft.createContext(), tu = (ks.Consumer, new bs()), Ka = eu();
function ru() {
  return _r(ws) || tu;
}
function nu() {
  return _r(ks) || Ka;
}
var au = function() {
  function e(t, r) {
    var i = this;
    this.inject = function(c, u) {
      u === void 0 && (u = Ka);
      var y = i.name + u.hash;
      c.hasNameForId(i.id, y) || c.insertRules(i.id, y, u(i.rules, y, "@keyframes"));
    }, this.toString = function() {
      return yn(12, String(i.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Ka), this.name + t.hash;
  }, e;
}(), iu = /([A-Z])/, ou = /([A-Z])/g, su = /^ms-/, lu = function(e) {
  return "-" + e.toLowerCase();
};
function Ao(e) {
  return iu.test(e) ? e.replace(ou, lu).replace(su, "-ms-") : e;
}
var Ro = function(e) {
  return e == null || e === !1 || e === "";
};
function Fr(e, t, r, i) {
  if (Array.isArray(e)) {
    for (var c, u = [], y = 0, S = e.length; y < S; y += 1) (c = Fr(e[y], t, r, i)) !== "" && (Array.isArray(c) ? u.push.apply(u, c) : u.push(c));
    return u;
  }
  if (Ro(e)) return "";
  if (li(e)) return "." + e.styledComponentId;
  if (pn(e)) {
    if (typeof (g = e) != "function" || g.prototype && g.prototype.isReactComponent || !t) return e;
    var k = e(t);
    return Fr(k, t, r, i);
  }
  var g;
  return e instanceof au ? r ? (e.inject(r, i), e.getName(i)) : e : Za(e) ? function I(O, j) {
    var q, x, w = [];
    for (var P in O) O.hasOwnProperty(P) && !Ro(O[P]) && (Array.isArray(O[P]) && O[P].isCss || pn(O[P]) ? w.push(Ao(P) + ":", O[P], ";") : Za(O[P]) ? w.push.apply(w, I(O[P], P)) : w.push(Ao(P) + ": " + (q = P, (x = O[P]) == null || typeof x == "boolean" || x === "" ? "" : typeof x != "number" || x === 0 || q in Ec || q.startsWith("--") ? String(x).trim() : x + "px") + ";"));
    return j ? [j + " {"].concat(w, ["}"]) : w;
  }(e) : e.toString();
}
var Oo = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function cu(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
  return pn(e) || Za(e) ? Oo(Fr(xo(Qn, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Oo(Fr(xo(e, r)));
}
var uu = function(e, t, r) {
  return r === void 0 && (r = wr), e.theme !== r.theme && e.theme || t || r.theme;
}, du = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, fu = /(^-|-$)/g;
function ja(e) {
  return e.replace(du, "-").replace(fu, "");
}
var pu = function(e) {
  return Xa(vs(e) >>> 0);
};
function $n(e) {
  return typeof e == "string" && yt.env.NODE_ENV === "production";
}
var Qa = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, hu = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function mu(e, t, r) {
  var i = e[r];
  Qa(t) && Qa(i) ? Ss(i, t) : e[r] = t;
}
function Ss(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
  for (var c = 0, u = r; c < u.length; c++) {
    var y = u[c];
    if (Qa(y)) for (var S in y) hu(S) && mu(e, y[S], S);
  }
  return e;
}
var _s = ft.createContext();
_s.Consumer;
var za = {};
function xs(e, t, r) {
  var i = li(e), c = !$n(e), u = t.attrs, y = u === void 0 ? Qn : u, S = t.componentId, k = S === void 0 ? function($, Y) {
    var B = typeof $ != "string" ? "sc" : ja($);
    za[B] = (za[B] || 0) + 1;
    var _ = B + "-" + pu("5.3.11" + B + za[B]);
    return Y ? Y + "-" + _ : _;
  }(t.displayName, t.parentComponentId) : S, g = t.displayName, I = g === void 0 ? function($) {
    return $n($) ? "styled." + $ : "Styled(" + Co($) + ")";
  }(e) : g, O = t.displayName && t.componentId ? ja(t.displayName) + "-" + t.componentId : t.componentId || k, j = i && e.attrs ? Array.prototype.concat(e.attrs, y).filter(Boolean) : y, q = t.shouldForwardProp;
  i && e.shouldForwardProp && (q = t.shouldForwardProp ? function($, Y, B) {
    return e.shouldForwardProp($, Y, B) && t.shouldForwardProp($, Y, B);
  } : e.shouldForwardProp);
  var x, w = new Kc(r, O, i ? e.componentStyle : void 0), P = w.isStatic && y.length === 0, V = function($, Y) {
    return function(B, _, ae, ke) {
      var Ie = B.attrs, Le = B.componentStyle, Ge = B.defaultProps, ue = B.foldedComponentIds, me = B.shouldForwardProp, Oe = B.styledComponentId, Ne = B.target, Te = function(M, h, ee) {
        M === void 0 && (M = wr);
        var C = pr({}, h, { theme: M }), ie = {};
        return ee.forEach(function(J) {
          var te, Z, ne, de = J;
          for (te in pn(de) && (de = de(C)), de) C[te] = ie[te] = te === "className" ? (Z = ie[te], ne = de[te], Z && ne ? Z + " " + ne : Z || ne) : de[te];
        }), [C, ie];
      }(uu(_, _r(_s), Ge) || wr, _, Ie), st = Te[0], Fe = Te[1], Re = function(M, h, ee, C) {
        var ie = ru(), J = nu(), te = h ? M.generateAndInjectStyles(wr, ie, J) : M.generateAndInjectStyles(ee, ie, J);
        return te;
      }(Le, ke, st), We = ae, tt = Fe.$as || _.$as || Fe.as || _.as || Ne, se = $n(tt), F = Fe !== _ ? pr({}, _, {}, Fe) : _, E = {};
      for (var L in F) L[0] !== "$" && L !== "as" && (L === "forwardedAs" ? E.as = F[L] : (me ? me(L, vo, tt) : !se || vo(L)) && (E[L] = F[L]));
      return _.style && Fe.style !== _.style && (E.style = pr({}, _.style, {}, Fe.style)), E.className = Array.prototype.concat(ue, Oe, Re !== Oe ? Re : null, _.className, Fe.className).filter(Boolean).join(" "), E.ref = We, Jo(tt, E);
    }(x, $, Y, P);
  };
  return V.displayName = I, (x = ft.forwardRef(V)).attrs = j, x.componentStyle = w, x.displayName = I, x.shouldForwardProp = q, x.foldedComponentIds = i ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Qn, x.styledComponentId = O, x.target = i ? e.target : e, x.withComponent = function($) {
    var Y = t.componentId, B = function(ae, ke) {
      if (ae == null) return {};
      var Ie, Le, Ge = {}, ue = Object.keys(ae);
      for (Le = 0; Le < ue.length; Le++) Ie = ue[Le], ke.indexOf(Ie) >= 0 || (Ge[Ie] = ae[Ie]);
      return Ge;
    }(t, ["componentId"]), _ = Y && Y + "-" + ($n($) ? $ : ja(Co($)));
    return xs($, pr({}, B, { attrs: j, componentId: _ }), r);
  }, Object.defineProperty(x, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function($) {
    this._foldedDefaultProps = i ? Ss({}, e.defaultProps, $) : $;
  } }), Object.defineProperty(x, "toString", { value: function() {
    return "." + x.styledComponentId;
  } }), c && Pc(x, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), x;
}
var Jt = function(e) {
  return function t(r, i, c) {
    if (c === void 0 && (c = wr), !gs.isValidElementType(i)) return yn(1, String(i));
    var u = function() {
      return r(i, c, cu.apply(void 0, arguments));
    };
    return u.withConfig = function(y) {
      return t(r, i, pr({}, c, {}, y));
    }, u.attrs = function(y) {
      return t(r, i, pr({}, c, { attrs: Array.prototype.concat(c.attrs, y).filter(Boolean) }));
    }, u;
  }(xs, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  Jt[e] = Jt(e);
});
Jt.div`
  &.sticky {
    position: fixed;
    top: var(--uds-anchor-menu-top, 0px);
    left: 0;
    width: 100%;
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
    function S(I) {
      try {
        g(i.next(I));
      } catch (O) {
        y(O);
      }
    }
    function k(I) {
      try {
        g(i.throw(I));
      } catch (O) {
        y(O);
      }
    }
    function g(I) {
      I.done ? u(I.value) : c(I.value).then(S, k);
    }
    g((i = i.apply(e, [])).next());
  });
}, bu = function(e, t) {
  var r = { label: 0, sent: function() {
    if (u[0] & 1) throw u[1];
    return u[1];
  }, trys: [], ops: [] }, i, c, u, y;
  return y = { next: S(0), throw: S(1), return: S(2) }, typeof Symbol == "function" && (y[Symbol.iterator] = function() {
    return this;
  }), y;
  function S(g) {
    return function(I) {
      return k([g, I]);
    };
  }
  function k(g) {
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
}, Cs = function(e, t) {
  var r = {};
  for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (r[i] = e[i]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var c = 0, i = Object.getOwnPropertySymbols(e); c < i.length; c++)
      t.indexOf(i[c]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[c]) && (r[i[c]] = e[i[c]]);
  return r;
}, vu = function(e) {
  return !!e && (typeof e == "object" || typeof e == "function") && typeof e.then == "function";
}, wu = function(e, t) {
  return {
    left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - e / 2,
    top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - t / 2
  };
}, ku = function(e, t) {
  return {
    top: (window.screen.height - t) / 2,
    left: (window.screen.width - e) / 2
  };
};
function Su(e, t, r) {
  var i = t.height, c = t.width, u = Cs(t, ["height", "width"]), y = Nr({ height: i, width: c, location: "no", toolbar: "no", status: "no", directories: "no", menubar: "no", scrollbars: "yes", resizable: "no", centerscreen: "yes", chrome: "yes" }, u), S = window.open(e, "", Object.keys(y).map(function(g) {
    return "".concat(g, "=").concat(y[g]);
  }).join(", "));
  if (r)
    var k = window.setInterval(function() {
      try {
        (S === null || S.closed) && (window.clearInterval(k), r(S));
      } catch (g) {
        console.error(g);
      }
    }, 1e3);
  return S;
}
var _u = (
  /** @class */
  function(e) {
    gu(t, e);
    function t() {
      var r = e !== null && e.apply(this, arguments) || this;
      return r.openShareDialog = function(i) {
        var c = r.props, u = c.onShareWindowClose, y = c.windowHeight, S = y === void 0 ? 400 : y, k = c.windowPosition, g = k === void 0 ? "windowCenter" : k, I = c.windowWidth, O = I === void 0 ? 550 : I, j = Nr({ height: S, width: O }, g === "windowCenter" ? wu(O, S) : ku(O, S));
        Su(i, j, u);
      }, r.handleClick = function(i) {
        return yu(r, void 0, void 0, function() {
          var c, u, y, S, k, g, I, O, j, q;
          return bu(this, function(x) {
            switch (x.label) {
              case 0:
                return c = this.props, u = c.beforeOnClick, y = c.disabled, S = c.networkLink, k = c.onClick, g = c.url, I = c.openShareDialogOnClick, O = c.opts, j = S(g, O), y ? [
                  2
                  /*return*/
                ] : (i.preventDefault(), u ? (q = u(), vu(q) ? [4, q] : [3, 2]) : [3, 2]);
              case 1:
                x.sent(), x.label = 2;
              case 2:
                return I && this.openShareDialog(j), k && k(i, j), [
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
      var k = r.networkName;
      r.onShareWindowClose, r.openShareDialogOnClick, r.opts;
      var g = r.resetButtonStyle, I = r.style;
      r.url, r.windowHeight, r.windowPosition, r.windowWidth;
      var O = Cs(r, ["beforeOnClick", "children", "className", "disabled", "disabledStyle", "forwardedRef", "networkLink", "networkName", "onShareWindowClose", "openShareDialogOnClick", "opts", "resetButtonStyle", "style", "url", "windowHeight", "windowPosition", "windowWidth"]), j = Qt("react-share__ShareButton", {
        "react-share__ShareButton--disabled": !!u,
        disabled: !!u
      }, c), q = Nr(Nr(g ? { backgroundColor: "transparent", border: "none", padding: 0, font: "inherit", color: "inherit", cursor: "pointer" } : {}, I), u && y);
      return ft.createElement("button", Nr({}, O, { "aria-label": O["aria-label"] || k, className: j, onClick: this.handleClick, ref: S, style: q }), i);
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
    var S = r(u), k = ea({}, u), g = Object.keys(S);
    return g.forEach(function(I) {
      delete k[I];
    }), ft.createElement(_u, ea({}, i, k, { forwardedRef: y, networkName: e, networkLink: t, opts: r(u) }));
  }
  return c.displayName = "ShareButton-".concat(e), ii(c);
}
function xu(e, t) {
  var r = t.subject, i = t.body, c = t.separator;
  return "mailto:" + oa({ subject: r, body: i ? i + c + e : e });
}
sa("email", xu, function(e) {
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
var Cu = /* @__PURE__ */ function() {
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
    Cu(t, e);
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
function Eu(e, t) {
  var r = t.quote, i = t.hashtag;
  return un(e, "facebook.url"), "https://www.facebook.com/sharer/sharer.php" + oa({
    u: e,
    quote: r,
    hashtag: i
  });
}
sa("facebook", Eu, function(e) {
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
function Ru(e, t) {
  var r = t.title, i = t.via, c = t.hashtags, u = c === void 0 ? [] : c, y = t.related, S = y === void 0 ? [] : y;
  return un(e, "twitter.url"), un(Array.isArray(u), "twitter.hashtags is not an array"), un(Array.isArray(S), "twitter.related is not an array"), "https://twitter.com/share" + oa({
    url: e,
    text: r,
    via: i,
    hashtags: u.length > 0 ? u.join(",") : void 0,
    related: S.length > 0 ? S.join(",") : void 0
  });
}
sa("twitter", Ru, function(e) {
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
function Ja(e) {
  "@babel/helpers - typeof";
  return Ja = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ja(e);
}
var Ou = (typeof window > "u" ? "undefined" : Ja(window)) === "object" && window.Element || function() {
};
function Iu(e, t, r) {
  if (!(e[t] instanceof Ou))
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
Jt.div`
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
Jt.div`
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
}, Ts = ({
  label: e = "",
  cardTitle: t = "",
  gaData: r,
  ariaLabel: i,
  color: c = "gray",
  disabled: u,
  element: y = "button",
  innerRef: S,
  href: k,
  onClick: g,
  ...I
}) => {
  const O = Qt("btn", "btn-tag", {
    "btn-tag-alt-white": c === "white",
    "btn-tag-alt-gray": c === "gray",
    "btn-tag-alt-dark": c === "dark",
    disabled: u
  });
  let j = y;
  return k && y === "button" && (j = "a"), /* @__PURE__ */ W.jsx(
    Sr,
    {
      gaData: {
        ...Nu,
        section: t,
        // @deprecated - remove at some point
        ...r,
        text: e
      },
      children: /* @__PURE__ */ W.jsx(
        j,
        {
          type: j === "button" && g ? "button" : void 0,
          ...I,
          className: O,
          href: k,
          ref: S,
          onClick: g,
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
  gaData: si,
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
const Es = ({
  src: e,
  alt: t,
  cssClasses: r,
  loading: i = "lazy",
  decoding: c = "async",
  dataTestId: u,
  fetchPriority: y = "auto",
  width: S,
  height: k,
  cardLink: g,
  title: I,
  caption: O,
  captionTitle: j,
  border: q,
  dropShadow: x
}) => {
  const w = {
    src: e,
    alt: t,
    loading: i,
    decoding: c,
    fetchpriority: y,
    // React attribute bug workaround
    ...(r == null ? void 0 : r.length) > 0 && { className: Vl(r) },
    ...u && { "data-testid": u },
    ...S && { width: S },
    ...k && { height: k }
  }, P = Qt("uds-img", {
    borderless: !q,
    "uds-img-drop-shadow": x
  }), V = (Y) => {
    const B = Y ? `${w.className} ${Y}` : w.className;
    return g ? /* @__PURE__ */ W.jsxs("a", { href: g, children: [
      /* @__PURE__ */ W.jsx("img", { ...w, className: B }),
      /* @__PURE__ */ W.jsx("span", { className: "visually-hidden", children: I })
    ] }) : /* @__PURE__ */ W.jsx("img", { ...w, className: B });
  }, $ = () => /* @__PURE__ */ W.jsx("div", { className: P, children: /* @__PURE__ */ W.jsxs("figure", { className: "figure uds-figure", children: [
    V(),
    O && /* @__PURE__ */ W.jsxs("figcaption", { className: "figure-caption uds-figure-caption", children: [
      j && /* @__PURE__ */ W.jsx("h3", { children: j }),
      /* @__PURE__ */ W.jsx(
        "span",
        {
          className: "uds-caption-text",
          dangerouslySetInnerHTML: Ir(O)
        }
      )
    ] })
  ] }) });
  return /* @__PURE__ */ W.jsx(W.Fragment, { children: O ? $() : V(P) });
};
Es.propTypes = {
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
const Du = Jt.div`
  &.cards-components a + &.cards-components a {
    margin-left: 5px;
  }
  .card-button {
    column-gap: 1rem;
  }
  .card-button .btn {
    margin: 0;
  }
`, Pu = (e) => /^[A-Z0-9._+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e), Mu = (e) => !e.startsWith("https://") && !e.startsWith("http://") && Pu(e) ? `mailto:${e}` : e, Io = {
  name: "onclick",
  event: "link",
  action: "click",
  type: "internal link",
  region: "main content"
}, As = (e) => e === "event" || e === "news", vr = ({
  type: e = "default",
  width: t = "100%",
  horizontal: r = !1,
  image: i,
  imageAltText: c,
  title: u,
  icon: y,
  body: S,
  eventFormat: k = "stack",
  eventLocation: g,
  eventTime: I,
  buttons: O,
  linkLabel: j,
  linkUrl: q,
  tags: x,
  showBorders: w = !0,
  cardLink: P
}) => /* @__PURE__ */ W.jsx(
  Rs,
  {
    type: e,
    width: t,
    horizontal: r,
    image: i,
    imageAltText: c,
    title: u,
    icon: y,
    body: S,
    eventFormat: k,
    eventLocation: g,
    eventTime: I,
    buttons: O,
    linkLabel: j,
    linkUrl: q,
    tags: x,
    showBorders: w,
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
const Rs = ({
  type: e = "default",
  width: t = "100%",
  horizontal: r = !1,
  image: i = "",
  imageAltText: c = "",
  title: u,
  icon: y = void 0,
  body: S = "",
  eventFormat: k = "stack",
  eventLocation: g = "",
  eventTime: I = "",
  buttons: O = void 0,
  linkLabel: j = void 0,
  linkUrl: q = void 0,
  tags: x = void 0,
  showBorders: w = !0,
  cardLink: P
}) => {
  const V = Qt("card", "cards-components", {
    "card-degree": e === "degree",
    "card-event": e === "event",
    "card-story": e === "story",
    "card-news": e === "news",
    [`w-${t.replace("%", "")}`]: t !== "100%",
    "card-horizontal": r,
    borderless: !w
  }), $ = typeof i == "string" && i.length > 0, Y = !As(e);
  return /* @__PURE__ */ W.jsxs(Du, { className: V, "data-testid": "card-container", children: [
    $ && /* @__PURE__ */ W.jsx(
      Es,
      {
        src: i,
        alt: c,
        dataTestId: "card-image",
        cssClasses: ["card-img-top"],
        title: u,
        cardLink: Y ? P : void 0
      }
    ),
    !i && y && /* @__PURE__ */ W.jsx(
      "i",
      {
        className: `${y == null ? void 0 : y[0]} fa-${y == null ? void 0 : y[1]} fa-2x card-icon-top`,
        "data-testid": "card-icon"
      }
    ),
    /* @__PURE__ */ W.jsx("div", { className: r ? "card-content-wrapper" : void 0, children: /* @__PURE__ */ W.jsx(
      Os,
      {
        type: e,
        body: S,
        eventFormat: k,
        eventLocation: g,
        eventTime: I,
        title: u,
        buttons: O,
        linkLabel: j,
        linkUrl: q,
        tags: x,
        cardLink: P
      }
    ) })
  ] });
};
Rs.propTypes = {
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
const Os = ({
  type: e = "default",
  body: t = "",
  eventFormat: r = "stack",
  eventLocation: i = "",
  eventTime: c = "",
  title: u,
  buttons: y = void 0,
  linkLabel: S = void 0,
  linkUrl: k = void 0,
  tags: g = void 0,
  cardLink: I
}) => {
  const O = As(e), j = I && !O, q = O && I, x = e === "event" && (c || i);
  return /* @__PURE__ */ W.jsxs(W.Fragment, { children: [
    /* @__PURE__ */ W.jsx("div", { className: "card-header", "data-testid": "card-title", children: /* @__PURE__ */ W.jsx("h3", { className: "card-title", children: j ? /* @__PURE__ */ W.jsx("a", { href: I, children: u }) : u }) }),
    t && /* @__PURE__ */ W.jsx("div", { className: "card-body", "data-testid": "card-body", children: /* @__PURE__ */ W.jsx("div", { dangerouslySetInnerHTML: Ir(t) }) }),
    x && /* @__PURE__ */ W.jsx(
      Is,
      {
        eventFormat: r,
        eventTime: c,
        eventLocation: i
      }
    ),
    q ? /* @__PURE__ */ W.jsx("div", { className: "card-link", "data-testid": "card-link", children: /* @__PURE__ */ W.jsx(
      Sr,
      {
        gaData: {
          ...Io,
          text: u
        },
        children: /* @__PURE__ */ W.jsx("a", { href: I, className: "card-arrow-link", "aria-label": u, children: /* @__PURE__ */ W.jsx("i", { className: "fas fa-arrow-right", "aria-hidden": "true" }) })
      }
    ) }) : /* @__PURE__ */ W.jsxs(W.Fragment, { children: [
      y && /* @__PURE__ */ W.jsx("div", { className: "card-buttons", children: y.map((w) => /* @__PURE__ */ W.jsx(
        "div",
        {
          className: "card-button",
          "data-testid": "card-button",
          children: /* @__PURE__ */ W.jsx(
            ms,
            {
              ariaLabel: w.ariaLabel,
              color: w.color,
              icon: w.icon,
              href: w.href,
              label: w.label,
              onClick: w.onClick,
              size: w.size,
              target: w.target,
              cardTitle: u
            }
          )
        },
        `${w.label}-${w.href}`
      )) }),
      k && S && /* @__PURE__ */ W.jsx("div", { className: "card-link", "data-testid": "card-link", children: /* @__PURE__ */ W.jsx(
        Sr,
        {
          gaData: {
            ...Io,
            section: u,
            text: S
          },
          children: /* @__PURE__ */ W.jsx("a", { href: Mu(k), children: S })
        }
      ) })
    ] }),
    g && /* @__PURE__ */ W.jsx("div", { className: "card-tags", "data-testid": "card-tags", children: g.map((w) => (
      // @ts-ignore
      /* @__PURE__ */ W.jsx(
        Ts,
        {
          ariaLabel: w.ariaLabel,
          color: w.color,
          href: w.href,
          label: w.label,
          onClick: w.onClick,
          cardTitle: u
        },
        `${w.label}-${w.href}`
      )
    )) })
  ] });
};
Os.propTypes = {
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
}) => e === "inline" ? /* @__PURE__ */ W.jsxs("div", { className: "card-event-details", children: [
  r && /* @__PURE__ */ W.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ W.jsx("div", { children: /* @__PURE__ */ W.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ W.jsx("div", { dangerouslySetInnerHTML: Ir(r) })
  ] }),
  t && /* @__PURE__ */ W.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ W.jsx("div", { children: /* @__PURE__ */ W.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ W.jsx(
      "div",
      {
        dangerouslySetInnerHTML: Ir(t)
      }
    )
  ] })
] }) : /* @__PURE__ */ W.jsxs(W.Fragment, { children: [
  r && /* @__PURE__ */ W.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ W.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ W.jsx("div", { children: /* @__PURE__ */ W.jsx("i", { className: "far fa-calendar" }) }),
    /* @__PURE__ */ W.jsx("div", { dangerouslySetInnerHTML: Ir(r) })
  ] }) }),
  t && /* @__PURE__ */ W.jsx("div", { className: "card-event-details", children: /* @__PURE__ */ W.jsxs("div", { className: "card-event-icons", children: [
    /* @__PURE__ */ W.jsx("div", { children: /* @__PURE__ */ W.jsx("i", { className: "fas fa-map-marker-alt" }) }),
    /* @__PURE__ */ W.jsx("span", { children: /* @__PURE__ */ W.jsx(
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
const Lu = Jt.div`
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
`, Fu = () => /* @__PURE__ */ W.jsxs(Lu, { children: [
  /* @__PURE__ */ W.jsx("div", {}),
  /* @__PURE__ */ W.jsx("div", {}),
  /* @__PURE__ */ W.jsx("div", {}),
  /* @__PURE__ */ W.jsx("div", {})
] }), ju = Jt.section``, ui = sl(null), Ns = ({
  defaultProps: e,
  dataSource: t,
  noFeedText: r,
  renderHeader: i,
  renderBody: c,
  dataTransformer: u,
  dataFilter: y,
  maxItems: S
}) => {
  const [{ data: k, loading: g, error: I }, O] = ql(), [j, q] = ln([]), x = { ...e.dataSource, ...t };
  return fn(() => {
    O(x == null ? void 0 : x.url);
  }, [x == null ? void 0 : x.url]), fn(() => {
    const w = k == null ? void 0 : k.nodes.map(u), P = w == null ? void 0 : w.filter(
      (V) => y(V, t == null ? void 0 : t.filters)
    );
    q(S ? P == null ? void 0 : P.slice(0, S) : P);
  }, [k]), // Init the context to be used on its childrens
  /* @__PURE__ */ W.jsx(ui.Provider, { value: { feeds: j }, children: /* @__PURE__ */ W.jsxs(ju, { children: [
    i,
    I ? /* @__PURE__ */ W.jsx("span", { children: "Error, try again!" }) : /* @__PURE__ */ W.jsxs(W.Fragment, { children: [
      g && !(j != null && j.length) && /* @__PURE__ */ W.jsx("div", { className: "text-center mt-4", children: /* @__PURE__ */ W.jsx(Fu, {}) }),
      j != null && j.length ? c : !g && /* @__PURE__ */ W.jsx("p", { className: "text-center", children: r })
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
const di = o.shape({
  color: o.oneOf(["white", "dark"]),
  text: o.string
}), fi = o.shape({
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
  header: di,
  ctaButton: fi,
  dataSource: Ds,
  maxItems: o.number
}), Uu = Jt.div`
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
  const i = { ...e.header, ...t }, c = { ...e.ctaButton, ...r }, u = i.tag || "h2", y = u !== "h2", S = `text-${i.color} ${y ? "h2" : ""}`.trim();
  return /* @__PURE__ */ W.jsxs(
    "div",
    {
      className: "row justify-content-between align-items-center pb-6",
      "data-testid": "feed-header",
      children: [
        /* @__PURE__ */ W.jsx("div", { className: "col-sm-12 col-md-9", children: /* @__PURE__ */ W.jsx(u, { className: S, children: i.text }) }),
        /* @__PURE__ */ W.jsx(Uu, { className: "col-sm-12 col-md-3", children: /* @__PURE__ */ W.jsx(
          Sr,
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
            children: /* @__PURE__ */ W.jsx("a", { className: `btn btn-${c.color}`, href: c.url, children: c.text })
          }
        ) })
      ]
    }
  );
};
Ps.propTypes = {
  defaultProps: zu,
  header: di,
  ctaButton: fi
};
const Ms = ({ children: e }) => /* @__PURE__ */ W.jsx("div", { className: "row", "data-testid": "feed-body", children: /* @__PURE__ */ W.jsx("div", { className: "col", children: e }) });
Ms.propTypes = {
  children: o.element
};
Jt.img`
  width: 100%;
`;
o.oneOf(["heading-hero", "story-hero"]), o.arrayOf(La), o.string;
o.bool, o.bool, o.bool, o.bool, o.string, o.func, o.node, o.bool, o.string, o.bool;
o.oneOf(["default", "bordered"]).isRequired, o.oneOf(["white", "gray1", "gray2", "gray7"]).isRequired, o.number, o.number, o.func.isRequired;
Jt.div`
  button {
    padding: 16px 0;
    border: none;
    outline: none;
  }
`;
o.object, o.bool, o.bool, o.func.isRequired;
const $u = ii(function(e, t) {
  const {
    id: r,
    selected: i,
    title: c,
    selectTab: u,
    leftKeyPressed: y,
    rightKeyPressed: S,
    icon: k,
    gaData: g
  } = e, { isReact: I, isBootstrap: O } = hs(), j = ll(null);
  cl(t, () => ({
    focus() {
      j.current.focus();
    },
    scrollIntoView() {
      var x, w, P, V, $, Y, B;
      const _ = ((x = j.current) == null ? void 0 : x.offsetWidth) / 2 + j.current.offsetLeft, ae = ((P = (w = j.current) == null ? void 0 : w.offsetParent) == null ? void 0 : P.scrollLeft) + (($ = (V = j.current) == null ? void 0 : V.offsetParent) == null ? void 0 : $.offsetWidth) / 2;
      (B = (Y = j.current) == null ? void 0 : Y.offsetParent) == null || B.scrollBy({
        left: _ - ae
      });
    }
  }), []);
  const q = (x) => {
    x.keyCode === 37 ? (x.preventDefault(), y()) : x.keyCode === 39 && (x.preventDefault(), S());
  };
  return /* @__PURE__ */ W.jsx(Sr, { gaData: { ...g, text: c }, children: /* @__PURE__ */ W.jsxs(
    "a",
    {
      ref: j,
      className: `nav-item nav-link ${i ? "active" : ""}`,
      id: r,
      href: `#nav-${r}`,
      role: "tab",
      "aria-controls": `nav-${r}`,
      "aria-selected": i,
      "data-bs-toggle": O && "tab",
      onClick: I && ((x) => u(x, r, c)),
      onKeyDown: I && q,
      tabIndex: i ? "" : "-1",
      children: [
        c,
        " ",
        k && /* @__PURE__ */ W.jsx("i", { className: `${k == null ? void 0 : k[0]} fa-${k == null ? void 0 : k[1]} me-1` })
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
var Bu = !1;
try {
  var No = Object.defineProperty({}, "passive", {
    get: function() {
      Bu = !0;
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
var Bn = {}, Do;
function Wu() {
  if (Do) return Bn;
  Do = 1;
  var e = es;
  return Bn.createRoot = e.createRoot, Bn.hydrateRoot = e.hydrateRoot, Bn;
}
Wu();
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
}, Mo = [
  "eventTopics",
  "eventUnits",
  "interests",
  "audiences",
  "eventTypes",
  "collegeUnit"
], Lo = (e) => e.toLowerCase().split(" ").join("_"), Hu = (e, t) => {
  if (!t) return !0;
  const r = t.split(",");
  for (let i = 0; i < r.length; i += 1) {
    const c = Lo(r[i]);
    for (let u = 0; u < Mo.length; u += 1) {
      const y = Mo[u];
      if (Lo(e[y] || "").includes(c)) return !0;
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
}), pi = ({ children: e, header: t, ctaButton: r, dataSource: i, maxItems: c }) => (
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
          defaultProps: Po
        }
      ) : null,
      renderBody: /* @__PURE__ */ dt.jsx(Ms, { children: e }),
      dataTransformer: qu,
      dataFilter: Hu,
      dataSource: i,
      defaultProps: Po,
      noFeedText: "No events to show.",
      maxItems: c
    }
  )
);
pi.propTypes = {
  header: di,
  ctaButton: fi,
  dataSource: Ds,
  maxItems: Ye.number,
  children: Ye.element
};
const Vu = Ye.shape({
  color: Ye.oneOf(["white", "dark"]),
  text: Ye.string
}), Yu = Ye.shape({
  color: Ye.oneOf(["gold", "maroon", "gray", "dark"]),
  text: Ye.string,
  url: Ye.string
}), Gu = Ye.shape({
  url: Ye.string.isRequired,
  filters: Ye.string
}).isRequired, Ls = {
  header: Vu,
  ctaButton: Yu,
  dataSource: Gu,
  maxItems: Ye.number
}, Zu = (e) => e.toLocaleDateString("en-US", {
  timeZone: "UTC",
  weekday: "long",
  month: "long",
  day: "numeric"
}), Fo = (e) => e.toLocaleString("en-US", {
  timeZone: "UTC"
}), ei = (e) => {
  let t = e.split("T");
  return t = t.length > 1 ? t.join("T") : `${t[0].split(":")[0]}T00:00:00Z`, t;
}, jo = (e) => {
  let t = e.getHours(), r = e.getMinutes();
  const i = t >= 12 ? "p.m." : "a.m.";
  return t %= 12, t = t || 12, r = r < 10 ? `0${r}` : r, `${t}:${r} ${i}`;
}, Fs = (e, t) => {
  const r = ei(e);
  let i = Fo(new Date(r));
  if (i = jo(new Date(i)), !t || e === t)
    return i;
  const c = ei(t);
  let u = Fo(new Date(c));
  return u = jo(new Date(u)), `${i} to ${u}`;
}, ra = (e, t) => {
  const r = ei(e);
  return {
    ISO: r.split("T")[0],
    COMPLETE: Zu(new Date(r))
  }[t];
};
var Ua = { exports: {} }, Ve = {};
var zo;
function Xu() {
  if (zo) return Ve;
  zo = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), u = Symbol.for("react.consumer"), y = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), I = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), j = Symbol.for("react.offscreen"), q = Symbol.for("react.client.reference");
  function x(w) {
    if (typeof w == "object" && w !== null) {
      var P = w.$$typeof;
      switch (P) {
        case e:
          switch (w = w.type, w) {
            case r:
            case c:
            case i:
            case k:
            case g:
              return w;
            default:
              switch (w = w && w.$$typeof, w) {
                case y:
                case S:
                case O:
                case I:
                  return w;
                case u:
                  return w;
                default:
                  return P;
              }
          }
        case t:
          return P;
      }
    }
  }
  return Ve.ContextConsumer = u, Ve.ContextProvider = y, Ve.Element = e, Ve.ForwardRef = S, Ve.Fragment = r, Ve.Lazy = O, Ve.Memo = I, Ve.Portal = t, Ve.Profiler = c, Ve.StrictMode = i, Ve.Suspense = k, Ve.SuspenseList = g, Ve.isContextConsumer = function(w) {
    return x(w) === u;
  }, Ve.isContextProvider = function(w) {
    return x(w) === y;
  }, Ve.isElement = function(w) {
    return typeof w == "object" && w !== null && w.$$typeof === e;
  }, Ve.isForwardRef = function(w) {
    return x(w) === S;
  }, Ve.isFragment = function(w) {
    return x(w) === r;
  }, Ve.isLazy = function(w) {
    return x(w) === O;
  }, Ve.isMemo = function(w) {
    return x(w) === I;
  }, Ve.isPortal = function(w) {
    return x(w) === t;
  }, Ve.isProfiler = function(w) {
    return x(w) === c;
  }, Ve.isStrictMode = function(w) {
    return x(w) === i;
  }, Ve.isSuspense = function(w) {
    return x(w) === k;
  }, Ve.isSuspenseList = function(w) {
    return x(w) === g;
  }, Ve.isValidElementType = function(w) {
    return typeof w == "string" || typeof w == "function" || w === r || w === c || w === i || w === k || w === g || w === j || typeof w == "object" && w !== null && (w.$$typeof === O || w.$$typeof === I || w.$$typeof === y || w.$$typeof === u || w.$$typeof === S || w.$$typeof === q || w.getModuleId !== void 0);
  }, Ve.typeOf = x, Ve;
}
var Uo;
function Ku() {
  return Uo || (Uo = 1, Ua.exports = /* @__PURE__ */ Xu()), Ua.exports;
}
var js = /* @__PURE__ */ Ku();
function Qu(e) {
  function t(F, E, L, M, h) {
    for (var ee = 0, C = 0, ie = 0, J = 0, te, Z, ne = 0, de = 0, K, ge = K = te = 0, re = 0, le = 0, $e = 0, ce = 0, it = L.length, He = it - 1, Se, H = "", oe = "", Xe = "", De = "", Pe; re < it; ) {
      if (Z = L.charCodeAt(re), re === He && C + J + ie + ee !== 0 && (C !== 0 && (Z = C === 47 ? 10 : 47), J = ie = ee = 0, it++, He++), C + J + ie + ee === 0) {
        if (re === He && (0 < le && (H = H.replace(j, "")), 0 < H.trim().length)) {
          switch (Z) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              H += L.charAt(re);
          }
          Z = 59;
        }
        switch (Z) {
          case 123:
            for (H = H.trim(), te = H.charCodeAt(0), K = 1, ce = ++re; re < it; ) {
              switch (Z = L.charCodeAt(re)) {
                case 123:
                  K++;
                  break;
                case 125:
                  K--;
                  break;
                case 47:
                  switch (Z = L.charCodeAt(re + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (ge = re + 1; ge < He; ++ge)
                          switch (L.charCodeAt(ge)) {
                            case 47:
                              if (Z === 42 && L.charCodeAt(ge - 1) === 42 && re + 2 !== ge) {
                                re = ge + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (Z === 47) {
                                re = ge + 1;
                                break e;
                              }
                          }
                        re = ge;
                      }
                  }
                  break;
                case 91:
                  Z++;
                case 40:
                  Z++;
                case 34:
                case 39:
                  for (; re++ < He && L.charCodeAt(re) !== Z; )
                    ;
              }
              if (K === 0) break;
              re++;
            }
            switch (K = L.substring(ce, re), te === 0 && (te = (H = H.replace(O, "").trim()).charCodeAt(0)), te) {
              case 64:
                switch (0 < le && (H = H.replace(j, "")), Z = H.charCodeAt(1), Z) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    le = E;
                    break;
                  default:
                    le = st;
                }
                if (K = t(E, le, K, Z, h + 1), ce = K.length, 0 < Re && (le = r(st, H, $e), Pe = S(3, K, le, E, Oe, me, ce, Z, h, M), H = le.join(""), Pe !== void 0 && (ce = (K = Pe.trim()).length) === 0 && (Z = 0, K = "")), 0 < ce) switch (Z) {
                  case 115:
                    H = H.replace(ae, y);
                  case 100:
                  case 109:
                  case 45:
                    K = H + "{" + K + "}";
                    break;
                  case 107:
                    H = H.replace($, "$1 $2"), K = H + "{" + K + "}", K = Te === 1 || Te === 2 && u("@" + K, 3) ? "@-webkit-" + K + "@" + K : "@" + K;
                    break;
                  default:
                    K = H + K, M === 112 && (K = (oe += K, ""));
                }
                else K = "";
                break;
              default:
                K = t(E, r(E, H, $e), K, M, h + 1);
            }
            Xe += K, K = $e = le = ge = te = 0, H = "", Z = L.charCodeAt(++re);
            break;
          case 125:
          case 59:
            if (H = (0 < le ? H.replace(j, "") : H).trim(), 1 < (ce = H.length)) switch (ge === 0 && (te = H.charCodeAt(0), te === 45 || 96 < te && 123 > te) && (ce = (H = H.replace(" ", ":")).length), 0 < Re && (Pe = S(1, H, E, F, Oe, me, oe.length, M, h, M)) !== void 0 && (ce = (H = Pe.trim()).length) === 0 && (H = "\0\0"), te = H.charCodeAt(0), Z = H.charCodeAt(1), te) {
              case 0:
                break;
              case 64:
                if (Z === 105 || Z === 99) {
                  De += H + L.charAt(re);
                  break;
                }
              default:
                H.charCodeAt(ce - 1) !== 58 && (oe += c(H, te, Z, H.charCodeAt(2)));
            }
            $e = le = ge = te = 0, H = "", Z = L.charCodeAt(++re);
        }
      }
      switch (Z) {
        case 13:
        case 10:
          C === 47 ? C = 0 : 1 + te === 0 && M !== 107 && 0 < H.length && (le = 1, H += "\0"), 0 < Re * tt && S(0, H, E, F, Oe, me, oe.length, M, h, M), me = 1, Oe++;
          break;
        case 59:
        case 125:
          if (C + J + ie + ee === 0) {
            me++;
            break;
          }
        default:
          switch (me++, Se = L.charAt(re), Z) {
            case 9:
            case 32:
              if (J + ee + C === 0) switch (ne) {
                case 44:
                case 58:
                case 9:
                case 32:
                  Se = "";
                  break;
                default:
                  Z !== 32 && (Se = " ");
              }
              break;
            case 0:
              Se = "\\0";
              break;
            case 12:
              Se = "\\f";
              break;
            case 11:
              Se = "\\v";
              break;
            case 38:
              J + C + ee === 0 && (le = $e = 1, Se = "\f" + Se);
              break;
            case 108:
              if (J + C + ee + Ne === 0 && 0 < ge) switch (re - ge) {
                case 2:
                  ne === 112 && L.charCodeAt(re - 3) === 58 && (Ne = ne);
                case 8:
                  de === 111 && (Ne = de);
              }
              break;
            case 58:
              J + C + ee === 0 && (ge = re);
              break;
            case 44:
              C + ie + J + ee === 0 && (le = 1, Se += "\r");
              break;
            case 34:
            case 39:
              C === 0 && (J = J === Z ? 0 : J === 0 ? Z : J);
              break;
            case 91:
              J + C + ie === 0 && ee++;
              break;
            case 93:
              J + C + ie === 0 && ee--;
              break;
            case 41:
              J + C + ee === 0 && ie--;
              break;
            case 40:
              if (J + C + ee === 0) {
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
              C + ie + J + ee + ge + K === 0 && (K = 1);
              break;
            case 42:
            case 47:
              if (!(0 < J + ee + ie)) switch (C) {
                case 0:
                  switch (2 * Z + 3 * L.charCodeAt(re + 1)) {
                    case 235:
                      C = 47;
                      break;
                    case 220:
                      ce = re, C = 42;
                  }
                  break;
                case 42:
                  Z === 47 && ne === 42 && ce + 2 !== re && (L.charCodeAt(ce + 2) === 33 && (oe += L.substring(ce, re + 1)), Se = "", C = 0);
              }
          }
          C === 0 && (H += Se);
      }
      de = ne, ne = Z, re++;
    }
    if (ce = oe.length, 0 < ce) {
      if (le = E, 0 < Re && (Pe = S(2, oe, le, F, Oe, me, ce, M, h, M), Pe !== void 0 && (oe = Pe).length === 0)) return De + oe + Xe;
      if (oe = le.join(",") + "{" + oe + "}", Te * Ne !== 0) {
        switch (Te !== 2 || u(oe, 2) || (Ne = 0), Ne) {
          case 111:
            oe = oe.replace(B, ":-moz-$1") + oe;
            break;
          case 112:
            oe = oe.replace(Y, "::-webkit-input-$1") + oe.replace(Y, "::-moz-$1") + oe.replace(Y, ":-ms-input-$1") + oe;
        }
        Ne = 0;
      }
    }
    return De + oe + Xe;
  }
  function r(F, E, L) {
    var M = E.trim().split(P);
    E = M;
    var h = M.length, ee = F.length;
    switch (ee) {
      case 0:
      case 1:
        var C = 0;
        for (F = ee === 0 ? "" : F[0] + " "; C < h; ++C)
          E[C] = i(F, E[C], L).trim();
        break;
      default:
        var ie = C = 0;
        for (E = []; C < h; ++C)
          for (var J = 0; J < ee; ++J)
            E[ie++] = i(F[J] + " ", M[C], L).trim();
    }
    return E;
  }
  function i(F, E, L) {
    var M = E.charCodeAt(0);
    switch (33 > M && (M = (E = E.trim()).charCodeAt(0)), M) {
      case 38:
        return E.replace(V, "$1" + F.trim());
      case 58:
        return F.trim() + E.replace(V, "$1" + F.trim());
      default:
        if (0 < 1 * L && 0 < E.indexOf("\f")) return E.replace(V, (F.charCodeAt(0) === 58 ? "" : "$1") + F.trim());
    }
    return F + E;
  }
  function c(F, E, L, M) {
    var h = F + ";", ee = 2 * E + 3 * L + 4 * M;
    if (ee === 944) {
      F = h.indexOf(":", 9) + 1;
      var C = h.substring(F, h.length - 1).trim();
      return C = h.substring(0, F).trim() + C + ";", Te === 1 || Te === 2 && u(C, 1) ? "-webkit-" + C + C : C;
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
        return C = h.substring(h.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + C + "-webkit-" + h + "-ms-flex-pack" + C + h;
      case 1005:
        return x.test(h) ? h.replace(q, ":-webkit-") + h.replace(q, ":-moz-") + h : h;
      case 1e3:
        switch (C = h.substring(13).trim(), E = C.indexOf("-") + 1, C.charCodeAt(0) + C.charCodeAt(E)) {
          case 226:
            C = h.replace(_, "tb");
            break;
          case 232:
            C = h.replace(_, "tb-rl");
            break;
          case 220:
            C = h.replace(_, "lr");
            break;
          default:
            return h;
        }
        return "-webkit-" + h + "-ms-" + C + h;
      case 1017:
        if (h.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (E = (h = F).length - 10, C = (h.charCodeAt(E) === 33 ? h.substring(0, E) : h).substring(F.indexOf(":", 7) + 1).trim(), ee = C.charCodeAt(0) + (C.charCodeAt(7) | 0)) {
          case 203:
            if (111 > C.charCodeAt(8)) break;
          case 115:
            h = h.replace(C, "-webkit-" + C) + ";" + h;
            break;
          case 207:
          case 102:
            h = h.replace(C, "-webkit-" + (102 < ee ? "inline-" : "") + "box") + ";" + h.replace(C, "-webkit-" + C) + ";" + h.replace(C, "-ms-" + C + "box") + ";" + h;
        }
        return h + ";";
      case 938:
        if (h.charCodeAt(5) === 45) switch (h.charCodeAt(6)) {
          case 105:
            return C = h.replace("-items", ""), "-webkit-" + h + "-webkit-box-" + C + "-ms-flex-" + C + h;
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
        if (Ge.test(F) === !0) return (C = F.substring(F.indexOf(":") + 1)).charCodeAt(0) === 115 ? c(F.replace("stretch", "fill-available"), E, L, M).replace(":fill-available", ":stretch") : h.replace(C, "-webkit-" + C) + h.replace(C, "-moz-" + C.replace("fill-", "")) + h;
        break;
      case 962:
        if (h = "-webkit-" + h + (h.charCodeAt(5) === 102 ? "-ms-" + h : "") + h, L + M === 211 && h.charCodeAt(13) === 105 && 0 < h.indexOf("transform", 10)) return h.substring(0, h.indexOf(";", 27) + 1).replace(w, "$1-webkit-$2") + h;
    }
    return h;
  }
  function u(F, E) {
    var L = F.indexOf(E === 1 ? ":" : "{"), M = F.substring(0, E !== 3 ? L : 10);
    return L = F.substring(L + 1, F.length - 1), We(E !== 2 ? M : M.replace(Le, "$1"), L, E);
  }
  function y(F, E) {
    var L = c(E, E.charCodeAt(0), E.charCodeAt(1), E.charCodeAt(2));
    return L !== E + ";" ? L.replace(ke, " or ($1)").substring(4) : "(" + E + ")";
  }
  function S(F, E, L, M, h, ee, C, ie, J, te) {
    for (var Z = 0, ne = E, de; Z < Re; ++Z)
      switch (de = Fe[Z].call(I, F, ne, L, M, h, ee, C, ie, J, te)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          ne = de;
      }
    if (ne !== E) return ne;
  }
  function k(F) {
    switch (F) {
      case void 0:
      case null:
        Re = Fe.length = 0;
        break;
      default:
        if (typeof F == "function") Fe[Re++] = F;
        else if (typeof F == "object") for (var E = 0, L = F.length; E < L; ++E)
          k(F[E]);
        else tt = !!F | 0;
    }
    return k;
  }
  function g(F) {
    return F = F.prefix, F !== void 0 && (We = null, F ? typeof F != "function" ? Te = 1 : (Te = 2, We = F) : Te = 0), g;
  }
  function I(F, E) {
    var L = F;
    if (33 > L.charCodeAt(0) && (L = L.trim()), se = L, L = [se], 0 < Re) {
      var M = S(-1, E, L, L, Oe, me, 0, 0, 0, 0);
      M !== void 0 && typeof M == "string" && (E = M);
    }
    var h = t(st, L, E, 0, 0);
    return 0 < Re && (M = S(-2, h, L, L, Oe, me, h.length, 0, 0, 0), M !== void 0 && (h = M)), se = "", Ne = 0, me = Oe = 1, h;
  }
  var O = /^\0+/g, j = /[\0\r\f]/g, q = /: */g, x = /zoo|gra/, w = /([,: ])(transform)/g, P = /,\r+?/g, V = /([\t\r\n ])*\f?&/g, $ = /@(k\w+)\s*(\S*)\s*/, Y = /::(place)/g, B = /:(read-only)/g, _ = /[svh]\w+-[tblr]{2}/, ae = /\(\s*(.*)\s*\)/g, ke = /([\s\S]*?);/g, Ie = /-self|flex-/g, Le = /[^]*?(:[rp][el]a[\w-]+)[^]*/, Ge = /stretch|:\s*\w+\-(?:conte|avail)/, ue = /([^-])(image-set\()/, me = 1, Oe = 1, Ne = 0, Te = 1, st = [], Fe = [], Re = 0, We = null, tt = 0, se = "";
  return I.use = k, I.set = g, e !== void 0 && g(e), I;
}
var Ju = {
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
var td = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, $o = /* @__PURE__ */ ed(
  function(e) {
    return td.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), $a = { exports: {} }, Ue = {};
var Bo;
function rd() {
  if (Bo) return Ue;
  Bo = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, i = e ? Symbol.for("react.fragment") : 60107, c = e ? Symbol.for("react.strict_mode") : 60108, u = e ? Symbol.for("react.profiler") : 60114, y = e ? Symbol.for("react.provider") : 60109, S = e ? Symbol.for("react.context") : 60110, k = e ? Symbol.for("react.async_mode") : 60111, g = e ? Symbol.for("react.concurrent_mode") : 60111, I = e ? Symbol.for("react.forward_ref") : 60112, O = e ? Symbol.for("react.suspense") : 60113, j = e ? Symbol.for("react.suspense_list") : 60120, q = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, w = e ? Symbol.for("react.block") : 60121, P = e ? Symbol.for("react.fundamental") : 60117, V = e ? Symbol.for("react.responder") : 60118, $ = e ? Symbol.for("react.scope") : 60119;
  function Y(_) {
    if (typeof _ == "object" && _ !== null) {
      var ae = _.$$typeof;
      switch (ae) {
        case t:
          switch (_ = _.type, _) {
            case k:
            case g:
            case i:
            case u:
            case c:
            case O:
              return _;
            default:
              switch (_ = _ && _.$$typeof, _) {
                case S:
                case I:
                case x:
                case q:
                case y:
                  return _;
                default:
                  return ae;
              }
          }
        case r:
          return ae;
      }
    }
  }
  function B(_) {
    return Y(_) === g;
  }
  return Ue.AsyncMode = k, Ue.ConcurrentMode = g, Ue.ContextConsumer = S, Ue.ContextProvider = y, Ue.Element = t, Ue.ForwardRef = I, Ue.Fragment = i, Ue.Lazy = x, Ue.Memo = q, Ue.Portal = r, Ue.Profiler = u, Ue.StrictMode = c, Ue.Suspense = O, Ue.isAsyncMode = function(_) {
    return B(_) || Y(_) === k;
  }, Ue.isConcurrentMode = B, Ue.isContextConsumer = function(_) {
    return Y(_) === S;
  }, Ue.isContextProvider = function(_) {
    return Y(_) === y;
  }, Ue.isElement = function(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === t;
  }, Ue.isForwardRef = function(_) {
    return Y(_) === I;
  }, Ue.isFragment = function(_) {
    return Y(_) === i;
  }, Ue.isLazy = function(_) {
    return Y(_) === x;
  }, Ue.isMemo = function(_) {
    return Y(_) === q;
  }, Ue.isPortal = function(_) {
    return Y(_) === r;
  }, Ue.isProfiler = function(_) {
    return Y(_) === u;
  }, Ue.isStrictMode = function(_) {
    return Y(_) === c;
  }, Ue.isSuspense = function(_) {
    return Y(_) === O;
  }, Ue.isValidElementType = function(_) {
    return typeof _ == "string" || typeof _ == "function" || _ === i || _ === g || _ === u || _ === c || _ === O || _ === j || typeof _ == "object" && _ !== null && (_.$$typeof === x || _.$$typeof === q || _.$$typeof === y || _.$$typeof === S || _.$$typeof === I || _.$$typeof === P || _.$$typeof === V || _.$$typeof === $ || _.$$typeof === w);
  }, Ue.typeOf = Y, Ue;
}
var Wo;
function nd() {
  return Wo || (Wo = 1, $a.exports = rd()), $a.exports;
}
var Ba, Ho;
function ad() {
  if (Ho) return Ba;
  Ho = 1;
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
  function y(x) {
    return e.isMemo(x) ? c : u[x.$$typeof] || t;
  }
  var S = Object.defineProperty, k = Object.getOwnPropertyNames, g = Object.getOwnPropertySymbols, I = Object.getOwnPropertyDescriptor, O = Object.getPrototypeOf, j = Object.prototype;
  function q(x, w, P) {
    if (typeof w != "string") {
      if (j) {
        var V = O(w);
        V && V !== j && q(x, V, P);
      }
      var $ = k(w);
      g && ($ = $.concat(g(w)));
      for (var Y = y(x), B = y(w), _ = 0; _ < $.length; ++_) {
        var ae = $[_];
        if (!r[ae] && !(P && P[ae]) && !(B && B[ae]) && !(Y && Y[ae])) {
          var ke = I(w, ae);
          try {
            S(x, ae, ke);
          } catch {
          }
        }
      }
    }
    return x;
  }
  return Ba = q, Ba;
}
var id = ad();
const od = /* @__PURE__ */ ts(id);
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
}, ti = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !js.typeOf(e);
}, na = Object.freeze([]), kr = Object.freeze({});
function hn(e) {
  return typeof e == "function";
}
function Vo(e) {
  return e.displayName || e.name || "Component";
}
function hi(e) {
  return e && typeof e.styledComponentId == "string";
}
var jr = typeof bt < "u" && bt.env !== void 0 && (bt.env.REACT_APP_SC_ATTR || bt.env.SC_ATTR) || "data-styled", mi = typeof window < "u" && "HTMLElement" in window, sd = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof bt < "u" && bt.env !== void 0 && (bt.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && bt.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? bt.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && bt.env.REACT_APP_SC_DISABLE_SPEEDY : bt.env.SC_DISABLE_SPEEDY !== void 0 && bt.env.SC_DISABLE_SPEEDY !== "" ? bt.env.SC_DISABLE_SPEEDY !== "false" && bt.env.SC_DISABLE_SPEEDY : bt.env.NODE_ENV !== "production"));
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
      for (var S = u; S < y; S++) this.groupSizes[S] = 0;
    }
    for (var k = this.indexOfGroup(r + 1), g = 0, I = i.length; g < I; g++) this.tag.insertRule(k, i[g]) && (this.groupSizes[r]++, k++);
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
}(), Kn = /* @__PURE__ */ new Map(), aa = /* @__PURE__ */ new Map(), dn = 1, Wn = function(e) {
  if (Kn.has(e)) return Kn.get(e);
  for (; aa.has(dn); ) dn++;
  var t = dn++;
  return Kn.set(e, t), aa.set(t, e), t;
}, cd = function(e) {
  return aa.get(e);
}, ud = function(e, t) {
  t >= dn && (dn = t + 1), Kn.set(e, t), aa.set(t, e);
}, dd = "style[" + jr + '][data-styled-version="5.3.11"]', fd = new RegExp("^" + jr + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), pd = function(e, t, r) {
  for (var i, c = r.split(","), u = 0, y = c.length; u < y; u++) (i = c[u]) && e.registerName(t, i);
}, hd = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), i = [], c = 0, u = r.length; c < u; c++) {
    var y = r[c].trim();
    if (y) {
      var S = y.match(fd);
      if (S) {
        var k = 0 | parseInt(S[1], 10), g = S[2];
        k !== 0 && (ud(g, k), pd(e, g, S[3]), e.getTag().insertRules(k, i)), i.length = 0;
      } else i.push(y);
    }
  }
}, md = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, zs = function(e) {
  var t = document.head, r = e || t, i = document.createElement("style"), c = function(S) {
    for (var k = S.childNodes, g = k.length; g >= 0; g--) {
      var I = k[g];
      if (I && I.nodeType === 1 && I.hasAttribute(jr)) return I;
    }
  }(r), u = c !== void 0 ? c.nextSibling : null;
  i.setAttribute(jr, "active"), i.setAttribute("data-styled-version", "5.3.11");
  var y = md();
  return y && i.setAttribute("nonce", y), r.insertBefore(i, u), i;
}, gd = function() {
  function e(r) {
    var i = this.element = zs(r);
    i.appendChild(document.createTextNode("")), this.sheet = function(c) {
      if (c.sheet) return c.sheet;
      for (var u = document.styleSheets, y = 0, S = u.length; y < S; y++) {
        var k = u[y];
        if (k.ownerNode === c) return k;
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
}(), Yo = mi, vd = { isServer: !mi, useCSSOMInjection: !sd }, Us = function() {
  function e(r, i, c) {
    r === void 0 && (r = kr), i === void 0 && (i = {}), this.options = hr({}, vd, {}, r), this.gs = i, this.names = new Map(c), this.server = !!r.isServer, !this.server && mi && Yo && (Yo = !1, function(u) {
      for (var y = document.querySelectorAll(dd), S = 0, k = y.length; S < k; S++) {
        var g = y[S];
        g && g.getAttribute(jr) !== "active" && (hd(u, g), g.parentNode && g.parentNode.removeChild(g));
      }
    }(this));
  }
  e.registerId = function(r) {
    return Wn(r);
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
    if (Wn(r), this.names.has(r)) this.names.get(r).add(i);
    else {
      var c = /* @__PURE__ */ new Set();
      c.add(i), this.names.set(r, c);
    }
  }, t.insertRules = function(r, i, c) {
    this.registerName(r, i), this.getTag().insertRules(Wn(r), c);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(Wn(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var i = r.getTag(), c = i.length, u = "", y = 0; y < c; y++) {
        var S = cd(y);
        if (S !== void 0) {
          var k = r.names.get(S), g = i.getGroup(y);
          if (k && g && k.size) {
            var I = jr + ".g" + y + '[id="' + S + '"]', O = "";
            k !== void 0 && k.forEach(function(j) {
              j.length > 0 && (O += j + ",");
            }), u += "" + g + I + '{content:"' + O + `"}/*!sc*/
`;
          }
        }
      }
      return u;
    }(this);
  }, e;
}(), wd = /(a)(d)/gi, Go = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function ri(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = Go(t % 52) + r;
  return (Go(t % 52) + r).replace(wd, "$1-$2");
}
var Mr = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, $s = function(e) {
  return Mr(5381, e);
};
function kd(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (hn(r) && !hi(r)) return !1;
  }
  return !0;
}
var Sd = $s("5.3.11"), _d = function() {
  function e(t, r, i) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (i === void 0 || i.isStatic) && kd(t), this.componentId = r, this.baseHash = Mr(Sd, r), this.baseStyle = i, Us.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, i) {
    var c = this.componentId, u = [];
    if (this.baseStyle && u.push(this.baseStyle.generateAndInjectStyles(t, r, i)), this.isStatic && !i.hash) if (this.staticRulesId && r.hasNameForId(c, this.staticRulesId)) u.push(this.staticRulesId);
    else {
      var y = zr(this.rules, t, r, i).join(""), S = ri(Mr(this.baseHash, y) >>> 0);
      if (!r.hasNameForId(c, S)) {
        var k = i(y, "." + S, void 0, c);
        r.insertRules(c, S, k);
      }
      u.push(S), this.staticRulesId = S;
    }
    else {
      for (var g = this.rules.length, I = Mr(this.baseHash, i.hash), O = "", j = 0; j < g; j++) {
        var q = this.rules[j];
        if (typeof q == "string") O += q;
        else if (q) {
          var x = zr(q, t, r, i), w = Array.isArray(x) ? x.join("") : x;
          I = Mr(I, w + j), O += w;
        }
      }
      if (O) {
        var P = ri(I >>> 0);
        if (!r.hasNameForId(c, P)) {
          var V = i(O, "." + P, void 0, c);
          r.insertRules(c, P, V);
        }
        u.push(P);
      }
    }
    return u.join(" ");
  }, e;
}(), xd = /^\s*\/\/.*$/gm, Cd = [":", "[", ".", "#"];
function Td(e) {
  var t, r, i, c, u = kr, y = u.options, S = y === void 0 ? kr : y, k = u.plugins, g = k === void 0 ? na : k, I = new Qu(S), O = [], j = /* @__PURE__ */ function(w) {
    function P(V) {
      if (V) try {
        w(V + "}");
      } catch {
      }
    }
    return function(V, $, Y, B, _, ae, ke, Ie, Le, Ge) {
      switch (V) {
        case 1:
          if (Le === 0 && $.charCodeAt(0) === 64) return w($ + ";"), "";
          break;
        case 2:
          if (Ie === 0) return $ + "/*|*/";
          break;
        case 3:
          switch (Ie) {
            case 102:
            case 112:
              return w(Y[0] + $), "";
            default:
              return $ + (Ge === 0 ? "/*|*/" : "");
          }
        case -2:
          $.split("/*|*/}").forEach(P);
      }
    };
  }(function(w) {
    O.push(w);
  }), q = function(w, P, V) {
    return P === 0 && Cd.indexOf(V[r.length]) !== -1 || V.match(c) ? w : "." + t;
  };
  function x(w, P, V, $) {
    $ === void 0 && ($ = "&");
    var Y = w.replace(xd, ""), B = P && V ? V + " " + P + " { " + Y + " }" : Y;
    return t = $, r = P, i = new RegExp("\\" + r + "\\b", "g"), c = new RegExp("(\\" + r + "\\b){2,}"), I(V || !P ? "" : P, B);
  }
  return I.use([].concat(g, [function(w, P, V) {
    w === 2 && V.length && V[0].lastIndexOf(r) > 0 && (V[0] = V[0].replace(i, q));
  }, j, function(w) {
    if (w === -2) {
      var P = O;
      return O = [], P;
    }
  }])), x.hash = g.length ? g.reduce(function(w, P) {
    return P.name || bn(15), Mr(w, P.name);
  }, 5381).toString() : "", x;
}
var Bs = ft.createContext();
Bs.Consumer;
var Ws = ft.createContext(), Ed = (Ws.Consumer, new Us()), ni = Td();
function Ad() {
  return _r(Bs) || Ed;
}
function Rd() {
  return _r(Ws) || ni;
}
var Od = function() {
  function e(t, r) {
    var i = this;
    this.inject = function(c, u) {
      u === void 0 && (u = ni);
      var y = i.name + u.hash;
      c.hasNameForId(i.id, y) || c.insertRules(i.id, y, u(i.rules, y, "@keyframes"));
    }, this.toString = function() {
      return bn(12, String(i.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = ni), this.name + t.hash;
  }, e;
}(), Id = /([A-Z])/, Nd = /([A-Z])/g, Dd = /^ms-/, Pd = function(e) {
  return "-" + e.toLowerCase();
};
function Zo(e) {
  return Id.test(e) ? e.replace(Nd, Pd).replace(Dd, "-ms-") : e;
}
var Xo = function(e) {
  return e == null || e === !1 || e === "";
};
function zr(e, t, r, i) {
  if (Array.isArray(e)) {
    for (var c, u = [], y = 0, S = e.length; y < S; y += 1) (c = zr(e[y], t, r, i)) !== "" && (Array.isArray(c) ? u.push.apply(u, c) : u.push(c));
    return u;
  }
  if (Xo(e)) return "";
  if (hi(e)) return "." + e.styledComponentId;
  if (hn(e)) {
    if (typeof (g = e) != "function" || g.prototype && g.prototype.isReactComponent || !t) return e;
    var k = e(t);
    return zr(k, t, r, i);
  }
  var g;
  return e instanceof Od ? r ? (e.inject(r, i), e.getName(i)) : e : ti(e) ? function I(O, j) {
    var q, x, w = [];
    for (var P in O) O.hasOwnProperty(P) && !Xo(O[P]) && (Array.isArray(O[P]) && O[P].isCss || hn(O[P]) ? w.push(Zo(P) + ":", O[P], ";") : ti(O[P]) ? w.push.apply(w, I(O[P], P)) : w.push(Zo(P) + ": " + (q = P, (x = O[P]) == null || typeof x == "boolean" || x === "" ? "" : typeof x != "number" || x === 0 || q in Ju || q.startsWith("--") ? String(x).trim() : x + "px") + ";"));
    return j ? [j + " {"].concat(w, ["}"]) : w;
  }(e) : e.toString();
}
var Ko = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Md(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
  return hn(e) || ti(e) ? Ko(zr(qo(na, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Ko(zr(qo(e, r)));
}
var Ld = function(e, t, r) {
  return r === void 0 && (r = kr), e.theme !== r.theme && e.theme || t || r.theme;
}, Fd = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, jd = /(^-|-$)/g;
function Wa(e) {
  return e.replace(Fd, "-").replace(jd, "");
}
var zd = function(e) {
  return ri($s(e) >>> 0);
};
function Hn(e) {
  return typeof e == "string" && bt.env.NODE_ENV === "production";
}
var ai = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Ud = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function $d(e, t, r) {
  var i = e[r];
  ai(t) && ai(i) ? Hs(i, t) : e[r] = t;
}
function Hs(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
  for (var c = 0, u = r; c < u.length; c++) {
    var y = u[c];
    if (ai(y)) for (var S in y) Ud(S) && $d(e, y[S], S);
  }
  return e;
}
var qs = ft.createContext();
qs.Consumer;
var Ha = {};
function Vs(e, t, r) {
  var i = hi(e), c = !Hn(e), u = t.attrs, y = u === void 0 ? na : u, S = t.componentId, k = S === void 0 ? function($, Y) {
    var B = typeof $ != "string" ? "sc" : Wa($);
    Ha[B] = (Ha[B] || 0) + 1;
    var _ = B + "-" + zd("5.3.11" + B + Ha[B]);
    return Y ? Y + "-" + _ : _;
  }(t.displayName, t.parentComponentId) : S, g = t.displayName, I = g === void 0 ? function($) {
    return Hn($) ? "styled." + $ : "Styled(" + Vo($) + ")";
  }(e) : g, O = t.displayName && t.componentId ? Wa(t.displayName) + "-" + t.componentId : t.componentId || k, j = i && e.attrs ? Array.prototype.concat(e.attrs, y).filter(Boolean) : y, q = t.shouldForwardProp;
  i && e.shouldForwardProp && (q = t.shouldForwardProp ? function($, Y, B) {
    return e.shouldForwardProp($, Y, B) && t.shouldForwardProp($, Y, B);
  } : e.shouldForwardProp);
  var x, w = new _d(r, O, i ? e.componentStyle : void 0), P = w.isStatic && y.length === 0, V = function($, Y) {
    return function(B, _, ae, ke) {
      var Ie = B.attrs, Le = B.componentStyle, Ge = B.defaultProps, ue = B.foldedComponentIds, me = B.shouldForwardProp, Oe = B.styledComponentId, Ne = B.target, Te = function(M, h, ee) {
        M === void 0 && (M = kr);
        var C = hr({}, h, { theme: M }), ie = {};
        return ee.forEach(function(J) {
          var te, Z, ne, de = J;
          for (te in hn(de) && (de = de(C)), de) C[te] = ie[te] = te === "className" ? (Z = ie[te], ne = de[te], Z && ne ? Z + " " + ne : Z || ne) : de[te];
        }), [C, ie];
      }(Ld(_, _r(qs), Ge) || kr, _, Ie), st = Te[0], Fe = Te[1], Re = function(M, h, ee, C) {
        var ie = Ad(), J = Rd(), te = h ? M.generateAndInjectStyles(kr, ie, J) : M.generateAndInjectStyles(ee, ie, J);
        return te;
      }(Le, ke, st), We = ae, tt = Fe.$as || _.$as || Fe.as || _.as || Ne, se = Hn(tt), F = Fe !== _ ? hr({}, _, {}, Fe) : _, E = {};
      for (var L in F) L[0] !== "$" && L !== "as" && (L === "forwardedAs" ? E.as = F[L] : (me ? me(L, $o, tt) : !se || $o(L)) && (E[L] = F[L]));
      return _.style && Fe.style !== _.style && (E.style = hr({}, _.style, {}, Fe.style)), E.className = Array.prototype.concat(ue, Oe, Re !== Oe ? Re : null, _.className, Fe.className).filter(Boolean).join(" "), E.ref = We, Jo(tt, E);
    }(x, $, Y, P);
  };
  return V.displayName = I, (x = ft.forwardRef(V)).attrs = j, x.componentStyle = w, x.displayName = I, x.shouldForwardProp = q, x.foldedComponentIds = i ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : na, x.styledComponentId = O, x.target = i ? e.target : e, x.withComponent = function($) {
    var Y = t.componentId, B = function(ae, ke) {
      if (ae == null) return {};
      var Ie, Le, Ge = {}, ue = Object.keys(ae);
      for (Le = 0; Le < ue.length; Le++) Ie = ue[Le], ke.indexOf(Ie) >= 0 || (Ge[Ie] = ae[Ie]);
      return Ge;
    }(t, ["componentId"]), _ = Y && Y + "-" + (Hn($) ? $ : Wa(Vo($)));
    return Vs($, hr({}, B, { attrs: j, componentId: _ }), r);
  }, Object.defineProperty(x, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function($) {
    this._foldedDefaultProps = i ? Hs({}, e.defaultProps, $) : $;
  } }), Object.defineProperty(x, "toString", { value: function() {
    return "." + x.styledComponentId;
  } }), c && od(x, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), x;
}
var ia = function(e) {
  return function t(r, i, c) {
    if (c === void 0 && (c = kr), !js.isValidElementType(i)) return bn(1, String(i));
    var u = function() {
      return r(i, c, Md.apply(void 0, arguments));
    };
    return u.withConfig = function(y) {
      return t(r, i, hr({}, c, {}, y));
    }, u.attrs = function(y) {
      return t(r, i, hr({}, c, { attrs: Array.prototype.concat(c.attrs, y).filter(Boolean) }));
    }, u;
  }(Vs, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  ia[e] = ia(e);
});
const Bd = ia.ul`
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
  const { feeds: e } = _r(ui);
  return /* @__PURE__ */ dt.jsx(Bd, { "data-testid": "grid-view-container", children: e == null ? void 0 : e.map((t) => /* @__PURE__ */ dt.jsx("li", { children: /* @__PURE__ */ dt.jsx(
    vr,
    {
      type: "event",
      eventFormat: "inline",
      eventTime: `<span>
                ${ra(t.startDate, "COMPLETE")} <br /> ${Fs(
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
/* @__PURE__ */ dt.jsx(pi, { header: e, ctaButton: t, dataSource: r, maxItems: i, children: /* @__PURE__ */ dt.jsx(Wd, {}) }));
Ys.propTypes = Ls;
const Hd = ia.ul`
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
  const { feeds: e } = _r(ui);
  return /* @__PURE__ */ dt.jsx(Hd, { "data-testid": "list-view-container", children: e == null ? void 0 : e.map((t) => /* @__PURE__ */ dt.jsx("li", { children: /* @__PURE__ */ dt.jsx(
    vr,
    {
      type: "event",
      eventFormat: "inline",
      horizontal: !0,
      eventTime: `<span>
                ${ra(t.startDate, "COMPLETE")} <br /> ${Fs(
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
/* @__PURE__ */ dt.jsx(pi, { header: e, ctaButton: t, dataSource: r, maxItems: i, children: /* @__PURE__ */ dt.jsx(qd, {}) }));
Gs.propTypes = Ls;
var qn = {}, Qo;
function Vd() {
  if (Qo) return qn;
  Qo = 1;
  var e = es;
  return qn.createRoot = e.createRoot, qn.hydrateRoot = e.hydrateRoot, qn;
}
var Yd = Vd();
const Zs = (e, t, r) => {
  Yd.createRoot(r).render(ft.createElement(e, t));
}, Xd = ({ targetSelector: e, props: t }) => {
  Zs(Ys, t, document.querySelector(e));
}, Kd = ({ targetSelector: e, props: t }) => {
  Zs(Gs, t, document.querySelector(e));
};
export {
  Ys as CardsGridEvents,
  Gs as CardsListEvents,
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
