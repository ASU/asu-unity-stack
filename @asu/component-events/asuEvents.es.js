import pt, { forwardRef as ii, Component as ol, createContext as sl, useRef as ll, useImperativeHandle as cl, useId as ul, useContext as xr, createElement as Qo, useState as un, useEffect as gn } from "react";
import es from "react-dom";
function ts(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ya = { exports: {} }, Kr = {};
var Di;
function dl() {
  if (Di) return Kr;
  Di = 1;
  var e = pt, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, c = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(k, S, g) {
    var I, O = {}, j = null, q = null;
    g !== void 0 && (j = "" + g), S.key !== void 0 && (j = "" + S.key), S.ref !== void 0 && (q = S.ref);
    for (I in S) i.call(S, I) && !u.hasOwnProperty(I) && (O[I] = S[I]);
    if (k && k.defaultProps) for (I in S = k.defaultProps, S) O[I] === void 0 && (O[I] = S[I]);
    return { $$typeof: t, type: k, key: j, ref: q, props: O, _owner: c.current };
  }
  return Kr.Fragment = r, Kr.jsx = y, Kr.jsxs = y, Kr;
}
var Pi;
function fl() {
  return Pi || (Pi = 1, ya.exports = dl()), ya.exports;
}
var ft = fl();
const {
  entries: rs,
  setPrototypeOf: Mi,
  isFrozen: pl,
  getPrototypeOf: hl,
  getOwnPropertyDescriptor: ml
} = Object;
let {
  freeze: kt,
  seal: jt,
  create: dn
} = Object, {
  apply: qa,
  construct: Va
} = typeof Reflect < "u" && Reflect;
kt || (kt = function(t) {
  return t;
});
jt || (jt = function(t) {
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
const Jr = xt(Array.prototype.forEach), gl = xt(Array.prototype.lastIndexOf), Li = xt(Array.prototype.pop), Qr = xt(Array.prototype.push), yl = xt(Array.prototype.splice), Gn = xt(String.prototype.toLowerCase), ba = xt(String.prototype.toString), va = xt(String.prototype.match), Pr = xt(String.prototype.replace), bl = xt(String.prototype.indexOf), vl = xt(String.prototype.trim), Kt = xt(Object.prototype.hasOwnProperty), wt = xt(RegExp.prototype.test), en = wl(TypeError);
function xt(e) {
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
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Gn;
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
function Sl(e) {
  for (let t = 0; t < e.length; t++)
    Kt(e, t) || (e[t] = null);
  return e;
}
function or(e) {
  const t = dn(null);
  for (const [r, i] of rs(e))
    Kt(e, r) && (Array.isArray(i) ? t[r] = Sl(i) : i && typeof i == "object" && i.constructor === Object ? t[r] = or(i) : t[r] = i);
  return t;
}
function tn(e, t) {
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
const Fi = kt(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), wa = kt(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Sa = kt(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), kl = kt(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), ka = kt(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), xl = kt(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), ji = kt(["#text"]), zi = kt(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), xa = kt(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Ui = kt(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), jn = kt(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), _l = jt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Cl = jt(/<%[\w\W]*|[\w\W]*%>/gm), Tl = jt(/\$\{[\w\W]*/gm), El = jt(/^data-[\-\w.\u00B7-\uFFFF]+$/), Al = jt(/^aria-[\-\w]+$/), ns = jt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Rl = jt(/^(?:\w+script|data):/i), Ol = jt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), as = jt(/^html$/i), Il = jt(/^[a-z][.\w]*(-[.\w]+)+$/i);
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
  MUSTACHE_EXPR: _l,
  TMPLIT_EXPR: Tl
});
const rn = {
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
}, Wi = function() {
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
  if (t.version = "3.4.0", t.removed = [], !e || !e.document || e.document.nodeType !== rn.document || !e.Element)
    return t.isSupported = !1, t;
  let {
    document: r
  } = e;
  const i = r, c = i.currentScript, {
    DocumentFragment: u,
    HTMLTemplateElement: y,
    Node: k,
    Element: S,
    NodeFilter: g,
    NamedNodeMap: I = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: O,
    DOMParser: j,
    trustedTypes: q
  } = e, _ = S.prototype, w = tn(_, "cloneNode"), P = tn(_, "remove"), V = tn(_, "nextSibling"), $ = tn(_, "childNodes"), Y = tn(_, "parentNode");
  if (typeof y == "function") {
    const p = r.createElement("template");
    p.content && p.content.ownerDocument && (r = p.content.ownerDocument);
  }
  let W, x = "";
  const {
    implementation: ae,
    createNodeIterator: Se,
    createDocumentFragment: De,
    getElementsByTagName: Fe
  } = r, {
    importNode: Xe
  } = i;
  let de = Wi();
  t.isSupported = typeof rs == "function" && typeof Y == "function" && ae && ae.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: fe,
    ERB_EXPR: Re,
    TMPLIT_EXPR: Ie,
    DATA_ATTR: Te,
    ARIA_ATTR: lt,
    IS_SCRIPT_OR_DATA: je,
    ATTR_WHITESPACE: Oe,
    CUSTOM_ELEMENT: He
  } = $i;
  let {
    IS_ALLOWED_URI: rt
  } = $i, se = null;
  const F = Ee({}, [...Fi, ...wa, ...Sa, ...ka, ...ji]);
  let E = null;
  const L = Ee({}, [...zi, ...xa, ...Ui, ...jn]);
  let M = Object.seal(dn(null, {
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
  const T = Object.seal(dn(null, {
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
  let ie = !0, Q = !0, te = !1, G = !0, ne = !1, ce = !0, K = !1, ge = !1, re = !1, le = !1, We = !1, ue = !1, it = !0, qe = !1;
  const ke = "user-content-";
  let H = !0, oe = !1, Ze = {}, Pe = null;
  const Me = Ee({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let tr = null;
  const rr = Ee({}, ["audio", "video", "img", "source", "image", "track"]);
  let Ut = null;
  const $t = Ee({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), ht = "http://www.w3.org/1998/Math/MathML", Et = "http://www.w3.org/2000/svg", Qe = "http://www.w3.org/1999/xhtml";
  let dt = Qe, Wt = !1, Bt = null;
  const mt = Ee({}, [ht, Et, Qe], ba);
  let vt = Ee({}, ["mi", "mo", "mn", "ms", "mtext"]), gt = Ee({}, ["annotation-xml"]);
  const Le = Ee({}, ["title", "style", "font", "a", "script"]);
  let ct = null;
  const nr = ["application/xhtml+xml", "text/html"], Ht = "text/html";
  let pe = null, ot = null;
  const At = r.createElement("form"), ar = function(h) {
    return h instanceof RegExp || h instanceof Function;
  }, Rt = function() {
    let h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(ot && ot === h)) {
      if ((!h || typeof h != "object") && (h = {}), h = or(h), ct = // eslint-disable-next-line unicorn/prefer-includes
      nr.indexOf(h.PARSER_MEDIA_TYPE) === -1 ? Ht : h.PARSER_MEDIA_TYPE, pe = ct === "application/xhtml+xml" ? ba : Gn, se = Kt(h, "ALLOWED_TAGS") ? Ee({}, h.ALLOWED_TAGS, pe) : F, E = Kt(h, "ALLOWED_ATTR") ? Ee({}, h.ALLOWED_ATTR, pe) : L, Bt = Kt(h, "ALLOWED_NAMESPACES") ? Ee({}, h.ALLOWED_NAMESPACES, ba) : mt, Ut = Kt(h, "ADD_URI_SAFE_ATTR") ? Ee(or($t), h.ADD_URI_SAFE_ATTR, pe) : $t, tr = Kt(h, "ADD_DATA_URI_TAGS") ? Ee(or(rr), h.ADD_DATA_URI_TAGS, pe) : rr, Pe = Kt(h, "FORBID_CONTENTS") ? Ee({}, h.FORBID_CONTENTS, pe) : Me, m = Kt(h, "FORBID_TAGS") ? Ee({}, h.FORBID_TAGS, pe) : or({}), ee = Kt(h, "FORBID_ATTR") ? Ee({}, h.FORBID_ATTR, pe) : or({}), Ze = Kt(h, "USE_PROFILES") ? h.USE_PROFILES : !1, ie = h.ALLOW_ARIA_ATTR !== !1, Q = h.ALLOW_DATA_ATTR !== !1, te = h.ALLOW_UNKNOWN_PROTOCOLS || !1, G = h.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ne = h.SAFE_FOR_TEMPLATES || !1, ce = h.SAFE_FOR_XML !== !1, K = h.WHOLE_DOCUMENT || !1, le = h.RETURN_DOM || !1, We = h.RETURN_DOM_FRAGMENT || !1, ue = h.RETURN_TRUSTED_TYPE || !1, re = h.FORCE_BODY || !1, it = h.SANITIZE_DOM !== !1, qe = h.SANITIZE_NAMED_PROPS || !1, H = h.KEEP_CONTENT !== !1, oe = h.IN_PLACE || !1, rt = h.ALLOWED_URI_REGEXP || ns, dt = h.NAMESPACE || Qe, vt = h.MATHML_TEXT_INTEGRATION_POINTS || vt, gt = h.HTML_INTEGRATION_POINTS || gt, M = h.CUSTOM_ELEMENT_HANDLING || dn(null), h.CUSTOM_ELEMENT_HANDLING && ar(h.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (M.tagNameCheck = h.CUSTOM_ELEMENT_HANDLING.tagNameCheck), h.CUSTOM_ELEMENT_HANDLING && ar(h.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (M.attributeNameCheck = h.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), h.CUSTOM_ELEMENT_HANDLING && typeof h.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (M.allowCustomizedBuiltInElements = h.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), ne && (Q = !1), We && (le = !0), Ze && (se = Ee({}, ji), E = dn(null), Ze.html === !0 && (Ee(se, Fi), Ee(E, zi)), Ze.svg === !0 && (Ee(se, wa), Ee(E, xa), Ee(E, jn)), Ze.svgFilters === !0 && (Ee(se, Sa), Ee(E, xa), Ee(E, jn)), Ze.mathMl === !0 && (Ee(se, ka), Ee(E, Ui), Ee(E, jn))), T.tagCheck = null, T.attributeCheck = null, h.ADD_TAGS && (typeof h.ADD_TAGS == "function" ? T.tagCheck = h.ADD_TAGS : (se === F && (se = or(se)), Ee(se, h.ADD_TAGS, pe))), h.ADD_ATTR && (typeof h.ADD_ATTR == "function" ? T.attributeCheck = h.ADD_ATTR : (E === L && (E = or(E)), Ee(E, h.ADD_ATTR, pe))), h.ADD_URI_SAFE_ATTR && Ee(Ut, h.ADD_URI_SAFE_ATTR, pe), h.FORBID_CONTENTS && (Pe === Me && (Pe = or(Pe)), Ee(Pe, h.FORBID_CONTENTS, pe)), h.ADD_FORBID_CONTENTS && (Pe === Me && (Pe = or(Pe)), Ee(Pe, h.ADD_FORBID_CONTENTS, pe)), H && (se["#text"] = !0), K && Ee(se, ["html", "head", "body"]), se.table && (Ee(se, ["tbody"]), delete m.tbody), h.TRUSTED_TYPES_POLICY) {
        if (typeof h.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw en('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof h.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw en('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        W = h.TRUSTED_TYPES_POLICY, x = W.createHTML("");
      } else
        W === void 0 && (W = Dl(q, c)), W !== null && typeof x == "string" && (x = W.createHTML(""));
      kt && kt(h), ot = h;
    }
  }, qt = Ee({}, [...wa, ...Sa, ...kl]), ir = Ee({}, [...ka, ...xl]), mr = function(h) {
    let C = Y(h);
    (!C || !C.tagName) && (C = {
      namespaceURI: dt,
      tagName: "template"
    });
    const X = Gn(h.tagName), ye = Gn(C.tagName);
    return Bt[h.namespaceURI] ? h.namespaceURI === Et ? C.namespaceURI === Qe ? X === "svg" : C.namespaceURI === ht ? X === "svg" && (ye === "annotation-xml" || vt[ye]) : !!qt[X] : h.namespaceURI === ht ? C.namespaceURI === Qe ? X === "math" : C.namespaceURI === Et ? X === "math" && gt[ye] : !!ir[X] : h.namespaceURI === Qe ? C.namespaceURI === Et && !gt[ye] || C.namespaceURI === ht && !vt[ye] ? !1 : !ir[X] && (Le[X] || !qt[X]) : !!(ct === "application/xhtml+xml" && Bt[h.namespaceURI]) : !1;
  }, nt = function(h) {
    Qr(t.removed, {
      element: h
    });
    try {
      Y(h).removeChild(h);
    } catch {
      P(h);
    }
  }, ut = function(h, C) {
    try {
      Qr(t.removed, {
        attribute: C.getAttributeNode(h),
        from: C
      });
    } catch {
      Qr(t.removed, {
        attribute: null,
        from: C
      });
    }
    if (C.removeAttribute(h), h === "is")
      if (le || We)
        try {
          nt(C);
        } catch {
        }
      else
        try {
          C.setAttribute(h, "");
        } catch {
        }
  }, lr = function(h) {
    let C = null, X = null;
    if (re)
      h = "<remove></remove>" + h;
    else {
      const we = va(h, /^[\r\n\t ]+/);
      X = we && we[0];
    }
    ct === "application/xhtml+xml" && dt === Qe && (h = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + h + "</body></html>");
    const ye = W ? W.createHTML(h) : h;
    if (dt === Qe)
      try {
        C = new j().parseFromString(ye, ct);
      } catch {
      }
    if (!C || !C.documentElement) {
      C = ae.createDocument(dt, "template", null);
      try {
        C.documentElement.innerHTML = Wt ? x : ye;
      } catch {
      }
    }
    const ve = C.body || C.documentElement;
    return h && X && ve.insertBefore(r.createTextNode(X), ve.childNodes[0] || null), dt === Qe ? Fe.call(C, K ? "html" : "body")[0] : K ? C.documentElement : ve;
  }, Mt = function(h) {
    return Se.call(
      h.ownerDocument || h,
      h,
      // eslint-disable-next-line no-bitwise
      g.SHOW_ELEMENT | g.SHOW_COMMENT | g.SHOW_TEXT | g.SHOW_PROCESSING_INSTRUCTION | g.SHOW_CDATA_SECTION,
      null
    );
  }, Lt = function(h) {
    return h instanceof O && (typeof h.nodeName != "string" || typeof h.textContent != "string" || typeof h.removeChild != "function" || !(h.attributes instanceof I) || typeof h.removeAttribute != "function" || typeof h.setAttribute != "function" || typeof h.namespaceURI != "string" || typeof h.insertBefore != "function" || typeof h.hasChildNodes != "function");
  }, Tt = function(h) {
    return typeof k == "function" && h instanceof k;
  };
  function et(p, h, C) {
    Jr(p, (X) => {
      X.call(t, h, C, ot);
    });
  }
  const cr = function(h) {
    let C = null;
    if (et(de.beforeSanitizeElements, h, null), Lt(h))
      return nt(h), !0;
    const X = pe(h.nodeName);
    if (et(de.uponSanitizeElement, h, {
      tagName: X,
      allowedTags: se
    }), ce && h.hasChildNodes() && !Tt(h.firstElementChild) && wt(/<[/\w!]/g, h.innerHTML) && wt(/<[/\w!]/g, h.textContent) || ce && h.namespaceURI === Qe && X === "style" && Tt(h.firstElementChild) || h.nodeType === rn.progressingInstruction || ce && h.nodeType === rn.comment && wt(/<[/\w]/g, h.data))
      return nt(h), !0;
    if (m[X] || !(T.tagCheck instanceof Function && T.tagCheck(X)) && !se[X]) {
      if (!m[X] && ur(X) && (M.tagNameCheck instanceof RegExp && wt(M.tagNameCheck, X) || M.tagNameCheck instanceof Function && M.tagNameCheck(X)))
        return !1;
      if (H && !Pe[X]) {
        const ye = Y(h) || h.parentNode, ve = $(h) || h.childNodes;
        if (ve && ye) {
          const we = ve.length;
          for (let ze = we - 1; ze >= 0; --ze) {
            const Ne = w(ve[ze], !0);
            Ne.__removalCount = (h.__removalCount || 0) + 1, ye.insertBefore(Ne, V(h));
          }
        }
      }
      return nt(h), !0;
    }
    return h instanceof S && !mr(h) || (X === "noscript" || X === "noembed" || X === "noframes") && wt(/<\/no(script|embed|frames)/i, h.innerHTML) ? (nt(h), !0) : (ne && h.nodeType === rn.text && (C = h.textContent, Jr([fe, Re, Ie], (ye) => {
      C = Pr(C, ye, " ");
    }), h.textContent !== C && (Qr(t.removed, {
      element: h.cloneNode()
    }), h.textContent = C)), et(de.afterSanitizeElements, h, null), !1);
  }, Ot = function(h, C, X) {
    if (ee[C] || it && (C === "id" || C === "name") && (X in r || X in At))
      return !1;
    if (!(Q && !ee[C] && wt(Te, C))) {
      if (!(ie && wt(lt, C))) {
        if (!(T.attributeCheck instanceof Function && T.attributeCheck(C, h))) {
          if (!E[C] || ee[C]) {
            if (
              // First condition does a very basic check if a) it's basically a valid custom element tagname AND
              // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
              !(ur(h) && (M.tagNameCheck instanceof RegExp && wt(M.tagNameCheck, h) || M.tagNameCheck instanceof Function && M.tagNameCheck(h)) && (M.attributeNameCheck instanceof RegExp && wt(M.attributeNameCheck, C) || M.attributeNameCheck instanceof Function && M.attributeNameCheck(C, h)) || // Alternative, second condition checks if it's an `is`-attribute, AND
              // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              C === "is" && M.allowCustomizedBuiltInElements && (M.tagNameCheck instanceof RegExp && wt(M.tagNameCheck, X) || M.tagNameCheck instanceof Function && M.tagNameCheck(X)))
            ) return !1;
          } else if (!Ut[C]) {
            if (!wt(rt, Pr(X, Oe, ""))) {
              if (!((C === "src" || C === "xlink:href" || C === "href") && h !== "script" && bl(X, "data:") === 0 && tr[h])) {
                if (!(te && !wt(je, Pr(X, Oe, "")))) {
                  if (X)
                    return !1;
                }
              }
            }
          }
        }
      }
    }
    return !0;
  }, ur = function(h) {
    return h !== "annotation-xml" && va(h, He);
  }, Vt = function(h) {
    et(de.beforeSanitizeAttributes, h, null);
    const {
      attributes: C
    } = h;
    if (!C || Lt(h))
      return;
    const X = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: E,
      forceKeepAttr: void 0
    };
    let ye = C.length;
    for (; ye--; ) {
      const ve = C[ye], {
        name: we,
        namespaceURI: ze,
        value: Ne
      } = ve, st = pe(we), Ke = Ne;
      let Be = we === "value" ? Ke : vl(Ke);
      if (X.attrName = st, X.attrValue = Be, X.keepAttr = !0, X.forceKeepAttr = void 0, et(de.uponSanitizeAttribute, h, X), Be = X.attrValue, qe && (st === "id" || st === "name") && (ut(we, h), Be = ke + Be), ce && wt(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Be)) {
        ut(we, h);
        continue;
      }
      if (st === "attributename" && va(Be, "href")) {
        ut(we, h);
        continue;
      }
      if (X.forceKeepAttr)
        continue;
      if (!X.keepAttr) {
        ut(we, h);
        continue;
      }
      if (!G && wt(/\/>/i, Be)) {
        ut(we, h);
        continue;
      }
      ne && Jr([fe, Re, Ie], (_r) => {
        Be = Pr(Be, _r, " ");
      });
      const It = pe(h.nodeName);
      if (!Ot(It, st, Be)) {
        ut(we, h);
        continue;
      }
      if (W && typeof q == "object" && typeof q.getAttributeType == "function" && !ze)
        switch (q.getAttributeType(It, st)) {
          case "TrustedHTML": {
            Be = W.createHTML(Be);
            break;
          }
          case "TrustedScriptURL": {
            Be = W.createScriptURL(Be);
            break;
          }
        }
      if (Be !== Ke)
        try {
          ze ? h.setAttributeNS(ze, we, Be) : h.setAttribute(we, Be), Lt(h) ? nt(h) : Li(t.removed);
        } catch {
          ut(we, h);
        }
    }
    et(de.afterSanitizeAttributes, h, null);
  }, Ft = function(h) {
    let C = null;
    const X = Mt(h);
    for (et(de.beforeSanitizeShadowDOM, h, null); C = X.nextNode(); )
      et(de.uponSanitizeShadowNode, C, null), cr(C), Vt(C), C.content instanceof u && Ft(C.content);
    et(de.afterSanitizeShadowDOM, h, null);
  };
  return t.sanitize = function(p) {
    let h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, C = null, X = null, ye = null, ve = null;
    if (Wt = !p, Wt && (p = "<!-->"), typeof p != "string" && !Tt(p))
      if (typeof p.toString == "function") {
        if (p = p.toString(), typeof p != "string")
          throw en("dirty is not a string, aborting");
      } else
        throw en("toString is not a function");
    if (!t.isSupported)
      return p;
    if (ge || Rt(h), t.removed = [], typeof p == "string" && (oe = !1), oe) {
      if (p.nodeName) {
        const Ne = pe(p.nodeName);
        if (!se[Ne] || m[Ne])
          throw en("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (p instanceof k)
      C = lr("<!---->"), X = C.ownerDocument.importNode(p, !0), X.nodeType === rn.element && X.nodeName === "BODY" || X.nodeName === "HTML" ? C = X : C.appendChild(X);
    else {
      if (!le && !ne && !K && // eslint-disable-next-line unicorn/prefer-includes
      p.indexOf("<") === -1)
        return W && ue ? W.createHTML(p) : p;
      if (C = lr(p), !C)
        return le ? null : ue ? x : "";
    }
    C && re && nt(C.firstChild);
    const we = Mt(oe ? p : C);
    for (; ye = we.nextNode(); )
      cr(ye), Vt(ye), ye.content instanceof u && Ft(ye.content);
    if (oe)
      return p;
    if (le) {
      if (ne) {
        C.normalize();
        let Ne = C.innerHTML;
        Jr([fe, Re, Ie], (st) => {
          Ne = Pr(Ne, st, " ");
        }), C.innerHTML = Ne;
      }
      if (We)
        for (ve = De.call(C.ownerDocument); C.firstChild; )
          ve.appendChild(C.firstChild);
      else
        ve = C;
      return (E.shadowroot || E.shadowrootmode) && (ve = Xe.call(i, ve, !0)), ve;
    }
    let ze = K ? C.outerHTML : C.innerHTML;
    return K && se["!doctype"] && C.ownerDocument && C.ownerDocument.doctype && C.ownerDocument.doctype.name && wt(as, C.ownerDocument.doctype.name) && (ze = "<!DOCTYPE " + C.ownerDocument.doctype.name + `>
` + ze), ne && Jr([fe, Re, Ie], (Ne) => {
      ze = Pr(ze, Ne, " ");
    }), W && ue ? W.createHTML(ze) : ze;
  }, t.setConfig = function() {
    let p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Rt(p), ge = !0;
  }, t.clearConfig = function() {
    ot = null, ge = !1;
  }, t.isValidAttribute = function(p, h, C) {
    ot || Rt({});
    const X = pe(p), ye = pe(h);
    return Ot(X, ye, C);
  }, t.addHook = function(p, h) {
    typeof h == "function" && Qr(de[p], h);
  }, t.removeHook = function(p, h) {
    if (h !== void 0) {
      const C = gl(de[p], h);
      return C === -1 ? void 0 : yl(de[p], C, 1)[0];
    }
    return Li(de[p]);
  }, t.removeHooks = function(p) {
    de[p] = [];
  }, t.removeAllHooks = function() {
    de = Wi();
  }, t;
}
is();
var _a = { exports: {} }, Ca, Bi;
function Pl() {
  if (Bi) return Ca;
  Bi = 1;
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
    function i(y, k, S, g, I, O) {
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
  return qi || (qi = 1, _a.exports = /* @__PURE__ */ Ml()()), _a.exports;
}
var Fl = /* @__PURE__ */ Ll();
const Ge = /* @__PURE__ */ ts(Fl);
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
const vn = ({ children: e }) => /* @__PURE__ */ ft.jsx(ft.Fragment, { children: e });
vn.propTypes = {
  children: Ge.oneOfType([
    Ge.arrayOf(Ge.node),
    Ge.node,
    Ge.string
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
  }(Ea)), Ea.exports;
}
jl();
({
  ...vn.propTypes
});
const os = ({ children: e, className: t = "container", ...r }) => /* @__PURE__ */ ft.jsx("div", { className: t, ...r, children: /* @__PURE__ */ ft.jsx("div", { className: "row", children: e }) });
os.propTypes = {
  children: vn.propTypes.children
};
({
  ...os.propTypes
});
vn.propTypes.children, Ge.oneOf(["0", "3", "4", "6", "8", "9", "12"]);
vn.propTypes.children;
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
var Yi = { exports: {} }, nn = {}, Gi;
function zl() {
  if (Gi) return nn;
  Gi = 1;
  var e = pt, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, c = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(k, S, g) {
    var I, O = {}, j = null, q = null;
    g !== void 0 && (j = "" + g), S.key !== void 0 && (j = "" + S.key), S.ref !== void 0 && (q = S.ref);
    for (I in S) i.call(S, I) && !u.hasOwnProperty(I) && (O[I] = S[I]);
    if (k && k.defaultProps) for (I in S = k.defaultProps, S) O[I] === void 0 && (O[I] = S[I]);
    return { $$typeof: t, type: k, key: j, ref: q, props: O, _owner: c.current };
  }
  return nn.Fragment = r, nn.jsx = y, nn.jsxs = y, nn;
}
var Xi;
function Ul() {
  return Xi || (Xi = 1, Yi.exports = zl()), Yi.exports;
}
var B = Ul(), Zi = { exports: {} }, Aa, Ki;
function $l() {
  if (Ki) return Aa;
  Ki = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Aa = e, Aa;
}
var Ra, Ji;
function Wl() {
  if (Ji) return Ra;
  Ji = 1;
  var e = /* @__PURE__ */ $l();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Ra = function() {
    function i(y, k, S, g, I, O) {
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
var Qi;
function Bl() {
  return Qi || (Qi = 1, Zi.exports = /* @__PURE__ */ Wl()()), Zi.exports;
}
var Hl = /* @__PURE__ */ Bl();
const o = /* @__PURE__ */ oi(Hl), ql = () => {
  const [e, t] = un(null), [r, i] = un(!1), [c, u] = un(null), [y, k] = un("");
  return gn(() => {
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
  }, [y]), [{ data: e, loading: r, error: c }, k];
}, Vl = (e) => (e || []).join(" "), {
  entries: ls,
  setPrototypeOf: eo,
  isFrozen: Yl,
  getPrototypeOf: Gl,
  getOwnPropertyDescriptor: Xl
} = Object;
let {
  freeze: _t,
  seal: zt,
  create: fn
} = Object, {
  apply: Ya,
  construct: Ga
} = typeof Reflect < "u" && Reflect;
_t || (_t = function(e) {
  return e;
});
zt || (zt = function(e) {
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
const an = Ct(Array.prototype.forEach), Zl = Ct(Array.prototype.lastIndexOf), to = Ct(Array.prototype.pop), on = Ct(Array.prototype.push), Kl = Ct(Array.prototype.splice), Xn = Ct(String.prototype.toLowerCase), Oa = Ct(String.prototype.toString), Ia = Ct(String.prototype.match), Mr = Ct(String.prototype.replace), Jl = Ct(String.prototype.indexOf), Ql = Ct(String.prototype.trim), Jt = Ct(Object.prototype.hasOwnProperty), St = Ct(RegExp.prototype.test), sn = ec(TypeError);
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
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Xn;
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
    Jt(e, t) || (e[t] = null);
  return e;
}
function sr(e) {
  const t = fn(null);
  for (const [r, i] of ls(e))
    Jt(e, r) && (Array.isArray(i) ? t[r] = tc(i) : i && typeof i == "object" && i.constructor === Object ? t[r] = sr(i) : t[r] = i);
  return t;
}
function ln(e, t) {
  for (; e !== null; ) {
    const i = Xl(e, t);
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
const ro = _t(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Na = _t(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Da = _t(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), rc = _t(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), Pa = _t(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), nc = _t(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), no = _t(["#text"]), ao = _t(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), Ma = _t(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), io = _t(["accent", "accentunder", "align", "bevelled", "close", "columnalign", "columnlines", "columnspacing", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lquote", "lspace", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), zn = _t(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), ac = zt(/\{\{[\w\W]*|[\w\W]*\}\}/gm), ic = zt(/<%[\w\W]*|[\w\W]*%>/gm), oc = zt(/\$\{[\w\W]*/gm), sc = zt(/^data-[\-\w.\u00B7-\uFFFF]+$/), lc = zt(/^aria-[\-\w]+$/), cs = zt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), cc = zt(/^(?:\w+script|data):/i), uc = zt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), us = zt(/^html$/i), dc = zt(/^[a-z][.\w]*(-[.\w]+)+$/i);
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
const cn = {
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
  if (t.version = "3.4.0", t.removed = [], !e || !e.document || e.document.nodeType !== cn.document || !e.Element)
    return t.isSupported = !1, t;
  let {
    document: r
  } = e;
  const i = r, c = i.currentScript, {
    DocumentFragment: u,
    HTMLTemplateElement: y,
    Node: k,
    Element: S,
    NodeFilter: g,
    NamedNodeMap: I = e.NamedNodeMap || e.MozNamedAttrMap,
    HTMLFormElement: O,
    DOMParser: j,
    trustedTypes: q
  } = e, _ = S.prototype, w = ln(_, "cloneNode"), P = ln(_, "remove"), V = ln(_, "nextSibling"), $ = ln(_, "childNodes"), Y = ln(_, "parentNode");
  if (typeof y == "function") {
    const p = r.createElement("template");
    p.content && p.content.ownerDocument && (r = p.content.ownerDocument);
  }
  let W, x = "";
  const {
    implementation: ae,
    createNodeIterator: Se,
    createDocumentFragment: De,
    getElementsByTagName: Fe
  } = r, {
    importNode: Xe
  } = i;
  let de = so();
  t.isSupported = typeof ls == "function" && typeof Y == "function" && ae && ae.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: fe,
    ERB_EXPR: Re,
    TMPLIT_EXPR: Ie,
    DATA_ATTR: Te,
    ARIA_ATTR: lt,
    IS_SCRIPT_OR_DATA: je,
    ATTR_WHITESPACE: Oe,
    CUSTOM_ELEMENT: He
  } = oo;
  let {
    IS_ALLOWED_URI: rt
  } = oo, se = null;
  const F = Ae({}, [...ro, ...Na, ...Da, ...Pa, ...no]);
  let E = null;
  const L = Ae({}, [...ao, ...Ma, ...io, ...zn]);
  let M = Object.seal(fn(null, {
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
  const T = Object.seal(fn(null, {
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
  let ie = !0, Q = !0, te = !1, G = !0, ne = !1, ce = !0, K = !1, ge = !1, re = !1, le = !1, We = !1, ue = !1, it = !0, qe = !1;
  const ke = "user-content-";
  let H = !0, oe = !1, Ze = {}, Pe = null;
  const Me = Ae({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let tr = null;
  const rr = Ae({}, ["audio", "video", "img", "source", "image", "track"]);
  let Ut = null;
  const $t = Ae({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), ht = "http://www.w3.org/1998/Math/MathML", Et = "http://www.w3.org/2000/svg", Qe = "http://www.w3.org/1999/xhtml";
  let dt = Qe, Wt = !1, Bt = null;
  const mt = Ae({}, [ht, Et, Qe], Oa);
  let vt = Ae({}, ["mi", "mo", "mn", "ms", "mtext"]), gt = Ae({}, ["annotation-xml"]);
  const Le = Ae({}, ["title", "style", "font", "a", "script"]);
  let ct = null;
  const nr = ["application/xhtml+xml", "text/html"], Ht = "text/html";
  let pe = null, ot = null;
  const At = r.createElement("form"), ar = function(p) {
    return p instanceof RegExp || p instanceof Function;
  }, Rt = function() {
    let p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(ot && ot === p)) {
      if ((!p || typeof p != "object") && (p = {}), p = sr(p), ct = // eslint-disable-next-line unicorn/prefer-includes
      nr.indexOf(p.PARSER_MEDIA_TYPE) === -1 ? Ht : p.PARSER_MEDIA_TYPE, pe = ct === "application/xhtml+xml" ? Oa : Xn, se = Jt(p, "ALLOWED_TAGS") ? Ae({}, p.ALLOWED_TAGS, pe) : F, E = Jt(p, "ALLOWED_ATTR") ? Ae({}, p.ALLOWED_ATTR, pe) : L, Bt = Jt(p, "ALLOWED_NAMESPACES") ? Ae({}, p.ALLOWED_NAMESPACES, Oa) : mt, Ut = Jt(p, "ADD_URI_SAFE_ATTR") ? Ae(sr($t), p.ADD_URI_SAFE_ATTR, pe) : $t, tr = Jt(p, "ADD_DATA_URI_TAGS") ? Ae(sr(rr), p.ADD_DATA_URI_TAGS, pe) : rr, Pe = Jt(p, "FORBID_CONTENTS") ? Ae({}, p.FORBID_CONTENTS, pe) : Me, m = Jt(p, "FORBID_TAGS") ? Ae({}, p.FORBID_TAGS, pe) : sr({}), ee = Jt(p, "FORBID_ATTR") ? Ae({}, p.FORBID_ATTR, pe) : sr({}), Ze = Jt(p, "USE_PROFILES") ? p.USE_PROFILES : !1, ie = p.ALLOW_ARIA_ATTR !== !1, Q = p.ALLOW_DATA_ATTR !== !1, te = p.ALLOW_UNKNOWN_PROTOCOLS || !1, G = p.ALLOW_SELF_CLOSE_IN_ATTR !== !1, ne = p.SAFE_FOR_TEMPLATES || !1, ce = p.SAFE_FOR_XML !== !1, K = p.WHOLE_DOCUMENT || !1, le = p.RETURN_DOM || !1, We = p.RETURN_DOM_FRAGMENT || !1, ue = p.RETURN_TRUSTED_TYPE || !1, re = p.FORCE_BODY || !1, it = p.SANITIZE_DOM !== !1, qe = p.SANITIZE_NAMED_PROPS || !1, H = p.KEEP_CONTENT !== !1, oe = p.IN_PLACE || !1, rt = p.ALLOWED_URI_REGEXP || cs, dt = p.NAMESPACE || Qe, vt = p.MATHML_TEXT_INTEGRATION_POINTS || vt, gt = p.HTML_INTEGRATION_POINTS || gt, M = p.CUSTOM_ELEMENT_HANDLING || fn(null), p.CUSTOM_ELEMENT_HANDLING && ar(p.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (M.tagNameCheck = p.CUSTOM_ELEMENT_HANDLING.tagNameCheck), p.CUSTOM_ELEMENT_HANDLING && ar(p.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (M.attributeNameCheck = p.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), p.CUSTOM_ELEMENT_HANDLING && typeof p.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (M.allowCustomizedBuiltInElements = p.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), ne && (Q = !1), We && (le = !0), Ze && (se = Ae({}, no), E = fn(null), Ze.html === !0 && (Ae(se, ro), Ae(E, ao)), Ze.svg === !0 && (Ae(se, Na), Ae(E, Ma), Ae(E, zn)), Ze.svgFilters === !0 && (Ae(se, Da), Ae(E, Ma), Ae(E, zn)), Ze.mathMl === !0 && (Ae(se, Pa), Ae(E, io), Ae(E, zn))), T.tagCheck = null, T.attributeCheck = null, p.ADD_TAGS && (typeof p.ADD_TAGS == "function" ? T.tagCheck = p.ADD_TAGS : (se === F && (se = sr(se)), Ae(se, p.ADD_TAGS, pe))), p.ADD_ATTR && (typeof p.ADD_ATTR == "function" ? T.attributeCheck = p.ADD_ATTR : (E === L && (E = sr(E)), Ae(E, p.ADD_ATTR, pe))), p.ADD_URI_SAFE_ATTR && Ae(Ut, p.ADD_URI_SAFE_ATTR, pe), p.FORBID_CONTENTS && (Pe === Me && (Pe = sr(Pe)), Ae(Pe, p.FORBID_CONTENTS, pe)), p.ADD_FORBID_CONTENTS && (Pe === Me && (Pe = sr(Pe)), Ae(Pe, p.ADD_FORBID_CONTENTS, pe)), H && (se["#text"] = !0), K && Ae(se, ["html", "head", "body"]), se.table && (Ae(se, ["tbody"]), delete m.tbody), p.TRUSTED_TYPES_POLICY) {
        if (typeof p.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw sn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof p.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw sn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        W = p.TRUSTED_TYPES_POLICY, x = W.createHTML("");
      } else
        W === void 0 && (W = pc(q, c)), W !== null && typeof x == "string" && (x = W.createHTML(""));
      _t && _t(p), ot = p;
    }
  }, qt = Ae({}, [...Na, ...Da, ...rc]), ir = Ae({}, [...Pa, ...nc]), mr = function(p) {
    let h = Y(p);
    (!h || !h.tagName) && (h = {
      namespaceURI: dt,
      tagName: "template"
    });
    const C = Xn(p.tagName), X = Xn(h.tagName);
    return Bt[p.namespaceURI] ? p.namespaceURI === Et ? h.namespaceURI === Qe ? C === "svg" : h.namespaceURI === ht ? C === "svg" && (X === "annotation-xml" || vt[X]) : !!qt[C] : p.namespaceURI === ht ? h.namespaceURI === Qe ? C === "math" : h.namespaceURI === Et ? C === "math" && gt[X] : !!ir[C] : p.namespaceURI === Qe ? h.namespaceURI === Et && !gt[X] || h.namespaceURI === ht && !vt[X] ? !1 : !ir[C] && (Le[C] || !qt[C]) : !!(ct === "application/xhtml+xml" && Bt[p.namespaceURI]) : !1;
  }, nt = function(p) {
    on(t.removed, {
      element: p
    });
    try {
      Y(p).removeChild(p);
    } catch {
      P(p);
    }
  }, ut = function(p, h) {
    try {
      on(t.removed, {
        attribute: h.getAttributeNode(p),
        from: h
      });
    } catch {
      on(t.removed, {
        attribute: null,
        from: h
      });
    }
    if (h.removeAttribute(p), p === "is")
      if (le || We)
        try {
          nt(h);
        } catch {
        }
      else
        try {
          h.setAttribute(p, "");
        } catch {
        }
  }, lr = function(p) {
    let h = null, C = null;
    if (re)
      p = "<remove></remove>" + p;
    else {
      const ve = Ia(p, /^[\r\n\t ]+/);
      C = ve && ve[0];
    }
    ct === "application/xhtml+xml" && dt === Qe && (p = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + p + "</body></html>");
    const X = W ? W.createHTML(p) : p;
    if (dt === Qe)
      try {
        h = new j().parseFromString(X, ct);
      } catch {
      }
    if (!h || !h.documentElement) {
      h = ae.createDocument(dt, "template", null);
      try {
        h.documentElement.innerHTML = Wt ? x : X;
      } catch {
      }
    }
    const ye = h.body || h.documentElement;
    return p && C && ye.insertBefore(r.createTextNode(C), ye.childNodes[0] || null), dt === Qe ? Fe.call(h, K ? "html" : "body")[0] : K ? h.documentElement : ye;
  }, Mt = function(p) {
    return Se.call(
      p.ownerDocument || p,
      p,
      // eslint-disable-next-line no-bitwise
      g.SHOW_ELEMENT | g.SHOW_COMMENT | g.SHOW_TEXT | g.SHOW_PROCESSING_INSTRUCTION | g.SHOW_CDATA_SECTION,
      null
    );
  }, Lt = function(p) {
    return p instanceof O && (typeof p.nodeName != "string" || typeof p.textContent != "string" || typeof p.removeChild != "function" || !(p.attributes instanceof I) || typeof p.removeAttribute != "function" || typeof p.setAttribute != "function" || typeof p.namespaceURI != "string" || typeof p.insertBefore != "function" || typeof p.hasChildNodes != "function");
  }, Tt = function(p) {
    return typeof k == "function" && p instanceof k;
  };
  function et(p, h, C) {
    an(p, (X) => {
      X.call(t, h, C, ot);
    });
  }
  const cr = function(p) {
    let h = null;
    if (et(de.beforeSanitizeElements, p, null), Lt(p))
      return nt(p), !0;
    const C = pe(p.nodeName);
    if (et(de.uponSanitizeElement, p, {
      tagName: C,
      allowedTags: se
    }), ce && p.hasChildNodes() && !Tt(p.firstElementChild) && St(/<[/\w!]/g, p.innerHTML) && St(/<[/\w!]/g, p.textContent) || ce && p.namespaceURI === Qe && C === "style" && Tt(p.firstElementChild) || p.nodeType === cn.progressingInstruction || ce && p.nodeType === cn.comment && St(/<[/\w]/g, p.data))
      return nt(p), !0;
    if (m[C] || !(T.tagCheck instanceof Function && T.tagCheck(C)) && !se[C]) {
      if (!m[C] && ur(C) && (M.tagNameCheck instanceof RegExp && St(M.tagNameCheck, C) || M.tagNameCheck instanceof Function && M.tagNameCheck(C)))
        return !1;
      if (H && !Pe[C]) {
        const X = Y(p) || p.parentNode, ye = $(p) || p.childNodes;
        if (ye && X) {
          const ve = ye.length;
          for (let we = ve - 1; we >= 0; --we) {
            const ze = w(ye[we], !0);
            ze.__removalCount = (p.__removalCount || 0) + 1, X.insertBefore(ze, V(p));
          }
        }
      }
      return nt(p), !0;
    }
    return p instanceof S && !mr(p) || (C === "noscript" || C === "noembed" || C === "noframes") && St(/<\/no(script|embed|frames)/i, p.innerHTML) ? (nt(p), !0) : (ne && p.nodeType === cn.text && (h = p.textContent, an([fe, Re, Ie], (X) => {
      h = Mr(h, X, " ");
    }), p.textContent !== h && (on(t.removed, {
      element: p.cloneNode()
    }), p.textContent = h)), et(de.afterSanitizeElements, p, null), !1);
  }, Ot = function(p, h, C) {
    if (ee[h] || it && (h === "id" || h === "name") && (C in r || C in At))
      return !1;
    if (!(Q && !ee[h] && St(Te, h)) && !(ie && St(lt, h)) && !(T.attributeCheck instanceof Function && T.attributeCheck(h, p))) {
      if (!E[h] || ee[h]) {
        if (
          // First condition does a very basic check if a) it's basically a valid custom element tagname AND
          // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
          !(ur(p) && (M.tagNameCheck instanceof RegExp && St(M.tagNameCheck, p) || M.tagNameCheck instanceof Function && M.tagNameCheck(p)) && (M.attributeNameCheck instanceof RegExp && St(M.attributeNameCheck, h) || M.attributeNameCheck instanceof Function && M.attributeNameCheck(h, p)) || // Alternative, second condition checks if it's an `is`-attribute, AND
          // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
          h === "is" && M.allowCustomizedBuiltInElements && (M.tagNameCheck instanceof RegExp && St(M.tagNameCheck, C) || M.tagNameCheck instanceof Function && M.tagNameCheck(C)))
        ) return !1;
      } else if (!Ut[h] && !St(rt, Mr(C, Oe, "")) && !((h === "src" || h === "xlink:href" || h === "href") && p !== "script" && Jl(C, "data:") === 0 && tr[p]) && !(te && !St(je, Mr(C, Oe, ""))) && C)
        return !1;
    }
    return !0;
  }, ur = function(p) {
    return p !== "annotation-xml" && Ia(p, He);
  }, Vt = function(p) {
    et(de.beforeSanitizeAttributes, p, null);
    const {
      attributes: h
    } = p;
    if (!h || Lt(p))
      return;
    const C = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: E,
      forceKeepAttr: void 0
    };
    let X = h.length;
    for (; X--; ) {
      const ye = h[X], {
        name: ve,
        namespaceURI: we,
        value: ze
      } = ye, Ne = pe(ve), st = ze;
      let Ke = ve === "value" ? st : Ql(st);
      if (C.attrName = Ne, C.attrValue = Ke, C.keepAttr = !0, C.forceKeepAttr = void 0, et(de.uponSanitizeAttribute, p, C), Ke = C.attrValue, qe && (Ne === "id" || Ne === "name") && (ut(ve, p), Ke = ke + Ke), ce && St(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, Ke)) {
        ut(ve, p);
        continue;
      }
      if (Ne === "attributename" && Ia(Ke, "href")) {
        ut(ve, p);
        continue;
      }
      if (C.forceKeepAttr)
        continue;
      if (!C.keepAttr) {
        ut(ve, p);
        continue;
      }
      if (!G && St(/\/>/i, Ke)) {
        ut(ve, p);
        continue;
      }
      ne && an([fe, Re, Ie], (It) => {
        Ke = Mr(Ke, It, " ");
      });
      const Be = pe(p.nodeName);
      if (!Ot(Be, Ne, Ke)) {
        ut(ve, p);
        continue;
      }
      if (W && typeof q == "object" && typeof q.getAttributeType == "function" && !we)
        switch (q.getAttributeType(Be, Ne)) {
          case "TrustedHTML": {
            Ke = W.createHTML(Ke);
            break;
          }
          case "TrustedScriptURL": {
            Ke = W.createScriptURL(Ke);
            break;
          }
        }
      if (Ke !== st)
        try {
          we ? p.setAttributeNS(we, ve, Ke) : p.setAttribute(ve, Ke), Lt(p) ? nt(p) : to(t.removed);
        } catch {
          ut(ve, p);
        }
    }
    et(de.afterSanitizeAttributes, p, null);
  }, Ft = function(p) {
    let h = null;
    const C = Mt(p);
    for (et(de.beforeSanitizeShadowDOM, p, null); h = C.nextNode(); )
      et(de.uponSanitizeShadowNode, h, null), cr(h), Vt(h), h.content instanceof u && Ft(h.content);
    et(de.afterSanitizeShadowDOM, p, null);
  };
  return t.sanitize = function(p) {
    let h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, C = null, X = null, ye = null, ve = null;
    if (Wt = !p, Wt && (p = "<!-->"), typeof p != "string" && !Tt(p))
      if (typeof p.toString == "function") {
        if (p = p.toString(), typeof p != "string")
          throw sn("dirty is not a string, aborting");
      } else
        throw sn("toString is not a function");
    if (!t.isSupported)
      return p;
    if (ge || Rt(h), t.removed = [], typeof p == "string" && (oe = !1), oe) {
      if (p.nodeName) {
        const Ne = pe(p.nodeName);
        if (!se[Ne] || m[Ne])
          throw sn("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (p instanceof k)
      C = lr("<!---->"), X = C.ownerDocument.importNode(p, !0), X.nodeType === cn.element && X.nodeName === "BODY" || X.nodeName === "HTML" ? C = X : C.appendChild(X);
    else {
      if (!le && !ne && !K && // eslint-disable-next-line unicorn/prefer-includes
      p.indexOf("<") === -1)
        return W && ue ? W.createHTML(p) : p;
      if (C = lr(p), !C)
        return le ? null : ue ? x : "";
    }
    C && re && nt(C.firstChild);
    const we = Mt(oe ? p : C);
    for (; ye = we.nextNode(); )
      cr(ye), Vt(ye), ye.content instanceof u && Ft(ye.content);
    if (oe)
      return p;
    if (le) {
      if (ne) {
        C.normalize();
        let Ne = C.innerHTML;
        an([fe, Re, Ie], (st) => {
          Ne = Mr(Ne, st, " ");
        }), C.innerHTML = Ne;
      }
      if (We)
        for (ve = De.call(C.ownerDocument); C.firstChild; )
          ve.appendChild(C.firstChild);
      else
        ve = C;
      return (E.shadowroot || E.shadowrootmode) && (ve = Xe.call(i, ve, !0)), ve;
    }
    let ze = K ? C.outerHTML : C.innerHTML;
    return K && se["!doctype"] && C.ownerDocument && C.ownerDocument.doctype && C.ownerDocument.doctype.name && St(us, C.ownerDocument.doctype.name) && (ze = "<!DOCTYPE " + C.ownerDocument.doctype.name + `>
` + ze), ne && an([fe, Re, Ie], (Ne) => {
      ze = Mr(ze, Ne, " ");
    }), W && ue ? W.createHTML(ze) : ze;
  }, t.setConfig = function() {
    let p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Rt(p), ge = !0;
  }, t.clearConfig = function() {
    ot = null, ge = !1;
  }, t.isValidAttribute = function(p, h, C) {
    ot || Rt({});
    const X = pe(p), ye = pe(h);
    return Ot(X, ye, C);
  }, t.addHook = function(p, h) {
    typeof h == "function" && on(de[p], h);
  }, t.removeHook = function(p, h) {
    if (h !== void 0) {
      const C = Zl(de[p], h);
      return C === -1 ? void 0 : Kl(de[p], C, 1)[0];
    }
    return to(de[p]);
  }, t.removeHooks = function(p) {
    de[p] = [];
  }, t.removeAllHooks = function() {
    de = so();
  }, t;
}
var lo = ds();
let Un = null;
function hc() {
  return Un || (typeof window < "u" ? Un = lo(window) : Un = lo), Un;
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
  const { dataLayer: S } = window, g = {
    event: e.toLowerCase(),
    action: t.toLowerCase(),
    name: r.toLowerCase(),
    type: i.toLowerCase(),
    region: y.toLowerCase(),
    section: c.toLowerCase(),
    text: u.toLowerCase(),
    component: k.toLowerCase()
  };
  S && S.push(g);
}, wn = ({ children: e }) => /* @__PURE__ */ B.jsx(B.Fragment, { children: e });
wn.propTypes = {
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
  }(co)), co.exports;
}
var yc = gc();
const Qt = /* @__PURE__ */ oi(yc);
({
  ...wn.propTypes
});
const fs = ({ children: e, className: t = "container", ...r }) => /* @__PURE__ */ B.jsx("div", { className: t, ...r, children: /* @__PURE__ */ B.jsx("div", { className: "row", children: e }) });
fs.propTypes = {
  children: wn.propTypes.children
};
({
  ...fs.propTypes
});
wn.propTypes.children, o.oneOf(["0", "3", "4", "6", "8", "9", "12"]);
wn.propTypes.children;
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
  var e = pt;
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
  var S = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    S[n] = new k(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var l = n[0];
    S[l] = new k(l, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    S[n] = new k(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    S[n] = new k(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    S[n] = new k(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    S[n] = new k(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    S[n] = new k(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    S[n] = new k(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    S[n] = new k(n, 5, !1, n.toLowerCase(), null, !1, !1);
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
    S[l] = new k(l, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var l = n.replace(g, I);
    S[l] = new k(l, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var l = n.replace(g, I);
    S[l] = new k(l, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    S[n] = new k(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), S.xlinkHref = new k("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    S[n] = new k(n, 1, !1, n.toLowerCase(), null, !0, !0);
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
  function _(n) {
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
  var W = /* @__PURE__ */ new Map();
  function x(n, l, f) {
    if (typeof f != "object") throw Error(t(62));
    l = !0;
    for (var v in f) if (r.call(f, v)) {
      var D = f[v];
      if (D != null && typeof D != "boolean" && D !== "") {
        if (v.indexOf("--") === 0) {
          var A = _(v);
          D = _(("" + D).trim());
        } else {
          A = v;
          var z = W.get(A);
          z !== void 0 || (z = _(A.replace(w, "-$1").toLowerCase().replace(P, "-ms-")), W.set(A, z)), A = z, D = typeof D == "number" ? D === 0 || r.call(O, v) ? "" + D : D + "px" : _(("" + D).trim());
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
            v === !0 ? n.push(" ", f, '=""') : v !== !1 && n.push(" ", f, '="', _(v), '"');
            break;
          case 5:
            isNaN(v) || n.push(" ", f, '="', _(v), '"');
            break;
          case 6:
            !isNaN(v) && 1 <= v && n.push(" ", f, '="', _(v), '"');
            break;
          default:
            l.sanitizeURL && (v = "" + v), n.push(" ", f, '="', _(v), '"');
        }
      } else if (y(f)) {
        switch (typeof v) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (l = f.toLowerCase().slice(0, 5), l !== "data-" && l !== "aria-") return;
        }
        n.push(" ", f, '="', _(v), '"');
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
  function De(n) {
    var l = "";
    return e.Children.forEach(n, function(f) {
      f != null && (l += f);
    }), l;
  }
  function Fe(n, l, f, v) {
    n.push(fe(f));
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
    return n.push(">"), Se(n, D, f), typeof f == "string" ? (n.push(_(f)), null) : f;
  }
  var Xe = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, de = /* @__PURE__ */ new Map();
  function fe(n) {
    var l = de.get(n);
    if (l === void 0) {
      if (!Xe.test(n)) throw Error(t(65, n));
      l = "<" + n, de.set(n, l);
    }
    return l;
  }
  function Re(n, l, f, v, D) {
    switch (l) {
      case "select":
        n.push(fe("select"));
        var A = null, z = null;
        for (xe in f) if (r.call(f, xe)) {
          var J = f[xe];
          if (J != null) switch (xe) {
            case "children":
              A = J;
              break;
            case "dangerouslySetInnerHTML":
              z = J;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              ae(n, v, xe, J);
          }
        }
        return n.push(">"), Se(n, z, A), A;
      case "option":
        z = D.selectedValue, n.push(fe("option"));
        var he = J = null, be = null, xe = null;
        for (A in f) if (r.call(f, A)) {
          var at = f[A];
          if (at != null) switch (A) {
            case "children":
              J = at;
              break;
            case "selected":
              be = at;
              break;
            case "dangerouslySetInnerHTML":
              xe = at;
              break;
            case "value":
              he = at;
            default:
              ae(n, v, A, at);
          }
        }
        if (z != null) if (f = he !== null ? "" + he : De(J), V(z)) {
          for (v = 0; v < z.length; v++)
            if ("" + z[v] === f) {
              n.push(' selected=""');
              break;
            }
        } else "" + z === f && n.push(' selected=""');
        else be && n.push(' selected=""');
        return n.push(">"), Se(n, xe, J), J;
      case "textarea":
        n.push(fe("textarea")), xe = z = A = null;
        for (J in f) if (r.call(f, J) && (he = f[J], he != null)) switch (J) {
          case "children":
            xe = he;
            break;
          case "value":
            A = he;
            break;
          case "defaultValue":
            z = he;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(91));
          default:
            ae(
              n,
              v,
              J,
              he
            );
        }
        if (A === null && z !== null && (A = z), n.push(">"), xe != null) {
          if (A != null) throw Error(t(92));
          if (V(xe) && 1 < xe.length) throw Error(t(93));
          A = "" + xe;
        }
        return typeof A == "string" && A[0] === `
` && n.push(`
`), A !== null && n.push(_("" + A)), null;
      case "input":
        n.push(fe("input")), he = xe = J = A = null;
        for (z in f) if (r.call(f, z) && (be = f[z], be != null)) switch (z) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, "input"));
          case "defaultChecked":
            he = be;
            break;
          case "defaultValue":
            J = be;
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
        return xe !== null ? ae(n, v, "checked", xe) : he !== null && ae(n, v, "checked", he), A !== null ? ae(n, v, "value", A) : J !== null && ae(n, v, "value", J), n.push("/>"), null;
      case "menuitem":
        n.push(fe("menuitem"));
        for (var Yt in f) if (r.call(f, Yt) && (A = f[Yt], A != null)) switch (Yt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            ae(n, v, Yt, A);
        }
        return n.push(">"), null;
      case "title":
        n.push(fe("title")), A = null;
        for (at in f) if (r.call(f, at) && (z = f[at], z != null)) switch (at) {
          case "children":
            A = z;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(434));
          default:
            ae(n, v, at, z);
        }
        return n.push(">"), A;
      case "listing":
      case "pre":
        n.push(fe(l)), z = A = null;
        for (he in f) if (r.call(f, he) && (J = f[he], J != null)) switch (he) {
          case "children":
            A = J;
            break;
          case "dangerouslySetInnerHTML":
            z = J;
            break;
          default:
            ae(n, v, he, J);
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
        n.push(fe(l));
        for (var Gt in f) if (r.call(f, Gt) && (A = f[Gt], A != null)) switch (Gt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, l));
          default:
            ae(n, v, Gt, A);
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
        n.push(fe(l)), z = A = null;
        for (be in f) if (r.call(f, be) && (J = f[be], J != null)) switch (be) {
          case "children":
            A = J;
            break;
          case "dangerouslySetInnerHTML":
            z = J;
            break;
          case "style":
            x(n, v, J);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            y(be) && typeof J != "function" && typeof J != "symbol" && n.push(" ", be, '="', _(J), '"');
        }
        return n.push(">"), Se(n, z, A), A;
    }
  }
  function Ie(n, l, f) {
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
  function lt(n, l) {
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
  function He(n, l) {
    return l = l === void 0 ? "" : l, { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: l + "P:", segmentPrefix: l + "S:", boundaryPrefix: l + "B:", idPrefix: l, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1, generateStaticMarkup: n };
  }
  function rt(n, l, f, v) {
    return f.generateStaticMarkup ? (n.push(_(l)), !1) : (l === "" ? n = v : (v && n.push("<!-- -->"), n.push(_(l)), n = !0), n);
  }
  var se = Object.assign, F = Symbol.for("react.element"), E = Symbol.for("react.portal"), L = Symbol.for("react.fragment"), M = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), ee = Symbol.for("react.provider"), T = Symbol.for("react.context"), ie = Symbol.for("react.forward_ref"), Q = Symbol.for("react.suspense"), te = Symbol.for("react.suspense_list"), G = Symbol.for("react.memo"), ne = Symbol.for("react.lazy"), ce = Symbol.for("react.scope"), K = Symbol.for("react.debug_trace_mode"), ge = Symbol.for("react.legacy_hidden"), re = Symbol.for("react.default_value"), le = Symbol.iterator;
  function We(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case L:
        return "Fragment";
      case E:
        return "Portal";
      case m:
        return "Profiler";
      case M:
        return "StrictMode";
      case Q:
        return "Suspense";
      case te:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case T:
        return (n.displayName || "Context") + ".Consumer";
      case ee:
        return (n._context.displayName || "Context") + ".Provider";
      case ie:
        var l = n.render;
        return n = n.displayName, n || (n = l.displayName || l.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case G:
        return l = n.displayName || null, l !== null ? l : We(n.type) || "Memo";
      case ne:
        l = n._payload, n = n._init;
        try {
          return We(n(l));
        } catch {
        }
    }
    return null;
  }
  var ue = {};
  function it(n, l) {
    if (n = n.contextTypes, !n) return ue;
    var f = {}, v;
    for (v in n) f[v] = l[v];
    return f;
  }
  var qe = null;
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
  function H(n) {
    n.context._currentValue2 = n.parentValue, n = n.parent, n !== null && H(n);
  }
  function oe(n) {
    var l = n.parent;
    l !== null && oe(l), n.context._currentValue2 = n.value;
  }
  function Ze(n, l) {
    if (n.context._currentValue2 = n.parentValue, n = n.parent, n === null) throw Error(t(402));
    n.depth === l.depth ? ke(n, l) : Ze(n, l);
  }
  function Pe(n, l) {
    var f = l.parent;
    if (f === null) throw Error(t(402));
    n.depth === f.depth ? ke(n, f) : Pe(n, f), l.context._currentValue2 = l.value;
  }
  function Me(n) {
    var l = qe;
    l !== n && (l === null ? oe(n) : n === null ? H(l) : l.depth === n.depth ? ke(l, n) : l.depth > n.depth ? Ze(l, n) : Pe(l, n), qe = n);
  }
  var tr = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(n, l) {
    n = n._reactInternals, n.queue !== null && n.queue.push(l);
  }, enqueueReplaceState: function(n, l) {
    n = n._reactInternals, n.replace = !0, n.queue = [l];
  }, enqueueForceUpdate: function() {
  } };
  function rr(n, l, f, v) {
    var D = n.state !== void 0 ? n.state : null;
    n.updater = tr, n.props = f, n.state = D;
    var A = { queue: [], replace: !1 };
    n._reactInternals = A;
    var z = l.contextType;
    if (n.context = typeof z == "object" && z !== null ? z._currentValue2 : v, z = l.getDerivedStateFromProps, typeof z == "function" && (z = z(f, D), D = z == null ? D : se({}, D, z), n.state = D), typeof l.getDerivedStateFromProps != "function" && typeof n.getSnapshotBeforeUpdate != "function" && (typeof n.UNSAFE_componentWillMount == "function" || typeof n.componentWillMount == "function")) if (l = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), l !== n.state && tr.enqueueReplaceState(n, n.state, null), A.queue !== null && 0 < A.queue.length) if (l = A.queue, z = A.replace, A.queue = null, A.replace = !1, z && l.length === 1) n.state = l[0];
    else {
      for (A = z ? l[0] : n.state, D = !0, z = z ? 1 : 0; z < l.length; z++) {
        var J = l[z];
        J = typeof J == "function" ? J.call(n, A, f, v) : J, J != null && (D ? (D = !1, A = se({}, A, J)) : se(A, J));
      }
      n.state = A;
    }
    else A.queue = null;
  }
  var Ut = { id: 1, overflow: "" };
  function $t(n, l, f) {
    var v = n.id;
    n = n.overflow;
    var D = 32 - ht(v) - 1;
    v &= ~(1 << D), f += 1;
    var A = 32 - ht(l) + D;
    if (30 < A) {
      var z = D - D % 5;
      return A = (v & (1 << z) - 1).toString(32), v >>= z, D -= z, { id: 1 << 32 - ht(l) + D | f << D | v, overflow: A + n };
    }
    return { id: 1 << A | f << D | v, overflow: n };
  }
  var ht = Math.clz32 ? Math.clz32 : dt, Et = Math.log, Qe = Math.LN2;
  function dt(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Et(n) / Qe | 0) | 0;
  }
  function Wt(n, l) {
    return n === l && (n !== 0 || 1 / n === 1 / l) || n !== n && l !== l;
  }
  var Bt = typeof Object.is == "function" ? Object.is : Wt, mt = null, vt = null, gt = null, Le = null, ct = !1, nr = !1, Ht = 0, pe = null, ot = 0;
  function At() {
    if (mt === null) throw Error(t(321));
    return mt;
  }
  function ar() {
    if (0 < ot) throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function Rt() {
    return Le === null ? gt === null ? (ct = !1, gt = Le = ar()) : (ct = !0, Le = gt) : Le.next === null ? (ct = !1, Le = Le.next = ar()) : (ct = !0, Le = Le.next), Le;
  }
  function qt() {
    vt = mt = null, nr = !1, gt = null, ot = 0, Le = pe = null;
  }
  function ir(n, l) {
    return typeof l == "function" ? l(n) : l;
  }
  function mr(n, l, f) {
    if (mt = At(), Le = Rt(), ct) {
      var v = Le.queue;
      if (l = v.dispatch, pe !== null && (f = pe.get(v), f !== void 0)) {
        pe.delete(v), v = Le.memoizedState;
        do
          v = n(v, f.action), f = f.next;
        while (f !== null);
        return Le.memoizedState = v, [v, l];
      }
      return [Le.memoizedState, l];
    }
    return n = n === ir ? typeof l == "function" ? l() : l : f !== void 0 ? f(l) : l, Le.memoizedState = n, n = Le.queue = { last: null, dispatch: null }, n = n.dispatch = ut.bind(null, mt, n), [Le.memoizedState, n];
  }
  function nt(n, l) {
    if (mt = At(), Le = Rt(), l = l === void 0 ? null : l, Le !== null) {
      var f = Le.memoizedState;
      if (f !== null && l !== null) {
        var v = f[1];
        e: if (v === null) v = !1;
        else {
          for (var D = 0; D < v.length && D < l.length; D++) if (!Bt(l[D], v[D])) {
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
  function ut(n, l, f) {
    if (25 <= ot) throw Error(t(301));
    if (n === mt) if (nr = !0, n = { action: f, next: null }, pe === null && (pe = /* @__PURE__ */ new Map()), f = pe.get(l), f === void 0) pe.set(l, n);
    else {
      for (l = f; l.next !== null; ) l = l.next;
      l.next = n;
    }
  }
  function lr() {
    throw Error(t(394));
  }
  function Mt() {
  }
  var Lt = { readContext: function(n) {
    return n._currentValue2;
  }, useContext: function(n) {
    return At(), n._currentValue2;
  }, useMemo: nt, useReducer: mr, useRef: function(n) {
    mt = At(), Le = Rt();
    var l = Le.memoizedState;
    return l === null ? (n = { current: n }, Le.memoizedState = n) : l;
  }, useState: function(n) {
    return mr(ir, n);
  }, useInsertionEffect: Mt, useLayoutEffect: function() {
  }, useCallback: function(n, l) {
    return nt(function() {
      return n;
    }, l);
  }, useImperativeHandle: Mt, useEffect: Mt, useDebugValue: Mt, useDeferredValue: function(n) {
    return At(), n;
  }, useTransition: function() {
    return At(), [
      !1,
      lr
    ];
  }, useId: function() {
    var n = vt.treeContext, l = n.overflow;
    n = n.id, n = (n & ~(1 << 32 - ht(n) - 1)).toString(32) + l;
    var f = Tt;
    if (f === null) throw Error(t(404));
    return l = Ht++, n = ":" + f.idPrefix + "R" + n, 0 < l && (n += "H" + l.toString(32)), n + ":";
  }, useMutableSource: function(n, l) {
    return At(), l(n._source);
  }, useSyncExternalStore: function(n, l, f) {
    if (f === void 0) throw Error(t(407));
    return f();
  } }, Tt = null, et = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function cr(n) {
    return console.error(n), null;
  }
  function Ot() {
  }
  function ur(n, l, f, v, D, A, z, J, he) {
    var be = [], xe = /* @__PURE__ */ new Set();
    return l = { destination: null, responseState: l, progressiveChunkSize: v, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: xe, pingedTasks: be, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: D === void 0 ? cr : D, onAllReady: Ot, onShellReady: z === void 0 ? Ot : z, onShellError: Ot, onFatalError: Ot }, f = Ft(l, 0, null, f, !1, !1), f.parentFlushed = !0, n = Vt(l, n, null, f, xe, ue, null, Ut), be.push(n), l;
  }
  function Vt(n, l, f, v, D, A, z, J) {
    n.allPendingTasks++, f === null ? n.pendingRootTasks++ : f.pendingTasks++;
    var he = { node: l, ping: function() {
      var be = n.pingedTasks;
      be.push(he), be.length === 1 && _r(n);
    }, blockedBoundary: f, blockedSegment: v, abortSet: D, legacyContext: A, context: z, treeContext: J };
    return D.add(he), he;
  }
  function Ft(n, l, f, v, D, A) {
    return { status: 0, id: -1, index: l, parentFlushed: !1, chunks: [], children: [], formatContext: v, boundary: f, lastPushedText: D, textEmbedded: A };
  }
  function p(n, l) {
    if (n = n.onError(l), n != null && typeof n != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof n + '" instead');
    return n;
  }
  function h(n, l) {
    var f = n.onShellError;
    f(l), f = n.onFatalError, f(l), n.destination !== null ? (n.status = 2, n.destination.destroy(l)) : (n.status = 1, n.fatalError = l);
  }
  function C(n, l, f, v, D) {
    for (mt = {}, vt = l, Ht = 0, n = f(v, D); nr; ) nr = !1, Ht = 0, ot += 1, Le = null, n = f(v, D);
    return qt(), n;
  }
  function X(n, l, f, v) {
    var D = f.render(), A = v.childContextTypes;
    if (A != null) {
      var z = l.legacyContext;
      if (typeof f.getChildContext != "function") v = z;
      else {
        f = f.getChildContext();
        for (var J in f) if (!(J in A)) throw Error(t(108, We(v) || "Unknown", J));
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
      A = new f(v, typeof A == "object" && A !== null ? A._currentValue2 : D), rr(A, f, v, D), X(n, l, A, f);
    } else {
      A = it(f, l.legacyContext), D = C(n, l, f, v, A);
      var z = Ht !== 0;
      if (typeof D == "object" && D !== null && typeof D.render == "function" && D.$$typeof === void 0) rr(D, f, v, A), X(n, l, D, f);
      else if (z) {
        v = l.treeContext, l.treeContext = $t(v, 1, 0);
        try {
          we(n, l, D);
        } finally {
          l.treeContext = v;
        }
      } else we(n, l, D);
    }
    else if (typeof f == "string") {
      switch (D = l.blockedSegment, A = Re(D.chunks, f, v, n.responseState, D.formatContext), D.lastPushedText = !1, z = D.formatContext, D.formatContext = Y(z, f, v), Ne(n, l, A), D.formatContext = z, f) {
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
        case m:
        case L:
          we(n, l, v.children);
          return;
        case te:
          we(n, l, v.children);
          return;
        case ce:
          throw Error(t(343));
        case Q:
          e: {
            f = l.blockedBoundary, D = l.blockedSegment, A = v.fallback, v = v.children, z = /* @__PURE__ */ new Set();
            var J = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: z, errorDigest: null }, he = Ft(n, D.chunks.length, J, D.formatContext, !1, !1);
            D.children.push(he), D.lastPushedText = !1;
            var be = Ft(n, 0, null, D.formatContext, !1, !1);
            be.parentFlushed = !0, l.blockedBoundary = J, l.blockedSegment = be;
            try {
              if (Ne(
                n,
                l,
                v
              ), n.responseState.generateStaticMarkup || be.lastPushedText && be.textEmbedded && be.chunks.push("<!-- -->"), be.status = 1, Be(J, be), J.pendingTasks === 0) break e;
            } catch (xe) {
              be.status = 4, J.forceClientRender = !0, J.errorDigest = p(n, xe);
            } finally {
              l.blockedBoundary = f, l.blockedSegment = D;
            }
            l = Vt(n, A, f, he, z, l.legacyContext, l.context, l.treeContext), n.pingedTasks.push(l);
          }
          return;
      }
      if (typeof f == "object" && f !== null) switch (f.$$typeof) {
        case ie:
          if (v = C(n, l, f.render, v, D), Ht !== 0) {
            f = l.treeContext, l.treeContext = $t(f, 1, 0);
            try {
              we(n, l, v);
            } finally {
              l.treeContext = f;
            }
          } else we(n, l, v);
          return;
        case G:
          f = f.type, v = ye(f, v), ve(n, l, f, v, D);
          return;
        case ee:
          if (D = v.children, f = f._context, v = v.value, A = f._currentValue2, f._currentValue2 = v, z = qe, qe = v = { parent: z, depth: z === null ? 0 : z.depth + 1, context: f, parentValue: A, value: v }, l.context = v, we(n, l, D), n = qe, n === null) throw Error(t(403));
          v = n.parentValue, n.context._currentValue2 = v === re ? n.context._defaultValue : v, n = qe = n.parent, l.context = n;
          return;
        case T:
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
        ze(n, l, f);
        return;
      }
      if (f === null || typeof f != "object" ? v = null : (v = le && f[le] || f["@@iterator"], v = typeof v == "function" ? v : null), v && (v = v.call(f))) {
        if (f = v.next(), !f.done) {
          var D = [];
          do
            D.push(f.value), f = v.next();
          while (!f.done);
          ze(n, l, D);
        }
        return;
      }
      throw n = Object.prototype.toString.call(f), Error(t(31, n === "[object Object]" ? "object with keys {" + Object.keys(f).join(", ") + "}" : n));
    }
    typeof f == "string" ? (v = l.blockedSegment, v.lastPushedText = rt(l.blockedSegment.chunks, f, n.responseState, v.lastPushedText)) : typeof f == "number" && (v = l.blockedSegment, v.lastPushedText = rt(l.blockedSegment.chunks, "" + f, n.responseState, v.lastPushedText));
  }
  function ze(n, l, f) {
    for (var v = f.length, D = 0; D < v; D++) {
      var A = l.treeContext;
      l.treeContext = $t(A, v, D);
      try {
        Ne(n, l, f[D]);
      } finally {
        l.treeContext = A;
      }
    }
  }
  function Ne(n, l, f) {
    var v = l.blockedSegment.formatContext, D = l.legacyContext, A = l.context;
    try {
      return we(n, l, f);
    } catch (he) {
      if (qt(), typeof he == "object" && he !== null && typeof he.then == "function") {
        f = he;
        var z = l.blockedSegment, J = Ft(n, z.chunks.length, null, z.formatContext, z.lastPushedText, !0);
        z.children.push(J), z.lastPushedText = !1, n = Vt(n, l.node, l.blockedBoundary, J, l.abortSet, l.legacyContext, l.context, l.treeContext).ping, f.then(n, n), l.blockedSegment.formatContext = v, l.legacyContext = D, l.context = A, Me(A);
      } else throw l.blockedSegment.formatContext = v, l.legacyContext = D, l.context = A, Me(A), he;
    }
  }
  function st(n) {
    var l = n.blockedBoundary;
    n = n.blockedSegment, n.status = 3, It(this, l, n);
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
  function It(n, l, f) {
    if (l === null) {
      if (f.parentFlushed) {
        if (n.completedRootSegment !== null) throw Error(t(389));
        n.completedRootSegment = f;
      }
      n.pendingRootTasks--, n.pendingRootTasks === 0 && (n.onShellError = Ot, l = n.onShellReady, l());
    } else l.pendingTasks--, l.forceClientRender || (l.pendingTasks === 0 ? (f.parentFlushed && f.status === 1 && Be(l, f), l.parentFlushed && n.completedBoundaries.push(l), l.fallbackAbortableTasks.forEach(st, n), l.fallbackAbortableTasks.clear()) : f.parentFlushed && f.status === 1 && (Be(l, f), l.completedSegments.length === 1 && l.parentFlushed && n.partialBoundaries.push(l)));
    n.allPendingTasks--, n.allPendingTasks === 0 && (n = n.onAllReady, n());
  }
  function _r(n) {
    if (n.status !== 2) {
      var l = qe, f = et.current;
      et.current = Lt;
      var v = Tt;
      Tt = n.responseState;
      try {
        var D = n.pingedTasks, A;
        for (A = 0; A < D.length; A++) {
          var z = D[A], J = n, he = z.blockedSegment;
          if (he.status === 0) {
            Me(z.context);
            try {
              we(J, z, z.node), J.responseState.generateStaticMarkup || he.lastPushedText && he.textEmbedded && he.chunks.push("<!-- -->"), z.abortSet.delete(z), he.status = 1, It(J, z.blockedBoundary, he);
            } catch (Nt) {
              if (qt(), typeof Nt == "object" && Nt !== null && typeof Nt.then == "function") {
                var be = z.ping;
                Nt.then(be, be);
              } else {
                z.abortSet.delete(z), he.status = 4;
                var xe = z.blockedBoundary, at = Nt, Yt = p(J, at);
                if (xe === null ? h(J, at) : (xe.pendingTasks--, xe.forceClientRender || (xe.forceClientRender = !0, xe.errorDigest = Yt, xe.parentFlushed && J.clientRenderedBoundaries.push(xe))), J.allPendingTasks--, J.allPendingTasks === 0) {
                  var Gt = J.onAllReady;
                  Gt();
                }
              }
            } finally {
            }
          }
        }
        D.splice(0, A), n.destination !== null && Dr(n, n.destination);
      } catch (Nt) {
        p(n, Nt), h(n, Nt);
      } finally {
        Tt = v, et.current = f, f === Lt && Me(l);
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
    if (v.parentFlushed = !0, v.forceClientRender) return n.responseState.generateStaticMarkup || (v = v.errorDigest, l.push("<!--$!-->"), l.push("<template"), v && (l.push(' data-dgst="'), v = _(v), l.push(v), l.push('"')), l.push("></template>")), Cr(n, l, f), n = n.responseState.generateStaticMarkup ? !0 : l.push("<!--/$-->"), n;
    if (0 < v.pendingTasks) {
      v.rootSegmentID = n.nextSegmentId++, 0 < v.completedSegments.length && n.partialBoundaries.push(v);
      var D = n.responseState, A = D.nextSuspenseID++;
      return D = D.boundaryPrefix + A.toString(16), v = v.id = D, Ie(l, n.responseState, v), Cr(n, l, f), l.push("<!--/$-->");
    }
    if (v.byteSize > n.progressiveChunkSize) return v.rootSegmentID = n.nextSegmentId++, n.completedBoundaries.push(v), Ie(l, n.responseState, v.id), Cr(n, l, f), l.push("<!--/$-->");
    if (n.responseState.generateStaticMarkup || l.push("<!--$-->"), f = v.completedSegments, f.length !== 1) throw Error(t(391));
    return Tr(n, l, f[0]), n = n.responseState.generateStaticMarkup ? !0 : l.push("<!--/$-->"), n;
  }
  function Wr(n, l, f) {
    return Te(l, n.responseState, f.formatContext, f.id), Tr(n, l, f), lt(l, f.formatContext);
  }
  function Br(n, l, f) {
    for (var v = f.completedSegments, D = 0; D < v.length; D++) Hr(n, l, f, v[D]);
    if (v.length = 0, n = n.responseState, v = f.id, f = f.rootSegmentID, l.push(n.startInlineScript), n.sentCompleteBoundaryFunction ? l.push('$RC("') : (n.sentCompleteBoundaryFunction = !0, l.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("')), v === null) throw Error(t(395));
    return f = f.toString(16), l.push(v), l.push('","'), l.push(n.segmentPrefix), l.push(f), l.push('")<\/script>');
  }
  function Hr(n, l, f, v) {
    if (v.status === 2) return !0;
    var D = v.id;
    if (D === -1) {
      if ((v.id = f.rootSegmentID) === -1) throw Error(t(392));
      return Wr(n, l, v);
    }
    return Wr(n, l, v), n = n.responseState, l.push(n.startInlineScript), n.sentCompleteSegmentFunction ? l.push('$RS("') : (n.sentCompleteSegmentFunction = !0, l.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("')), l.push(n.segmentPrefix), D = D.toString(16), l.push(D), l.push('","'), l.push(n.placeholderPrefix), l.push(D), l.push('")<\/script>');
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
        var J = n.responseState, he = z.id, be = z.errorDigest, xe = z.errorMessage, at = z.errorComponentStack;
        if (v.push(J.startInlineScript), J.sentClientRenderFunction ? v.push('$RX("') : (J.sentClientRenderFunction = !0, v.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("')), he === null) throw Error(t(395));
        if (v.push(he), v.push('"'), be || xe || at) {
          v.push(",");
          var Yt = Oe(be || "");
          v.push(Yt);
        }
        if (xe || at) {
          v.push(",");
          var Gt = Oe(xe || "");
          v.push(Gt);
        }
        if (at) {
          v.push(",");
          var Nt = Oe(at);
          v.push(Nt);
        }
        if (!v.push(")<\/script>")) {
          n.destination = null, A++, D.splice(0, A);
          return;
        }
      }
      D.splice(0, A);
      var Er = n.completedBoundaries;
      for (A = 0; A < Er.length; A++) if (!Br(n, l, Er[A])) {
        n.destination = null, A++, Er.splice(0, A);
        return;
      }
      Er.splice(0, A);
      var dr = n.partialBoundaries;
      for (A = 0; A < dr.length; A++) {
        var Vr = dr[A];
        e: {
          D = n, z = l;
          var Ar = Vr.completedSegments;
          for (J = 0; J < Ar.length; J++) if (!Hr(D, z, Vr, Ar[J])) {
            J++, Ar.splice(0, J);
            var Cn = !1;
            break e;
          }
          Ar.splice(0, J), Cn = !0;
        }
        if (!Cn) {
          n.destination = null, A++, dr.splice(0, A);
          return;
        }
      }
      dr.splice(0, A);
      var gr = n.completedBoundaries;
      for (A = 0; A < gr.length; A++) if (!Br(n, l, gr[A])) {
        n.destination = null, A++, gr.splice(0, A);
        return;
      }
      gr.splice(0, A);
    } finally {
      n.allPendingTasks === 0 && n.pingedTasks.length === 0 && n.clientRenderedBoundaries.length === 0 && n.completedBoundaries.length === 0 && l.push(null);
    }
  }
  function xn(n, l) {
    try {
      var f = n.abortableTasks;
      f.forEach(function(v) {
        return Ke(v, n, l);
      }), f.clear(), n.destination !== null && Dr(n, n.destination);
    } catch (v) {
      p(n, v), h(n, v);
    }
  }
  function _n() {
  }
  function qr(n, l, f, v) {
    var D = !1, A = null, z = "", J = { push: function(be) {
      return be !== null && (z += be), !0;
    }, destroy: function(be) {
      D = !0, A = be;
    } }, he = !1;
    if (n = ur(n, He(f, l ? l.identifierPrefix : void 0), { insertionMode: 1, selectedValue: null }, 1 / 0, _n, void 0, function() {
      he = !0;
    }), _r(n), xn(n, v), n.status === 1) n.status = 2, J.destroy(n.fatalError);
    else if (n.status !== 2 && n.destination === null) {
      n.destination = J;
      try {
        Dr(n, J);
      } catch (be) {
        p(n, be), h(n, be);
      }
    }
    if (D) throw A;
    if (!he) throw Error(t(426));
    return z;
  }
  return Or.renderToNodeStream = function() {
    throw Error(t(207));
  }, Or.renderToStaticMarkup = function(n, l) {
    return qr(n, l, !0, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Or.renderToStaticNodeStream = function() {
    throw Error(t(208));
  }, Or.renderToString = function(n, l) {
    return qr(n, l, !1, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToReadableStream" which supports Suspense on the server');
  }, Or.version = "18.3.1", Or;
}
var $n = {}, po;
function wc() {
  if (po) return $n;
  po = 1;
  var e = pt;
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
  function S(a) {
    return k.encode(a);
  }
  function g(a) {
    return k.encode(a);
  }
  function I(a, s) {
    typeof a.error == "function" ? a.error(s) : a.close();
  }
  var O = Object.prototype.hasOwnProperty, j = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, q = {}, _ = {};
  function w(a) {
    return O.call(_, a) ? !0 : O.call(q, a) ? !1 : j.test(a) ? _[a] = !0 : (q[a] = !0, !1);
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
  var De = /([A-Z])/g, Fe = /^ms-/, Xe = Array.isArray, de = g("<script>"), fe = g("<\/script>"), Re = g('<script src="'), Ie = g('<script type="module" src="'), Te = g('" async=""><\/script>'), lt = /(<\/|<)(s)(cript)/gi;
  function je(a, s, d, b) {
    return "" + s + (d === "s" ? "\\u0073" : "\\u0053") + b;
  }
  function Oe(a, s, d, b, N) {
    a = a === void 0 ? "" : a, s = s === void 0 ? de : g('<script nonce="' + Se(s) + '">');
    var R = [];
    if (d !== void 0 && R.push(s, S(("" + d).replace(lt, je)), fe), b !== void 0) for (d = 0; d < b.length; d++) R.push(Re, S(Se(b[d])), Te);
    if (N !== void 0) for (b = 0; b < N.length; b++) R.push(Ie, S(Se(N[b])), Te);
    return { bootstrapChunks: R, startInlineScript: s, placeholderPrefix: g(a + "P:"), segmentPrefix: g(a + "S:"), boundaryPrefix: a + "B:", idPrefix: a, nextSuspenseID: 0, sentCompleteSegmentFunction: !1, sentCompleteBoundaryFunction: !1, sentClientRenderFunction: !1 };
  }
  function He(a, s) {
    return { insertionMode: a, selectedValue: s };
  }
  function rt(a) {
    return He(a === "http://www.w3.org/2000/svg" ? 2 : a === "http://www.w3.org/1998/Math/MathML" ? 3 : 0, null);
  }
  function se(a, s, d) {
    switch (s) {
      case "select":
        return He(1, d.value != null ? d.value : d.defaultValue);
      case "svg":
        return He(2, null);
      case "math":
        return He(3, null);
      case "foreignObject":
        return He(1, null);
      case "table":
        return He(4, null);
      case "thead":
      case "tbody":
      case "tfoot":
        return He(5, null);
      case "colgroup":
        return He(7, null);
      case "tr":
        return He(6, null);
    }
    return 4 <= a.insertionMode || a.insertionMode === 0 ? He(1, null) : a;
  }
  var F = g("<!-- -->");
  function E(a, s, d, b) {
    return s === "" ? b : (b && a.push(F), a.push(S(Se(s))), !0);
  }
  var L = /* @__PURE__ */ new Map(), M = g(' style="'), m = g(":"), ee = g(";");
  function T(a, s, d) {
    if (typeof d != "object") throw Error(t(62));
    s = !0;
    for (var b in d) if (O.call(d, b)) {
      var N = d[b];
      if (N != null && typeof N != "boolean" && N !== "") {
        if (b.indexOf("--") === 0) {
          var R = S(Se(b));
          N = S(Se(("" + N).trim()));
        } else {
          R = b;
          var U = L.get(R);
          U !== void 0 || (U = g(Se(R.replace(De, "-$1").toLowerCase().replace(Fe, "-ms-"))), L.set(R, U)), R = U, N = typeof N == "number" ? N === 0 || O.call(W, b) ? S("" + N) : S(N + "px") : S(Se(("" + N).trim()));
        }
        s ? (s = !1, a.push(M, R, m, N)) : a.push(ee, R, m, N);
      }
    }
    s || a.push(te);
  }
  var ie = g(" "), Q = g('="'), te = g('"'), G = g('=""');
  function ne(a, s, d, b) {
    switch (d) {
      case "style":
        T(a, s, b);
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
        switch (d = S(s.attributeName), s.type) {
          case 3:
            b && a.push(ie, d, G);
            break;
          case 4:
            b === !0 ? a.push(ie, d, G) : b !== !1 && a.push(ie, d, Q, S(Se(b)), te);
            break;
          case 5:
            isNaN(b) || a.push(ie, d, Q, S(Se(b)), te);
            break;
          case 6:
            !isNaN(b) && 1 <= b && a.push(ie, d, Q, S(Se(b)), te);
            break;
          default:
            s.sanitizeURL && (b = "" + b), a.push(ie, d, Q, S(Se(b)), te);
        }
      } else if (w(d)) {
        switch (typeof b) {
          case "function":
          case "symbol":
            return;
          case "boolean":
            if (s = d.toLowerCase().slice(0, 5), s !== "data-" && s !== "aria-") return;
        }
        a.push(ie, S(d), Q, S(Se(b)), te);
      }
    }
  }
  var ce = g(">"), K = g("/>");
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
  var le = g(' selected=""');
  function We(a, s, d, b) {
    a.push(ke(d));
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
    return a.push(ce), ge(a, N, d), typeof d == "string" ? (a.push(S(Se(d))), null) : d;
  }
  var ue = g(`
`), it = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/, qe = /* @__PURE__ */ new Map();
  function ke(a) {
    var s = qe.get(a);
    if (s === void 0) {
      if (!it.test(a)) throw Error(t(65, a));
      s = g("<" + a), qe.set(a, s);
    }
    return s;
  }
  var H = g("<!DOCTYPE html>");
  function oe(a, s, d, b, N) {
    switch (s) {
      case "select":
        a.push(ke("select"));
        var R = null, U = null;
        for (_e in d) if (O.call(d, _e)) {
          var Z = d[_e];
          if (Z != null) switch (_e) {
            case "children":
              R = Z;
              break;
            case "dangerouslySetInnerHTML":
              U = Z;
              break;
            case "defaultValue":
            case "value":
              break;
            default:
              ne(a, b, _e, Z);
          }
        }
        return a.push(ce), ge(a, U, R), R;
      case "option":
        U = N.selectedValue, a.push(ke("option"));
        var me = Z = null, Ce = null, _e = null;
        for (R in d) if (O.call(d, R)) {
          var tt = d[R];
          if (tt != null) switch (R) {
            case "children":
              Z = tt;
              break;
            case "selected":
              Ce = tt;
              break;
            case "dangerouslySetInnerHTML":
              _e = tt;
              break;
            case "value":
              me = tt;
            default:
              ne(a, b, R, tt);
          }
        }
        if (U != null) if (d = me !== null ? "" + me : re(Z), Xe(U)) {
          for (b = 0; b < U.length; b++)
            if ("" + U[b] === d) {
              a.push(le);
              break;
            }
        } else "" + U === d && a.push(le);
        else Ce && a.push(le);
        return a.push(ce), ge(a, _e, Z), Z;
      case "textarea":
        a.push(ke("textarea")), _e = U = R = null;
        for (Z in d) if (O.call(d, Z) && (me = d[Z], me != null)) switch (Z) {
          case "children":
            _e = me;
            break;
          case "value":
            R = me;
            break;
          case "defaultValue":
            U = me;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(91));
          default:
            ne(a, b, Z, me);
        }
        if (R === null && U !== null && (R = U), a.push(ce), _e != null) {
          if (R != null) throw Error(t(92));
          if (Xe(_e) && 1 < _e.length) throw Error(t(93));
          R = "" + _e;
        }
        return typeof R == "string" && R[0] === `
` && a.push(ue), R !== null && a.push(S(Se("" + R))), null;
      case "input":
        a.push(ke("input")), me = _e = Z = R = null;
        for (U in d) if (O.call(d, U) && (Ce = d[U], Ce != null)) switch (U) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(399, "input"));
          case "defaultChecked":
            me = Ce;
            break;
          case "defaultValue":
            Z = Ce;
            break;
          case "checked":
            _e = Ce;
            break;
          case "value":
            R = Ce;
            break;
          default:
            ne(a, b, U, Ce);
        }
        return _e !== null ? ne(
          a,
          b,
          "checked",
          _e
        ) : me !== null && ne(a, b, "checked", me), R !== null ? ne(a, b, "value", R) : Z !== null && ne(a, b, "value", Z), a.push(K), null;
      case "menuitem":
        a.push(ke("menuitem"));
        for (var Pt in d) if (O.call(d, Pt) && (R = d[Pt], R != null)) switch (Pt) {
          case "children":
          case "dangerouslySetInnerHTML":
            throw Error(t(400));
          default:
            ne(a, b, Pt, R);
        }
        return a.push(ce), null;
      case "title":
        a.push(ke("title")), R = null;
        for (tt in d) if (O.call(d, tt) && (U = d[tt], U != null)) switch (tt) {
          case "children":
            R = U;
            break;
          case "dangerouslySetInnerHTML":
            throw Error(t(434));
          default:
            ne(a, b, tt, U);
        }
        return a.push(ce), R;
      case "listing":
      case "pre":
        a.push(ke(s)), U = R = null;
        for (me in d) if (O.call(d, me) && (Z = d[me], Z != null)) switch (me) {
          case "children":
            R = Z;
            break;
          case "dangerouslySetInnerHTML":
            U = Z;
            break;
          default:
            ne(a, b, me, Z);
        }
        if (a.push(ce), U != null) {
          if (R != null) throw Error(t(60));
          if (typeof U != "object" || !("__html" in U)) throw Error(t(61));
          d = U.__html, d != null && (typeof d == "string" && 0 < d.length && d[0] === `
` ? a.push(ue, S(d)) : a.push(S("" + d)));
        }
        return typeof R == "string" && R[0] === `
` && a.push(ue), R;
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
        return We(a, d, s, b);
      case "html":
        return N.insertionMode === 0 && a.push(H), We(a, d, s, b);
      default:
        if (s.indexOf("-") === -1 && typeof d.is != "string") return We(a, d, s, b);
        a.push(ke(s)), U = R = null;
        for (Ce in d) if (O.call(d, Ce) && (Z = d[Ce], Z != null)) switch (Ce) {
          case "children":
            R = Z;
            break;
          case "dangerouslySetInnerHTML":
            U = Z;
            break;
          case "style":
            T(a, b, Z);
            break;
          case "suppressContentEditableWarning":
          case "suppressHydrationWarning":
            break;
          default:
            w(Ce) && typeof Z != "function" && typeof Z != "symbol" && a.push(ie, S(Ce), Q, S(Se(Z)), te);
        }
        return a.push(ce), ge(a, U, R), R;
    }
  }
  var Ze = g("</"), Pe = g(">"), Me = g('<template id="'), tr = g('"></template>'), rr = g("<!--$-->"), Ut = g('<!--$?--><template id="'), $t = g('"></template>'), ht = g("<!--$!-->"), Et = g("<!--/$-->"), Qe = g("<template"), dt = g('"'), Wt = g(' data-dgst="');
  g(' data-msg="'), g(' data-stck="');
  var Bt = g("></template>");
  function mt(a, s, d) {
    if (c(a, Ut), d === null) throw Error(t(395));
    return c(a, d), u(a, $t);
  }
  var vt = g('<div hidden id="'), gt = g('">'), Le = g("</div>"), ct = g('<svg aria-hidden="true" style="display:none" id="'), nr = g('">'), Ht = g("</svg>"), pe = g('<math aria-hidden="true" style="display:none" id="'), ot = g('">'), At = g("</math>"), ar = g('<table hidden id="'), Rt = g('">'), qt = g("</table>"), ir = g('<table hidden><tbody id="'), mr = g('">'), nt = g("</tbody></table>"), ut = g('<table hidden><tr id="'), lr = g('">'), Mt = g("</tr></table>"), Lt = g('<table hidden><colgroup id="'), Tt = g('">'), et = g("</colgroup></table>");
  function cr(a, s, d, b) {
    switch (d.insertionMode) {
      case 0:
      case 1:
        return c(a, vt), c(a, s.segmentPrefix), c(a, S(b.toString(16))), u(a, gt);
      case 2:
        return c(a, ct), c(a, s.segmentPrefix), c(a, S(b.toString(16))), u(a, nr);
      case 3:
        return c(a, pe), c(a, s.segmentPrefix), c(a, S(b.toString(16))), u(a, ot);
      case 4:
        return c(a, ar), c(a, s.segmentPrefix), c(a, S(b.toString(16))), u(a, Rt);
      case 5:
        return c(a, ir), c(a, s.segmentPrefix), c(a, S(b.toString(16))), u(a, mr);
      case 6:
        return c(a, ut), c(a, s.segmentPrefix), c(a, S(b.toString(16))), u(a, lr);
      case 7:
        return c(
          a,
          Lt
        ), c(a, s.segmentPrefix), c(a, S(b.toString(16))), u(a, Tt);
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
        return u(a, Ht);
      case 3:
        return u(a, At);
      case 4:
        return u(a, qt);
      case 5:
        return u(a, nt);
      case 6:
        return u(a, Mt);
      case 7:
        return u(a, et);
      default:
        throw Error(t(397));
    }
  }
  var ur = g('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'), Vt = g('$RS("'), Ft = g('","'), p = g('")<\/script>'), h = g('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'), C = g('$RC("'), X = g('","'), ye = g('")<\/script>'), ve = g('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'), we = g('$RX("'), ze = g('"'), Ne = g(")<\/script>"), st = g(","), Ke = /[<\u2028\u2029]/g;
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
  var It = Object.assign, _r = Symbol.for("react.element"), Cr = Symbol.for("react.portal"), Tr = Symbol.for("react.fragment"), Wr = Symbol.for("react.strict_mode"), Br = Symbol.for("react.profiler"), Hr = Symbol.for("react.provider"), Dr = Symbol.for("react.context"), xn = Symbol.for("react.forward_ref"), _n = Symbol.for("react.suspense"), qr = Symbol.for("react.suspense_list"), n = Symbol.for("react.memo"), l = Symbol.for("react.lazy"), f = Symbol.for("react.scope"), v = Symbol.for("react.debug_trace_mode"), D = Symbol.for("react.legacy_hidden"), A = Symbol.for("react.default_value"), z = Symbol.iterator;
  function J(a) {
    if (a == null) return null;
    if (typeof a == "function") return a.displayName || a.name || null;
    if (typeof a == "string") return a;
    switch (a) {
      case Tr:
        return "Fragment";
      case Cr:
        return "Portal";
      case Br:
        return "Profiler";
      case Wr:
        return "StrictMode";
      case _n:
        return "Suspense";
      case qr:
        return "SuspenseList";
    }
    if (typeof a == "object") switch (a.$$typeof) {
      case Dr:
        return (a.displayName || "Context") + ".Consumer";
      case Hr:
        return (a._context.displayName || "Context") + ".Provider";
      case xn:
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
  var he = {};
  function be(a, s) {
    if (a = a.contextTypes, !a) return he;
    var d = {}, b;
    for (b in a) d[b] = s[b];
    return d;
  }
  var xe = null;
  function at(a, s) {
    if (a !== s) {
      a.context._currentValue = a.parentValue, a = a.parent;
      var d = s.parent;
      if (a === null) {
        if (d !== null) throw Error(t(401));
      } else {
        if (d === null) throw Error(t(401));
        at(a, d);
      }
      s.context._currentValue = s.value;
    }
  }
  function Yt(a) {
    a.context._currentValue = a.parentValue, a = a.parent, a !== null && Yt(a);
  }
  function Gt(a) {
    var s = a.parent;
    s !== null && Gt(s), a.context._currentValue = a.value;
  }
  function Nt(a, s) {
    if (a.context._currentValue = a.parentValue, a = a.parent, a === null) throw Error(t(402));
    a.depth === s.depth ? at(a, s) : Nt(a, s);
  }
  function Er(a, s) {
    var d = s.parent;
    if (d === null) throw Error(t(402));
    a.depth === d.depth ? at(a, d) : Er(a, d), s.context._currentValue = s.value;
  }
  function dr(a) {
    var s = xe;
    s !== a && (s === null ? Gt(a) : a === null ? Yt(s) : s.depth === a.depth ? at(s, a) : s.depth > a.depth ? Nt(s, a) : Er(s, a), xe = a);
  }
  var Vr = { isMounted: function() {
    return !1;
  }, enqueueSetState: function(a, s) {
    a = a._reactInternals, a.queue !== null && a.queue.push(s);
  }, enqueueReplaceState: function(a, s) {
    a = a._reactInternals, a.replace = !0, a.queue = [s];
  }, enqueueForceUpdate: function() {
  } };
  function Ar(a, s, d, b) {
    var N = a.state !== void 0 ? a.state : null;
    a.updater = Vr, a.props = d, a.state = N;
    var R = { queue: [], replace: !1 };
    a._reactInternals = R;
    var U = s.contextType;
    if (a.context = typeof U == "object" && U !== null ? U._currentValue : b, U = s.getDerivedStateFromProps, typeof U == "function" && (U = U(d, N), N = U == null ? N : It({}, N, U), a.state = N), typeof s.getDerivedStateFromProps != "function" && typeof a.getSnapshotBeforeUpdate != "function" && (typeof a.UNSAFE_componentWillMount == "function" || typeof a.componentWillMount == "function")) if (s = a.state, typeof a.componentWillMount == "function" && a.componentWillMount(), typeof a.UNSAFE_componentWillMount == "function" && a.UNSAFE_componentWillMount(), s !== a.state && Vr.enqueueReplaceState(a, a.state, null), R.queue !== null && 0 < R.queue.length) if (s = R.queue, U = R.replace, R.queue = null, R.replace = !1, U && s.length === 1) a.state = s[0];
    else {
      for (R = U ? s[0] : a.state, N = !0, U = U ? 1 : 0; U < s.length; U++) {
        var Z = s[U];
        Z = typeof Z == "function" ? Z.call(a, R, d, b) : Z, Z != null && (N ? (N = !1, R = It({}, R, Z)) : It(R, Z));
      }
      a.state = R;
    }
    else R.queue = null;
  }
  var Cn = { id: 1, overflow: "" };
  function gr(a, s, d) {
    var b = a.id;
    a = a.overflow;
    var N = 32 - Tn(b) - 1;
    b &= ~(1 << N), d += 1;
    var R = 32 - Tn(s) + N;
    if (30 < R) {
      var U = N - N % 5;
      return R = (b & (1 << U) - 1).toString(32), b >>= U, N -= U, { id: 1 << 32 - Tn(s) + N | d << N | b, overflow: R + a };
    }
    return { id: 1 << R | d << N | b, overflow: a };
  }
  var Tn = Math.clz32 ? Math.clz32 : Js, Zs = Math.log, Ks = Math.LN2;
  function Js(a) {
    return a >>>= 0, a === 0 ? 32 : 31 - (Zs(a) / Ks | 0) | 0;
  }
  function Qs(a, s) {
    return a === s && (a !== 0 || 1 / a === 1 / s) || a !== a && s !== s;
  }
  var el = typeof Object.is == "function" ? Object.is : Qs, fr = null, la = null, En = null, Je = null, Yr = !1, An = !1, Gr = 0, yr = null, Rn = 0;
  function Rr() {
    if (fr === null) throw Error(t(321));
    return fr;
  }
  function gi() {
    if (0 < Rn) throw Error(t(312));
    return { memoizedState: null, queue: null, next: null };
  }
  function ca() {
    return Je === null ? En === null ? (Yr = !1, En = Je = gi()) : (Yr = !0, Je = En) : Je.next === null ? (Yr = !1, Je = Je.next = gi()) : (Yr = !0, Je = Je.next), Je;
  }
  function ua() {
    la = fr = null, An = !1, En = null, Rn = 0, Je = yr = null;
  }
  function yi(a, s) {
    return typeof s == "function" ? s(a) : s;
  }
  function bi(a, s, d) {
    if (fr = Rr(), Je = ca(), Yr) {
      var b = Je.queue;
      if (s = b.dispatch, yr !== null && (d = yr.get(b), d !== void 0)) {
        yr.delete(b), b = Je.memoizedState;
        do
          b = a(b, d.action), d = d.next;
        while (d !== null);
        return Je.memoizedState = b, [b, s];
      }
      return [Je.memoizedState, s];
    }
    return a = a === yi ? typeof s == "function" ? s() : s : d !== void 0 ? d(s) : s, Je.memoizedState = a, a = Je.queue = { last: null, dispatch: null }, a = a.dispatch = tl.bind(null, fr, a), [Je.memoizedState, a];
  }
  function vi(a, s) {
    if (fr = Rr(), Je = ca(), s = s === void 0 ? null : s, Je !== null) {
      var d = Je.memoizedState;
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
    return a = a(), Je.memoizedState = [a, s], a;
  }
  function tl(a, s, d) {
    if (25 <= Rn) throw Error(t(301));
    if (a === fr) if (An = !0, a = { action: d, next: null }, yr === null && (yr = /* @__PURE__ */ new Map()), d = yr.get(s), d === void 0) yr.set(s, a);
    else {
      for (s = d; s.next !== null; ) s = s.next;
      s.next = a;
    }
  }
  function rl() {
    throw Error(t(394));
  }
  function On() {
  }
  var wi = { readContext: function(a) {
    return a._currentValue;
  }, useContext: function(a) {
    return Rr(), a._currentValue;
  }, useMemo: vi, useReducer: bi, useRef: function(a) {
    fr = Rr(), Je = ca();
    var s = Je.memoizedState;
    return s === null ? (a = { current: a }, Je.memoizedState = a) : s;
  }, useState: function(a) {
    return bi(yi, a);
  }, useInsertionEffect: On, useLayoutEffect: function() {
  }, useCallback: function(a, s) {
    return vi(function() {
      return a;
    }, s);
  }, useImperativeHandle: On, useEffect: On, useDebugValue: On, useDeferredValue: function(a) {
    return Rr(), a;
  }, useTransition: function() {
    return Rr(), [!1, rl];
  }, useId: function() {
    var a = la.treeContext, s = a.overflow;
    a = a.id, a = (a & ~(1 << 32 - Tn(a) - 1)).toString(32) + s;
    var d = In;
    if (d === null) throw Error(t(404));
    return s = Gr++, a = ":" + d.idPrefix + "R" + a, 0 < s && (a += "H" + s.toString(32)), a + ":";
  }, useMutableSource: function(a, s) {
    return Rr(), s(a._source);
  }, useSyncExternalStore: function(a, s, d) {
    if (d === void 0) throw Error(t(407));
    return d();
  } }, In = null, da = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
  function nl(a) {
    return console.error(a), null;
  }
  function Xr() {
  }
  function al(a, s, d, b, N, R, U, Z, me) {
    var Ce = [], _e = /* @__PURE__ */ new Set();
    return s = { destination: null, responseState: s, progressiveChunkSize: b === void 0 ? 12800 : b, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: _e, pingedTasks: Ce, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: N === void 0 ? nl : N, onAllReady: R === void 0 ? Xr : R, onShellReady: U === void 0 ? Xr : U, onShellError: Z === void 0 ? Xr : Z, onFatalError: me === void 0 ? Xr : me }, d = Nn(s, 0, null, d, !1, !1), d.parentFlushed = !0, a = fa(s, a, null, d, _e, he, null, Cn), Ce.push(a), s;
  }
  function fa(a, s, d, b, N, R, U, Z) {
    a.allPendingTasks++, d === null ? a.pendingRootTasks++ : d.pendingTasks++;
    var me = { node: s, ping: function() {
      var Ce = a.pingedTasks;
      Ce.push(me), Ce.length === 1 && Ei(a);
    }, blockedBoundary: d, blockedSegment: b, abortSet: N, legacyContext: R, context: U, treeContext: Z };
    return N.add(me), me;
  }
  function Nn(a, s, d, b, N, R) {
    return { status: 0, id: -1, index: s, parentFlushed: !1, chunks: [], children: [], formatContext: b, boundary: d, lastPushedText: N, textEmbedded: R };
  }
  function Zr(a, s) {
    if (a = a.onError(s), a != null && typeof a != "string") throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof a + '" instead');
    return a;
  }
  function Dn(a, s) {
    var d = a.onShellError;
    d(s), d = a.onFatalError, d(s), a.destination !== null ? (a.status = 2, I(a.destination, s)) : (a.status = 1, a.fatalError = s);
  }
  function Si(a, s, d, b, N) {
    for (fr = {}, la = s, Gr = 0, a = d(b, N); An; ) An = !1, Gr = 0, Rn += 1, Je = null, a = d(b, N);
    return ua(), a;
  }
  function ki(a, s, d, b) {
    var N = d.render(), R = b.childContextTypes;
    if (R != null) {
      var U = s.legacyContext;
      if (typeof d.getChildContext != "function") b = U;
      else {
        d = d.getChildContext();
        for (var Z in d) if (!(Z in R)) throw Error(t(108, J(b) || "Unknown", Z));
        b = It({}, U, d);
      }
      s.legacyContext = b, Dt(a, s, N), s.legacyContext = U;
    } else Dt(a, s, N);
  }
  function xi(a, s) {
    if (a && a.defaultProps) {
      s = It({}, s), a = a.defaultProps;
      for (var d in a) s[d] === void 0 && (s[d] = a[d]);
      return s;
    }
    return s;
  }
  function pa(a, s, d, b, N) {
    if (typeof d == "function") if (d.prototype && d.prototype.isReactComponent) {
      N = be(d, s.legacyContext);
      var R = d.contextType;
      R = new d(b, typeof R == "object" && R !== null ? R._currentValue : N), Ar(R, d, b, N), ki(a, s, R, d);
    } else {
      R = be(d, s.legacyContext), N = Si(a, s, d, b, R);
      var U = Gr !== 0;
      if (typeof N == "object" && N !== null && typeof N.render == "function" && N.$$typeof === void 0) Ar(N, d, b, R), ki(a, s, N, d);
      else if (U) {
        b = s.treeContext, s.treeContext = gr(b, 1, 0);
        try {
          Dt(a, s, N);
        } finally {
          s.treeContext = b;
        }
      } else Dt(a, s, N);
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
          N.chunks.push(Ze, S(d), Pe);
      }
      N.lastPushedText = !1;
    } else {
      switch (d) {
        case D:
        case v:
        case Wr:
        case Br:
        case Tr:
          Dt(a, s, b.children);
          return;
        case qr:
          Dt(a, s, b.children);
          return;
        case f:
          throw Error(t(343));
        case _n:
          e: {
            d = s.blockedBoundary, N = s.blockedSegment, R = b.fallback, b = b.children, U = /* @__PURE__ */ new Set();
            var Z = { id: null, rootSegmentID: -1, parentFlushed: !1, pendingTasks: 0, forceClientRender: !1, completedSegments: [], byteSize: 0, fallbackAbortableTasks: U, errorDigest: null }, me = Nn(a, N.chunks.length, Z, N.formatContext, !1, !1);
            N.children.push(me), N.lastPushedText = !1;
            var Ce = Nn(a, 0, null, N.formatContext, !1, !1);
            Ce.parentFlushed = !0, s.blockedBoundary = Z, s.blockedSegment = Ce;
            try {
              if (ha(
                a,
                s,
                b
              ), Ce.lastPushedText && Ce.textEmbedded && Ce.chunks.push(F), Ce.status = 1, Pn(Z, Ce), Z.pendingTasks === 0) break e;
            } catch (_e) {
              Ce.status = 4, Z.forceClientRender = !0, Z.errorDigest = Zr(a, _e);
            } finally {
              s.blockedBoundary = d, s.blockedSegment = N;
            }
            s = fa(a, R, d, me, U, s.legacyContext, s.context, s.treeContext), a.pingedTasks.push(s);
          }
          return;
      }
      if (typeof d == "object" && d !== null) switch (d.$$typeof) {
        case xn:
          if (b = Si(a, s, d.render, b, N), Gr !== 0) {
            d = s.treeContext, s.treeContext = gr(d, 1, 0);
            try {
              Dt(a, s, b);
            } finally {
              s.treeContext = d;
            }
          } else Dt(a, s, b);
          return;
        case n:
          d = d.type, b = xi(d, b), pa(a, s, d, b, N);
          return;
        case Hr:
          if (N = b.children, d = d._context, b = b.value, R = d._currentValue, d._currentValue = b, U = xe, xe = b = { parent: U, depth: U === null ? 0 : U.depth + 1, context: d, parentValue: R, value: b }, s.context = b, Dt(a, s, N), a = xe, a === null) throw Error(t(403));
          b = a.parentValue, a.context._currentValue = b === A ? a.context._defaultValue : b, a = xe = a.parent, s.context = a;
          return;
        case Dr:
          b = b.children, b = b(d._currentValue), Dt(a, s, b);
          return;
        case l:
          N = d._init, d = N(d._payload), b = xi(d, b), pa(a, s, d, b, void 0);
          return;
      }
      throw Error(t(
        130,
        d == null ? d : typeof d,
        ""
      ));
    }
  }
  function Dt(a, s, d) {
    if (s.node = d, typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case _r:
          pa(a, s, d.type, d.props, d.ref);
          return;
        case Cr:
          throw Error(t(257));
        case l:
          var b = d._init;
          d = b(d._payload), Dt(a, s, d);
          return;
      }
      if (Xe(d)) {
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
    typeof d == "string" ? (b = s.blockedSegment, b.lastPushedText = E(s.blockedSegment.chunks, d, a.responseState, b.lastPushedText)) : typeof d == "number" && (b = s.blockedSegment, b.lastPushedText = E(s.blockedSegment.chunks, "" + d, a.responseState, b.lastPushedText));
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
      return Dt(a, s, d);
    } catch (me) {
      if (ua(), typeof me == "object" && me !== null && typeof me.then == "function") {
        d = me;
        var U = s.blockedSegment, Z = Nn(a, U.chunks.length, null, U.formatContext, U.lastPushedText, !0);
        U.children.push(Z), U.lastPushedText = !1, a = fa(a, s.node, s.blockedBoundary, Z, s.abortSet, s.legacyContext, s.context, s.treeContext).ping, d.then(a, a), s.blockedSegment.formatContext = b, s.legacyContext = N, s.context = R, dr(R);
      } else throw s.blockedSegment.formatContext = b, s.legacyContext = N, s.context = R, dr(R), me;
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
  function Pn(a, s) {
    if (s.chunks.length === 0 && s.children.length === 1 && s.children[0].boundary === null) {
      var d = s.children[0];
      d.id = s.id, d.parentFlushed = !0, d.status === 1 && Pn(a, d);
    } else a.completedSegments.push(s);
  }
  function Ti(a, s, d) {
    if (s === null) {
      if (d.parentFlushed) {
        if (a.completedRootSegment !== null) throw Error(t(389));
        a.completedRootSegment = d;
      }
      a.pendingRootTasks--, a.pendingRootTasks === 0 && (a.onShellError = Xr, s = a.onShellReady, s());
    } else s.pendingTasks--, s.forceClientRender || (s.pendingTasks === 0 ? (d.parentFlushed && d.status === 1 && Pn(s, d), s.parentFlushed && a.completedBoundaries.push(s), s.fallbackAbortableTasks.forEach(il, a), s.fallbackAbortableTasks.clear()) : d.parentFlushed && d.status === 1 && (Pn(s, d), s.completedSegments.length === 1 && s.parentFlushed && a.partialBoundaries.push(s)));
    a.allPendingTasks--, a.allPendingTasks === 0 && (a = a.onAllReady, a());
  }
  function Ei(a) {
    if (a.status !== 2) {
      var s = xe, d = da.current;
      da.current = wi;
      var b = In;
      In = a.responseState;
      try {
        var N = a.pingedTasks, R;
        for (R = 0; R < N.length; R++) {
          var U = N[R], Z = a, me = U.blockedSegment;
          if (me.status === 0) {
            dr(U.context);
            try {
              Dt(Z, U, U.node), me.lastPushedText && me.textEmbedded && me.chunks.push(F), U.abortSet.delete(U), me.status = 1, Ti(Z, U.blockedBoundary, me);
            } catch (Zt) {
              if (ua(), typeof Zt == "object" && Zt !== null && typeof Zt.then == "function") {
                var Ce = U.ping;
                Zt.then(Ce, Ce);
              } else {
                U.abortSet.delete(U), me.status = 4;
                var _e = U.blockedBoundary, tt = Zt, Pt = Zr(Z, tt);
                if (_e === null ? Dn(Z, tt) : (_e.pendingTasks--, _e.forceClientRender || (_e.forceClientRender = !0, _e.errorDigest = Pt, _e.parentFlushed && Z.clientRenderedBoundaries.push(_e))), Z.allPendingTasks--, Z.allPendingTasks === 0) {
                  var Xt = Z.onAllReady;
                  Xt();
                }
              }
            } finally {
            }
          }
        }
        N.splice(0, R), a.destination !== null && ma(a, a.destination);
      } catch (Zt) {
        Zr(a, Zt), Dn(a, Zt);
      } finally {
        In = b, da.current = d, d === wi && dr(s);
      }
    }
  }
  function Mn(a, s, d) {
    switch (d.parentFlushed = !0, d.status) {
      case 0:
        var b = d.id = a.nextSegmentId++;
        return d.lastPushedText = !1, d.textEmbedded = !1, a = a.responseState, c(s, Me), c(s, a.placeholderPrefix), a = S(b.toString(16)), c(s, a), u(s, tr);
      case 1:
        d.status = 2;
        var N = !0;
        b = d.chunks;
        var R = 0;
        d = d.children;
        for (var U = 0; U < d.length; U++) {
          for (N = d[U]; R < N.index; R++) c(s, b[R]);
          N = Ln(a, s, N);
        }
        for (; R < b.length - 1; R++) c(s, b[R]);
        return R < b.length && (N = u(s, b[R])), N;
      default:
        throw Error(t(390));
    }
  }
  function Ln(a, s, d) {
    var b = d.boundary;
    if (b === null) return Mn(a, s, d);
    if (b.parentFlushed = !0, b.forceClientRender) b = b.errorDigest, u(s, ht), c(s, Qe), b && (c(s, Wt), c(s, S(Se(b))), c(s, dt)), u(s, Bt), Mn(a, s, d);
    else if (0 < b.pendingTasks) {
      b.rootSegmentID = a.nextSegmentId++, 0 < b.completedSegments.length && a.partialBoundaries.push(b);
      var N = a.responseState, R = N.nextSuspenseID++;
      N = g(N.boundaryPrefix + R.toString(16)), b = b.id = N, mt(s, a.responseState, b), Mn(a, s, d);
    } else if (b.byteSize > a.progressiveChunkSize) b.rootSegmentID = a.nextSegmentId++, a.completedBoundaries.push(b), mt(s, a.responseState, b.id), Mn(a, s, d);
    else {
      if (u(s, rr), d = b.completedSegments, d.length !== 1) throw Error(t(391));
      Ln(a, s, d[0]);
    }
    return u(s, Et);
  }
  function Ai(a, s, d) {
    return cr(s, a.responseState, d.formatContext, d.id), Ln(a, s, d), Ot(s, d.formatContext);
  }
  function Ri(a, s, d) {
    for (var b = d.completedSegments, N = 0; N < b.length; N++) Oi(a, s, d, b[N]);
    if (b.length = 0, a = a.responseState, b = d.id, d = d.rootSegmentID, c(s, a.startInlineScript), a.sentCompleteBoundaryFunction ? c(s, C) : (a.sentCompleteBoundaryFunction = !0, c(s, h)), b === null) throw Error(t(395));
    return d = S(d.toString(16)), c(s, b), c(s, X), c(s, a.segmentPrefix), c(s, d), u(s, ye);
  }
  function Oi(a, s, d, b) {
    if (b.status === 2) return !0;
    var N = b.id;
    if (N === -1) {
      if ((b.id = d.rootSegmentID) === -1) throw Error(t(392));
      return Ai(a, s, b);
    }
    return Ai(a, s, b), a = a.responseState, c(s, a.startInlineScript), a.sentCompleteSegmentFunction ? c(s, Vt) : (a.sentCompleteSegmentFunction = !0, c(s, ur)), c(s, a.segmentPrefix), N = S(N.toString(16)), c(s, N), c(s, Ft), c(s, a.placeholderPrefix), c(s, N), u(s, p);
  }
  function ma(a, s) {
    r = new Uint8Array(512), i = 0;
    try {
      var d = a.completedRootSegment;
      if (d !== null && a.pendingRootTasks === 0) {
        Ln(a, s, d), a.completedRootSegment = null;
        var b = a.responseState.bootstrapChunks;
        for (d = 0; d < b.length - 1; d++) c(s, b[d]);
        d < b.length && u(s, b[d]);
      }
      var N = a.clientRenderedBoundaries, R;
      for (R = 0; R < N.length; R++) {
        var U = N[R];
        b = s;
        var Z = a.responseState, me = U.id, Ce = U.errorDigest, _e = U.errorMessage, tt = U.errorComponentStack;
        if (c(b, Z.startInlineScript), Z.sentClientRenderFunction ? c(b, we) : (Z.sentClientRenderFunction = !0, c(
          b,
          ve
        )), me === null) throw Error(t(395));
        c(b, me), c(b, ze), (Ce || _e || tt) && (c(b, st), c(b, S(Be(Ce || "")))), (_e || tt) && (c(b, st), c(b, S(Be(_e || "")))), tt && (c(b, st), c(b, S(Be(tt)))), u(b, Ne);
      }
      N.splice(0, R);
      var Pt = a.completedBoundaries;
      for (R = 0; R < Pt.length; R++) Ri(a, s, Pt[R]);
      Pt.splice(0, R), y(s), r = new Uint8Array(512), i = 0;
      var Xt = a.partialBoundaries;
      for (R = 0; R < Xt.length; R++) {
        var Zt = Xt[R];
        e: {
          N = a, U = s;
          var Fn = Zt.completedSegments;
          for (Z = 0; Z < Fn.length; Z++) if (!Oi(
            N,
            U,
            Zt,
            Fn[Z]
          )) {
            Z++, Fn.splice(0, Z);
            var Ni = !1;
            break e;
          }
          Fn.splice(0, Z), Ni = !0;
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
      Zr(a, b), Dn(a, b);
    }
  }
  return $n.renderToReadableStream = function(a, s) {
    return new Promise(function(d, b) {
      var N, R, U = new Promise(function(_e, tt) {
        R = _e, N = tt;
      }), Z = al(a, Oe(s ? s.identifierPrefix : void 0, s ? s.nonce : void 0, s ? s.bootstrapScriptContent : void 0, s ? s.bootstrapScripts : void 0, s ? s.bootstrapModules : void 0), rt(s ? s.namespaceURI : void 0), s ? s.progressiveChunkSize : void 0, s ? s.onError : void 0, R, function() {
        var _e = new ReadableStream({ type: "bytes", pull: function(tt) {
          if (Z.status === 1) Z.status = 2, I(tt, Z.fatalError);
          else if (Z.status !== 2 && Z.destination === null) {
            Z.destination = tt;
            try {
              ma(Z, tt);
            } catch (Pt) {
              Zr(Z, Pt), Dn(Z, Pt);
            }
          }
        }, cancel: function() {
          Ii(Z);
        } }, { highWaterMark: 0 });
        _e.allReady = U, d(_e);
      }, function(_e) {
        U.catch(function() {
        }), b(_e);
      }, N);
      if (s && s.signal) {
        var me = s.signal, Ce = function() {
          Ii(Z, me.reason), me.removeEventListener("abort", Ce);
        };
        me.addEventListener("abort", Ce);
      }
      Ei(Z);
    });
  }, $n.version = "18.3.1", $n;
}
var ho;
function Sc() {
  if (ho) return br;
  ho = 1;
  var e, t;
  return e = vc(), t = wc(), br.version = e.version, br.renderToString = e.renderToString, br.renderToStaticMarkup = e.renderToStaticMarkup, br.renderToNodeStream = e.renderToNodeStream, br.renderToStaticNodeStream = e.renderToStaticNodeStream, br.renderToReadableStream = t.renderToReadableStream, br;
}
Sc();
const kc = "staticMarkup";
function hs() {
  const e = ul().indexOf(kc) > -1 ? !0 : void 0;
  return {
    isBootstrap: e,
    isReact: e ? void 0 : !0
  };
}
const kr = ({ gaData: e, prefix: t = "", children: r }) => {
  const { isReact: i } = hs(), { onClick: c, ...u } = r.props;
  if (i)
    return pt.cloneElement(r, {
      ...u,
      onClick: (S) => (e && e.event && e.action && mc(e), c ? c(S) : !0)
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
  return pt.cloneElement(r, {
    ...u,
    onClick: c,
    ...k
  });
}, xc = ii(
  ({
    id: e,
    parentId: t,
    /** @type {AccordionCard} */
    item: r,
    openCard: i,
    onClick: c,
    gaData: u
  }, y) => {
    var k, S, g, I, O, j;
    const q = e === i, _ = q ? "open" : "close";
    return /* @__PURE__ */ B.jsxs(
      "div",
      {
        ref: y,
        className: Qt("accordion-item", "mt-3", {
          [`accordion-item-${r.color}`]: r.color,
          "accordion-header-icon": (k = r.content) == null ? void 0 : k.icon
        }),
        children: [
          /* @__PURE__ */ B.jsx("div", { className: "accordion-header", children: /* @__PURE__ */ B.jsx("h4", { children: /* @__PURE__ */ B.jsx(
            kr,
            {
              gaData: {
                ...u,
                action: _,
                text: r.content.header
              },
              children: /* @__PURE__ */ B.jsxs(
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
                    (S = r.content) != null && S.icon ? /* @__PURE__ */ B.jsxs("span", { className: "accordion-icon", children: [
                      /* @__PURE__ */ B.jsx(
                        "i",
                        {
                          className: `${(g = r.content.icon) == null ? void 0 : g[0]} fa-${(I = r.content.icon) == null ? void 0 : I[1]} me-2`
                        }
                      ),
                      r.content.header
                    ] }) : (O = r.content) == null ? void 0 : O.header,
                    /* @__PURE__ */ B.jsx("i", { className: "fas fa-chevron-up" })
                  ]
                }
              )
            }
          ) }) }),
          ((j = r.content) == null ? void 0 : j.body) && /* @__PURE__ */ B.jsx(
            "div",
            {
              "data-bs-parent": `#${t}`,
              id: `card-body-${e}`,
              className: Qt("collapse", { show: q }),
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
  element: k = "button",
  href: S,
  icon: g,
  innerRef: I,
  onClick: O,
  size: j = "default",
  variant: q,
  classes: _,
  target: w = "_self",
  ...P
}) => {
  if (q) {
    const Y = {
      borderless: "borderless",
      outline: "outline",
      filled: "filled"
    }, W = Qt("btn", Y[q], {
      [`btn-${Y[q]}-${u}`]: !0,
      "btn-medium": j === "medium",
      "btn-small": j === "small",
      "btn-large": j === "large" || j === "default",
      disabled: y
    });
    let x = k;
    return S && k === "button" && (x = "a"), /* @__PURE__ */ B.jsx(
      kr,
      {
        gaData: {
          ...mo,
          section: t,
          ...r,
          text: e
        },
        children: /* @__PURE__ */ B.jsxs(
          x,
          {
            type: x === "button" && O ? "button" : void 0,
            ...P,
            className: Qt(_) || W,
            href: S,
            ref: I,
            onClick: O,
            "aria-label": i,
            target: x === "a" ? w : null,
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
  const V = Qt("btn", {
    [`btn-${u}`]: !0,
    "btn-md": j === "small",
    "btn-sm": j === "xsmall",
    "btn-block": c,
    disabled: y
  });
  let $ = k;
  return S && k === "button" && ($ = "a"), /* @__PURE__ */ B.jsx(
    kr,
    {
      gaData: {
        ...mo,
        section: t,
        // @deprecated - remove at some point
        ...r,
        text: e
      },
      children: /* @__PURE__ */ B.jsxs(
        $,
        {
          type: $ === "button" && O ? "button" : void 0,
          ...P,
          className: Qt(_) || V,
          href: S,
          ref: I,
          onClick: O,
          "aria-label": i,
          target: $ === "a" ? w : null,
          children: [
            g && /* @__PURE__ */ B.jsx("i", { className: `${g == null ? void 0 : g[0]} fa-${g == null ? void 0 : g[1]} me-1` }),
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
var go = { exports: {} }, Ve = {}, yo;
function _c() {
  if (yo) return Ve;
  yo = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), u = Symbol.for("react.consumer"), y = Symbol.for("react.context"), k = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), I = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), j = Symbol.for("react.offscreen"), q = Symbol.for("react.client.reference");
  function _(w) {
    if (typeof w == "object" && w !== null) {
      var P = w.$$typeof;
      switch (P) {
        case e:
          switch (w = w.type, w) {
            case r:
            case c:
            case i:
            case S:
            case g:
              return w;
            default:
              switch (w = w && w.$$typeof, w) {
                case y:
                case k:
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
  return Ve.ContextConsumer = u, Ve.ContextProvider = y, Ve.Element = e, Ve.ForwardRef = k, Ve.Fragment = r, Ve.Lazy = O, Ve.Memo = I, Ve.Portal = t, Ve.Profiler = c, Ve.StrictMode = i, Ve.Suspense = S, Ve.SuspenseList = g, Ve.isContextConsumer = function(w) {
    return _(w) === u;
  }, Ve.isContextProvider = function(w) {
    return _(w) === y;
  }, Ve.isElement = function(w) {
    return typeof w == "object" && w !== null && w.$$typeof === e;
  }, Ve.isForwardRef = function(w) {
    return _(w) === k;
  }, Ve.isFragment = function(w) {
    return _(w) === r;
  }, Ve.isLazy = function(w) {
    return _(w) === O;
  }, Ve.isMemo = function(w) {
    return _(w) === I;
  }, Ve.isPortal = function(w) {
    return _(w) === t;
  }, Ve.isProfiler = function(w) {
    return _(w) === c;
  }, Ve.isStrictMode = function(w) {
    return _(w) === i;
  }, Ve.isSuspense = function(w) {
    return _(w) === S;
  }, Ve.isSuspenseList = function(w) {
    return _(w) === g;
  }, Ve.isValidElementType = function(w) {
    return typeof w == "string" || typeof w == "function" || w === r || w === c || w === i || w === S || w === g || w === j || typeof w == "object" && w !== null && (w.$$typeof === O || w.$$typeof === I || w.$$typeof === y || w.$$typeof === u || w.$$typeof === k || w.$$typeof === q || w.getModuleId !== void 0);
  }, Ve.typeOf = _, Ve;
}
var bo;
function Cc() {
  return bo || (bo = 1, go.exports = /* @__PURE__ */ _c()), go.exports;
}
var gs = /* @__PURE__ */ Cc();
function Tc(e) {
  function t(F, E, L, M, m) {
    for (var ee = 0, T = 0, ie = 0, Q = 0, te, G, ne = 0, ce = 0, K, ge = K = te = 0, re = 0, le = 0, We = 0, ue = 0, it = L.length, qe = it - 1, ke, H = "", oe = "", Ze = "", Pe = "", Me; re < it; ) {
      if (G = L.charCodeAt(re), re === qe && T + Q + ie + ee !== 0 && (T !== 0 && (G = T === 47 ? 10 : 47), Q = ie = ee = 0, it++, qe++), T + Q + ie + ee === 0) {
        if (re === qe && (0 < le && (H = H.replace(j, "")), 0 < H.trim().length)) {
          switch (G) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              H += L.charAt(re);
          }
          G = 59;
        }
        switch (G) {
          case 123:
            for (H = H.trim(), te = H.charCodeAt(0), K = 1, ue = ++re; re < it; ) {
              switch (G = L.charCodeAt(re)) {
                case 123:
                  K++;
                  break;
                case 125:
                  K--;
                  break;
                case 47:
                  switch (G = L.charCodeAt(re + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (ge = re + 1; ge < qe; ++ge)
                          switch (L.charCodeAt(ge)) {
                            case 47:
                              if (G === 42 && L.charCodeAt(ge - 1) === 42 && re + 2 !== ge) {
                                re = ge + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (G === 47) {
                                re = ge + 1;
                                break e;
                              }
                          }
                        re = ge;
                      }
                  }
                  break;
                case 91:
                  G++;
                case 40:
                  G++;
                case 34:
                case 39:
                  for (; re++ < qe && L.charCodeAt(re) !== G; )
                    ;
              }
              if (K === 0) break;
              re++;
            }
            switch (K = L.substring(ue, re), te === 0 && (te = (H = H.replace(O, "").trim()).charCodeAt(0)), te) {
              case 64:
                switch (0 < le && (H = H.replace(j, "")), G = H.charCodeAt(1), G) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    le = E;
                    break;
                  default:
                    le = lt;
                }
                if (K = t(E, le, K, G, m + 1), ue = K.length, 0 < Oe && (le = r(lt, H, We), Me = k(3, K, le, E, Re, fe, ue, G, m, M), H = le.join(""), Me !== void 0 && (ue = (K = Me.trim()).length) === 0 && (G = 0, K = "")), 0 < ue) switch (G) {
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
                K = t(E, r(E, H, We), K, M, m + 1);
            }
            Ze += K, K = We = le = ge = te = 0, H = "", G = L.charCodeAt(++re);
            break;
          case 125:
          case 59:
            if (H = (0 < le ? H.replace(j, "") : H).trim(), 1 < (ue = H.length)) switch (ge === 0 && (te = H.charCodeAt(0), te === 45 || 96 < te && 123 > te) && (ue = (H = H.replace(" ", ":")).length), 0 < Oe && (Me = k(1, H, E, F, Re, fe, oe.length, M, m, M)) !== void 0 && (ue = (H = Me.trim()).length) === 0 && (H = "\0\0"), te = H.charCodeAt(0), G = H.charCodeAt(1), te) {
              case 0:
                break;
              case 64:
                if (G === 105 || G === 99) {
                  Pe += H + L.charAt(re);
                  break;
                }
              default:
                H.charCodeAt(ue - 1) !== 58 && (oe += c(H, te, G, H.charCodeAt(2)));
            }
            We = le = ge = te = 0, H = "", G = L.charCodeAt(++re);
        }
      }
      switch (G) {
        case 13:
        case 10:
          T === 47 ? T = 0 : 1 + te === 0 && M !== 107 && 0 < H.length && (le = 1, H += "\0"), 0 < Oe * rt && k(0, H, E, F, Re, fe, oe.length, M, m, M), fe = 1, Re++;
          break;
        case 59:
        case 125:
          if (T + Q + ie + ee === 0) {
            fe++;
            break;
          }
        default:
          switch (fe++, ke = L.charAt(re), G) {
            case 9:
            case 32:
              if (Q + ee + T === 0) switch (ne) {
                case 44:
                case 58:
                case 9:
                case 32:
                  ke = "";
                  break;
                default:
                  G !== 32 && (ke = " ");
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
              Q + T + ee === 0 && (le = We = 1, ke = "\f" + ke);
              break;
            case 108:
              if (Q + T + ee + Ie === 0 && 0 < ge) switch (re - ge) {
                case 2:
                  ne === 112 && L.charCodeAt(re - 3) === 58 && (Ie = ne);
                case 8:
                  ce === 111 && (Ie = ce);
              }
              break;
            case 58:
              Q + T + ee === 0 && (ge = re);
              break;
            case 44:
              T + ie + Q + ee === 0 && (le = 1, ke += "\r");
              break;
            case 34:
            case 39:
              T === 0 && (Q = Q === G ? 0 : Q === 0 ? G : Q);
              break;
            case 91:
              Q + T + ie === 0 && ee++;
              break;
            case 93:
              Q + T + ie === 0 && ee--;
              break;
            case 41:
              Q + T + ee === 0 && ie--;
              break;
            case 40:
              if (Q + T + ee === 0) {
                if (te === 0) switch (2 * ne + 3 * ce) {
                  case 533:
                    break;
                  default:
                    te = 1;
                }
                ie++;
              }
              break;
            case 64:
              T + ie + Q + ee + ge + K === 0 && (K = 1);
              break;
            case 42:
            case 47:
              if (!(0 < Q + ee + ie)) switch (T) {
                case 0:
                  switch (2 * G + 3 * L.charCodeAt(re + 1)) {
                    case 235:
                      T = 47;
                      break;
                    case 220:
                      ue = re, T = 42;
                  }
                  break;
                case 42:
                  G === 47 && ne === 42 && ue + 2 !== re && (L.charCodeAt(ue + 2) === 33 && (oe += L.substring(ue, re + 1)), ke = "", T = 0);
              }
          }
          T === 0 && (H += ke);
      }
      ce = ne, ne = G, re++;
    }
    if (ue = oe.length, 0 < ue) {
      if (le = E, 0 < Oe && (Me = k(2, oe, le, F, Re, fe, ue, M, m, M), Me !== void 0 && (oe = Me).length === 0)) return Pe + oe + Ze;
      if (oe = le.join(",") + "{" + oe + "}", Te * Ie !== 0) {
        switch (Te !== 2 || u(oe, 2) || (Ie = 0), Ie) {
          case 111:
            oe = oe.replace(W, ":-moz-$1") + oe;
            break;
          case 112:
            oe = oe.replace(Y, "::-webkit-input-$1") + oe.replace(Y, "::-moz-$1") + oe.replace(Y, ":-ms-input-$1") + oe;
        }
        Ie = 0;
      }
    }
    return Pe + oe + Ze;
  }
  function r(F, E, L) {
    var M = E.trim().split(P);
    E = M;
    var m = M.length, ee = F.length;
    switch (ee) {
      case 0:
      case 1:
        var T = 0;
        for (F = ee === 0 ? "" : F[0] + " "; T < m; ++T)
          E[T] = i(F, E[T], L).trim();
        break;
      default:
        var ie = T = 0;
        for (E = []; T < m; ++T)
          for (var Q = 0; Q < ee; ++Q)
            E[ie++] = i(F[Q] + " ", M[T], L).trim();
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
    var m = F + ";", ee = 2 * E + 3 * L + 4 * M;
    if (ee === 944) {
      F = m.indexOf(":", 9) + 1;
      var T = m.substring(F, m.length - 1).trim();
      return T = m.substring(0, F).trim() + T + ";", Te === 1 || Te === 2 && u(T, 1) ? "-webkit-" + T + T : T;
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
        if (0 < m.indexOf("image-set(", 11)) return m.replace(de, "$1-webkit-$2") + m;
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
        return T = m.substring(m.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + T + "-webkit-" + m + "-ms-flex-pack" + T + m;
      case 1005:
        return _.test(m) ? m.replace(q, ":-webkit-") + m.replace(q, ":-moz-") + m : m;
      case 1e3:
        switch (T = m.substring(13).trim(), E = T.indexOf("-") + 1, T.charCodeAt(0) + T.charCodeAt(E)) {
          case 226:
            T = m.replace(x, "tb");
            break;
          case 232:
            T = m.replace(x, "tb-rl");
            break;
          case 220:
            T = m.replace(x, "lr");
            break;
          default:
            return m;
        }
        return "-webkit-" + m + "-ms-" + T + m;
      case 1017:
        if (m.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (E = (m = F).length - 10, T = (m.charCodeAt(E) === 33 ? m.substring(0, E) : m).substring(F.indexOf(":", 7) + 1).trim(), ee = T.charCodeAt(0) + (T.charCodeAt(7) | 0)) {
          case 203:
            if (111 > T.charCodeAt(8)) break;
          case 115:
            m = m.replace(T, "-webkit-" + T) + ";" + m;
            break;
          case 207:
          case 102:
            m = m.replace(T, "-webkit-" + (102 < ee ? "inline-" : "") + "box") + ";" + m.replace(T, "-webkit-" + T) + ";" + m.replace(T, "-ms-" + T + "box") + ";" + m;
        }
        return m + ";";
      case 938:
        if (m.charCodeAt(5) === 45) switch (m.charCodeAt(6)) {
          case 105:
            return T = m.replace("-items", ""), "-webkit-" + m + "-webkit-box-" + T + "-ms-flex-" + T + m;
          case 115:
            return "-webkit-" + m + "-ms-flex-item-" + m.replace(De, "") + m;
          default:
            return "-webkit-" + m + "-ms-flex-line-pack" + m.replace("align-content", "").replace(De, "") + m;
        }
        break;
      case 973:
      case 989:
        if (m.charCodeAt(3) !== 45 || m.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (Xe.test(F) === !0) return (T = F.substring(F.indexOf(":") + 1)).charCodeAt(0) === 115 ? c(F.replace("stretch", "fill-available"), E, L, M).replace(":fill-available", ":stretch") : m.replace(T, "-webkit-" + T) + m.replace(T, "-moz-" + T.replace("fill-", "")) + m;
        break;
      case 962:
        if (m = "-webkit-" + m + (m.charCodeAt(5) === 102 ? "-ms-" + m : "") + m, L + M === 211 && m.charCodeAt(13) === 105 && 0 < m.indexOf("transform", 10)) return m.substring(0, m.indexOf(";", 27) + 1).replace(w, "$1-webkit-$2") + m;
    }
    return m;
  }
  function u(F, E) {
    var L = F.indexOf(E === 1 ? ":" : "{"), M = F.substring(0, E !== 3 ? L : 10);
    return L = F.substring(L + 1, F.length - 1), He(E !== 2 ? M : M.replace(Fe, "$1"), L, E);
  }
  function y(F, E) {
    var L = c(E, E.charCodeAt(0), E.charCodeAt(1), E.charCodeAt(2));
    return L !== E + ";" ? L.replace(Se, " or ($1)").substring(4) : "(" + E + ")";
  }
  function k(F, E, L, M, m, ee, T, ie, Q, te) {
    for (var G = 0, ne = E, ce; G < Oe; ++G)
      switch (ce = je[G].call(I, F, ne, L, M, m, ee, T, ie, Q, te)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          ne = ce;
      }
    if (ne !== E) return ne;
  }
  function S(F) {
    switch (F) {
      case void 0:
      case null:
        Oe = je.length = 0;
        break;
      default:
        if (typeof F == "function") je[Oe++] = F;
        else if (typeof F == "object") for (var E = 0, L = F.length; E < L; ++E)
          S(F[E]);
        else rt = !!F | 0;
    }
    return S;
  }
  function g(F) {
    return F = F.prefix, F !== void 0 && (He = null, F ? typeof F != "function" ? Te = 1 : (Te = 2, He = F) : Te = 0), g;
  }
  function I(F, E) {
    var L = F;
    if (33 > L.charCodeAt(0) && (L = L.trim()), se = L, L = [se], 0 < Oe) {
      var M = k(-1, E, L, L, Re, fe, 0, 0, 0, 0);
      M !== void 0 && typeof M == "string" && (E = M);
    }
    var m = t(lt, L, E, 0, 0);
    return 0 < Oe && (M = k(-2, m, L, L, Re, fe, m.length, 0, 0, 0), M !== void 0 && (m = M)), se = "", Ie = 0, fe = Re = 1, m;
  }
  var O = /^\0+/g, j = /[\0\r\f]/g, q = /: */g, _ = /zoo|gra/, w = /([,: ])(transform)/g, P = /,\r+?/g, V = /([\t\r\n ])*\f?&/g, $ = /@(k\w+)\s*(\S*)\s*/, Y = /::(place)/g, W = /:(read-only)/g, x = /[svh]\w+-[tblr]{2}/, ae = /\(\s*(.*)\s*\)/g, Se = /([\s\S]*?);/g, De = /-self|flex-/g, Fe = /[^]*?(:[rp][el]a[\w-]+)[^]*/, Xe = /stretch|:\s*\w+\-(?:conte|avail)/, de = /([^-])(image-set\()/, fe = 1, Re = 1, Ie = 0, Te = 1, lt = [], je = [], Oe = 0, He = null, rt = 0, se = "";
  return I.use = S, I.set = g, e !== void 0 && g(e), I;
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
), wo = { exports: {} }, Ue = {}, So;
function Oc() {
  if (So) return Ue;
  So = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, i = e ? Symbol.for("react.fragment") : 60107, c = e ? Symbol.for("react.strict_mode") : 60108, u = e ? Symbol.for("react.profiler") : 60114, y = e ? Symbol.for("react.provider") : 60109, k = e ? Symbol.for("react.context") : 60110, S = e ? Symbol.for("react.async_mode") : 60111, g = e ? Symbol.for("react.concurrent_mode") : 60111, I = e ? Symbol.for("react.forward_ref") : 60112, O = e ? Symbol.for("react.suspense") : 60113, j = e ? Symbol.for("react.suspense_list") : 60120, q = e ? Symbol.for("react.memo") : 60115, _ = e ? Symbol.for("react.lazy") : 60116, w = e ? Symbol.for("react.block") : 60121, P = e ? Symbol.for("react.fundamental") : 60117, V = e ? Symbol.for("react.responder") : 60118, $ = e ? Symbol.for("react.scope") : 60119;
  function Y(x) {
    if (typeof x == "object" && x !== null) {
      var ae = x.$$typeof;
      switch (ae) {
        case t:
          switch (x = x.type, x) {
            case S:
            case g:
            case i:
            case u:
            case c:
            case O:
              return x;
            default:
              switch (x = x && x.$$typeof, x) {
                case k:
                case I:
                case _:
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
  function W(x) {
    return Y(x) === g;
  }
  return Ue.AsyncMode = S, Ue.ConcurrentMode = g, Ue.ContextConsumer = k, Ue.ContextProvider = y, Ue.Element = t, Ue.ForwardRef = I, Ue.Fragment = i, Ue.Lazy = _, Ue.Memo = q, Ue.Portal = r, Ue.Profiler = u, Ue.StrictMode = c, Ue.Suspense = O, Ue.isAsyncMode = function(x) {
    return W(x) || Y(x) === S;
  }, Ue.isConcurrentMode = W, Ue.isContextConsumer = function(x) {
    return Y(x) === k;
  }, Ue.isContextProvider = function(x) {
    return Y(x) === y;
  }, Ue.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === t;
  }, Ue.isForwardRef = function(x) {
    return Y(x) === I;
  }, Ue.isFragment = function(x) {
    return Y(x) === i;
  }, Ue.isLazy = function(x) {
    return Y(x) === _;
  }, Ue.isMemo = function(x) {
    return Y(x) === q;
  }, Ue.isPortal = function(x) {
    return Y(x) === r;
  }, Ue.isProfiler = function(x) {
    return Y(x) === u;
  }, Ue.isStrictMode = function(x) {
    return Y(x) === c;
  }, Ue.isSuspense = function(x) {
    return Y(x) === O;
  }, Ue.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === i || x === g || x === u || x === c || x === O || x === j || typeof x == "object" && x !== null && (x.$$typeof === _ || x.$$typeof === q || x.$$typeof === y || x.$$typeof === k || x.$$typeof === I || x.$$typeof === P || x.$$typeof === V || x.$$typeof === $ || x.$$typeof === w);
  }, Ue.typeOf = Y, Ue;
}
var ko;
function Ic() {
  return ko || (ko = 1, wo.exports = Oc()), wo.exports;
}
var Fa, xo;
function Nc() {
  if (xo) return Fa;
  xo = 1;
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
  function y(_) {
    return e.isMemo(_) ? c : u[_.$$typeof] || t;
  }
  var k = Object.defineProperty, S = Object.getOwnPropertyNames, g = Object.getOwnPropertySymbols, I = Object.getOwnPropertyDescriptor, O = Object.getPrototypeOf, j = Object.prototype;
  function q(_, w, P) {
    if (typeof w != "string") {
      if (j) {
        var V = O(w);
        V && V !== j && q(_, V, P);
      }
      var $ = S(w);
      g && ($ = $.concat(g(w)));
      for (var Y = y(_), W = y(w), x = 0; x < $.length; ++x) {
        var ae = $[x];
        if (!r[ae] && !(P && P[ae]) && !(W && W[ae]) && !(Y && Y[ae])) {
          var Se = I(w, ae);
          try {
            k(_, ae, Se);
          } catch {
          }
        }
      }
    }
    return _;
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
var _o = function(e, t) {
  for (var r = [e[0]], i = 0, c = t.length; i < c; i += 1) r.push(t[i], e[i + 1]);
  return r;
}, Xa = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !gs.typeOf(e);
}, Jn = Object.freeze([]), wr = Object.freeze({});
function yn(e) {
  return typeof e == "function";
}
function Co(e) {
  return e.displayName || e.name || "Component";
}
function li(e) {
  return e && typeof e.styledComponentId == "string";
}
var jr = typeof yt < "u" && yt.env !== void 0 && (yt.env.REACT_APP_SC_ATTR || yt.env.SC_ATTR) || "data-styled", ci = typeof window < "u" && "HTMLElement" in window, Mc = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof yt < "u" && yt.env !== void 0 && (yt.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && yt.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? yt.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && yt.env.REACT_APP_SC_DISABLE_SPEEDY : yt.env.SC_DISABLE_SPEEDY !== void 0 && yt.env.SC_DISABLE_SPEEDY !== "" ? yt.env.SC_DISABLE_SPEEDY !== "false" && yt.env.SC_DISABLE_SPEEDY : yt.env.NODE_ENV !== "production"));
function Sn(e) {
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
      for (var c = this.groupSizes, u = c.length, y = u; r >= y; ) (y <<= 1) < 0 && Sn(16, "" + r);
      this.groupSizes = new Uint32Array(y), this.groupSizes.set(c), this.length = y;
      for (var k = u; k < y; k++) this.groupSizes[k] = 0;
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
    for (var c = this.groupSizes[r], u = this.indexOfGroup(r), y = u + c, k = u; k < y; k++) i += this.tag.getRule(k) + `/*!sc*/
`;
    return i;
  }, e;
}(), Zn = /* @__PURE__ */ new Map(), Qn = /* @__PURE__ */ new Map(), pn = 1, Wn = function(e) {
  if (Zn.has(e)) return Zn.get(e);
  for (; Qn.has(pn); ) pn++;
  var t = pn++;
  return Zn.set(e, t), Qn.set(t, e), t;
}, Fc = function(e) {
  return Qn.get(e);
}, jc = function(e, t) {
  t >= pn && (pn = t + 1), Zn.set(e, t), Qn.set(t, e);
}, zc = "style[" + jr + '][data-styled-version="5.3.11"]', Uc = new RegExp("^" + jr + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), $c = function(e, t, r) {
  for (var i, c = r.split(","), u = 0, y = c.length; u < y; u++) (i = c[u]) && e.registerName(t, i);
}, Wc = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), i = [], c = 0, u = r.length; c < u; c++) {
    var y = r[c].trim();
    if (y) {
      var k = y.match(Uc);
      if (k) {
        var S = 0 | parseInt(k[1], 10), g = k[2];
        S !== 0 && (jc(g, S), $c(e, g, k[3]), e.getTag().insertRules(S, i)), i.length = 0;
      } else i.push(y);
    }
  }
}, Bc = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, ys = function(e) {
  var t = document.head, r = e || t, i = document.createElement("style"), c = function(k) {
    for (var S = k.childNodes, g = S.length; g >= 0; g--) {
      var I = S[g];
      if (I && I.nodeType === 1 && I.hasAttribute(jr)) return I;
    }
  }(r), u = c !== void 0 ? c.nextSibling : null;
  i.setAttribute(jr, "active"), i.setAttribute("data-styled-version", "5.3.11");
  var y = Bc();
  return y && i.setAttribute("nonce", y), r.insertBefore(i, u), i;
}, Hc = function() {
  function e(r) {
    var i = this.element = ys(r);
    i.appendChild(document.createTextNode("")), this.sheet = function(c) {
      if (c.sheet) return c.sheet;
      for (var u = document.styleSheets, y = 0, k = u.length; y < k; y++) {
        var S = u[y];
        if (S.ownerNode === c) return S;
      }
      Sn(17);
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
      for (var y = document.querySelectorAll(zc), k = 0, S = y.length; k < S; k++) {
        var g = y[k];
        g && g.getAttribute(jr) !== "active" && (Wc(u, g), g.parentNode && g.parentNode.removeChild(g));
      }
    }(this));
  }
  e.registerId = function(r) {
    return Wn(r);
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
        var k = Fc(y);
        if (k !== void 0) {
          var S = r.names.get(k), g = i.getGroup(y);
          if (S && g && S.size) {
            var I = jr + ".g" + y + '[id="' + k + '"]', O = "";
            S !== void 0 && S.forEach(function(j) {
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
function Za(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = Eo(t % 52) + r;
  return (Eo(t % 52) + r).replace(Gc, "$1-$2");
}
var Lr = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, vs = function(e) {
  return Lr(5381, e);
};
function Xc(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (yn(r) && !li(r)) return !1;
  }
  return !0;
}
var Zc = vs("5.3.11"), Kc = function() {
  function e(t, r, i) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (i === void 0 || i.isStatic) && Xc(t), this.componentId = r, this.baseHash = Lr(Zc, r), this.baseStyle = i, bs.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, i) {
    var c = this.componentId, u = [];
    if (this.baseStyle && u.push(this.baseStyle.generateAndInjectStyles(t, r, i)), this.isStatic && !i.hash) if (this.staticRulesId && r.hasNameForId(c, this.staticRulesId)) u.push(this.staticRulesId);
    else {
      var y = zr(this.rules, t, r, i).join(""), k = Za(Lr(this.baseHash, y) >>> 0);
      if (!r.hasNameForId(c, k)) {
        var S = i(y, "." + k, void 0, c);
        r.insertRules(c, k, S);
      }
      u.push(k), this.staticRulesId = k;
    }
    else {
      for (var g = this.rules.length, I = Lr(this.baseHash, i.hash), O = "", j = 0; j < g; j++) {
        var q = this.rules[j];
        if (typeof q == "string") O += q;
        else if (q) {
          var _ = zr(q, t, r, i), w = Array.isArray(_) ? _.join("") : _;
          I = Lr(I, w + j), O += w;
        }
      }
      if (O) {
        var P = Za(I >>> 0);
        if (!r.hasNameForId(c, P)) {
          var V = i(O, "." + P, void 0, c);
          r.insertRules(c, P, V);
        }
        u.push(P);
      }
    }
    return u.join(" ");
  }, e;
}(), Jc = /^\s*\/\/.*$/gm, Qc = [":", "[", ".", "#"];
function eu(e) {
  var t, r, i, c, u = wr, y = u.options, k = y === void 0 ? wr : y, S = u.plugins, g = S === void 0 ? Jn : S, I = new Tc(k), O = [], j = /* @__PURE__ */ function(w) {
    function P(V) {
      if (V) try {
        w(V + "}");
      } catch {
      }
    }
    return function(V, $, Y, W, x, ae, Se, De, Fe, Xe) {
      switch (V) {
        case 1:
          if (Fe === 0 && $.charCodeAt(0) === 64) return w($ + ";"), "";
          break;
        case 2:
          if (De === 0) return $ + "/*|*/";
          break;
        case 3:
          switch (De) {
            case 102:
            case 112:
              return w(Y[0] + $), "";
            default:
              return $ + (Xe === 0 ? "/*|*/" : "");
          }
        case -2:
          $.split("/*|*/}").forEach(P);
      }
    };
  }(function(w) {
    O.push(w);
  }), q = function(w, P, V) {
    return P === 0 && Qc.indexOf(V[r.length]) !== -1 || V.match(c) ? w : "." + t;
  };
  function _(w, P, V, $) {
    $ === void 0 && ($ = "&");
    var Y = w.replace(Jc, ""), W = P && V ? V + " " + P + " { " + Y + " }" : Y;
    return t = $, r = P, i = new RegExp("\\" + r + "\\b", "g"), c = new RegExp("(\\" + r + "\\b){2,}"), I(V || !P ? "" : P, W);
  }
  return I.use([].concat(g, [function(w, P, V) {
    w === 2 && V.length && V[0].lastIndexOf(r) > 0 && (V[0] = V[0].replace(i, q));
  }, j, function(w) {
    if (w === -2) {
      var P = O;
      return O = [], P;
    }
  }])), _.hash = g.length ? g.reduce(function(w, P) {
    return P.name || Sn(15), Lr(w, P.name);
  }, 5381).toString() : "", _;
}
var ws = pt.createContext();
ws.Consumer;
var Ss = pt.createContext(), tu = (Ss.Consumer, new bs()), Ka = eu();
function ru() {
  return xr(ws) || tu;
}
function nu() {
  return xr(Ss) || Ka;
}
var au = function() {
  function e(t, r) {
    var i = this;
    this.inject = function(c, u) {
      u === void 0 && (u = Ka);
      var y = i.name + u.hash;
      c.hasNameForId(i.id, y) || c.insertRules(i.id, y, u(i.rules, y, "@keyframes"));
    }, this.toString = function() {
      return Sn(12, String(i.name));
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
function zr(e, t, r, i) {
  if (Array.isArray(e)) {
    for (var c, u = [], y = 0, k = e.length; y < k; y += 1) (c = zr(e[y], t, r, i)) !== "" && (Array.isArray(c) ? u.push.apply(u, c) : u.push(c));
    return u;
  }
  if (Ro(e)) return "";
  if (li(e)) return "." + e.styledComponentId;
  if (yn(e)) {
    if (typeof (g = e) != "function" || g.prototype && g.prototype.isReactComponent || !t) return e;
    var S = e(t);
    return zr(S, t, r, i);
  }
  var g;
  return e instanceof au ? r ? (e.inject(r, i), e.getName(i)) : e : Xa(e) ? function I(O, j) {
    var q, _, w = [];
    for (var P in O) O.hasOwnProperty(P) && !Ro(O[P]) && (Array.isArray(O[P]) && O[P].isCss || yn(O[P]) ? w.push(Ao(P) + ":", O[P], ";") : Xa(O[P]) ? w.push.apply(w, I(O[P], P)) : w.push(Ao(P) + ": " + (q = P, (_ = O[P]) == null || typeof _ == "boolean" || _ === "" ? "" : typeof _ != "number" || _ === 0 || q in Ec || q.startsWith("--") ? String(_).trim() : _ + "px") + ";"));
    return j ? [j + " {"].concat(w, ["}"]) : w;
  }(e) : e.toString();
}
var Oo = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function cu(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
  return yn(e) || Xa(e) ? Oo(zr(_o(Jn, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Oo(zr(_o(e, r)));
}
var uu = function(e, t, r) {
  return r === void 0 && (r = wr), e.theme !== r.theme && e.theme || t || r.theme;
}, du = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, fu = /(^-|-$)/g;
function ja(e) {
  return e.replace(du, "-").replace(fu, "");
}
var pu = function(e) {
  return Za(vs(e) >>> 0);
};
function Bn(e) {
  return typeof e == "string" && yt.env.NODE_ENV === "production";
}
var Ja = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, hu = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function mu(e, t, r) {
  var i = e[r];
  Ja(t) && Ja(i) ? ks(i, t) : e[r] = t;
}
function ks(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
  for (var c = 0, u = r; c < u.length; c++) {
    var y = u[c];
    if (Ja(y)) for (var k in y) hu(k) && mu(e, y[k], k);
  }
  return e;
}
var xs = pt.createContext();
xs.Consumer;
var za = {};
function _s(e, t, r) {
  var i = li(e), c = !Bn(e), u = t.attrs, y = u === void 0 ? Jn : u, k = t.componentId, S = k === void 0 ? function($, Y) {
    var W = typeof $ != "string" ? "sc" : ja($);
    za[W] = (za[W] || 0) + 1;
    var x = W + "-" + pu("5.3.11" + W + za[W]);
    return Y ? Y + "-" + x : x;
  }(t.displayName, t.parentComponentId) : k, g = t.displayName, I = g === void 0 ? function($) {
    return Bn($) ? "styled." + $ : "Styled(" + Co($) + ")";
  }(e) : g, O = t.displayName && t.componentId ? ja(t.displayName) + "-" + t.componentId : t.componentId || S, j = i && e.attrs ? Array.prototype.concat(e.attrs, y).filter(Boolean) : y, q = t.shouldForwardProp;
  i && e.shouldForwardProp && (q = t.shouldForwardProp ? function($, Y, W) {
    return e.shouldForwardProp($, Y, W) && t.shouldForwardProp($, Y, W);
  } : e.shouldForwardProp);
  var _, w = new Kc(r, O, i ? e.componentStyle : void 0), P = w.isStatic && y.length === 0, V = function($, Y) {
    return function(W, x, ae, Se) {
      var De = W.attrs, Fe = W.componentStyle, Xe = W.defaultProps, de = W.foldedComponentIds, fe = W.shouldForwardProp, Re = W.styledComponentId, Ie = W.target, Te = function(M, m, ee) {
        M === void 0 && (M = wr);
        var T = pr({}, m, { theme: M }), ie = {};
        return ee.forEach(function(Q) {
          var te, G, ne, ce = Q;
          for (te in yn(ce) && (ce = ce(T)), ce) T[te] = ie[te] = te === "className" ? (G = ie[te], ne = ce[te], G && ne ? G + " " + ne : G || ne) : ce[te];
        }), [T, ie];
      }(uu(x, xr(xs), Xe) || wr, x, De), lt = Te[0], je = Te[1], Oe = function(M, m, ee, T) {
        var ie = ru(), Q = nu(), te = m ? M.generateAndInjectStyles(wr, ie, Q) : M.generateAndInjectStyles(ee, ie, Q);
        return te;
      }(Fe, Se, lt), He = ae, rt = je.$as || x.$as || je.as || x.as || Ie, se = Bn(rt), F = je !== x ? pr({}, x, {}, je) : x, E = {};
      for (var L in F) L[0] !== "$" && L !== "as" && (L === "forwardedAs" ? E.as = F[L] : (fe ? fe(L, vo, rt) : !se || vo(L)) && (E[L] = F[L]));
      return x.style && je.style !== x.style && (E.style = pr({}, x.style, {}, je.style)), E.className = Array.prototype.concat(de, Re, Oe !== Re ? Oe : null, x.className, je.className).filter(Boolean).join(" "), E.ref = He, Qo(rt, E);
    }(_, $, Y, P);
  };
  return V.displayName = I, (_ = pt.forwardRef(V)).attrs = j, _.componentStyle = w, _.displayName = I, _.shouldForwardProp = q, _.foldedComponentIds = i ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : Jn, _.styledComponentId = O, _.target = i ? e.target : e, _.withComponent = function($) {
    var Y = t.componentId, W = function(ae, Se) {
      if (ae == null) return {};
      var De, Fe, Xe = {}, de = Object.keys(ae);
      for (Fe = 0; Fe < de.length; Fe++) De = de[Fe], Se.indexOf(De) >= 0 || (Xe[De] = ae[De]);
      return Xe;
    }(t, ["componentId"]), x = Y && Y + "-" + (Bn($) ? $ : ja(Co($)));
    return _s($, pr({}, W, { attrs: j, componentId: x }), r);
  }, Object.defineProperty(_, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function($) {
    this._foldedDefaultProps = i ? ks({}, e.defaultProps, $) : $;
  } }), Object.defineProperty(_, "toString", { value: function() {
    return "." + _.styledComponentId;
  } }), c && Pc(_, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), _;
}
var er = function(e) {
  return function t(r, i, c) {
    if (c === void 0 && (c = wr), !gs.isValidElementType(i)) return Sn(1, String(i));
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
  er[e] = er(e);
});
er.div`
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
    function k(I) {
      try {
        g(i.next(I));
      } catch (O) {
        y(O);
      }
    }
    function S(I) {
      try {
        g(i.throw(I));
      } catch (O) {
        y(O);
      }
    }
    function g(I) {
      I.done ? u(I.value) : c(I.value).then(k, S);
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
}, Su = function(e, t) {
  return {
    top: (window.screen.height - t) / 2,
    left: (window.screen.width - e) / 2
  };
};
function ku(e, t, r) {
  var i = t.height, c = t.width, u = Cs(t, ["height", "width"]), y = Nr({ height: i, width: c, location: "no", toolbar: "no", status: "no", directories: "no", menubar: "no", scrollbars: "yes", resizable: "no", centerscreen: "yes", chrome: "yes" }, u), k = window.open(e, "", Object.keys(y).map(function(g) {
    return "".concat(g, "=").concat(y[g]);
  }).join(", "));
  if (r)
    var S = window.setInterval(function() {
      try {
        (k === null || k.closed) && (window.clearInterval(S), r(k));
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
        var c = r.props, u = c.onShareWindowClose, y = c.windowHeight, k = y === void 0 ? 400 : y, S = c.windowPosition, g = S === void 0 ? "windowCenter" : S, I = c.windowWidth, O = I === void 0 ? 550 : I, j = Nr({ height: k, width: O }, g === "windowCenter" ? wu(O, k) : Su(O, k));
        ku(i, j, u);
      }, r.handleClick = function(i) {
        return yu(r, void 0, void 0, function() {
          var c, u, y, k, S, g, I, O, j, q;
          return bu(this, function(_) {
            switch (_.label) {
              case 0:
                return c = this.props, u = c.beforeOnClick, y = c.disabled, k = c.networkLink, S = c.onClick, g = c.url, I = c.openShareDialogOnClick, O = c.opts, j = k(g, O), y ? [
                  2
                  /*return*/
                ] : (i.preventDefault(), u ? (q = u(), vu(q) ? [4, q] : [3, 2]) : [3, 2]);
              case 1:
                _.sent(), _.label = 2;
              case 2:
                return I && this.openShareDialog(j), S && S(i, j), [
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
      var S = r.networkName;
      r.onShareWindowClose, r.openShareDialogOnClick, r.opts;
      var g = r.resetButtonStyle, I = r.style;
      r.url, r.windowHeight, r.windowPosition, r.windowWidth;
      var O = Cs(r, ["beforeOnClick", "children", "className", "disabled", "disabledStyle", "forwardedRef", "networkLink", "networkName", "onShareWindowClose", "openShareDialogOnClick", "opts", "resetButtonStyle", "style", "url", "windowHeight", "windowPosition", "windowWidth"]), j = Qt("react-share__ShareButton", {
        "react-share__ShareButton--disabled": !!u,
        disabled: !!u
      }, c), q = Nr(Nr(g ? { backgroundColor: "transparent", border: "none", padding: 0, font: "inherit", color: "inherit", cursor: "pointer" } : {}, I), u && y);
      return pt.createElement("button", Nr({}, O, { "aria-label": O["aria-label"] || S, className: j, onClick: this.handleClick, ref: k, style: q }), i);
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
    var k = r(u), S = ea({}, u), g = Object.keys(k);
    return g.forEach(function(I) {
      delete S[I];
    }), pt.createElement(xu, ea({}, i, S, { forwardedRef: y, networkName: e, networkLink: t, opts: r(u) }));
  }
  return c.displayName = "ShareButton-".concat(e), ii(c);
}
function _u(e, t) {
  var r = t.subject, i = t.body, c = t.separator;
  return "mailto:" + oa({ subject: r, body: i ? i + c + e : e });
}
sa("email", _u, function(e) {
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
function hn(e, t) {
  if (!e)
    throw new Tu(t);
}
function Eu(e, t) {
  var r = t.quote, i = t.hashtag;
  return hn(e, "facebook.url"), "https://www.facebook.com/sharer/sharer.php" + oa({
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
  return hn(e, "linkedin.url"), "https://linkedin.com/shareArticle" + oa({ url: e, mini: "true", title: r, summary: i, source: c });
}
sa("linkedin", Au, function(e) {
  var t = e.title, r = e.summary, i = e.source;
  return { title: t, summary: r, source: i };
}, {
  windowWidth: 750,
  windowHeight: 600
});
function Ru(e, t) {
  var r = t.title, i = t.via, c = t.hashtags, u = c === void 0 ? [] : c, y = t.related, k = y === void 0 ? [] : y;
  return hn(e, "twitter.url"), hn(Array.isArray(u), "twitter.hashtags is not an array"), hn(Array.isArray(k), "twitter.related is not an array"), "https://twitter.com/share" + oa({
    url: e,
    text: r,
    via: i,
    hashtags: u.length > 0 ? u.join(",") : void 0,
    related: k.length > 0 ? k.join(",") : void 0
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
function Qa(e) {
  "@babel/helpers - typeof";
  return Qa = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Qa(e);
}
var Ou = (typeof window > "u" ? "undefined" : Qa(window)) === "object" && window.Element || function() {
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
er.div`
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
er.div`
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
  innerRef: k,
  href: S,
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
  return S && y === "button" && (j = "a"), /* @__PURE__ */ B.jsx(
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
        j,
        {
          type: j === "button" && g ? "button" : void 0,
          ...I,
          className: O,
          href: S,
          ref: k,
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
  width: k,
  height: S,
  cardLink: g,
  title: I,
  caption: O,
  captionTitle: j,
  border: q,
  dropShadow: _
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
    ...k && { width: k },
    ...S && { height: S }
  }, P = Qt("uds-img", {
    borderless: !q,
    "uds-img-drop-shadow": _
  }), V = (Y) => {
    const W = Y ? `${w.className} ${Y}` : w.className;
    return g ? /* @__PURE__ */ B.jsxs("a", { href: g, children: [
      /* @__PURE__ */ B.jsx("img", { ...w, className: W }),
      /* @__PURE__ */ B.jsx("span", { className: "visually-hidden", children: I })
    ] }) : /* @__PURE__ */ B.jsx("img", { ...w, className: W });
  }, $ = () => /* @__PURE__ */ B.jsx("div", { className: P, children: /* @__PURE__ */ B.jsxs("figure", { className: "figure uds-figure", children: [
    V(),
    O && /* @__PURE__ */ B.jsxs("figcaption", { className: "figure-caption uds-figure-caption", children: [
      j && /* @__PURE__ */ B.jsx("h3", { children: j }),
      /* @__PURE__ */ B.jsx(
        "span",
        {
          className: "uds-caption-text",
          dangerouslySetInnerHTML: Ir(O)
        }
      )
    ] })
  ] }) });
  return /* @__PURE__ */ B.jsx(B.Fragment, { children: O ? $() : V(P) });
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
const Du = er.div`
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
  body: k,
  eventFormat: S = "stack",
  eventLocation: g,
  eventTime: I,
  buttons: O,
  linkLabel: j,
  linkUrl: q,
  tags: _,
  showBorders: w = !0,
  cardLink: P
}) => /* @__PURE__ */ B.jsx(
  Rs,
  {
    type: e,
    width: t,
    horizontal: r,
    image: i,
    imageAltText: c,
    title: u,
    icon: y,
    body: k,
    eventFormat: S,
    eventLocation: g,
    eventTime: I,
    buttons: O,
    linkLabel: j,
    linkUrl: q,
    tags: _,
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
  body: k = "",
  eventFormat: S = "stack",
  eventLocation: g = "",
  eventTime: I = "",
  buttons: O = void 0,
  linkLabel: j = void 0,
  linkUrl: q = void 0,
  tags: _ = void 0,
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
  return /* @__PURE__ */ B.jsxs(Du, { className: V, "data-testid": "card-container", children: [
    $ && /* @__PURE__ */ B.jsx(
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
    !i && y && /* @__PURE__ */ B.jsx(
      "i",
      {
        className: `${y == null ? void 0 : y[0]} fa-${y == null ? void 0 : y[1]} fa-2x card-icon-top`,
        "data-testid": "card-icon"
      }
    ),
    /* @__PURE__ */ B.jsx("div", { className: r ? "card-content-wrapper" : void 0, children: /* @__PURE__ */ B.jsx(
      Os,
      {
        type: e,
        body: k,
        eventFormat: S,
        eventLocation: g,
        eventTime: I,
        title: u,
        buttons: O,
        linkLabel: j,
        linkUrl: q,
        tags: _,
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
  linkLabel: k = void 0,
  linkUrl: S = void 0,
  tags: g = void 0,
  cardLink: I
}) => {
  const O = As(e), j = I && !O, q = O && I, _ = e === "event" && (c || i);
  return /* @__PURE__ */ B.jsxs(B.Fragment, { children: [
    /* @__PURE__ */ B.jsx("div", { className: "card-header", "data-testid": "card-title", children: /* @__PURE__ */ B.jsx("h3", { className: "card-title", children: j ? /* @__PURE__ */ B.jsx("a", { href: I, children: u }) : u }) }),
    t && /* @__PURE__ */ B.jsx("div", { className: "card-body", "data-testid": "card-body", children: /* @__PURE__ */ B.jsx("div", { dangerouslySetInnerHTML: Ir(t) }) }),
    _ && /* @__PURE__ */ B.jsx(
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
          ...Io,
          text: u
        },
        children: /* @__PURE__ */ B.jsx("a", { href: I, className: "card-arrow-link", "aria-label": u, children: /* @__PURE__ */ B.jsx("i", { className: "fas fa-arrow-right", "aria-hidden": "true" }) })
      }
    ) }) : /* @__PURE__ */ B.jsxs(B.Fragment, { children: [
      y && /* @__PURE__ */ B.jsx("div", { className: "card-buttons", children: y.map((w) => /* @__PURE__ */ B.jsx(
        "div",
        {
          className: "card-button",
          "data-testid": "card-button",
          children: /* @__PURE__ */ B.jsx(
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
      S && k && /* @__PURE__ */ B.jsx("div", { className: "card-link", "data-testid": "card-link", children: /* @__PURE__ */ B.jsx(
        kr,
        {
          gaData: {
            ...Io,
            section: u,
            text: k
          },
          children: /* @__PURE__ */ B.jsx("a", { href: Mu(S), children: k })
        }
      ) })
    ] }),
    g && /* @__PURE__ */ B.jsx("div", { className: "card-tags", "data-testid": "card-tags", children: g.map((w) => (
      // @ts-ignore
      /* @__PURE__ */ B.jsx(
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
const Lu = er.div`
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
] }), ju = er.section``, ui = sl(null), Ns = ({
  defaultProps: e,
  dataSource: t,
  noFeedText: r,
  renderHeader: i,
  renderBody: c,
  dataTransformer: u,
  dataFilter: y,
  maxItems: k
}) => {
  const [{ data: S, loading: g, error: I }, O] = ql(), [j, q] = un([]), _ = { ...e.dataSource, ...t };
  return gn(() => {
    O(_ == null ? void 0 : _.url);
  }, [_ == null ? void 0 : _.url]), gn(() => {
    const w = S == null ? void 0 : S.nodes.map(u), P = w == null ? void 0 : w.filter(
      (V) => y(V, t == null ? void 0 : t.filters)
    );
    q(k ? P == null ? void 0 : P.slice(0, k) : P);
  }, [S]), // Init the context to be used on its childrens
  /* @__PURE__ */ B.jsx(ui.Provider, { value: { feeds: j }, children: /* @__PURE__ */ B.jsxs(ju, { children: [
    i,
    I ? /* @__PURE__ */ B.jsx("span", { children: "Error, try again!" }) : /* @__PURE__ */ B.jsxs(B.Fragment, { children: [
      g && !(j != null && j.length) && /* @__PURE__ */ B.jsx("div", { className: "text-center mt-4", children: /* @__PURE__ */ B.jsx(Fu, {}) }),
      j != null && j.length ? c : !g && /* @__PURE__ */ B.jsx("p", { className: "text-center", children: r })
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
}), Uu = er.div`
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
        /* @__PURE__ */ B.jsx(Uu, { className: "col-sm-12 col-md-3", children: /* @__PURE__ */ B.jsx(
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
  header: di,
  ctaButton: fi
};
const Ms = ({ children: e }) => /* @__PURE__ */ B.jsx("div", { className: "row", "data-testid": "feed-body", children: /* @__PURE__ */ B.jsx("div", { className: "col", children: e }) });
Ms.propTypes = {
  children: o.element
};
er.img`
  width: 100%;
`;
o.oneOf(["heading-hero", "story-hero"]), o.arrayOf(La), o.string;
o.bool, o.bool, o.bool, o.bool, o.string, o.func, o.node, o.bool, o.string, o.bool;
o.oneOf(["default", "bordered"]).isRequired, o.oneOf(["white", "gray1", "gray2", "gray7"]).isRequired, o.number, o.number, o.func.isRequired;
er.div`
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
    rightKeyPressed: k,
    icon: S,
    gaData: g
  } = e, { isReact: I, isBootstrap: O } = hs(), j = ll(null);
  cl(t, () => ({
    focus() {
      j.current.focus();
    },
    scrollIntoView() {
      var _, w, P, V, $, Y, W;
      const x = ((_ = j.current) == null ? void 0 : _.offsetWidth) / 2 + j.current.offsetLeft, ae = ((P = (w = j.current) == null ? void 0 : w.offsetParent) == null ? void 0 : P.scrollLeft) + (($ = (V = j.current) == null ? void 0 : V.offsetParent) == null ? void 0 : $.offsetWidth) / 2;
      (W = (Y = j.current) == null ? void 0 : Y.offsetParent) == null || W.scrollBy({
        left: x - ae
      });
    }
  }), []);
  const q = (_) => {
    _.keyCode === 37 ? (_.preventDefault(), y()) : _.keyCode === 39 && (_.preventDefault(), k());
  };
  return /* @__PURE__ */ B.jsx(kr, { gaData: { ...g, text: c }, children: /* @__PURE__ */ B.jsxs(
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
      onClick: I && ((_) => u(_, r, c)),
      onKeyDown: I && q,
      tabIndex: i ? "" : "-1",
      children: [
        c,
        " ",
        S && /* @__PURE__ */ B.jsx("i", { className: `${S == null ? void 0 : S[0]} fa-${S == null ? void 0 : S[1]} me-1` })
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
var Wu = !1;
try {
  var No = Object.defineProperty({}, "passive", {
    get: function() {
      Wu = !0;
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
function Bu() {
  if (Do) return Hn;
  Do = 1;
  var e = es;
  return Hn.createRoot = e.createRoot, Hn.hydrateRoot = e.hydrateRoot, Hn;
}
Bu();
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
  /* @__PURE__ */ ft.jsx(
    Ns,
    {
      renderHeader: t && r ? /* @__PURE__ */ ft.jsx(
        Ps,
        {
          header: t,
          ctaButton: r,
          defaultProps: Po
        }
      ) : null,
      renderBody: /* @__PURE__ */ ft.jsx(Ms, { children: e }),
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
  maxItems: Ge.number,
  children: Ge.element
};
const Vu = Ge.shape({
  color: Ge.oneOf(["white", "dark"]),
  text: Ge.string
}), Yu = Ge.shape({
  color: Ge.oneOf(["gold", "maroon", "gray", "dark"]),
  text: Ge.string,
  url: Ge.string
}), Gu = Ge.shape({
  url: Ge.string.isRequired,
  filters: Ge.string
}).isRequired, Ls = {
  header: Vu,
  ctaButton: Yu,
  dataSource: Gu,
  maxItems: Ge.number
}, Xu = (e) => e.toLocaleDateString("en-US", {
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
    COMPLETE: Xu(new Date(r))
  }[t];
};
var Ua = { exports: {} }, Ye = {};
var zo;
function Zu() {
  if (zo) return Ye;
  zo = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), u = Symbol.for("react.consumer"), y = Symbol.for("react.context"), k = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), I = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), j = Symbol.for("react.offscreen"), q = Symbol.for("react.client.reference");
  function _(w) {
    if (typeof w == "object" && w !== null) {
      var P = w.$$typeof;
      switch (P) {
        case e:
          switch (w = w.type, w) {
            case r:
            case c:
            case i:
            case S:
            case g:
              return w;
            default:
              switch (w = w && w.$$typeof, w) {
                case y:
                case k:
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
  return Ye.ContextConsumer = u, Ye.ContextProvider = y, Ye.Element = e, Ye.ForwardRef = k, Ye.Fragment = r, Ye.Lazy = O, Ye.Memo = I, Ye.Portal = t, Ye.Profiler = c, Ye.StrictMode = i, Ye.Suspense = S, Ye.SuspenseList = g, Ye.isContextConsumer = function(w) {
    return _(w) === u;
  }, Ye.isContextProvider = function(w) {
    return _(w) === y;
  }, Ye.isElement = function(w) {
    return typeof w == "object" && w !== null && w.$$typeof === e;
  }, Ye.isForwardRef = function(w) {
    return _(w) === k;
  }, Ye.isFragment = function(w) {
    return _(w) === r;
  }, Ye.isLazy = function(w) {
    return _(w) === O;
  }, Ye.isMemo = function(w) {
    return _(w) === I;
  }, Ye.isPortal = function(w) {
    return _(w) === t;
  }, Ye.isProfiler = function(w) {
    return _(w) === c;
  }, Ye.isStrictMode = function(w) {
    return _(w) === i;
  }, Ye.isSuspense = function(w) {
    return _(w) === S;
  }, Ye.isSuspenseList = function(w) {
    return _(w) === g;
  }, Ye.isValidElementType = function(w) {
    return typeof w == "string" || typeof w == "function" || w === r || w === c || w === i || w === S || w === g || w === j || typeof w == "object" && w !== null && (w.$$typeof === O || w.$$typeof === I || w.$$typeof === y || w.$$typeof === u || w.$$typeof === k || w.$$typeof === q || w.getModuleId !== void 0);
  }, Ye.typeOf = _, Ye;
}
var Uo;
function Ku() {
  return Uo || (Uo = 1, Ua.exports = /* @__PURE__ */ Zu()), Ua.exports;
}
var js = /* @__PURE__ */ Ku();
function Ju(e) {
  function t(F, E, L, M, m) {
    for (var ee = 0, T = 0, ie = 0, Q = 0, te, G, ne = 0, ce = 0, K, ge = K = te = 0, re = 0, le = 0, We = 0, ue = 0, it = L.length, qe = it - 1, ke, H = "", oe = "", Ze = "", Pe = "", Me; re < it; ) {
      if (G = L.charCodeAt(re), re === qe && T + Q + ie + ee !== 0 && (T !== 0 && (G = T === 47 ? 10 : 47), Q = ie = ee = 0, it++, qe++), T + Q + ie + ee === 0) {
        if (re === qe && (0 < le && (H = H.replace(j, "")), 0 < H.trim().length)) {
          switch (G) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              H += L.charAt(re);
          }
          G = 59;
        }
        switch (G) {
          case 123:
            for (H = H.trim(), te = H.charCodeAt(0), K = 1, ue = ++re; re < it; ) {
              switch (G = L.charCodeAt(re)) {
                case 123:
                  K++;
                  break;
                case 125:
                  K--;
                  break;
                case 47:
                  switch (G = L.charCodeAt(re + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (ge = re + 1; ge < qe; ++ge)
                          switch (L.charCodeAt(ge)) {
                            case 47:
                              if (G === 42 && L.charCodeAt(ge - 1) === 42 && re + 2 !== ge) {
                                re = ge + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (G === 47) {
                                re = ge + 1;
                                break e;
                              }
                          }
                        re = ge;
                      }
                  }
                  break;
                case 91:
                  G++;
                case 40:
                  G++;
                case 34:
                case 39:
                  for (; re++ < qe && L.charCodeAt(re) !== G; )
                    ;
              }
              if (K === 0) break;
              re++;
            }
            switch (K = L.substring(ue, re), te === 0 && (te = (H = H.replace(O, "").trim()).charCodeAt(0)), te) {
              case 64:
                switch (0 < le && (H = H.replace(j, "")), G = H.charCodeAt(1), G) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    le = E;
                    break;
                  default:
                    le = lt;
                }
                if (K = t(E, le, K, G, m + 1), ue = K.length, 0 < Oe && (le = r(lt, H, We), Me = k(3, K, le, E, Re, fe, ue, G, m, M), H = le.join(""), Me !== void 0 && (ue = (K = Me.trim()).length) === 0 && (G = 0, K = "")), 0 < ue) switch (G) {
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
                K = t(E, r(E, H, We), K, M, m + 1);
            }
            Ze += K, K = We = le = ge = te = 0, H = "", G = L.charCodeAt(++re);
            break;
          case 125:
          case 59:
            if (H = (0 < le ? H.replace(j, "") : H).trim(), 1 < (ue = H.length)) switch (ge === 0 && (te = H.charCodeAt(0), te === 45 || 96 < te && 123 > te) && (ue = (H = H.replace(" ", ":")).length), 0 < Oe && (Me = k(1, H, E, F, Re, fe, oe.length, M, m, M)) !== void 0 && (ue = (H = Me.trim()).length) === 0 && (H = "\0\0"), te = H.charCodeAt(0), G = H.charCodeAt(1), te) {
              case 0:
                break;
              case 64:
                if (G === 105 || G === 99) {
                  Pe += H + L.charAt(re);
                  break;
                }
              default:
                H.charCodeAt(ue - 1) !== 58 && (oe += c(H, te, G, H.charCodeAt(2)));
            }
            We = le = ge = te = 0, H = "", G = L.charCodeAt(++re);
        }
      }
      switch (G) {
        case 13:
        case 10:
          T === 47 ? T = 0 : 1 + te === 0 && M !== 107 && 0 < H.length && (le = 1, H += "\0"), 0 < Oe * rt && k(0, H, E, F, Re, fe, oe.length, M, m, M), fe = 1, Re++;
          break;
        case 59:
        case 125:
          if (T + Q + ie + ee === 0) {
            fe++;
            break;
          }
        default:
          switch (fe++, ke = L.charAt(re), G) {
            case 9:
            case 32:
              if (Q + ee + T === 0) switch (ne) {
                case 44:
                case 58:
                case 9:
                case 32:
                  ke = "";
                  break;
                default:
                  G !== 32 && (ke = " ");
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
              Q + T + ee === 0 && (le = We = 1, ke = "\f" + ke);
              break;
            case 108:
              if (Q + T + ee + Ie === 0 && 0 < ge) switch (re - ge) {
                case 2:
                  ne === 112 && L.charCodeAt(re - 3) === 58 && (Ie = ne);
                case 8:
                  ce === 111 && (Ie = ce);
              }
              break;
            case 58:
              Q + T + ee === 0 && (ge = re);
              break;
            case 44:
              T + ie + Q + ee === 0 && (le = 1, ke += "\r");
              break;
            case 34:
            case 39:
              T === 0 && (Q = Q === G ? 0 : Q === 0 ? G : Q);
              break;
            case 91:
              Q + T + ie === 0 && ee++;
              break;
            case 93:
              Q + T + ie === 0 && ee--;
              break;
            case 41:
              Q + T + ee === 0 && ie--;
              break;
            case 40:
              if (Q + T + ee === 0) {
                if (te === 0) switch (2 * ne + 3 * ce) {
                  case 533:
                    break;
                  default:
                    te = 1;
                }
                ie++;
              }
              break;
            case 64:
              T + ie + Q + ee + ge + K === 0 && (K = 1);
              break;
            case 42:
            case 47:
              if (!(0 < Q + ee + ie)) switch (T) {
                case 0:
                  switch (2 * G + 3 * L.charCodeAt(re + 1)) {
                    case 235:
                      T = 47;
                      break;
                    case 220:
                      ue = re, T = 42;
                  }
                  break;
                case 42:
                  G === 47 && ne === 42 && ue + 2 !== re && (L.charCodeAt(ue + 2) === 33 && (oe += L.substring(ue, re + 1)), ke = "", T = 0);
              }
          }
          T === 0 && (H += ke);
      }
      ce = ne, ne = G, re++;
    }
    if (ue = oe.length, 0 < ue) {
      if (le = E, 0 < Oe && (Me = k(2, oe, le, F, Re, fe, ue, M, m, M), Me !== void 0 && (oe = Me).length === 0)) return Pe + oe + Ze;
      if (oe = le.join(",") + "{" + oe + "}", Te * Ie !== 0) {
        switch (Te !== 2 || u(oe, 2) || (Ie = 0), Ie) {
          case 111:
            oe = oe.replace(W, ":-moz-$1") + oe;
            break;
          case 112:
            oe = oe.replace(Y, "::-webkit-input-$1") + oe.replace(Y, "::-moz-$1") + oe.replace(Y, ":-ms-input-$1") + oe;
        }
        Ie = 0;
      }
    }
    return Pe + oe + Ze;
  }
  function r(F, E, L) {
    var M = E.trim().split(P);
    E = M;
    var m = M.length, ee = F.length;
    switch (ee) {
      case 0:
      case 1:
        var T = 0;
        for (F = ee === 0 ? "" : F[0] + " "; T < m; ++T)
          E[T] = i(F, E[T], L).trim();
        break;
      default:
        var ie = T = 0;
        for (E = []; T < m; ++T)
          for (var Q = 0; Q < ee; ++Q)
            E[ie++] = i(F[Q] + " ", M[T], L).trim();
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
    var m = F + ";", ee = 2 * E + 3 * L + 4 * M;
    if (ee === 944) {
      F = m.indexOf(":", 9) + 1;
      var T = m.substring(F, m.length - 1).trim();
      return T = m.substring(0, F).trim() + T + ";", Te === 1 || Te === 2 && u(T, 1) ? "-webkit-" + T + T : T;
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
        if (0 < m.indexOf("image-set(", 11)) return m.replace(de, "$1-webkit-$2") + m;
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
        return T = m.substring(m.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + T + "-webkit-" + m + "-ms-flex-pack" + T + m;
      case 1005:
        return _.test(m) ? m.replace(q, ":-webkit-") + m.replace(q, ":-moz-") + m : m;
      case 1e3:
        switch (T = m.substring(13).trim(), E = T.indexOf("-") + 1, T.charCodeAt(0) + T.charCodeAt(E)) {
          case 226:
            T = m.replace(x, "tb");
            break;
          case 232:
            T = m.replace(x, "tb-rl");
            break;
          case 220:
            T = m.replace(x, "lr");
            break;
          default:
            return m;
        }
        return "-webkit-" + m + "-ms-" + T + m;
      case 1017:
        if (m.indexOf("sticky", 9) === -1) break;
      case 975:
        switch (E = (m = F).length - 10, T = (m.charCodeAt(E) === 33 ? m.substring(0, E) : m).substring(F.indexOf(":", 7) + 1).trim(), ee = T.charCodeAt(0) + (T.charCodeAt(7) | 0)) {
          case 203:
            if (111 > T.charCodeAt(8)) break;
          case 115:
            m = m.replace(T, "-webkit-" + T) + ";" + m;
            break;
          case 207:
          case 102:
            m = m.replace(T, "-webkit-" + (102 < ee ? "inline-" : "") + "box") + ";" + m.replace(T, "-webkit-" + T) + ";" + m.replace(T, "-ms-" + T + "box") + ";" + m;
        }
        return m + ";";
      case 938:
        if (m.charCodeAt(5) === 45) switch (m.charCodeAt(6)) {
          case 105:
            return T = m.replace("-items", ""), "-webkit-" + m + "-webkit-box-" + T + "-ms-flex-" + T + m;
          case 115:
            return "-webkit-" + m + "-ms-flex-item-" + m.replace(De, "") + m;
          default:
            return "-webkit-" + m + "-ms-flex-line-pack" + m.replace("align-content", "").replace(De, "") + m;
        }
        break;
      case 973:
      case 989:
        if (m.charCodeAt(3) !== 45 || m.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (Xe.test(F) === !0) return (T = F.substring(F.indexOf(":") + 1)).charCodeAt(0) === 115 ? c(F.replace("stretch", "fill-available"), E, L, M).replace(":fill-available", ":stretch") : m.replace(T, "-webkit-" + T) + m.replace(T, "-moz-" + T.replace("fill-", "")) + m;
        break;
      case 962:
        if (m = "-webkit-" + m + (m.charCodeAt(5) === 102 ? "-ms-" + m : "") + m, L + M === 211 && m.charCodeAt(13) === 105 && 0 < m.indexOf("transform", 10)) return m.substring(0, m.indexOf(";", 27) + 1).replace(w, "$1-webkit-$2") + m;
    }
    return m;
  }
  function u(F, E) {
    var L = F.indexOf(E === 1 ? ":" : "{"), M = F.substring(0, E !== 3 ? L : 10);
    return L = F.substring(L + 1, F.length - 1), He(E !== 2 ? M : M.replace(Fe, "$1"), L, E);
  }
  function y(F, E) {
    var L = c(E, E.charCodeAt(0), E.charCodeAt(1), E.charCodeAt(2));
    return L !== E + ";" ? L.replace(Se, " or ($1)").substring(4) : "(" + E + ")";
  }
  function k(F, E, L, M, m, ee, T, ie, Q, te) {
    for (var G = 0, ne = E, ce; G < Oe; ++G)
      switch (ce = je[G].call(I, F, ne, L, M, m, ee, T, ie, Q, te)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          ne = ce;
      }
    if (ne !== E) return ne;
  }
  function S(F) {
    switch (F) {
      case void 0:
      case null:
        Oe = je.length = 0;
        break;
      default:
        if (typeof F == "function") je[Oe++] = F;
        else if (typeof F == "object") for (var E = 0, L = F.length; E < L; ++E)
          S(F[E]);
        else rt = !!F | 0;
    }
    return S;
  }
  function g(F) {
    return F = F.prefix, F !== void 0 && (He = null, F ? typeof F != "function" ? Te = 1 : (Te = 2, He = F) : Te = 0), g;
  }
  function I(F, E) {
    var L = F;
    if (33 > L.charCodeAt(0) && (L = L.trim()), se = L, L = [se], 0 < Oe) {
      var M = k(-1, E, L, L, Re, fe, 0, 0, 0, 0);
      M !== void 0 && typeof M == "string" && (E = M);
    }
    var m = t(lt, L, E, 0, 0);
    return 0 < Oe && (M = k(-2, m, L, L, Re, fe, m.length, 0, 0, 0), M !== void 0 && (m = M)), se = "", Ie = 0, fe = Re = 1, m;
  }
  var O = /^\0+/g, j = /[\0\r\f]/g, q = /: */g, _ = /zoo|gra/, w = /([,: ])(transform)/g, P = /,\r+?/g, V = /([\t\r\n ])*\f?&/g, $ = /@(k\w+)\s*(\S*)\s*/, Y = /::(place)/g, W = /:(read-only)/g, x = /[svh]\w+-[tblr]{2}/, ae = /\(\s*(.*)\s*\)/g, Se = /([\s\S]*?);/g, De = /-self|flex-/g, Fe = /[^]*?(:[rp][el]a[\w-]+)[^]*/, Xe = /stretch|:\s*\w+\-(?:conte|avail)/, de = /([^-])(image-set\()/, fe = 1, Re = 1, Ie = 0, Te = 1, lt = [], je = [], Oe = 0, He = null, rt = 0, se = "";
  return I.use = S, I.set = g, e !== void 0 && g(e), I;
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
var td = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, $o = /* @__PURE__ */ ed(
  function(e) {
    return td.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), $a = { exports: {} }, $e = {};
var Wo;
function rd() {
  if (Wo) return $e;
  Wo = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, i = e ? Symbol.for("react.fragment") : 60107, c = e ? Symbol.for("react.strict_mode") : 60108, u = e ? Symbol.for("react.profiler") : 60114, y = e ? Symbol.for("react.provider") : 60109, k = e ? Symbol.for("react.context") : 60110, S = e ? Symbol.for("react.async_mode") : 60111, g = e ? Symbol.for("react.concurrent_mode") : 60111, I = e ? Symbol.for("react.forward_ref") : 60112, O = e ? Symbol.for("react.suspense") : 60113, j = e ? Symbol.for("react.suspense_list") : 60120, q = e ? Symbol.for("react.memo") : 60115, _ = e ? Symbol.for("react.lazy") : 60116, w = e ? Symbol.for("react.block") : 60121, P = e ? Symbol.for("react.fundamental") : 60117, V = e ? Symbol.for("react.responder") : 60118, $ = e ? Symbol.for("react.scope") : 60119;
  function Y(x) {
    if (typeof x == "object" && x !== null) {
      var ae = x.$$typeof;
      switch (ae) {
        case t:
          switch (x = x.type, x) {
            case S:
            case g:
            case i:
            case u:
            case c:
            case O:
              return x;
            default:
              switch (x = x && x.$$typeof, x) {
                case k:
                case I:
                case _:
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
  function W(x) {
    return Y(x) === g;
  }
  return $e.AsyncMode = S, $e.ConcurrentMode = g, $e.ContextConsumer = k, $e.ContextProvider = y, $e.Element = t, $e.ForwardRef = I, $e.Fragment = i, $e.Lazy = _, $e.Memo = q, $e.Portal = r, $e.Profiler = u, $e.StrictMode = c, $e.Suspense = O, $e.isAsyncMode = function(x) {
    return W(x) || Y(x) === S;
  }, $e.isConcurrentMode = W, $e.isContextConsumer = function(x) {
    return Y(x) === k;
  }, $e.isContextProvider = function(x) {
    return Y(x) === y;
  }, $e.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === t;
  }, $e.isForwardRef = function(x) {
    return Y(x) === I;
  }, $e.isFragment = function(x) {
    return Y(x) === i;
  }, $e.isLazy = function(x) {
    return Y(x) === _;
  }, $e.isMemo = function(x) {
    return Y(x) === q;
  }, $e.isPortal = function(x) {
    return Y(x) === r;
  }, $e.isProfiler = function(x) {
    return Y(x) === u;
  }, $e.isStrictMode = function(x) {
    return Y(x) === c;
  }, $e.isSuspense = function(x) {
    return Y(x) === O;
  }, $e.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === i || x === g || x === u || x === c || x === O || x === j || typeof x == "object" && x !== null && (x.$$typeof === _ || x.$$typeof === q || x.$$typeof === y || x.$$typeof === k || x.$$typeof === I || x.$$typeof === P || x.$$typeof === V || x.$$typeof === $ || x.$$typeof === w);
  }, $e.typeOf = Y, $e;
}
var Bo;
function nd() {
  return Bo || (Bo = 1, $a.exports = rd()), $a.exports;
}
var Wa, Ho;
function ad() {
  if (Ho) return Wa;
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
  function y(_) {
    return e.isMemo(_) ? c : u[_.$$typeof] || t;
  }
  var k = Object.defineProperty, S = Object.getOwnPropertyNames, g = Object.getOwnPropertySymbols, I = Object.getOwnPropertyDescriptor, O = Object.getPrototypeOf, j = Object.prototype;
  function q(_, w, P) {
    if (typeof w != "string") {
      if (j) {
        var V = O(w);
        V && V !== j && q(_, V, P);
      }
      var $ = S(w);
      g && ($ = $.concat(g(w)));
      for (var Y = y(_), W = y(w), x = 0; x < $.length; ++x) {
        var ae = $[x];
        if (!r[ae] && !(P && P[ae]) && !(W && W[ae]) && !(Y && Y[ae])) {
          var Se = I(w, ae);
          try {
            k(_, ae, Se);
          } catch {
          }
        }
      }
    }
    return _;
  }
  return Wa = q, Wa;
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
}, na = Object.freeze([]), Sr = Object.freeze({});
function bn(e) {
  return typeof e == "function";
}
function Vo(e) {
  return e.displayName || e.name || "Component";
}
function hi(e) {
  return e && typeof e.styledComponentId == "string";
}
var Ur = typeof bt < "u" && bt.env !== void 0 && (bt.env.REACT_APP_SC_ATTR || bt.env.SC_ATTR) || "data-styled", mi = typeof window < "u" && "HTMLElement" in window, sd = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof bt < "u" && bt.env !== void 0 && (bt.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && bt.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? bt.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && bt.env.REACT_APP_SC_DISABLE_SPEEDY : bt.env.SC_DISABLE_SPEEDY !== void 0 && bt.env.SC_DISABLE_SPEEDY !== "" ? bt.env.SC_DISABLE_SPEEDY !== "false" && bt.env.SC_DISABLE_SPEEDY : bt.env.NODE_ENV !== "production"));
function kn(e) {
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
      for (var c = this.groupSizes, u = c.length, y = u; r >= y; ) (y <<= 1) < 0 && kn(16, "" + r);
      this.groupSizes = new Uint32Array(y), this.groupSizes.set(c), this.length = y;
      for (var k = u; k < y; k++) this.groupSizes[k] = 0;
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
    for (var c = this.groupSizes[r], u = this.indexOfGroup(r), y = u + c, k = u; k < y; k++) i += this.tag.getRule(k) + `/*!sc*/
`;
    return i;
  }, e;
}(), Kn = /* @__PURE__ */ new Map(), aa = /* @__PURE__ */ new Map(), mn = 1, qn = function(e) {
  if (Kn.has(e)) return Kn.get(e);
  for (; aa.has(mn); ) mn++;
  var t = mn++;
  return Kn.set(e, t), aa.set(t, e), t;
}, cd = function(e) {
  return aa.get(e);
}, ud = function(e, t) {
  t >= mn && (mn = t + 1), Kn.set(e, t), aa.set(t, e);
}, dd = "style[" + Ur + '][data-styled-version="5.3.11"]', fd = new RegExp("^" + Ur + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), pd = function(e, t, r) {
  for (var i, c = r.split(","), u = 0, y = c.length; u < y; u++) (i = c[u]) && e.registerName(t, i);
}, hd = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), i = [], c = 0, u = r.length; c < u; c++) {
    var y = r[c].trim();
    if (y) {
      var k = y.match(fd);
      if (k) {
        var S = 0 | parseInt(k[1], 10), g = k[2];
        S !== 0 && (ud(g, S), pd(e, g, k[3]), e.getTag().insertRules(S, i)), i.length = 0;
      } else i.push(y);
    }
  }
}, md = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, zs = function(e) {
  var t = document.head, r = e || t, i = document.createElement("style"), c = function(k) {
    for (var S = k.childNodes, g = S.length; g >= 0; g--) {
      var I = S[g];
      if (I && I.nodeType === 1 && I.hasAttribute(Ur)) return I;
    }
  }(r), u = c !== void 0 ? c.nextSibling : null;
  i.setAttribute(Ur, "active"), i.setAttribute("data-styled-version", "5.3.11");
  var y = md();
  return y && i.setAttribute("nonce", y), r.insertBefore(i, u), i;
}, gd = function() {
  function e(r) {
    var i = this.element = zs(r);
    i.appendChild(document.createTextNode("")), this.sheet = function(c) {
      if (c.sheet) return c.sheet;
      for (var u = document.styleSheets, y = 0, k = u.length; y < k; y++) {
        var S = u[y];
        if (S.ownerNode === c) return S;
      }
      kn(17);
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
    r === void 0 && (r = Sr), i === void 0 && (i = {}), this.options = hr({}, vd, {}, r), this.gs = i, this.names = new Map(c), this.server = !!r.isServer, !this.server && mi && Yo && (Yo = !1, function(u) {
      for (var y = document.querySelectorAll(dd), k = 0, S = y.length; k < S; k++) {
        var g = y[k];
        g && g.getAttribute(Ur) !== "active" && (hd(u, g), g.parentNode && g.parentNode.removeChild(g));
      }
    }(this));
  }
  e.registerId = function(r) {
    return qn(r);
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
    if (qn(r), this.names.has(r)) this.names.get(r).add(i);
    else {
      var c = /* @__PURE__ */ new Set();
      c.add(i), this.names.set(r, c);
    }
  }, t.insertRules = function(r, i, c) {
    this.registerName(r, i), this.getTag().insertRules(qn(r), c);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(qn(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var i = r.getTag(), c = i.length, u = "", y = 0; y < c; y++) {
        var k = cd(y);
        if (k !== void 0) {
          var S = r.names.get(k), g = i.getGroup(y);
          if (S && g && S.size) {
            var I = Ur + ".g" + y + '[id="' + k + '"]', O = "";
            S !== void 0 && S.forEach(function(j) {
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
var Fr = function(e, t) {
  for (var r = t.length; r; ) e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, $s = function(e) {
  return Fr(5381, e);
};
function Sd(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (bn(r) && !hi(r)) return !1;
  }
  return !0;
}
var kd = $s("5.3.11"), xd = function() {
  function e(t, r, i) {
    this.rules = t, this.staticRulesId = "", this.isStatic = (i === void 0 || i.isStatic) && Sd(t), this.componentId = r, this.baseHash = Fr(kd, r), this.baseStyle = i, Us.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, i) {
    var c = this.componentId, u = [];
    if (this.baseStyle && u.push(this.baseStyle.generateAndInjectStyles(t, r, i)), this.isStatic && !i.hash) if (this.staticRulesId && r.hasNameForId(c, this.staticRulesId)) u.push(this.staticRulesId);
    else {
      var y = $r(this.rules, t, r, i).join(""), k = ri(Fr(this.baseHash, y) >>> 0);
      if (!r.hasNameForId(c, k)) {
        var S = i(y, "." + k, void 0, c);
        r.insertRules(c, k, S);
      }
      u.push(k), this.staticRulesId = k;
    }
    else {
      for (var g = this.rules.length, I = Fr(this.baseHash, i.hash), O = "", j = 0; j < g; j++) {
        var q = this.rules[j];
        if (typeof q == "string") O += q;
        else if (q) {
          var _ = $r(q, t, r, i), w = Array.isArray(_) ? _.join("") : _;
          I = Fr(I, w + j), O += w;
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
}(), _d = /^\s*\/\/.*$/gm, Cd = [":", "[", ".", "#"];
function Td(e) {
  var t, r, i, c, u = Sr, y = u.options, k = y === void 0 ? Sr : y, S = u.plugins, g = S === void 0 ? na : S, I = new Ju(k), O = [], j = /* @__PURE__ */ function(w) {
    function P(V) {
      if (V) try {
        w(V + "}");
      } catch {
      }
    }
    return function(V, $, Y, W, x, ae, Se, De, Fe, Xe) {
      switch (V) {
        case 1:
          if (Fe === 0 && $.charCodeAt(0) === 64) return w($ + ";"), "";
          break;
        case 2:
          if (De === 0) return $ + "/*|*/";
          break;
        case 3:
          switch (De) {
            case 102:
            case 112:
              return w(Y[0] + $), "";
            default:
              return $ + (Xe === 0 ? "/*|*/" : "");
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
  function _(w, P, V, $) {
    $ === void 0 && ($ = "&");
    var Y = w.replace(_d, ""), W = P && V ? V + " " + P + " { " + Y + " }" : Y;
    return t = $, r = P, i = new RegExp("\\" + r + "\\b", "g"), c = new RegExp("(\\" + r + "\\b){2,}"), I(V || !P ? "" : P, W);
  }
  return I.use([].concat(g, [function(w, P, V) {
    w === 2 && V.length && V[0].lastIndexOf(r) > 0 && (V[0] = V[0].replace(i, q));
  }, j, function(w) {
    if (w === -2) {
      var P = O;
      return O = [], P;
    }
  }])), _.hash = g.length ? g.reduce(function(w, P) {
    return P.name || kn(15), Fr(w, P.name);
  }, 5381).toString() : "", _;
}
var Ws = pt.createContext();
Ws.Consumer;
var Bs = pt.createContext(), Ed = (Bs.Consumer, new Us()), ni = Td();
function Ad() {
  return xr(Ws) || Ed;
}
function Rd() {
  return xr(Bs) || ni;
}
var Od = function() {
  function e(t, r) {
    var i = this;
    this.inject = function(c, u) {
      u === void 0 && (u = ni);
      var y = i.name + u.hash;
      c.hasNameForId(i.id, y) || c.insertRules(i.id, y, u(i.rules, y, "@keyframes"));
    }, this.toString = function() {
      return kn(12, String(i.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = ni), this.name + t.hash;
  }, e;
}(), Id = /([A-Z])/, Nd = /([A-Z])/g, Dd = /^ms-/, Pd = function(e) {
  return "-" + e.toLowerCase();
};
function Xo(e) {
  return Id.test(e) ? e.replace(Nd, Pd).replace(Dd, "-ms-") : e;
}
var Zo = function(e) {
  return e == null || e === !1 || e === "";
};
function $r(e, t, r, i) {
  if (Array.isArray(e)) {
    for (var c, u = [], y = 0, k = e.length; y < k; y += 1) (c = $r(e[y], t, r, i)) !== "" && (Array.isArray(c) ? u.push.apply(u, c) : u.push(c));
    return u;
  }
  if (Zo(e)) return "";
  if (hi(e)) return "." + e.styledComponentId;
  if (bn(e)) {
    if (typeof (g = e) != "function" || g.prototype && g.prototype.isReactComponent || !t) return e;
    var S = e(t);
    return $r(S, t, r, i);
  }
  var g;
  return e instanceof Od ? r ? (e.inject(r, i), e.getName(i)) : e : ti(e) ? function I(O, j) {
    var q, _, w = [];
    for (var P in O) O.hasOwnProperty(P) && !Zo(O[P]) && (Array.isArray(O[P]) && O[P].isCss || bn(O[P]) ? w.push(Xo(P) + ":", O[P], ";") : ti(O[P]) ? w.push.apply(w, I(O[P], P)) : w.push(Xo(P) + ": " + (q = P, (_ = O[P]) == null || typeof _ == "boolean" || _ === "" ? "" : typeof _ != "number" || _ === 0 || q in Qu || q.startsWith("--") ? String(_).trim() : _ + "px") + ";"));
    return j ? [j + " {"].concat(w, ["}"]) : w;
  }(e) : e.toString();
}
var Ko = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Md(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
  return bn(e) || ti(e) ? Ko($r(qo(na, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Ko($r(qo(e, r)));
}
var Ld = function(e, t, r) {
  return r === void 0 && (r = Sr), e.theme !== r.theme && e.theme || t || r.theme;
}, Fd = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, jd = /(^-|-$)/g;
function Ba(e) {
  return e.replace(Fd, "-").replace(jd, "");
}
var zd = function(e) {
  return ri($s(e) >>> 0);
};
function Vn(e) {
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
    if (ai(y)) for (var k in y) Ud(k) && $d(e, y[k], k);
  }
  return e;
}
var qs = pt.createContext();
qs.Consumer;
var Ha = {};
function Vs(e, t, r) {
  var i = hi(e), c = !Vn(e), u = t.attrs, y = u === void 0 ? na : u, k = t.componentId, S = k === void 0 ? function($, Y) {
    var W = typeof $ != "string" ? "sc" : Ba($);
    Ha[W] = (Ha[W] || 0) + 1;
    var x = W + "-" + zd("5.3.11" + W + Ha[W]);
    return Y ? Y + "-" + x : x;
  }(t.displayName, t.parentComponentId) : k, g = t.displayName, I = g === void 0 ? function($) {
    return Vn($) ? "styled." + $ : "Styled(" + Vo($) + ")";
  }(e) : g, O = t.displayName && t.componentId ? Ba(t.displayName) + "-" + t.componentId : t.componentId || S, j = i && e.attrs ? Array.prototype.concat(e.attrs, y).filter(Boolean) : y, q = t.shouldForwardProp;
  i && e.shouldForwardProp && (q = t.shouldForwardProp ? function($, Y, W) {
    return e.shouldForwardProp($, Y, W) && t.shouldForwardProp($, Y, W);
  } : e.shouldForwardProp);
  var _, w = new xd(r, O, i ? e.componentStyle : void 0), P = w.isStatic && y.length === 0, V = function($, Y) {
    return function(W, x, ae, Se) {
      var De = W.attrs, Fe = W.componentStyle, Xe = W.defaultProps, de = W.foldedComponentIds, fe = W.shouldForwardProp, Re = W.styledComponentId, Ie = W.target, Te = function(M, m, ee) {
        M === void 0 && (M = Sr);
        var T = hr({}, m, { theme: M }), ie = {};
        return ee.forEach(function(Q) {
          var te, G, ne, ce = Q;
          for (te in bn(ce) && (ce = ce(T)), ce) T[te] = ie[te] = te === "className" ? (G = ie[te], ne = ce[te], G && ne ? G + " " + ne : G || ne) : ce[te];
        }), [T, ie];
      }(Ld(x, xr(qs), Xe) || Sr, x, De), lt = Te[0], je = Te[1], Oe = function(M, m, ee, T) {
        var ie = Ad(), Q = Rd(), te = m ? M.generateAndInjectStyles(Sr, ie, Q) : M.generateAndInjectStyles(ee, ie, Q);
        return te;
      }(Fe, Se, lt), He = ae, rt = je.$as || x.$as || je.as || x.as || Ie, se = Vn(rt), F = je !== x ? hr({}, x, {}, je) : x, E = {};
      for (var L in F) L[0] !== "$" && L !== "as" && (L === "forwardedAs" ? E.as = F[L] : (fe ? fe(L, $o, rt) : !se || $o(L)) && (E[L] = F[L]));
      return x.style && je.style !== x.style && (E.style = hr({}, x.style, {}, je.style)), E.className = Array.prototype.concat(de, Re, Oe !== Re ? Oe : null, x.className, je.className).filter(Boolean).join(" "), E.ref = He, Qo(rt, E);
    }(_, $, Y, P);
  };
  return V.displayName = I, (_ = pt.forwardRef(V)).attrs = j, _.componentStyle = w, _.displayName = I, _.shouldForwardProp = q, _.foldedComponentIds = i ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : na, _.styledComponentId = O, _.target = i ? e.target : e, _.withComponent = function($) {
    var Y = t.componentId, W = function(ae, Se) {
      if (ae == null) return {};
      var De, Fe, Xe = {}, de = Object.keys(ae);
      for (Fe = 0; Fe < de.length; Fe++) De = de[Fe], Se.indexOf(De) >= 0 || (Xe[De] = ae[De]);
      return Xe;
    }(t, ["componentId"]), x = Y && Y + "-" + (Vn($) ? $ : Ba(Vo($)));
    return Vs($, hr({}, W, { attrs: j, componentId: x }), r);
  }, Object.defineProperty(_, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function($) {
    this._foldedDefaultProps = i ? Hs({}, e.defaultProps, $) : $;
  } }), Object.defineProperty(_, "toString", { value: function() {
    return "." + _.styledComponentId;
  } }), c && od(_, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), _;
}
var ia = function(e) {
  return function t(r, i, c) {
    if (c === void 0 && (c = Sr), !js.isValidElementType(i)) return kn(1, String(i));
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
const Wd = ia.ul`
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
  const { feeds: e } = xr(ui);
  return /* @__PURE__ */ ft.jsx(Wd, { "data-testid": "grid-view-container", children: e == null ? void 0 : e.map((t) => /* @__PURE__ */ ft.jsx("li", { children: /* @__PURE__ */ ft.jsx(
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
}, Ys = ({ header: e, ctaButton: t, dataSource: r, maxItems: i }) => (gn(() => {
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
/* @__PURE__ */ ft.jsx(pi, { header: e, ctaButton: t, dataSource: r, maxItems: i, children: /* @__PURE__ */ ft.jsx(Bd, {}) }));
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
  const { feeds: e } = xr(ui);
  return /* @__PURE__ */ ft.jsx(Hd, { "data-testid": "list-view-container", children: e == null ? void 0 : e.map((t) => /* @__PURE__ */ ft.jsx("li", { children: /* @__PURE__ */ ft.jsx(
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
}, Gs = ({ header: e, ctaButton: t, dataSource: r, maxItems: i }) => (gn(() => {
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
/* @__PURE__ */ ft.jsx(pi, { header: e, ctaButton: t, dataSource: r, maxItems: i, children: /* @__PURE__ */ ft.jsx(qd, {}) }));
Gs.propTypes = Ls;
var Yn = {}, Jo;
function Vd() {
  if (Jo) return Yn;
  Jo = 1;
  var e = es;
  return Yn.createRoot = e.createRoot, Yn.hydrateRoot = e.hydrateRoot, Yn;
}
var Yd = Vd();
const Xs = (e, t, r) => {
  Yd.createRoot(r).render(pt.createElement(e, t));
}, Zd = ({ targetSelector: e, props: t }) => {
  Xs(Ys, t, document.querySelector(e));
}, Kd = ({ targetSelector: e, props: t }) => {
  Xs(Gs, t, document.querySelector(e));
};
export {
  Ys as CardsGridEvents,
  Gs as CardsListEvents,
  Zd as initCardsGridEventsComponent,
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
/*! @license DOMPurify 3.4.0 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.0/LICENSE */
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
