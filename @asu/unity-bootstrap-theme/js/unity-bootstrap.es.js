import * as Zt from "chart.js";
const Cn = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, On = /[^.]*(?=\..*)\.|.*/, Rn = /\..*/, Dn = /::\d+$/, Jt = {};
let xe = 1;
const je = {
  mouseenter: "mouseover",
  mouseleave: "mouseout"
}, Nn = /* @__PURE__ */ new Set([
  "click",
  "dblclick",
  "mouseup",
  "mousedown",
  "contextmenu",
  "mousewheel",
  "DOMMouseScroll",
  "mouseover",
  "mouseout",
  "mousemove",
  "selectstart",
  "selectend",
  "keydown",
  "keypress",
  "keyup",
  "orientationchange",
  "touchstart",
  "touchmove",
  "touchend",
  "touchcancel",
  "pointerdown",
  "pointermove",
  "pointerup",
  "pointerleave",
  "pointercancel",
  "gesturestart",
  "gesturechange",
  "gestureend",
  "focus",
  "blur",
  "change",
  "reset",
  "select",
  "submit",
  "focusin",
  "focusout",
  "load",
  "unload",
  "beforeunload",
  "resize",
  "move",
  "DOMContentLoaded",
  "readystatechange",
  "error",
  "abort",
  "scroll"
]);
function $e(o, e) {
  return e && `${e}::${xe++}` || o.uidEvent || xe++;
}
function Xe(o) {
  const e = $e(o);
  return o.uidEvent = e, Jt[e] = Jt[e] || {}, Jt[e];
}
function In(o, e) {
  return function a(r) {
    return ue(r, { delegateTarget: o }), a.oneOff && M.off(o, r.type, e), e.apply(o, [r]);
  };
}
function xn(o, e, a) {
  return function r(c) {
    const i = o.querySelectorAll(e);
    for (let { target: s } = c; s && s !== this; s = s.parentNode)
      for (const u of i)
        if (u === s)
          return ue(c, { delegateTarget: s }), r.oneOff && M.off(o, c.type, e, a), a.apply(s, [c]);
  };
}
function Ke(o, e, a = null) {
  return Object.values(o).find((r) => r.callable === e && r.delegationSelector === a);
}
function Qe(o, e, a) {
  const r = typeof e == "string", c = r ? a : e || a;
  let i = Ze(o);
  return Nn.has(i) || (i = o), [r, c, i];
}
function Me(o, e, a, r, c) {
  if (typeof e != "string" || !o)
    return;
  let [i, s, u] = Qe(e, a, r);
  e in je && (s = ((L) => function(S) {
    if (!S.relatedTarget || S.relatedTarget !== S.delegateTarget && !S.delegateTarget.contains(S.relatedTarget))
      return L.call(this, S);
  })(s));
  const d = Xe(o), p = d[u] || (d[u] = {}), m = Ke(p, s, i ? a : null);
  if (m) {
    m.oneOff = m.oneOff && c;
    return;
  }
  const y = $e(s, e.replace(On, "")), _ = i ? xn(o, a, s) : In(o, s);
  _.delegationSelector = i ? a : null, _.callable = s, _.oneOff = c, _.uidEvent = y, p[y] = _, o.addEventListener(u, _, i);
}
function se(o, e, a, r, c) {
  const i = Ke(e[a], r, c);
  i && (o.removeEventListener(a, i, !!c), delete e[a][i.uidEvent]);
}
function Mn(o, e, a, r) {
  const c = e[a] || {};
  for (const [i, s] of Object.entries(c))
    i.includes(r) && se(o, e, a, s.callable, s.delegationSelector);
}
function Ze(o) {
  return o = o.replace(Rn, ""), je[o] || o;
}
const M = {
  on(o, e, a, r) {
    Me(o, e, a, r, !1);
  },
  one(o, e, a, r) {
    Me(o, e, a, r, !0);
  },
  off(o, e, a, r) {
    if (typeof e != "string" || !o)
      return;
    const [c, i, s] = Qe(e, a, r), u = s !== e, d = Xe(o), p = d[s] || {}, m = e.startsWith(".");
    if (typeof i < "u") {
      if (!Object.keys(p).length)
        return;
      se(o, d, s, i, c ? a : null);
      return;
    }
    if (m)
      for (const y of Object.keys(d))
        Mn(o, d, y, e.slice(1));
    for (const [y, _] of Object.entries(p)) {
      const E = y.replace(Dn, "");
      (!u || e.includes(E)) && se(o, d, s, _.callable, _.delegationSelector);
    }
  },
  trigger(o, e, a) {
    if (typeof e != "string" || !o)
      return null;
    const r = Cn(), c = Ze(e), i = e !== c;
    let s = null, u = !0, d = !0, p = !1;
    i && r && (s = r.Event(e, a), r(o).trigger(s), u = !s.isPropagationStopped(), d = !s.isImmediatePropagationStopped(), p = s.isDefaultPrevented());
    const m = ue(new Event(e, { bubbles: u, cancelable: !0 }), a);
    return p && m.preventDefault(), d && o.dispatchEvent(m), m.defaultPrevented && s && s.preventDefault(), m;
  }
};
function ue(o, e = {}) {
  for (const [a, r] of Object.entries(e))
    try {
      o[a] = r;
    } catch {
      Object.defineProperty(o, a, {
        configurable: !0,
        get() {
          return r;
        }
      });
    }
  return o;
}
function kn(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var w = {}, ke;
function Pn() {
  if (ke) return w;
  ke = 1;
  /**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var o = Symbol.for("react.element"), e = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), p = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), y = Symbol.iterator;
  function _(n) {
    return n === null || typeof n != "object" ? null : (n = y && n[y] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var E = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, L = Object.assign, S = {};
  function T(n, f, A) {
    this.props = n, this.context = f, this.refs = S, this.updater = A || E;
  }
  T.prototype.isReactComponent = {}, T.prototype.setState = function(n, f) {
    if (typeof n != "object" && typeof n != "function" && n != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, n, f, "setState");
  }, T.prototype.forceUpdate = function(n) {
    this.updater.enqueueForceUpdate(this, n, "forceUpdate");
  };
  function O() {
  }
  O.prototype = T.prototype;
  function et(n, f, A) {
    this.props = n, this.context = f, this.refs = S, this.updater = A || E;
  }
  var $ = et.prototype = new O();
  $.constructor = et, L($, T.prototype), $.isPureReactComponent = !0;
  var R = Array.isArray, nt = Object.prototype.hasOwnProperty, D = { current: null }, U = { key: !0, ref: !0, __self: !0, __source: !0 };
  function H(n, f, A) {
    var N, b = {}, x = null, F = null;
    if (f != null) for (N in f.ref !== void 0 && (F = f.ref), f.key !== void 0 && (x = "" + f.key), f) nt.call(f, N) && !U.hasOwnProperty(N) && (b[N] = f[N]);
    var B = arguments.length - 2;
    if (B === 1) b.children = A;
    else if (1 < B) {
      for (var k = Array(B), rt = 0; rt < B; rt++) k[rt] = arguments[rt + 2];
      b.children = k;
    }
    if (n && n.defaultProps) for (N in B = n.defaultProps, B) b[N] === void 0 && (b[N] = B[N]);
    return { $$typeof: o, type: n, key: x, ref: F, props: b, _owner: D.current };
  }
  function I(n, f) {
    return { $$typeof: o, type: n.type, key: f, ref: n.ref, props: n.props, _owner: n._owner };
  }
  function W(n) {
    return typeof n == "object" && n !== null && n.$$typeof === o;
  }
  function C(n) {
    var f = { "=": "=0", ":": "=2" };
    return "$" + n.replace(/[=:]/g, function(A) {
      return f[A];
    });
  }
  var z = /\/+/g;
  function q(n, f) {
    return typeof n == "object" && n !== null && n.key != null ? C("" + n.key) : f.toString(36);
  }
  function X(n, f, A, N, b) {
    var x = typeof n;
    (x === "undefined" || x === "boolean") && (n = null);
    var F = !1;
    if (n === null) F = !0;
    else switch (x) {
      case "string":
      case "number":
        F = !0;
        break;
      case "object":
        switch (n.$$typeof) {
          case o:
          case e:
            F = !0;
        }
    }
    if (F) return F = n, b = b(F), n = N === "" ? "." + q(F, 0) : N, R(b) ? (A = "", n != null && (A = n.replace(z, "$&/") + "/"), X(b, f, A, "", function(rt) {
      return rt;
    })) : b != null && (W(b) && (b = I(b, A + (!b.key || F && F.key === b.key ? "" : ("" + b.key).replace(z, "$&/") + "/") + n)), f.push(b)), 1;
    if (F = 0, N = N === "" ? "." : N + ":", R(n)) for (var B = 0; B < n.length; B++) {
      x = n[B];
      var k = N + q(x, B);
      F += X(x, f, A, k, b);
    }
    else if (k = _(n), typeof k == "function") for (n = k.call(n), B = 0; !(x = n.next()).done; ) x = x.value, k = N + q(x, B++), F += X(x, f, A, k, b);
    else if (x === "object") throw f = String(n), Error("Objects are not valid as a React child (found: " + (f === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : f) + "). If you meant to render a collection of children, use an array instead.");
    return F;
  }
  function ot(n, f, A) {
    if (n == null) return n;
    var N = [], b = 0;
    return X(n, N, "", "", function(x) {
      return f.call(A, x, b++);
    }), N;
  }
  function Nt(n) {
    if (n._status === -1) {
      var f = n._result;
      f = f(), f.then(function(A) {
        (n._status === 0 || n._status === -1) && (n._status = 1, n._result = A);
      }, function(A) {
        (n._status === 0 || n._status === -1) && (n._status = 2, n._result = A);
      }), n._status === -1 && (n._status = 0, n._result = f);
    }
    if (n._status === 1) return n._result.default;
    throw n._result;
  }
  var G = { current: null }, dt = { transition: null }, zt = { ReactCurrentDispatcher: G, ReactCurrentBatchConfig: dt, ReactCurrentOwner: D };
  function At() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return w.Children = { map: ot, forEach: function(n, f, A) {
    ot(n, function() {
      f.apply(this, arguments);
    }, A);
  }, count: function(n) {
    var f = 0;
    return ot(n, function() {
      f++;
    }), f;
  }, toArray: function(n) {
    return ot(n, function(f) {
      return f;
    }) || [];
  }, only: function(n) {
    if (!W(n)) throw Error("React.Children.only expected to receive a single React element child.");
    return n;
  } }, w.Component = T, w.Fragment = a, w.Profiler = c, w.PureComponent = et, w.StrictMode = r, w.Suspense = d, w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zt, w.act = At, w.cloneElement = function(n, f, A) {
    if (n == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + n + ".");
    var N = L({}, n.props), b = n.key, x = n.ref, F = n._owner;
    if (f != null) {
      if (f.ref !== void 0 && (x = f.ref, F = D.current), f.key !== void 0 && (b = "" + f.key), n.type && n.type.defaultProps) var B = n.type.defaultProps;
      for (k in f) nt.call(f, k) && !U.hasOwnProperty(k) && (N[k] = f[k] === void 0 && B !== void 0 ? B[k] : f[k]);
    }
    var k = arguments.length - 2;
    if (k === 1) N.children = A;
    else if (1 < k) {
      B = Array(k);
      for (var rt = 0; rt < k; rt++) B[rt] = arguments[rt + 2];
      N.children = B;
    }
    return { $$typeof: o, type: n.type, key: b, ref: x, props: N, _owner: F };
  }, w.createContext = function(n) {
    return n = { $$typeof: s, _currentValue: n, _currentValue2: n, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, n.Provider = { $$typeof: i, _context: n }, n.Consumer = n;
  }, w.createElement = H, w.createFactory = function(n) {
    var f = H.bind(null, n);
    return f.type = n, f;
  }, w.createRef = function() {
    return { current: null };
  }, w.forwardRef = function(n) {
    return { $$typeof: u, render: n };
  }, w.isValidElement = W, w.lazy = function(n) {
    return { $$typeof: m, _payload: { _status: -1, _result: n }, _init: Nt };
  }, w.memo = function(n, f) {
    return { $$typeof: p, type: n, compare: f === void 0 ? null : f };
  }, w.startTransition = function(n) {
    var f = dt.transition;
    dt.transition = {};
    try {
      n();
    } finally {
      dt.transition = f;
    }
  }, w.unstable_act = At, w.useCallback = function(n, f) {
    return G.current.useCallback(n, f);
  }, w.useContext = function(n) {
    return G.current.useContext(n);
  }, w.useDebugValue = function() {
  }, w.useDeferredValue = function(n) {
    return G.current.useDeferredValue(n);
  }, w.useEffect = function(n, f) {
    return G.current.useEffect(n, f);
  }, w.useId = function() {
    return G.current.useId();
  }, w.useImperativeHandle = function(n, f, A) {
    return G.current.useImperativeHandle(n, f, A);
  }, w.useInsertionEffect = function(n, f) {
    return G.current.useInsertionEffect(n, f);
  }, w.useLayoutEffect = function(n, f) {
    return G.current.useLayoutEffect(n, f);
  }, w.useMemo = function(n, f) {
    return G.current.useMemo(n, f);
  }, w.useReducer = function(n, f, A) {
    return G.current.useReducer(n, f, A);
  }, w.useRef = function(n) {
    return G.current.useRef(n);
  }, w.useState = function(n) {
    return G.current.useState(n);
  }, w.useSyncExternalStore = function(n, f, A) {
    return G.current.useSyncExternalStore(n, f, A);
  }, w.useTransition = function() {
    return G.current.useTransition();
  }, w.version = "18.3.1", w;
}
Pn();
/*! @license DOMPurify 3.2.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.5/LICENSE */
const {
  entries: Je,
  setPrototypeOf: Pe,
  isFrozen: Hn,
  getPrototypeOf: Fn,
  getOwnPropertyDescriptor: Bn
} = Object;
let {
  freeze: J,
  seal: it,
  create: tn
} = Object, {
  apply: ce,
  construct: le
} = typeof Reflect < "u" && Reflect;
J || (J = function(e) {
  return e;
});
it || (it = function(e) {
  return e;
});
ce || (ce = function(e, a, r) {
  return e.apply(a, r);
});
le || (le = function(e, a) {
  return new e(...a);
});
const Bt = tt(Array.prototype.forEach), Un = tt(Array.prototype.lastIndexOf), He = tt(Array.prototype.pop), vt = tt(Array.prototype.push), Wn = tt(Array.prototype.splice), Wt = tt(String.prototype.toLowerCase), te = tt(String.prototype.toString), Fe = tt(String.prototype.match), Lt = tt(String.prototype.replace), zn = tt(String.prototype.indexOf), qn = tt(String.prototype.trim), st = tt(Object.prototype.hasOwnProperty), Q = tt(RegExp.prototype.test), Ct = Gn(TypeError);
function tt(o) {
  return function(e) {
    e instanceof RegExp && (e.lastIndex = 0);
    for (var a = arguments.length, r = new Array(a > 1 ? a - 1 : 0), c = 1; c < a; c++)
      r[c - 1] = arguments[c];
    return ce(o, e, r);
  };
}
function Gn(o) {
  return function() {
    for (var e = arguments.length, a = new Array(e), r = 0; r < e; r++)
      a[r] = arguments[r];
    return le(o, a);
  };
}
function v(o, e) {
  let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Wt;
  Pe && Pe(o, null);
  let r = e.length;
  for (; r--; ) {
    let c = e[r];
    if (typeof c == "string") {
      const i = a(c);
      i !== c && (Hn(e) || (e[r] = i), c = i);
    }
    o[c] = !0;
  }
  return o;
}
function Vn(o) {
  for (let e = 0; e < o.length; e++)
    st(o, e) || (o[e] = null);
  return o;
}
function mt(o) {
  const e = tn(null);
  for (const [a, r] of Je(o))
    st(o, a) && (Array.isArray(r) ? e[a] = Vn(r) : r && typeof r == "object" && r.constructor === Object ? e[a] = mt(r) : e[a] = r);
  return e;
}
function Ot(o, e) {
  for (; o !== null; ) {
    const r = Bn(o, e);
    if (r) {
      if (r.get)
        return tt(r.get);
      if (typeof r.value == "function")
        return tt(r.value);
    }
    o = Fn(o);
  }
  function a() {
    return null;
  }
  return a;
}
const Be = J(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ee = J(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ne = J(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), Yn = J(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), oe = J(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), jn = J(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Ue = J(["#text"]), We = J(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), re = J(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), ze = J(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Ut = J(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), $n = it(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Xn = it(/<%[\w\W]*|[\w\W]*%>/gm), Kn = it(/\$\{[\w\W]*/gm), Qn = it(/^data-[\-\w.\u00B7-\uFFFF]+$/), Zn = it(/^aria-[\-\w]+$/), en = it(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), Jn = it(/^(?:\w+script|data):/i), to = it(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), nn = it(/^html$/i), eo = it(/^[a-z][.\w]*(-[.\w]+)+$/i);
var qe = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: Zn,
  ATTR_WHITESPACE: to,
  CUSTOM_ELEMENT: eo,
  DATA_ATTR: Qn,
  DOCTYPE_NAME: nn,
  ERB_EXPR: Xn,
  IS_ALLOWED_URI: en,
  IS_SCRIPT_OR_DATA: Jn,
  MUSTACHE_EXPR: $n,
  TMPLIT_EXPR: Kn
});
const Rt = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, no = function() {
  return typeof window > "u" ? null : window;
}, oo = function(e, a) {
  if (typeof e != "object" || typeof e.createPolicy != "function")
    return null;
  let r = null;
  const c = "data-tt-policy-suffix";
  a && a.hasAttribute(c) && (r = a.getAttribute(c));
  const i = "dompurify" + (r ? "#" + r : "");
  try {
    return e.createPolicy(i, {
      createHTML(s) {
        return s;
      },
      createScriptURL(s) {
        return s;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + i + " could not be created."), null;
  }
}, Ge = function() {
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
function on() {
  let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : no();
  const e = (h) => on(h);
  if (e.version = "3.2.5", e.removed = [], !o || !o.document || o.document.nodeType !== Rt.document || !o.Element)
    return e.isSupported = !1, e;
  let {
    document: a
  } = o;
  const r = a, c = r.currentScript, {
    DocumentFragment: i,
    HTMLTemplateElement: s,
    Node: u,
    Element: d,
    NodeFilter: p,
    NamedNodeMap: m = o.NamedNodeMap || o.MozNamedAttrMap,
    HTMLFormElement: y,
    DOMParser: _,
    trustedTypes: E
  } = o, L = d.prototype, S = Ot(L, "cloneNode"), T = Ot(L, "remove"), O = Ot(L, "nextSibling"), et = Ot(L, "childNodes"), $ = Ot(L, "parentNode");
  if (typeof s == "function") {
    const h = a.createElement("template");
    h.content && h.content.ownerDocument && (a = h.content.ownerDocument);
  }
  let R, nt = "";
  const {
    implementation: D,
    createNodeIterator: U,
    createDocumentFragment: H,
    getElementsByTagName: I
  } = a, {
    importNode: W
  } = r;
  let C = Ge();
  e.isSupported = typeof Je == "function" && typeof $ == "function" && D && D.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: z,
    ERB_EXPR: q,
    TMPLIT_EXPR: X,
    DATA_ATTR: ot,
    ARIA_ATTR: Nt,
    IS_SCRIPT_OR_DATA: G,
    ATTR_WHITESPACE: dt,
    CUSTOM_ELEMENT: zt
  } = qe;
  let {
    IS_ALLOWED_URI: At
  } = qe, n = null;
  const f = v({}, [...Be, ...ee, ...ne, ...oe, ...Ue]);
  let A = null;
  const N = v({}, [...We, ...re, ...ze, ...Ut]);
  let b = Object.seal(tn(null, {
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
  })), x = null, F = null, B = !0, k = !0, rt = !1, me = !0, gt = !1, qt = !0, pt = !1, Gt = !1, Vt = !1, ht = !1, It = !1, xt = !1, ge = !0, he = !1;
  const _n = "user-content-";
  let Yt = !0, bt = !1, yt = {}, Et = null;
  const ye = v({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let Ee = null;
  const _e = v({}, ["audio", "video", "img", "source", "image", "track"]);
  let jt = null;
  const Te = v({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Mt = "http://www.w3.org/1998/Math/MathML", kt = "http://www.w3.org/2000/svg", ut = "http://www.w3.org/1999/xhtml";
  let _t = ut, $t = !1, Xt = null;
  const Tn = v({}, [Mt, kt, ut], te);
  let Pt = v({}, ["mi", "mo", "mn", "ms", "mtext"]), Ht = v({}, ["annotation-xml"]);
  const An = v({}, ["title", "style", "font", "a", "script"]);
  let St = null;
  const bn = ["application/xhtml+xml", "text/html"], Sn = "text/html";
  let V = null, Tt = null;
  const wn = a.createElement("form"), Ae = function(t) {
    return t instanceof RegExp || t instanceof Function;
  }, Kt = function() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(Tt && Tt === t)) {
      if ((!t || typeof t != "object") && (t = {}), t = mt(t), St = // eslint-disable-next-line unicorn/prefer-includes
      bn.indexOf(t.PARSER_MEDIA_TYPE) === -1 ? Sn : t.PARSER_MEDIA_TYPE, V = St === "application/xhtml+xml" ? te : Wt, n = st(t, "ALLOWED_TAGS") ? v({}, t.ALLOWED_TAGS, V) : f, A = st(t, "ALLOWED_ATTR") ? v({}, t.ALLOWED_ATTR, V) : N, Xt = st(t, "ALLOWED_NAMESPACES") ? v({}, t.ALLOWED_NAMESPACES, te) : Tn, jt = st(t, "ADD_URI_SAFE_ATTR") ? v(mt(Te), t.ADD_URI_SAFE_ATTR, V) : Te, Ee = st(t, "ADD_DATA_URI_TAGS") ? v(mt(_e), t.ADD_DATA_URI_TAGS, V) : _e, Et = st(t, "FORBID_CONTENTS") ? v({}, t.FORBID_CONTENTS, V) : ye, x = st(t, "FORBID_TAGS") ? v({}, t.FORBID_TAGS, V) : {}, F = st(t, "FORBID_ATTR") ? v({}, t.FORBID_ATTR, V) : {}, yt = st(t, "USE_PROFILES") ? t.USE_PROFILES : !1, B = t.ALLOW_ARIA_ATTR !== !1, k = t.ALLOW_DATA_ATTR !== !1, rt = t.ALLOW_UNKNOWN_PROTOCOLS || !1, me = t.ALLOW_SELF_CLOSE_IN_ATTR !== !1, gt = t.SAFE_FOR_TEMPLATES || !1, qt = t.SAFE_FOR_XML !== !1, pt = t.WHOLE_DOCUMENT || !1, ht = t.RETURN_DOM || !1, It = t.RETURN_DOM_FRAGMENT || !1, xt = t.RETURN_TRUSTED_TYPE || !1, Vt = t.FORCE_BODY || !1, ge = t.SANITIZE_DOM !== !1, he = t.SANITIZE_NAMED_PROPS || !1, Yt = t.KEEP_CONTENT !== !1, bt = t.IN_PLACE || !1, At = t.ALLOWED_URI_REGEXP || en, _t = t.NAMESPACE || ut, Pt = t.MATHML_TEXT_INTEGRATION_POINTS || Pt, Ht = t.HTML_INTEGRATION_POINTS || Ht, b = t.CUSTOM_ELEMENT_HANDLING || {}, t.CUSTOM_ELEMENT_HANDLING && Ae(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (b.tagNameCheck = t.CUSTOM_ELEMENT_HANDLING.tagNameCheck), t.CUSTOM_ELEMENT_HANDLING && Ae(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (b.attributeNameCheck = t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), t.CUSTOM_ELEMENT_HANDLING && typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (b.allowCustomizedBuiltInElements = t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), gt && (k = !1), It && (ht = !0), yt && (n = v({}, Ue), A = [], yt.html === !0 && (v(n, Be), v(A, We)), yt.svg === !0 && (v(n, ee), v(A, re), v(A, Ut)), yt.svgFilters === !0 && (v(n, ne), v(A, re), v(A, Ut)), yt.mathMl === !0 && (v(n, oe), v(A, ze), v(A, Ut))), t.ADD_TAGS && (n === f && (n = mt(n)), v(n, t.ADD_TAGS, V)), t.ADD_ATTR && (A === N && (A = mt(A)), v(A, t.ADD_ATTR, V)), t.ADD_URI_SAFE_ATTR && v(jt, t.ADD_URI_SAFE_ATTR, V), t.FORBID_CONTENTS && (Et === ye && (Et = mt(Et)), v(Et, t.FORBID_CONTENTS, V)), Yt && (n["#text"] = !0), pt && v(n, ["html", "head", "body"]), n.table && (v(n, ["tbody"]), delete x.tbody), t.TRUSTED_TYPES_POLICY) {
        if (typeof t.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Ct('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof t.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Ct('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        R = t.TRUSTED_TYPES_POLICY, nt = R.createHTML("");
      } else
        R === void 0 && (R = oo(E, c)), R !== null && typeof nt == "string" && (nt = R.createHTML(""));
      J && J(t), Tt = t;
    }
  }, be = v({}, [...ee, ...ne, ...Yn]), Se = v({}, [...oe, ...jn]), vn = function(t) {
    let l = $(t);
    (!l || !l.tagName) && (l = {
      namespaceURI: _t,
      tagName: "template"
    });
    const g = Wt(t.tagName), P = Wt(l.tagName);
    return Xt[t.namespaceURI] ? t.namespaceURI === kt ? l.namespaceURI === ut ? g === "svg" : l.namespaceURI === Mt ? g === "svg" && (P === "annotation-xml" || Pt[P]) : !!be[g] : t.namespaceURI === Mt ? l.namespaceURI === ut ? g === "math" : l.namespaceURI === kt ? g === "math" && Ht[P] : !!Se[g] : t.namespaceURI === ut ? l.namespaceURI === kt && !Ht[P] || l.namespaceURI === Mt && !Pt[P] ? !1 : !Se[g] && (An[g] || !be[g]) : !!(St === "application/xhtml+xml" && Xt[t.namespaceURI]) : !1;
  }, ct = function(t) {
    vt(e.removed, {
      element: t
    });
    try {
      $(t).removeChild(t);
    } catch {
      T(t);
    }
  }, Ft = function(t, l) {
    try {
      vt(e.removed, {
        attribute: l.getAttributeNode(t),
        from: l
      });
    } catch {
      vt(e.removed, {
        attribute: null,
        from: l
      });
    }
    if (l.removeAttribute(t), t === "is")
      if (ht || It)
        try {
          ct(l);
        } catch {
        }
      else
        try {
          l.setAttribute(t, "");
        } catch {
        }
  }, we = function(t) {
    let l = null, g = null;
    if (Vt)
      t = "<remove></remove>" + t;
    else {
      const Y = Fe(t, /^[\r\n\t ]+/);
      g = Y && Y[0];
    }
    St === "application/xhtml+xml" && _t === ut && (t = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + t + "</body></html>");
    const P = R ? R.createHTML(t) : t;
    if (_t === ut)
      try {
        l = new _().parseFromString(P, St);
      } catch {
      }
    if (!l || !l.documentElement) {
      l = D.createDocument(_t, "template", null);
      try {
        l.documentElement.innerHTML = $t ? nt : P;
      } catch {
      }
    }
    const j = l.body || l.documentElement;
    return t && g && j.insertBefore(a.createTextNode(g), j.childNodes[0] || null), _t === ut ? I.call(l, pt ? "html" : "body")[0] : pt ? l.documentElement : j;
  }, ve = function(t) {
    return U.call(
      t.ownerDocument || t,
      t,
      // eslint-disable-next-line no-bitwise
      p.SHOW_ELEMENT | p.SHOW_COMMENT | p.SHOW_TEXT | p.SHOW_PROCESSING_INSTRUCTION | p.SHOW_CDATA_SECTION,
      null
    );
  }, Qt = function(t) {
    return t instanceof y && (typeof t.nodeName != "string" || typeof t.textContent != "string" || typeof t.removeChild != "function" || !(t.attributes instanceof m) || typeof t.removeAttribute != "function" || typeof t.setAttribute != "function" || typeof t.namespaceURI != "string" || typeof t.insertBefore != "function" || typeof t.hasChildNodes != "function");
  }, Le = function(t) {
    return typeof u == "function" && t instanceof u;
  };
  function ft(h, t, l) {
    Bt(h, (g) => {
      g.call(e, t, l, Tt);
    });
  }
  const Ce = function(t) {
    let l = null;
    if (ft(C.beforeSanitizeElements, t, null), Qt(t))
      return ct(t), !0;
    const g = V(t.nodeName);
    if (ft(C.uponSanitizeElement, t, {
      tagName: g,
      allowedTags: n
    }), t.hasChildNodes() && !Le(t.firstElementChild) && Q(/<[/\w!]/g, t.innerHTML) && Q(/<[/\w!]/g, t.textContent) || t.nodeType === Rt.progressingInstruction || qt && t.nodeType === Rt.comment && Q(/<[/\w]/g, t.data))
      return ct(t), !0;
    if (!n[g] || x[g]) {
      if (!x[g] && Re(g) && (b.tagNameCheck instanceof RegExp && Q(b.tagNameCheck, g) || b.tagNameCheck instanceof Function && b.tagNameCheck(g)))
        return !1;
      if (Yt && !Et[g]) {
        const P = $(t) || t.parentNode, j = et(t) || t.childNodes;
        if (j && P) {
          const Y = j.length;
          for (let at = Y - 1; at >= 0; --at) {
            const lt = S(j[at], !0);
            lt.__removalCount = (t.__removalCount || 0) + 1, P.insertBefore(lt, O(t));
          }
        }
      }
      return ct(t), !0;
    }
    return t instanceof d && !vn(t) || (g === "noscript" || g === "noembed" || g === "noframes") && Q(/<\/no(script|embed|frames)/i, t.innerHTML) ? (ct(t), !0) : (gt && t.nodeType === Rt.text && (l = t.textContent, Bt([z, q, X], (P) => {
      l = Lt(l, P, " ");
    }), t.textContent !== l && (vt(e.removed, {
      element: t.cloneNode()
    }), t.textContent = l)), ft(C.afterSanitizeElements, t, null), !1);
  }, Oe = function(t, l, g) {
    if (ge && (l === "id" || l === "name") && (g in a || g in wn))
      return !1;
    if (!(k && !F[l] && Q(ot, l))) {
      if (!(B && Q(Nt, l))) {
        if (!A[l] || F[l]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(Re(t) && (b.tagNameCheck instanceof RegExp && Q(b.tagNameCheck, t) || b.tagNameCheck instanceof Function && b.tagNameCheck(t)) && (b.attributeNameCheck instanceof RegExp && Q(b.attributeNameCheck, l) || b.attributeNameCheck instanceof Function && b.attributeNameCheck(l)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            l === "is" && b.allowCustomizedBuiltInElements && (b.tagNameCheck instanceof RegExp && Q(b.tagNameCheck, g) || b.tagNameCheck instanceof Function && b.tagNameCheck(g)))
          ) return !1;
        } else if (!jt[l]) {
          if (!Q(At, Lt(g, dt, ""))) {
            if (!((l === "src" || l === "xlink:href" || l === "href") && t !== "script" && zn(g, "data:") === 0 && Ee[t])) {
              if (!(rt && !Q(G, Lt(g, dt, "")))) {
                if (g)
                  return !1;
              }
            }
          }
        }
      }
    }
    return !0;
  }, Re = function(t) {
    return t !== "annotation-xml" && Fe(t, zt);
  }, De = function(t) {
    ft(C.beforeSanitizeAttributes, t, null);
    const {
      attributes: l
    } = t;
    if (!l || Qt(t))
      return;
    const g = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: A,
      forceKeepAttr: void 0
    };
    let P = l.length;
    for (; P--; ) {
      const j = l[P], {
        name: Y,
        namespaceURI: at,
        value: lt
      } = j, wt = V(Y);
      let K = Y === "value" ? lt : qn(lt);
      if (g.attrName = wt, g.attrValue = K, g.keepAttr = !0, g.forceKeepAttr = void 0, ft(C.uponSanitizeAttribute, t, g), K = g.attrValue, he && (wt === "id" || wt === "name") && (Ft(Y, t), K = _n + K), qt && Q(/((--!?|])>)|<\/(style|title)/i, K)) {
        Ft(Y, t);
        continue;
      }
      if (g.forceKeepAttr || (Ft(Y, t), !g.keepAttr))
        continue;
      if (!me && Q(/\/>/i, K)) {
        Ft(Y, t);
        continue;
      }
      gt && Bt([z, q, X], (Ie) => {
        K = Lt(K, Ie, " ");
      });
      const Ne = V(t.nodeName);
      if (Oe(Ne, wt, K)) {
        if (R && typeof E == "object" && typeof E.getAttributeType == "function" && !at)
          switch (E.getAttributeType(Ne, wt)) {
            case "TrustedHTML": {
              K = R.createHTML(K);
              break;
            }
            case "TrustedScriptURL": {
              K = R.createScriptURL(K);
              break;
            }
          }
        try {
          at ? t.setAttributeNS(at, Y, K) : t.setAttribute(Y, K), Qt(t) ? ct(t) : He(e.removed);
        } catch {
        }
      }
    }
    ft(C.afterSanitizeAttributes, t, null);
  }, Ln = function h(t) {
    let l = null;
    const g = ve(t);
    for (ft(C.beforeSanitizeShadowDOM, t, null); l = g.nextNode(); )
      ft(C.uponSanitizeShadowNode, l, null), Ce(l), De(l), l.content instanceof i && h(l.content);
    ft(C.afterSanitizeShadowDOM, t, null);
  };
  return e.sanitize = function(h) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, l = null, g = null, P = null, j = null;
    if ($t = !h, $t && (h = "<!-->"), typeof h != "string" && !Le(h))
      if (typeof h.toString == "function") {
        if (h = h.toString(), typeof h != "string")
          throw Ct("dirty is not a string, aborting");
      } else
        throw Ct("toString is not a function");
    if (!e.isSupported)
      return h;
    if (Gt || Kt(t), e.removed = [], typeof h == "string" && (bt = !1), bt) {
      if (h.nodeName) {
        const lt = V(h.nodeName);
        if (!n[lt] || x[lt])
          throw Ct("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (h instanceof u)
      l = we("<!---->"), g = l.ownerDocument.importNode(h, !0), g.nodeType === Rt.element && g.nodeName === "BODY" || g.nodeName === "HTML" ? l = g : l.appendChild(g);
    else {
      if (!ht && !gt && !pt && // eslint-disable-next-line unicorn/prefer-includes
      h.indexOf("<") === -1)
        return R && xt ? R.createHTML(h) : h;
      if (l = we(h), !l)
        return ht ? null : xt ? nt : "";
    }
    l && Vt && ct(l.firstChild);
    const Y = ve(bt ? h : l);
    for (; P = Y.nextNode(); )
      Ce(P), De(P), P.content instanceof i && Ln(P.content);
    if (bt)
      return h;
    if (ht) {
      if (It)
        for (j = H.call(l.ownerDocument); l.firstChild; )
          j.appendChild(l.firstChild);
      else
        j = l;
      return (A.shadowroot || A.shadowrootmode) && (j = W.call(r, j, !0)), j;
    }
    let at = pt ? l.outerHTML : l.innerHTML;
    return pt && n["!doctype"] && l.ownerDocument && l.ownerDocument.doctype && l.ownerDocument.doctype.name && Q(nn, l.ownerDocument.doctype.name) && (at = "<!DOCTYPE " + l.ownerDocument.doctype.name + `>
` + at), gt && Bt([z, q, X], (lt) => {
      at = Lt(at, lt, " ");
    }), R && xt ? R.createHTML(at) : at;
  }, e.setConfig = function() {
    let h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Kt(h), Gt = !0;
  }, e.clearConfig = function() {
    Tt = null, Gt = !1;
  }, e.isValidAttribute = function(h, t, l) {
    Tt || Kt({});
    const g = V(h), P = V(t);
    return Oe(g, P, l);
  }, e.addHook = function(h, t) {
    typeof t == "function" && vt(C[h], t);
  }, e.removeHook = function(h, t) {
    if (t !== void 0) {
      const l = Un(C[h], t);
      return l === -1 ? void 0 : Wn(C[h], l, 1)[0];
    }
    return He(C[h]);
  }, e.removeHooks = function(h) {
    C[h] = [];
  }, e.removeAllHooks = function() {
    C = Ge();
  }, e;
}
on();
function ro(o) {
  if (o && typeof o.getBoundingClientRect == "function") {
    const { bottom: e, top: a } = o.getBoundingClientRect(), { offsetTop: r } = o;
    if (a < 0 && e > 0) {
      const c = o.style;
      o.style = `${c};transition: height 0s !important; overflow:hidden; height:${e}px!important;max-height:${e}px!important`, window.scrollTo({ behavior: "instant", top: r }), setTimeout(() => {
        o.style = c, window.scrollTo({
          behavior: "smooth",
          top: o.offsetTop - e / 2
        });
      }, 50);
    }
  }
}
var rn = { exports: {} }, ae, Ve;
function ao() {
  if (Ve) return ae;
  Ve = 1;
  var o = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ae = o, ae;
}
var ie, Ye;
function io() {
  if (Ye) return ie;
  Ye = 1;
  var o = ao();
  function e() {
  }
  function a() {
  }
  return a.resetWarningCache = e, ie = function() {
    function r(s, u, d, p, m, y) {
      if (y !== o) {
        var _ = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw _.name = "Invariant Violation", _;
      }
    }
    r.isRequired = r;
    function c() {
      return r;
    }
    var i = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: c,
      element: r,
      elementType: r,
      instanceOf: c,
      node: r,
      objectOf: c,
      oneOf: c,
      oneOfType: c,
      shape: c,
      exact: c,
      checkPropTypes: a,
      resetWarningCache: e
    };
    return i.PropTypes = i, i;
  }, ie;
}
rn.exports = io()();
var so = rn.exports;
const Z = /* @__PURE__ */ kn(so);
Z.shape({
  event: Z.string,
  action: Z.string,
  name: Z.string,
  region: Z.string,
  section: Z.string,
  component: Z.string,
  type: Z.string,
  text: Z.string
});
const Dt = ({ children: o }) => /* @__PURE__ */ React.createElement(React.Fragment, null, o);
Dt.propTypes = {
  children: Z.oneOfType([
    Z.arrayOf(Z.node),
    Z.node,
    Z.string
  ])
};
var co = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(o) {
  (function() {
    var e = {}.hasOwnProperty;
    function a() {
      for (var i = "", s = 0; s < arguments.length; s++) {
        var u = arguments[s];
        u && (i = c(i, r(u)));
      }
      return i;
    }
    function r(i) {
      if (typeof i == "string" || typeof i == "number")
        return i;
      if (typeof i != "object")
        return "";
      if (Array.isArray(i))
        return a.apply(null, i);
      if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]"))
        return i.toString();
      var s = "";
      for (var u in i)
        e.call(i, u) && i[u] && (s = c(s, u));
      return s;
    }
    function c(i, s) {
      return s ? i ? i + " " + s : i + s : i;
    }
    o.exports ? (a.default = a, o.exports = a) : window.classNames = a;
  })();
})(co);
({
  ...Dt.propTypes
});
const an = ({ children: o, className: e = "container", ...a }) => /* @__PURE__ */ React.createElement("div", { className: e, ...a }, /* @__PURE__ */ React.createElement("div", { className: "row" }, o));
an.propTypes = {
  children: Dt.propTypes.children
};
({
  ...an.propTypes
});
Dt.propTypes.children, Z.oneOf(["0", "3", "4", "6", "8", "9", "12"]);
Dt.propTypes.children;
function sn() {
  var R, nt;
  const a = ["asu-header", "asuHeader"].find((D) => document.getElementById(D)), r = document.getElementById(a), c = document.getElementById("uds-anchor-menu");
  if (!c || !r) {
    console.warn(
      "Anchor menu initialization failed: required elements not found"
    );
    return;
  }
  const i = c.parentNode, s = c.nextSibling, u = Array.from(c.getElementsByClassName("nav-link")), d = /* @__PURE__ */ new Map();
  let p = window.scrollY, m = !1;
  const y = ((R = document.getElementById("toolbar-bar")) == null ? void 0 : R.offsetHeight) || 0, _ = ((nt = document.getElementById("toolbar-item-administration-tray")) == null ? void 0 : nt.offsetHeight) || 0, E = y + _, L = c.getBoundingClientRect().top + window.scrollY - E;
  for (let D of u) {
    const U = D.getAttribute("href");
    if (!U || !U.startsWith("#"))
      continue;
    const H = U.replace("#", ""), I = document.getElementById(H);
    I ? d.set(D, I) : console.warn(`Anchor menu: target element "${H}" not found`);
  }
  window.scrollY > L && (r.appendChild(c), m = !0, c.classList.add("uds-anchor-menu-attached"));
  function T(D, U = 0) {
    if (!D || U > 10)
      return 0;
    if (D.offsetHeight === 0 || D.offsetWidth === 0)
      return T(D.parentElement, U + 1);
    const H = D.getBoundingClientRect(), I = window.innerHeight || document.documentElement.clientHeight, W = window.innerWidth || document.documentElement.clientWidth, C = H.bottom - H.top, z = H.right - H.left, q = C * z, X = Math.min(I, H.bottom) - Math.max(0, H.top), ot = Math.min(W, H.right) - Math.max(0, H.left);
    return X * ot / q * 100;
  }
  const O = function() {
    let D = 0, U = null;
    if (u.forEach((C) => {
      const z = d.get(C);
      if (!z)
        return;
      const q = T(z);
      q > 0 && q > D && (D = q, U = z.id);
    }), U) {
      const C = document.querySelector(
        '[href="#' + U + '"]'
      );
      C && C.classList.add("active"), c.querySelectorAll(
        'a.nav-link:not([href="#' + U + '"])'
      ).forEach(function(z) {
        z.classList.remove("active");
      });
    }
    const H = c.getBoundingClientRect().top, I = r.getBoundingClientRect().bottom, W = window.scrollY > p;
    if (W && I >= H && (m || (r.appendChild(c), m = !0, c.classList.add("uds-anchor-menu-attached"))), !W && m) {
      const C = r.getBoundingClientRect().bottom, z = c.getBoundingClientRect().top;
      (window.scrollY <= L || C < z) && (i.insertBefore(c, s), m = !1, c.classList.remove("uds-anchor-menu-attached"));
    }
    p = window.scrollY;
  };
  let et;
  et = (() => {
    let D = !1;
    return () => {
      D || (D = !0, O(), setTimeout(() => {
        D = !1;
      }, 100));
    };
  })(), window.addEventListener("scroll", et, { passive: !0 });
  for (let [D, U] of d)
    D.addEventListener("click", function(H) {
      if (H.preventDefault(), !U || !document.body.contains(U)) {
        console.warn("Anchor target no longer exists in DOM");
        return;
      }
      const I = window.innerHeight, W = Math.round(I * 0.25);
      let z = U.getBoundingClientRect().top + window.scrollY - W;
      window.scrollTo({
        top: z,
        behavior: "smooth"
      });
      const q = c.querySelector(".nav-link.active");
      q && q.classList.remove("active"), H.target.classList.add("active");
    });
}
M.on(window, "load.uds.anchor-menu", sn);
function cn() {
  const o = document.querySelectorAll('mark[class^="pen-"]'), e = new IntersectionObserver(
    (a) => {
      a.forEach((r) => {
        r.isIntersecting ? r.target.classList.add("animate-bg-in-scroll") : r.target.classList.remove("animate-bg-in-scroll");
      });
    },
    {
      threshold: 0.1
    }
  );
  o.forEach((a) => {
    e.observe(a);
  });
}
M.on(
  window,
  "load.uds.blockquote-animation",
  cn
);
function ln() {
  const o = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ], e = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ], a = ["Su", "M", "Tu", "W", "Th", "F", "Sa"], c = {
    month: (/* @__PURE__ */ new Date()).getMonth(),
    year: (/* @__PURE__ */ new Date()).getFullYear()
  }, i = (d, p) => {
    const m = /* @__PURE__ */ new Date(), y = [], _ = new Date(d, p).getDay(), E = new Date(d, p + 1, 0).getDate(), L = new Date(d, p, 0).getDate();
    for (let S = 1; S <= _; S++) {
      const T = L - _ + S, O = new Date(
        c.year,
        c.month - 1,
        T
      ).toLocaleString();
      y.push({ key: O, date: T, monthClass: "prev" });
    }
    for (let S = 1; S <= E; S++) {
      const T = new Date(c.year, c.month, S).toLocaleString();
      S === m.getDate() && c.month === m.getMonth() && c.year === m.getFullYear() ? y.push({
        key: T,
        date: S,
        monthClass: "current",
        todayClass: "today"
      }) : y.push({ key: T, date: S, monthClass: "current" });
    }
    if (y.length < 42) {
      const S = 42 - y.length;
      for (let T = 1; T <= S; T++) {
        const O = new Date(c.year, c.month + 1, T).toLocaleString();
        y.push({ key: O, date: T, monthClass: "next" });
      }
    }
    return y;
  }, s = () => {
    const d = document.getElementById("calendar");
    d && (d.innerHTML = `
      <h2><span class="highlight-black">${o[c.month]} ${c.year}</span></h2>
      <div class="calendar-grid">
        <div class="heading desktop">
          ${e.map((p) => `<p>${p}</p>`).join("")}
        </div>
        <div class="heading mobile">
          ${a.map((p) => `<p>${p}</p>`).join("")}
        </div>
        <div class="body">
          ${i(c.year, c.month).map(
      (p) => `<h3 id="${p.key}" class="calendar-item ${p.monthClass}" ${p.todayClass ? `aria-label="${p.todayClass[0].toUpperCase()}${p.todayClass.slice(
        1
      )}"` : ""}>
                  <span class="${p.todayClass ? p.todayClass : ""}">${p.date}</span>
                </h3>`
    ).join("")}
        </div>
      </div>
      <div class="calendar-nav">
        <button
          id="prev-month"
          aria-label="Previous month"
          data-ga-event="select"
          data-ga-action="click"
          data-ga-name="onclick"
          data-ga-type="carousel"
          data-ga-region="main content"
          data-ga-section="calendar"
          data-ga="left chevron"
        >
          <span class="fas fa-angle-left"></span>
        </button>
        <button
          id="next-month"
          aria-label="Next month"
          data-ga-event="select"
          data-ga-action="click"
          data-ga-name="onclick"
          data-ga-type="carousel"
          data-ga-region="main content"
          data-ga-section="calendar"
          data-ga="right chevron"
        >
          <span class="fas fa-angle-right"></span>
        </button>
      </div>
  `);
  };
  ((d) => {
    var p = new Date(c.year, c.month + d);
    c.year = p.getFullYear(), c.month = p.getMonth(), s();
  })(0);
}
M.on(window, "load.uds.calendar", ln);
function fe() {
  const o = document.querySelectorAll(".card-body");
  if (o.length === 0 && 0 < 3) {
    setTimeout(() => fe(), 500);
    return;
  }
  if (o.length === 0) {
    console.warn("No .card-body found after 3 retries.");
    return;
  }
  o.forEach((a, r) => {
    const c = a.querySelector("div p"), i = c.textContent, s = window.getComputedStyle(a), u = parseInt(s.webkitLineClamp || s.lineClamp), d = parseFloat(s.lineHeight), p = parseFloat(s.fontSize), m = isNaN(d) ? parseFloat(s.lineHeight) * p : d, y = u * m;
    if (c.offsetHeight >= y) {
      let _ = "";
      const E = i.split(" ");
      let L = 0, S = "";
      for (; L < E.length && lo(
        S + (S ? " " : "") + E[L],
        c
      ) <= y; )
        S += (S ? " " : "") + E[L], L++;
      _ = S + "...";
      const T = `visible-text-${Math.random().toString(36).substring(7)}`, O = document.createElement("div");
      O.id = T, O.textContent = _, O.style.position = "absolute", O.style.top = `${c.offsetTop}px`, O.style.left = `${c.offsetLeft}px`, O.style.width = `${c.offsetWidth}px`, O.style.height = `${c.offsetHeight}px`, O.style.opacity = "0", O.style.pointerEvents = "none", O.style.zIndex = "1", a.appendChild(O), c.setAttribute("aria-describedby", T), c.setAttribute("aria-hidden", "true");
    }
  });
}
function lo(o, e) {
  const a = document.createElement(e.tagName);
  a.style.font = window.getComputedStyle(e).font, a.style.width = window.getComputedStyle(e).width, a.style.whiteSpace = "pre-wrap", a.textContent = o, document.body.appendChild(a);
  const r = a.offsetHeight;
  return document.body.removeChild(a), r;
}
M.on(window, "load.uds.card-bodies", fe);
function un() {
  const o = document.querySelector(".info-layer"), e = document.getElementById("dispatch");
  M.on(e, "click", function() {
    o == null || o.classList.toggle("active");
  });
}
M.on(window, "load.uds.ranking-card", un);
function fn() {
  Zt.Chart.register(...Zt.registerables);
  const o = 50;
  var e = document.getElementById("uds-donut");
  if (!e)
    return;
  document.getElementById("percentage-display").innerHTML = o + "%";
  const a = {
    type: "doughnut",
    data: {
      datasets: [
        {
          data: [o, 100 - o],
          backgroundColor: ["#ffc627", "#fafafa"]
        }
      ]
    },
    options: {
      cutout: "70%",
      //responsive: false, // remove if want static size
      tooltips: { enabled: !1 },
      events: []
      //maintainAspectRatio: false, // remove if want static size
    }
  };
  new Zt.Chart(e, a);
}
M.on(window, "load.uds.chart", fn);
function dn() {
  function o({ target: e }) {
    const a = e.getAttribute("href");
    e.getAttribute("data-bs-toggle") !== "collapse" || !a || !a.includes("#") || ro(
      document.querySelector(".collapsing")
    );
  }
  M.on(document, "click.uds.collapse", o);
}
M.on(window, "load.uds.collapse", dn);
function de() {
  var e, a, r, c;
  const o = (i) => {
    window.dataLayer = window.dataLayer || [];
    const { dataLayer: s } = window;
    s && s.push(i);
  };
  (e = document.querySelectorAll("[data-ga-header]")) == null || e.forEach(
    (i) => i.addEventListener("click", () => {
      const s = i.getAttribute("data-ga-header-event") || "link";
      let u = i.getAttribute("data-ga-header-action") || "click";
      const d = i.getAttribute("aria-expanded");
      d && (u = d === "false" ? "open" : "close");
      const p = i.getAttribute("data-ga-header-type") || "internal link", m = i.getAttribute("data-ga-header-section") || "main navbar", y = i.getAttribute("data-ga-header") || "", _ = i.getAttribute("data-ga-header-component");
      o({
        name: "onclick",
        event: s.toLowerCase(),
        action: u.toLowerCase(),
        type: p.toLowerCase(),
        section: m.toLowerCase(),
        region: "navbar",
        text: y.toLowerCase(),
        ..._ && {
          component: _.toLowerCase()
        }
      });
    })
  ), (a = document.querySelectorAll("[data-ga-input-header-event]")) == null || a.forEach(
    (i) => i.addEventListener("change", (s) => {
      const u = i.getAttribute("data-ga-input-header-event") || "", d = s.target.value || "";
      o({
        name: "onenter",
        action: "type",
        type: "main search",
        section: "topbar",
        region: "navbar",
        text: d.toLowerCase(),
        event: u.toLowerCase()
      });
    })
  ), (r = document.querySelectorAll("[data-ga]")) == null || r.forEach(
    (i) => i.addEventListener("click", () => {
      const s = i.getAttribute("data-ga-name") || "", u = i.getAttribute("data-ga-event") || "";
      let d = i.getAttribute("data-ga-action") || "";
      const p = i.getAttribute("aria-expanded");
      p && (d = p === "false" ? "open" : "close");
      const m = i.getAttribute("data-ga-type") || "", y = i.getAttribute("data-ga-section") || "", _ = i.getAttribute("data-ga-region") || "", E = i.getAttribute("data-ga") || "", L = i.getAttribute("data-ga-component") || "";
      o({
        name: s.toLowerCase(),
        event: u.toLowerCase(),
        action: d.toLowerCase(),
        type: m.toLowerCase(),
        section: y.toLowerCase(),
        region: _.toLowerCase(),
        text: E.toLowerCase(),
        component: L.toLowerCase()
      });
    })
  ), (c = document.querySelectorAll("[data-ga-input]")) == null || c.forEach(
    (i) => i.addEventListener("change", (s) => {
      const u = i.getAttribute("data-ga-input-name") || "", d = i.getAttribute("data-ga-input-action") || "", p = i.getAttribute("data-ga-input") || "", m = i.getAttribute("data-ga-input-region") || "", y = i.getAttribute("data-ga-input-section") || "";
      let _ = i.getAttribute("data-ga-input-event") || "", E;
      switch (p) {
        case "checkbox":
          E = s.target.labels[0].textContent || "", _ = s.target.checked ? _ : "deselect";
          break;
        case "radio button":
          E = s.target.labels[0].textContent || "";
          break;
        case "blur":
          E = s.target.value.toLowerCase() || "";
          break;
        default:
          E = [...s.target.selectedOptions].map((L) => L.value).join(",") || "";
          break;
      }
      o({
        name: u.toLowerCase(),
        event: _.toLowerCase(),
        action: d.toLowerCase(),
        type: p.toLowerCase(),
        section: y.toLowerCase(),
        region: m.toLowerCase(),
        text: E.toLowerCase()
      });
    })
  ), document.querySelectorAll("[data-ga-footer]").forEach(
    (i) => i.addEventListener("focus", () => {
      const s = {
        type: i.getAttribute("data-ga-footer-type").toLowerCase(),
        section: i.getAttribute("data-ga-footer-section").toLowerCase(),
        text: i.getAttribute("data-ga-footer").toLowerCase()
      };
      o({
        event: "link",
        action: "click",
        name: "onclick",
        region: "footer",
        ...s
      });
    })
  );
}
window.initDataLayer = window.initDataLayer || de;
M.on(window, "load.uds.data-layer", de);
const pe = () => {
  const o = () => {
    const e = document.getElementById("asu-header");
    window.scrollY > (e == null ? void 0 : e.getBoundingClientRect().top) ? e == null || e.classList.add("scrolled") : e == null || e.classList.remove("scrolled");
  };
  M.on(window, "scroll.uds.header", o);
};
window.initGlobalHeader = window.initGlobalHeader || pe;
M.on(window, "load.uds.global-header", pe);
function pn() {
  const o = "video", e = "#playHeroVid", a = "#pauseHeroVid", r = "click", c = "block", i = "none", s = document.querySelector(o), u = document.querySelector(e), d = document.querySelector(a);
  function p(E) {
    E.paused ? E.play() : E.pause();
  }
  function m(E, L) {
    getComputedStyle(E).display === i ? (L.style.display = i, E.style.display = c, E.focus()) : (E.style.display = i, L.style.display = c, L.focus());
  }
  function y(E) {
    E.stopPropagation(), m(u, d), p(s);
  }
  function _(E) {
    E.stopPropagation(), m(u, d), p(s);
  }
  d == null || d.addEventListener(r, y), u == null || u.addEventListener(r, _);
}
M.on(window, "load.uds.heroes-video", pn);
const mn = () => {
  const e = () => {
    document.querySelectorAll(".parallax-container").forEach((s) => {
      const u = s.querySelector("img"), d = s.offsetHeight - u.height * 1.2, p = u.dataset.parallaxType === "scroll-to" ? window.innerHeight : window.innerHeight + s.offsetHeight, m = s.getBoundingClientRect().top, _ = (window.innerHeight - m) / p;
      if (_ < 0)
        u.style.top = d + "px";
      else if (_ > 1)
        u.style.top = "0";
      else {
        const E = d * (1 - _);
        u.style.top = E + "px";
      }
    });
  }, a = (s) => {
    const u = s.parentNode, d = s.width, p = s.height;
    let m = u.offsetWidth / d, y = 0, _ = p * m, E = d * m;
    const L = +s.dataset.parallaxFactor || 1.2;
    !s.dataset.noScale && _ < u.offsetHeight * L && (m = u.offsetHeight * L / _, _ *= m, E *= m, y = (E - u.offsetWidth) / 2 * -1), s.style.height = _ + "px", s.style.left = y + "px";
  }, r = () => {
    document.querySelectorAll(".parallax-container img").forEach((s, u) => {
      s.complete ? a(s) : s.onload = () => a(s);
    });
  }, c = (s) => {
    const { dataLayer: u } = window, d = {
      event: "link",
      action: "click",
      name: "onclick",
      type: "internal link",
      region: "main content",
      ...s
    };
    u && u.push(d);
  };
  document.querySelectorAll("[data-ga-image-parallax]").forEach(
    (s) => M.on(s, "focus.uds.image-parallax", () => {
      const u = {
        section: s.getAttribute("data-ga-image-parallax-section").toLowerCase(),
        text: s.getAttribute("data-ga-image-parallax").toLowerCase()
      };
      c(u);
    })
  ), r(), M.on(window, "resize.uds.image-parallax", r), M.on(window, "scroll.uds.image-parallax", e);
};
M.on(window, "load.uds.image-parallax", mn);
function gn() {
  var o, e;
  (o = document.getElementById("openModalButton")) == null || o.addEventListener("click", function() {
    document.getElementById("uds-modal").classList.add("open");
  }), (e = document.getElementById("closeModalButton")) == null || e.addEventListener("click", function() {
    document.getElementById("uds-modal").classList.remove("open");
  });
}
M.on(window, "load.uds.modals", gn);
function hn() {
  const o = "a", e = "button", a = ".nav-tabs", r = ".nav-item", c = ".uds-tabbed-panels", i = ".scroll-control-prev", s = ".scroll-control-next", u = "click", d = "scroll", p = "focus", m = "none", y = "block", L = (S) => {
    [o, e].includes(S.target.localName) && S.target.focus();
  };
  document.querySelectorAll(c).forEach((S) => {
    const T = S.querySelector(a), O = S.querySelectorAll(r), et = S.querySelector(
      i
    ), $ = S.querySelector(
      s
    );
    let R = 0;
    S.addEventListener(u, function(I) {
      L(I);
    });
    const nt = (I, W, C) => {
      W.preventDefault();
      const q = getComputedStyle(T).left.replace("px", "");
      let X = parseInt(q, 10);
      C === 1 && R > 0 && (R -= 1), R < O.length - 1 && C == -1 && (R += 1), T.dataset.scrollPosition = R, X = 0;
      for (var ot = 0; ot < R; ot++)
        X += O[ot].offsetWidth + parseInt(getComputedStyle(O[ot]).marginLeft, 10) + parseInt(getComputedStyle(O[ot]).marginRight, 10);
      T.scrollLeft = X, D(I, X);
    }, D = (I, W) => {
      const C = T.scrollWidth - W;
      R == 0 ? et.style.display = m : et.style.display = y, C <= S.offsetWidth ? $.style.display = m : $.style.display = y;
    };
    T.addEventListener(d, (I) => {
      const W = I.target.scrollLeft, C = T.offsetWidth + W + 10 >= T.scrollWidth;
      et.style.display = W < 10 ? m : y, $.style.display = C ? m : y;
    }), O.forEach((I) => {
      I.addEventListener(p, function(W) {
        I.scrollIntoView();
      });
    }), $.addEventListener(u, function(I) {
      window.innerWidth > 992 && nt(this, I, -1);
    }), et.addEventListener(u, function(I) {
      window.innerWidth > 992 && nt(this, I, 1);
    }), et.style.display = m;
    const U = T.scrollWidth, H = S.offsetWidth;
    U <= H && ($.style.display = m);
  });
}
M.on(window, "load.uds.tabs", hn);
function yn() {
  function o() {
    const r = ".uds-table-fixed-wrapper", c = ".uds-table.uds-table-fixed table", i = ".scroll-control.previous";
    document.querySelectorAll(r).forEach((u, d) => {
      const p = u.querySelector(c);
      p.setAttribute("id", "uds-table-" + d);
      const m = p.querySelector("tbody tr > *"), y = u.querySelector(i);
      y.style.left = m.offsetWidth + "px";
    });
  }
  function e() {
    const r = ".uds-table-fixed", c = ".uds-table-fixed-wrapper", i = ".scroll-control.previous", s = ".scroll-control.next";
    document.querySelectorAll(c).forEach((d, p) => {
      const m = d.querySelector(r), y = d.querySelector(i), _ = d.querySelector(s);
      ["click", "focus"].forEach((E) => {
        M.on(y, E, function() {
          m.scrollLeft -= 100;
        }), M.on(_, E, function() {
          m.scrollLeft += 100;
        });
      });
    });
  }
  function a(r, c) {
    let i;
    return (...s) => {
      clearTimeout(i), i = setTimeout(() => {
        r.apply(this, s);
      }, c);
    };
  }
  o(), e(), M.on(window, "resize", function() {
    a(o, 100)();
  });
}
M.on(window, "load.uds.fixed-table", yn);
function En() {
  const o = "video", e = ".uds-video-btn-play", a = ".uds-video-overlay", r = "click", c = "ended", i = "flex", s = "none", u = document.querySelector(o), d = document.querySelector(a), p = document.querySelector(e);
  function m(T) {
    T.style.display === s ? T.style.display = i : T.style.display = s;
  }
  function y(T) {
    T.paused ? T.play() : T.pause();
  }
  function _(T) {
    y(this), m(this.nextElementSibling);
  }
  function E(T) {
    T.stopPropagation();
    const O = this.parentNode;
    m(O), y(u);
  }
  function L(T) {
    m(this), y(u);
  }
  function S(T) {
    m(d);
  }
  u == null || u.addEventListener(r, _), p == null || p.addEventListener(r, E), d == null || d.addEventListener(r, L), u == null || u.addEventListener(c, S);
}
M.on(window, "load.uds.video", En);
const uo = {
  // Banner, // code updated to use bootstrap alert so we don't need this
  initAnchorMenu: sn,
  initBlockquoteAnimation: cn,
  initCalendar: ln,
  initCollapse: dn,
  initChart: fn,
  initDataLayer: de,
  initFixedTable: yn,
  initGlobalHeader: pe,
  initHeroesVideo: pn,
  initImageParallax: mn,
  initModals: gn,
  initRankingCard: un,
  initTabbedPanels: hn,
  initVideo: En,
  initCardBodies: fe
};
export {
  uo as default
};
//# sourceMappingURL=unity-bootstrap.es.js.map
