import * as ee from "chart.js";
const Mn = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, kn = /[^.]*(?=\..*)\.|.*/, Pn = /\..*/, Hn = /::\d+$/, ne = {};
let Ue = 1;
const nn = {
  mouseenter: "mouseover",
  mouseleave: "mouseout"
}, Fn = /* @__PURE__ */ new Set([
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
function on(n, e) {
  return e && `${e}::${Ue++}` || n.uidEvent || Ue++;
}
function rn(n) {
  const e = on(n);
  return n.uidEvent = e, ne[e] = ne[e] || {}, ne[e];
}
function Bn(n, e) {
  return function a(r) {
    return ye(r, { delegateTarget: n }), a.oneOff && k.off(n, r.type, e), e.apply(n, [r]);
  };
}
function Un(n, e, a) {
  return function r(i) {
    const l = n.querySelectorAll(e);
    for (let { target: s } = i; s && s !== this; s = s.parentNode)
      for (const p of l)
        if (p === s)
          return ye(i, { delegateTarget: s }), r.oneOff && k.off(n, i.type, e, a), a.apply(s, [i]);
  };
}
function an(n, e, a = null) {
  return Object.values(n).find((r) => r.callable === e && r.delegationSelector === a);
}
function sn(n, e, a) {
  const r = typeof e == "string", i = r ? a : e || a;
  let l = ln(n);
  return Fn.has(l) || (l = n), [r, i, l];
}
function We(n, e, a, r, i) {
  if (typeof e != "string" || !n)
    return;
  let [l, s, p] = sn(e, a, r);
  e in nn && (s = ((b) => function(_) {
    if (!_.relatedTarget || _.relatedTarget !== _.delegateTarget && !_.delegateTarget.contains(_.relatedTarget))
      return b.call(this, _);
  })(s));
  const f = rn(n), d = f[p] || (f[p] = {}), m = an(d, s, l ? a : null);
  if (m) {
    m.oneOff = m.oneOff && i;
    return;
  }
  const y = on(s, e.replace(kn, "")), E = l ? Un(n, a, s) : Bn(n, s);
  E.delegationSelector = l ? a : null, E.callable = s, E.oneOff = i, E.uidEvent = y, d[y] = E, n.addEventListener(p, E, l);
}
function me(n, e, a, r, i) {
  const l = an(e[a], r, i);
  l && (n.removeEventListener(a, l, !!i), delete e[a][l.uidEvent]);
}
function Wn(n, e, a, r) {
  const i = e[a] || {};
  for (const [l, s] of Object.entries(i))
    l.includes(r) && me(n, e, a, s.callable, s.delegationSelector);
}
function ln(n) {
  return n = n.replace(Pn, ""), nn[n] || n;
}
const k = {
  on(n, e, a, r) {
    We(n, e, a, r, !1);
  },
  one(n, e, a, r) {
    We(n, e, a, r, !0);
  },
  off(n, e, a, r) {
    if (typeof e != "string" || !n)
      return;
    const [i, l, s] = sn(e, a, r), p = s !== e, f = rn(n), d = f[s] || {}, m = e.startsWith(".");
    if (typeof l < "u") {
      if (!Object.keys(d).length)
        return;
      me(n, f, s, l, i ? a : null);
      return;
    }
    if (m)
      for (const y of Object.keys(f))
        Wn(n, f, y, e.slice(1));
    for (const [y, E] of Object.entries(d)) {
      const C = y.replace(Hn, "");
      (!p || e.includes(C)) && me(n, f, s, E.callable, E.delegationSelector);
    }
  },
  trigger(n, e, a) {
    if (typeof e != "string" || !n)
      return null;
    const r = Mn(), i = ln(e), l = e !== i;
    let s = null, p = !0, f = !0, d = !1;
    l && r && (s = r.Event(e, a), r(n).trigger(s), p = !s.isPropagationStopped(), f = !s.isImmediatePropagationStopped(), d = s.isDefaultPrevented());
    const m = ye(new Event(e, { bubbles: p, cancelable: !0 }), a);
    return d && m.preventDefault(), f && n.dispatchEvent(m), m.defaultPrevented && s && s.preventDefault(), m;
  }
};
function ye(n, e = {}) {
  for (const [a, r] of Object.entries(e))
    try {
      n[a] = r;
    } catch {
      Object.defineProperty(n, a, {
        configurable: !0,
        get() {
          return r;
        }
      });
    }
  return n;
}
function zn(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var oe = { exports: {} }, v = {}, ze;
function qn() {
  if (ze) return v;
  ze = 1;
  /**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var n = Symbol.for("react.element"), e = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), s = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), d = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), y = Symbol.iterator;
  function E(o) {
    return o === null || typeof o != "object" ? null : (o = y && o[y] || o["@@iterator"], typeof o == "function" ? o : null);
  }
  var C = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, b = Object.assign, _ = {};
  function w(o, u, T) {
    this.props = o, this.context = u, this.refs = _, this.updater = T || C;
  }
  w.prototype.isReactComponent = {}, w.prototype.setState = function(o, u) {
    if (typeof o != "object" && typeof o != "function" && o != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, o, u, "setState");
  }, w.prototype.forceUpdate = function(o) {
    this.updater.enqueueForceUpdate(this, o, "forceUpdate");
  };
  function S() {
  }
  S.prototype = w.prototype;
  function $(o, u, T) {
    this.props = o, this.context = u, this.refs = _, this.updater = T || C;
  }
  var K = $.prototype = new S();
  K.constructor = $, b(K, w.prototype), K.isPureReactComponent = !0;
  var O = Array.isArray, ot = Object.prototype.hasOwnProperty, D = { current: null }, U = { key: !0, ref: !0, __self: !0, __source: !0 };
  function B(o, u, T) {
    var x, A = {}, M = null, P = null;
    if (u != null) for (x in u.ref !== void 0 && (P = u.ref), u.key !== void 0 && (M = "" + u.key), u) ot.call(u, x) && !U.hasOwnProperty(x) && (A[x] = u[x]);
    var N = arguments.length - 2;
    if (N === 1) A.children = T;
    else if (1 < N) {
      for (var H = Array(N), Z = 0; Z < N; Z++) H[Z] = arguments[Z + 2];
      A.children = H;
    }
    if (o && o.defaultProps) for (x in N = o.defaultProps, N) A[x] === void 0 && (A[x] = N[x]);
    return { $$typeof: n, type: o, key: M, ref: P, props: A, _owner: D.current };
  }
  function I(o, u) {
    return { $$typeof: n, type: o.type, key: u, ref: o.ref, props: o.props, _owner: o._owner };
  }
  function W(o) {
    return typeof o == "object" && o !== null && o.$$typeof === n;
  }
  function R(o) {
    var u = { "=": "=0", ":": "=2" };
    return "$" + o.replace(/[=:]/g, function(T) {
      return u[T];
    });
  }
  var q = /\/+/g;
  function V(o, u) {
    return typeof o == "object" && o !== null && o.key != null ? R("" + o.key) : u.toString(36);
  }
  function Q(o, u, T, x, A) {
    var M = typeof o;
    (M === "undefined" || M === "boolean") && (o = null);
    var P = !1;
    if (o === null) P = !0;
    else switch (M) {
      case "string":
      case "number":
        P = !0;
        break;
      case "object":
        switch (o.$$typeof) {
          case n:
          case e:
            P = !0;
        }
    }
    if (P) return P = o, A = A(P), o = x === "" ? "." + V(P, 0) : x, O(A) ? (T = "", o != null && (T = o.replace(q, "$&/") + "/"), Q(A, u, T, "", function(Z) {
      return Z;
    })) : A != null && (W(A) && (A = I(A, T + (!A.key || P && P.key === A.key ? "" : ("" + A.key).replace(q, "$&/") + "/") + o)), u.push(A)), 1;
    if (P = 0, x = x === "" ? "." : x + ":", O(o)) for (var N = 0; N < o.length; N++) {
      M = o[N];
      var H = x + V(M, N);
      P += Q(M, u, T, H, A);
    }
    else if (H = E(o), typeof H == "function") for (o = H.call(o), N = 0; !(M = o.next()).done; ) M = M.value, H = x + V(M, N++), P += Q(M, u, T, H, A);
    else if (M === "object") throw u = String(o), Error("Objects are not valid as a React child (found: " + (u === "[object Object]" ? "object with keys {" + Object.keys(o).join(", ") + "}" : u) + "). If you meant to render a collection of children, use an array instead.");
    return P;
  }
  function rt(o, u, T) {
    if (o == null) return o;
    var x = [], A = 0;
    return Q(o, x, "", "", function(M) {
      return u.call(T, M, A++);
    }), x;
  }
  function xt(o) {
    if (o._status === -1) {
      var u = o._result;
      u = u(), u.then(function(T) {
        (o._status === 0 || o._status === -1) && (o._status = 1, o._result = T);
      }, function(T) {
        (o._status === 0 || o._status === -1) && (o._status = 2, o._result = T);
      }), o._status === -1 && (o._status = 0, o._result = u);
    }
    if (o._status === 1) return o._result.default;
    throw o._result;
  }
  var Y = { current: null }, mt = { transition: null }, Gt = { ReactCurrentDispatcher: Y, ReactCurrentBatchConfig: mt, ReactCurrentOwner: D };
  function St() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return v.Children = { map: rt, forEach: function(o, u, T) {
    rt(o, function() {
      u.apply(this, arguments);
    }, T);
  }, count: function(o) {
    var u = 0;
    return rt(o, function() {
      u++;
    }), u;
  }, toArray: function(o) {
    return rt(o, function(u) {
      return u;
    }) || [];
  }, only: function(o) {
    if (!W(o)) throw Error("React.Children.only expected to receive a single React element child.");
    return o;
  } }, v.Component = w, v.Fragment = a, v.Profiler = i, v.PureComponent = $, v.StrictMode = r, v.Suspense = f, v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Gt, v.act = St, v.cloneElement = function(o, u, T) {
    if (o == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + o + ".");
    var x = b({}, o.props), A = o.key, M = o.ref, P = o._owner;
    if (u != null) {
      if (u.ref !== void 0 && (M = u.ref, P = D.current), u.key !== void 0 && (A = "" + u.key), o.type && o.type.defaultProps) var N = o.type.defaultProps;
      for (H in u) ot.call(u, H) && !U.hasOwnProperty(H) && (x[H] = u[H] === void 0 && N !== void 0 ? N[H] : u[H]);
    }
    var H = arguments.length - 2;
    if (H === 1) x.children = T;
    else if (1 < H) {
      N = Array(H);
      for (var Z = 0; Z < H; Z++) N[Z] = arguments[Z + 2];
      x.children = N;
    }
    return { $$typeof: n, type: o.type, key: A, ref: M, props: x, _owner: P };
  }, v.createContext = function(o) {
    return o = { $$typeof: s, _currentValue: o, _currentValue2: o, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, o.Provider = { $$typeof: l, _context: o }, o.Consumer = o;
  }, v.createElement = B, v.createFactory = function(o) {
    var u = B.bind(null, o);
    return u.type = o, u;
  }, v.createRef = function() {
    return { current: null };
  }, v.forwardRef = function(o) {
    return { $$typeof: p, render: o };
  }, v.isValidElement = W, v.lazy = function(o) {
    return { $$typeof: m, _payload: { _status: -1, _result: o }, _init: xt };
  }, v.memo = function(o, u) {
    return { $$typeof: d, type: o, compare: u === void 0 ? null : u };
  }, v.startTransition = function(o) {
    var u = mt.transition;
    mt.transition = {};
    try {
      o();
    } finally {
      mt.transition = u;
    }
  }, v.unstable_act = St, v.useCallback = function(o, u) {
    return Y.current.useCallback(o, u);
  }, v.useContext = function(o) {
    return Y.current.useContext(o);
  }, v.useDebugValue = function() {
  }, v.useDeferredValue = function(o) {
    return Y.current.useDeferredValue(o);
  }, v.useEffect = function(o, u) {
    return Y.current.useEffect(o, u);
  }, v.useId = function() {
    return Y.current.useId();
  }, v.useImperativeHandle = function(o, u, T) {
    return Y.current.useImperativeHandle(o, u, T);
  }, v.useInsertionEffect = function(o, u) {
    return Y.current.useInsertionEffect(o, u);
  }, v.useLayoutEffect = function(o, u) {
    return Y.current.useLayoutEffect(o, u);
  }, v.useMemo = function(o, u) {
    return Y.current.useMemo(o, u);
  }, v.useReducer = function(o, u, T) {
    return Y.current.useReducer(o, u, T);
  }, v.useRef = function(o) {
    return Y.current.useRef(o);
  }, v.useState = function(o) {
    return Y.current.useState(o);
  }, v.useSyncExternalStore = function(o, u, T) {
    return Y.current.useSyncExternalStore(o, u, T);
  }, v.useTransition = function() {
    return Y.current.useTransition();
  }, v.version = "18.3.1", v;
}
var qe;
function Gn() {
  return qe || (qe = 1, oe.exports = qn()), oe.exports;
}
Gn();
/*! @license DOMPurify 3.3.2 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.2/LICENSE */
const {
  entries: cn,
  setPrototypeOf: Ge,
  isFrozen: Vn,
  getPrototypeOf: Yn,
  getOwnPropertyDescriptor: jn
} = Object;
let {
  freeze: et,
  seal: st,
  create: zt
} = Object, {
  apply: he,
  construct: ge
} = typeof Reflect < "u" && Reflect;
et || (et = function(e) {
  return e;
});
st || (st = function(e) {
  return e;
});
he || (he = function(e, a) {
  for (var r = arguments.length, i = new Array(r > 2 ? r - 2 : 0), l = 2; l < r; l++)
    i[l - 2] = arguments[l];
  return e.apply(a, i);
});
ge || (ge = function(e) {
  for (var a = arguments.length, r = new Array(a > 1 ? a - 1 : 0), i = 1; i < a; i++)
    r[i - 1] = arguments[i];
  return new e(...r);
});
const Ut = nt(Array.prototype.forEach), $n = nt(Array.prototype.lastIndexOf), Ve = nt(Array.prototype.pop), Lt = nt(Array.prototype.push), Xn = nt(Array.prototype.splice), qt = nt(String.prototype.toLowerCase), re = nt(String.prototype.toString), ae = nt(String.prototype.match), Ct = nt(String.prototype.replace), Kn = nt(String.prototype.indexOf), Qn = nt(String.prototype.trim), it = nt(Object.prototype.hasOwnProperty), J = nt(RegExp.prototype.test), Rt = Zn(TypeError);
function nt(n) {
  return function(e) {
    e instanceof RegExp && (e.lastIndex = 0);
    for (var a = arguments.length, r = new Array(a > 1 ? a - 1 : 0), i = 1; i < a; i++)
      r[i - 1] = arguments[i];
    return he(n, e, r);
  };
}
function Zn(n) {
  return function() {
    for (var e = arguments.length, a = new Array(e), r = 0; r < e; r++)
      a[r] = arguments[r];
    return ge(n, a);
  };
}
function L(n, e) {
  let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : qt;
  Ge && Ge(n, null);
  let r = e.length;
  for (; r--; ) {
    let i = e[r];
    if (typeof i == "string") {
      const l = a(i);
      l !== i && (Vn(e) || (e[r] = l), i = l);
    }
    n[i] = !0;
  }
  return n;
}
function Jn(n) {
  for (let e = 0; e < n.length; e++)
    it(n, e) || (n[e] = null);
  return n;
}
function ut(n) {
  const e = zt(null);
  for (const [a, r] of cn(n))
    it(n, a) && (Array.isArray(r) ? e[a] = Jn(r) : r && typeof r == "object" && r.constructor === Object ? e[a] = ut(r) : e[a] = r);
  return e;
}
function Ot(n, e) {
  for (; n !== null; ) {
    const r = jn(n, e);
    if (r) {
      if (r.get)
        return nt(r.get);
      if (typeof r.value == "function")
        return nt(r.value);
    }
    n = Yn(n);
  }
  function a() {
    return null;
  }
  return a;
}
const Ye = et(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ie = et(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), se = et(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), to = et(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), le = et(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), eo = et(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), je = et(["#text"]), $e = et(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), ce = et(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Xe = et(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Wt = et(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), no = st(/\{\{[\w\W]*|[\w\W]*\}\}/gm), oo = st(/<%[\w\W]*|[\w\W]*%>/gm), ro = st(/\$\{[\w\W]*/gm), ao = st(/^data-[\-\w.\u00B7-\uFFFF]+$/), io = st(/^aria-[\-\w]+$/), un = st(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), so = st(/^(?:\w+script|data):/i), lo = st(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), fn = st(/^html$/i), co = st(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Ke = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: io,
  ATTR_WHITESPACE: lo,
  CUSTOM_ELEMENT: co,
  DATA_ATTR: ao,
  DOCTYPE_NAME: fn,
  ERB_EXPR: oo,
  IS_ALLOWED_URI: un,
  IS_SCRIPT_OR_DATA: so,
  MUSTACHE_EXPR: no,
  TMPLIT_EXPR: ro
});
const Dt = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, uo = function() {
  return typeof window > "u" ? null : window;
}, fo = function(e, a) {
  if (typeof e != "object" || typeof e.createPolicy != "function")
    return null;
  let r = null;
  const i = "data-tt-policy-suffix";
  a && a.hasAttribute(i) && (r = a.getAttribute(i));
  const l = "dompurify" + (r ? "#" + r : "");
  try {
    return e.createPolicy(l, {
      createHTML(s) {
        return s;
      },
      createScriptURL(s) {
        return s;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + l + " could not be created."), null;
  }
}, Qe = function() {
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
function dn() {
  let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : uo();
  const e = (g) => dn(g);
  if (e.version = "3.3.2", e.removed = [], !n || !n.document || n.document.nodeType !== Dt.document || !n.Element)
    return e.isSupported = !1, e;
  let {
    document: a
  } = n;
  const r = a, i = r.currentScript, {
    DocumentFragment: l,
    HTMLTemplateElement: s,
    Node: p,
    Element: f,
    NodeFilter: d,
    NamedNodeMap: m = n.NamedNodeMap || n.MozNamedAttrMap,
    HTMLFormElement: y,
    DOMParser: E,
    trustedTypes: C
  } = n, b = f.prototype, _ = Ot(b, "cloneNode"), w = Ot(b, "remove"), S = Ot(b, "nextSibling"), $ = Ot(b, "childNodes"), K = Ot(b, "parentNode");
  if (typeof s == "function") {
    const g = a.createElement("template");
    g.content && g.content.ownerDocument && (a = g.content.ownerDocument);
  }
  let O, ot = "";
  const {
    implementation: D,
    createNodeIterator: U,
    createDocumentFragment: B,
    getElementsByTagName: I
  } = a, {
    importNode: W
  } = r;
  let R = Qe();
  e.isSupported = typeof cn == "function" && typeof K == "function" && D && D.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: q,
    ERB_EXPR: V,
    TMPLIT_EXPR: Q,
    DATA_ATTR: rt,
    ARIA_ATTR: xt,
    IS_SCRIPT_OR_DATA: Y,
    ATTR_WHITESPACE: mt,
    CUSTOM_ELEMENT: Gt
  } = Ke;
  let {
    IS_ALLOWED_URI: St
  } = Ke, o = null;
  const u = L({}, [...Ye, ...ie, ...se, ...le, ...je]);
  let T = null;
  const x = L({}, [...$e, ...ce, ...Xe, ...Wt]);
  let A = Object.seal(zt(null, {
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
  })), M = null, P = null;
  const N = Object.seal(zt(null, {
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
  let H = !0, Z = !0, Ae = !1, be = !0, yt = !1, It = !0, ht = !1, Vt = !1, Yt = !1, Et = !1, Mt = !1, kt = !1, Se = !0, we = !1;
  const Ln = "user-content-";
  let jt = !0, wt = !1, _t = {}, lt = null;
  const $t = L({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let ve = null;
  const Le = L({}, ["audio", "video", "img", "source", "image", "track"]);
  let Xt = null;
  const Ce = L({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Pt = "http://www.w3.org/1998/Math/MathML", Ht = "http://www.w3.org/2000/svg", ft = "http://www.w3.org/1999/xhtml";
  let Tt = ft, Kt = !1, Qt = null;
  const Cn = L({}, [Pt, Ht, ft], re);
  let Ft = L({}, ["mi", "mo", "mn", "ms", "mtext"]), Bt = L({}, ["annotation-xml"]);
  const Rn = L({}, ["title", "style", "font", "a", "script"]);
  let vt = null;
  const On = ["application/xhtml+xml", "text/html"], Dn = "text/html";
  let G = null, At = null;
  const Nn = a.createElement("form"), Re = function(t) {
    return t instanceof RegExp || t instanceof Function;
  }, Zt = function() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(At && At === t)) {
      if ((!t || typeof t != "object") && (t = {}), t = ut(t), vt = // eslint-disable-next-line unicorn/prefer-includes
      On.indexOf(t.PARSER_MEDIA_TYPE) === -1 ? Dn : t.PARSER_MEDIA_TYPE, G = vt === "application/xhtml+xml" ? re : qt, o = it(t, "ALLOWED_TAGS") ? L({}, t.ALLOWED_TAGS, G) : u, T = it(t, "ALLOWED_ATTR") ? L({}, t.ALLOWED_ATTR, G) : x, Qt = it(t, "ALLOWED_NAMESPACES") ? L({}, t.ALLOWED_NAMESPACES, re) : Cn, Xt = it(t, "ADD_URI_SAFE_ATTR") ? L(ut(Ce), t.ADD_URI_SAFE_ATTR, G) : Ce, ve = it(t, "ADD_DATA_URI_TAGS") ? L(ut(Le), t.ADD_DATA_URI_TAGS, G) : Le, lt = it(t, "FORBID_CONTENTS") ? L({}, t.FORBID_CONTENTS, G) : $t, M = it(t, "FORBID_TAGS") ? L({}, t.FORBID_TAGS, G) : ut({}), P = it(t, "FORBID_ATTR") ? L({}, t.FORBID_ATTR, G) : ut({}), _t = it(t, "USE_PROFILES") ? t.USE_PROFILES : !1, H = t.ALLOW_ARIA_ATTR !== !1, Z = t.ALLOW_DATA_ATTR !== !1, Ae = t.ALLOW_UNKNOWN_PROTOCOLS || !1, be = t.ALLOW_SELF_CLOSE_IN_ATTR !== !1, yt = t.SAFE_FOR_TEMPLATES || !1, It = t.SAFE_FOR_XML !== !1, ht = t.WHOLE_DOCUMENT || !1, Et = t.RETURN_DOM || !1, Mt = t.RETURN_DOM_FRAGMENT || !1, kt = t.RETURN_TRUSTED_TYPE || !1, Yt = t.FORCE_BODY || !1, Se = t.SANITIZE_DOM !== !1, we = t.SANITIZE_NAMED_PROPS || !1, jt = t.KEEP_CONTENT !== !1, wt = t.IN_PLACE || !1, St = t.ALLOWED_URI_REGEXP || un, Tt = t.NAMESPACE || ft, Ft = t.MATHML_TEXT_INTEGRATION_POINTS || Ft, Bt = t.HTML_INTEGRATION_POINTS || Bt, A = t.CUSTOM_ELEMENT_HANDLING || {}, t.CUSTOM_ELEMENT_HANDLING && Re(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (A.tagNameCheck = t.CUSTOM_ELEMENT_HANDLING.tagNameCheck), t.CUSTOM_ELEMENT_HANDLING && Re(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (A.attributeNameCheck = t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), t.CUSTOM_ELEMENT_HANDLING && typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (A.allowCustomizedBuiltInElements = t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), yt && (Z = !1), Mt && (Et = !0), _t && (o = L({}, je), T = zt(null), _t.html === !0 && (L(o, Ye), L(T, $e)), _t.svg === !0 && (L(o, ie), L(T, ce), L(T, Wt)), _t.svgFilters === !0 && (L(o, se), L(T, ce), L(T, Wt)), _t.mathMl === !0 && (L(o, le), L(T, Xe), L(T, Wt))), it(t, "ADD_TAGS") || (N.tagCheck = null), it(t, "ADD_ATTR") || (N.attributeCheck = null), t.ADD_TAGS && (typeof t.ADD_TAGS == "function" ? N.tagCheck = t.ADD_TAGS : (o === u && (o = ut(o)), L(o, t.ADD_TAGS, G))), t.ADD_ATTR && (typeof t.ADD_ATTR == "function" ? N.attributeCheck = t.ADD_ATTR : (T === x && (T = ut(T)), L(T, t.ADD_ATTR, G))), t.ADD_URI_SAFE_ATTR && L(Xt, t.ADD_URI_SAFE_ATTR, G), t.FORBID_CONTENTS && (lt === $t && (lt = ut(lt)), L(lt, t.FORBID_CONTENTS, G)), t.ADD_FORBID_CONTENTS && (lt === $t && (lt = ut(lt)), L(lt, t.ADD_FORBID_CONTENTS, G)), jt && (o["#text"] = !0), ht && L(o, ["html", "head", "body"]), o.table && (L(o, ["tbody"]), delete M.tbody), t.TRUSTED_TYPES_POLICY) {
        if (typeof t.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Rt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof t.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Rt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        O = t.TRUSTED_TYPES_POLICY, ot = O.createHTML("");
      } else
        O === void 0 && (O = fo(C, i)), O !== null && typeof ot == "string" && (ot = O.createHTML(""));
      et && et(t), At = t;
    }
  }, Oe = L({}, [...ie, ...se, ...to]), De = L({}, [...le, ...eo]), xn = function(t) {
    let c = K(t);
    (!c || !c.tagName) && (c = {
      namespaceURI: Tt,
      tagName: "template"
    });
    const h = qt(t.tagName), F = qt(c.tagName);
    return Qt[t.namespaceURI] ? t.namespaceURI === Ht ? c.namespaceURI === ft ? h === "svg" : c.namespaceURI === Pt ? h === "svg" && (F === "annotation-xml" || Ft[F]) : !!Oe[h] : t.namespaceURI === Pt ? c.namespaceURI === ft ? h === "math" : c.namespaceURI === Ht ? h === "math" && Bt[F] : !!De[h] : t.namespaceURI === ft ? c.namespaceURI === Ht && !Bt[F] || c.namespaceURI === Pt && !Ft[F] ? !1 : !De[h] && (Rn[h] || !Oe[h]) : !!(vt === "application/xhtml+xml" && Qt[t.namespaceURI]) : !1;
  }, ct = function(t) {
    Lt(e.removed, {
      element: t
    });
    try {
      K(t).removeChild(t);
    } catch {
      w(t);
    }
  }, gt = function(t, c) {
    try {
      Lt(e.removed, {
        attribute: c.getAttributeNode(t),
        from: c
      });
    } catch {
      Lt(e.removed, {
        attribute: null,
        from: c
      });
    }
    if (c.removeAttribute(t), t === "is")
      if (Et || Mt)
        try {
          ct(c);
        } catch {
        }
      else
        try {
          c.setAttribute(t, "");
        } catch {
        }
  }, Ne = function(t) {
    let c = null, h = null;
    if (Yt)
      t = "<remove></remove>" + t;
    else {
      const z = ae(t, /^[\r\n\t ]+/);
      h = z && z[0];
    }
    vt === "application/xhtml+xml" && Tt === ft && (t = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + t + "</body></html>");
    const F = O ? O.createHTML(t) : t;
    if (Tt === ft)
      try {
        c = new E().parseFromString(F, vt);
      } catch {
      }
    if (!c || !c.documentElement) {
      c = D.createDocument(Tt, "template", null);
      try {
        c.documentElement.innerHTML = Kt ? ot : F;
      } catch {
      }
    }
    const X = c.body || c.documentElement;
    return t && h && X.insertBefore(a.createTextNode(h), X.childNodes[0] || null), Tt === ft ? I.call(c, ht ? "html" : "body")[0] : ht ? c.documentElement : X;
  }, xe = function(t) {
    return U.call(
      t.ownerDocument || t,
      t,
      // eslint-disable-next-line no-bitwise
      d.SHOW_ELEMENT | d.SHOW_COMMENT | d.SHOW_TEXT | d.SHOW_PROCESSING_INSTRUCTION | d.SHOW_CDATA_SECTION,
      null
    );
  }, Jt = function(t) {
    return t instanceof y && (typeof t.nodeName != "string" || typeof t.textContent != "string" || typeof t.removeChild != "function" || !(t.attributes instanceof m) || typeof t.removeAttribute != "function" || typeof t.setAttribute != "function" || typeof t.namespaceURI != "string" || typeof t.insertBefore != "function" || typeof t.hasChildNodes != "function");
  }, Ie = function(t) {
    return typeof p == "function" && t instanceof p;
  };
  function dt(g, t, c) {
    Ut(g, (h) => {
      h.call(e, t, c, At);
    });
  }
  const Me = function(t) {
    let c = null;
    if (dt(R.beforeSanitizeElements, t, null), Jt(t))
      return ct(t), !0;
    const h = G(t.nodeName);
    if (dt(R.uponSanitizeElement, t, {
      tagName: h,
      allowedTags: o
    }), It && t.hasChildNodes() && !Ie(t.firstElementChild) && J(/<[/\w!]/g, t.innerHTML) && J(/<[/\w!]/g, t.textContent) || t.nodeType === Dt.progressingInstruction || It && t.nodeType === Dt.comment && J(/<[/\w]/g, t.data))
      return ct(t), !0;
    if (!(N.tagCheck instanceof Function && N.tagCheck(h)) && (!o[h] || M[h])) {
      if (!M[h] && Pe(h) && (A.tagNameCheck instanceof RegExp && J(A.tagNameCheck, h) || A.tagNameCheck instanceof Function && A.tagNameCheck(h)))
        return !1;
      if (jt && !lt[h]) {
        const F = K(t) || t.parentNode, X = $(t) || t.childNodes;
        if (X && F) {
          const z = X.length;
          for (let at = z - 1; at >= 0; --at) {
            const pt = _(X[at], !0);
            pt.__removalCount = (t.__removalCount || 0) + 1, F.insertBefore(pt, S(t));
          }
        }
      }
      return ct(t), !0;
    }
    return t instanceof f && !xn(t) || (h === "noscript" || h === "noembed" || h === "noframes") && J(/<\/no(script|embed|frames)/i, t.innerHTML) ? (ct(t), !0) : (yt && t.nodeType === Dt.text && (c = t.textContent, Ut([q, V, Q], (F) => {
      c = Ct(c, F, " ");
    }), t.textContent !== c && (Lt(e.removed, {
      element: t.cloneNode()
    }), t.textContent = c)), dt(R.afterSanitizeElements, t, null), !1);
  }, ke = function(t, c, h) {
    if (P[c] || Se && (c === "id" || c === "name") && (h in a || h in Nn))
      return !1;
    if (!(Z && !P[c] && J(rt, c))) {
      if (!(H && J(xt, c))) {
        if (!(N.attributeCheck instanceof Function && N.attributeCheck(c, t))) {
          if (!T[c] || P[c]) {
            if (
              // First condition does a very basic check if a) it's basically a valid custom element tagname AND
              // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
              !(Pe(t) && (A.tagNameCheck instanceof RegExp && J(A.tagNameCheck, t) || A.tagNameCheck instanceof Function && A.tagNameCheck(t)) && (A.attributeNameCheck instanceof RegExp && J(A.attributeNameCheck, c) || A.attributeNameCheck instanceof Function && A.attributeNameCheck(c, t)) || // Alternative, second condition checks if it's an `is`-attribute, AND
              // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              c === "is" && A.allowCustomizedBuiltInElements && (A.tagNameCheck instanceof RegExp && J(A.tagNameCheck, h) || A.tagNameCheck instanceof Function && A.tagNameCheck(h)))
            ) return !1;
          } else if (!Xt[c]) {
            if (!J(St, Ct(h, mt, ""))) {
              if (!((c === "src" || c === "xlink:href" || c === "href") && t !== "script" && Kn(h, "data:") === 0 && ve[t])) {
                if (!(Ae && !J(Y, Ct(h, mt, "")))) {
                  if (h)
                    return !1;
                }
              }
            }
          }
        }
      }
    }
    return !0;
  }, Pe = function(t) {
    return t !== "annotation-xml" && ae(t, Gt);
  }, He = function(t) {
    dt(R.beforeSanitizeAttributes, t, null);
    const {
      attributes: c
    } = t;
    if (!c || Jt(t))
      return;
    const h = {
      attrName: "",
      attrValue: "",
      keepAttr: !0,
      allowedAttributes: T,
      forceKeepAttr: void 0
    };
    let F = c.length;
    for (; F--; ) {
      const X = c[F], {
        name: z,
        namespaceURI: at,
        value: pt
      } = X, bt = G(z), te = pt;
      let j = z === "value" ? te : Qn(te);
      if (h.attrName = bt, h.attrValue = j, h.keepAttr = !0, h.forceKeepAttr = void 0, dt(R.uponSanitizeAttribute, t, h), j = h.attrValue, we && (bt === "id" || bt === "name") && (gt(z, t), j = Ln + j), It && J(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, j)) {
        gt(z, t);
        continue;
      }
      if (bt === "attributename" && ae(j, "href")) {
        gt(z, t);
        continue;
      }
      if (h.forceKeepAttr)
        continue;
      if (!h.keepAttr) {
        gt(z, t);
        continue;
      }
      if (!be && J(/\/>/i, j)) {
        gt(z, t);
        continue;
      }
      yt && Ut([q, V, Q], (Be) => {
        j = Ct(j, Be, " ");
      });
      const Fe = G(t.nodeName);
      if (!ke(Fe, bt, j)) {
        gt(z, t);
        continue;
      }
      if (O && typeof C == "object" && typeof C.getAttributeType == "function" && !at)
        switch (C.getAttributeType(Fe, bt)) {
          case "TrustedHTML": {
            j = O.createHTML(j);
            break;
          }
          case "TrustedScriptURL": {
            j = O.createScriptURL(j);
            break;
          }
        }
      if (j !== te)
        try {
          at ? t.setAttributeNS(at, z, j) : t.setAttribute(z, j), Jt(t) ? ct(t) : Ve(e.removed);
        } catch {
          gt(z, t);
        }
    }
    dt(R.afterSanitizeAttributes, t, null);
  }, In = function g(t) {
    let c = null;
    const h = xe(t);
    for (dt(R.beforeSanitizeShadowDOM, t, null); c = h.nextNode(); )
      dt(R.uponSanitizeShadowNode, c, null), Me(c), He(c), c.content instanceof l && g(c.content);
    dt(R.afterSanitizeShadowDOM, t, null);
  };
  return e.sanitize = function(g) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, c = null, h = null, F = null, X = null;
    if (Kt = !g, Kt && (g = "<!-->"), typeof g != "string" && !Ie(g))
      if (typeof g.toString == "function") {
        if (g = g.toString(), typeof g != "string")
          throw Rt("dirty is not a string, aborting");
      } else
        throw Rt("toString is not a function");
    if (!e.isSupported)
      return g;
    if (Vt || Zt(t), e.removed = [], typeof g == "string" && (wt = !1), wt) {
      if (g.nodeName) {
        const pt = G(g.nodeName);
        if (!o[pt] || M[pt])
          throw Rt("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (g instanceof p)
      c = Ne("<!---->"), h = c.ownerDocument.importNode(g, !0), h.nodeType === Dt.element && h.nodeName === "BODY" || h.nodeName === "HTML" ? c = h : c.appendChild(h);
    else {
      if (!Et && !yt && !ht && // eslint-disable-next-line unicorn/prefer-includes
      g.indexOf("<") === -1)
        return O && kt ? O.createHTML(g) : g;
      if (c = Ne(g), !c)
        return Et ? null : kt ? ot : "";
    }
    c && Yt && ct(c.firstChild);
    const z = xe(wt ? g : c);
    for (; F = z.nextNode(); )
      Me(F), He(F), F.content instanceof l && In(F.content);
    if (wt)
      return g;
    if (Et) {
      if (Mt)
        for (X = B.call(c.ownerDocument); c.firstChild; )
          X.appendChild(c.firstChild);
      else
        X = c;
      return (T.shadowroot || T.shadowrootmode) && (X = W.call(r, X, !0)), X;
    }
    let at = ht ? c.outerHTML : c.innerHTML;
    return ht && o["!doctype"] && c.ownerDocument && c.ownerDocument.doctype && c.ownerDocument.doctype.name && J(fn, c.ownerDocument.doctype.name) && (at = "<!DOCTYPE " + c.ownerDocument.doctype.name + `>
` + at), yt && Ut([q, V, Q], (pt) => {
      at = Ct(at, pt, " ");
    }), O && kt ? O.createHTML(at) : at;
  }, e.setConfig = function() {
    let g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Zt(g), Vt = !0;
  }, e.clearConfig = function() {
    At = null, Vt = !1;
  }, e.isValidAttribute = function(g, t, c) {
    At || Zt({});
    const h = G(g), F = G(t);
    return ke(h, F, c);
  }, e.addHook = function(g, t) {
    typeof t == "function" && Lt(R[g], t);
  }, e.removeHook = function(g, t) {
    if (t !== void 0) {
      const c = $n(R[g], t);
      return c === -1 ? void 0 : Xn(R[g], c, 1)[0];
    }
    return Ve(R[g]);
  }, e.removeHooks = function(g) {
    R[g] = [];
  }, e.removeAllHooks = function() {
    R = Qe();
  }, e;
}
dn();
function po(n) {
  if (n && typeof n.getBoundingClientRect == "function") {
    const { bottom: e, top: a } = n.getBoundingClientRect(), { offsetTop: r } = n;
    if (a < 0 && e > 0) {
      const i = n.style;
      n.style = `${i};transition: height 0s !important; overflow:hidden; height:${e}px!important;max-height:${e}px!important`, window.scrollTo({ behavior: "instant", top: r }), setTimeout(() => {
        n.style = i, window.scrollTo({
          behavior: "smooth",
          top: n.offsetTop - e / 2
        });
      }, 50);
    }
  }
}
var ue = { exports: {} }, fe, Ze;
function mo() {
  if (Ze) return fe;
  Ze = 1;
  var n = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return fe = n, fe;
}
var de, Je;
function ho() {
  if (Je) return de;
  Je = 1;
  var n = /* @__PURE__ */ mo();
  function e() {
  }
  function a() {
  }
  return a.resetWarningCache = e, de = function() {
    function r(s, p, f, d, m, y) {
      if (y !== n) {
        var E = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw E.name = "Invariant Violation", E;
      }
    }
    r.isRequired = r;
    function i() {
      return r;
    }
    var l = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: i,
      element: r,
      elementType: r,
      instanceOf: i,
      node: r,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: a,
      resetWarningCache: e
    };
    return l.PropTypes = l, l;
  }, de;
}
var tn;
function go() {
  return tn || (tn = 1, ue.exports = /* @__PURE__ */ ho()()), ue.exports;
}
var yo = /* @__PURE__ */ go();
const tt = /* @__PURE__ */ zn(yo);
tt.shape({
  event: tt.string,
  action: tt.string,
  name: tt.string,
  region: tt.string,
  section: tt.string,
  component: tt.string,
  type: tt.string,
  text: tt.string
});
const Nt = ({ children: n }) => /* @__PURE__ */ React.createElement(React.Fragment, null, n);
Nt.propTypes = {
  children: tt.oneOfType([
    tt.arrayOf(tt.node),
    tt.node,
    tt.string
  ])
};
var pe = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var en;
function Eo() {
  return en || (en = 1, function(n) {
    (function() {
      var e = {}.hasOwnProperty;
      function a() {
        for (var l = "", s = 0; s < arguments.length; s++) {
          var p = arguments[s];
          p && (l = i(l, r(p)));
        }
        return l;
      }
      function r(l) {
        if (typeof l == "string" || typeof l == "number")
          return l;
        if (typeof l != "object")
          return "";
        if (Array.isArray(l))
          return a.apply(null, l);
        if (l.toString !== Object.prototype.toString && !l.toString.toString().includes("[native code]"))
          return l.toString();
        var s = "";
        for (var p in l)
          e.call(l, p) && l[p] && (s = i(s, p));
        return s;
      }
      function i(l, s) {
        return s ? l ? l + " " + s : l + s : l;
      }
      n.exports ? (a.default = a, n.exports = a) : window.classNames = a;
    })();
  }(pe)), pe.exports;
}
Eo();
({
  ...Nt.propTypes
});
const pn = ({ children: n, className: e = "container", ...a }) => /* @__PURE__ */ React.createElement("div", { className: e, ...a }, /* @__PURE__ */ React.createElement("div", { className: "row" }, n));
pn.propTypes = {
  children: Nt.propTypes.children
};
({
  ...pn.propTypes
});
Nt.propTypes.children, tt.oneOf(["0", "3", "4", "6", "8", "9", "12"]);
Nt.propTypes.children;
function mn() {
  var O, ot;
  const a = ["asu-header", "asuHeader"].find((D) => document.getElementById(D)), r = document.getElementById(a), i = document.getElementById("uds-anchor-menu");
  if (!i || !r) {
    console.warn(
      "Anchor menu initialization failed: required elements not found"
    );
    return;
  }
  const l = i.parentNode, s = i.nextSibling, p = Array.from(i.getElementsByClassName("nav-link")), f = /* @__PURE__ */ new Map();
  let d = window.scrollY, m = !1;
  const y = ((O = document.getElementById("toolbar-bar")) == null ? void 0 : O.offsetHeight) || 0, E = ((ot = document.getElementById("toolbar-item-administration-tray")) == null ? void 0 : ot.offsetHeight) || 0, C = y + E, b = i.getBoundingClientRect().top + window.scrollY - C;
  for (let D of p) {
    const U = D.getAttribute("href");
    if (!U || !U.startsWith("#"))
      continue;
    const B = U.replace("#", ""), I = document.getElementById(B);
    I ? f.set(D, I) : console.warn(`Anchor menu: target element "${B}" not found`);
  }
  window.scrollY > b && (r.appendChild(i), m = !0, i.classList.add("uds-anchor-menu-attached"));
  function w(D, U = 0) {
    if (!D || U > 10)
      return 0;
    if (D.offsetHeight === 0 || D.offsetWidth === 0)
      return w(D.parentElement, U + 1);
    const B = D.getBoundingClientRect(), I = window.innerHeight || document.documentElement.clientHeight, W = window.innerWidth || document.documentElement.clientWidth, R = B.bottom - B.top, q = B.right - B.left, V = R * q, Q = Math.min(I, B.bottom) - Math.max(0, B.top), rt = Math.min(W, B.right) - Math.max(0, B.left);
    return Q * rt / V * 100;
  }
  const S = function() {
    let D = 0, U = null;
    if (p.forEach((R) => {
      const q = f.get(R);
      if (!q)
        return;
      const V = w(q);
      V > 0 && V > D && (D = V, U = q.id);
    }), U) {
      const R = document.querySelector(
        '[href="#' + U + '"]'
      );
      R && R.classList.add("active"), i.querySelectorAll(
        'a.nav-link:not([href="#' + U + '"])'
      ).forEach(function(q) {
        q.classList.remove("active");
      });
    }
    const B = i.getBoundingClientRect().top, I = r.getBoundingClientRect().bottom, W = window.scrollY > d;
    if (W && I >= B && (m || (r.appendChild(i), m = !0, i.classList.add("uds-anchor-menu-attached"))), !W && m) {
      const R = r.getBoundingClientRect().bottom, q = i.getBoundingClientRect().top;
      (window.scrollY <= b || R < q) && (l.insertBefore(i, s), m = !1, i.classList.remove("uds-anchor-menu-attached"));
    }
    d = window.scrollY;
  };
  let $;
  $ = (() => {
    let D = !1;
    return () => {
      D || (D = !0, S(), setTimeout(() => {
        D = !1;
      }, 100));
    };
  })(), window.addEventListener("scroll", $, { passive: !0 });
  for (let [D, U] of f)
    D.addEventListener("click", function(B) {
      if (B.preventDefault(), !U || !document.body.contains(U)) {
        console.warn("Anchor target no longer exists in DOM");
        return;
      }
      const I = window.innerHeight, W = Math.round(I * 0.25);
      let q = U.getBoundingClientRect().top + window.scrollY - W;
      window.scrollTo({
        top: q,
        behavior: "smooth"
      });
      const V = i.querySelector(".nav-link.active");
      V && V.classList.remove("active"), B.target.classList.add("active");
    });
}
k.on(window, "load.uds.anchor-menu", mn);
function hn() {
  const n = document.querySelectorAll('mark[class^="pen-"]'), e = new IntersectionObserver(
    (a) => {
      a.forEach((r) => {
        r.isIntersecting ? r.target.classList.add("animate-bg-in-scroll") : r.target.classList.remove("animate-bg-in-scroll");
      });
    },
    {
      threshold: 0.1
    }
  );
  n.forEach((a) => {
    e.observe(a);
  });
}
k.on(
  window,
  "load.uds.blockquote-animation",
  hn
);
function gn() {
  const n = [
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
  ], a = ["Su", "M", "Tu", "W", "Th", "F", "Sa"], i = {
    month: (/* @__PURE__ */ new Date()).getMonth(),
    year: (/* @__PURE__ */ new Date()).getFullYear()
  }, l = (f, d) => {
    const m = /* @__PURE__ */ new Date(), y = [], E = new Date(f, d).getDay(), C = new Date(f, d + 1, 0).getDate(), b = new Date(f, d, 0).getDate();
    for (let _ = 1; _ <= E; _++) {
      const w = b - E + _, S = new Date(
        i.year,
        i.month - 1,
        w
      ).toLocaleString();
      y.push({ key: S, date: w, monthClass: "prev" });
    }
    for (let _ = 1; _ <= C; _++) {
      const w = new Date(i.year, i.month, _).toLocaleString();
      _ === m.getDate() && i.month === m.getMonth() && i.year === m.getFullYear() ? y.push({
        key: w,
        date: _,
        monthClass: "current",
        todayClass: "today"
      }) : y.push({ key: w, date: _, monthClass: "current" });
    }
    if (y.length < 42) {
      const _ = 42 - y.length;
      for (let w = 1; w <= _; w++) {
        const S = new Date(i.year, i.month + 1, w).toLocaleString();
        y.push({ key: S, date: w, monthClass: "next" });
      }
    }
    return y;
  }, s = () => {
    const f = document.getElementById("calendar");
    f && (f.innerHTML = `
      <h2><span class="highlight-black">${n[i.month]} ${i.year}</span></h2>
      <div class="calendar-grid">
        <div class="heading desktop">
          ${e.map((d) => `<p>${d}</p>`).join("")}
        </div>
        <div class="heading mobile">
          ${a.map((d) => `<p>${d}</p>`).join("")}
        </div>
        <div class="body">
          ${l(i.year, i.month).map(
      (d) => `<h3 id="${d.key}" class="calendar-item ${d.monthClass}" ${d.todayClass ? `aria-label="${d.todayClass[0].toUpperCase()}${d.todayClass.slice(
        1
      )}"` : ""}>
                  <span class="${d.todayClass ? d.todayClass : ""}">${d.date}</span>
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
  ((f) => {
    var d = new Date(i.year, i.month + f);
    i.year = d.getFullYear(), i.month = d.getMonth(), s();
  })(0);
}
k.on(window, "load.uds.calendar", gn);
function Ee() {
  const n = document.querySelectorAll(".card-body");
  if (n.length === 0 && 0 < 3) {
    setTimeout(() => Ee(), 500);
    return;
  }
  if (n.length === 0) {
    console.warn("No .card-body found after 3 retries.");
    return;
  }
  n.forEach((a, r) => {
    const i = a.querySelector("div p"), l = i.textContent, s = window.getComputedStyle(a), p = parseInt(s.webkitLineClamp || s.lineClamp), f = parseFloat(s.lineHeight), d = parseFloat(s.fontSize), m = isNaN(f) ? parseFloat(s.lineHeight) * d : f, y = p * m;
    if (i.offsetHeight >= y) {
      let E = "";
      const C = l.split(" ");
      let b = 0, _ = "";
      for (; b < C.length && _o(
        _ + (_ ? " " : "") + C[b],
        i
      ) <= y; )
        _ += (_ ? " " : "") + C[b], b++;
      E = _ + "...";
      const w = `visible-text-${Math.random().toString(36).substring(7)}`, S = document.createElement("div");
      S.id = w, S.textContent = E, S.style.position = "absolute", S.style.top = `${i.offsetTop}px`, S.style.left = `${i.offsetLeft}px`, S.style.width = `${i.offsetWidth}px`, S.style.height = `${i.offsetHeight}px`, S.style.opacity = "0", S.style.pointerEvents = "none", S.style.zIndex = "1", a.appendChild(S), i.setAttribute("aria-describedby", w), i.setAttribute("aria-hidden", "true");
    }
  });
}
function _o(n, e) {
  const a = document.createElement(e.tagName);
  a.style.font = window.getComputedStyle(e).font, a.style.width = window.getComputedStyle(e).width, a.style.whiteSpace = "pre-wrap", a.textContent = n, document.body.appendChild(a);
  const r = a.offsetHeight;
  return document.body.removeChild(a), r;
}
k.on(window, "load.uds.card-bodies", Ee);
function yn() {
  const n = document.querySelector(".info-layer"), e = document.getElementById("dispatch");
  k.on(e, "click", function() {
    n == null || n.classList.toggle("active");
  });
}
k.on(window, "load.uds.ranking-card", yn);
function En() {
  ee.Chart.register(...ee.registerables);
  const n = 50;
  var e = document.getElementById("uds-donut");
  if (!e)
    return;
  document.getElementById("percentage-display").innerHTML = n + "%";
  const a = {
    type: "doughnut",
    data: {
      datasets: [
        {
          data: [n, 100 - n],
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
  new ee.Chart(e, a);
}
k.on(window, "load.uds.chart", En);
function _n() {
  function n({ target: e }) {
    const a = e.getAttribute("href");
    e.getAttribute("data-bs-toggle") !== "collapse" || !a || !a.includes("#") || po(
      document.querySelector(".collapsing")
    );
  }
  k.on(document, "click.uds.collapse", n);
}
k.on(window, "load.uds.collapse", _n);
function _e() {
  var e, a, r, i;
  const n = (l) => {
    window.dataLayer = window.dataLayer || [];
    const { dataLayer: s } = window;
    s && s.push(l);
  };
  (e = document.querySelectorAll("[data-ga-header]")) == null || e.forEach(
    (l) => l.addEventListener("click", () => {
      const s = l.getAttribute("data-ga-header-event") || "link";
      let p = l.getAttribute("data-ga-header-action") || "click";
      const f = l.getAttribute("aria-expanded");
      f && (p = f === "false" ? "open" : "close");
      const d = l.getAttribute("data-ga-header-type") || "internal link", m = l.getAttribute("data-ga-header-section") || "main navbar", y = l.getAttribute("data-ga-header") || "", E = l.getAttribute("data-ga-header-component");
      n({
        name: "onclick",
        event: s.toLowerCase(),
        action: p.toLowerCase(),
        type: d.toLowerCase(),
        section: m.toLowerCase(),
        region: "navbar",
        text: y.toLowerCase(),
        ...E && {
          component: E.toLowerCase()
        }
      });
    })
  ), (a = document.querySelectorAll("[data-ga-input-header-event]")) == null || a.forEach(
    (l) => l.addEventListener("change", (s) => {
      const p = l.getAttribute("data-ga-input-header-event") || "", f = s.target.value || "";
      n({
        name: "onenter",
        action: "type",
        type: "main search",
        section: "topbar",
        region: "navbar",
        text: f.toLowerCase(),
        event: p.toLowerCase()
      });
    })
  ), (r = document.querySelectorAll("[data-ga]")) == null || r.forEach(
    (l) => l.addEventListener("click", () => {
      const s = {};
      Array.from(l.attributes).forEach((f) => {
        if (f.name.startsWith("data-ga-")) {
          const d = f.name.replace("data-ga-", ""), m = f.value;
          m && (s[d] = m.toLowerCase());
        } else if (f.name === "data-ga") {
          const d = f.value;
          d && (s.text = d.toLowerCase());
        }
      });
      const p = l.getAttribute("aria-expanded");
      p && (s.action = p === "false" ? "open" : "close"), n(s);
    })
  ), (i = document.querySelectorAll("[data-ga-input]")) == null || i.forEach(
    (l) => l.addEventListener("change", (s) => {
      const p = l.getAttribute("data-ga-input-name") || "", f = l.getAttribute("data-ga-input-action") || "", d = l.getAttribute("data-ga-input") || "", m = l.getAttribute("data-ga-input-region") || "", y = l.getAttribute("data-ga-input-section") || "";
      let E = l.getAttribute("data-ga-input-event") || "", C;
      switch (d) {
        case "checkbox":
          C = s.target.labels[0].textContent || "", E = s.target.checked ? E : "deselect";
          break;
        case "radio button":
          C = s.target.labels[0].textContent || "";
          break;
        case "blur":
          C = s.target.value.toLowerCase() || "";
          break;
        default:
          C = [...s.target.selectedOptions].map((b) => b.value).join(",") || "";
          break;
      }
      n({
        name: p.toLowerCase(),
        event: E.toLowerCase(),
        action: f.toLowerCase(),
        type: d.toLowerCase(),
        section: y.toLowerCase(),
        region: m.toLowerCase(),
        text: C.toLowerCase()
      });
    })
  ), document.querySelectorAll("[data-ga-footer]").forEach(
    (l) => l.addEventListener("focus", () => {
      const s = {
        type: l.getAttribute("data-ga-footer-type").toLowerCase(),
        section: l.getAttribute("data-ga-footer-section").toLowerCase(),
        text: l.getAttribute("data-ga-footer").toLowerCase()
      };
      n({
        event: "link",
        action: "click",
        name: "onclick",
        region: "footer",
        ...s
      });
    })
  );
}
window.initDataLayer = window.initDataLayer || _e;
k.on(window, "load.uds.data-layer", _e);
const Te = () => {
  const n = () => {
    const e = document.getElementById("asu-header");
    window.scrollY > (e == null ? void 0 : e.getBoundingClientRect().top) ? e == null || e.classList.add("scrolled") : e == null || e.classList.remove("scrolled");
  };
  k.on(window, "scroll.uds.header", n);
};
window.initGlobalHeader = window.initGlobalHeader || Te;
k.on(window, "load.uds.global-header", Te);
function Tn() {
  const n = ".uds-video-hero", e = n + " video", a = n + " #playHeroVid", r = n + " #pauseHeroVid", i = "click", l = "block", s = "none", p = document.querySelector(e), f = document.querySelector(a), d = document.querySelector(r);
  function m(b) {
    b.paused ? b.play() : b.pause();
  }
  function y(b, _) {
    getComputedStyle(b).display === s ? (_.style.display = s, b.style.display = l, b.focus()) : (b.style.display = s, _.style.display = l, _.focus());
  }
  function E(b) {
    b.stopPropagation(), y(f, d), m(p);
  }
  function C(b) {
    b.stopPropagation(), y(f, d), m(p);
  }
  d == null || d.addEventListener(i, E), f == null || f.addEventListener(i, C);
}
k.on(window, "load.uds.heroes-video", Tn);
const An = () => {
  const e = () => {
    document.querySelectorAll(".parallax-container").forEach((s) => {
      const p = s.querySelector("img"), f = s.offsetHeight - p.height * 1.2, d = p.dataset.parallaxType === "scroll-to" ? window.innerHeight : window.innerHeight + s.offsetHeight, m = s.getBoundingClientRect().top, E = (window.innerHeight - m) / d;
      if (E < 0)
        p.style.top = f + "px";
      else if (E > 1)
        p.style.top = "0";
      else {
        const C = f * (1 - E);
        p.style.top = C + "px";
      }
    });
  }, a = (s) => {
    const p = s.parentNode, f = s.width, d = s.height;
    let m = p.offsetWidth / f, y = 0, E = d * m, C = f * m;
    const b = +s.dataset.parallaxFactor || 1.2;
    !s.dataset.noScale && E < p.offsetHeight * b && (m = p.offsetHeight * b / E, E *= m, C *= m, y = (C - p.offsetWidth) / 2 * -1), s.style.height = E + "px", s.style.left = y + "px";
  }, r = () => {
    document.querySelectorAll(".parallax-container img").forEach((s, p) => {
      s.complete ? a(s) : s.onload = () => a(s);
    });
  }, i = (s) => {
    const { dataLayer: p } = window, f = {
      event: "link",
      action: "click",
      name: "onclick",
      type: "internal link",
      region: "main content",
      ...s
    };
    p && p.push(f);
  };
  document.querySelectorAll("[data-ga-image-parallax]").forEach(
    (s) => k.on(s, "focus.uds.image-parallax", () => {
      const p = {
        section: s.getAttribute("data-ga-image-parallax-section").toLowerCase(),
        text: s.getAttribute("data-ga-image-parallax").toLowerCase()
      };
      i(p);
    })
  ), r(), k.on(window, "resize.uds.image-parallax", r), k.on(window, "scroll.uds.image-parallax", e);
};
k.on(window, "load.uds.image-parallax", An);
function bn() {
  var n, e;
  (n = document.getElementById("openModalButton")) == null || n.addEventListener("click", function() {
    document.getElementById("uds-modal").classList.add("open");
  }), (e = document.getElementById("closeModalButton")) == null || e.addEventListener("click", function() {
    document.getElementById("uds-modal").classList.remove("open");
  });
}
k.on(window, "load.uds.modals", bn);
function Sn() {
  const n = "a", e = "button", a = ".nav-tabs", r = ".nav-item", i = ".uds-tabbed-panels", l = ".scroll-control-prev", s = ".scroll-control-next", p = "click", f = "scroll", d = "focus", m = "none", y = "block", b = (_) => {
    [n, e].includes(_.target.localName) && _.target.focus();
  };
  document.querySelectorAll(i).forEach((_) => {
    const w = _.querySelector(a), S = _.querySelectorAll(r), $ = _.querySelector(
      l
    ), K = _.querySelector(
      s
    );
    let O = 0;
    _.addEventListener(p, function(I) {
      b(I);
    });
    const ot = (I, W, R) => {
      W.preventDefault();
      const V = getComputedStyle(w).left.replace("px", "");
      let Q = parseInt(V, 10);
      R === 1 && O > 0 && (O -= 1), O < S.length - 1 && R == -1 && (O += 1), w.dataset.scrollPosition = O, Q = 0;
      for (var rt = 0; rt < O; rt++)
        Q += S[rt].offsetWidth + parseInt(getComputedStyle(S[rt]).marginLeft, 10) + parseInt(getComputedStyle(S[rt]).marginRight, 10);
      w.scrollLeft = Q, D(I, Q);
    }, D = (I, W) => {
      const R = w.scrollWidth - W;
      O == 0 ? $.style.display = m : $.style.display = y, R <= _.offsetWidth ? K.style.display = m : K.style.display = y;
    };
    w.addEventListener(f, (I) => {
      const W = I.target.scrollLeft, R = w.offsetWidth + W + 10 >= w.scrollWidth;
      $.style.display = W < 10 ? m : y, K.style.display = R ? m : y;
    }), S.forEach((I) => {
      I.addEventListener(d, function(W) {
        I.scrollIntoView();
      });
    }), K.addEventListener(p, function(I) {
      window.innerWidth > 992 && ot(this, I, -1);
    }), $.addEventListener(p, function(I) {
      window.innerWidth > 992 && ot(this, I, 1);
    }), $.style.display = m;
    const U = w.scrollWidth, B = _.offsetWidth;
    U <= B && (K.style.display = m);
  });
}
k.on(window, "load.uds.tabs", Sn);
function wn() {
  function n() {
    const r = ".uds-table-fixed-wrapper", i = ".uds-table.uds-table-fixed table", l = ".scroll-control.previous";
    document.querySelectorAll(r).forEach((p, f) => {
      const d = p.querySelector(i);
      d.setAttribute("id", "uds-table-" + f);
      const m = d.querySelector("tbody tr > *"), y = p.querySelector(l);
      y.style.left = m.offsetWidth + "px";
    });
  }
  function e() {
    const r = ".uds-table-fixed", i = ".uds-table-fixed-wrapper", l = ".scroll-control.previous", s = ".scroll-control.next";
    document.querySelectorAll(i).forEach((f, d) => {
      const m = f.querySelector(r), y = f.querySelector(l), E = f.querySelector(s);
      ["click", "focus"].forEach((C) => {
        k.on(y, C, function() {
          m.scrollLeft -= 100;
        }), k.on(E, C, function() {
          m.scrollLeft += 100;
        });
      });
    });
  }
  function a(r, i) {
    let l;
    return (...s) => {
      clearTimeout(l), l = setTimeout(() => {
        r.apply(this, s);
      }, i);
    };
  }
  n(), e(), k.on(window, "resize", function() {
    a(n, 100)();
  });
}
k.on(window, "load.uds.fixed-table", wn);
function vn() {
  const n = ".uds-video-player", e = n + " video", a = n + " .uds-video-btn-play", r = n + " .uds-video-overlay", i = "click", l = "ended", s = "flex", p = "none", f = document.querySelector(e), d = document.querySelector(r), m = document.querySelector(a);
  function y(S) {
    S.style.display === p ? S.style.display = s : S.style.display = p;
  }
  function E(S) {
    S.paused ? S.play() : S.pause();
  }
  function C(S) {
    E(this), y(this.nextElementSibling);
  }
  function b(S) {
    S.stopPropagation();
    const $ = this.parentNode;
    y($), E(f);
  }
  function _(S) {
    y(this), E(f);
  }
  function w(S) {
    y(d);
  }
  f == null || f.addEventListener(i, C), m == null || m.addEventListener(i, b), d == null || d.addEventListener(i, _), f == null || f.addEventListener(l, w);
}
k.on(window, "load.uds.video", vn);
const To = {
  // Banner, // code updated to use bootstrap alert so we don't need this
  initAnchorMenu: mn,
  initBlockquoteAnimation: hn,
  initCalendar: gn,
  initCollapse: _n,
  initChart: En,
  initDataLayer: _e,
  initFixedTable: wn,
  initGlobalHeader: Te,
  initHeroesVideo: Tn,
  initImageParallax: An,
  initModals: bn,
  initRankingCard: yn,
  initTabbedPanels: Sn,
  initVideo: vn,
  initCardBodies: Ee
};
export {
  To as default
};
//# sourceMappingURL=unity-bootstrap.es.js.map
