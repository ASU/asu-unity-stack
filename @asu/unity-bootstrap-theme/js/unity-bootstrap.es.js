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
  e in nn && (s = ((v) => function(y) {
    if (!y.relatedTarget || y.relatedTarget !== y.delegateTarget && !y.delegateTarget.contains(y.relatedTarget))
      return v.call(this, y);
  })(s));
  const f = rn(n), d = f[p] || (f[p] = {}), m = an(d, s, l ? a : null);
  if (m) {
    m.oneOff = m.oneOff && i;
    return;
  }
  const E = on(s, e.replace(kn, "")), _ = l ? Un(n, a, s) : Bn(n, s);
  _.delegationSelector = l ? a : null, _.callable = s, _.oneOff = i, _.uidEvent = E, d[E] = _, n.addEventListener(p, _, l);
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
      for (const E of Object.keys(f))
        Wn(n, f, E, e.slice(1));
    for (const [E, _] of Object.entries(d)) {
      const w = E.replace(Hn, "");
      (!p || e.includes(w)) && me(n, f, s, _.callable, _.delegationSelector);
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
var oe = { exports: {} }, L = {}, ze;
function qn() {
  if (ze) return L;
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
  var n = Symbol.for("react.element"), e = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), s = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), d = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), E = Symbol.iterator;
  function _(o) {
    return o === null || typeof o != "object" ? null : (o = E && o[E] || o["@@iterator"], typeof o == "function" ? o : null);
  }
  var w = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, v = Object.assign, y = {};
  function b(o, u, T) {
    this.props = o, this.context = u, this.refs = y, this.updater = T || w;
  }
  b.prototype.isReactComponent = {}, b.prototype.setState = function(o, u) {
    if (typeof o != "object" && typeof o != "function" && o != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, o, u, "setState");
  }, b.prototype.forceUpdate = function(o) {
    this.updater.enqueueForceUpdate(this, o, "forceUpdate");
  };
  function S() {
  }
  S.prototype = b.prototype;
  function V(o, u, T) {
    this.props = o, this.context = u, this.refs = y, this.updater = T || w;
  }
  var Q = V.prototype = new S();
  Q.constructor = V, v(Q, b.prototype), Q.isPureReactComponent = !0;
  var x = Array.isArray, ot = Object.prototype.hasOwnProperty, it = { current: null }, R = { key: !0, ref: !0, __self: !0, __source: !0 };
  function P(o, u, T) {
    var I, A = {}, M = null, H = null;
    if (u != null) for (I in u.ref !== void 0 && (H = u.ref), u.key !== void 0 && (M = "" + u.key), u) ot.call(u, I) && !R.hasOwnProperty(I) && (A[I] = u[I]);
    var N = arguments.length - 2;
    if (N === 1) A.children = T;
    else if (1 < N) {
      for (var F = Array(N), Z = 0; Z < N; Z++) F[Z] = arguments[Z + 2];
      A.children = F;
    }
    if (o && o.defaultProps) for (I in N = o.defaultProps, N) A[I] === void 0 && (A[I] = N[I]);
    return { $$typeof: n, type: o, key: M, ref: H, props: A, _owner: it.current };
  }
  function O(o, u) {
    return { $$typeof: n, type: o.type, key: u, ref: o.ref, props: o.props, _owner: o._owner };
  }
  function U(o) {
    return typeof o == "object" && o !== null && o.$$typeof === n;
  }
  function D(o) {
    var u = { "=": "=0", ":": "=2" };
    return "$" + o.replace(/[=:]/g, function(T) {
      return u[T];
    });
  }
  var j = /\/+/g;
  function z(o, u) {
    return typeof o == "object" && o !== null && o.key != null ? D("" + o.key) : u.toString(36);
  }
  function W(o, u, T, I, A) {
    var M = typeof o;
    (M === "undefined" || M === "boolean") && (o = null);
    var H = !1;
    if (o === null) H = !0;
    else switch (M) {
      case "string":
      case "number":
        H = !0;
        break;
      case "object":
        switch (o.$$typeof) {
          case n:
          case e:
            H = !0;
        }
    }
    if (H) return H = o, A = A(H), o = I === "" ? "." + z(H, 0) : I, x(A) ? (T = "", o != null && (T = o.replace(j, "$&/") + "/"), W(A, u, T, "", function(Z) {
      return Z;
    })) : A != null && (U(A) && (A = O(A, T + (!A.key || H && H.key === A.key ? "" : ("" + A.key).replace(j, "$&/") + "/") + o)), u.push(A)), 1;
    if (H = 0, I = I === "" ? "." : I + ":", x(o)) for (var N = 0; N < o.length; N++) {
      M = o[N];
      var F = I + z(M, N);
      H += W(M, u, T, F, A);
    }
    else if (F = _(o), typeof F == "function") for (o = F.call(o), N = 0; !(M = o.next()).done; ) M = M.value, F = I + z(M, N++), H += W(M, u, T, F, A);
    else if (M === "object") throw u = String(o), Error("Objects are not valid as a React child (found: " + (u === "[object Object]" ? "object with keys {" + Object.keys(o).join(", ") + "}" : u) + "). If you meant to render a collection of children, use an array instead.");
    return H;
  }
  function $(o, u, T) {
    if (o == null) return o;
    var I = [], A = 0;
    return W(o, I, "", "", function(M) {
      return u.call(T, M, A++);
    }), I;
  }
  function ht(o) {
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
  var q = { current: null }, lt = { transition: null }, wt = { ReactCurrentDispatcher: q, ReactCurrentBatchConfig: lt, ReactCurrentOwner: it };
  function gt() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return L.Children = { map: $, forEach: function(o, u, T) {
    $(o, function() {
      u.apply(this, arguments);
    }, T);
  }, count: function(o) {
    var u = 0;
    return $(o, function() {
      u++;
    }), u;
  }, toArray: function(o) {
    return $(o, function(u) {
      return u;
    }) || [];
  }, only: function(o) {
    if (!U(o)) throw Error("React.Children.only expected to receive a single React element child.");
    return o;
  } }, L.Component = b, L.Fragment = a, L.Profiler = i, L.PureComponent = V, L.StrictMode = r, L.Suspense = f, L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wt, L.act = gt, L.cloneElement = function(o, u, T) {
    if (o == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + o + ".");
    var I = v({}, o.props), A = o.key, M = o.ref, H = o._owner;
    if (u != null) {
      if (u.ref !== void 0 && (M = u.ref, H = it.current), u.key !== void 0 && (A = "" + u.key), o.type && o.type.defaultProps) var N = o.type.defaultProps;
      for (F in u) ot.call(u, F) && !R.hasOwnProperty(F) && (I[F] = u[F] === void 0 && N !== void 0 ? N[F] : u[F]);
    }
    var F = arguments.length - 2;
    if (F === 1) I.children = T;
    else if (1 < F) {
      N = Array(F);
      for (var Z = 0; Z < F; Z++) N[Z] = arguments[Z + 2];
      I.children = N;
    }
    return { $$typeof: n, type: o.type, key: A, ref: M, props: I, _owner: H };
  }, L.createContext = function(o) {
    return o = { $$typeof: s, _currentValue: o, _currentValue2: o, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, o.Provider = { $$typeof: l, _context: o }, o.Consumer = o;
  }, L.createElement = P, L.createFactory = function(o) {
    var u = P.bind(null, o);
    return u.type = o, u;
  }, L.createRef = function() {
    return { current: null };
  }, L.forwardRef = function(o) {
    return { $$typeof: p, render: o };
  }, L.isValidElement = U, L.lazy = function(o) {
    return { $$typeof: m, _payload: { _status: -1, _result: o }, _init: ht };
  }, L.memo = function(o, u) {
    return { $$typeof: d, type: o, compare: u === void 0 ? null : u };
  }, L.startTransition = function(o) {
    var u = lt.transition;
    lt.transition = {};
    try {
      o();
    } finally {
      lt.transition = u;
    }
  }, L.unstable_act = gt, L.useCallback = function(o, u) {
    return q.current.useCallback(o, u);
  }, L.useContext = function(o) {
    return q.current.useContext(o);
  }, L.useDebugValue = function() {
  }, L.useDeferredValue = function(o) {
    return q.current.useDeferredValue(o);
  }, L.useEffect = function(o, u) {
    return q.current.useEffect(o, u);
  }, L.useId = function() {
    return q.current.useId();
  }, L.useImperativeHandle = function(o, u, T) {
    return q.current.useImperativeHandle(o, u, T);
  }, L.useInsertionEffect = function(o, u) {
    return q.current.useInsertionEffect(o, u);
  }, L.useLayoutEffect = function(o, u) {
    return q.current.useLayoutEffect(o, u);
  }, L.useMemo = function(o, u) {
    return q.current.useMemo(o, u);
  }, L.useReducer = function(o, u, T) {
    return q.current.useReducer(o, u, T);
  }, L.useRef = function(o) {
    return q.current.useRef(o);
  }, L.useState = function(o) {
    return q.current.useState(o);
  }, L.useSyncExternalStore = function(o, u, T) {
    return q.current.useSyncExternalStore(o, u, T);
  }, L.useTransition = function() {
    return q.current.useTransition();
  }, L.version = "18.3.1", L;
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
  create: qt
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
const Wt = nt(Array.prototype.forEach), $n = nt(Array.prototype.lastIndexOf), Ve = nt(Array.prototype.pop), Rt = nt(Array.prototype.push), Xn = nt(Array.prototype.splice), Gt = nt(String.prototype.toLowerCase), re = nt(String.prototype.toString), ae = nt(String.prototype.match), Ot = nt(String.prototype.replace), Kn = nt(String.prototype.indexOf), Qn = nt(String.prototype.trim), at = nt(Object.prototype.hasOwnProperty), J = nt(RegExp.prototype.test), Dt = Zn(TypeError);
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
function C(n, e) {
  let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Gt;
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
    at(n, e) || (n[e] = null);
  return n;
}
function ft(n) {
  const e = qt(null);
  for (const [a, r] of cn(n))
    at(n, a) && (Array.isArray(r) ? e[a] = Jn(r) : r && typeof r == "object" && r.constructor === Object ? e[a] = ft(r) : e[a] = r);
  return e;
}
function xt(n, e) {
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
const Ye = et(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ie = et(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), se = et(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), to = et(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), le = et(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), eo = et(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), je = et(["#text"]), $e = et(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), ce = et(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Xe = et(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), zt = et(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), no = st(/\{\{[\w\W]*|[\w\W]*\}\}/gm), oo = st(/<%[\w\W]*|[\w\W]*%>/gm), ro = st(/\$\{[\w\W]*/gm), ao = st(/^data-[\-\w.\u00B7-\uFFFF]+$/), io = st(/^aria-[\-\w]+$/), un = st(
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
const Nt = {
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
  if (e.version = "3.3.2", e.removed = [], !n || !n.document || n.document.nodeType !== Nt.document || !n.Element)
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
    HTMLFormElement: E,
    DOMParser: _,
    trustedTypes: w
  } = n, v = f.prototype, y = xt(v, "cloneNode"), b = xt(v, "remove"), S = xt(v, "nextSibling"), V = xt(v, "childNodes"), Q = xt(v, "parentNode");
  if (typeof s == "function") {
    const g = a.createElement("template");
    g.content && g.content.ownerDocument && (a = g.content.ownerDocument);
  }
  let x, ot = "";
  const {
    implementation: it,
    createNodeIterator: R,
    createDocumentFragment: P,
    getElementsByTagName: O
  } = a, {
    importNode: U
  } = r;
  let D = Qe();
  e.isSupported = typeof cn == "function" && typeof Q == "function" && it && it.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: j,
    ERB_EXPR: z,
    TMPLIT_EXPR: W,
    DATA_ATTR: $,
    ARIA_ATTR: ht,
    IS_SCRIPT_OR_DATA: q,
    ATTR_WHITESPACE: lt,
    CUSTOM_ELEMENT: wt
  } = Ke;
  let {
    IS_ALLOWED_URI: gt
  } = Ke, o = null;
  const u = C({}, [...Ye, ...ie, ...se, ...le, ...je]);
  let T = null;
  const I = C({}, [...$e, ...ce, ...Xe, ...zt]);
  let A = Object.seal(qt(null, {
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
  })), M = null, H = null;
  const N = Object.seal(qt(null, {
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
  let F = !0, Z = !0, Ae = !1, be = !0, _t = !1, Mt = !0, yt = !1, Vt = !1, Yt = !1, Tt = !1, kt = !1, Pt = !1, Se = !0, ve = !1;
  const Ln = "user-content-";
  let jt = !0, Lt = !1, At = {}, ct = null;
  const $t = C({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let we = null;
  const Le = C({}, ["audio", "video", "img", "source", "image", "track"]);
  let Xt = null;
  const Ce = C({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Ht = "http://www.w3.org/1998/Math/MathML", Ft = "http://www.w3.org/2000/svg", dt = "http://www.w3.org/1999/xhtml";
  let bt = dt, Kt = !1, Qt = null;
  const Cn = C({}, [Ht, Ft, dt], re);
  let Bt = C({}, ["mi", "mo", "mn", "ms", "mtext"]), Ut = C({}, ["annotation-xml"]);
  const Rn = C({}, ["title", "style", "font", "a", "script"]);
  let Ct = null;
  const On = ["application/xhtml+xml", "text/html"], Dn = "text/html";
  let Y = null, St = null;
  const xn = a.createElement("form"), Re = function(t) {
    return t instanceof RegExp || t instanceof Function;
  }, Zt = function() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(St && St === t)) {
      if ((!t || typeof t != "object") && (t = {}), t = ft(t), Ct = // eslint-disable-next-line unicorn/prefer-includes
      On.indexOf(t.PARSER_MEDIA_TYPE) === -1 ? Dn : t.PARSER_MEDIA_TYPE, Y = Ct === "application/xhtml+xml" ? re : Gt, o = at(t, "ALLOWED_TAGS") ? C({}, t.ALLOWED_TAGS, Y) : u, T = at(t, "ALLOWED_ATTR") ? C({}, t.ALLOWED_ATTR, Y) : I, Qt = at(t, "ALLOWED_NAMESPACES") ? C({}, t.ALLOWED_NAMESPACES, re) : Cn, Xt = at(t, "ADD_URI_SAFE_ATTR") ? C(ft(Ce), t.ADD_URI_SAFE_ATTR, Y) : Ce, we = at(t, "ADD_DATA_URI_TAGS") ? C(ft(Le), t.ADD_DATA_URI_TAGS, Y) : Le, ct = at(t, "FORBID_CONTENTS") ? C({}, t.FORBID_CONTENTS, Y) : $t, M = at(t, "FORBID_TAGS") ? C({}, t.FORBID_TAGS, Y) : ft({}), H = at(t, "FORBID_ATTR") ? C({}, t.FORBID_ATTR, Y) : ft({}), At = at(t, "USE_PROFILES") ? t.USE_PROFILES : !1, F = t.ALLOW_ARIA_ATTR !== !1, Z = t.ALLOW_DATA_ATTR !== !1, Ae = t.ALLOW_UNKNOWN_PROTOCOLS || !1, be = t.ALLOW_SELF_CLOSE_IN_ATTR !== !1, _t = t.SAFE_FOR_TEMPLATES || !1, Mt = t.SAFE_FOR_XML !== !1, yt = t.WHOLE_DOCUMENT || !1, Tt = t.RETURN_DOM || !1, kt = t.RETURN_DOM_FRAGMENT || !1, Pt = t.RETURN_TRUSTED_TYPE || !1, Yt = t.FORCE_BODY || !1, Se = t.SANITIZE_DOM !== !1, ve = t.SANITIZE_NAMED_PROPS || !1, jt = t.KEEP_CONTENT !== !1, Lt = t.IN_PLACE || !1, gt = t.ALLOWED_URI_REGEXP || un, bt = t.NAMESPACE || dt, Bt = t.MATHML_TEXT_INTEGRATION_POINTS || Bt, Ut = t.HTML_INTEGRATION_POINTS || Ut, A = t.CUSTOM_ELEMENT_HANDLING || {}, t.CUSTOM_ELEMENT_HANDLING && Re(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (A.tagNameCheck = t.CUSTOM_ELEMENT_HANDLING.tagNameCheck), t.CUSTOM_ELEMENT_HANDLING && Re(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (A.attributeNameCheck = t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), t.CUSTOM_ELEMENT_HANDLING && typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (A.allowCustomizedBuiltInElements = t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), _t && (Z = !1), kt && (Tt = !0), At && (o = C({}, je), T = qt(null), At.html === !0 && (C(o, Ye), C(T, $e)), At.svg === !0 && (C(o, ie), C(T, ce), C(T, zt)), At.svgFilters === !0 && (C(o, se), C(T, ce), C(T, zt)), At.mathMl === !0 && (C(o, le), C(T, Xe), C(T, zt))), at(t, "ADD_TAGS") || (N.tagCheck = null), at(t, "ADD_ATTR") || (N.attributeCheck = null), t.ADD_TAGS && (typeof t.ADD_TAGS == "function" ? N.tagCheck = t.ADD_TAGS : (o === u && (o = ft(o)), C(o, t.ADD_TAGS, Y))), t.ADD_ATTR && (typeof t.ADD_ATTR == "function" ? N.attributeCheck = t.ADD_ATTR : (T === I && (T = ft(T)), C(T, t.ADD_ATTR, Y))), t.ADD_URI_SAFE_ATTR && C(Xt, t.ADD_URI_SAFE_ATTR, Y), t.FORBID_CONTENTS && (ct === $t && (ct = ft(ct)), C(ct, t.FORBID_CONTENTS, Y)), t.ADD_FORBID_CONTENTS && (ct === $t && (ct = ft(ct)), C(ct, t.ADD_FORBID_CONTENTS, Y)), jt && (o["#text"] = !0), yt && C(o, ["html", "head", "body"]), o.table && (C(o, ["tbody"]), delete M.tbody), t.TRUSTED_TYPES_POLICY) {
        if (typeof t.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Dt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof t.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Dt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        x = t.TRUSTED_TYPES_POLICY, ot = x.createHTML("");
      } else
        x === void 0 && (x = fo(w, i)), x !== null && typeof ot == "string" && (ot = x.createHTML(""));
      et && et(t), St = t;
    }
  }, Oe = C({}, [...ie, ...se, ...to]), De = C({}, [...le, ...eo]), Nn = function(t) {
    let c = Q(t);
    (!c || !c.tagName) && (c = {
      namespaceURI: bt,
      tagName: "template"
    });
    const h = Gt(t.tagName), B = Gt(c.tagName);
    return Qt[t.namespaceURI] ? t.namespaceURI === Ft ? c.namespaceURI === dt ? h === "svg" : c.namespaceURI === Ht ? h === "svg" && (B === "annotation-xml" || Bt[B]) : !!Oe[h] : t.namespaceURI === Ht ? c.namespaceURI === dt ? h === "math" : c.namespaceURI === Ft ? h === "math" && Ut[B] : !!De[h] : t.namespaceURI === dt ? c.namespaceURI === Ft && !Ut[B] || c.namespaceURI === Ht && !Bt[B] ? !1 : !De[h] && (Rn[h] || !Oe[h]) : !!(Ct === "application/xhtml+xml" && Qt[t.namespaceURI]) : !1;
  }, ut = function(t) {
    Rt(e.removed, {
      element: t
    });
    try {
      Q(t).removeChild(t);
    } catch {
      b(t);
    }
  }, Et = function(t, c) {
    try {
      Rt(e.removed, {
        attribute: c.getAttributeNode(t),
        from: c
      });
    } catch {
      Rt(e.removed, {
        attribute: null,
        from: c
      });
    }
    if (c.removeAttribute(t), t === "is")
      if (Tt || kt)
        try {
          ut(c);
        } catch {
        }
      else
        try {
          c.setAttribute(t, "");
        } catch {
        }
  }, xe = function(t) {
    let c = null, h = null;
    if (Yt)
      t = "<remove></remove>" + t;
    else {
      const G = ae(t, /^[\r\n\t ]+/);
      h = G && G[0];
    }
    Ct === "application/xhtml+xml" && bt === dt && (t = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + t + "</body></html>");
    const B = x ? x.createHTML(t) : t;
    if (bt === dt)
      try {
        c = new _().parseFromString(B, Ct);
      } catch {
      }
    if (!c || !c.documentElement) {
      c = it.createDocument(bt, "template", null);
      try {
        c.documentElement.innerHTML = Kt ? ot : B;
      } catch {
      }
    }
    const K = c.body || c.documentElement;
    return t && h && K.insertBefore(a.createTextNode(h), K.childNodes[0] || null), bt === dt ? O.call(c, yt ? "html" : "body")[0] : yt ? c.documentElement : K;
  }, Ne = function(t) {
    return R.call(
      t.ownerDocument || t,
      t,
      // eslint-disable-next-line no-bitwise
      d.SHOW_ELEMENT | d.SHOW_COMMENT | d.SHOW_TEXT | d.SHOW_PROCESSING_INSTRUCTION | d.SHOW_CDATA_SECTION,
      null
    );
  }, Jt = function(t) {
    return t instanceof E && (typeof t.nodeName != "string" || typeof t.textContent != "string" || typeof t.removeChild != "function" || !(t.attributes instanceof m) || typeof t.removeAttribute != "function" || typeof t.setAttribute != "function" || typeof t.namespaceURI != "string" || typeof t.insertBefore != "function" || typeof t.hasChildNodes != "function");
  }, Ie = function(t) {
    return typeof p == "function" && t instanceof p;
  };
  function pt(g, t, c) {
    Wt(g, (h) => {
      h.call(e, t, c, St);
    });
  }
  const Me = function(t) {
    let c = null;
    if (pt(D.beforeSanitizeElements, t, null), Jt(t))
      return ut(t), !0;
    const h = Y(t.nodeName);
    if (pt(D.uponSanitizeElement, t, {
      tagName: h,
      allowedTags: o
    }), Mt && t.hasChildNodes() && !Ie(t.firstElementChild) && J(/<[/\w!]/g, t.innerHTML) && J(/<[/\w!]/g, t.textContent) || t.nodeType === Nt.progressingInstruction || Mt && t.nodeType === Nt.comment && J(/<[/\w]/g, t.data))
      return ut(t), !0;
    if (!(N.tagCheck instanceof Function && N.tagCheck(h)) && (!o[h] || M[h])) {
      if (!M[h] && Pe(h) && (A.tagNameCheck instanceof RegExp && J(A.tagNameCheck, h) || A.tagNameCheck instanceof Function && A.tagNameCheck(h)))
        return !1;
      if (jt && !ct[h]) {
        const B = Q(t) || t.parentNode, K = V(t) || t.childNodes;
        if (K && B) {
          const G = K.length;
          for (let rt = G - 1; rt >= 0; --rt) {
            const mt = y(K[rt], !0);
            mt.__removalCount = (t.__removalCount || 0) + 1, B.insertBefore(mt, S(t));
          }
        }
      }
      return ut(t), !0;
    }
    return t instanceof f && !Nn(t) || (h === "noscript" || h === "noembed" || h === "noframes") && J(/<\/no(script|embed|frames)/i, t.innerHTML) ? (ut(t), !0) : (_t && t.nodeType === Nt.text && (c = t.textContent, Wt([j, z, W], (B) => {
      c = Ot(c, B, " ");
    }), t.textContent !== c && (Rt(e.removed, {
      element: t.cloneNode()
    }), t.textContent = c)), pt(D.afterSanitizeElements, t, null), !1);
  }, ke = function(t, c, h) {
    if (H[c] || Se && (c === "id" || c === "name") && (h in a || h in xn))
      return !1;
    if (!(Z && !H[c] && J($, c))) {
      if (!(F && J(ht, c))) {
        if (!(N.attributeCheck instanceof Function && N.attributeCheck(c, t))) {
          if (!T[c] || H[c]) {
            if (
              // First condition does a very basic check if a) it's basically a valid custom element tagname AND
              // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
              !(Pe(t) && (A.tagNameCheck instanceof RegExp && J(A.tagNameCheck, t) || A.tagNameCheck instanceof Function && A.tagNameCheck(t)) && (A.attributeNameCheck instanceof RegExp && J(A.attributeNameCheck, c) || A.attributeNameCheck instanceof Function && A.attributeNameCheck(c, t)) || // Alternative, second condition checks if it's an `is`-attribute, AND
              // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              c === "is" && A.allowCustomizedBuiltInElements && (A.tagNameCheck instanceof RegExp && J(A.tagNameCheck, h) || A.tagNameCheck instanceof Function && A.tagNameCheck(h)))
            ) return !1;
          } else if (!Xt[c]) {
            if (!J(gt, Ot(h, lt, ""))) {
              if (!((c === "src" || c === "xlink:href" || c === "href") && t !== "script" && Kn(h, "data:") === 0 && we[t])) {
                if (!(Ae && !J(q, Ot(h, lt, "")))) {
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
    return t !== "annotation-xml" && ae(t, wt);
  }, He = function(t) {
    pt(D.beforeSanitizeAttributes, t, null);
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
    let B = c.length;
    for (; B--; ) {
      const K = c[B], {
        name: G,
        namespaceURI: rt,
        value: mt
      } = K, vt = Y(G), te = mt;
      let X = G === "value" ? te : Qn(te);
      if (h.attrName = vt, h.attrValue = X, h.keepAttr = !0, h.forceKeepAttr = void 0, pt(D.uponSanitizeAttribute, t, h), X = h.attrValue, ve && (vt === "id" || vt === "name") && (Et(G, t), X = Ln + X), Mt && J(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, X)) {
        Et(G, t);
        continue;
      }
      if (vt === "attributename" && ae(X, "href")) {
        Et(G, t);
        continue;
      }
      if (h.forceKeepAttr)
        continue;
      if (!h.keepAttr) {
        Et(G, t);
        continue;
      }
      if (!be && J(/\/>/i, X)) {
        Et(G, t);
        continue;
      }
      _t && Wt([j, z, W], (Be) => {
        X = Ot(X, Be, " ");
      });
      const Fe = Y(t.nodeName);
      if (!ke(Fe, vt, X)) {
        Et(G, t);
        continue;
      }
      if (x && typeof w == "object" && typeof w.getAttributeType == "function" && !rt)
        switch (w.getAttributeType(Fe, vt)) {
          case "TrustedHTML": {
            X = x.createHTML(X);
            break;
          }
          case "TrustedScriptURL": {
            X = x.createScriptURL(X);
            break;
          }
        }
      if (X !== te)
        try {
          rt ? t.setAttributeNS(rt, G, X) : t.setAttribute(G, X), Jt(t) ? ut(t) : Ve(e.removed);
        } catch {
          Et(G, t);
        }
    }
    pt(D.afterSanitizeAttributes, t, null);
  }, In = function g(t) {
    let c = null;
    const h = Ne(t);
    for (pt(D.beforeSanitizeShadowDOM, t, null); c = h.nextNode(); )
      pt(D.uponSanitizeShadowNode, c, null), Me(c), He(c), c.content instanceof l && g(c.content);
    pt(D.afterSanitizeShadowDOM, t, null);
  };
  return e.sanitize = function(g) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, c = null, h = null, B = null, K = null;
    if (Kt = !g, Kt && (g = "<!-->"), typeof g != "string" && !Ie(g))
      if (typeof g.toString == "function") {
        if (g = g.toString(), typeof g != "string")
          throw Dt("dirty is not a string, aborting");
      } else
        throw Dt("toString is not a function");
    if (!e.isSupported)
      return g;
    if (Vt || Zt(t), e.removed = [], typeof g == "string" && (Lt = !1), Lt) {
      if (g.nodeName) {
        const mt = Y(g.nodeName);
        if (!o[mt] || M[mt])
          throw Dt("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (g instanceof p)
      c = xe("<!---->"), h = c.ownerDocument.importNode(g, !0), h.nodeType === Nt.element && h.nodeName === "BODY" || h.nodeName === "HTML" ? c = h : c.appendChild(h);
    else {
      if (!Tt && !_t && !yt && // eslint-disable-next-line unicorn/prefer-includes
      g.indexOf("<") === -1)
        return x && Pt ? x.createHTML(g) : g;
      if (c = xe(g), !c)
        return Tt ? null : Pt ? ot : "";
    }
    c && Yt && ut(c.firstChild);
    const G = Ne(Lt ? g : c);
    for (; B = G.nextNode(); )
      Me(B), He(B), B.content instanceof l && In(B.content);
    if (Lt)
      return g;
    if (Tt) {
      if (kt)
        for (K = P.call(c.ownerDocument); c.firstChild; )
          K.appendChild(c.firstChild);
      else
        K = c;
      return (T.shadowroot || T.shadowrootmode) && (K = U.call(r, K, !0)), K;
    }
    let rt = yt ? c.outerHTML : c.innerHTML;
    return yt && o["!doctype"] && c.ownerDocument && c.ownerDocument.doctype && c.ownerDocument.doctype.name && J(fn, c.ownerDocument.doctype.name) && (rt = "<!DOCTYPE " + c.ownerDocument.doctype.name + `>
` + rt), _t && Wt([j, z, W], (mt) => {
      rt = Ot(rt, mt, " ");
    }), x && Pt ? x.createHTML(rt) : rt;
  }, e.setConfig = function() {
    let g = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Zt(g), Vt = !0;
  }, e.clearConfig = function() {
    St = null, Vt = !1;
  }, e.isValidAttribute = function(g, t, c) {
    St || Zt({});
    const h = Y(g), B = Y(t);
    return ke(h, B, c);
  }, e.addHook = function(g, t) {
    typeof t == "function" && Rt(D[g], t);
  }, e.removeHook = function(g, t) {
    if (t !== void 0) {
      const c = $n(D[g], t);
      return c === -1 ? void 0 : Xn(D[g], c, 1)[0];
    }
    return Ve(D[g]);
  }, e.removeHooks = function(g) {
    D[g] = [];
  }, e.removeAllHooks = function() {
    D = Qe();
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
    function r(s, p, f, d, m, E) {
      if (E !== n) {
        var _ = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw _.name = "Invariant Violation", _;
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
const It = ({ children: n }) => /* @__PURE__ */ React.createElement(React.Fragment, null, n);
It.propTypes = {
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
  ...It.propTypes
});
const pn = ({ children: n, className: e = "container", ...a }) => /* @__PURE__ */ React.createElement("div", { className: e, ...a }, /* @__PURE__ */ React.createElement("div", { className: "row" }, n));
pn.propTypes = {
  children: It.propTypes.children
};
({
  ...pn.propTypes
});
It.propTypes.children, tt.oneOf(["0", "3", "4", "6", "8", "9", "12"]);
It.propTypes.children;
function mn() {
  var ot, it;
  const a = ["asu-header", "asuHeader"].find((R) => document.getElementById(R)), r = document.getElementById(a), i = document.getElementById("uds-anchor-menu");
  if (!i || !r || Array.from(i.classList).some((R) => R.startsWith("sc-")))
    return;
  const l = i.parentNode, s = i.nextSibling, p = Array.from(i.getElementsByClassName("nav-link")), f = /* @__PURE__ */ new Map();
  let d = window.scrollY, m = !1;
  const E = ((ot = document.getElementById("toolbar-bar")) == null ? void 0 : ot.offsetHeight) || 0, _ = ((it = document.getElementById("toolbar-item-administration-tray")) == null ? void 0 : it.offsetHeight) || 0, w = E + _, v = i.getBoundingClientRect().top + window.scrollY - w;
  for (let R of p) {
    const P = R.getAttribute("href");
    if (!P || !P.startsWith("#"))
      continue;
    const O = P.replace("#", ""), U = document.getElementById(O);
    U && f.set(R, U);
  }
  window.scrollY > v && (r.appendChild(i), m = !0, i.classList.add("uds-anchor-menu-attached"));
  function b(R, P = 0) {
    if (!R || P > 10)
      return 0;
    if (R.offsetHeight === 0 || R.offsetWidth === 0)
      return b(R.parentElement, P + 1);
    const O = R.getBoundingClientRect(), U = window.innerHeight || document.documentElement.clientHeight, D = window.innerWidth || document.documentElement.clientWidth, j = O.bottom - O.top, z = O.right - O.left, W = j * z, $ = Math.min(U, O.bottom) - Math.max(0, O.top), ht = Math.min(D, O.right) - Math.max(0, O.left);
    return $ * ht / W * 100;
  }
  const S = function() {
    let R = 0, P = null;
    if (p.forEach((j) => {
      const z = f.get(j);
      if (!z)
        return;
      const W = b(z);
      W > 0 && W > R && (R = W, P = z.id);
    }), P) {
      const j = document.querySelector(
        '[href="#' + P + '"]'
      );
      j && j.classList.add("active"), i.querySelectorAll(
        'a.nav-link:not([href="#' + P + '"])'
      ).forEach(function(z) {
        z.classList.remove("active");
      });
    }
    const O = i.getBoundingClientRect().top, U = r.getBoundingClientRect().bottom, D = window.scrollY > d;
    if (D && U >= O && (m || (r.appendChild(i), m = !0, i.classList.add("uds-anchor-menu-attached"))), !D && m) {
      const j = r.getBoundingClientRect().bottom, z = i.getBoundingClientRect().top;
      (window.scrollY <= v || j < z) && (l.insertBefore(i, s), m = !1, i.classList.remove("uds-anchor-menu-attached"));
    }
    d = window.scrollY;
  };
  let V;
  V = (() => {
    let R = !1;
    return () => {
      R || (R = !0, S(), setTimeout(() => {
        R = !1;
      }, 100));
    };
  })(), window.addEventListener("scroll", V, { passive: !0 });
  for (let [R, P] of f)
    R.addEventListener("click", function(O) {
      if (O.preventDefault(), !P || !document.body.contains(P)) {
        console.warn("Anchor target no longer exists in DOM");
        return;
      }
      if (R === p[0]) {
        const q = r.getBoundingClientRect().bottom, lt = i.offsetHeight, wt = q + lt, gt = P.getBoundingClientRect().top, o = window.innerHeight / 2;
        if (gt >= wt && gt <= o) {
          history.replaceState(null, "", R.getAttribute("href")), x(P);
          return;
        }
      }
      const D = window.innerHeight, j = Math.round(D * 0.35);
      let W = P.getBoundingClientRect().top + window.scrollY - j;
      window.scrollTo({
        top: W,
        behavior: "smooth"
      });
      const $ = i.querySelector(".nav-link.active");
      $ && $.classList.remove("active"), O.target.classList.add("active");
      const ht = R.getAttribute("href");
      ht && history.replaceState(null, "", ht), x(P);
    });
  function x(R) {
    R.hasAttribute("tabindex") || (R.setAttribute("tabindex", "-1"), R.style.outline = "none"), R.focus({ preventScroll: !0 });
  }
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
    const m = /* @__PURE__ */ new Date(), E = [], _ = new Date(f, d).getDay(), w = new Date(f, d + 1, 0).getDate(), v = new Date(f, d, 0).getDate();
    for (let y = 1; y <= _; y++) {
      const b = v - _ + y, S = new Date(
        i.year,
        i.month - 1,
        b
      ).toLocaleString();
      E.push({ key: S, date: b, monthClass: "prev" });
    }
    for (let y = 1; y <= w; y++) {
      const b = new Date(i.year, i.month, y).toLocaleString();
      y === m.getDate() && i.month === m.getMonth() && i.year === m.getFullYear() ? E.push({
        key: b,
        date: y,
        monthClass: "current",
        todayClass: "today"
      }) : E.push({ key: b, date: y, monthClass: "current" });
    }
    if (E.length < 42) {
      const y = 42 - E.length;
      for (let b = 1; b <= y; b++) {
        const S = new Date(i.year, i.month + 1, b).toLocaleString();
        E.push({ key: S, date: b, monthClass: "next" });
      }
    }
    return E;
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
    const i = a.querySelector("div p"), l = i.textContent, s = window.getComputedStyle(a), p = parseInt(s.webkitLineClamp || s.lineClamp), f = parseFloat(s.lineHeight), d = parseFloat(s.fontSize), m = isNaN(f) ? parseFloat(s.lineHeight) * d : f, E = p * m;
    if (i.offsetHeight >= E) {
      let _ = "";
      const w = l.split(" ");
      let v = 0, y = "";
      for (; v < w.length && _o(
        y + (y ? " " : "") + w[v],
        i
      ) <= E; )
        y += (y ? " " : "") + w[v], v++;
      _ = y + "...";
      const b = `visible-text-${Math.random().toString(36).substring(7)}`, S = document.createElement("div");
      S.id = b, S.textContent = _, S.style.position = "absolute", S.style.top = `${i.offsetTop}px`, S.style.left = `${i.offsetLeft}px`, S.style.width = `${i.offsetWidth}px`, S.style.height = `${i.offsetHeight}px`, S.style.opacity = "0", S.style.pointerEvents = "none", S.style.zIndex = "1", a.appendChild(S), i.setAttribute("aria-describedby", b), i.setAttribute("aria-hidden", "true");
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
      const d = l.getAttribute("data-ga-header-type") || "internal link", m = l.getAttribute("data-ga-header-section") || "main navbar", E = l.getAttribute("data-ga-header") || "", _ = l.getAttribute("data-ga-header-component");
      n({
        name: "onclick",
        event: s.toLowerCase(),
        action: p.toLowerCase(),
        type: d.toLowerCase(),
        section: m.toLowerCase(),
        region: "navbar",
        text: E.toLowerCase(),
        ..._ && {
          component: _.toLowerCase()
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
      const p = l.getAttribute("data-ga-input-name") || "", f = l.getAttribute("data-ga-input-action") || "", d = l.getAttribute("data-ga-input") || "", m = l.getAttribute("data-ga-input-region") || "", E = l.getAttribute("data-ga-input-section") || "";
      let _ = l.getAttribute("data-ga-input-event") || "", w;
      switch (d) {
        case "checkbox":
          w = s.target.labels[0].textContent || "", _ = s.target.checked ? _ : "deselect";
          break;
        case "radio button":
          w = s.target.labels[0].textContent || "";
          break;
        case "blur":
          w = s.target.value.toLowerCase() || "";
          break;
        default:
          w = [...s.target.selectedOptions].map((v) => v.value).join(",") || "";
          break;
      }
      n({
        name: p.toLowerCase(),
        event: _.toLowerCase(),
        action: f.toLowerCase(),
        type: d.toLowerCase(),
        section: E.toLowerCase(),
        region: m.toLowerCase(),
        text: w.toLowerCase()
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
  function m(v) {
    v.paused ? v.play() : v.pause();
  }
  function E(v, y) {
    getComputedStyle(v).display === s ? (y.style.display = s, v.style.display = l, v.focus()) : (v.style.display = s, y.style.display = l, y.focus());
  }
  function _(v) {
    v.stopPropagation(), E(f, d), m(p);
  }
  function w(v) {
    v.stopPropagation(), E(f, d), m(p);
  }
  d == null || d.addEventListener(i, _), f == null || f.addEventListener(i, w);
}
k.on(window, "load.uds.heroes-video", Tn);
const An = () => {
  const e = () => {
    document.querySelectorAll(".parallax-container").forEach((s) => {
      const p = s.querySelector("img"), f = s.offsetHeight - p.height * 1.2, d = p.dataset.parallaxType === "scroll-to" ? window.innerHeight : window.innerHeight + s.offsetHeight, m = s.getBoundingClientRect().top, _ = (window.innerHeight - m) / d;
      if (_ < 0)
        p.style.top = f + "px";
      else if (_ > 1)
        p.style.top = "0";
      else {
        const w = f * (1 - _);
        p.style.top = w + "px";
      }
    });
  }, a = (s) => {
    const p = s.parentNode, f = s.width, d = s.height;
    let m = p.offsetWidth / f, E = 0, _ = d * m, w = f * m;
    const v = +s.dataset.parallaxFactor || 1.2;
    !s.dataset.noScale && _ < p.offsetHeight * v && (m = p.offsetHeight * v / _, _ *= m, w *= m, E = (w - p.offsetWidth) / 2 * -1), s.style.height = _ + "px", s.style.left = E + "px";
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
  const n = "a", e = "button", a = ".nav-tabs", r = ".nav-item", i = ".uds-tabbed-panels", l = ".scroll-control-prev", s = ".scroll-control-next", p = "click", f = "scroll", d = "focus", m = "none", E = "block", w = (y) => {
    [n, e].includes(y.target.localName) && y.target.focus();
  }, v = (y) => {
    const b = y.parentElement, S = y.offsetLeft + y.offsetWidth, V = b.scrollLeft + b.offsetWidth;
    b.scrollLeft > y.offsetLeft && (b.scrollLeft = y.offsetLeft), V < S && (b.scrollLeft += S - V);
  };
  document.querySelectorAll(i).forEach((y) => {
    const b = y.querySelector(a), S = y.querySelectorAll(r), V = y.querySelector(
      l
    ), Q = y.querySelector(
      s
    );
    let x = 0;
    y.addEventListener(p, function(O) {
      w(O);
    });
    const ot = (O, U, D) => {
      U.preventDefault();
      const z = getComputedStyle(b).left.replace("px", "");
      let W = parseInt(z, 10);
      D === 1 && x > 0 && (x -= 1), x < S.length - 1 && D == -1 && (x += 1), b.dataset.scrollPosition = x, W = 0;
      for (var $ = 0; $ < x; $++)
        W += S[$].offsetWidth + parseInt(getComputedStyle(S[$]).marginLeft, 10) + parseInt(getComputedStyle(S[$]).marginRight, 10);
      b.scrollLeft = W, it(O, W);
    }, it = (O, U) => {
      const D = b.scrollWidth - U;
      x == 0 ? V.style.display = m : V.style.display = E, D <= y.offsetWidth ? Q.style.display = m : Q.style.display = E;
    };
    b.addEventListener(f, (O) => {
      const U = O.target.scrollLeft, D = b.offsetWidth + U + 10 >= b.scrollWidth;
      V.style.display = U < 10 ? m : E, Q.style.display = D ? m : E;
    }), S.forEach((O) => {
      O.addEventListener(d, function(U) {
        v(O);
      });
    }), Q.addEventListener(p, function(O) {
      ot(this, O, -1);
    }), V.addEventListener(p, function(O) {
      ot(this, O, 1);
    }), V.style.display = m;
    const R = b.scrollWidth, P = y.offsetWidth;
    R <= P && (Q.style.display = m);
  });
}
k.on(window, "load.uds.tabs", Sn);
function vn() {
  function n() {
    const r = ".uds-table-fixed-wrapper", i = ".uds-table.uds-table-fixed table", l = ".scroll-control.previous";
    document.querySelectorAll(r).forEach((p, f) => {
      const d = p.querySelector(i);
      d.setAttribute("id", "uds-table-" + f);
      const m = d.querySelector("tbody tr > *"), E = p.querySelector(l);
      E.style.left = m.offsetWidth + "px";
    });
  }
  function e() {
    const r = ".uds-table-fixed", i = ".uds-table-fixed-wrapper", l = ".scroll-control.previous", s = ".scroll-control.next";
    document.querySelectorAll(i).forEach((f, d) => {
      const m = f.querySelector(r), E = f.querySelector(l), _ = f.querySelector(s);
      ["click", "focus"].forEach((w) => {
        k.on(E, w, function() {
          m.scrollLeft -= 100;
        }), k.on(_, w, function() {
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
k.on(window, "load.uds.fixed-table", vn);
function wn() {
  const n = ".uds-video-player", e = n + " video", a = n + " .uds-video-btn-play", r = n + " .uds-video-overlay", i = "click", l = "ended", s = "flex", p = "none", f = document.querySelector(e), d = document.querySelector(r), m = document.querySelector(a);
  function E(S) {
    S.style.display === p ? S.style.display = s : S.style.display = p;
  }
  function _(S) {
    S.paused ? S.play() : S.pause();
  }
  function w(S) {
    _(this), E(this.nextElementSibling);
  }
  function v(S) {
    S.stopPropagation();
    const V = this.parentNode;
    E(V), _(f);
  }
  function y(S) {
    E(this), _(f);
  }
  function b(S) {
    E(d);
  }
  f == null || f.addEventListener(i, w), m == null || m.addEventListener(i, v), d == null || d.addEventListener(i, y), f == null || f.addEventListener(l, b);
}
k.on(window, "load.uds.video", wn);
const To = {
  // Banner, // code updated to use bootstrap alert so we don't need this
  initAnchorMenu: mn,
  initBlockquoteAnimation: hn,
  initCalendar: gn,
  initCollapse: _n,
  initChart: En,
  initDataLayer: _e,
  initFixedTable: vn,
  initGlobalHeader: Te,
  initHeroesVideo: Tn,
  initImageParallax: An,
  initModals: bn,
  initRankingCard: yn,
  initTabbedPanels: Sn,
  initVideo: wn,
  initCardBodies: Ee
};
export {
  To as default
};
//# sourceMappingURL=unity-bootstrap.es.js.map
