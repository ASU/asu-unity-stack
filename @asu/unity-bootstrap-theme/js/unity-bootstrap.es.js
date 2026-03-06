import * as ee from "chart.js";
const Rn = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, Dn = /[^.]*(?=\..*)\.|.*/, Nn = /\..*/, In = /::\d+$/, ne = {};
let He = 1;
const Ke = {
  mouseenter: "mouseover",
  mouseleave: "mouseout"
}, xn = /* @__PURE__ */ new Set([
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
function Qe(n, e) {
  return e && `${e}::${He++}` || n.uidEvent || He++;
}
function Ze(n) {
  const e = Qe(n);
  return n.uidEvent = e, ne[e] = ne[e] || {}, ne[e];
}
function Mn(n, e) {
  return function a(r) {
    return me(r, { delegateTarget: n }), a.oneOff && k.off(n, r.type, e), e.apply(n, [r]);
  };
}
function kn(n, e, a) {
  return function r(s) {
    const i = n.querySelectorAll(e);
    for (let { target: l } = s; l && l !== this; l = l.parentNode)
      for (const p of i)
        if (p === l)
          return me(s, { delegateTarget: l }), r.oneOff && k.off(n, s.type, e, a), a.apply(l, [s]);
  };
}
function Je(n, e, a = null) {
  return Object.values(n).find((r) => r.callable === e && r.delegationSelector === a);
}
function tn(n, e, a) {
  const r = typeof e == "string", s = r ? a : e || a;
  let i = en(n);
  return xn.has(i) || (i = n), [r, s, i];
}
function Fe(n, e, a, r, s) {
  if (typeof e != "string" || !n)
    return;
  let [i, l, p] = tn(e, a, r);
  e in Ke && (l = ((b) => function(_) {
    if (!_.relatedTarget || _.relatedTarget !== _.delegateTarget && !_.delegateTarget.contains(_.relatedTarget))
      return b.call(this, _);
  })(l));
  const f = Ze(n), d = f[p] || (f[p] = {}), g = Je(d, l, i ? a : null);
  if (g) {
    g.oneOff = g.oneOff && s;
    return;
  }
  const y = Qe(l, e.replace(Dn, "")), E = i ? kn(n, a, l) : Mn(n, l);
  E.delegationSelector = i ? a : null, E.callable = l, E.oneOff = s, E.uidEvent = y, d[y] = E, n.addEventListener(p, E, i);
}
function fe(n, e, a, r, s) {
  const i = Je(e[a], r, s);
  i && (n.removeEventListener(a, i, !!s), delete e[a][i.uidEvent]);
}
function Pn(n, e, a, r) {
  const s = e[a] || {};
  for (const [i, l] of Object.entries(s))
    i.includes(r) && fe(n, e, a, l.callable, l.delegationSelector);
}
function en(n) {
  return n = n.replace(Nn, ""), Ke[n] || n;
}
const k = {
  on(n, e, a, r) {
    Fe(n, e, a, r, !1);
  },
  one(n, e, a, r) {
    Fe(n, e, a, r, !0);
  },
  off(n, e, a, r) {
    if (typeof e != "string" || !n)
      return;
    const [s, i, l] = tn(e, a, r), p = l !== e, f = Ze(n), d = f[l] || {}, g = e.startsWith(".");
    if (typeof i < "u") {
      if (!Object.keys(d).length)
        return;
      fe(n, f, l, i, s ? a : null);
      return;
    }
    if (g)
      for (const y of Object.keys(f))
        Pn(n, f, y, e.slice(1));
    for (const [y, E] of Object.entries(d)) {
      const w = y.replace(In, "");
      (!p || e.includes(w)) && fe(n, f, l, E.callable, E.delegationSelector);
    }
  },
  trigger(n, e, a) {
    if (typeof e != "string" || !n)
      return null;
    const r = Rn(), s = en(e), i = e !== s;
    let l = null, p = !0, f = !0, d = !1;
    i && r && (l = r.Event(e, a), r(n).trigger(l), p = !l.isPropagationStopped(), f = !l.isImmediatePropagationStopped(), d = l.isDefaultPrevented());
    const g = me(new Event(e, { bubbles: p, cancelable: !0 }), a);
    return d && g.preventDefault(), f && n.dispatchEvent(g), g.defaultPrevented && l && l.preventDefault(), g;
  }
};
function me(n, e = {}) {
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
function Hn(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var L = {}, Be;
function Fn() {
  if (Be) return L;
  Be = 1;
  /**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var n = Symbol.for("react.element"), e = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), l = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), d = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), y = Symbol.iterator;
  function E(o) {
    return o === null || typeof o != "object" ? null : (o = y && o[y] || o["@@iterator"], typeof o == "function" ? o : null);
  }
  var w = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, b = Object.assign, _ = {};
  function v(o, u, T) {
    this.props = o, this.context = u, this.refs = _, this.updater = T || w;
  }
  v.prototype.isReactComponent = {}, v.prototype.setState = function(o, u) {
    if (typeof o != "object" && typeof o != "function" && o != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, o, u, "setState");
  }, v.prototype.forceUpdate = function(o) {
    this.updater.enqueueForceUpdate(this, o, "forceUpdate");
  };
  function S() {
  }
  S.prototype = v.prototype;
  function $(o, u, T) {
    this.props = o, this.context = u, this.refs = _, this.updater = T || w;
  }
  var K = $.prototype = new S();
  K.constructor = $, b(K, v.prototype), K.isPureReactComponent = !0;
  var R = Array.isArray, ot = Object.prototype.hasOwnProperty, D = { current: null }, U = { key: !0, ref: !0, __self: !0, __source: !0 };
  function B(o, u, T) {
    var I, A = {}, M = null, P = null;
    if (u != null) for (I in u.ref !== void 0 && (P = u.ref), u.key !== void 0 && (M = "" + u.key), u) ot.call(u, I) && !U.hasOwnProperty(I) && (A[I] = u[I]);
    var N = arguments.length - 2;
    if (N === 1) A.children = T;
    else if (1 < N) {
      for (var H = Array(N), Z = 0; Z < N; Z++) H[Z] = arguments[Z + 2];
      A.children = H;
    }
    if (o && o.defaultProps) for (I in N = o.defaultProps, N) A[I] === void 0 && (A[I] = N[I]);
    return { $$typeof: n, type: o, key: M, ref: P, props: A, _owner: D.current };
  }
  function x(o, u) {
    return { $$typeof: n, type: o.type, key: u, ref: o.ref, props: o.props, _owner: o._owner };
  }
  function W(o) {
    return typeof o == "object" && o !== null && o.$$typeof === n;
  }
  function O(o) {
    var u = { "=": "=0", ":": "=2" };
    return "$" + o.replace(/[=:]/g, function(T) {
      return u[T];
    });
  }
  var G = /\/+/g;
  function V(o, u) {
    return typeof o == "object" && o !== null && o.key != null ? O("" + o.key) : u.toString(36);
  }
  function Q(o, u, T, I, A) {
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
    if (P) return P = o, A = A(P), o = I === "" ? "." + V(P, 0) : I, R(A) ? (T = "", o != null && (T = o.replace(G, "$&/") + "/"), Q(A, u, T, "", function(Z) {
      return Z;
    })) : A != null && (W(A) && (A = x(A, T + (!A.key || P && P.key === A.key ? "" : ("" + A.key).replace(G, "$&/") + "/") + o)), u.push(A)), 1;
    if (P = 0, I = I === "" ? "." : I + ":", R(o)) for (var N = 0; N < o.length; N++) {
      M = o[N];
      var H = I + V(M, N);
      P += Q(M, u, T, H, A);
    }
    else if (H = E(o), typeof H == "function") for (o = H.call(o), N = 0; !(M = o.next()).done; ) M = M.value, H = I + V(M, N++), P += Q(M, u, T, H, A);
    else if (M === "object") throw u = String(o), Error("Objects are not valid as a React child (found: " + (u === "[object Object]" ? "object with keys {" + Object.keys(o).join(", ") + "}" : u) + "). If you meant to render a collection of children, use an array instead.");
    return P;
  }
  function rt(o, u, T) {
    if (o == null) return o;
    var I = [], A = 0;
    return Q(o, I, "", "", function(M) {
      return u.call(T, M, A++);
    }), I;
  }
  function It(o) {
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
  var Y = { current: null }, mt = { transition: null }, qt = { ReactCurrentDispatcher: Y, ReactCurrentBatchConfig: mt, ReactCurrentOwner: D };
  function St() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return L.Children = { map: rt, forEach: function(o, u, T) {
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
  } }, L.Component = v, L.Fragment = a, L.Profiler = s, L.PureComponent = $, L.StrictMode = r, L.Suspense = f, L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = qt, L.act = St, L.cloneElement = function(o, u, T) {
    if (o == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + o + ".");
    var I = b({}, o.props), A = o.key, M = o.ref, P = o._owner;
    if (u != null) {
      if (u.ref !== void 0 && (M = u.ref, P = D.current), u.key !== void 0 && (A = "" + u.key), o.type && o.type.defaultProps) var N = o.type.defaultProps;
      for (H in u) ot.call(u, H) && !U.hasOwnProperty(H) && (I[H] = u[H] === void 0 && N !== void 0 ? N[H] : u[H]);
    }
    var H = arguments.length - 2;
    if (H === 1) I.children = T;
    else if (1 < H) {
      N = Array(H);
      for (var Z = 0; Z < H; Z++) N[Z] = arguments[Z + 2];
      I.children = N;
    }
    return { $$typeof: n, type: o.type, key: A, ref: M, props: I, _owner: P };
  }, L.createContext = function(o) {
    return o = { $$typeof: l, _currentValue: o, _currentValue2: o, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, o.Provider = { $$typeof: i, _context: o }, o.Consumer = o;
  }, L.createElement = B, L.createFactory = function(o) {
    var u = B.bind(null, o);
    return u.type = o, u;
  }, L.createRef = function() {
    return { current: null };
  }, L.forwardRef = function(o) {
    return { $$typeof: p, render: o };
  }, L.isValidElement = W, L.lazy = function(o) {
    return { $$typeof: g, _payload: { _status: -1, _result: o }, _init: It };
  }, L.memo = function(o, u) {
    return { $$typeof: d, type: o, compare: u === void 0 ? null : u };
  }, L.startTransition = function(o) {
    var u = mt.transition;
    mt.transition = {};
    try {
      o();
    } finally {
      mt.transition = u;
    }
  }, L.unstable_act = St, L.useCallback = function(o, u) {
    return Y.current.useCallback(o, u);
  }, L.useContext = function(o) {
    return Y.current.useContext(o);
  }, L.useDebugValue = function() {
  }, L.useDeferredValue = function(o) {
    return Y.current.useDeferredValue(o);
  }, L.useEffect = function(o, u) {
    return Y.current.useEffect(o, u);
  }, L.useId = function() {
    return Y.current.useId();
  }, L.useImperativeHandle = function(o, u, T) {
    return Y.current.useImperativeHandle(o, u, T);
  }, L.useInsertionEffect = function(o, u) {
    return Y.current.useInsertionEffect(o, u);
  }, L.useLayoutEffect = function(o, u) {
    return Y.current.useLayoutEffect(o, u);
  }, L.useMemo = function(o, u) {
    return Y.current.useMemo(o, u);
  }, L.useReducer = function(o, u, T) {
    return Y.current.useReducer(o, u, T);
  }, L.useRef = function(o) {
    return Y.current.useRef(o);
  }, L.useState = function(o) {
    return Y.current.useState(o);
  }, L.useSyncExternalStore = function(o, u, T) {
    return Y.current.useSyncExternalStore(o, u, T);
  }, L.useTransition = function() {
    return Y.current.useTransition();
  }, L.version = "18.3.1", L;
}
Fn();
/*! @license DOMPurify 3.3.2 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.2/LICENSE */
const {
  entries: nn,
  setPrototypeOf: Ue,
  isFrozen: Bn,
  getPrototypeOf: Un,
  getOwnPropertyDescriptor: Wn
} = Object;
let {
  freeze: et,
  seal: st,
  create: zt
} = Object, {
  apply: de,
  construct: pe
} = typeof Reflect < "u" && Reflect;
et || (et = function(e) {
  return e;
});
st || (st = function(e) {
  return e;
});
de || (de = function(e, a) {
  for (var r = arguments.length, s = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++)
    s[i - 2] = arguments[i];
  return e.apply(a, s);
});
pe || (pe = function(e) {
  for (var a = arguments.length, r = new Array(a > 1 ? a - 1 : 0), s = 1; s < a; s++)
    r[s - 1] = arguments[s];
  return new e(...r);
});
const Ut = nt(Array.prototype.forEach), zn = nt(Array.prototype.lastIndexOf), We = nt(Array.prototype.pop), Lt = nt(Array.prototype.push), Gn = nt(Array.prototype.splice), Gt = nt(String.prototype.toLowerCase), oe = nt(String.prototype.toString), re = nt(String.prototype.match), Ct = nt(String.prototype.replace), qn = nt(String.prototype.indexOf), Vn = nt(String.prototype.trim), it = nt(Object.prototype.hasOwnProperty), J = nt(RegExp.prototype.test), Ot = Yn(TypeError);
function nt(n) {
  return function(e) {
    e instanceof RegExp && (e.lastIndex = 0);
    for (var a = arguments.length, r = new Array(a > 1 ? a - 1 : 0), s = 1; s < a; s++)
      r[s - 1] = arguments[s];
    return de(n, e, r);
  };
}
function Yn(n) {
  return function() {
    for (var e = arguments.length, a = new Array(e), r = 0; r < e; r++)
      a[r] = arguments[r];
    return pe(n, a);
  };
}
function C(n, e) {
  let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Gt;
  Ue && Ue(n, null);
  let r = e.length;
  for (; r--; ) {
    let s = e[r];
    if (typeof s == "string") {
      const i = a(s);
      i !== s && (Bn(e) || (e[r] = i), s = i);
    }
    n[s] = !0;
  }
  return n;
}
function jn(n) {
  for (let e = 0; e < n.length; e++)
    it(n, e) || (n[e] = null);
  return n;
}
function ut(n) {
  const e = zt(null);
  for (const [a, r] of nn(n))
    it(n, a) && (Array.isArray(r) ? e[a] = jn(r) : r && typeof r == "object" && r.constructor === Object ? e[a] = ut(r) : e[a] = r);
  return e;
}
function Rt(n, e) {
  for (; n !== null; ) {
    const r = Wn(n, e);
    if (r) {
      if (r.get)
        return nt(r.get);
      if (typeof r.value == "function")
        return nt(r.value);
    }
    n = Un(n);
  }
  function a() {
    return null;
  }
  return a;
}
const ze = et(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), ae = et(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "enterkeyhint", "exportparts", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "inputmode", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "part", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), ie = et(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), $n = et(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), se = et(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), Xn = et(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), Ge = et(["#text"]), qe = et(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "exportparts", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inert", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "part", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "slot", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]), le = et(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "mask-type", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), Ve = et(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), Wt = et(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), Kn = st(/\{\{[\w\W]*|[\w\W]*\}\}/gm), Qn = st(/<%[\w\W]*|[\w\W]*%>/gm), Zn = st(/\$\{[\w\W]*/gm), Jn = st(/^data-[\-\w.\u00B7-\uFFFF]+$/), to = st(/^aria-[\-\w]+$/), on = st(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
), eo = st(/^(?:\w+script|data):/i), no = st(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
), rn = st(/^html$/i), oo = st(/^[a-z][.\w]*(-[.\w]+)+$/i);
var Ye = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR: to,
  ATTR_WHITESPACE: no,
  CUSTOM_ELEMENT: oo,
  DATA_ATTR: Jn,
  DOCTYPE_NAME: rn,
  ERB_EXPR: Qn,
  IS_ALLOWED_URI: on,
  IS_SCRIPT_OR_DATA: eo,
  MUSTACHE_EXPR: Kn,
  TMPLIT_EXPR: Zn
});
const Dt = {
  element: 1,
  text: 3,
  // Deprecated
  progressingInstruction: 7,
  comment: 8,
  document: 9
}, ro = function() {
  return typeof window > "u" ? null : window;
}, ao = function(e, a) {
  if (typeof e != "object" || typeof e.createPolicy != "function")
    return null;
  let r = null;
  const s = "data-tt-policy-suffix";
  a && a.hasAttribute(s) && (r = a.getAttribute(s));
  const i = "dompurify" + (r ? "#" + r : "");
  try {
    return e.createPolicy(i, {
      createHTML(l) {
        return l;
      },
      createScriptURL(l) {
        return l;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + i + " could not be created."), null;
  }
}, je = function() {
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
function an() {
  let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ro();
  const e = (h) => an(h);
  if (e.version = "3.3.2", e.removed = [], !n || !n.document || n.document.nodeType !== Dt.document || !n.Element)
    return e.isSupported = !1, e;
  let {
    document: a
  } = n;
  const r = a, s = r.currentScript, {
    DocumentFragment: i,
    HTMLTemplateElement: l,
    Node: p,
    Element: f,
    NodeFilter: d,
    NamedNodeMap: g = n.NamedNodeMap || n.MozNamedAttrMap,
    HTMLFormElement: y,
    DOMParser: E,
    trustedTypes: w
  } = n, b = f.prototype, _ = Rt(b, "cloneNode"), v = Rt(b, "remove"), S = Rt(b, "nextSibling"), $ = Rt(b, "childNodes"), K = Rt(b, "parentNode");
  if (typeof l == "function") {
    const h = a.createElement("template");
    h.content && h.content.ownerDocument && (a = h.content.ownerDocument);
  }
  let R, ot = "";
  const {
    implementation: D,
    createNodeIterator: U,
    createDocumentFragment: B,
    getElementsByTagName: x
  } = a, {
    importNode: W
  } = r;
  let O = je();
  e.isSupported = typeof nn == "function" && typeof K == "function" && D && D.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: G,
    ERB_EXPR: V,
    TMPLIT_EXPR: Q,
    DATA_ATTR: rt,
    ARIA_ATTR: It,
    IS_SCRIPT_OR_DATA: Y,
    ATTR_WHITESPACE: mt,
    CUSTOM_ELEMENT: qt
  } = Ye;
  let {
    IS_ALLOWED_URI: St
  } = Ye, o = null;
  const u = C({}, [...ze, ...ae, ...ie, ...se, ...Ge]);
  let T = null;
  const I = C({}, [...qe, ...le, ...Ve, ...Wt]);
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
  let H = !0, Z = !0, Ee = !1, _e = !0, yt = !1, xt = !0, gt = !1, Vt = !1, Yt = !1, Et = !1, Mt = !1, kt = !1, Te = !0, Ae = !1;
  const An = "user-content-";
  let jt = !0, wt = !1, _t = {}, lt = null;
  const $t = C({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let be = null;
  const Se = C({}, ["audio", "video", "img", "source", "image", "track"]);
  let Xt = null;
  const we = C({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Pt = "http://www.w3.org/1998/Math/MathML", Ht = "http://www.w3.org/2000/svg", ft = "http://www.w3.org/1999/xhtml";
  let Tt = ft, Kt = !1, Qt = null;
  const bn = C({}, [Pt, Ht, ft], oe);
  let Ft = C({}, ["mi", "mo", "mn", "ms", "mtext"]), Bt = C({}, ["annotation-xml"]);
  const Sn = C({}, ["title", "style", "font", "a", "script"]);
  let vt = null;
  const wn = ["application/xhtml+xml", "text/html"], vn = "text/html";
  let q = null, At = null;
  const Ln = a.createElement("form"), ve = function(t) {
    return t instanceof RegExp || t instanceof Function;
  }, Zt = function() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(At && At === t)) {
      if ((!t || typeof t != "object") && (t = {}), t = ut(t), vt = // eslint-disable-next-line unicorn/prefer-includes
      wn.indexOf(t.PARSER_MEDIA_TYPE) === -1 ? vn : t.PARSER_MEDIA_TYPE, q = vt === "application/xhtml+xml" ? oe : Gt, o = it(t, "ALLOWED_TAGS") ? C({}, t.ALLOWED_TAGS, q) : u, T = it(t, "ALLOWED_ATTR") ? C({}, t.ALLOWED_ATTR, q) : I, Qt = it(t, "ALLOWED_NAMESPACES") ? C({}, t.ALLOWED_NAMESPACES, oe) : bn, Xt = it(t, "ADD_URI_SAFE_ATTR") ? C(ut(we), t.ADD_URI_SAFE_ATTR, q) : we, be = it(t, "ADD_DATA_URI_TAGS") ? C(ut(Se), t.ADD_DATA_URI_TAGS, q) : Se, lt = it(t, "FORBID_CONTENTS") ? C({}, t.FORBID_CONTENTS, q) : $t, M = it(t, "FORBID_TAGS") ? C({}, t.FORBID_TAGS, q) : ut({}), P = it(t, "FORBID_ATTR") ? C({}, t.FORBID_ATTR, q) : ut({}), _t = it(t, "USE_PROFILES") ? t.USE_PROFILES : !1, H = t.ALLOW_ARIA_ATTR !== !1, Z = t.ALLOW_DATA_ATTR !== !1, Ee = t.ALLOW_UNKNOWN_PROTOCOLS || !1, _e = t.ALLOW_SELF_CLOSE_IN_ATTR !== !1, yt = t.SAFE_FOR_TEMPLATES || !1, xt = t.SAFE_FOR_XML !== !1, gt = t.WHOLE_DOCUMENT || !1, Et = t.RETURN_DOM || !1, Mt = t.RETURN_DOM_FRAGMENT || !1, kt = t.RETURN_TRUSTED_TYPE || !1, Yt = t.FORCE_BODY || !1, Te = t.SANITIZE_DOM !== !1, Ae = t.SANITIZE_NAMED_PROPS || !1, jt = t.KEEP_CONTENT !== !1, wt = t.IN_PLACE || !1, St = t.ALLOWED_URI_REGEXP || on, Tt = t.NAMESPACE || ft, Ft = t.MATHML_TEXT_INTEGRATION_POINTS || Ft, Bt = t.HTML_INTEGRATION_POINTS || Bt, A = t.CUSTOM_ELEMENT_HANDLING || {}, t.CUSTOM_ELEMENT_HANDLING && ve(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (A.tagNameCheck = t.CUSTOM_ELEMENT_HANDLING.tagNameCheck), t.CUSTOM_ELEMENT_HANDLING && ve(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (A.attributeNameCheck = t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), t.CUSTOM_ELEMENT_HANDLING && typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (A.allowCustomizedBuiltInElements = t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), yt && (Z = !1), Mt && (Et = !0), _t && (o = C({}, Ge), T = zt(null), _t.html === !0 && (C(o, ze), C(T, qe)), _t.svg === !0 && (C(o, ae), C(T, le), C(T, Wt)), _t.svgFilters === !0 && (C(o, ie), C(T, le), C(T, Wt)), _t.mathMl === !0 && (C(o, se), C(T, Ve), C(T, Wt))), it(t, "ADD_TAGS") || (N.tagCheck = null), it(t, "ADD_ATTR") || (N.attributeCheck = null), t.ADD_TAGS && (typeof t.ADD_TAGS == "function" ? N.tagCheck = t.ADD_TAGS : (o === u && (o = ut(o)), C(o, t.ADD_TAGS, q))), t.ADD_ATTR && (typeof t.ADD_ATTR == "function" ? N.attributeCheck = t.ADD_ATTR : (T === I && (T = ut(T)), C(T, t.ADD_ATTR, q))), t.ADD_URI_SAFE_ATTR && C(Xt, t.ADD_URI_SAFE_ATTR, q), t.FORBID_CONTENTS && (lt === $t && (lt = ut(lt)), C(lt, t.FORBID_CONTENTS, q)), t.ADD_FORBID_CONTENTS && (lt === $t && (lt = ut(lt)), C(lt, t.ADD_FORBID_CONTENTS, q)), jt && (o["#text"] = !0), gt && C(o, ["html", "head", "body"]), o.table && (C(o, ["tbody"]), delete M.tbody), t.TRUSTED_TYPES_POLICY) {
        if (typeof t.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw Ot('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof t.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw Ot('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        R = t.TRUSTED_TYPES_POLICY, ot = R.createHTML("");
      } else
        R === void 0 && (R = ao(w, s)), R !== null && typeof ot == "string" && (ot = R.createHTML(""));
      et && et(t), At = t;
    }
  }, Le = C({}, [...ae, ...ie, ...$n]), Ce = C({}, [...se, ...Xn]), Cn = function(t) {
    let c = K(t);
    (!c || !c.tagName) && (c = {
      namespaceURI: Tt,
      tagName: "template"
    });
    const m = Gt(t.tagName), F = Gt(c.tagName);
    return Qt[t.namespaceURI] ? t.namespaceURI === Ht ? c.namespaceURI === ft ? m === "svg" : c.namespaceURI === Pt ? m === "svg" && (F === "annotation-xml" || Ft[F]) : !!Le[m] : t.namespaceURI === Pt ? c.namespaceURI === ft ? m === "math" : c.namespaceURI === Ht ? m === "math" && Bt[F] : !!Ce[m] : t.namespaceURI === ft ? c.namespaceURI === Ht && !Bt[F] || c.namespaceURI === Pt && !Ft[F] ? !1 : !Ce[m] && (Sn[m] || !Le[m]) : !!(vt === "application/xhtml+xml" && Qt[t.namespaceURI]) : !1;
  }, ct = function(t) {
    Lt(e.removed, {
      element: t
    });
    try {
      K(t).removeChild(t);
    } catch {
      v(t);
    }
  }, ht = function(t, c) {
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
  }, Oe = function(t) {
    let c = null, m = null;
    if (Yt)
      t = "<remove></remove>" + t;
    else {
      const z = re(t, /^[\r\n\t ]+/);
      m = z && z[0];
    }
    vt === "application/xhtml+xml" && Tt === ft && (t = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + t + "</body></html>");
    const F = R ? R.createHTML(t) : t;
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
    return t && m && X.insertBefore(a.createTextNode(m), X.childNodes[0] || null), Tt === ft ? x.call(c, gt ? "html" : "body")[0] : gt ? c.documentElement : X;
  }, Re = function(t) {
    return U.call(
      t.ownerDocument || t,
      t,
      // eslint-disable-next-line no-bitwise
      d.SHOW_ELEMENT | d.SHOW_COMMENT | d.SHOW_TEXT | d.SHOW_PROCESSING_INSTRUCTION | d.SHOW_CDATA_SECTION,
      null
    );
  }, Jt = function(t) {
    return t instanceof y && (typeof t.nodeName != "string" || typeof t.textContent != "string" || typeof t.removeChild != "function" || !(t.attributes instanceof g) || typeof t.removeAttribute != "function" || typeof t.setAttribute != "function" || typeof t.namespaceURI != "string" || typeof t.insertBefore != "function" || typeof t.hasChildNodes != "function");
  }, De = function(t) {
    return typeof p == "function" && t instanceof p;
  };
  function dt(h, t, c) {
    Ut(h, (m) => {
      m.call(e, t, c, At);
    });
  }
  const Ne = function(t) {
    let c = null;
    if (dt(O.beforeSanitizeElements, t, null), Jt(t))
      return ct(t), !0;
    const m = q(t.nodeName);
    if (dt(O.uponSanitizeElement, t, {
      tagName: m,
      allowedTags: o
    }), xt && t.hasChildNodes() && !De(t.firstElementChild) && J(/<[/\w!]/g, t.innerHTML) && J(/<[/\w!]/g, t.textContent) || t.nodeType === Dt.progressingInstruction || xt && t.nodeType === Dt.comment && J(/<[/\w]/g, t.data))
      return ct(t), !0;
    if (!(N.tagCheck instanceof Function && N.tagCheck(m)) && (!o[m] || M[m])) {
      if (!M[m] && xe(m) && (A.tagNameCheck instanceof RegExp && J(A.tagNameCheck, m) || A.tagNameCheck instanceof Function && A.tagNameCheck(m)))
        return !1;
      if (jt && !lt[m]) {
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
    return t instanceof f && !Cn(t) || (m === "noscript" || m === "noembed" || m === "noframes") && J(/<\/no(script|embed|frames)/i, t.innerHTML) ? (ct(t), !0) : (yt && t.nodeType === Dt.text && (c = t.textContent, Ut([G, V, Q], (F) => {
      c = Ct(c, F, " ");
    }), t.textContent !== c && (Lt(e.removed, {
      element: t.cloneNode()
    }), t.textContent = c)), dt(O.afterSanitizeElements, t, null), !1);
  }, Ie = function(t, c, m) {
    if (P[c] || Te && (c === "id" || c === "name") && (m in a || m in Ln))
      return !1;
    if (!(Z && !P[c] && J(rt, c))) {
      if (!(H && J(It, c))) {
        if (!(N.attributeCheck instanceof Function && N.attributeCheck(c, t))) {
          if (!T[c] || P[c]) {
            if (
              // First condition does a very basic check if a) it's basically a valid custom element tagname AND
              // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
              !(xe(t) && (A.tagNameCheck instanceof RegExp && J(A.tagNameCheck, t) || A.tagNameCheck instanceof Function && A.tagNameCheck(t)) && (A.attributeNameCheck instanceof RegExp && J(A.attributeNameCheck, c) || A.attributeNameCheck instanceof Function && A.attributeNameCheck(c, t)) || // Alternative, second condition checks if it's an `is`-attribute, AND
              // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
              c === "is" && A.allowCustomizedBuiltInElements && (A.tagNameCheck instanceof RegExp && J(A.tagNameCheck, m) || A.tagNameCheck instanceof Function && A.tagNameCheck(m)))
            ) return !1;
          } else if (!Xt[c]) {
            if (!J(St, Ct(m, mt, ""))) {
              if (!((c === "src" || c === "xlink:href" || c === "href") && t !== "script" && qn(m, "data:") === 0 && be[t])) {
                if (!(Ee && !J(Y, Ct(m, mt, "")))) {
                  if (m)
                    return !1;
                }
              }
            }
          }
        }
      }
    }
    return !0;
  }, xe = function(t) {
    return t !== "annotation-xml" && re(t, qt);
  }, Me = function(t) {
    dt(O.beforeSanitizeAttributes, t, null);
    const {
      attributes: c
    } = t;
    if (!c || Jt(t))
      return;
    const m = {
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
      } = X, bt = q(z), te = pt;
      let j = z === "value" ? te : Vn(te);
      if (m.attrName = bt, m.attrValue = j, m.keepAttr = !0, m.forceKeepAttr = void 0, dt(O.uponSanitizeAttribute, t, m), j = m.attrValue, Ae && (bt === "id" || bt === "name") && (ht(z, t), j = An + j), xt && J(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, j)) {
        ht(z, t);
        continue;
      }
      if (bt === "attributename" && re(j, "href")) {
        ht(z, t);
        continue;
      }
      if (m.forceKeepAttr)
        continue;
      if (!m.keepAttr) {
        ht(z, t);
        continue;
      }
      if (!_e && J(/\/>/i, j)) {
        ht(z, t);
        continue;
      }
      yt && Ut([G, V, Q], (Pe) => {
        j = Ct(j, Pe, " ");
      });
      const ke = q(t.nodeName);
      if (!Ie(ke, bt, j)) {
        ht(z, t);
        continue;
      }
      if (R && typeof w == "object" && typeof w.getAttributeType == "function" && !at)
        switch (w.getAttributeType(ke, bt)) {
          case "TrustedHTML": {
            j = R.createHTML(j);
            break;
          }
          case "TrustedScriptURL": {
            j = R.createScriptURL(j);
            break;
          }
        }
      if (j !== te)
        try {
          at ? t.setAttributeNS(at, z, j) : t.setAttribute(z, j), Jt(t) ? ct(t) : We(e.removed);
        } catch {
          ht(z, t);
        }
    }
    dt(O.afterSanitizeAttributes, t, null);
  }, On = function h(t) {
    let c = null;
    const m = Re(t);
    for (dt(O.beforeSanitizeShadowDOM, t, null); c = m.nextNode(); )
      dt(O.uponSanitizeShadowNode, c, null), Ne(c), Me(c), c.content instanceof i && h(c.content);
    dt(O.afterSanitizeShadowDOM, t, null);
  };
  return e.sanitize = function(h) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, c = null, m = null, F = null, X = null;
    if (Kt = !h, Kt && (h = "<!-->"), typeof h != "string" && !De(h))
      if (typeof h.toString == "function") {
        if (h = h.toString(), typeof h != "string")
          throw Ot("dirty is not a string, aborting");
      } else
        throw Ot("toString is not a function");
    if (!e.isSupported)
      return h;
    if (Vt || Zt(t), e.removed = [], typeof h == "string" && (wt = !1), wt) {
      if (h.nodeName) {
        const pt = q(h.nodeName);
        if (!o[pt] || M[pt])
          throw Ot("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (h instanceof p)
      c = Oe("<!---->"), m = c.ownerDocument.importNode(h, !0), m.nodeType === Dt.element && m.nodeName === "BODY" || m.nodeName === "HTML" ? c = m : c.appendChild(m);
    else {
      if (!Et && !yt && !gt && // eslint-disable-next-line unicorn/prefer-includes
      h.indexOf("<") === -1)
        return R && kt ? R.createHTML(h) : h;
      if (c = Oe(h), !c)
        return Et ? null : kt ? ot : "";
    }
    c && Yt && ct(c.firstChild);
    const z = Re(wt ? h : c);
    for (; F = z.nextNode(); )
      Ne(F), Me(F), F.content instanceof i && On(F.content);
    if (wt)
      return h;
    if (Et) {
      if (Mt)
        for (X = B.call(c.ownerDocument); c.firstChild; )
          X.appendChild(c.firstChild);
      else
        X = c;
      return (T.shadowroot || T.shadowrootmode) && (X = W.call(r, X, !0)), X;
    }
    let at = gt ? c.outerHTML : c.innerHTML;
    return gt && o["!doctype"] && c.ownerDocument && c.ownerDocument.doctype && c.ownerDocument.doctype.name && J(rn, c.ownerDocument.doctype.name) && (at = "<!DOCTYPE " + c.ownerDocument.doctype.name + `>
` + at), yt && Ut([G, V, Q], (pt) => {
      at = Ct(at, pt, " ");
    }), R && kt ? R.createHTML(at) : at;
  }, e.setConfig = function() {
    let h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    Zt(h), Vt = !0;
  }, e.clearConfig = function() {
    At = null, Vt = !1;
  }, e.isValidAttribute = function(h, t, c) {
    At || Zt({});
    const m = q(h), F = q(t);
    return Ie(m, F, c);
  }, e.addHook = function(h, t) {
    typeof t == "function" && Lt(O[h], t);
  }, e.removeHook = function(h, t) {
    if (t !== void 0) {
      const c = zn(O[h], t);
      return c === -1 ? void 0 : Gn(O[h], c, 1)[0];
    }
    return We(O[h]);
  }, e.removeHooks = function(h) {
    O[h] = [];
  }, e.removeAllHooks = function() {
    O = je();
  }, e;
}
an();
function io(n) {
  if (n && typeof n.getBoundingClientRect == "function") {
    const { bottom: e, top: a } = n.getBoundingClientRect(), { offsetTop: r } = n;
    if (a < 0 && e > 0) {
      const s = n.style;
      n.style = `${s};transition: height 0s !important; overflow:hidden; height:${e}px!important;max-height:${e}px!important`, window.scrollTo({ behavior: "instant", top: r }), setTimeout(() => {
        n.style = s, window.scrollTo({
          behavior: "smooth",
          top: n.offsetTop - e / 2
        });
      }, 50);
    }
  }
}
var sn = { exports: {} }, ce, $e;
function so() {
  if ($e) return ce;
  $e = 1;
  var n = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ce = n, ce;
}
var ue, Xe;
function lo() {
  if (Xe) return ue;
  Xe = 1;
  var n = so();
  function e() {
  }
  function a() {
  }
  return a.resetWarningCache = e, ue = function() {
    function r(l, p, f, d, g, y) {
      if (y !== n) {
        var E = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw E.name = "Invariant Violation", E;
      }
    }
    r.isRequired = r;
    function s() {
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
      arrayOf: s,
      element: r,
      elementType: r,
      instanceOf: s,
      node: r,
      objectOf: s,
      oneOf: s,
      oneOfType: s,
      shape: s,
      exact: s,
      checkPropTypes: a,
      resetWarningCache: e
    };
    return i.PropTypes = i, i;
  }, ue;
}
sn.exports = lo()();
var co = sn.exports;
const tt = /* @__PURE__ */ Hn(co);
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
var uo = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(n) {
  (function() {
    var e = {}.hasOwnProperty;
    function a() {
      for (var i = "", l = 0; l < arguments.length; l++) {
        var p = arguments[l];
        p && (i = s(i, r(p)));
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
      var l = "";
      for (var p in i)
        e.call(i, p) && i[p] && (l = s(l, p));
      return l;
    }
    function s(i, l) {
      return l ? i ? i + " " + l : i + l : i;
    }
    n.exports ? (a.default = a, n.exports = a) : window.classNames = a;
  })();
})(uo);
({
  ...Nt.propTypes
});
const ln = ({ children: n, className: e = "container", ...a }) => /* @__PURE__ */ React.createElement("div", { className: e, ...a }, /* @__PURE__ */ React.createElement("div", { className: "row" }, n));
ln.propTypes = {
  children: Nt.propTypes.children
};
({
  ...ln.propTypes
});
Nt.propTypes.children, tt.oneOf(["0", "3", "4", "6", "8", "9", "12"]);
Nt.propTypes.children;
function cn() {
  var R, ot;
  const a = ["asu-header", "asuHeader"].find((D) => document.getElementById(D)), r = document.getElementById(a), s = document.getElementById("uds-anchor-menu");
  if (!s || !r) {
    console.warn(
      "Anchor menu initialization failed: required elements not found"
    );
    return;
  }
  const i = s.parentNode, l = s.nextSibling, p = Array.from(s.getElementsByClassName("nav-link")), f = /* @__PURE__ */ new Map();
  let d = window.scrollY, g = !1;
  const y = ((R = document.getElementById("toolbar-bar")) == null ? void 0 : R.offsetHeight) || 0, E = ((ot = document.getElementById("toolbar-item-administration-tray")) == null ? void 0 : ot.offsetHeight) || 0, w = y + E, b = s.getBoundingClientRect().top + window.scrollY - w;
  for (let D of p) {
    const U = D.getAttribute("href");
    if (!U || !U.startsWith("#"))
      continue;
    const B = U.replace("#", ""), x = document.getElementById(B);
    x ? f.set(D, x) : console.warn(`Anchor menu: target element "${B}" not found`);
  }
  window.scrollY > b && (r.appendChild(s), g = !0, s.classList.add("uds-anchor-menu-attached"));
  function v(D, U = 0) {
    if (!D || U > 10)
      return 0;
    if (D.offsetHeight === 0 || D.offsetWidth === 0)
      return v(D.parentElement, U + 1);
    const B = D.getBoundingClientRect(), x = window.innerHeight || document.documentElement.clientHeight, W = window.innerWidth || document.documentElement.clientWidth, O = B.bottom - B.top, G = B.right - B.left, V = O * G, Q = Math.min(x, B.bottom) - Math.max(0, B.top), rt = Math.min(W, B.right) - Math.max(0, B.left);
    return Q * rt / V * 100;
  }
  const S = function() {
    let D = 0, U = null;
    if (p.forEach((O) => {
      const G = f.get(O);
      if (!G)
        return;
      const V = v(G);
      V > 0 && V > D && (D = V, U = G.id);
    }), U) {
      const O = document.querySelector(
        '[href="#' + U + '"]'
      );
      O && O.classList.add("active"), s.querySelectorAll(
        'a.nav-link:not([href="#' + U + '"])'
      ).forEach(function(G) {
        G.classList.remove("active");
      });
    }
    const B = s.getBoundingClientRect().top, x = r.getBoundingClientRect().bottom, W = window.scrollY > d;
    if (W && x >= B && (g || (r.appendChild(s), g = !0, s.classList.add("uds-anchor-menu-attached"))), !W && g) {
      const O = r.getBoundingClientRect().bottom, G = s.getBoundingClientRect().top;
      (window.scrollY <= b || O < G) && (i.insertBefore(s, l), g = !1, s.classList.remove("uds-anchor-menu-attached"));
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
      const x = window.innerHeight, W = Math.round(x * 0.25);
      let G = U.getBoundingClientRect().top + window.scrollY - W;
      window.scrollTo({
        top: G,
        behavior: "smooth"
      });
      const V = s.querySelector(".nav-link.active");
      V && V.classList.remove("active"), B.target.classList.add("active");
    });
}
k.on(window, "load.uds.anchor-menu", cn);
function un() {
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
  un
);
function fn() {
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
  ], a = ["Su", "M", "Tu", "W", "Th", "F", "Sa"], s = {
    month: (/* @__PURE__ */ new Date()).getMonth(),
    year: (/* @__PURE__ */ new Date()).getFullYear()
  }, i = (f, d) => {
    const g = /* @__PURE__ */ new Date(), y = [], E = new Date(f, d).getDay(), w = new Date(f, d + 1, 0).getDate(), b = new Date(f, d, 0).getDate();
    for (let _ = 1; _ <= E; _++) {
      const v = b - E + _, S = new Date(
        s.year,
        s.month - 1,
        v
      ).toLocaleString();
      y.push({ key: S, date: v, monthClass: "prev" });
    }
    for (let _ = 1; _ <= w; _++) {
      const v = new Date(s.year, s.month, _).toLocaleString();
      _ === g.getDate() && s.month === g.getMonth() && s.year === g.getFullYear() ? y.push({
        key: v,
        date: _,
        monthClass: "current",
        todayClass: "today"
      }) : y.push({ key: v, date: _, monthClass: "current" });
    }
    if (y.length < 42) {
      const _ = 42 - y.length;
      for (let v = 1; v <= _; v++) {
        const S = new Date(s.year, s.month + 1, v).toLocaleString();
        y.push({ key: S, date: v, monthClass: "next" });
      }
    }
    return y;
  }, l = () => {
    const f = document.getElementById("calendar");
    f && (f.innerHTML = `
      <h2><span class="highlight-black">${n[s.month]} ${s.year}</span></h2>
      <div class="calendar-grid">
        <div class="heading desktop">
          ${e.map((d) => `<p>${d}</p>`).join("")}
        </div>
        <div class="heading mobile">
          ${a.map((d) => `<p>${d}</p>`).join("")}
        </div>
        <div class="body">
          ${i(s.year, s.month).map(
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
    var d = new Date(s.year, s.month + f);
    s.year = d.getFullYear(), s.month = d.getMonth(), l();
  })(0);
}
k.on(window, "load.uds.calendar", fn);
function ge() {
  const n = document.querySelectorAll(".card-body");
  if (n.length === 0 && 0 < 3) {
    setTimeout(() => ge(), 500);
    return;
  }
  if (n.length === 0) {
    console.warn("No .card-body found after 3 retries.");
    return;
  }
  n.forEach((a, r) => {
    const s = a.querySelector("div p"), i = s.textContent, l = window.getComputedStyle(a), p = parseInt(l.webkitLineClamp || l.lineClamp), f = parseFloat(l.lineHeight), d = parseFloat(l.fontSize), g = isNaN(f) ? parseFloat(l.lineHeight) * d : f, y = p * g;
    if (s.offsetHeight >= y) {
      let E = "";
      const w = i.split(" ");
      let b = 0, _ = "";
      for (; b < w.length && fo(
        _ + (_ ? " " : "") + w[b],
        s
      ) <= y; )
        _ += (_ ? " " : "") + w[b], b++;
      E = _ + "...";
      const v = `visible-text-${Math.random().toString(36).substring(7)}`, S = document.createElement("div");
      S.id = v, S.textContent = E, S.style.position = "absolute", S.style.top = `${s.offsetTop}px`, S.style.left = `${s.offsetLeft}px`, S.style.width = `${s.offsetWidth}px`, S.style.height = `${s.offsetHeight}px`, S.style.opacity = "0", S.style.pointerEvents = "none", S.style.zIndex = "1", a.appendChild(S), s.setAttribute("aria-describedby", v), s.setAttribute("aria-hidden", "true");
    }
  });
}
function fo(n, e) {
  const a = document.createElement(e.tagName);
  a.style.font = window.getComputedStyle(e).font, a.style.width = window.getComputedStyle(e).width, a.style.whiteSpace = "pre-wrap", a.textContent = n, document.body.appendChild(a);
  const r = a.offsetHeight;
  return document.body.removeChild(a), r;
}
k.on(window, "load.uds.card-bodies", ge);
function dn() {
  const n = document.querySelector(".info-layer"), e = document.getElementById("dispatch");
  k.on(e, "click", function() {
    n == null || n.classList.toggle("active");
  });
}
k.on(window, "load.uds.ranking-card", dn);
function pn() {
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
k.on(window, "load.uds.chart", pn);
function mn() {
  function n({ target: e }) {
    const a = e.getAttribute("href");
    e.getAttribute("data-bs-toggle") !== "collapse" || !a || !a.includes("#") || io(
      document.querySelector(".collapsing")
    );
  }
  k.on(document, "click.uds.collapse", n);
}
k.on(window, "load.uds.collapse", mn);
function he() {
  var e, a, r, s;
  const n = (i) => {
    window.dataLayer = window.dataLayer || [];
    const { dataLayer: l } = window;
    l && l.push(i);
  };
  (e = document.querySelectorAll("[data-ga-header]")) == null || e.forEach(
    (i) => i.addEventListener("click", () => {
      const l = i.getAttribute("data-ga-header-event") || "link";
      let p = i.getAttribute("data-ga-header-action") || "click";
      const f = i.getAttribute("aria-expanded");
      f && (p = f === "false" ? "open" : "close");
      const d = i.getAttribute("data-ga-header-type") || "internal link", g = i.getAttribute("data-ga-header-section") || "main navbar", y = i.getAttribute("data-ga-header") || "", E = i.getAttribute("data-ga-header-component");
      n({
        name: "onclick",
        event: l.toLowerCase(),
        action: p.toLowerCase(),
        type: d.toLowerCase(),
        section: g.toLowerCase(),
        region: "navbar",
        text: y.toLowerCase(),
        ...E && {
          component: E.toLowerCase()
        }
      });
    })
  ), (a = document.querySelectorAll("[data-ga-input-header-event]")) == null || a.forEach(
    (i) => i.addEventListener("change", (l) => {
      const p = i.getAttribute("data-ga-input-header-event") || "", f = l.target.value || "";
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
    (i) => i.addEventListener("click", () => {
      const l = i.getAttribute("data-ga-name") || "", p = i.getAttribute("data-ga-event") || "";
      let f = i.getAttribute("data-ga-action") || "";
      const d = i.getAttribute("aria-expanded");
      d && (f = d === "false" ? "open" : "close");
      const g = i.getAttribute("data-ga-type") || "", y = i.getAttribute("data-ga-section") || "", E = i.getAttribute("data-ga-region") || "", w = i.getAttribute("data-ga") || "", b = i.getAttribute("data-ga-component") || "";
      n({
        name: l.toLowerCase(),
        event: p.toLowerCase(),
        action: f.toLowerCase(),
        type: g.toLowerCase(),
        section: y.toLowerCase(),
        region: E.toLowerCase(),
        text: w.toLowerCase(),
        component: b.toLowerCase()
      });
    })
  ), (s = document.querySelectorAll("[data-ga-input]")) == null || s.forEach(
    (i) => i.addEventListener("change", (l) => {
      const p = i.getAttribute("data-ga-input-name") || "", f = i.getAttribute("data-ga-input-action") || "", d = i.getAttribute("data-ga-input") || "", g = i.getAttribute("data-ga-input-region") || "", y = i.getAttribute("data-ga-input-section") || "";
      let E = i.getAttribute("data-ga-input-event") || "", w;
      switch (d) {
        case "checkbox":
          w = l.target.labels[0].textContent || "", E = l.target.checked ? E : "deselect";
          break;
        case "radio button":
          w = l.target.labels[0].textContent || "";
          break;
        case "blur":
          w = l.target.value.toLowerCase() || "";
          break;
        default:
          w = [...l.target.selectedOptions].map((b) => b.value).join(",") || "";
          break;
      }
      n({
        name: p.toLowerCase(),
        event: E.toLowerCase(),
        action: f.toLowerCase(),
        type: d.toLowerCase(),
        section: y.toLowerCase(),
        region: g.toLowerCase(),
        text: w.toLowerCase()
      });
    })
  ), document.querySelectorAll("[data-ga-footer]").forEach(
    (i) => i.addEventListener("focus", () => {
      const l = {
        type: i.getAttribute("data-ga-footer-type").toLowerCase(),
        section: i.getAttribute("data-ga-footer-section").toLowerCase(),
        text: i.getAttribute("data-ga-footer").toLowerCase()
      };
      n({
        event: "link",
        action: "click",
        name: "onclick",
        region: "footer",
        ...l
      });
    })
  );
}
window.initDataLayer = window.initDataLayer || he;
k.on(window, "load.uds.data-layer", he);
const ye = () => {
  const n = () => {
    const e = document.getElementById("asu-header");
    window.scrollY > (e == null ? void 0 : e.getBoundingClientRect().top) ? e == null || e.classList.add("scrolled") : e == null || e.classList.remove("scrolled");
  };
  k.on(window, "scroll.uds.header", n);
};
window.initGlobalHeader = window.initGlobalHeader || ye;
k.on(window, "load.uds.global-header", ye);
function gn() {
  const n = ".uds-video-hero", e = n + " video", a = n + " #playHeroVid", r = n + " #pauseHeroVid", s = "click", i = "block", l = "none", p = document.querySelector(e), f = document.querySelector(a), d = document.querySelector(r);
  function g(b) {
    b.paused ? b.play() : b.pause();
  }
  function y(b, _) {
    getComputedStyle(b).display === l ? (_.style.display = l, b.style.display = i, b.focus()) : (b.style.display = l, _.style.display = i, _.focus());
  }
  function E(b) {
    b.stopPropagation(), y(f, d), g(p);
  }
  function w(b) {
    b.stopPropagation(), y(f, d), g(p);
  }
  d == null || d.addEventListener(s, E), f == null || f.addEventListener(s, w);
}
k.on(window, "load.uds.heroes-video", gn);
const hn = () => {
  const e = () => {
    document.querySelectorAll(".parallax-container").forEach((l) => {
      const p = l.querySelector("img"), f = l.offsetHeight - p.height * 1.2, d = p.dataset.parallaxType === "scroll-to" ? window.innerHeight : window.innerHeight + l.offsetHeight, g = l.getBoundingClientRect().top, E = (window.innerHeight - g) / d;
      if (E < 0)
        p.style.top = f + "px";
      else if (E > 1)
        p.style.top = "0";
      else {
        const w = f * (1 - E);
        p.style.top = w + "px";
      }
    });
  }, a = (l) => {
    const p = l.parentNode, f = l.width, d = l.height;
    let g = p.offsetWidth / f, y = 0, E = d * g, w = f * g;
    const b = +l.dataset.parallaxFactor || 1.2;
    !l.dataset.noScale && E < p.offsetHeight * b && (g = p.offsetHeight * b / E, E *= g, w *= g, y = (w - p.offsetWidth) / 2 * -1), l.style.height = E + "px", l.style.left = y + "px";
  }, r = () => {
    document.querySelectorAll(".parallax-container img").forEach((l, p) => {
      l.complete ? a(l) : l.onload = () => a(l);
    });
  }, s = (l) => {
    const { dataLayer: p } = window, f = {
      event: "link",
      action: "click",
      name: "onclick",
      type: "internal link",
      region: "main content",
      ...l
    };
    p && p.push(f);
  };
  document.querySelectorAll("[data-ga-image-parallax]").forEach(
    (l) => k.on(l, "focus.uds.image-parallax", () => {
      const p = {
        section: l.getAttribute("data-ga-image-parallax-section").toLowerCase(),
        text: l.getAttribute("data-ga-image-parallax").toLowerCase()
      };
      s(p);
    })
  ), r(), k.on(window, "resize.uds.image-parallax", r), k.on(window, "scroll.uds.image-parallax", e);
};
k.on(window, "load.uds.image-parallax", hn);
function yn() {
  var n, e;
  (n = document.getElementById("openModalButton")) == null || n.addEventListener("click", function() {
    document.getElementById("uds-modal").classList.add("open");
  }), (e = document.getElementById("closeModalButton")) == null || e.addEventListener("click", function() {
    document.getElementById("uds-modal").classList.remove("open");
  });
}
k.on(window, "load.uds.modals", yn);
function En() {
  const n = "a", e = "button", a = ".nav-tabs", r = ".nav-item", s = ".uds-tabbed-panels", i = ".scroll-control-prev", l = ".scroll-control-next", p = "click", f = "scroll", d = "focus", g = "none", y = "block", b = (_) => {
    [n, e].includes(_.target.localName) && _.target.focus();
  };
  document.querySelectorAll(s).forEach((_) => {
    const v = _.querySelector(a), S = _.querySelectorAll(r), $ = _.querySelector(
      i
    ), K = _.querySelector(
      l
    );
    let R = 0;
    _.addEventListener(p, function(x) {
      b(x);
    });
    const ot = (x, W, O) => {
      W.preventDefault();
      const V = getComputedStyle(v).left.replace("px", "");
      let Q = parseInt(V, 10);
      O === 1 && R > 0 && (R -= 1), R < S.length - 1 && O == -1 && (R += 1), v.dataset.scrollPosition = R, Q = 0;
      for (var rt = 0; rt < R; rt++)
        Q += S[rt].offsetWidth + parseInt(getComputedStyle(S[rt]).marginLeft, 10) + parseInt(getComputedStyle(S[rt]).marginRight, 10);
      v.scrollLeft = Q, D(x, Q);
    }, D = (x, W) => {
      const O = v.scrollWidth - W;
      R == 0 ? $.style.display = g : $.style.display = y, O <= _.offsetWidth ? K.style.display = g : K.style.display = y;
    };
    v.addEventListener(f, (x) => {
      const W = x.target.scrollLeft, O = v.offsetWidth + W + 10 >= v.scrollWidth;
      $.style.display = W < 10 ? g : y, K.style.display = O ? g : y;
    }), S.forEach((x) => {
      x.addEventListener(d, function(W) {
        x.scrollIntoView();
      });
    }), K.addEventListener(p, function(x) {
      window.innerWidth > 992 && ot(this, x, -1);
    }), $.addEventListener(p, function(x) {
      window.innerWidth > 992 && ot(this, x, 1);
    }), $.style.display = g;
    const U = v.scrollWidth, B = _.offsetWidth;
    U <= B && (K.style.display = g);
  });
}
k.on(window, "load.uds.tabs", En);
function _n() {
  function n() {
    const r = ".uds-table-fixed-wrapper", s = ".uds-table.uds-table-fixed table", i = ".scroll-control.previous";
    document.querySelectorAll(r).forEach((p, f) => {
      const d = p.querySelector(s);
      d.setAttribute("id", "uds-table-" + f);
      const g = d.querySelector("tbody tr > *"), y = p.querySelector(i);
      y.style.left = g.offsetWidth + "px";
    });
  }
  function e() {
    const r = ".uds-table-fixed", s = ".uds-table-fixed-wrapper", i = ".scroll-control.previous", l = ".scroll-control.next";
    document.querySelectorAll(s).forEach((f, d) => {
      const g = f.querySelector(r), y = f.querySelector(i), E = f.querySelector(l);
      ["click", "focus"].forEach((w) => {
        k.on(y, w, function() {
          g.scrollLeft -= 100;
        }), k.on(E, w, function() {
          g.scrollLeft += 100;
        });
      });
    });
  }
  function a(r, s) {
    let i;
    return (...l) => {
      clearTimeout(i), i = setTimeout(() => {
        r.apply(this, l);
      }, s);
    };
  }
  n(), e(), k.on(window, "resize", function() {
    a(n, 100)();
  });
}
k.on(window, "load.uds.fixed-table", _n);
function Tn() {
  const n = ".uds-video-player", e = n + " video", a = n + " .uds-video-btn-play", r = n + " .uds-video-overlay", s = "click", i = "ended", l = "flex", p = "none", f = document.querySelector(e), d = document.querySelector(r), g = document.querySelector(a);
  function y(S) {
    S.style.display === p ? S.style.display = l : S.style.display = p;
  }
  function E(S) {
    S.paused ? S.play() : S.pause();
  }
  function w(S) {
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
  function v(S) {
    y(d);
  }
  f == null || f.addEventListener(s, w), g == null || g.addEventListener(s, b), d == null || d.addEventListener(s, _), f == null || f.addEventListener(i, v);
}
k.on(window, "load.uds.video", Tn);
const po = {
  // Banner, // code updated to use bootstrap alert so we don't need this
  initAnchorMenu: cn,
  initBlockquoteAnimation: un,
  initCalendar: fn,
  initCollapse: mn,
  initChart: pn,
  initDataLayer: he,
  initFixedTable: _n,
  initGlobalHeader: ye,
  initHeroesVideo: gn,
  initImageParallax: hn,
  initModals: yn,
  initRankingCard: dn,
  initTabbedPanels: En,
  initVideo: Tn,
  initCardBodies: ge
};
export {
  po as default
};
//# sourceMappingURL=unity-bootstrap.es.js.map
